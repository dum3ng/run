(ns run.ios.view-weather
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text]]
            [run.common.art :refer [surface
                                    group
                                    shape]]))


(def api-string "https://api.darksky.net/forecast/b4c20f90fcf2ee6a4d314fc8326b78a4/")

(defn get-city
  [tz]
  (fnext  (clojure.string/split tz #"/")))

(defn org-data
  [data]
  (let [location (get-city (data.timezone))
        summary (data.hourly.summary)
        ds (.slice data.hourly.data 0 5 )
        temps (.map ds #(aget % "temperature"))
        precip (.map ds #(aget % "precipProbability"))]
    {:location location
     :summary summary
     :temps (js->clj temps)
     :precips (js->clj precip)}))

;; weather
(defn view-weather
  []
  (let [data (r/atom {})
        fetching (r/atom true)]
    (fn []
      (.getCurrentPosition
       (.-geolocation js/navigator)
       (fn [pos]
         (let [coords  (js->clj pos.coords :keywordize-keys true)]
           (-> (js/fetch
                (str api-string
                     (:latitude coords) "," (:longitude coords) ))
               (.then (fn [response] (.json response)) )
               (.then (fn [json] (do  (reset! data (org-data json))
                                     (reset! fetching false))))))))
      [view {:style {:margin 50}}
       (if @fetching
         [text "fetching data..."]
         [view
          [text
           {:style {:font-size 30 :text-align "center"}}
           "Your Location"]
          [text (:location @data)]
          [text {:font-size 20 :text-align "center"}
           (:summary @data)]
          [text "temperature in next 4 hour"]
          [surface {:width 100 :height 100}
           [group
            [shape {:d ""
                    :stroke "#2ca02c"
                    :stroke-width 3}]]]])
       ])))
