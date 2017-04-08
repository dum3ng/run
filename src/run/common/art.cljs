(ns run.common.art
  (:require [reagent.core :as r]))


(def RN (js/require "react-native"))
(def ART (.-ART RN))

(def surface (r/adapt-react-class (.-Surface ART)))
(def group (r/adapt-react-class (.-Group ART)))
(def shape (r/adapt-react-class (.-Shape ART)))
(def clipping-rectangle (r/adapt-react-class (.-ClippingRectangle ART)))
(def text (r/adapt-react-class (.-Text ART)))


(def Pattern (.-Pattern ART))
(def Path (.-Path ART))
(def LinearGradient (.-LinearGradient ART))
(def RadialGradient (.-RadialGradient ART))
(def Transform (.-Transform ART))

(defn add [a]
  (+ a 3))
