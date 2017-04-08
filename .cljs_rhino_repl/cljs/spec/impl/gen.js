// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__37734__auto__,writer__37735__auto__,opt__37736__auto__){
return cljs.core._write.call(null,writer__37735__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40309 = arguments.length;
var i__38266__auto___40310 = (0);
while(true){
if((i__38266__auto___40310 < len__38265__auto___40309)){
args__38272__auto__.push((arguments[i__38266__auto___40310]));

var G__40311 = (i__38266__auto___40310 + (1));
i__38266__auto___40310 = G__40311;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq40308){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40308));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40313 = arguments.length;
var i__38266__auto___40314 = (0);
while(true){
if((i__38266__auto___40314 < len__38265__auto___40313)){
args__38272__auto__.push((arguments[i__38266__auto___40314]));

var G__40315 = (i__38266__auto___40314 + (1));
i__38266__auto___40314 = G__40315;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq40312){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40312));
});

var g_QMARK__40316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_40317 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40316){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__40316))
,null));
var mkg_40318 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__40316,g_40317){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__40316,g_40317))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__40316,g_40317,mkg_40318){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40316).call(null,x);
});})(g_QMARK__40316,g_40317,mkg_40318))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__40316,g_40317,mkg_40318){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_40318).call(null,gfn);
});})(g_QMARK__40316,g_40317,mkg_40318))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__40316,g_40317,mkg_40318){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_40317).call(null,generator);
});})(g_QMARK__40316,g_40317,mkg_40318))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__38349__auto___40336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__38349__auto___40336){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40337 = arguments.length;
var i__38266__auto___40338 = (0);
while(true){
if((i__38266__auto___40338 < len__38265__auto___40337)){
args__38272__auto__.push((arguments[i__38266__auto___40338]));

var G__40339 = (i__38266__auto___40338 + (1));
i__38266__auto___40338 = G__40339;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40336))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40336){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40336),args);
});})(g__38349__auto___40336))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__38349__auto___40336){
return (function (seq40319){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40319));
});})(g__38349__auto___40336))
;


var g__38349__auto___40340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__38349__auto___40340){
return (function cljs$spec$impl$gen$list(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40341 = arguments.length;
var i__38266__auto___40342 = (0);
while(true){
if((i__38266__auto___40342 < len__38265__auto___40341)){
args__38272__auto__.push((arguments[i__38266__auto___40342]));

var G__40343 = (i__38266__auto___40342 + (1));
i__38266__auto___40342 = G__40343;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40340))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40340){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40340),args);
});})(g__38349__auto___40340))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__38349__auto___40340){
return (function (seq40320){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40320));
});})(g__38349__auto___40340))
;


var g__38349__auto___40344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__38349__auto___40344){
return (function cljs$spec$impl$gen$map(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40345 = arguments.length;
var i__38266__auto___40346 = (0);
while(true){
if((i__38266__auto___40346 < len__38265__auto___40345)){
args__38272__auto__.push((arguments[i__38266__auto___40346]));

var G__40347 = (i__38266__auto___40346 + (1));
i__38266__auto___40346 = G__40347;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40344))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40344){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40344),args);
});})(g__38349__auto___40344))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__38349__auto___40344){
return (function (seq40321){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40321));
});})(g__38349__auto___40344))
;


var g__38349__auto___40348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__38349__auto___40348){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40349 = arguments.length;
var i__38266__auto___40350 = (0);
while(true){
if((i__38266__auto___40350 < len__38265__auto___40349)){
args__38272__auto__.push((arguments[i__38266__auto___40350]));

var G__40351 = (i__38266__auto___40350 + (1));
i__38266__auto___40350 = G__40351;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40348))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40348){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40348),args);
});})(g__38349__auto___40348))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__38349__auto___40348){
return (function (seq40322){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40322));
});})(g__38349__auto___40348))
;


