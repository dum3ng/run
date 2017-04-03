(ns run.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [run.events]
            [run.subs]
            [run.common.rn :refer [tabbar-ios
                                   tabbar-ios-item
                                   switch]]
            ))

(def ReactNative (js/require "react-native"))

(def MapView (js/require "react-native-maps"))
(def map-view (r/adapt-react-class MapView))
(def Icon (js/require "react-native-vector-icons/FontAwesome"))
(def tabbar-item-ios (r/adapt-react-class (.-TabBarItemIOS Icon)))


(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))

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

(defn view-one
  []
  [map-view {:initial-region {:latitude 37.78825
                              :longitude 122.4324
                              :latitude-delta 0.0922
                              :longitude-delta  0.0421
                              }
             :style {:width 100
                     :background-color "yellow"
                     :height 200}}])

(defn tabbar-view
  []
  (let [selected (atom 0)]
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

        [view-one]]
       [tabbar-item-ios {:title "three"
                         :icon-name "cog"
                         :selected (= @selected 2)
                         :on-press #(reset! selected 2)}
        [text "view two"]]])))


(defn app-root []
  (fn []
    [tabbar-view]
    ))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "run" #(r/reactify-component app-root)))
