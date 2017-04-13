(ns run.ios.page-history
  (:require [run.common.rn :refer [view
                                   text
                                   image
                                   touchable-opacity
                                   alert
                                   action-sheet-ios]]
            [reagent.core :as r]
            [run.subs]
            [run.events]
            [re-frame.core :refer [subscribe
                                   dispatch]]
            [run.common.schema :refer [realm]]
            [run.ios.page-run :refer [page-run]]
            [run.common.core :refer [icon]]
            [run.common.colors :as c]
            [run.common.utils :refer [format-time
                                      format-date]]))


                                        ;(def ListView (.-ListView (js/require "realm/react-native")))
(def ListView (.-ListView (js/require "react-native")))
(def list-view (r/adapt-react-class ListView))
(def DataSource (.-DataSource ListView))

(declare styles)
(defn other [x]
  (fn [x]
    [view
     [text "below toggle"]
     [text {:style {:display (if x "flex" "none")}} "see me?"]]))


(defn delete-history
  [h]
  (.write realm
          #(.delete realm h)
          ))



(defn history
  [p]
  (let [h (:history p)
        handler (:on-press p)]
    (fn [p]
      [view {:style (:history-container styles)}
       [view {:style {:flex-direction "row"
                      :padding-horizontal 20
                      :padding-vertical 10
                      :justify-content "space-between"}}
        [text (format-date(.-date h))]
        [text (format-time (.-duration h))]]
       [image {:style {:height 100
                       :background-color "#ccc"}
               :source #js{:uri (.-snapshot h)}}]
       [view {:style (:history-action-container styles)}
        [touchable-opacity {:style (:history-action styles)
                            :on-press (fn [] (.showActionSheetWithOptions action-sheet-ios
                                                                         #js{:options #js["delete" "cancel"]
                                                                             :cancelButtonIndex 1}
                                                                         #(if (= % 0)
                                                                            (handler))))}
         [icon {:name "ellipsis-h" :size 30}]]]

       ])))


(defn go-run
  [nav]
  (fn [nav]
    [touchable-opacity
     {:style (:run styles)
      :active-opacity 0.5
      :on-press #(nav "page-run")}
     [icon {:name "superpowers"
            :size 20
            :color  c/run-icon}]]))

(defn get-hs
  []
  (.sorted  (.objects realm "History") "date" true))

(defn page-history
  [props]
  (let [nav (.-navigate (:navigation props))
        data-source (DataSource. #js{:rowHasChanged #(identity true)})
        hs (get-hs)
        ds (r/atom (.cloneWithRows data-source hs))
        ;; hs (doto hs (.addListener (fn [x cs] (print "changed.")
        ;;                             (reset! ds (.cloneWithRows @ds x)))))
        ]
    (.addListener realm "change" #(do (print "change." (.-length (get-hs)))
                                      (reset! ds (.cloneWithRows @ds (get-hs)))))
    (fn [props]
      [view {:style (:container styles)}
       [touchable-opacity {:on-press #(reset! ds (.cloneWithRows @ds (get-hs)))}
        [icon {:name "refresh" :size 30}]]
       [list-view {:dataSource @ds
                   :enable-empty-sections true
                   :render-row (fn [row]
                                 (r/as-element [history {:history row
                                                         :on-press #(delete-history row)}]))}]
       ])))

;; styles
(def styles {:container {:flex 1
                         :background-color "white"}
             :run {:z-index 10
                   :width 20
                   :margin-right 20
                   :background-color "#rgba(0,0,0,0)"
                   :height 20
                   }
             :history-container {:border-width 1
                                 :border-color "#ddd"
                                 :margin-vertical 20}
             :history-action-container {:flex-direction "row"
                                        :justify-content "flex-end"}
             :history-action {:background-color "#rgba(0,0,0,0)"
                              :width 30
                              :height 30
                              }})
