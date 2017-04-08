(ns run.common.rn
  (:require [reagent.core :as r]))

(def ReactNative (js/require "react-native"))

;; components
(def activity-indicator (r/adapt-react-class (.-ActivityIndicator ReactNative)))
(def button (r/adapt-react-class (.-Button ReactNative)))
(def date-picker-ios (r/adapt-react-class (.-DatePickerIOS ReactNative)))
(def drawer-layout-android (r/adapt-react-class (.-DrawerLayoutAndroid ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def image-editor (r/adapt-react-class (.-ImageEditor ReactNative)))
(def keyboard-avoiding-view (r/adapt-react-class (.-KeyboardAvoidingView ReactNative)))
(def list-view (r/adapt-react-class (.-ListView ReactNative)))
(def map-view (r/adapt-react-class (.-MapView ReactNative)))
(def modal (r/adapt-react-class (.-Modal ReactNative)))
(def navigator (r/adapt-react-class (.-Navigator ReactNative)))
(def navigator-ios (r/adapt-react-class (.-NavigatorIOS ReactNative)))
(def picker (r/adapt-react-class (.-Picker ReactNative)))
(def picker-ios (r/adapt-react-class (.-PickerIOS ReactNative)))
(def progress-bar-android (r/adapt-react-class (.-ProgressBarAndroid ReactNative)))
(def progress-view-ios (r/adapt-react-class (.-ProgressViewIOS ReactNative)))
(def refresh-control (r/adapt-react-class (.-RefreshControl ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))
(def segmented-control-ios (r/adapt-react-class (.-SegmentedControlIOS ReactNative)))
(def slider (r/adapt-react-class (.-Slider ReactNative)))
(def snapshot-view-ios (r/adapt-react-class (.-SnapshotViewIOS ReactNative)))
(def status-bar (r/adapt-react-class (.-StatusBar ReactNative)))
(def switch (r/adapt-react-class (.-Switch ReactNative)))
(def tabbar-ios (r/adapt-react-class (.-TabBarIOS ReactNative)))
(def tabbar-ios-item (r/adapt-react-class (.-Item (.-TabBarIOS ReactNative))))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def text-input (r/adapt-react-class (.-TextInput ReactNative)))
(def toast-android (r/adapt-react-class (.-ToastAndroid ReactNative)))
(def toolbar-android (r/adapt-react-class (.-ToolbarAndroid ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def touchable-native-feedback (r/adapt-react-class (.-TouchableNativeFeedback ReactNative)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity ReactNative)))
(def touchable-without-feedback (r/adapt-react-class (.-TouchableWithoutFeedback ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def view-pager-android (r/adapt-react-class (.-ViewPagerAndroid ReactNative)))
(def web-view (r/adapt-react-class (.-WebView ReactNative)))

;; ;; apis
(def action-sheet-ios  (.-ActionSheetIOS ReactNative))
(def ad-support-ios  (.-AdSupportIOS ReactNative))
(def alert  (.-Alert ReactNative))
(def alert-ios  (.-AlertIOS ReactNative))
(def animated  (.-Animated ReactNative))
(def app-registry  (.-AppRegistry ReactNative))
(def app-state  (.-AppState ReactNative))
(def async-storage  (.-AsyncStorage ReactNative))
(def back-android  (.-BackAndroid ReactNative))
(def camera-roll  (.-CameraRoll ReactNative))
(def clipboard  (.-Clipboard ReactNative))
(def date-picker-android  (.-DatePickerAndroid ReactNative))
(def dimensions  (.-Dimensions ReactNative))
(def easing  (.-Easing ReactNative))
(def image-picker-ios  (.-ImagePickerIOS ReactNative))
(def image-store  (.-ImageStore ReactNative))
(def interaction-manager  (.-InteractionManager ReactNative))
(def keyboard  (.-Keyboard ReactNative))
(def layout-animation  (.-LayoutAnimation ReactNative))
(def linking  (.-Linking ReactNative))
(def net-info  (.-NetInfo ReactNative))
(def pan-responder  (.-PanResponder ReactNative))
(def permissions-android  (.-PermissionsAndroid ReactNative))
(def pixel-ratio  (.-PixelRatio ReactNative))
(def settings  (.-Settings ReactNative))
(def share  (.-Share ReactNative))
(def status-bar-ios  (.-StatusBarIOS ReactNative))
(def style-sheet  (.-StyleSheet ReactNative))
(def systrace  (.-Systrace ReactNative))
(def time-picker-android  (.-TimePickerAndroid ReactNative))
(def vibration  (.-Vibration ReactNative))
(def vibration-ios  (.-VibrationIOS ReactNative))