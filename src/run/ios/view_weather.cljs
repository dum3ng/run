(ns run.ios.view-weather
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text]]))


(def api-string "https://api.darksky.net/forecast/b4c20f90fcf2ee6a4d314fc8326b78a4/")
;; weather
(defn view-weather
  []
  (let [coords (r/atom {:latitude 30
                        :longitude 120})
        forecast (r/atom "fetching..")]
    (fn []
      (.getCurrentPosition
       (.-geolocation js/navigator)
       (fn [pos]
         (let [coords  (js->clj pos.coords :keywordize-keys true)]
           (-> (js/fetch
                (str api-string
                     (:latitude coords) "," (:longitude coords) ))
               (.then (fn [response] (.json response)) )
               (.then (fn [json] (reset! forecast json)))))))
      [view {:style {:margin 50}}
       [text
        {:style {:font-size 30 :text-align "center"}}
        "Your Location"]
       [text (aget @forecast "timezone")]
       [text "summary"]
       (if (aget @forecast "currently")
         [text ( -> @forecast
                (aget "currently") (aget "summary"))])
       ])))
