(ns run.common.core
  (:require [run.common.rn :refer [view
                                   image
                                   text
                                   text-input]]
            [reagent.core :as r]))

;; here are some basic helper components
(def Icon (js/require "react-native-vector-icons/FontAwesome"))

(defn icon
  [name tint size]
  (let [s (r/atom )]
    (-> (.getImageSource Icon name size tint)
        (.then (fn [source]
                 (reset! s source))))
    (fn [name tint size]
      [image {:source @s
              :style {:width size
                      :height size}}])))

(defn re-text-input
  "This check the value against to a regex string when
  value changed. If not match, text will not change."
  [props]
  (let [{ regex :regex, handler  :on-change-text} props ]
    (fn [props]
      [text-input
       (merge props
              {:on-change-text #(do (print "before handler:" %)
                                    (if (re-matches regex %)
                                      (handler %)))})])))
