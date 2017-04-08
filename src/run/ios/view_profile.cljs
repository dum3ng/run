(ns run.ios.view-profile
  (:require [reagent.core :as r]
            [run.common.schema :refer [realm]]
            [run.common.rn :refer [view
                                   text
                                   text-input]]))

(def styles {:key-text {:padding-top 15
                        :padding-left 10
                        :padding-bottom 10}
             :value-text {:background-color "#eee"
                          :border-top-width 1
                          :border-top-color "black"
                          :border-bottom-width 1
                          :height 50
                          :line-height 30
                          :padding-top 10
                          :padding-left 10
                          :font-size 15}})

(defn value-text
  [t]
  (fn [t]
    [view {:style {:border-color "#ccc"
                   :border-width 1}}
     [text {:style (:value-text styles)}
      t]]))

(defn format [n digit]
  (let [s (str n)
        [f l & none] (clojure.string/split s #"\." )]
    (str f (take digit l))))

(defn view-profile-
  []
  (let [profiles (.objects realm "Profile")
        profile (aget profiles 0)]
    (fn []
      [view
       (map (fn [t]
              ^{:key (key t)} [view
                               [text  {:style (:key-text styles)} (key t)]
                               [value-text (val t)]])
            {"name" profile.username
             "sex" profile.sex
             "height" profile.height
             "weight" profile.weight
             "age" profile.age})

       ])))

(def view-profile (with-meta view-profile-
                    {:navigationOptions
                     (clj->js {:tabBar {:label "Profile"}})}))
