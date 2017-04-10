(ns run.ios.view-profile
  (:require [reagent.core :as r]
            [run.events]
            [run.subs]
            [re-frame.core :refer [subscribe dispatch]]
            [run.common.schema :refer [realm]]
            [run.common.rn :refer [view
                                   text
                                   text-input
                                   touchable-opacity
                                   picker
                                   picker-item
                                   list-view
                                   scroll-view
                                   touchable-highlight
                                   ]]
            [run.common.utils :refer [wrap-navigation-options]]
            [run.common.core :refer [icon
                                     re-text-input
                                     self-modal]]
            ))

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
                          :font-size 15}
             :input-text  {:height 50
                           :border-width 1
                           :border-color "#ddd"
                           :background-color "white"}})

(def Navigation (js/require "react-navigation"))
(def StackNavigator (.-StackNavigator Navigation))

(def system-color "#007AFF")

(defn value-text
  [t]
  (fn [t]
    [view {:style {:border-color "#ccc"
                   :border-width 1}}
     [text {:style (:value-text styles)}
      t]]))

(defn label-view
  [t]
  (fn [t]
    [text {:style
           (:key-text styles)}
     t]))

(defn format [n digit]
  (let [s (str n)
        [f l & none] (clojure.string/split s #"\." )]
    (str f (take digit l))))

(defn view-profile-
  [props]
  (let [profile (subscribe [:get-profile])]
    (if (nil? @profile) (dispatch [:refresh-profile]))
    (fn [props]
      [view
       (if (not (nil? @profile))
         (map (fn [t]
                ^{:key (key t)} [view
                                 [label-view (key t)]
                                 [value-text (val t)]])
              {"name" (.-username @profile)
               "sex" (.-sex @profile)
               "height" (.-height @profile)
               "weight" (.-weight @profile)
               "age" (.-age @profile)}))
       ])))


(defn nav-edit
  [nav]
  (fn [nav]
    [view {:style {:padding-left 10 :padding-right 15}}
     [touchable-opacity
      {:on-press #(nav "profile-edit")}
      [icon {:name "edit"
             :color system-color
             :size 20}]]]))

(defn view-edit-profile
  [props]
  (let [profile (subscribe [:get-profile])
        profile @profile
        name (r/atom (.-username profile))
        sex (r/atom (.-sex profile))
        age (r/atom (str (.-age profile)))
        height (r/atom (str (.-height profile)))
        weight (r/atom (str (.-weight profile)))
        pick-sex (r/atom false)]
    (print "in edit:" profile)
    (print profile.username)
    (print (.-username profile))
    (fn [props]
      [scroll-view
       [label-view "name"]
       [text-input {:style (:input-text styles)
                    :value @name
                    :on-change-text #(reset! name %)}]
       [label-view "sex"]
       [touchable-opacity
        {:on-press #(swap! pick-sex not)}
        [value-text @sex]]
       [self-modal {:visible-atom pick-sex}
        [view {:style {:background-color "white"
                       :height 200
                       :flex-direction "column"
                       :align-items "stretch"}}
         [picker {:style {:height 150}
                  :selected-value @sex
                  :on-value-change #(reset! sex %)}
          [picker-item {:label "Female" :value "Female"}]
          [picker-item {:label "Male" :value "Male"}]]
         ]]
       [label-view "age"]
       [re-text-input {:regex #"[0-9]{0,3}"
                       :style (:input-text styles)
                       :keyboard-type "number-pad"
                       :value @age
                       :on-change-text #(do (print "after:" %)
                                            (reset! age %)) }]
       [label-view "height"]
       [re-text-input {:regex #"[0-9]{0,3}"
                       :style (:input-text styles)
                       :value @height
                       :keyboard-type "number-pad"
                       :on-change-text #(reset! height %)}]
       [label-view "weight"]
       [re-text-input {:regex #"[0-9]{0,3}"
                       :style (:input-text styles)
                       :keyboard-type "number-pad"
                       :value @weight
                       :on-change-text #(reset! weight %)}]
       [touchable-highlight
        {:style {:height 50
                 :background-color system-color}
         :on-press (fn [] (.write realm
                                 #(doseq [[k v] [["username" @name]
                                                 ["sex" @sex]
                                                 ["age" (js/parseFloat @age)]
                                                 ["weight" (js/parseFloat @weight)]
                                                 ["height" (js/parseFloat @height)]] ]
                                    (aset profile k v )))
                     (dispatch [:refresh-profile ])
                     (.goBack (:navigation props )))}
        [text "save"]]
       ])))

(def ProfileEdit
  (wrap-navigation-options
   view-edit-profile
   {:title "edit"}))

(def ProfileDisplay
  (wrap-navigation-options
   view-profile-
   {:title "Profile"
    :header (fn [navigation]
              (clj->js
               {:visible true
                :right (r/as-element
                        [nav-edit (.-navigate navigation)])}))}))

(defn t []
  [view
   [text "hello"]])
(def Test
  (wrap-navigation-options t
                           {:title "tttt"}))
(def Profile
  (StackNavigator.
   (clj->js {:ProfileDisplay {:screen ProfileDisplay}
             :ProfileEdit {:screen ProfileEdit}
             })))

;; (def view-profile (with-meta view-profile-
;;                     {:navigationOptions
;;                      (clj->js {:tabBar {:label "Profile"}})}))


;; edit view
