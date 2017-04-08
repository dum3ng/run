(ns run.ios.view-weather
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   text]]
            [run.common.art :refer [surface
                                    group
                                    shape
                                    Path]]))


(def api-string "https://api.darksky.net/forecast/b4c20f90fcf2ee6a4d314fc8326b78a4/")

(defn get-city
  [tz]
  (fnext  (clojure.string/split tz #"/")))

(defn org-data
  [data]
  (let [location (get-city data.timezone)
        summary data.hourly.summary
        ds (.slice data.hourly.data 0 5 )
        temps (.map ds #(aget % "temperature"))
        precip (.map ds #(aget % "precipProbability"))]
    {:location location
     :summary summary
     :temps (js->clj temps)
     :precips (js->clj precip)}))

(def DELTA 50)

(defn average
  [ds]
  (/ (apply + ds) (count ds)))

(defn factor
  [ds]
  (let [d (- (apply max ds) (apply min ds))]
    (if (zero? d)
      0
      (/ DELTA d ))))
;; weather
(defn view-weather
  []
  (let [data (r/atom {})
        fetching (r/atom true)]
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
    (fn []
      [view {:style {:flex 1
                     :padding-top 50
                     :background-color "#52AFE6"}}
       (if @fetching
         [text "fetching data..."]
         (let [p (doto (Path.)
                   (.moveTo 40 60 ))
               f (factor (:temps @data))
               a (average (:temps @data))
               p (do (doseq [[t i] (zipmap (:temps @data) (range 5))]
                       (.lineTo p (+ 40 (* i 40))  (* f (- t a)) ))
                     (print (.toJSON p) " : should")
                     p)
               d (.toJSON p)]
           (print d)
           [view
            [text
             {:style {:font-size 30
                      :text-align "center"
                      :color "white"}}
             (:location @data)]
            [text {:style {:font-size 20
                           :text-align "center"
                           :margin-top 30
                           :color "white"}}
             (:summary @data)]
            [text {:style {:color "white"}}
             "weather in next 4 hour"]
            [surface {:width 320 :height 200}
             [group
              [shape {:d p
                      :stroke "white"
                      :stroke-width 3}]]]]))
       ])))
