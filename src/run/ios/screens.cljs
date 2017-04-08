(ns run.ios.screens
  (:require [reagent.core :as r]
            [run.ios.view-schedule :refer [view-schedule]]
            [run.ios.view-history :refer [view-history]]
            [run.ios.view-profile :refer [view-profile]]
            [run.ios.view-weather :refer [view-weather]]))


(def Navigation (.-Navigation (js/require "react-native-navigation")))

(def screens
  [["run.schedule-screen"
    #(r/reactify-component view-schedule)]
   ["run.history-screen"
    #(r/reactify-component view-history)]
   ["run.profile-screen"
    #(r/reactify-component view-profile)]
   ["run.weather-screen"
    #(r/reactify-component view-weather)]])

(defn register-screens
  []
  (doseq [[n f] screens]
    (.registerComponent Navigation n f)))
;; (defn register-screens
;;   []
;;   (.registerComponent Navigation "run.schedule-screen"
;;                       #(r/reactify-component view-schedule))
;;   (.registerComponent Navigation "run.history-screen"
;;                       #(r/reactify-component view-history)))
