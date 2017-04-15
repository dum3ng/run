(ns run.ios.view-weather
  (:require [reagent.core :as r]
            [run.common.rn :refer [view
                                   scroll-view
                                   text]]
            [run.common.utils :refer [format-float]]
            [run.common.art :as art :refer [surface
                                            group
                                            shape
                                            Path]]))


(def api-string "https://api.darksky.net/forecast/b4c20f90fcf2ee6a4d314fc8326b78a4/")
(declare styles)

(defn get-city
  [tz]
  (fnext  (clojure.string/split tz #"/")))


(defn f->c
  [f]
  (/ (- f 32) 1.8))

(defn org-data
  [data]
  (let [location (get-city data.timezone)
        summary data.hourly.summary
        ds (.slice data.hourly.data 0 5 )
        temps (.map ds #(aget % "temperature"))
        precip (.map ds #(aget % "precipProbability"))]
    {:location location
     :summary summary
     :temps (map (comp js/parseFloat #(format-float % 1) f->c) (js->clj temps))
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

(defn gen-points
  [vs]
  (case vs
    nil    []
    (let  [f (factor vs)
           a (average vs)]
      (map #(identity [(+ 40 (* %2 60))
                       (+ (/ DELTA 2.0) 20 (* f (- a  %1)))])
           vs (range 5)))))

(defn move-point
  "Move a Point object to the points. "
  [ pts]
  (let [p (Path.)]
    (if  (not (empty? pts))
      (do (.moveTo p (ffirst pts) (second (first pts)))
          (doseq [pt (rest pts)]
            (.lineTo p (nth pt 0) (nth pt 1)))))
    p))

;; weather
(defn view-weather-
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
      [scroll-view {:style {:flex 1
                            :padding-top 50
                            :background-color "#52AFE6"}}
       (if @fetching
         [text "fetching data..."]
         (let [tps (gen-points (:temps @data) )
               rps (gen-points  (:precips @data) )
               p (move-point  tps)
               rain (move-point rps)
               d (.toJSON p)]
           [view
            [text
             {:style {:font-size 30
                      :text-align "center"
                      :color "white"}}
             (:location @data)]
            [text {:style (:summary-text styles)}
             (:summary @data)]
            [text {:style (:label styles)}
             "weather in next 4 hour"]
            [surface {:width 320 :height 200}
             [group
              [shape {:d p
                      :stroke "white"
                      :stroke-width 3}]
              (map (fn [pt t]
                     ^{:key pt}[art/text { :font {:font-size 16
                                                  :font-family "Helvetica, Neue Helvetica, Arial"}
                                          :x (nth pt 0)
                                          :y (nth pt 1)
                                          :fill "white"}
                                (str t)])
                   tps (:temps @data))]]
            [view
             [text {:style (:label styles)}
              "降水概率"]
             [surface {:width 320
                       :height 200}
              [group
               [shape {:d rain
                       :stroke "white"
                       :stroke-width 3}]
               (if rps
                 (map (fn [pt t]
                        ^{:key pt}[art/text { :font {:font-size 16
                                                     :font-family "Helvetica, Neue Helvetica, Arial"}
                                             :x (nth pt 0)
                                             :y (nth pt 1)
                                             :fill "white"}
                                   (str t)])
                      rps (:precips @data)))]]]]
           ))
       ])))

(def view-weather (with-meta view-weather-
                    {:navigationOptions
                     (clj->js {:tabBar {:label "Weather"}})}))


(def styles {:summary-text {:font-size 20
                            :text-align "center"
                            :margin-top 30
                            :color "white"}
             :label {:color "white"}
             })
