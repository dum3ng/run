(ns run.subs
  (:require [re-frame.core :refer [reg-sub
                                   dispatch]]
            [run.events]
            [run.common.schema :refer [realm]]))

(reg-sub
 :get-greeting
 (fn [db _]
   (:greeting db)))

;;TODO: dispatch is asynchronous?
(reg-sub
 :get-profile
 (fn [db _]
   (:profile db)))

(reg-sub
 :get-histories
 (fn [db _]
   (:histories db)))

(reg-sub
 :get-history-ds
 (fn [db _]
   (:history-ds db)))
