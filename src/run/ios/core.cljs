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
            [run.ios.view-profile :refer [Profile]]
            [run.ios.view-weather :refer [view-weather]]
            [run.common.utils :refer [wrap-navigation-options]]
            [run.common.core :refer [icon]]
            ))

(def ReactNative (js/require "react-native"))

(def ListView  (.-ListView (js/require "realm/react-native")))

(def list-view (r/adapt-react-class ListView))

(def Navigation (js/require "react-navigation"))
(def TabNavigator (.-TabNavigator Navigation))


(def Schedule
  (wrap-navigation-options view-schedule
                           {:tabBar
                            {:label "Schedule"
                             :icon (fn [props]
                                     (r/as-element
                                      [icon "table" props.tintColor 20]))}}))
(def History
  (wrap-navigation-options view-history
                           {:tabBar
                            {:label "History"
                             :icon (fn [props] (r/as-element
                                               [icon "hourglass-end" props.tintColor 20]))}}))

(aset Profile "navigationOptions"
      (clj->js {:tabBar
                {:label "Profile"
                 :icon (fn [props] (r/as-element
                                   [icon "cog" props.tintColor 20]))}}))


(def Weather
  (wrap-navigation-options view-weather
                           {:tabBar
                            {:label "Weather"
                             :icon (fn [props] (r/as-element
                                               [icon "snowflake-o" props.tintColor 20]))}}))

(def App (TabNavigator. (clj->js {:Schedule {:screen Schedule}
                                  :History {:screen History}
                                  :Profile {:screen Profile}
                                  ;;  :Weather {:screen Weather}
                                  })
                        (clj->js {:tabBarOptions {:activeTintColor "#e91e63"}})))

;; app-root must be a reagent component to use figwheel reload
;; in prod environment, no need to do these transforms
;; we can just use the =App= defined above
(def app (r/adapt-react-class App))
(defn app-root []
  [app])

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "run" #(r/reactify-component app-root)))
