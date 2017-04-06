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
                                   touchable-highlight
                                   navigator]]
            [run.common.schema :refer [realm]]
            [run.ios.view-schedule :refer [view-schedule]]
            [run.ios.view-history :refer [view-history]]
            [run.ios.view-profile :refer [view-profile]]
            [run.ios.view-weather :refer [view-weather]]
            [run.ios.screens :refer [register-screens]]
            ))

(def ReactNative (js/require "react-native"))


(def Icon (js/require "react-native-vector-icons/FontAwesome"))
(def tabbar-item-ios (r/adapt-react-class (.-TabBarItemIOS Icon)))

(def ListView  (.-ListView (js/require "realm/react-native")))

(def list-view (r/adapt-react-class ListView))

(def Navigation (.-Navigation (js/require "react-native-navigation")))

(register-screens)
(defn start []
  (.startTabBasedApp Navigation
                     (clj->js {:tabs [{:label "schedule"
                                       :screen "run.schedule-screen"
                                       :title "schedule"}
                                      {:label "history"
                                       :screen "run.history-screen"
                                       :title "history"}]})))


(defn view-2
  []
  (let [ds (ListView.DataSource. #js{:rowHasChanged #(= %1 %2)}) ]
    (r/create-class {:get-initial-state (fn [this] {:data-source (.cloneWithRows ds #js[3 4 5] )})
                     :render (fn [this]
                               [list-view {:dataSource (:data-source (r/state this))
                                           "renderRow"   (fn [row] (r/as-element [text row]))}])})))

(defn tabbar-view
  []
  (let [selected (atom 2)]
    (fn []
      [tabbar-ios
       [tabbar-item-ios {:title "one"
                         :icon-name "heart"
                         :selected (= @selected 0)
                         :on-press #(reset! selected 0)}
        [view-schedule]]
       [tabbar-item-ios {:title "two"
                         :icon-name "th"
                         :selected (= @selected 1)
                         :on-press #(reset! selected 1)}

        [view-history]]
       [tabbar-item-ios {:title "three"
                         :icon-name "cog"
                         :selected (= @selected 2)
                         :on-press #(reset! selected 2)}
        [view-profile]]
       [tabbar-item-ios {:title "weather"
                         :icon-name "sun-o"
                         :selected (= @selected 3)
                         :on-press #(reset! selected 3)}
        [view-weather]]])))


(defn app-root []
  (fn []
    [tabbar-view]
    ))

;; (defn init []
;;   (dispatch-sync [:initialize-db])
;;   (.registerComponent app-registry "run" #(r/reactify-component app-root)))
(defn init []
  (start))
