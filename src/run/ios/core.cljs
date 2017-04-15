(ns run.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [run.events]
            [run.subs]
            [run.common.rn :refer [app-registry
                                   ]]
            [run.common.schema :refer [realm]]
            [run.ios.page-history :refer [page-history
                                          go-run]]
            [run.ios.page-run :refer [PageRun]]
            [run.ios.view-profile :refer [Profile
                                          ProfileDisplay
                                          ProfileEdit]]
            [run.ios.view-weather :refer [view-weather]]
            [run.common.utils :refer [wrap-navigation-options]]
            [run.common.core :refer [icon]]
            [run.ios.page-test :refer [PageTest]]
            ))

(def ReactNative (js/require "react-native"))

(def ListView  (.-ListView (js/require "realm/react-native")))

(def list-view (r/adapt-react-class ListView))

(def Navigation (js/require "react-navigation"))
(def TabNavigator (.-TabNavigator Navigation))
(def StackNavigator (.-StackNavigator Navigation))




(def History
  (wrap-navigation-options page-history
                           {:title "history"
                            :tabBar
                            {:label "History"
                             :icon (fn [props] (r/as-element
                                               [icon {:name  "hourglass-end"
                                                      :color props.tintColor
                                                      :size 20}]))}
                            :header (fn [navigation header]
                                      #js{:visible true
                                          :right (r/as-element [go-run (.-navigate navigation)])})}))

(def Weather
  (wrap-navigation-options view-weather
                           {:tabBar
                            {:label "Weather"
                             :icon (fn [props] (r/as-element
                                               [icon {:name "snowflake-o"
                                                      :size 20
                                                      :color props.tintColor}]))}}))

(def Tabs
  (TabNavigator.
   (clj->js
    {:history {:screen History}
     :profile-display {:screen ProfileDisplay
                       :navigationOptions {:tabBar {:icon (fn
                                                            [props]
                                                            (r/as-element
                                                             [icon {:name "cog"
                                                                    :size 20
                                                                    :color props.tintColor}]))}}}

     :weather {:screen Weather}
     })
   (clj->js {:navigationOptions {:header {:visible false}}
             :tabBarOptions {:activeTintColor "#e91e63"}})))

(def App (StackNavigator. (clj->js {:tabs {:screen Tabs}
                                    :page-run {:screen PageRun}
                                    :profile-edit {:screen ProfileEdit}})
                          (clj->js {:headerMode "screen"})))

;; app-root must be a reagent component to use figwheel reload
;; in prod environment, no need to do these transforms
;; we can just use the =App= defined above
(def app (r/adapt-react-class App))
(defn app-root []
  [app])

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "run" #(r/reactify-component app-root)))