var g__38349__auto___40352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__38349__auto___40352){
return (function cljs$spec$impl$gen$set(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40353 = arguments.length;
var i__38266__auto___40354 = (0);
while(true){
if((i__38266__auto___40354 < len__38265__auto___40353)){
args__38272__auto__.push((arguments[i__38266__auto___40354]));

var G__40355 = (i__38266__auto___40354 + (1));
i__38266__auto___40354 = G__40355;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40352))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40352){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40352),args);
});})(g__38349__auto___40352))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__38349__auto___40352){
return (function (seq40323){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40323));
});})(g__38349__auto___40352))
;


var g__38349__auto___40356 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__38349__auto___40356){
return (function cljs$spec$impl$gen$vector(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40357 = arguments.length;
var i__38266__auto___40358 = (0);
while(true){
if((i__38266__auto___40358 < len__38265__auto___40357)){
args__38272__auto__.push((arguments[i__38266__auto___40358]));

var G__40359 = (i__38266__auto___40358 + (1));
i__38266__auto___40358 = G__40359;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40356))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40356){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40356),args);
});})(g__38349__auto___40356))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__38349__auto___40356){
return (function (seq40324){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40324));
});})(g__38349__auto___40356))
;


var g__38349__auto___40360 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__38349__auto___40360){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40361 = arguments.length;
var i__38266__auto___40362 = (0);
while(true){
if((i__38266__auto___40362 < len__38265__auto___40361)){
args__38272__auto__.push((arguments[i__38266__auto___40362]));

var G__40363 = (i__38266__auto___40362 + (1));
i__38266__auto___40362 = G__40363;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40360))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40360){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40360),args);
});})(g__38349__auto___40360))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__38349__auto___40360){
return (function (seq40325){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40325));
});})(g__38349__auto___40360))
;


var g__38349__auto___40364 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__38349__auto___40364){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40365 = arguments.length;
var i__38266__auto___40366 = (0);
while(true){
if((i__38266__auto___40366 < len__38265__auto___40365)){
args__38272__auto__.push((arguments[i__38266__auto___40366]));

var G__40367 = (i__38266__auto___40366 + (1));
i__38266__auto___40366 = G__40367;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40364))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40364){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40364),args);
});})(g__38349__auto___40364))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__38349__auto___40364){
return (function (seq40326){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40326));
});})(g__38349__auto___40364))
;


var g__38349__auto___40368 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__38349__auto___40368){
return (function cljs$spec$impl$gen$elements(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40369 = arguments.length;
var i__38266__auto___40370 = (0);
while(true){
if((i__38266__auto___40370 < len__38265__auto___40369)){
args__38272__auto__.push((arguments[i__38266__auto___40370]));

var G__40371 = (i__38266__auto___40370 + (1));
i__38266__auto___40370 = G__40371;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40368))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40368){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40368),args);
});})(g__38349__auto___40368))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__38349__auto___40368){
return (function (seq40327){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40327));
});})(g__38349__auto___40368))
;


var g__38349__auto___40372 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__38349__auto___40372){
return (function cljs$spec$impl$gen$bind(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40373 = arguments.length;
var i__38266__auto___40374 = (0);
while(true){
if((i__38266__auto___40374 < len__38265__auto___40373)){
args__38272__auto__.push((arguments[i__38266__auto___40374]));

var G__40375 = (i__38266__auto___40374 + (1));
i__38266__auto___40374 = G__40375;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40372))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40372){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40372),args);
});})(g__38349__auto___40372))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__38349__auto___40372){
return (function (seq40328){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40328));
});})(g__38349__auto___40372))
;


var g__38349__auto___40376 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__38349__auto___40376){
return (function cljs$spec$impl$gen$choose(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40377 = arguments.length;
var i__38266__auto___40378 = (0);
while(true){
if((i__38266__auto___40378 < len__38265__auto___40377)){
args__38272__auto__.push((arguments[i__38266__auto___40378]));

var G__40379 = (i__38266__auto___40378 + (1));
i__38266__auto___40378 = G__40379;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40376))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40376){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40376),args);
});})(g__38349__auto___40376))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__38349__auto___40376){
return (function (seq40329){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40329));
});})(g__38349__auto___40376))
;


