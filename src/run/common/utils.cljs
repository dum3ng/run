(ns run.common.utils
  (:require [reagent.core :as r]
            [run.common.rn :refer [image]]))



(defn wrap-navigation-options
  [c opt]
  (let [rc (r/reactify-component c)]
    (aset rc "navigationOptions"
          (clj->js opt))
    rc))
