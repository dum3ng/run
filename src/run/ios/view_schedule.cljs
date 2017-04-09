(ns run.ios.view-schedule
  (:require [run.common.rn :refer [view
                                   alert
                                   text
                                   image
                                   modal
                                   touchable-highlight]]
            [run.events]
            [run.subs]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe]]
            [run.common.art :as art :refer [surface
                                            group
                                            shape]]
            [run.common.core :refer [self-modal]]))



(def logo-img (js/require "./images/cljs.png"))


(defn button
  [t handler]
  (fn [t handler]
    [touchable-highlight
     {:style {:background-color "#999"
              :padding 10
              :border-radius 5}
      :on-press handler}
     [text
      {:style {:color "white"
               :text-align "center"
               :font-weight "bold"}} t]]
    ))

(def s-text art/text)

(defn view-schedule-
  [props]
  (let [greeting (subscribe [:get-greeting])
        visible (r/atom false)
        ]
    (fn [props]
      [view
       {:style {:flex-direction "column"
                :margin 40
                :align-items "center"}}
       [surface {:width 320 :height 200}
        [s-text {:font "13px 'Helvetica Neue', 'Helvetica', Arial"
                 :fill "black" :alignment "center"} "hello"]
        [shape {:d "m67.83767,44.54689c18.52955,-53.15854 91.12892,0 0,68.34669c-91.12892,-68.34669 -18.52955,-121.50523 0,-68.34669z"
                :stroke "#2ca02c"
                :stroke-width 3}]]
       [text
        {:style {:font-size 30
                 :font-weight "100"
                 :margin-bottom 20
                 :text-align "center"}} @greeting]
       [image
        {:source logo-img
         }]
       [button "press"  #(.alert alert "HELLO!")]
       [touchable-highlight
        {:style {:background-color "#999"
                 :padding 10
                 :border-radius 5}
         :on-press #(do (print @visible)
                        (swap! visible not))}
        [text "open modal"]]
       [self-modal {:visible-atom visible
                    :animation-type "slide"
                    :transparent false}
        [view {:style {:background-color "red"}}
         [text "modal"]
         [touchable-highlight
          {:style {:background-color "#999"
                   :padding 10
                   :border-radius 5}
           :on-press #(swap! visible not)}
          [text "toggle"]]]]
       ])))

(def view-schedule (with-meta view-schedule-
                     {:navigationOptions
                      (clj->js {:tabBar {:label "Home"
                                         } })}))