var g__38349__auto___40380 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__38349__auto___40380){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40381 = arguments.length;
var i__38266__auto___40382 = (0);
while(true){
if((i__38266__auto___40382 < len__38265__auto___40381)){
args__38272__auto__.push((arguments[i__38266__auto___40382]));

var G__40383 = (i__38266__auto___40382 + (1));
i__38266__auto___40382 = G__40383;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40380))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40380){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40380),args);
});})(g__38349__auto___40380))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__38349__auto___40380){
return (function (seq40330){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40330));
});})(g__38349__auto___40380))
;


var g__38349__auto___40384 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__38349__auto___40384){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40385 = arguments.length;
var i__38266__auto___40386 = (0);
while(true){
if((i__38266__auto___40386 < len__38265__auto___40385)){
args__38272__auto__.push((arguments[i__38266__auto___40386]));

var G__40387 = (i__38266__auto___40386 + (1));
i__38266__auto___40386 = G__40387;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40384))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40384){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40384),args);
});})(g__38349__auto___40384))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__38349__auto___40384){
return (function (seq40331){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40331));
});})(g__38349__auto___40384))
;


var g__38349__auto___40388 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__38349__auto___40388){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40389 = arguments.length;
var i__38266__auto___40390 = (0);
while(true){
if((i__38266__auto___40390 < len__38265__auto___40389)){
args__38272__auto__.push((arguments[i__38266__auto___40390]));

var G__40391 = (i__38266__auto___40390 + (1));
i__38266__auto___40390 = G__40391;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40388))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40388){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40388),args);
});})(g__38349__auto___40388))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__38349__auto___40388){
return (function (seq40332){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40332));
});})(g__38349__auto___40388))
;


var g__38349__auto___40392 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__38349__auto___40392){
return (function cljs$spec$impl$gen$sample(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40393 = arguments.length;
var i__38266__auto___40394 = (0);
while(true){
if((i__38266__auto___40394 < len__38265__auto___40393)){
args__38272__auto__.push((arguments[i__38266__auto___40394]));

var G__40395 = (i__38266__auto___40394 + (1));
i__38266__auto___40394 = G__40395;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40392))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40392){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40392),args);
});})(g__38349__auto___40392))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__38349__auto___40392){
return (function (seq40333){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40333));
});})(g__38349__auto___40392))
;


var g__38349__auto___40396 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__38349__auto___40396){
return (function cljs$spec$impl$gen$return(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40397 = arguments.length;
var i__38266__auto___40398 = (0);
while(true){
if((i__38266__auto___40398 < len__38265__auto___40397)){
args__38272__auto__.push((arguments[i__38266__auto___40398]));

var G__40399 = (i__38266__auto___40398 + (1));
i__38266__auto___40398 = G__40399;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40396))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40396){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40396),args);
});})(g__38349__auto___40396))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__38349__auto___40396){
return (function (seq40334){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40334));
});})(g__38349__auto___40396))
;


var g__38349__auto___40400 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__38349__auto___40400){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40401 = arguments.length;
var i__38266__auto___40402 = (0);
while(true){
if((i__38266__auto___40402 < len__38265__auto___40401)){
args__38272__auto__.push((arguments[i__38266__auto___40402]));

var G__40403 = (i__38266__auto___40402 + (1));
i__38266__auto___40402 = G__40403;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38349__auto___40400))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38349__auto___40400){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__38349__auto___40400),args);
});})(g__38349__auto___40400))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__38349__auto___40400){
return (function (seq40335){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40335));
});})(g__38349__auto___40400))
;

var g__38362__auto___40425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__38362__auto___40425){
return (function cljs$spec$impl$gen$any(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40426 = arguments.length;
var i__38266__auto___40427 = (0);
while(true){
if((i__38266__auto___40427 < len__38265__auto___40426)){
args__38272__auto__.push((arguments[i__38266__auto___40427]));

var G__40428 = (i__38266__auto___40427 + (1));
i__38266__auto___40427 = G__40428;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40425))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40425){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40425);
});})(g__38362__auto___40425))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__38362__auto___40425){
return (function (seq40404){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40404));
});})(g__38362__auto___40425))
;


