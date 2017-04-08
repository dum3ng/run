// Compiled by ClojureScript 1.9.198 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39329){
var map__39354 = p__39329;
var map__39354__$1 = ((((!((map__39354 == null)))?((((map__39354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39354):map__39354);
var m = map__39354__$1;
var n = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39356_39378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39357_39379 = null;
var count__39358_39380 = (0);
var i__39359_39381 = (0);
while(true){
if((i__39359_39381 < count__39358_39380)){
var f_39382 = cljs.core._nth.call(null,chunk__39357_39379,i__39359_39381);
cljs.core.println.call(null,"  ",f_39382);

var G__39383 = seq__39356_39378;
var G__39384 = chunk__39357_39379;
var G__39385 = count__39358_39380;
var G__39386 = (i__39359_39381 + (1));
seq__39356_39378 = G__39383;
chunk__39357_39379 = G__39384;
count__39358_39380 = G__39385;
i__39359_39381 = G__39386;
continue;
} else {
var temp__6503__auto___39387 = cljs.core.seq.call(null,seq__39356_39378);
if(temp__6503__auto___39387){
var seq__39356_39388__$1 = temp__6503__auto___39387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39356_39388__$1)){
var c__37985__auto___39389 = cljs.core.chunk_first.call(null,seq__39356_39388__$1);
var G__39390 = cljs.core.chunk_rest.call(null,seq__39356_39388__$1);
var G__39391 = c__37985__auto___39389;
var G__39392 = cljs.core.count.call(null,c__37985__auto___39389);
var G__39393 = (0);
seq__39356_39378 = G__39390;
chunk__39357_39379 = G__39391;
count__39358_39380 = G__39392;
i__39359_39381 = G__39393;
continue;
} else {
var f_39394 = cljs.core.first.call(null,seq__39356_39388__$1);
cljs.core.println.call(null,"  ",f_39394);

var G__39395 = cljs.core.next.call(null,seq__39356_39388__$1);
var G__39396 = null;
var G__39397 = (0);
var G__39398 = (0);
seq__39356_39378 = G__39395;
chunk__39357_39379 = G__39396;
count__39358_39380 = G__39397;
i__39359_39381 = G__39398;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39399 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__37082__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__37082__auto__)){
return or__37082__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39399);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39399)))?cljs.core.second.call(null,arglists_39399):arglists_39399));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39360_39400 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39361_39401 = null;
var count__39362_39402 = (0);
var i__39363_39403 = (0);
while(true){
if((i__39363_39403 < count__39362_39402)){
var vec__39364_39404 = cljs.core._nth.call(null,chunk__39361_39401,i__39363_39403);
var name_39405 = cljs.core.nth.call(null,vec__39364_39404,(0),null);
var map__39367_39406 = cljs.core.nth.call(null,vec__39364_39404,(1),null);
var map__39367_39407__$1 = ((((!((map__39367_39406 == null)))?((((map__39367_39406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39367_39406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39367_39406):map__39367_39406);
var doc_39408 = cljs.core.get.call(null,map__39367_39407__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39409 = cljs.core.get.call(null,map__39367_39407__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39405);

cljs.core.println.call(null," ",arglists_39409);

if(cljs.core.truth_(doc_39408)){
cljs.core.println.call(null," ",doc_39408);
} else {
}

var G__39410 = seq__39360_39400;
var G__39411 = chunk__39361_39401;
var G__39412 = count__39362_39402;
var G__39413 = (i__39363_39403 + (1));
seq__39360_39400 = G__39410;
chunk__39361_39401 = G__39411;
count__39362_39402 = G__39412;
i__39363_39403 = G__39413;
continue;
} else {
var temp__6503__auto___39414 = cljs.core.seq.call(null,seq__39360_39400);
if(temp__6503__auto___39414){
var seq__39360_39415__$1 = temp__6503__auto___39414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39360_39415__$1)){
var c__37985__auto___39416 = cljs.core.chunk_first.call(null,seq__39360_39415__$1);
var G__39417 = cljs.core.chunk_rest.call(null,seq__39360_39415__$1);
var G__39418 = c__37985__auto___39416;
var G__39419 = cljs.core.count.call(null,c__37985__auto___39416);
var G__39420 = (0);
seq__39360_39400 = G__39417;
chunk__39361_39401 = G__39418;
count__39362_39402 = G__39419;
i__39363_39403 = G__39420;
continue;
} else {
var vec__39369_39421 = cljs.core.first.call(null,seq__39360_39415__$1);
var name_39422 = cljs.core.nth.call(null,vec__39369_39421,(0),null);
var map__39372_39423 = cljs.core.nth.call(null,vec__39369_39421,(1),null);
var map__39372_39424__$1 = ((((!((map__39372_39423 == null)))?((((map__39372_39423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39372_39423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39372_39423):map__39372_39423);
var doc_39425 = cljs.core.get.call(null,map__39372_39424__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39426 = cljs.core.get.call(null,map__39372_39424__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39422);

cljs.core.println.call(null," ",arglists_39426);

if(cljs.core.truth_(doc_39425)){
cljs.core.println.call(null," ",doc_39425);
} else {
}

var G__39427 = cljs.core.next.call(null,seq__39360_39415__$1);
var G__39428 = null;
var G__39429 = (0);
var G__39430 = (0);
seq__39360_39400 = G__39427;
chunk__39361_39401 = G__39428;
count__39362_39402 = G__39429;
i__39363_39403 = G__39430;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__39374 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39375 = null;
var count__39376 = (0);
var i__39377 = (0);
while(true){
if((i__39377 < count__39376)){
var role = cljs.core._nth.call(null,chunk__39375,i__39377);
var temp__6503__auto___39431__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39431__$1)){
var spec_39432 = temp__6503__auto___39431__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39432));
} else {
}

var G__39433 = seq__39374;
var G__39434 = chunk__39375;
var G__39435 = count__39376;
var G__39436 = (i__39377 + (1));
seq__39374 = G__39433;
chunk__39375 = G__39434;
count__39376 = G__39435;
i__39377 = G__39436;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__39374);
if(temp__6503__auto____$1){
var seq__39374__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39374__$1)){
var c__37985__auto__ = cljs.core.chunk_first.call(null,seq__39374__$1);
var G__39437 = cljs.core.chunk_rest.call(null,seq__39374__$1);
var G__39438 = c__37985__auto__;
var G__39439 = cljs.core.count.call(null,c__37985__auto__);
var G__39440 = (0);
seq__39374 = G__39437;
chunk__39375 = G__39438;
count__39376 = G__39439;
i__39377 = G__39440;
continue;
} else {
var role = cljs.core.first.call(null,seq__39374__$1);
var temp__6503__auto___39441__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___39441__$2)){
var spec_39442 = temp__6503__auto___39441__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39442));
} else {
}

var G__39443 = cljs.core.next.call(null,seq__39374__$1);
var G__39444 = null;
var G__39445 = (0);
var G__39446 = (0);
seq__39374 = G__39443;
chunk__39375 = G__39444;
count__39376 = G__39445;
i__39377 = G__39446;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map