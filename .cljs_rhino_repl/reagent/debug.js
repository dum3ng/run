// Compiled by ClojureScript 1.9.198 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__41197__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41197 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41198__i = 0, G__41198__a = new Array(arguments.length -  0);
while (G__41198__i < G__41198__a.length) {G__41198__a[G__41198__i] = arguments[G__41198__i + 0]; ++G__41198__i;}
  args = new cljs.core.IndexedSeq(G__41198__a,0);
} 
return G__41197__delegate.call(this,args);};
G__41197.cljs$lang$maxFixedArity = 0;
G__41197.cljs$lang$applyTo = (function (arglist__41199){
var args = cljs.core.seq(arglist__41199);
return G__41197__delegate(args);
});
G__41197.cljs$core$IFn$_invoke$arity$variadic = G__41197__delegate;
return G__41197;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__41200__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__41200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41201__i = 0, G__41201__a = new Array(arguments.length -  0);
while (G__41201__i < G__41201__a.length) {G__41201__a[G__41201__i] = arguments[G__41201__i + 0]; ++G__41201__i;}
  args = new cljs.core.IndexedSeq(G__41201__a,0);
} 
return G__41200__delegate.call(this,args);};
G__41200.cljs$lang$maxFixedArity = 0;
G__41200.cljs$lang$applyTo = (function (arglist__41202){
var args = cljs.core.seq(arglist__41202);
return G__41200__delegate(args);
});
G__41200.cljs$core$IFn$_invoke$arity$variadic = G__41200__delegate;
return G__41200;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map