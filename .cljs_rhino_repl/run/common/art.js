// Compiled by ClojureScript 1.9.198 {}
goog.provide('run.common.art');
goog.require('cljs.core');
goog.require('reagent.core');
run.common.art.RN = require("react-native");
run.common.art.ART = run.common.art.RN.ART;
run.common.art.surface = reagent.core.adapt_react_class.call(null,run.common.art.ART.Surface);
run.common.art.group = reagent.core.adapt_react_class.call(null,run.common.art.ART.Group);
run.common.art.shape = reagent.core.adapt_react_class.call(null,run.common.art.ART.Shape);
run.common.art.clipping_rectangle = reagent.core.adapt_react_class.call(null,run.common.art.ART.ClippingRectangle);
run.common.art.text = reagent.core.adapt_react_class.call(null,run.common.art.ART.Text);
run.common.art.Pattern = run.common.art.ART.Pattern;
run.common.art.Path = run.common.art.ART.Path;
run.common.art.LinearGradient = run.common.art.ART.LinearGradient;
run.common.art.RadialGradient = run.common.art.ART.RadialGradient;
run.common.art.Transform = run.common.art.ART.Transform;
run.common.art.add = (function run$common$art$add(a){
return (a + (3));
});

//# sourceMappingURL=art.js.map