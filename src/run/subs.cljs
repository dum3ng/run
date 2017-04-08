(ns run.subs
  (:require [re-frame.core :refer [reg-sub
                                   dispatch]]
            [run.events]
            [run.common.schema :refer [realm]]))

(reg-sub
 :get-greeting
 (fn [db _]
   (:greeting db)))

(reg-sub
 :get-profile
 (fn [db _]
   (let [p (:profile p)]
     (cond
       (= 0 (count p)) p
       :else (let [profile (-> (.objects "Profile" realm)
                               (aget 0))]
               (dispatch [:set-profile profile]))))))
