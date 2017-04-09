(ns run.ios.page-history
  (:require [run.common.rn :refer [view
                                   text
                                   touchable-highlight]]
            [reagent.core :as r]
            [run.ios.page-run :refer [page-run]]
            [run.common.core :refer [icon]]))


(declare styles)

(defn page-history
  [props]
  (let [x 3]
    (fn [props]
      [view
       [icon "superpowers"  20]])))

;; styles
(def styles {:run {:position "absolute"
                   :z-index 10
                   :width 30
                   :height 30
                   :top 20
                   :right 20}})
