(ns run.ios.screens
  (:require [reagent.core :as r]
            [run.ios.view-schedule :refer [view-schedule]]
            [run.ios.view-history :refer [view-history]]))


(def Navigation (.-Navigation (js/require "react-native-navigation")))


(defn register-screens
  []
  (.registerComponent Navigation "run.schedule-screen"
                      #(r/reactify-component view-schedule) )
  (.registerComponent Navigation "run.history-screen"
                      #(r/reactify-component view-history) )
  )