var g__38362__auto___40429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__38362__auto___40429){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40430 = arguments.length;
var i__38266__auto___40431 = (0);
while(true){
if((i__38266__auto___40431 < len__38265__auto___40430)){
args__38272__auto__.push((arguments[i__38266__auto___40431]));

var G__40432 = (i__38266__auto___40431 + (1));
i__38266__auto___40431 = G__40432;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40429))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40429){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40429);
});})(g__38362__auto___40429))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__38362__auto___40429){
return (function (seq40405){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40405));
});})(g__38362__auto___40429))
;


var g__38362__auto___40433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__38362__auto___40433){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40434 = arguments.length;
var i__38266__auto___40435 = (0);
while(true){
if((i__38266__auto___40435 < len__38265__auto___40434)){
args__38272__auto__.push((arguments[i__38266__auto___40435]));

var G__40436 = (i__38266__auto___40435 + (1));
i__38266__auto___40435 = G__40436;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40433))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40433){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40433);
});})(g__38362__auto___40433))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__38362__auto___40433){
return (function (seq40406){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40406));
});})(g__38362__auto___40433))
;


var g__38362__auto___40437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__38362__auto___40437){
return (function cljs$spec$impl$gen$char(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40438 = arguments.length;
var i__38266__auto___40439 = (0);
while(true){
if((i__38266__auto___40439 < len__38265__auto___40438)){
args__38272__auto__.push((arguments[i__38266__auto___40439]));

var G__40440 = (i__38266__auto___40439 + (1));
i__38266__auto___40439 = G__40440;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40437))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40437){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40437);
});})(g__38362__auto___40437))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__38362__auto___40437){
return (function (seq40407){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40407));
});})(g__38362__auto___40437))
;


var g__38362__auto___40441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__38362__auto___40441){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40442 = arguments.length;
var i__38266__auto___40443 = (0);
while(true){
if((i__38266__auto___40443 < len__38265__auto___40442)){
args__38272__auto__.push((arguments[i__38266__auto___40443]));

var G__40444 = (i__38266__auto___40443 + (1));
i__38266__auto___40443 = G__40444;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40441))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40441){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40441);
});})(g__38362__auto___40441))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__38362__auto___40441){
return (function (seq40408){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40408));
});})(g__38362__auto___40441))
;


var g__38362__auto___40445 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__38362__auto___40445){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40446 = arguments.length;
var i__38266__auto___40447 = (0);
while(true){
if((i__38266__auto___40447 < len__38265__auto___40446)){
args__38272__auto__.push((arguments[i__38266__auto___40447]));

var G__40448 = (i__38266__auto___40447 + (1));
i__38266__auto___40447 = G__40448;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40445))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40445){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40445);
});})(g__38362__auto___40445))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__38362__auto___40445){
return (function (seq40409){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40409));
});})(g__38362__auto___40445))
;


var g__38362__auto___40449 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__38362__auto___40449){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40450 = arguments.length;
var i__38266__auto___40451 = (0);
while(true){
if((i__38266__auto___40451 < len__38265__auto___40450)){
args__38272__auto__.push((arguments[i__38266__auto___40451]));

var G__40452 = (i__38266__auto___40451 + (1));
i__38266__auto___40451 = G__40452;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40449))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40449){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40449);
});})(g__38362__auto___40449))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__38362__auto___40449){
return (function (seq40410){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40410));
});})(g__38362__auto___40449))
;


var g__38362__auto___40453 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__38362__auto___40453){
return (function cljs$spec$impl$gen$double(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40454 = arguments.length;
var i__38266__auto___40455 = (0);
while(true){
if((i__38266__auto___40455 < len__38265__auto___40454)){
args__38272__auto__.push((arguments[i__38266__auto___40455]));

var G__40456 = (i__38266__auto___40455 + (1));
i__38266__auto___40455 = G__40456;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40453))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40453){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40453);
});})(g__38362__auto___40453))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__38362__auto___40453){
return (function (seq40411){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40411));
});})(g__38362__auto___40453))
;


