(ns run.ios.page-run
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text
                                   touchable-opacity
                                   touchable-without-feedback
                                   animated
                                   dimensions]]
            [run.common.schema :refer [realm]]
            [run.common.colors :as c]
            [run.common.core :refer [icon]]
            [run.common.utils :refer [wrap-navigation-options]]))

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
(declare button-run timer control-run)

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
  (let [state (r/atom {:seconds 0
                       :region (AnimatedRegion. #js{:latitude initial-lat
                                                    :longitude initial-long
                                                    :latitudeDelta latitudeDelta
                                                    :longitudeDelta longitudeDelta})
                       :old-coords #js{}
                       :run-state "idle"
                       :run-dist 0
                       :coord-id 0
                       :coords []
                       :marker-source #js{}})
        seconds (r/cursor state [:seconds])
        run-state (r/cursor state [:run-state] ) ; one of ["idle" "running" "paused"] ;;;;;;;;
        coord-id (r/cursor state [:line-id])
        coords (r/cursor state [:coords])
        old-coords (r/cursor state [:old-coords])
        run-dist (r/cursor state [:run-dist])
        region (r/cursor state [:region])
        marker-source (r/cursor state [:marker-source])
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
    (fn [props]
      (case @run-state
        "running" (js/setTimeout #(swap! seconds inc) 1000)
        ())
      [view {:style (:container styles)}
       [map-animated {:style (:map styles)
                      :initial-region {:latitude initial-lat
                                       :longitude initial-long
                                       :latitude-delta latitudeDelta
                                       :longitude-delta longitudeDelta}
                      :region @region}
        [polyline {:coordinates @coords
                   :stroke-color "blue"
                   :stroke-width 3}]
        [marker-animated {:image (:marker-source @state)
                          :coordinate @region}]]
       [view {:style (:control styles)}
        [view {:style (:h-box styles)}
         [control-run {:run-state @run-state
                       :start-fn #(reset! run-state "running")
                       :pause-fn #(reset! run-state "paused")
                       :resume-fn #(reset! run-state "running")
                       :stop-fn (fn []
                                  (let [go-back (.-goBack (:navigation props))]
                                    (swap! state
                                           assoc :run-state "idle"
                                           :seconds 0)
                                    (.write realm #(.create realm "History" (clj->js {:id (str (random-uuid))
                                                                                      :date (js/Date.)
                                                                                      :distance @run-dist
                                                                                      :duration 100
                                                                                      :snapshot "fake"
                                                                                      :coordinates @coords})))
                                    (go-back)))
                       }]]
        [timer @seconds]
        [text (str "distance " @run-dist " Km")]
        [text "control area"]]])))

(def PageRun
  (wrap-navigation-options page-run
                           {:title "run"
                            :header {:visible false}} ))

;; implements
(defn button-run
  [props]
  (fn [props]
    [touchable-opacity
     {:style (:button-run styles)
      :on-press (:on-press props)
      :active-opacity 0.8}
     [text {:style {:start-text styles}} "start"]]))

(defn control-run
  "props keys:
  :run-state
  :start-fn
  :pause-fn
  :resume-fn
  :stop-fn"
  [props]
  (fn [props]
    [view
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
     [view {:style {:height (if (= "paused" (:run-state props)); TODO: use display not work. why?
                              50
                              0)}}
      [touchable-opacity
       {:style {:background-color "red"
                }
        :on-press (:stop-fn props)
        :active-opacity 0.8}
       [text {:style (:start-text styles)} "stop"]]]]))

(defn timer
  "This is just a timer text.
  Accept a number of seconds, and adapt to style like:
  hh:mm"
  [seconds ]
  (fn [seconds ]
    (let [h  (quot seconds 60)
          ht (if (< h 10) (str "0" h) (str h))
          s (rem seconds 60)
          st (if (< s 10) (str "0" s) (str s))]
      [view 
       [text {:style (:timer-text styles)} (str ht ":" st)]])))


;; styles
(def styles {:container {:flex 1
                         :flex-direction "column"
                         :align-items "stretch"}
             :map {:height 320}
             :control {:flex 1
                       :background-color "yellow"
                       }
             :h-box  {:flex-direction "row"
                      :justify-content "center"}
             :button-run {:width 60
                          :height 60
                          :border-radius 30
                          :align-items "center"
                          :justify-content "center"
                          :background-color c/button-run}
             :start-text {:font-size 20
                          :color "white"}
             :timer-text {:font-size 60}
             })






