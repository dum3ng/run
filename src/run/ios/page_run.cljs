(ns run.ios.page-run
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text
                                   touchable-without-feedback]]
            [run.common.schema :refer [realm]]))

;; This is the page when you running.
;; Show a map and control elements.

(def MapView (js/require "react-native-maps"))
(def map-view (r/adapt-react-class MapView))

(declare styles)
(def _interval_ 1000)

(defn page-run
  [props]
  (let [region (r/atom  {:latitude 31.78825
                         :longitude 121.4324
                         :latitude-delta 0.222
                         :longitude-delta  0.221
                         })
        handler  (fn [pos]
                   (print "fetch location...")
                   (swap! region
                          merge {:latitude (.-coords.latitude pos)
                                 :longitude (.-coords.longitude pos)}))]
    (.getCurrentPosition
     (.-geolocation js/navigator)
     handler)
    (fn [props]
      (js/setTimeout handler _interval_)
      [view {:style (:container styles)}
       [map-view {:style (:map styles)
                  :initial-region @region
                  :region @region}]
       [view {:style (:control styles)}
        [text "control area"]]])))

;; styles
(def styles {:container {:flex 1
                         :flex-direction "column"
                         :align-items "stretch"}
             :map {:height 320
                   }
             :control {:flex 1
                       :background-color "yellow"
                       :opacity 0.3}})