var g__38362__auto___40457 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__38362__auto___40457){
return (function cljs$spec$impl$gen$int(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40458 = arguments.length;
var i__38266__auto___40459 = (0);
while(true){
if((i__38266__auto___40459 < len__38265__auto___40458)){
args__38272__auto__.push((arguments[i__38266__auto___40459]));

var G__40460 = (i__38266__auto___40459 + (1));
i__38266__auto___40459 = G__40460;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40457))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40457){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40457);
});})(g__38362__auto___40457))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__38362__auto___40457){
return (function (seq40412){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40412));
});})(g__38362__auto___40457))
;


var g__38362__auto___40461 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__38362__auto___40461){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40462 = arguments.length;
var i__38266__auto___40463 = (0);
while(true){
if((i__38266__auto___40463 < len__38265__auto___40462)){
args__38272__auto__.push((arguments[i__38266__auto___40463]));

var G__40464 = (i__38266__auto___40463 + (1));
i__38266__auto___40463 = G__40464;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40461))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40461){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40461);
});})(g__38362__auto___40461))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__38362__auto___40461){
return (function (seq40413){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40413));
});})(g__38362__auto___40461))
;


var g__38362__auto___40465 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__38362__auto___40465){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40466 = arguments.length;
var i__38266__auto___40467 = (0);
while(true){
if((i__38266__auto___40467 < len__38265__auto___40466)){
args__38272__auto__.push((arguments[i__38266__auto___40467]));

var G__40468 = (i__38266__auto___40467 + (1));
i__38266__auto___40467 = G__40468;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40465))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40465){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40465);
});})(g__38362__auto___40465))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__38362__auto___40465){
return (function (seq40414){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40414));
});})(g__38362__auto___40465))
;


var g__38362__auto___40469 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__38362__auto___40469){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40470 = arguments.length;
var i__38266__auto___40471 = (0);
while(true){
if((i__38266__auto___40471 < len__38265__auto___40470)){
args__38272__auto__.push((arguments[i__38266__auto___40471]));

var G__40472 = (i__38266__auto___40471 + (1));
i__38266__auto___40471 = G__40472;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40469))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40469){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40469);
});})(g__38362__auto___40469))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__38362__auto___40469){
return (function (seq40415){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40415));
});})(g__38362__auto___40469))
;


var g__38362__auto___40473 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__38362__auto___40473){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40474 = arguments.length;
var i__38266__auto___40475 = (0);
while(true){
if((i__38266__auto___40475 < len__38265__auto___40474)){
args__38272__auto__.push((arguments[i__38266__auto___40475]));

var G__40476 = (i__38266__auto___40475 + (1));
i__38266__auto___40475 = G__40476;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40473))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40473){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40473);
});})(g__38362__auto___40473))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__38362__auto___40473){
return (function (seq40416){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40416));
});})(g__38362__auto___40473))
;


var g__38362__auto___40477 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__38362__auto___40477){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40478 = arguments.length;
var i__38266__auto___40479 = (0);
while(true){
if((i__38266__auto___40479 < len__38265__auto___40478)){
args__38272__auto__.push((arguments[i__38266__auto___40479]));

var G__40480 = (i__38266__auto___40479 + (1));
i__38266__auto___40479 = G__40480;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40477))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40477){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40477);
});})(g__38362__auto___40477))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__38362__auto___40477){
return (function (seq40417){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40417));
});})(g__38362__auto___40477))
;


var g__38362__auto___40481 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__38362__auto___40481){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40482 = arguments.length;
var i__38266__auto___40483 = (0);
while(true){
if((i__38266__auto___40483 < len__38265__auto___40482)){
args__38272__auto__.push((arguments[i__38266__auto___40483]));

var G__40484 = (i__38266__auto___40483 + (1));
i__38266__auto___40483 = G__40484;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40481))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40481){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40481);
});})(g__38362__auto___40481))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__38362__auto___40481){
return (function (seq40418){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40418));
});})(g__38362__auto___40481))
;


