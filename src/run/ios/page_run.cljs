(ns run.ios.page-run
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text
                                   touchable-opacity
                                   touchable-without-feedback
                                   animated
                                   dimensions
                                   alert]]
            [run.subs]
            [run.events]
            [re-frame.core :refer [subscribe dispatch]]
            [run.common.schema :refer [realm]]
            [run.common.colors :as c]
            [run.common.core :refer [icon]]
            [run.common.utils :refer [wrap-navigation-options
                                      format-float]]))

;; This is the page when you running.
;; Show a map and control elements.

(def MapView (js/require "react-native-maps"))
(def map-view (r/adapt-react-class MapView))
(def marker (r/adapt-react-class (.-Marker MapView)))
(def map-animated (r/adapt-react-class (.-Animated MapView)))
(def marker-animated (r/adapt-react-class (.. MapView -Marker -Animated)))
(def polyline (r/adapt-react-class (.-Polyline MapView)))
(def AnimatedRegion (.-AnimatedRegion MapView))

(def Icon (js/require "react-native-vector-icons/FontAwesome"))

(declare styles)
(declare  control-run info)

(def watch-option #js{:enabelHighAccuracy true
                      :timeout 5000
                      :maximumAge 0})

(def screen (.get dimensions "window"))
(def aspectRatio (/ (.-height screen) (.-width screen)))
(def latitudeDelta 0.0922)
(def longitudeDelta (* aspectRatio latitudeDelta))
(def initial-lat 31.78825)
(def initial-long  121.4324 )
(def pi 3.14159265)
(def R 6371)
;;helper functions

(defn change-title
  [s]
  (case s
    "idle" "start"
    "running" "pause"
    "paused" "resume"))

(defn to-rad [x] (* pi (/ x 180)))
(defn square [x] (* x x))

