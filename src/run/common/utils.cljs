(ns run.common.utils
  (:require [reagent.core :as r]
            [run.common.rn :refer [image]]))



(defn wrap-navigation-options
  [c opt]
  (let [rc (r/reactify-component c)]
    (aset rc "navigationOptions"
          (clj->js opt))
    rc))


(def trans {:day (* 24 3600) :hour 3600 :minute 60 :second 1})
(defn- format-to
  [ss k]
  (let [t (k trans)
        q (quot ss t)
        r (rem ss t)]
    [q r]))

(defn format-date
  "return format:
  xxxx年xx月xx日 12:32"
  [da]
  (let [year (.getFullYear da)
        mon (inc (.getMonth da))
        day (.getDate da)
        hour (.getHours da)
        min (.getMinutes da)]
    (str year "年" mon "月" day "日" hour ":" min)))

(defn format-time
  "Take seconds to the format dd:hh or
  hh:mm or mm:ss"
  [ss]
  (let [[d s] (format-to ss :day)
        [h s] (format-to s :hour)
        [m s] (format-to s :minute)]
    (cond
      (zero? d) (cond
                  (zero? h) (str m " min " s " sec ")
                  :else (str h " hour " m " min "))
      :else (str d " day " h " hour "))))

(defn takex
  [n coll p]
  (if (< (count coll) n)
    (take n   (concat coll (repeat (- n (count coll)) p)))))

(defn format-float [n digit]
  (let [s (str n)
        [f l & none] (clojure.string/split s #"\." )
        l (if (< (count l) digit)
            ())]
    (str f "." (apply str (takex digit l 0)))))
