(ns run.common.utils-test
  (:require [cljs.test :refer-macros [deftest
                                      is
                                      testing
                                      run-tests]]
            [run.common.utils :as u]            )
  )


(deftest padding-test
  (testing "padding test"
    (is (= (u/padding 32 3) "032"))
    (is (= (u/padding 32 4) "0032"))
    (is (= (u/padding 230 2) "230"))))

(deftest format-date-test
  (testing "format date test"
    (let [dt ( js/Date. "2017-01-01T00:00:00+0800")]
      (is (= (u/format-date dt)
             "2017年1月1日 00:00")))))
