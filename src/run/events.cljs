(ns run.events
  (:require
   [re-frame.core :refer [reg-event-db after]]
   [clojure.spec :as s]
   [run.common.schema :refer [realm]]
   [run.db :as db :refer [app-db]]))

;; -- Interceptors ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/blob/master/docs/Interceptors.md
;;
(defn check-and-throw
  "Throw an exception if db doesn't have a valid spec."
  [spec db [event]]
  (when-not (s/valid? spec db)
    (let [explain-data (s/explain-data spec db)]
      (throw (ex-info (str "Spec check after " event " failed: " explain-data) explain-data)))))

(def validate-spec
  (if goog.DEBUG
    (after (partial check-and-throw ::db/app-db))
    []))



;; -- Handlers --------------------------------------------------------------

(reg-event-db
 :initialize-db

 (fn [_ _]
   app-db))

(reg-event-db
 :set-greeting
 validate-spec
 (fn [db [_ value]]
   (assoc db :greeting value)))


(reg-event-db
 :set-profile
 (fn [db [_ value]]
   (assoc db :profile value)))

(reg-event-db
 :refresh-profile
 (fn [db [_]]
   (let [profile (-> (.objects  realm "Profile")
                     (aget 0))]
     (assoc db :profile profile ))))

(reg-event-db
 :refresh-histories
 (fn [db [_]]
   (print "refresh-histories")
   (let [histories (.objects realm "History")]
     (assoc db :histories histories))))

;; (reg-event-db
;;  :refresh-history-ds
;;  (fn [db [_]]
;;    (let [histories (-> (.objects realm "History")
;;                        (.sorted  "date" true))
;;          ds (:history-ds db)]
;;      (assoc db :history-ds (.cloneWithRows ds  histories)))))

(reg-event-db
 :set-map-ref
 (fn [db [_ r]]
   (print "set map:" r)
   (assoc db :map-ref r)))
