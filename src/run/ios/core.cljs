(ns run.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [run.events]
            [run.subs]
            [run.common.rn :refer [app-registry
                                   view
                                   text
                                   image
                                   tabbar-ios
                                   tabbar-ios-item
                                   switch
                                   touchable-highlight]]
            ))

(def ReactNative (js/require "react-native"))

(def MapView (js/require "react-native-maps"))
(def map-view (r/adapt-react-class MapView))
(def Icon (js/require "react-native-vector-icons/FontAwesome"))
(def tabbar-item-ios (r/adapt-react-class (.-TabBarItemIOS Icon)))


(def logo-img (js/require "./images/cljs.png"))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

;;(declare view-zero)
(defn view-zero []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [image {:source logo-img
               :style  {:width 80 :height 80 :margin-bottom 30}}]
       [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                             :on-press #(alert "HELLO!")}
        [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press you"]]])))

(defn zoom
  [this factor]
  (let [region (:region (r/state this))
        lat-d (:latitude-delta region)
        long-d (:longitude-delta region)]
    (print "zoomed .." factor)
    (r/set-state this (merge region  {:latitude-delta (* lat-d factor)
                                      :longitude-delta (* long-d factor)}))))

(defn view-one
  []
  (r/create-class {:get-initial-state (fn [this] {:location "fetching..."
                                                 :region {:latitude 37.78825
                                                          :longitude 122.4324
                                                          :latitude-delta 0.222
                                                          :longitude-delta  0.221
                                                          }})
                   :component-will-mount (fn
                                           [this]
                                           (.getCurrentPosition
                                            (.-geolocation js/navigator )
                                            (fn [pos]
                                              (r/set-state this {:region (merge (:region (r/state this))
                                                                                {:latitude (-> pos .-coords .-latitude)
                                                                                 :longitude (-> pos .-coords .-longitude)
                                                                                 })
                                                                 :location  (-> pos .-coords .-latitude)}) )))
                   :render (fn [this]
                             [view
                              [text {:style {:margin-top 50}} (:location (r/state this))]
                              [map-view {:initial-region (:region (r/state this ))
                                         :style {:flex-grow 1
                                                 :background-color "yellow"
                                                 :height 400}}]
                              [touchable-highlight {:on-press (fn [] (zoom this 2.0))}
                               [text "+"]]
                              [touchable-highlight {:on-press (fn [] (zoom this 0.5))}
                               [text "-"]]]
                             )}))

(defn view-1 []
  (let [region (r/atom {:latitude 31.78825
                        :longitude 121.4324
                        :latitude-delta 0.222
                        :longitude-delta  0.221
                        })
        location (r/atom "fetching...")
        lat-d (r/cursor region [:latitude-delta])
        long-d (r/cursor region [:longitude-delta])]
    (fn []
; (js/setTimeout (fn [] (reset! location "fetche ......") 1000))
      (.getCurrentPosition (.-geolocation js/navigator) (fn [pos] (swap! region merge {:latitude (.-coords.latitude pos)
                                                                                      :longitude (.-coords.longitude pos)})))
      [view
       [text {:style {:margin-top 50}} @location]
       [map-view {:initial-region @region
                  :region @region
                  :style {:flex-grow 1
                          :background-color "yellow"
                          :height 400}}]
       [touchable-highlight {:on-press (fn [] (reset! location "shrink") (swap! region merge {:latitude-delta (* @lat-d 2)
                                                                                             :longitude-delta (* @long-d 2)}))}
        [text "+"]]
       [touchable-highlight {:on-press (fn [] (reset! location "increase") (swap! region merge {:latitude-delta (* @lat-d 0.5)
                                                                                               :longitude-delta (* @long-d 0.5)}))}
        [text "-"]]])))

;; schema for realm
(def Realm (js/require "realm"))
(def dog-schema {:name "Dog"
                 :properties {:owner "string"
                              :age "float"}})

(def realm (Realm. (clj->js {:schema [dog-schema]})))

(defn view-two
  []
  (fn []
    (.write realm #(.create realm "Dog" (clj->js {:owner "dumeng" :age 3.2})))
    [view {:style {:margin-top 50}}
     [text "view 3"]
     [text (str "Dog now has " (.-length (.objects realm "Dog")))]]))

(defn tabbar-view
  []
  (let [selected (atom 2)]
    (fn []
      [tabbar-ios
       [tabbar-item-ios {:title "one"
                         :icon-name "heart"
                         :selected (= @selected 0)
                         :on-press #(reset! selected 0)}
        [view-zero]]
       [tabbar-item-ios {:title "two"
                         :icon-name "th"
                         :selected (= @selected 1)
                         :on-press #(reset! selected 1)}

        [view-1]]
       [tabbar-item-ios {:title "three"
                         :icon-name "cog"
                         :selected (= @selected 2)
                         :on-press #(reset! selected 2)}
        [view-two]]])))


(defn app-root []
  (fn []
    [tabbar-view]
    ))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "run" #(r/reactify-component app-root)))
