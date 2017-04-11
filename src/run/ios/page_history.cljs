(ns run.ios.page-history
  (:require [run.common.rn :refer [view
                                   text
                                   touchable-opacity]]
            [reagent.core :as r]
            [run.subs]
            [run.events]
            [re-frame.core :refer [subscribe
                                   dispatch]]
            [run.ios.page-run :refer [page-run]]
            [run.common.core :refer [icon]]
            [run.common.colors :as c]))


(def ListView (.-ListView (js/require "realm/react-native")))
(def list-view (r/adapt-react-class ListView))
(def DataSource (.-DataSource ListView))

(declare styles)
(defn other [x]
  (fn [x]
    [view
     [text "below toggle"]
     [text {:style {:display (if x "flex" "none")}} "see me?"]]))

(defn page-history
  [props]
  (let [nav (.-navigate (:navigation props))
        ds (subscribe [:get-history-ds])
        ]
    (dispatch [:refresh-history-ds])
    (fn [props]
      [view {:style (:container styles)}

       [touchable-opacity
        {:style (:run styles)
         :active-opacity 0.5
         :on-press #(nav "page-run")}
        [icon {:name "superpowers"
               :size 30
               :color  c/run-icon}]]
       [list-view {:dataSource @ds
                   :enable-empty-sections true
                   :render-row (fn [row]
                                 (r/as-element [view
                                                [text "distance"]
                                                [text (.-distance row)]]))}]
       ])))

;; styles
(def styles {:container {:flex 1}
             :run {:position "absolute"
                   :z-index 10
                   :width 30
                   :height 30
                   :top 30
                   :right 10}})
