(ns run.ios.page-test
  (:require [run.common.art :as art]
            [run.common.rn :refer [view text]]
            [reagent.core :as r]))


(defn page-test
  [props]
  (fn [props]
    [view {:style {:padding-top 50
                   :width 200
                   :height 200}}
     [text "from view"]
     [art/surface {:width 200 :height 100}
      [art/shape  {:d "m67.83767,44.54689c18.52955,-53.15854 91.12892,0 0,68.34669c-91.12892,-68.34669 -18.52955,-121.50523 0,-68.34669z"
                   :stroke "#2ca02c"
                   :stroke-width 3}]
      [art/text {:fill "black"
                 :x 100
                 :y 50
                 :font {:font-size 32
                        :font-family "Helvetica, Neue Helvetica, Arial"}}
       "hello art!"]]]))

(def PageTest
  (r/reactify-component page-test))
