(ns run.common.schema)

(def Realm (js/require "realm"))
(def uu (js/require "uuid"))
(def mile->kilo 1.60934)
;; schemas
;; a Segment is a time duration in a run plan.
;; duration: seconds number
;; speed: the run speed, unit is km/h
(def Segment
  {:name "Segment"
   :properties  {:id "string"
                 :name "string"
                 :duration "float"
                 :pace "float"
                 }})

(def Plan
  {:name "Plan"
   :properties  {:id "string"
                 :name "string"
                 :segments {:type "list" :objectType "Segment"}}})

(def Coordinate
  {:name "Coordinate"
   :properties {:latitude "double"
                :longitude "double" }})

(def History
  {:name "History"
   :primaryKey "id"
   :properties {:id "string"
                :date "date"
                :snapshot "string" ;; snapshot is a uri string for the snapshot image
                :coordinates {:type "list" :objectType "Coordinate"}
                :distance "double" ;; km
                :duration "int" ;; seconds
                }})

(def Profile {:name "Profile"
              :properties {:id "string"
                           :username "string"
                           :height {:type  "float" :default 1.75}
                           :weight {:type  "float" :default 65}
                           :age {:type "float" :default 22.2}
                           :sex {:type "string" :default "Male"}
                           }})


;; db
;; create a simple plan
(def simple-plan-segments [["warm up" 300 0]
                           ["jogging" 180 8.0]
                           ["break up" 60 12.0]
                           ["speed up" 120 6.0]])
(def simple-plan {:id (.v4 uu)
                  :name "simple plan"
                  :segments (into []
                                  (map (fn
                                         [seg]
                                         {:id (.v4 uu)
                                          :name (nth seg 0)
                                          :duration (nth seg 1)
                                          :pace (nth seg 2)})
                                       simple-plan-segments))})

(def profile {:id (.v4 uu)
              :username "anynomous"
              :weight 50})
;;

(def reaml-old (Realm.))
(.close reaml-old)

(def realm  (Realm. (clj->js {:schema (into []
                                            (map clj->js
                                                 [Segment
                                                  Plan
                                                  Profile
                                                  Coordinate
                                                  History]))
                              :schemaVersion 5
                              })))
(.write realm   #(.create realm "Plan" (clj->js simple-plan)))
(.write realm #(.create realm "Profile" (clj->js profile)))
;; (binding [realm (Realm.)]
;;   (.close realm))

;; (binding [realm  (Realm. (clj->js {:schema (into []  (map clj->js [Segment Plan]))}))]
;;   (.write realm  #(.create realm "Plan" (clj->js simple-plan))))



;; (defonce db-created (atom false))

;; (if (not @db-created)
;;   (do
;;     (reset! db-created true)
;;     (.write realm #(.create realm "Plan" (clj->js simple-plan)))))
                                        ;(.deleteAll realm)
