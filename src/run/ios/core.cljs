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
  (let [names #js ["clock-o" "hourglass-end" "cog" "snowflake-o"]
        promises (.map names (fn [n] (.getImageSource Icon n 20 "black")))]
    (-> js/Promise
        (.all promises)
        (.then (fn [values]
                 (.startTabBasedApp Navigation
                                    (clj->js {:tabs [{:label "schedule"
                                                      :screen "run.schedule-screen"
                                                      :title "schedule"
                                                      :icon (aget values 0)
                                                      :navigatorStyle  {:statusBarHidden true}}
                                                     {:label "history"
                                                      :screen "run.history-screen"
                                                      :icon (aget values 1)
                                                      :title "history"}
                                                     {:label "profile"
                                                      :icon (aget values 2)
                                                      :screen "run.profile-screen"
                                                      :title "profile"}
                                                     {:label "weather"
                                                      :icon (aget values 3)
                                                      :screen "run.weather-screen"
                                                      :navigatorStyle {:navBarHidden true}}

                                                     ]})))))))


(defn -start []
  (.startTabBasedApp Navigation
                     (clj->js {:tabs [{:label "schedule"
                                       :screen "run.schedule-screen"
                                       :title "schedule"
                                       :navigatorStyle  {:statusBarHidden true}}
                                      {:label "history"
                                       :screen "run.history-screen"
                                       :title "history"}
                                      {:label "profile"
                                       :screen "run.profile-screen"
                                       :title "profile"}
                                      {:label "weather"
                                       :screen "run.weather-screen"
                                       :navigatorStyle {:navBarHidden true}}
                                      ]})))
(defn view-2
  []
  (let [ds (ListView.DataSource. #js{:rowHasChanged #(= %1 %2)}) ]
    (r/create-class {:get-initial-state (fn [this] {:data-source (.cloneWithRows ds #js[3 4 5] )})
                     :render (fn [this]
                               [list-view {:dataSource (:data-source (r/state this))
                                           "renderRow"   (fn [row] (r/as-element [text row]))}])})))

(defn app-root []
  (fn []
    [view
     [text "app"]]
    ))

;; (defn init []
;;   (dispatch-sync [:initialize-db])
;;   (.registerComponent app-registry "run" #(r/reactify-component app-root)))
(defn init []
  (start))
