(ns run.ios.view-history
  (:require [run.common.rn :refer [view
                                   text
                                   touchable-highlight]]
            [reagent.core :as r]))

(def MapView (js/require "react-native-maps"))
(def map-view (r/adapt-react-class MapView))

(defn view-history-
  []
  (let [region (r/atom {:latitude 31.78825
                        :longitude 121.4324
                        :latitude-delta 0.222
                        :longitude-delta  0.221
                        })
        location (r/atom "fetching...")
        lat-d (r/cursor region [:latitude-delta])
        long-d (r/cursor region [:longitude-delta])]
    (fn []
                                        ; (js/setTimeout (fn [] (reset! location "fetche ......") 1000))
      (.getCurrentPosition (.-geolocation js/navigator)
                           (fn [pos]
                             (swap! region merge {:latitude (.-coords.latitude pos)
                                                  :longitude (.-coords.longitude pos)})))
      [view
       [text {:style {:margin-top 50}} @location]
       [map-view {:initial-region @region
                  :region @region
                  :style {:flex-grow 1
                          :background-color "yellow"
                          :height 400}}]
       [touchable-highlight {:on-press (fn []
                                         (reset! location "shrink")
                                         (swap! region merge {:latitude-delta (* @lat-d 2)
                                                              :longitude-delta (* @long-d 2)}))}
        [text "+"]]
       [touchable-highlight {:on-press (fn []
                                         (reset! location "increase")
                                         (swap! region merge {:latitude-delta (* @lat-d 0.5)
                                                              :longitude-delta (* @long-d 0.5)}))}
        [text "-"]]])))


(def view-history (with-meta view-history-
                    {:navigationOptions
                     (clj->js {:tabBar {:label "History"}})}))
