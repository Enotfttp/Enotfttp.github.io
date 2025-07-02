const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/RKOPage-Cr5tPJn5.js","assets/SearchWithFilter-DK6-i9WG.js","assets/ConnectionsPage-CZt-YOTj.js","assets/PeriodsPage-aXlHMt2L.js","assets/EventsPage-BYgpJ8sr.js"])))=>i.map(i=>d[i]);
var Xw=Object.defineProperty;var Ty=e=>{throw TypeError(e)};var Zw=(e,a,l)=>a in e?Xw(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;var Ry=(e,a,l)=>Zw(e,typeof a!="symbol"?a+"":a,l),Vd=(e,a,l)=>a.has(e)||Ty("Cannot "+l);var P=(e,a,l)=>(Vd(e,a,"read from private field"),l?l.call(e):a.get(e)),Fe=(e,a,l)=>a.has(e)?Ty("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,l),Oe=(e,a,l,i)=>(Vd(e,a,"write to private field"),i?i.call(e,l):a.set(e,l),l),it=(e,a,l)=>(Vd(e,a,"access private method"),l);var Bs=(e,a,l,i)=>({set _(u){Oe(e,a,u,l)},get _(){return P(e,a,i)}});(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))i(u);new MutationObserver(u=>{for(const c of u)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const c={};return u.integrity&&(c.integrity=u.integrity),u.referrerPolicy&&(c.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?c.credentials="include":u.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(u){if(u.ep)return;u.ep=!0;const c=l(u);fetch(u.href,c)}})();const Kw="modulepreload",Ww=function(e){return"/"+e},My={},vu=function(a,l,i){let u=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));u=Promise.allSettled(l.map(p=>{if(p=Ww(p),p in My)return;My[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const y=document.createElement("link");if(y.rel=m?"stylesheet":Kw,m||(y.as="script"),y.crossOrigin="",y.href=p,h&&y.setAttribute("nonce",h),document.head.appendChild(y),m)return new Promise((b,w)=>{y.addEventListener("load",b),y.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return u.then(d=>{for(const h of d||[])h.status==="rejected"&&c(h.reason);return a().catch(c)})};function Jw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oy;function Iw(){if(Oy)return Lo;Oy=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(i,u,c){var d=null;if(c!==void 0&&(d=""+c),u.key!==void 0&&(d=""+u.key),"key"in u){c={};for(var h in u)h!=="key"&&(c[h]=u[h])}else c=u;return u=c.ref,{$$typeof:e,type:i,key:d,ref:u!==void 0?u:null,props:c}}return Lo.Fragment=a,Lo.jsx=l,Lo.jsxs=l,Lo}var Cy;function e2(){return Cy||(Cy=1,Qd.exports=Iw()),Qd.exports}var N=e2(),Xd={exports:{}},Ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay;function t2(){if(Ay)return Ke;Ay=1;var e=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function b(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,$={};function E(O,L,X){this.props=O,this.context=L,this.refs=$,this.updater=X||w}E.prototype.isReactComponent={},E.prototype.setState=function(O,L){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,L,"setState")},E.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function T(){}T.prototype=E.prototype;function C(O,L,X){this.props=O,this.context=L,this.refs=$,this.updater=X||w}var M=C.prototype=new T;M.constructor=C,S(M,E.prototype),M.isPureReactComponent=!0;var z=Array.isArray,_={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function V(O,L,X,W,ee,fe){return X=fe.ref,{$$typeof:e,type:O,key:L,ref:X!==void 0?X:null,props:fe}}function K(O,L){return V(O.type,L,void 0,void 0,void 0,O.props)}function q(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function Z(O){var L={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(X){return L[X]})}var Se=/\/+/g;function Ce(O,L){return typeof O=="object"&&O!==null&&O.key!=null?Z(""+O.key):L.toString(36)}function ge(){}function Ee(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(ge,ge):(O.status="pending",O.then(function(L){O.status==="pending"&&(O.status="fulfilled",O.value=L)},function(L){O.status==="pending"&&(O.status="rejected",O.reason=L)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function xe(O,L,X,W,ee){var fe=typeof O;(fe==="undefined"||fe==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(fe){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case e:case a:pe=!0;break;case g:return pe=O._init,xe(pe(O._payload),L,X,W,ee)}}if(pe)return ee=ee(O),pe=W===""?"."+Ce(O,0):W,z(ee)?(X="",pe!=null&&(X=pe.replace(Se,"$&/")+"/"),xe(ee,L,X,"",function(ve){return ve})):ee!=null&&(q(ee)&&(ee=K(ee,X+(ee.key==null||O&&O.key===ee.key?"":(""+ee.key).replace(Se,"$&/")+"/")+pe)),L.push(ee)),1;pe=0;var ye=W===""?".":W+":";if(z(O))for(var me=0;me<O.length;me++)W=O[me],fe=ye+Ce(W,me),pe+=xe(W,L,X,fe,ee);else if(me=b(O),typeof me=="function")for(O=me.call(O),me=0;!(W=O.next()).done;)W=W.value,fe=ye+Ce(W,me++),pe+=xe(W,L,X,fe,ee);else if(fe==="object"){if(typeof O.then=="function")return xe(Ee(O),L,X,W,ee);throw L=String(O),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return pe}function le(O,L,X){if(O==null)return O;var W=[],ee=0;return xe(O,W,"","",function(fe){return L.call(X,fe,ee++)}),W}function he(O){if(O._status===-1){var L=O._result;L=L(),L.then(function(X){(O._status===0||O._status===-1)&&(O._status=1,O._result=X)},function(X){(O._status===0||O._status===-1)&&(O._status=2,O._result=X)}),O._status===-1&&(O._status=0,O._result=L)}if(O._status===1)return O._result.default;throw O._result}var ue=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function ie(){}return Ke.Children={map:le,forEach:function(O,L,X){le(O,function(){L.apply(this,arguments)},X)},count:function(O){var L=0;return le(O,function(){L++}),L},toArray:function(O){return le(O,function(L){return L})||[]},only:function(O){if(!q(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ke.Component=E,Ke.Fragment=l,Ke.Profiler=u,Ke.PureComponent=C,Ke.StrictMode=i,Ke.Suspense=p,Ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,Ke.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ke.cache=function(O){return function(){return O.apply(null,arguments)}},Ke.cloneElement=function(O,L,X){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var W=S({},O.props),ee=O.key,fe=void 0;if(L!=null)for(pe in L.ref!==void 0&&(fe=void 0),L.key!==void 0&&(ee=""+L.key),L)!j.call(L,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&L.ref===void 0||(W[pe]=L[pe]);var pe=arguments.length-2;if(pe===1)W.children=X;else if(1<pe){for(var ye=Array(pe),me=0;me<pe;me++)ye[me]=arguments[me+2];W.children=ye}return V(O.type,ee,void 0,void 0,fe,W)},Ke.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},Ke.createElement=function(O,L,X){var W,ee={},fe=null;if(L!=null)for(W in L.key!==void 0&&(fe=""+L.key),L)j.call(L,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ee[W]=L[W]);var pe=arguments.length-2;if(pe===1)ee.children=X;else if(1<pe){for(var ye=Array(pe),me=0;me<pe;me++)ye[me]=arguments[me+2];ee.children=ye}if(O&&O.defaultProps)for(W in pe=O.defaultProps,pe)ee[W]===void 0&&(ee[W]=pe[W]);return V(O,fe,void 0,void 0,null,ee)},Ke.createRef=function(){return{current:null}},Ke.forwardRef=function(O){return{$$typeof:h,render:O}},Ke.isValidElement=q,Ke.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:he}},Ke.memo=function(O,L){return{$$typeof:m,type:O,compare:L===void 0?null:L}},Ke.startTransition=function(O){var L=_.T,X={};_.T=X;try{var W=O(),ee=_.S;ee!==null&&ee(X,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(ie,ue)}catch(fe){ue(fe)}finally{_.T=L}},Ke.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},Ke.use=function(O){return _.H.use(O)},Ke.useActionState=function(O,L,X){return _.H.useActionState(O,L,X)},Ke.useCallback=function(O,L){return _.H.useCallback(O,L)},Ke.useContext=function(O){return _.H.useContext(O)},Ke.useDebugValue=function(){},Ke.useDeferredValue=function(O,L){return _.H.useDeferredValue(O,L)},Ke.useEffect=function(O,L){return _.H.useEffect(O,L)},Ke.useId=function(){return _.H.useId()},Ke.useImperativeHandle=function(O,L,X){return _.H.useImperativeHandle(O,L,X)},Ke.useInsertionEffect=function(O,L){return _.H.useInsertionEffect(O,L)},Ke.useLayoutEffect=function(O,L){return _.H.useLayoutEffect(O,L)},Ke.useMemo=function(O,L){return _.H.useMemo(O,L)},Ke.useOptimistic=function(O,L){return _.H.useOptimistic(O,L)},Ke.useReducer=function(O,L,X){return _.H.useReducer(O,L,X)},Ke.useRef=function(O){return _.H.useRef(O)},Ke.useState=function(O){return _.H.useState(O)},Ke.useSyncExternalStore=function(O,L,X){return _.H.useSyncExternalStore(O,L,X)},Ke.useTransition=function(){return _.H.useTransition()},Ke.version="19.0.0",Ke}var Dy;function vm(){return Dy||(Dy=1,Xd.exports=t2()),Xd.exports}var v=vm();const Cl=Jw(v);var Zd={exports:{}},Ho={},Kd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy;function r2(){return zy||(zy=1,function(e){function a(le,he){var ue=le.length;le.push(he);e:for(;0<ue;){var ie=ue-1>>>1,O=le[ie];if(0<u(O,he))le[ie]=he,le[ue]=O,ue=ie;else break e}}function l(le){return le.length===0?null:le[0]}function i(le){if(le.length===0)return null;var he=le[0],ue=le.pop();if(ue!==he){le[0]=ue;e:for(var ie=0,O=le.length,L=O>>>1;ie<L;){var X=2*(ie+1)-1,W=le[X],ee=X+1,fe=le[ee];if(0>u(W,ue))ee<O&&0>u(fe,W)?(le[ie]=fe,le[ee]=ue,ie=ee):(le[ie]=W,le[X]=ue,ie=X);else if(ee<O&&0>u(fe,ue))le[ie]=fe,le[ee]=ue,ie=ee;else break e}}return he}function u(le,he){var ue=le.sortIndex-he.sortIndex;return ue!==0?ue:le.id-he.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;e.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();e.unstable_now=function(){return d.now()-h}}var p=[],m=[],g=1,y=null,b=3,w=!1,S=!1,$=!1,E=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function M(le){for(var he=l(m);he!==null;){if(he.callback===null)i(m);else if(he.startTime<=le)i(m),he.sortIndex=he.expirationTime,a(p,he);else break;he=l(m)}}function z(le){if($=!1,M(le),!S)if(l(p)!==null)S=!0,Ee();else{var he=l(m);he!==null&&xe(z,he.startTime-le)}}var _=!1,j=-1,V=5,K=-1;function q(){return!(e.unstable_now()-K<V)}function Z(){if(_){var le=e.unstable_now();K=le;var he=!0;try{e:{S=!1,$&&($=!1,T(j),j=-1),w=!0;var ue=b;try{t:{for(M(le),y=l(p);y!==null&&!(y.expirationTime>le&&q());){var ie=y.callback;if(typeof ie=="function"){y.callback=null,b=y.priorityLevel;var O=ie(y.expirationTime<=le);if(le=e.unstable_now(),typeof O=="function"){y.callback=O,M(le),he=!0;break t}y===l(p)&&i(p),M(le)}else i(p);y=l(p)}if(y!==null)he=!0;else{var L=l(m);L!==null&&xe(z,L.startTime-le),he=!1}}break e}finally{y=null,b=ue,w=!1}he=void 0}}finally{he?Se():_=!1}}}var Se;if(typeof C=="function")Se=function(){C(Z)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,ge=Ce.port2;Ce.port1.onmessage=Z,Se=function(){ge.postMessage(null)}}else Se=function(){E(Z,0)};function Ee(){_||(_=!0,Se())}function xe(le,he){j=E(function(){le(e.unstable_now())},he)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(le){le.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,Ee())},e.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<le?Math.floor(1e3/le):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return l(p)},e.unstable_next=function(le){switch(b){case 1:case 2:case 3:var he=3;break;default:he=b}var ue=b;b=he;try{return le()}finally{b=ue}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(le,he){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var ue=b;b=le;try{return he()}finally{b=ue}},e.unstable_scheduleCallback=function(le,he,ue){var ie=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?ie+ue:ie):ue=ie,le){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ue+O,le={id:g++,callback:he,priorityLevel:le,startTime:ue,expirationTime:O,sortIndex:-1},ue>ie?(le.sortIndex=ue,a(m,le),l(p)===null&&le===l(m)&&($?(T(j),j=-1):$=!0,xe(z,ue-ie))):(le.sortIndex=O,a(p,le),S||w||(S=!0,Ee())),le},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(le){var he=b;return function(){var ue=b;b=he;try{return le.apply(this,arguments)}finally{b=ue}}}}(Wd)),Wd}var By;function a2(){return By||(By=1,Kd.exports=r2()),Kd.exports}var Jd={exports:{}},yr={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function n2(){if(jy)return yr;jy=1;var e=vm();function a(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var i={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function c(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var d=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return yr.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,yr.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(a(299));return c(p,m,null,g)},yr.flushSync=function(p){var m=d.T,g=i.p;try{if(d.T=null,i.p=2,p)return p()}finally{d.T=m,i.p=g,i.d.f()}},yr.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},yr.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},yr.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),b=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:b,fetchPriority:w}):g==="script"&&i.d.X(p,{crossOrigin:y,integrity:b,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},yr.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},yr.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);i.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},yr.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},yr.requestFormReset=function(p){i.d.r(p)},yr.unstable_batchedUpdates=function(p,m){return p(m)},yr.useFormState=function(p,m,g){return d.H.useFormState(p,m,g)},yr.useFormStatus=function(){return d.H.useHostTransitionStatus()},yr.version="19.0.0",yr}var Ly;function J1(){if(Ly)return Jd.exports;Ly=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Jd.exports=n2(),Jd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hy;function l2(){if(Hy)return Ho;Hy=1;var e=a2(),a=vm(),l=J1();function i(t){var r="https://react.dev/errors/"+t;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var c=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),z=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=_&&t[_]||t["@@iterator"],typeof t=="function"?t:null)}var V=Symbol.for("react.client.reference");function K(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===V?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case $:return"Suspense";case E:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w:return(t.displayName||"Context")+".Provider";case b:return(t._context.displayName||"Context")+".Consumer";case S:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case T:return r=t.displayName||null,r!==null?r:K(t.type)||"Memo";case C:r=t._payload,t=t._init;try{return K(t(r))}catch{}}return null}var q=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=Object.assign,Se,Ce;function ge(t){if(Se===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Se=r&&r[1]||"",Ce=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Se+t+Ce}var Ee=!1;function xe(t,r){if(!t||Ee)return"";Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(r){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(te){var Q=te}Reflect.construct(t,[],ce)}else{try{ce.call()}catch(te){Q=te}t.call(ce.prototype)}}else{try{throw Error()}catch(te){Q=te}(ce=t())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(te){if(te&&Q&&typeof te.stack=="string")return[te.stack,Q.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var A=x.split(`
`),U=R.split(`
`);for(s=o=0;o<A.length&&!A[o].includes("DetermineComponentFrameRoot");)o++;for(;s<U.length&&!U[s].includes("DetermineComponentFrameRoot");)s++;if(o===A.length||s===U.length)for(o=A.length-1,s=U.length-1;1<=o&&0<=s&&A[o]!==U[s];)s--;for(;1<=o&&0<=s;o--,s--)if(A[o]!==U[s]){if(o!==1||s!==1)do if(o--,s--,0>s||A[o]!==U[s]){var ae=`
`+A[o].replace(" at new "," at ");return t.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",t.displayName)),ae}while(1<=o&&0<=s);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ge(n):""}function le(t){switch(t.tag){case 26:case 27:case 5:return ge(t.type);case 16:return ge("Lazy");case 13:return ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return t=xe(t.type,!1),t;case 11:return t=xe(t.type.render,!1),t;case 1:return t=xe(t.type,!0),t;default:return""}}function he(t){try{var r="";do r+=le(t),t=t.return;while(t);return r}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ue(t){var r=t,n=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(n=r.return),t=r.return;while(t)}return r.tag===3?n:null}function ie(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function O(t){if(ue(t)!==t)throw Error(i(188))}function L(t){var r=t.alternate;if(!r){if(r=ue(t),r===null)throw Error(i(188));return r!==t?null:t}for(var n=t,o=r;;){var s=n.return;if(s===null)break;var f=s.alternate;if(f===null){if(o=s.return,o!==null){n=o;continue}break}if(s.child===f.child){for(f=s.child;f;){if(f===n)return O(s),t;if(f===o)return O(s),r;f=f.sibling}throw Error(i(188))}if(n.return!==o.return)n=s,o=f;else{for(var x=!1,R=s.child;R;){if(R===n){x=!0,n=s,o=f;break}if(R===o){x=!0,o=s,n=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===n){x=!0,n=f,o=s;break}if(R===o){x=!0,o=f,n=s;break}R=R.sibling}if(!x)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?t:r}function X(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t;for(t=t.child;t!==null;){if(r=X(t),r!==null)return r;t=t.sibling}return null}var W=Array.isArray,ee=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],ye=-1;function me(t){return{current:t}}function ve(t){0>ye||(t.current=pe[ye],pe[ye]=null,ye--)}function Ae(t,r){ye++,pe[ye]=t.current,t.current=r}var Ue=me(null),qe=me(null),Ve=me(null),Lt=me(null);function Xt(t,r){switch(Ae(Ve,r),Ae(qe,t),Ae(Ue,null),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?ry(r):0;break;default:if(t=t===8?r.parentNode:r,r=t.tagName,t=t.namespaceURI)t=ry(t),r=ay(t,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ve(Ue),Ae(Ue,r)}function dt(){ve(Ue),ve(qe),ve(Ve)}function Ct(t){t.memoizedState!==null&&Ae(Lt,t);var r=Ue.current,n=ay(r,t.type);r!==n&&(Ae(qe,t),Ae(Ue,n))}function At(t){qe.current===t&&(ve(Ue),ve(qe)),Lt.current===t&&(ve(Lt),Ao._currentValue=fe)}var ct=Object.prototype.hasOwnProperty,gt=e.unstable_scheduleCallback,nt=e.unstable_cancelCallback,Et=e.unstable_shouldYield,wt=e.unstable_requestPaint,ft=e.unstable_now,Sr=e.unstable_getCurrentPriorityLevel,nr=e.unstable_ImmediatePriority,ua=e.unstable_UserBlockingPriority,Nr=e.unstable_NormalPriority,ln=e.unstable_LowPriority,_e=e.unstable_IdlePriority,He=e.log,Xe=e.unstable_setDisableYieldValue,pt=null,at=null;function _t(t){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(pt,t,void 0,(t.current.flags&128)===128)}catch{}}function Gt(t){if(typeof He=="function"&&Xe(t),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(pt,t)}catch{}}var Ht=Math.clz32?Math.clz32:Tr,Ba=Math.log,xa=Math.LN2;function Tr(t){return t>>>=0,t===0?32:31-(Ba(t)/xa|0)|0}var I=128,de=4194304;function we(t){var r=t&42;if(r!==0)return r;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Pe(t,r){var n=t.pendingLanes;if(n===0)return 0;var o=0,s=t.suspendedLanes,f=t.pingedLanes,x=t.warmLanes;t=t.finishedLanes!==0;var R=n&134217727;return R!==0?(n=R&~s,n!==0?o=we(n):(f&=R,f!==0?o=we(f):t||(x=R&~x,x!==0&&(o=we(x))))):(R=n&~s,R!==0?o=we(R):f!==0?o=we(f):t||(x=n&~x,x!==0&&(o=we(x)))),o===0?0:r!==0&&r!==o&&(r&s)===0&&(s=o&-o,x=r&-r,s>=x||s===32&&(x&4194176)!==0)?r:o}function et(t,r){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&r)===0}function Zt(t,r){switch(t){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D(){var t=I;return I<<=1,(I&4194176)===0&&(I=128),t}function B(){var t=de;return de<<=1,(de&62914560)===0&&(de=4194304),t}function Y(t){for(var r=[],n=0;31>n;n++)r.push(t);return r}function ne(t,r){t.pendingLanes|=r,r!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,r,n,o,s,f){var x=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var R=t.entanglements,A=t.expirationTimes,U=t.hiddenUpdates;for(n=x&~n;0<n;){var ae=31-Ht(n),ce=1<<ae;R[ae]=0,A[ae]=-1;var Q=U[ae];if(Q!==null)for(U[ae]=null,ae=0;ae<Q.length;ae++){var te=Q[ae];te!==null&&(te.lane&=-536870913)}n&=~ce}o!==0&&je(t,o,0),f!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~r))}function je(t,r,n){t.pendingLanes|=r,t.suspendedLanes&=~r;var o=31-Ht(r);t.entangledLanes|=r,t.entanglements[o]=t.entanglements[o]|1073741824|n&4194218}function ze(t,r){var n=t.entangledLanes|=r;for(t=t.entanglements;n;){var o=31-Ht(n),s=1<<o;s&r|t[o]&r&&(t[o]|=r),n&=~s}}function Ne(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function De(){var t=ee.p;return t!==0?t:(t=window.event,t===void 0?32:Sy(t.type))}function $e(t,r){var n=ee.p;try{return ee.p=t,r()}finally{ee.p=n}}var Te=Math.random().toString(36).slice(2),Re="__reactFiber$"+Te,Ye="__reactProps$"+Te,bt="__reactContainer$"+Te,Kt="__reactEvents$"+Te,Pt="__reactListeners$"+Te,Ot="__reactHandles$"+Te,Ut="__reactResources$"+Te,Fr="__reactMarker$"+Te;function ja(t){delete t[Re],delete t[Ye],delete t[Kt],delete t[Pt],delete t[Ot]}function cr(t){var r=t[Re];if(r)return r;for(var n=t.parentNode;n;){if(r=n[bt]||n[Re]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(t=iy(t);t!==null;){if(n=t[Re])return n;t=iy(t)}return r}t=n,n=t.parentNode}return null}function fr(t){if(t=t[Re]||t[bt]){var r=t.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return t}return null}function La(t){var r=t.tag;if(r===5||r===26||r===27||r===6)return t.stateNode;throw Error(i(33))}function qr(t){var r=t[Ut];return r||(r=t[Ut]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nt(t){t[Fr]=!0}var Gn=new Set,Vn={};function ut(t,r){Dt(t,r),Dt(t+"Capture",r)}function Dt(t,r){for(Vn[t]=r,t=0;t<r.length;t++)Gn.add(r[t])}var Rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zt={},Ha={};function Ru(t){return ct.call(Ha,t)?!0:ct.call(zt,t)?!1:Qn.test(t)?Ha[t]=!0:(zt[t]=!0,!1)}function Ll(t,r,n){if(Ru(r))if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(r);return;case"boolean":var o=r.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(r);return}}t.setAttribute(r,""+n)}}function Mu(t,r,n){if(n===null)t.removeAttribute(r);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttribute(r,""+n)}}function Pa(t,r,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(r,n,""+o)}}function Yr(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lp(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function qS(t){var r=lp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),o=""+t[r];if(!t.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,f=n.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return s.call(this)},set:function(x){o=""+x,f.call(this,x)}}),Object.defineProperty(t,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function Ou(t){t._valueTracker||(t._valueTracker=qS(t))}function ip(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return t&&(o=lp(t)?t.checked?"true":"false":t.value),t=o,t!==n?(r.setValue(t),!0):!1}function Cu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var YS=/[\n"\\]/g;function Gr(t){return t.replace(YS,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function qc(t,r,n,o,s,f,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),r!=null?x==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+Yr(r)):t.value!==""+Yr(r)&&(t.value=""+Yr(r)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),r!=null?Yc(t,x,Yr(r)):n!=null?Yc(t,x,Yr(n)):o!=null&&t.removeAttribute("value"),s==null&&f!=null&&(t.defaultChecked=!!f),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Yr(R):t.removeAttribute("name")}function op(t,r,n,o,s,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),r!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||r!=null))return;n=n!=null?""+Yr(n):"",r=r!=null?""+Yr(r):n,R||r===t.value||(t.value=r),t.defaultValue=r}o=o??s,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x)}function Yc(t,r,n){r==="number"&&Cu(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Hl(t,r,n,o){if(t=t.options,r){r={};for(var s=0;s<n.length;s++)r["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=r.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&o&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),r=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,o&&(t[s].defaultSelected=!0);return}r!==null||t[s].disabled||(r=t[s])}r!==null&&(r.selected=!0)}}function up(t,r,n){if(r!=null&&(r=""+Yr(r),r!==t.value&&(t.value=r),n==null)){t.defaultValue!==r&&(t.defaultValue=r);return}t.defaultValue=n!=null?""+Yr(n):""}function sp(t,r,n,o){if(r==null){if(o!=null){if(n!=null)throw Error(i(92));if(W(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),r=n}n=Yr(r),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o)}function Pl(t,r){if(r){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=r;return}}t.textContent=r}var GS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cp(t,r,n){var o=r.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="":o?t.setProperty(r,n):typeof n!="number"||n===0||GS.has(r)?r==="float"?t.cssFloat=n:t[r]=(""+n).trim():t[r]=n+"px"}function fp(t,r,n){if(r!=null&&typeof r!="object")throw Error(i(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||r!=null&&r.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var s in r)o=r[s],r.hasOwnProperty(s)&&n[s]!==o&&cp(t,s,o)}else for(var f in r)r.hasOwnProperty(f)&&cp(t,f,r[f])}function Gc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var VS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),QS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Au(t){return QS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vc=null;function Qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ul=null,kl=null;function dp(t){var r=fr(t);if(r&&(t=r.stateNode)){var n=t[Ye]||null;e:switch(t=r.stateNode,r.type){case"input":if(qc(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),r=n.name,n.type==="radio"&&r!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Gr(""+r)+'"][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==t&&o.form===t.form){var s=o[Ye]||null;if(!s)throw Error(i(90));qc(o,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(r=0;r<n.length;r++)o=n[r],o.form===t.form&&ip(o)}break e;case"textarea":up(t,n.value,n.defaultValue);break e;case"select":r=n.value,r!=null&&Hl(t,!!n.multiple,r,!1)}}}var Xc=!1;function hp(t,r,n){if(Xc)return t(r,n);Xc=!0;try{var o=t(r);return o}finally{if(Xc=!1,(Ul!==null||kl!==null)&&(ps(),Ul&&(r=Ul,t=kl,kl=Ul=null,dp(r),t)))for(r=0;r<t.length;r++)dp(t[r])}}function Gi(t,r){var n=t.stateNode;if(n===null)return null;var o=n[Ye]||null;if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(i(231,r,typeof n));return n}var Zc=!1;if(Rr)try{var Vi={};Object.defineProperty(Vi,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Vi,Vi),window.removeEventListener("test",Vi,Vi)}catch{Zc=!1}var on=null,Kc=null,Du=null;function mp(){if(Du)return Du;var t,r=Kc,n=r.length,o,s="value"in on?on.value:on.textContent,f=s.length;for(t=0;t<n&&r[t]===s[t];t++);var x=n-t;for(o=1;o<=x&&r[n-o]===s[f-o];o++);return Du=s.slice(t,1<o?1-o:void 0)}function zu(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Bu(){return!0}function pp(){return!1}function Mr(t){function r(n,o,s,f,x){this._reactName=n,this._targetInst=s,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(n=t[R],this[R]=n?n(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Bu:pp,this.isPropagationStopped=pp,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),r}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=Mr(Xn),Qi=Z({},Xn,{view:0,detail:0}),XS=Mr(Qi),Wc,Jc,Xi,Lu=Z({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(Wc=t.screenX-Xi.screenX,Jc=t.screenY-Xi.screenY):Jc=Wc=0,Xi=t),Wc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),gp=Mr(Lu),ZS=Z({},Lu,{dataTransfer:0}),KS=Mr(ZS),WS=Z({},Qi,{relatedTarget:0}),Ic=Mr(WS),JS=Z({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),IS=Mr(JS),eE=Z({},Xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tE=Mr(eE),rE=Z({},Xn,{data:0}),yp=Mr(rE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iE(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=lE[t])?!!r[t]:!1}function ef(){return iE}var oE=Z({},Qi,{key:function(t){if(t.key){var r=aE[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uE=Mr(oE),sE=Z({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Mr(sE),cE=Z({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),fE=Mr(cE),dE=Z({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),hE=Mr(dE),mE=Z({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),pE=Mr(mE),gE=Z({},Xn,{newState:0,oldState:0}),yE=Mr(gE),vE=[9,13,27,32],tf=Rr&&"CompositionEvent"in window,Zi=null;Rr&&"documentMode"in document&&(Zi=document.documentMode);var bE=Rr&&"TextEvent"in window&&!Zi,bp=Rr&&(!tf||Zi&&8<Zi&&11>=Zi),xp=" ",Sp=!1;function Ep(t,r){switch(t){case"keyup":return vE.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fl=!1;function xE(t,r){switch(t){case"compositionend":return wp(r);case"keypress":return r.which!==32?null:(Sp=!0,xp);case"textInput":return t=r.data,t===xp&&Sp?null:t;default:return null}}function SE(t,r){if(Fl)return t==="compositionend"||!tf&&Ep(t,r)?(t=mp(),Du=Kc=on=null,Fl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return bp&&r.locale!=="ko"?null:r.data;default:return null}}var EE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!EE[t.type]:r==="textarea"}function _p(t,r,n,o){Ul?kl?kl.push(o):kl=[o]:Ul=o,r=xs(r,"onChange"),0<r.length&&(n=new ju("onChange","change",null,n,o),t.push({event:n,listeners:r}))}var Ki=null,Wi=null;function wE(t){Wg(t,0)}function Hu(t){var r=La(t);if(ip(r))return t}function Np(t,r){if(t==="change")return r}var Tp=!1;if(Rr){var rf;if(Rr){var af="oninput"in document;if(!af){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),af=typeof Rp.oninput=="function"}rf=af}else rf=!1;Tp=rf&&(!document.documentMode||9<document.documentMode)}function Mp(){Ki&&(Ki.detachEvent("onpropertychange",Op),Wi=Ki=null)}function Op(t){if(t.propertyName==="value"&&Hu(Wi)){var r=[];_p(r,Wi,t,Qc(t)),hp(wE,r)}}function $E(t,r,n){t==="focusin"?(Mp(),Ki=r,Wi=n,Ki.attachEvent("onpropertychange",Op)):t==="focusout"&&Mp()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Wi)}function NE(t,r){if(t==="click")return Hu(r)}function TE(t,r){if(t==="input"||t==="change")return Hu(r)}function RE(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Dr=typeof Object.is=="function"?Object.is:RE;function Ji(t,r){if(Dr(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var n=Object.keys(t),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var s=n[o];if(!ct.call(r,s)||!Dr(t[s],r[s]))return!1}return!0}function Cp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,r){var n=Cp(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=r&&o>=r)return{node:n,offset:r-t};t=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cp(n)}}function Dp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Dp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function zp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var r=Cu(t.document);r instanceof t.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)t=r.contentWindow;else break;r=Cu(t.document)}return r}function nf(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ME(t,r){var n=zp(r);r=t.focusedElem;var o=t.selectionRange;if(n!==r&&r&&r.ownerDocument&&Dp(r.ownerDocument.documentElement,r)){if(o!==null&&nf(r)){if(t=o.start,n=o.end,n===void 0&&(n=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(n,r.value.length);else if(n=(t=r.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var s=r.textContent.length,f=Math.min(o.start,s);o=o.end===void 0?f:Math.min(o.end,s),!n.extend&&f>o&&(s=o,o=f,f=s),s=Ap(r,f);var x=Ap(r,o);s&&x&&(n.rangeCount!==1||n.anchorNode!==s.node||n.anchorOffset!==s.offset||n.focusNode!==x.node||n.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),n.removeAllRanges(),f>o?(n.addRange(t),n.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),n.addRange(t)))}}for(t=[],n=r;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)n=t[r],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var OE=Rr&&"documentMode"in document&&11>=document.documentMode,ql=null,lf=null,Ii=null,of=!1;function Bp(t,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||ql==null||ql!==Cu(o)||(o=ql,"selectionStart"in o&&nf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ii&&Ji(Ii,o)||(Ii=o,o=xs(lf,"onSelect"),0<o.length&&(r=new ju("onSelect","select",null,r,n),t.push({event:r,listeners:o}),r.target=ql)))}function Zn(t,r){var n={};return n[t.toLowerCase()]=r.toLowerCase(),n["Webkit"+t]="webkit"+r,n["Moz"+t]="moz"+r,n}var Yl={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},uf={},jp={};Rr&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Yl.animationend.animation,delete Yl.animationiteration.animation,delete Yl.animationstart.animation),"TransitionEvent"in window||delete Yl.transitionend.transition);function Kn(t){if(uf[t])return uf[t];if(!Yl[t])return t;var r=Yl[t],n;for(n in r)if(r.hasOwnProperty(n)&&n in jp)return uf[t]=r[n];return t}var Lp=Kn("animationend"),Hp=Kn("animationiteration"),Pp=Kn("animationstart"),CE=Kn("transitionrun"),AE=Kn("transitionstart"),DE=Kn("transitioncancel"),Up=Kn("transitionend"),kp=new Map,Fp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function sa(t,r){kp.set(t,r),ut(r,[t])}var Vr=[],Gl=0,sf=0;function Pu(){for(var t=Gl,r=sf=Gl=0;r<t;){var n=Vr[r];Vr[r++]=null;var o=Vr[r];Vr[r++]=null;var s=Vr[r];Vr[r++]=null;var f=Vr[r];if(Vr[r++]=null,o!==null&&s!==null){var x=o.pending;x===null?s.next=s:(s.next=x.next,x.next=s),o.pending=s}f!==0&&qp(n,s,f)}}function Uu(t,r,n,o){Vr[Gl++]=t,Vr[Gl++]=r,Vr[Gl++]=n,Vr[Gl++]=o,sf|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function cf(t,r,n,o){return Uu(t,r,n,o),ku(t)}function un(t,r){return Uu(t,null,null,r),ku(t)}function qp(t,r,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var s=!1,f=t.return;f!==null;)f.childLanes|=n,o=f.alternate,o!==null&&(o.childLanes|=n),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(s=!0)),t=f,f=f.return;s&&r!==null&&t.tag===3&&(f=t.stateNode,s=31-Ht(n),f=f.hiddenUpdates,t=f[s],t===null?f[s]=[r]:t.push(r),r.lane=n|536870912)}function ku(t){if(50<_o)throw _o=0,gd=null,Error(i(185));for(var r=t.return;r!==null;)t=r,r=t.return;return t.tag===3?t.stateNode:null}var Vl={},Yp=new WeakMap;function Qr(t,r){if(typeof t=="object"&&t!==null){var n=Yp.get(t);return n!==void 0?n:(r={value:t,source:r,stack:he(r)},Yp.set(t,r),r)}return{value:t,source:r,stack:he(r)}}var Ql=[],Xl=0,Fu=null,qu=0,Xr=[],Zr=0,Wn=null,Ua=1,ka="";function Jn(t,r){Ql[Xl++]=qu,Ql[Xl++]=Fu,Fu=t,qu=r}function Gp(t,r,n){Xr[Zr++]=Ua,Xr[Zr++]=ka,Xr[Zr++]=Wn,Wn=t;var o=Ua;t=ka;var s=32-Ht(o)-1;o&=~(1<<s),n+=1;var f=32-Ht(r)+s;if(30<f){var x=s-s%5;f=(o&(1<<x)-1).toString(32),o>>=x,s-=x,Ua=1<<32-Ht(r)+s|n<<s|o,ka=f+t}else Ua=1<<f|n<<s|o,ka=t}function ff(t){t.return!==null&&(Jn(t,1),Gp(t,1,0))}function df(t){for(;t===Fu;)Fu=Ql[--Xl],Ql[Xl]=null,qu=Ql[--Xl],Ql[Xl]=null;for(;t===Wn;)Wn=Xr[--Zr],Xr[Zr]=null,ka=Xr[--Zr],Xr[Zr]=null,Ua=Xr[--Zr],Xr[Zr]=null}var Er=null,dr=null,ht=!1,ca=null,Sa=!1,hf=Error(i(519));function In(t){var r=Error(i(418,""));throw ro(Qr(r,t)),hf}function Vp(t){var r=t.stateNode,n=t.type,o=t.memoizedProps;switch(r[Re]=t,r[Ye]=o,n){case"dialog":lt("cancel",r),lt("close",r);break;case"iframe":case"object":case"embed":lt("load",r);break;case"video":case"audio":for(n=0;n<To.length;n++)lt(To[n],r);break;case"source":lt("error",r);break;case"img":case"image":case"link":lt("error",r),lt("load",r);break;case"details":lt("toggle",r);break;case"input":lt("invalid",r),op(r,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ou(r);break;case"select":lt("invalid",r);break;case"textarea":lt("invalid",r),sp(r,o.value,o.defaultValue,o.children),Ou(r)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||r.textContent===""+n||o.suppressHydrationWarning===!0||ty(r.textContent,n)?(o.popover!=null&&(lt("beforetoggle",r),lt("toggle",r)),o.onScroll!=null&&lt("scroll",r),o.onScrollEnd!=null&&lt("scrollend",r),o.onClick!=null&&(r.onclick=Ss),r=!0):r=!1,r||In(t)}function Qp(t){for(Er=t.return;Er;)switch(Er.tag){case 3:case 27:Sa=!0;return;case 5:case 13:Sa=!1;return;default:Er=Er.return}}function eo(t){if(t!==Er)return!1;if(!ht)return Qp(t),ht=!0,!1;var r=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Dd(t.type,t.memoizedProps)),n=!n),n&&(r=!0),r&&dr&&In(t),Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(r===0){dr=da(t.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++;t=t.nextSibling}dr=null}}else dr=Er?da(t.stateNode.nextSibling):null;return!0}function to(){dr=Er=null,ht=!1}function ro(t){ca===null?ca=[t]:ca.push(t)}var ao=Error(i(460)),Xp=Error(i(474)),mf={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Yu(){}function Kp(t,r,n){switch(n=t[n],n===void 0?t.push(r):n!==r&&(r.then(Yu,Yu),r=n),r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,t===ao?Error(i(483)):t;default:if(typeof r.status=="string")r.then(Yu,Yu);else{if(t=Tt,t!==null&&100<t.shellSuspendCounter)throw Error(i(482));t=r,t.status="pending",t.then(function(o){if(r.status==="pending"){var s=r;s.status="fulfilled",s.value=o}},function(o){if(r.status==="pending"){var s=r;s.status="rejected",s.reason=o}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw t=r.reason,t===ao?Error(i(483)):t}throw no=r,ao}}var no=null;function Wp(){if(no===null)throw Error(i(459));var t=no;return no=null,t}var Zl=null,lo=0;function Gu(t){var r=lo;return lo+=1,Zl===null&&(Zl=[]),Kp(Zl,t,r)}function io(t,r){r=r.props.ref,t.ref=r!==void 0?r:null}function Vu(t,r){throw r.$$typeof===c?Error(i(525)):(t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t)))}function Jp(t){var r=t._init;return r(t._payload)}function Ip(t){function r(F,H){if(t){var G=F.deletions;G===null?(F.deletions=[H],F.flags|=16):G.push(H)}}function n(F,H){if(!t)return null;for(;H!==null;)r(F,H),H=H.sibling;return null}function o(F){for(var H=new Map;F!==null;)F.key!==null?H.set(F.key,F):H.set(F.index,F),F=F.sibling;return H}function s(F,H){return F=xn(F,H),F.index=0,F.sibling=null,F}function f(F,H,G){return F.index=G,t?(G=F.alternate,G!==null?(G=G.index,G<H?(F.flags|=33554434,H):G):(F.flags|=33554434,H)):(F.flags|=1048576,H)}function x(F){return t&&F.alternate===null&&(F.flags|=33554434),F}function R(F,H,G,oe){return H===null||H.tag!==6?(H=ud(G,F.mode,oe),H.return=F,H):(H=s(H,G),H.return=F,H)}function A(F,H,G,oe){var Me=G.type;return Me===p?ae(F,H,G.props.children,oe,G.key):H!==null&&(H.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===C&&Jp(Me)===H.type)?(H=s(H,G.props),io(H,G),H.return=F,H):(H=cs(G.type,G.key,G.props,null,F.mode,oe),io(H,G),H.return=F,H)}function U(F,H,G,oe){return H===null||H.tag!==4||H.stateNode.containerInfo!==G.containerInfo||H.stateNode.implementation!==G.implementation?(H=sd(G,F.mode,oe),H.return=F,H):(H=s(H,G.children||[]),H.return=F,H)}function ae(F,H,G,oe,Me){return H===null||H.tag!==7?(H=sl(G,F.mode,oe,Me),H.return=F,H):(H=s(H,G),H.return=F,H)}function ce(F,H,G){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=ud(""+H,F.mode,G),H.return=F,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case d:return G=cs(H.type,H.key,H.props,null,F.mode,G),io(G,H),G.return=F,G;case h:return H=sd(H,F.mode,G),H.return=F,H;case C:var oe=H._init;return H=oe(H._payload),ce(F,H,G)}if(W(H)||j(H))return H=sl(H,F.mode,G,null),H.return=F,H;if(typeof H.then=="function")return ce(F,Gu(H),G);if(H.$$typeof===w)return ce(F,os(F,H),G);Vu(F,H)}return null}function Q(F,H,G,oe){var Me=H!==null?H.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Me!==null?null:R(F,H,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case d:return G.key===Me?A(F,H,G,oe):null;case h:return G.key===Me?U(F,H,G,oe):null;case C:return Me=G._init,G=Me(G._payload),Q(F,H,G,oe)}if(W(G)||j(G))return Me!==null?null:ae(F,H,G,oe,null);if(typeof G.then=="function")return Q(F,H,Gu(G),oe);if(G.$$typeof===w)return Q(F,H,os(F,G),oe);Vu(F,G)}return null}function te(F,H,G,oe,Me){if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return F=F.get(G)||null,R(H,F,""+oe,Me);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case d:return F=F.get(oe.key===null?G:oe.key)||null,A(H,F,oe,Me);case h:return F=F.get(oe.key===null?G:oe.key)||null,U(H,F,oe,Me);case C:var Ie=oe._init;return oe=Ie(oe._payload),te(F,H,G,oe,Me)}if(W(oe)||j(oe))return F=F.get(G)||null,ae(H,F,oe,Me,null);if(typeof oe.then=="function")return te(F,H,G,Gu(oe),Me);if(oe.$$typeof===w)return te(F,H,G,os(H,oe),Me);Vu(H,oe)}return null}function Be(F,H,G,oe){for(var Me=null,Ie=null,Le=H,ke=H=0,or=null;Le!==null&&ke<G.length;ke++){Le.index>ke?(or=Le,Le=null):or=Le.sibling;var mt=Q(F,Le,G[ke],oe);if(mt===null){Le===null&&(Le=or);break}t&&Le&&mt.alternate===null&&r(F,Le),H=f(mt,H,ke),Ie===null?Me=mt:Ie.sibling=mt,Ie=mt,Le=or}if(ke===G.length)return n(F,Le),ht&&Jn(F,ke),Me;if(Le===null){for(;ke<G.length;ke++)Le=ce(F,G[ke],oe),Le!==null&&(H=f(Le,H,ke),Ie===null?Me=Le:Ie.sibling=Le,Ie=Le);return ht&&Jn(F,ke),Me}for(Le=o(Le);ke<G.length;ke++)or=te(Le,F,ke,G[ke],oe),or!==null&&(t&&or.alternate!==null&&Le.delete(or.key===null?ke:or.key),H=f(or,H,ke),Ie===null?Me=or:Ie.sibling=or,Ie=or);return t&&Le.forEach(function(Tn){return r(F,Tn)}),ht&&Jn(F,ke),Me}function Qe(F,H,G,oe){if(G==null)throw Error(i(151));for(var Me=null,Ie=null,Le=H,ke=H=0,or=null,mt=G.next();Le!==null&&!mt.done;ke++,mt=G.next()){Le.index>ke?(or=Le,Le=null):or=Le.sibling;var Tn=Q(F,Le,mt.value,oe);if(Tn===null){Le===null&&(Le=or);break}t&&Le&&Tn.alternate===null&&r(F,Le),H=f(Tn,H,ke),Ie===null?Me=Tn:Ie.sibling=Tn,Ie=Tn,Le=or}if(mt.done)return n(F,Le),ht&&Jn(F,ke),Me;if(Le===null){for(;!mt.done;ke++,mt=G.next())mt=ce(F,mt.value,oe),mt!==null&&(H=f(mt,H,ke),Ie===null?Me=mt:Ie.sibling=mt,Ie=mt);return ht&&Jn(F,ke),Me}for(Le=o(Le);!mt.done;ke++,mt=G.next())mt=te(Le,F,ke,mt.value,oe),mt!==null&&(t&&mt.alternate!==null&&Le.delete(mt.key===null?ke:mt.key),H=f(mt,H,ke),Ie===null?Me=mt:Ie.sibling=mt,Ie=mt);return t&&Le.forEach(function(Qw){return r(F,Qw)}),ht&&Jn(F,ke),Me}function qt(F,H,G,oe){if(typeof G=="object"&&G!==null&&G.type===p&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case d:e:{for(var Me=G.key;H!==null;){if(H.key===Me){if(Me=G.type,Me===p){if(H.tag===7){n(F,H.sibling),oe=s(H,G.props.children),oe.return=F,F=oe;break e}}else if(H.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===C&&Jp(Me)===H.type){n(F,H.sibling),oe=s(H,G.props),io(oe,G),oe.return=F,F=oe;break e}n(F,H);break}else r(F,H);H=H.sibling}G.type===p?(oe=sl(G.props.children,F.mode,oe,G.key),oe.return=F,F=oe):(oe=cs(G.type,G.key,G.props,null,F.mode,oe),io(oe,G),oe.return=F,F=oe)}return x(F);case h:e:{for(Me=G.key;H!==null;){if(H.key===Me)if(H.tag===4&&H.stateNode.containerInfo===G.containerInfo&&H.stateNode.implementation===G.implementation){n(F,H.sibling),oe=s(H,G.children||[]),oe.return=F,F=oe;break e}else{n(F,H);break}else r(F,H);H=H.sibling}oe=sd(G,F.mode,oe),oe.return=F,F=oe}return x(F);case C:return Me=G._init,G=Me(G._payload),qt(F,H,G,oe)}if(W(G))return Be(F,H,G,oe);if(j(G)){if(Me=j(G),typeof Me!="function")throw Error(i(150));return G=Me.call(G),Qe(F,H,G,oe)}if(typeof G.then=="function")return qt(F,H,Gu(G),oe);if(G.$$typeof===w)return qt(F,H,os(F,G),oe);Vu(F,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,H!==null&&H.tag===6?(n(F,H.sibling),oe=s(H,G),oe.return=F,F=oe):(n(F,H),oe=ud(G,F.mode,oe),oe.return=F,F=oe),x(F)):n(F,H)}return function(F,H,G,oe){try{lo=0;var Me=qt(F,H,G,oe);return Zl=null,Me}catch(Le){if(Le===ao)throw Le;var Ie=Ir(29,Le,null,F.mode);return Ie.lanes=oe,Ie.return=F,Ie}finally{}}}var el=Ip(!0),e0=Ip(!1),Kl=me(null),Qu=me(0);function t0(t,r){t=Ja,Ae(Qu,t),Ae(Kl,r),Ja=t|r.baseLanes}function pf(){Ae(Qu,Ja),Ae(Kl,Kl.current)}function gf(){Ja=Qu.current,ve(Kl),ve(Qu)}var Kr=me(null),Ea=null;function sn(t){var r=t.alternate;Ae(rr,rr.current&1),Ae(Kr,t),Ea===null&&(r===null||Kl.current!==null||r.memoizedState!==null)&&(Ea=t)}function r0(t){if(t.tag===22){if(Ae(rr,rr.current),Ae(Kr,t),Ea===null){var r=t.alternate;r!==null&&r.memoizedState!==null&&(Ea=t)}}else cn()}function cn(){Ae(rr,rr.current),Ae(Kr,Kr.current)}function Fa(t){ve(Kr),Ea===t&&(Ea=null),ve(rr)}var rr=me(0);function Xu(t){for(var r=t;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zE=typeof AbortController<"u"?AbortController:function(){var t=[],r=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){r.aborted=!0,t.forEach(function(n){return n()})}},BE=e.unstable_scheduleCallback,jE=e.unstable_NormalPriority,ar={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function yf(){return{controller:new zE,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&BE(jE,function(){t.controller.abort()})}var uo=null,vf=0,Wl=0,Jl=null;function LE(t,r){if(uo===null){var n=uo=[];vf=0,Wl=$d(),Jl={status:"pending",value:void 0,then:function(o){n.push(o)}}}return vf++,r.then(a0,a0),r}function a0(){if(--vf===0&&uo!==null){Jl!==null&&(Jl.status="fulfilled");var t=uo;uo=null,Wl=0,Jl=null;for(var r=0;r<t.length;r++)(0,t[r])()}}function HE(t,r){var n=[],o={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){o.status="fulfilled",o.value=r;for(var s=0;s<n.length;s++)(0,n[s])(r)},function(s){for(o.status="rejected",o.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),o}var n0=q.S;q.S=function(t,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&LE(t,r),n0!==null&&n0(t,r)};var tl=me(null);function bf(){var t=tl.current;return t!==null?t:Tt.pooledCache}function Zu(t,r){r===null?Ae(tl,tl.current):Ae(tl,r.pool)}function l0(){var t=bf();return t===null?null:{parent:ar._currentValue,pool:t}}var fn=0,Je=null,xt=null,Wt=null,Ku=!1,Il=!1,rl=!1,Wu=0,so=0,ei=null,PE=0;function Vt(){throw Error(i(321))}function xf(t,r){if(r===null)return!1;for(var n=0;n<r.length&&n<t.length;n++)if(!Dr(t[n],r[n]))return!1;return!0}function Sf(t,r,n,o,s,f){return fn=f,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,q.H=t===null||t.memoizedState===null?al:dn,rl=!1,f=n(o,s),rl=!1,Il&&(f=o0(r,n,o,s)),i0(t),f}function i0(t){q.H=wa;var r=xt!==null&&xt.next!==null;if(fn=0,Wt=xt=Je=null,Ku=!1,so=0,ei=null,r)throw Error(i(300));t===null||lr||(t=t.dependencies,t!==null&&is(t)&&(lr=!0))}function o0(t,r,n,o){Je=t;var s=0;do{if(Il&&(ei=null),so=0,Il=!1,25<=s)throw Error(i(301));if(s+=1,Wt=xt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}q.H=nl,f=r(n,o)}while(Il);return f}function UE(){var t=q.H,r=t.useState()[0];return r=typeof r.then=="function"?co(r):r,t=t.useState()[0],(xt!==null?xt.memoizedState:null)!==t&&(Je.flags|=1024),r}function Ef(){var t=Wu!==0;return Wu=0,t}function wf(t,r,n){r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~n}function $f(t){if(Ku){for(t=t.memoizedState;t!==null;){var r=t.queue;r!==null&&(r.pending=null),t=t.next}Ku=!1}fn=0,Wt=xt=Je=null,Il=!1,so=Wu=0,ei=null}function Or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Je.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function Jt(){if(xt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var r=Wt===null?Je.memoizedState:Wt.next;if(r!==null)Wt=r,xt=t;else{if(t===null)throw Je.alternate===null?Error(i(467)):Error(i(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Wt===null?Je.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}var Ju;Ju=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function co(t){var r=so;return so+=1,ei===null&&(ei=[]),t=Kp(ei,t,r),r=Je,(Wt===null?r.memoizedState:Wt.next)===null&&(r=r.alternate,q.H=r===null||r.memoizedState===null?al:dn),t}function Iu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===w)return gr(t)}throw Error(i(438,String(t)))}function _f(t){var r=null,n=Je.updateQueue;if(n!==null&&(r=n.memoCache),r==null){var o=Je.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(r={data:o.data.map(function(s){return s.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),n===null&&(n=Ju(),Je.updateQueue=n),n.memoCache=r,n=r.data[r.index],n===void 0)for(n=r.data[r.index]=Array(t),o=0;o<t;o++)n[o]=z;return r.index++,n}function qa(t,r){return typeof r=="function"?r(t):r}function es(t){var r=Jt();return Nf(r,xt,t)}function Nf(t,r,n){var o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var s=t.baseQueue,f=o.pending;if(f!==null){if(s!==null){var x=s.next;s.next=f.next,f.next=x}r.baseQueue=s=f,o.pending=null}if(f=t.baseState,s===null)t.memoizedState=f;else{r=s.next;var R=x=null,A=null,U=r,ae=!1;do{var ce=U.lane&-536870913;if(ce!==U.lane?(st&ce)===ce:(fn&ce)===ce){var Q=U.revertLane;if(Q===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),ce===Wl&&(ae=!0);else if((fn&Q)===Q){U=U.next,Q===Wl&&(ae=!0);continue}else ce={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(R=A=ce,x=f):A=A.next=ce,Je.lanes|=Q,Sn|=Q;ce=U.action,rl&&n(f,ce),f=U.hasEagerState?U.eagerState:n(f,ce)}else Q={lane:ce,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(R=A=Q,x=f):A=A.next=Q,Je.lanes|=ce,Sn|=ce;U=U.next}while(U!==null&&U!==r);if(A===null?x=f:A.next=R,!Dr(f,t.memoizedState)&&(lr=!0,ae&&(n=Jl,n!==null)))throw n;t.memoizedState=f,t.baseState=x,t.baseQueue=A,o.lastRenderedState=f}return s===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Tf(t){var r=Jt(),n=r.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=t;var o=n.dispatch,s=n.pending,f=r.memoizedState;if(s!==null){n.pending=null;var x=s=s.next;do f=t(f,x.action),x=x.next;while(x!==s);Dr(f,r.memoizedState)||(lr=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),n.lastRenderedState=f}return[f,o]}function u0(t,r,n){var o=Je,s=Jt(),f=ht;if(f){if(n===void 0)throw Error(i(407));n=n()}else n=r();var x=!Dr((xt||s).memoizedState,n);if(x&&(s.memoizedState=n,lr=!0),s=s.queue,Of(f0.bind(null,o,s,t),[t]),s.getSnapshot!==r||x||Wt!==null&&Wt.memoizedState.tag&1){if(o.flags|=2048,ti(9,c0.bind(null,o,s,n,r),{destroy:void 0},null),Tt===null)throw Error(i(349));f||(fn&60)!==0||s0(o,r,n)}return n}function s0(t,r,n){t.flags|=16384,t={getSnapshot:r,value:n},r=Je.updateQueue,r===null?(r=Ju(),Je.updateQueue=r,r.stores=[t]):(n=r.stores,n===null?r.stores=[t]:n.push(t))}function c0(t,r,n,o){r.value=n,r.getSnapshot=o,d0(r)&&h0(t)}function f0(t,r,n){return n(function(){d0(r)&&h0(t)})}function d0(t){var r=t.getSnapshot;t=t.value;try{var n=r();return!Dr(t,n)}catch{return!0}}function h0(t){var r=un(t,2);r!==null&&wr(r,t,2)}function Rf(t){var r=Or();if(typeof t=="function"){var n=t;if(t=n(),rl){Gt(!0);try{n()}finally{Gt(!1)}}}return r.memoizedState=r.baseState=t,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},r}function m0(t,r,n,o){return t.baseState=n,Nf(t,xt,typeof o=="function"?o:qa)}function kE(t,r,n,o,s){if(as(t))throw Error(i(485));if(t=r.action,t!==null){var f={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};q.T!==null?n(!0):f.isTransition=!1,o(f),n=r.pending,n===null?(f.next=r.pending=f,p0(r,f)):(f.next=n.next,r.pending=n.next=f)}}function p0(t,r){var n=r.action,o=r.payload,s=t.state;if(r.isTransition){var f=q.T,x={};q.T=x;try{var R=n(s,o),A=q.S;A!==null&&A(x,R),g0(t,r,R)}catch(U){Mf(t,r,U)}finally{q.T=f}}else try{f=n(s,o),g0(t,r,f)}catch(U){Mf(t,r,U)}}function g0(t,r,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){y0(t,r,o)},function(o){return Mf(t,r,o)}):y0(t,r,n)}function y0(t,r,n){r.status="fulfilled",r.value=n,v0(r),t.state=n,r=t.pending,r!==null&&(n=r.next,n===r?t.pending=null:(n=n.next,r.next=n,p0(t,n)))}function Mf(t,r,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do r.status="rejected",r.reason=n,v0(r),r=r.next;while(r!==o)}t.action=null}function v0(t){t=t.listeners;for(var r=0;r<t.length;r++)(0,t[r])()}function b0(t,r){return r}function x0(t,r){if(ht){var n=Tt.formState;if(n!==null){e:{var o=Je;if(ht){if(dr){t:{for(var s=dr,f=Sa;s.nodeType!==8;){if(!f){s=null;break t}if(s=da(s.nextSibling),s===null){s=null;break t}}f=s.data,s=f==="F!"||f==="F"?s:null}if(s){dr=da(s.nextSibling),o=s.data==="F!";break e}}In(o)}o=!1}o&&(r=n[0])}}return n=Or(),n.memoizedState=n.baseState=r,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:r},n.queue=o,n=H0.bind(null,Je,o),o.dispatch=n,o=Rf(!1),f=Bf.bind(null,Je,!1,o.queue),o=Or(),s={state:r,dispatch:null,action:t,pending:null},o.queue=s,n=kE.bind(null,Je,s,f,n),s.dispatch=n,o.memoizedState=t,[r,n,!1]}function S0(t){var r=Jt();return E0(r,xt,t)}function E0(t,r,n){r=Nf(t,r,b0)[0],t=es(qa)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?co(r):r;var o=Jt(),s=o.queue,f=s.dispatch;return n!==o.memoizedState&&(Je.flags|=2048,ti(9,FE.bind(null,s,n),{destroy:void 0},null)),[r,f,t]}function FE(t,r){t.action=r}function w0(t){var r=Jt(),n=xt;if(n!==null)return E0(r,n,t);Jt(),r=r.memoizedState,n=Jt();var o=n.queue.dispatch;return n.memoizedState=t,[r,o,!1]}function ti(t,r,n,o){return t={tag:t,create:r,inst:n,deps:o,next:null},r=Je.updateQueue,r===null&&(r=Ju(),Je.updateQueue=r),n=r.lastEffect,n===null?r.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,r.lastEffect=t),t}function $0(){return Jt().memoizedState}function ts(t,r,n,o){var s=Or();Je.flags|=t,s.memoizedState=ti(1|r,n,{destroy:void 0},o===void 0?null:o)}function rs(t,r,n,o){var s=Jt();o=o===void 0?null:o;var f=s.memoizedState.inst;xt!==null&&o!==null&&xf(o,xt.memoizedState.deps)?s.memoizedState=ti(r,n,f,o):(Je.flags|=t,s.memoizedState=ti(1|r,n,f,o))}function _0(t,r){ts(8390656,8,t,r)}function Of(t,r){rs(2048,8,t,r)}function N0(t,r){return rs(4,2,t,r)}function T0(t,r){return rs(4,4,t,r)}function R0(t,r){if(typeof r=="function"){t=t();var n=r(t);return function(){typeof n=="function"?n():r(null)}}if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function M0(t,r,n){n=n!=null?n.concat([t]):null,rs(4,4,R0.bind(null,r,t),n)}function Cf(){}function O0(t,r){var n=Jt();r=r===void 0?null:r;var o=n.memoizedState;return r!==null&&xf(r,o[1])?o[0]:(n.memoizedState=[t,r],t)}function C0(t,r){var n=Jt();r=r===void 0?null:r;var o=n.memoizedState;if(r!==null&&xf(r,o[1]))return o[0];if(o=t(),rl){Gt(!0);try{t()}finally{Gt(!1)}}return n.memoizedState=[o,r],o}function Af(t,r,n){return n===void 0||(fn&1073741824)!==0?t.memoizedState=r:(t.memoizedState=n,t=Dg(),Je.lanes|=t,Sn|=t,n)}function A0(t,r,n,o){return Dr(n,r)?n:Kl.current!==null?(t=Af(t,n,o),Dr(t,r)||(lr=!0),t):(fn&42)===0?(lr=!0,t.memoizedState=n):(t=Dg(),Je.lanes|=t,Sn|=t,r)}function D0(t,r,n,o,s){var f=ee.p;ee.p=f!==0&&8>f?f:8;var x=q.T,R={};q.T=R,Bf(t,!1,r,n);try{var A=s(),U=q.S;if(U!==null&&U(R,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var ae=HE(A,o);fo(t,r,ae,Lr(t))}else fo(t,r,o,Lr(t))}catch(ce){fo(t,r,{then:function(){},status:"rejected",reason:ce},Lr())}finally{ee.p=f,q.T=x}}function qE(){}function Df(t,r,n,o){if(t.tag!==5)throw Error(i(476));var s=z0(t).queue;D0(t,s,r,fe,n===null?qE:function(){return B0(t),n(o)})}function z0(t){var r=t.memoizedState;if(r!==null)return r;r={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:fe},next:null};var n={};return r.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},next:null},t.memoizedState=r,t=t.alternate,t!==null&&(t.memoizedState=r),r}function B0(t){var r=z0(t).next.queue;fo(t,r,{},Lr())}function zf(){return gr(Ao)}function j0(){return Jt().memoizedState}function L0(){return Jt().memoizedState}function YE(t){for(var r=t.return;r!==null;){switch(r.tag){case 24:case 3:var n=Lr();t=pn(n);var o=gn(r,t,n);o!==null&&(wr(o,r,n),po(o,r,n)),r={cache:yf()},t.payload=r;return}r=r.return}}function GE(t,r,n){var o=Lr();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},as(t)?P0(r,n):(n=cf(t,r,n,o),n!==null&&(wr(n,t,o),U0(n,r,o)))}function H0(t,r,n){var o=Lr();fo(t,r,n,o)}function fo(t,r,n,o){var s={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(as(t))P0(r,s);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var x=r.lastRenderedState,R=f(x,n);if(s.hasEagerState=!0,s.eagerState=R,Dr(R,x))return Uu(t,r,s,0),Tt===null&&Pu(),!1}catch{}finally{}if(n=cf(t,r,s,o),n!==null)return wr(n,t,o),U0(n,r,o),!0}return!1}function Bf(t,r,n,o){if(o={lane:2,revertLane:$d(),action:o,hasEagerState:!1,eagerState:null,next:null},as(t)){if(r)throw Error(i(479))}else r=cf(t,n,o,2),r!==null&&wr(r,t,2)}function as(t){var r=t.alternate;return t===Je||r!==null&&r===Je}function P0(t,r){Il=Ku=!0;var n=t.pending;n===null?r.next=r:(r.next=n.next,n.next=r),t.pending=r}function U0(t,r,n){if((n&4194176)!==0){var o=r.lanes;o&=t.pendingLanes,n|=o,r.lanes=n,ze(t,n)}}var wa={readContext:gr,use:Iu,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt};wa.useCacheRefresh=Vt,wa.useMemoCache=Vt,wa.useHostTransitionStatus=Vt,wa.useFormState=Vt,wa.useActionState=Vt,wa.useOptimistic=Vt;var al={readContext:gr,use:Iu,useCallback:function(t,r){return Or().memoizedState=[t,r===void 0?null:r],t},useContext:gr,useEffect:_0,useImperativeHandle:function(t,r,n){n=n!=null?n.concat([t]):null,ts(4194308,4,R0.bind(null,r,t),n)},useLayoutEffect:function(t,r){return ts(4194308,4,t,r)},useInsertionEffect:function(t,r){ts(4,2,t,r)},useMemo:function(t,r){var n=Or();r=r===void 0?null:r;var o=t();if(rl){Gt(!0);try{t()}finally{Gt(!1)}}return n.memoizedState=[o,r],o},useReducer:function(t,r,n){var o=Or();if(n!==void 0){var s=n(r);if(rl){Gt(!0);try{n(r)}finally{Gt(!1)}}}else s=r;return o.memoizedState=o.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},o.queue=t,t=t.dispatch=GE.bind(null,Je,t),[o.memoizedState,t]},useRef:function(t){var r=Or();return t={current:t},r.memoizedState=t},useState:function(t){t=Rf(t);var r=t.queue,n=H0.bind(null,Je,r);return r.dispatch=n,[t.memoizedState,n]},useDebugValue:Cf,useDeferredValue:function(t,r){var n=Or();return Af(n,t,r)},useTransition:function(){var t=Rf(!1);return t=D0.bind(null,Je,t.queue,!0,!1),Or().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,r,n){var o=Je,s=Or();if(ht){if(n===void 0)throw Error(i(407));n=n()}else{if(n=r(),Tt===null)throw Error(i(349));(st&60)!==0||s0(o,r,n)}s.memoizedState=n;var f={value:n,getSnapshot:r};return s.queue=f,_0(f0.bind(null,o,f,t),[t]),o.flags|=2048,ti(9,c0.bind(null,o,f,n,r),{destroy:void 0},null),n},useId:function(){var t=Or(),r=Tt.identifierPrefix;if(ht){var n=ka,o=Ua;n=(o&~(1<<32-Ht(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=Wu++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=PE++,r=":"+r+"r"+n.toString(32)+":";return t.memoizedState=r},useCacheRefresh:function(){return Or().memoizedState=YE.bind(null,Je)}};al.useMemoCache=_f,al.useHostTransitionStatus=zf,al.useFormState=x0,al.useActionState=x0,al.useOptimistic=function(t){var r=Or();r.memoizedState=r.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=n,r=Bf.bind(null,Je,!0,n),n.dispatch=r,[t,r]};var dn={readContext:gr,use:Iu,useCallback:O0,useContext:gr,useEffect:Of,useImperativeHandle:M0,useInsertionEffect:N0,useLayoutEffect:T0,useMemo:C0,useReducer:es,useRef:$0,useState:function(){return es(qa)},useDebugValue:Cf,useDeferredValue:function(t,r){var n=Jt();return A0(n,xt.memoizedState,t,r)},useTransition:function(){var t=es(qa)[0],r=Jt().memoizedState;return[typeof t=="boolean"?t:co(t),r]},useSyncExternalStore:u0,useId:j0};dn.useCacheRefresh=L0,dn.useMemoCache=_f,dn.useHostTransitionStatus=zf,dn.useFormState=S0,dn.useActionState=S0,dn.useOptimistic=function(t,r){var n=Jt();return m0(n,xt,t,r)};var nl={readContext:gr,use:Iu,useCallback:O0,useContext:gr,useEffect:Of,useImperativeHandle:M0,useInsertionEffect:N0,useLayoutEffect:T0,useMemo:C0,useReducer:Tf,useRef:$0,useState:function(){return Tf(qa)},useDebugValue:Cf,useDeferredValue:function(t,r){var n=Jt();return xt===null?Af(n,t,r):A0(n,xt.memoizedState,t,r)},useTransition:function(){var t=Tf(qa)[0],r=Jt().memoizedState;return[typeof t=="boolean"?t:co(t),r]},useSyncExternalStore:u0,useId:j0};nl.useCacheRefresh=L0,nl.useMemoCache=_f,nl.useHostTransitionStatus=zf,nl.useFormState=w0,nl.useActionState=w0,nl.useOptimistic=function(t,r){var n=Jt();return xt!==null?m0(n,xt,t,r):(n.baseState=t,[t,n.queue.dispatch])};function jf(t,r,n,o){r=t.memoizedState,n=n(o,r),n=n==null?r:Z({},r,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lf={isMounted:function(t){return(t=t._reactInternals)?ue(t)===t:!1},enqueueSetState:function(t,r,n){t=t._reactInternals;var o=Lr(),s=pn(o);s.payload=r,n!=null&&(s.callback=n),r=gn(t,s,o),r!==null&&(wr(r,t,o),po(r,t,o))},enqueueReplaceState:function(t,r,n){t=t._reactInternals;var o=Lr(),s=pn(o);s.tag=1,s.payload=r,n!=null&&(s.callback=n),r=gn(t,s,o),r!==null&&(wr(r,t,o),po(r,t,o))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var n=Lr(),o=pn(n);o.tag=2,r!=null&&(o.callback=r),r=gn(t,o,n),r!==null&&(wr(r,t,n),po(r,t,n))}};function k0(t,r,n,o,s,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):r.prototype&&r.prototype.isPureReactComponent?!Ji(n,o)||!Ji(s,f):!0}function F0(t,r,n,o){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==t&&Lf.enqueueReplaceState(r,r.state,null)}function ll(t,r){var n=r;if("ref"in r){n={};for(var o in r)o!=="ref"&&(n[o]=r[o])}if(t=t.defaultProps){n===r&&(n=Z({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}var ns=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function q0(t){ns(t)}function Y0(t){console.error(t)}function G0(t){ns(t)}function ls(t,r){try{var n=t.onUncaughtError;n(r.value,{componentStack:r.stack})}catch(o){setTimeout(function(){throw o})}}function V0(t,r,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Hf(t,r,n){return n=pn(n),n.tag=3,n.payload={element:null},n.callback=function(){ls(t,r)},n}function Q0(t){return t=pn(t),t.tag=3,t}function X0(t,r,n,o){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var f=o.value;t.payload=function(){return s(f)},t.callback=function(){V0(r,n,o)}}var x=n.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){V0(r,n,o),typeof s!="function"&&(En===null?En=new Set([this]):En.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function VE(t,r,n,o,s){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(r=n.alternate,r!==null&&mo(r,n,s,!0),n=Kr.current,n!==null){switch(n.tag){case 13:return Ea===null?bd():n.alternate===null&&Ft===0&&(Ft=3),n.flags&=-257,n.flags|=65536,n.lanes=s,o===mf?n.flags|=16384:(r=n.updateQueue,r===null?n.updateQueue=new Set([o]):r.add(o),Sd(t,o,s)),!1;case 22:return n.flags|=65536,o===mf?n.flags|=16384:(r=n.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=r):(n=r.retryQueue,n===null?r.retryQueue=new Set([o]):n.add(o)),Sd(t,o,s)),!1}throw Error(i(435,n.tag))}return Sd(t,o,s),bd(),!1}if(ht)return r=Kr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=s,o!==hf&&(t=Error(i(422),{cause:o}),ro(Qr(t,n)))):(o!==hf&&(r=Error(i(423),{cause:o}),ro(Qr(r,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,o=Qr(o,n),s=Hf(t.stateNode,o,s),If(t,s),Ft!==4&&(Ft=2)),!1;var f=Error(i(520),{cause:o});if(f=Qr(f,n),wo===null?wo=[f]:wo.push(f),Ft!==4&&(Ft=2),r===null)return!0;o=Qr(o,n),n=r;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=Hf(n.stateNode,o,t),If(n,t),!1;case 1:if(r=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(En===null||!En.has(f))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Q0(s),X0(s,t,n,o),If(n,s),!1}n=n.return}while(n!==null);return!1}var Z0=Error(i(461)),lr=!1;function hr(t,r,n,o){r.child=t===null?e0(r,null,n,o):el(r,t.child,n,o)}function K0(t,r,n,o,s){n=n.render;var f=r.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return ol(r),o=Sf(t,r,n,x,f,s),R=Ef(),t!==null&&!lr?(wf(t,r,s),Ya(t,r,s)):(ht&&R&&ff(r),r.flags|=1,hr(t,r,o,s),r.child)}function W0(t,r,n,o,s){if(t===null){var f=n.type;return typeof f=="function"&&!od(f)&&f.defaultProps===void 0&&n.compare===null?(r.tag=15,r.type=f,J0(t,r,f,o,s)):(t=cs(n.type,null,o,r,r.mode,s),t.ref=r.ref,t.return=r,r.child=t)}if(f=t.child,!Qf(t,s)){var x=f.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(x,o)&&t.ref===r.ref)return Ya(t,r,s)}return r.flags|=1,t=xn(f,o),t.ref=r.ref,t.return=r,r.child=t}function J0(t,r,n,o,s){if(t!==null){var f=t.memoizedProps;if(Ji(f,o)&&t.ref===r.ref)if(lr=!1,r.pendingProps=o=f,Qf(t,s))(t.flags&131072)!==0&&(lr=!0);else return r.lanes=t.lanes,Ya(t,r,s)}return Pf(t,r,n,o,s)}function I0(t,r,n){var o=r.pendingProps,s=o.children,f=(r.stateNode._pendingVisibility&2)!==0,x=t!==null?t.memoizedState:null;if(ho(t,r),o.mode==="hidden"||f){if((r.flags&128)!==0){if(o=x!==null?x.baseLanes|n:n,t!==null){for(s=r.child=t.child,f=0;s!==null;)f=f|s.lanes|s.childLanes,s=s.sibling;r.childLanes=f&~o}else r.childLanes=0,r.child=null;return eg(t,r,o,n)}if((n&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},t!==null&&Zu(r,x!==null?x.cachePool:null),x!==null?t0(r,x):pf(),r0(r);else return r.lanes=r.childLanes=536870912,eg(t,r,x!==null?x.baseLanes|n:n,n)}else x!==null?(Zu(r,x.cachePool),t0(r,x),cn(),r.memoizedState=null):(t!==null&&Zu(r,null),pf(),cn());return hr(t,r,s,n),r.child}function eg(t,r,n,o){var s=bf();return s=s===null?null:{parent:ar._currentValue,pool:s},r.memoizedState={baseLanes:n,cachePool:s},t!==null&&Zu(r,null),pf(),r0(r),t!==null&&mo(t,r,o,!0),null}function ho(t,r){var n=r.ref;if(n===null)t!==null&&t.ref!==null&&(r.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(t===null||t.ref!==n)&&(r.flags|=2097664)}}function Pf(t,r,n,o,s){return ol(r),n=Sf(t,r,n,o,void 0,s),o=Ef(),t!==null&&!lr?(wf(t,r,s),Ya(t,r,s)):(ht&&o&&ff(r),r.flags|=1,hr(t,r,n,s),r.child)}function tg(t,r,n,o,s,f){return ol(r),r.updateQueue=null,n=o0(r,o,n,s),i0(t),o=Ef(),t!==null&&!lr?(wf(t,r,f),Ya(t,r,f)):(ht&&o&&ff(r),r.flags|=1,hr(t,r,n,f),r.child)}function rg(t,r,n,o,s){if(ol(r),r.stateNode===null){var f=Vl,x=n.contextType;typeof x=="object"&&x!==null&&(f=gr(x)),f=new n(o,f),r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Lf,r.stateNode=f,f._reactInternals=r,f=r.stateNode,f.props=o,f.state=r.memoizedState,f.refs={},Wf(r),x=n.contextType,f.context=typeof x=="object"&&x!==null?gr(x):Vl,f.state=r.memoizedState,x=n.getDerivedStateFromProps,typeof x=="function"&&(jf(r,n,x,o),f.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Lf.enqueueReplaceState(f,f.state,null),yo(r,o,f,s),go(),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308),o=!0}else if(t===null){f=r.stateNode;var R=r.memoizedProps,A=ll(n,R);f.props=A;var U=f.context,ae=n.contextType;x=Vl,typeof ae=="object"&&ae!==null&&(x=gr(ae));var ce=n.getDerivedStateFromProps;ae=typeof ce=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=r.pendingProps!==R,ae||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||U!==x)&&F0(r,f,o,x),mn=!1;var Q=r.memoizedState;f.state=Q,yo(r,o,f,s),go(),U=r.memoizedState,R||Q!==U||mn?(typeof ce=="function"&&(jf(r,n,ce,o),U=r.memoizedState),(A=mn||k0(r,n,A,o,Q,U,x))?(ae||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(r.flags|=4194308)):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=U),f.props=o,f.state=U,f.context=x,o=A):(typeof f.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{f=r.stateNode,Jf(t,r),x=r.memoizedProps,ae=ll(n,x),f.props=ae,ce=r.pendingProps,Q=f.context,U=n.contextType,A=Vl,typeof U=="object"&&U!==null&&(A=gr(U)),R=n.getDerivedStateFromProps,(U=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ce||Q!==A)&&F0(r,f,o,A),mn=!1,Q=r.memoizedState,f.state=Q,yo(r,o,f,s),go();var te=r.memoizedState;x!==ce||Q!==te||mn||t!==null&&t.dependencies!==null&&is(t.dependencies)?(typeof R=="function"&&(jf(r,n,R,o),te=r.memoizedState),(ae=mn||k0(r,n,ae,o,Q,te,A)||t!==null&&t.dependencies!==null&&is(t.dependencies))?(U||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,te,A),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,te,A)),typeof f.componentDidUpdate=="function"&&(r.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=te),f.props=o,f.state=te,f.context=A,o=ae):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(r.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&Q===t.memoizedState||(r.flags|=1024),o=!1)}return f=o,ho(t,r),o=(r.flags&128)!==0,f||o?(f=r.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:f.render(),r.flags|=1,t!==null&&o?(r.child=el(r,t.child,null,s),r.child=el(r,null,n,s)):hr(t,r,n,s),r.memoizedState=f.state,t=r.child):t=Ya(t,r,s),t}function ag(t,r,n,o){return to(),r.flags|=256,hr(t,r,n,o),r.child}var Uf={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:l0()}}function Ff(t,r,n){return t=t!==null?t.childLanes&~n:0,r&&(t|=ea),t}function ng(t,r,n){var o=r.pendingProps,s=!1,f=(r.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(rr.current&2)!==0),x&&(s=!0,r.flags&=-129),x=(r.flags&32)!==0,r.flags&=-33,t===null){if(ht){if(s?sn(r):cn(),ht){var R=dr,A;if(A=R){e:{for(A=R,R=Sa;A.nodeType!==8;){if(!R){R=null;break e}if(A=da(A.nextSibling),A===null){R=null;break e}}R=A}R!==null?(r.memoizedState={dehydrated:R,treeContext:Wn!==null?{id:Ua,overflow:ka}:null,retryLane:536870912},A=Ir(18,null,null,0),A.stateNode=R,A.return=r,r.child=A,Er=r,dr=null,A=!0):A=!1}A||In(r)}if(R=r.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?r.lanes=16:r.lanes=536870912,null;Fa(r)}return R=o.children,o=o.fallback,s?(cn(),s=r.mode,R=Yf({mode:"hidden",children:R},s),o=sl(o,s,n,null),R.return=r,o.return=r,R.sibling=o,r.child=R,s=r.child,s.memoizedState=kf(n),s.childLanes=Ff(t,x,n),r.memoizedState=Uf,o):(sn(r),qf(r,R))}if(A=t.memoizedState,A!==null&&(R=A.dehydrated,R!==null)){if(f)r.flags&256?(sn(r),r.flags&=-257,r=Gf(t,r,n)):r.memoizedState!==null?(cn(),r.child=t.child,r.flags|=128,r=null):(cn(),s=o.fallback,R=r.mode,o=Yf({mode:"visible",children:o.children},R),s=sl(s,R,n,null),s.flags|=2,o.return=r,s.return=r,o.sibling=s,r.child=o,el(r,t.child,null,n),o=r.child,o.memoizedState=kf(n),o.childLanes=Ff(t,x,n),r.memoizedState=Uf,r=s);else if(sn(r),R.data==="$!"){if(x=R.nextSibling&&R.nextSibling.dataset,x)var U=x.dgst;x=U,o=Error(i(419)),o.stack="",o.digest=x,ro({value:o,source:null,stack:null}),r=Gf(t,r,n)}else if(lr||mo(t,r,n,!1),x=(n&t.childLanes)!==0,lr||x){if(x=Tt,x!==null){if(o=n&-n,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(x.suspendedLanes|n))!==0?0:o,o!==0&&o!==A.retryLane)throw A.retryLane=o,un(t,o),wr(x,t,o),Z0}R.data==="$?"||bd(),r=Gf(t,r,n)}else R.data==="$?"?(r.flags|=128,r.child=t.child,r=ow.bind(null,t),R._reactRetry=r,r=null):(t=A.treeContext,dr=da(R.nextSibling),Er=r,ht=!0,ca=null,Sa=!1,t!==null&&(Xr[Zr++]=Ua,Xr[Zr++]=ka,Xr[Zr++]=Wn,Ua=t.id,ka=t.overflow,Wn=r),r=qf(r,o.children),r.flags|=4096);return r}return s?(cn(),s=o.fallback,R=r.mode,A=t.child,U=A.sibling,o=xn(A,{mode:"hidden",children:o.children}),o.subtreeFlags=A.subtreeFlags&31457280,U!==null?s=xn(U,s):(s=sl(s,R,n,null),s.flags|=2),s.return=r,o.return=r,o.sibling=s,r.child=o,o=s,s=r.child,R=t.child.memoizedState,R===null?R=kf(n):(A=R.cachePool,A!==null?(U=ar._currentValue,A=A.parent!==U?{parent:U,pool:U}:A):A=l0(),R={baseLanes:R.baseLanes|n,cachePool:A}),s.memoizedState=R,s.childLanes=Ff(t,x,n),r.memoizedState=Uf,o):(sn(r),n=t.child,t=n.sibling,n=xn(n,{mode:"visible",children:o.children}),n.return=r,n.sibling=null,t!==null&&(x=r.deletions,x===null?(r.deletions=[t],r.flags|=16):x.push(t)),r.child=n,r.memoizedState=null,n)}function qf(t,r){return r=Yf({mode:"visible",children:r},t.mode),r.return=t,t.child=r}function Yf(t,r){return Og(t,r,0,null)}function Gf(t,r,n){return el(r,t.child,null,n),t=qf(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function lg(t,r,n){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r),Zf(t.return,r,n)}function Vf(t,r,n,o,s){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:s}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=n,f.tailMode=s)}function ig(t,r,n){var o=r.pendingProps,s=o.revealOrder,f=o.tail;if(hr(t,r,o.children,n),o=rr.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lg(t,n,r);else if(t.tag===19)lg(t,n,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Ae(rr,o),s){case"forwards":for(n=r.child,s=null;n!==null;)t=n.alternate,t!==null&&Xu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=r.child,r.child=null):(s=n.sibling,n.sibling=null),Vf(r,!1,s,n,f);break;case"backwards":for(n=null,s=r.child,r.child=null;s!==null;){if(t=s.alternate,t!==null&&Xu(t)===null){r.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Vf(r,!0,n,null,f);break;case"together":Vf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ya(t,r,n){if(t!==null&&(r.dependencies=t.dependencies),Sn|=r.lanes,(n&r.childLanes)===0)if(t!==null){if(mo(t,r,n,!1),(n&r.childLanes)===0)return null}else return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,n=xn(t,t.pendingProps),r.child=n,n.return=r;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=r;n.sibling=null}return r.child}function Qf(t,r){return(t.lanes&r)!==0?!0:(t=t.dependencies,!!(t!==null&&is(t)))}function QE(t,r,n){switch(r.tag){case 3:Xt(r,r.stateNode.containerInfo),hn(r,ar,t.memoizedState.cache),to();break;case 27:case 5:Ct(r);break;case 4:Xt(r,r.stateNode.containerInfo);break;case 10:hn(r,r.type,r.memoizedProps.value);break;case 13:var o=r.memoizedState;if(o!==null)return o.dehydrated!==null?(sn(r),r.flags|=128,null):(n&r.child.childLanes)!==0?ng(t,r,n):(sn(r),t=Ya(t,r,n),t!==null?t.sibling:null);sn(r);break;case 19:var s=(t.flags&128)!==0;if(o=(n&r.childLanes)!==0,o||(mo(t,r,n,!1),o=(n&r.childLanes)!==0),s){if(o)return ig(t,r,n);r.flags|=128}if(s=r.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ae(rr,rr.current),o)break;return null;case 22:case 23:return r.lanes=0,I0(t,r,n);case 24:hn(r,ar,t.memoizedState.cache)}return Ya(t,r,n)}function og(t,r,n){if(t!==null)if(t.memoizedProps!==r.pendingProps)lr=!0;else{if(!Qf(t,n)&&(r.flags&128)===0)return lr=!1,QE(t,r,n);lr=(t.flags&131072)!==0}else lr=!1,ht&&(r.flags&1048576)!==0&&Gp(r,qu,r.index);switch(r.lanes=0,r.tag){case 16:e:{t=r.pendingProps;var o=r.elementType,s=o._init;if(o=s(o._payload),r.type=o,typeof o=="function")od(o)?(t=ll(o,t),r.tag=1,r=rg(null,r,o,t,n)):(r.tag=0,r=Pf(null,r,o,t,n));else{if(o!=null){if(s=o.$$typeof,s===S){r.tag=11,r=K0(null,r,o,t,n);break e}else if(s===T){r.tag=14,r=W0(null,r,o,t,n);break e}}throw r=K(o)||o,Error(i(306,r,""))}}return r;case 0:return Pf(t,r,r.type,r.pendingProps,n);case 1:return o=r.type,s=ll(o,r.pendingProps),rg(t,r,o,s,n);case 3:e:{if(Xt(r,r.stateNode.containerInfo),t===null)throw Error(i(387));var f=r.pendingProps;s=r.memoizedState,o=s.element,Jf(t,r),yo(r,f,null,n);var x=r.memoizedState;if(f=x.cache,hn(r,ar,f),f!==s.cache&&Kf(r,[ar],n,!0),go(),f=x.element,s.isDehydrated)if(s={element:f,isDehydrated:!1,cache:x.cache},r.updateQueue.baseState=s,r.memoizedState=s,r.flags&256){r=ag(t,r,f,n);break e}else if(f!==o){o=Qr(Error(i(424)),r),ro(o),r=ag(t,r,f,n);break e}else for(dr=da(r.stateNode.containerInfo.firstChild),Er=r,ht=!0,ca=null,Sa=!0,n=e0(r,null,f,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),f===o){r=Ya(t,r,n);break e}hr(t,r,f,n)}r=r.child}return r;case 26:return ho(t,r),t===null?(n=cy(r.type,null,r.pendingProps,null))?r.memoizedState=n:ht||(n=r.type,t=r.pendingProps,o=Es(Ve.current).createElement(n),o[Re]=r,o[Ye]=t,mr(o,n,t),Nt(o),r.stateNode=o):r.memoizedState=cy(r.type,t.memoizedProps,r.pendingProps,t.memoizedState),null;case 27:return Ct(r),t===null&&ht&&(o=r.stateNode=oy(r.type,r.pendingProps,Ve.current),Er=r,Sa=!0,dr=da(o.firstChild)),o=r.pendingProps.children,t!==null||ht?hr(t,r,o,n):r.child=el(r,null,o,n),ho(t,r),r.child;case 5:return t===null&&ht&&((s=o=dr)&&(o=ww(o,r.type,r.pendingProps,Sa),o!==null?(r.stateNode=o,Er=r,dr=da(o.firstChild),Sa=!1,s=!0):s=!1),s||In(r)),Ct(r),s=r.type,f=r.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Dd(s,f)?o=null:x!==null&&Dd(s,x)&&(r.flags|=32),r.memoizedState!==null&&(s=Sf(t,r,UE,null,null,n),Ao._currentValue=s),ho(t,r),hr(t,r,o,n),r.child;case 6:return t===null&&ht&&((t=n=dr)&&(n=$w(n,r.pendingProps,Sa),n!==null?(r.stateNode=n,Er=r,dr=null,t=!0):t=!1),t||In(r)),null;case 13:return ng(t,r,n);case 4:return Xt(r,r.stateNode.containerInfo),o=r.pendingProps,t===null?r.child=el(r,null,o,n):hr(t,r,o,n),r.child;case 11:return K0(t,r,r.type,r.pendingProps,n);case 7:return hr(t,r,r.pendingProps,n),r.child;case 8:return hr(t,r,r.pendingProps.children,n),r.child;case 12:return hr(t,r,r.pendingProps.children,n),r.child;case 10:return o=r.pendingProps,hn(r,r.type,o.value),hr(t,r,o.children,n),r.child;case 9:return s=r.type._context,o=r.pendingProps.children,ol(r),s=gr(s),o=o(s),r.flags|=1,hr(t,r,o,n),r.child;case 14:return W0(t,r,r.type,r.pendingProps,n);case 15:return J0(t,r,r.type,r.pendingProps,n);case 19:return ig(t,r,n);case 22:return I0(t,r,n);case 24:return ol(r),o=gr(ar),t===null?(s=bf(),s===null&&(s=Tt,f=yf(),s.pooledCache=f,f.refCount++,f!==null&&(s.pooledCacheLanes|=n),s=f),r.memoizedState={parent:o,cache:s},Wf(r),hn(r,ar,s)):((t.lanes&n)!==0&&(Jf(t,r),yo(r,null,null,n),go()),s=t.memoizedState,f=r.memoizedState,s.parent!==o?(s={parent:o,cache:o},r.memoizedState=s,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=s),hn(r,ar,o)):(o=f.cache,hn(r,ar,o),o!==s.cache&&Kf(r,[ar],n,!0))),hr(t,r,r.pendingProps.children,n),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}var Xf=me(null),il=null,Ga=null;function hn(t,r,n){Ae(Xf,r._currentValue),r._currentValue=n}function Va(t){t._currentValue=Xf.current,ve(Xf)}function Zf(t,r,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),t===n)break;t=t.return}}function Kf(t,r,n,o){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var f=s.dependencies;if(f!==null){var x=s.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=s;for(var A=0;A<r.length;A++)if(R.context===r[A]){f.lanes|=n,R=f.alternate,R!==null&&(R.lanes|=n),Zf(f.return,n,t),o||(x=null);break e}f=R.next}}else if(s.tag===18){if(x=s.return,x===null)throw Error(i(341));x.lanes|=n,f=x.alternate,f!==null&&(f.lanes|=n),Zf(x,n,t),x=null}else x=s.child;if(x!==null)x.return=s;else for(x=s;x!==null;){if(x===t){x=null;break}if(s=x.sibling,s!==null){s.return=x.return,x=s;break}x=x.return}s=x}}function mo(t,r,n,o){t=null;for(var s=r,f=!1;s!==null;){if(!f){if((s.flags&524288)!==0)f=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var x=s.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var R=s.type;Dr(s.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(s===Lt.current){if(x=s.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}s=s.return}t!==null&&Kf(r,t,n,o),r.flags|=262144}function is(t){for(t=t.firstContext;t!==null;){if(!Dr(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ol(t){il=t,Ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function gr(t){return ug(il,t)}function os(t,r){return il===null&&ol(t),ug(t,r)}function ug(t,r){var n=r._currentValue;if(r={context:r,memoizedValue:n,next:null},Ga===null){if(t===null)throw Error(i(308));Ga=r,t.dependencies={lanes:0,firstContext:r},t.flags|=524288}else Ga=Ga.next=r;return n}var mn=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function gn(t,r,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(jt&2)!==0){var s=o.pending;return s===null?r.next=r:(r.next=s.next,s.next=r),o.pending=r,r=ku(t),qp(t,null,n),r}return Uu(t,o,r,n),ku(t)}function po(t,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194176)!==0)){var o=r.lanes;o&=t.pendingLanes,n|=o,r.lanes=n,ze(t,n)}}function If(t,r){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var s=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var x={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?s=f=x:f=f.next=x,n=n.next}while(n!==null);f===null?s=f=r:f=f.next=r}else s=f=r;n={baseState:o.baseState,firstBaseUpdate:s,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=r:t.next=r,n.lastBaseUpdate=r}var ed=!1;function go(){if(ed){var t=Jl;if(t!==null)throw t}}function yo(t,r,n,o){ed=!1;var s=t.updateQueue;mn=!1;var f=s.firstBaseUpdate,x=s.lastBaseUpdate,R=s.shared.pending;if(R!==null){s.shared.pending=null;var A=R,U=A.next;A.next=null,x===null?f=U:x.next=U,x=A;var ae=t.alternate;ae!==null&&(ae=ae.updateQueue,R=ae.lastBaseUpdate,R!==x&&(R===null?ae.firstBaseUpdate=U:R.next=U,ae.lastBaseUpdate=A))}if(f!==null){var ce=s.baseState;x=0,ae=U=A=null,R=f;do{var Q=R.lane&-536870913,te=Q!==R.lane;if(te?(st&Q)===Q:(o&Q)===Q){Q!==0&&Q===Wl&&(ed=!0),ae!==null&&(ae=ae.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Be=t,Qe=R;Q=r;var qt=n;switch(Qe.tag){case 1:if(Be=Qe.payload,typeof Be=="function"){ce=Be.call(qt,ce,Q);break e}ce=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=Qe.payload,Q=typeof Be=="function"?Be.call(qt,ce,Q):Be,Q==null)break e;ce=Z({},ce,Q);break e;case 2:mn=!0}}Q=R.callback,Q!==null&&(t.flags|=64,te&&(t.flags|=8192),te=s.callbacks,te===null?s.callbacks=[Q]:te.push(Q))}else te={lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ae===null?(U=ae=te,A=ce):ae=ae.next=te,x|=Q;if(R=R.next,R===null){if(R=s.shared.pending,R===null)break;te=R,R=te.next,te.next=null,s.lastBaseUpdate=te,s.shared.pending=null}}while(!0);ae===null&&(A=ce),s.baseState=A,s.firstBaseUpdate=U,s.lastBaseUpdate=ae,f===null&&(s.shared.lanes=0),Sn|=x,t.lanes=x,t.memoizedState=ce}}function sg(t,r){if(typeof t!="function")throw Error(i(191,t));t.call(r)}function cg(t,r){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)sg(n[t],r)}function vo(t,r){try{var n=r.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var s=o.next;n=s;do{if((n.tag&t)===t){o=void 0;var f=n.create,x=n.inst;o=f(),x.destroy=o}n=n.next}while(n!==s)}}catch(R){$t(r,r.return,R)}}function yn(t,r,n){try{var o=r.updateQueue,s=o!==null?o.lastEffect:null;if(s!==null){var f=s.next;o=f;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,s=r;var A=n;try{R()}catch(U){$t(s,A,U)}}}o=o.next}while(o!==f)}}catch(U){$t(r,r.return,U)}}function fg(t){var r=t.updateQueue;if(r!==null){var n=t.stateNode;try{cg(r,n)}catch(o){$t(t,t.return,o)}}}function dg(t,r,n){n.props=ll(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){$t(t,r,o)}}function ul(t,r){try{var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=o;break;default:s=o}typeof n=="function"?t.refCleanup=n(s):n.current=s}}catch(f){$t(t,r,f)}}function zr(t,r){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(s){$t(t,r,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){$t(t,r,s)}else n.current=null}function hg(t){var r=t.type,n=t.memoizedProps,o=t.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(s){$t(t,t.return,s)}}function mg(t,r,n){try{var o=t.stateNode;vw(o,t.type,n,r),o[Ye]=r}catch(s){$t(t,t.return,s)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,r,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(t,n)):(r=n,r.appendChild(t)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Ss));else if(o!==4&&o!==27&&(t=t.child,t!==null))for(rd(t,r,n),t=t.sibling;t!==null;)rd(t,r,n),t=t.sibling}function us(t,r,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(o!==4&&o!==27&&(t=t.child,t!==null))for(us(t,r,n),t=t.sibling;t!==null;)us(t,r,n),t=t.sibling}var Qa=!1,kt=!1,ad=!1,gg=typeof WeakSet=="function"?WeakSet:Set,ir=null,yg=!1;function XE(t,r){if(t=t.containerInfo,Cd=Rs,t=zp(t),nf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var s=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var x=0,R=-1,A=-1,U=0,ae=0,ce=t,Q=null;t:for(;;){for(var te;ce!==n||s!==0&&ce.nodeType!==3||(R=x+s),ce!==f||o!==0&&ce.nodeType!==3||(A=x+o),ce.nodeType===3&&(x+=ce.nodeValue.length),(te=ce.firstChild)!==null;)Q=ce,ce=te;for(;;){if(ce===t)break t;if(Q===n&&++U===s&&(R=x),Q===f&&++ae===o&&(A=x),(te=ce.nextSibling)!==null)break;ce=Q,Q=ce.parentNode}ce=te}n=R===-1||A===-1?null:{start:R,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ad={focusedElem:t,selectionRange:n},Rs=!1,ir=r;ir!==null;)if(r=ir,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ir=t;else for(;ir!==null;){switch(r=ir,f=r.alternate,t=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,n=r,s=f.memoizedProps,f=f.memoizedState,o=n.stateNode;try{var Be=ll(n.type,s,n.elementType===n.type);t=o.getSnapshotBeforeUpdate(Be,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Qe){$t(n,n.return,Qe)}}break;case 3:if((t&1024)!==0){if(t=r.stateNode.containerInfo,n=t.nodeType,n===9)jd(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(i(163))}if(t=r.sibling,t!==null){t.return=r.return,ir=t;break}ir=r.return}return Be=yg,yg=!1,Be}function vg(t,r,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:Za(t,n),o&4&&vo(5,n);break;case 1:if(Za(t,n),o&4)if(t=n.stateNode,r===null)try{t.componentDidMount()}catch(R){$t(n,n.return,R)}else{var s=ll(n.type,r.memoizedProps);r=r.memoizedState;try{t.componentDidUpdate(s,r,t.__reactInternalSnapshotBeforeUpdate)}catch(R){$t(n,n.return,R)}}o&64&&fg(n),o&512&&ul(n,n.return);break;case 3:if(Za(t,n),o&64&&(o=n.updateQueue,o!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{cg(o,t)}catch(R){$t(n,n.return,R)}}break;case 26:Za(t,n),o&512&&ul(n,n.return);break;case 27:case 5:Za(t,n),r===null&&o&4&&hg(n),o&512&&ul(n,n.return);break;case 12:Za(t,n);break;case 13:Za(t,n),o&4&&Sg(t,n);break;case 22:if(s=n.memoizedState!==null||Qa,!s){r=r!==null&&r.memoizedState!==null||kt;var f=Qa,x=kt;Qa=s,(kt=r)&&!x?vn(t,n,(n.subtreeFlags&8772)!==0):Za(t,n),Qa=f,kt=x}o&512&&(n.memoizedProps.mode==="manual"?ul(n,n.return):zr(n,n.return));break;default:Za(t,n)}}function bg(t){var r=t.alternate;r!==null&&(t.alternate=null,bg(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&ja(r)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var It=null,Br=!1;function Xa(t,r,n){for(n=n.child;n!==null;)xg(t,r,n),n=n.sibling}function xg(t,r,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(pt,n)}catch{}switch(n.tag){case 26:kt||zr(n,r),Xa(t,r,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||zr(n,r);var o=It,s=Br;for(It=n.stateNode,Xa(t,r,n),n=n.stateNode,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ja(n),It=o,Br=s;break;case 5:kt||zr(n,r);case 6:s=It;var f=Br;if(It=null,Xa(t,r,n),It=s,Br=f,It!==null)if(Br)try{t=It,o=n.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)}catch(x){$t(n,r,x)}else try{It.removeChild(n.stateNode)}catch(x){$t(n,r,x)}break;case 18:It!==null&&(Br?(r=It,n=n.stateNode,r.nodeType===8?Bd(r.parentNode,n):r.nodeType===1&&Bd(r,n),jo(r)):Bd(It,n.stateNode));break;case 4:o=It,s=Br,It=n.stateNode.containerInfo,Br=!0,Xa(t,r,n),It=o,Br=s;break;case 0:case 11:case 14:case 15:kt||yn(2,n,r),kt||yn(4,n,r),Xa(t,r,n);break;case 1:kt||(zr(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"&&dg(n,r,o)),Xa(t,r,n);break;case 21:Xa(t,r,n);break;case 22:kt||zr(n,r),kt=(o=kt)||n.memoizedState!==null,Xa(t,r,n),kt=o;break;default:Xa(t,r,n)}}function Sg(t,r){if(r.memoizedState===null&&(t=r.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jo(t)}catch(n){$t(r,r.return,n)}}function ZE(t){switch(t.tag){case 13:case 19:var r=t.stateNode;return r===null&&(r=t.stateNode=new gg),r;case 22:return t=t.stateNode,r=t._retryCache,r===null&&(r=t._retryCache=new gg),r;default:throw Error(i(435,t.tag))}}function nd(t,r){var n=ZE(t);r.forEach(function(o){var s=uw.bind(null,t,o);n.has(o)||(n.add(o),o.then(s,s))})}function Wr(t,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var s=n[o],f=t,x=r,R=x;e:for(;R!==null;){switch(R.tag){case 27:case 5:It=R.stateNode,Br=!1;break e;case 3:It=R.stateNode.containerInfo,Br=!0;break e;case 4:It=R.stateNode.containerInfo,Br=!0;break e}R=R.return}if(It===null)throw Error(i(160));xg(f,x,s),It=null,Br=!1,f=s.alternate,f!==null&&(f.return=null),s.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Eg(r,t),r=r.sibling}var fa=null;function Eg(t,r){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wr(r,t),Jr(t),o&4&&(yn(3,t,t.return),vo(3,t),yn(5,t,t.return));break;case 1:Wr(r,t),Jr(t),o&512&&(kt||n===null||zr(n,n.return)),o&64&&Qa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var s=fa;if(Wr(r,t),Jr(t),o&512&&(kt||n===null||zr(n,n.return)),o&4){var f=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){e:{o=t.type,n=t.memoizedProps,s=s.ownerDocument||s;t:switch(o){case"title":f=s.getElementsByTagName("title")[0],(!f||f[Fr]||f[Re]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=s.createElement(o),s.head.insertBefore(f,s.querySelector("head > title"))),mr(f,o,n),f[Re]=t,Nt(f),o=f;break e;case"link":var x=hy("link","href",s).get(o+(n.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(n.href==null?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){x.splice(R,1);break t}}f=s.createElement(o),mr(f,o,n),s.head.appendChild(f);break;case"meta":if(x=hy("meta","content",s).get(o+(n.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){x.splice(R,1);break t}}f=s.createElement(o),mr(f,o,n),s.head.appendChild(f);break;default:throw Error(i(468,o))}f[Re]=t,Nt(f),o=f}t.stateNode=o}else my(s,t.type,t.stateNode);else t.stateNode=dy(s,o,t.memoizedProps);else f!==o?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,o===null?my(s,t.type,t.stateNode):dy(s,o,t.memoizedProps)):o===null&&t.stateNode!==null&&mg(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(o&4&&t.alternate===null){s=t.stateNode,f=t.memoizedProps;try{for(var A=s.firstChild;A;){var U=A.nextSibling,ae=A.nodeName;A[Fr]||ae==="HEAD"||ae==="BODY"||ae==="SCRIPT"||ae==="STYLE"||ae==="LINK"&&A.rel.toLowerCase()==="stylesheet"||s.removeChild(A),A=U}for(var ce=t.type,Q=s.attributes;Q.length;)s.removeAttributeNode(Q[0]);mr(s,ce,f),s[Re]=t,s[Ye]=f}catch(Be){$t(t,t.return,Be)}}case 5:if(Wr(r,t),Jr(t),o&512&&(kt||n===null||zr(n,n.return)),t.flags&32){s=t.stateNode;try{Pl(s,"")}catch(Be){$t(t,t.return,Be)}}o&4&&t.stateNode!=null&&(s=t.memoizedProps,mg(t,s,n!==null?n.memoizedProps:s)),o&1024&&(ad=!0);break;case 6:if(Wr(r,t),Jr(t),o&4){if(t.stateNode===null)throw Error(i(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(Be){$t(t,t.return,Be)}}break;case 3:if(_s=null,s=fa,fa=ws(r.containerInfo),Wr(r,t),fa=s,Jr(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(r.containerInfo)}catch(Be){$t(t,t.return,Be)}ad&&(ad=!1,wg(t));break;case 4:o=fa,fa=ws(t.stateNode.containerInfo),Wr(r,t),Jr(t),fa=o;break;case 12:Wr(r,t),Jr(t);break;case 13:Wr(r,t),Jr(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(hd=ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nd(t,o)));break;case 22:if(o&512&&(kt||n===null||zr(n,n.return)),A=t.memoizedState!==null,U=n!==null&&n.memoizedState!==null,ae=Qa,ce=kt,Qa=ae||A,kt=ce||U,Wr(r,t),kt=ce,Qa=ae,Jr(t),r=t.stateNode,r._current=t,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,o&8192&&(r._visibility=A?r._visibility&-2:r._visibility|1,A&&(r=Qa||kt,n===null||U||r||ri(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))e:for(n=null,r=t;;){if(r.tag===5||r.tag===26||r.tag===27){if(n===null){U=n=r;try{if(s=U.stateNode,A)f=s.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{x=U.stateNode,R=U.memoizedProps.style;var te=R!=null&&R.hasOwnProperty("display")?R.display:null;x.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Be){$t(U,U.return,Be)}}}else if(r.tag===6){if(n===null){U=r;try{U.stateNode.nodeValue=A?"":U.memoizedProps}catch(Be){$t(U,U.return,Be)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===t)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,nd(t,n))));break;case 19:Wr(r,t),Jr(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,nd(t,o)));break;case 21:break;default:Wr(r,t),Jr(t)}}function Jr(t){var r=t.flags;if(r&2){try{if(t.tag!==27){e:{for(var n=t.return;n!==null;){if(pg(n)){var o=n;break e}n=n.return}throw Error(i(160))}switch(o.tag){case 27:var s=o.stateNode,f=td(t);us(t,f,s);break;case 5:var x=o.stateNode;o.flags&32&&(Pl(x,""),o.flags&=-33);var R=td(t);us(t,R,x);break;case 3:case 4:var A=o.stateNode.containerInfo,U=td(t);rd(t,U,A);break;default:throw Error(i(161))}}}catch(ae){$t(t,t.return,ae)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var r=t;wg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),t=t.sibling}}function Za(t,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)vg(t,r.alternate,r),r=r.sibling}function ri(t){for(t=t.child;t!==null;){var r=t;switch(r.tag){case 0:case 11:case 14:case 15:yn(4,r,r.return),ri(r);break;case 1:zr(r,r.return);var n=r.stateNode;typeof n.componentWillUnmount=="function"&&dg(r,r.return,n),ri(r);break;case 26:case 27:case 5:zr(r,r.return),ri(r);break;case 22:zr(r,r.return),r.memoizedState===null&&ri(r);break;default:ri(r)}t=t.sibling}}function vn(t,r,n){for(n=n&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var o=r.alternate,s=t,f=r,x=f.flags;switch(f.tag){case 0:case 11:case 15:vn(s,f,n),vo(4,f);break;case 1:if(vn(s,f,n),o=f,s=o.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(U){$t(o,o.return,U)}if(o=f,s=o.updateQueue,s!==null){var R=o.stateNode;try{var A=s.shared.hiddenCallbacks;if(A!==null)for(s.shared.hiddenCallbacks=null,s=0;s<A.length;s++)sg(A[s],R)}catch(U){$t(o,o.return,U)}}n&&x&64&&fg(f),ul(f,f.return);break;case 26:case 27:case 5:vn(s,f,n),n&&o===null&&x&4&&hg(f),ul(f,f.return);break;case 12:vn(s,f,n);break;case 13:vn(s,f,n),n&&x&4&&Sg(s,f);break;case 22:f.memoizedState===null&&vn(s,f,n),ul(f,f.return);break;default:vn(s,f,n)}r=r.sibling}}function ld(t,r){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(t=r.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&oo(n))}function id(t,r){t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&oo(t))}function bn(t,r,n,o){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)$g(t,r,n,o),r=r.sibling}function $g(t,r,n,o){var s=r.flags;switch(r.tag){case 0:case 11:case 15:bn(t,r,n,o),s&2048&&vo(9,r);break;case 3:bn(t,r,n,o),s&2048&&(t=null,r.alternate!==null&&(t=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==t&&(r.refCount++,t!=null&&oo(t)));break;case 12:if(s&2048){bn(t,r,n,o),t=r.stateNode;try{var f=r.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,r.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(A){$t(r,r.return,A)}}else bn(t,r,n,o);break;case 23:break;case 22:f=r.stateNode,r.memoizedState!==null?f._visibility&4?bn(t,r,n,o):bo(t,r):f._visibility&4?bn(t,r,n,o):(f._visibility|=4,ai(t,r,n,o,(r.subtreeFlags&10256)!==0)),s&2048&&ld(r.alternate,r);break;case 24:bn(t,r,n,o),s&2048&&id(r.alternate,r);break;default:bn(t,r,n,o)}}function ai(t,r,n,o,s){for(s=s&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var f=t,x=r,R=n,A=o,U=x.flags;switch(x.tag){case 0:case 11:case 15:ai(f,x,R,A,s),vo(8,x);break;case 23:break;case 22:var ae=x.stateNode;x.memoizedState!==null?ae._visibility&4?ai(f,x,R,A,s):bo(f,x):(ae._visibility|=4,ai(f,x,R,A,s)),s&&U&2048&&ld(x.alternate,x);break;case 24:ai(f,x,R,A,s),s&&U&2048&&id(x.alternate,x);break;default:ai(f,x,R,A,s)}r=r.sibling}}function bo(t,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var n=t,o=r,s=o.flags;switch(o.tag){case 22:bo(n,o),s&2048&&ld(o.alternate,o);break;case 24:bo(n,o),s&2048&&id(o.alternate,o);break;default:bo(n,o)}r=r.sibling}}var xo=8192;function ni(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)_g(t),t=t.sibling}function _g(t){switch(t.tag){case 26:ni(t),t.flags&xo&&t.memoizedState!==null&&Lw(fa,t.memoizedState,t.memoizedProps);break;case 5:ni(t);break;case 3:case 4:var r=fa;fa=ws(t.stateNode.containerInfo),ni(t),fa=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=xo,xo=16777216,ni(t),xo=r):ni(t));break;default:ni(t)}}function Ng(t){var r=t.alternate;if(r!==null&&(t=r.child,t!==null)){r.child=null;do r=t.sibling,t.sibling=null,t=r;while(t!==null)}}function So(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];ir=o,Rg(o,t)}Ng(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&yn(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var r=t.stateNode;t.memoizedState!==null&&r._visibility&4&&(t.return===null||t.return.tag!==13)?(r._visibility&=-5,ss(t)):So(t);break;default:So(t)}}function ss(t){var r=t.deletions;if((t.flags&16)!==0){if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];ir=o,Rg(o,t)}Ng(t)}for(t=t.child;t!==null;){switch(r=t,r.tag){case 0:case 11:case 15:yn(8,r,r.return),ss(r);break;case 22:n=r.stateNode,n._visibility&4&&(n._visibility&=-5,ss(r));break;default:ss(r)}t=t.sibling}}function Rg(t,r){for(;ir!==null;){var n=ir;switch(n.tag){case 0:case 11:case 15:yn(8,n,r);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,ir=o;else e:for(n=t;ir!==null;){o=ir;var s=o.sibling,f=o.return;if(bg(o),o===n){ir=null;break e}if(s!==null){s.return=f,ir=s;break e}ir=f}}}function KE(t,r,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ir(t,r,n,o){return new KE(t,r,n,o)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xn(t,r){var n=t.alternate;return n===null?(n=Ir(t.tag,r,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=r,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,r=t.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Mg(t,r){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=r,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,r=n.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),t}function cs(t,r,n,o,s,f){var x=0;if(o=t,typeof t=="function")od(t)&&(x=1);else if(typeof t=="string")x=Bw(t,n,Ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case p:return sl(n.children,s,f,r);case m:x=8,s|=24;break;case g:return t=Ir(12,n,r,s|2),t.elementType=g,t.lanes=f,t;case $:return t=Ir(13,n,r,s),t.elementType=$,t.lanes=f,t;case E:return t=Ir(19,n,r,s),t.elementType=E,t.lanes=f,t;case M:return Og(n,s,f,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y:case w:x=10;break e;case b:x=9;break e;case S:x=11;break e;case T:x=14;break e;case C:x=16,o=null;break e}x=29,n=Error(i(130,t===null?"null":typeof t,"")),o=null}return r=Ir(x,n,r,s),r.elementType=t,r.type=o,r.lanes=f,r}function sl(t,r,n,o){return t=Ir(7,t,o,r),t.lanes=n,t}function Og(t,r,n,o){t=Ir(22,t,o,r),t.elementType=M,t.lanes=n;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=s._current;if(f===null)throw Error(i(456));if((s._pendingVisibility&2)===0){var x=un(f,2);x!==null&&(s._pendingVisibility|=2,wr(x,f,2))}},attach:function(){var f=s._current;if(f===null)throw Error(i(456));if((s._pendingVisibility&2)!==0){var x=un(f,2);x!==null&&(s._pendingVisibility&=-3,wr(x,f,2))}}};return t.stateNode=s,t}function ud(t,r,n){return t=Ir(6,t,null,r),t.lanes=n,t}function sd(t,r,n){return r=Ir(4,t.children!==null?t.children:[],t.key,r),r.lanes=n,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Ka(t){t.flags|=4}function Cg(t,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!py(r)){if(r=Kr.current,r!==null&&((st&4194176)===st?Ea!==null:(st&62914560)!==st&&(st&536870912)===0||r!==Ea))throw no=mf,Xp;t.flags|=8192}}function fs(t,r){r!==null&&(t.flags|=4),t.flags&16384&&(r=t.tag!==22?B():536870912,t.lanes|=r,ii|=r)}function Eo(t,r){if(!ht)switch(t.tailMode){case"hidden":r=t.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Bt(t){var r=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(r)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags&31457280,o|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=o,t.childLanes=n,r}function WE(t,r,n){var o=r.pendingProps;switch(df(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(r),null;case 1:return Bt(r),null;case 3:return n=r.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Va(ar),dt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(eo(r)?Ka(r):t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ca!==null&&(yd(ca),ca=null))),Bt(r),null;case 26:return n=r.memoizedState,t===null?(Ka(r),n!==null?(Bt(r),Cg(r,n)):(Bt(r),r.flags&=-16777217)):n?n!==t.memoizedState?(Ka(r),Bt(r),Cg(r,n)):(Bt(r),r.flags&=-16777217):(t.memoizedProps!==o&&Ka(r),Bt(r),r.flags&=-16777217),null;case 27:At(r),n=Ve.current;var s=r.type;if(t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Ka(r);else{if(!o){if(r.stateNode===null)throw Error(i(166));return Bt(r),null}t=Ue.current,eo(r)?Vp(r):(t=oy(s,o,n),r.stateNode=t,Ka(r))}return Bt(r),null;case 5:if(At(r),n=r.type,t!==null&&r.stateNode!=null)t.memoizedProps!==o&&Ka(r);else{if(!o){if(r.stateNode===null)throw Error(i(166));return Bt(r),null}if(t=Ue.current,eo(r))Vp(r);else{switch(s=Es(Ve.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?s.createElement(n,{is:o.is}):s.createElement(n)}}t[Re]=r,t[Ye]=o;e:for(s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}r.stateNode=t;e:switch(mr(t,n,o),n){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Ka(r)}}return Bt(r),r.flags&=-16777217,null;case 6:if(t&&r.stateNode!=null)t.memoizedProps!==o&&Ka(r);else{if(typeof o!="string"&&r.stateNode===null)throw Error(i(166));if(t=Ve.current,eo(r)){if(t=r.stateNode,n=r.memoizedProps,o=null,s=Er,s!==null)switch(s.tag){case 27:case 5:o=s.memoizedProps}t[Re]=r,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||ty(t.nodeValue,n)),t||In(r)}else t=Es(t).createTextNode(o),t[Re]=r,r.stateNode=t}return Bt(r),null;case 13:if(o=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=eo(r),o!==null&&o.dehydrated!==null){if(t===null){if(!s)throw Error(i(318));if(s=r.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(i(317));s[Re]=r}else to(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Bt(r),s=!1}else ca!==null&&(yd(ca),ca=null),s=!0;if(!s)return r.flags&256?(Fa(r),r):(Fa(r),null)}if(Fa(r),(r.flags&128)!==0)return r.lanes=n,r;if(n=o!==null,t=t!==null&&t.memoizedState!==null,n){o=r.child,s=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(s=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==s&&(o.flags|=2048)}return n!==t&&n&&(r.child.flags|=8192),fs(r,r.updateQueue),Bt(r),null;case 4:return dt(),t===null&&Rd(r.stateNode.containerInfo),Bt(r),null;case 10:return Va(r.type),Bt(r),null;case 19:if(ve(rr),s=r.memoizedState,s===null)return Bt(r),null;if(o=(r.flags&128)!==0,f=s.rendering,f===null)if(o)Eo(s,!1);else{if(Ft!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(f=Xu(t),f!==null){for(r.flags|=128,Eo(s,!1),t=f.updateQueue,r.updateQueue=t,fs(r,t),r.subtreeFlags=0,t=n,n=r.child;n!==null;)Mg(n,t),n=n.sibling;return Ae(rr,rr.current&1|2),r.child}t=t.sibling}s.tail!==null&&ft()>ds&&(r.flags|=128,o=!0,Eo(s,!1),r.lanes=4194304)}else{if(!o)if(t=Xu(f),t!==null){if(r.flags|=128,o=!0,t=t.updateQueue,r.updateQueue=t,fs(r,t),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ht)return Bt(r),null}else 2*ft()-s.renderingStartTime>ds&&n!==536870912&&(r.flags|=128,o=!0,Eo(s,!1),r.lanes=4194304);s.isBackwards?(f.sibling=r.child,r.child=f):(t=s.last,t!==null?t.sibling=f:r.child=f,s.last=f)}return s.tail!==null?(r=s.tail,s.rendering=r,s.tail=r.sibling,s.renderingStartTime=ft(),r.sibling=null,t=rr.current,Ae(rr,o?t&1|2:t&1),r):(Bt(r),null);case 22:case 23:return Fa(r),gf(),o=r.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(r.flags|=8192):o&&(r.flags|=8192),o?(n&536870912)!==0&&(r.flags&128)===0&&(Bt(r),r.subtreeFlags&6&&(r.flags|=8192)):Bt(r),n=r.updateQueue,n!==null&&fs(r,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==n&&(r.flags|=2048),t!==null&&ve(tl),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),r.memoizedState.cache!==n&&(r.flags|=2048),Va(ar),Bt(r),null;case 25:return null}throw Error(i(156,r.tag))}function JE(t,r){switch(df(r),r.tag){case 1:return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Va(ar),dt(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 26:case 27:case 5:return At(r),null;case 13:if(Fa(r),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));to()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ve(rr),null;case 4:return dt(),null;case 10:return Va(r.type),null;case 22:case 23:return Fa(r),gf(),t!==null&&ve(tl),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 24:return Va(ar),null;case 25:return null;default:return null}}function Ag(t,r){switch(df(r),r.tag){case 3:Va(ar),dt();break;case 26:case 27:case 5:At(r);break;case 4:dt();break;case 13:Fa(r);break;case 19:ve(rr);break;case 10:Va(r.type);break;case 22:case 23:Fa(r),gf(),t!==null&&ve(tl);break;case 24:Va(ar)}}var IE={getCacheForType:function(t){var r=gr(ar),n=r.data.get(t);return n===void 0&&(n=t(),r.data.set(t,n)),n}},ew=typeof WeakMap=="function"?WeakMap:Map,jt=0,Tt=null,tt=null,st=0,Rt=0,jr=null,Wa=!1,li=!1,cd=!1,Ja=0,Ft=0,Sn=0,cl=0,fd=0,ea=0,ii=0,wo=null,$a=null,dd=!1,hd=0,ds=1/0,hs=null,En=null,ms=!1,fl=null,$o=0,md=0,pd=null,_o=0,gd=null;function Lr(){if((jt&2)!==0&&st!==0)return st&-st;if(q.T!==null){var t=Wl;return t!==0?t:$d()}return De()}function Dg(){ea===0&&(ea=(st&536870912)===0||ht?D():536870912);var t=Kr.current;return t!==null&&(t.flags|=32),ea}function wr(t,r,n){(t===Tt&&Rt===2||t.cancelPendingCommit!==null)&&(oi(t,0),Ia(t,st,ea,!1)),ne(t,n),((jt&2)===0||t!==Tt)&&(t===Tt&&((jt&2)===0&&(cl|=n),Ft===4&&Ia(t,st,ea,!1)),_a(t))}function zg(t,r,n){if((jt&6)!==0)throw Error(i(327));var o=!n&&(r&60)===0&&(r&t.expiredLanes)===0||et(t,r),s=o?aw(t,r):xd(t,r,!0),f=o;do{if(s===0){li&&!o&&Ia(t,r,0,!1);break}else if(s===6)Ia(t,r,0,!Wa);else{if(n=t.current.alternate,f&&!tw(n)){s=xd(t,r,!1),f=!1;continue}if(s===2){if(f=r,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){r=x;e:{var R=t;s=wo;var A=R.current.memoizedState.isDehydrated;if(A&&(oi(R,x).flags|=256),x=xd(R,x,!1),x!==2){if(cd&&!A){R.errorRecoveryDisabledLanes|=f,cl|=f,s=4;break e}f=$a,$a=s,f!==null&&yd(f)}s=x}if(f=!1,s!==2)continue}}if(s===1){oi(t,0),Ia(t,r,0,!0);break}e:{switch(o=t,s){case 0:case 1:throw Error(i(345));case 4:if((r&4194176)===r){Ia(o,r,ea,!Wa);break e}break;case 2:$a=null;break;case 3:case 5:break;default:throw Error(i(329))}if(o.finishedWork=n,o.finishedLanes=r,(r&62914560)===r&&(f=hd+300-ft(),10<f)){if(Ia(o,r,ea,!Wa),Pe(o,0)!==0)break e;o.timeoutHandle=ny(Bg.bind(null,o,n,$a,hs,dd,r,ea,cl,ii,Wa,2,-0,0),f);break e}Bg(o,n,$a,hs,dd,r,ea,cl,ii,Wa,0,-0,0)}}break}while(!0);_a(t)}function yd(t){$a===null?$a=t:$a.push.apply($a,t)}function Bg(t,r,n,o,s,f,x,R,A,U,ae,ce,Q){var te=r.subtreeFlags;if((te&8192||(te&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:jw},_g(r),r=Hw(),r!==null)){t.cancelPendingCommit=r(Fg.bind(null,t,n,o,s,x,R,A,1,ce,Q)),Ia(t,f,x,!U);return}Fg(t,n,o,s,x,R,A,ae,ce,Q)}function tw(t){for(var r=t;;){var n=r.tag;if((n===0||n===11||n===15)&&r.flags&16384&&(n=r.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var s=n[o],f=s.getSnapshot;s=s.value;try{if(!Dr(f(),s))return!1}catch{return!1}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ia(t,r,n,o){r&=~fd,r&=~cl,t.suspendedLanes|=r,t.pingedLanes&=~r,o&&(t.warmLanes|=r),o=t.expirationTimes;for(var s=r;0<s;){var f=31-Ht(s),x=1<<f;o[f]=-1,s&=~x}n!==0&&je(t,n,r)}function ps(){return(jt&6)===0?(No(0),!1):!0}function vd(){if(tt!==null){if(Rt===0)var t=tt.return;else t=tt,Ga=il=null,$f(t),Zl=null,lo=0,t=tt;for(;t!==null;)Ag(t.alternate,t),t=t.return;tt=null}}function oi(t,r){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,xw(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),vd(),Tt=t,tt=n=xn(t.current,null),st=r,Rt=0,jr=null,Wa=!1,li=et(t,r),cd=!1,ii=ea=fd=cl=Sn=Ft=0,$a=wo=null,dd=!1,(r&8)!==0&&(r|=r&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=r;0<o;){var s=31-Ht(o),f=1<<s;r|=t[s],o&=~f}return Ja=r,Pu(),n}function jg(t,r){Je=null,q.H=wa,r===ao?(r=Wp(),Rt=3):r===Xp?(r=Wp(),Rt=4):Rt=r===Z0?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,jr=r,tt===null&&(Ft=1,ls(t,Qr(r,t.current)))}function Lg(){var t=q.H;return q.H=wa,t===null?wa:t}function Hg(){var t=q.A;return q.A=IE,t}function bd(){Ft=4,Wa||(st&4194176)!==st&&Kr.current!==null||(li=!0),(Sn&134217727)===0&&(cl&134217727)===0||Tt===null||Ia(Tt,st,ea,!1)}function xd(t,r,n){var o=jt;jt|=2;var s=Lg(),f=Hg();(Tt!==t||st!==r)&&(hs=null,oi(t,r)),r=!1;var x=Ft;e:do try{if(Rt!==0&&tt!==null){var R=tt,A=jr;switch(Rt){case 8:vd(),x=6;break e;case 3:case 2:case 6:Kr.current===null&&(r=!0);var U=Rt;if(Rt=0,jr=null,ui(t,R,A,U),n&&li){x=0;break e}break;default:U=Rt,Rt=0,jr=null,ui(t,R,A,U)}}rw(),x=Ft;break}catch(ae){jg(t,ae)}while(!0);return r&&t.shellSuspendCounter++,Ga=il=null,jt=o,q.H=s,q.A=f,tt===null&&(Tt=null,st=0,Pu()),x}function rw(){for(;tt!==null;)Pg(tt)}function aw(t,r){var n=jt;jt|=2;var o=Lg(),s=Hg();Tt!==t||st!==r?(hs=null,ds=ft()+500,oi(t,r)):li=et(t,r);e:do try{if(Rt!==0&&tt!==null){r=tt;var f=jr;t:switch(Rt){case 1:Rt=0,jr=null,ui(t,r,f,1);break;case 2:if(Zp(f)){Rt=0,jr=null,Ug(r);break}r=function(){Rt===2&&Tt===t&&(Rt=7),_a(t)},f.then(r,r);break e;case 3:Rt=7;break e;case 4:Rt=5;break e;case 7:Zp(f)?(Rt=0,jr=null,Ug(r)):(Rt=0,jr=null,ui(t,r,f,7));break;case 5:var x=null;switch(tt.tag){case 26:x=tt.memoizedState;case 5:case 27:var R=tt;if(!x||py(x)){Rt=0,jr=null;var A=R.sibling;if(A!==null)tt=A;else{var U=R.return;U!==null?(tt=U,gs(U)):tt=null}break t}}Rt=0,jr=null,ui(t,r,f,5);break;case 6:Rt=0,jr=null,ui(t,r,f,6);break;case 8:vd(),Ft=6;break e;default:throw Error(i(462))}}nw();break}catch(ae){jg(t,ae)}while(!0);return Ga=il=null,q.H=o,q.A=s,jt=n,tt!==null?0:(Tt=null,st=0,Pu(),Ft)}function nw(){for(;tt!==null&&!Et();)Pg(tt)}function Pg(t){var r=og(t.alternate,t,Ja);t.memoizedProps=t.pendingProps,r===null?gs(t):tt=r}function Ug(t){var r=t,n=r.alternate;switch(r.tag){case 15:case 0:r=tg(n,r,r.pendingProps,r.type,void 0,st);break;case 11:r=tg(n,r,r.pendingProps,r.type.render,r.ref,st);break;case 5:$f(r);default:Ag(n,r),r=tt=Mg(r,Ja),r=og(n,r,Ja)}t.memoizedProps=t.pendingProps,r===null?gs(t):tt=r}function ui(t,r,n,o){Ga=il=null,$f(r),Zl=null,lo=0;var s=r.return;try{if(VE(t,s,r,n,st)){Ft=1,ls(t,Qr(n,t.current)),tt=null;return}}catch(f){if(s!==null)throw tt=s,f;Ft=1,ls(t,Qr(n,t.current)),tt=null;return}r.flags&32768?(ht||o===1?t=!0:li||(st&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===3||o===6)&&(o=Kr.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(r,t)):gs(r)}function gs(t){var r=t;do{if((r.flags&32768)!==0){kg(r,Wa);return}t=r.return;var n=WE(r.alternate,r,Ja);if(n!==null){tt=n;return}if(r=r.sibling,r!==null){tt=r;return}tt=r=t}while(r!==null);Ft===0&&(Ft=5)}function kg(t,r){do{var n=JE(t.alternate,t);if(n!==null){n.flags&=32767,tt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!r&&(t=t.sibling,t!==null)){tt=t;return}tt=t=n}while(t!==null);Ft=6,tt=null}function Fg(t,r,n,o,s,f,x,R,A,U){var ae=q.T,ce=ee.p;try{ee.p=2,q.T=null,lw(t,r,n,o,ce,s,f,x,R,A,U)}finally{q.T=ae,ee.p=ce}}function lw(t,r,n,o,s,f,x,R){do si();while(fl!==null);if((jt&6)!==0)throw Error(i(327));var A=t.finishedWork;if(o=t.finishedLanes,A===null)return null;if(t.finishedWork=null,t.finishedLanes=0,A===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var U=A.lanes|A.childLanes;if(U|=sf,be(t,o,U,f,x,R),t===Tt&&(tt=Tt=null,st=0),(A.subtreeFlags&10256)===0&&(A.flags&10256)===0||ms||(ms=!0,md=U,pd=n,sw(Nr,function(){return si(),null})),n=(A.flags&15990)!==0,(A.subtreeFlags&15990)!==0||n?(n=q.T,q.T=null,f=ee.p,ee.p=2,x=jt,jt|=4,XE(t,A),Eg(A,t),ME(Ad,t.containerInfo),Rs=!!Cd,Ad=Cd=null,t.current=A,vg(t,A.alternate,A),wt(),jt=x,ee.p=f,q.T=n):t.current=A,ms?(ms=!1,fl=t,$o=o):qg(t,U),U=t.pendingLanes,U===0&&(En=null),_t(A.stateNode),_a(t),r!==null)for(s=t.onRecoverableError,A=0;A<r.length;A++)U=r[A],s(U.value,{componentStack:U.stack});return($o&3)!==0&&si(),U=t.pendingLanes,(o&4194218)!==0&&(U&42)!==0?t===gd?_o++:(_o=0,gd=t):_o=0,No(0),null}function qg(t,r){(t.pooledCacheLanes&=r)===0&&(r=t.pooledCache,r!=null&&(t.pooledCache=null,oo(r)))}function si(){if(fl!==null){var t=fl,r=md;md=0;var n=Ne($o),o=q.T,s=ee.p;try{if(ee.p=32>n?32:n,q.T=null,fl===null)var f=!1;else{n=pd,pd=null;var x=fl,R=$o;if(fl=null,$o=0,(jt&6)!==0)throw Error(i(331));var A=jt;if(jt|=4,Tg(x.current),$g(x,x.current,R,n),jt=A,No(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(pt,x)}catch{}f=!0}return f}finally{ee.p=s,q.T=o,qg(t,r)}}return!1}function Yg(t,r,n){r=Qr(n,r),r=Hf(t.stateNode,r,2),t=gn(t,r,2),t!==null&&(ne(t,2),_a(t))}function $t(t,r,n){if(t.tag===3)Yg(t,t,n);else for(;r!==null;){if(r.tag===3){Yg(r,t,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(En===null||!En.has(o))){t=Qr(n,t),n=Q0(2),o=gn(r,n,2),o!==null&&(X0(n,o,r,t),ne(o,2),_a(o));break}}r=r.return}}function Sd(t,r,n){var o=t.pingCache;if(o===null){o=t.pingCache=new ew;var s=new Set;o.set(r,s)}else s=o.get(r),s===void 0&&(s=new Set,o.set(r,s));s.has(n)||(cd=!0,s.add(n),t=iw.bind(null,t,r,n),r.then(t,t))}function iw(t,r,n){var o=t.pingCache;o!==null&&o.delete(r),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Tt===t&&(st&n)===n&&(Ft===4||Ft===3&&(st&62914560)===st&&300>ft()-hd?(jt&2)===0&&oi(t,0):fd|=n,ii===st&&(ii=0)),_a(t)}function Gg(t,r){r===0&&(r=B()),t=un(t,r),t!==null&&(ne(t,r),_a(t))}function ow(t){var r=t.memoizedState,n=0;r!==null&&(n=r.retryLane),Gg(t,n)}function uw(t,r){var n=0;switch(t.tag){case 13:var o=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(r),Gg(t,n)}function sw(t,r){return gt(t,r)}var ys=null,ci=null,Ed=!1,vs=!1,wd=!1,dl=0;function _a(t){t!==ci&&t.next===null&&(ci===null?ys=ci=t:ci=ci.next=t),vs=!0,Ed||(Ed=!0,fw(cw))}function No(t,r){if(!wd&&vs){wd=!0;do for(var n=!1,o=ys;o!==null;){if(t!==0){var s=o.pendingLanes;if(s===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ht(42|t)+1)-1,f&=s&~(x&~R),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(n=!0,Xg(o,f))}else f=st,f=Pe(o,o===Tt?f:0),(f&3)===0||et(o,f)||(n=!0,Xg(o,f));o=o.next}while(n);wd=!1}}function cw(){vs=Ed=!1;var t=0;dl!==0&&(bw()&&(t=dl),dl=0);for(var r=ft(),n=null,o=ys;o!==null;){var s=o.next,f=Vg(o,r);f===0?(o.next=null,n===null?ys=s:n.next=s,s===null&&(ci=n)):(n=o,(t!==0||(f&3)!==0)&&(vs=!0)),o=s}No(t)}function Vg(t,r){for(var n=t.suspendedLanes,o=t.pingedLanes,s=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ht(f),R=1<<x,A=s[x];A===-1?((R&n)===0||(R&o)!==0)&&(s[x]=Zt(R,r)):A<=r&&(t.expiredLanes|=R),f&=~R}if(r=Tt,n=st,n=Pe(t,t===r?n:0),o=t.callbackNode,n===0||t===r&&Rt===2||t.cancelPendingCommit!==null)return o!==null&&o!==null&&nt(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||et(t,n)){if(r=n&-n,r===t.callbackPriority)return r;switch(o!==null&&nt(o),Ne(n)){case 2:case 8:n=ua;break;case 32:n=Nr;break;case 268435456:n=_e;break;default:n=Nr}return o=Qg.bind(null,t),n=gt(n,o),t.callbackPriority=r,t.callbackNode=n,r}return o!==null&&o!==null&&nt(o),t.callbackPriority=2,t.callbackNode=null,2}function Qg(t,r){var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var o=st;return o=Pe(t,t===Tt?o:0),o===0?null:(zg(t,o,r),Vg(t,ft()),t.callbackNode!=null&&t.callbackNode===n?Qg.bind(null,t):null)}function Xg(t,r){if(si())return null;zg(t,r,!0)}function fw(t){Sw(function(){(jt&6)!==0?gt(nr,t):t()})}function $d(){return dl===0&&(dl=D()),dl}function Zg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Au(""+t)}function Kg(t,r){var n=r.ownerDocument.createElement("input");return n.name=r.name,n.value=r.value,t.id&&n.setAttribute("form",t.id),r.parentNode.insertBefore(n,r),t=new FormData(t),n.parentNode.removeChild(n),t}function dw(t,r,n,o,s){if(r==="submit"&&n&&n.stateNode===s){var f=Zg((s[Ye]||null).action),x=o.submitter;x&&(r=(r=x[Ye]||null)?Zg(r.formAction):x.getAttribute("formAction"),r!==null&&(f=r,x=null));var R=new ju("action","action",null,o,s);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(dl!==0){var A=x?Kg(s,x):new FormData(s);Df(n,{pending:!0,data:A,method:s.method,action:f},null,A)}}else typeof f=="function"&&(R.preventDefault(),A=x?Kg(s,x):new FormData(s),Df(n,{pending:!0,data:A,method:s.method,action:f},f,A))},currentTarget:s}]})}}for(var _d=0;_d<Fp.length;_d++){var Nd=Fp[_d],hw=Nd.toLowerCase(),mw=Nd[0].toUpperCase()+Nd.slice(1);sa(hw,"on"+mw)}sa(Lp,"onAnimationEnd"),sa(Hp,"onAnimationIteration"),sa(Pp,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(CE,"onTransitionRun"),sa(AE,"onTransitionStart"),sa(DE,"onTransitionCancel"),sa(Up,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Wg(t,r){r=(r&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],s=o.event;o=o.listeners;e:{var f=void 0;if(r)for(var x=o.length-1;0<=x;x--){var R=o[x],A=R.instance,U=R.currentTarget;if(R=R.listener,A!==f&&s.isPropagationStopped())break e;f=R,s.currentTarget=U;try{f(s)}catch(ae){ns(ae)}s.currentTarget=null,f=A}else for(x=0;x<o.length;x++){if(R=o[x],A=R.instance,U=R.currentTarget,R=R.listener,A!==f&&s.isPropagationStopped())break e;f=R,s.currentTarget=U;try{f(s)}catch(ae){ns(ae)}s.currentTarget=null,f=A}}}}function lt(t,r){var n=r[Kt];n===void 0&&(n=r[Kt]=new Set);var o=t+"__bubble";n.has(o)||(Jg(r,t,2,!1),n.add(o))}function Td(t,r,n){var o=0;r&&(o|=4),Jg(n,t,o,r)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Rd(t){if(!t[bs]){t[bs]=!0,Gn.forEach(function(n){n!=="selectionchange"&&(pw.has(n)||Td(n,!1,t),Td(n,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[bs]||(r[bs]=!0,Td("selectionchange",!1,r))}}function Jg(t,r,n,o){switch(Sy(r)){case 2:var s=kw;break;case 8:s=Fw;break;default:s=kd}n=s.bind(null,r,n,t),s=void 0,!Zc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(s=!0),o?s!==void 0?t.addEventListener(r,n,{capture:!0,passive:s}):t.addEventListener(r,n,!0):s!==void 0?t.addEventListener(r,n,{passive:s}):t.addEventListener(r,n,!1)}function Md(t,r,n,o,s){var f=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===s||R.nodeType===8&&R.parentNode===s)break;if(x===4)for(x=o.return;x!==null;){var A=x.tag;if((A===3||A===4)&&(A=x.stateNode.containerInfo,A===s||A.nodeType===8&&A.parentNode===s))return;x=x.return}for(;R!==null;){if(x=cr(R),x===null)return;if(A=x.tag,A===5||A===6||A===26||A===27){o=f=x;continue e}R=R.parentNode}}o=o.return}hp(function(){var U=f,ae=Qc(n),ce=[];e:{var Q=kp.get(t);if(Q!==void 0){var te=ju,Be=t;switch(t){case"keypress":if(zu(n)===0)break e;case"keydown":case"keyup":te=uE;break;case"focusin":Be="focus",te=Ic;break;case"focusout":Be="blur",te=Ic;break;case"beforeblur":case"afterblur":te=Ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=fE;break;case Lp:case Hp:case Pp:te=IS;break;case Up:te=hE;break;case"scroll":case"scrollend":te=XS;break;case"wheel":te=pE;break;case"copy":case"cut":case"paste":te=tE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=vp;break;case"toggle":case"beforetoggle":te=yE}var Qe=(r&4)!==0,qt=!Qe&&(t==="scroll"||t==="scrollend"),F=Qe?Q!==null?Q+"Capture":null:Q;Qe=[];for(var H=U,G;H!==null;){var oe=H;if(G=oe.stateNode,oe=oe.tag,oe!==5&&oe!==26&&oe!==27||G===null||F===null||(oe=Gi(H,F),oe!=null&&Qe.push(Ro(H,oe,G))),qt)break;H=H.return}0<Qe.length&&(Q=new te(Q,Be,null,n,ae),ce.push({event:Q,listeners:Qe}))}}if((r&7)===0){e:{if(Q=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",Q&&n!==Vc&&(Be=n.relatedTarget||n.fromElement)&&(cr(Be)||Be[bt]))break e;if((te||Q)&&(Q=ae.window===ae?ae:(Q=ae.ownerDocument)?Q.defaultView||Q.parentWindow:window,te?(Be=n.relatedTarget||n.toElement,te=U,Be=Be?cr(Be):null,Be!==null&&(qt=ue(Be),Qe=Be.tag,Be!==qt||Qe!==5&&Qe!==27&&Qe!==6)&&(Be=null)):(te=null,Be=U),te!==Be)){if(Qe=gp,oe="onMouseLeave",F="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=vp,oe="onPointerLeave",F="onPointerEnter",H="pointer"),qt=te==null?Q:La(te),G=Be==null?Q:La(Be),Q=new Qe(oe,H+"leave",te,n,ae),Q.target=qt,Q.relatedTarget=G,oe=null,cr(ae)===U&&(Qe=new Qe(F,H+"enter",Be,n,ae),Qe.target=G,Qe.relatedTarget=qt,oe=Qe),qt=oe,te&&Be)t:{for(Qe=te,F=Be,H=0,G=Qe;G;G=fi(G))H++;for(G=0,oe=F;oe;oe=fi(oe))G++;for(;0<H-G;)Qe=fi(Qe),H--;for(;0<G-H;)F=fi(F),G--;for(;H--;){if(Qe===F||F!==null&&Qe===F.alternate)break t;Qe=fi(Qe),F=fi(F)}Qe=null}else Qe=null;te!==null&&Ig(ce,Q,te,Qe,!1),Be!==null&&qt!==null&&Ig(ce,qt,Be,Qe,!0)}}e:{if(Q=U?La(U):window,te=Q.nodeName&&Q.nodeName.toLowerCase(),te==="select"||te==="input"&&Q.type==="file")var Me=Np;else if($p(Q))if(Tp)Me=TE;else{Me=_E;var Ie=$E}else te=Q.nodeName,!te||te.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?U&&Gc(U.elementType)&&(Me=Np):Me=NE;if(Me&&(Me=Me(t,U))){_p(ce,Me,n,ae);break e}Ie&&Ie(t,Q,U),t==="focusout"&&U&&Q.type==="number"&&U.memoizedProps.value!=null&&Yc(Q,"number",Q.value)}switch(Ie=U?La(U):window,t){case"focusin":($p(Ie)||Ie.contentEditable==="true")&&(ql=Ie,lf=U,Ii=null);break;case"focusout":Ii=lf=ql=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Bp(ce,n,ae);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":Bp(ce,n,ae)}var Le;if(tf)e:{switch(t){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Fl?Ep(t,n)&&(ke="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ke="onCompositionStart");ke&&(bp&&n.locale!=="ko"&&(Fl||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Fl&&(Le=mp()):(on=ae,Kc="value"in on?on.value:on.textContent,Fl=!0)),Ie=xs(U,ke),0<Ie.length&&(ke=new yp(ke,t,null,n,ae),ce.push({event:ke,listeners:Ie}),Le?ke.data=Le:(Le=wp(n),Le!==null&&(ke.data=Le)))),(Le=bE?xE(t,n):SE(t,n))&&(ke=xs(U,"onBeforeInput"),0<ke.length&&(Ie=new yp("onBeforeInput","beforeinput",null,n,ae),ce.push({event:Ie,listeners:ke}),Ie.data=Le)),dw(ce,t,U,n,ae)}Wg(ce,r)})}function Ro(t,r,n){return{instance:t,listener:r,currentTarget:n}}function xs(t,r){for(var n=r+"Capture",o=[];t!==null;){var s=t,f=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||f===null||(s=Gi(t,n),s!=null&&o.unshift(Ro(t,s,f)),s=Gi(t,r),s!=null&&o.push(Ro(t,s,f))),t=t.return}return o}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ig(t,r,n,o,s){for(var f=r._reactName,x=[];n!==null&&n!==o;){var R=n,A=R.alternate,U=R.stateNode;if(R=R.tag,A!==null&&A===o)break;R!==5&&R!==26&&R!==27||U===null||(A=U,s?(U=Gi(n,f),U!=null&&x.unshift(Ro(n,U,A))):s||(U=Gi(n,f),U!=null&&x.push(Ro(n,U,A)))),n=n.return}x.length!==0&&t.push({event:r,listeners:x})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function ey(t){return(typeof t=="string"?t:""+t).replace(gw,`
`).replace(yw,"")}function ty(t,r){return r=ey(r),ey(t)===r}function Ss(){}function St(t,r,n,o,s,f){switch(n){case"children":typeof o=="string"?r==="body"||r==="textarea"&&o===""||Pl(t,o):(typeof o=="number"||typeof o=="bigint")&&r!=="body"&&Pl(t,""+o);break;case"className":Mu(t,"class",o);break;case"tabIndex":Mu(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Mu(t,n,o);break;case"style":fp(t,o,f);break;case"data":if(r!=="object"){Mu(t,"data",o);break}case"src":case"href":if(o===""&&(r!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Au(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(r!=="input"&&St(t,r,"name",s.name,s,null),St(t,r,"formEncType",s.formEncType,s,null),St(t,r,"formMethod",s.formMethod,s,null),St(t,r,"formTarget",s.formTarget,s,null)):(St(t,r,"encType",s.encType,s,null),St(t,r,"method",s.method,s,null),St(t,r,"target",s.target,s,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=Au(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Ss);break;case"onScroll":o!=null&&lt("scroll",t);break;case"onScrollEnd":o!=null&&lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(s.children!=null)throw Error(i(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=Au(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":lt("beforetoggle",t),lt("toggle",t),Ll(t,"popover",o);break;case"xlinkActuate":Pa(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pa(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pa(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pa(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pa(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ll(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=VS.get(n)||n,Ll(t,n,o))}}function Od(t,r,n,o,s,f){switch(n){case"style":fp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(s.children!=null)throw Error(i(60));t.innerHTML=n}}break;case"children":typeof o=="string"?Pl(t,o):(typeof o=="number"||typeof o=="bigint")&&Pl(t,""+o);break;case"onScroll":o!=null&&lt("scroll",t);break;case"onScrollEnd":o!=null&&lt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ss);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vn.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),r=n.slice(2,s?n.length-7:void 0),f=t[Ye]||null,f=f!=null?f[n]:null,typeof f=="function"&&t.removeEventListener(r,f,s),typeof o=="function")){typeof f!="function"&&f!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(r,o,s);break e}n in t?t[n]=o:o===!0?t.setAttribute(n,""):Ll(t,n,o)}}}function mr(t,r,n){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",t),lt("load",t);var o=!1,s=!1,f;for(f in n)if(n.hasOwnProperty(f)){var x=n[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:St(t,r,f,x,n,null)}}s&&St(t,r,"srcSet",n.srcSet,n,null),o&&St(t,r,"src",n.src,n,null);return;case"input":lt("invalid",t);var R=f=x=s=null,A=null,U=null;for(o in n)if(n.hasOwnProperty(o)){var ae=n[o];if(ae!=null)switch(o){case"name":s=ae;break;case"type":x=ae;break;case"checked":A=ae;break;case"defaultChecked":U=ae;break;case"value":f=ae;break;case"defaultValue":R=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(i(137,r));break;default:St(t,r,o,ae,n,null)}}op(t,f,R,A,U,x,s,!1),Ou(t);return;case"select":lt("invalid",t),o=x=f=null;for(s in n)if(n.hasOwnProperty(s)&&(R=n[s],R!=null))switch(s){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:St(t,r,s,R,n,null)}r=f,n=x,t.multiple=!!o,r!=null?Hl(t,!!o,r,!1):n!=null&&Hl(t,!!o,n,!0);return;case"textarea":lt("invalid",t),f=s=o=null;for(x in n)if(n.hasOwnProperty(x)&&(R=n[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":s=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(i(91));break;default:St(t,r,x,R,n,null)}sp(t,o,s,f),Ou(t);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(o=n[A],o!=null))switch(A){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:St(t,r,A,o,n,null)}return;case"dialog":lt("cancel",t),lt("close",t);break;case"iframe":case"object":lt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)lt(To[o],t);break;case"image":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"embed":case"source":case"link":lt("error",t),lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in n)if(n.hasOwnProperty(U)&&(o=n[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:St(t,r,U,o,n,null)}return;default:if(Gc(r)){for(ae in n)n.hasOwnProperty(ae)&&(o=n[ae],o!==void 0&&Od(t,r,ae,o,n,void 0));return}}for(R in n)n.hasOwnProperty(R)&&(o=n[R],o!=null&&St(t,r,R,o,n,null))}function vw(t,r,n,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,f=null,x=null,R=null,A=null,U=null,ae=null;for(te in n){var ce=n[te];if(n.hasOwnProperty(te)&&ce!=null)switch(te){case"checked":break;case"value":break;case"defaultValue":A=ce;default:o.hasOwnProperty(te)||St(t,r,te,null,o,ce)}}for(var Q in o){var te=o[Q];if(ce=n[Q],o.hasOwnProperty(Q)&&(te!=null||ce!=null))switch(Q){case"type":f=te;break;case"name":s=te;break;case"checked":U=te;break;case"defaultChecked":ae=te;break;case"value":x=te;break;case"defaultValue":R=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(i(137,r));break;default:te!==ce&&St(t,r,Q,te,o,ce)}}qc(t,x,R,A,U,ae,f,s);return;case"select":te=x=R=Q=null;for(f in n)if(A=n[f],n.hasOwnProperty(f)&&A!=null)switch(f){case"value":break;case"multiple":te=A;default:o.hasOwnProperty(f)||St(t,r,f,null,o,A)}for(s in o)if(f=o[s],A=n[s],o.hasOwnProperty(s)&&(f!=null||A!=null))switch(s){case"value":Q=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==A&&St(t,r,s,f,o,A)}r=R,n=x,o=te,Q!=null?Hl(t,!!n,Q,!1):!!o!=!!n&&(r!=null?Hl(t,!!n,r,!0):Hl(t,!!n,n?[]:"",!1));return;case"textarea":te=Q=null;for(R in n)if(s=n[R],n.hasOwnProperty(R)&&s!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:St(t,r,R,null,o,s)}for(x in o)if(s=o[x],f=n[x],o.hasOwnProperty(x)&&(s!=null||f!=null))switch(x){case"value":Q=s;break;case"defaultValue":te=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(i(91));break;default:s!==f&&St(t,r,x,s,o,f)}up(t,Q,te);return;case"option":for(var Be in n)if(Q=n[Be],n.hasOwnProperty(Be)&&Q!=null&&!o.hasOwnProperty(Be))switch(Be){case"selected":t.selected=!1;break;default:St(t,r,Be,null,o,Q)}for(A in o)if(Q=o[A],te=n[A],o.hasOwnProperty(A)&&Q!==te&&(Q!=null||te!=null))switch(A){case"selected":t.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:St(t,r,A,Q,o,te)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in n)Q=n[Qe],n.hasOwnProperty(Qe)&&Q!=null&&!o.hasOwnProperty(Qe)&&St(t,r,Qe,null,o,Q);for(U in o)if(Q=o[U],te=n[U],o.hasOwnProperty(U)&&Q!==te&&(Q!=null||te!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,r));break;default:St(t,r,U,Q,o,te)}return;default:if(Gc(r)){for(var qt in n)Q=n[qt],n.hasOwnProperty(qt)&&Q!==void 0&&!o.hasOwnProperty(qt)&&Od(t,r,qt,void 0,o,Q);for(ae in o)Q=o[ae],te=n[ae],!o.hasOwnProperty(ae)||Q===te||Q===void 0&&te===void 0||Od(t,r,ae,Q,o,te);return}}for(var F in n)Q=n[F],n.hasOwnProperty(F)&&Q!=null&&!o.hasOwnProperty(F)&&St(t,r,F,null,o,Q);for(ce in o)Q=o[ce],te=n[ce],!o.hasOwnProperty(ce)||Q===te||Q==null&&te==null||St(t,r,ce,Q,o,te)}var Cd=null,Ad=null;function Es(t){return t.nodeType===9?t:t.ownerDocument}function ry(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ay(t,r){if(t===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&r==="foreignObject"?0:t}function Dd(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zd=null;function bw(){var t=window.event;return t&&t.type==="popstate"?t===zd?!1:(zd=t,!0):(zd=null,!1)}var ny=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,ly=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof ly<"u"?function(t){return ly.resolve(null).then(t).catch(Ew)}:ny;function Ew(t){setTimeout(function(){throw t})}function Bd(t,r){var n=r,o=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(o===0){t.removeChild(s),jo(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=s}while(n);jo(r)}function jd(t){var r=t.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var n=r;switch(r=r.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":jd(n),ja(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function ww(t,r,n,o){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==r.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Fr])switch(r){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(r==="input"&&t.type==="hidden"){var f=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=da(t.nextSibling),t===null)break}return null}function $w(t,r,n){if(r==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=da(t.nextSibling),t===null))return null;return t}function da(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return t}function iy(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return t;r--}else n==="/$"&&r++}t=t.previousSibling}return null}function oy(t,r,n){switch(r=Es(n),t){case"html":if(t=r.documentElement,!t)throw Error(i(452));return t;case"head":if(t=r.head,!t)throw Error(i(453));return t;case"body":if(t=r.body,!t)throw Error(i(454));return t;default:throw Error(i(451))}}var ta=new Map,uy=new Set;function ws(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var en=ee.d;ee.d={f:_w,r:Nw,D:Tw,C:Rw,L:Mw,m:Ow,X:Aw,S:Cw,M:Dw};function _w(){var t=en.f(),r=ps();return t||r}function Nw(t){var r=fr(t);r!==null&&r.tag===5&&r.type==="form"?B0(r):en.r(t)}var di=typeof document>"u"?null:document;function sy(t,r,n){var o=di;if(o&&typeof r=="string"&&r){var s=Gr(r);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),uy.has(s)||(uy.add(s),t={rel:t,crossOrigin:n,href:r},o.querySelector(s)===null&&(r=o.createElement("link"),mr(r,"link",t),Nt(r),o.head.appendChild(r)))}}function Tw(t){en.D(t),sy("dns-prefetch",t,null)}function Rw(t,r){en.C(t,r),sy("preconnect",t,r)}function Mw(t,r,n){en.L(t,r,n);var o=di;if(o&&t&&r){var s='link[rel="preload"][as="'+Gr(r)+'"]';r==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Gr(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Gr(n.imageSizes)+'"]')):s+='[href="'+Gr(t)+'"]';var f=s;switch(r){case"style":f=hi(t);break;case"script":f=mi(t)}ta.has(f)||(t=Z({rel:"preload",href:r==="image"&&n&&n.imageSrcSet?void 0:t,as:r},n),ta.set(f,t),o.querySelector(s)!==null||r==="style"&&o.querySelector(Mo(f))||r==="script"&&o.querySelector(Oo(f))||(r=o.createElement("link"),mr(r,"link",t),Nt(r),o.head.appendChild(r)))}}function Ow(t,r){en.m(t,r);var n=di;if(n&&t){var o=r&&typeof r.as=="string"?r.as:"script",s='link[rel="modulepreload"][as="'+Gr(o)+'"][href="'+Gr(t)+'"]',f=s;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mi(t)}if(!ta.has(f)&&(t=Z({rel:"modulepreload",href:t},r),ta.set(f,t),n.querySelector(s)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Oo(f)))return}o=n.createElement("link"),mr(o,"link",t),Nt(o),n.head.appendChild(o)}}}function Cw(t,r,n){en.S(t,r,n);var o=di;if(o&&t){var s=qr(o).hoistableStyles,f=hi(t);r=r||"default";var x=s.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Mo(f)))R.loading=5;else{t=Z({rel:"stylesheet",href:t,"data-precedence":r},n),(n=ta.get(f))&&Ld(t,n);var A=x=o.createElement("link");Nt(A),mr(A,"link",t),A._p=new Promise(function(U,ae){A.onload=U,A.onerror=ae}),A.addEventListener("load",function(){R.loading|=1}),A.addEventListener("error",function(){R.loading|=2}),R.loading|=4,$s(x,r,o)}x={type:"stylesheet",instance:x,count:1,state:R},s.set(f,x)}}}function Aw(t,r){en.X(t,r);var n=di;if(n&&t){var o=qr(n).hoistableScripts,s=mi(t),f=o.get(s);f||(f=n.querySelector(Oo(s)),f||(t=Z({src:t,async:!0},r),(r=ta.get(s))&&Hd(t,r),f=n.createElement("script"),Nt(f),mr(f,"link",t),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(s,f))}}function Dw(t,r){en.M(t,r);var n=di;if(n&&t){var o=qr(n).hoistableScripts,s=mi(t),f=o.get(s);f||(f=n.querySelector(Oo(s)),f||(t=Z({src:t,async:!0,type:"module"},r),(r=ta.get(s))&&Hd(t,r),f=n.createElement("script"),Nt(f),mr(f,"link",t),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(s,f))}}function cy(t,r,n,o){var s=(s=Ve.current)?ws(s):null;if(!s)throw Error(i(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(r=hi(n.href),n=qr(s).hoistableStyles,o=n.get(r),o||(o={type:"style",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=hi(n.href);var f=qr(s).hoistableStyles,x=f.get(t);if(x||(s=s.ownerDocument||s,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=s.querySelector(Mo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ta.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ta.set(t,n),f||zw(s,t,n,x.state))),r&&o===null)throw Error(i(528,""));return x}if(r&&o!==null)throw Error(i(529,""));return null;case"script":return r=n.async,n=n.src,typeof n=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=mi(n),n=qr(s).hoistableScripts,o=n.get(r),o||(o={type:"script",instance:null,count:0,state:null},n.set(r,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,t))}}function hi(t){return'href="'+Gr(t)+'"'}function Mo(t){return'link[rel="stylesheet"]['+t+"]"}function fy(t){return Z({},t,{"data-precedence":t.precedence,precedence:null})}function zw(t,r,n,o){t.querySelector('link[rel="preload"][as="style"]['+r+"]")?o.loading=1:(r=t.createElement("link"),o.preload=r,r.addEventListener("load",function(){return o.loading|=1}),r.addEventListener("error",function(){return o.loading|=2}),mr(r,"link",n),Nt(r),t.head.appendChild(r))}function mi(t){return'[src="'+Gr(t)+'"]'}function Oo(t){return"script[async]"+t}function dy(t,r,n){if(r.count++,r.instance===null)switch(r.type){case"style":var o=t.querySelector('style[data-href~="'+Gr(n.href)+'"]');if(o)return r.instance=o,Nt(o),o;var s=Z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Nt(o),mr(o,"style",s),$s(o,n.precedence,t),r.instance=o;case"stylesheet":s=hi(n.href);var f=t.querySelector(Mo(s));if(f)return r.state.loading|=4,r.instance=f,Nt(f),f;o=fy(n),(s=ta.get(s))&&Ld(o,s),f=(t.ownerDocument||t).createElement("link"),Nt(f);var x=f;return x._p=new Promise(function(R,A){x.onload=R,x.onerror=A}),mr(f,"link",o),r.state.loading|=4,$s(f,n.precedence,t),r.instance=f;case"script":return f=mi(n.src),(s=t.querySelector(Oo(f)))?(r.instance=s,Nt(s),s):(o=n,(s=ta.get(f))&&(o=Z({},n),Hd(o,s)),t=t.ownerDocument||t,s=t.createElement("script"),Nt(s),mr(s,"link",o),t.head.appendChild(s),r.instance=s);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(o=r.instance,r.state.loading|=4,$s(o,n.precedence,t));return r.instance}function $s(t,r,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=o.length?o[o.length-1]:null,f=s,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===r)f=R;else if(f!==s)break}f?f.parentNode.insertBefore(t,f.nextSibling):(r=n.nodeType===9?n.head:n,r.insertBefore(t,r.firstChild))}function Ld(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.title==null&&(t.title=r.title)}function Hd(t,r){t.crossOrigin==null&&(t.crossOrigin=r.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=r.referrerPolicy),t.integrity==null&&(t.integrity=r.integrity)}var _s=null;function hy(t,r,n){if(_s===null){var o=new Map,s=_s=new Map;s.set(n,o)}else s=_s,o=s.get(n),o||(o=new Map,s.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var f=n[s];if(!(f[Fr]||f[Re]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(r)||"";x=t+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function my(t,r,n){t=t.ownerDocument||t,t.head.insertBefore(n,r==="title"?t.querySelector("head > title"):null)}function Bw(t,r,n){if(n===1||r.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return t=r.disabled,typeof r.precedence=="string"&&t==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function py(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Co=null;function jw(){}function Lw(t,r,n){if(Co===null)throw Error(i(475));var o=Co;if(r.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var s=hi(n.href),f=t.querySelector(Mo(s));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=Ns.bind(o),t.then(o,o)),r.state.loading|=4,r.instance=f,Nt(f);return}f=t.ownerDocument||t,n=fy(n),(s=ta.get(s))&&Ld(n,s),f=f.createElement("link"),Nt(f);var x=f;x._p=new Promise(function(R,A){x.onload=R,x.onerror=A}),mr(f,"link",n),r.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(r,t),(t=r.state.preload)&&(r.state.loading&3)===0&&(o.count++,r=Ns.bind(o),t.addEventListener("load",r),t.addEventListener("error",r))}}function Hw(){if(Co===null)throw Error(i(475));var t=Co;return t.stylesheets&&t.count===0&&Pd(t,t.stylesheets),0<t.count?function(r){var n=setTimeout(function(){if(t.stylesheets&&Pd(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Ns(){if(this.count--,this.count===0){if(this.stylesheets)Pd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ts=null;function Pd(t,r){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ts=new Map,r.forEach(Pw,t),Ts=null,Ns.call(t))}function Pw(t,r){if(!(r.state.loading&4)){var n=Ts.get(t);if(n)var o=n.get(null);else{n=new Map,Ts.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<s.length;f++){var x=s[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(n.set(x.dataset.precedence,x),o=x)}o&&n.set(null,o)}s=r.instance,x=s.getAttribute("data-precedence"),f=n.get(x)||o,f===o&&n.set(null,s),n.set(x,s),this.count++,o=Ns.bind(this),s.addEventListener("load",o),s.addEventListener("error",o),f?f.parentNode.insertBefore(s,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),r.state.loading|=4}}var Ao={$$typeof:w,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function Uw(t,r,n,o,s,f,x,R){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Y(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Y(0),this.hiddenUpdates=Y(null),this.identifierPrefix=o,this.onUncaughtError=s,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function gy(t,r,n,o,s,f,x,R,A,U,ae,ce){return t=new Uw(t,r,n,x,R,A,U,ce),r=1,f===!0&&(r|=24),f=Ir(3,null,null,r),t.current=f,f.stateNode=t,r=yf(),r.refCount++,t.pooledCache=r,r.refCount++,f.memoizedState={element:o,isDehydrated:n,cache:r},Wf(f),t}function yy(t){return t?(t=Vl,t):Vl}function vy(t,r,n,o,s,f){s=yy(s),o.context===null?o.context=s:o.pendingContext=s,o=pn(r),o.payload={element:n},f=f===void 0?null:f,f!==null&&(o.callback=f),n=gn(t,o,r),n!==null&&(wr(n,t,r),po(n,t,r))}function by(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<r?n:r}}function Ud(t,r){by(t,r),(t=t.alternate)&&by(t,r)}function xy(t){if(t.tag===13){var r=un(t,67108864);r!==null&&wr(r,t,67108864),Ud(t,67108864)}}var Rs=!0;function kw(t,r,n,o){var s=q.T;q.T=null;var f=ee.p;try{ee.p=2,kd(t,r,n,o)}finally{ee.p=f,q.T=s}}function Fw(t,r,n,o){var s=q.T;q.T=null;var f=ee.p;try{ee.p=8,kd(t,r,n,o)}finally{ee.p=f,q.T=s}}function kd(t,r,n,o){if(Rs){var s=Fd(o);if(s===null)Md(t,r,o,Ms,n),Ey(t,o);else if(Yw(s,t,r,n,o))o.stopPropagation();else if(Ey(t,o),r&4&&-1<qw.indexOf(t)){for(;s!==null;){var f=fr(s);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=we(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var A=1<<31-Ht(x);R.entanglements[1]|=A,x&=~A}_a(f),(jt&6)===0&&(ds=ft()+500,No(0))}}break;case 13:R=un(f,2),R!==null&&wr(R,f,2),ps(),Ud(f,2)}if(f=Fd(o),f===null&&Md(t,r,o,Ms,n),f===s)break;s=f}s!==null&&o.stopPropagation()}else Md(t,r,o,null,n)}}function Fd(t){return t=Qc(t),qd(t)}var Ms=null;function qd(t){if(Ms=null,t=cr(t),t!==null){var r=ue(t);if(r===null)t=null;else{var n=r.tag;if(n===13){if(t=ie(r),t!==null)return t;t=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null)}}return Ms=t,null}function Sy(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sr()){case nr:return 2;case ua:return 8;case Nr:case ln:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Yd=!1,wn=null,$n=null,_n=null,Do=new Map,zo=new Map,Nn=[],qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ey(t,r){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Do.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(r.pointerId)}}function Bo(t,r,n,o,s,f){return t===null||t.nativeEvent!==f?(t={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:f,targetContainers:[s]},r!==null&&(r=fr(r),r!==null&&xy(r)),t):(t.eventSystemFlags|=o,r=t.targetContainers,s!==null&&r.indexOf(s)===-1&&r.push(s),t)}function Yw(t,r,n,o,s){switch(r){case"focusin":return wn=Bo(wn,t,r,n,o,s),!0;case"dragenter":return $n=Bo($n,t,r,n,o,s),!0;case"mouseover":return _n=Bo(_n,t,r,n,o,s),!0;case"pointerover":var f=s.pointerId;return Do.set(f,Bo(Do.get(f)||null,t,r,n,o,s)),!0;case"gotpointercapture":return f=s.pointerId,zo.set(f,Bo(zo.get(f)||null,t,r,n,o,s)),!0}return!1}function wy(t){var r=cr(t.target);if(r!==null){var n=ue(r);if(n!==null){if(r=n.tag,r===13){if(r=ie(n),r!==null){t.blockedOn=r,$e(t.priority,function(){if(n.tag===13){var o=Lr(),s=un(n,o);s!==null&&wr(s,n,o),Ud(n,o)}});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Os(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var n=Fd(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);Vc=o,n.target.dispatchEvent(o),Vc=null}else return r=fr(n),r!==null&&xy(r),t.blockedOn=n,!1;r.shift()}return!0}function $y(t,r,n){Os(t)&&n.delete(r)}function Gw(){Yd=!1,wn!==null&&Os(wn)&&(wn=null),$n!==null&&Os($n)&&($n=null),_n!==null&&Os(_n)&&(_n=null),Do.forEach($y),zo.forEach($y)}function Cs(t,r){t.blockedOn===r&&(t.blockedOn=null,Yd||(Yd=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gw)))}var As=null;function _y(t){As!==t&&(As=t,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){As===t&&(As=null);for(var r=0;r<t.length;r+=3){var n=t[r],o=t[r+1],s=t[r+2];if(typeof o!="function"){if(qd(o||n)===null)continue;break}var f=fr(n);f!==null&&(t.splice(r,3),r-=3,Df(f,{pending:!0,data:s,method:n.method,action:o},o,s))}}))}function jo(t){function r(A){return Cs(A,t)}wn!==null&&Cs(wn,t),$n!==null&&Cs($n,t),_n!==null&&Cs(_n,t),Do.forEach(r),zo.forEach(r);for(var n=0;n<Nn.length;n++){var o=Nn[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Nn.length&&(n=Nn[0],n.blockedOn===null);)wy(n),n.blockedOn===null&&Nn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var s=n[o],f=n[o+1],x=s[Ye]||null;if(typeof f=="function")x||_y(n);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(s=f,x=f[Ye]||null)R=x.formAction;else if(qd(s)!==null)continue}else R=x.action;typeof R=="function"?n[o+1]=R:(n.splice(o,3),o-=3),_y(n)}}}function Gd(t){this._internalRoot=t}Ds.prototype.render=Gd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));var n=r.current,o=Lr();vy(n,o,t,r,null,null)},Ds.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;t.tag===0&&si(),vy(t.current,2,null,t,null,null),ps(),r[bt]=null}};function Ds(t){this._internalRoot=t}Ds.prototype.unstable_scheduleHydration=function(t){if(t){var r=De();t={blockedOn:null,target:t,priority:r};for(var n=0;n<Nn.length&&r!==0&&r<Nn[n].priority;n++);Nn.splice(n,0,t),n===0&&wy(t)}};var Ny=a.version;if(Ny!=="19.0.0")throw Error(i(527,Ny,"19.0.0"));ee.findDOMNode=function(t){var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=L(r),t=t!==null?X(t):null,t=t===null?null:t.stateNode,t};var Vw={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:q,findFiberByHostInstance:cr,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{pt=zs.inject(Vw),at=zs}catch{}}return Ho.createRoot=function(t,r){if(!u(t))throw Error(i(299));var n=!1,o="",s=q0,f=Y0,x=G0,R=null;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onUncaughtError!==void 0&&(s=r.onUncaughtError),r.onCaughtError!==void 0&&(f=r.onCaughtError),r.onRecoverableError!==void 0&&(x=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(R=r.unstable_transitionCallbacks)),r=gy(t,1,!1,null,null,n,o,s,f,x,R,null),t[bt]=r.current,Rd(t.nodeType===8?t.parentNode:t),new Gd(r)},Ho.hydrateRoot=function(t,r,n){if(!u(t))throw Error(i(299));var o=!1,s="",f=q0,x=Y0,R=G0,A=null,U=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(x=n.onCaughtError),n.onRecoverableError!==void 0&&(R=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks),n.formState!==void 0&&(U=n.formState)),r=gy(t,1,!0,r,n??null,o,s,f,x,R,A,U),r.context=yy(null),n=r.current,o=Lr(),s=pn(o),s.callback=null,gn(n,s,o),r.current.lanes=o,ne(r,o),_a(r),t[bt]=r.current,Rd(t),new Ds(r)},Ho.version="19.0.0",Ho}var Py;function i2(){if(Py)return Zd.exports;Py=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),Zd.exports=l2(),Zd.exports}var o2=i2(),bu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Al=typeof window>"u"||"Deno"in globalThis;function aa(){}function u2(e,a){return typeof e=="function"?e(a):e}function mh(e){return typeof e=="number"&&e>=0&&e!==1/0}function I1(e,a){return Math.max(e+(a||0)-Date.now(),0)}function bi(e,a){return typeof e=="function"?e(a):e}function ga(e,a){return typeof e=="function"?e(a):e}function Uy(e,a){const{type:l="all",exact:i,fetchStatus:u,predicate:c,queryKey:d,stale:h}=e;if(d){if(i){if(a.queryHash!==bm(d,a.options))return!1}else if(!tu(a.queryKey,d))return!1}if(l!=="all"){const p=a.isActive();if(l==="active"&&!p||l==="inactive"&&p)return!1}return!(typeof h=="boolean"&&a.isStale()!==h||u&&u!==a.state.fetchStatus||c&&!c(a))}function ky(e,a){const{exact:l,status:i,predicate:u,mutationKey:c}=e;if(c){if(!a.options.mutationKey)return!1;if(l){if(eu(a.options.mutationKey)!==eu(c))return!1}else if(!tu(a.options.mutationKey,c))return!1}return!(i&&a.state.status!==i||u&&!u(a))}function bm(e,a){return((a==null?void 0:a.queryKeyHashFn)||eu)(e)}function eu(e){return JSON.stringify(e,(a,l)=>gh(l)?Object.keys(l).sort().reduce((i,u)=>(i[u]=l[u],i),{}):l)}function tu(e,a){return e===a?!0:typeof e!=typeof a?!1:e&&a&&typeof e=="object"&&typeof a=="object"?Object.keys(a).every(l=>tu(e[l],a[l])):!1}function eb(e,a){if(e===a)return e;const l=Fy(e)&&Fy(a);if(l||gh(e)&&gh(a)){const i=l?e:Object.keys(e),u=i.length,c=l?a:Object.keys(a),d=c.length,h=l?[]:{};let p=0;for(let m=0;m<d;m++){const g=l?m:c[m];(!l&&i.includes(g)||l)&&e[g]===void 0&&a[g]===void 0?(h[g]=void 0,p++):(h[g]=eb(e[g],a[g]),h[g]===e[g]&&e[g]!==void 0&&p++)}return u===d&&p===u?e:h}return a}function ph(e,a){if(!a||Object.keys(e).length!==Object.keys(a).length)return!1;for(const l in e)if(e[l]!==a[l])return!1;return!0}function Fy(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function gh(e){if(!qy(e))return!1;const a=e.constructor;if(a===void 0)return!0;const l=a.prototype;return!(!qy(l)||!l.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function qy(e){return Object.prototype.toString.call(e)==="[object Object]"}function s2(e){return new Promise(a=>{setTimeout(a,e)})}function yh(e,a,l){return typeof l.structuralSharing=="function"?l.structuralSharing(e,a):l.structuralSharing!==!1?eb(e,a):a}function c2(e,a,l=0){const i=[...e,a];return l&&i.length>l?i.slice(1):i}function f2(e,a,l=0){const i=[a,...e];return l&&i.length>l?i.slice(0,-1):i}var xm=Symbol();function tb(e,a){return!e.queryFn&&(a!=null&&a.initialPromise)?()=>a.initialPromise:!e.queryFn||e.queryFn===xm?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var xl,An,Si,q1,d2=(q1=class extends bu{constructor(){super();Fe(this,xl);Fe(this,An);Fe(this,Si);Oe(this,Si,a=>{if(!Al&&window.addEventListener){const l=()=>a();return window.addEventListener("visibilitychange",l,!1),()=>{window.removeEventListener("visibilitychange",l)}}})}onSubscribe(){P(this,An)||this.setEventListener(P(this,Si))}onUnsubscribe(){var a;this.hasListeners()||((a=P(this,An))==null||a.call(this),Oe(this,An,void 0))}setEventListener(a){var l;Oe(this,Si,a),(l=P(this,An))==null||l.call(this),Oe(this,An,a(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(a){P(this,xl)!==a&&(Oe(this,xl,a),this.onFocus())}onFocus(){const a=this.isFocused();this.listeners.forEach(l=>{l(a)})}isFocused(){var a;return typeof P(this,xl)=="boolean"?P(this,xl):((a=globalThis.document)==null?void 0:a.visibilityState)!=="hidden"}},xl=new WeakMap,An=new WeakMap,Si=new WeakMap,q1),Sm=new d2,Ei,Dn,wi,Y1,h2=(Y1=class extends bu{constructor(){super();Fe(this,Ei,!0);Fe(this,Dn);Fe(this,wi);Oe(this,wi,a=>{if(!Al&&window.addEventListener){const l=()=>a(!0),i=()=>a(!1);return window.addEventListener("online",l,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",l),window.removeEventListener("offline",i)}}})}onSubscribe(){P(this,Dn)||this.setEventListener(P(this,wi))}onUnsubscribe(){var a;this.hasListeners()||((a=P(this,Dn))==null||a.call(this),Oe(this,Dn,void 0))}setEventListener(a){var l;Oe(this,wi,a),(l=P(this,Dn))==null||l.call(this),Oe(this,Dn,a(this.setOnline.bind(this)))}setOnline(a){P(this,Ei)!==a&&(Oe(this,Ei,a),this.listeners.forEach(i=>{i(a)}))}isOnline(){return P(this,Ei)}},Ei=new WeakMap,Dn=new WeakMap,wi=new WeakMap,Y1),nc=new h2;function vh(){let e,a;const l=new Promise((u,c)=>{e=u,a=c});l.status="pending",l.catch(()=>{});function i(u){Object.assign(l,u),delete l.resolve,delete l.reject}return l.resolve=u=>{i({status:"fulfilled",value:u}),e(u)},l.reject=u=>{i({status:"rejected",reason:u}),a(u)},l}function m2(e){return Math.min(1e3*2**e,3e4)}function rb(e){return(e??"online")==="online"?nc.isOnline():!0}var ab=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Id(e){return e instanceof ab}function nb(e){let a=!1,l=0,i=!1,u;const c=vh(),d=$=>{var E;i||(b(new ab($)),(E=e.abort)==null||E.call(e))},h=()=>{a=!0},p=()=>{a=!1},m=()=>Sm.isFocused()&&(e.networkMode==="always"||nc.isOnline())&&e.canRun(),g=()=>rb(e.networkMode)&&e.canRun(),y=$=>{var E;i||(i=!0,(E=e.onSuccess)==null||E.call(e,$),u==null||u(),c.resolve($))},b=$=>{var E;i||(i=!0,(E=e.onError)==null||E.call(e,$),u==null||u(),c.reject($))},w=()=>new Promise($=>{var E;u=T=>{(i||m())&&$(T)},(E=e.onPause)==null||E.call(e)}).then(()=>{var $;u=void 0,i||($=e.onContinue)==null||$.call(e)}),S=()=>{if(i)return;let $;const E=l===0?e.initialPromise:void 0;try{$=E??e.fn()}catch(T){$=Promise.reject(T)}Promise.resolve($).then(y).catch(T=>{var j;if(i)return;const C=e.retry??(Al?0:3),M=e.retryDelay??m2,z=typeof M=="function"?M(l,T):M,_=C===!0||typeof C=="number"&&l<C||typeof C=="function"&&C(l,T);if(a||!_){b(T);return}l++,(j=e.onFail)==null||j.call(e,l,T),s2(z).then(()=>m()?void 0:w()).then(()=>{a?b(T):S()})})};return{promise:c,cancel:d,continue:()=>(u==null||u(),c),cancelRetry:h,continueRetry:p,canStart:g,start:()=>(g()?S():w().then(S),c)}}var p2=e=>setTimeout(e,0);function g2(){let e=[],a=0,l=h=>{h()},i=h=>{h()},u=p2;const c=h=>{a?e.push(h):u(()=>{l(h)})},d=()=>{const h=e;e=[],h.length&&u(()=>{i(()=>{h.forEach(p=>{l(p)})})})};return{batch:h=>{let p;a++;try{p=h()}finally{a--,a||d()}return p},batchCalls:h=>(...p)=>{c(()=>{h(...p)})},schedule:c,setNotifyFunction:h=>{l=h},setBatchNotifyFunction:h=>{i=h},setScheduler:h=>{u=h}}}var pr=g2(),Sl,G1,lb=(G1=class{constructor(){Fe(this,Sl)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),mh(this.gcTime)&&Oe(this,Sl,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Al?1/0:5*60*1e3))}clearGcTimeout(){P(this,Sl)&&(clearTimeout(P(this,Sl)),Oe(this,Sl,void 0))}},Sl=new WeakMap,G1),$i,_i,ra,El,vr,mu,wl,ha,tn,V1,y2=(V1=class extends lb{constructor(a){super();Fe(this,ha);Fe(this,$i);Fe(this,_i);Fe(this,ra);Fe(this,El);Fe(this,vr);Fe(this,mu);Fe(this,wl);Oe(this,wl,!1),Oe(this,mu,a.defaultOptions),this.setOptions(a.options),this.observers=[],Oe(this,El,a.client),Oe(this,ra,P(this,El).getQueryCache()),this.queryKey=a.queryKey,this.queryHash=a.queryHash,Oe(this,$i,v2(this.options)),this.state=a.state??P(this,$i),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var a;return(a=P(this,vr))==null?void 0:a.promise}setOptions(a){this.options={...P(this,mu),...a},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&P(this,ra).remove(this)}setData(a,l){const i=yh(this.state.data,a,this.options);return it(this,ha,tn).call(this,{data:i,type:"success",dataUpdatedAt:l==null?void 0:l.updatedAt,manual:l==null?void 0:l.manual}),i}setState(a,l){it(this,ha,tn).call(this,{type:"setState",state:a,setStateOptions:l})}cancel(a){var i,u;const l=(i=P(this,vr))==null?void 0:i.promise;return(u=P(this,vr))==null||u.cancel(a),l?l.then(aa).catch(aa):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(P(this,$i))}isActive(){return this.observers.some(a=>ga(a.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===xm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(a=>a.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(a=0){return this.state.isInvalidated||this.state.data===void 0||!I1(this.state.dataUpdatedAt,a)}onFocus(){var l;const a=this.observers.find(i=>i.shouldFetchOnWindowFocus());a==null||a.refetch({cancelRefetch:!1}),(l=P(this,vr))==null||l.continue()}onOnline(){var l;const a=this.observers.find(i=>i.shouldFetchOnReconnect());a==null||a.refetch({cancelRefetch:!1}),(l=P(this,vr))==null||l.continue()}addObserver(a){this.observers.includes(a)||(this.observers.push(a),this.clearGcTimeout(),P(this,ra).notify({type:"observerAdded",query:this,observer:a}))}removeObserver(a){this.observers.includes(a)&&(this.observers=this.observers.filter(l=>l!==a),this.observers.length||(P(this,vr)&&(P(this,wl)?P(this,vr).cancel({revert:!0}):P(this,vr).cancelRetry()),this.scheduleGc()),P(this,ra).notify({type:"observerRemoved",query:this,observer:a}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||it(this,ha,tn).call(this,{type:"invalidate"})}fetch(a,l){var p,m,g;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(l!=null&&l.cancelRefetch))this.cancel({silent:!0});else if(P(this,vr))return P(this,vr).continueRetry(),P(this,vr).promise}if(a&&this.setOptions(a),!this.options.queryFn){const y=this.observers.find(b=>b.options.queryFn);y&&this.setOptions(y.options)}const i=new AbortController,u=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(Oe(this,wl,!0),i.signal)})},c=()=>{const y=tb(this.options,l),b={client:P(this,El),queryKey:this.queryKey,meta:this.meta};return u(b),Oe(this,wl,!1),this.options.persister?this.options.persister(y,b,this):y(b)},d={fetchOptions:l,options:this.options,queryKey:this.queryKey,client:P(this,El),state:this.state,fetchFn:c};u(d),(p=this.options.behavior)==null||p.onFetch(d,this),Oe(this,_i,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((m=d.fetchOptions)==null?void 0:m.meta))&&it(this,ha,tn).call(this,{type:"fetch",meta:(g=d.fetchOptions)==null?void 0:g.meta});const h=y=>{var b,w,S,$;Id(y)&&y.silent||it(this,ha,tn).call(this,{type:"error",error:y}),Id(y)||((w=(b=P(this,ra).config).onError)==null||w.call(b,y,this),($=(S=P(this,ra).config).onSettled)==null||$.call(S,this.state.data,y,this)),this.scheduleGc()};return Oe(this,vr,nb({initialPromise:l==null?void 0:l.initialPromise,fn:d.fetchFn,abort:i.abort.bind(i),onSuccess:y=>{var b,w,S,$;if(y===void 0){h(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(y)}catch(E){h(E);return}(w=(b=P(this,ra).config).onSuccess)==null||w.call(b,y,this),($=(S=P(this,ra).config).onSettled)==null||$.call(S,y,this.state.error,this),this.scheduleGc()},onError:h,onFail:(y,b)=>{it(this,ha,tn).call(this,{type:"failed",failureCount:y,error:b})},onPause:()=>{it(this,ha,tn).call(this,{type:"pause"})},onContinue:()=>{it(this,ha,tn).call(this,{type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode,canRun:()=>!0})),P(this,vr).start()}},$i=new WeakMap,_i=new WeakMap,ra=new WeakMap,El=new WeakMap,vr=new WeakMap,mu=new WeakMap,wl=new WeakMap,ha=new WeakSet,tn=function(a){const l=i=>{switch(a.type){case"failed":return{...i,fetchFailureCount:a.failureCount,fetchFailureReason:a.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...ib(i.data,this.options),fetchMeta:a.meta??null};case"success":return{...i,data:a.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:a.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!a.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const u=a.error;return Id(u)&&u.revert&&P(this,_i)?{...P(this,_i),fetchStatus:"idle"}:{...i,error:u,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...a.state}}};this.state=l(this.state),pr.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),P(this,ra).notify({query:this,type:"updated",action:a})})},V1);function ib(e,a){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:rb(a.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function v2(e){const a=typeof e.initialData=="function"?e.initialData():e.initialData,l=a!==void 0,i=l?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:a,dataUpdateCount:0,dataUpdatedAt:l?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:l?"success":"pending",fetchStatus:"idle"}}var Ra,Q1,b2=(Q1=class extends bu{constructor(a={}){super();Fe(this,Ra);this.config=a,Oe(this,Ra,new Map)}build(a,l,i){const u=l.queryKey,c=l.queryHash??bm(u,l);let d=this.get(c);return d||(d=new y2({client:a,queryKey:u,queryHash:c,options:a.defaultQueryOptions(l),state:i,defaultOptions:a.getQueryDefaults(u)}),this.add(d)),d}add(a){P(this,Ra).has(a.queryHash)||(P(this,Ra).set(a.queryHash,a),this.notify({type:"added",query:a}))}remove(a){const l=P(this,Ra).get(a.queryHash);l&&(a.destroy(),l===a&&P(this,Ra).delete(a.queryHash),this.notify({type:"removed",query:a}))}clear(){pr.batch(()=>{this.getAll().forEach(a=>{this.remove(a)})})}get(a){return P(this,Ra).get(a)}getAll(){return[...P(this,Ra).values()]}find(a){const l={exact:!0,...a};return this.getAll().find(i=>Uy(l,i))}findAll(a={}){const l=this.getAll();return Object.keys(a).length>0?l.filter(i=>Uy(a,i)):l}notify(a){pr.batch(()=>{this.listeners.forEach(l=>{l(a)})})}onFocus(){pr.batch(()=>{this.getAll().forEach(a=>{a.onFocus()})})}onOnline(){pr.batch(()=>{this.getAll().forEach(a=>{a.onOnline()})})}},Ra=new WeakMap,Q1),Ma,$r,$l,Oa,Rn,X1,x2=(X1=class extends lb{constructor(a){super();Fe(this,Oa);Fe(this,Ma);Fe(this,$r);Fe(this,$l);this.mutationId=a.mutationId,Oe(this,$r,a.mutationCache),Oe(this,Ma,[]),this.state=a.state||S2(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options=a,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(a){P(this,Ma).includes(a)||(P(this,Ma).push(a),this.clearGcTimeout(),P(this,$r).notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){Oe(this,Ma,P(this,Ma).filter(l=>l!==a)),this.scheduleGc(),P(this,$r).notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){P(this,Ma).length||(this.state.status==="pending"?this.scheduleGc():P(this,$r).remove(this))}continue(){var a;return((a=P(this,$l))==null?void 0:a.continue())??this.execute(this.state.variables)}async execute(a){var c,d,h,p,m,g,y,b,w,S,$,E,T,C,M,z,_,j,V,K;const l=()=>{it(this,Oa,Rn).call(this,{type:"continue"})};Oe(this,$l,nb({fn:()=>this.options.mutationFn?this.options.mutationFn(a):Promise.reject(new Error("No mutationFn found")),onFail:(q,Z)=>{it(this,Oa,Rn).call(this,{type:"failed",failureCount:q,error:Z})},onPause:()=>{it(this,Oa,Rn).call(this,{type:"pause"})},onContinue:l,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>P(this,$r).canRun(this)}));const i=this.state.status==="pending",u=!P(this,$l).canStart();try{if(i)l();else{it(this,Oa,Rn).call(this,{type:"pending",variables:a,isPaused:u}),await((d=(c=P(this,$r).config).onMutate)==null?void 0:d.call(c,a,this));const Z=await((p=(h=this.options).onMutate)==null?void 0:p.call(h,a));Z!==this.state.context&&it(this,Oa,Rn).call(this,{type:"pending",context:Z,variables:a,isPaused:u})}const q=await P(this,$l).start();return await((g=(m=P(this,$r).config).onSuccess)==null?void 0:g.call(m,q,a,this.state.context,this)),await((b=(y=this.options).onSuccess)==null?void 0:b.call(y,q,a,this.state.context)),await((S=(w=P(this,$r).config).onSettled)==null?void 0:S.call(w,q,null,this.state.variables,this.state.context,this)),await((E=($=this.options).onSettled)==null?void 0:E.call($,q,null,a,this.state.context)),it(this,Oa,Rn).call(this,{type:"success",data:q}),q}catch(q){try{throw await((C=(T=P(this,$r).config).onError)==null?void 0:C.call(T,q,a,this.state.context,this)),await((z=(M=this.options).onError)==null?void 0:z.call(M,q,a,this.state.context)),await((j=(_=P(this,$r).config).onSettled)==null?void 0:j.call(_,void 0,q,this.state.variables,this.state.context,this)),await((K=(V=this.options).onSettled)==null?void 0:K.call(V,void 0,q,a,this.state.context)),q}finally{it(this,Oa,Rn).call(this,{type:"error",error:q})}}finally{P(this,$r).runNext(this)}}},Ma=new WeakMap,$r=new WeakMap,$l=new WeakMap,Oa=new WeakSet,Rn=function(a){const l=i=>{switch(a.type){case"failed":return{...i,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:a.isPaused,status:"pending",variables:a.variables,submittedAt:Date.now()};case"success":return{...i,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:a.error,failureCount:i.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"}}};this.state=l(this.state),pr.batch(()=>{P(this,Ma).forEach(i=>{i.onMutationUpdate(a)}),P(this,$r).notify({mutation:this,type:"updated",action:a})})},X1);function S2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var an,ma,pu,Z1,E2=(Z1=class extends bu{constructor(a={}){super();Fe(this,an);Fe(this,ma);Fe(this,pu);this.config=a,Oe(this,an,new Set),Oe(this,ma,new Map),Oe(this,pu,0)}build(a,l,i){const u=new x2({mutationCache:this,mutationId:++Bs(this,pu)._,options:a.defaultMutationOptions(l),state:i});return this.add(u),u}add(a){P(this,an).add(a);const l=js(a);if(typeof l=="string"){const i=P(this,ma).get(l);i?i.push(a):P(this,ma).set(l,[a])}this.notify({type:"added",mutation:a})}remove(a){if(P(this,an).delete(a)){const l=js(a);if(typeof l=="string"){const i=P(this,ma).get(l);if(i)if(i.length>1){const u=i.indexOf(a);u!==-1&&i.splice(u,1)}else i[0]===a&&P(this,ma).delete(l)}}this.notify({type:"removed",mutation:a})}canRun(a){const l=js(a);if(typeof l=="string"){const i=P(this,ma).get(l),u=i==null?void 0:i.find(c=>c.state.status==="pending");return!u||u===a}else return!0}runNext(a){var i;const l=js(a);if(typeof l=="string"){const u=(i=P(this,ma).get(l))==null?void 0:i.find(c=>c!==a&&c.state.isPaused);return(u==null?void 0:u.continue())??Promise.resolve()}else return Promise.resolve()}clear(){pr.batch(()=>{P(this,an).forEach(a=>{this.notify({type:"removed",mutation:a})}),P(this,an).clear(),P(this,ma).clear()})}getAll(){return Array.from(P(this,an))}find(a){const l={exact:!0,...a};return this.getAll().find(i=>ky(l,i))}findAll(a={}){return this.getAll().filter(l=>ky(a,l))}notify(a){pr.batch(()=>{this.listeners.forEach(l=>{l(a)})})}resumePausedMutations(){const a=this.getAll().filter(l=>l.state.isPaused);return pr.batch(()=>Promise.all(a.map(l=>l.continue().catch(aa))))}},an=new WeakMap,ma=new WeakMap,pu=new WeakMap,Z1);function js(e){var a;return(a=e.options.scope)==null?void 0:a.id}function Yy(e){return{onFetch:(a,l)=>{var g,y,b,w,S;const i=a.options,u=(b=(y=(g=a.fetchOptions)==null?void 0:g.meta)==null?void 0:y.fetchMore)==null?void 0:b.direction,c=((w=a.state.data)==null?void 0:w.pages)||[],d=((S=a.state.data)==null?void 0:S.pageParams)||[];let h={pages:[],pageParams:[]},p=0;const m=async()=>{let $=!1;const E=M=>{Object.defineProperty(M,"signal",{enumerable:!0,get:()=>(a.signal.aborted?$=!0:a.signal.addEventListener("abort",()=>{$=!0}),a.signal)})},T=tb(a.options,a.fetchOptions),C=async(M,z,_)=>{if($)return Promise.reject();if(z==null&&M.pages.length)return Promise.resolve(M);const j={client:a.client,queryKey:a.queryKey,pageParam:z,direction:_?"backward":"forward",meta:a.options.meta};E(j);const V=await T(j),{maxPages:K}=a.options,q=_?f2:c2;return{pages:q(M.pages,V,K),pageParams:q(M.pageParams,z,K)}};if(u&&c.length){const M=u==="backward",z=M?w2:Gy,_={pages:c,pageParams:d},j=z(i,_);h=await C(_,j,M)}else{const M=e??c.length;do{const z=p===0?d[0]??i.initialPageParam:Gy(i,h);if(p>0&&z==null)break;h=await C(h,z),p++}while(p<M)}return h};a.options.persister?a.fetchFn=()=>{var $,E;return(E=($=a.options).persister)==null?void 0:E.call($,m,{client:a.client,queryKey:a.queryKey,meta:a.options.meta,signal:a.signal},l)}:a.fetchFn=m}}}function Gy(e,{pages:a,pageParams:l}){const i=a.length-1;return a.length>0?e.getNextPageParam(a[i],a,l[i],l):void 0}function w2(e,{pages:a,pageParams:l}){var i;return a.length>0?(i=e.getPreviousPageParam)==null?void 0:i.call(e,a[0],a,l[0],l):void 0}var Yt,zn,Bn,Ni,Ti,jn,Ri,Mi,K1,$2=(K1=class{constructor(e={}){Fe(this,Yt);Fe(this,zn);Fe(this,Bn);Fe(this,Ni);Fe(this,Ti);Fe(this,jn);Fe(this,Ri);Fe(this,Mi);Oe(this,Yt,e.queryCache||new b2),Oe(this,zn,e.mutationCache||new E2),Oe(this,Bn,e.defaultOptions||{}),Oe(this,Ni,new Map),Oe(this,Ti,new Map),Oe(this,jn,0)}mount(){Bs(this,jn)._++,P(this,jn)===1&&(Oe(this,Ri,Sm.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,Yt).onFocus())})),Oe(this,Mi,nc.subscribe(async e=>{e&&(await this.resumePausedMutations(),P(this,Yt).onOnline())})))}unmount(){var e,a;Bs(this,jn)._--,P(this,jn)===0&&((e=P(this,Ri))==null||e.call(this),Oe(this,Ri,void 0),(a=P(this,Mi))==null||a.call(this),Oe(this,Mi,void 0))}isFetching(e){return P(this,Yt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return P(this,zn).findAll({...e,status:"pending"}).length}getQueryData(e){var l;const a=this.defaultQueryOptions({queryKey:e});return(l=P(this,Yt).get(a.queryHash))==null?void 0:l.state.data}ensureQueryData(e){const a=this.defaultQueryOptions(e),l=P(this,Yt).build(this,a),i=l.state.data;return i===void 0?this.fetchQuery(e):(e.revalidateIfStale&&l.isStaleByTime(bi(a.staleTime,l))&&this.prefetchQuery(a),Promise.resolve(i))}getQueriesData(e){return P(this,Yt).findAll(e).map(({queryKey:a,state:l})=>{const i=l.data;return[a,i]})}setQueryData(e,a,l){const i=this.defaultQueryOptions({queryKey:e}),u=P(this,Yt).get(i.queryHash),c=u==null?void 0:u.state.data,d=u2(a,c);if(d!==void 0)return P(this,Yt).build(this,i).setData(d,{...l,manual:!0})}setQueriesData(e,a,l){return pr.batch(()=>P(this,Yt).findAll(e).map(({queryKey:i})=>[i,this.setQueryData(i,a,l)]))}getQueryState(e){var l;const a=this.defaultQueryOptions({queryKey:e});return(l=P(this,Yt).get(a.queryHash))==null?void 0:l.state}removeQueries(e){const a=P(this,Yt);pr.batch(()=>{a.findAll(e).forEach(l=>{a.remove(l)})})}resetQueries(e,a){const l=P(this,Yt);return pr.batch(()=>(l.findAll(e).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...e},a)))}cancelQueries(e,a={}){const l={revert:!0,...a},i=pr.batch(()=>P(this,Yt).findAll(e).map(u=>u.cancel(l)));return Promise.all(i).then(aa).catch(aa)}invalidateQueries(e,a={}){return pr.batch(()=>(P(this,Yt).findAll(e).forEach(l=>{l.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},a)))}refetchQueries(e,a={}){const l={...a,cancelRefetch:a.cancelRefetch??!0},i=pr.batch(()=>P(this,Yt).findAll(e).filter(u=>!u.isDisabled()).map(u=>{let c=u.fetch(void 0,l);return l.throwOnError||(c=c.catch(aa)),u.state.fetchStatus==="paused"?Promise.resolve():c}));return Promise.all(i).then(aa)}fetchQuery(e){const a=this.defaultQueryOptions(e);a.retry===void 0&&(a.retry=!1);const l=P(this,Yt).build(this,a);return l.isStaleByTime(bi(a.staleTime,l))?l.fetch(a):Promise.resolve(l.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(aa).catch(aa)}fetchInfiniteQuery(e){return e.behavior=Yy(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(aa).catch(aa)}ensureInfiniteQueryData(e){return e.behavior=Yy(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return nc.isOnline()?P(this,zn).resumePausedMutations():Promise.resolve()}getQueryCache(){return P(this,Yt)}getMutationCache(){return P(this,zn)}getDefaultOptions(){return P(this,Bn)}setDefaultOptions(e){Oe(this,Bn,e)}setQueryDefaults(e,a){P(this,Ni).set(eu(e),{queryKey:e,defaultOptions:a})}getQueryDefaults(e){const a=[...P(this,Ni).values()],l={};return a.forEach(i=>{tu(e,i.queryKey)&&Object.assign(l,i.defaultOptions)}),l}setMutationDefaults(e,a){P(this,Ti).set(eu(e),{mutationKey:e,defaultOptions:a})}getMutationDefaults(e){const a=[...P(this,Ti).values()],l={};return a.forEach(i=>{tu(e,i.mutationKey)&&Object.assign(l,i.defaultOptions)}),l}defaultQueryOptions(e){if(e._defaulted)return e;const a={...P(this,Bn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return a.queryHash||(a.queryHash=bm(a.queryKey,a)),a.refetchOnReconnect===void 0&&(a.refetchOnReconnect=a.networkMode!=="always"),a.throwOnError===void 0&&(a.throwOnError=!!a.suspense),!a.networkMode&&a.persister&&(a.networkMode="offlineFirst"),a.queryFn===xm&&(a.enabled=!1),a}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...P(this,Bn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){P(this,Yt).clear(),P(this,zn).clear()}},Yt=new WeakMap,zn=new WeakMap,Bn=new WeakMap,Ni=new WeakMap,Ti=new WeakMap,jn=new WeakMap,Ri=new WeakMap,Mi=new WeakMap,K1),Cr,ot,gu,_r,_l,Oi,Ln,Hn,yu,Ci,Ai,Nl,Tl,Pn,Di,vt,Qo,bh,xh,Sh,Eh,wh,$h,_h,ob,W1,_2=(W1=class extends bu{constructor(a,l){super();Fe(this,vt);Fe(this,Cr);Fe(this,ot);Fe(this,gu);Fe(this,_r);Fe(this,_l);Fe(this,Oi);Fe(this,Ln);Fe(this,Hn);Fe(this,yu);Fe(this,Ci);Fe(this,Ai);Fe(this,Nl);Fe(this,Tl);Fe(this,Pn);Fe(this,Di,new Set);this.options=l,Oe(this,Cr,a),Oe(this,Hn,null),Oe(this,Ln,vh()),this.options.experimental_prefetchInRender||P(this,Ln).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(l)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(P(this,ot).addObserver(this),Vy(P(this,ot),this.options)?it(this,vt,Qo).call(this):this.updateResult(),it(this,vt,Eh).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Nh(P(this,ot),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Nh(P(this,ot),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,it(this,vt,wh).call(this),it(this,vt,$h).call(this),P(this,ot).removeObserver(this)}setOptions(a){const l=this.options,i=P(this,ot);if(this.options=P(this,Cr).defaultQueryOptions(a),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof ga(this.options.enabled,P(this,ot))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");it(this,vt,_h).call(this),P(this,ot).setOptions(this.options),l._defaulted&&!ph(this.options,l)&&P(this,Cr).getQueryCache().notify({type:"observerOptionsUpdated",query:P(this,ot),observer:this});const u=this.hasListeners();u&&Qy(P(this,ot),i,this.options,l)&&it(this,vt,Qo).call(this),this.updateResult(),u&&(P(this,ot)!==i||ga(this.options.enabled,P(this,ot))!==ga(l.enabled,P(this,ot))||bi(this.options.staleTime,P(this,ot))!==bi(l.staleTime,P(this,ot)))&&it(this,vt,bh).call(this);const c=it(this,vt,xh).call(this);u&&(P(this,ot)!==i||ga(this.options.enabled,P(this,ot))!==ga(l.enabled,P(this,ot))||c!==P(this,Pn))&&it(this,vt,Sh).call(this,c)}getOptimisticResult(a){const l=P(this,Cr).getQueryCache().build(P(this,Cr),a),i=this.createResult(l,a);return T2(this,i)&&(Oe(this,_r,i),Oe(this,Oi,this.options),Oe(this,_l,P(this,ot).state)),i}getCurrentResult(){return P(this,_r)}trackResult(a,l){const i={};return Object.keys(a).forEach(u=>{Object.defineProperty(i,u,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(u),l==null||l(u),a[u])})}),i}trackProp(a){P(this,Di).add(a)}getCurrentQuery(){return P(this,ot)}refetch({...a}={}){return this.fetch({...a})}fetchOptimistic(a){const l=P(this,Cr).defaultQueryOptions(a),i=P(this,Cr).getQueryCache().build(P(this,Cr),l);return i.fetch().then(()=>this.createResult(i,l))}fetch(a){return it(this,vt,Qo).call(this,{...a,cancelRefetch:a.cancelRefetch??!0}).then(()=>(this.updateResult(),P(this,_r)))}createResult(a,l){var q;const i=P(this,ot),u=this.options,c=P(this,_r),d=P(this,_l),h=P(this,Oi),m=a!==i?a.state:P(this,gu),{state:g}=a;let y={...g},b=!1,w;if(l._optimisticResults){const Z=this.hasListeners(),Se=!Z&&Vy(a,l),Ce=Z&&Qy(a,i,l,u);(Se||Ce)&&(y={...y,...ib(g.data,a.options)}),l._optimisticResults==="isRestoring"&&(y.fetchStatus="idle")}let{error:S,errorUpdatedAt:$,status:E}=y;w=y.data;let T=!1;if(l.placeholderData!==void 0&&w===void 0&&E==="pending"){let Z;c!=null&&c.isPlaceholderData&&l.placeholderData===(h==null?void 0:h.placeholderData)?(Z=c.data,T=!0):Z=typeof l.placeholderData=="function"?l.placeholderData((q=P(this,Ai))==null?void 0:q.state.data,P(this,Ai)):l.placeholderData,Z!==void 0&&(E="success",w=yh(c==null?void 0:c.data,Z,l),b=!0)}if(l.select&&w!==void 0&&!T)if(c&&w===(d==null?void 0:d.data)&&l.select===P(this,yu))w=P(this,Ci);else try{Oe(this,yu,l.select),w=l.select(w),w=yh(c==null?void 0:c.data,w,l),Oe(this,Ci,w),Oe(this,Hn,null)}catch(Z){Oe(this,Hn,Z)}P(this,Hn)&&(S=P(this,Hn),w=P(this,Ci),$=Date.now(),E="error");const C=y.fetchStatus==="fetching",M=E==="pending",z=E==="error",_=M&&C,j=w!==void 0,K={status:E,fetchStatus:y.fetchStatus,isPending:M,isSuccess:E==="success",isError:z,isInitialLoading:_,isLoading:_,data:w,dataUpdatedAt:y.dataUpdatedAt,error:S,errorUpdatedAt:$,failureCount:y.fetchFailureCount,failureReason:y.fetchFailureReason,errorUpdateCount:y.errorUpdateCount,isFetched:y.dataUpdateCount>0||y.errorUpdateCount>0,isFetchedAfterMount:y.dataUpdateCount>m.dataUpdateCount||y.errorUpdateCount>m.errorUpdateCount,isFetching:C,isRefetching:C&&!M,isLoadingError:z&&!j,isPaused:y.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:z&&j,isStale:Em(a,l),refetch:this.refetch,promise:P(this,Ln)};if(this.options.experimental_prefetchInRender){const Z=ge=>{K.status==="error"?ge.reject(K.error):K.data!==void 0&&ge.resolve(K.data)},Se=()=>{const ge=Oe(this,Ln,K.promise=vh());Z(ge)},Ce=P(this,Ln);switch(Ce.status){case"pending":a.queryHash===i.queryHash&&Z(Ce);break;case"fulfilled":(K.status==="error"||K.data!==Ce.value)&&Se();break;case"rejected":(K.status!=="error"||K.error!==Ce.reason)&&Se();break}}return K}updateResult(){const a=P(this,_r),l=this.createResult(P(this,ot),this.options);if(Oe(this,_l,P(this,ot).state),Oe(this,Oi,this.options),P(this,_l).data!==void 0&&Oe(this,Ai,P(this,ot)),ph(l,a))return;Oe(this,_r,l);const i=()=>{if(!a)return!0;const{notifyOnChangeProps:u}=this.options,c=typeof u=="function"?u():u;if(c==="all"||!c&&!P(this,Di).size)return!0;const d=new Set(c??P(this,Di));return this.options.throwOnError&&d.add("error"),Object.keys(P(this,_r)).some(h=>{const p=h;return P(this,_r)[p]!==a[p]&&d.has(p)})};it(this,vt,ob).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&it(this,vt,Eh).call(this)}},Cr=new WeakMap,ot=new WeakMap,gu=new WeakMap,_r=new WeakMap,_l=new WeakMap,Oi=new WeakMap,Ln=new WeakMap,Hn=new WeakMap,yu=new WeakMap,Ci=new WeakMap,Ai=new WeakMap,Nl=new WeakMap,Tl=new WeakMap,Pn=new WeakMap,Di=new WeakMap,vt=new WeakSet,Qo=function(a){it(this,vt,_h).call(this);let l=P(this,ot).fetch(this.options,a);return a!=null&&a.throwOnError||(l=l.catch(aa)),l},bh=function(){it(this,vt,wh).call(this);const a=bi(this.options.staleTime,P(this,ot));if(Al||P(this,_r).isStale||!mh(a))return;const i=I1(P(this,_r).dataUpdatedAt,a)+1;Oe(this,Nl,setTimeout(()=>{P(this,_r).isStale||this.updateResult()},i))},xh=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(P(this,ot)):this.options.refetchInterval)??!1},Sh=function(a){it(this,vt,$h).call(this),Oe(this,Pn,a),!(Al||ga(this.options.enabled,P(this,ot))===!1||!mh(P(this,Pn))||P(this,Pn)===0)&&Oe(this,Tl,setInterval(()=>{(this.options.refetchIntervalInBackground||Sm.isFocused())&&it(this,vt,Qo).call(this)},P(this,Pn)))},Eh=function(){it(this,vt,bh).call(this),it(this,vt,Sh).call(this,it(this,vt,xh).call(this))},wh=function(){P(this,Nl)&&(clearTimeout(P(this,Nl)),Oe(this,Nl,void 0))},$h=function(){P(this,Tl)&&(clearInterval(P(this,Tl)),Oe(this,Tl,void 0))},_h=function(){const a=P(this,Cr).getQueryCache().build(P(this,Cr),this.options);if(a===P(this,ot))return;const l=P(this,ot);Oe(this,ot,a),Oe(this,gu,a.state),this.hasListeners()&&(l==null||l.removeObserver(this),a.addObserver(this))},ob=function(a){pr.batch(()=>{a.listeners&&this.listeners.forEach(l=>{l(P(this,_r))}),P(this,Cr).getQueryCache().notify({query:P(this,ot),type:"observerResultsUpdated"})})},W1);function N2(e,a){return ga(a.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&a.retryOnMount===!1)}function Vy(e,a){return N2(e,a)||e.state.data!==void 0&&Nh(e,a,a.refetchOnMount)}function Nh(e,a,l){if(ga(a.enabled,e)!==!1){const i=typeof l=="function"?l(e):l;return i==="always"||i!==!1&&Em(e,a)}return!1}function Qy(e,a,l,i){return(e!==a||ga(i.enabled,e)===!1)&&(!l.suspense||e.state.status!=="error")&&Em(e,l)}function Em(e,a){return ga(a.enabled,e)!==!1&&e.isStaleByTime(bi(a.staleTime,e))}function T2(e,a){return!ph(e.getCurrentResult(),a)}var ub=v.createContext(void 0),R2=e=>{const a=v.useContext(ub);if(e)return e;if(!a)throw new Error("No QueryClient set, use QueryClientProvider to set one");return a},M2=({client:e,children:a})=>(v.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),N.jsx(ub.Provider,{value:e,children:a})),sb=v.createContext(!1),O2=()=>v.useContext(sb);sb.Provider;function C2(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var A2=v.createContext(C2()),D2=()=>v.useContext(A2);function z2(e,a){return typeof e=="function"?e(...a):!!e}function Xy(){}var B2=(e,a)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(a.isReset()||(e.retryOnMount=!1))},j2=e=>{v.useEffect(()=>{e.clearReset()},[e])},L2=({result:e,errorResetBoundary:a,throwOnError:l,query:i,suspense:u})=>e.isError&&!a.isReset()&&!e.isFetching&&i&&(u&&e.data===void 0||z2(l,[e.error,i])),H2=e=>{const a=e.staleTime;e.suspense&&(e.staleTime=typeof a=="function"?(...l)=>Math.max(a(...l),1e3):Math.max(a??1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},P2=(e,a)=>e.isLoading&&e.isFetching&&!a,U2=(e,a)=>(e==null?void 0:e.suspense)&&a.isPending,Zy=(e,a,l)=>a.fetchOptimistic(e).catch(()=>{l.clearReset()});function k2(e,a,l){var y,b,w,S,$;const i=R2(l),u=O2(),c=D2(),d=i.defaultQueryOptions(e);(b=(y=i.getDefaultOptions().queries)==null?void 0:y._experimental_beforeQuery)==null||b.call(y,d),d._optimisticResults=u?"isRestoring":"optimistic",H2(d),B2(d,c),j2(c);const h=!i.getQueryCache().get(d.queryHash),[p]=v.useState(()=>new a(i,d)),m=p.getOptimisticResult(d),g=!u&&e.subscribed!==!1;if(v.useSyncExternalStore(v.useCallback(E=>{const T=g?p.subscribe(pr.batchCalls(E)):Xy;return p.updateResult(),T},[p,g]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),v.useEffect(()=>{p.setOptions(d)},[d,p]),U2(d,m))throw Zy(d,p,c);if(L2({result:m,errorResetBoundary:c,throwOnError:d.throwOnError,query:i.getQueryCache().get(d.queryHash),suspense:d.suspense}))throw m.error;if((S=(w=i.getDefaultOptions().queries)==null?void 0:w._experimental_afterQuery)==null||S.call(w,d,m),d.experimental_prefetchInRender&&!Al&&P2(m,u)){const E=h?Zy(d,p,c):($=i.getQueryCache().get(d.queryHash))==null?void 0:$.promise;E==null||E.catch(Xy).finally(()=>{p.updateResult()})}return d.notifyOnChangeProps?m:p.trackResult(m)}function F2(e,a){return k2(e,_2,a)}var q2=function(){return null};const Y2={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F5F5F6","Neutral/Neutral 10":"#EAEBEC","Neutral/Neutral 20":"#D7D8DA","Neutral/Neutral 30":"#B2B5B8","Neutral/Neutral 40":"#9EA0A4","Neutral/Neutral 50":"#74767B","Neutral/Neutral 60":"#67696D","Neutral/Neutral 70":"#515256","Neutral/Neutral 80":"#37383B","Neutral/Neutral 90":"#252629","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#131314","Special/Dark Static Neutral 05":"#1B1C1D","Special/Dark Static Neutral 10":"#252627","Special/Dark Static Neutral 20":"#3B3C3E","Special/Dark Static Neutral 30":"#515357","Special/Dark Static Neutral 50":"#82868B","Special/Dark Static Neutral 70":"#A8ABAF","Special/Dark Static Neutral 80":"#C9CACD","Special/Dark Static Neutral 90":"#E3E5E7","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#0000009A","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Opacity/Neutral 4":"#0000000A","Opacity/Neutral 8":"#00000014","Opacity/Neutral 12":"#0000001F","Opacity/Neutral 16":"#00000029","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},G2={"Shadow 02":`
  box-shadow: 0px 0.9px 2px 0px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 1.6px 3.6px 0px rgba(0, 0, 0, 0.14), 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12);
`,"Shadow 08":`
  box-shadow: 0px 3.2px 9px 0px rgba(0, 0, 0, 0.16), 0px 0.6px 1.8px 0px rgba(0, 0, 0, 0.10), 0px -1.5px 6px 0px rgba(0, 0, 0, 0.06);
`,"Shadow 12":`
  box-shadow: 0px 0.8px 1.8px 0px rgba(0, 0, 0, 0.04), 0px 4px 18px 0px rgba(0, 0, 0, 0.08), 0px 1.2px 12px 0px rgba(0, 0, 0, 0.10);
`,"Shadow 16":`
  box-shadow: 0px 6.4px 28px 0px rgba(0, 0, 0, 0.12), 0px 1.2px 18px 0px rgba(0, 0, 0, 0.08);
`,"Shadow Stroke":`
  box-shadow: 0px -1px 0px 0px #D6D8DD inset;
`},V2={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Ky={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},imageViewer:{flipHorizontallyText:"Flip horizontally",flipVerticallyText:"Flip vertically",rotateLeftText:"Rotate left",rotateRightText:"Rotate right",zoomInText:"Zoom in",zoomOutText:"Zoom out",backwardText:"Back",forwardText:"Forward"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(e,a)=>`Page ${e} of ${a}`,pageSizeSelectLabel:(e,a)=>`Entries ${e} out of ${a}`,itemRangeText:(e,a,l)=>`${e}–${a}  entries out of ${l}`,pageRangeText:e=>`from ${e} ${e===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(e,a,l)=>`${e}–${a} entries out of ${l}`},progressStepper:{renderNextStepName:e=>`Next - ${e}`,stepName:["step","steps"],progressText:(e,a,l)=>`${e} from ${a} ${l}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"},textArea:{copyTextMessage:"Copy text",copiedMessage:"Copied"}},Q2={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},imageViewer:{flipHorizontallyText:"Отразить по горизонтали",flipVerticallyText:"Отразить по вертикали",rotateLeftText:"Повернуть влево",rotateRightText:"Повернуть вправо",zoomOutText:"Уменьшить",zoomInText:"Увеличить",backwardText:"Назад",forwardText:"Вперед"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(e,a)=>`Страница ${e} из ${a}`,pageSizeSelectLabel:(e,a)=>`Записей ${e} из ${a}`,itemRangeText:(e,a,l)=>`${e}–${a} записей из ${l}`,pageRangeText:e=>`из ${e} ${e===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(e,a,l)=>`${e}–${a} записей из ${l}`},progressStepper:{renderNextStepName:e=>`Далее - ${e}`,stepName:["шаг","шагов"],progressText:(e,a,l)=>`${e} из ${a} ${l}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"},textArea:{copyTextMessage:"Копировать текст",copiedMessage:"Скопировано"}},en:Ky,"en-US":{...Ky,firstDayOfWeek:0}};var xr=function(){return xr=Object.assign||function(a){for(var l,i=1,u=arguments.length;i<u;i++){l=arguments[i];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c])}return a},xr.apply(this,arguments)};function ru(e,a,l){if(l||arguments.length===2)for(var i=0,u=a.length,c;i<u;i++)(c||!(i in a))&&(c||(c=Array.prototype.slice.call(a,0,i)),c[i]=a[i]);return e.concat(c||Array.prototype.slice.call(a))}var Mt="-ms-",Io="-moz-",yt="-webkit-",cb="comm",bc="rule",wm="decl",X2="@import",fb="@keyframes",Z2="@layer",db=Math.abs,$m=String.fromCharCode,Th=Object.assign;function K2(e,a){return sr(e,0)^45?(((a<<2^sr(e,0))<<2^sr(e,1))<<2^sr(e,2))<<2^sr(e,3):0}function hb(e){return e.trim()}function rn(e,a){return(e=a.exec(e))?e[0]:e}function We(e,a,l){return e.replace(a,l)}function Qs(e,a,l){return e.indexOf(a,l)}function sr(e,a){return e.charCodeAt(a)|0}function zi(e,a,l){return e.slice(a,l)}function Ca(e){return e.length}function mb(e){return e.length}function Xo(e,a){return a.push(e),e}function W2(e,a){return e.map(a).join("")}function Wy(e,a){return e.filter(function(l){return!rn(l,a)})}var xc=1,Bi=1,pb=0,ia=0,er=0,Pi="";function Sc(e,a,l,i,u,c,d,h){return{value:e,root:a,parent:l,type:i,props:u,children:c,line:xc,column:Bi,length:d,return:"",siblings:h}}function Mn(e,a){return Th(Sc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function pi(e){for(;e.root;)e=Mn(e.root,{children:[e]});Xo(e,e.siblings)}function J2(){return er}function I2(){return er=ia>0?sr(Pi,--ia):0,Bi--,er===10&&(Bi=1,xc--),er}function ya(){return er=ia<pb?sr(Pi,ia++):0,Bi++,er===10&&(Bi=1,xc++),er}function Rl(){return sr(Pi,ia)}function Xs(){return ia}function Ec(e,a){return zi(Pi,e,a)}function Rh(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function e$(e){return xc=Bi=1,pb=Ca(Pi=e),ia=0,[]}function t$(e){return Pi="",e}function eh(e){return hb(Ec(ia-1,Mh(e===91?e+2:e===40?e+1:e)))}function r$(e){for(;(er=Rl())&&er<33;)ya();return Rh(e)>2||Rh(er)>3?"":" "}function a$(e,a){for(;--a&&ya()&&!(er<48||er>102||er>57&&er<65||er>70&&er<97););return Ec(e,Xs()+(a<6&&Rl()==32&&ya()==32))}function Mh(e){for(;ya();)switch(er){case e:return ia;case 34:case 39:e!==34&&e!==39&&Mh(er);break;case 40:e===41&&Mh(e);break;case 92:ya();break}return ia}function n$(e,a){for(;ya()&&e+er!==57;)if(e+er===84&&Rl()===47)break;return"/*"+Ec(a,ia-1)+"*"+$m(e===47?e:ya())}function l$(e){for(;!Rh(Rl());)ya();return Ec(e,ia)}function i$(e){return t$(Zs("",null,null,null,[""],e=e$(e),0,[0],e))}function Zs(e,a,l,i,u,c,d,h,p){for(var m=0,g=0,y=d,b=0,w=0,S=0,$=1,E=1,T=1,C=0,M="",z=u,_=c,j=i,V=M;E;)switch(S=C,C=ya()){case 40:if(S!=108&&sr(V,y-1)==58){Qs(V+=We(eh(C),"&","&\f"),"&\f",db(m?h[m-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:V+=eh(C);break;case 9:case 10:case 13:case 32:V+=r$(S);break;case 92:V+=a$(Xs()-1,7);continue;case 47:switch(Rl()){case 42:case 47:Xo(o$(n$(ya(),Xs()),a,l,p),p);break;default:V+="/"}break;case 123*$:h[m++]=Ca(V)*T;case 125*$:case 59:case 0:switch(C){case 0:case 125:E=0;case 59+g:T==-1&&(V=We(V,/\f/g,"")),w>0&&Ca(V)-y&&Xo(w>32?Iy(V+";",i,l,y-1,p):Iy(We(V," ","")+";",i,l,y-2,p),p);break;case 59:V+=";";default:if(Xo(j=Jy(V,a,l,m,g,u,h,M,z=[],_=[],y,c),c),C===123)if(g===0)Zs(V,a,j,j,z,c,y,h,_);else switch(b===99&&sr(V,3)===110?100:b){case 100:case 108:case 109:case 115:Zs(e,j,j,i&&Xo(Jy(e,j,j,0,0,u,h,M,u,z=[],y,_),_),u,_,y,h,i?z:_);break;default:Zs(V,j,j,j,[""],_,0,h,_)}}m=g=w=0,$=T=1,M=V="",y=d;break;case 58:y=1+Ca(V),w=S;default:if($<1){if(C==123)--$;else if(C==125&&$++==0&&I2()==125)continue}switch(V+=$m(C),C*$){case 38:T=g>0?1:(V+="\f",-1);break;case 44:h[m++]=(Ca(V)-1)*T,T=1;break;case 64:Rl()===45&&(V+=eh(ya())),b=Rl(),g=y=Ca(M=V+=l$(Xs())),C++;break;case 45:S===45&&Ca(V)==2&&($=0)}}return c}function Jy(e,a,l,i,u,c,d,h,p,m,g,y){for(var b=u-1,w=u===0?c:[""],S=mb(w),$=0,E=0,T=0;$<i;++$)for(var C=0,M=zi(e,b+1,b=db(E=d[$])),z=e;C<S;++C)(z=hb(E>0?w[C]+" "+M:We(M,/&\f/g,w[C])))&&(p[T++]=z);return Sc(e,a,l,u===0?bc:h,p,m,g,y)}function o$(e,a,l,i){return Sc(e,a,l,cb,$m(J2()),zi(e,2,-2),0,i)}function Iy(e,a,l,i,u){return Sc(e,a,l,wm,zi(e,0,i),zi(e,i+1,-1),i,u)}function gb(e,a,l){switch(K2(e,a)){case 5103:return yt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return yt+e+e;case 4789:return Io+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return yt+e+Io+e+Mt+e+e;case 5936:switch(sr(e,a+11)){case 114:return yt+e+Mt+We(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return yt+e+Mt+We(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return yt+e+Mt+We(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return yt+e+Mt+e+e;case 6165:return yt+e+Mt+"flex-"+e+e;case 5187:return yt+e+We(e,/(\w+).+(:[^]+)/,yt+"box-$1$2"+Mt+"flex-$1$2")+e;case 5443:return yt+e+Mt+"flex-item-"+We(e,/flex-|-self/g,"")+(rn(e,/flex-|baseline/)?"":Mt+"grid-row-"+We(e,/flex-|-self/g,""))+e;case 4675:return yt+e+Mt+"flex-line-pack"+We(e,/align-content|flex-|-self/g,"")+e;case 5548:return yt+e+Mt+We(e,"shrink","negative")+e;case 5292:return yt+e+Mt+We(e,"basis","preferred-size")+e;case 6060:return yt+"box-"+We(e,"-grow","")+yt+e+Mt+We(e,"grow","positive")+e;case 4554:return yt+We(e,/([^-])(transform)/g,"$1"+yt+"$2")+e;case 6187:return We(We(We(e,/(zoom-|grab)/,yt+"$1"),/(image-set)/,yt+"$1"),e,"")+e;case 5495:case 3959:return We(e,/(image-set\([^]*)/,yt+"$1$`$1");case 4968:return We(We(e,/(.+:)(flex-)?(.*)/,yt+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+yt+e+e;case 4200:if(!rn(e,/flex-|baseline/))return Mt+"grid-column-align"+zi(e,a)+e;break;case 2592:case 3360:return Mt+We(e,"template-","")+e;case 4384:case 3616:return l&&l.some(function(i,u){return a=u,rn(i.props,/grid-\w+-end/)})?~Qs(e+(l=l[a].value),"span",0)?e:Mt+We(e,"-start","")+e+Mt+"grid-row-span:"+(~Qs(l,"span",0)?rn(l,/\d+/):+rn(l,/\d+/)-+rn(e,/\d+/))+";":Mt+We(e,"-start","")+e;case 4896:case 4128:return l&&l.some(function(i){return rn(i.props,/grid-\w+-start/)})?e:Mt+We(We(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return We(e,/(.+)-inline(.+)/,yt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ca(e)-1-a>6)switch(sr(e,a+1)){case 109:if(sr(e,a+4)!==45)break;case 102:return We(e,/(.+:)(.+)-([^]+)/,"$1"+yt+"$2-$3$1"+Io+(sr(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~Qs(e,"stretch",0)?gb(We(e,"stretch","fill-available"),a,l)+e:e}break;case 5152:case 5920:return We(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,u,c,d,h,p,m){return Mt+u+":"+c+m+(d?Mt+u+"-span:"+(h?p:+p-+c)+m:"")+e});case 4949:if(sr(e,a+6)===121)return We(e,":",":"+yt)+e;break;case 6444:switch(sr(e,sr(e,14)===45?18:11)){case 120:return We(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+yt+(sr(e,14)===45?"inline-":"")+"box$3$1"+yt+"$2$3$1"+Mt+"$2box$3")+e;case 100:return We(e,":",":"+Mt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return We(e,"scroll-","scroll-snap-")+e}return e}function lc(e,a){for(var l="",i=0;i<e.length;i++)l+=a(e[i],i,e,a)||"";return l}function u$(e,a,l,i){switch(e.type){case Z2:if(e.children.length)break;case X2:case wm:return e.return=e.return||e.value;case cb:return"";case fb:return e.return=e.value+"{"+lc(e.children,i)+"}";case bc:if(!Ca(e.value=e.props.join(",")))return""}return Ca(l=lc(e.children,i))?e.return=e.value+"{"+l+"}":""}function s$(e){var a=mb(e);return function(l,i,u,c){for(var d="",h=0;h<a;h++)d+=e[h](l,i,u,c)||"";return d}}function c$(e){return function(a){a.root||(a=a.return)&&e(a)}}function f$(e,a,l,i){if(e.length>-1&&!e.return)switch(e.type){case wm:e.return=gb(e.value,e.length,l);return;case fb:return lc([Mn(e,{value:We(e.value,"@","@"+yt)})],i);case bc:if(e.length)return W2(l=e.props,function(u){switch(rn(u,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pi(Mn(e,{props:[We(u,/:(read-\w+)/,":"+Io+"$1")]})),pi(Mn(e,{props:[u]})),Th(e,{props:Wy(l,i)});break;case"::placeholder":pi(Mn(e,{props:[We(u,/:(plac\w+)/,":"+yt+"input-$1")]})),pi(Mn(e,{props:[We(u,/:(plac\w+)/,":"+Io+"$1")]})),pi(Mn(e,{props:[We(u,/:(plac\w+)/,Mt+"input-$1")]})),pi(Mn(e,{props:[u]})),Th(e,{props:Wy(l,i)});break}return""})}}var d$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hr={},ji=typeof process<"u"&&Hr!==void 0&&(Hr.REACT_APP_SC_ATTR||Hr.SC_ATTR)||"data-styled",yb="active",vb="data-styled-version",wc="6.1.17",_m=`/*!sc*/
`,ic=typeof window<"u"&&"HTMLElement"in window,h$=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Hr!==void 0&&Hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Hr.REACT_APP_SC_DISABLE_SPEEDY!==""?Hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Hr!==void 0&&Hr.SC_DISABLE_SPEEDY!==void 0&&Hr.SC_DISABLE_SPEEDY!==""&&Hr.SC_DISABLE_SPEEDY!=="false"&&Hr.SC_DISABLE_SPEEDY),$c=Object.freeze([]),Li=Object.freeze({});function m$(e,a,l){return l===void 0&&(l=Li),e.theme!==l.theme&&e.theme||a||l.theme}var bb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),p$=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g$=/(^-|-$)/g;function ev(e){return e.replace(p$,"-").replace(g$,"")}var y$=/(a)(d)/gi,Ls=52,tv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Oh(e){var a,l="";for(a=Math.abs(e);a>Ls;a=a/Ls|0)l=tv(a%Ls)+l;return(tv(a%Ls)+l).replace(y$,"$1-$2")}var th,xb=5381,yi=function(e,a){for(var l=a.length;l;)e=33*e^a.charCodeAt(--l);return e},Sb=function(e){return yi(xb,e)};function Eb(e){return Oh(Sb(e)>>>0)}function v$(e){return e.displayName||e.name||"Component"}function rh(e){return typeof e=="string"&&!0}var wb=typeof Symbol=="function"&&Symbol.for,$b=wb?Symbol.for("react.memo"):60115,b$=wb?Symbol.for("react.forward_ref"):60112,x$={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S$={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_b={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E$=((th={})[b$]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},th[$b]=_b,th);function rv(e){return("type"in(a=e)&&a.type.$$typeof)===$b?_b:"$$typeof"in e?E$[e.$$typeof]:x$;var a}var w$=Object.defineProperty,$$=Object.getOwnPropertyNames,av=Object.getOwnPropertySymbols,_$=Object.getOwnPropertyDescriptor,N$=Object.getPrototypeOf,nv=Object.prototype;function Nb(e,a,l){if(typeof a!="string"){if(nv){var i=N$(a);i&&i!==nv&&Nb(e,i,l)}var u=$$(a);av&&(u=u.concat(av(a)));for(var c=rv(e),d=rv(a),h=0;h<u.length;++h){var p=u[h];if(!(p in S$||l&&l[p]||d&&p in d||c&&p in c)){var m=_$(a,p);try{w$(e,p,m)}catch{}}}}return e}function Dl(e){return typeof e=="function"}function Nm(e){return typeof e=="object"&&"styledComponentId"in e}function yl(e,a){return e&&a?"".concat(e," ").concat(a):e||a||""}function Ch(e,a){if(e.length===0)return"";for(var l=e[0],i=1;i<e.length;i++)l+=e[i];return l}function au(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ah(e,a,l){if(l===void 0&&(l=!1),!l&&!au(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(var i=0;i<a.length;i++)e[i]=Ah(e[i],a[i]);else if(au(a))for(var i in a)e[i]=Ah(e[i],a[i]);return e}function Tm(e,a){Object.defineProperty(e,"toString",{value:a})}function kn(e){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var T$=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return e.prototype.indexOfGroup=function(a){for(var l=0,i=0;i<a;i++)l+=this.groupSizes[i];return l},e.prototype.insertRules=function(a,l){if(a>=this.groupSizes.length){for(var i=this.groupSizes,u=i.length,c=u;a>=c;)if((c<<=1)<0)throw kn(16,"".concat(a));this.groupSizes=new Uint32Array(c),this.groupSizes.set(i),this.length=c;for(var d=u;d<c;d++)this.groupSizes[d]=0}for(var h=this.indexOfGroup(a+1),p=(d=0,l.length);d<p;d++)this.tag.insertRule(h,l[d])&&(this.groupSizes[a]++,h++)},e.prototype.clearGroup=function(a){if(a<this.length){var l=this.groupSizes[a],i=this.indexOfGroup(a),u=i+l;this.groupSizes[a]=0;for(var c=i;c<u;c++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(a){var l="";if(a>=this.length||this.groupSizes[a]===0)return l;for(var i=this.groupSizes[a],u=this.indexOfGroup(a),c=u+i,d=u;d<c;d++)l+="".concat(this.tag.getRule(d)).concat(_m);return l},e}(),Ks=new Map,oc=new Map,Ws=1,Hs=function(e){if(Ks.has(e))return Ks.get(e);for(;oc.has(Ws);)Ws++;var a=Ws++;return Ks.set(e,a),oc.set(a,e),a},R$=function(e,a){Ws=a+1,Ks.set(e,a),oc.set(a,e)},M$="style[".concat(ji,"][").concat(vb,'="').concat(wc,'"]'),O$=new RegExp("^".concat(ji,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),C$=function(e,a,l){for(var i,u=l.split(","),c=0,d=u.length;c<d;c++)(i=u[c])&&e.registerName(a,i)},A$=function(e,a){for(var l,i=((l=a.textContent)!==null&&l!==void 0?l:"").split(_m),u=[],c=0,d=i.length;c<d;c++){var h=i[c].trim();if(h){var p=h.match(O$);if(p){var m=0|parseInt(p[1],10),g=p[2];m!==0&&(R$(g,m),C$(e,g,p[3]),e.getTag().insertRules(m,u)),u.length=0}else u.push(h)}}},lv=function(e){for(var a=document.querySelectorAll(M$),l=0,i=a.length;l<i;l++){var u=a[l];u&&u.getAttribute(ji)!==yb&&(A$(e,u),u.parentNode&&u.parentNode.removeChild(u))}};function D$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Tb=function(e){var a=document.head,l=e||a,i=document.createElement("style"),u=function(h){var p=Array.from(h.querySelectorAll("style[".concat(ji,"]")));return p[p.length-1]}(l),c=u!==void 0?u.nextSibling:null;i.setAttribute(ji,yb),i.setAttribute(vb,wc);var d=D$();return d&&i.setAttribute("nonce",d),l.insertBefore(i,c),i},z$=function(){function e(a){this.element=Tb(a),this.element.appendChild(document.createTextNode("")),this.sheet=function(l){if(l.sheet)return l.sheet;for(var i=document.styleSheets,u=0,c=i.length;u<c;u++){var d=i[u];if(d.ownerNode===l)return d}throw kn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(a,l){try{return this.sheet.insertRule(l,a),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},e.prototype.getRule=function(a){var l=this.sheet.cssRules[a];return l&&l.cssText?l.cssText:""},e}(),B$=function(){function e(a){this.element=Tb(a),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(a,l){if(a<=this.length&&a>=0){var i=document.createTextNode(l);return this.element.insertBefore(i,this.nodes[a]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},e.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),j$=function(){function e(a){this.rules=[],this.length=0}return e.prototype.insertRule=function(a,l){return a<=this.length&&(this.rules.splice(a,0,l),this.length++,!0)},e.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},e.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),iv=ic,L$={isServer:!ic,useCSSOMInjection:!h$},Rb=function(){function e(a,l,i){a===void 0&&(a=Li),l===void 0&&(l={});var u=this;this.options=xr(xr({},L$),a),this.gs=l,this.names=new Map(i),this.server=!!a.isServer,!this.server&&ic&&iv&&(iv=!1,lv(this)),Tm(this,function(){return function(c){for(var d=c.getTag(),h=d.length,p="",m=function(y){var b=function(T){return oc.get(T)}(y);if(b===void 0)return"continue";var w=c.names.get(b),S=d.getGroup(y);if(w===void 0||!w.size||S.length===0)return"continue";var $="".concat(ji,".g").concat(y,'[id="').concat(b,'"]'),E="";w!==void 0&&w.forEach(function(T){T.length>0&&(E+="".concat(T,","))}),p+="".concat(S).concat($,'{content:"').concat(E,'"}').concat(_m)},g=0;g<h;g++)m(g);return p}(u)})}return e.registerId=function(a){return Hs(a)},e.prototype.rehydrate=function(){!this.server&&ic&&lv(this)},e.prototype.reconstructWithOptions=function(a,l){return l===void 0&&(l=!0),new e(xr(xr({},this.options),a),this.gs,l&&this.names||void 0)},e.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(a=function(l){var i=l.useCSSOMInjection,u=l.target;return l.isServer?new j$(u):i?new z$(u):new B$(u)}(this.options),new T$(a)));var a},e.prototype.hasNameForId=function(a,l){return this.names.has(a)&&this.names.get(a).has(l)},e.prototype.registerName=function(a,l){if(Hs(a),this.names.has(a))this.names.get(a).add(l);else{var i=new Set;i.add(l),this.names.set(a,i)}},e.prototype.insertRules=function(a,l,i){this.registerName(a,l),this.getTag().insertRules(Hs(a),i)},e.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},e.prototype.clearRules=function(a){this.getTag().clearGroup(Hs(a)),this.clearNames(a)},e.prototype.clearTag=function(){this.tag=void 0},e}(),H$=/&/g,P$=/^\s*\/\/.*$/gm;function Mb(e,a){return e.map(function(l){return l.type==="rule"&&(l.value="".concat(a," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(a," ")),l.props=l.props.map(function(i){return"".concat(a," ").concat(i)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=Mb(l.children,a)),l})}function U$(e){var a,l,i,u=Li,c=u.options,d=c===void 0?Li:c,h=u.plugins,p=h===void 0?$c:h,m=function(b,w,S){return S.startsWith(l)&&S.endsWith(l)&&S.replaceAll(l,"").length>0?".".concat(a):b},g=p.slice();g.push(function(b){b.type===bc&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(H$,l).replace(i,m))}),d.prefix&&g.push(f$),g.push(u$);var y=function(b,w,S,$){w===void 0&&(w=""),S===void 0&&(S=""),$===void 0&&($="&"),a=$,l=w,i=new RegExp("\\".concat(l,"\\b"),"g");var E=b.replace(P$,""),T=i$(S||w?"".concat(S," ").concat(w," { ").concat(E," }"):E);d.namespace&&(T=Mb(T,d.namespace));var C=[];return lc(T,s$(g.concat(c$(function(M){return C.push(M)})))),C};return y.hash=p.length?p.reduce(function(b,w){return w.name||kn(15),yi(b,w.name)},xb).toString():"",y}var k$=new Rb,Dh=U$(),Ob=Cl.createContext({shouldForwardProp:void 0,styleSheet:k$,stylis:Dh});Ob.Consumer;Cl.createContext(void 0);function ov(){return v.useContext(Ob)}var Cb=function(){function e(a,l){var i=this;this.inject=function(u,c){c===void 0&&(c=Dh);var d=i.name+c.hash;u.hasNameForId(i.id,d)||u.insertRules(i.id,d,c(i.rules,d,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=l,Tm(this,function(){throw kn(12,String(i.name))})}return e.prototype.getName=function(a){return a===void 0&&(a=Dh),this.name+a.hash},e}(),F$=function(e){return e>="A"&&e<="Z"};function uv(e){for(var a="",l=0;l<e.length;l++){var i=e[l];if(l===1&&i==="-"&&e[0]==="-")return e;F$(i)?a+="-"+i.toLowerCase():a+=i}return a.startsWith("ms-")?"-"+a:a}var Ab=function(e){return e==null||e===!1||e===""},Db=function(e){var a,l,i=[];for(var u in e){var c=e[u];e.hasOwnProperty(u)&&!Ab(c)&&(Array.isArray(c)&&c.isCss||Dl(c)?i.push("".concat(uv(u),":"),c,";"):au(c)?i.push.apply(i,ru(ru(["".concat(u," {")],Db(c),!1),["}"],!1)):i.push("".concat(uv(u),": ").concat((a=u,(l=c)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||a in d$||a.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return i};function Ml(e,a,l,i){if(Ab(e))return[];if(Nm(e))return[".".concat(e.styledComponentId)];if(Dl(e)){if(!Dl(c=e)||c.prototype&&c.prototype.isReactComponent||!a)return[e];var u=e(a);return Ml(u,a,l,i)}var c;return e instanceof Cb?l?(e.inject(l,i),[e.getName(i)]):[e]:au(e)?Db(e):Array.isArray(e)?Array.prototype.concat.apply($c,e.map(function(d){return Ml(d,a,l,i)})):[e.toString()]}function q$(e){for(var a=0;a<e.length;a+=1){var l=e[a];if(Dl(l)&&!Nm(l))return!1}return!0}var Y$=Sb(wc),G$=function(){function e(a,l,i){this.rules=a,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&q$(a),this.componentId=l,this.baseHash=yi(Y$,l),this.baseStyle=i,Rb.registerId(l)}return e.prototype.generateAndInjectStyles=function(a,l,i){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,l,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=yl(u,this.staticRulesId);else{var c=Ch(Ml(this.rules,a,l,i)),d=Oh(yi(this.baseHash,c)>>>0);if(!l.hasNameForId(this.componentId,d)){var h=i(c,".".concat(d),void 0,this.componentId);l.insertRules(this.componentId,d,h)}u=yl(u,d),this.staticRulesId=d}else{for(var p=yi(this.baseHash,i.hash),m="",g=0;g<this.rules.length;g++){var y=this.rules[g];if(typeof y=="string")m+=y;else if(y){var b=Ch(Ml(y,a,l,i));p=yi(p,b+g),m+=b}}if(m){var w=Oh(p>>>0);l.hasNameForId(this.componentId,w)||l.insertRules(this.componentId,w,i(m,".".concat(w),void 0,this.componentId)),u=yl(u,w)}}return u},e}(),nu=Cl.createContext(void 0);nu.Consumer;function qn(){var e=v.useContext(nu);if(!e)throw kn(18);return e}function zb(e){var a=Cl.useContext(nu),l=v.useMemo(function(){return function(i,u){if(!i)throw kn(14);if(Dl(i)){var c=i(u);return c}if(Array.isArray(i)||typeof i!="object")throw kn(8);return u?xr(xr({},u),i):i}(e.theme,a)},[e.theme,a]);return e.children?Cl.createElement(nu.Provider,{value:l},e.children):null}var ah={};function V$(e,a,l){var i=Nm(e),u=e,c=!rh(e),d=a.attrs,h=d===void 0?$c:d,p=a.componentId,m=p===void 0?function(z,_){var j=typeof z!="string"?"sc":ev(z);ah[j]=(ah[j]||0)+1;var V="".concat(j,"-").concat(Eb(wc+j+ah[j]));return _?"".concat(_,"-").concat(V):V}(a.displayName,a.parentComponentId):p,g=a.displayName,y=g===void 0?function(z){return rh(z)?"styled.".concat(z):"Styled(".concat(v$(z),")")}(e):g,b=a.displayName&&a.componentId?"".concat(ev(a.displayName),"-").concat(a.componentId):a.componentId||m,w=i&&u.attrs?u.attrs.concat(h).filter(Boolean):h,S=a.shouldForwardProp;if(i&&u.shouldForwardProp){var $=u.shouldForwardProp;if(a.shouldForwardProp){var E=a.shouldForwardProp;S=function(z,_){return $(z,_)&&E(z,_)}}else S=$}var T=new G$(l,b,i?u.componentStyle:void 0);function C(z,_){return function(j,V,K){var q=j.attrs,Z=j.componentStyle,Se=j.defaultProps,Ce=j.foldedComponentIds,ge=j.styledComponentId,Ee=j.target,xe=Cl.useContext(nu),le=ov(),he=j.shouldForwardProp||le.shouldForwardProp,ue=m$(V,xe,Se)||Li,ie=function(fe,pe,ye){for(var me,ve=xr(xr({},pe),{className:void 0,theme:ye}),Ae=0;Ae<fe.length;Ae+=1){var Ue=Dl(me=fe[Ae])?me(ve):me;for(var qe in Ue)ve[qe]=qe==="className"?yl(ve[qe],Ue[qe]):qe==="style"?xr(xr({},ve[qe]),Ue[qe]):Ue[qe]}return pe.className&&(ve.className=yl(ve.className,pe.className)),ve}(q,V,ue),O=ie.as||Ee,L={};for(var X in ie)ie[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ie.theme===ue||(X==="forwardedAs"?L.as=ie.forwardedAs:he&&!he(X,O)||(L[X]=ie[X]));var W=function(fe,pe){var ye=ov(),me=fe.generateAndInjectStyles(pe,ye.styleSheet,ye.stylis);return me}(Z,ie),ee=yl(Ce,ge);return W&&(ee+=" "+W),ie.className&&(ee+=" "+ie.className),L[rh(O)&&!bb.has(O)?"class":"className"]=ee,K&&(L.ref=K),v.createElement(O,L)}(M,z,_)}C.displayName=y;var M=Cl.forwardRef(C);return M.attrs=w,M.componentStyle=T,M.displayName=y,M.shouldForwardProp=S,M.foldedComponentIds=i?yl(u.foldedComponentIds,u.styledComponentId):"",M.styledComponentId=b,M.target=i?u.target:e,Object.defineProperty(M,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=i?function(_){for(var j=[],V=1;V<arguments.length;V++)j[V-1]=arguments[V];for(var K=0,q=j;K<q.length;K++)Ah(_,q[K],!0);return _}({},u.defaultProps,z):z}}),Tm(M,function(){return".".concat(M.styledComponentId)}),c&&Nb(M,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),M}function sv(e,a){for(var l=[e[0]],i=0,u=a.length;i<u;i+=1)l.push(a[i],e[i+1]);return l}var cv=function(e){return Object.assign(e,{isCss:!0})};function re(e){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];if(Dl(e)||au(e))return cv(Ml(sv($c,ru([e],a,!0))));var i=e;return a.length===0&&i.length===1&&typeof i[0]=="string"?Ml(i):cv(Ml(sv(i,a)))}function zh(e,a,l){if(l===void 0&&(l=Li),!a)throw kn(1,a);var i=function(u){for(var c=[],d=1;d<arguments.length;d++)c[d-1]=arguments[d];return e(a,l,re.apply(void 0,ru([u],c,!1)))};return i.attrs=function(u){return zh(e,a,xr(xr({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},i.withConfig=function(u){return zh(e,a,xr(xr({},l),u))},i}var Bb=function(e){return zh(V$,e)},k=Bb;bb.forEach(function(e){k[e]=Bb(e)});function jb(e){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];var i=Ch(re.apply(void 0,ru([e],a,!1))),u=Eb(i);return new Cb(u,i)}const Ge=Q$();function Q$(){return{"Main/XXL":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 42px);
      line-height: var(--admiral-line-height-Header_HL3, 52px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XL":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 36px);
      line-height: var(--admiral-line-height-Header_H1, 44px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/L":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 500);
      font-size: var(--admiral-font-size-Header_H2, 32px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/M":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/S":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS-bold":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Main/XS":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L-bold":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/L":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/M":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/S-bold":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 500);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Additional/XS":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/M":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/S":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/XS":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */

      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL1":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL1, 550);
      font-size: var(--admiral-font-size-Header_HL1, 72px);
      line-height: var(--admiral-line-height-Header_HL1, 80px);
      /* or 111% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL2":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL2, 550);
      font-size: var(--admiral-font-size-Header_HL2, 56px);
      line-height: var(--admiral-line-height-Header_HL2, 64px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/HL3":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_HL3, 550);
      font-size: var(--admiral-font-size-Header_HL3, 48px);
      line-height: var(--admiral-line-height-Header_HL3, 56px);
      /* or 117% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H1":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H1, 550);
      font-size: var(--admiral-font-size-Header_H1, 40px);
      line-height: var(--admiral-line-height-Header_H1, 48px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H2":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H2, 550);
      font-size: var(--admiral-font-size-Header_H2, 34px);
      line-height: var(--admiral-line-height-Header_H2, 40px);
      /* or 118% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H3":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H3, 550);
      font-size: var(--admiral-font-size-Header_H3, 28px);
      line-height: var(--admiral-line-height-Header_H3, 36px);
      /* or 129% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H4":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H4, 550);
      font-size: var(--admiral-font-size-Header_H4, 24px);
      line-height: var(--admiral-line-height-Header_H4, 32px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H5":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H5, 550);
      font-size: var(--admiral-font-size-Header_H5, 20px);
      line-height: var(--admiral-line-height-Header_H5, 28px);
      /* or 140% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Header/H6":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Header_H6, 550);
      font-size: var(--admiral-font-size-Header_H6, 18px);
      line-height: var(--admiral-line-height-Header_H6, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 1":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle1, 400);
      font-size: var(--admiral-font-size-Subtitle_Subtitle1, 18px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle1, 24px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 2":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle2, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle2, 16px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle2, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Subtitle/Subtitle 3":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Subtitle_Subtitle3, 550);
      font-size: var(--admiral-font-size-Subtitle_Subtitle3, 14px);
      line-height: var(--admiral-line-height-Subtitle_Subtitle3, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Long":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Long, 400);
      font-size: var(--admiral-font-size-Body_Body1Long, 16px);
      line-height: var(--admiral-line-height-Body_Body1Long, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 1 Short":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body1Short, 400);
      font-size: var(--admiral-font-size-Body_Body1Short, 16px);
      line-height: var(--admiral-line-height-Body_Body1Short, 20px);
      /* or 125% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Long":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Long, 400);
      font-size: var(--admiral-font-size-Body_Body2Long, 14px);
      line-height: var(--admiral-line-height-Body_Body2Long, 20px);
      /* or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Body/Body 2 Short":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Body_Body2Short, 400);
      font-size: var(--admiral-font-size-Body_Body2Short, 14px);
      line-height: var(--admiral-line-height-Body_Body2Short, 16px);
      /* or 114% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 1":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button1, 500);
      font-size: var(--admiral-font-size-Button_Button1, 16px);
      line-height: var(--admiral-line-height-Button_Button1, 24px);
      /* or 150% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Button/Button 2":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Button_Button2, 500);
      font-size: var(--admiral-font-size-Button_Button2, 14px);
      line-height: var(--admiral-line-height-Button_Button2, 20px);
      /* or 143% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 1":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption1, 400);
      font-size: var(--admiral-font-size-Caption_Caption1, 12px);
      line-height: var(--admiral-line-height-Caption_Caption1, 16px);
      /* identical to box height, or 133% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `,"Caption/Caption 2":re`
      font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
      font-style: normal;
      font-weight: var(--admiral-font-weight-Caption_Caption2, 400);
      font-size: var(--admiral-font-size-Caption_Caption2, 10px);
      line-height: var(--admiral-line-height-Caption_Caption2, 12px);
      /* or 120% */
      font-feature-settings:
        'tnum' on,
        'lnum' on;
      text-rendering: geometricPrecision;
    `}}const Da={color:Y2,shadow:G2,zIndex:V2,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:Q2,typography:Ge,fontFamily:"'VTB Group UI', sans-serif"},X$="Neutral/Neutral 90";function _c(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function Ui(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function fv(e){return e!==null&&!Array.isArray(e)&&typeof e=="object"}const uc={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let e=0;e<24;e+=1)uc[112+e]="F"+(e+1);for(let e=0;e<26;e+=1){let a=e+65;uc[a]=[String.fromCharCode(a+32),String.fromCharCode(a)]}const se={codes:uc,getCode(e){return fv(e)?e.keyCode||e.which||this[e.key]:this[e]},getKey(e){const a=fv(e);if(a&&e.key)return e.key;let l=uc[a?e.keyCode||e.which:e];return Array.isArray(l)&&(l=a?l[e.shiftKey?1:0]:l[0]),l},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};se.Spacebar=se[" "],se.Digit0=se[0],se.Digit1=se[1],se.Digit2=se[2],se.Digit3=se[3],se.Digit4=se[4],se.Digit5=se[5],se.Digit6=se[6],se.Digit7=se[7],se.Digit8=se[8],se.Digit9=se[9],se.Tilde=se["~"],se.GraveAccent=se["`"],se.ExclamationPoint=se["!"],se.AtSign=se["@"],se.PoundSign=se["#"],se.PercentSign=se["%"],se.Caret=se["^"],se.Ampersand=se["&"],se.PlusSign=se["+"],se.MinusSign=se["-"],se.EqualsSign=se["="],se.DivisionSign=se["/"],se.MultiplicationSign=se["*"],se.Comma=se[","],se.Decimal=se["."],se.Colon=se[":"],se.Semicolon=se[";"],se.Pipe=se["|"],se.BackSlash=se["\\"],se.QuestionMark=se["?"],se.SingleQuote=se["'"],se.DoubleQuote=se['"'],se.LeftCurlyBrace=se["{"],se.RightCurlyBrace=se["}"],se.LeftParenthesis=se["("],se.RightParenthesis=se[")"],se.LeftAngleBracket=se["<"],se.RightAngleBracket=se[">"],se.LeftSquareBracket=se["["],se.RightSquareBracket=se["]"];var dv;function Bh(){return Bh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Bh.apply(null,arguments)}var Lb=function(e){return v.createElement("svg",Bh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),dv||(dv=v.createElement("path",{fill:"#74767B",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))},hv;function jh(){return jh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},jh.apply(null,arguments)}var Hb=function(e){return v.createElement("svg",jh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),hv||(hv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M5 10a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2"})))},mv;function Lh(){return Lh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Lh.apply(null,arguments)}var Z$=function(e){return v.createElement("svg",Lh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),mv||(mv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M10 19c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2"})))};function Pb(e,a){Nc(e,a,"data-container",!0)}function K$(e,a){Nc(e,a,"data-field",!1)}function W$(e){const a={};return Nc(e,a,"data-dropdown-container",!0),a}function J$(e){const a={};return Nc(e,a,"data-menu",!0),a}function Nc(e,a,l,i){Object.keys(e).forEach(u=>{typeof u=="string"&&u.startsWith(l)&&(a[u]=e[u],i&&delete e[u])})}const I$=k(Lb)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${e=>e.$isOpen?180:0}deg);
  & *[fill^='#'] {
    fill: ${({appearance:e,theme:a})=>e==="white"?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`};
  }

  &:hover *[fill^='#'] {
    fill: ${e=>e.appearance==="white"?"":`var(--admiral-color-Primary_Primary70, ${e.theme.color["Primary/Primary 70"]})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Ub=(e,a)=>{const l=v.useCallback(i=>{e.every(u=>u.current&&!u.current.contains(i.target))&&a(i)},[a,e]);v.useEffect(()=>(document.addEventListener("mousedown",l,!0),document.addEventListener("touchstart",l),()=>{document.removeEventListener("mousedown",l,!0),document.removeEventListener("touchstart",l)}),[l])},ki=e=>{let a=e;return a=a.replace("box-shadow: ",""),a=a.replace(";",""),a},e_=(e,a)=>{return(l=e,Object.keys(l)).some(i=>e[i]!==a[i]);var l};function Tc(e,a){const l={};return{observe(){l.rafId&&cancelAnimationFrame(l.rafId);const i=()=>{if(l.isObserving){const{scrollHeight:u,scrollLeft:c,scrollTop:d,scrollWidth:h}=e,{bottom:p,height:m,left:g,right:y,top:b,width:w,x:S,y:$}=e.getBoundingClientRect(),E={bottom:p,height:m,left:g,right:y,top:b,width:w,x:S||g,y:$||b,scrollHeight:u,scrollLeft:c,scrollTop:d,scrollWidth:h};e_(E,l.rect||{})&&(l.rect=E,a(E)),l.rafId=requestAnimationFrame(i)}};l.rafId=requestAnimationFrame(i),l.isObserving=!0},unobserve(){l.rafId&&cancelAnimationFrame(l.rafId),l.isObserving&&(l.isObserving=!1)}}}var Rc=J1();const t_=k.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: var(--admiral-z-index-dropdown, ${({theme:e})=>e.zIndex.dropdown});
`,Rm=({targetElement:e,rootRef:a,fullContainerWidth:l,...i})=>{const u=v.useRef(null);return v.useEffect(()=>{const c=u.current;if(c&&e){const d=Tc(e,h=>{if(h){const{x:p,y:m,height:g,width:y}=h,{style:b}=c;b.top=`${m}px`,b.left=l?"0px":`${p}px`,b.height=`${g}px`,b.width=l?"100%":`${y}px`}});return d.observe(),()=>{d.unobserve()}}},[e,l]),Rc.createPortal(N.jsx(t_,{ref:u,...i}),(a==null?void 0:a.current)||document.body)};function r_(e,a){const l=v.useRef(null),i=v.useRef(e);return v.useEffect(()=>{i.current=e},[e]),v.useEffect(()=>(l.current=setInterval(()=>i.current(),a),()=>clearInterval(l.current||0)),[a]),l}function kr(...e){return a=>{e.forEach(l=>{l&&(typeof l=="function"?l(a):l.current=a)})}}const Bl=v.createContext({}),a_=({rootRef:e,...a})=>{const[l,i]=v.useState([]),[u,c]=v.useState(void 0),d=v.useCallback(y=>{c(y)},[]),h=v.useCallback(y=>{c(b=>b===y?void 0:b)},[]),p=v.useCallback(y=>{i(b=>{const w=b.indexOf(y);return w>-1?b.slice(0,w):b})},[]),m=v.useCallback(y=>{i(b=>[...b,y])},[]),g=v.useMemo(()=>({addDropdown:m,removeDropdown:p,dropdowns:l,rootRef:e,activateMenu:d,deactivateMenu:h,currentActiveMenu:u}),[m,p,l,e,d,h,u]);return N.jsx(Bl.Provider,{value:g,children:a.children})};function Mm(e){const{dropdowns:a=[],addDropdown:l,removeDropdown:i,activateMenu:u,deactivateMenu:c,currentActiveMenu:d}=v.useContext(Bl),h=a.indexOf(e);return{addDropdown:l,removeDropdown:i,dropdowns:h>-1?a.slice(h+1,a.length):[],activateMenu:u,deactivateMenu:c,currentActiveMenu:d}}const kb=(e,a)=>!a.some(l=>l.current&&l.current.contains(e.target)),n_=(e,a,l)=>{const i=e.bottom-e.top+8,u=a.top>=i,c=l-a.bottom>=i,d=a.top>=0&&a.bottom<=l,h=a.bottom<=0,p=a.top>=l,m=a.top<0&&0<a.bottom&&a.bottom<l,g=0<a.top&&a.top<l&&a.bottom>l;if(d){if(!u&&!c)return{upward:!1,translateY:l-a.bottom-i-16+"px"};if(u&&c)return{upward:!1,translateY:"0"};if(!u&&c)return{upward:!1,translateY:"0"};if(u&&!c)return{upward:!0,translateY:"0"}}else{if(h)return{upward:!1,translateY:0-a.bottom+8+"px"};if(p)return{upward:!0,translateY:l-a.top-8+"px"};if(m)return c?{upward:!1,translateY:"0"}:{upward:!1,translateY:0-a.bottom+8+"px"};if(g)return u?{upward:!0,translateY:"0"}:{upward:!0,translateY:""+(l-a.top-8)}}return{upward:!1,translateY:"0"}},l_=(e,a,l)=>{const i=e.right-e.left,u=a.left>=0&&a.right<=l,c=a.right<=0,d=a.left>=l,h=a.left<0&&0<a.right&&a.right<l,p=a.right>l&&0<a.left&&a.left<l;if(u){const m=l-a.left>=i,g=a.right>=i,y=i>a.width;if(!g&&!m)return{align:"flex-end",translateX:l-a.right-16+"px"};if(g&&m)return{align:"flex-end",translateX:"0"};if(y&&!g&&m)return{align:"flex-start",translateX:"0"};if(y&&!m&&g)return{align:"flex-end",translateX:"0"}}else{if(c||h)return{align:"flex-start",translateX:0-a.left+16+"px"};if(d||p)return{align:"flex-end",translateX:l-a.right-16+"px"}}return{align:"",translateX:"0"}},i_=k.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${e=>e.$alignSelf?`align-self: ${e.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${e=>e.$dropContainerCssMixin}
`,o_=k.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,u_=k(Rm)`
  display: flex;
  flex-direction: ${e=>e.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,Fb=v.forwardRef(({targetElement:e,onClickOutside:a=()=>null,className:l="",alignSelf:i,dropContainerCssMixin:u,...c},d)=>{const h=v.useRef(null),[p,m]=v.useState(!1),{addDropdown:g,removeDropdown:y,dropdowns:b}=Mm(h),{rootRef:w}=v.useContext(Bl);Ub([h],$=>{kb($,b)&&a($)}),v.useLayoutEffect(()=>{var $;h.current!==document.activeElement&&(($=h==null?void 0:h.current)==null||$.focus())},[]);const S=v.useCallback(()=>{const $=h.current;if($&&e){const E=$.getBoundingClientRect(),T=e.getBoundingClientRect(),C=globalThis.innerHeight,M=globalThis.innerWidth,{upward:z,translateY:_}=n_(E,T,C);if(p!==z&&m(z),i&&i!=="auto")$.style.transform=`translateY(${_})`;else{const{align:j,translateX:V}=l_(E,T,M);$.style.transform=`translate(${V}, ${_})`,$.style.alignSelf=j}}},[p,e]);return r_(S,100),v.useEffect(()=>{h.current&&(h.current.style.opacity="1")},[]),v.useLayoutEffect(()=>(g==null||g(h),()=>{y==null||y(h)}),[]),N.jsx(N.Fragment,{children:N.jsxs(u_,{targetElement:e,$reverse:p,rootRef:w,children:[N.jsx(o_,{}),N.jsx(i_,{ref:kr(d,h),...c,className:l+" dropdown-container",$alignSelf:i,$dropContainerCssMixin:u})]})})});Fb.displayName="DropdownContainer";const Mc=k(Fb)`
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>ki(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ui(e.theme.shape)});
  overflow: hidden;
  width: max-content;
  background: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
`;Mc.displayName="StyledDropdownContainer";function s_(...e){return a=>e.forEach(l=>function(i,u){typeof i=="function"?i(u):i!=null&&(i.current=u)}(l,a))}function Hh(...e){return v.useCallback(s_(...e),e)}function Om(e){return v.forwardRef(e)}const c_=re`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,f_=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,d_=k.div`
  ${c_}
`,h_=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 10px;
`,m_=k.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 10px;
`,p_=k.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  border-block: 4px solid transparent;
`,g_=k.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-inline: 4px solid transparent;
`,y_=k.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,v_=k.div`
  pointer-events: all;
  position: relative;
  height: 6px;
  border-radius: 6px;
  background-color: ${e=>e.theme.color["Opacity/Neutral 16"]};
  width: var(${"--horizontal-thumb-width"}, 20px);
`,b_=k.div`
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${e=>e.theme.color["Opacity/Hover"]};
  }
  box-sizing: border-box;
`,x_=k.div`
  pointer-events: all;
  position: relative;
  width: 6px;
  border-radius: 6px;
  background-color: ${e=>e.theme.color["Opacity/Neutral 16"]};
  height: var(${"--vertical-thumb-height"}, 20px);
`,S_=Om(({children:e,verticalScrollProps:a,horizontalScrollProps:l,minThumbSize:i=20,contentBlockProps:u={},...c},d)=>{const h=v.useMemo(()=>u.id?u.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[u.id]),[p,m]=v.useState(null),g=Hh(u.ref,y=>m(y));return N.jsxs(f_,{ref:d,...c,children:[N.jsx(d_,{...u,id:h,ref:g,children:e}),N.jsx(E_,{contentNode:p,verticalScrollProps:a,horizontalScrollProps:l,minThumbSize:i})]})}),E_=({verticalScrollProps:e={},horizontalScrollProps:a={},contentNode:l,minThumbSize:i=20})=>{const u=v.useMemo(()=>l!=null&&l.id?l==null?void 0:l.id:`scroll-aria-${Math.random().toString(36).substring(2,12)}`,[l==null?void 0:l.id]),[c,d]=v.useState(null),[h,p]=v.useState(null),[m,g]=v.useState(null),[y,b]=v.useState(null),[w,S]=v.useState(null),[$,E]=v.useState(null),[T,C]=v.useState(!1),[M,z]=v.useState(!1),[_,j]=v.useState(0),[V,K]=v.useState(0),[q,Z]=v.useState(0),[Se,Ce]=v.useState(0),[ge,Ee]=v.useState(0),[xe,le]=v.useState(0),he=Hh(e.ref,ie=>d(ie)),ue=Hh(a.ref,ie=>g(ie));return v.useLayoutEffect(()=>{if(l&&w&&$&&c&&m&&h&&y){const{observe:ie,unobserve:O}=Tc(l,L=>{if(L){const X=function(dt){const{clientHeight:Ct,scrollHeight:At}=dt;return At-Ct>=1}(l),W=function(dt){const{clientWidth:Ct,scrollWidth:At}=dt;return At-Ct>=1}(l),ee=Math.min(Math.max(0,L.scrollTop),L.scrollHeight-L.height),fe=Math.min(Math.max(0,L.scrollLeft),L.scrollWidth-L.width);l.style.setProperty("--vertical-content-scroll",`${ee}px`),l.style.setProperty("--horizontal-content-scroll",`${fe}px`),c.style.setProperty("display",X?null:"none"),c.style.setProperty("bottom",W?"10px":null),m.style.setProperty("display",W?null:"none"),m.style.setProperty("right",X?"10px":null);const pe=function(dt,Ct){const{clientHeight:At,scrollHeight:ct}=dt,{clientHeight:gt}=Ct;return Math.max(Math.round(At*gt/ct),i)}(l,h),ye=function(dt,Ct){const{clientWidth:At,scrollWidth:ct}=dt,{clientWidth:gt}=Ct;return Math.max(Math.round(At*gt/ct),i)}(l,y);w.style.setProperty("--vertical-thumb-height",`${pe}px`),$.style.setProperty("--horizontal-thumb-width",`${ye}px`);const{scrollTop:me,scrollLeft:ve,scrollHeight:Ae,scrollWidth:Ue}=l,{clientHeight:qe}=h,{clientWidth:Ve}=y,Lt=Math.round(Math.min(me/Ae*qe,qe-pe)),Xt=Math.round(Math.min(ve/Ue*Ve,Ve-ye));w.style.top=`${Lt}px`,$.style.left=`${Xt}px`}});return ie(),O}},[l,w,$,c,m,h,y]),v.useEffect(()=>{function ie(L){L.preventDefault(),L.stopPropagation(),T&&C(!1),M&&z(!1)}function O(L){if(l){if(L.preventDefault(),L.stopPropagation(),T){const{scrollHeight:X,clientHeight:W}=l,ee=(L.clientY-_)*(X/W),fe=Math.round(Math.min(q+ee,X-W));l.scrollTop=fe}if(M){const{scrollWidth:X,clientWidth:W}=l,ee=(L.clientX-V)*(X/W),fe=Math.round(Math.min(Se+ee,X-W));l.scrollLeft=fe}}}if(T||M)return document.addEventListener("mousemove",O),document.addEventListener("mouseup",ie),()=>{document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",ie)}},[l,T,M,q,Se,_,V]),v.useEffect(()=>{if(l){const{scrollHeight:ie,clientHeight:O}=l,L=Math.round(ge*ie-O/2);l.scrollTo({top:L,behavior:"smooth"})}},[ge]),v.useEffect(()=>{if(l){const{scrollWidth:ie,clientWidth:O}=l,L=Math.round(xe*ie-O/2);l.scrollTo({left:L,behavior:"smooth"})}},[xe]),v.useEffect(()=>{document.body.style.setProperty("cursor",T||M?"grabbing":null)},[T,M]),N.jsxs(N.Fragment,{children:[N.jsxs(h_,{...e,ref:he,role:"scrollbar","aria-controls":u,children:[N.jsx(b_,{onClick:function(ie){if(ie.preventDefault(),ie.stopPropagation(),l){const{clientHeight:O}=l,{top:L}=l.getBoundingClientRect();Ee((ie.clientY-L)/O)}}}),N.jsx(p_,{ref:ie=>p(ie),children:N.jsx(x_,{ref:S,onMouseDown:function(ie){ie.preventDefault(),ie.stopPropagation(),j(ie.clientY),l&&Z(l.scrollTop),C(!0)},style:{cursor:T?"grabbing":"grab"}})})]}),N.jsxs(m_,{...a,ref:ue,role:"scrollbar","aria-controls":u,children:[N.jsx(y_,{onClick:function(ie){if(ie.preventDefault(),ie.stopPropagation(),l){const{clientWidth:O}=l,{left:L}=l.getBoundingClientRect();le((ie.clientX-L)/O)}}}),N.jsx(g_,{ref:ie=>b(ie),children:N.jsx(v_,{ref:E,onMouseDown:function(ie){ie.preventDefault(),ie.stopPropagation(),K(ie.clientX),l&&Ce(l.scrollLeft),z(!0)},style:{cursor:M?"grabbing":"grab"}})})]})]})},w_=re`
  ${({$dimension:e})=>e==="s"?Ge["Body/Body 2 Long"]:Ge["Body/Body 1 Long"]}
  ul[data-dimension='s'] & {
    ${Ge["Body/Body 2 Long"]}
  }
`,$_=re`
  color: ${({theme:e,$disabled:a})=>a?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`};
`,__=re`
  background: ${({theme:e,$selected:a,$preselected:l,$hovered:i})=>i?`var(--admiral-color-Opacity_Hover, ${e.color["Opacity/Hover"]})`:l?`var(--admiral-color-Opacity_Press, ${e.color["Opacity/Press"]})`:a?`var(--admiral-color-Opacity_Focus, ${e.color["Opacity/Focus"]})`:`var(--admiral-color-Special_ElevatedBG, ${e.color["Special/Elevated BG"]})`};
`,N_=re`
  padding: ${({$dimension:e})=>{switch(e){case"l":default:return"12px 16px";case"m":return"8px 16px";case"s":return"6px 12px"}}};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;var pv;function Ph(){return Ph=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Ph.apply(null,arguments)}var T_=function(e){return v.createElement("svg",Ph({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),pv||(pv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};const R_=k(T_)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  [data-dimension='s'] & {
    width: 20px;
    height: 20px;
  }
`,M_=e=>{e.preventDefault(),e.stopPropagation()},Oc=v.forwardRef(({children:e,expandIcon:a=N.jsx(R_,{}),hasSubmenu:l,onHover:i,disabled:u,readOnly:c,hovered:d,dimension:h="l",selected:p=!1,preselected:m=!1,selfRef:g,onMouseDown:y,onLeave:b,containerRef:w,...S},$)=>{const E=u?M_:y,T=g?kr($,g):$;return N.jsxs(O_,{ref:T,$dimension:h,$preselected:m,$selected:p,$hovered:d,"data-preselected":m,"data-hovered":d,"data-disabled":u,"data-readonly":c,"data-dimension":h,onMouseEnter:C=>{var M;i==null||i(C),(M=S.onMouseEnter)==null||M.call(S,C)},onMouseLeave:C=>{var M;b==null||b(C),(M=S.onMouseLeave)==null||M.call(S,C)},onMouseMove:C=>{var M;i==null||i(C),(M=S.onMouseMove)==null||M.call(S,C)},onMouseDown:E,...S,children:[v.Children.toArray(e).map((C,M)=>typeof C=="string"?N.jsx(C_,{children:C},C+M):C),l&&a]})});Oc.displayName="MenuItem";const O_=k.div`
  display: flex;
  align-items: center;
  user-select: none;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  box-sizing: border-box;
  ${N_}
  ${w_}
  ${$_}
  ${__}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`,C_=k.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;function A_(e){const a=v.useRef();return v.useEffect(()=>{a.current=e}),a.current}const gv=k.div`
  display: flex;
  flex: 0 0 auto;
`,D_=({scrollContainerRef:e,itemHeight:a,rowCount:l=6,aheadItemsCount:i=3,model:u,activeId:c,selected:d,onRenderItem:h})=>{const[p,m]=v.useState(0),[g,y]=v.useState({startIndex:0,endIndex:l,topPadding:"",bottomPadding:"",needAddListener:!1}),b=A_({activeId:c}),w=v.useCallback(E=>{requestAnimationFrame(()=>{E.target&&m(E.target.scrollTop)})},[e]);v.useEffect(()=>{const E=e.current;return m((E==null?void 0:E.scrollTop)||0),E==null||E.addEventListener("scroll",w),()=>E==null?void 0:E.removeEventListener("scroll",w)},[w]),v.useEffect(()=>{g.needAddListener&&(setTimeout(()=>{var E;return(E=e==null?void 0:e.current)==null?void 0:E.addEventListener("scroll",w)}),y({...g,needAddListener:!1}))},[g,e]);const S=v.useCallback(E=>{const T=u.length,C=Math.max(0,E);let M=l+2*i;return M=Math.min(T-C,M),{startIndex:C,endIndex:C+M,topPadding:C*a+"px",bottomPadding:(T-C-M)*a+"px"}},[a,i,u,l]);v.useEffect(()=>{const E=Math.floor(p/a-i),T={...S(E),needAddListener:!1};y(T)},[p,S]),v.useEffect(()=>{var T;if(!c||!b||b.activeId===c)return;const E=u.findIndex(C=>C.id===c);E!==-1&&(E<g.startIndex||E>g.endIndex)&&((T=e==null?void 0:e.current)==null||T.removeEventListener("scroll",w),y({...S(E),needAddListener:!0}))},[c,g,S,e]);const $=v.useMemo(()=>[...u].slice(g.startIndex,g.endIndex).map((E,T)=>h==null?void 0:h(E,T)),[u,c,d,g]);return N.jsxs(N.Fragment,{children:[N.jsx(gv,{style:{minHeight:g.topPadding}}),$,N.jsx(gv,{style:{minHeight:g.bottomPadding}})]})},Cm=(e,a)=>{let l,i=!1,u=!1;return[(...c)=>{if(u||i)return;const d=e(...c);return i=!0,l=setTimeout(()=>{i=!1},a),d},()=>{u=!0,clearTimeout(l)}]};function z_(e,a,l){const i=e.getBoundingClientRect(),u=a.getBoundingClientRect(),c=document.documentElement.clientWidth-i.right>u.width,d=i.left>u.width,h=l==="right"?!c&&d?"left":"right":!d&&c?"right":"left";return document.documentElement.clientHeight-i.top>u.height-1?{position:`${h}Bottom`}:{position:h,bottomOffset:8-(document.documentElement.clientHeight-i.top-u.height)}}const qb=(e,a)=>{for(let l=0;l<e.length;l++){const i=e[l];if(i.id===a)return i;if(i.subItems&&i.subItems.length>0){const u=qb(i.subItems,a);if(u)return u}}},Yb=(e,a)=>!!e.subItems&&e.subItems.some(l=>a.includes(l.id)||Yb(l,a)),yv=e=>Array.isArray(e)?[...e]:[e],B_=k.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`,j_=k(Rm)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:"flex-direction: column;"}
`,L_=k.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,H_=k.div`
  position: relative;
  align-self: flex-start;
`,P_=k.div`
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>ki(e.theme.shadow["Shadow 08"])});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ui(e.theme.shape)});
  overflow: hidden;
  box-sizing: border-box;
`,Gb=({targetElement:e,children:a,onClickOutside:l,defaultRenderDirection:i="right",...u})=>{const{rootRef:c}=v.useContext(Bl),d=v.useRef(null),[h,p]=v.useState(null),[m,g]=v.useState("row");v.useLayoutEffect(()=>{const[S,$]=Cm(()=>{p({})},100);return addEventListener("resize",S),addEventListener("scroll",S),()=>{removeEventListener("resize",S),removeEventListener("scroll",S),$()}});const{addDropdown:y,removeDropdown:b,dropdowns:w}=Mm(d);return v.useLayoutEffect(()=>(y==null||y(d),()=>{b==null||b(d)}),[]),Ub([d],S=>{e&&!e.contains(S.target)&&kb(S,w)&&(l==null||l(S))}),v.useLayoutEffect(()=>{const S=d.current;if(e&&S){const{position:$,bottomOffset:E=0}=z_(e,S,i);switch($){case"right":g("row"),S.style.bottom=`${E}px`;break;case"left":g("row-reverse"),S.style.bottom=`${E}px`;break;case"rightBottom":default:g("row"),S.style.bottom="8px";break;case"leftBottom":g("row-reverse"),S.style.bottom="8px"}}},[e,h]),e&&N.jsx(B_,{children:N.jsxs(j_,{targetElement:e,rootRef:c,$flexDirection:m,fullContainerWidth:!1,children:[N.jsx(L_,{}),N.jsx(H_,{ref:d,...u,children:N.jsx(P_,{children:a})})]})})};Gb.displayName="SubMenu";const Vb=e=>{switch(e){case"l":default:return 48;case"m":return 40;case"s":return 32}},U_=re`
  max-height: ${({$dimension:e,$rowCount:a})=>{return`min(calc(100vh - 16px), ${l=a,i=e,Vb(i)*l+16}px)`;var l,i}};
`,k_=k.div`
  overflow: hidden;
  position: relative;

  padding: 0;
  ${e=>e.$hasTopPanel?"padding-top: 8px":""};
  ${e=>e.$hasBottomPanel?"padding-bottom: 8px":""};
  box-sizing: border-box;
  display: flex;

  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  max-width: calc(100vw - 32px);
  border-color: transparent;
  &:focus-visible {
    border: 0;
    outline: none;
  }
`,F_=k(S_)`
  position: relative;
  ${e=>e.$hasTopPanel?"":"padding-top: 8px"};
  ${e=>e.$hasBottomPanel?"":"padding-bottom: 8px"};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  box-sizing: border-box;
  ${U_};
  ${e=>e.$maxHeight?`max-height: ${e.$maxHeight}`:""};
`,Am=v.forwardRef(({model:e,defaultSelected:a,selected:l,preselected:i,active:u,onPreselectItem:c,onSelectItem:d,onDeselectItem:h,onActivateItem:p,renderTopPanel:m,renderBottomPanel:g,dimension:y="l",multiSelection:b=!1,disableSelectedOptionHighlight:w=!1,onForwardCycleApprove:S,onBackwardCycleApprove:$,containerRef:E,virtualScroll:T,rowCount:C=6,parentMenuRef:M,onCloseQuery:z,defaultIsActive:_=!0,subMenuRenderDirection:j,preventFocusSteal:V,maxHeight:K,preselectedModeActive:q=!1,onMenuKeyDown:Z,disableSelectionOnSpace:Se,disableSelectionOnEnter:Ce,...ge},Ee)=>{const xe=_e=>{const He=_e?e.findIndex(at=>at.id===_e):-1;let Xe=He<e.length-1?He+1:0,pt=!1;for(;(e[Xe].disabled||e[Xe].readOnly)&&!pt;)Xe=Xe<e.length-1?Xe+1:0,pt=He===-1?Xe===0:Xe===He;return Xe=!(He>-1&&Xe<He)||!S||S()?Xe:He,e[Xe].disabled||e[Xe].readOnly?void 0:e[Xe].id},le=e.length>0?xe():void 0,[he,ue]=v.useState(a?yv(a):[]),[ie,O]=v.useState(le),[L,X]=v.useState(le),W=v.useRef(null),ee=v.useRef(null),[fe,pe]=v.useState(null),[ye,me]=v.useState(!1),ve=v.useRef();v.useEffect(()=>{O(le)},[e]);const Ae=w?[]:l===void 0?he:yv(l),Ue=u===void 0?ie:u,qe=q?i===void 0?L:i:void 0,Ve=v.useRef(null),Lt=v.useRef(null),Xt=!!m,dt=!!g,Ct=_e=>{Ue!==_e&&O(_e),p==null||p(_e)},At=_e=>{qe!==_e&&X(_e),c==null||c(_e)},ct=_e=>{const He=qb(e,_e);if(He&&!He.disabled&&!He.readOnly){const Xe=he.findIndex(pt=>pt===_e);b?Xe>-1?(ue(he.splice(Xe,1)),h==null||h(_e)):(ue([...he,_e]),d==null||d(_e)):(Xe===-1&&ue([_e]),d==null||d(_e))}},{currentActiveMenu:gt,activateMenu:nt,deactivateMenu:Et}=Mm(W);v.useEffect(()=>{function _e(He){if((gt==null?void 0:gt.current)===W.current)switch(se.getCode(He)){case se[" "]:if(Se)break;q&&qe?ct(qe):Ue&&ct(Ue),He.preventDefault();break;case se.Enter:if(Ce)break;q&&qe?ct(qe):Ue&&ct(Ue),He.preventDefault();break;case se.ArrowDown:{const Xe=xe(q&&qe||Ue);q?At(Xe):Ct(Xe),He.preventDefault();break}case se.ArrowUp:{const Xe=(pt=>{const at=pt?e.findIndex(Ht=>Ht.id===pt):-1;let _t=at>0?at-1:e.length-1,Gt=!1;for(;(e[_t].disabled||e[_t].readOnly)&&!Gt;)_t=_t>0?_t-1:e.length-1,Gt=at===-1?_t===0:_t===at;return _t=at>-1&&_t>at&&$&&!$()?at:_t,e[_t].disabled||e[_t].readOnly?void 0:e[_t].id})(q&&qe||Ue);q?At(Xe):Ct(Xe),He.preventDefault();break}case se.ArrowRight:{const Xe=q&&qe||Ue,pt=e.find(at=>at.id===Xe);!pt||pt.disabled||pt.readOnly||!pt.subItems||ye||me(!0),ee&&ee.current&&(nt==null||nt(ee));break}case se.ArrowLeft:M&&M.current&&(z==null||z());break;default:Z==null||Z(He)}}return document.addEventListener("keydown",_e),()=>{document.removeEventListener("keydown",_e)}},[u,Ue,ie,gt,qe,Se,Ce]),v.useEffect(()=>(_&&(nt==null||nt(W)),()=>{_&&gt===W&&(Et==null||Et(W))}),[_]);const wt=()=>{me(!1),nt==null||nt(W)},ft=(_e,He)=>{const{id:Xe,subItems:pt,render:at,..._t}=_e,Gt=!!pt&&pt.length>0,Ht=Ue===Xe,Ba=Ae.includes(Xe)||Yb(_e,Ae),xa={hovered:Ht,preselected:qe!==void 0?qe===Xe:void 0,selected:Ba,onLeave:Tr=>{var de,we;const I=Tr.relatedTarget;I&&Object.hasOwn(I,"nodeName")&&!((de=ee.current)!=null&&de.contains(I))&&!((we=Lt.current)!=null&&we.contains(I))&&me(!1)},onHover:Tr=>{Ct(Xe),me(Gt),pe(Tr.currentTarget)},onMouseDown:V?Tr=>Tr.preventDefault():void 0,onClick:()=>ct(Xe),hasSubmenu:Gt,disabled:_t.disabled,..._t};return typeof at=="function"?at({containerRef:E,...xa}):N.jsx(Oc,{...xa,children:at},`${_e.id}-${He}`)},Sr=v.useRef(),nr=v.useRef(),ua=v.useRef(),Nr=v.useRef();v.useLayoutEffect(()=>{setTimeout(()=>{var He,Xe;let _e;if(u&&Sr.current!==u||nr.current!==ie?_e=(He=Ve.current)==null?void 0:He.querySelector('[data-hovered="true"]'):(i&&ua.current!==i||Nr.current!==L)&&(_e=(Xe=Ve.current)==null?void 0:Xe.querySelector('[data-preselected="true"]')),_e){const pt=Date.now(),at=ve.current;_e==null||_e.scrollIntoView({behavior:!at||pt-at<150?"auto":"smooth",inline:"center",block:"nearest"}),ve.current=pt,Sr.current=u,nr.current=ie,ua.current=i,Nr.current=L}},0)},[u,ie,i,L,e]);const ln=J$(ge);return v.useEffect(()=>{if(!fe||!Ve.current)return;const _e={root:Ve.current,rootMargin:"0px",threshold:.5},He=new IntersectionObserver(Xe=>{Xe.forEach(pt=>{me(!(pt.intersectionRatio<_e.threshold))})},_e);return He.observe(fe),()=>He.disconnect()},[fe]),N.jsxs(k_,{ref:kr(W,Ee),$dimension:y,$hasTopPanel:Xt,$hasBottomPanel:dt,onMouseEnter:_e=>{var He;gt!==W&&(nt==null||nt(W)),(He=ge.onMouseEnter)==null||He.call(ge,_e)},onMouseLeave:_e=>{var He;Ct(void 0),(He=ge.onMouseLeave)==null||He.call(ge,_e)},onFocus:_e=>{var He;gt!==W&&(nt==null||nt(W)),(He=ge.onFocus)==null||He.call(ge,_e)},onBlur:_e=>{var He;gt===W&&(Et==null||Et(W)),(He=ge.onBlur)==null||He.call(ge,_e)},...ge,children:[Xt&&m({dimension:y}),N.jsx(F_,{$dimension:y,$rowCount:C,$hasTopPanel:Xt,$hasBottomPanel:dt,$maxHeight:K,...ln,verticalScrollProps:{ref:Lt},contentBlockProps:{ref:Ve},children:T?(()=>{if(!T)return null;const _e=T.itemHeight==="auto"?Vb(y):T.itemHeight;return N.jsx(D_,{scrollContainerRef:Ve,itemHeight:_e,model:e,rowCount:C,activeId:Ue,selected:Ae,onRenderItem:ft})})():e.map((_e,He)=>ft({dimension:y,..._e},He))}),ye&&fe&&N.jsx(Gb,{targetElement:fe,defaultRenderDirection:j,onClickOutside:M?void 0:()=>{me(!1)},children:(()=>{const _e=e.find(He=>He.id===Ue);return _e&&_e.subItems&&_e.subItems.length>0&&N.jsx(Am,{ref:ee,dimension:y,parentMenuRef:W,model:_e.subItems,subMenuRenderDirection:j,onCloseQuery:wt,selected:Ae,onSelectItem:He=>ct(He),virtualScroll:T,preventFocusSteal:!0})})()}),dt&&g({dimension:y})]})});Am.displayName="Menu";const q_=k(Am)`
  width: ${({$width:e})=>e||"auto"};
`,Y_=k(Mc)`
  ${e=>e.$dropContainerCssMixin||""}
`,Qb=v.forwardRef(({dimension:e="m",menuWidth:a,disabled:l=!1,loading:i=!1,alignSelf:u="flex-end",onClose:c,onOpen:d,items:h,selected:p,active:m,onSelectItem:g,onActivateItem:y,onChange:b,onClick:w,onKeyDown:S,alignMenuRef:$,targetElement:E,renderContentProp:T,menuMaxHeight:C,dropContainerCssMixin:M,dropContainerClassName:z,dropContainerStyle:_,multiSelection:j=!1,disableSelectedOptionHighlight:V=!1,isVisible:K,onVisibilityChange:q=()=>{},onClickOutside:Z,renderTopPanel:Se,renderBottomPanel:Ce,onForwardCycleApprove:ge,onBackwardCycleApprove:Ee,virtualScroll:xe,...le},he)=>{const[ue,ie]=v.useState(!1),O=v.useRef(null),L=E||($==null?void 0:$.current)||O.current,X=K??ue,W=fe=>{ie(fe),q(fe)},ee=()=>{var fe;W(!1),c==null||c(),(fe=O.current)==null||fe.focus()};return N.jsxs(N.Fragment,{children:[T({disabled:l,buttonRef:O,handleKeyDown:fe=>{const pe=se.getCode(fe);switch(S==null||S(fe),pe){case se.Escape:X&&ee();break;case se.Enter:case se[" "]:X||(fe.stopPropagation(),W(!0),d==null||d(),fe.preventDefault())}},handleClick:fe=>{X?c==null||c():d==null||d(),W(!X),w==null||w(fe)},statusIcon:N.jsx(I$,{$isOpen:X,"aria-hidden":!0}),menuState:X}),X&&!i&&N.jsx(Y_,{ref:he,role:"listbox",alignSelf:u,targetElement:L,onClickOutside:fe=>{var pe;fe.target&&((pe=O.current)!=null&&pe.contains(fe.target))||(Z?Z(fe):(W(!1),c==null||c()))},$dropContainerCssMixin:M,className:z,style:_,...le,children:N.jsx(q_,{maxHeight:C,$width:a,virtualScroll:xe,model:h,selected:p,onSelectItem:fe=>{b==null||b(fe),g==null||g(fe),K!==void 0||j||V||ee()},dimension:e,active:m,onActivateItem:y,multiSelection:j,disableSelectedOptionHighlight:V,renderTopPanel:Se,renderBottomPanel:Ce,onForwardCycleApprove:ge,onBackwardCycleApprove:Ee})})]})});Qb.displayName="DropMenu";var vv;function Uh(){return Uh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Uh.apply(null,arguments)}var Xb=function(e){return v.createElement("svg",Uh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),vv||(vv=v.createElement("path",{fill:"#74767B",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};function lu(e){switch(e){case"lSmall":case"lBig":default:return 24;case"mSmall":case"mBig":return 20;case"s":return 16}}function Zb(e){switch(e){case"lBig":case"mBig":default:return 6;case"lSmall":case"mSmall":case"s":return 4}}function bv(e){return lu(e)+2*Zb(e)}const G_=re`
  & *[fill^='#'] {
    fill: ${e=>{switch(e.$iconColor){case"primary":return`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`;case"secondary":return`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`;default:return e.$iconColor}}};
  }
`,V_=k.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${G_}

  & > svg {
    height: ${e=>lu(e.$dimension)}px;
    width: ${e=>lu(e.$dimension)}px;
  }
`,Zo=k.div`
  width: ${e=>bv(e.$dimension)}px;
  height: ${e=>bv(e.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Q_=re`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }

  &:focus {
    > ${Zo} {
      background-color: ${e=>e.$highlightFocus?`var(--admiral-color-Opacity_Focus, ${e.theme.color["Opacity/Focus"]})`:"transparent"};
    }
  }
  &:hover {
    > ${Zo} {
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
  &:active {
    > ${Zo} {
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
  &:focus-visible {
    > ${Zo} {
      background-color: transparent;
    }
  }
`,X_=k.button`
  position: relative;
  padding: 0;
  margin: ${e=>Zb(e.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${e=>lu(e.$dimension)}px;
  width: ${e=>lu(e.$dimension)}px;
  border-radius: var(--admiral-border-radius-Small, ${e=>_c(e.theme.shape)});
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
  &:not(:disabled) {
    ${Q_}
  }
`,Cc=v.forwardRef(({type:e="button",dimension:a="lBig",disabled:l=!1,highlightFocus:i=!0,appearance:u,children:c,...d},h)=>{const p=typeof u=="object"?u.iconColor?u.iconColor:"secondary":u;return N.jsxs(X_,{ref:h,type:e,$dimension:a,disabled:l,$highlightFocus:i,...d,children:[N.jsx(Zo,{$dimension:a,"aria-hidden":!0}),N.jsx(V_,{$dimension:a,$iconColor:p,"aria-hidden":!0,children:c})]})}),Z_=v.forwardRef(({className:e,...a},l)=>N.jsx(Cc,{ref:l,className:`close-button ${e||""}`,...a,children:N.jsx(Xb,{"aria-hidden":!0})})),Kb=v.forwardRef(({dimension:e="l",disabled:a=!1,alignSelf:l="flex-end",isVertical:i=!1,disableSelectedOptionHighlight:u,selected:c,onSelectItem:d,active:h,onActivateItem:p,isVisible:m,onVisibilityChange:g,onClickOutside:y,onChange:b,onOpen:w,onClose:S,items:$,className:E="",menuWidth:T,menuMaxHeight:C,dropContainerCssMixin:M,dropContainerClassName:z,dropContainerStyle:_,onForwardCycleApprove:j,onBackwardCycleApprove:V,renderTopPanel:K,renderBottomPanel:q,...Z},Se)=>{const Ce={...W$(Z),renderTopPanel:K,renderBottomPanel:q,items:$,onChange:b,onOpen:w,onClose:S,isVisible:m,onVisibilityChange:g,onClickOutside:y,disableSelectedOptionHighlight:u,selected:c,onSelectItem:d,active:h,onActivateItem:p,menuMaxHeight:C,menuWidth:T,dropContainerCssMixin:M,dropContainerClassName:z,dropContainerStyle:_,alignSelf:l,onForwardCycleApprove:j,onBackwardCycleApprove:V},ge=Ee=>{switch(Ee){case"l":default:return"lBig";case"m":return"mBig";case"s":return"s"}};return N.jsx(N.Fragment,{children:N.jsx(Qb,{...Ce,dimension:e,disabled:a,renderContentProp:({buttonRef:Ee,handleKeyDown:xe,handleClick:le,menuState:he,disabled:ue})=>N.jsx(Cc,{...Z,ref:kr(Se,Ee),dimension:ge(e),disabled:ue,highlightFocus:he,onClick:le,"aria-expanded":he,"aria-haspopup":he,onKeyDown:xe,className:E+" overflow-menu-button-with-dropdown",children:N.jsx(i?Z$:Hb,{})})})})});Kb.displayName="OverflowMenu";var xv,Sv,Ev,wv,$v,_v;function kh(){return kh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},kh.apply(null,arguments)}var K_=function(e){return v.createElement("svg",kh({xmlns:"http://www.w3.org/2000/svg",fill:"none"},e),xv||(xv=v.createElement("style",null,"@container (min-width: 64px){svg path.Subtract_svg__spinner-icon:not([data-dimension=xl]){display:none}}@container (max-width: 48px) and (min-width: 25px){svg path.Subtract_svg__spinner-icon:not([data-dimension=l]){display:none}}@container (max-width: 24px) and (min-width: 21px){svg path.Subtract_svg__spinner-icon:not([data-dimension=m]){display:none}}@container (max-width: 20px) and (min-width: 17px){svg path.Subtract_svg__spinner-icon:not([data-dimension=ms]){display:none}}@container (max-width: 16px){svg path.Subtract_svg__spinner-icon:not([data-dimension=s]){display:none}}")),Sv||(Sv=v.createElement("path",{fillRule:"evenodd",d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"xl"})),Ev||(Ev=v.createElement("path",{fillRule:"evenodd",d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"l"})),wv||(wv=v.createElement("path",{fillRule:"evenodd",d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"m"})),$v||($v=v.createElement("path",{fillRule:"evenodd",d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"ms"})),_v||(_v=v.createElement("path",{fillRule:"evenodd",d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",className:"Subtract_svg__spinner-icon",clipRule:"evenodd","data-dimension":"s"})))};const W_=jb`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Wb=k(K_)`
  animation: ${W_} 1s linear infinite;
  path {
    fill: ${({$inverse:e,theme:a})=>e?`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
  }
  width: 100%;
  height: 100%;
`,J_=e=>jb`
  0% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
  50% {
    background-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
    border-color: var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]});
  }
  100% {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e.theme.color["Neutral/Neutral 10"]});
  }
`,Dm=re`
  animation: ${e=>J_(e)} 2s ease infinite;
`,I_=()=>{let e=0;const a=document.createElement("div");return a.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,a.style.overflow="scroll",a.style.fontSize="14px",a.style.height="50px",a.style.maxHeight="50px",a.style.width="100px",a.style.position="absolute",a.style.top="-100000px",a.style.left="-100000px",document.body.appendChild(a),e=a.offsetWidth-a.clientWidth,document.body.removeChild(a),e||16},eN=k.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,tN=k.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral80, ${e=>e.theme.color["Neutral/Neutral 80"]});
  ${e=>e.$dimension==="m"?Ge["Body/Body 2 Short"]:Ge["Caption/Caption 1"]}
  color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border-radius: var(--admiral-border-radius-Small, ${e=>_c(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow04, ${e=>ki(e.theme.shadow["Shadow 04"])});
  padding: ${e=>e.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,rN=k.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,aN=k(Rm)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:""}
  z-index: var(--admiral-z-index-tooltip, ${({theme:e})=>e.zIndex.tooltip});
`;function nN(e,a,l,i){const u=e.getBoundingClientRect(),c=a.getBoundingClientRect(),d=Object.entries(function(m){return{bottom:{check:(g,y)=>{const b=globalThis.innerHeight-g.bottom-m>8+y.height,w=g.left+g.width/2>y.width/2,S=globalThis.innerWidth-g.right-m+g.width/2>y.width/2;return b&&w&&S}},top:{check:(g,y)=>{const b=g.top>8+y.height,w=g.left+g.width/2>y.width/2,S=globalThis.innerWidth-g.right-m+g.width/2>y.width/2;return b&&w&&S}},left:{check:(g,y)=>{const b=g.left>8+y.width,w=g.top>(y.height-g.height)/2,S=globalThis.innerHeight-g.bottom-m>(y.height-g.height)/2;return b&&S&&w}},right:{check:(g,y)=>{const b=globalThis.innerWidth-g.right-m>8+y.width,w=g.top>(y.height-g.height)/2,S=globalThis.innerHeight-g.bottom-m>(y.height-g.height)/2;return b&&S&&w}},bottomRight:{check:(g,y)=>{const b=globalThis.innerHeight-g.bottom-m>8+y.height,w=globalThis.innerWidth-g.left-m>y.width;return b&&w}},bottomLeft:{check:(g,y)=>{const b=globalThis.innerHeight-g.bottom-m>8+y.height,w=g.right>y.width;return b&&w}},topRight:{check:(g,y)=>{const b=g.top>8+y.height,w=globalThis.innerWidth-g.left-m>y.width;return b&&w}},topLeft:{check:(g,y)=>{const b=g.top>8+y.height,w=g.right>y.width;return b&&w}},leftBottom:{check:(g,y)=>{const b=g.left>8+y.width,w=globalThis.innerHeight-g.top-m>y.height;return b&&w}},leftTop:{check:(g,y)=>{const b=g.left>8+y.width,w=g.bottom>y.height;return b&&w}},rightBottom:{check:(g,y)=>{const b=globalThis.innerWidth-g.right-m>8+y.width,w=globalThis.innerHeight-g.top-m>y.height;return b&&w}},rightTop:{check:(g,y)=>{const b=globalThis.innerWidth-g.right-m>8+y.width,w=g.bottom>y.height;return b&&w}},bottomPageCenter:{check:(g,y)=>{const b=globalThis.innerHeight-g.bottom-m>8+y.height,w=globalThis.innerWidth-m>=y.width;return b&&w}},topPageCenter:{check:(g,y)=>{const b=g.top>8+y.height,w=globalThis.innerWidth-m>=y.width;return b&&w}}}}(l)),h=i?d.filter(m=>m[0].includes(i)&&m[1].check(u,c)):d.filter(m=>m[1].check(u,c)),p=i||"bottom";return h.length?h[0][0]:p}const lN=1500,xu=v.forwardRef(({dimension:e="m",renderContent:a,targetElement:l,tooltipPosition:i,...u},c)=>{const d=v.useRef(null),h=v.useRef(0),{rootRef:p}=v.useContext(Bl),m=v.useMemo(()=>!a()&&a()!==0,[a]),[g,y]=v.useState(),[b,w]=v.useState(!1),[S,$]=v.useState({});return v.useEffect(()=>{(E=>{const T=l;if(T&&d.current){const C=nN(T,d.current,E,i),M=d.current;switch(C){case"leftBottom":case"leftTop":case"left":y("row-reverse"),w(!1),M.style.margin="0 8px 0 0",M.style.alignSelf=C==="leftBottom"?"flex-start":C==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":y("row"),w(!1),M.style.margin="0 0 0 8px",M.style.alignSelf=C==="rightBottom"?"flex-start":C==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":y("column-reverse"),w(C==="topPageCenter"),M.style.margin="0 0 8px 0",M.style.alignSelf=C==="topLeft"?"flex-end":C==="topRight"?"flex-start":"center";break;default:y("column"),w(C==="bottomPageCenter"),M.style.margin="8px 0 0 0",M.style.alignSelf=C==="bottomLeft"?"flex-end":C==="bottomRight"?"flex-start":"center"}}})(I_())},[a(),l,i,S]),v.useLayoutEffect(()=>{if(d.current&&!m){const E=new ResizeObserver(T=>{T.forEach(C=>{h.current===0?h.current=C.contentRect.height:$({})})});return E.observe(d.current),()=>{E.disconnect()}}},[m]),v.useEffect(()=>{d.current&&!m&&(d.current.style.opacity="1")},[m]),m?null:N.jsxs(aN,{targetElement:l,rootRef:p,$flexDirection:g,fullContainerWidth:b,children:[N.jsx(rN,{}),N.jsx(eN,{ref:kr(c,d),children:N.jsx(tN,{role:"tooltip",$dimension:e,...u,children:a()})})]})});xu.displayName="Tooltip";function Su(e){return Om((a,l)=>{const{renderContent:i,container:u,withDelay:c,tooltipRef:d,tooltipPosition:h,tooltipDimension:p,...m}=a,g=!i()&&i()!==0,y=v.useRef(null),[b,w]=v.useState(!1),[S,$]=v.useState(null),[E,T]=v.useState();return v.useEffect(()=>{function C(){T(setTimeout(()=>w(!0),c?lN:0))}function M(){clearTimeout(E),w(!1)}if(S)return S.addEventListener("mouseenter",C),S.addEventListener("focus",C),S.addEventListener("mouseleave",M),S.addEventListener("blur",M),()=>{E&&clearTimeout(E),S.removeEventListener("mouseenter",C),S.removeEventListener("focus",C),S.removeEventListener("mouseleave",M),S.removeEventListener("blur",M)}},[S,T,w,E]),N.jsxs(N.Fragment,{children:[N.jsx(e,{...m,ref:kr(l,y,$)}),b&&!g&&N.jsx(xu,{targetElement:y.current,renderContent:i,container:u,tooltipPosition:h,dimension:p,ref:d})]})})}const iN=re`
  background: ${({$appearance:e,theme:a})=>{switch(e){case"info":return`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`;case"warning":return`var(--admiral-color-Warning_Warning50Main, ${a.color["Warning/Warning 50 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${a.color["Success/Success 50 Main"]})`;case"error":return`var(--admiral-color-Error_Error60Main, ${a.color["Error/Error 60 Main"]})`;case"grey":return`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral80, ${a.color["Neutral/Neutral 80"]})`;case"whiteBlue":return`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`;case"white":case"whiteInactive":case"whiteDisable":return`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`;default:return`var(--admiral-color-Opacity_Neutral8, ${a.color["Opacity/Neutral 8"]})`}}};
`,oN=re`
  color: ${({$appearance:e,theme:a})=>{switch(e){case"info":case"warning":case"success":case"error":case"grey":return`var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]})`;case"dark":return`var(--admiral-color-Neutral_Neutral00, ${a.color["Neutral/Neutral 00"]})`;case"whiteBlue":return`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`;case"lightInactive":case"whiteInactive":return`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`;case"whiteDisable":case"lightDisable":return`var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]})`;default:return`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`}}};
`,uN=k.div`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({$dimension:e})=>e==="s"?"0 5px":"0 6px"};
  height: ${({$dimension:e})=>e==="s"?"16px":"20px"};
  border-radius: ${({$dimension:e})=>e==="s"?"8px":"10px"};
  ${({$dimension:e})=>e==="s"?Ge["Caption/Caption 1"]:Ge["Body/Body 2 Long"]}
  ${iN}
  ${oN}
  user-select: none;
`,Ac=v.forwardRef(({children:e,dimension:a="m",appearance:l="light",locale:i,...u},c)=>{const d=qn()||Da,h=(i==null?void 0:i.amountAriaLabel)||d.locales[d.currentLocale].badge.amountAriaLabel;return N.jsx(uN,{ref:c,$dimension:a,$appearance:l,"aria-label":`${h} ${e}`,...u,children:e})});Ac.displayName="Badge";k(Ac)`
  &:is(input:checked + div *) {
    background: ${e=>e.$disabled?`var(--admiral-color-Neutral_Neutral00, ${e.theme.color["Neutral/Neutral 00"]})`:`var(--admiral-color-Special_StaticWhite, ${e.theme.color["Special/Static White"]})`};
    color: ${e=>e.$disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`};
  }
`;const Jb=[0,1,2,3,4,5,6],Fh=20,zm=e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),Nv=e=>{const a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()},qh=e=>(e.setHours(0,0,0,0),e),Bm=(e,a)=>{const l=new Date(e.getTime());return isNaN(a)?new Date(NaN):(a&&l.setDate(l.getDate()+a),l)},sN=(e,a)=>Bm(e,7*a),jm=(e,a)=>Dc(e,12*a),Dc=(e,a)=>{const l=new Date(e.getTime());if(isNaN(a))return new Date(NaN);if(!a)return l;const i=l.getDate(),u=new Date(l.getTime());return u.setMonth(l.getMonth()+a+1,0),i>=u.getDate()?u:(l.setFullYear(u.getFullYear(),u.getMonth(),i),l)},Ib=(e,a)=>e.getTime()>a.getTime(),nh=(e,a)=>e.getTime()<a.getTime(),cN=(e,a)=>(a&&(e.setMilliseconds(a.getMilliseconds()),e.setSeconds(a.getSeconds()),e.setMinutes(a.getMinutes()),e.setHours(a.getHours())),e),fN=(e,a)=>e===null&&a===null||e===void 0&&a===void 0?0:e==null&&a!=null?-1:a==null&&e!=null?1:e&&a?e.getTime()-a.getTime():0,Tv=(e,a,l)=>{let i;const u=qh(a),c=((d=l).setHours(23,59,59,999),d);var d;try{i=((h,p)=>{const m=h.getTime(),g=p.start.getTime(),y=p.end.getTime();if(!(g<=y))throw new RangeError("Invalid interval");return m>=g&&m<=y})(e,{start:u,end:c})}catch{i=!1}return i},Rv=(e,a)=>{const l=qh(e),i=qh(a),u=l.getTime()-Nv(l),c=i.getTime()-Nv(i);return Math.round((u-c)/864e5)},Mv=(e,a)=>12*(e.getFullYear()-a.getFullYear())+(e.getMonth()-a.getMonth()),Ov=(e,a)=>e.getFullYear()-a.getFullYear(),dN=(e,a)=>{const l=new Date(e.getTime()),i=l.getDay(),u=6+(i<a?-7:0)-(i-a);return l.setDate(l.getDate()+u),l.setHours(23,59,59,999),l},ex=(e,a)=>{return e&&a?(l=a,e.getTime()===l.getTime()):!e&&!a;var l},tx=(e,a,l)=>new Intl.DateTimeFormat(l,a).format(e||new Date),hN=e=>(a=>{const l=a.getMonth();return a.setFullYear(a.getFullYear(),l+1,0),a.setHours(23,59,59,999),a})(e).getDate(),hl=(e,a,l)=>a&&Rv(e,a)<0||l&&Rv(e,l)>0,Na=(e,a)=>{return e&&a?(i=a,(l=e).getFullYear()===i.getFullYear()&&l.getDate()===i.getDate()&&l.getMonth()===i.getMonth()):!e&&!a;var l,i},rx=(e,a)=>{const l=e.getFullYear(),i=e.getDate(),u=new Date(0);u.setFullYear(l,a,15),u.setHours(0,0,0,0);const c=(h=>{const p=h.getFullYear(),m=h.getMonth(),g=new Date(0);return g.setFullYear(p,m+1,0),g.setHours(0,0,0,0),g.getDate()})(u),d=new Date(e);return d.setMonth(a,Math.min(i,c)),d},ax=(e,a)=>{if(isNaN(e))return new Date(NaN);const l=new Date(e);return l.setFullYear(a),l},nx=(e,a)=>jm(e,-a),mN=e=>{const a=new Date(0);return a.setFullYear(e.getFullYear(),0,1),a.setHours(0,0,0,0),a},lx=e=>{const a=new Date(e);return a.setDate(1),a.setHours(0,0,0,0),a},pN=(e,a)=>{const l=Math.ceil(e.getFullYear()/a)*a;return{start:l-(a-1),end:l}},zc=(e,a)=>{const l=new Date(e.getTime()),i=l.getDay(),u=(i<a?7:0)+i-a;return l.setDate(l.getDate()-u),l.setHours(0,0,0,0),l},ix=(e,a)=>Dc(e,-1),Po=e=>!isNaN(e),gN=(e,a="long")=>{const l=new Date().getFullYear(),i=[...Array(12).keys()],u=new Intl.DateTimeFormat(e,{month:a});return i.map(c=>u.format(new Date(l,c)))},yN=(e,a)=>({invalidValue:l=>l?Po(l)?hl(l,e,a)?"Дата вне диапазона":null:"Дата не валидна":"Неверный формат даты",invalidRange:(l,i)=>l||i?Po(l)||Po(i)?l?i?Po(l)?Po(i)?fN(l,i)>=0?"Конечная дата меньше начальной":hl(l,e,a)?"Начальная дата вне диапазона":hl(i,e,a)?"Конечная дата вне диапазона":null:"Конечная дата не валидна":"Начальная дата не валидна":"Неверный формат конечной даты":"Неверный формат начальной даты":"Даты не валидны":"Неверный формат дат",invalidYear:l=>hl(new Date(l,11,31),e)||hl(new Date(l,0,1),null,a)?"Дата вне диапазона":null,invalidMonth:(l,i)=>{const u=hN(new Date(i,l,1));return hl(new Date(i,l,u),e)||hl(new Date(i,l,1),null,a)?"Дата вне диапазона":null}}),ox=k.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: ${"60px"};
  height: ${"36px"};
  padding: ${"8px 0"};
  margin-bottom: ${"16px"};
  border: 1px solid
    ${({$today:e,theme:a})=>e?`var(--admiral-color-Neutral_Neutral90, ${a.color["Neutral/Neutral 90"]})`:"transparent"};
  border-radius: ${"18px"};
  background: transparent;
  ${Ge["Body/Body 2 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  user-select: none;
  cursor: pointer;

  ${({disabled:e,theme:a})=>e&&`
      cursor: not-allowed;
      color: var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]});
    `}

  ${({disabled:e,theme:a})=>!e&&`
      &:hover {
        border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]});
      }
    `}

  ${({disabled:e,theme:a,$selected:l})=>!e&&l&&`
      border: 1px solid var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]});
      color: var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]});
      background: var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]});
      &:hover {
        border: 1px solid var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});
        background: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});
      }
    `}
`,vN=({viewDate:e,startDate:a,selected:l,validator:i,onClick:u})=>{const{start:c,end:d}=pN(e,Fh),h=Array(d-c+1).fill(0).map((p,m)=>c+m);return N.jsx(N.Fragment,{children:h.map(p=>{const m=!!(i!=null&&i.invalidYear(p));return N.jsx(ox,{$today:p===new Date().getFullYear(),$selected:!(!l&&!a)&&p===(l||a).getFullYear(),disabled:m,onMouseDown:g=>{g.preventDefault();const y=mN(ax(e,p));!m&&u&&u(y,g)},children:p},p)})})};var Cv;function Yh(){return Yh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Yh.apply(null,arguments)}var bN=function(e){return v.createElement("svg",Yh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Cv||(Cv=v.createElement("path",{fill:"#74767B",d:"M14.5 18.75c.18 0 .35-.07.48-.21.24-.27.22-.68-.04-.92l-6.37-5.74 6.41-5.55a.65.65 0 0 0 .04-.92.66.66 0 0 0-.92-.04l-6.9 5.99c-.31.28-.31.76 0 1.04l6.86 6.18c.13.12.28.17.44.17"})))},Av;function Gh(){return Gh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Gh.apply(null,arguments)}var ux=function(e){return v.createElement("svg",Gh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Av||(Av=v.createElement("path",{fill:"#74767B",d:"M9.47 18.75c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l6.37-5.74-6.41-5.55a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l6.9 5.99c.31.28.31.76 0 1.04l-6.86 6.18c-.13.12-.28.17-.44.17"})))};const Vh=v.forwardRef(({onMouseDown:e,disabled:a,type:l},i)=>N.jsxs(Cc,{dimension:"lSmall",ref:i,onMouseDown:u=>{u==null||u.preventDefault(),e(u)},disabled:a,highlightFocus:!1,children:[l==="left"&&N.jsx(bN,{}),l==="right"&&N.jsx(ux,{})]})),xN=re`
  &:hover:after {
    border: 1px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    background: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
    z-index: -1;
  }
`,SN=k.div`
  position: relative;
  display: inline-block;
  width: ${"36px"};
  height: ${"36px"};
  padding: ${"8px 0"};
  margin-bottom: ${"4px"};
  ${Ge["Body/Body 2 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  box-sizing: border-box;
  user-select: none;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 1px solid
      ${({theme:e,$today:a,$selected:l})=>a&&!l?`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`:"transparent"};
    border-radius: 50%;
  }

  ${({disabled:e,theme:a})=>e&&`
      color: var(--admiral-color-Neutral_Neutral30, ${a.color["Neutral/Neutral 30"]});
    `}

  ${({theme:e,$outsideMonth:a})=>a&&`
      color: var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]});
      opacity: 0;
      pointer-events: none;
    `}

  ${e=>e.$highlightSpecialDayMixin}
  ${e=>e.disabled?"":xN}

  ${({disabled:e,theme:a,$selected:l,$inSelectingRange:i})=>!e&&l&&`
      color: var(--admiral-color-Special_StaticWhite, ${a.color["Special/Static White"]});
      background: ${i?`var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]})`:`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`};
      border-radius: 50%;
      &:hover {
        background: var(--admiral-color-Primary_Primary70, ${a.color["Primary/Primary 70"]});
      }
    `}

  ${({disabled:e,$inRange:a,theme:l,$corners:i,$selected:u,$isActiveDate:c})=>!e&&a&&`
      &:before {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: var(--admiral-color-Opacity_Hover, ${l.color["Opacity/Hover"]});
        ${i&&Object.keys(i).map(d=>i[d]?u||c?`border-${d}-radius: 50%;`:`border-${d}-radius: 4px;`:"").join("")}
      }
    `}
`,EN=k.div`
  display: inline-block;
  user-select: none;
  width: ${"36px"};
  height: ${"36px"};
  padding: ${"8px 0"};
  margin-bottom: ${"4px"};
  ${Ge["Body/Body 2 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  box-sizing: border-box;
`,wN=({date:e})=>{const a=qn()||Da,l=zc(e,a.locales[a.currentLocale].firstDayOfWeek??1);return N.jsx("div",{children:Jb.map(i=>{const u=Bm(l,i),c=zm(tx(u,{weekday:"short"},a.currentLocale||"ru").slice(0,2));return N.jsx(EN,{children:c},u.valueOf())})})},$N=({day:e,month:a,startDate:l,endDate:i,selected:u,activeDate:c,range:d,validator:h,filterDate:p,onMouseEnter:m,onClick:g,highlightSpecialDay:y})=>{const b=qn()||Da,w=!!(h!=null&&h.invalidValue(e))||p&&!p(e),S=a!==void 0&&a!==e.getMonth(),$=!w&&!!d&&!!l&&!!c&&!i&&(Ib(c,l)||ex(c,l))&&Tv(e,l,c),E=!!l&&!!i&&Tv(e,l,i),T=!!l&&Na(e,l),C=!!l&&!!i&&Na(e,i),M=$&&Na(e,l),z=$&&Na(e,c),_={};if(l){const V=Na(e,zc(e,b.locales[b.currentLocale].firstDayOfWeek??1)),K=Na(e,dN(e,b.locales[b.currentLocale].firstDayOfWeek??1)),q=T||M,Z=C||z;_["top-left"]=q||V&&!Z,_["bottom-left"]=q||V&&!Z,_["top-right"]=Z||K&&!q,_["bottom-right"]=Z||K&&!q}const j=new Date;return j.setHours(0,0,0,0),N.jsx(SN,{$today:Na(e,j),$selected:Na(e,u)||T||C,$inSelectingRange:$,$isActiveDate:Na(e,c),$corners:_,$inRange:E||$,disabled:w,$outsideMonth:S,$highlightSpecialDayMixin:y(e),onMouseEnter:V=>!w&&m&&m(e,V),onMouseDown:V=>{V.preventDefault(),!w&&g&&g(e,V)},className:!Na(e,u)||T||C?"ui-kit-calendar-day-component":"ui-kit-calendar-day-component_selected",children:e.getDate()})},_N=k.div`
  white-space: nowrap;
`,NN=({day:e,month:a,startDate:l,endDate:i,selected:u,activeDate:c,range:d,validator:h,filterDate:p,onMouseEnter:m,onClick:g,highlightSpecialDay:y})=>{const b=qn()||Da,w=zc(e,b.locales[b.currentLocale].firstDayOfWeek??1);return N.jsx(_N,{children:Jb.map(S=>{const $=Bm(w,S);return N.jsx($N,{day:$,month:a,startDate:l,endDate:i,selected:u,activeDate:c,range:d,validator:h,filterDate:p,onMouseEnter:(E,T)=>((C,M)=>m&&m(C,M))($,T),onClick:(E,T)=>((C,M)=>g&&g(C,M))($,T),highlightSpecialDay:y},$.valueOf())})})},TN=({day:e,startDate:a,endDate:l,selected:i,activeDate:u,range:c,validator:d,filterDate:h,onMouseEnter:p,onMouseLeave:m,onClick:g,highlightSpecialDay:y})=>{const b=qn()||Da,w=[],S=(C,M)=>p&&p(C,M),$=(C,M)=>g&&g(C,M);let E=0,T=zc(lx(e),b.locales[b.currentLocale].firstDayOfWeek??1);do E++,w.push(T),T=sN(T,1);while(E<6);return N.jsx("div",{onMouseLeave:()=>m&&m(),children:w.map(C=>N.jsx(NN,{day:C,month:e.getMonth(),startDate:a,endDate:l,selected:i,activeDate:u,range:c,validator:d,filterDate:h,onMouseEnter:S,onClick:$,highlightSpecialDay:y},C.valueOf()))})},RN=k(ox)`
  width: ${"84px"};
  margin-bottom: ${"32px"};
`,MN=({viewDate:e,startDate:a,selected:l,validator:i,onClick:u})=>{const c=qn()||Da,d=gN(c.currentLocale||"ru");return N.jsx(N.Fragment,{children:d.map((h,p)=>{const m=!!(i!=null&&i.invalidMonth(p,e.getFullYear()));return N.jsx(RN,{$today:p===new Date().getMonth(),$selected:!(!l&&!a)&&p===(l||a).getMonth(),disabled:m,onMouseDown:g=>{g.preventDefault();const y=lx(rx(e,p));!m&&u&&u(y,g)},children:zm(h)},h)})})},ON="12px",CN="28px",AN=k.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0 none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  margin-bottom: ${({$monthsView:e,$yearsView:a})=>e||a?CN:ON};
`,sx=re`
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: ${"32px"};
  padding: ${"4px 8px"};
  margin: 0;
  border-radius: ${"16px"};
  ${Ge["Subtitle/Subtitle 2"]}
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  background: ${e=>e.$view?`var(--admiral-color-Opacity_Focus, ${e.theme.color["Opacity/Focus"]})`:"transparent"};
  &:hover {
    background: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
  }
`,DN=k.h6`
  ${sx}
`,zN=k.h6`
  ${sx};
  width: ${"54px"};
`,BN=k.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,jN=Su(DN),LN=Su(zN),Dv=Su(Vh),HN=({viewDate:e,minDate:a,maxDate:l,yearsView:i,monthsView:u,locale:c,onYearsViewShow:d,onYearsViewHide:h,onMonthsViewShow:p,onMonthsViewHide:m,onNext:g,onPrevious:y})=>{const b=qn()||Da,w=!!a&&Mv(a,ix(e))>0,S=!!l&&Mv(Dc(e,1),l)>0,$=!!a&&Ov(a,nx(e,1))>0,E=!!l&&Ov(jm(e,1),l)>0,T=i?$:w,C=i?E:S;return N.jsxs(AN,{$yearsView:i,$monthsView:u,className:"ui-kit-calendar-panel-component",children:[u||T?N.jsx(Vh,{onMouseDown:y,disabled:T,type:"left"}):N.jsx(Dv,{renderContent:()=>i?(c==null?void 0:c.backwardText)||b.locales[b.currentLocale].calendar.backwardText:(c==null?void 0:c.previousMonthText)||b.locales[b.currentLocale].calendar.previousMonthText,onMouseDown:y,disabled:T,type:"left"}),N.jsxs(BN,{children:[N.jsx(jN,{renderContent:()=>u?(c==null?void 0:c.returnText)||b.locales[b.currentLocale].calendar.returnText:(c==null?void 0:c.selectMonthText)||b.locales[b.currentLocale].calendar.selectMonthText,$view:u,onMouseDown:M=>{M.preventDefault(),u?m(M):p(M)},children:zm(tx(e,{month:"long"},b.currentLocale||"ru"))}),N.jsx(LN,{renderContent:()=>i?(c==null?void 0:c.returnText)||b.locales[b.currentLocale].calendar.returnText:(c==null?void 0:c.selectYearText)||b.locales[b.currentLocale].calendar.selectYearText,$view:i,onMouseDown:M=>{M.preventDefault(),i?h(M):d(M)},children:e.getFullYear()})]}),u||C?N.jsx(Vh,{onMouseDown:g,disabled:C,type:"right"}):N.jsx(Dv,{renderContent:()=>i?(c==null?void 0:c.forwardText)||b.locales[b.currentLocale].calendar.forwardText:(c==null?void 0:c.nextMonthText)||b.locales[b.currentLocale].calendar.nextMonthText,onMouseDown:g,disabled:C,type:"right"})]})},PN=k.div`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* to fix range rounded corners fill */

  padding: ${({$yearsView:e,$monthsView:a})=>e?"20px 12px 16px":a?"20px 16px 4px":"20px 12px 12px"};

  width: ${284}px;
  background: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
  ${Ge["Body/Body 2 Long"]}
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  border-radius: var(--admiral-border-radius-Medium, ${e=>Ui(e.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>ki(e.theme.shadow["Shadow 08"])});
`,cx=v.forwardRef(({viewDate:e,onViewDateChange:a,startDate:l,endDate:i,validator:u,minDate:c,maxDate:d,selected:h,range:p,filterDate:m,currentActiveView:g,currentActiveViewImportant:y,locale:b,onChange:w,onDateIncreaseDecrease:S,onMonthSelect:$,onYearSelect:E,onViewEnter:T,onViewLeave:C,onViewMonthSelect:M,onViewYearSelect:z,highlightSpecialDay:_=()=>{},...j},V)=>{const K=()=>{const ye=new Date;return ye.setHours(0,0,0,0),e||h||(c&&nh(ye,c)?c:d&&Ib(ye,d)?d:ye)},[q,Z]=v.useState(K()),Se=e??q,Ce=ye=>{Z(ye),a==null||a(ye)},[ge,Ee]=v.useState(null),[xe,le]=v.useState(!1),[he,ue]=v.useState(!1);v.useEffect(()=>{g==="MONTH"&&(le(!1),ue(!0)),g==="YEAR"&&(ue(!1),le(!0)),g==="DAY"&&(le(!1),ue(!1))},[g]),v.useEffect(()=>{Ce(K())},[h]),v.useEffect(()=>{p&&l&&(O(l.getFullYear()),L(l.getMonth()))},[]),v.useEffect(()=>{xe?T&&T("YEAR"):C&&C("YEAR")},[xe]),v.useEffect(()=>{he?T&&T("MONTH"):C&&C("MONTH")},[he]);const ie=()=>u||yN(c,d),O=ye=>Ce(ax(Se,ye)),L=ye=>Ce(rx(Se,ye)),X=ye=>Ee(ye),W=()=>Ee(null),ee=(ye,me)=>{let ve=ye;!p&&ex(h,ve)||(ve=cN(ve,h),p?(l||i?l&&!i?nh(ve,l)?w([ve,null],me):w([l,ve],me):!l&&i&&(nh(ve,i)?w([ve,i],me):w([ve,null],me)):w([ve,null],me),l&&i&&w([ve,null],me)):w(ve,me))},fe=ye=>{O(ye.getFullYear()),!y&&le(!1),E&&E(ye)},pe=ye=>{L(ye.getMonth()),!y&&ue(!1),$&&$(ye)};return N.jsxs(PN,{$yearsView:xe,$monthsView:he,...j,ref:V,children:[N.jsx(HN,{viewDate:Se,minDate:c,maxDate:d,yearsView:xe,monthsView:he,locale:b,onYearsViewShow:()=>{y||(le(!0),ue(!1)),z&&z()},onYearsViewHide:()=>{y||le(!1),z&&z()},onMonthsViewShow:()=>{y||(le(!1),ue(!0)),M&&M()},onMonthsViewHide:()=>{y||ue(!1),M&&M()},onNext:xe?()=>{const ye=jm(Se,xe?Fh:1);S&&S(ye),Ce(ye)}:()=>{const ye=Dc(Se,1);S&&S(ye),Ce(ye)},onPrevious:xe?()=>{const ye=nx(Se,xe?Fh:1);S&&S(ye),Ce(ye)}:()=>{const ye=ix(Se);S&&S(ye),Ce(ye)}}),xe&&N.jsx(vN,{viewDate:Se,startDate:l,endDate:i,selected:h,range:p,validator:ie(),onClick:fe}),he&&N.jsx(MN,{viewDate:Se,startDate:l,endDate:i,selected:h,range:p,validator:ie(),onClick:pe}),!xe&&!he&&N.jsxs(N.Fragment,{children:[N.jsx(wN,{date:Se}),N.jsx(TN,{day:Se,startDate:l,endDate:i,selected:h,activeDate:ge,range:p,validator:ie(),filterDate:m,onMouseEnter:X,onMouseLeave:W,onClick:ee,highlightSpecialDay:_})]})]})});cx.displayName="Calendar";const zv=re`
  background-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
    border-color: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
    border-color: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,Bv=re`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    &:not(.button-group > button) {
      border-color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,jv=re`
  background-color: var(--admiral-color-Opacity_Neutral8, ${e=>e.theme.color["Opacity/Neutral 8"]});
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Neutral12, ${e=>e.theme.color["Opacity/Neutral 12"]});
    color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Neutral16, ${e=>e.theme.color["Opacity/Neutral 16"]});
    color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Opacity_Neutral8, ${e=>e.theme.color["Opacity/Neutral 8"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,UN=re`
  background-color: transparent;
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&:active {
    background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    border-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,kN=re`
  background-color: transparent;
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(
      --admiral-color-Opacity_DarkStaticHover,
      ${e=>e.theme.color["Opacity/Dark Static Hover"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    }
  }

  &&&:active {
    background-color: var(
      --admiral-color-Opacity_DarkStaticPress,
      ${e=>e.theme.color["Opacity/Dark Static Press"]}
    );
    color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    border-color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: var(
      --admiral-color-Special_DarkStaticNeutral30,
      ${e=>e.theme.color["Special/Dark Static Neutral 30"]}
    );
    color: var(--admiral-color-Special_DarkStaticNeutral30, ${e=>e.theme.color["Special/Dark Static Neutral 30"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Special_DarkStaticNeutral30, ${e=>e.theme.color["Special/Dark Static Neutral 30"]});
    }
  }
`,FN=re`
  background-color: var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
    border-color: var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Error_Error80, ${e=>e.theme.color["Error/Error 80"]});
    border-color: var(--admiral-color-Error_Error80, ${e=>e.theme.color["Error/Error 80"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,qN=re`
  background-color: var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});
  color: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  border: 1px solid var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});

  &&& *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }

  &&&:hover {
    background-color: var(--admiral-color-Success_Success60, ${e=>e.theme.color["Success/Success 60"]});
    border-color: var(--admiral-color-Success_Success60, ${e=>e.theme.color["Success/Success 60"]});
  }

  &&&:active {
    background-color: var(--admiral-color-Success_Success70, ${e=>e.theme.color["Success/Success 70"]});
    border-color: var(--admiral-color-Success_Success70, ${e=>e.theme.color["Success/Success 70"]});
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    border-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
    &&& *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }
`,YN=re`
  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,GN=re`
  &[data-appearance~='primary']:not(.button-group > button) {
    ${zv}
  }
  &[data-appearance~='secondary']:not(.button-group > button) {
    ${Bv}
  }
  &[data-appearance~='tertiary']:not(.button-group > button) {
    ${jv}
  }
  &[data-appearance~='ghost']:not(.button-group > button) {
    ${UN}
  }
  &[data-appearance~='white']:not(.button-group > button) {
    ${kN}
  }
  &[data-appearance~='danger']:not(.button-group > button) {
    ${FN}
  }
  &[data-appearance~='success']:not(.button-group > button) {
    ${qN}
  }
  &:is(.button-group[data-appearance='primary'] > button) {
    ${zv}
  }
  &:is(.button-group[data-appearance='secondary'] > button) {
    ${Bv}
  }
  &:is(.button-group[data-appearance='tertiary'] > button) {
    ${jv}
  }

  ${YN}
`,Hi=k.div``;function Un(e){switch(e){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}re`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Un("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Un("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Un("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Un("s")}px;`}
  }
`;re`
  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Un("xl")}px;`}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Un("l")}px;`}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Un("m")}px;`}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Un("s")}px;`}
  }
`;const Lv=re`
  padding: 0;
  height: 56px;
  ${e=>e.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${Hi} {
    width: 24px;
    height: 24px;
  }

  ${Ge["Button/Button 1"]}
`,VN=re`
  ${Lv}

  .button-group[data-dimension='xl'] &&,
  &[data-dimension='xl'] {
    ${Lv}
  }

  .button-group[data-dimension='l'] &&,
  &[data-dimension='l'] {
    height: 48px;
    ${e=>e.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  .button-group[data-dimension='m'] &&,
  &[data-dimension='m'] {
    height: 40px;
    ${e=>e.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  .button-group[data-dimension='s'] &&,
  &[data-dimension='s'] {
    height: 32px;
    ${e=>e.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${Hi} {
      width: 20px;
      height: 20px;
    }
    ${Ge["Button/Button 2"]}
  }
`,fx=k.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  max-width: calc(100% - ${e=>e.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${Hi} {
    flex: 0 0 auto;
  }

  height: 24px;
  & > svg {
    width: 24px;
    height: 24px;
  }

  .button-group[data-dimension='m'] &&,
  .button-group[data-dimension='l'] &&,
  .button-group[data-dimension='xl'] && {
    height: 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }
  .button-group[data-dimension='s'] &&,
  [data-dimension='s'] & {
    height: 20px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,QN=k(Hi)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  container-type: inline-size;
  .button-group[data-appearance='primary'] & {
    & path {
      fill: ${e=>`var(--admiral-color-Special_StaticWhite, ${e.theme.color["Special/Static White"]})`};
    }
  }
  .button-group[data-appearance='secondary'] &,
  .button-group[data-appearance='tertiary'] & {
    & path {
      fill: ${e=>`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`};
    }
  }
`,Hv=k.div`
  display: inline-block;
  width: 2px;
`,vi=v.forwardRef(({appearance:e="primary",dimension:a="xl",type:l="button",loading:i=!1,skeleton:u=!1,iconStart:c,iconEnd:d,icon:h,iconPlace:p="left",children:m,buttonCssMixin:g,displayAsDisabled:y,displayAsSquare:b,...w},S)=>{const $=!!c||!!h&&p==="left",E=!!d||!!h&&p==="right",T=(b||$?0:2)+(b||E?0:2);return N.jsxs(XN,{ref:S,$appearance:e,$dimension:a,type:l,$loading:i,$skeleton:u,$buttonCssMixin:g,$displayAsSquare:b,$displayAsDisabled:y,...w,children:[i&&N.jsx(QN,{children:N.jsx(Wb,{$inverse:e!=="secondary"&&e!=="tertiary"&&e!=="ghost"})}),!b&&!$&&N.jsx(Hv,{}),N.jsxs(fx,{$addPadding:T,children:[$?N.jsx(Hi,{children:c||h}):null,v.Children.toArray(m).map((C,M)=>typeof C=="string"?N.jsx("div",{children:C},C+M):C),E?N.jsx(Hi,{children:d||h}):null]}),!b&&!E&&N.jsx(Hv,{})]})}),XN=k.button.attrs(e=>({"data-dimension":e.$dimension,"data-appearance":[e.$appearance,e.$displayAsDisabled?"disabled":void 0].filter(a=>a!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ui(e.theme.shape)})`};
  appearance: none;
  vertical-align: middle;
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  ${e=>(e.$loading||e.$skeleton)&&"pointer-events: none"};

  ${GN};
  ${VN};
  ${e=>e.$buttonCssMixin};
  ${({$skeleton:e})=>e&&Dm};

  ${fx} {
    ${e=>e.$loading||e.$skeleton?"visibility: hidden;":""}
  }
`;vi.displayName="Button";var Pv;function Qh(){return Qh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Qh.apply(null,arguments)}var ZN=function(e){return v.createElement("svg",Qh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},e),Pv||(Pv=v.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))},Uv;function Xh(){return Xh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Xh.apply(null,arguments)}var KN=function(e){return v.createElement("svg",Xh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},e),Uv||(Uv=v.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const WN=re`
  width: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,JN=re`
  height: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,IN=k(ZN)`
  pointer-events: none;
`,e6=k(KN)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }
`,t6=k.div`
  position: relative;
  box-sizing: border-box;
  cursor: ${e=>e.$disabled?"not-allowed":e.$readOnly?"default":"pointer"};

  overflow: visible;
  ${WN};
  ${JN};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`,iu=k.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${e=>_c(e.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  border: 1px solid
    ${({$error:e,theme:a})=>e?`var(--admiral-color-Error_Error60Main, ${a.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${a.color["Neutral/Neutral 50"]})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${e=>e.theme.color["Special/Static White"]});
  }
`,r6=re`
  &:not(:checked) + ${iu} {
    background-color: ${({theme:e,$indeterminate:a})=>a&&`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};
    border: ${({$indeterminate:e})=>e&&"none"};
    > * {
      display: ${e=>e.$indeterminate?"block":"none"};
    }
  }
`,dx=re`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`,kv=re`
  &:not(:disabled) {
    &::after {
      ${dx};
      background-color: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
    }
  }
`,a6=re`
  &:not(:disabled) {
    &::after {
      ${dx};
      background-color: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
    }
  }
`,Fv=re`
  pointer-events: none;
  & + ${iu} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  }
`,qv=re`
  background-color: var(--admiral-color-Primary_Primary30, ${e=>e.theme.color["Primary/Primary 30"]});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  }
`,n6=re`
  background-color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  border: none;
`,l6=k.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: var(--admiral-border-radius-Small, ${e=>_c(e.theme.shape)});
  margin: 0;
  padding: 0;

  ${e=>e.readOnly&&Fv}

  &:checked + ${iu} {
    ${e=>e.readOnly?qv:n6}
  }

  &:disabled {
    cursor: not-allowed;
    ${Fv};
  }

  ${e=>!e.readOnly&&e.$hovered&&kv}

  ${r6}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${kv}

  &:active:not(:disabled) {
    ${a6}
  }

  &:checked:disabled + ${iu} {
    ${qv}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
  }
`,hx=v.forwardRef(({className:e,dimension:a="m",disabled:l,readOnly:i,hovered:u,indeterminate:c,error:d,...h},p)=>N.jsxs(t6,{$dimension:a,$disabled:l,$readOnly:i,className:e,children:[N.jsx(l6,{ref:p,disabled:l,readOnly:i,...h,type:"checkbox",$indeterminate:c,onKeyDown:m=>{var g;i&&se.getCode(m)===se[" "]&&m.preventDefault(),(g=h.onKeyDown)==null||g.call(h,m)},"data-hovered":u,$hovered:u}),N.jsx(iu,{$error:d,children:N.jsx(c?e6:IN,{"aria-hidden":"true",focusable:"false"})})]}));hx.displayName="Checkbox";function Eu(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const i6=re`
  height: ${({$dimension:e})=>{switch(e){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,mx=re`
  ${Dm}
  & > * {
    visibility: hidden;
  }
`,o6=k.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${e=>e.$skeleton?0:`var(--admiral-border-radius-Medium, ${Ui(e.theme.shape)})`};

  pointer-events: ${e=>e.$skeleton?"none":"all"};
  ${({$skeleton:e})=>e&&mx};
`,u6=k(o6)`
  ${i6};
`,s6=k.div`
  white-space: nowrap;
  ${Ge["Body/Body 2 Long"]}
  color: ${e=>e.error?`var(--admiral-color-Error_Error60Main, ${e.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${e=>e.transparent&&!e.error?0:1};
  max-width: ${e=>e.transparent&&!e.error?0:"none"};
  overflow: hidden;
`,c6=({maxLength:e,visibilityThreshold:a=.8,inputRef:l,...i})=>{const[u,c]=v.useState(0);return v.useEffect(()=>{const d=setInterval(()=>{const h=l.current;h&&c(h.value.length)},250);return()=>clearInterval(d)},[l]),u>=e*a?N.jsxs(s6,{...i,error:u>=e,transparent:u<e*a,children:[u," / ",e]}):null},Lm=k.label`
  display: block;
  text-align: left;
  ${Ge["Body/Body 2 Short"]}
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-focus-within] & {
    color: ${e=>e.disabled?"":`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};
  }
  [data-required-within] &:after {
    content: ' *';
    color: var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }
  margin-bottom: 8px;
`;Lm.displayName="Label";const px=k.div``,f6=re`
  flex-direction: row;
  align-items: center;

  ${Lm} {
    margin: 0 8px 0 0;
  }

  ${px} {
    flex: 1 1 auto;
  }
`,d6=k.div`
  display: flex;
  overflow: hidden;
  ${e=>e.$displayInline?f6:"flex-direction: column;"}
`,h6=k.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${mx}
`,m6=k.div`
  position: relative;
  text-align: left;
`,p6=re`
  color: transparent;
`,g6=k(Lm)`
  ${e=>e.$skeleton&&p6};
`,y6=re`
  visibility: hidden;
`,v6=k.div`
  display: flex;
  justify-content: space-between;
  ${e=>e.$skeleton&&y6};
`,b6=k.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${Ge["Body/Body 2 Short"]}

  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});

  [data-disabled] & {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-status='error'] & {
    color: var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-status='success'] & {
    color: var(--admiral-color-Success_Success50Main, ${e=>e.theme.color["Success/Success 50 Main"]});
  }
`,x6=k(c6)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,Hm=v.forwardRef(({children:e,maxLength:a,inputRef:l,displayCharacterCounter:i=!0,characterCounterVisibilityThreshold:u=.8,...c},d)=>{const h=v.useRef(null),[p,m]=v.useState(!1),{className:g,style:y,displayInline:b,status:w,extraText:S,label:$,required:E,disabled:T,id:C,skeleton:M=!1,...z}=c,[_]=v.useState(Eu()),j={className:g,style:y,...z},V={htmlFor:C??_,children:$,required:E,disabled:T};return v.useEffect(()=>{const K=()=>{m(!0)},q=()=>{m(!1)},Z=h.current;return Z&&(Z.addEventListener("focusin",K),Z.addEventListener("focusout",q)),()=>{Z&&(Z.removeEventListener("focusin",K),Z.removeEventListener("focusout",q))}},[]),N.jsxs(d6,{...j,$displayInline:b,"data-status":w,"data-focus-within":p?"":void 0,"data-required-within":E?"":void 0,"data-disabled":T?"":void 0,"data-read-only":!!c.readOnly||void 0,ref:kr(h,d),children:[V.children&&N.jsxs(m6,{children:[M&&N.jsx(h6,{}),N.jsx(g6,{$skeleton:M,...V})]}),N.jsxs(px,{children:[e,N.jsxs(v6,{$skeleton:M,children:[S&&N.jsx(b6,{children:S}),i&&l&&a!==void 0&&N.jsxs(N.Fragment,{children:[N.jsx("div",{}),N.jsx(x6,{maxLength:a,visibilityThreshold:u,inputRef:l})]})]})]})]})});Hm.displayName="Field";function Zh(e,a){return e.value!==a.value||e.selectionStart!==a.selectionStart||e.selectionEnd!==a.selectionEnd}function pl(e,a){var c;const{value:l=e.value,selectionStart:i,selectionEnd:u}=a;if(Zh(e,{value:l,selectionStart:i,selectionEnd:u})){const d=(c=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"))==null?void 0:c.set;let h;d==null||d.call(e,l),typeof i=="number"&&typeof u=="number"&&e.setSelectionRange(i,u),typeof Event=="function"?h=new Event("input",{bubbles:!0}):(h=document.createEvent("Event"),h.initEvent("input",!0,!0)),e.dispatchEvent(h)}}var Yv;function Kh(){return Kh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Kh.apply(null,arguments)}var S6=function(e){return v.createElement("svg",Kh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Yv||(Yv=v.createElement("path",{fill:"#74767B",d:"M21.7 10.04c.29.2.38.6.18.9-.5.75-1.14 1.57-1.92 2.36l1.84 1.84c.25.25.25.66 0 .91a.64.64 0 0 1-.92 0l-1.87-1.86c-.93.8-2.01 1.51-3.22 2.02l1.03 2.49a.65.65 0 0 1-1.2.5l-1.06-2.56a9.7 9.7 0 0 1-5.13.01L8.37 19.2a.65.65 0 0 1-1.2-.5l1.03-2.47c-1.25-.52-2.32-1.25-3.23-2.04l-1.86 1.86a.64.64 0 0 1-.92 0 .646.646 0 0 1 0-.91l1.84-1.85c-.8-.83-1.43-1.67-1.9-2.34-.2-.29-.13-.7.16-.9.3-.21.7-.13.91.16 1.46 2.1 4.34 5.48 8.8 5.48 4.03 0 7.14-2.98 8.79-5.47.2-.3.61-.38.91-.18"})))},Gv;function Wh(){return Wh=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},Wh.apply(null,arguments)}var E6=function(e){return v.createElement("svg",Wh({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Gv||(Gv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M2.43 10.68C3.86 8.65 7.11 5 12 5c4.88 0 8.13 3.65 9.56 5.68.56.8.56 1.83 0 2.63C20.13 15.34 16.88 19 12 19c-4.89 0-8.14-3.66-9.57-5.69-.56-.8-.56-1.83 0-2.63M6.29 12c0 3.14 2.56 5.7 5.71 5.7 3.14 0 5.7-2.56 5.7-5.7 0-3.15-2.56-5.71-5.7-5.71-3.15 0-5.71 2.56-5.71 5.71m14.21-.57c-.53-.74-1.27-1.66-2.21-2.51.45.93.71 1.97.71 3.08 0 1.1-.26 2.14-.71 3.07.94-.85 1.68-1.77 2.21-2.51.24-.35.24-.78 0-1.13m-17.01 0c.53-.74 1.27-1.66 2.21-2.51-.45.93-.7 1.97-.7 3.08 0 1.1.25 2.14.7 3.07-.94-.85-1.68-1.77-2.21-2.51a.98.98 0 0 1 0-1.13M12 9.7c0-.39-.32-.71-.7-.62A3.002 3.002 0 0 0 12 15a3 3 0 0 0 2.91-2.31c.09-.38-.23-.69-.62-.69h-1c-.71 0-1.29-.59-1.29-1.3z"})))};function w6({icon:e,...a}){return N.jsx(e,{...a})}const Jh=k(w6)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  cursor: pointer;

  [data-loading] &&& {
    pointer-events: none;
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    }
  }

  &:hover *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
  }
`,$6=re`
  width: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,_6=k.div`
  position: relative;
  container-type: inline-size;
  ${$6};

  & svg {
    ${e=>e.$svgMixin||""}
  }
`,Pm=({dimension:e="m",inverse:a=!1,svgMixin:l,...i})=>N.jsx(_6,{$dimension:e,$svgMixin:l,role:"alert","aria-live":"assertive",...i,children:N.jsx(Wb,{$inverse:a})});Pm.displayName="Spinner";const ou=e=>!!e&&(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth),Ih=e=>{switch(e.$dimension){case"xl":default:return 24;case"s":return 20}},uu=e=>{switch(e.$dimension){case"xl":default:return 16;case"s":return 12}},N6=re`
  padding-right: ${e=>uu(e)+(Ih(e)+8)*(e.$iconsAfterCount??0)}px;
  padding-left: ${e=>uu(e)+(Ih(e)+8)*(e.$iconsBeforeCount??0)}px;
`,T6=re`
  background-color: var(--admiral-color-Neutral_Neutral10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  border-color: transparent;
`,R6=re`
  ${({$status:e,theme:a})=>{if(!e)return`var(--admiral-color-Neutral_Neutral40, ${a.color["Neutral/Neutral 40"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error60Main, ${a.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${a.color["Success/Success 50 Main"]})`}}}
`,xi=k.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${R6};
  ${e=>e.disabled&&"border-color: transparent;"};
`,M6=re`
  border-color: ${({$status:e,theme:a})=>{if(!e)return`var(--admiral-color-Neutral_Neutral60, ${a.color["Neutral/Neutral 60"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error70, ${a.color["Error/Error 70"]})`;case"success":return`var(--admiral-color-Success_Success60, ${a.color["Success/Success 60"]})`}}};
`,O6=re`
  border: 2px solid
    ${({$status:e,theme:a})=>{if(!e)return`var(--admiral-color-Primary_Primary60Main, ${a.color["Primary/Primary 60 Main"]})`;switch(e){case"error":return`var(--admiral-color-Error_Error60Main, ${a.color["Error/Error 60 Main"]})`;case"success":return`var(--admiral-color-Success_Success50Main, ${a.color["Success/Success 50 Main"]})`}}};
`,C6=re`
  &:focus-within:not(:disabled) > ${xi} {
    ${e=>e.disabled||e.readOnly?"border-color: transparent":e.$isLoading?"":O6}
  }

  &:hover:not(:focus-within) > ${xi} {
    ${e=>e.$isLoading?"":e.disabled||e.readOnly?"transparent":M6};
  }
`,A6=re`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,D6=k.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${uu}px;

  ${e=>e.$dimension==="s"?Ge["Body/Body 2 Long"]:Ge["Body/Body 1 Long"]}

  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});

  &&&:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:disabled::placeholder {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }

  [data-disable-copying] & {
    user-select: none;
    &::selection {
      background-color: transparent;
    }
  }

  background-color: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});

  &&&:user-invalid + ${xi} {
    border: 1px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  &&&:user-invalid:hover:not(:disabled) + ${xi} {
    border: 1px solid var(--admiral-color-Error_Error70, ${e=>e.theme.color["Error/Error 70"]});
  }

  &&&:user-invalid:focus:not(:disabled) + ${xi} {
    border: 2px solid var(--admiral-color-Error_Error60Main, ${e=>e.theme.color["Error/Error 60 Main"]});
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${T6}
  }

  [data-loading] &&&,
  &&&:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  ${N6}
  ${A6}
`,gx=k.div`
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  align-items: center;

  & svg {
    border-radius: var(--admiral-border-radius-Medium, ${e=>Ui(e.theme.shape)});
    display: block;
    width: ${Ih}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    }
  }
`,z6=k(gx)`
  left: 0;

  padding-left: ${uu}px;

  & > *:not(:first-child) {
    margin-right: 8px;
  }
`,B6=k(gx)`
  right: 0;

  padding-right: ${uu}px;

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,j6=k(u6)`
  ${C6}
  ${e=>e.disabled?"cursor: not-allowed;":e.$isLoading?"cursor: default;":""}
`;function L6(e){return e||{}}const Um=v.forwardRef(({dimension:e="m",type:a,displayClearIcon:l,isLoading:i,status:u,handleInput:c=L6,containerRef:d,icons:h,iconsBefore:p,iconsAfter:m,children:g,className:y,style:b,placeholder:w,skeleton:S=!1,showTooltip:$=!0,disableCopying:E,...T},C)=>{const M=v.useRef(null),z=d||v.useRef(null),_=v.Children.toArray(m||h),j=v.Children.toArray(p),[V,K]=v.useState(!1),[q,Z]=v.useState(!1),[Se,Ce]=v.useState(T.defaultValue??void 0),ge=T.value??Se;v.useEffect(()=>{ou(M.current)?K(!0):K(!1)},[q,K]),v.useLayoutEffect(()=>{function ue(){document.activeElement!==M.current&&Z(!0)}function ie(){Z(!1)}const O=z.current;if(O)return O.addEventListener("mouseenter",ue),O.addEventListener("mouseleave",ie),O.addEventListener("mousedown",ie),()=>{O.removeEventListener("mouseenter",ue),O.removeEventListener("mouseleave",ie),O.removeEventListener("mousedown",ie)}},[Z]);const[Ee,xe]=v.useState(!1);if(!T.readOnly&&a==="password"){const ue=Ee?E6:S6;_.push(N.jsx(Jh,{icon:ue,onClick:()=>{xe(!Ee)},"aria-hidden":!0},"eye-icon"))}!T.readOnly&&l&&ge&&_.unshift(N.jsx(Jh,{icon:Xb,onMouseDown:ue=>{ue.preventDefault()},onClick:()=>{M.current&&pl(M.current,{value:""})},"aria-hidden":!0},"clear-icon")),i&&_.unshift(N.jsx(Pm,{dimension:e==="s"?"ms":"m"},"loading-icon"));const le=j.length,he=_.length;return v.useLayoutEffect(()=>{const ue=c(null);function ie(O){const{value:L,selectionStart:X,selectionEnd:W}=this,ee=c({value:L,selectionStart:X,selectionEnd:W},O);w&&!Zh(ue,ee)?pl(this,{...ee,value:""}):pl(this,ee)}if(a!=="date"&&M.current){const O=M.current;O.addEventListener("input",ie);const{value:L,selectionStart:X,selectionEnd:W}=O,ee=c({value:L,selectionStart:X,selectionEnd:W});return w&&!Zh(ue,ee)?pl(O,{...ee,value:""}):pl(O,ee),()=>{O.removeEventListener("input",ie)}}},[c,w]),v.useEffect(()=>{function ue(){this.selectionEnd=this.selectionStart}if(E&&M.current){const ie=M.current;return ie.addEventListener("select",ue,!0),()=>ie.removeEventListener("select",ue,!0)}},[E]),N.jsxs(N.Fragment,{children:[N.jsxs(j6,{className:y,style:b,$dimension:e,ref:z,disabled:T.disabled,readOnly:T.readOnly,$isLoading:i,$status:u,"data-disabled":!!T.disabled||void 0,"data-read-only":!!T.readOnly||void 0,"data-loading":!!i||void 0,"data-status":u,$skeleton:S,"data-disable-copying":!!E||void 0,children:[N.jsx(D6,{ref:kr(C,M),...T,onChange:ue=>{var ie;Ce(ue.currentTarget.value),(ie=T.onChange)==null||ie.call(T,ue)},placeholder:w,$dimension:e,$iconsAfterCount:he,$iconsBeforeCount:le,type:a==="password"&&Ee?"text":a}),N.jsx(xi,{$status:u,disabled:T.disabled||T.readOnly}),le>0&&N.jsx(z6,{disabled:T.disabled,$dimension:e,children:j}),he>0&&N.jsx(B6,{disabled:T.disabled,$dimension:e,children:_}),g]}),$&&q&&V&&N.jsx(xu,{renderContent:()=>{var ue;return((ue=M==null?void 0:M.current)==null?void 0:ue.value)||""},targetElement:z.current})]})});Um.displayName="TextInput";var Vv;function em(){return em=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},em.apply(null,arguments)}var H6=function(e){return v.createElement("svg",em({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Vv||(Vv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M8.14 1.94c.35 0 .65.3.65.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .64.3.64.65v1.39h2.56V2.59c0-.35.29-.65.65-.65.35 0 .65.3.65.65v1.39h.5c1.64 0 3 1.34 3 3v10.13c0 1.67-1.34 3-3 3H7c-1.67 0-3-1.33-3-3V6.98c0-1.66 1.33-3 3-3h.48V2.59c0-.35.3-.65.66-.65m-.66 4.91V5.28H7c-.94 0-1.71.76-1.71 1.7v2.36H18.7V6.98c0-.94-.77-1.7-1.7-1.7h-.5v1.57c0 .36-.3.65-.65.65-.36 0-.65-.29-.65-.65V5.28h-2.56v1.57c0 .36-.29.65-.64.65-.36 0-.65-.29-.65-.65V5.28H8.79v1.57a.655.655 0 0 1-1.31 0m11.22 3.8H5.29v6.46c0 .94.77 1.7 1.71 1.7h10c.93 0 1.7-.76 1.7-1.7zM7.52 13.99c0-.74.61-1.34 1.35-1.34h2.33c.74 0 1.34.6 1.34 1.34v1.32c0 .75-.6 1.36-1.34 1.36H8.87c-.74 0-1.35-.61-1.35-1.36zm1.32-.03c-.01.01-.01.02-.01.03v1.32c0 .02 0 .03.01.04s.02.01.03.01h2.33c.01 0 .02 0 .03-.01s.02-.02.02-.04v-1.32c0-.01-.01-.02-.02-.03s-.02-.01-.03-.01H8.87c-.01 0-.02 0-.03.01"})))};function Qv(e,a,l,i){return e.slice(0,a)+i+e.slice(a+Math.abs(l))}const ur="__.__.____",P6=e=>`${e.substring(0,2).replace(/\D/g,"_").padEnd(2,"_")}.${e.substring(2,4).replace(/\D/g,"_").padEnd(2,"_")}.${e.substring(4,8).replace(/\D/g,"_").padEnd(4,"_")}`;function Ko(e){var h;if(e===null)return{value:"__.__.____",selectionStart:0,selectionEnd:0};const a=e.selectionStart||0;let l=e.value||"";const i=l.length-10;if(l.replace(/\d/g,"_")==="__.__.____")return e;if(i<0){l=Qv(l,a,0,"__.__.____".substr(a,-i));const p=a>0&&l.charAt(a-1)==="."?a-1:a;return{...e,value:l,selectionStart:p,selectionEnd:p}}let u=0;l.charAt(a-1)==="."&&(u=-1),l.charAt(a)==="."&&(u=/\d/.test(l.charAt(a-1))?1:-1);const c=Qv(l,a+u,i,"").replace(/[^\d_]/g,"");l=P6(c);let d=l.charAt(a)==="."?a+1:a;return((h=e.value)==null?void 0:h.charAt(e.selectionStart||0))==="."&&(d+=1),{...e,value:l,selectionStart:d,selectionEnd:d}}function yx(e){return e instanceof Date&&!isNaN(e.getTime())}function U6(e=""){const[a,l,i]=e.split("."),u=new Date(`${i}-${l}-${a}`);return u.setDate(u.getUTCDate()),u.setHours(0,0,0,0),yx(u)?u:null}function k6(e="",a,l=" - "){const i=e.split(l).map(U6);return a?i:i[0]}const Uo=ur+" - "+ur;function F6(e){if(!e||!e.value)return{value:Uo,selectionStart:0,selectionEnd:0};const a=e.value||Uo;if(a.replace(/\d/g,"_")===Uo)return e;const l=e.selectionStart||0,i=a.length-Uo.length;if(ur.length<l+1&&ur.length+3>l){const c=a.length<Uo.length?ur.length:ur.length+3;return{value:Ko({...e,value:a.substring(0,ur.length)}).value+" - "+a.slice(-10),selectionStart:c,selectionEnd:c}}if(l<=ur.length){const c=Ko({...e,value:a.length>ur.length?a.substring(0,ur.length+Math.max(i,-ur.length)):a}),d=Ko({value:a.length>ur.length?a.substring(a.length-ur.length,a.length):""});return{value:c.value+" - "+d.value,selectionStart:c.selectionStart,selectionEnd:c.selectionEnd}}const u=Ko({value:a.slice(-10-i),selectionStart:l-(ur.length+3),selectionEnd:l-(ur.length+3)});return{value:a.substring(0,ur.length)+" - "+u.value,selectionStart:(u.selectionStart||0)+ur.length+3,selectionEnd:(u.selectionEnd||0)+ur.length+3}}const q6=k(Um)`
  min-width: 150px;
`;function Y6(e,a=" - "){return e.map(l=>new Date(l)).map(l=>yx(l)?l.toLocaleDateString("ru",{timeZone:"UTC"}).replace(/[^ -~]/g,""):"__.__.____").join(a)}function G6(e){const a=e.data;a&&a.replace(/[^\d_.]/g,"").length===0&&(e.preventDefault(),e.stopPropagation())}const vx=v.forwardRef(({type:e="date",defaultIsCalendarOpen:a=!1,formatter:l=Y6,parser:i=k6,minDate:u,maxDate:c,validator:d,filterDate:h,alignDropdown:p="auto",alignSelf:m="auto",currentActiveView:g,currentActiveViewImportant:y,onMonthSelect:b,onYearSelect:w,onViewEnter:S,onViewLeave:$,onViewMonthSelect:E,onViewYearSelect:T,selected:C,viewDate:M,onViewDateChange:z,calendarRef:_,icon:j=H6,icons:V,iconsAfter:K,skeleton:q=!1,dropContainerCssMixin:Z,dropContainerClassName:Se,dropContainerStyle:Ce,isVisible:ge,onVisibilityChange:Ee=()=>{},highlightSpecialDay:xe,locale:le,onDateIncreaseDecrease:he,dimension:ue="m",onBeforeInput:ie=G6,renderBottomPanel:O,...L},X)=>{const W={minDate:u,maxDate:c,validator:d,filterDate:h,currentActiveView:g,currentActiveViewImportant:y,onMonthSelect:b,onYearSelect:w,onViewEnter:S,onViewLeave:$,onViewMonthSelect:E,onViewYearSelect:T,selected:C,viewDate:M,onViewDateChange:z,highlightSpecialDay:xe,locale:le,onDateIncreaseDecrease:he},ee=e==="date-range",fe=L.handleInput||(ee?F6:Ko),[pe,ye]=v.useState(null),me=v.useRef(null),ve=v.useRef(null),[Ae,Ue]=v.useState(a),qe=ge??Ae,Ve=ct=>{Ue(ct),Ee(ct)},[Lt,Xt,dt]=Array.isArray(pe)?pe:[void 0,void 0,pe],Ct=()=>{var gt,nt;const ct=i((gt=me.current)==null?void 0:gt.value,ee);ye(ct),qe||((nt=me.current)==null||nt.focus()),Ve(!qe)},At=v.Children.toArray(K||V);return L.readOnly||At.push(N.jsx(Jh,{icon:j,onClick:Ct,tabIndex:0})),N.jsx(q6,{dimension:ue,...L,ref:kr(X,me),handleInput:fe,onBeforeInput:ie,iconsAfter:At,containerRef:ve,skeleton:q,children:qe&&!q&&N.jsxs(Mc,{targetElement:me.current,alignSelf:p||m,onClickOutside:ct=>{var gt;ct.target&&((gt=ve.current)!=null&&gt.contains(ct.target))||Ve(!1)},dropContainerCssMixin:Z,className:Se,style:Ce,children:[N.jsx(V6,{...W,ref:_,selected:dt,startDate:Lt,endDate:Xt,onChange:ct=>{if(ye(ct),me.current){if(!ct)return void pl(me.current,{value:""});const gt=Array.isArray(ct)?ct:[ct],nt=gt.map(wt=>wt?function(ft){return new Date(Date.UTC(ft.getFullYear(),ft.getMonth(),ft.getDate())).toISOString()}(wt):""),Et=l(nt);pl(me.current,{value:Et}),ee&&gt.includes(null)||Ve(!1)}},range:ee}),O&&O()]})})}),V6=k(cx)`
  box-shadow: none;
  border-radius: 0;
`;vx.displayName="DateInput";const km=re`
  height: ${({$dimension:e})=>e==="m"?"32px":"24px"};
`,Q6=re`
  width: ${({$dimension:e})=>e==="m"?"32px":"24px"};
`,tm=re`
  height: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,X6=re`
  height: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,rm=re`
  width: ${({$dimension:e})=>e==="m"?"20px":"16px"};
`,Z6=re`
  padding: ${({$dimension:e})=>e==="m"?"6px 12px":"4px 8px"};
`,K6=re`
  padding: ${({$dimension:e})=>e==="m"?"5px 11px":"3px 7px"};
`,W6=re`
  ${({$appearance:e})=>e==="filled"?Z6:K6}
`,J6=re`
  &:hover {
    color: ${({theme:e,$appearance:a,$selected:l})=>l?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:a!=="filled"||l?`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`};
  }
`,I6=re`
  ${({$dimension:e})=>e==="s"?Ge["Caption/Caption 1"]:Ge["Body/Body 2 Long"]}
  color: ${({theme:e,$appearance:a,$disabled:l,$selected:i})=>l&&!i?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:i||i&&l?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:a==="filled"?`var(--admiral-color-Neutral_Neutral90, ${e.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};

  ${e=>!e&&J6}
`,eT=re`
  &:hover {
    ${({theme:e,$appearance:a,$selected:l,$withCloseIcon:i})=>l?`background-color: var(--admiral-color-Primary_Primary70, ${e.color["Primary/Primary 70"]});`:a==="filled"?`background-color: var(--admiral-color-Opacity_Neutral12, ${e.color["Opacity/Neutral 12"]});`:i?void 0:`background-color: var(--admiral-color-Opacity_Hover, ${e.color["Opacity/Hover"]});`};
    ${e=>e.$selected&&`
      border-color: var(--admiral-color-Primary_Primary70, ${e.theme.color["Primary/Primary 70"]});
    `}
  }
  &:active {
    ${({theme:e,$appearance:a,$selected:l,$withCloseIcon:i})=>l?`background-color: var(--admiral-color-Primary_Primary80, ${e.color["Primary/Primary 80"]});`:a==="filled"?`background-color: var(--admiral-color-Opacity_Neutral16, ${e.color["Opacity/Neutral 16"]});`:i?void 0:`background-color: var(--admiral-color-Opacity_Press, ${e.color["Opacity/Press"]});`};
    ${e=>e.$selected&&`
      border-color: var(--admiral-color-Primary_Primary80, ${e.theme.color["Primary/Primary 80"]});
    `}
  }
`,tT=re`
  background-color: ${({theme:e,$appearance:a,$selected:l,$disabled:i})=>l&&!i?`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`:l&&i?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:a==="filled"?`var(--admiral-color-Opacity_Neutral8, ${e.color["Opacity/Neutral 8"]})`:"transparent"};

  border: ${({theme:e,$appearance:a,$disabled:l})=>a==="filled"?"none":l?`1px solid var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:`1px solid var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};

  border-radius: 16px;

  ${e=>e.$clickable&&!e.$disabled&&eT}

  &:focus-visible {
    outline: 0;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
      border-radius: 20px;
      content: '';
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      pointer-events: none;
    }
  }
`,rT=k.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  max-width: 190px;
  user-select: none;
  & > * {
    pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  }
  cursor: ${({$defaultChip:e,$disabled:a,$withTooltip:l})=>!e&&!l||a?a?"not-allowed":"default":"pointer"};
  ${tT}
  ${km}
  ${e=>e.$withCloseIcon?`padding-inline-start: ${(e.$dimension==="s"?8:12)-(e.$appearance==="outlined"?1:0)}px;`:W6}
  ${e=>e.$withBadge&&!e.$withCloseIcon?`padding-inline-end: ${(e.$dimension==="s"?4:6)-(e.$appearance==="outlined"?1:0)}px;
         padding-inline-start: ${(e.$dimension==="s"?8:12)-(e.$appearance==="outlined"?1:0)}px;`:""}
  ${I6}
`,bx=re`
  display: flex;
  align-items: center;
  justify-content: center;
`,aT=k.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-flex;

  ${e=>e.$withCloseIcon&&bx}
  ${e=>e.$withCloseIcon?km:X6}
  & svg {
    ${tm}
    ${rm}
    & *[fill^='#'] {
      fill: ${({theme:e,$appearance:a,$disabled:l,$selected:i})=>i?`var(--admiral-color-Special_StaticWhite, ${e.color["Special/Static White"]})`:l?`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`:a==="filled"?`var(--admiral-color-Neutral_Neutral50, ${e.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};
    }
  }
`,nT=k.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
`,lT=k.div`
  display: inline-block;
  margin-inline-end: 8px;
`,iT=k.div`
  display: inline-block;
  margin-inline-start: ${e=>e.$withCloseIcon?"2px":"8px"};
`,Xv=k.div`
  ${e=>e.$withCloseIcon&&bx}
  ${e=>e.$withCloseIcon?km:tm}
  ${e=>e.$withCloseIcon?Q6:rm}
  & > svg {
    ${tm}
    ${rm}
  }
`,oT=k(Ac)`
  margin-inline-start: ${({dimension:e})=>e==="s"?"6px":"8px"};
`,uT=k(Z_)`
  //дополнительный отступ в 2px, чтобы кружок ховера не стоял вплотную к элементу слева
  margin-inline-start: ${e=>e.dimension==="s"?"6px":"8px"};
  ${e=>e.appearance==="primary"?e.dimension==="s"?"margin-inline-end: 3px":"margin-inline-end: 5px":""};
`,sT=()=>"",xx=v.forwardRef(({dimension:e="m",disabled:a,appearance:l="outlined",selected:i,onClose:u,children:c,renderContentTooltip:d=sT,iconBefore:h,iconAfter:p,iconStart:m,iconEnd:g,badge:y,...b},w)=>{const S=i!==void 0,[$,E]=v.useState(!1),[T,C]=v.useState(!1),M=!!u,z=!!y,_=v.useMemo(()=>i&&!a?"whiteBlue":a?i||l==="filled"?"whiteDisable":"lightDisable":l==="filled"?"white":"info",[l,i,a]),j=v.useRef(null),V=v.useRef(null);return v.useEffect(()=>{V.current&&ou(V.current)!==$&&E(ou(V.current))},[T,E]),v.useLayoutEffect(()=>{function K(){C(!0)}function q(){C(!1)}const Z=j.current;if(Z)return Z.addEventListener("mouseenter",K),Z.addEventListener("mouseleave",q),Z.addEventListener("focus",K),Z.addEventListener("blur",q),()=>{Z.removeEventListener("mouseenter",K),Z.removeEventListener("mouseleave",q),Z.removeEventListener("focus",K),Z.removeEventListener("blur",q)}},[C]),N.jsxs(N.Fragment,{children:[N.jsx(rT,{...b,ref:kr(w,j),$dimension:e,$disabled:a,$appearance:l,$selected:i,$defaultChip:S,$withCloseIcon:M,$withTooltip:$,$withBadge:z,onKeyDown:K=>{var q,Z;if(!a){const Se=se.getCode(K);Se!==se.Enter&&Se!==se[" "]||(M?u==null||u():(q=b.onClick)==null||q.call(b,K)),(Z=b.onKeyDown)==null||Z.call(b,K)}},tabIndex:b.tabIndex??(a?-1:0),$clickable:!!b.onClick,children:N.jsxs(aT,{$dimension:e,$disabled:a,$appearance:l,$selected:i,$withCloseIcon:M,children:[(m||h)&&N.jsx(lT,{children:N.jsx(Xv,{$dimension:e,$withCloseIcon:M,children:m||h})}),N.jsx(nT,{ref:V,children:c}),y!==void 0&&N.jsx(oT,{"data-badge":!0,dimension:e,appearance:_,children:y}),!u&&(g||p)&&N.jsx(iT,{$dimension:e,children:N.jsx(Xv,{$dimension:e,$withCloseIcon:M,children:g||p})}),u&&N.jsx(uT,{dimension:e==="m"?"mBig":"s",highlightFocus:!1,onMouseDown:K=>{K.preventDefault(),u==null||u(b.id)},disabled:a,tabIndex:-1,appearance:l==="outlined"?"primary":"secondary"})]})}),T&&$&&N.jsx(xu,{targetElement:j.current,renderContent:d})]})});xx.displayName="Chips";const cT=k.label`
  display: inline-flex;
  align-items: flex-start;
  position: relative;
  box-sizing: content-box;
  padding: 0;
  user-select: none;

  cursor: ${e=>e.disabled?"not-allowed":e.readOnly?"default":"pointer"};

  ${e=>e.$dimension==="s"?Ge["Body/Body 2 Short"]:Ge["Body/Body 1 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`};

  fieldset[data-dimension='s'] && {
    ${Ge["Body/Body 2 Short"]};
  }
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  ${e=>e.readOnly?"pointer-events: none":""};
`,fT=k.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 2px;
  margin-bottom: 2px;
  margin-left: ${"8px"};
  ${e=>e.$dimension==="s"?Ge["Body/Body 2 Short"]:Ge["Body/Body 1 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`};
  fieldset:disabled && {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
  fieldset[data-dimension='s'] && {
    ${Ge["Body/Body 2 Short"]}
  }
`,dT=k.div`
  margin-top: 4px;
  ${e=>e.$dimension==="s"?Ge["Caption/Caption 1"]:Ge["Body/Body 2 Short"]}
  color: ${e=>e.disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};

  fieldset[data-dimension='s'] && {
    ${Ge["Caption/Caption 1"]}
  }
`,hT=k(hx)`
  margin-top: 2px;
`,su=v.forwardRef(({children:e,disabled:a=!1,readOnly:l=!1,hovered:i,dimension:u="m",error:c,indeterminate:d=!1,extraText:h,className:p,id:m,name:g,style:y,...b},w)=>{const S=v.useMemo(()=>m||Eu(),[m]),$={"data-field-id":S,"data-field-name":g};return Pb(b,$),N.jsxs(cT,{className:p,$dimension:u,disabled:a,readOnly:l,style:y,...$,onClick:E=>{E.target.tagName!=="INPUT"&&E.stopPropagation()},children:[N.jsx(hT,{...b,ref:w,disabled:a,readOnly:l,type:"checkbox",indeterminate:d,onKeyDown:E=>{var T;l&&se.getCode(E)===se[" "]&&E.preventDefault(),(T=b.onKeyDown)==null||T.call(b,E)},"data-hovered":i,hovered:i,dimension:u,id:S,name:g,error:c}),e&&N.jsxs(fT,{$dimension:u,disabled:a,children:[e,h&&N.jsx(dT,{disabled:a,$dimension:u,children:h})]})]})});su.displayName="CheckboxField";const am=v.forwardRef((e,a)=>{const{className:l,displayInline:i,status:u,required:c,extraText:d,label:h,id:p=Eu(),name:m,disabled:g,skeleton:y,...b}=e,w={className:l,extraText:d,status:u,required:c,label:h,id:p,skeleton:y,"data-field-id":p,"data-field-name":m,displayInline:i,disabled:g};K$(b,w),Pb(b,w);const S={ref:a,id:p,name:m,"aria-required":c,status:u,disabled:g,skeleton:y,...b};return N.jsx(Hm,{...w,children:N.jsx(vx,{...S})})});am.displayName="DateField";function mT(e,a){let l=setTimeout(()=>{});return function(...i){clearTimeout(l),l=setTimeout(()=>e.apply(i),a)}}const Sx=2,pT=48,gT=40,Ps=20,Us=24,yT="10px 12px",vT="12px 16px",ks=20,Fs=16,Ex=k.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -${Sx}px 0 0
    ${e=>e.$showUnderline?`var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]})`:"transparent"};
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;Ex.displayName="HorizontalTabsContainer";const bT=re`
  background-color: ${e=>e.$appearance==="secondary"?`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Primary_Primary60Main, ${e.theme.color["Primary/Primary 60 Main"]})`};
`,wx=k.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: ${e=>e.$left};
  width: ${e=>e.$width};
  height: ${Sx}px;
  transition: ${e=>e.$transition?"all 0.2s ease-out":"unset"};

  ${bT};
`;wx.displayName="ActiveHorizontalTabSelector";const xT=(e,a)=>{var l;return((l=e.find(i=>i.tabId===a))==null?void 0:l.width)||0},ST=(e,a)=>{let l=0,i=0;for(;e[i].tabId!==a&&i<e.length;)l+=e[i].width,i++;return l},ET=(e,a)=>{if(!a||!e||e.length===0)return{left:0,width:0};const l=xT(e,a);return{left:ST(e,a),width:l}},wT=(e,a)=>{const l=[];if(a)for(let i=0;i<a.length;i++){const u=a[i].getBoundingClientRect().width;l.push({tabId:e[i],width:u})}return l},$x=({dimension:e="l",showUnderline:a,selectedTabId:l,defaultSelectedTabId:i,onSelectTab:u,tabsId:c,renderTab:d,tabIsDisabled:h,...p})=>{const m=v.useRef(null),[g,y]=v.useState(i),b=l||g,w=_=>{h(_)||(y(_),u==null||u(_))},S=v.useMemo(()=>c.map(_=>d(_,_===b,w)),[c,d,e]),[$,E]=v.useState([]);v.useEffect(()=>{if(m.current){const _=wT(c,m.current.children);E(_)}},[m,S]);const[T,C]=v.useState(0),[M,z]=v.useState(0);return v.useEffect(()=>{(()=>{const{left:_,width:j}=ET($,l);z(j),C(_)})()},[b,$]),N.jsxs(Ex,{...p,ref:m,$showUnderline:a,children:[S,N.jsx(wx,{$left:`${T}px`,$width:`${M}px`,$transition:!0})]})};$x.displayName="HorizontalTabs";const _x=k.button`
  box-sizing: border-box;
  appearance: none;
  border: none;
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  width: ${e=>e.$width};
  height: ${({$dimension:e})=>e==="m"?gT:pT}px;
  padding: ${({$dimension:e})=>e==="m"?yT:vT};
  background: transparent;
  color: ${e=>e.$selected?`var(--admiral-color-Neutral_Neutral90, ${e.theme.color["Neutral/Neutral 90"]})`:`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};
  ${({$dimension:e})=>e==="m"?Ge["Body/Body 2 Long"]:Ge["Body/Body 1 Long"]}
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, ${e=>e.theme.color["Opacity/Press"]});
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
    cursor: not-allowed;
  }

  &:focus-visible {
    border-radius: 0;
    outline: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]}) solid 2px;
    outline-offset: -2px;
  }
`;_x.displayName="BaseTab";const Nx=v.forwardRef(({dimension:e="l",children:a,disabled:l,selected:i,onSelectTab:u,tabId:c,id:d,...h},p)=>{const[m]=v.useState(Eu());return N.jsx(_x,{...h,role:"tab",type:"button",id:u&&d?d:m,ref:p,"data-tabid":c,disabled:l,$dimension:e,$selected:i,$width:"fit-content",onClick:g=>{const y=g.currentTarget.dataset.tabid||"";g.currentTarget.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"}),u==null||u(y)},children:a})});Nx.displayName="HorizontalTab";const $T=(e,a,l)=>{if(l)return"lightDisable";if(a)switch(e){case"tabPrimary":default:return"info";case"tabSecondary":case"cardTab":return"grey";case"filterTab":return"white"}return"lightInactive"},Fm=({disabled:e=!1,selected:a=!1,tabAppearance:l="primary",...i})=>{const u=$T(l==="secondary"?"tabSecondary":"tabPrimary",a,e);return N.jsx(Ac,{...i,dimension:"s",appearance:u})};k(Fm)`
  margin-left: auto;
`;Fm.displayName="TabBadge";const qm=k.div`
  padding: 0;
  margin: 0;
  width: ${({$dimension:e})=>e==="m"?Ps:Us}px;
  height: ${({$dimension:e})=>e==="m"?Ps:Us}px;
  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: ${e=>e.$disabled?`var(--admiral-color-Neutral_Neutral30, ${e.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${e.theme.color["Neutral/Neutral 50"]})`};
    }
    width: ${({$dimension:e})=>e==="m"?Ps:Us}px;
    height: ${({$dimension:e})=>e==="m"?Ps:Us}px;
  }
`;qm.displayName="TabIcon";const _T=k(qm)`
  width: ${({$dimension:e})=>e==="m"?ks:Fs}px;
  height: ${({$dimension:e})=>e==="m"?ks:Fs}px;
  & svg {
    width: ${({$dimension:e})=>e==="m"?ks:Fs}px;
    height: ${({$dimension:e})=>e==="m"?ks:Fs}px;
  }
`;_T.displayName="FilterTabIcon";const Tx=k.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 4;
  text-align: left;
`;Tx.displayName="TabText";const NT=re`
  ${Dm};
  pointer-events: none;
`,TT=k.span`
  color: ${({$color:e,theme:a,$skeleton:l})=>{const i=`--admiral-color-${e==null?void 0:e.replace("/","_").replaceAll(" ","")}`;return l?"transparent":e?a.color[e]?`var(${i}, ${a.color[e]})`:e:`var(--admiral-color-Neutral_Neutral90, ${a.color[X$]})`}};
  ${e=>e.theme.typography[e.$font]};
  ${e=>e.$cssMixin?e.$cssMixin:""}
  ${e=>e.$skeleton&&NT}
`,Rx=Om(({font:e,color:a,cssMixin:l,skeleton:i,...u},c)=>N.jsx(TT,{ref:c,...u,$font:e,$color:a,$cssMixin:l,$skeleton:i}));Rx.displayName="T";const Zv=k.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`,Kv=k.div`
  width: ${({$dimension:e})=>e=="m"?20:16}px;
  height: ${({$dimension:e})=>e=="m"?20:16}px;
  flex-shrink: 0;
  margin-right: 8px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
`,RT=Su(Oc),MT=k(Kb)`
  margin: 0 4px 0 4px;
`,OT=({dimension:e,options:a,dropContainerCssMixin:l,dropContainerClassName:i,dropContainerStyle:u})=>{const c=v.useMemo(()=>a.map(d=>{const h=Eu();return{id:h,render:p=>d.text.length>40?v.createElement(RT,{renderContent:()=>d.text,dimension:e,...p,key:h,role:"option"},N.jsxs(Zv,{href:d.url,as:d.linkAs,...d.linkProps,children:[d.iconStart&&N.jsx(Kv,{$dimension:e,children:d.iconStart}),d.text.slice(0,37)+"..."]})):v.createElement(Oc,{dimension:e,...p,key:h,role:"option"},N.jsxs(Zv,{href:d.url,as:d.linkAs,...d.linkProps,children:[d.iconStart&&N.jsx(Kv,{$dimension:e,children:d.iconStart}),d.text]}))}}),[a]);return N.jsx(MT,{dimension:e,items:c,dropContainerCssMixin:l,alignSelf:"auto",dropContainerClassName:i,dropContainerStyle:u})},Mx=k(ux)`
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
  flex-shrink: 0;
  margin-left: 4px;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,CT=k.nav`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 800px;
`,AT=k.ol`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  opacity: ${({$opacity:e})=>e};
  flex-wrap: nowrap;
  overflow-x: ${({$mobile:e})=>e?"scroll":"visible"};
  overflow-y: visible;
  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > li {
    margin-left: 4px;
  }
  & > li:first-child,
  & > li[data-overflow] {
    margin-left: 0;
  }
`,DT=k.li`
  display: flex;
  overflow: hidden;
  height: ${({$dimension:e})=>e==="l"?28:24}px;
  max-height: ${({$dimension:e})=>e==="l"?28:24}px;
  width: 100%;
`,zT=k.ol`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;

  & > li {
    margin-left: 4px;
  }
  & > li[data-number='0'],
  & > li:last-child {
    margin-left: 0;
  }
`,BT=k.li`
  display: flex;
  flex: 1;
  order: 0;
`,jT=k.li`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`,LT=re`
  ${({$dimension:e})=>{switch(e){case"s":return Ge["Caption/Caption 1"];case"m":return Ge["Body/Body 2 Short"];default:return Ge["Body/Body 1 Short"]}}}
`,HT=k.li`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  white-space: nowrap;
  ${LT}
`,nm=k.div`
  width: ${({$dimension:e})=>e=="l"?20:16}px;
  height: ${({$dimension:e})=>e=="l"?20:16}px;
  flex-shrink: 0;
  margin-right: 8px;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }
`,Ox=k.span`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
`,PT=Su(k.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`),UT=re`
  &:hover {
    color: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
    ${nm} *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
    }
  }
  &:active {
    color: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
    ${nm} *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary80, ${e=>e.theme.color["Primary/Primary 80"]});
    }
  }
`,kT=k.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});

  ${({$active:e})=>e&&UT}

  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
      border-radius: 4px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${Ox} {
    outline: none;
  }
`,lh=v.forwardRef(({text:e,iconStart:a,url:l="#",linkAs:i,linkProps:u,tabIndex:c,dimension:d="l",active:h=!0,displaySeparator:p=!0,containerPropsConfig:m=b=>b,...g},y)=>{const b=e.length>40,w=d==="l"?20:16,S={ref:y,$dimension:d,...g};return N.jsxs(HT,{...S,...m(S),children:[N.jsx(kT,{...h?{href:l}:{},as:h?i:"span",tabIndex:c,$active:h,...u,children:N.jsxs(Ox,{tabIndex:-1,role:"link",children:[a&&N.jsx(nm,{$dimension:d,children:a}),b?N.jsx(PT,{renderContent:()=>e,children:e.slice(0,37)+"..."}):e]})}),p&&N.jsx(Mx,{width:w,height:w,"aria-hidden":!0})]})}),Cx=({items:e,dimension:a="l",mobile:l,lastBreadcrumbActive:i=!1,dropContainerCssMixin:u,dropContainerClassName:c,dropContainerStyle:d,...h})=>{const p=a==="l"?20:16,m=e.slice(1,e.length-1),g=v.useRef(null),y=v.useRef(null),b=v.useRef(!1),[w,S]=v.useState({0:!0,[e.length-1]:!0}),[$,E]=v.useState(l?1:0);v.useEffect(()=>{b.current||(b.current=!0)},[]),v.useLayoutEffect(()=>{var j;const _=(j=g.current)==null?void 0:j.firstElementChild;if(_&&l){const V=new ResizeObserver(()=>{var K;(K=g.current)==null||K.scrollBy({left:g.current.scrollWidth,behavior:"smooth"})});return V.observe(_),()=>{V.disconnect()}}},[l]),v.useLayoutEffect(()=>{var _;l&&g.current&&(b.current?g.current.scrollBy({left:g.current.scrollWidth,behavior:"smooth"}):(_=g.current)==null||_.scrollBy({left:g.current.scrollWidth}))},[e,l]);const T=_=>{const j={};_.forEach(V=>{const K=V.target.dataset.number;K&&(j[K]=V.isIntersecting&&V.intersectionRatio>.99)}),S(V=>({...V,...j})),E(1)};v.useLayoutEffect(()=>{const _=new IntersectionObserver(T,{root:g.current,threshold:[0,1]});return y.current&&!l&&Array.from(y.current.children).forEach(j=>{_.observe(j)}),()=>_.disconnect()},[l,S,E,e]);const C=v.useCallback(()=>{const _=e[0],j=(_==null?void 0:_.id)||(_==null?void 0:_.text);return e.length>1?N.jsx(lh,{"data-number":0,dimension:a,..._},j):null},[e,a]),M=v.useCallback(()=>{const _=e[e.length-1],j=(_==null?void 0:_.id)||(_==null?void 0:_.text);return e.length>0?N.jsx(lh,{"aria-current":"page","data-number":e.length-1,dimension:a,active:i,displaySeparator:!1,...l?{}:{style:{order:1}},..._},j):null},[e,l,a,i]),z=()=>m.map((_,j)=>{const V=_.id||_.text,K={style:{order:e.length-j-1}};return N.jsx(lh,{"data-number":j+1,tabIndex:w[j+1]?0:-1,dimension:a,...l?{}:K,..._},V)});return N.jsx(CT,{"aria-label":"Breadcrumb",...h,children:N.jsx(AT,{ref:g,$mobile:l,$opacity:$,role:"list",children:N.jsxs(N.Fragment,l?{children:[C(),z(),M()]}:{children:[C(),(()=>{const _=e.filter((j,V)=>!w[V]);return _.length?N.jsxs(jT,{children:[N.jsx(OT,{options:_,dimension:a==="l"?"m":"s",dropContainerCssMixin:u,dropContainerClassName:c,dropContainerStyle:d,"aria-label":""}),N.jsx(Mx,{width:p,height:p,"aria-hidden":!0})]}):null})(),N.jsx(DT,{$dimension:a,"data-overflow":!0,children:N.jsxs(zT,{ref:y,children:[z(),M(),N.jsx(BT,{"aria-hidden":!0})]})})]})})})};Cx.displayName="Breadcrumbs";var Wv;function lm(){return lm=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},lm.apply(null,arguments)}var FT=function(e){return v.createElement("svg",lm({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Wv||(Wv=v.createElement("path",{fill:"#74767B",fillRule:"evenodd",d:"M6.03 12.44a.65.65 0 0 1-.21-.48c0-.16.05-.31.17-.44l5.49-6.04c.28-.31.76-.31 1.04 0l5.49 6.04c.24.27.22.68-.04.92a.65.65 0 0 1-.92-.04l-4.4-4.84v10.9c0 .35-.3.65-.65.65-.36 0-.65-.3-.65-.65V7.56l-4.4 4.84c-.24.26-.65.28-.92.04"})))},Jv;function im(){return im=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var i in l)({}).hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e},im.apply(null,arguments)}var qT=function(e){return v.createElement("svg",im({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},e),Jv||(Jv=v.createElement("path",{fill:"#717681",d:"M8.889 6.111a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0M8.889 13.889a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0M8.889 10a1.111 1.111 0 1 1-2.223 0 1.111 1.111 0 0 1 2.223 0M13.337 6.111a1.111 1.111 0 1 1-2.222 0 1.111 1.111 0 0 1 2.222 0M13.337 13.889a1.111 1.111 0 1 1-2.222 0 1.111 1.111 0 0 1 2.222 0M13.337 10a1.111 1.111 0 1 1-2.222 0 1.111 1.111 0 0 1 2.222 0"})))};const Ax=re`
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 12px 5px 12px";case"l":return"12px 16px 11px 16px";case"xl":return"16px 16px 15px 16px";default:return"10px 12px 9px 12px"}}};
`,Dx=re`
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  ${({$dimension:e})=>e==="l"||e==="xl"?Ge["Body/Body 1 Short"]:Ge["Body/Body 2 Short"]}
`,YT=re`
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  ${({$dimension:e})=>e==="l"||e==="xl"?Ge["Subtitle/Subtitle 2"]:Ge["Subtitle/Subtitle 3"]}
`,GT=re`
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  ${({$dimension:e})=>e==="l"||e==="xl"?Ge["Subtitle/Subtitle 2"]:Ge["Subtitle/Subtitle 3"]}
`,VT=re`
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  ${({$dimension:e})=>e==="l"||e==="xl"?Ge["Body/Body 2 Long"]:Ge["Caption/Caption 1"]}
`,zx=re`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,QT=re`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({$lineClamp:e})=>e};
  overflow: hidden;
`,XT=re`
  color: var(--admiral-color-Neutral_Neutral30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  cursor: not-allowed;
  & > * {
    pointer-events: none;
  }
`,ZT=re`
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${e=>e.theme.color["Neutral/Neutral 20"]});
`,KT=re`
  ${({theme:e,selected:a,disabled:l,$grey:i,$status:u,$rowStatusMap:c})=>l?`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`:a?`var(--admiral-color-Primary_Primary20, ${e.color["Primary/Primary 20"]})`:u&&(c!=null&&c[u])?typeof c[u]=="string"?c[u]:c[u](e.color):i?`var(--admiral-color-Neutral_Neutral05, ${e.color["Neutral/Neutral 05"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`}
`,Bx=re`
  border-right: 1px solid transparent;
  [data-borders='true'] & {
    border-color: ${e=>e.$resizer?`var(--admiral-color-Neutral_Neutral20, ${e.theme.color["Neutral/Neutral 20"]})`:"transparent"};
  }
`,jx=k.div`
  position: absolute;
  right: -9px;
  z-index: 1;
  top: 0;
  width: ${"17px"};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({disabled:e})=>e?"default":"col-resize"};

  padding: ${({$dimension:e})=>{switch(e){case"s":return"8px 0 7px 0";case"l":return"14px 0 13px 0";case"xl":return"18px 0 17px 0";default:return"12px 0 11px 0"}}};
`,WT=k.div`
  box-sizing: border-box;
  width: 1px;
  height: 100%;
  background: var(--admiral-color-Neutral_Neutral20, ${e=>e.theme.color["Neutral/Neutral 20"]});
`;function JT({name:e,disabled:a,dimension:l,columnMinWidth:i,onChange:u}){const c=v.useRef(null),d=v.useRef(0),[h,p]=v.useState(!1),m=S=>{var C,M;S.preventDefault();const $=((M=(C=c.current)==null?void 0:C.parentElement)==null?void 0:M.getBoundingClientRect().width)||100,E=S.changedTouches?S.changedTouches[0].clientX:S.clientX;let T=$-(d.current-E);T=T>=i?T:i,$!==T&&u({name:e,width:T}),d.current=E},g=S=>{S.preventDefault(),S.stopPropagation(),p(!0),d.current=S.changedTouches?S.changedTouches[0].clientX:S.clientX},y=S=>{h&&(m(S),p(!1))},[b,w]=Cm(S=>{h&&m(S)},100);return v.useEffect(()=>{if(!a)return document.addEventListener("mousemove",b),document.addEventListener("mouseup",y),document.addEventListener("touchmove",b),document.addEventListener("touchend",y),()=>{w(),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",y)}}),v.useEffect(()=>{const S=c.current;if(!a&&S)return S.addEventListener("mousedown",g),S.addEventListener("touchstart",g),()=>{S.removeEventListener("mousedown",g),S.removeEventListener("touchstart",g)}},[a]),N.jsx(jx,{ref:c,disabled:a,$dimension:l,children:N.jsx(WT,{})})}const sc=e=>{switch(e){case"s":return 32;case"l":return 48;case"xl":return 56;default:return 40}},IT=k.div`
  position: sticky;
  right: 0;
  z-index: 5;

  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  ${({$showRowsActions:e})=>!e&&re`
      width: 0;
      direction: rtl;
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    `}
`,eR=k.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  width: ${({$dimension:e})=>sc(e)}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"0px";case"l":return"6px 0 5px";case"xl":return"10px 0 9px";default:return"4px 0 3px"}}};
  background-color: inherit;
`,tR=({row:e,dimension:a,showRowsActions:l,tableRef:i,headerHeight:u,...c})=>{var h;const d=v.useRef(null);return v.useEffect(()=>{const p=new IntersectionObserver(function([m]){var g;if(!m.isIntersecting){const y=(g=d.current)==null?void 0:g.querySelector("button[aria-haspopup='true'][aria-expanded='true']");y==null||y.click()}},{root:i.current,rootMargin:`-${u||0}px 0px 0px 0px`,threshold:[0,1]});return i.current&&d.current&&p.observe(d.current),()=>p.disconnect()},[u]),N.jsx(IT,{ref:d,"data-overflowmenu":!0,"data-opened":l,$showRowsActions:l,...c,children:N.jsx(eR,{$dimension:a,children:e.actionRender?e.actionRender(e):(h=e.overflowMenuRender)==null?void 0:h.call(e,e,p=>{l||(p?d.current&&(d.current.dataset.opened="true"):d.current&&(d.current.dataset.opened="false"))})})})},Lx=k.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  overflow: auto;

  &[data-dragging='true'] ${jx} {
    pointer-events: none;
  }

  &[data-borders='true'] {
    border: 1px solid var(--admiral-color-Neutral_Neutral20, ${e=>e.theme.color["Neutral/Neutral 20"]});
  }
`,Hx=k.div`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
`,om=k(Hx)`
  background: ${({theme:e,$greyHeader:a})=>a?`var(--admiral-color-Neutral_Neutral05, ${e.color["Neutral/Neutral 05"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.color["Neutral/Neutral 00"]})`};
  transition: box-shadow 0.3s;
  ${Lx}[data-shadow-left='true'] & {
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.12);
  }
`,rR=k.div`
  display: flex;
  &:has(+ div[data-empty='true']) {
    overflow-x: hidden;
  }
`,Ym=k.div`
  display: flex;
  flex: 1 1 auto;
  width: unset;
`,aR=k.div`
  box-sizing: border-box;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 6;
`,nR=k.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  min-width: fit-content;
  ${GT}
  background: ${e=>e.$greyHeader?`var(--admiral-color-Neutral_Neutral05, ${e.theme.color["Neutral/Neutral 05"]})`:`var(--admiral-color-Neutral_Neutral00, ${e.theme.color["Neutral/Neutral 00"]})`};
  border-bottom: 1px solid var(--admiral-color-Neutral_Neutral20, ${e=>e.theme.color["Neutral/Neutral 20"]});
`,Gm=k.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`,Px=k(Lb)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${e=>e.$isOpened?180:0}deg);
`,Ux=k(Cc)`
  margin: 0;
  flex-shrink: 0;
`,lR=k.div`
  position: relative;
`,kx=k(FT)`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({theme:e,$sort:a})=>a==="initial"?"transparent":`var(--admiral-color-Primary_Primary60Main, ${e.color["Primary/Primary 60 Main"]})`};
  }
  ${({$sort:e})=>e==="desc"?"transform: rotate(180deg);":""}
`,Fx=k.div`
  position: absolute;
  top: 1px;
  right: 0;
  font-family: var(--admiral-font-family, ${e=>e.theme.fontFamily});
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  color: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
`,iR=k(qT)`
  display: flex;
  flex-shrink: 0;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  & *[fill^='#'] {
    fill: ${({theme:e})=>`var(--admiral-color-Neutral_Neutral30, ${e.color["Neutral/Neutral 30"]})`};
  }
`,Fi=k.div`
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  box-sizing: border-box;
  ${Ax};
  overflow: hidden;
  ${Bx}
`,oR=k.div`
  display: block;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  ${({$cellAlign:e})=>e==="right"&&"text-align: right;"}
  overflow: hidden;
`,uR=k.div`
  display: block;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,cc=k(Fi)`
  width: ${({$dimension:e})=>e==="s"||e==="m"?44:56}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 12px 5px 12px";case"l":return"12px 16px 11px 16px";case"xl":return"16px 16px 15px 16px";default:return"10px 12px 9px 12px"}}};
  border: none;
`,fc=k(Fi)`
  width: ${({$dimension:e})=>e==="s"||e==="m"?44:56}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 12px 5px 12px";case"l":return"12px 16px 11px 16px";case"xl":return"16px 16px 15px 16px";default:return"10px 12px 9px 12px"}}};
  border: none;
`,dc=k(Fi)`
  width: ${({$dimension:e})=>e==="s"||e==="m"?36:48}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 8px 5px 8px";case"l":return"12px 12px 11px 12px";case"xl":return"16px 12px 15px 12px";default:return"10px 8px 9px 8px"}}};
  border: none;
`,qx=k.div`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex: 0 0 auto;
  ${Ax}
  ${Bx}
  cursor: default;
  &[data-draggable='true'] {
    cursor: pointer;
  }
  align-items: flex-start;
`,sR=k.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  width: 100%;
  ${({$cellAlign:e})=>e==="right"&&re`
      flex-direction: row-reverse;
      & > ${Yx} {
        text-align: right;
        flex-direction: row-reverse;
      }
    `}
`,cR=k.div`
  display: flex;
  align-self: stretch;
  width: ${e=>e.width?e.width:"12px"};
  flex-shrink: 0;
`,Yx=k.div`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  ${({$sortable:e})=>e&&"cursor: pointer;"}
  &:hover {
    ${kx} *[fill^='#'] {
      fill: ${({theme:e,$sort:a})=>a==="initial"?`var(--admiral-color-Neutral_Neutral50, ${e.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary70, ${e.color["Primary/Primary 70"]})`};
    }

    ${Fx} {
      color: ${({theme:e,$sort:a})=>a==="initial"?`var(--admiral-color-Neutral_Neutral50, ${e.color["Neutral/Neutral 50"]})`:`var(--admiral-color-Primary_Primary70, ${e.color["Primary/Primary 70"]})`};
    }
  }
`,fR=k.div`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({$sortable:e,$dimension:a})=>e?`calc(100% - ${a==="s"||a==="m"?16:20}px)`:"100%"};
`,Gx=k.div`
  position: relative;
  width: 100%;
  ${({$lineClamp:e})=>e===1?zx:QT}
  ${({$withTooltip:e})=>e&&"cursor: pointer;"}
`,dR=k(Gx)`
  margin: 2px 0;
  ${VT}
`,hR=re`
  width: ${e=>e.$rowWidth};
`,mR=re`
  cursor: pointer;
  & > .tr-simple > * {
    background: var(--admiral-color-Primary_Primary10, ${e=>e.theme.color["Primary/Primary 10"]});
  }
`,pR=re`
  &[data-groupover='true'] > .tr-simple > * {
    background: var(--admiral-color-Opacity_Hover, ${e=>e.theme.color["Opacity/Hover"]});
  }
`,Vx=k.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  ${e=>e.$isGroup?YT:Dx}
  ${({disabled:e})=>e&&XT}
  ${({$underline:e})=>e&&ZT}
  ${({$rowWidth:e})=>e&&hR}
   &:hover:is(.hoverable) {
    ${({$hover:e,disabled:a})=>e&&!a&&mR}
  }

  &[data-dragover='true'] > * {
    opacity: 0.4;
  }
  transition: opacity 0.3s ease;

  ${pR}
`,gR=k.div`
  display: inline-flex;
  min-width: max-content;

  & > * {
    background: ${KT};
  }

  ${({$showRowsActions:e})=>!e&&re`
      &:hover {
        & div[data-overflowmenu] {
          visibility: visible;
        }
      }
      & div[data-overflowmenu][data-opened='true'] {
        visibility: visible;
      }
    `}
`,yR=k.div`
  display: inline-flex;
  overflow: hidden;
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,vR=k.div`
  display: flex;
  flex: 1 0 auto;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`,bR=k(Fi)`
  margin: 2px 0;
  color: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  border: none;
`,xR=k.div`
  display: flex;
  flex: 0 0 auto;
  width: calc(100% - ${e=>(a=>(a.$selectionColumn?a.$dimension==="s"||a.$dimension==="m"?44:56:0)+(a.$expansionColumn?a.$dimension==="s"||a.$dimension==="m"?44:56:0)+(a.$overflowMenuColumn?sc(a.$dimension):0))(e)+"px"});
`,SR=k.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  display: flex;
  overflow: hidden;
`,ER=k(qx)`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  display: flex;
  max-width: 200px;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>ki(e.theme.shadow["Shadow 08"])});
  background: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  color: var(--admiral-color-Neutral_Neutral90, ${e=>e.theme.color["Neutral/Neutral 90"]});
  ${({$dimension:e})=>e==="s"||e==="m"?Ge["Subtitle/Subtitle 3"]:Ge["Subtitle/Subtitle 2"]}
  padding-left: ${({$dimension:e})=>e==="s"||e==="m"?36:40}px;
  border: none;

  &[data-cursor='normal'] {
    cursor: grabbing;
  }
  &[data-cursor='error'] {
    cursor: not-allowed;
  }

  & > [data-title] {
    ${zx}
  }
`,wR=k.div`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  display: flex;
  align-items: center;
  max-width: 288px;
  box-shadow: var(--admiral-box-shadow-Shadow08, ${e=>ki(e.theme.shadow["Shadow 08"])});
  background: var(--admiral-color-Neutral_Neutral00, ${e=>e.theme.color["Neutral/Neutral 00"]});
  padding-left: ${({$dimension:e})=>e==="s"||e==="m"?36:48}px;
  ${Dx}

  &[data-cursor='normal'] {
    cursor: grabbing;
  }
  &[data-cursor='error'] {
    cursor: not-allowed;
  }
`,hc=k.div`
  display: flex;
  flex: 0 0 auto;
  will-change: min-height;
  transform: translate3d(0px, 0px, 0px);
`,Iv=k.div`
  display: flex;
  width: 0;
  height: auto;
`,e1=k.div`
  display: flex;
  position: sticky;
  right: 0;
  z-index: 5;
  .table[data-shadow-right='true'] & {
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.12);
  }

  min-height: ${({$dimension:e})=>sc(e)-1}px;
  width: ${({$dimension:e})=>sc(e)}px;
  background-color: inherit;
`,$R=({row:e,dimension:a,displayRowSelectionColumn:l,rowsDraggable:i,checkboxDimension:u,renderCell:c,onRowExpansionChange:d,onRowSelectionChange:h,indeterminate:p,checked:m})=>{var g,y;return N.jsxs(N.Fragment,{children:[N.jsxs(Hx,{children:[i&&N.jsx(dc,{$dimension:a}),N.jsx(fc,{$dimension:a,className:"td_expand","data-column":"expand","data-row":e.id,children:N.jsx(Ux,{dimension:a==="s"||a==="m"?"mBig":"lBig",disabled:!(!e.disabled&&((g=e.groupRows)==null?void 0:g.length)!==0)||void 0,highlightFocus:!1,onClick:b=>{b.stopPropagation(),d==null||d(e.id)},children:N.jsx(Px,{$isOpened:e.expanded,"aria-hidden":!0})})}),l&&N.jsx(cc,{$dimension:a,className:"td_checkbox","data-column":"checkbox","data-row":e.id,children:N.jsx(su,{disabled:e.disabled||e.checkboxDisabled||((y=e.groupRows)==null?void 0:y.length)===0,dimension:u,checked:!!m,indeterminate:p,onChange:()=>{h==null||h(e.id)},onClick:b=>{b.stopPropagation()}})}),N.jsx(Fi,{$dimension:a,className:"td","data-column":"group","data-row":e.id,children:e.renderGroupTitle?e.renderGroupTitle(e):c?c(e,"group"):N.jsx(uR,{children:e.groupTitle||""})},`${e.id}`)]}),N.jsx(Ym,{})]})},_R=({row:e,dimension:a,checkboxDimension:l,columns:i,stickyColumns:u,displayRowSelectionColumn:c,displayRowExpansionColumn:d,rowsDraggable:h,onRowExpansionChange:p,onRowSelectionChange:m,renderBodyCell:g})=>{const y=a==="s"||a==="m"?20:24;return N.jsxs(N.Fragment,{children:[(c||d||u.length>0||h)&&N.jsxs(om,{children:[h&&N.jsx(dc,{$dimension:a,children:N.jsx(iR,{"data-dragicon":!0,width:y,height:y,$disabled:e.disabled})}),d&&N.jsx(fc,{$dimension:a,className:"td_expand","data-column":"expand","data-row":e.id,children:e.expandedRowRender&&N.jsx(Ux,{style:{margin:0,flexShrink:0},dimension:a==="s"||a==="m"?"mBig":"lBig",disabled:!!e.disabled||void 0,highlightFocus:!1,onClick:b=>{b.stopPropagation(),p==null||p(e.id)},children:N.jsx(Px,{$isOpened:e.expanded,"aria-hidden":!0})})}),c&&N.jsx(cc,{$dimension:a,className:"td_checkbox","data-column":"checkbox","data-row":e.id,children:N.jsx(su,{disabled:e.disabled||e.checkboxDisabled,dimension:l,checked:!!e.selected,onChange:()=>m==null?void 0:m(e.id),onClick:b=>{b.stopPropagation()}})}),u.length>0&&u.map((b,w)=>g(e,{...b,index:w}))]}),i.map((b,w)=>b.sticky?null:g(e,{...b,index:w})),N.jsx(Ym,{})]})},NR=({children:e,in:a=!1,timeout:l=300,onEnter:i,onEntering:u,onEntered:c,onExit:d,onExiting:h,onExited:p,...m})=>{const[g,y]=v.useState(a?"entered":"exited"),b=v.useRef(a?"entered":"exited"),w=v.useRef(0);v.useEffect(()=>()=>{C()},[]),v.useEffect(()=>{let z=null;a?b.current!=="entering"&&b.current!=="entered"&&(z="entering"):b.current!=="entering"&&b.current!=="entered"||(z="exiting"),$(z)},[a]),v.useEffect(()=>{if(b.current!==g){b.current=g;const{enter:z,exit:_}=S();g=="entering"?(u==null||u(),M(z,()=>{y("entered")})):g=="exiting"?(h==null||h(),M(_,()=>{y("exited")})):g=="entered"?c==null||c():g=="exited"&&(p==null||p())}},[g]);const S=()=>{let z,_;return typeof l=="number"?z=_=l:(z=l.exit,_=l.enter),{exit:z,enter:_}},$=z=>{z!==null&&(C(),z==="entering"?E():T())},E=()=>{i==null||i(),y("entering")},T=()=>{d==null||d(),y("exiting")},C=()=>{clearTimeout(w.current)},M=(z,_)=>{w.current=setTimeout(_,z)};return N.jsx(N.Fragment,{children:typeof e=="function"?e(g,m):v.cloneElement(v.Children.only(e),m)})},TR=({row:e,rowRef:a})=>{var c;const l=v.useRef(null),i=v.useRef(null);v.useLayoutEffect(()=>{u(e.expanded?"auto":"0px")},[]);const u=d=>{var m;const h=(((m=i.current)==null?void 0:m.clientHeight)||0)+"px",p=d??h;l.current&&(l.current.style.height=p)};return N.jsx(NR,{in:!!e.expanded,timeout:250,onEnter:()=>{u("0px")},onEntered:()=>{u("auto")},onEntering:()=>{u()},onExit:()=>{u()},onExiting:()=>{u("0px")},children:N.jsx(yR,{ref:l,className:"tr-expanded",onMouseEnter:()=>{var d;(d=a.current)==null||d.classList.remove("hoverable")},onMouseLeave:()=>{var d;(d=a.current)==null||d.classList.add("hoverable")},children:N.jsx(vR,{ref:i,children:(c=e.expandedRowRender)==null?void 0:c.call(e,e)})})})},RR=({row:e,dimension:a,underline:l,onRowClick:i,onRowDoubleClick:u,children:c,isGroup:d,groupId:h,rowWidth:p,grey:m,showRowsActions:g,rowStatusMap:y,tableRef:b,headerHeight:w,...S})=>{var E;const $=v.useRef(null);return N.jsxs(Vx,{...S,ref:$,onClick:e.disabled?void 0:()=>{return T=e.id,void(i==null?void 0:i(T));var T},onDoubleClick:e.disabled?void 0:()=>{return T=e.id,void(u==null?void 0:u(T));var T},$underline:l,disabled:!!e.disabled,$dimension:a,className:`tr ${e.className||""} hoverable`,$isGroup:d,$rowWidth:p,$hover:!!e.hover,"data-row":e.id,"data-group":d,"data-ingroup":h,"data-first-row-in-group":((E=e==null?void 0:e.groupRows)==null?void 0:E[0])??null,children:[N.jsxs(gR,{className:"tr-simple",$showRowsActions:g,selected:!!e.selected,disabled:!!e.disabled,$status:e.status,$rowStatusMap:y,$grey:!!m,children:[c,(g||e.overflowMenuRender||e.actionRender)&&N.jsx(tR,{dimension:a,row:e,onClick:T=>{T.stopPropagation()},showRowsActions:g,tableRef:b,headerHeight:w})]}),e.expandedRowRender&&N.jsx(TR,{row:e,rowRef:$})]})},MR=re`
  & *[fill^='#'] {
    fill: var(--admiral-color-Primary_Primary60Main, ${e=>e.theme.color["Primary/Primary 60 Main"]});
  }
`,OR=k.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  margin: 2px 0;
`,CR=k.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & svg {
    flex-shrink: 0;
    width: ${({$iconSize:e})=>e};
    height: ${({$iconSize:e})=>e};
  }

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${e=>e.theme.color["Neutral/Neutral 50"]});
  }

  &:hover {
    *[fill^='#'] {
      fill: var(--admiral-color-Primary_Primary70, ${e=>e.theme.color["Primary/Primary 70"]});
    }
  }

  ${({$isFilterActive:e})=>e&&MR}
`,AR=v.forwardRef(({dimension:e,renderFilterIcon:a,isFilterActive:l,...i},u)=>{const c=e==="s"||e==="m"?"16px":"20px",d=v.useRef(null);return v.useEffect(()=>{const h=d.current;function p(m){m.stopPropagation()}if(h)return h.addEventListener("mousemove",p),h.addEventListener("touchmove",p),()=>{h.removeEventListener("mousemove",p),h.removeEventListener("touchmove",p)}},[]),N.jsx(OR,{ref:kr(u,d),type:"button",...i,children:N.jsx(CR,{$isFilterActive:l,$iconSize:c,children:a?a():N.jsx(Hb,{"aria-hidden":!0})})})}),DR=k(Mc)`
  background-color: var(--admiral-color-Special_ElevatedBG, ${e=>e.theme.color["Special/Elevated BG"]});
`,zR=v.forwardRef(({column:e,targetElement:a,...l},i)=>{const{renderFilter:u,renderFilterIcon:c,onFilterMenuClickOutside:d,onFilterMenuOpen:h,onFilterMenuClose:p,isFilterActive:m,filterMenuAlignSelf:g="auto",filterMenuCssMixin:y,filterMenuClassName:b,filterMenuStyle:w}=e,[S,$]=v.useState(!1),[E,T]=v.useState(!1),C=v.useRef(null),M=()=>{var z;$(!1),p==null||p(),(z=C.current)==null||z.focus()};return N.jsxs(N.Fragment,{children:[N.jsx(AR,{ref:kr(i,C),onKeyDown:z=>{const _=se.getCode(z);_!==se.ArrowDown&&_!==se.Enter&&_!==se[" "]||($(!0),h==null||h(),z.preventDefault())},onClick:()=>{$(z=>(z?p==null||p():h==null||h(),!z))},"aria-expanded":S,"aria-haspopup":S,isFilterActive:m??E,renderFilterIcon:c,...l}),S&&N.jsx(DR,{role:"listbox",targetElement:a,alignSelf:g,onClickOutside:z=>{var _;z.target&&((_=C.current)!=null&&_.contains(z.target))||(d==null||d({closeMenu:M,setFilterActive:T},z))},onKeyDown:z=>{const _=se.getCode(z);_!==se.Escape&&_!==se.Tab||M()},dropContainerCssMixin:y,className:b,style:w,children:u==null?void 0:u({closeMenu:M,setFilterActive:T},e)})]})}),t1=({lineClamp:e,dimension:a,extraText:l,title:i})=>{const u=v.useRef(null),[c,d]=v.useState(!1),[h,p]=v.useState(!1),m=c&&h&&(typeof i=="string"||typeof i=="number");return v.useLayoutEffect(()=>{const g=u.current;g&&ou(g)!==c&&d(ou(g))},[h,d]),v.useLayoutEffect(()=>{function g(){p(!0)}function y(){p(!1)}const b=u.current;if(b)return b.addEventListener("mouseenter",g),b.addEventListener("mouseleave",y),()=>{b.removeEventListener("mouseenter",g),b.removeEventListener("mouseleave",y)}},[p]),N.jsxs(N.Fragment,{children:[l?N.jsx(dR,{ref:u,$dimension:a,$lineClamp:e,$withTooltip:m,children:i}):N.jsx(Gx,{ref:u,$lineClamp:e,$withTooltip:m,"data-title":!0,children:i}),m&&N.jsx(xu,{targetElement:u.current,renderContent:()=>i})]})},BR=({sort:e,sortOrder:a,multipleSort:l,iconSize:i})=>{const u=v.useRef(null);return v.useEffect(()=>{const c=u.current;function d(h){h.stopPropagation()}if(c)return c.addEventListener("mousemove",d),c.addEventListener("touchmove",d),()=>{c.removeEventListener("mousemove",d),c.removeEventListener("touchmove",d)}},[]),N.jsxs(lR,{ref:u,children:[N.jsx(kx,{$sort:e||"initial",width:i,height:i}),l&&e&&a&&N.jsx(Fx,{children:a})]})},jR=100,LR=()=>{},HR=v.memo(({column:e,columnsAmount:a,showDividerForLastColumn:l,disableColumnResize:i,headerLineClamp:u,headerExtraLineClamp:c,spacingBetweenItems:d,dimension:h,handleResizeChange:p,handleSort:m,multipleSort:g,columnMinWidth:y,hidden:b,index:w})=>{const{name:S,title:$,extraText:E,width:T=jR,cellAlign:C="left",sortable:M=!1,sort:z,sortOrder:_,disableResize:j=!1,draggable:V=!1,renderFilter:K,headerPropsConfig:q=LR}=e,Z=h==="s"||h==="m"?16:20,Se=h==="l"||h==="xl"?"16px":"12px",Ce=d||Se,ge=b?typeof T=="number"?T+"px":T:`var(--th-${w}-width, 100px)`,Ee=w<a-1||w===a-1&&l,[xe,le]=v.useState(null),he={$dimension:h,$resizer:Ee,style:{width:ge,minWidth:ge},className:"th","data-draggable":V,"data-th-column":S,...b?{"data-index":w}:{}};return N.jsxs(qx,{...he,...q(he),ref:ue=>le(ue),children:[N.jsxs(sR,{$cellAlign:C,children:[N.jsxs(Yx,{$sort:z||"initial",$sortable:M,onClick:M?()=>m(S,z||"initial"):void 0,children:[N.jsxs(fR,{$dimension:h,$sortable:M,children:[N.jsx(t1,{dimension:h,lineClamp:u,title:$}),E&&N.jsx(t1,{extraText:!0,dimension:h,lineClamp:c,title:E})]}),M&&N.jsx(BR,{sort:z,sortOrder:_,multipleSort:g,iconSize:Z})]}),N.jsx(cR,{width:K?Ce:parseInt(Ce)-parseInt(Se)+"px"}),K&&N.jsx(zR,{column:e,dimension:h,targetElement:xe})]}),Ee&&N.jsx(JT,{name:S,onChange:p,disabled:j||i,dimension:h,columnMinWidth:y})]})});function Qx(e,a,l,i,u){let c,d,h,p,m,g,y,b="",w=null,S=null;const $={...a,direction:a.direction??"horizontal",updateDragItem:a.updateDragItem,accepts:a.accepts??PR,invalid:a.invalid??UR,containers:[...e]},E={containers:$.containers,unobserve:function(){z(!0),Se({}),C()},dragging:!1},[T,C]=Cm(Ee,10);return z(),E;function M(O){return E.containers.indexOf(O)!==-1}function z(O){const L=O?"remove":"add";ko(document.documentElement,L,"mousedown",K),ko(document.documentElement,L,"mouseup",Se)}function _(O){const L=O?"remove":"add";ko(document.documentElement,L,"mousemove",q)}function j(O){um[O?"remove":"add"](document.documentElement,"click",V)}function V(O){g&&O.preventDefault()}function K(O){const L=function(X){if(E.dragging&&c||M(X))return;const W=X;for(;ml(X)&&M(ml(X))===!1;)if($.invalid(X,W)||!(X=ml(X)))return;const ee=ml(X);if(ee&&!$.invalid(X,W))return{item:X,source:ee}}(O.target);L&&(g=L,_(),O.type==="mousedown"&&O.preventDefault())}function q(O){var W,ee,fe,pe;if(!g||O.movementX==0&&O.movementY==0)return;const L=g;var X;_(!0),j(),function(){E.dragging&&Ce()}(),d=(X=L).source,h=X.item,b=$.direction=="vertical"?(ee=(W=X.item)==null?void 0:W.dataset)==null?void 0:ee.row:(pe=(fe=X.item)==null?void 0:fe.dataset)==null?void 0:pe.thColumn,S=X.item,p=m=X.item.nextElementSibling,E.dragging=!0,i==null||i(),h&&(h.dataset.dragover="true",function(){const ye=$.mirrorRef.current;if(!(c&&!ye)&&ye){$.renderMirror(h),ye.style.visibility="visible",c=ye,ko(document.documentElement,"add","mousemove",T);const me=ye.parentElement;me&&(y=me.style.userSelect,me.style.userSelect="none")}}(),Ee(O))}function Z(){g=!1,_(!0),j(!0)}function Se(O){if(Z(),!E.dragging)return;const L=qs("clientX",O)||0,X=qs("clientY",O)||0,W=ge(r1(c,L,X),L,X);W&&W!==d?Ce():function(){E.dragging&&Ce()}()}function Ce(){var O,L;Z(),function(){const X=$.mirrorRef.current;if(c&&X){const W=X.parentElement;W&&(W.style.userSelect=y),$.removeMirror(),X.style.visibility="hidden",ko(document.documentElement,"remove","mousemove",T),c=null}}(),(O=h==null?void 0:h.dataset)==null||delete O.dragover,(L=S==null?void 0:S.dataset)==null||delete L.groupover,E.dragging=!1,u==null||u(h),d=h=p=m=w=S=null,b=""}function ge(O,L,X){let W=O;for(;W&&!ee();)W=ml(W);return W;function ee(){if(M(W)===!1)return!1;const fe=ue(W,O),pe=ie(W,fe,L,X);return!!function(me,ve){let Ae;return Ae=ve!==void 0?ve:c?m:le(),me===d&&Ae===p}(W,pe)||$.accepts(h,W,d,pe)}}function Ee(O){var Ae,Ue;if(!c)return;if(O.preventDefault(),$.updateDragItem){const qe=(Ae=$.updateDragItem)==null?void 0:Ae.call($,b);qe&&((Ue=h==null?void 0:h.dataset)==null||delete Ue.dragover,qe.dataset.dragover="true",h=qe)}const L=qs("clientX",O)||0,X=qs("clientY",O)||0;let W,ee;$.direction==="vertical"?(W=L-($.dimension==="s"||$.dimension==="m"?18:24),ee=X-c.getBoundingClientRect().height/2):$.direction==="horizontal"&&(W=L-($.dimension==="s"||$.dimension==="m"?18:20),ee=X-c.getBoundingClientRect().height/2),c.style.left=W+"px",c.style.top=ee+"px";const fe=r1(c,L,X),pe=ge(fe,L,X),ye=pe!==null&&pe!==w;let me;(ye||pe===null)&&(w=pe),c.dataset.cursor=pe==null?"error":"normal";const ve=ue(pe,fe);if(S!=null&&S.isEqualNode(ve)||ve==null)xe(ve);else if(xe(ve),me=ie(pe,ve,L,X),h&&(me===null&&ye||me!==h&&me!==le())){if(m=me,le()===null&&me===null)return;l==null||l(h,me,ve)}}function xe(O){var L;$.direction==="vertical"&&(S==null||delete S.dataset.groupover,((L=O==null?void 0:O.dataset)==null?void 0:L.group)=="true"&&(O.dataset.groupover="true")),S=O}function le(){var L;const O=((L=$.updateDragItem)==null?void 0:L.call($,b,!0))||h;return O==null?void 0:O.nextElementSibling}function he(){var L;const O=((L=$.updateDragItem)==null?void 0:L.call($,b,!0))||h;return O?O.getBoundingClientRect():{}}function ue(O,L){let X=L;for(;X!==O&&ml(X)!==O;)X=ml(X);return X===document.documentElement?null:X}function ie(O,L,X,W){var me,ve;const ee=$.direction==="horizontal",fe=(me=he())==null?void 0:me.right,pe=(ve=he())==null?void 0:ve.bottom;return L!==O?function(){const Ae=L.getBoundingClientRect();return ee&&typeof fe=="number"?ye(X>=Ae.left&&X<Ae.right&&fe<=X):!ee&&typeof pe=="number"?ye(W>=Ae.top&&W<Ae.bottom&&pe<=W):null}():function(){const Ae=O.children.length;for(let Ue=0;Ue<Ae;Ue++){const qe=O.children[Ue],Ve=qe.getBoundingClientRect();if(ee&&typeof fe=="number"&&X>=Ve.left&&X<Ve.right)return fe<=X?qe.nextElementSibling:qe;if(!ee&&typeof pe=="number"&&W>=Ve.top&&W<Ve.bottom)return pe<=W?qe.nextElementSibling:qe}return null}();function ye(Ae){return Ae?L.nextElementSibling:L}}}const um={add:function(e,a,l,i){return e.addEventListener(a,l,i)},remove:function(e,a,l,i){return e.removeEventListener(a,l,i)}};function ko(e,a,l,i){um[a](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[l],i),um[a](e,l,i)}function r1(e,a,l){const i=e.style.pointerEvents;e.style.pointerEvents="none";const u=document.elementFromPoint(a,l);return e.style.pointerEvents=i,u}function PR(){return!0}function UR(){return!1}function ml(e){return e.parentNode===document?null:e.parentNode}function qs(e,a){return function(i){return i.targetTouches&&i.targetTouches.length?i.targetTouches[0]:i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i}(a)[e]}const kR=({onColumnDrag:e,onColumnDragEnd:a,dimension:l,isAnyColumnDraggable:i,isAnyStickyColumnDraggable:u,tableRef:c,normalColumnsWrapperRef:d,stickyColumnsWrapperRef:h})=>{const{rootRef:p}=v.useContext(Bl),[m,g]=v.useState(!1),y=v.useRef(e),b=v.useRef(a),w=v.useRef(null);return v.useEffect(()=>{y.current=e,b.current=a},[e,a]),v.useEffect(()=>{c.current&&(c.current.dataset.dragging=String(m))},[m]),v.useEffect(()=>{if(w.current&&m&&(i||u)){const S=c.current,$=Tc(w.current,E=>{var M;const T=(S==null?void 0:S.getBoundingClientRect().right)||0,C=((M=h.current)==null?void 0:M.getBoundingClientRect().right)||(S==null?void 0:S.getBoundingClientRect().left)||0;if(S){const z=S.scrollLeft,_=S.scrollWidth,j=S.offsetWidth;E.right>T&&_>j&&z+j<_&&S.scrollBy({left:Math.abs(T-E.right)}),E.left<C&&z>0&&S.scrollBy({left:-Math.abs(C-E.left)})}});return $.observe(),()=>$.unobserve()}},[i,u,m]),v.useEffect(()=>{const S=h.current,$=d.current,E=w.current;if($&&i){const T=Qx([$],{mirrorRef:w,renderMirror:function(C){const M=C==null?void 0:C.querySelector("[data-title]");E&&M&&E.appendChild(M.cloneNode(!0))},removeMirror:function(){E&&E.lastChild&&E.removeChild(E.lastChild)},dimension:l,direction:"horizontal",invalid:C=>C.dataset.draggable=="false",accepts:(C,M,z,_)=>M===z&&(_==null?void 0:_.dataset.droppable)!="false"},function(C,M){var _,j,V,K,q,Z;const z=(_=C==null?void 0:C.dataset)==null?void 0:_.thColumn;z&&(S!=null&&S.contains(C)&&M===null?(K=y.current)==null||K.call(y,z,((V=(j=$==null?void 0:$.firstElementChild)==null?void 0:j.dataset)==null?void 0:V.thColumn)??null):(Z=y.current)==null||Z.call(y,z,((q=M==null?void 0:M.dataset)==null?void 0:q.thColumn)??null))},function(){g(!0)},function(C){var z,_;g(!1);const M=(z=C==null?void 0:C.dataset)==null?void 0:z.thColumn;M&&((_=b.current)==null||_.call(b,M))});return S&&u&&T.containers.push(S),()=>{T.unobserve()}}},[i,u,l]),i||u?Rc.createPortal(N.jsx(ER,{$dimension:l,ref:w}),(p==null?void 0:p.current)||document.body):null},FR=({rowsDraggable:e,dimension:a,onRowDrag:l,onRowDragEnd:i,tableRef:u,bodyRef:c,rowToGroupMap:d})=>{const{rootRef:h}=v.useContext(Bl),[p,m]=v.useState(!1),g=v.useRef(l),y=v.useRef(i),b=v.useRef(d),w=v.useRef(null);return v.useEffect(()=>{b.current=d},[d]),v.useEffect(()=>{g.current=l,y.current=i},[l,i]),v.useEffect(()=>{if(w.current&&p&&e){const S=u.current,$=S==null?void 0:S.querySelector(".thead"),E=Tc(w.current,T=>{const C=($==null?void 0:$.getBoundingClientRect().bottom)||0,M=(S==null?void 0:S.getBoundingClientRect().bottom)||0;if(S){const z=S.scrollTop,_=S.scrollHeight,j=S.offsetHeight;T.bottom>M&&_>j&&z+j<_&&S.scrollBy({top:Math.abs(M-T.bottom)}),T.top<C&&z>0&&S.scrollBy({top:-Math.abs(C-T.top)})}});return E.observe(),()=>E.unobserve()}},[e,p]),v.useEffect(()=>{const S=c.current,$=w.current;if(S&&e){const E=Qx([S],{mirrorRef:w,renderMirror:function(T){const C=T==null?void 0:T.getElementsByClassName("td")[0];C&&$&&$.appendChild(C.cloneNode(!0))},removeMirror:function(){$&&$.lastChild&&$.removeChild($.lastChild)},updateDragItem:function(T,C){var z,_;let M=null;if(S&&(M=S.querySelector(`[data-row="${T}"]`),!M&&C)){const j=(_=(z=b.current)==null?void 0:z[T])==null?void 0:_.groupId;M=S.querySelector(`[data-row="${j}"]`)}return M},dimension:a,direction:"vertical",invalid:(T,C)=>{var M;return!(C.getAttribute("data-dragicon")||(M=C.parentElement)!=null&&M.getAttribute("data-dragicon"))}},function(T,C,M){var _,j,V,K,q,Z,Se,Ce,ge,Ee;const z=(_=T==null?void 0:T.dataset)==null?void 0:_.row;if(z){const xe=(V=(j=b.current)==null?void 0:j[z])==null?void 0:V.groupId,le=((K=C==null?void 0:C.dataset)==null?void 0:K.row)??null,he=(q=M==null?void 0:M.dataset)==null?void 0:q.row,ue=(Z=M==null?void 0:M.dataset)==null?void 0:Z.group,ie=(Se=M==null?void 0:M.dataset)==null?void 0:Se.ingroup,O=(Ce=M==null?void 0:M.dataset)==null?void 0:Ce.firstRowInGroup;if(he&&ue=="true"){if(xe!==he||xe==he&&O!==z){const L=O??le;(ge=g.current)==null||ge.call(g,z,L,he)}}else(Ee=g.current)==null||Ee.call(g,z,le,ie??null)}},function(){m(!0)},function(T){var M,z;m(!1);const C=(M=T==null?void 0:T.dataset)==null?void 0:M.row;C&&((z=y.current)==null||z.call(y,C))});return()=>{E.unobserve()}}},[e]),e?Rc.createPortal(N.jsx(wR,{$dimension:a,ref:w}),(h==null?void 0:h.current)||document.body):null},qR=v.forwardRef(({childHeight:e,renderAhead:a=20,rowList:l,renderRow:i,renderEmptyMessage:u,tableRef:c,tableHeight:d,headerHeight:h,...p},m)=>{const[g,y]=v.useState(0),[b,w]=v.useState(d-h);v.useEffect(()=>{w(d-h)},[d,h]),v.useEffect(()=>{function _(V){requestAnimationFrame(()=>{y(V.target.scrollTop)})}const j=c.current;return y((j==null?void 0:j.scrollTop)||0),j==null||j.addEventListener("scroll",_),()=>j==null?void 0:j.removeEventListener("scroll",_)},[c]);const S=v.useMemo(()=>l.map((_,j)=>i(_,j)).filter(Boolean),[l,i]),$=S.length;let E=Math.floor(g/e);E=Math.max(0,E-a);let T=Math.ceil(b/e)+2*a;T=Math.min($-E,T);const C=E*e+"px",M=($-E-T)*e+"px",z=v.useMemo(()=>[...S].slice(E,E+T),[S,E,T]);return N.jsx(Gm,{style:{height:b},ref:m,...p,children:u?u():N.jsxs(N.Fragment,{children:[N.jsx(hc,{style:{minHeight:C}}),z,N.jsx(hc,{style:{minHeight:M}})]})})}),YR=(e,a,l)=>{let i=0,u=l-1;for(;i<=u;){const c=i+Math.floor((u-i)/2),d=a[c].offsetTop;if(d===e)return c;d<e?i=c+1:d>e&&(u=c-1)}return i>0?i-1:0};function GR(e,a,l,i){let u=a;const c=e[a];let d=c.offsetTop+c.height;for(;u<i-1&&d<l;)u++,d+=e[u].height;return u}const VR=v.memo(({children:e,cacheRef:a,id:l,setCache:i})=>{const[u,c]=v.useState(null),d=a.current;return v.useLayoutEffect(()=>{if(u){const h=new ResizeObserver(()=>{const p=u.getBoundingClientRect().height||0;d[l]!==p&&i(m=>({...m,[l]:p}))});return h.observe(u),()=>{h.disconnect()}}},[u]),N.jsx("div",{ref:h=>c(h),children:e})}),QR=v.forwardRef(({rowList:e,tableHeight:a,headerHeight:l,renderAhead:i=20,renderRow:u,renderEmptyMessage:c,estimatedRowHeight:d=()=>40,tableRef:h},p)=>{var Z,Se,Ce;const[m,g]=v.useState({}),[y,b]=v.useState(0),[w,S]=v.useState(a-l),$=v.useRef(m);v.useEffect(()=>{S(a-l)},[a,l]),v.useLayoutEffect(()=>{$.current=m});const E=v.useMemo(()=>e.filter((ge,Ee)=>!!u(ge,Ee)),[e,u]),T=v.useMemo(()=>E.length,[E]),C=v.useCallback(ge=>E[ge].id,[E]);v.useEffect(()=>{function ge(xe){requestAnimationFrame(()=>{b(xe.target.scrollTop)})}const Ee=h.current;return b((Ee==null?void 0:Ee.scrollTop)||0),Ee==null||Ee.addEventListener("scroll",ge),()=>Ee==null?void 0:Ee.removeEventListener("scroll",ge)},[h]);const{allItems:M,totalHeight:z}=v.useMemo(()=>{let ge=0;const Ee=Array(T);for(let xe=0;xe<T;xe++){const le=C(xe),he={key:le,index:xe,height:m[le]??d(xe),offsetTop:ge};ge+=he.height,Ee[xe]=he}return{allItems:Ee,totalHeight:ge}},[C,d,m,T,E]),_=v.useMemo(()=>{const ge=T?YR(y,M,T):0;return Math.max(0,ge-i)},[y,M,T,i]),j=v.useMemo(()=>{const ge=T?GR(M,_,y+w,T):0;return Math.min(T-1,ge+i)},[M,_,y,w,T,i]),V=(Z=M[_])==null?void 0:Z.offsetTop,K=z-(((Se=M[j])==null?void 0:Se.offsetTop)+((Ce=M[j])==null?void 0:Ce.height)),q=v.useMemo(()=>M.slice(_,j+1),[M,_,j]);return N.jsx(Gm,{ref:p,style:{height:w},children:c?c():N.jsxs(N.Fragment,{children:[N.jsx(hc,{style:{minHeight:V}}),q.map(ge=>{const Ee=E[ge.index];return N.jsx(VR,{id:Ee.id,cacheRef:$,setCache:g,children:u(Ee,ge.index)},Ee.id)}),N.jsx(hc,{style:{minHeight:K}})]})})}),XR={error:e=>e["Error/Error 20"],success:e=>e["Success/Success 20"]},Xx=v.forwardRef(({columnList:e,rowList:a,displayRowSelectionColumn:l=!1,displayRowExpansionColumn:i=!1,headerCheckboxChecked:u=!1,headerCheckboxIndeterminate:c=!1,headerCheckboxDisabled:d=!1,onHeaderSelectionChange:h,onRowSelectionChange:p,onRowExpansionChange:m,onRowClick:g,onRowDoubleClick:y,onSortChange:b,onColumnResize:w,renderCell:S,renderRowWrapper:$,dimension:E="m",greyHeader:T=!1,greyZebraRows:C=!1,spacingBetweenItems:M,headerLineClamp:z=1,headerExtraLineClamp:_=1,showDividerForLastColumn:j=!1,disableColumnResize:V=!1,showLastRowUnderline:K=!0,showRowsActions:q=!1,virtualScroll:Z,locale:Se,onColumnDrag:Ce,onColumnDragEnd:ge,rowsDraggable:Ee=!1,onRowDrag:xe,onRowDragEnd:le,rowBackgroundColorByStatusMap:he,showBorders:ue=!1,...ie},O)=>{const L=qn()||Da,X=E==="s"||E==="m"?"s":"m",W=E==="s"||E==="m"?25:33,[ee,fe]=v.useState(0),[pe,ye]=v.useState(0),me=[...e].filter(I=>I.sticky),ve=e.filter(I=>!I.sticky&&I.draggable).length>0,Ae=e.filter(I=>I.sticky&&I.draggable).length>0,Ue=v.useMemo(()=>a.some(I=>I.actionRender||I.overflowMenuRender)&&q,[a,q]),qe=v.useMemo(()=>({...XR,...he}),[he]),Ve=v.useRef(null),Lt=v.useRef(null),Xt=v.useRef(null),dt=v.useRef(null),Ct=v.useRef(null),At=v.useRef(null),ct=v.useRef(null),gt=v.useRef(null),nt=v.useRef(null),Et=a.reduce((I,de)=>(de.groupRows!==void 0&&(I[de.id]={rows:[...de.groupRows],expanded:!!de.expanded}),I),{}),wt=Object.entries(Et).reduce((I,[de,we])=>(we.rows.forEach(Pe=>{const et=a.find(Zt=>Zt.id.toString()===Pe);et&&!Et[Pe]&&(I[Pe]={groupId:de,checked:!!et.selected})}),I),{}),ft=v.useMemo(()=>(()=>{const I=[];return a.forEach(de=>{const we=!!Et[de.id];wt[de.id]||I.push(de),we&&Et[de.id].rows.forEach(Pe=>{const et=a.find(Zt=>Zt.id.toString()===Pe);et&&I.push(et)})}),I})(),[a]),Sr=C?ft.reduce((I,de,we)=>{var Pe,et,Zt,D;if(wt[de.id]){const B=(et=Et[(Pe=wt[de.id])==null?void 0:Pe.groupId])==null?void 0:et.rows.indexOf(String(de.id));I[de.id]="ingroup "+(B%2==0?"odd":"even")}else Et[de.id]?I[de.id]="group":we===0||I[(Zt=ft[we-1])==null?void 0:Zt.id].includes("group")?I[de.id]="odd":I[de.id]=I[(D=ft[we-1])==null?void 0:D.id]==="odd"?"even":"odd";return I},{}):{},nr=()=>{var de;const I=(de=Xt.current)==null?void 0:de.querySelectorAll(".th");I&&(Array.from(I).map(we=>({index:we.dataset.index,width:we.getBoundingClientRect().width})).map(({index:we,width:Pe})=>{var et,Zt;we&&((et=Lt.current)==null||et.style.setProperty(`--th-${we}-width`,Pe+"px"),(Zt=dt.current)==null||Zt.style.setProperty(`--td-${we}-width`,Pe+"px"))}),dt.current&&Lt.current&&dt.current.style.setProperty("--header-scroll-width",Lt.current.scrollWidth+"px"))};v.useLayoutEffect(()=>{var I;if(Xt.current){const de=(I=Xt.current)==null?void 0:I.querySelectorAll(".th"),we=new ResizeObserver(mT(nr,100));return de==null||de.forEach(Pe=>we.observe(Pe)),()=>{we.disconnect()}}},[Xt.current,Lt.current,dt.current,e,a]),v.useLayoutEffect(()=>{nr()}),v.useLayoutEffect(()=>{const I=Ve.current;if(I){const de=new ResizeObserver(()=>{fe(I.getBoundingClientRect().height)});return de.observe(I),()=>{de.disconnect()}}},[fe]),v.useLayoutEffect(()=>{const I=Lt.current;if(I){const de=new ResizeObserver(()=>{ye(I.getBoundingClientRect().height)});return de.observe(I),()=>{de.disconnect()}}},[ye]),v.useLayoutEffect(()=>{const I=ct.current;if(I){const de=new ResizeObserver(()=>{I.dataset.empty=String(I.getBoundingClientRect().width==0)});return de.observe(I),()=>{de.disconnect()}}},[]),v.useLayoutEffect(()=>{const I=Ve.current,de=gt.current,we=me.length>0||l||i||Ee;if(I&&de&&we){const Pe=new IntersectionObserver(function([et]){I&&(et.isIntersecting&&et.intersectionRatio>.99?I.setAttribute("data-shadow-left","false"):I.setAttribute("data-shadow-left","true"))},{root:I,threshold:[0,1]});return Pe.observe(de),()=>Pe.disconnect()}},[me,i,l,Ee]),v.useLayoutEffect(()=>{const I=Ve.current,de=nt.current;if(I&&de&&Ue){const we=new IntersectionObserver(function([Pe]){I&&(Pe.isIntersecting&&Pe.intersectionRatio>.99?I.setAttribute("data-shadow-right","false"):I.setAttribute("data-shadow-right","true"))},{root:I,threshold:[0,1]});return we.observe(de),()=>we.disconnect()}},[Ue]);function ua(I){const de=Et[I],we=wt[I],Pe=de&&(D=>{const B=D.rows.some(Y=>{var ne;return(ne=wt[Y])==null?void 0:ne.checked})&&D.rows.some(Y=>{var ne;return!((ne=wt[Y])!=null&&ne.checked)});return{checked:D.rows.every(Y=>{var ne;return(ne=wt[Y])==null?void 0:ne.checked}),indeterminate:B}})(de),et=we&&(D=>{var be;const B=(be=wt[D])==null?void 0:be.groupId,Y=B?Et[B]:void 0;if(!Y)return;const ne=Y==null?void 0:Y.rows.some(je=>{var ze,Ne;return je===D.toString()?!((ze=wt[je])!=null&&ze.checked):(Ne=wt[je])==null?void 0:Ne.checked});return{groupId:B,value:ne}})(I),Zt=a.reduce((D,B)=>{if(de){const Y=de.rows.includes(B.id.toString());B.id===I||Y?D[B.id]=!(Pe!=null&&Pe.indeterminate||Pe!=null&&Pe.checked):D[B.id]=B.id===I?!B.selected:!!B.selected}else D[B.id]=B.id===I?!B.selected:!!B.selected,we&&B.id===(et==null?void 0:et.groupId)&&(D[B.id]=et==null?void 0:et.value);return D},{});p==null||p(Zt,I)}function Nr(I){const de=a.reduce((we,Pe)=>{const et=Pe.id===I?!Pe.expanded:!!Pe.expanded;return we[Pe.id]=et,we},{});m==null||m(de)}const ln=I=>I.selected,_e=a.length>0&&a.every(ln),He=a.some(ln),Xe=v.useCallback(({name:I,width:de})=>{w==null||w({name:I,width:de+"px"})},[w]),pt=v.useCallback((I,de)=>{let we="initial";de==="asc"&&(we="desc"),de==="desc"&&(we="initial"),de==="initial"&&(we="asc"),b==null||b({name:I,sort:we})},[b]),at=v.useMemo(()=>e.filter(I=>!!I.sort).length>1,[e]),_t=(I,de,we)=>N.jsx(HR,{column:I,index:de,columnsAmount:e.length,showDividerForLastColumn:j,disableColumnResize:V,headerLineClamp:z,headerExtraLineClamp:_,handleResizeChange:Xe,handleSort:pt,dimension:E,spacingBetweenItems:M,multipleSort:at,columnMinWidth:W,hidden:we},`head_${I.name}`),Gt=I=>(de,we)=>{const Pe=we.name!==e[e.length-1].name||j;return N.jsx(Fi,{$dimension:E,$resizer:Pe,style:{width:`var(--td-${we.index}-width, 100px)`},className:"td","data-column":we.name,"data-row":de.id,children:we.renderCell?we.renderCell(de[we.name],de,I):S?S(de,we.name):N.jsx(oR,{$cellAlign:we.cellAlign,children:de[we.name]})},`${de.id}_${we.name}`)},Ht=I=>{var et,Zt,D,B;const de=((et=I.groupRows)==null?void 0:et.some(Y=>{var ne;return(ne=wt[Y])==null?void 0:ne.checked}))&&((Zt=I.groupRows)==null?void 0:Zt.some(Y=>{var ne;return!((ne=wt[Y])!=null&&ne.checked)})),we=(D=I.groupRows)==null?void 0:D.length,Pe=we?(B=I.groupRows)==null?void 0:B.every(Y=>{var ne;return(ne=wt[Y])==null?void 0:ne.checked}):I.selected;return N.jsx($R,{row:I,dimension:E,checkboxDimension:X,displayRowExpansionColumn:i,displayRowSelectionColumn:l,rowsDraggable:Ee,onRowExpansionChange:Nr,onRowSelectionChange:ua,renderCell:S,indeterminate:de,checked:Pe})},Ba=(I,de)=>N.jsx(_R,{row:I,dimension:E,checkboxDimension:X,columns:e,stickyColumns:me,displayRowExpansionColumn:i,displayRowSelectionColumn:l,rowsDraggable:Ee,renderBodyCell:Gt(de),onRowExpansionChange:Nr,onRowSelectionChange:ua}),xa=(I,de)=>{var B,Y,ne,be,je;const we=!!Et[I.id],Pe=!wt[I.id]||((Y=Et[(B=wt[I.id])==null?void 0:B.groupId])==null?void 0:Y.expanded),et=(({row:ze,isGroupRow:Ne,index:De,tableRows:$e})=>Ne?!ze.expanded&&ze.groupRows&&De>=$e.length-(ze.groupRows.length+1):De===$e.length-1)({row:I,isGroupRow:we,tableRows:ft,index:de}),Zt=we?`var(--header-scroll-width, ${((ne=Lt.current)==null?void 0:ne.scrollWidth)+"px"})`:void 0,D=(we||Pe)&&N.jsx(RR,{dimension:E,row:I,underline:et&&K&&!ue||!et,isGroup:we,groupId:((be=wt[I.id])==null?void 0:be.groupId)??null,onRowClick:g,onRowDoubleClick:y,rowWidth:Zt,grey:(je=Sr[I.id])==null?void 0:je.includes("even"),showRowsActions:Ue,rowStatusMap:qe,tableRef:Ve,headerHeight:pe,children:we?Ht(I):Ba(I,de)},`row_${I.id}`);return D&&(($==null?void 0:$(I,de,D))??D)},Tr=()=>{var de;const I=(Se==null?void 0:Se.emptyMessage)||L.locales[L.currentLocale].table.emptyMessage;return N.jsx(Vx,{$underline:K,$dimension:E,className:"tr",$rowWidth:`var(--header-scroll-width, ${((de=Lt.current)==null?void 0:de.scrollWidth)+"px"})`,children:N.jsx(bR,{$dimension:E,children:I})})};return N.jsxs(Lx,{ref:kr(O,Ve),"data-shadow-left":!1,"data-shadow-right":!1,"data-borders":ue,"data-dragging":!1,...ie,className:`table ${ie.className||""}`,children:[N.jsxs(SR,{ref:Xt,children:[(l||i||Ee||Ue)&&N.jsxs(om,{children:[Ee&&N.jsx(dc,{$dimension:E}),i&&N.jsx(fc,{$dimension:E}),l&&N.jsx(cc,{$dimension:E,children:N.jsx(su,{dimension:X})}),Ue&&N.jsx(e1,{$dimension:E})]}),N.jsxs(xR,{$expansionColumn:i,$selectionColumn:l,$overflowMenuColumn:Ue,$dimension:E,children:[me.length>0&&me.map((I,de)=>_t(I,de,!0)),e.map((I,de)=>I.sticky?null:_t(I,de,!0))]})]}),N.jsx(aR,{className:"thead",children:N.jsxs(nR,{$dimension:E,$greyHeader:T,ref:Lt,className:"tr",children:[(l||i||me.length>0||Ee)&&N.jsxs(N.Fragment,{children:[N.jsx(Iv,{ref:gt}),N.jsxs(om,{ref:Ct,$greyHeader:T,children:[Ee&&N.jsx(dc,{$dimension:E,"data-draggable":!1,"data-droppable":!1}),i&&N.jsx(fc,{$dimension:E,"data-draggable":!1,"data-droppable":!1}),l&&N.jsx(cc,{$dimension:E,className:"th_checkbox","data-th-column":"checkbox","data-draggable":!1,"data-droppable":!1,children:N.jsx(su,{dimension:X,checked:_e||He||u,indeterminate:He&&!_e||c,disabled:ft.length===0||d,onChange:function(I){const de=a.reduce((we,Pe)=>(we[Pe.id]=Pe.checkboxDisabled?!!Pe.selected:!He,we),{});p==null||p(de),h==null||h(I.target.checked)}})}),me.length>0&&me.map((I,de)=>_t(I,de))]})]}),N.jsx(rR,{ref:At,children:e.map((I,de)=>I.sticky?null:_t(I,de))}),N.jsx(Ym,{ref:ct}),Ue&&N.jsxs(N.Fragment,{children:[N.jsx(e1,{$dimension:E}),N.jsx(Iv,{ref:nt})]})]})}),Z&&(Z.fixedRowHeight||Z.estimatedRowHeight)?Z.fixedRowHeight?N.jsx(qR,{rowList:ft,childHeight:Z.fixedRowHeight,renderRow:xa,renderEmptyMessage:ft.length?void 0:Tr,ref:dt,className:"tbody",tableRef:Ve,tableHeight:ee,headerHeight:pe}):N.jsx(QR,{tableRef:Ve,tableHeight:ee,headerHeight:pe,rowList:ft,renderRow:xa,renderEmptyMessage:ft.length?void 0:Tr,estimatedRowHeight:Z.estimatedRowHeight,ref:dt,className:"tbody"}):N.jsx(Gm,{ref:dt,className:"tbody",children:ft.length?ft.map((I,de)=>xa(I,de)):Tr()}),N.jsx(kR,{onColumnDrag:Ce,onColumnDragEnd:ge,dimension:E,isAnyColumnDraggable:ve,isAnyStickyColumnDraggable:Ae,tableRef:Ve,normalColumnsWrapperRef:At,stickyColumnsWrapperRef:Ct}),N.jsx(FR,{onRowDrag:xe,onRowDragEnd:le,dimension:E,rowsDraggable:Ee,tableRef:Ve,bodyRef:dt,rowToGroupMap:wt})]})});Xx.displayName="Table";const ZR="/assets/VTBGroupUI-SemiBold-Wupg3RVc.ttf",KR="/assets/VTBGroupUI-Medium-CJW7SkqK.otf",WR="/assets/VTBGroupUI-Regular-JWIonCWQ.otf",JR=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${ZR}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${KR}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${WR}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function IR(e){return N.jsx("style",{type:"text/css",children:JR,...e})}var Fo={},a1;function e5(){if(a1)return Fo;a1=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=d,Fo.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,a=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,c=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function d(b,w){const S=new c,$=b.length;if($<2)return S;const E=(w==null?void 0:w.decode)||g;let T=0;do{const C=b.indexOf("=",T);if(C===-1)break;const M=b.indexOf(";",T),z=M===-1?$:M;if(C>z){T=b.lastIndexOf(";",C-1)+1;continue}const _=h(b,T,C),j=p(b,C,_),V=b.slice(_,j);if(S[V]===void 0){let K=h(b,C+1,z),q=p(b,z,K);const Z=E(b.slice(K,q));S[V]=Z}T=z+1}while(T<$);return S}function h(b,w,S){do{const $=b.charCodeAt(w);if($!==32&&$!==9)return w}while(++w<S);return S}function p(b,w,S){for(;w>S;){const $=b.charCodeAt(--w);if($!==32&&$!==9)return w+1}return S}function m(b,w,S){const $=(S==null?void 0:S.encode)||encodeURIComponent;if(!e.test(b))throw new TypeError(`argument name is invalid: ${b}`);const E=$(w);if(!a.test(E))throw new TypeError(`argument val is invalid: ${w}`);let T=b+"="+E;if(!S)return T;if(S.maxAge!==void 0){if(!Number.isInteger(S.maxAge))throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);T+="; Max-Age="+S.maxAge}if(S.domain){if(!l.test(S.domain))throw new TypeError(`option domain is invalid: ${S.domain}`);T+="; Domain="+S.domain}if(S.path){if(!i.test(S.path))throw new TypeError(`option path is invalid: ${S.path}`);T+="; Path="+S.path}if(S.expires){if(!y(S.expires)||!Number.isFinite(S.expires.valueOf()))throw new TypeError(`option expires is invalid: ${S.expires}`);T+="; Expires="+S.expires.toUTCString()}if(S.httpOnly&&(T+="; HttpOnly"),S.secure&&(T+="; Secure"),S.partitioned&&(T+="; Partitioned"),S.priority)switch(typeof S.priority=="string"?S.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${S.priority}`)}if(S.sameSite)switch(typeof S.sameSite=="string"?S.sameSite.toLowerCase():S.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)}return T}function g(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function y(b){return u.call(b)==="[object Date]"}return Fo}e5();/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zx=e=>{throw TypeError(e)},t5=(e,a,l)=>a.has(e)||Zx("Cannot "+l),ih=(e,a,l)=>(t5(e,a,"read from private field"),l?l.call(e):a.get(e)),r5=(e,a,l)=>a.has(e)?Zx("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(e):a.set(e,l),n1="popstate";function a5(e={}){function a(i,u){let{pathname:c,search:d,hash:h}=i.location;return cu("",{pathname:c,search:d,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(i,u){return typeof u=="string"?u:Fn(u)}return l5(a,l,null,e)}function rt(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}function tr(e,a){if(!e){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function n5(){return Math.random().toString(36).substring(2,10)}function l1(e,a){return{usr:e.state,key:e.key,idx:a}}function cu(e,a,l=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof a=="string"?Yn(a):a,state:l,key:a&&a.key||i||n5()}}function Fn({pathname:e="/",search:a="",hash:l=""}){return a&&a!=="?"&&(e+=a.charAt(0)==="?"?a:"?"+a),l&&l!=="#"&&(e+=l.charAt(0)==="#"?l:"#"+l),e}function Yn(e){let a={};if(e){let l=e.indexOf("#");l>=0&&(a.hash=e.substring(l),e=e.substring(0,l));let i=e.indexOf("?");i>=0&&(a.search=e.substring(i),e=e.substring(0,i)),e&&(a.pathname=e)}return a}function l5(e,a,l,i={}){let{window:u=document.defaultView,v5Compat:c=!1}=i,d=u.history,h="POP",p=null,m=g();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function g(){return(d.state||{idx:null}).idx}function y(){h="POP";let E=g(),T=E==null?null:E-m;m=E,p&&p({action:h,location:$.location,delta:T})}function b(E,T){h="PUSH";let C=cu($.location,E,T);m=g()+1;let M=l1(C,m),z=$.createHref(C);try{d.pushState(M,"",z)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;u.location.assign(z)}c&&p&&p({action:h,location:$.location,delta:1})}function w(E,T){h="REPLACE";let C=cu($.location,E,T);m=g();let M=l1(C,m),z=$.createHref(C);d.replaceState(M,"",z),c&&p&&p({action:h,location:$.location,delta:0})}function S(E){let T=u.location.origin!=="null"?u.location.origin:u.location.href,C=typeof E=="string"?E:Fn(E);return C=C.replace(/ $/,"%20"),rt(T,`No window.location.(origin|href) available to create URL for href: ${C}`),new URL(C,T)}let $={get action(){return h},get location(){return e(u,d)},listen(E){if(p)throw new Error("A history only accepts one active listener");return u.addEventListener(n1,y),p=E,()=>{u.removeEventListener(n1,y),p=null}},createHref(E){return a(u,E)},createURL:S,encodeLocation(E){let T=S(E);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:b,replace:w,go(E){return d.go(E)}};return $}var Wo,i1=class{constructor(e){if(r5(this,Wo,new Map),e)for(let[a,l]of e)this.set(a,l)}get(e){if(ih(this,Wo).has(e))return ih(this,Wo).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,a){ih(this,Wo).set(e,a)}};Wo=new WeakMap;var i5=new Set(["lazy","caseSensitive","path","id","index","children"]);function o5(e){return i5.has(e)}var u5=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function s5(e){return u5.has(e)}function c5(e){return e.index===!0}function mc(e,a,l=[],i={}){return e.map((u,c)=>{let d=[...l,String(c)],h=typeof u.id=="string"?u.id:d.join("-");if(rt(u.index!==!0||!u.children,"Cannot specify children on an index route"),rt(!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),c5(u)){let p={...u,...a(u),id:h};return i[h]=p,p}else{let p={...u,...a(u),id:h,children:void 0};return i[h]=p,u.children&&(p.children=mc(u.children,a,d,i)),p}})}function Cn(e,a,l="/"){return Js(e,a,l,!1)}function Js(e,a,l,i){let u=typeof a=="string"?Yn(a):a,c=oa(u.pathname||"/",l);if(c==null)return null;let d=Kx(e);d5(d);let h=null;for(let p=0;h==null&&p<d.length;++p){let m=w5(c);h=S5(d[p],m,i)}return h}function f5(e,a){let{route:l,pathname:i,params:u}=e;return{id:l.id,pathname:i,params:u,data:a[l.id],handle:l.handle}}function Kx(e,a=[],l=[],i=""){let u=(c,d,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};p.relativePath.startsWith("/")&&(rt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let m=Aa([i,p.relativePath]),g=l.concat(p);c.children&&c.children.length>0&&(rt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Kx(c.children,a,g,m)),!(c.path==null&&!c.index)&&a.push({path:m,score:b5(m,c.index),routesMeta:g})};return e.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))u(c,d);else for(let p of Wx(c.path))u(c,d,p)}),a}function Wx(e){let a=e.split("/");if(a.length===0)return[];let[l,...i]=a,u=l.endsWith("?"),c=l.replace(/\?$/,"");if(i.length===0)return u?[c,""]:[c];let d=Wx(i.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),u&&h.push(...d),h.map(p=>e.startsWith("/")&&p===""?"/":p)}function d5(e){e.sort((a,l)=>a.score!==l.score?l.score-a.score:x5(a.routesMeta.map(i=>i.childrenIndex),l.routesMeta.map(i=>i.childrenIndex)))}var h5=/^:[\w-]+$/,m5=3,p5=2,g5=1,y5=10,v5=-2,o1=e=>e==="*";function b5(e,a){let l=e.split("/"),i=l.length;return l.some(o1)&&(i+=v5),a&&(i+=p5),l.filter(u=>!o1(u)).reduce((u,c)=>u+(h5.test(c)?m5:c===""?g5:y5),i)}function x5(e,a){return e.length===a.length&&e.slice(0,-1).every((i,u)=>i===a[u])?e[e.length-1]-a[a.length-1]:0}function S5(e,a,l=!1){let{routesMeta:i}=e,u={},c="/",d=[];for(let h=0;h<i.length;++h){let p=i[h],m=h===i.length-1,g=c==="/"?a:a.slice(c.length)||"/",y=pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),b=p.route;if(!y&&m&&l&&!i[i.length-1].route.index&&(y=pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(u,y.params),d.push({params:u,pathname:Aa([c,y.pathname]),pathnameBase:N5(Aa([c,y.pathnameBase])),route:b}),y.pathnameBase!=="/"&&(c=Aa([c,y.pathnameBase]))}return d}function pc(e,a){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[l,i]=E5(e.path,e.caseSensitive,e.end),u=a.match(l);if(!u)return null;let c=u[0],d=c.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:i.reduce((m,{paramName:g,isOptional:y},b)=>{if(g==="*"){let S=h[b]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const w=h[b];return y&&!w?m[g]=void 0:m[g]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:d,pattern:e}}function E5(e,a=!1,l=!0){tr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],u="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),u+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":e!==""&&e!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,a?void 0:"i"),i]}function w5(e){try{return e.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return tr(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),e}}function oa(e,a){if(a==="/")return e;if(!e.toLowerCase().startsWith(a.toLowerCase()))return null;let l=a.endsWith("/")?a.length-1:a.length,i=e.charAt(l);return i&&i!=="/"?null:e.slice(l)||"/"}function $5(e,a="/"){let{pathname:l,search:i="",hash:u=""}=typeof e=="string"?Yn(e):e;return{pathname:l?l.startsWith("/")?l:_5(l,a):a,search:T5(i),hash:R5(u)}}function _5(e,a){let l=a.replace(/\/+$/,"").split("/");return e.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function oh(e,a,l,i){return`Cannot include a '${e}' character in a manually specified \`to.${a}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Jx(e){return e.filter((a,l)=>l===0||a.route.path&&a.route.path.length>0)}function Vm(e){let a=Jx(e);return a.map((l,i)=>i===a.length-1?l.pathname:l.pathnameBase)}function Qm(e,a,l,i=!1){let u;typeof e=="string"?u=Yn(e):(u={...e},rt(!u.pathname||!u.pathname.includes("?"),oh("?","pathname","search",u)),rt(!u.pathname||!u.pathname.includes("#"),oh("#","pathname","hash",u)),rt(!u.search||!u.search.includes("#"),oh("#","search","hash",u)));let c=e===""||u.pathname==="",d=c?"/":u.pathname,h;if(d==null)h=l;else{let y=a.length-1;if(!i&&d.startsWith("..")){let b=d.split("/");for(;b[0]==="..";)b.shift(),y-=1;u.pathname=b.join("/")}h=y>=0?a[y]:"/"}let p=$5(u,h),m=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&l.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var Aa=e=>e.join("/").replace(/\/\/+/g,"/"),N5=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),T5=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,R5=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,gc=class{constructor(e,a,l,i=!1){this.status=e,this.statusText=a||"",this.internal=i,l instanceof Error?(this.data=l.toString(),this.error=l):this.data=l}};function fu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Ix=["POST","PUT","PATCH","DELETE"],M5=new Set(Ix),O5=["GET",...Ix],C5=new Set(O5),A5=new Set([301,302,303,307,308]),D5=new Set([307,308]),uh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},z5={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},qo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B5=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),eS="remix-router-transitions",tS=Symbol("ResetLoaderData");function j5(e){const a=e.window?e.window:typeof window<"u"?window:void 0,l=typeof a<"u"&&typeof a.document<"u"&&typeof a.document.createElement<"u";rt(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.mapRouteProperties||B5,u={},c=mc(e.routes,i,void 0,u),d,h=e.basename||"/",p=e.dataStrategy||F5,m={unstable_middleware:!1,...e.future},g=null,y=new Set,b=null,w=null,S=null,$=e.hydrationData!=null,E=Cn(c,e.history.location,h),T=!1,C=null;if(E==null&&!e.patchRoutesOnNavigation){let D=na(404,{pathname:e.history.location.pathname}),{matches:B,route:Y}=S1(c);E=B,C={[Y.id]:D}}E&&!e.hydrationData&&we(E,c,e.history.location.pathname).active&&(E=null);let M;if(E)if(E.some(D=>D.route.lazy))M=!1;else if(!E.some(D=>D.route.loader))M=!0;else{let D=e.hydrationData?e.hydrationData.loaderData:null,B=e.hydrationData?e.hydrationData.errors:null;if(B){let Y=E.findIndex(ne=>B[ne.route.id]!==void 0);M=E.slice(0,Y+1).every(ne=>!cm(ne.route,D,B))}else M=E.every(Y=>!cm(Y.route,D,B))}else{M=!1,E=[];let D=we(null,c,e.history.location.pathname);D.active&&D.matches&&(T=!0,E=D.matches)}let z,_={historyAction:e.history.action,location:e.history.location,matches:E,initialized:M,navigation:uh,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||C,fetchers:new Map,blockers:new Map},j="POP",V=!1,K,q=!1,Z=new Map,Se=null,Ce=!1,ge=!1,Ee=new Set,xe=new Map,le=0,he=-1,ue=new Map,ie=new Set,O=new Map,L=new Map,X=new Set,W=new Map,ee,fe=null;function pe(){if(g=e.history.listen(({action:D,location:B,delta:Y})=>{if(ee){ee(),ee=void 0;return}tr(W.size===0||Y!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=Ht({currentLocation:_.location,nextLocation:B,historyAction:D});if(ne&&Y!=null){let be=new Promise(je=>{ee=je});e.history.go(Y*-1),Gt(ne,{state:"blocked",location:B,proceed(){Gt(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),be.then(()=>e.history.go(Y))},reset(){let je=new Map(_.blockers);je.set(ne,qo),ve({blockers:je})}});return}return Ve(D,B)}),l){e3(a,Z);let D=()=>t3(a,Z);a.addEventListener("pagehide",D),Se=()=>a.removeEventListener("pagehide",D)}return _.initialized||Ve("POP",_.location,{initialHydration:!0}),z}function ye(){g&&g(),Se&&Se(),y.clear(),K&&K.abort(),_.fetchers.forEach((D,B)=>Nr(B)),_.blockers.forEach((D,B)=>_t(B))}function me(D){return y.add(D),()=>y.delete(D)}function ve(D,B={}){_={..._,...D};let Y=[],ne=[];_.fetchers.forEach((be,je)=>{be.state==="idle"&&(X.has(je)?Y.push(je):ne.push(je))}),X.forEach(be=>{!_.fetchers.has(be)&&!xe.has(be)&&Y.push(be)}),[...y].forEach(be=>be(_,{deletedFetchers:Y,viewTransitionOpts:B.viewTransitionOpts,flushSync:B.flushSync===!0})),Y.forEach(be=>Nr(be)),ne.forEach(be=>_.fetchers.delete(be))}function Ae(D,B,{flushSync:Y}={}){var $e,Te;let ne=_.actionData!=null&&_.navigation.formMethod!=null&&pa(_.navigation.formMethod)&&_.navigation.state==="loading"&&(($e=D.state)==null?void 0:$e._isRedirect)!==!0,be;B.actionData?Object.keys(B.actionData).length>0?be=B.actionData:be=null:ne?be=_.actionData:be=null;let je=B.loaderData?b1(_.loaderData,B.loaderData,B.matches||[],B.errors):_.loaderData,ze=_.blockers;ze.size>0&&(ze=new Map(ze),ze.forEach((Re,Ye)=>ze.set(Ye,qo)));let Ne=V===!0||_.navigation.formMethod!=null&&pa(_.navigation.formMethod)&&((Te=D.state)==null?void 0:Te._isRedirect)!==!0;d&&(c=d,d=void 0),Ce||j==="POP"||(j==="PUSH"?e.history.push(D,D.state):j==="REPLACE"&&e.history.replace(D,D.state));let De;if(j==="POP"){let Re=Z.get(_.location.pathname);Re&&Re.has(D.pathname)?De={currentLocation:_.location,nextLocation:D}:Z.has(D.pathname)&&(De={currentLocation:D,nextLocation:_.location})}else if(q){let Re=Z.get(_.location.pathname);Re?Re.add(D.pathname):(Re=new Set([D.pathname]),Z.set(_.location.pathname,Re)),De={currentLocation:_.location,nextLocation:D}}ve({...B,actionData:be,loaderData:je,historyAction:j,location:D,initialized:!0,navigation:uh,revalidation:"idle",restoreScrollPosition:de(D,B.matches||_.matches),preventScrollReset:Ne,blockers:ze},{viewTransitionOpts:De,flushSync:Y===!0}),j="POP",V=!1,q=!1,Ce=!1,ge=!1,fe==null||fe.resolve(),fe=null}async function Ue(D,B){if(typeof D=="number"){e.history.go(D);return}let Y=sm(_.location,_.matches,h,D,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:ne,submission:be,error:je}=u1(!1,Y,B),ze=_.location,Ne=cu(_.location,ne,B&&B.state);Ne={...Ne,...e.history.encodeLocation(Ne)};let De=B&&B.replace!=null?B.replace:void 0,$e="PUSH";De===!0?$e="REPLACE":De===!1||be!=null&&pa(be.formMethod)&&be.formAction===_.location.pathname+_.location.search&&($e="REPLACE");let Te=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,Re=(B&&B.flushSync)===!0,Ye=Ht({currentLocation:ze,nextLocation:Ne,historyAction:$e});if(Ye){Gt(Ye,{state:"blocked",location:Ne,proceed(){Gt(Ye,{state:"proceeding",proceed:void 0,reset:void 0,location:Ne}),Ue(D,B)},reset(){let bt=new Map(_.blockers);bt.set(Ye,qo),ve({blockers:bt})}});return}await Ve($e,Ne,{submission:be,pendingError:je,preventScrollReset:Te,replace:B&&B.replace,enableViewTransition:B&&B.viewTransition,flushSync:Re})}function qe(){fe||(fe=r3()),ft(),ve({revalidation:"loading"});let D=fe.promise;return _.navigation.state==="submitting"?D:_.navigation.state==="idle"?(Ve(_.historyAction,_.location,{startUninterruptedRevalidation:!0}),D):(Ve(j||_.historyAction,_.navigation.location,{overrideNavigation:_.navigation,enableViewTransition:q===!0}),D)}async function Ve(D,B,Y){K&&K.abort(),K=null,j=D,Ce=(Y&&Y.startUninterruptedRevalidation)===!0,I(_.location,_.matches),V=(Y&&Y.preventScrollReset)===!0,q=(Y&&Y.enableViewTransition)===!0;let ne=d||c,be=Y&&Y.overrideNavigation,je=Y!=null&&Y.initialHydration&&_.matches&&_.matches.length>0&&!T?_.matches:Cn(ne,B,h),ze=(Y&&Y.flushSync)===!0;if(je&&_.initialized&&!ge&&Z5(_.location,B)&&!(Y&&Y.submission&&pa(Y.submission.formMethod))){Ae(B,{matches:je},{flushSync:ze});return}let Ne=we(je,ne,B.pathname);if(Ne.active&&Ne.matches&&(je=Ne.matches),!je){let{error:Pt,notFoundMatches:Ot,route:Ut}=Ba(B.pathname);Ae(B,{matches:Ot,loaderData:{},errors:{[Ut.id]:Pt}},{flushSync:ze});return}K=new AbortController;let De=gi(e.history,B,K.signal,Y&&Y.submission),$e=new i1(e.unstable_getContext?await e.unstable_getContext():void 0),Te;if(Y&&Y.pendingError)Te=[gl(je).route.id,{type:"error",error:Y.pendingError}];else if(Y&&Y.submission&&pa(Y.submission.formMethod)){let Pt=await Lt(De,B,Y.submission,je,$e,Ne.active,{replace:Y.replace,flushSync:ze});if(Pt.shortCircuited)return;if(Pt.pendingActionResult){let[Ot,Ut]=Pt.pendingActionResult;if(Pr(Ut)&&fu(Ut.error)&&Ut.error.status===404){K=null,Ae(B,{matches:Pt.matches,loaderData:{},errors:{[Ot]:Ut.error}});return}}je=Pt.matches||je,Te=Pt.pendingActionResult,be=sh(B,Y.submission),ze=!1,Ne.active=!1,De=gi(e.history,De.url,De.signal)}let{shortCircuited:Re,matches:Ye,loaderData:bt,errors:Kt}=await Xt(De,B,je,$e,Ne.active,be,Y&&Y.submission,Y&&Y.fetcherSubmission,Y&&Y.replace,Y&&Y.initialHydration===!0,ze,Te);Re||(K=null,Ae(B,{matches:Ye||je,...x1(Te),loaderData:bt,errors:Kt}))}async function Lt(D,B,Y,ne,be,je,ze={}){ft();let Ne=J5(B,Y);if(ve({navigation:Ne},{flushSync:ze.flushSync===!0}),je){let Te=await Pe(ne,B.pathname,D.signal);if(Te.type==="aborted")return{shortCircuited:!0};if(Te.type==="error"){let Re=gl(Te.partialMatches).route.id;return{matches:Te.partialMatches,pendingActionResult:[Re,{type:"error",error:Te.error}]}}else if(Te.matches)ne=Te.matches;else{let{notFoundMatches:Re,error:Ye,route:bt}=Ba(B.pathname);return{matches:Re,pendingActionResult:[bt.id,{type:"error",error:Ye}]}}}let De,$e=Jo(ne,B);if(!$e.route.action&&!$e.route.lazy)De={type:"error",error:na(405,{method:D.method,pathname:B.pathname,routeId:$e.route.id})};else{let Te=await Et("action",D,[$e],ne,be,null);if(De=Te[$e.route.id],!De){for(let Re of ne)if(Te[Re.route.id]){De=Te[Re.route.id];break}}if(D.signal.aborted)return{shortCircuited:!0}}if(vl(De)){let Te;return ze&&ze.replace!=null?Te=ze.replace:Te=g1(De.response.headers.get("Location"),new URL(D.url),h)===_.location.pathname+_.location.search,await nt(D,De,!0,{submission:Y,replace:Te}),{shortCircuited:!0}}if(Pr(De)){let Te=gl(ne,$e.route.id);return(ze&&ze.replace)!==!0&&(j="PUSH"),{matches:ne,pendingActionResult:[Te.route.id,De]}}return{matches:ne,pendingActionResult:[$e.route.id,De]}}async function Xt(D,B,Y,ne,be,je,ze,Ne,De,$e,Te,Re){let Ye=je||sh(B,ze),bt=ze||Ne||w1(Ye),Kt=!Ce&&!$e;if(be){if(Kt){let Dt=dt(Re);ve({navigation:Ye,...Dt!==void 0?{actionData:Dt}:{}},{flushSync:Te})}let ut=await Pe(Y,B.pathname,D.signal);if(ut.type==="aborted")return{shortCircuited:!0};if(ut.type==="error"){let Dt=gl(ut.partialMatches).route.id;return{matches:ut.partialMatches,loaderData:{},errors:{[Dt]:ut.error}}}else if(ut.matches)Y=ut.matches;else{let{error:Dt,notFoundMatches:Rr,route:Qn}=Ba(B.pathname);return{matches:Rr,loaderData:{},errors:{[Qn.id]:Dt}}}}let Pt=d||c,[Ot,Ut]=c1(e.history,_,Y,bt,B,$e===!0,ge,Ee,X,O,ie,Pt,h,Re);if(he=++le,Ot.length===0&&Ut.length===0){let ut=Xe();return Ae(B,{matches:Y,loaderData:{},errors:Re&&Pr(Re[1])?{[Re[0]]:Re[1].error}:null,...x1(Re),...ut?{fetchers:new Map(_.fetchers)}:{}},{flushSync:Te}),{shortCircuited:!0}}if(Kt){let ut={};if(!be){ut.navigation=Ye;let Dt=dt(Re);Dt!==void 0&&(ut.actionData=Dt)}Ut.length>0&&(ut.fetchers=Ct(Ut)),ve(ut,{flushSync:Te})}Ut.forEach(ut=>{_e(ut.key),ut.controller&&xe.set(ut.key,ut.controller)});let Fr=()=>Ut.forEach(ut=>_e(ut.key));K&&K.signal.addEventListener("abort",Fr);let{loaderResults:ja,fetcherResults:cr}=await wt(Y,Ot,Ut,D,ne);if(D.signal.aborted)return{shortCircuited:!0};K&&K.signal.removeEventListener("abort",Fr),Ut.forEach(ut=>xe.delete(ut.key));let fr=Ys(ja);if(fr)return await nt(D,fr.result,!0,{replace:De}),{shortCircuited:!0};if(fr=Ys(cr),fr)return ie.add(fr.key),await nt(D,fr.result,!0,{replace:De}),{shortCircuited:!0};let{loaderData:La,errors:qr}=v1(_,Y,ja,Re,Ut,cr);$e&&_.errors&&(qr={..._.errors,...qr});let Nt=Xe(),Gn=pt(he),Vn=Nt||Gn||Ut.length>0;return{matches:Y,loaderData:La,errors:qr,...Vn?{fetchers:new Map(_.fetchers)}:{}}}function dt(D){if(D&&!Pr(D[1]))return{[D[0]]:D[1].data};if(_.actionData)return Object.keys(_.actionData).length===0?null:_.actionData}function Ct(D){return D.forEach(B=>{let Y=_.fetchers.get(B.key),ne=Yo(void 0,Y?Y.data:void 0);_.fetchers.set(B.key,ne)}),new Map(_.fetchers)}async function At(D,B,Y,ne){_e(D);let be=(ne&&ne.flushSync)===!0,je=d||c,ze=sm(_.location,_.matches,h,Y,B,ne==null?void 0:ne.relative),Ne=Cn(je,ze,h),De=we(Ne,je,ze);if(De.active&&De.matches&&(Ne=De.matches),!Ne){nr(D,B,na(404,{pathname:ze}),{flushSync:be});return}let{path:$e,submission:Te,error:Re}=u1(!0,ze,ne);if(Re){nr(D,B,Re,{flushSync:be});return}let Ye=Jo(Ne,$e),bt=new i1(e.unstable_getContext?await e.unstable_getContext():void 0),Kt=(ne&&ne.preventScrollReset)===!0;if(Te&&pa(Te.formMethod)){await ct(D,B,$e,Ye,Ne,bt,De.active,be,Kt,Te);return}O.set(D,{routeId:B,path:$e}),await gt(D,B,$e,Ye,Ne,bt,De.active,be,Kt,Te)}async function ct(D,B,Y,ne,be,je,ze,Ne,De,$e){ft(),O.delete(D);function Te(zt){if(!zt.route.action&&!zt.route.lazy){let Ha=na(405,{method:$e.formMethod,pathname:Y,routeId:B});return nr(D,B,Ha,{flushSync:Ne}),!0}return!1}if(!ze&&Te(ne))return;let Re=_.fetchers.get(D);Sr(D,I5($e,Re),{flushSync:Ne});let Ye=new AbortController,bt=gi(e.history,Y,Ye.signal,$e);if(ze){let zt=await Pe(be,Y,bt.signal,D);if(zt.type==="aborted")return;if(zt.type==="error"){nr(D,B,zt.error,{flushSync:Ne});return}else if(zt.matches){if(be=zt.matches,ne=Jo(be,Y),Te(ne))return}else{nr(D,B,na(404,{pathname:Y}),{flushSync:Ne});return}}xe.set(D,Ye);let Kt=le,Ot=(await Et("action",bt,[ne],be,je,D))[ne.route.id];if(bt.signal.aborted){xe.get(D)===Ye&&xe.delete(D);return}if(X.has(D)){if(vl(Ot)||Pr(Ot)){Sr(D,On(void 0));return}}else{if(vl(Ot))if(xe.delete(D),he>Kt){Sr(D,On(void 0));return}else return ie.add(D),Sr(D,Yo($e)),nt(bt,Ot,!1,{fetcherSubmission:$e,preventScrollReset:De});if(Pr(Ot)){nr(D,B,Ot.error);return}}let Ut=_.navigation.location||_.location,Fr=gi(e.history,Ut,Ye.signal),ja=d||c,cr=_.navigation.state!=="idle"?Cn(ja,_.navigation.location,h):_.matches;rt(cr,"Didn't find any matches after fetcher action");let fr=++le;ue.set(D,fr);let La=Yo($e,Ot.data);_.fetchers.set(D,La);let[qr,Nt]=c1(e.history,_,cr,$e,Ut,!1,ge,Ee,X,O,ie,ja,h,[ne.route.id,Ot]);Nt.filter(zt=>zt.key!==D).forEach(zt=>{let Ha=zt.key,Ru=_.fetchers.get(Ha),Ll=Yo(void 0,Ru?Ru.data:void 0);_.fetchers.set(Ha,Ll),_e(Ha),zt.controller&&xe.set(Ha,zt.controller)}),ve({fetchers:new Map(_.fetchers)});let Gn=()=>Nt.forEach(zt=>_e(zt.key));Ye.signal.addEventListener("abort",Gn);let{loaderResults:Vn,fetcherResults:ut}=await wt(cr,qr,Nt,Fr,je);if(Ye.signal.aborted)return;Ye.signal.removeEventListener("abort",Gn),ue.delete(D),xe.delete(D),Nt.forEach(zt=>xe.delete(zt.key));let Dt=Ys(Vn);if(Dt)return nt(Fr,Dt.result,!1,{preventScrollReset:De});if(Dt=Ys(ut),Dt)return ie.add(Dt.key),nt(Fr,Dt.result,!1,{preventScrollReset:De});let{loaderData:Rr,errors:Qn}=v1(_,cr,Vn,void 0,Nt,ut);if(_.fetchers.has(D)){let zt=On(Ot.data);_.fetchers.set(D,zt)}pt(fr),_.navigation.state==="loading"&&fr>he?(rt(j,"Expected pending action"),K&&K.abort(),Ae(_.navigation.location,{matches:cr,loaderData:Rr,errors:Qn,fetchers:new Map(_.fetchers)})):(ve({errors:Qn,loaderData:b1(_.loaderData,Rr,cr,Qn),fetchers:new Map(_.fetchers)}),ge=!1)}async function gt(D,B,Y,ne,be,je,ze,Ne,De,$e){let Te=_.fetchers.get(D);Sr(D,Yo($e,Te?Te.data:void 0),{flushSync:Ne});let Re=new AbortController,Ye=gi(e.history,Y,Re.signal);if(ze){let Ot=await Pe(be,Y,Ye.signal,D);if(Ot.type==="aborted")return;if(Ot.type==="error"){nr(D,B,Ot.error,{flushSync:Ne});return}else if(Ot.matches)be=Ot.matches,ne=Jo(be,Y);else{nr(D,B,na(404,{pathname:Y}),{flushSync:Ne});return}}xe.set(D,Re);let bt=le,Pt=(await Et("loader",Ye,[ne],be,je,D))[ne.route.id];if(xe.get(D)===Re&&xe.delete(D),!Ye.signal.aborted){if(X.has(D)){Sr(D,On(void 0));return}if(vl(Pt))if(he>bt){Sr(D,On(void 0));return}else{ie.add(D),await nt(Ye,Pt,!1,{preventScrollReset:De});return}if(Pr(Pt)){nr(D,B,Pt.error);return}Sr(D,On(Pt.data))}}async function nt(D,B,Y,{submission:ne,fetcherSubmission:be,preventScrollReset:je,replace:ze}={}){B.response.headers.has("X-Remix-Revalidate")&&(ge=!0);let Ne=B.response.headers.get("Location");rt(Ne,"Expected a Location header on the redirect Response"),Ne=g1(Ne,new URL(D.url),h);let De=cu(_.location,Ne,{_isRedirect:!0});if(l){let Kt=!1;if(B.response.headers.has("X-Remix-Reload-Document"))Kt=!0;else if(Xm.test(Ne)){const Pt=e.history.createURL(Ne);Kt=Pt.origin!==a.location.origin||oa(Pt.pathname,h)==null}if(Kt){ze?a.location.replace(Ne):a.location.assign(Ne);return}}K=null;let $e=ze===!0||B.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Te,formAction:Re,formEncType:Ye}=_.navigation;!ne&&!be&&Te&&Re&&Ye&&(ne=w1(_.navigation));let bt=ne||be;if(D5.has(B.response.status)&&bt&&pa(bt.formMethod))await Ve($e,De,{submission:{...bt,formAction:Ne},preventScrollReset:je||V,enableViewTransition:Y?q:void 0});else{let Kt=sh(De,ne);await Ve($e,De,{overrideNavigation:Kt,fetcherSubmission:be,preventScrollReset:je||V,enableViewTransition:Y?q:void 0})}}async function Et(D,B,Y,ne,be,je){let ze,Ne={};try{ze=await Y5(p,D,B,Y,ne,je,u,i,be)}catch(De){return Y.forEach($e=>{Ne[$e.route.id]={type:"error",error:De}}),Ne}for(let[De,$e]of Object.entries(ze))if(K5($e)){let Te=$e.result;Ne[De]={type:"redirect",response:Q5(Te,B,De,ne,h)}}else Ne[De]=await V5($e);return Ne}async function wt(D,B,Y,ne,be){let je=Et("loader",ne,B,D,be,null),ze=Promise.all(Y.map(async $e=>{if($e.matches&&$e.match&&$e.controller){let Re=(await Et("loader",gi(e.history,$e.path,$e.controller.signal),[$e.match],$e.matches,be,$e.key))[$e.match.route.id];return{[$e.key]:Re}}else return Promise.resolve({[$e.key]:{type:"error",error:na(404,{pathname:$e.path})}})})),Ne=await je,De=(await ze).reduce(($e,Te)=>Object.assign($e,Te),{});return{loaderResults:Ne,fetcherResults:De}}function ft(){ge=!0,O.forEach((D,B)=>{xe.has(B)&&Ee.add(B),_e(B)})}function Sr(D,B,Y={}){_.fetchers.set(D,B),ve({fetchers:new Map(_.fetchers)},{flushSync:(Y&&Y.flushSync)===!0})}function nr(D,B,Y,ne={}){let be=gl(_.matches,B);Nr(D),ve({errors:{[be.route.id]:Y},fetchers:new Map(_.fetchers)},{flushSync:(ne&&ne.flushSync)===!0})}function ua(D){return L.set(D,(L.get(D)||0)+1),X.has(D)&&X.delete(D),_.fetchers.get(D)||z5}function Nr(D){let B=_.fetchers.get(D);xe.has(D)&&!(B&&B.state==="loading"&&ue.has(D))&&_e(D),O.delete(D),ue.delete(D),ie.delete(D),X.delete(D),Ee.delete(D),_.fetchers.delete(D)}function ln(D){let B=(L.get(D)||0)-1;B<=0?(L.delete(D),X.add(D)):L.set(D,B),ve({fetchers:new Map(_.fetchers)})}function _e(D){let B=xe.get(D);B&&(B.abort(),xe.delete(D))}function He(D){for(let B of D){let Y=ua(B),ne=On(Y.data);_.fetchers.set(B,ne)}}function Xe(){let D=[],B=!1;for(let Y of ie){let ne=_.fetchers.get(Y);rt(ne,`Expected fetcher: ${Y}`),ne.state==="loading"&&(ie.delete(Y),D.push(Y),B=!0)}return He(D),B}function pt(D){let B=[];for(let[Y,ne]of ue)if(ne<D){let be=_.fetchers.get(Y);rt(be,`Expected fetcher: ${Y}`),be.state==="loading"&&(_e(Y),ue.delete(Y),B.push(Y))}return He(B),B.length>0}function at(D,B){let Y=_.blockers.get(D)||qo;return W.get(D)!==B&&W.set(D,B),Y}function _t(D){_.blockers.delete(D),W.delete(D)}function Gt(D,B){let Y=_.blockers.get(D)||qo;rt(Y.state==="unblocked"&&B.state==="blocked"||Y.state==="blocked"&&B.state==="blocked"||Y.state==="blocked"&&B.state==="proceeding"||Y.state==="blocked"&&B.state==="unblocked"||Y.state==="proceeding"&&B.state==="unblocked",`Invalid blocker state transition: ${Y.state} -> ${B.state}`);let ne=new Map(_.blockers);ne.set(D,B),ve({blockers:ne})}function Ht({currentLocation:D,nextLocation:B,historyAction:Y}){if(W.size===0)return;W.size>1&&tr(!1,"A router only supports one blocker at a time");let ne=Array.from(W.entries()),[be,je]=ne[ne.length-1],ze=_.blockers.get(be);if(!(ze&&ze.state==="proceeding")&&je({currentLocation:D,nextLocation:B,historyAction:Y}))return be}function Ba(D){let B=na(404,{pathname:D}),Y=d||c,{matches:ne,route:be}=S1(Y);return{notFoundMatches:ne,route:be,error:B}}function xa(D,B,Y){if(b=D,S=B,w=Y||null,!$&&_.navigation===uh){$=!0;let ne=de(_.location,_.matches);ne!=null&&ve({restoreScrollPosition:ne})}return()=>{b=null,S=null,w=null}}function Tr(D,B){return w&&w(D,B.map(ne=>f5(ne,_.loaderData)))||D.key}function I(D,B){if(b&&S){let Y=Tr(D,B);b[Y]=S()}}function de(D,B){if(b){let Y=Tr(D,B),ne=b[Y];if(typeof ne=="number")return ne}return null}function we(D,B,Y){if(e.patchRoutesOnNavigation)if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Js(B,Y,h,!0)}}else return{active:!0,matches:Js(B,Y,h,!0)||[]};return{active:!1,matches:null}}async function Pe(D,B,Y,ne){if(!e.patchRoutesOnNavigation)return{type:"success",matches:D};let be=D;for(;;){let je=d==null,ze=d||c,Ne=u;try{await e.patchRoutesOnNavigation({signal:Y,path:B,matches:be,fetcherKey:ne,patch:(Te,Re)=>{Y.aborted||d1(Te,Re,ze,Ne,i)}})}catch(Te){return{type:"error",error:Te,partialMatches:be}}finally{je&&!Y.aborted&&(c=[...c])}if(Y.aborted)return{type:"aborted"};let De=Cn(ze,B,h);if(De)return{type:"success",matches:De};let $e=Js(ze,B,h,!0);if(!$e||be.length===$e.length&&be.every((Te,Re)=>Te.route.id===$e[Re].route.id))return{type:"success",matches:null};be=$e}}function et(D){u={},d=mc(D,i,void 0,u)}function Zt(D,B){let Y=d==null;d1(D,B,d||c,u,i),Y&&(c=[...c],ve({}))}return z={get basename(){return h},get future(){return m},get state(){return _},get routes(){return c},get window(){return a},initialize:pe,subscribe:me,enableScrollRestoration:xa,navigate:Ue,fetch:At,revalidate:qe,createHref:D=>e.history.createHref(D),encodeLocation:D=>e.history.encodeLocation(D),getFetcher:ua,deleteFetcher:ln,dispose:ye,getBlocker:at,deleteBlocker:_t,patchRoutes:Zt,_internalFetchControllers:xe,_internalSetRoutes:et},z}function L5(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function sm(e,a,l,i,u,c){let d,h;if(u){d=[];for(let m of a)if(d.push(m),m.route.id===u){h=m;break}}else d=a,h=a[a.length-1];let p=Qm(i||".",Vm(d),oa(e.pathname,l)||e.pathname,c==="path");if(i==null&&(p.search=e.search,p.hash=e.hash),(i==null||i===""||i===".")&&h){let m=Zm(p.search);if(h.route.index&&!m)p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&m){let g=new URLSearchParams(p.search),y=g.getAll("index");g.delete("index"),y.filter(w=>w).forEach(w=>g.append("index",w));let b=g.toString();p.search=b?`?${b}`:""}}return l!=="/"&&(p.pathname=p.pathname==="/"?l:Aa([l,p.pathname])),Fn(p)}function u1(e,a,l){if(!l||!L5(l))return{path:a};if(l.formMethod&&!W5(l.formMethod))return{path:a,error:na(405,{method:l.formMethod})};let i=()=>({path:a,error:na(400,{type:"invalid-body"})}),c=(l.formMethod||"get").toUpperCase(),d=iS(a);if(l.body!==void 0){if(l.formEncType==="text/plain"){if(!pa(c))return i();let y=typeof l.body=="string"?l.body:l.body instanceof FormData||l.body instanceof URLSearchParams?Array.from(l.body.entries()).reduce((b,[w,S])=>`${b}${w}=${S}
`,""):String(l.body);return{path:a,submission:{formMethod:c,formAction:d,formEncType:l.formEncType,formData:void 0,json:void 0,text:y}}}else if(l.formEncType==="application/json"){if(!pa(c))return i();try{let y=typeof l.body=="string"?JSON.parse(l.body):l.body;return{path:a,submission:{formMethod:c,formAction:d,formEncType:l.formEncType,formData:void 0,json:y,text:void 0}}}catch{return i()}}}rt(typeof FormData=="function","FormData is not available in this environment");let h,p;if(l.formData)h=fm(l.formData),p=l.formData;else if(l.body instanceof FormData)h=fm(l.body),p=l.body;else if(l.body instanceof URLSearchParams)h=l.body,p=y1(h);else if(l.body==null)h=new URLSearchParams,p=new FormData;else try{h=new URLSearchParams(l.body),p=y1(h)}catch{return i()}let m={formMethod:c,formAction:d,formEncType:l&&l.formEncType||"application/x-www-form-urlencoded",formData:p,json:void 0,text:void 0};if(pa(m.formMethod))return{path:a,submission:m};let g=Yn(a);return e&&g.search&&Zm(g.search)&&h.append("index",""),g.search=`?${h}`,{path:Fn(g),submission:m}}function s1(e,a,l=!1){let i=e.findIndex(u=>u.route.id===a);return i>=0?e.slice(0,l?i+1:i):e}function c1(e,a,l,i,u,c,d,h,p,m,g,y,b,w){let S=w?Pr(w[1])?w[1].error:w[1].data:void 0,$=e.createURL(a.location),E=e.createURL(u),T=l;c&&a.errors?T=s1(l,Object.keys(a.errors)[0],!0):w&&Pr(w[1])&&(T=s1(l,w[0]));let C=w?w[1].statusCode:void 0,M=C&&C>=400,z=T.filter((j,V)=>{let{route:K}=j;if(K.lazy)return!0;if(K.loader==null)return!1;if(c)return cm(K,a.loaderData,a.errors);if(H5(a.loaderData,a.matches[V],j))return!0;let q=a.matches[V],Z=j;return f1(j,{currentUrl:$,currentParams:q.params,nextUrl:E,nextParams:Z.params,...i,actionResult:S,actionStatus:C,defaultShouldRevalidate:M?!1:d||$.pathname+$.search===E.pathname+E.search||$.search!==E.search||P5(q,Z)})}),_=[];return m.forEach((j,V)=>{if(c||!l.some(Ce=>Ce.route.id===j.routeId)||p.has(V))return;let K=Cn(y,j.path,b);if(!K){_.push({key:V,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let q=a.fetchers.get(V),Z=Jo(K,j.path),Se=!1;g.has(V)?Se=!1:h.has(V)?(h.delete(V),Se=!0):q&&q.state!=="idle"&&q.data===void 0?Se=d:Se=f1(Z,{currentUrl:$,currentParams:a.matches[a.matches.length-1].params,nextUrl:E,nextParams:l[l.length-1].params,...i,actionResult:S,actionStatus:C,defaultShouldRevalidate:M?!1:d}),Se&&_.push({key:V,routeId:j.routeId,path:j.path,matches:K,match:Z,controller:new AbortController})}),[z,_]}function cm(e,a,l){if(e.lazy)return!0;if(!e.loader)return!1;let i=a!=null&&a[e.id]!==void 0,u=l!=null&&l[e.id]!==void 0;return!i&&u?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!u}function H5(e,a,l){let i=!a||l.route.id!==a.route.id,u=!e.hasOwnProperty(l.route.id);return i||u}function P5(e,a){let l=e.route.path;return e.pathname!==a.pathname||l!=null&&l.endsWith("*")&&e.params["*"]!==a.params["*"]}function f1(e,a){if(e.route.shouldRevalidate){let l=e.route.shouldRevalidate(a);if(typeof l=="boolean")return l}return a.defaultShouldRevalidate}function d1(e,a,l,i,u){let c;if(e){let p=i[e];rt(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),c=p.children}else c=l;let d=a.filter(p=>!c.some(m=>rS(p,m))),h=mc(d,u,[e||"_","patch",String((c==null?void 0:c.length)||"0")],i);c.push(...h)}function rS(e,a){return"id"in e&&"id"in a&&e.id===a.id?!0:e.index===a.index&&e.path===a.path&&e.caseSensitive===a.caseSensitive?(!e.children||e.children.length===0)&&(!a.children||a.children.length===0)?!0:e.children.every((l,i)=>{var u;return(u=a.children)==null?void 0:u.some(c=>rS(l,c))}):!1}var h1=new WeakMap,aS=({key:e,route:a,manifest:l,mapRouteProperties:i})=>{let u=l[a.id];if(rt(u,"No route found in manifest"),!u.lazy||typeof u.lazy!="object")return;let c=u.lazy[e];if(!c)return;let d=h1.get(u);d||(d={},h1.set(u,d));let h=d[e];if(h)return h;let p=(async()=>{let m=o5(e),y=u[e]!==void 0&&e!=="hasErrorBoundary";if(m)tr(!m,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),d[e]=Promise.resolve();else if(y)tr(!1,`Route "${u.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let b=await c();b!=null&&(Object.assign(u,{[e]:b}),Object.assign(u,i(u)))}typeof u.lazy=="object"&&(u.lazy[e]=void 0,Object.values(u.lazy).every(b=>b===void 0)&&(u.lazy=void 0))})();return d[e]=p,p},m1=new WeakMap;function U5(e,a,l,i){let u=l[e.id];if(rt(u,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let m=m1.get(u);if(m)return{lazyRoutePromise:m,lazyHandlerPromise:m};let g=(async()=>{rt(typeof e.lazy=="function","No lazy route function found");let y=await e.lazy(),b={};for(let w in y){let S=y[w];if(S===void 0)continue;let $=s5(w),T=u[w]!==void 0&&w!=="hasErrorBoundary";$?tr(!$,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):T?tr(!T,`Route "${u.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):b[w]=S}Object.assign(u,b),Object.assign(u,{...i(u),lazy:void 0})})();return m1.set(u,g),{lazyRoutePromise:g,lazyHandlerPromise:g}}let c=Object.keys(e.lazy),d=[],h;for(let m of c){let g=aS({key:m,route:e,manifest:l,mapRouteProperties:i});g&&(d.push(g),m===a&&(h=g))}return{lazyRoutePromise:Promise.all(d).then(()=>{}),lazyHandlerPromise:h}}function nS(e){return e!==void 0}function k5(e,a,l){let i=e.map(({route:u})=>{if(!(typeof u.lazy!="object"||!u.lazy.unstable_middleware))return aS({key:"unstable_middleware",route:u,manifest:a,mapRouteProperties:l})}).filter(nS);return i.length>0?Promise.all(i):void 0}async function p1(e){let a=e.matches.filter(u=>u.shouldLoad),l={};return(await Promise.all(a.map(u=>u.resolve()))).forEach((u,c)=>{l[a[c].route.id]=u}),l}async function F5(e){return e.matches.some(a=>a.route.unstable_middleware)?q5(e,!1,()=>p1(e),(a,l)=>({[l]:{type:"error",result:a}})):p1(e)}async function q5(e,a,l,i){let{matches:u,request:c,params:d,context:h}=e,p={handlerResult:void 0};try{let m=u.flatMap(y=>y.route.unstable_middleware?y.route.unstable_middleware.map(b=>[y.route.id,b]):[]),g=await lS({request:c,params:d,context:h},m,a,p,l);return a?g:p.handlerResult}catch(m){if(!p.middlewareError)throw m;let g=await i(p.middlewareError.error,p.middlewareError.routeId);return p.handlerResult?Object.assign(p.handlerResult,g):g}}async function lS(e,a,l,i,u,c=0){let{request:d}=e;if(d.signal.aborted)throw d.signal.reason?d.signal.reason:new Error(`Request aborted without an \`AbortSignal.reason\`: ${d.method} ${d.url}`);let h=a[c];if(!h)return i.handlerResult=await u(),i.handlerResult;let[p,m]=h,g=!1,y,b=async()=>{if(g)throw new Error("You may only call `next()` once per middleware");g=!0,await lS(e,a,l,i,u,c+1)};try{let w=await m({request:e.request,params:e.params,context:e.context},b);return g?w===void 0?y:w:b()}catch(w){throw i.middlewareError?i.middlewareError.error!==w&&(i.middlewareError={routeId:p,error:w}):i.middlewareError={routeId:p,error:w},w}}async function Y5(e,a,l,i,u,c,d,h,p){let m=k5(u,d,h),g=u.map(S=>U5(S.route,a,d,h));m&&await m;let y=u.map((S,$)=>{let{lazyRoutePromise:E,lazyHandlerPromise:T}=g[$],C=i.some(z=>z.route.id===S.route.id);return{...S,shouldLoad:C,resolve:async z=>(z&&l.method==="GET"&&(S.route.lazy||S.route.loader)&&(C=!0),C?G5({type:a,request:l,match:S,lazyHandlerPromise:T,lazyRoutePromise:E,handlerOverride:z,scopedContext:p}):Promise.resolve({type:"data",result:void 0}))}}),b=await e({matches:y,request:l,params:u[0].params,fetcherKey:c,context:p}),w=g.flatMap(S=>Object.values(S).filter(nS));try{await Promise.all(w)}catch{}return b}async function G5({type:e,request:a,match:l,lazyHandlerPromise:i,lazyRoutePromise:u,handlerOverride:c,scopedContext:d}){let h,p,m=g=>{let y,b=new Promise(($,E)=>y=E);p=()=>y(),a.signal.addEventListener("abort",p);let w=$=>typeof g!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${l.route.id}]`)):g({request:a,params:l.params,context:d},...$!==void 0?[$]:[]),S=(async()=>{try{return{type:"data",result:await(c?c(E=>w(E)):w())}}catch($){return{type:"error",result:$}}})();return Promise.race([S,b])};try{let g=l.route[e];if(i||u)if(g){let y,[b]=await Promise.all([m(g).catch(w=>{y=w}),i,u]);if(y!==void 0)throw y;h=b}else if(await i,g=l.route[e],g)[h]=await Promise.all([m(g),u]);else if(e==="action"){let y=new URL(a.url),b=y.pathname+y.search;throw na(405,{method:a.method,pathname:b,routeId:l.route.id})}else return{type:"data",result:void 0};else if(g)h=await m(g);else{let y=new URL(a.url),b=y.pathname+y.search;throw na(404,{pathname:b})}}catch(g){return{type:"error",result:g}}finally{p&&a.signal.removeEventListener("abort",p)}return h}async function V5(e){var i,u,c,d,h,p;let{result:a,type:l}=e;if(oS(a)){let m;try{let g=a.headers.get("Content-Type");g&&/\bapplication\/json\b/.test(g)?a.body==null?m=null:m=await a.json():m=await a.text()}catch(g){return{type:"error",error:g}}return l==="error"?{type:"error",error:new gc(a.status,a.statusText,m),statusCode:a.status,headers:a.headers}:{type:"data",data:m,statusCode:a.status,headers:a.headers}}return l==="error"?E1(a)?a.data instanceof Error?{type:"error",error:a.data,statusCode:(i=a.init)==null?void 0:i.status,headers:(u=a.init)!=null&&u.headers?new Headers(a.init.headers):void 0}:{type:"error",error:new gc(((c=a.init)==null?void 0:c.status)||500,void 0,a.data),statusCode:fu(a)?a.status:void 0,headers:(d=a.init)!=null&&d.headers?new Headers(a.init.headers):void 0}:{type:"error",error:a,statusCode:fu(a)?a.status:void 0}:E1(a)?{type:"data",data:a.data,statusCode:(h=a.init)==null?void 0:h.status,headers:(p=a.init)!=null&&p.headers?new Headers(a.init.headers):void 0}:{type:"data",data:a}}function Q5(e,a,l,i,u){let c=e.headers.get("Location");if(rt(c,"Redirects returned/thrown from loaders/actions must have a Location header"),!Xm.test(c)){let d=i.slice(0,i.findIndex(h=>h.route.id===l)+1);c=sm(new URL(a.url),d,u,c),e.headers.set("Location",c)}return e}function g1(e,a,l){if(Xm.test(e)){let i=e,u=i.startsWith("//")?new URL(a.protocol+i):new URL(i),c=oa(u.pathname,l)!=null;if(u.origin===a.origin&&c)return u.pathname+u.search+u.hash}return e}function gi(e,a,l,i){let u=e.createURL(iS(a)).toString(),c={signal:l};if(i&&pa(i.formMethod)){let{formMethod:d,formEncType:h}=i;c.method=d.toUpperCase(),h==="application/json"?(c.headers=new Headers({"Content-Type":h}),c.body=JSON.stringify(i.json)):h==="text/plain"?c.body=i.text:h==="application/x-www-form-urlencoded"&&i.formData?c.body=fm(i.formData):c.body=i.formData}return new Request(u,c)}function fm(e){let a=new URLSearchParams;for(let[l,i]of e.entries())a.append(l,typeof i=="string"?i:i.name);return a}function y1(e){let a=new FormData;for(let[l,i]of e.entries())a.append(l,i);return a}function X5(e,a,l,i=!1,u=!1){let c={},d=null,h,p=!1,m={},g=l&&Pr(l[1])?l[1].error:void 0;return e.forEach(y=>{if(!(y.route.id in a))return;let b=y.route.id,w=a[b];if(rt(!vl(w),"Cannot handle redirect results in processLoaderData"),Pr(w)){let S=w.error;if(g!==void 0&&(S=g,g=void 0),d=d||{},u)d[b]=S;else{let $=gl(e,b);d[$.route.id]==null&&(d[$.route.id]=S)}i||(c[b]=tS),p||(p=!0,h=fu(w.error)?w.error.status:500),w.headers&&(m[b]=w.headers)}else c[b]=w.data,w.statusCode&&w.statusCode!==200&&!p&&(h=w.statusCode),w.headers&&(m[b]=w.headers)}),g!==void 0&&l&&(d={[l[0]]:g},c[l[0]]=void 0),{loaderData:c,errors:d,statusCode:h||200,loaderHeaders:m}}function v1(e,a,l,i,u,c){let{loaderData:d,errors:h}=X5(a,l,i);return u.forEach(p=>{let{key:m,match:g,controller:y}=p,b=c[m];if(rt(b,"Did not find corresponding fetcher result"),!(y&&y.signal.aborted))if(Pr(b)){let w=gl(e.matches,g==null?void 0:g.route.id);h&&h[w.route.id]||(h={...h,[w.route.id]:b.error}),e.fetchers.delete(m)}else if(vl(b))rt(!1,"Unhandled fetcher revalidation redirect");else{let w=On(b.data);e.fetchers.set(m,w)}}),{loaderData:d,errors:h}}function b1(e,a,l,i){let u=Object.entries(a).filter(([,c])=>c!==tS).reduce((c,[d,h])=>(c[d]=h,c),{});for(let c of l){let d=c.route.id;if(!a.hasOwnProperty(d)&&e.hasOwnProperty(d)&&c.route.loader&&(u[d]=e[d]),i&&i.hasOwnProperty(d))break}return u}function x1(e){return e?Pr(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function gl(e,a){return(a?e.slice(0,e.findIndex(i=>i.route.id===a)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function S1(e){let a=e.length===1?e[0]:e.find(l=>l.index||!l.path||l.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:a}],route:a}}function na(e,{pathname:a,routeId:l,method:i,type:u,message:c}={}){let d="Unknown Server Error",h="Unknown @remix-run/router error";return e===400?(d="Bad Request",i&&a&&l?h=`You made a ${i} request to "${a}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.`:u==="invalid-body"&&(h="Unable to encode submission body")):e===403?(d="Forbidden",h=`Route "${l}" does not match URL "${a}"`):e===404?(d="Not Found",h=`No route matches URL "${a}"`):e===405&&(d="Method Not Allowed",i&&a&&l?h=`You made a ${i.toUpperCase()} request to "${a}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.`:i&&(h=`Invalid request method "${i.toUpperCase()}"`)),new gc(e||500,d,new Error(h),!0)}function Ys(e){let a=Object.entries(e);for(let l=a.length-1;l>=0;l--){let[i,u]=a[l];if(vl(u))return{key:i,result:u}}}function iS(e){let a=typeof e=="string"?Yn(e):e;return Fn({...a,hash:""})}function Z5(e,a){return e.pathname!==a.pathname||e.search!==a.search?!1:e.hash===""?a.hash!=="":e.hash===a.hash?!0:a.hash!==""}function K5(e){return oS(e.result)&&A5.has(e.result.status)}function Pr(e){return e.type==="error"}function vl(e){return(e&&e.type)==="redirect"}function E1(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function oS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function W5(e){return C5.has(e.toUpperCase())}function pa(e){return M5.has(e.toUpperCase())}function Zm(e){return new URLSearchParams(e).getAll("index").some(a=>a==="")}function Jo(e,a){let l=typeof a=="string"?Yn(a).search:a.search;if(e[e.length-1].route.index&&Zm(l||""))return e[e.length-1];let i=Jx(e);return i[i.length-1]}function w1(e){let{formMethod:a,formAction:l,formEncType:i,text:u,formData:c,json:d}=e;if(!(!a||!l||!i)){if(u!=null)return{formMethod:a,formAction:l,formEncType:i,formData:void 0,json:void 0,text:u};if(c!=null)return{formMethod:a,formAction:l,formEncType:i,formData:c,json:void 0,text:void 0};if(d!==void 0)return{formMethod:a,formAction:l,formEncType:i,formData:void 0,json:d,text:void 0}}}function sh(e,a){return a?{state:"loading",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function J5(e,a){return{state:"submitting",location:e,formMethod:a.formMethod,formAction:a.formAction,formEncType:a.formEncType,formData:a.formData,json:a.json,text:a.text}}function Yo(e,a){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:a}}function I5(e,a){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:a?a.data:void 0}}function On(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function e3(e,a){try{let l=e.sessionStorage.getItem(eS);if(l){let i=JSON.parse(l);for(let[u,c]of Object.entries(i||{}))c&&Array.isArray(c)&&a.set(u,new Set(c||[]))}}catch{}}function t3(e,a){if(a.size>0){let l={};for(let[i,u]of a)l[i]=[...u];try{e.sessionStorage.setItem(eS,JSON.stringify(l))}catch(i){tr(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function r3(){let e,a,l=new Promise((i,u)=>{e=async c=>{i(c);try{await l}catch{}},a=async c=>{u(c);try{await l}catch{}}});return{promise:l,resolve:e,reject:a}}var jl=v.createContext(null);jl.displayName="DataRouter";var wu=v.createContext(null);wu.displayName="DataRouterState";var Km=v.createContext({isTransitioning:!1});Km.displayName="ViewTransition";var uS=v.createContext(new Map);uS.displayName="Fetchers";var a3=v.createContext(null);a3.displayName="Await";var za=v.createContext(null);za.displayName="Navigation";var Bc=v.createContext(null);Bc.displayName="Location";var va=v.createContext({outlet:null,matches:[],isDataRoute:!1});va.displayName="Route";var Wm=v.createContext(null);Wm.displayName="RouteError";function n3(e,{relative:a}={}){rt($u(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:i}=v.useContext(za),{hash:u,pathname:c,search:d}=_u(e,{relative:a}),h=c;return l!=="/"&&(h=c==="/"?l:Aa([l,c])),i.createHref({pathname:h,search:d,hash:u})}function $u(){return v.useContext(Bc)!=null}function nn(){return rt($u(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Bc).location}var sS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cS(e){v.useContext(za).static||v.useLayoutEffect(e)}function fS(){let{isDataRoute:e}=v.useContext(va);return e?x3():l3()}function l3(){rt($u(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(jl),{basename:a,navigator:l}=v.useContext(za),{matches:i}=v.useContext(va),{pathname:u}=nn(),c=JSON.stringify(Vm(i)),d=v.useRef(!1);return cS(()=>{d.current=!0}),v.useCallback((p,m={})=>{if(tr(d.current,sS),!d.current)return;if(typeof p=="number"){l.go(p);return}let g=Qm(p,JSON.parse(c),u,m.relative==="path");e==null&&a!=="/"&&(g.pathname=g.pathname==="/"?a:Aa([a,g.pathname])),(m.replace?l.replace:l.push)(g,m.state,m)},[a,l,c,u,e])}var i3=v.createContext(null);function o3(e){let a=v.useContext(va).outlet;return a&&v.createElement(i3.Provider,{value:e},a)}function u3(){let{matches:e}=v.useContext(va),a=e[e.length-1];return a?a.params:{}}function _u(e,{relative:a}={}){let{matches:l}=v.useContext(va),{pathname:i}=nn(),u=JSON.stringify(Vm(l));return v.useMemo(()=>Qm(e,JSON.parse(u),i,a==="path"),[e,u,i,a])}function s3(e,a,l,i){rt($u(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u,static:c}=v.useContext(za),{matches:d}=v.useContext(va),h=d[d.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let C=y&&y.path||"";dS(m,!y||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let b=nn(),w;w=b;let S=w.pathname||"/",$=S;if(g!=="/"){let C=g.replace(/^\//,"").split("/");$="/"+S.replace(/^\//,"").split("/").slice(C.length).join("/")}let E=!c&&l&&l.matches&&l.matches.length>0?l.matches:Cn(e,{pathname:$});return tr(y||E!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),tr(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),m3(E&&E.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:Aa([g,u.encodeLocation?u.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?g:Aa([g,u.encodeLocation?u.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),d,l,i)}function c3(){let e=b3(),a=fu(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),l=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:i},c={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:c},"ErrorBoundary")," or"," ",v.createElement("code",{style:c},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},a),l?v.createElement("pre",{style:u},l):null,d)}var f3=v.createElement(c3,null),d3=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error!==void 0?v.createElement(va.Provider,{value:this.props.routeContext},v.createElement(Wm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function h3({routeContext:e,match:a,children:l}){let i=v.useContext(jl);return i&&i.static&&i.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=a.route.id),v.createElement(va.Provider,{value:e},l)}function m3(e,a=[],l=null,i=null){if(e==null){if(!l)return null;if(l.errors)e=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)e=l.matches;else return null}let u=e,c=l==null?void 0:l.errors;if(c!=null){let p=u.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);rt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,h=-1;if(l)for(let p=0;p<u.length;p++){let m=u[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:y}=l,b=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||b){d=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((p,m,g)=>{let y,b=!1,w=null,S=null;l&&(y=c&&m.route.id?c[m.route.id]:void 0,w=m.route.errorElement||f3,d&&(h<0&&g===0?(dS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,S=null):h===g&&(b=!0,S=m.route.hydrateFallbackElement||null)));let $=a.concat(u.slice(0,g+1)),E=()=>{let T;return y?T=w:b?T=S:m.route.Component?T=v.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=p,v.createElement(h3,{match:m,routeContext:{outlet:p,matches:$,isDataRoute:l!=null},children:T})};return l&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?v.createElement(d3,{location:l.location,revalidation:l.revalidation,component:w,error:y,children:E(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):E()},null)}function Jm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function p3(e){let a=v.useContext(jl);return rt(a,Jm(e)),a}function g3(e){let a=v.useContext(wu);return rt(a,Jm(e)),a}function y3(e){let a=v.useContext(va);return rt(a,Jm(e)),a}function Im(e){let a=y3(e),l=a.matches[a.matches.length-1];return rt(l.route.id,`${e} can only be used on routes that contain a unique "id"`),l.route.id}function v3(){return Im("useRouteId")}function b3(){var i;let e=v.useContext(Wm),a=g3("useRouteError"),l=Im("useRouteError");return e!==void 0?e:(i=a.errors)==null?void 0:i[l]}function x3(){let{router:e}=p3("useNavigate"),a=Im("useNavigate"),l=v.useRef(!1);return cS(()=>{l.current=!0}),v.useCallback(async(u,c={})=>{tr(l.current,sS),l.current&&(typeof u=="number"?e.navigate(u):await e.navigate(u,{fromRouteId:a,...c}))},[e,a])}var $1={};function dS(e,a,l){!a&&!$1[e]&&($1[e]=!0,tr(!1,l))}var _1={};function N1(e,a){!e&&!_1[a]&&(_1[a]=!0,console.warn(a))}function S3(e){let a={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&tr(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(a,{element:v.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&tr(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(a,{hydrateFallbackElement:v.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&tr(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(a,{errorElement:v.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),a}var E3=class{constructor(){this.status="pending",this.promise=new Promise((e,a)=>{this.resolve=l=>{this.status==="pending"&&(this.status="resolved",e(l))},this.reject=l=>{this.status==="pending"&&(this.status="rejected",a(l))}})}};function w3({router:e,flushSync:a}){let[l,i]=v.useState(e.state),[u,c]=v.useState(),[d,h]=v.useState({isTransitioning:!1}),[p,m]=v.useState(),[g,y]=v.useState(),[b,w]=v.useState(),S=v.useRef(new Map),$=v.useCallback((M,{deletedFetchers:z,flushSync:_,viewTransitionOpts:j})=>{M.fetchers.forEach((K,q)=>{K.data!==void 0&&S.current.set(q,K.data)}),z.forEach(K=>S.current.delete(K)),N1(_===!1||a!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let V=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(N1(j==null||V,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!j||!V){a&&_?a(()=>i(M)):v.startTransition(()=>i(M));return}if(a&&_){a(()=>{g&&(p&&p.resolve(),g.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:j.currentLocation,nextLocation:j.nextLocation})});let K=e.window.document.startViewTransition(()=>{a(()=>i(M))});K.finished.finally(()=>{a(()=>{m(void 0),y(void 0),c(void 0),h({isTransitioning:!1})})}),a(()=>y(K));return}g?(p&&p.resolve(),g.skipTransition(),w({state:M,currentLocation:j.currentLocation,nextLocation:j.nextLocation})):(c(M),h({isTransitioning:!0,flushSync:!1,currentLocation:j.currentLocation,nextLocation:j.nextLocation}))},[e.window,a,g,p]);v.useLayoutEffect(()=>e.subscribe($),[e,$]),v.useEffect(()=>{d.isTransitioning&&!d.flushSync&&m(new E3)},[d]),v.useEffect(()=>{if(p&&u&&e.window){let M=u,z=p.promise,_=e.window.document.startViewTransition(async()=>{v.startTransition(()=>i(M)),await z});_.finished.finally(()=>{m(void 0),y(void 0),c(void 0),h({isTransitioning:!1})}),y(_)}},[u,p,e.window]),v.useEffect(()=>{p&&u&&l.location.key===u.location.key&&p.resolve()},[p,g,l.location,u]),v.useEffect(()=>{!d.isTransitioning&&b&&(c(b.state),h({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}),w(void 0))},[d.isTransitioning,b]);let E=v.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:M=>e.navigate(M),push:(M,z,_)=>e.navigate(M,{state:z,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(M,z,_)=>e.navigate(M,{replace:!0,state:z,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[e]),T=e.basename||"/",C=v.useMemo(()=>({router:e,navigator:E,static:!1,basename:T}),[e,E,T]);return v.createElement(v.Fragment,null,v.createElement(jl.Provider,{value:C},v.createElement(wu.Provider,{value:l},v.createElement(uS.Provider,{value:S.current},v.createElement(Km.Provider,{value:d},v.createElement(N3,{basename:T,location:l.location,navigationType:l.historyAction,navigator:E},v.createElement($3,{routes:e.routes,future:e.future,state:l})))))),null)}var $3=v.memo(_3);function _3({routes:e,future:a,state:l}){return s3(e,void 0,l,a)}function hS(e){return o3(e.context)}function N3({basename:e="/",children:a=null,location:l,navigationType:i="POP",navigator:u,static:c=!1}){rt(!$u(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),h=v.useMemo(()=>({basename:d,navigator:u,static:c,future:{}}),[d,u,c]);typeof l=="string"&&(l=Yn(l));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:b="default"}=l,w=v.useMemo(()=>{let S=oa(p,d);return S==null?null:{location:{pathname:S,search:m,hash:g,state:y,key:b},navigationType:i}},[d,p,m,g,y,b,i]);return tr(w!=null,`<Router basename="${d}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:v.createElement(za.Provider,{value:h},v.createElement(Bc.Provider,{children:a,value:w}))}var Is="get",ec="application/x-www-form-urlencoded";function jc(e){return e!=null&&typeof e.tagName=="string"}function T3(e){return jc(e)&&e.tagName.toLowerCase()==="button"}function R3(e){return jc(e)&&e.tagName.toLowerCase()==="form"}function M3(e){return jc(e)&&e.tagName.toLowerCase()==="input"}function O3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C3(e,a){return e.button===0&&(!a||a==="_self")&&!O3(e)}var Gs=null;function A3(){if(Gs===null)try{new FormData(document.createElement("form"),0),Gs=!1}catch{Gs=!0}return Gs}var D3=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ch(e){return e!=null&&!D3.has(e)?(tr(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ec}"`),null):e}function z3(e,a){let l,i,u,c,d;if(R3(e)){let h=e.getAttribute("action");i=h?oa(h,a):null,l=e.getAttribute("method")||Is,u=ch(e.getAttribute("enctype"))||ec,c=new FormData(e)}else if(T3(e)||M3(e)&&(e.type==="submit"||e.type==="image")){let h=e.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||h.getAttribute("action");if(i=p?oa(p,a):null,l=e.getAttribute("formmethod")||h.getAttribute("method")||Is,u=ch(e.getAttribute("formenctype"))||ch(h.getAttribute("enctype"))||ec,c=new FormData(h,e),!A3()){let{name:m,type:g,value:y}=e;if(g==="image"){let b=m?`${m}.`:"";c.append(`${b}x`,"0"),c.append(`${b}y`,"0")}else m&&c.append(m,y)}}else{if(jc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=Is,i=null,u=ec,d=e}return c&&u==="text/plain"&&(d=c,c=void 0),{action:i,method:l.toLowerCase(),encType:u,formData:c,body:d}}function ep(e,a){if(e===!1||e===null||typeof e>"u")throw new Error(a)}async function B3(e,a){if(e.id in a)return a[e.id];try{let l=await import(e.module);return a[e.id]=l,l}catch(l){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function j3(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function L3(e,a,l){let i=await Promise.all(e.map(async u=>{let c=a.routes[u.route.id];if(c){let d=await B3(c,l);return d.links?d.links():[]}return[]}));return k3(i.flat(1).filter(j3).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function T1(e,a,l,i,u,c){let d=(p,m)=>l[m]?p.route.id!==l[m].route.id:!0,h=(p,m)=>{var g;return l[m].pathname!==p.pathname||((g=l[m].route.path)==null?void 0:g.endsWith("*"))&&l[m].params["*"]!==p.params["*"]};return c==="assets"?a.filter((p,m)=>d(p,m)||h(p,m)):c==="data"?a.filter((p,m)=>{var y;let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((y=l[0])==null?void 0:y.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function H3(e,a,{includeHydrateFallback:l}={}){return P3(e.map(i=>{let u=a.routes[i.route.id];if(!u)return[];let c=[u.module];return u.clientActionModule&&(c=c.concat(u.clientActionModule)),u.clientLoaderModule&&(c=c.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(c=c.concat(u.hydrateFallbackModule)),u.imports&&(c=c.concat(u.imports)),c}).flat(1))}function P3(e){return[...new Set(e)]}function U3(e){let a={},l=Object.keys(e).sort();for(let i of l)a[i]=e[i];return a}function k3(e,a){let l=new Set;return new Set(a),e.reduce((i,u)=>{let c=JSON.stringify(U3(u));return l.has(c)||(l.add(c),i.push({key:c,link:u})),i},[])}function F3(e,a){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return l.pathname==="/"?l.pathname="_root.data":a&&oa(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function mS(){let e=v.useContext(jl);return ep(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function q3(){let e=v.useContext(wu);return ep(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var tp=v.createContext(void 0);tp.displayName="FrameworkContext";function pS(){let e=v.useContext(tp);return ep(e,"You must render this element inside a <HydratedRouter> element"),e}function Y3(e,a){let l=v.useContext(tp),[i,u]=v.useState(!1),[c,d]=v.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=a,b=v.useRef(null);v.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let $=T=>{T.forEach(C=>{d(C.isIntersecting)})},E=new IntersectionObserver($,{threshold:.5});return b.current&&E.observe(b.current),()=>{E.disconnect()}}},[e]),v.useEffect(()=>{if(i){let $=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout($)}}},[i]);let w=()=>{u(!0)},S=()=>{u(!1),d(!1)};return l?e!=="intent"?[c,b,{}]:[c,b,{onFocus:Go(h,w),onBlur:Go(p,S),onMouseEnter:Go(m,w),onMouseLeave:Go(g,S),onTouchStart:Go(y,w)}]:[!1,b,{}]}function Go(e,a){return l=>{e&&e(l),l.defaultPrevented||a(l)}}function G3({page:e,...a}){let{router:l}=mS(),i=v.useMemo(()=>Cn(l.routes,e,l.basename),[l.routes,e,l.basename]);return i?v.createElement(Q3,{page:e,matches:i,...a}):null}function V3(e){let{manifest:a,routeModules:l}=pS(),[i,u]=v.useState([]);return v.useEffect(()=>{let c=!1;return L3(e,a,l).then(d=>{c||u(d)}),()=>{c=!0}},[e,a,l]),i}function Q3({page:e,matches:a,...l}){let i=nn(),{manifest:u,routeModules:c}=pS(),{basename:d}=mS(),{loaderData:h,matches:p}=q3(),m=v.useMemo(()=>T1(e,a,p,u,i,"data"),[e,a,p,u,i]),g=v.useMemo(()=>T1(e,a,p,u,i,"assets"),[e,a,p,u,i]),y=v.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let S=new Set,$=!1;if(a.forEach(T=>{var M;let C=u.routes[T.route.id];!C||!C.hasLoader||(!m.some(z=>z.route.id===T.route.id)&&T.route.id in h&&((M=c[T.route.id])!=null&&M.shouldRevalidate)||C.hasClientLoader?$=!0:S.add(T.route.id))}),S.size===0)return[];let E=F3(e,d);return $&&S.size>0&&E.searchParams.set("_routes",a.filter(T=>S.has(T.route.id)).map(T=>T.route.id).join(",")),[E.pathname+E.search]},[d,h,i,u,m,a,e,c]),b=v.useMemo(()=>H3(g,u),[g,u]),w=V3(g);return v.createElement(v.Fragment,null,y.map(S=>v.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...l})),b.map(S=>v.createElement("link",{key:S,rel:"modulepreload",href:S,...l})),w.map(({key:S,link:$})=>v.createElement("link",{key:S,...$})))}function X3(...e){return a=>{e.forEach(l=>{typeof l=="function"?l(a):l!=null&&(l.current=a)})}}var gS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gS&&(window.__reactRouterVersion="7.5.0")}catch{}function Z3(e,a){return j5({basename:a==null?void 0:a.basename,unstable_getContext:a==null?void 0:a.unstable_getContext,future:a==null?void 0:a.future,history:a5({window:a==null?void 0:a.window}),hydrationData:K3(),routes:e,mapRouteProperties:S3,dataStrategy:a==null?void 0:a.dataStrategy,patchRoutesOnNavigation:a==null?void 0:a.patchRoutesOnNavigation,window:a==null?void 0:a.window}).initialize()}function K3(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:W3(e.errors)}),e}function W3(e){if(!e)return null;let a=Object.entries(e),l={};for(let[i,u]of a)if(u&&u.__type==="RouteErrorResponse")l[i]=new gc(u.status,u.statusText,u.data,u.internal===!0);else if(u&&u.__type==="Error"){if(u.__subType){let c=window[u.__subType];if(typeof c=="function")try{let d=new c(u.message);d.stack="",l[i]=d}catch{}}if(l[i]==null){let c=new Error(u.message);c.stack="",l[i]=c}}else l[i]=u;return l}var yS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,du=v.forwardRef(function({onClick:a,discover:l="render",prefetch:i="none",relative:u,reloadDocument:c,replace:d,state:h,target:p,to:m,preventScrollReset:g,viewTransition:y,...b},w){let{basename:S}=v.useContext(za),$=typeof m=="string"&&yS.test(m),E,T=!1;if(typeof m=="string"&&$&&(E=m,gS))try{let q=new URL(window.location.href),Z=m.startsWith("//")?new URL(q.protocol+m):new URL(m),Se=oa(Z.pathname,S);Z.origin===q.origin&&Se!=null?m=Se+Z.search+Z.hash:T=!0}catch{tr(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=n3(m,{relative:u}),[M,z,_]=Y3(i,b),j=tM(m,{replace:d,state:h,target:p,preventScrollReset:g,relative:u,viewTransition:y});function V(q){a&&a(q),q.defaultPrevented||j(q)}let K=v.createElement("a",{...b,..._,href:E||C,onClick:T||c?a:V,ref:X3(w,z),target:p,"data-discover":!$&&l==="render"?"true":void 0});return M&&!$?v.createElement(v.Fragment,null,K,v.createElement(G3,{page:C})):K});du.displayName="Link";var J3=v.forwardRef(function({"aria-current":a="page",caseSensitive:l=!1,className:i="",end:u=!1,style:c,to:d,viewTransition:h,children:p,...m},g){let y=_u(d,{relative:m.relative}),b=nn(),w=v.useContext(wu),{navigator:S,basename:$}=v.useContext(za),E=w!=null&&iM(y)&&h===!0,T=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,C=b.pathname,M=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;l||(C=C.toLowerCase(),M=M?M.toLowerCase():null,T=T.toLowerCase()),M&&$&&(M=oa(M,$)||M);const z=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let _=C===T||!u&&C.startsWith(T)&&C.charAt(z)==="/",j=M!=null&&(M===T||!u&&M.startsWith(T)&&M.charAt(T.length)==="/"),V={isActive:_,isPending:j,isTransitioning:E},K=_?a:void 0,q;typeof i=="function"?q=i(V):q=[i,_?"active":null,j?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Z=typeof c=="function"?c(V):c;return v.createElement(du,{...m,"aria-current":K,className:q,ref:g,style:Z,to:d,viewTransition:h},typeof p=="function"?p(V):p)});J3.displayName="NavLink";var I3=v.forwardRef(({discover:e="render",fetcherKey:a,navigate:l,reloadDocument:i,replace:u,state:c,method:d=Is,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,...b},w)=>{let S=nM(),$=lM(h,{relative:m}),E=d.toLowerCase()==="get"?"get":"post",T=typeof h=="string"&&yS.test(h),C=M=>{if(p&&p(M),M.defaultPrevented)return;M.preventDefault();let z=M.nativeEvent.submitter,_=(z==null?void 0:z.getAttribute("formmethod"))||d;S(z||M.currentTarget,{fetcherKey:a,method:_,navigate:l,replace:u,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return v.createElement("form",{ref:w,method:E,action:$,onSubmit:i?p:C,...b,"data-discover":!T&&e==="render"?"true":void 0})});I3.displayName="Form";function eM(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vS(e){let a=v.useContext(jl);return rt(a,eM(e)),a}function tM(e,{target:a,replace:l,state:i,preventScrollReset:u,relative:c,viewTransition:d}={}){let h=fS(),p=nn(),m=_u(e,{relative:c});return v.useCallback(g=>{if(C3(g,a)){g.preventDefault();let y=l!==void 0?l:Fn(p)===Fn(m);h(e,{replace:y,state:i,preventScrollReset:u,relative:c,viewTransition:d})}},[p,h,m,l,i,a,e,u,c,d])}var rM=0,aM=()=>`__${String(++rM)}__`;function nM(){let{router:e}=vS("useSubmit"),{basename:a}=v.useContext(za),l=v3();return v.useCallback(async(i,u={})=>{let{action:c,method:d,encType:h,formData:p,body:m}=z3(i,a);if(u.navigate===!1){let g=u.fetcherKey||aM();await e.fetch(g,l,u.action||c,{preventScrollReset:u.preventScrollReset,formData:p,body:m,formMethod:u.method||d,formEncType:u.encType||h,flushSync:u.flushSync})}else await e.navigate(u.action||c,{preventScrollReset:u.preventScrollReset,formData:p,body:m,formMethod:u.method||d,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:l,flushSync:u.flushSync,viewTransition:u.viewTransition})},[e,a,l])}function lM(e,{relative:a}={}){let{basename:l}=v.useContext(za),i=v.useContext(va);rt(i,"useFormAction must be used inside a RouteContext");let[u]=i.matches.slice(-1),c={..._u(e||".",{relative:a})},d=nn();if(e==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();c.search=g?`?${g}`:""}}return(!e||e===".")&&u.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(c.pathname=c.pathname==="/"?l:Aa([l,c.pathname])),Fn(c)}function iM(e,a={}){let l=v.useContext(Km);rt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=vS("useViewTransitionState"),u=_u(e,{relative:a.relative});if(!l.isTransitioning)return!1;let c=oa(l.currentLocation.pathname,i)||l.currentLocation.pathname,d=oa(l.nextLocation.pathname,i)||l.nextLocation.pathname;return pc(u.pathname,d)!=null||pc(u.pathname,c)!=null}new TextEncoder;/**
 * react-router v7.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oM(e){return v.createElement(w3,{flushSync:Rc.flushSync,...e})}const uM=()=>{const e=v.useMemo(()=>Z3(gO),[]);return N.jsx(V4,{children:N.jsx(oM,{router:e})})};function bS(e,a){return function(){return e.apply(a,arguments)}}const{toString:sM}=Object.prototype,{getPrototypeOf:rp}=Object,Lc=(e=>a=>{const l=sM.call(a);return e[l]||(e[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),ba=e=>(e=e.toLowerCase(),a=>Lc(a)===e),Hc=e=>a=>typeof a===e,{isArray:qi}=Array,hu=Hc("undefined");function cM(e){return e!==null&&!hu(e)&&e.constructor!==null&&!hu(e.constructor)&&Ur(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const xS=ba("ArrayBuffer");function fM(e){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(e):a=e&&e.buffer&&xS(e.buffer),a}const dM=Hc("string"),Ur=Hc("function"),SS=Hc("number"),Pc=e=>e!==null&&typeof e=="object",hM=e=>e===!0||e===!1,tc=e=>{if(Lc(e)!=="object")return!1;const a=rp(e);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},mM=ba("Date"),pM=ba("File"),gM=ba("Blob"),yM=ba("FileList"),vM=e=>Pc(e)&&Ur(e.pipe),bM=e=>{let a;return e&&(typeof FormData=="function"&&e instanceof FormData||Ur(e.append)&&((a=Lc(e))==="formdata"||a==="object"&&Ur(e.toString)&&e.toString()==="[object FormData]"))},xM=ba("URLSearchParams"),[SM,EM,wM,$M]=["ReadableStream","Request","Response","Headers"].map(ba),_M=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Nu(e,a,{allOwnKeys:l=!1}={}){if(e===null||typeof e>"u")return;let i,u;if(typeof e!="object"&&(e=[e]),qi(e))for(i=0,u=e.length;i<u;i++)a.call(null,e[i],i,e);else{const c=l?Object.getOwnPropertyNames(e):Object.keys(e),d=c.length;let h;for(i=0;i<d;i++)h=c[i],a.call(null,e[h],h,e)}}function ES(e,a){a=a.toLowerCase();const l=Object.keys(e);let i=l.length,u;for(;i-- >0;)if(u=l[i],a===u.toLowerCase())return u;return null}const bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,wS=e=>!hu(e)&&e!==bl;function dm(){const{caseless:e}=wS(this)&&this||{},a={},l=(i,u)=>{const c=e&&ES(a,u)||u;tc(a[c])&&tc(i)?a[c]=dm(a[c],i):tc(i)?a[c]=dm({},i):qi(i)?a[c]=i.slice():a[c]=i};for(let i=0,u=arguments.length;i<u;i++)arguments[i]&&Nu(arguments[i],l);return a}const NM=(e,a,l,{allOwnKeys:i}={})=>(Nu(a,(u,c)=>{l&&Ur(u)?e[c]=bS(u,l):e[c]=u},{allOwnKeys:i}),e),TM=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),RM=(e,a,l,i)=>{e.prototype=Object.create(a.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:a.prototype}),l&&Object.assign(e.prototype,l)},MM=(e,a,l,i)=>{let u,c,d;const h={};if(a=a||{},e==null)return a;do{for(u=Object.getOwnPropertyNames(e),c=u.length;c-- >0;)d=u[c],(!i||i(d,e,a))&&!h[d]&&(a[d]=e[d],h[d]=!0);e=l!==!1&&rp(e)}while(e&&(!l||l(e,a))&&e!==Object.prototype);return a},OM=(e,a,l)=>{e=String(e),(l===void 0||l>e.length)&&(l=e.length),l-=a.length;const i=e.indexOf(a,l);return i!==-1&&i===l},CM=e=>{if(!e)return null;if(qi(e))return e;let a=e.length;if(!SS(a))return null;const l=new Array(a);for(;a-- >0;)l[a]=e[a];return l},AM=(e=>a=>e&&a instanceof e)(typeof Uint8Array<"u"&&rp(Uint8Array)),DM=(e,a)=>{const i=(e&&e[Symbol.iterator]).call(e);let u;for(;(u=i.next())&&!u.done;){const c=u.value;a.call(e,c[0],c[1])}},zM=(e,a)=>{let l;const i=[];for(;(l=e.exec(a))!==null;)i.push(l);return i},BM=ba("HTMLFormElement"),jM=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,i,u){return i.toUpperCase()+u}),R1=(({hasOwnProperty:e})=>(a,l)=>e.call(a,l))(Object.prototype),LM=ba("RegExp"),$S=(e,a)=>{const l=Object.getOwnPropertyDescriptors(e),i={};Nu(l,(u,c)=>{let d;(d=a(u,c,e))!==!1&&(i[c]=d||u)}),Object.defineProperties(e,i)},HM=e=>{$S(e,(a,l)=>{if(Ur(e)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const i=e[l];if(Ur(i)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},PM=(e,a)=>{const l={},i=u=>{u.forEach(c=>{l[c]=!0})};return qi(e)?i(e):i(String(e).split(a)),l},UM=()=>{},kM=(e,a)=>e!=null&&Number.isFinite(e=+e)?e:a;function FM(e){return!!(e&&Ur(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qM=e=>{const a=new Array(10),l=(i,u)=>{if(Pc(i)){if(a.indexOf(i)>=0)return;if(!("toJSON"in i)){a[u]=i;const c=qi(i)?[]:{};return Nu(i,(d,h)=>{const p=l(d,u+1);!hu(p)&&(c[h]=p)}),a[u]=void 0,c}}return i};return l(e,0)},YM=ba("AsyncFunction"),GM=e=>e&&(Pc(e)||Ur(e))&&Ur(e.then)&&Ur(e.catch),_S=((e,a)=>e?setImmediate:a?((l,i)=>(bl.addEventListener("message",({source:u,data:c})=>{u===bl&&c===l&&i.length&&i.shift()()},!1),u=>{i.push(u),bl.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Ur(bl.postMessage)),VM=typeof queueMicrotask<"u"?queueMicrotask.bind(bl):typeof process<"u"&&process.nextTick||_S,J={isArray:qi,isArrayBuffer:xS,isBuffer:cM,isFormData:bM,isArrayBufferView:fM,isString:dM,isNumber:SS,isBoolean:hM,isObject:Pc,isPlainObject:tc,isReadableStream:SM,isRequest:EM,isResponse:wM,isHeaders:$M,isUndefined:hu,isDate:mM,isFile:pM,isBlob:gM,isRegExp:LM,isFunction:Ur,isStream:vM,isURLSearchParams:xM,isTypedArray:AM,isFileList:yM,forEach:Nu,merge:dm,extend:NM,trim:_M,stripBOM:TM,inherits:RM,toFlatObject:MM,kindOf:Lc,kindOfTest:ba,endsWith:OM,toArray:CM,forEachEntry:DM,matchAll:zM,isHTMLForm:BM,hasOwnProperty:R1,hasOwnProp:R1,reduceDescriptors:$S,freezeMethods:HM,toObjectSet:PM,toCamelCase:jM,noop:UM,toFiniteNumber:kM,findKey:ES,global:bl,isContextDefined:wS,isSpecCompliantForm:FM,toJSONObject:qM,isAsyncFn:YM,isThenable:GM,setImmediate:_S,asap:VM};function Ze(e,a,l,i,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",a&&(this.code=a),l&&(this.config=l),i&&(this.request=i),u&&(this.response=u,this.status=u.status?u.status:null)}J.inherits(Ze,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}});const NS=Ze.prototype,TS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{TS[e]={value:e}});Object.defineProperties(Ze,TS);Object.defineProperty(NS,"isAxiosError",{value:!0});Ze.from=(e,a,l,i,u,c)=>{const d=Object.create(NS);return J.toFlatObject(e,d,function(p){return p!==Error.prototype},h=>h!=="isAxiosError"),Ze.call(d,e.message,a,l,i,u),d.cause=e,d.name=e.name,c&&Object.assign(d,c),d};const QM=null;function hm(e){return J.isPlainObject(e)||J.isArray(e)}function RS(e){return J.endsWith(e,"[]")?e.slice(0,-2):e}function M1(e,a,l){return e?e.concat(a).map(function(u,c){return u=RS(u),!l&&c?"["+u+"]":u}).join(l?".":""):a}function XM(e){return J.isArray(e)&&!e.some(hm)}const ZM=J.toFlatObject(J,{},null,function(a){return/^is[A-Z]/.test(a)});function Uc(e,a,l){if(!J.isObject(e))throw new TypeError("target must be an object");a=a||new FormData,l=J.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,E){return!J.isUndefined(E[$])});const i=l.metaTokens,u=l.visitor||g,c=l.dots,d=l.indexes,p=(l.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(a);if(!J.isFunction(u))throw new TypeError("visitor must be a function");function m(S){if(S===null)return"";if(J.isDate(S))return S.toISOString();if(!p&&J.isBlob(S))throw new Ze("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(S)||J.isTypedArray(S)?p&&typeof Blob=="function"?new Blob([S]):Buffer.from(S):S}function g(S,$,E){let T=S;if(S&&!E&&typeof S=="object"){if(J.endsWith($,"{}"))$=i?$:$.slice(0,-2),S=JSON.stringify(S);else if(J.isArray(S)&&XM(S)||(J.isFileList(S)||J.endsWith($,"[]"))&&(T=J.toArray(S)))return $=RS($),T.forEach(function(M,z){!(J.isUndefined(M)||M===null)&&a.append(d===!0?M1([$],z,c):d===null?$:$+"[]",m(M))}),!1}return hm(S)?!0:(a.append(M1(E,$,c),m(S)),!1)}const y=[],b=Object.assign(ZM,{defaultVisitor:g,convertValue:m,isVisitable:hm});function w(S,$){if(!J.isUndefined(S)){if(y.indexOf(S)!==-1)throw Error("Circular reference detected in "+$.join("."));y.push(S),J.forEach(S,function(T,C){(!(J.isUndefined(T)||T===null)&&u.call(a,T,J.isString(C)?C.trim():C,$,b))===!0&&w(T,$?$.concat(C):[C])}),y.pop()}}if(!J.isObject(e))throw new TypeError("data must be an object");return w(e),a}function O1(e){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return a[i]})}function ap(e,a){this._pairs=[],e&&Uc(e,this,a)}const MS=ap.prototype;MS.append=function(a,l){this._pairs.push([a,l])};MS.toString=function(a){const l=a?function(i){return a.call(this,i,O1)}:O1;return this._pairs.map(function(u){return l(u[0])+"="+l(u[1])},"").join("&")};function KM(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function OS(e,a,l){if(!a)return e;const i=l&&l.encode||KM;J.isFunction(l)&&(l={serialize:l});const u=l&&l.serialize;let c;if(u?c=u(a,l):c=J.isURLSearchParams(a)?a.toString():new ap(a,l).toString(i),c){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class C1{constructor(){this.handlers=[]}use(a,l,i){return this.handlers.push({fulfilled:a,rejected:l,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){J.forEach(this.handlers,function(i){i!==null&&a(i)})}}const CS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},WM=typeof URLSearchParams<"u"?URLSearchParams:ap,JM=typeof FormData<"u"?FormData:null,IM=typeof Blob<"u"?Blob:null,e4={isBrowser:!0,classes:{URLSearchParams:WM,FormData:JM,Blob:IM},protocols:["http","https","file","blob","url","data"]},np=typeof window<"u"&&typeof document<"u",mm=typeof navigator=="object"&&navigator||void 0,t4=np&&(!mm||["ReactNative","NativeScript","NS"].indexOf(mm.product)<0),r4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",a4=np&&window.location.href||"http://localhost",n4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:np,hasStandardBrowserEnv:t4,hasStandardBrowserWebWorkerEnv:r4,navigator:mm,origin:a4},Symbol.toStringTag,{value:"Module"})),br={...n4,...e4};function l4(e,a){return Uc(e,new br.classes.URLSearchParams,Object.assign({visitor:function(l,i,u,c){return br.isNode&&J.isBuffer(l)?(this.append(i,l.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},a))}function i4(e){return J.matchAll(/\w+|\[(\w*)]/g,e).map(a=>a[0]==="[]"?"":a[1]||a[0])}function o4(e){const a={},l=Object.keys(e);let i;const u=l.length;let c;for(i=0;i<u;i++)c=l[i],a[c]=e[c];return a}function AS(e){function a(l,i,u,c){let d=l[c++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),p=c>=l.length;return d=!d&&J.isArray(u)?u.length:d,p?(J.hasOwnProp(u,d)?u[d]=[u[d],i]:u[d]=i,!h):((!u[d]||!J.isObject(u[d]))&&(u[d]=[]),a(l,i,u[d],c)&&J.isArray(u[d])&&(u[d]=o4(u[d])),!h)}if(J.isFormData(e)&&J.isFunction(e.entries)){const l={};return J.forEachEntry(e,(i,u)=>{a(i4(i),u,l,0)}),l}return null}function u4(e,a,l){if(J.isString(e))try{return(a||JSON.parse)(e),J.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(l||JSON.stringify)(e)}const Tu={transitional:CS,adapter:["xhr","http","fetch"],transformRequest:[function(a,l){const i=l.getContentType()||"",u=i.indexOf("application/json")>-1,c=J.isObject(a);if(c&&J.isHTMLForm(a)&&(a=new FormData(a)),J.isFormData(a))return u?JSON.stringify(AS(a)):a;if(J.isArrayBuffer(a)||J.isBuffer(a)||J.isStream(a)||J.isFile(a)||J.isBlob(a)||J.isReadableStream(a))return a;if(J.isArrayBufferView(a))return a.buffer;if(J.isURLSearchParams(a))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let h;if(c){if(i.indexOf("application/x-www-form-urlencoded")>-1)return l4(a,this.formSerializer).toString();if((h=J.isFileList(a))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Uc(h?{"files[]":a}:a,p&&new p,this.formSerializer)}}return c||u?(l.setContentType("application/json",!1),u4(a)):a}],transformResponse:[function(a){const l=this.transitional||Tu.transitional,i=l&&l.forcedJSONParsing,u=this.responseType==="json";if(J.isResponse(a)||J.isReadableStream(a))return a;if(a&&J.isString(a)&&(i&&!this.responseType||u)){const d=!(l&&l.silentJSONParsing)&&u;try{return JSON.parse(a)}catch(h){if(d)throw h.name==="SyntaxError"?Ze.from(h,Ze.ERR_BAD_RESPONSE,this,null,this.response):h}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:br.classes.FormData,Blob:br.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],e=>{Tu.headers[e]={}});const s4=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),c4=e=>{const a={};let l,i,u;return e&&e.split(`
`).forEach(function(d){u=d.indexOf(":"),l=d.substring(0,u).trim().toLowerCase(),i=d.substring(u+1).trim(),!(!l||a[l]&&s4[l])&&(l==="set-cookie"?a[l]?a[l].push(i):a[l]=[i]:a[l]=a[l]?a[l]+", "+i:i)}),a},A1=Symbol("internals");function Vo(e){return e&&String(e).trim().toLowerCase()}function rc(e){return e===!1||e==null?e:J.isArray(e)?e.map(rc):String(e)}function f4(e){const a=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=l.exec(e);)a[i[1]]=i[2];return a}const d4=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function fh(e,a,l,i,u){if(J.isFunction(i))return i.call(this,a,l);if(u&&(a=l),!!J.isString(a)){if(J.isString(i))return a.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(a)}}function h4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,l,i)=>l.toUpperCase()+i)}function m4(e,a){const l=J.toCamelCase(" "+a);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+l,{value:function(u,c,d){return this[i].call(this,a,u,c,d)},configurable:!0})})}let Ar=class{constructor(a){a&&this.set(a)}set(a,l,i){const u=this;function c(h,p,m){const g=Vo(p);if(!g)throw new Error("header name must be a non-empty string");const y=J.findKey(u,g);(!y||u[y]===void 0||m===!0||m===void 0&&u[y]!==!1)&&(u[y||p]=rc(h))}const d=(h,p)=>J.forEach(h,(m,g)=>c(m,g,p));if(J.isPlainObject(a)||a instanceof this.constructor)d(a,l);else if(J.isString(a)&&(a=a.trim())&&!d4(a))d(c4(a),l);else if(J.isHeaders(a))for(const[h,p]of a.entries())c(p,h,i);else a!=null&&c(l,a,i);return this}get(a,l){if(a=Vo(a),a){const i=J.findKey(this,a);if(i){const u=this[i];if(!l)return u;if(l===!0)return f4(u);if(J.isFunction(l))return l.call(this,u,i);if(J.isRegExp(l))return l.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,l){if(a=Vo(a),a){const i=J.findKey(this,a);return!!(i&&this[i]!==void 0&&(!l||fh(this,this[i],i,l)))}return!1}delete(a,l){const i=this;let u=!1;function c(d){if(d=Vo(d),d){const h=J.findKey(i,d);h&&(!l||fh(i,i[h],h,l))&&(delete i[h],u=!0)}}return J.isArray(a)?a.forEach(c):c(a),u}clear(a){const l=Object.keys(this);let i=l.length,u=!1;for(;i--;){const c=l[i];(!a||fh(this,this[c],c,a,!0))&&(delete this[c],u=!0)}return u}normalize(a){const l=this,i={};return J.forEach(this,(u,c)=>{const d=J.findKey(i,c);if(d){l[d]=rc(u),delete l[c];return}const h=a?h4(c):String(c).trim();h!==c&&delete l[c],l[h]=rc(u),i[h]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const l=Object.create(null);return J.forEach(this,(i,u)=>{i!=null&&i!==!1&&(l[u]=a&&J.isArray(i)?i.join(", "):i)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,l])=>a+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...l){const i=new this(a);return l.forEach(u=>i.set(u)),i}static accessor(a){const i=(this[A1]=this[A1]={accessors:{}}).accessors,u=this.prototype;function c(d){const h=Vo(d);i[h]||(m4(u,d),i[h]=!0)}return J.isArray(a)?a.forEach(c):c(a),this}};Ar.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(Ar.prototype,({value:e},a)=>{let l=a[0].toUpperCase()+a.slice(1);return{get:()=>e,set(i){this[l]=i}}});J.freezeMethods(Ar);function dh(e,a){const l=this||Tu,i=a||l,u=Ar.from(i.headers);let c=i.data;return J.forEach(e,function(h){c=h.call(l,c,u.normalize(),a?a.status:void 0)}),u.normalize(),c}function DS(e){return!!(e&&e.__CANCEL__)}function Yi(e,a,l){Ze.call(this,e??"canceled",Ze.ERR_CANCELED,a,l),this.name="CanceledError"}J.inherits(Yi,Ze,{__CANCEL__:!0});function zS(e,a,l){const i=l.config.validateStatus;!l.status||!i||i(l.status)?e(l):a(new Ze("Request failed with status code "+l.status,[Ze.ERR_BAD_REQUEST,Ze.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function p4(e){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return a&&a[1]||""}function g4(e,a){e=e||10;const l=new Array(e),i=new Array(e);let u=0,c=0,d;return a=a!==void 0?a:1e3,function(p){const m=Date.now(),g=i[c];d||(d=m),l[u]=p,i[u]=m;let y=c,b=0;for(;y!==u;)b+=l[y++],y=y%e;if(u=(u+1)%e,u===c&&(c=(c+1)%e),m-d<a)return;const w=g&&m-g;return w?Math.round(b*1e3/w):void 0}}function y4(e,a){let l=0,i=1e3/a,u,c;const d=(m,g=Date.now())=>{l=g,u=null,c&&(clearTimeout(c),c=null),e.apply(null,m)};return[(...m)=>{const g=Date.now(),y=g-l;y>=i?d(m,g):(u=m,c||(c=setTimeout(()=>{c=null,d(u)},i-y)))},()=>u&&d(u)]}const yc=(e,a,l=3)=>{let i=0;const u=g4(50,250);return y4(c=>{const d=c.loaded,h=c.lengthComputable?c.total:void 0,p=d-i,m=u(p),g=d<=h;i=d;const y={loaded:d,total:h,progress:h?d/h:void 0,bytes:p,rate:m||void 0,estimated:m&&h&&g?(h-d)/m:void 0,event:c,lengthComputable:h!=null,[a?"download":"upload"]:!0};e(y)},l)},D1=(e,a)=>{const l=e!=null;return[i=>a[0]({lengthComputable:l,total:e,loaded:i}),a[1]]},z1=e=>(...a)=>J.asap(()=>e(...a)),v4=br.hasStandardBrowserEnv?((e,a)=>l=>(l=new URL(l,br.origin),e.protocol===l.protocol&&e.host===l.host&&(a||e.port===l.port)))(new URL(br.origin),br.navigator&&/(msie|trident)/i.test(br.navigator.userAgent)):()=>!0,b4=br.hasStandardBrowserEnv?{write(e,a,l,i,u,c){const d=[e+"="+encodeURIComponent(a)];J.isNumber(l)&&d.push("expires="+new Date(l).toGMTString()),J.isString(i)&&d.push("path="+i),J.isString(u)&&d.push("domain="+u),c===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const a=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function x4(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function S4(e,a){return a?e.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):e}function BS(e,a,l){let i=!x4(a);return e&&(i||l==!1)?S4(e,a):a}const B1=e=>e instanceof Ar?{...e}:e;function zl(e,a){a=a||{};const l={};function i(m,g,y,b){return J.isPlainObject(m)&&J.isPlainObject(g)?J.merge.call({caseless:b},m,g):J.isPlainObject(g)?J.merge({},g):J.isArray(g)?g.slice():g}function u(m,g,y,b){if(J.isUndefined(g)){if(!J.isUndefined(m))return i(void 0,m,y,b)}else return i(m,g,y,b)}function c(m,g){if(!J.isUndefined(g))return i(void 0,g)}function d(m,g){if(J.isUndefined(g)){if(!J.isUndefined(m))return i(void 0,m)}else return i(void 0,g)}function h(m,g,y){if(y in a)return i(m,g);if(y in e)return i(void 0,m)}const p={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:h,headers:(m,g,y)=>u(B1(m),B1(g),y,!0)};return J.forEach(Object.keys(Object.assign({},e,a)),function(g){const y=p[g]||u,b=y(e[g],a[g],g);J.isUndefined(b)&&y!==h||(l[g]=b)}),l}const jS=e=>{const a=zl({},e);let{data:l,withXSRFToken:i,xsrfHeaderName:u,xsrfCookieName:c,headers:d,auth:h}=a;a.headers=d=Ar.from(d),a.url=OS(BS(a.baseURL,a.url,a.allowAbsoluteUrls),e.params,e.paramsSerializer),h&&d.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let p;if(J.isFormData(l)){if(br.hasStandardBrowserEnv||br.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((p=d.getContentType())!==!1){const[m,...g]=p?p.split(";").map(y=>y.trim()).filter(Boolean):[];d.setContentType([m||"multipart/form-data",...g].join("; "))}}if(br.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(a)),i||i!==!1&&v4(a.url))){const m=u&&c&&b4.read(c);m&&d.set(u,m)}return a},E4=typeof XMLHttpRequest<"u",w4=E4&&function(e){return new Promise(function(l,i){const u=jS(e);let c=u.data;const d=Ar.from(u.headers).normalize();let{responseType:h,onUploadProgress:p,onDownloadProgress:m}=u,g,y,b,w,S;function $(){w&&w(),S&&S(),u.cancelToken&&u.cancelToken.unsubscribe(g),u.signal&&u.signal.removeEventListener("abort",g)}let E=new XMLHttpRequest;E.open(u.method.toUpperCase(),u.url,!0),E.timeout=u.timeout;function T(){if(!E)return;const M=Ar.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),_={data:!h||h==="text"||h==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:M,config:e,request:E};zS(function(V){l(V),$()},function(V){i(V),$()},_),E=null}"onloadend"in E?E.onloadend=T:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(T)},E.onabort=function(){E&&(i(new Ze("Request aborted",Ze.ECONNABORTED,e,E)),E=null)},E.onerror=function(){i(new Ze("Network Error",Ze.ERR_NETWORK,e,E)),E=null},E.ontimeout=function(){let z=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const _=u.transitional||CS;u.timeoutErrorMessage&&(z=u.timeoutErrorMessage),i(new Ze(z,_.clarifyTimeoutError?Ze.ETIMEDOUT:Ze.ECONNABORTED,e,E)),E=null},c===void 0&&d.setContentType(null),"setRequestHeader"in E&&J.forEach(d.toJSON(),function(z,_){E.setRequestHeader(_,z)}),J.isUndefined(u.withCredentials)||(E.withCredentials=!!u.withCredentials),h&&h!=="json"&&(E.responseType=u.responseType),m&&([b,S]=yc(m,!0),E.addEventListener("progress",b)),p&&E.upload&&([y,w]=yc(p),E.upload.addEventListener("progress",y),E.upload.addEventListener("loadend",w)),(u.cancelToken||u.signal)&&(g=M=>{E&&(i(!M||M.type?new Yi(null,e,E):M),E.abort(),E=null)},u.cancelToken&&u.cancelToken.subscribe(g),u.signal&&(u.signal.aborted?g():u.signal.addEventListener("abort",g)));const C=p4(u.url);if(C&&br.protocols.indexOf(C)===-1){i(new Ze("Unsupported protocol "+C+":",Ze.ERR_BAD_REQUEST,e));return}E.send(c||null)})},$4=(e,a)=>{const{length:l}=e=e?e.filter(Boolean):[];if(a||l){let i=new AbortController,u;const c=function(m){if(!u){u=!0,h();const g=m instanceof Error?m:this.reason;i.abort(g instanceof Ze?g:new Yi(g instanceof Error?g.message:g))}};let d=a&&setTimeout(()=>{d=null,c(new Ze(`timeout ${a} of ms exceeded`,Ze.ETIMEDOUT))},a);const h=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(c):m.removeEventListener("abort",c)}),e=null)};e.forEach(m=>m.addEventListener("abort",c));const{signal:p}=i;return p.unsubscribe=()=>J.asap(h),p}},_4=function*(e,a){let l=e.byteLength;if(l<a){yield e;return}let i=0,u;for(;i<l;)u=i+a,yield e.slice(i,u),i=u},N4=async function*(e,a){for await(const l of T4(e))yield*_4(l,a)},T4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const a=e.getReader();try{for(;;){const{done:l,value:i}=await a.read();if(l)break;yield i}}finally{await a.cancel()}},j1=(e,a,l,i)=>{const u=N4(e,a);let c=0,d,h=p=>{d||(d=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:m,value:g}=await u.next();if(m){h(),p.close();return}let y=g.byteLength;if(l){let b=c+=y;l(b)}p.enqueue(new Uint8Array(g))}catch(m){throw h(m),m}},cancel(p){return h(p),u.return()}},{highWaterMark:2})},kc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",LS=kc&&typeof ReadableStream=="function",R4=kc&&(typeof TextEncoder=="function"?(e=>a=>e.encode(a))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),HS=(e,...a)=>{try{return!!e(...a)}catch{return!1}},M4=LS&&HS(()=>{let e=!1;const a=new Request(br.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!a}),L1=64*1024,pm=LS&&HS(()=>J.isReadableStream(new Response("").body)),vc={stream:pm&&(e=>e.body)};kc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!vc[a]&&(vc[a]=J.isFunction(e[a])?l=>l[a]():(l,i)=>{throw new Ze(`Response type '${a}' is not supported`,Ze.ERR_NOT_SUPPORT,i)})})})(new Response);const O4=async e=>{if(e==null)return 0;if(J.isBlob(e))return e.size;if(J.isSpecCompliantForm(e))return(await new Request(br.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(J.isArrayBufferView(e)||J.isArrayBuffer(e))return e.byteLength;if(J.isURLSearchParams(e)&&(e=e+""),J.isString(e))return(await R4(e)).byteLength},C4=async(e,a)=>{const l=J.toFiniteNumber(e.getContentLength());return l??O4(a)},A4=kc&&(async e=>{let{url:a,method:l,data:i,signal:u,cancelToken:c,timeout:d,onDownloadProgress:h,onUploadProgress:p,responseType:m,headers:g,withCredentials:y="same-origin",fetchOptions:b}=jS(e);m=m?(m+"").toLowerCase():"text";let w=$4([u,c&&c.toAbortSignal()],d),S;const $=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let E;try{if(p&&M4&&l!=="get"&&l!=="head"&&(E=await C4(g,i))!==0){let _=new Request(a,{method:"POST",body:i,duplex:"half"}),j;if(J.isFormData(i)&&(j=_.headers.get("content-type"))&&g.setContentType(j),_.body){const[V,K]=D1(E,yc(z1(p)));i=j1(_.body,L1,V,K)}}J.isString(y)||(y=y?"include":"omit");const T="credentials"in Request.prototype;S=new Request(a,{...b,signal:w,method:l.toUpperCase(),headers:g.normalize().toJSON(),body:i,duplex:"half",credentials:T?y:void 0});let C=await fetch(S);const M=pm&&(m==="stream"||m==="response");if(pm&&(h||M&&$)){const _={};["status","statusText","headers"].forEach(q=>{_[q]=C[q]});const j=J.toFiniteNumber(C.headers.get("content-length")),[V,K]=h&&D1(j,yc(z1(h),!0))||[];C=new Response(j1(C.body,L1,V,()=>{K&&K(),$&&$()}),_)}m=m||"text";let z=await vc[J.findKey(vc,m)||"text"](C,e);return!M&&$&&$(),await new Promise((_,j)=>{zS(_,j,{data:z,headers:Ar.from(C.headers),status:C.status,statusText:C.statusText,config:e,request:S})})}catch(T){throw $&&$(),T&&T.name==="TypeError"&&/fetch/i.test(T.message)?Object.assign(new Ze("Network Error",Ze.ERR_NETWORK,e,S),{cause:T.cause||T}):Ze.from(T,T&&T.code,e,S)}}),gm={http:QM,xhr:w4,fetch:A4};J.forEach(gm,(e,a)=>{if(e){try{Object.defineProperty(e,"name",{value:a})}catch{}Object.defineProperty(e,"adapterName",{value:a})}});const H1=e=>`- ${e}`,D4=e=>J.isFunction(e)||e===null||e===!1,PS={getAdapter:e=>{e=J.isArray(e)?e:[e];const{length:a}=e;let l,i;const u={};for(let c=0;c<a;c++){l=e[c];let d;if(i=l,!D4(l)&&(i=gm[(d=String(l)).toLowerCase()],i===void 0))throw new Ze(`Unknown adapter '${d}'`);if(i)break;u[d||"#"+c]=i}if(!i){const c=Object.entries(u).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let d=a?c.length>1?`since :
`+c.map(H1).join(`
`):" "+H1(c[0]):"as no adapter specified";throw new Ze("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return i},adapters:gm};function hh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Yi(null,e)}function P1(e){return hh(e),e.headers=Ar.from(e.headers),e.data=dh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),PS.getAdapter(e.adapter||Tu.adapter)(e).then(function(i){return hh(e),i.data=dh.call(e,e.transformResponse,i),i.headers=Ar.from(i.headers),i},function(i){return DS(i)||(hh(e),i&&i.response&&(i.response.data=dh.call(e,e.transformResponse,i.response),i.response.headers=Ar.from(i.response.headers))),Promise.reject(i)})}const US="1.8.4",Fc={};["object","boolean","number","function","string","symbol"].forEach((e,a)=>{Fc[e]=function(i){return typeof i===e||"a"+(a<1?"n ":" ")+e}});const U1={};Fc.transitional=function(a,l,i){function u(c,d){return"[Axios v"+US+"] Transitional option '"+c+"'"+d+(i?". "+i:"")}return(c,d,h)=>{if(a===!1)throw new Ze(u(d," has been removed"+(l?" in "+l:"")),Ze.ERR_DEPRECATED);return l&&!U1[d]&&(U1[d]=!0,console.warn(u(d," has been deprecated since v"+l+" and will be removed in the near future"))),a?a(c,d,h):!0}};Fc.spelling=function(a){return(l,i)=>(console.warn(`${i} is likely a misspelling of ${a}`),!0)};function z4(e,a,l){if(typeof e!="object")throw new Ze("options must be an object",Ze.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let u=i.length;for(;u-- >0;){const c=i[u],d=a[c];if(d){const h=e[c],p=h===void 0||d(h,c,e);if(p!==!0)throw new Ze("option "+c+" must be "+p,Ze.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Ze("Unknown option "+c,Ze.ERR_BAD_OPTION)}}const ac={assertOptions:z4,validators:Fc},Ta=ac.validators;let Ol=class{constructor(a){this.defaults=a,this.interceptors={request:new C1,response:new C1}}async request(a,l){try{return await this._request(a,l)}catch(i){if(i instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const c=u.stack?u.stack.replace(/^.+\n/,""):"";try{i.stack?c&&!String(i.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+c):i.stack=c}catch{}}throw i}}_request(a,l){typeof a=="string"?(l=l||{},l.url=a):l=a||{},l=zl(this.defaults,l);const{transitional:i,paramsSerializer:u,headers:c}=l;i!==void 0&&ac.assertOptions(i,{silentJSONParsing:Ta.transitional(Ta.boolean),forcedJSONParsing:Ta.transitional(Ta.boolean),clarifyTimeoutError:Ta.transitional(Ta.boolean)},!1),u!=null&&(J.isFunction(u)?l.paramsSerializer={serialize:u}:ac.assertOptions(u,{encode:Ta.function,serialize:Ta.function},!0)),l.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?l.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:l.allowAbsoluteUrls=!0),ac.assertOptions(l,{baseUrl:Ta.spelling("baseURL"),withXsrfToken:Ta.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let d=c&&J.merge(c.common,c[l.method]);c&&J.forEach(["delete","get","head","post","put","patch","common"],S=>{delete c[S]}),l.headers=Ar.concat(d,c);const h=[];let p=!0;this.interceptors.request.forEach(function($){typeof $.runWhen=="function"&&$.runWhen(l)===!1||(p=p&&$.synchronous,h.unshift($.fulfilled,$.rejected))});const m=[];this.interceptors.response.forEach(function($){m.push($.fulfilled,$.rejected)});let g,y=0,b;if(!p){const S=[P1.bind(this),void 0];for(S.unshift.apply(S,h),S.push.apply(S,m),b=S.length,g=Promise.resolve(l);y<b;)g=g.then(S[y++],S[y++]);return g}b=h.length;let w=l;for(y=0;y<b;){const S=h[y++],$=h[y++];try{w=S(w)}catch(E){$.call(this,E);break}}try{g=P1.call(this,w)}catch(S){return Promise.reject(S)}for(y=0,b=m.length;y<b;)g=g.then(m[y++],m[y++]);return g}getUri(a){a=zl(this.defaults,a);const l=BS(a.baseURL,a.url,a.allowAbsoluteUrls);return OS(l,a.params,a.paramsSerializer)}};J.forEach(["delete","get","head","options"],function(a){Ol.prototype[a]=function(l,i){return this.request(zl(i||{},{method:a,url:l,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(a){function l(i){return function(c,d,h){return this.request(zl(h||{},{method:a,headers:i?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}Ol.prototype[a]=l(),Ol.prototype[a+"Form"]=l(!0)});let B4=class kS{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(c){l=c});const i=this;this.promise.then(u=>{if(!i._listeners)return;let c=i._listeners.length;for(;c-- >0;)i._listeners[c](u);i._listeners=null}),this.promise.then=u=>{let c;const d=new Promise(h=>{i.subscribe(h),c=h}).then(u);return d.cancel=function(){i.unsubscribe(c)},d},a(function(c,d,h){i.reason||(i.reason=new Yi(c,d,h),l(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const l=this._listeners.indexOf(a);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const a=new AbortController,l=i=>{a.abort(i)};return this.subscribe(l),a.signal.unsubscribe=()=>this.unsubscribe(l),a.signal}static source(){let a;return{token:new kS(function(u){a=u}),cancel:a}}};function j4(e){return function(l){return e.apply(null,l)}}function L4(e){return J.isObject(e)&&e.isAxiosError===!0}const ym={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ym).forEach(([e,a])=>{ym[a]=e});function FS(e){const a=new Ol(e),l=bS(Ol.prototype.request,a);return J.extend(l,Ol.prototype,a,{allOwnKeys:!0}),J.extend(l,a,null,{allOwnKeys:!0}),l.create=function(u){return FS(zl(e,u))},l}const Qt=FS(Tu);Qt.Axios=Ol;Qt.CanceledError=Yi;Qt.CancelToken=B4;Qt.isCancel=DS;Qt.VERSION=US;Qt.toFormData=Uc;Qt.AxiosError=Ze;Qt.Cancel=Qt.CanceledError;Qt.all=function(a){return Promise.all(a)};Qt.spread=j4;Qt.isAxiosError=L4;Qt.mergeConfig=zl;Qt.AxiosHeaders=Ar;Qt.formToJSON=e=>AS(J.isHTMLForm(e)?new FormData(e):e);Qt.getAdapter=PS.getAdapter;Qt.HttpStatusCode=ym;Qt.default=Qt;const{Axios:EO,AxiosError:wO,CanceledError:$O,isCancel:_O,CancelToken:NO,VERSION:TO,all:RO,Cancel:MO,isAxiosError:OO,spread:CO,toFormData:AO,AxiosHeaders:DO,HttpStatusCode:zO,formToJSON:BO,getAdapter:jO,mergeConfig:LO}=Qt,H4=Qt.create({baseURL:"/",headers:{"Content-Type":"application/json"}}),P4=k.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  > * {
    flex: 0 0 auto;
    margin: 24px;
  }
`,U4=()=>N.jsx(P4,{children:N.jsx(Pm,{dimension:"l"})}),k4=()=>N.jsxs("div",{style:{padding:24},children:[N.jsx("h2",{children:"Что-то пошло не так."}),N.jsx("p",{children:"Попробуйте перезагрузить страницу."})]}),F4=v.forwardRef(({dimension:e="l",disabled:a,selected:l,onSelectTab:i,tabId:u,text:c,icon:d,badge:h,...p},m)=>N.jsxs(Nx,{...p,ref:m,tabId:u,dimension:e,disabled:a,selected:l,onSelectTab:i,children:[d&&N.jsx(qm,{$dimension:e,$disabled:a,children:d}),N.jsx(Tx,{children:c}),h&&N.jsx(Fm,{disabled:a,selected:l,children:h})]})),q4=({dimension:e="l",showUnderline:a=!0,defaultSelectedTabId:l,isRedirect:i=!1,tabs:u,...c})=>{const d=fS(),h=nn(),p=v.useMemo(()=>u.map(S=>S.tabId),[u]),[m,g]=v.useState(i?u.find(S=>h.pathname.includes(String(S==null?void 0:S.path))).tabId:l),y=S=>g(S),b=S=>{const $=u.find(E=>E.tabId===S);return!!($!=null&&$.disabled)},w=(S,$,E)=>{const T=u.find(j=>j.tabId===S),C=(T==null?void 0:T.text)||"",M=!!(T!=null&&T.disabled),z=T==null?void 0:T.badge,_=(T==null?void 0:T.path)||"";return N.jsx(F4,{dimension:e,tabId:S,text:C,badge:z,selected:$,disabled:M,onSelectTab:j=>{_&&d(_),E&&E(j)}},S)};return N.jsx(zb,{theme:Da,children:N.jsx($x,{...c,showUnderline:a,selectedTabId:m,defaultSelectedTabId:l,onSelectTab:y,tabsId:p,renderTab:w,tabIsDisabled:b})})},Y4=re`
  pointer-events: auto;
  &:hover {
    color: var(Neutral/Neutral 30, ${e=>e.theme.color["Neutral/Neutral 30"]});
  }
`,G4=re`
  &:hover {
    background-color: var(Neutral/Neutral 10, ${e=>e.theme.color["Neutral/Neutral 10"]});
  }
`,HO=k(xx)`
  display: flex;
  min-width: 35px;
  max-width: 190px;

  @media (max-width: 768px) {
    max-width: 80px;
  }

  ${({disabled:e,readOnly:a})=>e?Y4:a?null:G4}

  ${Ge["Caption/Caption 1"]};
`;class V4 extends v.Component{constructor(){super(...arguments);Ry(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(l,i){console.error("Uncaught error:",l,i)}render(){return this.state.hasError?N.jsx(k4,{}):this.props.children}}const la={root:"/",label:"Документы РКО",service:{root:"service/:id",label:"Подписки",fullPath:e=>`service/${e}`,events:{label:"События",root:"service/:id/events/:serviceId",shortPath:e=>`events/${e}`,fullPath:(e,a)=>`service/${e}/events/${a}`},periods:{label:"Периоды",root:"service/:id/periods/:serviceId",shortPath:e=>`periods/${e}`,fullPath:(e,a)=>`service/${e}/periods/${a}`}},testUIPage:"testUIPage"},Q4=v.lazy(()=>vu(()=>import("./RKOPage-Cr5tPJn5.js"),__vite__mapDeps([0,1]))),X4=v.lazy(()=>vu(()=>import("./ConnectionsPage-CZt-YOTj.js"),__vite__mapDeps([2,1]))),Z4=v.lazy(()=>vu(()=>import("./PeriodsPage-aXlHMt2L.js"),__vite__mapDeps([3,1]))),K4=v.lazy(()=>vu(()=>import("./EventsPage-BYgpJ8sr.js"),__vite__mapDeps([4,1]))),W4=k.main`
  padding: 40px 65px;
`,J4=k.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 65px;
  height: 100px;
  background-color: #1d6f95;
`,I4=k(du)`
  text-decoration: none;
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 3px;
  font-weight: 600;
`,eO=()=>N.jsx(J4,{children:N.jsx(I4,{to:"/",children:"КОМСОЮЛ"})}),tO=k(Cx)`
  // контейнер, куда мы встраиваем крошки имеет паддинги больше, чем нужен отсуп крошкам
  & > ol {
    margin: -8px 0 10px -2px;
  }
`,rO=()=>{const a=nn().pathname.split("/").filter(Boolean),l=[];let i=la,u="",c=0;for(la.label&&la.root==="/"&&l.push({text:la.label,linkAs:du,linkProps:{to:"/"}});c<a.length;){const d=a[c],h=Object.keys(i).find(g=>{const y=i[g];if(typeof y!="object"||!y.root)return!1;const b=y.root.split("/").filter(Boolean),w=b[b.length-2];return w===d||(w==null?void 0:w.startsWith(":"))});if(!h)break;const p=i[h];i=p;const m=p.root.split("/").filter(Boolean);for(let g=0;g<m.length&&c<a.length;g++){const y=m[g],b=a[c];if(!y.startsWith(":")){if(y!==b)break}u+=`/${b}`,c++}p.label&&l.push({text:p.label,linkAs:du,linkProps:{to:u}})}return l},aO=({...e})=>{const a=rO();return a.length>0?N.jsx(tO,{dimension:"m","data-testid":"breadcrumbs",items:a,...e}):N.jsx(N.Fragment,{})},nO=()=>N.jsxs(N.Fragment,{children:[N.jsx(eO,{}),N.jsx(W4,{children:N.jsx(hS,{})})]}),lO=k.main`
  padding: 40px 0;
`,iO=()=>{const{id:e,serviceId:a}=u3();if(!e||!a)throw new Error("Вы не выбрали документ РКО");const l=v.useMemo(()=>[{text:"Периоды",tabId:"1",path:la.service.periods.fullPath(e,a)},{text:"События",tabId:"2",path:la.service.events.fullPath(e,a)}],[e,a]);return N.jsxs(N.Fragment,{children:[N.jsx(aO,{}),N.jsx(q4,{tabs:l,isRedirect:!0}),N.jsx(lO,{children:N.jsx(hS,{})})]})},oO=()=>N.jsx(N.Fragment,{children:"Тестовая страница"}),uO=k.div`
  margin-top: 100px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`,sO=k.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;class cO{async getReviewList(a){return(await H4.post("api/review-list",{filters:a})).data}}const fO=new cO,dO=(e,a)=>F2({queryKey:["review-list",e],queryFn:()=>fO.getReviewList(e),...a}),hO=[{name:"tariffBook",title:"Тарифный сборник",width:200,isFilter:!0},{name:"sum",title:"Сумма",width:200,isFilter:!0},{name:"calculationDate",title:"Дата расчёта",type:"date",width:200,isFilter:!0},{name:"documentNumber",title:"Номер документа",width:200,isFilter:!0},{name:"currentAccount",title:"Расчётный счёт",width:200,isFilter:!0},{name:"status",title:"Статус отзыва",width:200,isFilter:!0},{name:"reviewDate",title:"Дата отзыва",type:"date",width:200,isFilter:!0}],k1=k.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
  gap: 20px;
`,F1=k.div`
  display: flex;
  justify-content: space-between;
  & > button:first-child {
    margin-right: 8px;
  }
`,mO=()=>{const[e,a]=v.useState({}),[l,i]=v.useState([...hO]),[u,c]=v.useState(!1),[d,h]=v.useState(!1),p=v.useRef(null),m=v.useRef(""),g=v.useRef(""),y=({name:$,width:E})=>{const T=S.map(C=>C.name===$?{...C,width:E}:C);i(T)},b=($,E)=>{a(T=>({...T,[$]:E}))},w=$=>{a(E=>({...E,[$]:null}))},S=v.useMemo(()=>l.map($=>$!=null&&$.isFilter?$.type==="date"?{...$,isFilterActive:d,renderFilter:({closeMenu:E})=>N.jsxs(k1,{children:[N.jsx(am,{label:"Выберите дату с:",value:e[`${$.name}-from`],onChange:T=>{m.current=T.target.value}}),N.jsx(am,{label:"Выберите дату по:",value:e[`${$.name}-to`],onChange:T=>{g.current=T.target.value}}),N.jsxs(F1,{children:[N.jsx(vi,{dimension:"m",onClick:()=>{var T;(T=m.current)!=null&&T.includes("__.__.____")||(b(`${$.name}-from`,m.current),!g.current.includes("__.__.____")&&(b(`${$.name}-to`,g.current),E()))},children:"Применить"}),N.jsx(vi,{dimension:"m",onClick:()=>{E(),w(`${$.name}-from`),w(`${$.name}-to`),h(!1)},children:"Очистить"})]})]})}:{...$,isFilterActive:u,renderFilter:({closeMenu:E})=>N.jsxs(k1,{children:[N.jsx(Hm,{children:N.jsx(Um,{defaultValue:e[$.name],ref:p})}),N.jsxs(F1,{children:[N.jsx(vi,{dimension:"m",onClick:()=>{var T;b($.name,(T=p==null?void 0:p.current)==null?void 0:T.value),E(),c(!0)},children:"Применить"}),N.jsx(vi,{dimension:"m",onClick:()=>{E(),w($.name),c(!1)},children:"Очистить"})]})]})}:$),[u,d,a,e]);return{filters:e,cols:S,handleResize:y}},pO=()=>{const[e,a]=v.useState([]),{cols:l,filters:i,handleResize:u}=mO(),{data:c,isSuccess:d}=dO(i),h=m=>{const g=e==null?void 0:e.map(y=>({...y,selected:m[y.id]}));a(g)},p=()=>{a(m=>m.map(g=>g!=null&&g.selected?{...g,status:"Отозван"}:g))};return v.useEffect(()=>{d&&a(c)},[d]),N.jsxs(uO,{children:[N.jsx(Rx,{font:"Header/H1",children:"Комиссии"}),N.jsx(sO,{children:N.jsx(vi,{dimension:"l",onClick:p,children:"Отозвать"})}),N.jsx(Xx,{headerLineClamp:2,displayRowSelectionColumn:!0,rowList:e,columnList:l,onColumnResize:u,onRowSelectionChange:h})]})},Vs=e=>N.jsx(v.Suspense,{fallback:N.jsx(U4,{}),children:N.jsx(e,{})}),gO=[{path:la.root,element:N.jsx(nO,{}),children:[{path:la.root,element:Vs(Q4)},{path:la.service.root,element:Vs(X4),index:!0},{element:N.jsx(iO,{}),children:[{path:la.service.events.root,element:Vs(K4)},{path:la.service.periods.root,element:Vs(Z4)}]}]},{path:la.testUIPage,element:N.jsx(oO,{})},{path:"review",element:N.jsx(pO,{})}],yO=!1,vO=new $2;v.lazy(()=>vu(()=>import("./production-DD1N6ugQ.js").then(e=>e.W),[]).then(e=>({default:e.ReactQueryDevtools})));o2.createRoot(document.getElementById("root")).render(N.jsx(v.StrictMode,{children:N.jsx(zb,{theme:Da,children:N.jsxs(a_,{children:[N.jsx(IR,{}),N.jsxs(M2,{client:vO,children:[N.jsx(uM,{}),N.jsx(q2,{initialIsOpen:!0}),yO]})]})})}));export{Ub as A,aO as B,xx as C,Eu as D,W$ as E,J$ as F,Fb as G,Xb as H,Jh as I,C6 as J,xi as K,Da as L,Am as M,K$ as N,I$ as O,Pb as P,Hm as Q,HO as R,Pm as S,Rx as T,U4 as U,Xx as V,zb as W,vu as _,H4 as a,F2 as b,fS as c,k as d,la as e,u3 as f,kr as g,A_ as h,ki as i,N as j,Oc as k,re as l,Ui as m,pr as n,nc as o,Nc as p,ou as q,v as r,mx as s,Ge as t,R2 as u,xu as v,se as w,su as x,qn as y,pl as z};
