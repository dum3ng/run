(ns run.db
  (:require [clojure.spec :as s]))

;; spec of app-db
;; (s/def ::greeting string?)
;; (s/def ::app-db
;;   (s/keys :req-un [::greeting]))
(def DataSource (.. (js/require "realm/react-native") -ListView -DataSource))

;; initial state of app-db
(def app-db {:greeting "Hello Clojure in iOS and Android!"
             :profile nil
             :histories nil
             :history-ds (DataSource. #js{:rowHasChanged  #(identical? %1 %2)})
             :map-ref nil
             :need-refresh false})
