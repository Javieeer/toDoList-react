(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Td={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function wS(){if(E_)return hl;E_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var g in o)g!=="key"&&(u[g]=o[g])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return hl.Fragment=t,hl.jsx=n,hl.jsxs=n,hl}var A_;function RS(){return A_||(A_=1,Td.exports=wS()),Td.exports}var st=RS(),Ed={exports:{}},fl={},Ad={exports:{}},Sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function IS(){return S_||(S_=1,function(r){function t(H,tt){var ot=H.length;H.push(tt);t:for(;0<ot;){var zt=ot-1>>>1,D=H[zt];if(0<o(D,tt))H[zt]=tt,H[ot]=D,ot=zt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var tt=H[0],ot=H.pop();if(ot!==tt){H[0]=ot;t:for(var zt=0,D=H.length,Y=D>>>1;zt<Y;){var et=2*(zt+1)-1,J=H[et],ut=et+1,Ct=H[ut];if(0>o(J,ot))ut<D&&0>o(Ct,J)?(H[zt]=Ct,H[ut]=ot,zt=ut):(H[zt]=J,H[et]=ot,zt=et);else if(ut<D&&0>o(Ct,ot))H[zt]=Ct,H[ut]=ot,zt=ut;else break t}}return tt}function o(H,tt){var ot=H.sortIndex-tt.sortIndex;return ot!==0?ot:H.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var p=[],y=[],A=1,C=null,k=3,q=!1,Z=!1,nt=!1,$=!1,At=typeof setTimeout=="function"?setTimeout:null,vt=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function Rt(H){for(var tt=n(y);tt!==null;){if(tt.callback===null)s(y);else if(tt.startTime<=H)s(y),tt.sortIndex=tt.expirationTime,t(p,tt);else break;tt=n(y)}}function pt(H){if(nt=!1,Rt(H),!Z)if(n(p)!==null)Z=!0,It||(It=!0,V());else{var tt=n(y);tt!==null&&jt(pt,tt.startTime-H)}}var It=!1,M=-1,S=5,R=-1;function N(){return $?!0:!(r.unstable_now()-R<S)}function I(){if($=!1,It){var H=r.unstable_now();R=H;var tt=!0;try{t:{Z=!1,nt&&(nt=!1,vt(M),M=-1),q=!0;var ot=k;try{e:{for(Rt(H),C=n(p);C!==null&&!(C.expirationTime>H&&N());){var zt=C.callback;if(typeof zt=="function"){C.callback=null,k=C.priorityLevel;var D=zt(C.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){C.callback=D,Rt(H),tt=!0;break e}C===n(p)&&s(p),Rt(H)}else s(p);C=n(p)}if(C!==null)tt=!0;else{var Y=n(y);Y!==null&&jt(pt,Y.startTime-H),tt=!1}}break t}finally{C=null,k=ot,q=!1}tt=void 0}}finally{tt?V():It=!1}}}var V;if(typeof ht=="function")V=function(){ht(I)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,te=w.port2;w.port1.onmessage=I,V=function(){te.postMessage(null)}}else V=function(){At(I,0)};function jt(H,tt){M=At(function(){H(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_next=function(H){switch(k){case 1:case 2:case 3:var tt=3;break;default:tt=k}var ot=k;k=tt;try{return H()}finally{k=ot}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(H,tt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ot=k;k=H;try{return tt()}finally{k=ot}},r.unstable_scheduleCallback=function(H,tt,ot){var zt=r.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?zt+ot:zt):ot=zt,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ot+D,H={id:A++,callback:tt,priorityLevel:H,startTime:ot,expirationTime:D,sortIndex:-1},ot>zt?(H.sortIndex=ot,t(y,H),n(p)===null&&H===n(y)&&(nt?(vt(M),M=-1):nt=!0,jt(pt,ot-zt))):(H.sortIndex=D,t(p,H),Z||q||(Z=!0,It||(It=!0,V()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var tt=k;return function(){var ot=k;k=tt;try{return H.apply(this,arguments)}finally{k=ot}}}}(Sd)),Sd}var b_;function CS(){return b_||(b_=1,Ad.exports=IS()),Ad.exports}var bd={exports:{}},St={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function DS(){if(w_)return St;w_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function k(D){return D===null||typeof D!="object"?null:(D=C&&D[C]||D["@@iterator"],typeof D=="function"?D:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,nt={};function $(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||q}$.prototype.isReactComponent={},$.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},$.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function At(){}At.prototype=$.prototype;function vt(D,Y,et){this.props=D,this.context=Y,this.refs=nt,this.updater=et||q}var ht=vt.prototype=new At;ht.constructor=vt,Z(ht,$.prototype),ht.isPureReactComponent=!0;var Rt=Array.isArray,pt={H:null,A:null,T:null,S:null,V:null},It=Object.prototype.hasOwnProperty;function M(D,Y,et,J,ut,Ct){return et=Ct.ref,{$$typeof:r,type:D,key:Y,ref:et!==void 0?et:null,props:Ct}}function S(D,Y){return M(D.type,Y,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(et){return Y[et]})}var I=/\/+/g;function V(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):Y.toString(36)}function w(){}function te(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(w,w):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function jt(D,Y,et,J,ut){var Ct=typeof D;(Ct==="undefined"||Ct==="boolean")&&(D=null);var _t=!1;if(D===null)_t=!0;else switch(Ct){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(D.$$typeof){case r:case t:_t=!0;break;case A:return _t=D._init,jt(_t(D._payload),Y,et,J,ut)}}if(_t)return ut=ut(D),_t=J===""?"."+V(D,0):J,Rt(ut)?(et="",_t!=null&&(et=_t.replace(I,"$&/")+"/"),jt(ut,Y,et,"",function(Fn){return Fn})):ut!=null&&(R(ut)&&(ut=S(ut,et+(ut.key==null||D&&D.key===ut.key?"":(""+ut.key).replace(I,"$&/")+"/")+_t)),Y.push(ut)),1;_t=0;var Re=J===""?".":J+":";if(Rt(D))for(var Jt=0;Jt<D.length;Jt++)J=D[Jt],Ct=Re+V(J,Jt),_t+=jt(J,Y,et,Ct,ut);else if(Jt=k(D),typeof Jt=="function")for(D=Jt.call(D),Jt=0;!(J=D.next()).done;)J=J.value,Ct=Re+V(J,Jt++),_t+=jt(J,Y,et,Ct,ut);else if(Ct==="object"){if(typeof D.then=="function")return jt(te(D),Y,et,J,ut);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return _t}function H(D,Y,et){if(D==null)return D;var J=[],ut=0;return jt(D,J,"","",function(Ct){return Y.call(et,Ct,ut++)}),J}function tt(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(et){(D._status===0||D._status===-1)&&(D._status=1,D._result=et)},function(et){(D._status===0||D._status===-1)&&(D._status=2,D._result=et)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var ot=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function zt(){}return St.Children={map:H,forEach:function(D,Y,et){H(D,function(){Y.apply(this,arguments)},et)},count:function(D){var Y=0;return H(D,function(){Y++}),Y},toArray:function(D){return H(D,function(Y){return Y})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},St.Component=$,St.Fragment=n,St.Profiler=o,St.PureComponent=vt,St.StrictMode=s,St.Suspense=p,St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,St.__COMPILER_RUNTIME={__proto__:null,c:function(D){return pt.H.useMemoCache(D)}},St.cache=function(D){return function(){return D.apply(null,arguments)}},St.cloneElement=function(D,Y,et){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=Z({},D.props),ut=D.key,Ct=void 0;if(Y!=null)for(_t in Y.ref!==void 0&&(Ct=void 0),Y.key!==void 0&&(ut=""+Y.key),Y)!It.call(Y,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&Y.ref===void 0||(J[_t]=Y[_t]);var _t=arguments.length-2;if(_t===1)J.children=et;else if(1<_t){for(var Re=Array(_t),Jt=0;Jt<_t;Jt++)Re[Jt]=arguments[Jt+2];J.children=Re}return M(D.type,ut,void 0,void 0,Ct,J)},St.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},St.createElement=function(D,Y,et){var J,ut={},Ct=null;if(Y!=null)for(J in Y.key!==void 0&&(Ct=""+Y.key),Y)It.call(Y,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ut[J]=Y[J]);var _t=arguments.length-2;if(_t===1)ut.children=et;else if(1<_t){for(var Re=Array(_t),Jt=0;Jt<_t;Jt++)Re[Jt]=arguments[Jt+2];ut.children=Re}if(D&&D.defaultProps)for(J in _t=D.defaultProps,_t)ut[J]===void 0&&(ut[J]=_t[J]);return M(D,Ct,void 0,void 0,null,ut)},St.createRef=function(){return{current:null}},St.forwardRef=function(D){return{$$typeof:g,render:D}},St.isValidElement=R,St.lazy=function(D){return{$$typeof:A,_payload:{_status:-1,_result:D},_init:tt}},St.memo=function(D,Y){return{$$typeof:y,type:D,compare:Y===void 0?null:Y}},St.startTransition=function(D){var Y=pt.T,et={};pt.T=et;try{var J=D(),ut=pt.S;ut!==null&&ut(et,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(zt,ot)}catch(Ct){ot(Ct)}finally{pt.T=Y}},St.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},St.use=function(D){return pt.H.use(D)},St.useActionState=function(D,Y,et){return pt.H.useActionState(D,Y,et)},St.useCallback=function(D,Y){return pt.H.useCallback(D,Y)},St.useContext=function(D){return pt.H.useContext(D)},St.useDebugValue=function(){},St.useDeferredValue=function(D,Y){return pt.H.useDeferredValue(D,Y)},St.useEffect=function(D,Y,et){var J=pt.H;if(typeof et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,Y)},St.useId=function(){return pt.H.useId()},St.useImperativeHandle=function(D,Y,et){return pt.H.useImperativeHandle(D,Y,et)},St.useInsertionEffect=function(D,Y){return pt.H.useInsertionEffect(D,Y)},St.useLayoutEffect=function(D,Y){return pt.H.useLayoutEffect(D,Y)},St.useMemo=function(D,Y){return pt.H.useMemo(D,Y)},St.useOptimistic=function(D,Y){return pt.H.useOptimistic(D,Y)},St.useReducer=function(D,Y,et){return pt.H.useReducer(D,Y,et)},St.useRef=function(D){return pt.H.useRef(D)},St.useState=function(D){return pt.H.useState(D)},St.useSyncExternalStore=function(D,Y,et){return pt.H.useSyncExternalStore(D,Y,et)},St.useTransition=function(){return pt.H.useTransition()},St.version="19.1.0",St}var R_;function mm(){return R_||(R_=1,bd.exports=DS()),bd.exports}var wd={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function OS(){if(I_)return Ge;I_=1;var r=mm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)y+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,A){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:C==null?null:""+C,children:p,containerInfo:y,implementation:A}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(p,y){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,A)},Ge.flushSync=function(p){var y=f.T,A=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=A,s.d.f()}},Ge.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ge.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ge.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin),k=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;A==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:C,integrity:k,fetchPriority:q}):A==="script"&&s.d.X(p,{crossOrigin:C,integrity:k,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var A=g(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ge.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var A=y.as,C=g(A,y.crossOrigin);s.d.L(p,A,{crossOrigin:C,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(p,y){if(typeof p=="string")if(y){var A=g(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:A,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ge.requestFormReset=function(p){s.d.r(p)},Ge.unstable_batchedUpdates=function(p,y){return p(y)},Ge.useFormState=function(p,y,A){return f.H.useFormState(p,y,A)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var C_;function NS(){if(C_)return wd.exports;C_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),wd.exports=OS(),wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function MS(){if(D_)return fl;D_=1;var r=CS(),t=mm(),n=NS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var A=Object.assign,C=Symbol.for("react.element"),k=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),At=Symbol.for("react.provider"),vt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),It=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case $:return"Profiler";case nt:return"StrictMode";case pt:return"Suspense";case It:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case ht:return(e.displayName||"Context")+".Provider";case vt:return(e._context.displayName||"Context")+".Consumer";case Rt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:te(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return te(e(i))}catch{}}return null}var jt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},zt=[],D=-1;function Y(e){return{current:e}}function et(e){0>D||(e.current=zt[D],zt[D]=null,D--)}function J(e,i){D++,zt[D]=e.current,e.current=i}var ut=Y(null),Ct=Y(null),_t=Y(null),Re=Y(null);function Jt(e,i){switch(J(_t,i),J(Ct,e),J(ut,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Xy(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Xy(i),e=$y(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(ut),J(ut,e)}function Fn(){et(ut),et(Ct),et(_t)}function Xi(e){e.memoizedState!==null&&J(Re,e);var i=ut.current,a=$y(i,e.type);i!==a&&(J(Ct,e),J(ut,a))}function pi(e){Ct.current===e&&(et(ut),et(Ct)),Re.current===e&&(et(Re),al._currentValue=ot)}var Hr=Object.prototype.hasOwnProperty,Gr=r.unstable_scheduleCallback,Fr=r.unstable_cancelCallback,no=r.unstable_shouldYield,zl=r.unstable_requestPaint,_n=r.unstable_now,vh=r.unstable_getCurrentPriorityLevel,io=r.unstable_ImmediatePriority,js=r.unstable_UserBlockingPriority,Kr=r.unstable_NormalPriority,Th=r.unstable_LowPriority,qs=r.unstable_IdlePriority,ro=r.log,Bl=r.unstable_setDisableYieldValue,ae=null,Gt=null;function on(e){if(typeof ro=="function"&&Bl(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(ae,e)}catch{}}var qe=Math.clz32?Math.clz32:Qr,jl=Math.log,Eh=Math.LN2;function Qr(e){return e>>>=0,e===0?32:31-(jl(e)/Eh|0)|0}var Yr=256,Xr=4194304;function Vn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Vn(l):(v&=T,v!==0?h=Vn(v):a||(a=T&~e,a!==0&&(h=Vn(a))))):(T=l&~d,T!==0?h=Vn(T):v!==0?h=Vn(v):a||(a=l&~e,a!==0&&(h=Vn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function $r(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function so(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ao(){var e=Yr;return Yr<<=1,(Yr&4194048)===0&&(Yr=256),e}function oo(){var e=Xr;return Xr<<=1,(Xr&62914560)===0&&(Xr=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function _i(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,b=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-qe(a),K=1<<G;T[G]=0,b[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var B=z[G];B!==null&&(B.lane&=-536870913)}a&=~K}l!==0&&Kn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Kn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-qe(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function uo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-qe(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=tt.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function ql(e,i){var a=tt.p;try{return tt.p=e,i()}finally{tt.p=a}}var ee=Math.random().toString(36).slice(2),_e="__reactFiber$"+ee,de="__reactProps$"+ee,vn="__reactContainer$"+ee,co="__reactEvents$"+ee,Ah="__reactListeners$"+ee,Ji="__reactHandles$"+ee,Hl="__reactResources$"+ee,Zr="__reactMarker$"+ee;function Wi(e){delete e[_e],delete e[de],delete e[co],delete e[Ah],delete e[Ji]}function vi(e){var i=e[_e];if(i)return i;for(var a=e.parentNode;a;){if(i=a[vn]||a[_e]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=t_(e);e!==null;){if(a=e[_e])return a;e=t_(e)}return i}e=a,a=e.parentNode}return null}function Qn(e){if(e=e[_e]||e[vn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Yn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function Xe(e){var i=e[Hl];return i||(i=e[Hl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[Zr]=!0}var ho=new Set,Fs={};function Pn(e,i){Ti(e,i),Ti(e+"Capture",i)}function Ti(e,i){for(Fs[e]=i,e=0;e<i.length;e++)ho.add(i[e])}var Gl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fl={},Jr={};function Kl(e){return Hr.call(Jr,e)?!0:Hr.call(Fl,e)?!1:Gl.test(e)?Jr[e]=!0:(Fl[e]=!0,!1)}function tr(e,i,a){if(Kl(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Xn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Pe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var Wr,Ql;function Ei(e){if(Wr===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Wr=i&&i[1]||"",Ql=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wr+e+Ql}var Ks=!1;function Qs(e,i){if(!e||Ks)return"";Ks=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var b=v.split(`
`),L=T.split(`
`);for(h=l=0;l<b.length&&!b[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===b.length||h===L.length)for(l=b.length-1,h=L.length-1;1<=l&&0<=h&&b[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(b[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||b[l]!==L[h]){var G=`
`+b[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{Ks=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ei(a):""}function fo(e){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return Qs(e.type,!1);case 11:return Qs(e.type.render,!1);case 1:return Qs(e.type,!0);case 31:return Ei("Activity");default:return""}}function Ys(e){try{var i="";do i+=fo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mo(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Sh(e){var i=mo(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Xs(e){e._valueTracker||(e._valueTracker=Sh(e))}function go(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=mo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ts(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bh=/[\n"\\]/g;function me(e){return e.replace(bh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$e(i)):e.value!==""+$e(i)&&(e.value=""+$e(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?er(e,v,$e(i)):a!=null?er(e,v,$e(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+$e(T):e.removeAttribute("name")}function es(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+$e(a):"",i=i!=null?""+$e(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function er(e,i,a){i==="number"&&ts(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ai(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+$e(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Qt(e,i,a){if(i!=null&&(i=""+$e(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+$e(a):""}function ns(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(jt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=$e(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var is=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yl(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||is.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function po(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&Yl(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&Yl(e,d,i[d])}function yo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $s(e){return Rh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Si=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,wi=null;function _o(e){var i=Qn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&go(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ai(e,!!a.multiple,i,!1)}}}var $n=!1;function Xl(e,i,a){if($n)return e(i,a);$n=!0;try{var l=e(i);return l}finally{if($n=!1,(bi!==null||wi!==null)&&(qu(),bi&&(i=bi,e=wi,wi=bi=null,_o(i),e)))for(i=0;i<e.length;i++)_o(e[i])}}function rs(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),An=!1;if(kn)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){An=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{An=!1}var Zn=null,nr=null,Ri=null;function vo(){if(Ri)return Ri;var e,i=nr,a=i.length,l,h="value"in Zn?Zn.value:Zn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ri=h.slice(e,1<l?1-l:void 0)}function Jn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function To(){return!1}function Ie(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Wn:To,this.isPropagationStopped=To,this}return A(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=Ie(qt),as=A({},qt,{view:0,detail:0}),$l=Ie(as),Js,Ws,ti,os=A({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ti&&(ti&&e.type==="mousemove"?(Js=e.screenX-ti.screenX,Ws=e.screenY-ti.screenY):Ws=Js=0,ti=e),Js)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),Sn=Ie(os),Zl=A({},os,{dataTransfer:0}),Ih=Ie(Zl),ls=A({},as,{relatedTarget:0}),ta=Ie(ls),Eo=A({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),ea=Ie(Eo),Jl=A({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),na=Ie(Jl),Ch=A({},qt,{data:0}),Ao=Ie(Ch),us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function So(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=tu[e])?!!i[e]:!1}function cs(){return So}var eu=A({},as,{key:function(e){if(e.key){var i=us[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wl[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cs,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ia=Ie(eu),nu=A({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bo=Ie(nu),Ii=A({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cs}),iu=Ie(Ii),ru=A({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),su=Ie(ru),au=A({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ra=Ie(au),Ze=A({},qt,{newState:0,oldState:0}),ou=Ie(Ze),lu=[9,13,27,32],ei=kn&&"CompositionEvent"in window,c=null;kn&&"documentMode"in document&&(c=document.documentMode);var m=kn&&"TextEvent"in window&&!c,_=kn&&(!ei||c&&8<c&&11>=c),E=" ",U=!1;function j(e,i){switch(e){case"keyup":return lu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function W(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pt=!1;function ve(e,i){switch(e){case"compositionend":return W(i);case"keypress":return i.which!==32?null:(U=!0,E);case"textInput":return e=i.data,e===E&&U?null:e;default:return null}}function kt(e,i){if(Pt)return e==="compositionend"||!ei&&j(e,i)?(e=vo(),Ri=nr=Zn=null,Pt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Ce={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Te(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Ce[e.type]:i==="textarea"}function Ci(e,i,a,l){bi?wi?wi.push(l):wi=[l]:bi=l,i=Yu(i,"onChange"),0<i.length&&(a=new Zs("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var ke=null,ni=null;function wo(e){Gy(e,0)}function uu(e){var i=Yn(e);if(go(i))return e}function hg(e,i){if(e==="change")return i}var fg=!1;if(kn){var Dh;if(kn){var Oh="oninput"in document;if(!Oh){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Oh=typeof dg.oninput=="function"}Dh=Oh}else Dh=!1;fg=Dh&&(!document.documentMode||9<document.documentMode)}function mg(){ke&&(ke.detachEvent("onpropertychange",gg),ni=ke=null)}function gg(e){if(e.propertyName==="value"&&uu(ni)){var i=[];Ci(i,ni,e,En(e)),Xl(wo,i)}}function eA(e,i,a){e==="focusin"?(mg(),ke=i,ni=a,ke.attachEvent("onpropertychange",gg)):e==="focusout"&&mg()}function nA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(ni)}function iA(e,i){if(e==="click")return uu(i)}function rA(e,i){if(e==="input"||e==="change")return uu(i)}function sA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:sA;function Ro(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Hr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function pg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yg(e,i){var a=pg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pg(a)}}function _g(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?_g(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function vg(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ts(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ts(e.document)}return i}function Nh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var aA=kn&&"documentMode"in document&&11>=document.documentMode,sa=null,Mh=null,Io=null,Vh=!1;function Tg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Vh||sa==null||sa!==ts(l)||(l=sa,"selectionStart"in l&&Nh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Io&&Ro(Io,l)||(Io=l,l=Yu(Mh,"onSelect"),0<l.length&&(i=new Zs("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=sa)))}function hs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var aa={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Ph={},Eg={};kn&&(Eg=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function fs(e){if(Ph[e])return Ph[e];if(!aa[e])return e;var i=aa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eg)return Ph[e]=i[a];return e}var Ag=fs("animationend"),Sg=fs("animationiteration"),bg=fs("animationstart"),oA=fs("transitionrun"),lA=fs("transitionstart"),uA=fs("transitioncancel"),wg=fs("transitionend"),Rg=new Map,kh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kh.push("scrollEnd");function Un(e,i){Rg.set(e,i),Pn(i,[e])}var Ig=new WeakMap;function bn(e,i){if(typeof e=="object"&&e!==null){var a=Ig.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ys(i)},Ig.set(e,i),i)}return{value:e,source:i,stack:Ys(i)}}var wn=[],oa=0,Uh=0;function cu(){for(var e=oa,i=Uh=oa=0;i<e;){var a=wn[i];wn[i++]=null;var l=wn[i];wn[i++]=null;var h=wn[i];wn[i++]=null;var d=wn[i];if(wn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Cg(a,h,d)}}function hu(e,i,a,l){wn[oa++]=e,wn[oa++]=i,wn[oa++]=a,wn[oa++]=l,Uh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xh(e,i,a,l){return hu(e,i,a,l),fu(e)}function la(e,i){return hu(e,null,null,i),fu(e)}function Cg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-qe(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function fu(e){if(50<Jo)throw Jo=0,Gf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ua={};function cA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,l){return new cA(e,i,a,l)}function Lh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function du(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Lh(e)&&(v=1);else if(typeof e=="string")v=fS(e,a,ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=cn(31,a,i,h),e.elementType=R,e.lanes=d,e;case Z:return ds(a.children,h,d,i);case nt:v=8,h|=24;break;case $:return e=cn(12,a,i,h|2),e.elementType=$,e.lanes=d,e;case pt:return e=cn(13,a,i,h),e.elementType=pt,e.lanes=d,e;case It:return e=cn(19,a,i,h),e.elementType=It,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case At:case ht:v=10;break t;case vt:v=9;break t;case Rt:v=11;break t;case M:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=cn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ds(e,i,a,l){return e=cn(7,e,l,i),e.lanes=a,e}function zh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function Bh(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var ca=[],ha=0,mu=null,gu=0,Rn=[],In=0,ms=null,Oi=1,Ni="";function gs(e,i){ca[ha++]=gu,ca[ha++]=mu,mu=e,gu=i}function Og(e,i,a){Rn[In++]=Oi,Rn[In++]=Ni,Rn[In++]=ms,ms=e;var l=Oi;e=Ni;var h=32-qe(l)-1;l&=~(1<<h),a+=1;var d=32-qe(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Oi=1<<32-qe(i)+h|a<<h|l,Ni=d+e}else Oi=1<<d|a<<h|l,Ni=e}function jh(e){e.return!==null&&(gs(e,1),Og(e,1,0))}function qh(e){for(;e===mu;)mu=ca[--ha],ca[ha]=null,gu=ca[--ha],ca[ha]=null;for(;e===ms;)ms=Rn[--In],Rn[In]=null,Ni=Rn[--In],Rn[In]=null,Oi=Rn[--In],Rn[In]=null}var Je=null,oe=null,Bt=!1,ps=null,ii=!1,Hh=Error(s(519));function ys(e){var i=Error(s(418,""));throw Oo(bn(i,e)),Hh}function Ng(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[_e]=e,i[de]=l,a){case"dialog":Nt("cancel",i),Nt("close",i);break;case"iframe":case"object":case"embed":Nt("load",i);break;case"video":case"audio":for(a=0;a<tl.length;a++)Nt(tl[a],i);break;case"source":Nt("error",i);break;case"img":case"image":case"link":Nt("error",i),Nt("load",i);break;case"details":Nt("toggle",i);break;case"input":Nt("invalid",i),es(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xs(i);break;case"select":Nt("invalid",i);break;case"textarea":Nt("invalid",i),ns(i,l.value,l.defaultValue,l.children),Xs(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Yy(i.textContent,a)?(l.popover!=null&&(Nt("beforetoggle",i),Nt("toggle",i)),l.onScroll!=null&&Nt("scroll",i),l.onScrollEnd!=null&&Nt("scrollend",i),l.onClick!=null&&(i.onclick=Xu),i=!0):i=!1,i||ys(e)}function Mg(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:Je=Je.return}}function Co(e){if(e!==Je)return!1;if(!Bt)return Mg(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ad(e.type,e.memoizedProps)),a=!a),a&&oe&&ys(e),Mg(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=Ln(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,_r(e.type)?(e=cd,cd=null,oe=e):oe=i):oe=Je?Ln(e.stateNode.nextSibling):null;return!0}function Do(){oe=Je=null,Bt=!1}function Vg(){var e=ps;return e!==null&&(en===null?en=e:en.push.apply(en,e),ps=null),e}function Oo(e){ps===null?ps=[e]:ps.push(e)}var Gh=Y(null),_s=null,Mi=null;function ir(e,i,a){J(Gh,i._currentValue),i._currentValue=a}function Vi(e){e._currentValue=Gh.current,et(Gh)}function Fh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Kh(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var b=0;b<i.length;b++)if(T.context===i[b]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Fh(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Fh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function No(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Re.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(al):e=[al])}h=h.return}e!==null&&Kh(i,e,a,l),i.flags|=262144}function pu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){_s=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return Pg(_s,e)}function yu(e,i){return _s===null&&vs(e),Pg(e,i)}function Pg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Mi===null){if(e===null)throw Error(s(308));Mi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mi=Mi.next=i;return a}var hA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},fA=r.unstable_scheduleCallback,dA=r.unstable_NormalPriority,Ee={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qh(){return{controller:new hA,data:new Map,refCount:0}}function Mo(e){e.refCount--,e.refCount===0&&fA(dA,function(){e.controller.abort()})}var Vo=null,Yh=0,fa=0,da=null;function mA(e,i){if(Vo===null){var a=Vo=[];Yh=0,fa=Zf(),da={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Yh++,i.then(kg,kg),i}function kg(){if(--Yh===0&&Vo!==null){da!==null&&(da.status="fulfilled");var e=Vo;Vo=null,fa=0,da=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function gA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var Ug=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&mA(e,i),Ug!==null&&Ug(e,i)};var Ts=Y(null);function Xh(){var e=Ts.current;return e!==null?e:Wt.pooledCache}function _u(e,i){i===null?J(Ts,Ts.current):J(Ts,i.pool)}function xg(){var e=Xh();return e===null?null:{parent:Ee._currentValue,pool:e}}var Po=Error(s(460)),Lg=Error(s(474)),vu=Error(s(542)),$h={then:function(){}};function zg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tu(){}function Bg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Tu,Tu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,qg(e),e;default:if(typeof i.status=="string")i.then(Tu,Tu);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,qg(e),e}throw ko=i,Po}}var ko=null;function jg(){if(ko===null)throw Error(s(459));var e=ko;return ko=null,e}function qg(e){if(e===Po||e===vu)throw Error(s(483))}var rr=!1;function Zh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ar(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=fu(e),Cg(e,null,a),i}return hu(e,l,i,a),fu(e)}function Uo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,uo(e,a)}}function Wh(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var tf=!1;function xo(){if(tf){var e=da;if(e!==null)throw e}}function Lo(e,i,a,l){tf=!1;var h=e.updateQueue;rr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var b=T,L=b.next;b.next=null,v===null?d=L:v.next=L,v=b;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=b))}if(d!==null){var K=h.baseState;v=0,G=L=b=null,T=d;do{var z=T.lane&-536870913,B=z!==T.lane;if(B?(Ut&z)===z:(l&z)===z){z!==0&&z===fa&&(tf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var gt=e,ft=T;z=i;var $t=a;switch(ft.tag){case 1:if(gt=ft.payload,typeof gt=="function"){K=gt.call($t,K,z);break t}K=gt;break t;case 3:gt.flags=gt.flags&-65537|128;case 0:if(gt=ft.payload,z=typeof gt=="function"?gt.call($t,K,z):gt,z==null)break t;K=A({},K,z);break t;case 2:rr=!0}}z=T.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=B,b=K):G=G.next=B,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;B=T,T=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);G===null&&(b=K),h.baseState=b,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),mr|=v,e.lanes=v,e.memoizedState=K}}function Hg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Gg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hg(a[e],i)}var ma=Y(null),Eu=Y(0);function Fg(e,i){e=Bi,J(Eu,e),J(ma,i),Bi=e|i.baseLanes}function ef(){J(Eu,Bi),J(ma,ma.current)}function nf(){Bi=Eu.current,et(ma),et(Eu)}var or=0,bt=null,Yt=null,ge=null,Au=!1,ga=!1,Es=!1,Su=0,zo=0,pa=null,pA=0;function ce(){throw Error(s(321))}function rf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function sf(e,i,a,l,h,d){return or=d,bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Cp:Dp,Es=!1,d=a(l,h),Es=!1,ga&&(d=Qg(i,a,l,h)),Kg(e),d}function Kg(e){H.H=Du;var i=Yt!==null&&Yt.next!==null;if(or=0,ge=Yt=bt=null,Au=!1,zo=0,pa=null,i)throw Error(s(300));e===null||De||(e=e.dependencies,e!==null&&pu(e)&&(De=!0))}function Qg(e,i,a,l){bt=e;var h=0;do{if(ga&&(pa=null),zo=0,ga=!1,25<=h)throw Error(s(301));if(h+=1,ge=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=SA,d=i(a,l)}while(ga);return d}function yA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Bo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(bt.flags|=1024),i}function af(){var e=Su!==0;return Su=0,e}function of(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function lf(e){if(Au){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Au=!1}or=0,ge=Yt=bt=null,ga=!1,zo=Su=0,pa=null}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?bt.memoizedState=ge=e:ge=ge.next=e,ge}function pe(){if(Yt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=ge===null?bt.memoizedState:ge.next;if(i!==null)ge=i,Yt=e;else{if(e===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},ge===null?bt.memoizedState=ge=e:ge=ge.next=e}return ge}function uf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var i=zo;return zo+=1,pa===null&&(pa=[]),e=Bg(pa,e,i),i=bt,(ge===null?i.memoizedState:ge.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Cp:Dp),e}function bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===ht)return He(e)}throw Error(s(438,String(e)))}function cf(e){var i=null,a=bt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=uf(),bt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function Pi(e,i){return typeof i=="function"?i(e):i}function wu(e){var i=pe();return hf(i,Yt,e)}function hf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,b=null,L=i,G=!1;do{var K=L.lane&-536870913;if(K!==L.lane?(Ut&K)===K:(or&K)===K){var z=L.revertLane;if(z===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),K===fa&&(G=!0);else if((or&z)===z){L=L.next,z===fa&&(G=!0);continue}else K={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=K,v=d):b=b.next=K,bt.lanes|=z,mr|=z;K=L.action,Es&&a(d,K),d=L.hasEagerState?L.eagerState:a(d,K)}else z={lane:K,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},b===null?(T=b=z,v=d):b=b.next=z,bt.lanes|=K,mr|=K;L=L.next}while(L!==null&&L!==i);if(b===null?v=d:b.next=T,!un(d,e.memoizedState)&&(De=!0,G&&(a=da,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=b,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ff(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(De=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Yg(e,i,a){var l=bt,h=pe(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Yt||h).memoizedState,a);v&&(h.memoizedState=a,De=!0),h=h.queue;var T=Zg.bind(null,l,h,e);if(jo(2048,8,T,[e]),h.getSnapshot!==i||v||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,ya(9,Ru(),$g.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(or&124)!==0||Xg(l,i,a)}return a}function Xg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=bt.updateQueue,i===null?(i=uf(),bt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function $g(e,i,a,l){i.value=a,i.getSnapshot=l,Jg(i)&&Wg(e)}function Zg(e,i,a){return a(function(){Jg(i)&&Wg(e)})}function Jg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function Wg(e){var i=la(e,2);i!==null&&gn(i,e,2)}function df(e){var i=We();if(typeof e=="function"){var a=e;if(e=a(),Es){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},i}function tp(e,i,a,l){return e.baseState=a,hf(e,Yt,typeof l=="function"?l:Pi)}function _A(e,i,a,l,h){if(Cu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,ep(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ep(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var T=a(h,l),b=H.S;b!==null&&b(v,T),np(e,i,T)}catch(L){mf(e,i,L)}finally{H.T=d}}else try{d=a(h,l),np(e,i,d)}catch(L){mf(e,i,L)}}function np(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ip(e,i,l)},function(l){return mf(e,i,l)}):ip(e,i,a)}function ip(e,i,a){i.status="fulfilled",i.value=a,rp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,ep(e,a)))}function mf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,rp(i),i=i.next;while(i!==l)}e.action=null}function rp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function sp(e,i){return i}function ap(e,i){if(Bt){var a=Wt.formState;if(a!==null){t:{var l=bt;if(Bt){if(oe){e:{for(var h=oe,d=ii;h.nodeType!==8;){if(!d){h=null;break e}if(h=Ln(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=Ln(h.nextSibling),l=h.data==="F!";break t}}ys(l)}l=!1}l&&(i=a[0])}}return a=We(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sp,lastRenderedState:i},a.queue=l,a=wp.bind(null,bt,l),l.dispatch=a,l=df(!1),d=vf.bind(null,bt,!1,l.queue),l=We(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=_A.bind(null,bt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function op(e){var i=pe();return lp(i,Yt,e)}function lp(e,i,a){if(i=hf(e,i,sp)[0],e=wu(Pi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bo(i)}catch(v){throw v===Po?vu:v}else l=i;i=pe();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(bt.flags|=2048,ya(9,Ru(),vA.bind(null,h,a),null)),[l,d,e]}function vA(e,i){e.action=i}function up(e){var i=pe(),a=Yt;if(a!==null)return lp(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function ya(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=bt.updateQueue,i===null&&(i=uf(),bt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Ru(){return{destroy:void 0,resource:void 0}}function cp(){return pe().memoizedState}function Iu(e,i,a,l){var h=We();l=l===void 0?null:l,bt.flags|=e,h.memoizedState=ya(1|i,Ru(),a,l)}function jo(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&rf(l,Yt.memoizedState.deps)?h.memoizedState=ya(i,d,a,l):(bt.flags|=e,h.memoizedState=ya(1|i,d,a,l))}function hp(e,i){Iu(8390656,8,e,i)}function fp(e,i){jo(2048,8,e,i)}function dp(e,i){return jo(4,2,e,i)}function mp(e,i){return jo(4,4,e,i)}function gp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function pp(e,i,a){a=a!=null?a.concat([e]):null,jo(4,4,gp.bind(null,i,e),a)}function gf(){}function yp(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&rf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function _p(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&rf(i,l[1]))return l[0];if(l=e(),Es){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l}function pf(e,i,a){return a===void 0||(or&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Ey(),bt.lanes|=e,mr|=e,a)}function vp(e,i,a,l){return un(a,i)?a:ma.current!==null?(e=pf(e,a,l),un(e,i)||(De=!0),e):(or&42)===0?(De=!0,e.memoizedState=a):(e=Ey(),bt.lanes|=e,mr|=e,i)}function Tp(e,i,a,l,h){var d=tt.p;tt.p=d!==0&&8>d?d:8;var v=H.T,T={};H.T=T,vf(e,!1,i,a);try{var b=h(),L=H.S;if(L!==null&&L(T,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var G=gA(b,l);qo(e,i,G,mn(e))}else qo(e,i,l,mn(e))}catch(K){qo(e,i,{then:function(){},status:"rejected",reason:K},mn())}finally{tt.p=d,H.T=v}}function TA(){}function yf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Ep(e).queue;Tp(e,h,i,ot,a===null?TA:function(){return Ap(e),a(l)})}function Ep(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:ot},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ap(e){var i=Ep(e).next.queue;qo(e,i,{},mn())}function _f(){return He(al)}function Sp(){return pe().memoizedState}function bp(){return pe().memoizedState}function EA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=sr(a);var l=ar(i,e,a);l!==null&&(gn(l,i,a),Uo(l,i,a)),i={cache:Qh()},e.payload=i;return}i=i.return}}function AA(e,i,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?Rp(i,a):(a=xh(e,i,a,l),a!==null&&(gn(a,e,l),Ip(a,i,l)))}function wp(e,i,a){var l=mn();qo(e,i,a,l)}function qo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Rp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return hu(e,i,h,0),Wt===null&&cu(),!1}catch{}finally{}if(a=xh(e,i,h,l),a!==null)return gn(a,e,l),Ip(a,i,l),!0}return!1}function vf(e,i,a,l){if(l={lane:2,revertLane:Zf(),action:l,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(i)throw Error(s(479))}else i=xh(e,a,l,2),i!==null&&gn(i,e,2)}function Cu(e){var i=e.alternate;return e===bt||i!==null&&i===bt}function Rp(e,i){ga=Au=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Ip(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,uo(e,a)}}var Du={readContext:He,use:bu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Cp={readContext:He,use:bu,useCallback:function(e,i){return We().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:hp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Iu(4194308,4,gp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Iu(4194308,4,e,i)},useInsertionEffect:function(e,i){Iu(4,2,e,i)},useMemo:function(e,i){var a=We();i=i===void 0?null:i;var l=e();if(Es){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=We();if(a!==void 0){var h=a(i);if(Es){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=AA.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var i=We();return e={current:e},i.memoizedState=e},useState:function(e){e=df(e);var i=e.queue,a=wp.bind(null,bt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:gf,useDeferredValue:function(e,i){var a=We();return pf(a,e,i)},useTransition:function(){var e=df(!1);return e=Tp.bind(null,bt,e.queue,!0,!1),We().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=bt,h=We();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(Ut&124)!==0||Xg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,hp(Zg.bind(null,l,d,e),[e]),l.flags|=2048,ya(9,Ru(),$g.bind(null,l,d,a,i),null),a},useId:function(){var e=We(),i=Wt.identifierPrefix;if(Bt){var a=Ni,l=Oi;a=(l&~(1<<32-qe(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Su++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=pA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:_f,useFormState:ap,useActionState:ap,useOptimistic:function(e){var i=We();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=vf.bind(null,bt,!0,a),a.dispatch=i,[e,i]},useMemoCache:cf,useCacheRefresh:function(){return We().memoizedState=EA.bind(null,bt)}},Dp={readContext:He,use:bu,useCallback:yp,useContext:He,useEffect:fp,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:mp,useMemo:_p,useReducer:wu,useRef:cp,useState:function(){return wu(Pi)},useDebugValue:gf,useDeferredValue:function(e,i){var a=pe();return vp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=wu(Pi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:Yg,useId:Sp,useHostTransitionStatus:_f,useFormState:op,useActionState:op,useOptimistic:function(e,i){var a=pe();return tp(a,Yt,e,i)},useMemoCache:cf,useCacheRefresh:bp},SA={readContext:He,use:bu,useCallback:yp,useContext:He,useEffect:fp,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:mp,useMemo:_p,useReducer:ff,useRef:cp,useState:function(){return ff(Pi)},useDebugValue:gf,useDeferredValue:function(e,i){var a=pe();return Yt===null?pf(a,e,i):vp(a,Yt.memoizedState,e,i)},useTransition:function(){var e=ff(Pi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:Yg,useId:Sp,useHostTransitionStatus:_f,useFormState:up,useActionState:up,useOptimistic:function(e,i){var a=pe();return Yt!==null?tp(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:cf,useCacheRefresh:bp},_a=null,Ho=0;function Ou(e){var i=Ho;return Ho+=1,_a===null&&(_a=[]),Bg(_a,e,i)}function Go(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Nu(e,i){throw i.$$typeof===C?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Op(e){var i=e._init;return i(e._payload)}function Np(e){function i(P,O){if(e){var x=P.deletions;x===null?(P.deletions=[O],P.flags|=16):x.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Di(P,O),P.index=0,P.sibling=null,P}function d(P,O,x){return P.index=x,e?(x=P.alternate,x!==null?(x=x.index,x<O?(P.flags|=67108866,O):x):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,O,x,F){return O===null||O.tag!==6?(O=zh(x,P.mode,F),O.return=P,O):(O=h(O,x),O.return=P,O)}function b(P,O,x,F){var rt=x.type;return rt===Z?G(P,O,x.props.children,F,x.key):O!==null&&(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Op(rt)===O.type)?(O=h(O,x.props),Go(O,x),O.return=P,O):(O=du(x.type,x.key,x.props,null,P.mode,F),Go(O,x),O.return=P,O)}function L(P,O,x,F){return O===null||O.tag!==4||O.stateNode.containerInfo!==x.containerInfo||O.stateNode.implementation!==x.implementation?(O=Bh(x,P.mode,F),O.return=P,O):(O=h(O,x.children||[]),O.return=P,O)}function G(P,O,x,F,rt){return O===null||O.tag!==7?(O=ds(x,P.mode,F,rt),O.return=P,O):(O=h(O,x),O.return=P,O)}function K(P,O,x){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=zh(""+O,P.mode,x),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case k:return x=du(O.type,O.key,O.props,null,P.mode,x),Go(x,O),x.return=P,x;case q:return O=Bh(O,P.mode,x),O.return=P,O;case S:var F=O._init;return O=F(O._payload),K(P,O,x)}if(jt(O)||V(O))return O=ds(O,P.mode,x,null),O.return=P,O;if(typeof O.then=="function")return K(P,Ou(O),x);if(O.$$typeof===ht)return K(P,yu(P,O),x);Nu(P,O)}return null}function z(P,O,x,F){var rt=O!==null?O.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return rt!==null?null:T(P,O,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case k:return x.key===rt?b(P,O,x,F):null;case q:return x.key===rt?L(P,O,x,F):null;case S:return rt=x._init,x=rt(x._payload),z(P,O,x,F)}if(jt(x)||V(x))return rt!==null?null:G(P,O,x,F,null);if(typeof x.then=="function")return z(P,O,Ou(x),F);if(x.$$typeof===ht)return z(P,O,yu(P,x),F);Nu(P,x)}return null}function B(P,O,x,F,rt){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return P=P.get(x)||null,T(O,P,""+F,rt);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case k:return P=P.get(F.key===null?x:F.key)||null,b(O,P,F,rt);case q:return P=P.get(F.key===null?x:F.key)||null,L(O,P,F,rt);case S:var Dt=F._init;return F=Dt(F._payload),B(P,O,x,F,rt)}if(jt(F)||V(F))return P=P.get(x)||null,G(O,P,F,rt,null);if(typeof F.then=="function")return B(P,O,x,Ou(F),rt);if(F.$$typeof===ht)return B(P,O,x,yu(O,F),rt);Nu(O,F)}return null}function gt(P,O,x,F){for(var rt=null,Dt=null,at=O,dt=O=0,Ne=null;at!==null&&dt<x.length;dt++){at.index>dt?(Ne=at,at=null):Ne=at.sibling;var Lt=z(P,at,x[dt],F);if(Lt===null){at===null&&(at=Ne);break}e&&at&&Lt.alternate===null&&i(P,at),O=d(Lt,O,dt),Dt===null?rt=Lt:Dt.sibling=Lt,Dt=Lt,at=Ne}if(dt===x.length)return a(P,at),Bt&&gs(P,dt),rt;if(at===null){for(;dt<x.length;dt++)at=K(P,x[dt],F),at!==null&&(O=d(at,O,dt),Dt===null?rt=at:Dt.sibling=at,Dt=at);return Bt&&gs(P,dt),rt}for(at=l(at);dt<x.length;dt++)Ne=B(at,P,dt,x[dt],F),Ne!==null&&(e&&Ne.alternate!==null&&at.delete(Ne.key===null?dt:Ne.key),O=d(Ne,O,dt),Dt===null?rt=Ne:Dt.sibling=Ne,Dt=Ne);return e&&at.forEach(function(Sr){return i(P,Sr)}),Bt&&gs(P,dt),rt}function ft(P,O,x,F){if(x==null)throw Error(s(151));for(var rt=null,Dt=null,at=O,dt=O=0,Ne=null,Lt=x.next();at!==null&&!Lt.done;dt++,Lt=x.next()){at.index>dt?(Ne=at,at=null):Ne=at.sibling;var Sr=z(P,at,Lt.value,F);if(Sr===null){at===null&&(at=Ne);break}e&&at&&Sr.alternate===null&&i(P,at),O=d(Sr,O,dt),Dt===null?rt=Sr:Dt.sibling=Sr,Dt=Sr,at=Ne}if(Lt.done)return a(P,at),Bt&&gs(P,dt),rt;if(at===null){for(;!Lt.done;dt++,Lt=x.next())Lt=K(P,Lt.value,F),Lt!==null&&(O=d(Lt,O,dt),Dt===null?rt=Lt:Dt.sibling=Lt,Dt=Lt);return Bt&&gs(P,dt),rt}for(at=l(at);!Lt.done;dt++,Lt=x.next())Lt=B(at,P,dt,Lt.value,F),Lt!==null&&(e&&Lt.alternate!==null&&at.delete(Lt.key===null?dt:Lt.key),O=d(Lt,O,dt),Dt===null?rt=Lt:Dt.sibling=Lt,Dt=Lt);return e&&at.forEach(function(bS){return i(P,bS)}),Bt&&gs(P,dt),rt}function $t(P,O,x,F){if(typeof x=="object"&&x!==null&&x.type===Z&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case k:t:{for(var rt=x.key;O!==null;){if(O.key===rt){if(rt=x.type,rt===Z){if(O.tag===7){a(P,O.sibling),F=h(O,x.props.children),F.return=P,P=F;break t}}else if(O.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===S&&Op(rt)===O.type){a(P,O.sibling),F=h(O,x.props),Go(F,x),F.return=P,P=F;break t}a(P,O);break}else i(P,O);O=O.sibling}x.type===Z?(F=ds(x.props.children,P.mode,F,x.key),F.return=P,P=F):(F=du(x.type,x.key,x.props,null,P.mode,F),Go(F,x),F.return=P,P=F)}return v(P);case q:t:{for(rt=x.key;O!==null;){if(O.key===rt)if(O.tag===4&&O.stateNode.containerInfo===x.containerInfo&&O.stateNode.implementation===x.implementation){a(P,O.sibling),F=h(O,x.children||[]),F.return=P,P=F;break t}else{a(P,O);break}else i(P,O);O=O.sibling}F=Bh(x,P.mode,F),F.return=P,P=F}return v(P);case S:return rt=x._init,x=rt(x._payload),$t(P,O,x,F)}if(jt(x))return gt(P,O,x,F);if(V(x)){if(rt=V(x),typeof rt!="function")throw Error(s(150));return x=rt.call(x),ft(P,O,x,F)}if(typeof x.then=="function")return $t(P,O,Ou(x),F);if(x.$$typeof===ht)return $t(P,O,yu(P,x),F);Nu(P,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,O!==null&&O.tag===6?(a(P,O.sibling),F=h(O,x),F.return=P,P=F):(a(P,O),F=zh(x,P.mode,F),F.return=P,P=F),v(P)):a(P,O)}return function(P,O,x,F){try{Ho=0;var rt=$t(P,O,x,F);return _a=null,rt}catch(at){if(at===Po||at===vu)throw at;var Dt=cn(29,at,null,P.mode);return Dt.lanes=F,Dt.return=P,Dt}finally{}}}var va=Np(!0),Mp=Np(!1),Cn=Y(null),ri=null;function lr(e){var i=e.alternate;J(Ae,Ae.current&1),J(Cn,e),ri===null&&(i===null||ma.current!==null||i.memoizedState!==null)&&(ri=e)}function Vp(e){if(e.tag===22){if(J(Ae,Ae.current),J(Cn,e),ri===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ri=e)}}else ur()}function ur(){J(Ae,Ae.current),J(Cn,Cn.current)}function ki(e){et(Cn),ri===e&&(ri=null),et(Ae)}var Ae=Y(0);function Mu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ud(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Tf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:A({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ef={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(gn(i,e,l),Uo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(gn(i,e,l),Uo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),l=sr(a);l.tag=2,i!=null&&(l.callback=i),i=ar(e,l,a),i!==null&&(gn(i,e,a),Uo(i,e,a))}};function Pp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Ro(a,l)||!Ro(h,d):!0}function kp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Ef.enqueueReplaceState(i,i.state,null)}function As(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=A({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Up(e){Vu(e)}function xp(e){console.error(e)}function Lp(e){Vu(e)}function Pu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function zp(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Af(e,i,a){return a=sr(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(e,i)},a}function Bp(e){return e=sr(e),e.tag=3,e}function jp(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){zp(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){zp(i,a,l),typeof h!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function bA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&No(i,a,h,!0),a=Cn.current,a!==null){switch(a.tag){case 13:return ri===null?Kf():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Yf(e,l,h)),!1;case 22:return a.flags|=65536,l===$h?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Yf(e,l,h)),!1}throw Error(s(435,a.tag))}return Yf(e,l,h),Kf(),!1}if(Bt)return i=Cn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Hh&&(e=Error(s(422),{cause:l}),Oo(bn(e,a)))):(l!==Hh&&(i=Error(s(423),{cause:l}),Oo(bn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=bn(l,a),h=Af(e.stateNode,l,h),Wh(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),Zo===null?Zo=[d]:Zo.push(d),le!==4&&(le=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Af(a.stateNode,l,e),Wh(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(gr===null||!gr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Bp(h),jp(h,e,a,l),Wh(a,h),!1}a=a.return}while(a!==null);return!1}var qp=Error(s(461)),De=!1;function Ue(e,i,a,l){i.child=e===null?Mp(i,null,a,l):va(i,e.child,a,l)}function Hp(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return vs(i),l=sf(e,i,a,v,d,h),T=af(),e!==null&&!De?(of(e,i,h),Ui(e,i,h)):(Bt&&T&&jh(i),i.flags|=1,Ue(e,i,l,h),i.child)}function Gp(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Lh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Fp(e,i,d,l,h)):(e=du(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Of(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(v,l)&&e.ref===i.ref)return Ui(e,i,h)}return i.flags|=1,e=Di(d,l),e.ref=i.ref,e.return=i,i.child=e}function Fp(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Ro(d,l)&&e.ref===i.ref)if(De=!1,i.pendingProps=l=d,Of(e,h))(e.flags&131072)!==0&&(De=!0);else return i.lanes=e.lanes,Ui(e,i,h)}return Sf(e,i,a,l,h)}function Kp(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Qp(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&_u(i,d!==null?d.cachePool:null),d!==null?Fg(i,d):ef(),Vp(i);else return i.lanes=i.childLanes=536870912,Qp(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(_u(i,d.cachePool),Fg(i,d),ur(),i.memoizedState=null):(e!==null&&_u(i,null),ef(),ur());return Ue(e,i,h,a),i.child}function Qp(e,i,a,l){var h=Xh();return h=h===null?null:{parent:Ee._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&_u(i,null),ef(),Vp(i),e!==null&&No(e,i,l,!0),null}function ku(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Sf(e,i,a,l,h){return vs(i),a=sf(e,i,a,l,void 0,h),l=af(),e!==null&&!De?(of(e,i,h),Ui(e,i,h)):(Bt&&l&&jh(i),i.flags|=1,Ue(e,i,a,h),i.child)}function Yp(e,i,a,l,h,d){return vs(i),i.updateQueue=null,a=Qg(i,l,a,h),Kg(e),l=af(),e!==null&&!De?(of(e,i,d),Ui(e,i,d)):(Bt&&l&&jh(i),i.flags|=1,Ue(e,i,a,d),i.child)}function Xp(e,i,a,l,h){if(vs(i),i.stateNode===null){var d=ua,v=a.contextType;typeof v=="object"&&v!==null&&(d=He(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Zh(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?He(v):ua,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Tf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Ef.enqueueReplaceState(d,d.state,null),Lo(i,l,d,h),xo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,b=As(a,T);d.props=b;var L=d.context,G=a.contextType;v=ua,typeof G=="object"&&G!==null&&(v=He(G));var K=a.getDerivedStateFromProps;G=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&kp(i,d,l,v),rr=!1;var z=i.memoizedState;d.state=z,Lo(i,l,d,h),xo(),L=i.memoizedState,T||z!==L||rr?(typeof K=="function"&&(Tf(i,a,K,l),L=i.memoizedState),(b=rr||Pp(i,a,b,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=b):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Jh(e,i),v=i.memoizedProps,G=As(a,v),d.props=G,K=i.pendingProps,z=d.context,L=a.contextType,b=ua,typeof L=="object"&&L!==null&&(b=He(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==K||z!==b)&&kp(i,d,l,b),rr=!1,z=i.memoizedState,d.state=z,Lo(i,l,d,h),xo();var B=i.memoizedState;v!==K||z!==B||rr||e!==null&&e.dependencies!==null&&pu(e.dependencies)?(typeof T=="function"&&(Tf(i,a,T,l),B=i.memoizedState),(G=rr||Pp(i,a,G,l,z,B,b)||e!==null&&e.dependencies!==null&&pu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,B,b),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,B,b)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=B),d.props=l,d.state=B,d.context=b,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,ku(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=va(i,e.child,null,h),i.child=va(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Ui(e,i,h),e}function $p(e,i,a,l){return Do(),i.flags|=256,Ue(e,i,a,l),i.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:xg()}}function Rf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Dn),e}function Zp(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Ae.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?lr(i):ur(),Bt){var T=oe,b;if(b=T){t:{for(b=T,T=ii;b.nodeType!==8;){if(!T){T=null;break t}if(b=Ln(b.nextSibling),b===null){T=null;break t}}T=b}T!==null?(i.memoizedState={dehydrated:T,treeContext:ms!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},b=cn(18,null,null,0),b.stateNode=T,b.return=i,i.child=b,Je=i,oe=null,b=!0):b=!1}b||ys(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return ud(T)?i.lanes=32:i.lanes=536870912,null;ki(i)}return T=l.children,l=l.fallback,h?(ur(),h=i.mode,T=Uu({mode:"hidden",children:T},h),l=ds(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=wf(a),h.childLanes=Rf(e,v,a),i.memoizedState=bf,l):(lr(i),If(i,T))}if(b=e.memoizedState,b!==null&&(T=b.dehydrated,T!==null)){if(d)i.flags&256?(lr(i),i.flags&=-257,i=Cf(e,i,a)):i.memoizedState!==null?(ur(),i.child=e.child,i.flags|=128,i=null):(ur(),h=l.fallback,T=i.mode,l=Uu({mode:"visible",children:l.children},T),h=ds(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,va(i,e.child,null,a),l=i.child,l.memoizedState=wf(a),l.childLanes=Rf(e,v,a),i.memoizedState=bf,i=h);else if(lr(i),ud(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Oo({value:l,source:null,stack:null}),i=Cf(e,i,a)}else if(De||No(e,i,a,!1),v=(a&e.childLanes)!==0,De||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:$i(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==b.retryLane))throw b.retryLane=l,la(e,l),gn(v,e,l),qp;T.data==="$?"||Kf(),i=Cf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=b.treeContext,oe=Ln(T.nextSibling),Je=i,Bt=!0,ps=null,ii=!1,e!==null&&(Rn[In++]=Oi,Rn[In++]=Ni,Rn[In++]=ms,Oi=e.id,Ni=e.overflow,ms=i),i=If(i,l.children),i.flags|=4096);return i}return h?(ur(),h=l.fallback,T=i.mode,b=e.child,L=b.sibling,l=Di(b,{mode:"hidden",children:l.children}),l.subtreeFlags=b.subtreeFlags&65011712,L!==null?h=Di(L,h):(h=ds(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=wf(a):(b=T.cachePool,b!==null?(L=Ee._currentValue,b=b.parent!==L?{parent:L,pool:L}:b):b=xg(),T={baseLanes:T.baseLanes|a,cachePool:b}),h.memoizedState=T,h.childLanes=Rf(e,v,a),i.memoizedState=bf,l):(lr(i),a=e.child,e=a.sibling,a=Di(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function If(e,i){return i=Uu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Uu(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cf(e,i,a){return va(i,e.child,null,a),e=If(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Jp(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Fh(e.return,i,a)}function Df(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function Wp(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ue(e,i,l.children,a),l=Ae.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jp(e,a,i);else if(e.tag===19)Jp(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(Ae,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Mu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Df(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Mu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Df(i,!0,a,null,d);break;case"together":Df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ui(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),mr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(No(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Di(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Di(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Of(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&pu(e)))}function wA(e,i,a){switch(i.tag){case 3:Jt(i,i.stateNode.containerInfo),ir(i,Ee,e.memoizedState.cache),Do();break;case 27:case 5:Xi(i);break;case 4:Jt(i,i.stateNode.containerInfo);break;case 10:ir(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(lr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Zp(e,i,a):(lr(i),e=Ui(e,i,a),e!==null?e.sibling:null);lr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(No(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return Wp(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(Ae,Ae.current),l)break;return null;case 22:case 23:return i.lanes=0,Kp(e,i,a);case 24:ir(i,Ee,e.memoizedState.cache)}return Ui(e,i,a)}function ty(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)De=!0;else{if(!Of(e,a)&&(i.flags&128)===0)return De=!1,wA(e,i,a);De=(e.flags&131072)!==0}else De=!1,Bt&&(i.flags&1048576)!==0&&Og(i,gu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Lh(l)?(e=As(l,e),i.tag=1,i=Xp(null,i,l,e,a)):(i.tag=0,i=Sf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Rt){i.tag=11,i=Hp(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=Gp(null,i,l,e,a);break t}}throw i=te(l)||l,Error(s(306,i,""))}}return i;case 0:return Sf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=As(l,i.pendingProps),Xp(e,i,l,h,a);case 3:t:{if(Jt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,Jh(e,i),Lo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ir(i,Ee,l),l!==d.cache&&Kh(i,[Ee],a,!0),xo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=$p(e,i,l,a);break t}else if(l!==h){h=bn(Error(s(424)),i),Oo(h),i=$p(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=Ln(e.firstChild),Je=i,Bt=!0,ps=null,ii=!0,a=Mp(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Do(),l===h){i=Ui(e,i,a);break t}Ue(e,i,l,a)}i=i.child}return i;case 26:return ku(e,i),e===null?(a=r_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=$u(_t.current).createElement(a),l[_e]=i,l[de]=e,Le(l,a,e),ue(l),i.stateNode=l):i.memoizedState=r_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xi(i),e===null&&Bt&&(l=i.stateNode=e_(i.type,i.pendingProps,_t.current),Je=i,ii=!0,h=oe,_r(i.type)?(cd=h,oe=Ln(l.firstChild)):oe=h),Ue(e,i,i.pendingProps.children,a),ku(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=oe)&&(l=WA(l,i.type,i.pendingProps,ii),l!==null?(i.stateNode=l,Je=i,oe=Ln(l.firstChild),ii=!1,h=!0):h=!1),h||ys(i)),Xi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,ad(h,d)?l=null:v!==null&&ad(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=sf(e,i,yA,null,null,a),al._currentValue=h),ku(e,i),Ue(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=oe)&&(a=tS(a,i.pendingProps,ii),a!==null?(i.stateNode=a,Je=i,oe=null,e=!0):e=!1),e||ys(i)),null;case 13:return Zp(e,i,a);case 4:return Jt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=va(i,null,l,a):Ue(e,i,l,a),i.child;case 11:return Hp(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ir(i,i.type,l.value),Ue(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,vs(i),h=He(h),l=l(h),i.flags|=1,Ue(e,i,l,a),i.child;case 14:return Gp(e,i,i.type,i.pendingProps,a);case 15:return Fp(e,i,i.type,i.pendingProps,a);case 19:return Wp(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Uu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Di(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Kp(e,i,a);case 24:return vs(i),l=He(Ee),e===null?(h=Xh(),h===null&&(h=Wt,d=Qh(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},Zh(i),ir(i,Ee,h)):((e.lanes&a)!==0&&(Jh(e,i),Lo(i,null,null,a),xo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ir(i,Ee,l)):(l=d.cache,ir(i,Ee,l),l!==h.cache&&Kh(i,[Ee],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function xi(e){e.flags|=4}function ey(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(i)){if(i=Cn.current,i!==null&&((Ut&4194048)===Ut?ri!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==ri))throw ko=$h,Lg;e.flags|=8192}}function xu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?oo():536870912,e.lanes|=i,Sa|=i)}function Fo(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function re(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function RA(e,i,a){var l=i.pendingProps;switch(qh(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(i),null;case 1:return re(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Vi(Ee),Fn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Co(i)?xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Vg())),re(i),null;case 26:return a=i.memoizedState,e===null?(xi(i),a!==null?(re(i),ey(i,a)):(re(i),i.flags&=-16777217)):a?a!==e.memoizedState?(xi(i),re(i),ey(i,a)):(re(i),i.flags&=-16777217):(e.memoizedProps!==l&&xi(i),re(i),i.flags&=-16777217),null;case 27:pi(i),a=_t.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}e=ut.current,Co(i)?Ng(i):(e=e_(h,l,a),i.stateNode=e,xi(i))}return re(i),null;case 5:if(pi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return re(i),null}if(e=ut.current,Co(i))Ng(i);else{switch(h=$u(_t.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[_e]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(Le(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&xi(i)}}return re(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&xi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=_t.current,Co(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[_e]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Yy(e.nodeValue,a)),e||ys(i)}else e=$u(e).createTextNode(l),e[_e]=i,i.stateNode=e}return re(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Co(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[_e]=i}else Do(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;re(i),h=!1}else h=Vg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(ki(i),i):(ki(i),null)}if(ki(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),xu(i,i.updateQueue),re(i),null;case 4:return Fn(),e===null&&ed(i.stateNode.containerInfo),re(i),null;case 10:return Vi(i.type),re(i),null;case 19:if(et(Ae),h=i.memoizedState,h===null)return re(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Fo(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Mu(e),d!==null){for(i.flags|=128,Fo(h,!1),e=d.updateQueue,i.updateQueue=e,xu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Dg(a,e),a=a.sibling;return J(Ae,Ae.current&1|2),i.child}e=e.sibling}h.tail!==null&&_n()>Bu&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Mu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,xu(i,e),Fo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return re(i),null}else 2*_n()-h.renderingStartTime>Bu&&a!==536870912&&(i.flags|=128,l=!0,Fo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=_n(),i.sibling=null,e=Ae.current,J(Ae,l?e&1|2:e&1),i):(re(i),null);case 22:case 23:return ki(i),nf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(re(i),i.subtreeFlags&6&&(i.flags|=8192)):re(i),a=i.updateQueue,a!==null&&xu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&et(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Vi(Ee),re(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function IA(e,i){switch(qh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Vi(Ee),Fn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return pi(i),null;case 13:if(ki(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Do()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return et(Ae),null;case 4:return Fn(),null;case 10:return Vi(i.type),null;case 22:case 23:return ki(i),nf(),e!==null&&et(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Vi(Ee),null;case 25:return null;default:return null}}function ny(e,i){switch(qh(i),i.tag){case 3:Vi(Ee),Fn();break;case 26:case 27:case 5:pi(i);break;case 4:Fn();break;case 13:ki(i);break;case 19:et(Ae);break;case 10:Vi(i.type);break;case 22:case 23:ki(i),nf(),e!==null&&et(Ts);break;case 24:Vi(Ee)}}function Ko(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Zt(i,i.return,T)}}function cr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var b=a,L=T;try{L()}catch(G){Zt(h,b,G)}}}l=l.next}while(l!==d)}}catch(G){Zt(i,i.return,G)}}function iy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Gg(i,a)}catch(l){Zt(e,e.return,l)}}}function ry(e,i,a){a.props=As(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,i,l)}}function Qo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,i,h)}}function si(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,i,h)}else a.current=null}function sy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function Nf(e,i,a){try{var l=e.stateNode;YA(l,e.type,a,i),l[de]=i}catch(h){Zt(e,e.return,h)}}function ay(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function Mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ay(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Xu));else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Vf(e,i,a),e=e.sibling;e!==null;)Vf(e,i,a),e=e.sibling}function Lu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Lu(e,i,a),e=e.sibling;e!==null;)Lu(e,i,a),e=e.sibling}function oy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Le(i,l,a),i[_e]=e,i[de]=a}catch(d){Zt(e,e.return,d)}}var Li=!1,he=!1,Pf=!1,ly=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function CA(e,i){if(e=e.containerInfo,rd=nc,e=vg(e),Nh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,b=-1,L=0,G=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(T=v+h),K!==d||l!==0&&K.nodeType!==3||(b=v+l),K.nodeType===3&&(v+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(b=v),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=T===-1||b===-1?null:{start:T,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(sd={focusedElem:e,selectionRange:a},nc=!1,Oe=i;Oe!==null;)if(i=Oe,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Oe=e;else for(;Oe!==null;){switch(i=Oe,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var gt=As(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(gt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Zt(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)ld(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ld(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Oe=e;break}Oe=i.return}}function uy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:hr(e,a),l&4&&Ko(5,a);break;case 1:if(hr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=As(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&iy(a),l&512&&Qo(a,a.return);break;case 3:if(hr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Gg(e,i)}catch(v){Zt(a,a.return,v)}}break;case 27:i===null&&l&4&&oy(a);case 26:case 5:hr(e,a),i===null&&l&4&&sy(a),l&512&&Qo(a,a.return);break;case 12:hr(e,a);break;case 13:hr(e,a),l&4&&fy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=xA.bind(null,a),eS(e,a))));break;case 22:if(l=a.memoizedState!==null||Li,!l){i=i!==null&&i.memoizedState!==null||he,h=Li;var d=he;Li=l,(he=i)&&!d?fr(e,a,(a.subtreeFlags&8772)!==0):hr(e,a),Li=h,he=d}break;case 30:break;default:hr(e,a)}}function cy(e){var i=e.alternate;i!==null&&(e.alternate=null,cy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Wi(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,tn=!1;function zi(e,i,a){for(a=a.child;a!==null;)hy(e,i,a),a=a.sibling}function hy(e,i,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:he||si(a,i),zi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||si(a,i);var l=ne,h=tn;_r(a.type)&&(ne=a.stateNode,tn=!1),zi(e,i,a),nl(a.stateNode),ne=l,tn=h;break;case 5:he||si(a,i);case 6:if(l=ne,h=tn,ne=null,zi(e,i,a),ne=l,tn=h,ne!==null)if(tn)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){Zt(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){Zt(a,i,d)}break;case 18:ne!==null&&(tn?(e=ne,Wy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cl(e)):Wy(ne,a.stateNode));break;case 4:l=ne,h=tn,ne=a.stateNode.containerInfo,tn=!0,zi(e,i,a),ne=l,tn=h;break;case 0:case 11:case 14:case 15:he||cr(2,a,i),he||cr(4,a,i),zi(e,i,a);break;case 1:he||(si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ry(a,i,l)),zi(e,i,a);break;case 21:zi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,zi(e,i,a),he=l;break;default:zi(e,i,a)}}function fy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cl(e)}catch(a){Zt(i,i.return,a)}}function DA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new ly),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new ly),i;default:throw Error(s(435,e.tag))}}function kf(e,i){var a=DA(e);i.forEach(function(l){var h=LA.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(_r(T.type)){ne=T.stateNode,tn=!1;break t}break;case 5:ne=T.stateNode,tn=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,tn=!0;break t}T=T.return}if(ne===null)throw Error(s(160));hy(d,v,h),ne=null,tn=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)dy(i,e),i=i.sibling}var xn=null;function dy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),l&4&&(cr(3,e,e.return),Ko(3,e),cr(5,e,e.return));break;case 1:hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),l&64&&Li&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=xn;if(hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Zr]||d[_e]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),Le(d,l,a),d[_e]=e,ue(d),l=d;break t;case"link":var v=o_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;case"meta":if(v=o_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),Le(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[_e]=e,ue(d),l=d}e.stateNode=l}else l_(h,e.type,e.stateNode);else e.stateNode=a_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?l_(h,e.type,e.stateNode):a_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),a!==null&&l&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),l&512&&(he||a===null||si(a,a.return)),e.flags&32){h=e.stateNode;try{Tn(h,"")}catch(B){Zt(e,e.return,B)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Nf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Pf=!0);break;case 6:if(hn(i,e),fn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(B){Zt(e,e.return,B)}}break;case 3:if(Wu=null,h=xn,xn=Zu(i.containerInfo),hn(i,e),xn=h,fn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{cl(i.containerInfo)}catch(B){Zt(e,e.return,B)}Pf&&(Pf=!1,my(e));break;case 4:l=xn,xn=Zu(e.stateNode.containerInfo),hn(i,e),fn(e),xn=l;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(jf=_n()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kf(e,l)));break;case 22:h=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,L=Li,G=he;if(Li=L||h,he=G||b,hn(i,e),he=G,Li=L,fn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||b||Li||he||Ss(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){b=a=i;try{if(d=b.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=b.stateNode;var K=b.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(B){Zt(b,b.return,B)}}}else if(i.tag===6){if(a===null){b=i;try{b.stateNode.nodeValue=h?"":b.memoizedProps}catch(B){Zt(b,b.return,B)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,kf(e,a))));break;case 19:hn(i,e),fn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,kf(e,l)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(ay(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Mf(e);Lu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Tn(v,""),a.flags&=-33);var T=Mf(e);Lu(e,T,v);break;case 3:case 4:var b=a.stateNode.containerInfo,L=Mf(e);Vf(e,L,b);break;default:throw Error(s(161))}}catch(G){Zt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function my(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;my(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function hr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)uy(e,i.alternate,i),i=i.sibling}function Ss(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:cr(4,i,i.return),Ss(i);break;case 1:si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&ry(i,i.return,a),Ss(i);break;case 27:nl(i.stateNode);case 26:case 5:si(i,i.return),Ss(i);break;case 22:i.memoizedState===null&&Ss(i);break;case 30:Ss(i);break;default:Ss(i)}e=e.sibling}}function fr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:fr(h,d,a),Ko(4,d);break;case 1:if(fr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Zt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var b=h.shared.hiddenCallbacks;if(b!==null)for(h.shared.hiddenCallbacks=null,h=0;h<b.length;h++)Hg(b[h],T)}catch(L){Zt(l,l.return,L)}}a&&v&64&&iy(d),Qo(d,d.return);break;case 27:oy(d);case 26:case 5:fr(h,d,a),a&&l===null&&v&4&&sy(d),Qo(d,d.return);break;case 12:fr(h,d,a);break;case 13:fr(h,d,a),a&&v&4&&fy(h,d);break;case 22:d.memoizedState===null&&fr(h,d,a),Qo(d,d.return);break;case 30:break;default:fr(h,d,a)}i=i.sibling}}function Uf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Mo(a))}function xf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mo(e))}function ai(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)gy(e,i,a,l),i=i.sibling}function gy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ai(e,i,a,l),h&2048&&Ko(9,i);break;case 1:ai(e,i,a,l);break;case 3:ai(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Mo(e)));break;case 12:if(h&2048){ai(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){Zt(i,i.return,b)}}else ai(e,i,a,l);break;case 13:ai(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?ai(e,i,a,l):Yo(e,i):d._visibility&2?ai(e,i,a,l):(d._visibility|=2,Ta(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Uf(v,i);break;case 24:ai(e,i,a,l),h&2048&&xf(i.alternate,i);break;default:ai(e,i,a,l)}}function Ta(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,b=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ta(d,v,T,b,h),Ko(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Ta(d,v,T,b,h):Yo(d,v):(G._visibility|=2,Ta(d,v,T,b,h)),h&&L&2048&&Uf(v.alternate,v);break;case 24:Ta(d,v,T,b,h),h&&L&2048&&xf(v.alternate,v);break;default:Ta(d,v,T,b,h)}i=i.sibling}}function Yo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Yo(a,l),h&2048&&Uf(l.alternate,l);break;case 24:Yo(a,l),h&2048&&xf(l.alternate,l);break;default:Yo(a,l)}i=i.sibling}}var Xo=8192;function Ea(e){if(e.subtreeFlags&Xo)for(e=e.child;e!==null;)py(e),e=e.sibling}function py(e){switch(e.tag){case 26:Ea(e),e.flags&Xo&&e.memoizedState!==null&&mS(xn,e.memoizedState,e.memoizedProps);break;case 5:Ea(e);break;case 3:case 4:var i=xn;xn=Zu(e.stateNode.containerInfo),Ea(e),xn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xo,Xo=16777216,Ea(e),Xo=i):Ea(e));break;default:Ea(e)}}function yy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function $o(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,vy(l,e)}yy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_y(e),e=e.sibling}function _y(e){switch(e.tag){case 0:case 11:case 15:$o(e),e.flags&2048&&cr(9,e,e.return);break;case 3:$o(e);break;case 12:$o(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,zu(e)):$o(e);break;default:$o(e)}}function zu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Oe=l,vy(l,e)}yy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:cr(8,i,i.return),zu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,zu(i));break;default:zu(i)}e=e.sibling}}function vy(e,i){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:cr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else t:for(a=e;Oe!==null;){l=Oe;var h=l.sibling,d=l.return;if(cy(l),l===a){Oe=null;break t}if(h!==null){h.return=d,Oe=h;break t}Oe=d}}}var OA={getCacheForType:function(e){var i=He(Ee),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},NA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Wt=null,Ot=null,Ut=0,Kt=0,dn=null,dr=!1,Aa=!1,Lf=!1,Bi=0,le=0,mr=0,bs=0,zf=0,Dn=0,Sa=0,Zo=null,en=null,Bf=!1,jf=0,Bu=1/0,ju=null,gr=null,xe=0,pr=null,ba=null,wa=0,qf=0,Hf=null,Ty=null,Jo=0,Gf=null;function mn(){if((Ft&2)!==0&&Ut!==0)return Ut&-Ut;if(H.T!==null){var e=fa;return e!==0?e:Zf()}return Zi()}function Ey(){Dn===0&&(Dn=(Ut&536870912)===0||Bt?ao():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Dn}function gn(e,i,a){(e===Wt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Ra(e,0),yr(e,Ut,Dn,!1)),_i(e,a),((Ft&2)===0||e!==Wt)&&(e===Wt&&((Ft&2)===0&&(bs|=a),le===4&&yr(e,Ut,Dn,!1)),oi(e))}function Ay(e,i,a){if((Ft&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||$r(e,i),h=l?PA(e,i):Qf(e,i,!0),d=l;do{if(h===0){Aa&&!l&&yr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!MA(a)){h=Qf(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=Zo;var b=T.current.memoizedState.isDehydrated;if(b&&(Ra(T,v).flags|=256),v=Qf(T,v,!1),v!==2){if(Lf&&!b){T.errorRecoveryDisabledLanes|=d,bs|=d,h=4;break t}d=en,en=h,d!==null&&(en===null?en=d:en.push.apply(en,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ra(e,0),yr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,Dn,!dr);break t;case 2:en=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=jf+300-_n(),10<h)){if(yr(l,i,Dn,!dr),Hs(l,0,!0)!==0)break t;l.timeoutHandle=Zy(Sy.bind(null,l,a,en,ju,Bf,i,Dn,bs,Sa,dr,d,2,-0,0),h);break t}Sy(l,a,en,ju,Bf,i,Dn,bs,Sa,dr,d,0,-0,0)}}break}while(!0);oi(e)}function Sy(e,i,a,l,h,d,v,T,b,L,G,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(sl={stylesheets:null,count:0,unsuspend:dS},py(i),K=gS(),K!==null)){e.cancelPendingCommit=K(Oy.bind(null,e,i,d,a,l,h,v,T,b,G,1,z,B)),yr(e,d,v,!L);return}Oy(e,i,d,a,l,h,v,T,b)}function MA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,a,l){i&=~zf,i&=~bs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-qe(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Kn(e,a,i)}function qu(){return(Ft&6)===0?(Wo(0),!1):!0}function Ff(){if(Ot!==null){if(Kt===0)var e=Ot.return;else e=Ot,Mi=_s=null,lf(e),_a=null,Ho=0,e=Ot;for(;e!==null;)ny(e.alternate,e),e=e.return;Ot=null}}function Ra(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$A(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ff(),Wt=e,Ot=a=Di(e.current,null),Ut=i,Kt=0,dn=null,dr=!1,Aa=$r(e,i),Lf=!1,Sa=Dn=zf=bs=mr=le=0,en=Zo=null,Bf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-qe(l),d=1<<h;i|=e[h],l&=~d}return Bi=i,cu(),a}function by(e,i){bt=null,H.H=Du,i===Po||i===vu?(i=jg(),Kt=3):i===Lg?(i=jg(),Kt=4):Kt=i===qp?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Ot===null&&(le=1,Pu(e,bn(i,e.current)))}function wy(){var e=H.H;return H.H=Du,e===null?Du:e}function Ry(){var e=H.A;return H.A=OA,e}function Kf(){le=4,dr||(Ut&4194048)!==Ut&&Cn.current!==null||(Aa=!0),(mr&134217727)===0&&(bs&134217727)===0||Wt===null||yr(Wt,Ut,Dn,!1)}function Qf(e,i,a){var l=Ft;Ft|=2;var h=wy(),d=Ry();(Wt!==e||Ut!==i)&&(ju=null,Ra(e,i)),i=!1;var v=le;t:do try{if(Kt!==0&&Ot!==null){var T=Ot,b=dn;switch(Kt){case 8:Ff(),v=6;break t;case 3:case 2:case 9:case 6:Cn.current===null&&(i=!0);var L=Kt;if(Kt=0,dn=null,Ia(e,T,b,L),a&&Aa){v=0;break t}break;default:L=Kt,Kt=0,dn=null,Ia(e,T,b,L)}}VA(),v=le;break}catch(G){by(e,G)}while(!0);return i&&e.shellSuspendCounter++,Mi=_s=null,Ft=l,H.H=h,H.A=d,Ot===null&&(Wt=null,Ut=0,cu()),v}function VA(){for(;Ot!==null;)Iy(Ot)}function PA(e,i){var a=Ft;Ft|=2;var l=wy(),h=Ry();Wt!==e||Ut!==i?(ju=null,Bu=_n()+500,Ra(e,i)):Aa=$r(e,i);t:do try{if(Kt!==0&&Ot!==null){i=Ot;var d=dn;e:switch(Kt){case 1:Kt=0,dn=null,Ia(e,i,d,1);break;case 2:case 9:if(zg(d)){Kt=0,dn=null,Cy(i);break}i=function(){Kt!==2&&Kt!==9||Wt!==e||(Kt=7),oi(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:zg(d)?(Kt=0,dn=null,Cy(i)):(Kt=0,dn=null,Ia(e,i,d,7));break;case 5:var v=null;switch(Ot.tag){case 26:v=Ot.memoizedState;case 5:case 27:var T=Ot;if(!v||u_(v)){Kt=0,dn=null;var b=T.sibling;if(b!==null)Ot=b;else{var L=T.return;L!==null?(Ot=L,Hu(L)):Ot=null}break e}}Kt=0,dn=null,Ia(e,i,d,5);break;case 6:Kt=0,dn=null,Ia(e,i,d,6);break;case 8:Ff(),le=6;break t;default:throw Error(s(462))}}kA();break}catch(G){by(e,G)}while(!0);return Mi=_s=null,H.H=l,H.A=h,Ft=a,Ot!==null?0:(Wt=null,Ut=0,cu(),le)}function kA(){for(;Ot!==null&&!no();)Iy(Ot)}function Iy(e){var i=ty(e.alternate,e,Bi);e.memoizedProps=e.pendingProps,i===null?Hu(e):Ot=i}function Cy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Yp(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=Yp(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:lf(i);default:ny(a,i),i=Ot=Dg(i,Bi),i=ty(a,i,Bi)}e.memoizedProps=e.pendingProps,i===null?Hu(e):Ot=i}function Ia(e,i,a,l){Mi=_s=null,lf(i),_a=null,Ho=0;var h=i.return;try{if(bA(e,h,i,a,Ut)){le=1,Pu(e,bn(a,e.current)),Ot=null;return}}catch(d){if(h!==null)throw Ot=h,d;le=1,Pu(e,bn(a,e.current)),Ot=null;return}i.flags&32768?(Bt||l===1?e=!0:Aa||(Ut&536870912)!==0?e=!1:(dr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dy(i,e)):Hu(i)}function Hu(e){var i=e;do{if((i.flags&32768)!==0){Dy(i,dr);return}e=i.return;var a=RA(i.alternate,i,Bi);if(a!==null){Ot=a;return}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=e}while(i!==null);le===0&&(le=5)}function Dy(e,i){do{var a=IA(e.alternate,e);if(a!==null){a.flags&=32767,Ot=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Ot=e;return}Ot=e=a}while(e!==null);le=6,Ot=null}function Oy(e,i,a,l,h,d,v,T,b){e.cancelPendingCommit=null;do Gu();while(xe!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Uh,lo(e,a,d,v,T,b),e===Wt&&(Ot=Wt=null,Ut=0),ba=i,pr=e,wa=a,qf=d,Hf=h,Ty=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,zA(Kr,function(){return ky(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=tt.p,tt.p=2,v=Ft,Ft|=4;try{CA(e,i,a)}finally{Ft=v,tt.p=h,H.T=l}}xe=1,Ny(),My(),Vy()}}function Ny(){if(xe===1){xe=0;var e=pr,i=ba,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=tt.p;tt.p=2;var h=Ft;Ft|=4;try{dy(i,e);var d=sd,v=vg(e.containerInfo),T=d.focusedElem,b=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&_g(T.ownerDocument.documentElement,T)){if(b!==null&&Nh(T)){var L=b.start,G=b.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var K=T.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),gt=T.textContent.length,ft=Math.min(b.start,gt),$t=b.end===void 0?ft:Math.min(b.end,gt);!B.extend&&ft>$t&&(v=$t,$t=ft,ft=v);var P=yg(T,ft),O=yg(T,$t);if(P&&O&&(B.rangeCount!==1||B.anchorNode!==P.node||B.anchorOffset!==P.offset||B.focusNode!==O.node||B.focusOffset!==O.offset)){var x=K.createRange();x.setStart(P.node,P.offset),B.removeAllRanges(),ft>$t?(B.addRange(x),B.extend(O.node,O.offset)):(x.setEnd(O.node,O.offset),B.addRange(x))}}}}for(K=[],B=T;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var F=K[T];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}nc=!!rd,sd=rd=null}finally{Ft=h,tt.p=l,H.T=a}}e.current=i,xe=2}}function My(){if(xe===2){xe=0;var e=pr,i=ba,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=tt.p;tt.p=2;var h=Ft;Ft|=4;try{uy(e,i.alternate,i)}finally{Ft=h,tt.p=l,H.T=a}}xe=3}}function Vy(){if(xe===4||xe===3){xe=0,zl();var e=pr,i=ba,a=wa,l=Ty;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?xe=5:(xe=0,ba=pr=null,Py(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(gr=null),Gs(a),i=i.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=tt.p,tt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{H.T=i,tt.p=h}}(wa&3)!==0&&Gu(),oi(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Gf?Jo++:(Jo=0,Gf=e):Jo=0,Wo(0)}}function Py(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Mo(i)))}function Gu(e){return Ny(),My(),Vy(),ky()}function ky(){if(xe!==5)return!1;var e=pr,i=qf;qf=0;var a=Gs(wa),l=H.T,h=tt.p;try{tt.p=32>a?32:a,H.T=null,a=Hf,Hf=null;var d=pr,v=wa;if(xe=0,ba=pr=null,wa=0,(Ft&6)!==0)throw Error(s(331));var T=Ft;if(Ft|=4,_y(d.current),gy(d,d.current,v,a),Ft=T,Wo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{tt.p=h,H.T=l,Py(e,i)}}function Uy(e,i,a){i=bn(a,i),i=Af(e.stateNode,i,2),e=ar(e,i,2),e!==null&&(_i(e,2),oi(e))}function Zt(e,i,a){if(e.tag===3)Uy(e,e,a);else for(;i!==null;){if(i.tag===3){Uy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(gr===null||!gr.has(l))){e=bn(a,e),a=Bp(2),l=ar(i,a,2),l!==null&&(jp(a,l,i,e),_i(l,2),oi(l));break}}i=i.return}}function Yf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new NA;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Lf=!0,h.add(a),e=UA.bind(null,e,i,a),i.then(e,e))}function UA(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(Ut&a)===a&&(le===4||le===3&&(Ut&62914560)===Ut&&300>_n()-jf?(Ft&2)===0&&Ra(e,0):zf|=a,Sa===Ut&&(Sa=0)),oi(e)}function xy(e,i){i===0&&(i=oo()),e=la(e,i),e!==null&&(_i(e,i),oi(e))}function xA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),xy(e,a)}function LA(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),xy(e,a)}function zA(e,i){return Gr(e,i)}var Fu=null,Ca=null,Xf=!1,Ku=!1,$f=!1,ws=0;function oi(e){e!==Ca&&e.next===null&&(Ca===null?Fu=Ca=e:Ca=Ca.next=e),Ku=!0,Xf||(Xf=!0,jA())}function Wo(e,i){if(!$f&&Ku){$f=!0;do for(var a=!1,l=Fu;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-qe(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,jy(l,d))}else d=Ut,d=Hs(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||$r(l,d)||(a=!0,jy(l,d));l=l.next}while(a);$f=!1}}function BA(){Ly()}function Ly(){Ku=Xf=!1;var e=0;ws!==0&&(XA()&&(e=ws),ws=0);for(var i=_n(),a=null,l=Fu;l!==null;){var h=l.next,d=zy(l,i);d===0?(l.next=null,a===null?Fu=h:a.next=h,h===null&&(Ca=a)):(a=l,(e!==0||(d&3)!==0)&&(Ku=!0)),l=h}Wo(e)}function zy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-qe(d),T=1<<v,b=h[v];b===-1?((T&a)===0||(T&l)!==0)&&(h[v]=so(T,i)):b<=i&&(e.expiredLanes|=T),d&=~T}if(i=Wt,a=Ut,a=Hs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Fr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$r(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Fr(l),Gs(a)){case 2:case 8:a=js;break;case 32:a=Kr;break;case 268435456:a=qs;break;default:a=Kr}return l=By.bind(null,e),a=Gr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Fr(l),e.callbackPriority=2,e.callbackNode=null,2}function By(e,i){if(xe!==0&&xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gu()&&e.callbackNode!==a)return null;var l=Ut;return l=Hs(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Ay(e,l,i),zy(e,_n()),e.callbackNode!=null&&e.callbackNode===a?By.bind(null,e):null)}function jy(e,i){if(Gu())return null;Ay(e,i,!0)}function jA(){ZA(function(){(Ft&6)!==0?Gr(io,BA):Ly()})}function Zf(){return ws===0&&(ws=ao()),ws}function qy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$s(""+e)}function Hy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function qA(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=qy((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?qy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Zs("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ws!==0){var b=v?Hy(h,v):new FormData(h);yf(a,{pending:!0,data:b,method:h.method,action:d},null,b)}}else typeof d=="function"&&(T.preventDefault(),b=v?Hy(h,v):new FormData(h),yf(a,{pending:!0,data:b,method:h.method,action:d},d,b))},currentTarget:h}]})}}for(var Jf=0;Jf<kh.length;Jf++){var Wf=kh[Jf],HA=Wf.toLowerCase(),GA=Wf[0].toUpperCase()+Wf.slice(1);Un(HA,"on"+GA)}Un(Ag,"onAnimationEnd"),Un(Sg,"onAnimationIteration"),Un(bg,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(oA,"onTransitionRun"),Un(lA,"onTransitionStart"),Un(uA,"onTransitionCancel"),Un(wg,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tl));function Gy(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],b=T.instance,L=T.currentTarget;if(T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Vu(G)}h.currentTarget=null,d=b}else for(v=0;v<l.length;v++){if(T=l[v],b=T.instance,L=T.currentTarget,T=T.listener,b!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){Vu(G)}h.currentTarget=null,d=b}}}}function Nt(e,i){var a=i[co];a===void 0&&(a=i[co]=new Set);var l=e+"__bubble";a.has(l)||(Fy(i,e,2,!1),a.add(l))}function td(e,i,a){var l=0;i&&(l|=4),Fy(a,e,l,i)}var Qu="_reactListening"+Math.random().toString(36).slice(2);function ed(e){if(!e[Qu]){e[Qu]=!0,ho.forEach(function(a){a!=="selectionchange"&&(FA.has(a)||td(a,!1,e),td(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Qu]||(i[Qu]=!0,td("selectionchange",!1,i))}}function Fy(e,i,a,l){switch(g_(i)){case 2:var h=_S;break;case 8:h=vS;break;default:h=gd}a=h.bind(null,i,a,e),h=void 0,!An||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function nd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var b=v.tag;if((b===3||b===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=vi(T),v===null)return;if(b=v.tag,b===5||b===6||b===26||b===27){l=d=v;continue t}T=T.parentNode}}l=l.return}Xl(function(){var L=d,G=En(a),K=[];t:{var z=Rg.get(e);if(z!==void 0){var B=Zs,gt=e;switch(e){case"keypress":if(Jn(a)===0)break t;case"keydown":case"keyup":B=ia;break;case"focusin":gt="focus",B=ta;break;case"focusout":gt="blur",B=ta;break;case"beforeblur":case"afterblur":B=ta;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=Ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=iu;break;case Ag:case Sg:case bg:B=ea;break;case wg:B=su;break;case"scroll":case"scrollend":B=$l;break;case"wheel":B=ra;break;case"copy":case"cut":case"paste":B=na;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=bo;break;case"toggle":case"beforetoggle":B=ou}var ft=(i&4)!==0,$t=!ft&&(e==="scroll"||e==="scrollend"),P=ft?z!==null?z+"Capture":null:z;ft=[];for(var O=L,x;O!==null;){var F=O;if(x=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||x===null||P===null||(F=rs(O,P),F!=null&&ft.push(el(O,F,x))),$t)break;O=O.return}0<ft.length&&(z=new B(z,gt,null,a,G),K.push({event:z,listeners:ft}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Si&&(gt=a.relatedTarget||a.fromElement)&&(vi(gt)||gt[vn]))break t;if((B||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,B?(gt=a.relatedTarget||a.toElement,B=L,gt=gt?vi(gt):null,gt!==null&&($t=u(gt),ft=gt.tag,gt!==$t||ft!==5&&ft!==27&&ft!==6)&&(gt=null)):(B=null,gt=L),B!==gt)){if(ft=Sn,F="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(ft=bo,F="onPointerLeave",P="onPointerEnter",O="pointer"),$t=B==null?z:Yn(B),x=gt==null?z:Yn(gt),z=new ft(F,O+"leave",B,a,G),z.target=$t,z.relatedTarget=x,F=null,vi(G)===L&&(ft=new ft(P,O+"enter",gt,a,G),ft.target=x,ft.relatedTarget=$t,F=ft),$t=F,B&&gt)e:{for(ft=B,P=gt,O=0,x=ft;x;x=Da(x))O++;for(x=0,F=P;F;F=Da(F))x++;for(;0<O-x;)ft=Da(ft),O--;for(;0<x-O;)P=Da(P),x--;for(;O--;){if(ft===P||P!==null&&ft===P.alternate)break e;ft=Da(ft),P=Da(P)}ft=null}else ft=null;B!==null&&Ky(K,z,B,ft,!1),gt!==null&&$t!==null&&Ky(K,$t,gt,ft,!0)}}t:{if(z=L?Yn(L):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var rt=hg;else if(Te(z))if(fg)rt=rA;else{rt=nA;var Dt=eA}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&yo(L.elementType)&&(rt=hg):rt=iA;if(rt&&(rt=rt(e,L))){Ci(K,rt,a,G);break t}Dt&&Dt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&er(z,"number",z.value)}switch(Dt=L?Yn(L):window,e){case"focusin":(Te(Dt)||Dt.contentEditable==="true")&&(sa=Dt,Mh=L,Io=null);break;case"focusout":Io=Mh=sa=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Tg(K,a,G);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":Tg(K,a,G)}var at;if(ei)t:{switch(e){case"compositionstart":var dt="onCompositionStart";break t;case"compositionend":dt="onCompositionEnd";break t;case"compositionupdate":dt="onCompositionUpdate";break t}dt=void 0}else Pt?j(e,a)&&(dt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(_&&a.locale!=="ko"&&(Pt||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Pt&&(at=vo()):(Zn=G,nr="value"in Zn?Zn.value:Zn.textContent,Pt=!0)),Dt=Yu(L,dt),0<Dt.length&&(dt=new Ao(dt,e,null,a,G),K.push({event:dt,listeners:Dt}),at?dt.data=at:(at=W(a),at!==null&&(dt.data=at)))),(at=m?ve(e,a):kt(e,a))&&(dt=Yu(L,"onBeforeInput"),0<dt.length&&(Dt=new Ao("onBeforeInput","beforeinput",null,a,G),K.push({event:Dt,listeners:dt}),Dt.data=at)),qA(K,e,L,a,G)}Gy(K,i)})}function el(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Yu(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=rs(e,a),h!=null&&l.unshift(el(e,h,d)),h=rs(e,i),h!=null&&l.push(el(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Da(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ky(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,b=T.alternate,L=T.stateNode;if(T=T.tag,b!==null&&b===l)break;T!==5&&T!==26&&T!==27||L===null||(b=L,h?(L=rs(a,d),L!=null&&v.unshift(el(a,L,b))):h||(L=rs(a,d),L!=null&&v.push(el(a,L,b)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var KA=/\r\n?/g,QA=/\u0000|\uFFFD/g;function Qy(e){return(typeof e=="string"?e:""+e).replace(KA,`
`).replace(QA,"")}function Yy(e,i){return i=Qy(i),Qy(e)===i}function Xu(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":po(e,l,d);break;case"data":if(i!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$s(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=$s(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Xu);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=$s(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Nt("beforetoggle",e),Nt("toggle",e),tr(e,"popover",l);break;case"xlinkActuate":Pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":tr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wh.get(a)||a,tr(e,a,l))}}function id(e,i,a,l,h,d){switch(a){case"style":po(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Nt("scroll",e);break;case"onScrollEnd":l!=null&&Nt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Xu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):tr(e,a,l)}}}function Le(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",e),Nt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Nt("invalid",e);var T=d=v=h=null,b=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":b=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xt(e,i,l,G,a,null)}}es(e,d,T,b,L,v,h,!1),Xs(e);return;case"select":Nt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ai(e,!!l,i,!1):a!=null&&Ai(e,!!l,a,!0);return;case"textarea":Nt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}ns(e,l,h,d),Xs(e);return;case"option":for(b in a)if(a.hasOwnProperty(b)&&(l=a[b],l!=null))switch(b){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,b,l,a,null)}return;case"dialog":Nt("beforetoggle",e),Nt("toggle",e),Nt("cancel",e),Nt("close",e);break;case"iframe":case"object":Nt("load",e);break;case"video":case"audio":for(l=0;l<tl.length;l++)Nt(tl[l],e);break;case"image":Nt("error",e),Nt("load",e);break;case"details":Nt("toggle",e);break;case"embed":case"source":case"link":Nt("error",e),Nt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(yo(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&id(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function YA(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,b=null,L=null,G=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":b=K;default:l.hasOwnProperty(B)||Xt(e,i,B,null,l,K)}}for(var z in l){var B=l[z];if(K=a[z],l.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":L=B;break;case"defaultChecked":G=B;break;case"value":v=B;break;case"defaultValue":T=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Xt(e,i,z,B,l,K)}}ln(e,v,T,b,L,G,d,h);return;case"select":B=v=T=z=null;for(d in a)if(b=a[d],a.hasOwnProperty(d)&&b!=null)switch(d){case"value":break;case"multiple":B=b;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,b)}for(h in l)if(d=l[h],b=a[h],l.hasOwnProperty(h)&&(d!=null||b!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==b&&Xt(e,i,h,d,l,b)}i=T,a=v,l=B,z!=null?Ai(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ai(e,!!a,i,!0):Ai(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Qt(e,z,B);return;case"option":for(var gt in a)if(z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt))switch(gt){case"selected":e.selected=!1;break;default:Xt(e,i,gt,null,l,z)}for(b in l)if(z=l[b],B=a[b],l.hasOwnProperty(b)&&z!==B&&(z!=null||B!=null))switch(b){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,b,z,l,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!l.hasOwnProperty(ft)&&Xt(e,i,ft,null,l,z);for(L in l)if(z=l[L],B=a[L],l.hasOwnProperty(L)&&z!==B&&(z!=null||B!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,B)}return;default:if(yo(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&id(e,i,$t,void 0,l,z);for(G in l)z=l[G],B=a[G],!l.hasOwnProperty(G)||z===B||z===void 0&&B===void 0||id(e,i,G,z,l,B);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Xt(e,i,P,null,l,z);for(K in l)z=l[K],B=a[K],!l.hasOwnProperty(K)||z===B||z==null&&B==null||Xt(e,i,K,z,l,B)}var rd=null,sd=null;function $u(e){return e.nodeType===9?e:e.ownerDocument}function Xy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $y(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var od=null;function XA(){var e=window.event;return e&&e.type==="popstate"?e===od?!1:(od=e,!0):(od=null,!1)}var Zy=typeof setTimeout=="function"?setTimeout:void 0,$A=typeof clearTimeout=="function"?clearTimeout:void 0,Jy=typeof Promise=="function"?Promise:void 0,ZA=typeof queueMicrotask=="function"?queueMicrotask:typeof Jy<"u"?function(e){return Jy.resolve(null).then(e).catch(JA)}:Zy;function JA(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function Wy(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&nl(v.documentElement),a&2&&nl(v.body),a&4)for(a=v.head,nl(a),v=a.firstChild;v;){var T=v.nextSibling,b=v.nodeName;v[Zr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),cl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);cl(i)}function ld(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ld(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function WA(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Zr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ln(e.nextSibling),e===null)break}return null}function tS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ln(e.nextSibling),e===null))return null;return e}function ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function eS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ln(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var cd=null;function t_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function e_(e,i,a){switch(i=$u(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function nl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Wi(e)}var On=new Map,n_=new Set;function Zu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ji=tt.d;tt.d={f:nS,r:iS,D:rS,C:sS,L:aS,m:oS,X:uS,S:lS,M:cS};function nS(){var e=ji.f(),i=qu();return e||i}function iS(e){var i=Qn(e);i!==null&&i.tag===5&&i.type==="form"?Ap(i):ji.r(e)}var Oa=typeof document>"u"?null:document;function i_(e,i,a){var l=Oa;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),n_.has(h)||(n_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),Le(i,"link",e),ue(i),l.head.appendChild(i)))}}function rS(e){ji.D(e),i_("dns-prefetch",e,null)}function sS(e,i){ji.C(e,i),i_("preconnect",e,i)}function aS(e,i,a){ji.L(e,i,a);var l=Oa;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=Na(e);break;case"script":d=Ma(e)}On.has(d)||(e=A({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),On.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(il(d))||i==="script"&&l.querySelector(rl(d))||(i=l.createElement("link"),Le(i,"link",e),ue(i),l.head.appendChild(i)))}}function oS(e,i){ji.m(e,i);var a=Oa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ma(e)}if(!On.has(d)&&(e=A({rel:"modulepreload",href:e},i),On.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(d)))return}l=a.createElement("link"),Le(l,"link",e),ue(l),a.head.appendChild(l)}}}function lS(e,i,a){ji.S(e,i,a);var l=Oa;if(l&&e){var h=Xe(l).hoistableStyles,d=Na(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(il(d)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":i},a),(a=On.get(d))&&hd(e,a);var b=v=l.createElement("link");ue(b),Le(b,"link",e),b._p=new Promise(function(L,G){b.onload=L,b.onerror=G}),b.addEventListener("load",function(){T.loading|=1}),b.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ju(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function uS(e,i){ji.X(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(rl(h)),d||(e=A({src:e,async:!0},i),(i=On.get(h))&&fd(e,i),d=a.createElement("script"),ue(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function cS(e,i){ji.M(e,i);var a=Oa;if(a&&e){var l=Xe(a).hoistableScripts,h=Ma(e),d=l.get(h);d||(d=a.querySelector(rl(h)),d||(e=A({src:e,async:!0,type:"module"},i),(i=On.get(h))&&fd(e,i),d=a.createElement("script"),ue(d),Le(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function r_(e,i,a,l){var h=(h=_t.current)?Zu(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Na(a.href),a=Xe(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Na(a.href);var d=Xe(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(il(e)))&&!d._p&&(v.instance=d,v.state.loading=5),On.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},On.set(e,a),d||hS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ma(a),a=Xe(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Na(e){return'href="'+me(e)+'"'}function il(e){return'link[rel="stylesheet"]['+e+"]"}function s_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function hS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Le(i,"link",a),ue(i),e.head.appendChild(i))}function Ma(e){return'[src="'+me(e)+'"]'}function rl(e){return"script[async]"+e}function a_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),Le(l,"style",h),Ju(l,a.precedence,e),i.instance=l;case"stylesheet":h=Na(a.href);var d=e.querySelector(il(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=s_(a),(h=On.get(h))&&hd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Le(d,"link",l),i.state.loading|=4,Ju(d,a.precedence,e),i.instance=d;case"script":return d=Ma(a.src),(h=e.querySelector(rl(d)))?(i.instance=h,ue(h),h):(l=a,(h=On.get(d))&&(l=A({},a),fd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),Le(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ju(l,a.precedence,e));return i.instance}function Ju(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function hd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Wu=null;function o_(e,i,a){if(Wu===null){var l=new Map,h=Wu=new Map;h.set(a,l)}else h=Wu,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Zr]||d[_e]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function l_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function fS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var sl=null;function dS(){}function mS(e,i,a){if(sl===null)throw Error(s(475));var l=sl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Na(a.href),d=e.querySelector(il(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=tc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=s_(a),(h=On.get(h))&&hd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(T,b){v.onload=T,v.onerror=b}),Le(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=tc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function gS(){if(sl===null)throw Error(s(475));var e=sl;return e.stylesheets&&e.count===0&&dd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&dd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function dd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,i.forEach(pS,e),ec=null,tc.call(e))}function pS(e,i){if(!(i.state.loading&4)){var a=ec.get(e);if(a)var l=a.get(null);else{a=new Map,ec.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=tc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var al={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function yS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function c_(e,i,a,l,h,d,v,T,b,L,G,K){return e=new yS(e,i,a,v,T,b,L,K),i=1,d===!0&&(i|=24),d=cn(3,null,null,i),e.current=d,d.stateNode=e,i=Qh(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Zh(d),e}function h_(e){return e?(e=ua,e):ua}function f_(e,i,a,l,h,d){h=h_(h),l.context===null?l.context=h:l.pendingContext=h,l=sr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ar(e,l,i),a!==null&&(gn(a,e,i),Uo(a,e,i))}function d_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function md(e,i){d_(e,i),(e=e.alternate)&&d_(e,i)}function m_(e){if(e.tag===13){var i=la(e,67108864);i!==null&&gn(i,e,67108864),md(e,67108864)}}var nc=!0;function _S(e,i,a,l){var h=H.T;H.T=null;var d=tt.p;try{tt.p=2,gd(e,i,a,l)}finally{tt.p=d,H.T=h}}function vS(e,i,a,l){var h=H.T;H.T=null;var d=tt.p;try{tt.p=8,gd(e,i,a,l)}finally{tt.p=d,H.T=h}}function gd(e,i,a,l){if(nc){var h=pd(l);if(h===null)nd(e,i,l,ic,a),p_(e,l);else if(ES(h,e,i,a,l))l.stopPropagation();else if(p_(e,l),i&4&&-1<TS.indexOf(e)){for(;h!==null;){var d=Qn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Vn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var b=1<<31-qe(v);T.entanglements[1]|=b,v&=~b}oi(d),(Ft&6)===0&&(Bu=_n()+500,Wo(0))}}break;case 13:T=la(d,2),T!==null&&gn(T,d,2),qu(),md(d,2)}if(d=pd(l),d===null&&nd(e,i,l,ic,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else nd(e,i,l,null,a)}}function pd(e){return e=En(e),yd(e)}var ic=null;function yd(e){if(ic=null,e=vi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return ic=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vh()){case io:return 2;case js:return 8;case Kr:case Th:return 32;case qs:return 268435456;default:return 32}default:return 32}}var _d=!1,vr=null,Tr=null,Er=null,ol=new Map,ll=new Map,Ar=[],TS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,i){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ol.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ll.delete(i.pointerId)}}function ul(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Qn(i),i!==null&&m_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function ES(e,i,a,l,h){switch(i){case"focusin":return vr=ul(vr,e,i,a,l,h),!0;case"dragenter":return Tr=ul(Tr,e,i,a,l,h),!0;case"mouseover":return Er=ul(Er,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ol.set(d,ul(ol.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ll.set(d,ul(ll.get(d)||null,e,i,a,l,h)),!0}return!1}function y_(e){var i=vi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,ql(e.priority,function(){if(a.tag===13){var l=mn();l=$i(l);var h=la(a,l);h!==null&&gn(h,a,l),md(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Si=l,a.target.dispatchEvent(l),Si=null}else return i=Qn(a),i!==null&&m_(i),e.blockedOn=a,!1;i.shift()}return!0}function __(e,i,a){rc(e)&&a.delete(i)}function AS(){_d=!1,vr!==null&&rc(vr)&&(vr=null),Tr!==null&&rc(Tr)&&(Tr=null),Er!==null&&rc(Er)&&(Er=null),ol.forEach(__),ll.forEach(__)}function sc(e,i){e.blockedOn===i&&(e.blockedOn=null,_d||(_d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,AS)))}var ac=null;function v_(e){ac!==e&&(ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(yd(l||a)===null)continue;break}var d=Qn(a);d!==null&&(e.splice(i,3),i-=3,yf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function cl(e){function i(b){return sc(b,e)}vr!==null&&sc(vr,e),Tr!==null&&sc(Tr,e),Er!==null&&sc(Er,e),ol.forEach(i),ll.forEach(i);for(var a=0;a<Ar.length;a++){var l=Ar[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)y_(a),a.blockedOn===null&&Ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||v_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)T=v.formAction;else if(yd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),v_(a)}}}function vd(e){this._internalRoot=e}oc.prototype.render=vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=mn();f_(a,l,e,i,null,null)},oc.prototype.unmount=vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;f_(e.current,2,null,e,null,null),qu(),i[vn]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Zi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ar.length&&i!==0&&i<Ar[a].priority;a++);Ar.splice(a,0,e),a===0&&y_(e)}};var T_=t.version;if(T_!=="19.1.0")throw Error(s(527,T_,"19.1.0"));tt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{ae=lc.inject(SS),Gt=lc}catch{}}return fl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=Up,d=xp,v=Lp,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=c_(e,1,!1,null,null,a,l,h,d,v,T,null),e[vn]=i.current,ed(e),new vd(i)},fl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=Up,v=xp,T=Lp,b=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=c_(e,1,!0,i,a??null,l,h,d,v,T,b,L),i.context=h_(null),a=i.current,l=mn(),l=$i(l),h=sr(l),h.callback=null,ar(a,h,l),a=l,i.current.lanes=a,_i(i,a),oi(i),e[vn]=i.current,ed(e),new oc(i)},fl.version="19.1.0",fl}var O_;function VS(){if(O_)return Ed.exports;O_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ed.exports=MS(),Ed.exports}var PS=VS(),nn=mm();const kS=()=>{};var N_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},US=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],g=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},mT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,g=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,A=u>>2,C=(u&3)<<4|g>>4;let k=(g&15)<<2|y>>6,q=y&63;p||(q=64,f||(k=64)),s.push(n[A],n[C],n[k],n[q])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(dT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):US(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],g=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const C=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||g==null||y==null||C==null)throw new xS;const k=u<<2|g>>4;if(s.push(k),y!==64){const q=g<<4&240|y>>2;if(s.push(q),C!==64){const Z=y<<6&192|C;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class xS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LS=function(r){const t=dT(r);return mT.encodeByteArray(t,!0)},Ic=function(r){return LS(r).replace(/\./g,"")},gT=function(r){try{return mT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=()=>zS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof N_>"u")return;const r=N_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},qS=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&gT(r[1]);return t&&JSON.parse(t)},Xc=()=>{try{return kS()||BS()||jS()||qS()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},pT=r=>{var t,n;return(n=(t=Xc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},HS=r=>{const t=pT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},yT=()=>{var r;return(r=Xc())===null||r===void 0?void 0:r.config},_T=r=>{var t;return(t=Xc())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ic(JSON.stringify(n)),Ic(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function QS(){var r;const t=(r=Xc())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function XS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $S(){const r=Ye();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function ZS(){return!QS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TT(){try{return typeof indexedDB=="object"}catch{return!1}}function ET(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function JS(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="FirebaseError";class Gn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=WS,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?tb(u,s):"Error",g=`${this.serviceName}: ${f} (${o}).`;return new Gn(o,g,s)}}function tb(r,t){return r.replace(eb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const eb=/\{\$([^}]+)}/g;function nb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Pr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(M_(u)&&M_(f)){if(!Pr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function M_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ib(r,t){const n=new rb(r,t);return n.subscribe.bind(n)}class rb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Rd),o.error===void 0&&(o.error=Rd),o.complete===void 0&&(o.complete=Rd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Rd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=1e3,ob=2,lb=4*60*60*1e3,ub=.5;function V_(r,t=ab,n=ob){const s=t*Math.pow(n,r),o=Math.round(ub*s*(Math.random()-.5)*2);return Math.min(lb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new GS;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fb(t))try{this.getOrInitializeService({instanceIdentifier:Rs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Rs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Rs){return this.instances.has(t)}getOptions(t=Rs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);s===g&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:hb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Rs){return this.component?this.component.multipleInstances?t:Rs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(r){return r===Rs?void 0:r}function fb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Mt||(Mt={}));const mb={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},gb=Mt.INFO,pb={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},yb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=pb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $c{constructor(t){this.name=t,this._logLevel=gb,this._logHandler=yb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Mt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...t),this._logHandler(this,Mt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...t),this._logHandler(this,Mt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...t),this._logHandler(this,Mt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...t),this._logHandler(this,Mt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...t),this._logHandler(this,Mt.ERROR,...t)}}const _b=(r,t)=>t.some(n=>r instanceof n);let P_,k_;function vb(){return P_||(P_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tb(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AT=new WeakMap,qd=new WeakMap,ST=new WeakMap,Id=new WeakMap,gm=new WeakMap;function Eb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Dr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&AT.set(n,r)}).catch(()=>{}),gm.set(t,r),t}function Ab(r){if(qd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});qd.set(r,t)}let Hd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return qd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||ST.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Sb(r){Hd=r(Hd)}function bb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Cd(this),t,...n);return ST.set(s,t.sort?t.sort():[t]),Dr(s)}:Tb().includes(r)?function(...t){return r.apply(Cd(this),t),Dr(AT.get(this))}:function(...t){return Dr(r.apply(Cd(this),t))}}function wb(r){return typeof r=="function"?bb(r):(r instanceof IDBTransaction&&Ab(r),_b(r,vb())?new Proxy(r,Hd):r)}function Dr(r){if(r instanceof IDBRequest)return Eb(r);if(Id.has(r))return Id.get(r);const t=wb(r);return t!==r&&(Id.set(r,t),gm.set(t,r)),t}const Cd=r=>gm.get(r);function bT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),g=Dr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Dr(f.result),p.oldVersion,p.newVersion,Dr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),g.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),g}const Rb=["get","getKey","getAll","getAllKeys","count"],Ib=["put","add","delete","clear"],Dd=new Map;function U_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Dd.get(t))return Dd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Ib.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Rb.includes(n)))return;const u=async function(f,...g){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(g.shift())),(await Promise.all([y[n](...g),o&&p.done]))[0]};return Dd.set(t,u),u}Sb(r=>({...r,get:(t,n,s)=>U_(t,n)||r.get(t,n,s),has:(t,n)=>!!U_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Db(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Db(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gd="@firebase/app",x_="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new $c("@firebase/app"),Ob="@firebase/app-compat",Nb="@firebase/analytics-compat",Mb="@firebase/analytics",Vb="@firebase/app-check-compat",Pb="@firebase/app-check",kb="@firebase/auth",Ub="@firebase/auth-compat",xb="@firebase/database",Lb="@firebase/data-connect",zb="@firebase/database-compat",Bb="@firebase/functions",jb="@firebase/functions-compat",qb="@firebase/installations",Hb="@firebase/installations-compat",Gb="@firebase/messaging",Fb="@firebase/messaging-compat",Kb="@firebase/performance",Qb="@firebase/performance-compat",Yb="@firebase/remote-config",Xb="@firebase/remote-config-compat",$b="@firebase/storage",Zb="@firebase/storage-compat",Jb="@firebase/firestore",Wb="@firebase/vertexai",tw="@firebase/firestore-compat",ew="firebase",nw="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",iw={[Gd]:"fire-core",[Ob]:"fire-core-compat",[Mb]:"fire-analytics",[Nb]:"fire-analytics-compat",[Pb]:"fire-app-check",[Vb]:"fire-app-check-compat",[kb]:"fire-auth",[Ub]:"fire-auth-compat",[xb]:"fire-rtdb",[Lb]:"fire-data-connect",[zb]:"fire-rtdb-compat",[Bb]:"fire-fn",[jb]:"fire-fn-compat",[qb]:"fire-iid",[Hb]:"fire-iid-compat",[Gb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Kb]:"fire-perf",[Qb]:"fire-perf-compat",[Yb]:"fire-rc",[Xb]:"fire-rc-compat",[$b]:"fire-gcs",[Zb]:"fire-gcs-compat",[Jb]:"fire-fst",[tw]:"fire-fst-compat",[Wb]:"fire-vertex","fire-js":"fire-js",[ew]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Map,rw=new Map,Kd=new Map;function L_(r,t){try{r.container.addComponent(t)}catch(n){Fi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function fi(r){const t=r.name;if(Kd.has(t))return Fi.debug(`There were multiple attempts to register component ${t}.`),!1;Kd.set(t,r);for(const n of Cc.values())L_(n,r);for(const n of rw.values())L_(n,r);return!0}function Ls(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function zn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new xs("app","Firebase",sw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=nw;function wT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Or.create("bad-app-name",{appName:String(o)});if(n||(n=yT()),!n)throw Or.create("no-options");const u=Cc.get(o);if(u){if(Pr(n,u.options)&&Pr(s,u.config))return u;throw Or.create("duplicate-app",{appName:o})}const f=new db(o);for(const p of Kd.values())f.addComponent(p);const g=new aw(n,s,f);return Cc.set(o,g),g}function pm(r=Fd){const t=Cc.get(r);if(!t&&r===Fd&&yT())return wT();if(!t)throw Or.create("no-app",{appName:r});return t}function Nn(r,t,n){var s;let o=(s=iw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const g=[`Unable to register library "${o}" with version "${t}":`];u&&g.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&g.push("and"),f&&g.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Fi.warn(g.join(" "));return}fi(new Hn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="firebase-heartbeat-database",lw=1,Al="firebase-heartbeat-store";let Od=null;function RT(){return Od||(Od=bT(ow,lw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(r=>{throw Or.create("idb-open",{originalErrorMessage:r.message})})),Od}async function uw(r){try{const n=(await RT()).transaction(Al),s=await n.objectStore(Al).get(IT(r));return await n.done,s}catch(t){if(t instanceof Gn)Fi.warn(t.message);else{const n=Or.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Fi.warn(n.message)}}}async function z_(r,t){try{const s=(await RT()).transaction(Al,"readwrite");await s.objectStore(Al).put(t,IT(r)),await s.done}catch(n){if(n instanceof Gn)Fi.warn(n.message);else{const s=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fi.warn(s.message)}}}function IT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=1024,hw=30;class fw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=B_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>hw){const f=gw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Fi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=B_(),{heartbeatsToSend:s,unsentEntries:o}=dw(this._heartbeatsCache.heartbeats),u=Ic(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Fi.warn(n),""}}}function B_(){return new Date().toISOString().substring(0,10)}function dw(r,t=cw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),j_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),j_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TT()?ET().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function j_(r){return Ic(JSON.stringify({version:2,heartbeats:r})).length}function gw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(r){fi(new Hn("platform-logger",t=>new Cb(t),"PRIVATE")),fi(new Hn("heartbeat",t=>new fw(t),"PRIVATE")),Nn(Gd,x_,r),Nn(Gd,x_,"esm2017"),Nn("fire-js","")}pw("");var q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nr,CT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,S){function R(){}R.prototype=S.prototype,M.D=S.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(N,I,V){for(var w=Array(arguments.length-2),te=2;te<arguments.length;te++)w[te-2]=arguments[te];return S.prototype[I].apply(N,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,S,R){R||(R=0);var N=Array(16);if(typeof S=="string")for(var I=0;16>I;++I)N[I]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(I=0;16>I;++I)N[I]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=M.g[0],R=M.g[1],I=M.g[2];var V=M.g[3],w=S+(V^R&(I^V))+N[0]+3614090360&4294967295;S=R+(w<<7&4294967295|w>>>25),w=V+(I^S&(R^I))+N[1]+3905402710&4294967295,V=S+(w<<12&4294967295|w>>>20),w=I+(R^V&(S^R))+N[2]+606105819&4294967295,I=V+(w<<17&4294967295|w>>>15),w=R+(S^I&(V^S))+N[3]+3250441966&4294967295,R=I+(w<<22&4294967295|w>>>10),w=S+(V^R&(I^V))+N[4]+4118548399&4294967295,S=R+(w<<7&4294967295|w>>>25),w=V+(I^S&(R^I))+N[5]+1200080426&4294967295,V=S+(w<<12&4294967295|w>>>20),w=I+(R^V&(S^R))+N[6]+2821735955&4294967295,I=V+(w<<17&4294967295|w>>>15),w=R+(S^I&(V^S))+N[7]+4249261313&4294967295,R=I+(w<<22&4294967295|w>>>10),w=S+(V^R&(I^V))+N[8]+1770035416&4294967295,S=R+(w<<7&4294967295|w>>>25),w=V+(I^S&(R^I))+N[9]+2336552879&4294967295,V=S+(w<<12&4294967295|w>>>20),w=I+(R^V&(S^R))+N[10]+4294925233&4294967295,I=V+(w<<17&4294967295|w>>>15),w=R+(S^I&(V^S))+N[11]+2304563134&4294967295,R=I+(w<<22&4294967295|w>>>10),w=S+(V^R&(I^V))+N[12]+1804603682&4294967295,S=R+(w<<7&4294967295|w>>>25),w=V+(I^S&(R^I))+N[13]+4254626195&4294967295,V=S+(w<<12&4294967295|w>>>20),w=I+(R^V&(S^R))+N[14]+2792965006&4294967295,I=V+(w<<17&4294967295|w>>>15),w=R+(S^I&(V^S))+N[15]+1236535329&4294967295,R=I+(w<<22&4294967295|w>>>10),w=S+(I^V&(R^I))+N[1]+4129170786&4294967295,S=R+(w<<5&4294967295|w>>>27),w=V+(R^I&(S^R))+N[6]+3225465664&4294967295,V=S+(w<<9&4294967295|w>>>23),w=I+(S^R&(V^S))+N[11]+643717713&4294967295,I=V+(w<<14&4294967295|w>>>18),w=R+(V^S&(I^V))+N[0]+3921069994&4294967295,R=I+(w<<20&4294967295|w>>>12),w=S+(I^V&(R^I))+N[5]+3593408605&4294967295,S=R+(w<<5&4294967295|w>>>27),w=V+(R^I&(S^R))+N[10]+38016083&4294967295,V=S+(w<<9&4294967295|w>>>23),w=I+(S^R&(V^S))+N[15]+3634488961&4294967295,I=V+(w<<14&4294967295|w>>>18),w=R+(V^S&(I^V))+N[4]+3889429448&4294967295,R=I+(w<<20&4294967295|w>>>12),w=S+(I^V&(R^I))+N[9]+568446438&4294967295,S=R+(w<<5&4294967295|w>>>27),w=V+(R^I&(S^R))+N[14]+3275163606&4294967295,V=S+(w<<9&4294967295|w>>>23),w=I+(S^R&(V^S))+N[3]+4107603335&4294967295,I=V+(w<<14&4294967295|w>>>18),w=R+(V^S&(I^V))+N[8]+1163531501&4294967295,R=I+(w<<20&4294967295|w>>>12),w=S+(I^V&(R^I))+N[13]+2850285829&4294967295,S=R+(w<<5&4294967295|w>>>27),w=V+(R^I&(S^R))+N[2]+4243563512&4294967295,V=S+(w<<9&4294967295|w>>>23),w=I+(S^R&(V^S))+N[7]+1735328473&4294967295,I=V+(w<<14&4294967295|w>>>18),w=R+(V^S&(I^V))+N[12]+2368359562&4294967295,R=I+(w<<20&4294967295|w>>>12),w=S+(R^I^V)+N[5]+4294588738&4294967295,S=R+(w<<4&4294967295|w>>>28),w=V+(S^R^I)+N[8]+2272392833&4294967295,V=S+(w<<11&4294967295|w>>>21),w=I+(V^S^R)+N[11]+1839030562&4294967295,I=V+(w<<16&4294967295|w>>>16),w=R+(I^V^S)+N[14]+4259657740&4294967295,R=I+(w<<23&4294967295|w>>>9),w=S+(R^I^V)+N[1]+2763975236&4294967295,S=R+(w<<4&4294967295|w>>>28),w=V+(S^R^I)+N[4]+1272893353&4294967295,V=S+(w<<11&4294967295|w>>>21),w=I+(V^S^R)+N[7]+4139469664&4294967295,I=V+(w<<16&4294967295|w>>>16),w=R+(I^V^S)+N[10]+3200236656&4294967295,R=I+(w<<23&4294967295|w>>>9),w=S+(R^I^V)+N[13]+681279174&4294967295,S=R+(w<<4&4294967295|w>>>28),w=V+(S^R^I)+N[0]+3936430074&4294967295,V=S+(w<<11&4294967295|w>>>21),w=I+(V^S^R)+N[3]+3572445317&4294967295,I=V+(w<<16&4294967295|w>>>16),w=R+(I^V^S)+N[6]+76029189&4294967295,R=I+(w<<23&4294967295|w>>>9),w=S+(R^I^V)+N[9]+3654602809&4294967295,S=R+(w<<4&4294967295|w>>>28),w=V+(S^R^I)+N[12]+3873151461&4294967295,V=S+(w<<11&4294967295|w>>>21),w=I+(V^S^R)+N[15]+530742520&4294967295,I=V+(w<<16&4294967295|w>>>16),w=R+(I^V^S)+N[2]+3299628645&4294967295,R=I+(w<<23&4294967295|w>>>9),w=S+(I^(R|~V))+N[0]+4096336452&4294967295,S=R+(w<<6&4294967295|w>>>26),w=V+(R^(S|~I))+N[7]+1126891415&4294967295,V=S+(w<<10&4294967295|w>>>22),w=I+(S^(V|~R))+N[14]+2878612391&4294967295,I=V+(w<<15&4294967295|w>>>17),w=R+(V^(I|~S))+N[5]+4237533241&4294967295,R=I+(w<<21&4294967295|w>>>11),w=S+(I^(R|~V))+N[12]+1700485571&4294967295,S=R+(w<<6&4294967295|w>>>26),w=V+(R^(S|~I))+N[3]+2399980690&4294967295,V=S+(w<<10&4294967295|w>>>22),w=I+(S^(V|~R))+N[10]+4293915773&4294967295,I=V+(w<<15&4294967295|w>>>17),w=R+(V^(I|~S))+N[1]+2240044497&4294967295,R=I+(w<<21&4294967295|w>>>11),w=S+(I^(R|~V))+N[8]+1873313359&4294967295,S=R+(w<<6&4294967295|w>>>26),w=V+(R^(S|~I))+N[15]+4264355552&4294967295,V=S+(w<<10&4294967295|w>>>22),w=I+(S^(V|~R))+N[6]+2734768916&4294967295,I=V+(w<<15&4294967295|w>>>17),w=R+(V^(I|~S))+N[13]+1309151649&4294967295,R=I+(w<<21&4294967295|w>>>11),w=S+(I^(R|~V))+N[4]+4149444226&4294967295,S=R+(w<<6&4294967295|w>>>26),w=V+(R^(S|~I))+N[11]+3174756917&4294967295,V=S+(w<<10&4294967295|w>>>22),w=I+(S^(V|~R))+N[2]+718787259&4294967295,I=V+(w<<15&4294967295|w>>>17),w=R+(V^(I|~S))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+S&4294967295,M.g[1]=M.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,M.g[2]=M.g[2]+I&4294967295,M.g[3]=M.g[3]+V&4294967295}s.prototype.u=function(M,S){S===void 0&&(S=M.length);for(var R=S-this.blockSize,N=this.B,I=this.h,V=0;V<S;){if(I==0)for(;V<=R;)o(this,M,V),V+=this.blockSize;if(typeof M=="string"){for(;V<S;)if(N[I++]=M.charCodeAt(V++),I==this.blockSize){o(this,N),I=0;break}}else for(;V<S;)if(N[I++]=M[V++],I==this.blockSize){o(this,N),I=0;break}}this.h=I,this.o+=S},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var S=1;S<M.length-8;++S)M[S]=0;var R=8*this.o;for(S=M.length-8;S<M.length;++S)M[S]=R&255,R/=256;for(this.u(M),M=Array(16),S=R=0;4>S;++S)for(var N=0;32>N;N+=8)M[R++]=this.g[S]>>>N&255;return M};function u(M,S){var R=g;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=S(M)}function f(M,S){this.h=S;for(var R=[],N=!0,I=M.length-1;0<=I;I--){var V=M[I]|0;N&&V==S||(R[I]=V,N=!1)}this.g=R}var g={};function p(M){return-128<=M&&128>M?u(M,function(S){return new f([S|0],0>S?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return C;if(0>M)return $(y(-M));for(var S=[],R=1,N=0;M>=R;N++)S[N]=M/R|0,R*=4294967296;return new f(S,0)}function A(M,S){if(M.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(M.charAt(0)=="-")return $(A(M.substring(1),S));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),N=C,I=0;I<M.length;I+=8){var V=Math.min(8,M.length-I),w=parseInt(M.substring(I,I+V),S);8>V?(V=y(Math.pow(S,V)),N=N.j(V).add(y(w))):(N=N.j(R),N=N.add(y(w)))}return N}var C=p(0),k=p(1),q=p(16777216);r=f.prototype,r.m=function(){if(nt(this))return-$(this).m();for(var M=0,S=1,R=0;R<this.g.length;R++){var N=this.i(R);M+=(0<=N?N:4294967296+N)*S,S*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(Z(this))return"0";if(nt(this))return"-"+$(this).toString(M);for(var S=y(Math.pow(M,6)),R=this,N="";;){var I=Rt(R,S).g;R=At(R,I.j(S));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=I,Z(R))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function Z(M){if(M.h!=0)return!1;for(var S=0;S<M.g.length;S++)if(M.g[S]!=0)return!1;return!0}function nt(M){return M.h==-1}r.l=function(M){return M=At(this,M),nt(M)?-1:Z(M)?0:1};function $(M){for(var S=M.g.length,R=[],N=0;N<S;N++)R[N]=~M.g[N];return new f(R,~M.h).add(k)}r.abs=function(){return nt(this)?$(this):this},r.add=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0,I=0;I<=S;I++){var V=N+(this.i(I)&65535)+(M.i(I)&65535),w=(V>>>16)+(this.i(I)>>>16)+(M.i(I)>>>16);N=w>>>16,V&=65535,w&=65535,R[I]=w<<16|V}return new f(R,R[R.length-1]&-2147483648?-1:0)};function At(M,S){return M.add($(S))}r.j=function(M){if(Z(this)||Z(M))return C;if(nt(this))return nt(M)?$(this).j($(M)):$($(this).j(M));if(nt(M))return $(this.j($(M)));if(0>this.l(q)&&0>M.l(q))return y(this.m()*M.m());for(var S=this.g.length+M.g.length,R=[],N=0;N<2*S;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var I=0;I<M.g.length;I++){var V=this.i(N)>>>16,w=this.i(N)&65535,te=M.i(I)>>>16,jt=M.i(I)&65535;R[2*N+2*I]+=w*jt,vt(R,2*N+2*I),R[2*N+2*I+1]+=V*jt,vt(R,2*N+2*I+1),R[2*N+2*I+1]+=w*te,vt(R,2*N+2*I+1),R[2*N+2*I+2]+=V*te,vt(R,2*N+2*I+2)}for(N=0;N<S;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=S;N<2*S;N++)R[N]=0;return new f(R,0)};function vt(M,S){for(;(M[S]&65535)!=M[S];)M[S+1]+=M[S]>>>16,M[S]&=65535,S++}function ht(M,S){this.g=M,this.h=S}function Rt(M,S){if(Z(S))throw Error("division by zero");if(Z(M))return new ht(C,C);if(nt(M))return S=Rt($(M),S),new ht($(S.g),$(S.h));if(nt(S))return S=Rt(M,$(S)),new ht($(S.g),S.h);if(30<M.g.length){if(nt(M)||nt(S))throw Error("slowDivide_ only works with positive integers.");for(var R=k,N=S;0>=N.l(M);)R=pt(R),N=pt(N);var I=It(R,1),V=It(N,1);for(N=It(N,2),R=It(R,2);!Z(N);){var w=V.add(N);0>=w.l(M)&&(I=I.add(R),V=w),N=It(N,1),R=It(R,1)}return S=At(M,I.j(S)),new ht(I,S)}for(I=C;0<=M.l(S);){for(R=Math.max(1,Math.floor(M.m()/S.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=y(R),w=V.j(S);nt(w)||0<w.l(M);)R-=N,V=y(R),w=V.j(S);Z(V)&&(V=k),I=I.add(V),M=At(M,w)}return new ht(I,M)}r.A=function(M){return Rt(this,M).h},r.and=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)&M.i(N);return new f(R,this.h&M.h)},r.or=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)|M.i(N);return new f(R,this.h|M.h)},r.xor=function(M){for(var S=Math.max(this.g.length,M.g.length),R=[],N=0;N<S;N++)R[N]=this.i(N)^M.i(N);return new f(R,this.h^M.h)};function pt(M){for(var S=M.g.length+1,R=[],N=0;N<S;N++)R[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(R,M.h)}function It(M,S){var R=S>>5;S%=32;for(var N=M.g.length-R,I=[],V=0;V<N;V++)I[V]=0<S?M.i(V+R)>>>S|M.i(V+R+1)<<32-S:M.i(V+R);return new f(I,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,CT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=A,Nr=f}).apply(typeof q_<"u"?q_:typeof self<"u"?self:typeof window<"u"?window:{});var uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DT,dl,OT,pc,Qd,NT,MT,VT;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,_){return c==Array.prototype||c==Object.prototype||(c[m]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof uc=="object"&&uc];for(var m=0;m<c.length;++m){var _=c[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,m){if(m)t:{var _=s;c=c.split(".");for(var E=0;E<c.length-1;E++){var U=c[E];if(!(U in _))break t;_=_[U]}c=c[c.length-1],E=_[c],m=m(E),m!=E&&m!=null&&t(_,c,{configurable:!0,writable:!0,value:m})}}function u(c,m){c instanceof String&&(c+="");var _=0,E=!1,U={next:function(){if(!E&&_<c.length){var j=_++;return{value:m(j,c[j]),done:!1}}return E=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}o("Array.prototype.values",function(c){return c||function(){return u(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},g=this||self;function p(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function y(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function A(c,m,_){return c.call.apply(c.bind,arguments)}function C(c,m,_){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,E),c.apply(m,U)}}return function(){return c.apply(m,arguments)}}function k(c,m,_){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:C,k.apply(null,arguments)}function q(c,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function Z(c,m){function _(){}_.prototype=m.prototype,c.aa=m.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(E,U,j){for(var W=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)W[Pt-2]=arguments[Pt];return m.prototype[U].apply(E,W)}}function nt(c){const m=c.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=c[E];return _}return[]}function $(c,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const U=c.length||0,j=E.length||0;c.length=U+j;for(let W=0;W<j;W++)c[U+W]=E[W]}else c.push(E)}}class At{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function vt(c){return/^[\s\xa0]*$/.test(c)}function ht(){var c=g.navigator;return c&&(c=c.userAgent)?c:""}function Rt(c){return Rt[" "](c),c}Rt[" "]=function(){};var pt=ht().indexOf("Gecko")!=-1&&!(ht().toLowerCase().indexOf("webkit")!=-1&&ht().indexOf("Edge")==-1)&&!(ht().indexOf("Trident")!=-1||ht().indexOf("MSIE")!=-1)&&ht().indexOf("Edge")==-1;function It(c,m,_){for(const E in c)m.call(_,c[E],E,c)}function M(c,m){for(const _ in c)m.call(void 0,c[_],_,c)}function S(c){const m={};for(const _ in c)m[_]=c[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let _,E;for(let U=1;U<arguments.length;U++){E=arguments[U];for(_ in E)c[_]=E[_];for(let j=0;j<R.length;j++)_=R[j],Object.prototype.hasOwnProperty.call(E,_)&&(c[_]=E[_])}}function I(c){var m=1;c=c.split(":");const _=[];for(;0<m&&c.length;)_.push(c.shift()),m--;return c.length&&_.push(c.join(":")),_}function V(c){g.setTimeout(()=>{throw c},0)}function w(){var c=zt;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class te{constructor(){this.h=this.g=null}add(m,_){const E=jt.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var jt=new At(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ot=!1,zt=new te,D=()=>{const c=g.Promise.resolve(void 0);tt=()=>{c.then(Y)}};var Y=()=>{for(var c;c=w();){try{c.h.call(c.g)}catch(_){V(_)}var m=jt;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ot=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var ut=function(){if(!g.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};g.addEventListener("test",_,m),g.removeEventListener("test",_,m)}catch{}return c}();function Ct(c,m){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(pt){t:{try{Rt(m.nodeName);var U=!0;break t}catch{}U=!1}U||(m=null)}}else _=="mouseover"?m=c.fromElement:_=="mouseout"&&(m=c.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:_t[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ct.aa.h.call(this)}}Z(Ct,J);var _t={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),Jt=0;function Fn(c,m,_,E,U){this.listener=c,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=U,this.key=++Jt,this.da=this.fa=!1}function Xi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function pi(c){this.src=c,this.g={},this.h=0}pi.prototype.add=function(c,m,_,E,U){var j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);var W=Gr(c,m,E,U);return-1<W?(m=c[W],_||(m.fa=!1)):(m=new Fn(m,this.src,j,!!E,U),m.fa=_,c.push(m)),m};function Hr(c,m){var _=m.type;if(_ in c.g){var E=c.g[_],U=Array.prototype.indexOf.call(E,m,void 0),j;(j=0<=U)&&Array.prototype.splice.call(E,U,1),j&&(Xi(m),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Gr(c,m,_,E){for(var U=0;U<c.length;++U){var j=c[U];if(!j.da&&j.listener==m&&j.capture==!!_&&j.ha==E)return U}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),no={};function zl(c,m,_,E,U){if(Array.isArray(m)){for(var j=0;j<m.length;j++)zl(c,m[j],_,E,U);return null}return _=Bl(_),c&&c[Re]?c.K(m,_,y(E)?!!E.capture:!1,U):_n(c,m,_,!1,E,U)}function _n(c,m,_,E,U,j){if(!m)throw Error("Invalid event type");var W=y(U)?!!U.capture:!!U,Pt=qs(c);if(Pt||(c[Fr]=Pt=new pi(c)),_=Pt.add(m,_,E,W,j),_.proxy)return _;if(E=vh(),_.proxy=E,E.src=c,E.listener=_,c.addEventListener)ut||(U=W),U===void 0&&(U=!1),c.addEventListener(m.toString(),E,U);else if(c.attachEvent)c.attachEvent(Kr(m.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function vh(){function c(_){return m.call(c.src,c.listener,_)}const m=Th;return c}function io(c,m,_,E,U){if(Array.isArray(m))for(var j=0;j<m.length;j++)io(c,m[j],_,E,U);else E=y(E)?!!E.capture:!!E,_=Bl(_),c&&c[Re]?(c=c.i,m=String(m).toString(),m in c.g&&(j=c.g[m],_=Gr(j,_,E,U),-1<_&&(Xi(j[_]),Array.prototype.splice.call(j,_,1),j.length==0&&(delete c.g[m],c.h--)))):c&&(c=qs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Gr(m,_,E,U)),(_=-1<c?m[c]:null)&&js(_))}function js(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Re])Hr(m.i,c);else{var _=c.type,E=c.proxy;m.removeEventListener?m.removeEventListener(_,E,c.capture):m.detachEvent?m.detachEvent(Kr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=qs(m))?(Hr(_,c),_.h==0&&(_.src=null,m[Fr]=null)):Xi(c)}}}function Kr(c){return c in no?no[c]:no[c]="on"+c}function Th(c,m){if(c.da)c=!0;else{m=new Ct(m,this);var _=c.listener,E=c.ha||c.src;c.fa&&js(c),c=_.call(E,m)}return c}function qs(c){return c=c[Fr],c instanceof pi?c:null}var ro="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bl(c){return typeof c=="function"?c:(c[ro]||(c[ro]=function(m){return c.handleEvent(m)}),c[ro])}function ae(){et.call(this),this.i=new pi(this),this.M=this,this.F=null}Z(ae,et),ae.prototype[Re]=!0,ae.prototype.removeEventListener=function(c,m,_,E){io(this,c,m,_,E)};function Gt(c,m){var _,E=c.F;if(E)for(_=[];E;E=E.F)_.push(E);if(c=c.M,E=m.type||m,typeof m=="string")m=new J(m,c);else if(m instanceof J)m.target=m.target||c;else{var U=m;m=new J(E,c),N(m,U)}if(U=!0,_)for(var j=_.length-1;0<=j;j--){var W=m.g=_[j];U=on(W,E,!0,m)&&U}if(W=m.g=c,U=on(W,E,!0,m)&&U,U=on(W,E,!1,m)&&U,_)for(j=0;j<_.length;j++)W=m.g=_[j],U=on(W,E,!1,m)&&U}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var _=c.g[m],E=0;E<_.length;E++)Xi(_[E]);delete c.g[m],c.h--}}this.F=null},ae.prototype.K=function(c,m,_,E){return this.i.add(String(c),m,!1,_,E)},ae.prototype.L=function(c,m,_,E){return this.i.add(String(c),m,!0,_,E)};function on(c,m,_,E){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var U=!0,j=0;j<m.length;++j){var W=m[j];if(W&&!W.da&&W.capture==_){var Pt=W.listener,ve=W.ha||W.src;W.fa&&Hr(c.i,W),U=Pt.call(ve,E)!==!1&&U}}return U&&!E.defaultPrevented}function qe(c,m,_){if(typeof c=="function")_&&(c=k(c,_));else if(c&&typeof c.handleEvent=="function")c=k(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:g.setTimeout(c,m||0)}function jl(c){c.g=qe(()=>{c.g=null,c.i&&(c.i=!1,jl(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Eh extends et{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:jl(this)}N(){super.N(),this.g&&(g.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(c){et.call(this),this.h=c,this.g={}}Z(Qr,et);var Yr=[];function Xr(c){It(c.g,function(m,_){this.g.hasOwnProperty(_)&&js(m)},c),c.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),Xr(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vn=g.JSON.stringify,Hs=g.JSON.parse,$r=class{stringify(c){return g.JSON.stringify(c,void 0)}parse(c){return g.JSON.parse(c,void 0)}};function so(){}so.prototype.h=null;function ao(c){return c.h||(c.h=c.i())}function oo(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){J.call(this,"d")}Z(_i,J);function lo(){J.call(this,"c")}Z(lo,J);var Kn={},uo=null;function $i(){return uo=uo||new ae}Kn.La="serverreachability";function Gs(c){J.call(this,Kn.La,c)}Z(Gs,J);function Zi(c){const m=$i();Gt(m,new Gs(m))}Kn.STAT_EVENT="statevent";function ql(c,m){J.call(this,Kn.STAT_EVENT,c),this.stat=m}Z(ql,J);function ee(c){const m=$i();Gt(m,new ql(m,c))}Kn.Ma="timingevent";function _e(c,m){J.call(this,Kn.Ma,c),this.size=m}Z(_e,J);function de(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return g.setTimeout(function(){c()},m)}function vn(){this.g=!0}vn.prototype.xa=function(){this.g=!1};function co(c,m,_,E,U,j){c.info(function(){if(c.g)if(j)for(var W="",Pt=j.split("&"),ve=0;ve<Pt.length;ve++){var kt=Pt[ve].split("=");if(1<kt.length){var Ce=kt[0];kt=kt[1];var Te=Ce.split("_");W=2<=Te.length&&Te[1]=="type"?W+(Ce+"="+kt+"&"):W+(Ce+"=redacted&")}}else W=null;else W=j;return"XMLHTTP REQ ("+E+") [attempt "+U+"]: "+m+`
`+_+`
`+W})}function Ah(c,m,_,E,U,j,W){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+U+"]: "+m+`
`+_+`
`+j+" "+W})}function Ji(c,m,_,E){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zr(c,_)+(E?" "+E:"")})}function Hl(c,m){c.info(function(){return"TIMEOUT: "+m})}vn.prototype.info=function(){};function Zr(c,m){if(!c.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var E=_[c];if(!(2>E.length)){var U=E[1];if(Array.isArray(U)&&!(1>U.length)){var j=U[0];if(j!="noop"&&j!="stop"&&j!="close")for(var W=1;W<U.length;W++)U[W]=""}}}}return Vn(_)}catch{return m}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qn;function Yn(){}Z(Yn,so),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},Qn=new Yn;function Xe(c,m,_,E){this.j=c,this.i=m,this.l=_,this.R=E||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var ho={},Fs={};function Pn(c,m,_){c.L=1,c.v=ns(ln(m)),c.m=_,c.P=!0,Ti(c,null)}function Ti(c,m){c.F=Date.now(),Jr(c),c.A=ln(c.v);var _=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),_o(_.i,"t",E),c.C=0,_=c.j.J,c.h=new ue,c.g=su(c.j,_?m:null,!c.m),0<c.O&&(c.M=new Eh(k(c.Y,c,c.g),c.O)),m=c.U,_=c.g,E=c.ca;var U="readystatechange";Array.isArray(U)||(U&&(Yr[0]=U.toString()),U=Yr);for(var j=0;j<U.length;j++){var W=zl(_,U[j],E||m.handleEvent,!1,m.h||m);if(!W)break;m.g[W.key]=W}m=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),Zi(),co(c.i,c.u,c.A,c.l,c.R,c.m)}Xe.prototype.ca=function(c){c=c.target;const m=this.M;m&&Sn(c)==3?m.j():this.Y(c)},Xe.prototype.Y=function(c){try{if(c==this.g)t:{const Te=Sn(this.g);var m=this.g.Ba();const Ci=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Zl(this.g)))){this.J||Te!=4||m==7||(m==8||0>=Ci?Zi(3):Zi(2)),tr(this);var _=this.g.Z();this.X=_;e:if(Gl(this)){var E=Zl(this.g);c="";var U=E.length,j=Sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),Xn(this);var W="";break e}this.h.i=new g.TextDecoder}for(m=0;m<U;m++)this.h.h=!0,c+=this.h.i.decode(E[m],{stream:!(j&&m==U-1)});E.length=0,this.h.g+=c,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=_==200,Ah(this.i,this.u,this.A,this.l,this.R,Te,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Pt,ve=this.g;if((Pt=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vt(Pt)){var kt=Pt;break e}}kt=null}if(_=kt)Ji(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wr(this,_);else{this.o=!1,this.s=3,ee(12),Pe(this),Xn(this);break t}}if(this.P){_=!0;let ke;for(;!this.J&&this.C<W.length;)if(ke=Fl(this,W),ke==Fs){Te==4&&(this.s=4,ee(14),_=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==ho){this.s=4,ee(15),Ji(this.i,this.l,W,"[Invalid Chunk]"),_=!1;break}else Ji(this.i,this.l,ke,null),Wr(this,ke);if(Gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||W.length!=0||this.h.h||(this.s=1,ee(16),_=!1),this.o=this.o&&_,!_)Ji(this.i,this.l,W,"[Invalid Chunked Response]"),Pe(this),Xn(this);else if(0<W.length&&!this.W){this.W=!0;var Ce=this.j;Ce.g==this&&Ce.ba&&!Ce.M&&(Ce.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),cs(Ce),Ce.M=!0,ee(11))}}else Ji(this.i,this.l,W,null),Wr(this,W);Te==4&&Pe(this),this.o&&!this.J&&(Te==4?nu(this.j,this):(this.o=!1,Jr(this)))}else Ih(this.g),_==400&&0<W.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Pe(this),Xn(this)}}}catch{}finally{}};function Gl(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Fl(c,m){var _=c.C,E=m.indexOf(`
`,_);return E==-1?Fs:(_=Number(m.substring(_,E)),isNaN(_)?ho:(E+=1,E+_>m.length?Fs:(m=m.slice(E,E+_),c.C=E+_,m)))}Xe.prototype.cancel=function(){this.J=!0,Pe(this)};function Jr(c){c.S=Date.now()+c.I,Kl(c,c.I)}function Kl(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=de(k(c.ba,c),m)}function tr(c){c.B&&(g.clearTimeout(c.B),c.B=null)}Xe.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Hl(this.i,this.A),this.L!=2&&(Zi(),ee(17)),Pe(this),this.s=2,Xn(this)):Kl(this,this.S-c)};function Xn(c){c.j.G==0||c.J||nu(c.j,c)}function Pe(c){tr(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Xr(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Wr(c,m){try{var _=c.j;if(_.G!=0&&(_.g==c||fo(_.h,c))){if(!c.K&&fo(_.h,c)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var U=E;if(U[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ia(_),ea(_);else break t;So(_),ee(18)}}else _.za=U[1],0<_.za-_.T&&37500>U[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(k(_.Za,_),6e3));if(1>=Qs(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ii(_,11)}else if((c.K||_.g==c)&&ia(_),!vt(m))for(U=_.Da.g.parse(m),m=0;m<U.length;m++){let kt=U[m];if(_.T=kt[0],kt=kt[1],_.G==2)if(kt[0]=="c"){_.K=kt[1],_.ia=kt[2];const Ce=kt[3];Ce!=null&&(_.la=Ce,_.j.info("VER="+_.la));const Te=kt[4];Te!=null&&(_.Aa=Te,_.j.info("SVER="+_.Aa));const Ci=kt[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(E=1.5*Ci,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const ke=c.g;if(ke){const ni=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var j=E.h;j.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ys(j,j.h),j.h=null))}if(E.D){const wo=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(E.ya=wo,Qt(E.I,E.D,wo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var W=c;if(E.qa=ru(E,E.J?E.ia:null,E.W),W.K){$e(E.h,W);var Pt=W,ve=E.L;ve&&(Pt.I=ve),Pt.B&&(tr(Pt),Jr(Pt)),E.g=W}else tu(E);0<_.i.length&&na(_)}else kt[0]!="stop"&&kt[0]!="close"||Ii(_,7);else _.G==3&&(kt[0]=="stop"||kt[0]=="close"?kt[0]=="stop"?Ii(_,7):Eo(_):kt[0]!="noop"&&_.l&&_.l.ta(kt),_.v=0)}}Zi(4)}catch{}}var Ql=class{constructor(c,m){this.g=c,this.map=m}};function Ei(c){this.l=c||10,g.PerformanceNavigationTiming?(c=g.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(g.chrome&&g.chrome.loadTimes&&g.chrome.loadTimes()&&g.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ks(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Qs(c){return c.h?1:c.g?c.g.size:0}function fo(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ys(c,m){c.g?c.g.add(m):c.h=m}function $e(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Ei.prototype.cancel=function(){if(this.i=mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function mo(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const _ of c.g.values())m=m.concat(_.D);return m}return nt(c.i)}function Sh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var m=[],_=c.length,E=0;E<_;E++)m.push(c[E]);return m}m=[],_=0;for(E in c)m[_++]=c[E];return m}function Xs(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var m=[];c=c.length;for(var _=0;_<c;_++)m.push(_);return m}m=[],_=0;for(const E in c)m[_++]=E;return m}}}function go(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var _=Xs(c),E=Sh(c),U=E.length,j=0;j<U;j++)m.call(void 0,E[j],_&&_[j],c)}var ts=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bh(c,m){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var E=c[_].indexOf("="),U=null;if(0<=E){var j=c[_].substring(0,E);U=c[_].substring(E+1)}else j=c[_];m(j,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function me(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof me){this.h=c.h,es(this,c.j),this.o=c.o,this.g=c.g,er(this,c.s),this.l=c.l;var m=c.i,_=new Si;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Ai(this,_),this.m=c.m}else c&&(m=String(c).match(ts))?(this.h=!1,es(this,m[1]||"",!0),this.o=Tn(m[2]||""),this.g=Tn(m[3]||"",!0),er(this,m[4]),this.l=Tn(m[5]||"",!0),Ai(this,m[6]||"",!0),this.m=Tn(m[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}me.prototype.toString=function(){var c=[],m=this.j;m&&c.push(is(m,po,!0),":");var _=this.g;return(_||m=="file")&&(c.push("//"),(m=this.o)&&c.push(is(m,po,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(is(_,_.charAt(0)=="/"?wh:yo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",is(_,$s)),c.join("")};function ln(c){return new me(c)}function es(c,m,_){c.j=_?Tn(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function er(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function Ai(c,m,_){m instanceof Si?(c.i=m,Xl(c.i,c.h)):(_||(m=is(m,Rh)),c.i=new Si(m,c.h))}function Qt(c,m,_){c.i.set(m,_)}function ns(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function is(c,m,_){return typeof c=="string"?(c=encodeURI(c).replace(m,Yl),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Yl(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var po=/[#\/\?@]/g,yo=/[#\?:]/g,wh=/[#\?]/g,Rh=/[#\?@]/g,$s=/#/g;function Si(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function En(c){c.g||(c.g=new Map,c.h=0,c.i&&bh(c.i,function(m,_){c.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=Si.prototype,r.add=function(c,m){En(this),this.i=null,c=$n(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(m),this.h+=1,this};function bi(c,m){En(c),m=$n(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function wi(c,m){return En(c),m=$n(c,m),c.g.has(m)}r.forEach=function(c,m){En(this),this.g.forEach(function(_,E){_.forEach(function(U){c.call(m,U,E,this)},this)},this)},r.na=function(){En(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const U=c[E];for(let j=0;j<U.length;j++)_.push(m[E])}return _},r.V=function(c){En(this);let m=[];if(typeof c=="string")wi(this,c)&&(m=m.concat(this.g.get($n(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)m=m.concat(c[_])}return m},r.set=function(c,m){return En(this),this.i=null,c=$n(this,c),wi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function _o(c,m,_){bi(c,m),0<_.length&&(c.i=null,c.g.set($n(c,m),nt(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const j=encodeURIComponent(String(E)),W=this.V(E);for(E=0;E<W.length;E++){var U=j;W[E]!==""&&(U+="="+encodeURIComponent(String(W[E]))),c.push(U)}}return this.i=c.join("&")};function $n(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function Xl(c,m){m&&!c.j&&(En(c),c.i=null,c.g.forEach(function(_,E){var U=E.toLowerCase();E!=U&&(bi(this,E),_o(this,U,_))},c)),c.j=m}function rs(c,m){const _=new vn;if(g.Image){const E=new Image;E.onload=q(An,_,"TestLoadImage: loaded",!0,m,E),E.onerror=q(An,_,"TestLoadImage: error",!1,m,E),E.onabort=q(An,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=q(An,_,"TestLoadImage: timeout",!1,m,E),g.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else m(!1)}function kn(c,m){const _=new vn,E=new AbortController,U=setTimeout(()=>{E.abort(),An(_,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:E.signal}).then(j=>{clearTimeout(U),j.ok?An(_,"TestPingServer: ok",!0,m):An(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(U),An(_,"TestPingServer: error",!1,m)})}function An(c,m,_,E,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),E(_)}catch{}}function ss(){this.g=new $r}function Zn(c,m,_){const E=_||"";try{go(c,function(U,j){let W=U;y(U)&&(W=Vn(U)),m.push(E+j+"="+encodeURIComponent(W))})}catch(U){throw m.push(E+"type="+encodeURIComponent("_badmap")),U}}function nr(c){this.l=c.Ub||null,this.j=c.eb||!1}Z(nr,so),nr.prototype.g=function(){return new Ri(this.l,this.j)},nr.prototype.i=function(c){return function(){return c}}({});function Ri(c,m){ae.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}Z(Ri,ae),r=Ri.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,Wn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||g).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof g.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vo(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function vo(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Jn(this):Wn(this),this.readyState==3&&vo(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Jn(this))},r.Qa=function(c){this.g&&(this.response=c,Jn(this))},r.ga=function(){this.g&&Jn(this)};function Jn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Wn(c)}r.setRequestHeader=function(c,m){this.u.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=m.next();return c.join(`\r
`)};function Wn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function To(c){let m="";return It(c,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function Ie(c,m,_){t:{for(E in _){var E=!1;break t}E=!0}E||(_=To(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,m,_))}function qt(c){ae.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}Z(qt,ae);var Zs=/^https?$/i,as=["POST","PUT"];r=qt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qn.g(),this.v=this.o?ao(this.o):ao(Qn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(j){$l(this,j);return}if(c=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var U in E)_.set(U,E[U]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const j of E.keys())_.set(j,E.get(j));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(j=>j.toLowerCase()=="content-type"),U=g.FormData&&c instanceof g.FormData,!(0<=Array.prototype.indexOf.call(as,m,void 0))||E||U||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,W]of _)this.g.setRequestHeader(j,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{os(this),this.u=!0,this.g.send(c),this.u=!1}catch(j){$l(this,j)}};function $l(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Js(c),ti(c)}function Js(c){c.A||(c.A=!0,Gt(c,"complete"),Gt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Gt(this,"complete"),Gt(this,"abort"),ti(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ti(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ws(this):this.bb())},r.bb=function(){Ws(this)};function Ws(c){if(c.h&&typeof f<"u"&&(!c.v[1]||Sn(c)!=4||c.Z()!=2)){if(c.u&&Sn(c)==4)qe(c.Ea,0,c);else if(Gt(c,"readystatechange"),Sn(c)==4){c.h=!1;try{const W=c.Z();t:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var _;if(!(_=m)){var E;if(E=W===0){var U=String(c.D).match(ts)[1]||null;!U&&g.self&&g.self.location&&(U=g.self.location.protocol.slice(0,-1)),E=!Zs.test(U?U.toLowerCase():"")}_=E}if(_)Gt(c,"complete"),Gt(c,"success");else{c.m=6;try{var j=2<Sn(c)?c.g.statusText:""}catch{j=""}c.l=j+" ["+c.Z()+"]",Js(c)}}finally{ti(c)}}}}function ti(c,m){if(c.g){os(c);const _=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Gt(c,"ready");try{_.onreadystatechange=E}catch{}}}function os(c){c.I&&(g.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function Sn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<Sn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Hs(m)}};function Zl(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ih(c){const m={};c=(c.g&&2<=Sn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(vt(c[E]))continue;var _=I(c[E]);const U=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const j=m[U]||[];m[U]=j,j.push(_)}M(m,function(E){return E.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(c,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||m}function ta(c){this.Aa=0,this.i=[],this.j=new vn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,c),this.cb=ls("retryDelaySeedMs",1e4,c),this.Wa=ls("forwardChannelMaxRetries",2,c),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(c&&c.concurrentRequestLimit),this.Da=new ss,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ta.prototype,r.la=8,r.G=1,r.connect=function(c,m,_,E){ee(0),this.W=c,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=ru(this,null,this.W),na(this)};function Eo(c){if(Jl(c),c.G==3){var m=c.U++,_=ln(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",m),Qt(_,"TYPE","terminate"),us(c,_),m=new Xe(c,c.j,m),m.L=2,m.v=ns(ln(_)),_=!1,g.navigator&&g.navigator.sendBeacon)try{_=g.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&g.Image&&(new Image().src=m.v,_=!0),_||(m.g=su(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Jr(m)}iu(c)}function ea(c){c.g&&(cs(c),c.g.cancel(),c.g=null)}function Jl(c){ea(c),c.u&&(g.clearTimeout(c.u),c.u=null),ia(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&g.clearTimeout(c.s),c.s=null)}function na(c){if(!Ks(c.h)&&!c.s){c.s=!0;var m=c.Ga;tt||D(),ot||(tt(),ot=!0),zt.add(m,c),c.B=0}}function Ch(c,m){return Qs(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=de(k(c.Ga,c,m),bo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const U=new Xe(this,this.j,c);let j=this.o;if(this.S&&(j?(j=S(j),N(j,this.S)):j=this.S),this.m!==null||this.O||(U.H=j,j=null),this.P)t:{for(var m=0,_=0;_<this.i.length;_++){e:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break e}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break t}if(m===4096||_===this.i.length-1){m=_+1;break t}}m=1e3}else m=1e3;m=Wl(this,U,m),_=ln(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),us(this,_),j&&(this.O?m="headers="+encodeURIComponent(String(To(j)))+"&"+m:this.m&&Ie(_,this.m,j)),Ys(this.h,U),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",m),Qt(_,"SID","null"),U.T=!0,Pn(U,_,null)):Pn(U,_,m),this.G=2}}else this.G==3&&(c?Ao(this,c):this.i.length==0||Ks(this.h)||Ao(this))};function Ao(c,m){var _;m?_=m.l:_=c.U++;const E=ln(c.I);Qt(E,"SID",c.K),Qt(E,"RID",_),Qt(E,"AID",c.T),us(c,E),c.m&&c.o&&Ie(E,c.m,c.o),_=new Xe(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Wl(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ys(c.h,_),Pn(_,E,m)}function us(c,m){c.H&&It(c.H,function(_,E){Qt(m,E,_)}),c.l&&go({},function(_,E){Qt(m,E,_)})}function Wl(c,m,_){_=Math.min(c.i.length,_);var E=c.l?k(c.l.Na,c.l,c):null;t:{var U=c.i;let j=-1;for(;;){const W=["count="+_];j==-1?0<_?(j=U[0].g,W.push("ofs="+j)):j=0:W.push("ofs="+j);let Pt=!0;for(let ve=0;ve<_;ve++){let kt=U[ve].g;const Ce=U[ve].map;if(kt-=j,0>kt)j=Math.max(0,U[ve].g-100),Pt=!1;else try{Zn(Ce,W,"req"+kt+"_")}catch{E&&E(Ce)}}if(Pt){E=W.join("&");break t}}}return c=c.i.splice(0,_),m.D=c,E}function tu(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;tt||D(),ot||(tt(),ot=!0),zt.add(m,c),c.v=0}}function So(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=de(k(c.Fa,c),bo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=de(k(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ea(this),eu(this))};function cs(c){c.A!=null&&(g.clearTimeout(c.A),c.A=null)}function eu(c){c.g=new Xe(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=ln(c.qa);Qt(m,"RID","rpc"),Qt(m,"SID",c.K),Qt(m,"AID",c.T),Qt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(m,"TO",c.ja),Qt(m,"TYPE","xmlhttp"),us(c,m),c.m&&c.o&&Ie(m,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=ns(ln(m)),_.m=null,_.P=!0,Ti(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ea(this),So(this),ee(19))};function ia(c){c.C!=null&&(g.clearTimeout(c.C),c.C=null)}function nu(c,m){var _=null;if(c.g==m){ia(c),cs(c),c.g=null;var E=2}else if(fo(c.h,m))_=m.D,$e(c.h,m),E=1;else return;if(c.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var U=c.B;E=$i(),Gt(E,new _e(E,_)),na(c)}else tu(c);else if(U=m.s,U==3||U==0&&0<m.X||!(E==1&&Ch(c,m)||E==2&&So(c)))switch(_&&0<_.length&&(m=c.h,m.i=m.i.concat(_)),U){case 1:Ii(c,5);break;case 4:Ii(c,10);break;case 3:Ii(c,6);break;default:Ii(c,2)}}}function bo(c,m){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*m}function Ii(c,m){if(c.j.info("Error code "+m),m==2){var _=k(c.fb,c),E=c.Xa;const U=!E;E=new me(E||"//www.google.com/images/cleardot.gif"),g.location&&g.location.protocol=="http"||es(E,"https"),ns(E),U?rs(E.toString(),_):kn(E.toString(),_)}else ee(2);c.G=0,c.l&&c.l.sa(m),iu(c),Jl(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function iu(c){if(c.G=0,c.ka=[],c.l){const m=mo(c.h);(m.length!=0||c.i.length!=0)&&($(c.ka,m),$(c.ka,c.i),c.h.i.length=0,nt(c.i),c.i.length=0),c.l.ra()}}function ru(c,m,_){var E=_ instanceof me?ln(_):new me(_);if(E.g!="")m&&(E.g=m+"."+E.g),er(E,E.s);else{var U=g.location;E=U.protocol,m=m?m+"."+U.hostname:U.hostname,U=+U.port;var j=new me(null);E&&es(j,E),m&&(j.g=m),U&&er(j,U),_&&(j.l=_),E=j}return _=c.D,m=c.ya,_&&m&&Qt(E,_,m),Qt(E,"VER",c.la),us(c,E),E}function su(c,m,_){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new qt(new nr({eb:_})):new qt(c.pa),m.Ha(c.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function au(){}r=au.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ra(){}ra.prototype.g=function(c,m){return new Ze(c,m)};function Ze(c,m){ae.call(this),this.g=new ta(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!vt(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!vt(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ei(this)}Z(Ze,ae),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Eo(this.g)},Ze.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Vn(c),c=_);m.i.push(new Ql(m.Ya++,c)),m.G==3&&na(m)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Eo(this.g),delete this.g,Ze.aa.N.call(this)};function ou(c){_i.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const _ in m){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}Z(ou,_i);function lu(){lo.call(this),this.status=1}Z(lu,lo);function ei(c){this.g=c}Z(ei,au),ei.prototype.ua=function(){Gt(this.g,"a")},ei.prototype.ta=function(c){Gt(this.g,new ou(c))},ei.prototype.sa=function(c){Gt(this.g,new lu)},ei.prototype.ra=function(){Gt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,VT=function(){return new ra},MT=function(){return $i()},NT=Kn,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,pc=Wi,vi.COMPLETE="complete",OT=vi,oo.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,dl=oo,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,DT=qt}).apply(typeof uc<"u"?uc:typeof self<"u"?self:typeof window<"u"?window:{});const H_="@firebase/firestore",G_="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new $c("@firebase/firestore");function Pa(){return Ns.logLevel}function it(r,...t){if(Ns.logLevel<=Mt.DEBUG){const n=t.map(ym);Ns.debug(`Firestore (${Za}): ${r}`,...n)}}function Ki(r,...t){if(Ns.logLevel<=Mt.ERROR){const n=t.map(ym);Ns.error(`Firestore (${Za}): ${r}`,...n)}}function qa(r,...t){if(Ns.logLevel<=Mt.WARN){const n=t.map(ym);Ns.warn(`Firestore (${Za}): ${r}`,...n)}}function ym(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,PT(r,s,n)}function PT(r,t,n){let s=`FIRESTORE (${Za}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Ki(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||PT(t,o,s)}function Et(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends Gn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class _w{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vw{constructor(t){this.t=t,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Mr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},g=p=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>g(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?g(p):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Mr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new kT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Ke(t)}}class Tw{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ew{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new Tw(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Aw{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new F_(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new F_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Sw(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function wt(r,t){return r<t?-1:r>t?1:0}function Yd(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return wt(s,o);{const u=UT(),f=bw(u.encode(K_(r,n)),u.encode(K_(t,n)));return f!==0?f:wt(s,o)}}n+=s>65535?2:1}return wt(r.length,t.length)}function K_(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function bw(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return wt(r[n],t[n]);return wt(r.length,t.length)}function Ha(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=-62135596800,Y_=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Y_);return new be(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new lt(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Q_)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Y_}_compareTo(t){return this.seconds===t.seconds?wt(this.nanoseconds,t.nanoseconds):wt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Q_;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{static fromTimestamp(t){return new Tt(t)}static min(){return new Tt(new be(0,0))}static max(){return new Tt(new be(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="__name__";class li{constructor(t,n,s){n===void 0?n=0:n>t.length&&mt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&mt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return li.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof li?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=li.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return wt(t.length,n.length)}static compareSegments(t,n){const s=li.isNumericId(t),o=li.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?li.extractNumericId(t).compare(li.extractNumericId(n)):Yd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Nr.fromString(t.substring(4,t.length-2))}}class ie extends li{construct(t,n,s){return new ie(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new lt(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends li{construct(t,n,s){return new Be(t,n,s)}static isValidIdentifier(t){return ww.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===X_}static keyField(){return new Be([X_])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new lt(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const g=t[o];if(g==="\\"){if(o+1===t.length)throw new lt(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new lt(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else g==="`"?(f=!f,o++):g!=="."||f?(s+=g,o++):(u(),o++)}if(u(),f)throw new lt(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(ie.fromString(t))}static fromName(t){return new ct(ie.fromString(t).popFirst(5))}static empty(){return new ct(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ie.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ie.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new ie(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=-1;function Rw(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Tt.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new kr(o,ct.empty(),t)}function Iw(r){return new kr(r.readTime,r.key,Sl)}class kr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new kr(Tt.min(),ct.empty(),Sl)}static max(){return new kr(Tt.max(),ct.empty(),Sl)}}function Cw(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(r.documentKey,t.documentKey),n!==0?n:wt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ow{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==Dw)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&mt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Q((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Q?n:Q.resolve(n)}catch(n){return Q.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Q.reject(n)}static resolve(t){return new Q((n,s)=>{n(t)})}static reject(t){return new Q((n,s)=>{s(t)})}static waitFor(t){return new Q((n,s)=>{let o=0,u=0,f=!1;t.forEach(g=>{++o,g.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=Q.resolve(!1);for(const s of t)n=n.next(o=>o?Q.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Q((s,o)=>{const u=t.length,f=new Array(u);let g=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(A=>{f[y]=A,++g,g===u&&s(f)},A=>o(A))}})}static doWhile(t,n){return new Q((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function Nw(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Wa(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Zc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=-1;function Jc(r){return r==null}function Dc(r){return r===0&&1/r==-1/0}function Mw(r){return typeof r=="number"&&Number.isInteger(r)&&!Dc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT="";function Vw(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=$_(t)),t=Pw(r.get(n),t);return $_(t)}function Pw(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case LT:n+="";break;default:n+=u}}return n}function $_(r){return r+LT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function jr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function zT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n){this.comparator=t,this.root=n||ze.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ze.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cc(this.root,t,this.comparator,!1)}getReverseIterator(){return new cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cc(this.root,t,this.comparator,!0)}}class cc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ze{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??ze.RED,this.left=o??ze.EMPTY,this.right=u??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new ze(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return ze.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw mt(27949);return t+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw mt(57766)}get value(){throw mt(16141)}get color(){throw mt(16727)}get left(){throw mt(29726)}get right(){throw mt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new ze(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new J_(this.data.getIterator())}getIteratorFrom(t){return new J_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new we(this.comparator);return n.data=t,n}}class J_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new pn([])}unionWith(t){let n=new we(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new pn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ha(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new BT("Invalid base64 string: "+u):u}}(t);return new je(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new je(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}je.EMPTY_BYTE_STRING=new je("");const kw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=kw.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function xr(r){return typeof r=="string"?je.fromBase64String(r):je.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="server_timestamp",qT="__type__",HT="__previous_value__",GT="__local_write_time__";function vm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[qT])===null||n===void 0?void 0:n.stringValue)===jT}function Wc(r){const t=r.mapValue.fields[HT];return vm(t)?Wc(t):t}function bl(r){const t=Ur(r.mapValue.fields[GT].timestampValue);return new be(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n,s,o,u,f,g,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=p,this.useFetchStreams=y}}const Oc="(default)";class wl{constructor(t,n){this.projectId=t,this.database=n||Oc}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database===Oc}isEqual(t){return t instanceof wl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="__type__",xw="__max__",hc={mapValue:{}},KT="__vector__",Nc="value";function Lr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?vm(r)?4:zw(r)?9007199254740991:Lw(r)?10:11:mt(28295,{value:r})}function di(r,t){if(r===t)return!0;const n=Lr(r);if(n!==Lr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return bl(r).isEqual(bl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=Ur(o.timestampValue),g=Ur(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return xr(o.bytesValue).isEqual(xr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return fe(o.geoPointValue.latitude)===fe(u.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return fe(o.integerValue)===fe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=fe(o.doubleValue),g=fe(u.doubleValue);return f===g?Dc(f)===Dc(g):isNaN(f)&&isNaN(g)}return!1}(r,t);case 9:return Ha(r.arrayValue.values||[],t.arrayValue.values||[],di);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},g=u.mapValue.fields||{};if(Z_(f)!==Z_(g))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(g[p]===void 0||!di(f[p],g[p])))return!1;return!0}(r,t);default:return mt(52216,{left:r})}}function Rl(r,t){return(r.values||[]).find(n=>di(n,t))!==void 0}function Ga(r,t){if(r===t)return 0;const n=Lr(r),s=Lr(t);if(n!==s)return wt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return wt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const g=fe(u.integerValue||u.doubleValue),p=fe(f.integerValue||f.doubleValue);return g<p?-1:g>p?1:g===p?0:isNaN(g)?isNaN(p)?0:-1:1}(r,t);case 3:return W_(r.timestampValue,t.timestampValue);case 4:return W_(bl(r),bl(t));case 5:return Yd(r.stringValue,t.stringValue);case 6:return function(u,f){const g=xr(u),p=xr(f);return g.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const g=u.split("/"),p=f.split("/");for(let y=0;y<g.length&&y<p.length;y++){const A=wt(g[y],p[y]);if(A!==0)return A}return wt(g.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const g=wt(fe(u.latitude),fe(f.latitude));return g!==0?g:wt(fe(u.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return tv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var g,p,y,A;const C=u.fields||{},k=f.fields||{},q=(g=C[Nc])===null||g===void 0?void 0:g.arrayValue,Z=(p=k[Nc])===null||p===void 0?void 0:p.arrayValue,nt=wt(((y=q==null?void 0:q.values)===null||y===void 0?void 0:y.length)||0,((A=Z==null?void 0:Z.values)===null||A===void 0?void 0:A.length)||0);return nt!==0?nt:tv(q,Z)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===hc.mapValue&&f===hc.mapValue)return 0;if(u===hc.mapValue)return 1;if(f===hc.mapValue)return-1;const g=u.fields||{},p=Object.keys(g),y=f.fields||{},A=Object.keys(y);p.sort(),A.sort();for(let C=0;C<p.length&&C<A.length;++C){const k=Yd(p[C],A[C]);if(k!==0)return k;const q=Ga(g[p[C]],y[A[C]]);if(q!==0)return q}return wt(p.length,A.length)}(r.mapValue,t.mapValue);default:throw mt(23264,{Pe:n})}}function W_(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return wt(r,t);const n=Ur(r),s=Ur(t),o=wt(n.seconds,s.seconds);return o!==0?o:wt(n.nanos,s.nanos)}function tv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ga(n[o],s[o]);if(u)return u}return wt(n.length,s.length)}function Fa(r){return Xd(r)}function Xd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=Ur(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return xr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ct.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=Xd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${Xd(n.fields[f])}`;return o+"}"}(r.mapValue):mt(61005,{value:r})}function yc(r){switch(Lr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wc(r);return t?16+yc(t):16;case 5:return 2*r.stringValue.length;case 6:return xr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+yc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return jr(s.fields,(u,f)=>{o+=u.length+yc(f)}),o}(r.mapValue);default:throw mt(13486,{value:r})}}function $d(r){return!!r&&"integerValue"in r}function Tm(r){return!!r&&"arrayValue"in r}function ev(r){return!!r&&"nullValue"in r}function nv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function _c(r){return!!r&&"mapValue"in r}function Lw(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[FT])===null||n===void 0?void 0:n.stringValue)===KT}function pl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return jr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=pl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=pl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function zw(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!_c(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=pl(n)}setAll(t){let n=Be.emptyPath(),s={},o=[];t.forEach((f,g)=>{if(!n.isImmediateParentOf(g)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=g.popLast()}f?s[g.lastSegment()]=pl(f):o.push(g.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());_c(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return di(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];_c(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){jr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new sn(pl(this.value))}}function QT(r){const t=[];return jr(r.fields,(n,s)=>{const o=new Be([n]);if(_c(s)){const u=QT(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new pn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n,s,o,u,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Qe(t,0,Tt.min(),Tt.min(),Tt.min(),sn.empty(),0)}static newFoundDocument(t,n,s,o){return new Qe(t,1,n,Tt.min(),s,o,0)}static newNoDocument(t,n){return new Qe(t,2,n,Tt.min(),Tt.min(),sn.empty(),0)}static newUnknownDocument(t,n){return new Qe(t,3,n,Tt.min(),Tt.min(),sn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Tt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Tt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Qe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,n){this.position=t,this.inclusive=n}}function iv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ct.comparator(ct.fromName(f.referenceValue),n.key):s=Ga(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function rv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!di(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n="asc"){this.field=t,this.dir=n}}function Bw(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{}class Se extends YT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new qw(t,n,s):n==="array-contains"?new Fw(t,s):n==="in"?new Kw(t,s):n==="not-in"?new Qw(t,s):n==="array-contains-any"?new Yw(t,s):new Se(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Hw(t,s):new Gw(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ga(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Ga(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return mt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mi extends YT{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new mi(t,n)}matches(t){return XT(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function XT(r){return r.op==="and"}function $T(r){return jw(r)&&XT(r)}function jw(r){for(const t of r.filters)if(t instanceof mi)return!1;return!0}function Zd(r){if(r instanceof Se)return r.field.canonicalString()+r.op.toString()+Fa(r.value);if($T(r))return r.filters.map(t=>Zd(t)).join(",");{const t=r.filters.map(n=>Zd(n)).join(",");return`${r.op}(${t})`}}function ZT(r,t){return r instanceof Se?function(s,o){return o instanceof Se&&s.op===o.op&&s.field.isEqual(o.field)&&di(s.value,o.value)}(r,t):r instanceof mi?function(s,o){return o instanceof mi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,g)=>u&&ZT(f,o.filters[g]),!0):!1}(r,t):void mt(19439)}function JT(r){return r instanceof Se?function(n){return`${n.field.canonicalString()} ${n.op} ${Fa(n.value)}`}(r):r instanceof mi?function(n){return n.op.toString()+" {"+n.getFilters().map(JT).join(" ,")+"}"}(r):"Filter"}class qw extends Se{constructor(t,n,s){super(t,n,s),this.key=ct.fromName(s.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class Hw extends Se{constructor(t,n){super(t,"in",n),this.keys=WT("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Gw extends Se{constructor(t,n){super(t,"not-in",n),this.keys=WT("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function WT(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ct.fromName(s.referenceValue))}class Fw extends Se{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Tm(n)&&Rl(n.arrayValue,this.value)}}class Kw extends Se{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Rl(this.value.arrayValue,n)}}class Qw extends Se{constructor(t,n){super(t,"not-in",n)}matches(t){if(Rl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Rl(this.value.arrayValue,n)}}class Yw extends Se{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Tm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Rl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t,n=null,s=[],o=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=g,this.Ie=null}}function sv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new Xw(r,t,n,s,o,u,f)}function Em(r){const t=Et(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Zd(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Jc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Fa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Fa(s)).join(",")),t.Ie=n}return t.Ie}function Am(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!Bw(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!ZT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!rv(r.startAt,t.startAt)&&rv(r.endAt,t.endAt)}function Jd(r){return ct.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n=null,s=[],o=[],u=null,f="F",g=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function $w(r,t,n,s,o,u,f,g){return new th(r,t,n,s,o,u,f,g)}function tE(r){return new th(r)}function av(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zw(r){return r.collectionGroup!==null}function yl(r){const t=Et(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new we(Be.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(g=g.add(y.field))})}),g})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Vc(u,s))}),n.has(Be.keyField().canonicalString())||t.Ee.push(new Vc(Be.keyField(),s))}return t.Ee}function ui(r){const t=Et(r);return t.de||(t.de=Jw(t,yl(r))),t.de}function Jw(r,t){if(r.limitType==="F")return sv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Vc(o.field,u)});const n=r.endAt?new Mc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Mc(r.startAt.position,r.startAt.inclusive):null;return sv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function Wd(r,t,n){return new th(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function eh(r,t){return Am(ui(r),ui(t))&&r.limitType===t.limitType}function eE(r){return`${Em(ui(r))}|lt:${r.limitType}`}function ka(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>JT(o)).join(", ")}]`),Jc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Fa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Fa(o)).join(",")),`Target(${s})`}(ui(r))}; limitType=${r.limitType})`}function nh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ct.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of yl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,g,p){const y=iv(f,g,p);return f.inclusive?y<=0:y<0}(s.startAt,yl(s),o)||s.endAt&&!function(f,g,p){const y=iv(f,g,p);return f.inclusive?y>=0:y>0}(s.endAt,yl(s),o))}(r,t)}function Ww(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nE(r){return(t,n)=>{let s=!1;for(const o of yl(r)){const u=tR(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function tR(r,t,n){const s=r.field.isKeyField()?ct.comparator(t.key,n.key):function(u,f,g){const p=f.data.field(u),y=g.data.field(u);return p!==null&&y!==null?Ga(p,y):mt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return mt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){jr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return zT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new se(ct.comparator);function Qi(){return eR}const iE=new se(ct.comparator);function ml(...r){let t=iE;for(const n of r)t=t.insert(n.key,n);return t}function rE(r){let t=iE;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Is(){return _l()}function sE(){return _l()}function _l(){return new zs(r=>r.toString(),(r,t)=>r.isEqual(t))}const nR=new se(ct.comparator),iR=new we(ct.comparator);function Vt(...r){let t=iR;for(const n of r)t=t.add(n);return t}const rR=new we(wt);function sR(){return rR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dc(t)?"-0":t}}function aE(r){return{integerValue:""+r}}function aR(r,t){return Mw(t)?aE(t):Sm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this._=void 0}}function oR(r,t,n){return r instanceof Pc?function(o,u){const f={fields:{[qT]:{stringValue:jT},[GT]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&vm(u)&&(u=Wc(u)),u&&(f.fields[HT]=u),{mapValue:f}}(n,t):r instanceof Il?lE(r,t):r instanceof Cl?uE(r,t):function(o,u){const f=oE(o,u),g=ov(f)+ov(o.Re);return $d(f)&&$d(o.Re)?aE(g):Sm(o.serializer,g)}(r,t)}function lR(r,t,n){return r instanceof Il?lE(r,t):r instanceof Cl?uE(r,t):n}function oE(r,t){return r instanceof kc?function(s){return $d(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class Pc extends ih{}class Il extends ih{constructor(t){super(),this.elements=t}}function lE(r,t){const n=cE(t);for(const s of r.elements)n.some(o=>di(o,s))||n.push(s);return{arrayValue:{values:n}}}class Cl extends ih{constructor(t){super(),this.elements=t}}function uE(r,t){let n=cE(t);for(const s of r.elements)n=n.filter(o=>!di(o,s));return{arrayValue:{values:n}}}class kc extends ih{constructor(t,n){super(),this.serializer=t,this.Re=n}}function ov(r){return fe(r.integerValue||r.doubleValue)}function cE(r){return Tm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function uR(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Il&&o instanceof Il||s instanceof Cl&&o instanceof Cl?Ha(s.elements,o.elements,di):s instanceof kc&&o instanceof kc?di(s.Re,o.Re):s instanceof Pc&&o instanceof Pc}(r.transform,t.transform)}class cR{constructor(t,n){this.version=t,this.transformResults=n}}class jn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new jn}static exists(t){return new jn(void 0,t)}static updateTime(t){return new jn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class rh{}function hE(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new bm(r.key,jn.none()):new Nl(r.key,r.data,jn.none());{const n=r.data,s=sn.empty();let o=new we(Be.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new qr(r.key,s,new pn(o.toArray()),jn.none())}}function hR(r,t,n){r instanceof Nl?function(o,u,f){const g=o.value.clone(),p=uv(o.fieldTransforms,u,f.transformResults);g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):r instanceof qr?function(o,u,f){if(!vc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const g=uv(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(fE(o)),p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function vl(r,t,n,s){return r instanceof Nl?function(u,f,g,p){if(!vc(u.precondition,f))return g;const y=u.value.clone(),A=cv(u.fieldTransforms,p,f);return y.setAll(A),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof qr?function(u,f,g,p){if(!vc(u.precondition,f))return g;const y=cv(u.fieldTransforms,p,f),A=f.data;return A.setAll(fE(u)),A.setAll(y),f.convertToFoundDocument(f.version,A).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(C=>C.field))}(r,t,n,s):function(u,f,g){return vc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g}(r,t,n)}function fR(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=oE(s.transform,o||null);u!=null&&(n===null&&(n=sn.empty()),n.set(s.field,u))}return n||null}function lv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ha(s,o,(u,f)=>uR(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Nl extends rh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class qr extends rh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function fE(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function uv(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,g=t.data.field(u.field);s.set(u.field,lR(f,g,n[o]))}return s}function cv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,oR(u,f,t))}return s}class bm extends rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dR extends rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&hR(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=vl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=vl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=sE();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(o.key)?null:g;const p=hE(f,g);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(Tt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Vt())}isEqual(t){return this.batchId===t.batchId&&Ha(this.mutations,t.mutations,(n,s)=>lv(n,s))&&Ha(this.baseMutations,t.baseMutations,(n,s)=>lv(n,s))}}class wm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return nR}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new wm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,xt;function yR(r){switch(r){case X.OK:return mt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return mt(15467,{code:r})}}function dE(r){if(r===void 0)return Ki("GRPC error has no .code"),X.UNKNOWN;switch(r){case ye.OK:return X.OK;case ye.CANCELLED:return X.CANCELLED;case ye.UNKNOWN:return X.UNKNOWN;case ye.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ye.INTERNAL:return X.INTERNAL;case ye.UNAVAILABLE:return X.UNAVAILABLE;case ye.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ye.NOT_FOUND:return X.NOT_FOUND;case ye.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ye.ABORTED:return X.ABORTED;case ye.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ye.DATA_LOSS:return X.DATA_LOSS;default:return mt(39323,{code:r})}}(xt=ye||(ye={}))[xt.OK=0]="OK",xt[xt.CANCELLED=1]="CANCELLED",xt[xt.UNKNOWN=2]="UNKNOWN",xt[xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xt[xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xt[xt.NOT_FOUND=5]="NOT_FOUND",xt[xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",xt[xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",xt[xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",xt[xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xt[xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xt[xt.ABORTED=10]="ABORTED",xt[xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",xt[xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",xt[xt.INTERNAL=13]="INTERNAL",xt[xt.UNAVAILABLE=14]="UNAVAILABLE",xt[xt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=new Nr([4294967295,4294967295],0);function hv(r){const t=UT().encode(r),n=new CT;return n.update(t),new Uint8Array(n.digest())}function fv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Nr([n,s],0),new Nr([o,u],0)]}class Rm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new gl(`Invalid padding: ${n}`);if(s<0)throw new gl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new gl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new gl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Nr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Nr.fromNumber(s)));return o.compare(_R)===1&&(o=new Nr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=hv(t),[s,o]=fv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Rm(u,o,n);return s.forEach(g=>f.insert(g)),f}insert(t){if(this.pe===0)return;const n=hv(t),[s,o]=fv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class gl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Ml.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new sh(Tt.min(),o,new se(wt),Qi(),Vt())}}class Ml{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ml(s,n,Vt(),Vt(),Vt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class mE{constructor(t,n){this.targetId=t,this.Ce=n}}class gE{constructor(t,n,s=je.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class dv{constructor(){this.Fe=0,this.Me=mv(),this.xe=je.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Vt(),n=Vt(),s=Vt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:mt(38017,{changeType:u})}}),new Ml(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=mv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ht(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class vR{constructor(t){this.ze=t,this.je=new Map,this.He=Qi(),this.Je=fc(),this.Ye=fc(),this.Ze=new se(wt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:mt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(Jd(u))if(s===0){const f=new ct(u.path);this.tt(n,f,Qe.newNoDocument(f,Tt.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const g=this.ct(t),p=g?this.lt(g,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,g;try{f=xr(s).toUint8Array()}catch(p){if(p instanceof BT)return qa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{g=new Rm(f,o,u)}catch(p){return qa(p instanceof gl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return g.pe===0?null:g}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const g=this._t(f);if(g){if(u.current&&Jd(g.target)){const p=new ct(g.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Qe.newNoDocument(p,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Vt();this.Ye.forEach((u,f)=>{let g=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)}),g&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new sh(t,n,this.Ze,this.He,s);return this.He=Qi(),this.Je=fc(),this.Ye=fc(),this.Ze=new se(wt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new dv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new we(wt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new we(wt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new dv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function fc(){return new se(ct.comparator)}function mv(){return new se(ct.comparator)}const TR={asc:"ASCENDING",desc:"DESCENDING"},ER={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AR={and:"AND",or:"OR"};class SR{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function tm(r,t){return r.useProto3Json||Jc(t)?t:{value:t}}function Uc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pE(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function bR(r,t){return Uc(r,t.toTimestamp())}function ci(r){return Ht(!!r,49232),Tt.fromTimestamp(function(n){const s=Ur(n);return new be(s.seconds,s.nanos)}(r))}function Im(r,t){return em(r,t).canonicalString()}function em(r,t){const n=function(o){return new ie(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function yE(r){const t=ie.fromString(r);return Ht(AE(t),10190,{key:t.toString()}),t}function nm(r,t){return Im(r.databaseId,t.path)}function Nd(r,t){const n=yE(t);if(n.get(1)!==r.databaseId.projectId)throw new lt(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new lt(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ct(vE(n))}function _E(r,t){return Im(r.databaseId,t)}function wR(r){const t=yE(r);return t.length===4?ie.emptyPath():vE(t)}function im(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vE(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function gv(r,t,n){return{name:nm(r,t),fields:n.value.mapValue.fields}}function RR(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:mt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,A){return y.useProto3Json?(Ht(A===void 0||typeof A=="string",58123),je.fromBase64String(A||"")):(Ht(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),je.fromUint8Array(A||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&function(y){const A=y.code===void 0?X.UNKNOWN:dE(y.code);return new lt(A,y.message||"")}(f);n=new gE(s,o,u,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Nd(r,s.document.name),u=ci(s.document.updateTime),f=s.document.createTime?ci(s.document.createTime):Tt.min(),g=new sn({mapValue:{fields:s.document.fields}}),p=Qe.newFoundDocument(o,u,f,g),y=s.targetIds||[],A=s.removedTargetIds||[];n=new Tc(y,A,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Nd(r,s.document),u=s.readTime?ci(s.readTime):Tt.min(),f=Qe.newNoDocument(o,u),g=s.removedTargetIds||[];n=new Tc([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Nd(r,s.document),u=s.removedTargetIds||[];n=new Tc([],u,o,null)}else{if(!("filter"in t))return mt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new pR(o,u),g=s.targetId;n=new mE(g,f)}}return n}function IR(r,t){let n;if(t instanceof Nl)n={update:gv(r,t.key,t.value)};else if(t instanceof bm)n={delete:nm(r,t.key)};else if(t instanceof qr)n={update:gv(r,t.key,t.data),updateMask:UR(t.fieldMask)};else{if(!(t instanceof dR))return mt(16599,{ft:t.type});n={verify:nm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const g=f.transform;if(g instanceof Pc)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Il)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Cl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof kc)return{fieldPath:f.field.canonicalString(),increment:g.Re};throw mt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:bR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:mt(27497)}(r,t.precondition)),n}function CR(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?ci(o.updateTime):ci(u);return f.isEqual(Tt.min())&&(f=ci(u)),new cR(f,o.transformResults||[])}(n,t))):[]}function DR(r,t){return{documents:[_E(r,t.path)]}}function OR(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=_E(r,o);const u=function(y){if(y.length!==0)return EE(mi.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(A=>function(k){return{field:Ua(k.field),direction:VR(k.dir)}}(A))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=tm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function NR(r){let t=wR(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const A=n.from[0];A.allDescendants?o=A.collectionId:t=t.child(A.collectionId)}let u=[];n.where&&(u=function(C){const k=TE(C);return k instanceof mi&&$T(k)?k.getFilters():[k]}(n.where));let f=[];n.orderBy&&(f=function(C){return C.map(k=>function(Z){return new Vc(xa(Z.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(Z.direction))}(k))}(n.orderBy));let g=null;n.limit&&(g=function(C){let k;return k=typeof C=="object"?C.value:C,Jc(k)?null:k}(n.limit));let p=null;n.startAt&&(p=function(C){const k=!!C.before,q=C.values||[];return new Mc(q,k)}(n.startAt));let y=null;return n.endAt&&(y=function(C){const k=!C.before,q=C.values||[];return new Mc(q,k)}(n.endAt)),$w(t,o,f,u,g,"F",p,y)}function MR(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function TE(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=xa(n.unaryFilter.field);return Se.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=xa(n.unaryFilter.field);return Se.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=xa(n.unaryFilter.field);return Se.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=xa(n.unaryFilter.field);return Se.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mt(61313);default:return mt(60726)}}(r):r.fieldFilter!==void 0?function(n){return Se.create(xa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mt(58110);default:return mt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return mi.create(n.compositeFilter.filters.map(s=>TE(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return mt(1026)}}(n.compositeFilter.op))}(r):mt(30097,{filter:r})}function VR(r){return TR[r]}function PR(r){return ER[r]}function kR(r){return AR[r]}function Ua(r){return{fieldPath:r.canonicalString()}}function xa(r){return Be.fromServerFormat(r.fieldPath)}function EE(r){return r instanceof Se?function(n){if(n.op==="=="){if(nv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NAN"}};if(ev(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NOT_NAN"}};if(ev(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ua(n.field),op:PR(n.op),value:n.value}}}(r):r instanceof mi?function(n){const s=n.getFilters().map(o=>EE(o));return s.length===1?s[0]:{compositeFilter:{op:kR(n.op),filters:s}}}(r):mt(54877,{filter:r})}function UR(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function AE(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,n,s,o,u=Tt.min(),f=Tt.min(),g=je.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=p}withSequenceNumber(t){return new Cr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(t){this.wt=t}}function LR(r){const t=NR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Wd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.yn=new BR}addToCollectionParentIndex(t,n){return this.yn.add(n),Q.resolve()}getCollectionParents(t,n){return Q.resolve(this.yn.getEntries(n))}addFieldIndex(t,n){return Q.resolve()}deleteFieldIndex(t,n){return Q.resolve()}deleteAllFieldIndexes(t){return Q.resolve()}createTargetIndexes(t,n){return Q.resolve()}getDocumentsMatchingTarget(t,n){return Q.resolve(null)}getIndexType(t,n){return Q.resolve(0)}getFieldIndexes(t,n){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,n){return Q.resolve(kr.min())}getMinOffsetFromCollectionGroup(t,n){return Q.resolve(kr.min())}updateCollectionGroup(t,n,s){return Q.resolve()}updateIndexEntries(t,n){return Q.resolve()}}class BR{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new we(ie.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new we(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},SE=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(SE,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ka(0)}static ir(){return new Ka(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="LruGarbageCollector",jR=1048576;function _v([r,t],[n,s]){const o=wt(r,n);return o===0?wt(t,s):o}class qR{constructor(t){this.cr=t,this.buffer=new we(_v),this.lr=0}hr(){return++this.lr}Pr(t){const n=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();_v(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HR{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){it(yv,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Wa(n)?it(yv,"Ignoring IndexedDB error during garbage collection: ",n):await Ja(n)}await this.Ir(3e5)})}}class GR{constructor(t,n){this.Er=t,this.params=n}calculateTargetCount(t,n){return this.Er.dr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Q.resolve(Zc.le);const s=new qR(n);return this.Er.forEachTarget(t,o=>s.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(t,o=>s.Pr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Er.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Er.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(pv)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pv):this.Rr(t,n))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,n){let s,o,u,f,g,p,y;const A=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,f=Date.now(),this.nthSequenceNumber(t,o))).next(C=>(s=C,g=Date.now(),this.removeTargets(t,s,n))).next(C=>(u=C,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(C=>(y=Date.now(),Pa()<=Mt.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-A}ms
	Determined least recently used ${o} in `+(g-f)+`ms
	Removed ${u} targets in `+(p-g)+`ms
	Removed ${C} documents in `+(y-p)+`ms
Total Duration: ${y-A}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C})))}}function FR(r,t){return new GR(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.changes=new zs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Qe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Q.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&vl(s.mutation,o,pn.empty(),be.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Vt()){const o=Is();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=ml();return u.forEach((g,p)=>{f=f.insert(g,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Is();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Vt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,g)=>{n.set(f,g)})})}computeViews(t,n,s,o){let u=Qi();const f=_l(),g=function(){return _l()}();return n.forEach((p,y)=>{const A=s.get(y.key);o.has(y.key)&&(A===void 0||A.mutation instanceof qr)?u=u.insert(y.key,y):A!==void 0?(f.set(y.key,A.mutation.getFieldMask()),vl(A.mutation,y,A.mutation.getFieldMask(),be.now())):f.set(y.key,pn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,A)=>f.set(y,A)),n.forEach((y,A)=>{var C;return g.set(y,new QR(A,(C=f.get(y))!==null&&C!==void 0?C:null))}),g))}recalculateAndSaveOverlays(t,n){const s=_l();let o=new se((f,g)=>f-g),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const g of f)g.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let A=s.get(p)||pn.empty();A=g.applyToLocalView(y,A),s.set(p,A);const C=(o.get(g.batchId)||Vt()).add(p);o=o.insert(g.batchId,C)})}).next(()=>{const f=[],g=o.getReverseIterator();for(;g.hasNext();){const p=g.getNext(),y=p.key,A=p.value,C=sE();A.forEach(k=>{if(!u.has(k)){const q=hE(n.get(k),s.get(k));q!==null&&C.set(k,q),u=u.add(k)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,C))}return Q.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Zw(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Q.resolve(Is());let g=Sl,p=u;return f.next(y=>Q.forEach(y,(A,C)=>(g<C.largestBatchId&&(g=C.largestBatchId),u.get(A)?Q.resolve():this.remoteDocumentCache.getEntry(t,A).next(k=>{p=p.insert(A,k)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Vt())).next(A=>({batchId:g,changes:rE(A)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next(s=>{let o=ml();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=ml();return this.indexManager.getCollectionParents(t,u).next(g=>Q.forEach(g,p=>{const y=function(C,k){return new th(k,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(A=>{A.forEach((C,k)=>{f=f.insert(C,k)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const A=y.getKey();f.get(A)===null&&(f=f.insert(A,Qe.newInvalidDocument(A)))});let g=ml();return f.forEach((p,y)=>{const A=u.get(p);A!==void 0&&vl(A.mutation,y,pn.empty(),be.now()),nh(n,y)&&(g=g.insert(p,y))}),g})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,n){return Q.resolve(this.Fr.get(n))}saveBundleMetadata(t,n){return this.Fr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:ci(o.createTime)}}(n)),Q.resolve()}getNamedQuery(t,n){return Q.resolve(this.Mr.get(n))}saveNamedQuery(t,n){return this.Mr.set(n.name,function(o){return{name:o.name,query:LR(o.bundledQuery),readTime:ci(o.readTime)}}(n)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(){this.overlays=new se(ct.comparator),this.Or=new Map}getOverlay(t,n){return Q.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Is();return Q.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.St(t,n,u)}),Q.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Or.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Or.delete(s)),Q.resolve()}getOverlaysForCollection(t,n,s){const o=Is(),u=n.length+1,f=new ct(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const p=g.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new se((y,A)=>y-A);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let A=u.get(y.largestBatchId);A===null&&(A=Is(),u=u.insert(y.largestBatchId,A)),A.set(y.getKey(),y)}}const g=Is(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,A)=>g.set(y,A)),!(g.size()>=o)););return Q.resolve(g)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Or.get(o.largestBatchId).delete(s.key);this.Or.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new gR(n,s));let u=this.Or.get(n);u===void 0&&(u=Vt(),this.Or.set(n,u)),this.Or.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(t){return Q.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.Nr=new we(Me.Br),this.Lr=new we(Me.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,n){const s=new Me(t,n);this.Nr=this.Nr.add(s),this.Lr=this.Lr.add(s)}qr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Qr(new Me(t,n))}$r(t,n){t.forEach(s=>this.removeReference(s,n))}Ur(t){const n=new ct(new ie([])),s=new Me(n,t),o=new Me(n,t+1),u=[];return this.Lr.forEachInRange([s,o],f=>{this.Qr(f),u.push(f.key)}),u}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const n=new ct(new ie([])),s=new Me(n,t),o=new Me(n,t+1);let u=Vt();return this.Lr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Me(t,0),s=this.Nr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Me{constructor(t,n){this.key=t,this.Gr=n}static Br(t,n){return ct.comparator(t.key,n.key)||wt(t.Gr,n.Gr)}static kr(t,n){return wt(t.Gr,n.Gr)||ct.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new we(Me.Br)}checkEmpty(t){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new mR(u,n,s,o);this.mutationQueue.push(f);for(const g of o)this.zr=this.zr.add(new Me(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return Q.resolve(f)}lookupMutationBatch(t,n){return Q.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Hr(s),u=o<0?0:o;return Q.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?_m:this.Jn-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Me(n,0),o=new Me(n,Number.POSITIVE_INFINITY),u=[];return this.zr.forEachInRange([s,o],f=>{const g=this.jr(f.Gr);u.push(g)}),Q.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new we(wt);return n.forEach(o=>{const u=new Me(o,0),f=new Me(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([u,f],g=>{s=s.add(g.Gr)})}),Q.resolve(this.Jr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ct.isDocumentKey(u)||(u=u.child(""));const f=new Me(new ct(u),0);let g=new we(wt);return this.zr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(g=g.add(p.Gr)),!0)},f),Q.resolve(this.Jr(g))}Jr(t){const n=[];return t.forEach(s=>{const o=this.jr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ht(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.zr;return Q.forEach(n.mutations,o=>{const u=new Me(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.zr=s})}Xn(t){}containsKey(t,n){const s=new Me(n,0),o=this.zr.firstAfterOrEqual(s);return Q.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}Yr(t,n){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const n=this.Hr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(t){this.Zr=t,this.docs=function(){return new se(ct.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.Zr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Q.resolve(s?s.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(t,n){let s=Qi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Qe.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Qi();const f=n.path,g=new ct(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(g);for(;p.hasNext();){const{key:y,value:{document:A}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||Cw(Iw(A),s)<=0||(o.has(A.key)||nh(n,A))&&(u=u.insert(A.key,A.mutableCopy()))}return Q.resolve(u)}getAllFromCollectionGroup(t,n,s,o){mt(9500)}Xr(t,n){return Q.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new tI(this)}getSize(t){return Q.resolve(this.size)}}class tI extends KR{constructor(t){super(),this.vr=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.vr.addEntry(t,o)):this.vr.removeEntry(s)}),Q.waitFor(n)}getFromCache(t,n){return this.vr.getEntry(t,n)}getAllFromCache(t,n){return this.vr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.persistence=t,this.ei=new zs(n=>Em(n),Am),this.lastRemoteSnapshotVersion=Tt.min(),this.highestTargetId=0,this.ti=0,this.ni=new Cm,this.targetCount=0,this.ri=Ka.rr()}forEachTarget(t,n){return this.ei.forEach((s,o)=>n(o)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ti&&(this.ti=n),Q.resolve()}ar(t){this.ei.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ri=new Ka(n),this.highestTargetId=n),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,n){return this.ar(n),this.targetCount+=1,Q.resolve()}updateTargetData(t,n){return this.ar(n),Q.resolve()}removeTargetData(t,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ei.forEach((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.ei.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),o++)}),Q.waitFor(u).next(()=>o)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,n){const s=this.ei.get(n)||null;return Q.resolve(s)}addMatchingKeys(t,n,s){return this.ni.qr(n,s),Q.resolve()}removeMatchingKeys(t,n,s){this.ni.$r(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Q.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ni.Ur(n),Q.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ni.Wr(n);return Q.resolve(s)}containsKey(t,n){return Q.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t,n){this.ii={},this.overlays={},this.si=new Zc(0),this.oi=!1,this.oi=!0,this._i=new ZR,this.referenceDelegate=t(this),this.ai=new eI(this),this.indexManager=new zR,this.remoteDocumentCache=function(o){return new WR(o)}(s=>this.referenceDelegate.ui(s)),this.serializer=new xR(n),this.ci=new XR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new $R,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ii[t.toKey()];return s||(s=new JR(n,this.referenceDelegate),this.ii[t.toKey()]=s),s}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const o=new nI(this.si.next());return this.referenceDelegate.li(),s(o).next(u=>this.referenceDelegate.hi(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Pi(t,n){return Q.or(Object.values(this.ii).map(s=>()=>s.containsKey(t,n)))}}class nI extends Ow{constructor(t){super(),this.currentSequenceNumber=t}}class Dm{constructor(t){this.persistence=t,this.Ti=new Cm,this.Ii=null}static Ei(t){return new Dm(t)}get di(){if(this.Ii)return this.Ii;throw mt(60996)}addReference(t,n,s){return this.Ti.addReference(s,n),this.di.delete(s.toString()),Q.resolve()}removeReference(t,n,s){return this.Ti.removeReference(s,n),this.di.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),Q.resolve()}removeTarget(t,n){this.Ti.Ur(n.targetId).forEach(o=>this.di.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.di.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}li(){this.Ii=new Set}hi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.di,s=>{const o=ct.fromPath(s);return this.Ai(t,o).next(u=>{u||n.removeEntry(o,Tt.min())})}).next(()=>(this.Ii=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ai(t,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(t){return 0}Ai(t,n){return Q.or([()=>Q.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Pi(t,n)])}}class xc{constructor(t,n){this.persistence=t,this.Ri=new zs(s=>Vw(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=FR(this,n)}static Ei(t,n){return new xc(t,n)}li(){}hi(t){return Q.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}Vr(t){let n=0;return this.Ar(t,s=>{n++}).next(()=>n)}Ar(t,n){return Q.forEach(this.Ri,(s,o)=>this.gr(t,s,o).next(u=>u?Q.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Xr(t,f=>this.gr(t,f,n).next(g=>{g||(s++,u.removeEntry(f,Tt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.Ri.set(n,t.currentSequenceNumber),Q.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Q.resolve()}removeReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Q.resolve()}updateLimboDocument(t,n){return this.Ri.set(n,t.currentSequenceNumber),Q.resolve()}ui(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=yc(t.data.value)),n}gr(t,n,s){return Q.or([()=>this.persistence.Pi(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.Ri.get(n);return Q.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ls=s,this.hs=o}static Ps(t,n){let s=Vt(),o=Vt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Om(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return ZS()?8:Nw(Ye())>0?6:4}()}initialize(t,n){this.As=t,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.Rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.Vs(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new iI;return this.fs(t,n,f).next(g=>{if(u.result=g,this.Is)return this.gs(t,n,f,g.size)})}).next(()=>u.result)}gs(t,n,s,o){return s.documentReadCount<this.Es?(Pa()<=Mt.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",ka(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),Q.resolve()):(Pa()<=Mt.DEBUG&&it("QueryEngine","Query:",ka(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(Pa()<=Mt.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",ka(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ui(n))):Q.resolve())}Rs(t,n){if(av(n))return Q.resolve(null);let s=ui(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Wd(n,null,"F"),s=ui(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Vt(...u);return this.As.getDocuments(t,f).next(g=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.ps(n,g);return this.ys(n,y,f,p.readTime)?this.Rs(t,Wd(n,null,"F")):this.ws(t,y,n,p)}))})))}Vs(t,n,s,o){return av(n)||o.isEqual(Tt.min())?Q.resolve(null):this.As.getDocuments(t,s).next(u=>{const f=this.ps(n,u);return this.ys(n,f,s,o)?Q.resolve(null):(Pa()<=Mt.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ka(n)),this.ws(t,f,n,Rw(o,Sl)).next(g=>g))})}ps(t,n){let s=new we(nE(t));return n.forEach((o,u)=>{nh(t,u)&&(s=s.add(u))}),s}ys(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}fs(t,n,s){return Pa()<=Mt.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",ka(n)),this.As.getDocumentsMatchingQuery(t,n,kr.min(),s)}ws(t,n,s,o){return this.As.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm="LocalStore",sI=3e8;class aI{constructor(t,n,s,o){this.persistence=t,this.bs=n,this.serializer=o,this.Ss=new se(wt),this.Ds=new zs(u=>Em(u),Am),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(s)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new YR(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ss))}}function oI(r,t,n,s){return new aI(r,t,n,s)}async function wE(r,t){const n=Et(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Fs(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],g=[];let p=Vt();for(const y of o){f.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}for(const y of u){g.push(y.batchId);for(const A of y.mutations)p=p.add(A.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Ms:y,removedBatchIds:f,addedBatchIds:g}))})})}function lI(r,t){const n=Et(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Cs.newChangeBuffer({trackRemovals:!0});return function(g,p,y,A){const C=y.batch,k=C.keys();let q=Q.resolve();return k.forEach(Z=>{q=q.next(()=>A.getEntry(p,Z)).next(nt=>{const $=y.docVersions.get(Z);Ht($!==null,48541),nt.version.compareTo($)<0&&(C.applyToRemoteDocument(nt,y),nt.isValidDocument()&&(nt.setReadTime(y.commitVersion),A.addEntry(nt)))})}),q.next(()=>g.mutationQueue.removeMutationBatch(p,C))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(g){let p=Vt();for(let y=0;y<g.mutationResults.length;++y)g.mutationResults[y].transformResults.length>0&&(p=p.add(g.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function RE(r){const t=Et(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ai.getLastRemoteSnapshotVersion(n))}function uI(r,t){const n=Et(r),s=t.snapshotVersion;let o=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Cs.newChangeBuffer({trackRemovals:!0});o=n.Ss;const g=[];t.targetChanges.forEach((A,C)=>{const k=o.get(C);if(!k)return;g.push(n.ai.removeMatchingKeys(u,A.removedDocuments,C).next(()=>n.ai.addMatchingKeys(u,A.addedDocuments,C)));let q=k.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(C)!==null?q=q.withResumeToken(je.EMPTY_BYTE_STRING,Tt.min()).withLastLimboFreeSnapshotVersion(Tt.min()):A.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(A.resumeToken,s)),o=o.insert(C,q),function(nt,$,At){return nt.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-nt.snapshotVersion.toMicroseconds()>=sI?!0:At.addedDocuments.size+At.modifiedDocuments.size+At.removedDocuments.size>0}(k,q,A)&&g.push(n.ai.updateTargetData(u,q))});let p=Qi(),y=Vt();if(t.documentUpdates.forEach(A=>{t.resolvedLimboDocuments.has(A)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,A))}),g.push(cI(u,f,t.documentUpdates).next(A=>{p=A.xs,y=A.Os})),!s.isEqual(Tt.min())){const A=n.ai.getLastRemoteSnapshotVersion(u).next(C=>n.ai.setTargetsMetadata(u,u.currentSequenceNumber,s));g.push(A)}return Q.waitFor(g).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ss=o,u))}function cI(r,t,n){let s=Vt(),o=Vt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Qi();return n.forEach((g,p)=>{const y=u.get(g);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(g)),p.isNoDocument()&&p.version.isEqual(Tt.min())?(t.removeEntry(g,p.readTime),f=f.insert(g,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(g,p)):it(Nm,"Ignoring outdated watch update for ",g,". Current version:",y.version," Watch version:",p.version)}),{xs:f,Os:o}})}function hI(r,t){const n=Et(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=_m),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function fI(r,t){const n=Et(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.ai.getTargetData(s,t).next(u=>u?(o=u,Q.resolve(o)):n.ai.allocateTargetId(s).next(f=>(o=new Cr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.ai.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ss.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(s.targetId,s),n.Ds.set(t,s.targetId)),s})}async function rm(r,t,n){const s=Et(r),o=s.Ss.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!Wa(f))throw f;it(Nm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ss=s.Ss.remove(t),s.Ds.delete(o.target)}function vv(r,t,n){const s=Et(r);let o=Tt.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,A){const C=Et(p),k=C.Ds.get(A);return k!==void 0?Q.resolve(C.Ss.get(k)):C.ai.getTargetData(y,A)}(s,f,ui(t)).next(g=>{if(g)return o=g.lastLimboFreeSnapshotVersion,s.ai.getMatchingKeysForTargetId(f,g.targetId).next(p=>{u=p})}).next(()=>s.bs.getDocumentsMatchingQuery(f,t,n?o:Tt.min(),n?u:Vt())).next(g=>(dI(s,Ww(t),g),{documents:g,Ns:u})))}function dI(r,t,n){let s=r.vs.get(t)||Tt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.vs.set(t,s)}class Tv{constructor(){this.activeTargetIds=sR()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class mI{constructor(){this.So=new Tv,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,n,s){this.Do[t]=n}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new Tv,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="ConnectivityMonitor";class Av{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){it(Ev,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){it(Ev,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dc=null;function sm(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="RestConnection",pI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yI{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+t.host,this.ko=`projects/${s}/databases/${o}`,this.qo=this.databaseId.database===Oc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Qo(t,n,s,o,u){const f=sm(),g=this.$o(t,n.toUriEncodedString());it(Md,`Sending RPC '${t}' ${f}:`,g,s);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(p,o,u),this.Ko(t,g,p,s).then(y=>(it(Md,`Received RPC '${t}' ${f}: `,y),y),y=>{throw qa(Md,`RPC '${t}' ${f} failed with error: `,y,"url: ",g,"request:",s),y})}Wo(t,n,s,o,u,f){return this.Qo(t,n,s,o,u)}Uo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Za}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}$o(t,n){const s=pI[t];return`${this.Lo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class vI extends yI{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,n,s,o){const u=sm();return new Promise((f,g)=>{const p=new DT;p.setWithCredentials(!0),p.listenOnce(OT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case pc.NO_ERROR:const A=p.getResponseJson();it(Fe,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),f(A);break;case pc.TIMEOUT:it(Fe,`RPC '${t}' ${u} timed out`),g(new lt(X.DEADLINE_EXCEEDED,"Request time out"));break;case pc.HTTP_ERROR:const C=p.getStatus();if(it(Fe,`RPC '${t}' ${u} failed with status:`,C,"response text:",p.getResponseText()),C>0){let k=p.getResponseJson();Array.isArray(k)&&(k=k[0]);const q=k==null?void 0:k.error;if(q&&q.status&&q.message){const Z=function($){const At=$.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(At)>=0?At:X.UNKNOWN}(q.status);g(new lt(Z,q.message))}else g(new lt(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else g(new lt(X.UNAVAILABLE,"Connection failed."));break;default:mt(9055,{s_:t,streamId:u,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{it(Fe,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);it(Fe,`RPC '${t}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}a_(t,n,s){const o=sm(),u=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=VT(),g=MT(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const A=u.join("");it(Fe,`Creating RPC '${t}' stream ${o}: ${A}`,p);const C=f.createWebChannel(A,p);let k=!1,q=!1;const Z=new _I({Go:$=>{q?it(Fe,`Not sending because RPC '${t}' stream ${o} is closed:`,$):(k||(it(Fe,`Opening RPC '${t}' stream ${o} transport.`),C.open(),k=!0),it(Fe,`RPC '${t}' stream ${o} sending:`,$),C.send($))},zo:()=>C.close()}),nt=($,At,vt)=>{$.listen(At,ht=>{try{vt(ht)}catch(Rt){setTimeout(()=>{throw Rt},0)}})};return nt(C,dl.EventType.OPEN,()=>{q||(it(Fe,`RPC '${t}' stream ${o} transport opened.`),Z.t_())}),nt(C,dl.EventType.CLOSE,()=>{q||(q=!0,it(Fe,`RPC '${t}' stream ${o} transport closed`),Z.r_())}),nt(C,dl.EventType.ERROR,$=>{q||(q=!0,qa(Fe,`RPC '${t}' stream ${o} transport errored. Name:`,$.name,"Message:",$.message),Z.r_(new lt(X.UNAVAILABLE,"The operation could not be completed")))}),nt(C,dl.EventType.MESSAGE,$=>{var At;if(!q){const vt=$.data[0];Ht(!!vt,16349);const ht=vt,Rt=(ht==null?void 0:ht.error)||((At=ht[0])===null||At===void 0?void 0:At.error);if(Rt){it(Fe,`RPC '${t}' stream ${o} received error:`,Rt);const pt=Rt.status;let It=function(R){const N=ye[R];if(N!==void 0)return dE(N)}(pt),M=Rt.message;It===void 0&&(It=X.INTERNAL,M="Unknown error status: "+pt+" with message "+Rt.message),q=!0,Z.r_(new lt(It,M)),C.close()}else it(Fe,`RPC '${t}' stream ${o} received:`,vt),Z.i_(vt)}}),nt(g,NT.STAT_EVENT,$=>{$.stat===Qd.PROXY?it(Fe,`RPC '${t}' stream ${o} detected buffering proxy`):$.stat===Qd.NOPROXY&&it(Fe,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{Z.n_()},0),Z}}function Vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(r){return new SR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(t,n,s=1e3,o=1.5,u=6e4){this.bi=t,this.timerId=n,this.u_=s,this.c_=o,this.l_=u,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const n=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-s);o>0&&it("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="PersistentStream";class CE{constructor(t,n,s,o,u,f,g,p){this.bi=t,this.R_=s,this.V_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new IE(t,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Ki(n.toString()),Ki("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.m_===n&&this.B_(s,o)},s=>{t(()=>{const o=new lt(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.L_(o)})})}B_(t,n){const s=this.N_(this.m_);this.stream=this.k_(t,n),this.stream.jo(()=>{s(()=>this.listener.jo())}),this.stream.Jo(()=>{s(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{s(()=>this.L_(o))}),this.stream.onMessage(o=>{s(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return it(Sv,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return n=>{this.bi.enqueueAndForget(()=>this.m_===t?n():(it(Sv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TI extends CE{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}k_(t,n){return this.connection.a_("Listen",t,n)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const n=RR(this.serializer,t),s=function(u){if(!("targetChange"in u))return Tt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?Tt.min():f.readTime?ci(f.readTime):Tt.min()}(t);return this.listener.Q_(n,s)}U_(t){const n={};n.database=im(this.serializer),n.addTarget=function(u,f){let g;const p=f.target;if(g=Jd(p)?{documents:DR(u,p)}:{query:OR(u,p).gt},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=pE(u,f.resumeToken);const y=tm(u,f.expectedCount);y!==null&&(g.expectedCount=y)}else if(f.snapshotVersion.compareTo(Tt.min())>0){g.readTime=Uc(u,f.snapshotVersion.toTimestamp());const y=tm(u,f.expectedCount);y!==null&&(g.expectedCount=y)}return g}(this.serializer,t);const s=MR(this.serializer,t);s&&(n.labels=s),this.F_(n)}K_(t){const n={};n.database=im(this.serializer),n.removeTarget=t,this.F_(n)}}class EI extends CE{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,n){return this.connection.a_("Write",t,n)}q_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const n=CR(t.writeResults,t.commitTime),s=ci(t.commitTime);return this.listener.j_(s,n)}H_(){const t={};t.database=im(this.serializer),this.F_(t)}G_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>IR(this.serializer,s))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{}class SI extends AI{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,n,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Qo(t,em(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new lt(X.UNKNOWN,u.toString())})}Wo(t,n,s,o,u){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,g])=>this.connection.Wo(t,em(n,s),o,f,g,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new lt(X.UNKNOWN,f.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class bI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Ki(n),this.ea=!1):it("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="RemoteStore";class wI{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=u,this.ca.vo(f=>{s.enqueueAndForget(async()=>{Bs(this)&&(it(Ms,"Restarting streams for network reachability change."),await async function(p){const y=Et(p);y.aa.add(4),await Vl(y),y.la.set("Unknown"),y.aa.delete(4),await oh(y)}(this))})}),this.la=new bI(s,o)}}async function oh(r){if(Bs(r))for(const t of r.ua)await t(!0)}async function Vl(r){for(const t of r.ua)await t(!1)}function DE(r,t){const n=Et(r);n._a.has(t.targetId)||(n._a.set(t.targetId,t),km(n)?Pm(n):to(n).b_()&&Vm(n,t))}function Mm(r,t){const n=Et(r),s=to(n);n._a.delete(t),s.b_()&&OE(n,t),n._a.size===0&&(s.b_()?s.v_():Bs(n)&&n.la.set("Unknown"))}function Vm(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Tt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}to(r).U_(t)}function OE(r,t){r.ha.Ke(t),to(r).K_(t)}function Pm(r){r.ha=new vR({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),to(r).start(),r.la.ta()}function km(r){return Bs(r)&&!to(r).w_()&&r._a.size>0}function Bs(r){return Et(r).aa.size===0}function NE(r){r.ha=void 0}async function RI(r){r.la.set("Online")}async function II(r){r._a.forEach((t,n)=>{Vm(r,t)})}async function CI(r,t){NE(r),km(r)?(r.la.ia(t),Pm(r)):r.la.set("Unknown")}async function DI(r,t,n){if(r.la.set("Online"),t instanceof gE&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const g of u.targetIds)o._a.has(g)&&(await o.remoteSyncer.rejectListen(g,f),o._a.delete(g),o.ha.removeTarget(g))}(r,t)}catch(s){it(Ms,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Lc(r,s)}else if(t instanceof Tc?r.ha.Xe(t):t instanceof mE?r.ha.ot(t):r.ha.nt(t),!n.isEqual(Tt.min()))try{const s=await RE(r.localStore);n.compareTo(s)>=0&&await function(u,f){const g=u.ha.It(f);return g.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const A=u._a.get(y);A&&u._a.set(y,A.withResumeToken(p.resumeToken,f))}}),g.targetMismatches.forEach((p,y)=>{const A=u._a.get(p);if(!A)return;u._a.set(p,A.withResumeToken(je.EMPTY_BYTE_STRING,A.snapshotVersion)),OE(u,p);const C=new Cr(A.target,p,y,A.sequenceNumber);Vm(u,C)}),u.remoteSyncer.applyRemoteEvent(g)}(r,n)}catch(s){it(Ms,"Failed to raise snapshot:",s),await Lc(r,s)}}async function Lc(r,t,n){if(!Wa(t))throw t;r.aa.add(1),await Vl(r),r.la.set("Offline"),n||(n=()=>RE(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{it(Ms,"Retrying IndexedDB access"),await n(),r.aa.delete(1),await oh(r)})}function ME(r,t){return t().catch(n=>Lc(r,n,t))}async function lh(r){const t=Et(r),n=zr(t);let s=t.oa.length>0?t.oa[t.oa.length-1].batchId:_m;for(;OI(t);)try{const o=await hI(t.localStore,s);if(o===null){t.oa.length===0&&n.v_();break}s=o.batchId,NI(t,o)}catch(o){await Lc(t,o)}VE(t)&&PE(t)}function OI(r){return Bs(r)&&r.oa.length<10}function NI(r,t){r.oa.push(t);const n=zr(r);n.b_()&&n.W_&&n.G_(t.mutations)}function VE(r){return Bs(r)&&!zr(r).w_()&&r.oa.length>0}function PE(r){zr(r).start()}async function MI(r){zr(r).H_()}async function VI(r){const t=zr(r);for(const n of r.oa)t.G_(n.mutations)}async function PI(r,t,n){const s=r.oa.shift(),o=wm.from(s,t,n);await ME(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await lh(r)}async function kI(r,t){t&&zr(r).W_&&await async function(s,o){if(function(f){return yR(f)&&f!==X.ABORTED}(o.code)){const u=s.oa.shift();zr(s).D_(),await ME(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await lh(s)}}(r,t),VE(r)&&PE(r)}async function bv(r,t){const n=Et(r);n.asyncQueue.verifyOperationInProgress(),it(Ms,"RemoteStore received new credentials");const s=Bs(n);n.aa.add(3),await Vl(n),s&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.aa.delete(3),await oh(n)}async function UI(r,t){const n=Et(r);t?(n.aa.delete(2),await oh(n)):t||(n.aa.add(2),await Vl(n),n.la.set("Unknown"))}function to(r){return r.Pa||(r.Pa=function(n,s,o){const u=Et(n);return u.Y_(),new TI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:RI.bind(null,r),Jo:II.bind(null,r),Zo:CI.bind(null,r),Q_:DI.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),km(r)?Pm(r):r.la.set("Unknown")):(await r.Pa.stop(),NE(r))})),r.Pa}function zr(r){return r.Ta||(r.Ta=function(n,s,o){const u=Et(n);return u.Y_(),new EI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:MI.bind(null,r),Zo:kI.bind(null,r),z_:VI.bind(null,r),j_:PI.bind(null,r)}),r.ua.push(async t=>{t?(r.Ta.D_(),await lh(r)):(await r.Ta.stop(),r.oa.length>0&&(it(Ms,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,g=new Um(t,n,f,o,u);return g.start(s),g}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(r,t){if(Ki("AsyncQueue",`${t}: ${r}`),Wa(r))return new lt(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{static emptySet(t){return new La(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ct.comparator(n.key,s.key):(n,s)=>ct.comparator(n.key,s.key),this.keyedMap=ml(),this.sortedSet=new se(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof La)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new La;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(){this.Ia=new se(ct.comparator)}track(t){const n=t.doc.key,s=this.Ia.get(n);s?t.type!==0&&s.type===3?this.Ia=this.Ia.insert(n,t):t.type===3&&s.type!==1?this.Ia=this.Ia.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Ia=this.Ia.remove(n):t.type===1&&s.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):mt(63341,{Vt:t,Ea:s}):this.Ia=this.Ia.insert(n,t)}da(){const t=[];return this.Ia.inorderTraversal((n,s)=>{t.push(s)}),t}}class Qa{constructor(t,n,s,o,u,f,g,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(g=>{f.push({type:0,doc:g})}),new Qa(t,n,La.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&eh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class LI{constructor(){this.queries=Rv(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,s){const o=Et(n),u=o.queries;o.queries=Rv(),u.forEach((f,g)=>{for(const p of g.Ra)p.onError(s)})})(this,new lt(X.ABORTED,"Firestore shutting down"))}}function Rv(){return new zs(r=>eE(r),eh)}async function zI(r,t){const n=Et(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Va()&&t.ma()&&(s=2):(u=new xI,s=t.ma()?0:1);try{switch(s){case 0:u.Aa=await n.onListen(o,!0);break;case 1:u.Aa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const g=xm(f,`Initialization of query '${ka(t.query)}' failed`);return void t.onError(g)}n.queries.set(o,u),u.Ra.push(t),t.ga(n.onlineState),u.Aa&&t.pa(u.Aa)&&Lm(n)}async function BI(r,t){const n=Et(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Ra.indexOf(t);f>=0&&(u.Ra.splice(f,1),u.Ra.length===0?o=t.ma()?0:1:!u.Va()&&t.ma()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function jI(r,t){const n=Et(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const g of f.Ra)g.pa(o)&&(s=!0);f.Aa=o}}s&&Lm(n)}function qI(r,t,n){const s=Et(r),o=s.queries.get(t);if(o)for(const u of o.Ra)u.onError(n);s.queries.delete(t)}function Lm(r){r.fa.forEach(t=>{t.next()})}var am,Iv;(Iv=am||(am={})).ya="default",Iv.Cache="cache";class HI{constructor(t,n,s){this.query=t,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=s||{}}pa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Qa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ba?this.Da(t)&&(this.wa.next(t),n=!0):this.va(t,this.onlineState)&&(this.Ca(t),n=!0),this.Sa=t,n}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),n=!0),n}va(t,n){if(!t.fromCache||!this.ma())return!0;const s=n!=="Offline";return(!this.options.Fa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(t){t=Qa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==am.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(t){this.key=t}}class UE{constructor(t){this.key=t}}class GI{constructor(t,n){this.query=t,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Vt(),this.mutatedKeys=Vt(),this.Ua=nE(t),this.Ka=new La(this.Ua)}get Wa(){return this.qa}Ga(t,n){const s=n?n.za:new wv,o=n?n.Ka:this.Ka;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,g=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((A,C)=>{const k=o.get(A),q=nh(this.query,C)?C:null,Z=!!k&&this.mutatedKeys.has(k.key),nt=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let $=!1;k&&q?k.data.isEqual(q.data)?Z!==nt&&(s.track({type:3,doc:q}),$=!0):this.ja(k,q)||(s.track({type:2,doc:q}),$=!0,(p&&this.Ua(q,p)>0||y&&this.Ua(q,y)<0)&&(g=!0)):!k&&q?(s.track({type:0,doc:q}),$=!0):k&&!q&&(s.track({type:1,doc:k}),$=!0,(p||y)&&(g=!0)),$&&(q?(f=f.add(q),u=nt?u.add(A):u.delete(A)):(f=f.delete(A),u=u.delete(A)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const A=this.query.limitType==="F"?f.last():f.first();f=f.delete(A.key),u=u.delete(A.key),s.track({type:1,doc:A})}return{Ka:f,za:s,ys:g,mutatedKeys:u}}ja(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const f=t.za.da();f.sort((A,C)=>function(q,Z){const nt=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mt(20277,{Vt:$})}};return nt(q)-nt(Z)}(A.type,C.type)||this.Ua(A.doc,C.doc)),this.Ha(s),o=o!=null&&o;const g=n&&!o?this.Ja():[],p=this.$a.size===0&&this.current&&!o?1:0,y=p!==this.Qa;return this.Qa=p,f.length!==0||y?{snapshot:new Qa(this.query,t.Ka,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ya:g}:{Ya:g}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new wv,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=Vt(),this.Ka.forEach(s=>{this.Za(s.key)&&(this.$a=this.$a.add(s.key))});const n=[];return t.forEach(s=>{this.$a.has(s)||n.push(new UE(s))}),this.$a.forEach(s=>{t.has(s)||n.push(new kE(s))}),n}Xa(t){this.qa=t.Ns,this.$a=Vt();const n=this.Ga(t.documents);return this.applyChanges(n,!0)}eu(){return Qa.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const zm="SyncEngine";class FI{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class KI{constructor(t){this.key=t,this.tu=!1}}class QI{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.nu={},this.ru=new zs(g=>eE(g),eh),this.iu=new Map,this.su=new Set,this.ou=new se(ct.comparator),this._u=new Map,this.au=new Cm,this.uu={},this.cu=new Map,this.lu=Ka.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function YI(r,t,n=!0){const s=qE(r);let o;const u=s.ru.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.eu()):o=await xE(s,t,n,!0),o}async function XI(r,t){const n=qE(r);await xE(n,t,!0,!1)}async function xE(r,t,n,s){const o=await fI(r.localStore,ui(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let g;return s&&(g=await $I(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&DE(r.remoteStore,o),g}async function $I(r,t,n,s,o){r.Pu=(C,k,q)=>async function(nt,$,At,vt){let ht=$.view.Ga(At);ht.ys&&(ht=await vv(nt.localStore,$.query,!1).then(({documents:M})=>$.view.Ga(M,ht)));const Rt=vt&&vt.targetChanges.get($.targetId),pt=vt&&vt.targetMismatches.get($.targetId)!=null,It=$.view.applyChanges(ht,nt.isPrimaryClient,Rt,pt);return Dv(nt,$.targetId,It.Ya),It.snapshot}(r,C,k,q);const u=await vv(r.localStore,t,!0),f=new GI(t,u.Ns),g=f.Ga(u.documents),p=Ml.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(g,r.isPrimaryClient,p);Dv(r,n,y.Ya);const A=new FI(t,n,f);return r.ru.set(t,A),r.iu.has(n)?r.iu.get(n).push(t):r.iu.set(n,[t]),y.snapshot}async function ZI(r,t,n){const s=Et(r),o=s.ru.get(t),u=s.iu.get(o.targetId);if(u.length>1)return s.iu.set(o.targetId,u.filter(f=>!eh(f,t))),void s.ru.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await rm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Mm(s.remoteStore,o.targetId),om(s,o.targetId)}).catch(Ja)):(om(s,o.targetId),await rm(s.localStore,o.targetId,!0))}async function JI(r,t){const n=Et(r),s=n.ru.get(t),o=n.iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Mm(n.remoteStore,s.targetId))}async function WI(r,t,n){const s=a1(r);try{const o=await function(f,g){const p=Et(f),y=be.now(),A=g.reduce((q,Z)=>q.add(Z.key),Vt());let C,k;return p.persistence.runTransaction("Locally write mutations","readwrite",q=>{let Z=Qi(),nt=Vt();return p.Cs.getEntries(q,A).next($=>{Z=$,Z.forEach((At,vt)=>{vt.isValidDocument()||(nt=nt.add(At))})}).next(()=>p.localDocuments.getOverlayedDocuments(q,Z)).next($=>{C=$;const At=[];for(const vt of g){const ht=fR(vt,C.get(vt.key).overlayedDocument);ht!=null&&At.push(new qr(vt.key,ht,QT(ht.value.mapValue),jn.exists(!0)))}return p.mutationQueue.addMutationBatch(q,y,At,g)}).next($=>{k=$;const At=$.applyToLocalDocumentSet(C,nt);return p.documentOverlayCache.saveOverlays(q,$.batchId,At)})}).then(()=>({batchId:k.batchId,changes:rE(C)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,g,p){let y=f.uu[f.currentUser.toKey()];y||(y=new se(wt)),y=y.insert(g,p),f.uu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Pl(s,o.changes),await lh(s.remoteStore)}catch(o){const u=xm(o,"Failed to persist write");n.reject(u)}}async function LE(r,t){const n=Et(r);try{const s=await uI(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n._u.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.tu=!0:o.modifiedDocuments.size>0?Ht(f.tu,14607):o.removedDocuments.size>0&&(Ht(f.tu,42227),f.tu=!1))}),await Pl(n,s,t)}catch(s){await Ja(s)}}function Cv(r,t,n){const s=Et(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ru.forEach((u,f)=>{const g=f.view.ga(t);g.snapshot&&o.push(g.snapshot)}),function(f,g){const p=Et(f);p.onlineState=g;let y=!1;p.queries.forEach((A,C)=>{for(const k of C.Ra)k.ga(g)&&(y=!0)}),y&&Lm(p)}(s.eventManager,t),o.length&&s.nu.Q_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function t1(r,t,n){const s=Et(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s._u.get(t),u=o&&o.key;if(u){let f=new se(ct.comparator);f=f.insert(u,Qe.newNoDocument(u,Tt.min()));const g=Vt().add(u),p=new sh(Tt.min(),new Map,new se(wt),f,g);await LE(s,p),s.ou=s.ou.remove(u),s._u.delete(t),Bm(s)}else await rm(s.localStore,t,!1).then(()=>om(s,t,n)).catch(Ja)}async function e1(r,t){const n=Et(r),s=t.batch.batchId;try{const o=await lI(n.localStore,t);BE(n,s,null),zE(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pl(n,o)}catch(o){await Ja(o)}}async function n1(r,t,n){const s=Et(r);try{const o=await function(f,g){const p=Et(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let A;return p.mutationQueue.lookupMutationBatch(y,g).next(C=>(Ht(C!==null,37113),A=C.keys(),p.mutationQueue.removeMutationBatch(y,C))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,A,g)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,A)).next(()=>p.localDocuments.getDocuments(y,A))})}(s.localStore,t);BE(s,t,n),zE(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Pl(s,o)}catch(o){await Ja(o)}}function zE(r,t){(r.cu.get(t)||[]).forEach(n=>{n.resolve()}),r.cu.delete(t)}function BE(r,t,n){const s=Et(r);let o=s.uu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.uu[s.currentUser.toKey()]=o}}function om(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.iu.get(t))r.ru.delete(s),n&&r.nu.Tu(s,n);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(s=>{r.au.containsKey(s)||jE(r,s)})}function jE(r,t){r.su.delete(t.path.canonicalString());const n=r.ou.get(t);n!==null&&(Mm(r.remoteStore,n),r.ou=r.ou.remove(t),r._u.delete(n),Bm(r))}function Dv(r,t,n){for(const s of n)s instanceof kE?(r.au.addReference(s.key,t),i1(r,s)):s instanceof UE?(it(zm,"Document no longer in limbo: "+s.key),r.au.removeReference(s.key,t),r.au.containsKey(s.key)||jE(r,s.key)):mt(19791,{Iu:s})}function i1(r,t){const n=t.key,s=n.path.canonicalString();r.ou.get(n)||r.su.has(s)||(it(zm,"New document in limbo: "+n),r.su.add(s),Bm(r))}function Bm(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const n=new ct(ie.fromString(t)),s=r.lu.next();r._u.set(s,new KI(n)),r.ou=r.ou.insert(n,s),DE(r.remoteStore,new Cr(ui(tE(n.path)),s,"TargetPurposeLimboResolution",Zc.le))}}async function Pl(r,t,n){const s=Et(r),o=[],u=[],f=[];s.ru.isEmpty()||(s.ru.forEach((g,p)=>{f.push(s.Pu(p,t,n).then(y=>{var A;if((y||n)&&s.isPrimaryClient){const C=y?!y.fromCache:(A=n==null?void 0:n.targetChanges.get(p.targetId))===null||A===void 0?void 0:A.current;s.sharedClientState.updateQueryState(p.targetId,C?"current":"not-current")}if(y){o.push(y);const C=Om.Ps(p.targetId,y);u.push(C)}}))}),await Promise.all(f),s.nu.Q_(o),await async function(p,y){const A=Et(p);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>Q.forEach(y,k=>Q.forEach(k.ls,q=>A.persistence.referenceDelegate.addReference(C,k.targetId,q)).next(()=>Q.forEach(k.hs,q=>A.persistence.referenceDelegate.removeReference(C,k.targetId,q)))))}catch(C){if(!Wa(C))throw C;it(Nm,"Failed to update sequence numbers: "+C)}for(const C of y){const k=C.targetId;if(!C.fromCache){const q=A.Ss.get(k),Z=q.snapshotVersion,nt=q.withLastLimboFreeSnapshotVersion(Z);A.Ss=A.Ss.insert(k,nt)}}}(s.localStore,u))}async function r1(r,t){const n=Et(r);if(!n.currentUser.isEqual(t)){it(zm,"User change. New user:",t.toKey());const s=await wE(n.localStore,t);n.currentUser=t,function(u,f){u.cu.forEach(g=>{g.forEach(p=>{p.reject(new lt(X.CANCELLED,f))})}),u.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Pl(n,s.Ms)}}function s1(r,t){const n=Et(r),s=n._u.get(t);if(s&&s.tu)return Vt().add(s.key);{let o=Vt();const u=n.iu.get(t);if(!u)return o;for(const f of u){const g=n.ru.get(f);o=o.unionWith(g.view.Wa)}return o}}function qE(r){const t=Et(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=LE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=s1.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=t1.bind(null,t),t.nu.Q_=jI.bind(null,t.eventManager),t.nu.Tu=qI.bind(null,t.eventManager),t}function a1(r){const t=Et(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=e1.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=n1.bind(null,t),t}class zc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ah(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,n){return null}fu(t,n){return null}Vu(t){return oI(this.persistence,new rI,t.initialUser,this.serializer)}Ru(t){return new bE(Dm.Ei,this.serializer)}Au(t){return new mI}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zc.provider={build:()=>new zc};class o1 extends zc{constructor(t){super(),this.cacheSizeBytes=t}mu(t,n){Ht(this.persistence.referenceDelegate instanceof xc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new HR(s,t.asyncQueue,n)}Ru(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new bE(s=>xc.Ei(s,n),this.serializer)}}class lm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=r1.bind(null,this.syncEngine),await UI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new LI}()}createDatastore(t){const n=ah(t.databaseInfo.databaseId),s=function(u){return new vI(u)}(t.databaseInfo);return function(u,f,g,p){return new SI(u,f,g,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,g){return new wI(s,o,u,f,g)}(this.localStore,this.datastore,t.asyncQueue,n=>Cv(this.syncEngine,n,0),function(){return Av.C()?new Av:new gI}())}createSyncEngine(t,n){return function(o,u,f,g,p,y,A){const C=new QI(o,u,f,g,p,y);return A&&(C.hu=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=Et(o);it(Ms,"RemoteStore shutting down."),u.aa.add(5),await Vl(u),u.ca.shutdown(),u.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}lm.provider={build:()=>new lm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Ki("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="FirestoreClient";class u1{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Ke.UNAUTHENTICATED,this.clientId=xT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{it(Br,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(it(Br,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=xm(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Pd(r,t){r.asyncQueue.verifyOperationInProgress(),it(Br,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await wE(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function Ov(r,t){r.asyncQueue.verifyOperationInProgress();const n=await c1(r);it(Br,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>bv(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>bv(t.remoteStore,o)),r._onlineComponents=t}async function c1(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(Br,"Using user provided OfflineComponentProvider");try{await Pd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;qa("Error using user provided cache. Falling back to memory cache: "+n),await Pd(r,new zc)}}else it(Br,"Using default OfflineComponentProvider"),await Pd(r,new o1(void 0));return r._offlineComponents}async function HE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(Br,"Using user provided OnlineComponentProvider"),await Ov(r,r._uninitializedComponentsProvider._online)):(it(Br,"Using default OnlineComponentProvider"),await Ov(r,new lm))),r._onlineComponents}function h1(r){return HE(r).then(t=>t.syncEngine)}async function f1(r){const t=await HE(r),n=t.eventManager;return n.onListen=YI.bind(null,t.syncEngine),n.onUnlisten=ZI.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=XI.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=JI.bind(null,t.syncEngine),n}function d1(r,t,n={}){const s=new Mr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,g,p,y){const A=new l1({next:k=>{A.yu(),f.enqueueAndForget(()=>BI(u,C)),k.fromCache&&p.source==="server"?y.reject(new lt(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(k)},error:k=>y.reject(k)}),C=new HI(g,A,{includeMetadataChanges:!0,Fa:!0});return zI(u,C)}(await f1(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(r,t,n){if(!n)throw new lt(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function m1(r,t,n,s){if(t===!0&&s===!0)throw new lt(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Mv(r){if(!ct.isDocumentKey(r))throw new lt(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Vv(r){if(ct.isDocumentKey(r))throw new lt(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function jm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":mt(12329,{type:typeof r})}function Vs(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new lt(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jm(r);throw new lt(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="firestore.googleapis.com",Pv=!0;class kv{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new lt(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=KE,this.ssl=Pv}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:Pv;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=SE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<jR)throw new lt(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}m1("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GE((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new lt(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class uh{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kv(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new yw;switch(s.type){case"firstParty":return new Ew(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new lt(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Nv.get(n);s&&(it("ComponentProvider","Removing Datastore"),Nv.delete(n),s.terminate())}(this),Promise.resolve()}}function g1(r,t,n,s={}){var o;const u=(r=Vs(r,uh))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;u.host!==KE&&u.host!==g&&qa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:g,ssl:!1,emulatorOptions:s});if(!Pr(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,A;if(typeof s.mockUserToken=="string")y=s.mockUserToken,A=Ke.MOCK_USER;else{y=FS(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new lt(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Ke(C)}r._authCredentials=new _w(new kT(y,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ch(this.firestore,t,this._query)}}class Mn{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Mn(this.firestore,t,this._key)}}class Vr extends ch{constructor(t,n,s){super(t,n,tE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Mn(this.firestore,null,new ct(t))}withConverter(t){return new Vr(this.firestore,t,this._path)}}function kd(r,t,...n){if(r=Ve(r),FE("collection","path",t),r instanceof uh){const s=ie.fromString(t,...n);return Vv(s),new Vr(r,null,s)}{if(!(r instanceof Mn||r instanceof Vr))throw new lt(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return Vv(s),new Vr(r.firestore,null,s)}}function Ec(r,t,...n){if(r=Ve(r),arguments.length===1&&(t=xT.newId()),FE("doc","path",t),r instanceof uh){const s=ie.fromString(t,...n);return Mv(s),new Mn(r,null,new ct(s))}{if(!(r instanceof Mn||r instanceof Vr))throw new lt(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(ie.fromString(t,...n));return Mv(s),new Mn(r.firestore,r instanceof Vr?r.converter:null,new ct(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="AsyncQueue";class xv{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new IE(this,"async_queue_retry"),this.ju=()=>{const s=Vd();s&&it(Uv,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=t;const n=Vd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const n=Vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Mr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!Wa(t))throw t;it(Uv,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const n=this.Hu.then(()=>(this.Wu=!0,t().catch(s=>{throw this.Ku=s,this.Wu=!1,Ki("INTERNAL UNHANDLED ERROR: ",Lv(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=n,n}enqueueAfterDelay(t,n,s){this.Ju(),this.zu.indexOf(t)>-1&&(n=0);const o=Um.createAndSchedule(this,t,n,s,u=>this.Xu(u));return this.Uu.push(o),o}Ju(){this.Ku&&mt(47125,{ec:Lv(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const n of this.Uu)if(n.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const n=this.Uu.indexOf(t);this.Uu.splice(n,1)}}function Lv(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class kl extends uh{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new xv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xv(t),this._firestoreClient=void 0,await t}}}function p1(r,t){const n=typeof r=="object"?r:pm(),s=typeof r=="string"?r:Oc,o=Ls(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=HS("firestore");u&&g1(o,...u)}return o}function QE(r){if(r._terminated)throw new lt(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||y1(r),r._firestoreClient}function y1(r){var t,n,s;const o=r._freezeSettings(),u=function(g,p,y,A){return new Uw(g,p,y,A.host,A.ssl,A.experimentalForceLongPolling,A.experimentalAutoDetectLongPolling,GE(A.experimentalLongPollingOptions),A.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new u1(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(g){const p=g==null?void 0:g._online.build();return{_offline:g==null?void 0:g._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ya(je.fromBase64String(t))}catch(n){throw new lt(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ya(je.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new lt(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new lt(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new lt(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wt(this._lat,t._lat)||wt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=/^__.*__$/;class v1{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new qr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Nl(t,this.data,n,this.fieldTransforms)}}class YE{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new qr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function XE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mt(40011,{oc:r})}}class Fm{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this._c(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new Fm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o.lc(t),o}hc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o._c(),o}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return Bc(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(XE(this.oc)&&_1.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class T1{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ah(t)}dc(t,n,s,o=!1){return new Fm({oc:t,methodName:n,Ec:s,path:Be.emptyPath(),cc:!1,Ic:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $E(r){const t=r._freezeSettings(),n=ah(r._databaseId);return new T1(r._databaseId,!!t.ignoreUndefinedProperties,n)}function E1(r,t,n,s,o,u={}){const f=r.dc(u.merge||u.mergeFields?2:0,t,n,o);Km("Data must be an object, but it was:",f,s);const g=ZE(s,f);let p,y;if(u.merge)p=new pn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const A=[];for(const C of u.mergeFields){const k=um(t,C,n);if(!f.contains(k))throw new lt(X.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);WE(A,k)||A.push(k)}p=new pn(A),y=f.fieldTransforms.filter(C=>p.covers(C.field))}else p=null,y=f.fieldTransforms;return new v1(new sn(g),p,y)}class fh extends qm{_toFieldTransform(t){if(t.oc!==2)throw t.oc===1?t.Tc(`${this._methodName}() can only appear at the top level of your update data`):t.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof fh}}function A1(r,t,n,s){const o=r.dc(1,t,n);Km("Data must be an object, but it was:",o,s);const u=[],f=sn.empty();jr(s,(p,y)=>{const A=Qm(t,p,n);y=Ve(y);const C=o.hc(A);if(y instanceof fh)u.push(A);else{const k=dh(y,C);k!=null&&(u.push(A),f.set(A,k))}});const g=new pn(u);return new YE(f,g,o.fieldTransforms)}function S1(r,t,n,s,o,u){const f=r.dc(1,t,n),g=[um(t,s,n)],p=[o];if(u.length%2!=0)throw new lt(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<u.length;k+=2)g.push(um(t,u[k])),p.push(u[k+1]);const y=[],A=sn.empty();for(let k=g.length-1;k>=0;--k)if(!WE(y,g[k])){const q=g[k];let Z=p[k];Z=Ve(Z);const nt=f.hc(q);if(Z instanceof fh)y.push(q);else{const $=dh(Z,nt);$!=null&&(y.push(q),A.set(q,$))}}const C=new pn(y);return new YE(A,C,f.fieldTransforms)}function dh(r,t){if(JE(r=Ve(r)))return Km("Unsupported field value:",t,r),ZE(r,t);if(r instanceof qm)return function(s,o){if(!XE(o.oc))throw o.Tc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Tc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const g of s){let p=dh(g,o.Pc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=be.fromDate(s);return{timestampValue:Uc(o.serializer,u)}}if(s instanceof be){const u=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Uc(o.serializer,u)}}if(s instanceof Hm)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ya)return{bytesValue:pE(o.serializer,s._byteString)};if(s instanceof Mn){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Tc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Im(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Gm)return function(f,g){return{mapValue:{fields:{[FT]:{stringValue:KT},[Nc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw g.Tc("VectorValues must only contain numeric values.");return Sm(g.serializer,y)})}}}}}}(s,o);throw o.Tc(`Unsupported field value: ${jm(s)}`)}(r,t)}function ZE(r,t){const n={};return zT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):jr(r,(s,o)=>{const u=dh(o,t.uc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function JE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof Hm||r instanceof Ya||r instanceof Mn||r instanceof qm||r instanceof Gm)}function Km(r,t,n){if(!JE(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=jm(n);throw s==="an object"?t.Tc(r+" a custom object"):t.Tc(r+" "+s)}}function um(r,t,n){if((t=Ve(t))instanceof hh)return t._internalPath;if(typeof t=="string")return Qm(r,t);throw Bc("Field path arguments must be of type string or ",r,!1,void 0,n)}const b1=new RegExp("[~\\*/\\[\\]]");function Qm(r,t,n){if(t.search(b1)>=0)throw Bc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new hh(...t.split("."))._internalPath}catch{throw Bc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Bc(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new lt(X.INVALID_ARGUMENT,g+r+p)}function WE(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new w1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(e0("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class w1 extends t0{data(){return super.data()}}function e0(r,t){return typeof t=="string"?Qm(r,t):t instanceof hh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new lt(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I1{convertValue(t,n="none"){switch(Lr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(xr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw mt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return jr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Nc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new Gm(u)}convertGeoPoint(t){return new Hm(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Wc(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bl(t));default:return null}}convertTimestamp(t){const n=Ur(t);return new be(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=ie.fromString(t);Ht(AE(s),9688,{name:t});const o=new wl(s.get(1),s.get(3)),u=new ct(s.popFirst(5));return o.isEqual(n)||Ki(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class D1 extends t0{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(e0("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ac extends D1{data(t={}){return super.data(t)}}class O1{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new mc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ac(this._firestore,this._userDataWriter,s.key,s,new mc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new lt(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(g=>{const p=new Ac(o._firestore,o._userDataWriter,g.doc.key,g.doc,new mc(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);return g.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(g=>u||g.type!==3).map(g=>{const p=new Ac(o._firestore,o._userDataWriter,g.doc.key,g.doc,new mc(o._snapshot.mutatedKeys.has(g.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,A=-1;return g.type!==0&&(y=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),A=f.indexOf(g.doc.key)),{type:N1(g.type),doc:p,oldIndex:y,newIndex:A}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function N1(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mt(61501,{type:r})}}class M1 extends I1{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ya(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Mn(this.firestore,null,n)}}function zv(r){r=Vs(r,ch);const t=Vs(r.firestore,kl),n=QE(t),s=new M1(t);return R1(r._query),d1(n,r._query).then(o=>new O1(t,s,r,o))}function V1(r,t,n,...s){r=Vs(r,Mn);const o=Vs(r.firestore,kl),u=$E(o);let f;return f=typeof(t=Ve(t))=="string"||t instanceof hh?S1(u,"updateDoc",r._key,t,n,s):A1(u,"updateDoc",r._key,t),Ym(o,[f.toMutation(r._key,jn.exists(!0))])}function Bv(r){return Ym(Vs(r.firestore,kl),[new bm(r._key,jn.none())])}function P1(r,t){const n=Vs(r.firestore,kl),s=Ec(r),o=C1(r.converter,t);return Ym(n,[E1($E(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,jn.exists(!1))]).then(()=>s)}function Ym(r,t){return function(s,o){const u=new Mr;return s.asyncQueue.enqueueAndForget(async()=>WI(await h1(s),o,u)),u.promise}(QE(r),t)}(function(t,n=!0){(function(o){Za=o})($a),fi(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),g=new kl(new vw(s.getProvider("auth-internal")),new Aw(f,s.getProvider("app-check-internal")),function(y,A){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new lt(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(y.options.projectId,A)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),g._setSettings(u),g},"PUBLIC").setMultipleInstances(!0)),Nn(H_,G_,t),Nn(H_,G_,"esm2017")})();function Xm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function n0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=n0,i0=new xs("auth","Firebase",n0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=new $c("@firebase/auth");function U1(r,...t){jc.logLevel<=Mt.WARN&&jc.warn(`Auth (${$a}): ${r}`,...t)}function Sc(r,...t){jc.logLevel<=Mt.ERROR&&jc.error(`Auth (${$a}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(r,...t){throw Zm(r,...t)}function qn(r,...t){return Zm(r,...t)}function $m(r,t,n){const s=Object.assign(Object.assign({},k1()),{[t]:n});return new xs("auth","Firebase",s).create(t,{appName:r.name})}function Os(r){return $m(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function x1(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&gi(r,"argument-error"),$m(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zm(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return i0.create(r,...t)}function yt(r,t,...n){if(!r)throw Zm(t,...n)}function Hi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Sc(t),new Error(t)}function Yi(r,t){r||Hi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function L1(){return jv()==="http:"||jv()==="https:"}function jv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L1()||vT()||"connection"in navigator)?navigator.onLine:!0}function B1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yi(n>t,"Short delay should be less than long delay!"),this.isMobile=KS()||XS()}get(){return z1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(r,t){Yi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],H1=new Ul(3e4,6e4);function Wm(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function eo(r,t,n,s,o={}){return s0(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const g=Ol(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return YS()||(y.referrerPolicy="no-referrer"),r0.fetch()(await a0(r,r.config.apiHost,n,g),y)})}async function s0(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},j1),t);try{const o=new F1(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw gc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[p,y]=g.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw gc(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw gc(r,"user-disabled",f);const A=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw $m(r,A,y);gi(r,A)}}catch(o){if(o instanceof Gn)throw o;gi(r,"network-request-failed",{message:String(o)})}}async function G1(r,t,n,s,o={}){const u=await eo(r,t,n,s,o);return"mfaPendingCredential"in u&&gi(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function a0(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Jm(r.config,o):`${r.config.apiScheme}://${o}`;return q1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class F1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(qn(this.auth,"network-request-failed")),H1.get())})}}function gc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=qn(r,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(r,t){return eo(r,"POST","/v1/accounts:delete",t)}async function qc(r,t){return eo(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Q1(r,t=!1){const n=Ve(r),s=await n.getIdToken(t),o=tg(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Tl(Ud(o.auth_time)),issuedAtTime:Tl(Ud(o.iat)),expirationTime:Tl(Ud(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Ud(r){return Number(r)*1e3}function tg(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const o=gT(n);return o?JSON.parse(o):(Sc("Failed to decode base64 JWT payload"),null)}catch(o){return Sc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function qv(r){const t=tg(r);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Gn&&Y1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Y1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tl(this.lastLoginAt),this.creationTime=Tl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Dl(r,qc(n,{idToken:s}));yt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?o0(u.providerUserInfo):[],g=Z1(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(g!=null&&g.length),A=p?y:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:g,metadata:new hm(u.createdAt,u.lastLoginAt),isAnonymous:A};Object.assign(r,C)}async function $1(r){const t=Ve(r);await Hc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Z1(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function o0(r){return r.map(t=>{var{providerId:n}=t,s=Xm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(r,t){const n=await s0(r,{},async()=>{const s=Ol({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await a0(r,o,"/v1/token",`key=${u}`),g=await r._getAdditionalHeaders();return g["Content-Type"]="application/x-www-form-urlencoded",r0.fetch()(f,{method:"POST",headers:g,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function W1(r,t){return eo(r,"POST","/v2/accounts:revokeToken",Wm(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=qv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await J1(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new za;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(yt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return Hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(r,t){yt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Xm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new hm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Dl(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Q1(this,t)}reload(){return $1(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Hc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(Os(this.auth));const t=await this.getIdToken();return await Dl(this,K1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,g,p,y,A;const C=(s=n.displayName)!==null&&s!==void 0?s:void 0,k=(o=n.email)!==null&&o!==void 0?o:void 0,q=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,Z=(f=n.photoURL)!==null&&f!==void 0?f:void 0,nt=(g=n.tenantId)!==null&&g!==void 0?g:void 0,$=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,At=(y=n.createdAt)!==null&&y!==void 0?y:void 0,vt=(A=n.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:ht,emailVerified:Rt,isAnonymous:pt,providerData:It,stsTokenManager:M}=n;yt(ht&&M,t,"internal-error");const S=za.fromJSON(this.name,M);yt(typeof ht=="string",t,"internal-error"),br(C,t.name),br(k,t.name),yt(typeof Rt=="boolean",t,"internal-error"),yt(typeof pt=="boolean",t,"internal-error"),br(q,t.name),br(Z,t.name),br(nt,t.name),br($,t.name),br(At,t.name),br(vt,t.name);const R=new Bn({uid:ht,auth:t,email:k,emailVerified:Rt,displayName:C,isAnonymous:pt,photoURL:Z,phoneNumber:q,tenantId:nt,stsTokenManager:S,createdAt:At,lastLoginAt:vt});return It&&Array.isArray(It)&&(R.providerData=It.map(N=>Object.assign({},N))),$&&(R._redirectEventId=$),R}static async _fromIdTokenResponse(t,n,s=!1){const o=new za;o.updateFromServerResponse(n);const u=new Bn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Hc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?o0(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),g=new za;g.updateFromIdToken(s);const p=new Bn({uid:o.localId,auth:t,stsTokenManager:g,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new hm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function Gi(r){Yi(r instanceof Function,"Expected a class definition");let t=Hv.get(r);return t?(Yi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Hv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}l0.type="NONE";const Gv=l0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ba{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=bc(this.userKey,o.apiKey,u),this.fullPersistenceKey=bc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await qc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ba(Gi(Gv),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Gi(Gv);const f=bc(s,t.config.apiKey,t.name);let g=null;for(const y of n)try{const A=await y._get(f);if(A){let C;if(typeof A=="string"){const k=await qc(t,{idToken:A}).catch(()=>{});if(!k)break;C=await Bn._fromGetAccountInfoResponse(t,k,A)}else C=Bn._fromJSON(t,A);y!==u&&(g=C),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ba(u,t,s):(u=p[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ba(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(f0(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(u0(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(m0(t))return"Blackberry";if(g0(t))return"Webos";if(c0(t))return"Safari";if((t.includes("chrome/")||h0(t))&&!t.includes("edge/"))return"Chrome";if(d0(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function u0(r=Ye()){return/firefox\//i.test(r)}function c0(r=Ye()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function h0(r=Ye()){return/crios\//i.test(r)}function f0(r=Ye()){return/iemobile/i.test(r)}function d0(r=Ye()){return/android/i.test(r)}function m0(r=Ye()){return/blackberry/i.test(r)}function g0(r=Ye()){return/webos/i.test(r)}function eg(r=Ye()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function tC(r=Ye()){var t;return eg(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function eC(){return $S()&&document.documentMode===10}function p0(r=Ye()){return eg(r)||d0(r)||g0(r)||m0(r)||/windows phone/i.test(r)||f0(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(r,t=[]){let n;switch(r){case"Browser":n=Fv(Ye());break;case"Worker":n=`${Fv(Ye())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$a}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,g)=>{try{const p=t(u);f(p)}catch(p){g(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(r,t={}){return eo(r,"GET","/v2/passwordPolicy",Wm(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=6;class sC{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:rC,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,g;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(g=p.containsNonAlphanumericCharacter)!==null&&g!==void 0?g:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=i0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ba.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await qc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,g=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===g)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Hc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=B1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(zn(this.app))return Promise.reject(Os(this));const n=t?Ve(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(Os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return zn(this.app)?Promise.reject(Os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await iC(this),n=new sC(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new xs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await W1(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gi(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await Ba.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=y0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&U1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mh(r){return Ve(r)}class Kv{constructor(t){this.auth=t,this.observer=null,this.addObserver=ib(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ng={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oC(r){ng=r}function lC(r){return ng.loadJS(r)}function uC(){return ng.gapiScript}function cC(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(r,t){const n=Ls(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Pr(u,t??{}))return o;gi(o,"already-initialized")}return n.initialize({options:t})}function fC(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function dC(r,t,n){const s=mh(r);yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=_0(t),{host:f,port:g}=mC(t),p=g===null?"":`:${g}`,y={url:`${u}//${f}${p}/`},A=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){yt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),yt(Pr(y,s.config.emulator)&&Pr(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,gC()}function _0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function mC(r){const t=_0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Qv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Qv(f)}}}function Qv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function gC(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Hi("not implemented")}_getIdTokenResponse(t){return Hi("not implemented")}_linkToIdToken(t,n){return Hi("not implemented")}_getReauthenticationResolver(t){return Hi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(r,t){return G1(r,"POST","/v1/accounts:signInWithIdp",Wm(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="http://localhost";class Ps extends v0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ps(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):gi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Xm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new Ps(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return ja(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,ja(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ja(t,n)}buildRequest(){const t={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ol(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends ig{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends xl{constructor(){super("facebook.com")}static credential(t){return Ps._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wr.credentialFromTaggedObject(t)}static credentialFromError(t){return wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wr.credential(t.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends xl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ps._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return qi.credentialFromTaggedObject(t)}static credentialFromError(t){return qi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return qi.credential(n,s)}catch{return null}}}qi.GOOGLE_SIGN_IN_METHOD="google.com";qi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends xl{constructor(){super("github.com")}static credential(t){return Ps._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rr.credential(t.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends xl{constructor(){super("twitter.com")}static credential(t,n){return Ps._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Ir.credential(n,s)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Bn._fromIdTokenResponse(t,s,o),f=Yv(s);return new Xa({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=Yv(s);return new Xa({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function Yv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc extends Gn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Gc(t,n,s,o)}}function T0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Gc._fromErrorAndOperation(r,u,t,s):u})}async function yC(r,t,n=!1){const s=await Dl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Xa._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(r,t,n=!1){const{auth:s}=r;if(zn(s.app))return Promise.reject(Os(s));const o="reauthenticate";try{const u=await Dl(r,T0(s,o,t,r),n);yt(u.idToken,s,"internal-error");const f=tg(u.idToken);yt(f,s,"internal-error");const{sub:g}=f;return yt(r.uid===g,s,"user-mismatch"),Xa._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&gi(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(r,t,n=!1){if(zn(r.app))return Promise.reject(Os(r));const s="signIn",o=await T0(r,s,t),u=await Xa._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}function TC(r,t,n,s){return Ve(r).onIdTokenChanged(t,n,s)}function EC(r,t,n){return Ve(r).beforeAuthStateChanged(t,n)}function AC(r,t,n,s){return Ve(r).onAuthStateChanged(t,n,s)}function SC(r){return Ve(r).signOut()}const Fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fc,"1"),this.storage.removeItem(Fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=1e3,wC=10;class A0 extends E0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p0(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);eC()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,wC):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},bC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}A0.type="LOCAL";const RC=A0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0 extends E0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}S0.type="SESSION";const b0=S0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new gh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const g=Array.from(f).map(async y=>y(n.origin,u)),p=await IC(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((g,p)=>{const y=rg("",20);o.port1.start();const A=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(C){const k=C;if(k.data.eventId===y)switch(k.data.status){case"ack":clearTimeout(A),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(k.data.response);break;default:clearTimeout(A),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(){return window}function DC(r){hi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(){return typeof hi().WorkerGlobalScope<"u"&&typeof hi().importScripts=="function"}async function OC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function MC(){return w0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="firebaseLocalStorageDb",VC=1,Kc="firebaseLocalStorage",I0="fbase_key";class Ll{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ph(r,t){return r.transaction([Kc],t?"readwrite":"readonly").objectStore(Kc)}function PC(){const r=indexedDB.deleteDatabase(R0);return new Ll(r).toPromise()}function fm(){const r=indexedDB.open(R0,VC);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Kc,{keyPath:I0})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Kc)?t(s):(s.close(),await PC(),t(await fm()))})})}async function Xv(r,t,n){const s=ph(r,!0).put({[I0]:t,value:n});return new Ll(s).toPromise()}async function kC(r,t){const n=ph(r,!1).get(t),s=await new Ll(n).toPromise();return s===void 0?null:s.value}function $v(r,t){const n=ph(r,!0).delete(t);return new Ll(n).toPromise()}const UC=800,xC=3;class C0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>xC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(MC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await OC(),!this.activeServiceWorker)return;this.sender=new CC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||NC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fm();return await Xv(t,Fc,"1"),await $v(t,Fc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>kC(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$v(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=ph(o,!1).getAll();return new Ll(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C0.type="LOCAL";const LC=C0;new Ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(r,t){return t?Gi(t):(yt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends v0{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ja(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ja(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ja(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function zC(r){return vC(r.auth,new sg(r),r.bypassAuthState)}function BC(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),_C(n,new sg(r),r.bypassAuthState)}async function jC(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),yC(n,new sg(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return zC;case"linkViaPopup":case"linkViaRedirect":return jC;case"reauthViaPopup":case"reauthViaRedirect":return BC;default:gi(this.auth,"internal-error")}}resolve(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=new Ul(2e3,1e4);async function HC(r,t,n){if(zn(r.app))return Promise.reject(qn(r,"operation-not-supported-in-this-environment"));const s=mh(r);x1(r,t,ig);const o=D0(s,n);return new Cs(s,"signInViaPopup",t,o).executeNotNull()}class Cs extends O0{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){Yi(this.filter.length===1,"Popup operations only handle one event");const t=rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,qC.get())};t()}}Cs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="pendingRedirect",wc=new Map;class FC extends O0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=wc.get(this.auth._key());if(!t){try{const s=await KC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}wc.set(this.auth._key(),t)}return this.bypassAuthState||wc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(r,t){const n=XC(t),s=YC(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function QC(r,t){wc.set(r._key(),t)}function YC(r){return Gi(r._redirectPersistence)}function XC(r){return bc(GC,r.config.apiKey,r.name)}async function $C(r,t,n=!1){if(zn(r.app))return Promise.reject(Os(r));const s=mh(r),o=D0(s,t),f=await new FC(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=10*60*1e3;class JC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!WC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!N0(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ZC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(t))}saveEventToCache(t){this.cachedEventUids.add(Zv(t)),this.lastProcessedEventTime=Date.now()}}function Zv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function N0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function WC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t2(r,t={}){return eo(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n2=/^https?/;async function i2(r){if(r.config.emulator)return;const{authorizedDomains:t}=await t2(r);for(const n of t)try{if(r2(n))return}catch{}gi(r,"unauthorized-domain")}function r2(r){const t=cm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!n2.test(n))return!1;if(e2.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Ul(3e4,6e4);function Jv(){const r=hi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function a2(r){return new Promise((t,n)=>{var s,o,u;function f(){Jv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jv(),n(qn(r,"network-request-failed"))},timeout:s2.get()})}if(!((o=(s=hi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=hi().gapi)===null||u===void 0)&&u.load)f();else{const g=cC("iframefcb");return hi()[g]=()=>{gapi.load?f():n(qn(r,"network-request-failed"))},lC(`${uC()}?onload=${g}`).catch(p=>n(p))}}).catch(t=>{throw Rc=null,t})}let Rc=null;function o2(r){return Rc=Rc||a2(r),Rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l2=new Ul(5e3,15e3),u2="__/auth/iframe",c2="emulator/auth/iframe",h2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d2(r){const t=r.config;yt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Jm(t,c2):`https://${r.config.authDomain}/${u2}`,s={apiKey:t.apiKey,appName:r.name,v:$a},o=f2.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Ol(s).slice(1)}`}async function m2(r){const t=await o2(r),n=hi().gapi;return yt(n,r,"internal-error"),t.open({where:document.body,url:d2(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h2,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=qn(r,"network-request-failed"),g=hi().setTimeout(()=>{u(f)},l2.get());function p(){hi().clearTimeout(g),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},p2=500,y2=600,_2="_blank",v2="http://localhost";class Wv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T2(r,t,n,s=p2,o=y2){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const p=Object.assign(Object.assign({},g2),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Ye().toLowerCase();n&&(g=h0(y)?_2:n),u0(y)&&(t=t||v2,p.scrollbars="yes");const A=Object.entries(p).reduce((k,[q,Z])=>`${k}${q}=${Z},`,"");if(tC(y)&&g!=="_self")return E2(t||"",g),new Wv(null);const C=window.open(t||"",g,A);yt(C,r,"popup-blocked");try{C.focus()}catch{}return new Wv(C)}function E2(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2="__/auth/handler",S2="emulator/auth/handler",b2=encodeURIComponent("fac");async function tT(r,t,n,s,o,u){yt(r.config.authDomain,r,"auth-domain-config-required"),yt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:$a,eventId:o};if(t instanceof ig){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",nb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,C]of Object.entries({}))f[A]=C}if(t instanceof xl){const A=t.getScopes().filter(C=>C!=="");A.length>0&&(f.scopes=A.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const A of Object.keys(g))g[A]===void 0&&delete g[A];const p=await r._getAppCheckToken(),y=p?`#${b2}=${encodeURIComponent(p)}`:"";return`${w2(r)}?${Ol(g).slice(1)}${y}`}function w2({config:r}){return r.emulator?Jm(r,S2):`https://${r.authDomain}/${A2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="webStorageSupport";class R2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=b0,this._completeRedirectFn=$C,this._overrideRedirectResult=QC}async _openPopup(t,n,s,o){var u;Yi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await tT(t,n,s,cm(),o);return T2(t,f,rg())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await tT(t,n,s,cm(),o);return DC(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Yi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await m2(t),s=new JC(t);return n.register("authEvent",o=>(yt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(xd,{type:xd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[xd];f!==void 0&&n(!!f),gi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return p0()||c0()||eg()}}const I2=R2;var eT="@firebase/auth",nT="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O2(r){fi(new Hn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:y0(r)},y=new aC(s,o,u,p);return fC(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),fi(new Hn("auth-internal",t=>{const n=mh(t.getProvider("auth").getImmediate());return(s=>new C2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(eT,nT,D2(r)),Nn(eT,nT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=5*60,M2=_T("authIdTokenMaxAge")||N2;let iT=null;const V2=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>M2)return;const o=n==null?void 0:n.token;iT!==o&&(iT=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function P2(r=pm()){const t=Ls(r,"auth");if(t.isInitialized())return t.getImmediate();const n=hC(r,{popupRedirectResolver:I2,persistence:[LC,RC,b0]}),s=_T("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=V2(u.toString());EC(n,f,()=>f(n.currentUser)),TC(n,g=>f(g))}}const o=pT("auth");return o&&dC(n,`http://${o}`),n}function k2(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}oC({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=qn("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",k2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O2("Browser");var U2="firebase",x2="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(U2,x2,"app");const M0="@firebase/installations",ag="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=1e4,P0=`w:${ag}`,k0="FIS_v2",L2="https://firebaseinstallations.googleapis.com/v1",z2=60*60*1e3,B2="installations",j2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ks=new xs(B2,j2,q2);function U0(r){return r instanceof Gn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0({projectId:r}){return`${L2}/projects/${r}/installations`}function L0(r){return{token:r.token,requestStatus:2,expiresIn:G2(r.expiresIn),creationTime:Date.now()}}async function z0(r,t){const s=(await t.json()).error;return ks.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function B0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function H2(r,{refreshToken:t}){const n=B0(r);return n.append("Authorization",F2(t)),n}async function j0(r){const t=await r();return t.status>=500&&t.status<600?r():t}function G2(r){return Number(r.replace("s","000"))}function F2(r){return`${k0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K2({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=x0(r),o=B0(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:k0,appId:r.appId,sdkVersion:P0},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await j0(()=>fetch(s,g));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:L0(y.authToken)}}else throw await z0("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=/^[cdef][\w-]{21}$/,dm="";function X2(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=$2(r);return Y2.test(n)?n:dm}catch{return dm}}function $2(r){return Q2(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Map;function G0(r,t){const n=yh(r);F0(n,t),Z2(n,t)}function F0(r,t){const n=H0.get(r);if(n)for(const s of n)s(t)}function Z2(r,t){const n=J2();n&&n.postMessage({key:r,fid:t}),W2()}let Ds=null;function J2(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=r=>{F0(r.data.key,r.data.fid)}),Ds}function W2(){H0.size===0&&Ds&&(Ds.close(),Ds=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD="firebase-installations-database",eD=1,Us="firebase-installations-store";let Ld=null;function og(){return Ld||(Ld=bT(tD,eD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Us)}}})),Ld}async function Qc(r,t){const n=yh(r),o=(await og()).transaction(Us,"readwrite"),u=o.objectStore(Us),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&G0(r,t.fid),t}async function K0(r){const t=yh(r),s=(await og()).transaction(Us,"readwrite");await s.objectStore(Us).delete(t),await s.done}async function _h(r,t){const n=yh(r),o=(await og()).transaction(Us,"readwrite"),u=o.objectStore(Us),f=await u.get(n),g=t(f);return g===void 0?await u.delete(n):await u.put(g,n),await o.done,g&&(!f||f.fid!==g.fid)&&G0(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(r){let t;const n=await _h(r.appConfig,s=>{const o=nD(s),u=iD(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===dm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function nD(r){const t=r||{fid:X2(),registrationStatus:0};return Q0(t)}function iD(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ks.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=rD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:sD(r)}:{installationEntry:t}}async function rD(r,t){try{const n=await K2(r,t);return Qc(r.appConfig,n)}catch(n){throw U0(n)&&n.customData.serverCode===409?await K0(r.appConfig):await Qc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function sD(r){let t=await rT(r.appConfig);for(;t.registrationStatus===1;)await q0(100),t=await rT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await lg(r);return s||n}return t}function rT(r){return _h(r,t=>{if(!t)throw ks.create("installation-not-found");return Q0(t)})}function Q0(r){return aD(r)?{fid:r.fid,registrationStatus:0}:r}function aD(r){return r.registrationStatus===1&&r.registrationTime+V0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oD({appConfig:r,heartbeatServiceProvider:t},n){const s=lD(r,n),o=H2(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:P0,appId:r.appId}},g={method:"POST",headers:o,body:JSON.stringify(f)},p=await j0(()=>fetch(s,g));if(p.ok){const y=await p.json();return L0(y)}else throw await z0("Generate Auth Token",p)}function lD(r,{fid:t}){return`${x0(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(r,t=!1){let n;const s=await _h(r.appConfig,u=>{if(!Y0(u))throw ks.create("not-registered");const f=u.authToken;if(!t&&hD(f))return u;if(f.requestStatus===1)return n=uD(r,t),u;{if(!navigator.onLine)throw ks.create("app-offline");const g=dD(u);return n=cD(r,g),g}});return n?await n:s.authToken}async function uD(r,t){let n=await sT(r.appConfig);for(;n.authToken.requestStatus===1;)await q0(100),n=await sT(r.appConfig);const s=n.authToken;return s.requestStatus===0?ug(r,t):s}function sT(r){return _h(r,t=>{if(!Y0(t))throw ks.create("not-registered");const n=t.authToken;return mD(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function cD(r,t){try{const n=await oD(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Qc(r.appConfig,s),n}catch(n){if(U0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await K0(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Qc(r.appConfig,s)}throw n}}function Y0(r){return r!==void 0&&r.registrationStatus===2}function hD(r){return r.requestStatus===2&&!fD(r)}function fD(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+z2}function dD(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function mD(r){return r.requestStatus===1&&r.requestTime+V0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(r){const t=r,{installationEntry:n,registrationPromise:s}=await lg(t);return s?s.catch(console.error):ug(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(r,t=!1){const n=r;return await yD(n),(await ug(n,t)).token}async function yD(r){const{registrationPromise:t}=await lg(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(r){if(!r||!r.options)throw zd("App Configuration");if(!r.name)throw zd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw zd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function zd(r){return ks.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="installations",vD="installations-internal",TD=r=>{const t=r.getProvider("app").getImmediate(),n=_D(t),s=Ls(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},ED=r=>{const t=r.getProvider("app").getImmediate(),n=Ls(t,X0).getImmediate();return{getId:()=>gD(n),getToken:o=>pD(n,o)}};function AD(){fi(new Hn(X0,TD,"PUBLIC")),fi(new Hn(vD,ED,"PRIVATE"))}AD();Nn(M0,ag);Nn(M0,ag,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="analytics",SD="firebase_id",bD="origin",wD=60*1e3,RD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",cg="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new $c("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new xs("analytics","Analytics",ID);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(r){if(!r.startsWith(cg)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function $0(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function DD(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function OD(r,t){const n=DD("firebase-js-sdk-policy",{createScriptURL:CD}),s=document.createElement("script"),o=`${cg}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function ND(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function MD(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await $0(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(g){an.error(g)}r("config",o,u)}async function VD(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const g=await $0(n);for(const p of f){const y=g.find(C=>C.measurementId===p),A=y&&t[y.appId];if(A)u.push(A);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){an.error(u)}}function PD(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[g,p]=f;await VD(r,t,n,g,p)}else if(u==="config"){const[g,p]=f;await MD(r,t,n,s,g,p)}else if(u==="consent"){const[g,p]=f;r("consent",g,p)}else if(u==="get"){const[g,p,y]=f;r("get",g,p,y)}else if(u==="set"){const[g]=f;r("set",g)}else r(u,...f)}catch(g){an.error(g)}}return o}function kD(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=PD(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function UD(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(cg)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD=30,LD=1e3;class zD{constructor(t={},n=LD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Z0=new zD;function BD(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function jD(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:BD(s)},u=RD.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let g="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(g=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:g})}return f.json()}async function qD(r,t=Z0,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},g=new FD;return setTimeout(async()=>{g.abort()},wD),J0({appId:s,apiKey:o,measurementId:u},f,g,t)}async function J0(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=Z0){var u;const{appId:f,measurementId:g}=r;try{await HD(s,t)}catch(p){if(g)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:g};throw p}try{const p=await jD(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!GD(y)){if(o.deleteThrottleMetadata(f),g)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${g} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:g};throw p}const A=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?V_(n,o.intervalMillis,xD):V_(n,o.intervalMillis),C={throttleEndTimeMillis:Date.now()+A,backoffCount:n+1};return o.setThrottleMetadata(f,C),an.debug(`Calling attemptFetch again in ${A} millis`),J0(r,C,s,o)}}function HD(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function GD(r){if(!(r instanceof Gn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class FD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function KD(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD(){if(TT())try{await ET()}catch(r){return an.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function YD(r,t,n,s,o,u,f){var g;const p=qD(r);p.then(q=>{n[q.measurementId]=q.appId,r.options.measurementId&&q.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${q.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(q=>an.error(q)),t.push(p);const y=QD().then(q=>{if(q)return s.getId()}),[A,C]=await Promise.all([p,y]);UD(u)||OD(u,A.measurementId),o("js",new Date);const k=(g=f==null?void 0:f.config)!==null&&g!==void 0?g:{};return k[bD]="firebase",k.update=!0,C!=null&&(k[SD]=C),o("config",A.measurementId,k),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(t){this.app=t}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},aT=[];const oT={};let Bd="dataLayer",$D="gtag",lT,W0,uT=!1;function ZD(){const r=[];if(vT()&&r.push("This is a browser extension environment."),JS()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function JD(r,t,n){ZD();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(El[s]!=null)throw yn.create("already-exists",{id:s});if(!uT){ND(Bd);const{wrappedGtag:u,gtagCore:f}=kD(El,aT,oT,Bd,$D);W0=u,lT=f,uT=!0}return El[s]=YD(r,aT,oT,t,lT,Bd,n),new XD(r)}function WD(r=pm()){r=Ve(r);const t=Ls(r,Yc);return t.isInitialized()?t.getImmediate():tO(r)}function tO(r,t={}){const n=Ls(r,Yc);if(n.isInitialized()){const o=n.getImmediate();if(Pr(t,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:t})}function eO(r,t,n,s){r=Ve(r),KD(W0,El[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const cT="@firebase/analytics",hT="0.10.12";function nO(){fi(new Hn(Yc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return JD(s,o,n)},"PUBLIC")),fi(new Hn("analytics-internal",r,"PRIVATE")),Nn(cT,hT),Nn(cT,hT,"esm2017");function r(t){try{const n=t.getProvider(Yc).getImmediate();return{logEvent:(s,o,u)=>eO(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}nO();const iO={apiKey:"AIzaSyByiRTS9k_WnDpDrXEPIfG-xZAaKGDSK2c",authDomain:"todolistcipas.firebaseapp.com",projectId:"todolistcipas",storageBucket:"todolistcipas.firebasestorage.app",messagingSenderId:"745932854762",appId:"1:745932854762:web:cdfd7286b4f52ba5b94e93",measurementId:"G-3FE0C85DL4"},tA=wT(iO);WD(tA);const Va=p1(tA),rO=r=>`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${r}.svg`,sO=({name:r,url:t})=>{const n=rO(r);return st.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"social-circle",children:st.jsx("img",{src:n,alt:`${r} icon`,className:"social-icon",onError:s=>{s.target.src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/error.svg"}})})};function aO(){const[r,t]=nn.useState(""),n=o=>{let u=o.getHours();const f=o.getMinutes(),g=o.getSeconds(),p=u>=12?"PM":"AM";return u=u%12||12,`${u.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}:${g.toString().padStart(2,"0")} ${p}`};nn.useEffect(()=>{const o=setInterval(()=>{const f=n(new Date);t(f)},1e3);return()=>clearInterval(o)},[]);const s=[{name:"facebook",url:"https://www.facebook.com/javier.zapata.9828/"},{name:"instagram",url:"https://www.instagram.com/javier.zapata99/"},{name:"linkedin",url:"https://www.linkedin.com/in/javieerzapata/"},{name:"youtube",url:"https://www.youtube.com/@javieralejandrozapata7720"},{name:"gmail",url:"mailto:zapatajavier34@gmail.com"},{name:"whatsapp",url:"https://wa.me/573023137764?text=%C2%A1Hola!%20Quiero%20mas%20informaci%C3%B3n%20para%20trabajar%20contigo"}];return st.jsxs("footer",{children:[st.jsx("section",{className:"social-links",children:s.map(o=>st.jsx(sO,{...o},o.name))}),st.jsxs("section",{className:"clock1",children:[st.jsxs("div",{className:"clock2",children:[st.jsx("h3",{children:"Esta es la hora en tiempo real en Colombia"}),st.jsx("h3",{children:r||"Revisando la hora en Colombia..."})]}),st.jsx("section",{className:"copyright",children:st.jsxs("p",{children:["© 2025 ToDoList, diseñado por ",st.jsx("strong",{children:st.jsx("a",{href:"https://www.instagram.com/javier.zapata99/?hl=es",children:"Javier Zapata"})})]})})]})]})}const fT=({tarea:r,toggleCompletado:t,eliminarTarea:n})=>st.jsxs("li",{className:r.completado?"completado":"",children:[st.jsx("p",{children:r.texto}),st.jsxs("p",{children:[st.jsx("strong",{children:"Responsable:"})," ",r.responsable]}),r.link&&st.jsx("p",{children:st.jsx("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",children:"Ver enlace"})}),st.jsxs("p",{children:[st.jsx("strong",{children:"Fecha de entrega:"})," ",r.fechaEntrega]}),st.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[st.jsx("input",{type:"checkbox",checked:r.completado,onChange:()=>t(r.id)}),st.jsx("span",{title:"Eliminar tarea",style:{cursor:"pointer",fontSize:"1.3em",userSelect:"none"},onClick:()=>n(r.id),children:"🗑️"})]})]}),oO=[{id:1,texto:"APRENDER REACT",completado:!1,responsable:"JAVIER",link:"",fechaEntrega:"2025-04-30"},{id:2,texto:"PROBANDO",completado:!0,responsable:"JHONATAN",link:"",fechaEntrega:"2025-04-25"},{id:3,texto:"HACER LA CAMA",completado:!1,responsable:"MICHAEL",link:"",fechaEntrega:"2025-04-26"}],jd=P2();function lO(){const[r,t]=nn.useState(()=>{const I=localStorage.getItem("tareas");return I?JSON.parse(I):oO});nn.useEffect(()=>{const I=async()=>{const te=kd(Va,"tareas"),H=(await zv(te)).docs.map(tt=>({id:tt.id,...tt.data()}));t(H)},V=()=>{q(window.matchMedia("(max-width: 655px)").matches)},w=AC(jd,te=>{nt(te)});return I(),V(),window.addEventListener("resize",V),()=>{window.removeEventListener("resize",V),w()}},[]);const[n,s]=nn.useState(!1),[o,u]=nn.useState(""),[f,g]=nn.useState(""),[p,y]=nn.useState(""),[A,C]=nn.useState(""),[k,q]=nn.useState(!1),[Z,nt]=nn.useState(null),$=nn.useRef(null);nn.useEffect(()=>{localStorage.setItem("tareas",JSON.stringify(r))},[r]),nn.useEffect(()=>(n?(window.addEventListener("keydown",Rt),$.current&&$.current.focus()):window.removeEventListener("keydown",Rt),()=>{window.removeEventListener("keydown",Rt)}),[n]);const At=async I=>{const V=Ec(Va,"tareas",I),w=r.find(jt=>jt.id===I);await V1(V,{completado:!w.completado});const te=r.map(jt=>jt.id===I?{...jt,completado:!jt.completado}:jt);t(te)},vt=async()=>{if(o.trim()&&f.trim()&&A.trim()){const I={texto:o.toUpperCase(),completado:!1,responsable:f.toUpperCase(),link:p,fechaEntrega:A},V=await P1(kd(Va,"tareas"),I);t([...r,{id:V.id,...I}]),u(""),g(""),y(""),C(""),s(!1)}},ht=I=>{I.key==="Enter"&&vt()},Rt=I=>{I.key==="Escape"&&s(!1)},pt=I=>{n&&I.target.className==="modal"&&s(!1)},It=async I=>{await Bv(Ec(Va,"tareas",I)),t(r.filter(V=>V.id!==I))},M=async()=>{const I=kd(Va,"tareas"),w=(await zv(I)).docs.map(te=>Bv(Ec(Va,"tareas",te.id)));await Promise.all(w),t([])},S=()=>{const I=new qi;HC(jd,I).then(V=>nt(V.user)).catch(V=>alert(V.message))},R=()=>{SC(jd)};if(!Z)return st.jsxs("div",{style:{textAlign:"center",marginTop:"60px"},children:[st.jsx("h2",{children:"Inicia sesión para ver tus tareas"}),st.jsx("button",{onClick:S,children:"Iniciar sesión con Google"})]});const N=r.filter(I=>I.completado);return st.jsxs(st.Fragment,{children:[st.jsxs("div",{className:k?"logout-container responsive":"logout-container normal",children:[st.jsx("span",{children:Z.displayName}),st.jsx("button",{onClick:R,style:{marginLeft:"10px"},children:"Cerrar sesión"})]}),st.jsx("h1",{className:"titulo",children:"Pendientes UT - El mejor CIPAS"}),st.jsxs("div",{className:`todolist ${k?"responsive":"normal"}`,children:[st.jsxs("div",{className:`listaNoDone ${k?"responsive":"normal"}`,children:[st.jsx("h2",{children:"Lista de Tareas"}),st.jsx("ul",{children:r.filter(I=>!I.completado).map(I=>st.jsx(fT,{tarea:I,toggleCompletado:At,eliminarTarea:It},I.id))})]}),st.jsx("div",{className:`listaDone ${k?"responsive":"normal"}`,children:N.length>0&&st.jsxs(st.Fragment,{children:[st.jsx("h2",{children:"Tareas Completadas"}),st.jsx("ul",{children:N.map(I=>st.jsx(fT,{tarea:I,toggleCompletado:At,eliminarTarea:It},I.id))})]})})]}),st.jsxs("div",{className:`buttons ${k?"responsive":"normal"}`,children:[st.jsx("button",{className:"añadirTarea",onClick:()=>s(!0),children:"Añadir Tarea"}),st.jsx("button",{className:"borrarTarea",onClick:M,children:"Borrar todas las tareas"})]}),n&&st.jsx("div",{className:"modal",onKeyDown:Rt,onClick:pt,tabIndex:"0",children:st.jsxs("div",{className:"modal-content",children:[st.jsx("h3",{children:"Nueva Tarea"}),st.jsx("input",{type:"text",value:o,onChange:I=>u(I.target.value),onKeyPress:ht,placeholder:"Descripción de la tarea",ref:$}),st.jsx("input",{type:"text",value:f,onChange:I=>g(I.target.value),placeholder:"Responsable"}),st.jsx("input",{type:"url",value:p,onChange:I=>y(I.target.value),placeholder:"Enlace (opcional)"}),st.jsx("input",{type:"date",value:A,onChange:I=>C(I.target.value),placeholder:"Fecha de entrega"}),st.jsx("button",{onClick:vt,children:"Agregar"}),st.jsx("button",{onClick:()=>s(!1),children:"Cancelar"})]})}),st.jsx(aO,{})]})}const uO=PS.createRoot(document.getElementById("app"));uO.render(st.jsx(lO,{}));
