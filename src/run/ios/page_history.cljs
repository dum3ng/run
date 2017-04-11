(ns run.ios.page-history
  (:require [run.common.rn :refer [view
                                   text
                                   touchable-opacity]]
            [reagent.core :as r]
            [run.subs]
            [run.events]
            [re-frame.core :refer [subscribe
                                   dispatch]]
            [run.ios.page-run :refer [page-run]]
            [run.common.core :refer [icon]]
            [run.common.colors :as c]))


(def ListView (.-ListView (js/require "realm/react-native")))
(def list-view (r/adapt-react-class ListView))
(def DataSource (.-DataSource ListView))

(declare styles)
(defn other [x]
  (fn [x]
    [view
     [text "below toggle"]
     [text {:style {:display (if x "flex" "none")}} "see me?"]]))

(defn page-history
  [props]
  (let [nav (.-navigate (:navigation props))
        x (r/atom true)
        histories (subscribe [:get-histories])
        ds (DataSource. #js{:rowHasChanged  #(identical? %1 %2)})
                                        ;        state (r/atom {:data-source (.cloneWithRows ds (or @histories #js[]))})
        state (r/atome {:data-source ds})
        data-source (r/cursor state [:data-source])]
    (if (nil? @histories) (dispatch [:refresh-histories]))
    (fn [props]

      [view {:style (:container styles)}
       [text "sk?"]
       [touchable-opacity
        {:on-press #(swap! x not)}
        [text "toggle"]]
       [other @x]
       [text {:style {:margin 10}} (.-length @histories)]
       [touchable-opacity
        {:style (:run styles)
         :active-opacity 0.5
         :on-press #(nav "page-run")}
        [icon {:name "superpowers"
               :size 30
               :color  c/run-icon}]]
       (if-not (nil? data-source)
         [list-view {:dataSource data-source
                     :enable-empty-sections true
                     :render-row (fn [row]
                                   (r/as-element [view
                                                  [text "distance"]
                                                  [text (.-distance row)]]))}]
         [view [text "no history"]])
       ])))

;; styles
(def styles {:container {:flex 1}
             :run {:position "absolute"
                   :z-index 10
                   :width 30
                   :height 30
                   :top 30
                   :right 10}})