var g__38362__auto___40485 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__38362__auto___40485){
return (function cljs$spec$impl$gen$string(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40486 = arguments.length;
var i__38266__auto___40487 = (0);
while(true){
if((i__38266__auto___40487 < len__38265__auto___40486)){
args__38272__auto__.push((arguments[i__38266__auto___40487]));

var G__40488 = (i__38266__auto___40487 + (1));
i__38266__auto___40487 = G__40488;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40485))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40485){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40485);
});})(g__38362__auto___40485))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__38362__auto___40485){
return (function (seq40419){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40419));
});})(g__38362__auto___40485))
;


var g__38362__auto___40489 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__38362__auto___40489){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40490 = arguments.length;
var i__38266__auto___40491 = (0);
while(true){
if((i__38266__auto___40491 < len__38265__auto___40490)){
args__38272__auto__.push((arguments[i__38266__auto___40491]));

var G__40492 = (i__38266__auto___40491 + (1));
i__38266__auto___40491 = G__40492;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40489))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40489){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40489);
});})(g__38362__auto___40489))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__38362__auto___40489){
return (function (seq40420){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40420));
});})(g__38362__auto___40489))
;


var g__38362__auto___40493 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__38362__auto___40493){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40494 = arguments.length;
var i__38266__auto___40495 = (0);
while(true){
if((i__38266__auto___40495 < len__38265__auto___40494)){
args__38272__auto__.push((arguments[i__38266__auto___40495]));

var G__40496 = (i__38266__auto___40495 + (1));
i__38266__auto___40495 = G__40496;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40493))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40493){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40493);
});})(g__38362__auto___40493))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__38362__auto___40493){
return (function (seq40421){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40421));
});})(g__38362__auto___40493))
;


var g__38362__auto___40497 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__38362__auto___40497){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40498 = arguments.length;
var i__38266__auto___40499 = (0);
while(true){
if((i__38266__auto___40499 < len__38265__auto___40498)){
args__38272__auto__.push((arguments[i__38266__auto___40499]));

var G__40500 = (i__38266__auto___40499 + (1));
i__38266__auto___40499 = G__40500;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40497))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40497){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40497);
});})(g__38362__auto___40497))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__38362__auto___40497){
return (function (seq40422){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40422));
});})(g__38362__auto___40497))
;


var g__38362__auto___40501 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__38362__auto___40501){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40502 = arguments.length;
var i__38266__auto___40503 = (0);
while(true){
if((i__38266__auto___40503 < len__38265__auto___40502)){
args__38272__auto__.push((arguments[i__38266__auto___40503]));

var G__40504 = (i__38266__auto___40503 + (1));
i__38266__auto___40503 = G__40504;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40501))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40501){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40501);
});})(g__38362__auto___40501))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__38362__auto___40501){
return (function (seq40423){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40423));
});})(g__38362__auto___40501))
;


var g__38362__auto___40505 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__38362__auto___40505){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40506 = arguments.length;
var i__38266__auto___40507 = (0);
while(true){
if((i__38266__auto___40507 < len__38265__auto___40506)){
args__38272__auto__.push((arguments[i__38266__auto___40507]));

var G__40508 = (i__38266__auto___40507 + (1));
i__38266__auto___40507 = G__40508;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});})(g__38362__auto___40505))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__38362__auto___40505){
return (function (args){
return cljs.core.deref.call(null,g__38362__auto___40505);
});})(g__38362__auto___40505))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__38362__auto___40505){
return (function (seq40424){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40424));
});})(g__38362__auto___40505))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__38272__auto__ = [];
var len__38265__auto___40511 = arguments.length;
var i__38266__auto___40512 = (0);
while(true){
if((i__38266__auto___40512 < len__38265__auto___40511)){
args__38272__auto__.push((arguments[i__38266__auto___40512]));

var G__40513 = (i__38266__auto___40512 + (1));
i__38266__auto___40512 = G__40513;
continue;
} else {
}
break;
}

var argseq__38273__auto__ = ((((0) < args__38272__auto__.length))?(new cljs.core.IndexedSeq(args__38272__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__38273__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__40509_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40509_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq40510){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40510));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__40514_SHARP_){
return (new Date(p1__40514_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map