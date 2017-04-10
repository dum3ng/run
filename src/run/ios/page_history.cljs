(ns run.ios.page-history
  (:require [run.common.rn :refer [view
                                   text
                                   touchable-opacity]]
            [reagent.core :as r]
            [run.ios.page-run :refer [page-run]]
            [run.common.core :refer [icon]]
            [run.common.colors :as c]))


(declare styles)
(defn other [x]
  (fn [x]
    [view
     [text "below toggle"]
     [text {:style {:display (if x "flex" "none")}} "see me?"]]))
(defn page-history
  [props]
  (let [nav (.-navigate (:navigation props))
        x (r/atom true)]
    (fn [props]
      [view {:style (:container styles)}
       [text "sk?"]
       [touchable-opacity
        {:on-press #(swap! x not)}
        [text "toggle"]]
       [other @x]
       [touchable-opacity
        {:style (:run styles)
         :active-opacity 0.5
         :on-press #(nav "page-run")}
        [icon {:name "superpowers"
               :size 30
               :color  c/run-icon}]]
       ])))

;; styles
(def styles {:container {:flex 1}
             :run {:position "absolute"
                   :z-index 10
                   :width 30
                   :height 30
                   :top 30
                   :right 10}})
