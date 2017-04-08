// Compiled by ClojureScript 1.9.198 {}
goog.provide('run.ios.view_weather');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('run.common.rn');
goog.require('run.common.art');
run.ios.view_weather.api_string = "https://api.darksky.net/forecast/b4c20f90fcf2ee6a4d314fc8326b78a4/";
run.ios.view_weather.get_city = (function run$ios$view_weather$get_city(tz){
return cljs.core.fnext.call(null,clojure.string.split.call(null,tz,/\//));
});
run.ios.view_weather.org_data = (function run$ios$view_weather$org_data(data){
var location = run.ios.view_weather.get_city.call(null,data.timezone.call(null));
var summary = data.hourly.summary.call(null);
var ds = data.hourly.data.slice((0),(5));
var temps = ds.map(((function (location,summary,ds){
return (function (p1__41571_SHARP_){
return (p1__41571_SHARP_["temperature"]);
});})(location,summary,ds))
);
var precip = ds.map(((function (location,summary,ds,temps){
return (function (p1__41572_SHARP_){
return (p1__41572_SHARP_["precipProbability"]);
});})(location,summary,ds,temps))
);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"location","location",1815599388),location,new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"temps","temps",388387773),cljs.core.js__GT_clj.call(null,temps),new cljs.core.Keyword(null,"precips","precips",1542270898),cljs.core.js__GT_clj.call(null,precip)], null);
});
run.ios.view_weather.view_weather = (function run$ios$view_weather$view_weather(){
var data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var fetching = reagent.core.atom.call(null,true);
return ((function (data,fetching){
return (function (){
navigator.geolocation.getCurrentPosition(((function (data,fetching){
return (function (pos){
var coords = cljs.core.js__GT_clj.call(null,pos.coords,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return fetch([cljs.core.str(run.ios.view_weather.api_string),cljs.core.str(new cljs.core.Keyword(null,"latitude","latitude",394867543).cljs$core$IFn$_invoke$arity$1(coords)),cljs.core.str(","),cljs.core.str(new cljs.core.Keyword(null,"longitude","longitude",-1268876372).cljs$core$IFn$_invoke$arity$1(coords))].join('')).then(((function (coords,data,fetching){
return (function (response){
return response.json();
});})(coords,data,fetching))
).then(((function (coords,data,fetching){
return (function (json){
cljs.core.reset_BANG_.call(null,data,run.ios.view_weather.org_data.call(null,json));

return cljs.core.reset_BANG_.call(null,fetching,false);
});})(coords,data,fetching))
);
});})(data,fetching))
);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(50)], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,fetching))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.text,"fetching data..."], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),"Your Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.text,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.rn.text,"temperature in next 4 hour"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.art.surface,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.art.group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [run.common.art.shape,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),"",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#2ca02c",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(3)], null)], null)], null)], null)], null))], null);
});
;})(data,fetching))
});

//# sourceMappingURL=view_weather.js.map