(defn calc-dist
  "c1 is pre coords.
  are js objects."
  [c1 c2]
  (if (.hasOwnProperty  c1 "latitude")
    (let [ lat1 (.-latitude c1)
          lon1 (.-longitude c1)
          lat2 (.-latitude c2)
          lon2 (.-longitude c2)
          sin (.-sin js/Math)
          cos (.-cos js/Math)
          atan2 (.-atan2 js/Math)
          sqrt (.-sqrt js/Math)
          dLat (to-rad (- lat2 lat1))
          dLon (to-rad (- lon2 lon1))
          a (+ ((comp square sin #(/ % 2)) dLat)
               (* (cos (to-rad lat1)) (cos (to-rad lat2))
                  ((comp square sin  #(/ % 2)) dLon)))
          c (* 2 (atan2 (sqrt a) (sqrt (- 1 a))))
          d (* R c)]
      d)
    0))
;; main component


(defn page-run
  [props]
  (let [map-ref (subscribe [:get-map-ref])
        state (r/atom {:hooked false
                       :seconds 0
                       :timer-id nil
                       :region (AnimatedRegion. #js{:latitude initial-lat
                                                    :longitude initial-long
                                                    :latitudeDelta latitudeDelta
                                                    :longitudeDelta longitudeDelta})
                       :old-coords #js{}
                       :run-state "idle"
                       :run-dist 0
                       :coord-id 0
                       :coords []
                       :has-run false
                       :ref nil
                       :marker-source #js{}})
        seconds (r/cursor state [:seconds])
        run-state (r/cursor state [:run-state] ) ; one of ["idle" "running" "paused"] ;;;;;;;;
        coord-id (r/cursor state [:line-id])
        coords (r/cursor state [:coords])
        old-coords (r/cursor state [:old-coords])
        run-dist (r/cursor state [:run-dist])
        region (r/cursor state [:region])
        has-run (r/cursor state [:has-run])
        ref (r/cursor state [:ref])
        marker-source (r/cursor state [:marker-source])
        take-snapshot (fn [cb] (.takeSnapshot @ref #js{:latitude (.. @region -latitude -_value)
                                                      :longitude (.. @region -longitude -_value)
                                                      :latitudeDelta 0.02
                                                      :longitudeDelta (* 0.02 aspectRatio)}
                                             cb))
        handler (fn [pos]
                  (print "fetch location..." (.. pos -coords -latitude))
                  (let [now  #js{:latitude (.. pos -coords -latitude)
                                 :longitude (.. pos -coords -longitude)}]
                    (print  (calc-dist @old-coords now) )
                    (swap! run-dist + (calc-dist @old-coords now))
                    (reset! old-coords now)
                    (swap! coord-id inc)
                    (swap! coords conj now)
                    (-> @region
                        (.timing now)
                        (.start))))
        get-pos #(.getCurrentPosition
                  (.-geolocation js/navigator)
                  handler)
        watch (fn [] (.watchPosition (.-geolocation js/navigator)
                                    handler #(print %) watch-option))
        id (watch)]
    (-> (.getImageSource Icon "dot-circle-o" 20 "red")
        (.then #(reset! marker-source %)))
    (print "watch id" id)
    (fn [props]
      (if (= @run-state "running")
        (if (-> @state :timer-id nil?)
          (swap! state assoc :timer-id (js/setInterval #(swap! seconds inc) 1000)))
        (do (some-> (:timer-id @state) js/clearInterval)
            (swap! state assoc :timer-id nil)))
      [view {:style (:container styles)}
       [map-animated {:ref (fn [r]
                             (if-not (:hooked @state)
                               (do (swap! state assoc :hooked true)
                                   (dispatch [:set-map-ref r] ))))
                      :style (:map styles)
                      :initial-region {:latitude initial-lat
                                       :longitude initial-long
                                       :latitude-delta latitudeDelta
                                       :longitude-delta longitudeDelta}
                      :region @region
                      }
        [polyline {:coordinates @coords
                   :stroke-color "#40E942"
                   :stroke-width 5}]
        [marker-animated {:image (:marker-source @state)
                          :coordinate @region}]]
       [touchable-opacity {:style (:close-icon styles)
                           :on-press (fn []
                                       (let [quit #(do (.clearWatch (.-geolocation js/navigator) id)
                                                       (.goBack (:navigation props)))]
                                         (if @has-run (.alert alert "quit?" "You have started a run. Discard the data?"
                                                              #js[#js{:text "cancel" :onPress #(print "cancel quit")}
                                                                  #js{:text "discard" :onPress quit}])
                                             (quit)))) }
        [icon {:name "chevron-left" :size 20 :color c/button-run}]]
       [view {:style (:control styles)}
        [info @run-dist @seconds]
        [view {:style (:h-box styles)}
         [control-run {:run-state @run-state
                       :start-fn #(do (reset! has-run true)
                                      (reset! run-state "running"))
                       :pause-fn #(reset! run-state "paused")
                       :resume-fn #(reset! run-state "running")
                       :stop-fn (fn []
                                  (let [go-back (.-goBack (:navigation props))
                                        ref @map-ref]
                                    (swap! state
                                           assoc :run-state "idle")
                                    (print "clear watch:" id)
                                    (.clearWatch (.-geolocation js/navigator) id)
                                    (js/clearInterval (:timer-id @state))
                                    (.takeSnapshot (.getNode ref)
                                                   300 300
                                                   #js{:latitude (.. @region -latitude -_value)
                                                       :longitude (.. @region -longitude -_value)
                                                       :latitudeDelta 0.02
                                                       :longitudeDelta (* 0.02 aspectRatio)}
                                                   (fn [e data]
                                                     (.write realm #(do
                                                                      (.create realm "History" (clj->js {:id (str (random-uuid))
                                                                                                         :date (js/Date.)
                                                                                                         :distance @run-dist
                                                                                                         :duration @seconds
                                                                                                         :snapshot (.-uri data)
                                                                                                         :coordinates @coords}))
                                                                      (go-back)))))))
                       }]]
        ]])))

(def PageRun
  (wrap-navigation-options page-run
                           {:title "run"
                            :header {:visible false}} ))

;; implements


(defn control-run
  "props keys:
  :run-state
  :start-fn
  :pause-fn
  :resume-fn
  :stop-fn"
  [props]
  (fn [props]
    [view {:style {:flex-direction "row"}}
     [touchable-opacity
      {:style (:button-run styles)
       :on-press #(case (:run-state props)
                    "idle" ((:start-fn props))
                    "running" ((:pause-fn props))
                    "paused" ((:resume-fn props)))
       :active-opacity 0.8}
      [text {:style (:start-text styles)}
       (case (:run-state props)
         "idle" "start"
         "running" "pause"
         "paused" "resume")]]
     [touchable-opacity {:style (assoc (:button-stop styles)
                                       :width (if (= "paused" (:run-state props)) ; TODO: use display not work. why?
                                                60
                                                0))
                         :on-press (:stop-fn props)}

      [text {:style (:start-text styles)} "stop"]]]))

(defn format-duration
  [t]
  (let  [h  (quot t 60)
         ht (if (< h 10) (str "0" h) (str h))
         s (rem t 60)
         st (if (< s 10) (str "0" s) (str s))]
    (str ht ":" st)))

(defn info
  "dis: distance in kilometer.
  time: time in seconds"
  [dis time]
  [view {:style (:info styles)}
   [view {:style (:info-item styles)}
    [icon {:name "superpowers" :size 25 :color "white"}]
    [text {:style (:info-text styles)}
     (str (format-float dis 2) " km")]]
   [view {:style (:info-item styles)}
    [icon {:name "clock-o" :size 25 :color "white"}]
    [text {:style (:info-text styles)} (format-duration time)]]]
  )


;; styles
(def styles {:container {:flex 1
                         :flex-direction "column"
                         :align-items "stretch"}
             :map {:height 320}
             :close-icon {:position "absolute"
                          :background-color "rgba(0,0,0,0)"
                          :top 20
                          :width 20
                          :height 20
                          :left 10
                          :z-index 10}
             :control {:flex 1
                       :justify-content "space-around"
                       :background-color "#64467A"
                       }
             :h-box  {:flex-direction "row"
                      :justify-content "center"}
             :info {:flex-direction "row"
                    :justify-content "space-around"
                    :margin-vertical 20
                    }
             :info-item {:align-items "center"
                         :justify-content "space-around"}
             :info-text {:font-size 16
                         :color "white"
                         :padding-top 10}
             :button-run {:width 80
                          :height 80
                          :border-radius 40
                          :align-items "center"
                          :justify-content "center"
                          :background-color c/button-run}
             :button-stop {:margin-left 20
                           :margin-top 10
                           :align-items "center"
                           :justify-content "center"
                           :width 60
                           :height 60
                           :border-radius 30
                           :background-color c/run-icon}
             :start-text {:font-size 20
                          :background-color "rgba(0,0,0,0)"
                          :text-align "center"
                          :color "white"}
             :timer-text {:text-align "center"
                          :font-size 60}
             
             })







