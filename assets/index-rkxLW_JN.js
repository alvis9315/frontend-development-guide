const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TestAccounts-DOMGQnov.js","assets/TestAccounts-n08822T4.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Se={},_n=[],Ct=()=>{},Sa=()=>!1,ii=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_s=e=>e.startsWith("onUpdate:"),Fe=Object.assign,ws=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},su=Object.prototype.hasOwnProperty,_e=(e,t)=>su.call(e,t),de=Array.isArray,wn=e=>vr(e)==="[object Map]",Aa=e=>vr(e)==="[object Set]",Xs=e=>vr(e)==="[object Date]",he=e=>typeof e=="function",ke=e=>typeof e=="string",ht=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Pa=e=>(be(e)||he(e))&&he(e.then)&&he(e.catch),Ea=Object.prototype.toString,vr=e=>Ea.call(e),ou=e=>vr(e).slice(8,-1),Ra=e=>vr(e)==="[object Object]",si=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=ys(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},au=/-\w/g,lt=oi(e=>e.replace(au,t=>t.slice(1).toUpperCase())),lu=/\B([A-Z])/g,gn=oi(e=>e.replace(lu,"-$1").toLowerCase()),ai=oi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Si=oi(e=>e?`on${ai(e)}`:""),Vt=(e,t)=>!Object.is(e,t),Ai=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ka=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},cu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},uu=e=>{const t=ke(e)?Number(e):NaN;return isNaN(t)?e:t};let Js;const li=()=>Js||(Js=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(e){if(de(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ke(r)?pu(r):xs(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(ke(e)||be(e))return e}const fu=/;(?![^(]*\))/g,du=/:([^]+)/,hu=/\/\*[^]*?\*\//g;function pu(e){const t={};return e.replace(hu,"").split(fu).forEach(n=>{if(n){const r=n.split(du);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function or(e){let t="";if(ke(e))t=e;else if(de(e))for(let n=0;n<e.length;n++){const r=or(e[n]);r&&(t+=r+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mu=ys(gu);function Ta(e){return!!e||e===""}function vu(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Cs(e[r],t[r]);return n}function Cs(e,t){if(e===t)return!0;let n=Xs(e),r=Xs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ht(e),r=ht(t),n||r)return e===t;if(n=de(e),r=de(t),n||r)return n&&r?vu(e,t):!1;if(n=be(e),r=be(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Cs(e[a],t[a]))return!1}}return String(e)===String(t)}const Ia=e=>!!(e&&e.__v_isRef===!0),Gn=e=>ke(e)?e:e==null?"":de(e)||be(e)&&(e.toString===Ea||!he(e.toString))?Ia(e)?Gn(e.value):JSON.stringify(e,Oa,2):String(e),Oa=(e,t)=>Ia(t)?Oa(e,t.value):wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Pi(r,s)+" =>"]=i,n),{})}:Aa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Pi(n))}:ht(t)?Pi(t):be(t)&&!de(t)&&!Ra(t)?String(t):t,Pi=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class bu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){this._on>0&&--this._on===0&&(nt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function yu(){return nt}let Ae;const Ei=new WeakSet;class Da{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ei.has(this)&&(Ei.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Na(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),Ba(this);const t=Ae,n=ft;Ae=this,ft=!0;try{return this.fn()}finally{La(this),Ae=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ps(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ei.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vi(this)&&this.run()}get dirty(){return Vi(this)}}let Fa=0,Yn,Qn;function Na(e,t=!1){if(e.flags|=8,t){e.next=Qn,Qn=e;return}e.next=Yn,Yn=e}function Ss(){Fa++}function As(){if(--Fa>0)return;if(Qn){let t=Qn;for(Qn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yn;){let t=Yn;for(Yn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Ba(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function La(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Ps(r),_u(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Vi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(za(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function za(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ar)||(e.globalVersion=ar,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vi(e))))return;e.flags|=2;const t=e.dep,n=Ae,r=ft;Ae=e,ft=!0;try{Ba(e);const i=e.fn(e._value);(t.version===0||Vt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ae=n,ft=r,La(e),e.flags&=-3}}function Ps(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ps(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _u(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ft=!0;const Ma=[];function Ot(){Ma.push(ft),ft=!1}function Dt(){const e=Ma.pop();ft=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ae;Ae=void 0;try{t()}finally{Ae=n}}}let ar=0;class wu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!ft||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new wu(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,ja(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(t){this.version++,ar++,this.notify(t)}notify(t){Ss();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{As()}}}function ja(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ja(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Wr=new WeakMap,ln=Symbol(""),Gi=Symbol(""),lr=Symbol("");function Xe(e,t,n){if(ft&&Ae){let r=Wr.get(e);r||Wr.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Es),i.map=r,i.key=n),i.track()}}function Tt(e,t,n,r,i,s){const a=Wr.get(e);if(!a){ar++;return}const o=l=>{l&&l.trigger()};if(Ss(),t==="clear")a.forEach(o);else{const l=de(e),c=l&&si(n);if(l&&n==="length"){const f=Number(r);a.forEach((h,g)=>{(g==="length"||g===lr||!ht(g)&&g>=f)&&o(h)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(lr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(ln)),wn(e)&&o(a.get(Gi)));break;case"delete":l||(o(a.get(ln)),wn(e)&&o(a.get(Gi)));break;case"set":wn(e)&&o(a.get(ln));break}}As()}function xu(e,t){const n=Wr.get(e);return n&&n.get(t)}function vn(e){const t=ve(e);return t===e?t:(Xe(t,"iterate",lr),st(e)?t:t.map(pt))}function ci(e){return Xe(e=ve(e),"iterate",lr),e}function $t(e,t){return Ft(e)?En(cn(e)?pt(t):t):pt(t)}const Cu={__proto__:null,[Symbol.iterator](){return Ri(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return vn(this).concat(...e.map(t=>de(t)?vn(t):t))},entries(){return Ri(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return Pt(this,"every",e,t,void 0,arguments)},filter(e,t){return Pt(this,"filter",e,t,n=>n.map(r=>$t(this,r)),arguments)},find(e,t){return Pt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return Pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return Pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return ki(this,"includes",e)},indexOf(...e){return ki(this,"indexOf",e)},join(e){return vn(this).join(e)},lastIndexOf(...e){return ki(this,"lastIndexOf",e)},map(e,t){return Pt(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return Qs(this,"reduce",e,t)},reduceRight(e,...t){return Qs(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return Pt(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return vn(this).toReversed()},toSorted(e){return vn(this).toSorted(e)},toSpliced(...e){return vn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return Ri(this,"values",e=>$t(this,e))}};function Ri(e,t,n){const r=ci(e),i=r[t]();return r!==e&&!st(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const Su=Array.prototype;function Pt(e,t,n,r,i,s){const a=ci(e),o=a!==e&&!st(e),l=a[t];if(l!==Su[t]){const h=l.apply(e,s);return o?pt(h):h}let c=n;a!==e&&(o?c=function(h,g){return n.call(this,$t(e,h),g,e)}:n.length>2&&(c=function(h,g){return n.call(this,h,g,e)}));const f=l.call(a,c,r);return o&&i?i(f):f}function Qs(e,t,n,r){const i=ci(e);let s=n;return i!==e&&(st(e)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,e)}):s=function(a,o,l){return n.call(this,a,$t(e,o),l,e)}),i[t](s,...r)}function ki(e,t,n){const r=ve(e);Xe(r,"iterate",lr);const i=r[t](...n);return(i===-1||i===!1)&&ui(n[0])?(n[0]=ve(n[0]),r[t](...n)):i}function $n(e,t,n=[]){Ot(),Ss();const r=ve(e)[t].apply(e,n);return As(),Dt(),r}const Au=ys("__proto__,__v_isRef,__isVue"),$a=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Pu(e){ht(e)||(e=String(e));const t=ve(this);return Xe(t,"has",e),t.hasOwnProperty(e)}class Ua{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Bu:Va:s?qa:Wa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=de(t);if(!i){let l;if(a&&(l=Cu[n]))return l;if(n==="hasOwnProperty")return Pu}const o=Reflect.get(t,n,Le(t)?t:r);if((ht(n)?$a.has(n):Au(n))||(i||Xe(t,"get",n),s))return o;if(Le(o)){const l=a&&si(n)?o:o.value;return i&&be(l)?Pn(l):l}return be(o)?i?Pn(o):br(o):o}}class Ha extends Ua{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];const a=de(t)&&si(n);if(!this._isShallow){const c=Ft(s);if(!st(r)&&!Ft(r)&&(s=ve(s),r=ve(r)),!a&&Le(s)&&!Le(r))return c||(s.value=r),!0}const o=a?Number(n)<t.length:_e(t,n),l=Reflect.set(t,n,r,Le(t)?t:i);return t===ve(i)&&(o?Vt(r,s)&&Tt(t,"set",n,r):Tt(t,"add",n,r)),l}deleteProperty(t,n){const r=_e(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Tt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!ht(n)||!$a.has(n))&&Xe(t,"has",n),r}ownKeys(t){return Xe(t,"iterate",de(t)?"length":ln),Reflect.ownKeys(t)}}class Eu extends Ua{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ru=new Ha,ku=new Eu,Tu=new Ha(!0);const Ki=e=>e,Tr=e=>Reflect.getPrototypeOf(e);function Iu(e,t,n){return function(...r){const i=this.__v_raw,s=ve(i),a=wn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),f=n?Ki:t?En:pt;return!t&&Xe(s,"iterate",l?Gi:ln),Fe(Object.create(c),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:o?[f(h[0]),f(h[1])]:f(h),done:g}}})}}function Ir(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ou(e,t){const n={get(i){const s=this.__v_raw,a=ve(s),o=ve(i);e||(Vt(i,o)&&Xe(a,"get",i),Xe(a,"get",o));const{has:l}=Tr(a),c=t?Ki:e?En:pt;if(l.call(a,i))return c(s.get(i));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Xe(ve(i),"iterate",ln),i.size},has(i){const s=this.__v_raw,a=ve(s),o=ve(i);return e||(Vt(i,o)&&Xe(a,"has",i),Xe(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ve(o),c=t?Ki:e?En:pt;return!e&&Xe(l,"iterate",ln),o.forEach((f,h)=>i.call(s,c(f),c(h),a))}};return Fe(n,e?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(i){!t&&!st(i)&&!Ft(i)&&(i=ve(i));const s=ve(this);return Tr(s).has.call(s,i)||(s.add(i),Tt(s,"add",i,i)),this},set(i,s){!t&&!st(s)&&!Ft(s)&&(s=ve(s));const a=ve(this),{has:o,get:l}=Tr(a);let c=o.call(a,i);c||(i=ve(i),c=o.call(a,i));const f=l.call(a,i);return a.set(i,s),c?Vt(s,f)&&Tt(a,"set",i,s):Tt(a,"add",i,s),this},delete(i){const s=ve(this),{has:a,get:o}=Tr(s);let l=a.call(s,i);l||(i=ve(i),l=a.call(s,i)),o&&o.call(s,i);const c=s.delete(i);return l&&Tt(s,"delete",i,void 0),c},clear(){const i=ve(this),s=i.size!==0,a=i.clear();return s&&Tt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Iu(i,e,t)}),n}function Rs(e,t){const n=Ou(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(_e(n,i)&&i in r?n:r,i,s)}const Du={get:Rs(!1,!1)},Fu={get:Rs(!1,!0)},Nu={get:Rs(!0,!1)};const Wa=new WeakMap,qa=new WeakMap,Va=new WeakMap,Bu=new WeakMap;function Lu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zu(e){return e.__v_skip||!Object.isExtensible(e)?0:Lu(ou(e))}function br(e){return Ft(e)?e:ks(e,!1,Ru,Du,Wa)}function Ga(e){return ks(e,!1,Tu,Fu,qa)}function Pn(e){return ks(e,!0,ku,Nu,Va)}function ks(e,t,n,r,i){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=zu(e);if(s===0)return e;const a=i.get(e);if(a)return a;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function cn(e){return Ft(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function st(e){return!!(e&&e.__v_isShallow)}function ui(e){return e?!!e.__v_raw:!1}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function Zi(e){return!_e(e,"__v_skip")&&Object.isExtensible(e)&&ka(e,"__v_skip",!0),e}const pt=e=>be(e)?br(e):e,En=e=>be(e)?Pn(e):e;function Le(e){return e?e.__v_isRef===!0:!1}function qe(e){return Za(e,!1)}function Ka(e){return Za(e,!0)}function Za(e,t){return Le(e)?e:new Mu(e,t)}class Mu{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ve(t),this._value=n?t:pt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||st(t)||Ft(t);t=r?t:ve(t),Vt(t,n)&&(this._rawValue=t,this._value=r?t:pt(t),this.dep.trigger())}}function dt(e){return Le(e)?e.value:e}const ju={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xa(e){return cn(e)?e:new Proxy(e,ju)}class $u{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ve(t);let i=!0,s=t;if(!de(t)||!si(String(n)))do i=!ui(s)||st(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=dt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Le(this._raw[this._key])){const n=this._object[this._key];if(Le(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return xu(this._raw,this._key)}}class Uu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function yr(e,t,n){return Le(e)?e:he(e)?new Uu(e):be(e)&&arguments.length>1?Hu(e,t,n):qe(e)}function Hu(e,t,n){return new $u(e,t,n)}class Wu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Na(this,!0),!0}get value(){const t=this.dep.track();return za(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qu(e,t,n=!1){let r,i;return he(e)?r=e:(r=e.get,i=e.set),new Wu(r,i,n)}const Or={},qr=new WeakMap;let nn;function Vu(e,t=!1,n=nn){if(n){let r=qr.get(n);r||qr.set(n,r=[]),r.push(e)}}function Gu(e,t,n=Se){const{immediate:r,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=n,c=E=>i?E:st(E)||i===!1||i===0?It(E,1):It(E);let f,h,g,p,m=!1,d=!1;if(Le(e)?(h=()=>e.value,m=st(e)):cn(e)?(h=()=>c(e),m=!0):de(e)?(d=!0,m=e.some(E=>cn(E)||st(E)),h=()=>e.map(E=>{if(Le(E))return E.value;if(cn(E))return c(E);if(he(E))return l?l(E,2):E()})):he(e)?t?h=l?()=>l(e,2):e:h=()=>{if(g){Ot();try{g()}finally{Dt()}}const E=nn;nn=f;try{return l?l(e,3,[p]):e(p)}finally{nn=E}}:h=Ct,t&&i){const E=h,I=i===!0?1/0:i;h=()=>It(E(),I)}const b=yu(),v=()=>{f.stop(),b&&b.active&&ws(b.effects,f)};if(s&&t){const E=t;t=(...I)=>{E(...I),v()}}let w=d?new Array(e.length).fill(Or):Or;const C=E=>{if(!(!(f.flags&1)||!f.dirty&&!E))if(t){const I=f.run();if(i||m||(d?I.some((M,B)=>Vt(M,w[B])):Vt(I,w))){g&&g();const M=nn;nn=f;try{const B=[I,w===Or?void 0:d&&w[0]===Or?[]:w,p];w=I,l?l(t,3,B):t(...B)}finally{nn=M}}}else f.run()};return o&&o(C),f=new Da(h),f.scheduler=a?()=>a(C,!1):C,p=E=>Vu(E,!1,f),g=f.onStop=()=>{const E=qr.get(f);if(E){if(l)l(E,4);else for(const I of E)I();qr.delete(f)}},t?r?C(!0):w=f.run():a?a(C.bind(null,!0),!0):f.run(),v.pause=f.pause.bind(f),v.resume=f.resume.bind(f),v.stop=v,v}function It(e,t=1/0,n){if(t<=0||!be(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Le(e))It(e.value,t,n);else if(de(e))for(let r=0;r<e.length;r++)It(e[r],t,n);else if(Aa(e)||wn(e))e.forEach(r=>{It(r,t,n)});else if(Ra(e)){for(const r in e)It(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&It(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(e,t,n,r){try{return r?e(...r):e()}catch(i){wr(i,t,n)}}function gt(e,t,n,r){if(he(e)){const i=_r(e,t,n,r);return i&&Pa(i)&&i.catch(s=>{wr(s,t,n)}),i}if(de(e)){const i=[];for(let s=0;s<e.length;s++)i.push(gt(e[s],t,n,r));return i}}function wr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Se;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,c)===!1)return}o=o.parent}if(s){Ot(),_r(s,null,10,[e,l,c]),Dt();return}}Ku(e,n,i,r,a)}function Ku(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const et=[];let _t=-1;const xn=[];let Ut=null,bn=0;const Ja=Promise.resolve();let Vr=null;function Ya(e){const t=Vr||Ja;return e?t.then(this?e.bind(this):e):t}function Zu(e){let t=_t+1,n=et.length;for(;t<n;){const r=t+n>>>1,i=et[r],s=cr(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function Ts(e){if(!(e.flags&1)){const t=cr(e),n=et[et.length-1];!n||!(e.flags&2)&&t>=cr(n)?et.push(e):et.splice(Zu(t),0,e),e.flags|=1,Qa()}}function Qa(){Vr||(Vr=Ja.then(tl))}function Xu(e){de(e)?xn.push(...e):Ut&&e.id===-1?Ut.splice(bn+1,0,e):e.flags&1||(xn.push(e),e.flags|=1),Qa()}function eo(e,t,n=_t+1){for(;n<et.length;n++){const r=et[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;et.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function el(e){if(xn.length){const t=[...new Set(xn)].sort((n,r)=>cr(n)-cr(r));if(xn.length=0,Ut){Ut.push(...t);return}for(Ut=t,bn=0;bn<Ut.length;bn++){const n=Ut[bn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,bn=0}}const cr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tl(e){try{for(_t=0;_t<et.length;_t++){const t=et[_t];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_r(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;_t<et.length;_t++){const t=et[_t];t&&(t.flags&=-2)}_t=-1,et.length=0,el(),Vr=null,(et.length||xn.length)&&tl()}}let Ve=null,nl=null;function Gr(e){const t=Ve;return Ve=e,nl=e&&e.type.__scopeId||null,t}function Cn(e,t=Ve,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Xr(-1);const s=Gr(t);let a;try{a=e(...i)}finally{Gr(s),r._d&&Xr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ju(e,t){if(Ve===null)return e;const n=gi(Ve),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=Se]=t[i];s&&(he(s)&&(s={mounted:s,updated:s}),s.deep&&It(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Yt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(Ot(),gt(l,n,8,[e.el,o,e,t]),Dt())}}function Gt(e,t){if(We){let n=We.provides;const r=We.parent&&We.parent.provides;r===n&&(n=We.provides=Object.create(r)),n[e]=t}}function ze(e,t,n=!1){const r=Ms();if(r||An){let i=An?An._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&he(t)?t.call(r&&r.proxy):t}}const Yu=Symbol.for("v-scx"),Qu=()=>ze(Yu);function rl(e,t){return Is(e,null,t)}function un(e,t,n){return Is(e,t,n)}function Is(e,t,n=Se){const{immediate:r,deep:i,flush:s,once:a}=n,o=Fe({},n),l=t&&r||!t&&s!=="post";let c;if(kn){if(s==="sync"){const p=Qu();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ct,p.resume=Ct,p.pause=Ct,p}}const f=We;o.call=(p,m,d)=>gt(p,f,m,d);let h=!1;s==="post"?o.scheduler=p=>{Ze(p,f&&f.suspense)}:s!=="sync"&&(h=!0,o.scheduler=(p,m)=>{m?p():Ts(p)}),o.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const g=Gu(e,t,o);return kn&&(c?c.push(g):l&&g()),g}function ef(e,t,n){const r=this.proxy,i=ke(e)?e.includes(".")?il(r,e):()=>r[e]:e.bind(r,r);let s;he(t)?s=t:(s=t.handler,n=t);const a=Sr(this),o=Is(i,s.bind(r),n);return a(),o}function il(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const sl=Symbol("_vte"),ol=e=>e.__isTeleport,er=e=>e&&(e.disabled||e.disabled===""),to=e=>e&&(e.defer||e.defer===""),no=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ro=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Xi=(e,t)=>{const n=e&&e.to;return ke(n)?t?t(n):null:n},al={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,a,o,l,c){const{mc:f,pc:h,pbc:g,o:{insert:p,querySelector:m,createText:d,createComment:b}}=c,v=er(t.props);let{shapeFlag:w,children:C,dynamicChildren:E}=t;if(e==null){const I=t.el=d(""),M=t.anchor=d("");p(I,n,r),p(M,n,r);const B=(N,W)=>{w&16&&f(C,N,W,i,s,a,o,l)},G=()=>{const N=t.target=Xi(t.props,m),W=Ji(N,t,d,p);N&&(a!=="svg"&&no(N)?a="svg":a!=="mathml"&&ro(N)&&(a="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(N),v||(B(N,W),Mr(t,!1)))};v&&(B(n,M),Mr(t,!0)),to(t.props)?(t.el.__isMounted=!1,Ze(()=>{G(),delete t.el.__isMounted},s)):G()}else{if(to(t.props)&&e.el.__isMounted===!1){Ze(()=>{al.process(e,t,n,r,i,s,a,o,l,c)},s);return}t.el=e.el,t.targetStart=e.targetStart;const I=t.anchor=e.anchor,M=t.target=e.target,B=t.targetAnchor=e.targetAnchor,G=er(e.props),N=G?n:M,W=G?I:B;if(a==="svg"||no(M)?a="svg":(a==="mathml"||ro(M))&&(a="mathml"),E?(g(e.dynamicChildren,E,N,i,s,a,o),Ls(e,t,!0)):l||h(e,t,N,W,i,s,a,o,!1),v)G?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Dr(t,n,I,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ee=t.target=Xi(t.props,m);ee&&Dr(t,ee,null,c,0)}else G&&Dr(t,M,B,c,1);Mr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:f,target:h,props:g}=e;if(h&&(i(c),i(f)),s&&i(l),a&16){const p=s||!er(g);for(let m=0;m<o.length;m++){const d=o[m];r(d,t,n,p,!!d.dynamicChildren)}}},move:Dr,hydrate:tf};function Dr(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:a,anchor:o,shapeFlag:l,children:c,props:f}=e,h=s===2;if(h&&r(a,t,n),(!h||er(f))&&l&16)for(let g=0;g<c.length;g++)i(c[g],t,n,2);h&&r(o,t,n)}function tf(e,t,n,r,i,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:f}},h){function g(b,v){let w=v;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")t.targetStart=w;else if(w.data==="teleport anchor"){t.targetAnchor=w,b._lpa=t.targetAnchor&&a(t.targetAnchor);break}}w=a(w)}}function p(b,v){v.anchor=h(a(b),v,o(b),n,r,i,s)}const m=t.target=Xi(t.props,l),d=er(t.props);if(m){const b=m._lpa||m.firstChild;t.shapeFlag&16&&(d?(p(e,t),g(m,b),t.targetAnchor||Ji(m,t,f,c,o(e)===m?e:null)):(t.anchor=a(e),g(m,b),t.targetAnchor||Ji(m,t,f,c),h(b&&a(b),t,m,n,r,i,s))),Mr(t,d)}else d&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const nf=al;function Mr(e,t){const n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Ji(e,t,n,r,i=null){const s=t.targetStart=n(""),a=t.targetAnchor=n("");return s[sl]=a,e&&(r(s,e,i),r(a,e,i)),a}const wt=Symbol("_leaveCb"),Un=Symbol("_enterCb");function ll(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cr(()=>{e.isMounted=!0}),Fs(()=>{e.isUnmounting=!0}),e}const ot=[Function,Array],cl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},ul=e=>{const t=e.subTree;return t.component?ul(t.component):t},rf={name:"BaseTransition",props:cl,setup(e,{slots:t}){const n=Ms(),r=ll();return()=>{const i=t.default&&Os(t.default(),!0);if(!i||!i.length)return;const s=fl(i),a=ve(e),{mode:o}=a;if(r.isLeaving)return Ti(s);const l=io(s);if(!l)return Ti(s);let c=ur(l,a,r,n,h=>c=h);l.type!==He&&dn(l,c);let f=n.subTree&&io(n.subTree);if(f&&f.type!==He&&!rn(f,l)&&ul(n).type!==He){let h=ur(f,a,r,n);if(dn(f,h),o==="out-in"&&l.type!==He)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},Ti(s);o==="in-out"&&l.type!==He?h.delayLeave=(g,p,m)=>{const d=dl(r,f);d[String(f.key)]=f,g[wt]=()=>{p(),g[wt]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function fl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==He){t=n;break}}return t}const sf=rf;function dl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ur(e,t,n,r,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:g,onLeave:p,onAfterLeave:m,onLeaveCancelled:d,onBeforeAppear:b,onAppear:v,onAfterAppear:w,onAppearCancelled:C}=t,E=String(e.key),I=dl(n,e),M=(N,W)=>{N&&gt(N,r,9,W)},B=(N,W)=>{const ee=W[1];M(N,W),de(N)?N.every(S=>S.length<=1)&&ee():N.length<=1&&ee()},G={mode:a,persisted:o,beforeEnter(N){let W=l;if(!n.isMounted)if(s)W=b||l;else return;N[wt]&&N[wt](!0);const ee=I[E];ee&&rn(e,ee)&&ee.el[wt]&&ee.el[wt](),M(W,[N])},enter(N){let W=c,ee=f,S=h;if(!n.isMounted)if(s)W=v||c,ee=w||f,S=C||h;else return;let j=!1;N[Un]=q=>{j||(j=!0,q?M(S,[N]):M(ee,[N]),G.delayedLeave&&G.delayedLeave(),N[Un]=void 0)};const y=N[Un].bind(null,!1);W?B(W,[N,y]):y()},leave(N,W){const ee=String(e.key);if(N[Un]&&N[Un](!0),n.isUnmounting)return W();M(g,[N]);let S=!1;N[wt]=y=>{S||(S=!0,W(),y?M(d,[N]):M(m,[N]),N[wt]=void 0,I[ee]===e&&delete I[ee])};const j=N[wt].bind(null,!1);I[ee]=e,p?B(p,[N,j]):j()},clone(N){const W=ur(N,t,n,r,i);return i&&i(W),W}};return G}function Ti(e){if(xr(e))return e=Kt(e),e.children=null,e}function io(e){if(!xr(e))return ol(e.type)&&e.children?fl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&he(n.default))return n.default()}}function dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Os(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Be?(a.patchFlag&128&&i++,r=r.concat(Os(a.children,t,o))):(t||a.type!==He)&&r.push(o!=null?Kt(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Me(e,t){return he(e)?Fe({name:e.name},t,{setup:e}):e}function Ds(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function so(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Kr=new WeakMap;function tr(e,t,n,r,i=!1){if(de(e)){e.forEach((d,b)=>tr(d,t&&(de(t)?t[b]:t),n,r,i));return}if(Sn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&tr(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?gi(r.component):r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,f=o.refs===Se?o.refs={}:o.refs,h=o.setupState,g=ve(h),p=h===Se?Sa:d=>so(f,d)?!1:_e(g,d),m=(d,b)=>!(b&&so(f,b));if(c!=null&&c!==l){if(oo(t),ke(c))f[c]=null,p(c)&&(h[c]=null);else if(Le(c)){const d=t;m(c,d.k)&&(c.value=null),d.k&&(f[d.k]=null)}}if(he(l))_r(l,o,12,[a,f]);else{const d=ke(l),b=Le(l);if(d||b){const v=()=>{if(e.f){const w=d?p(l)?h[l]:f[l]:m()||!e.k?l.value:f[e.k];if(i)de(w)&&ws(w,s);else if(de(w))w.includes(s)||w.push(s);else if(d)f[l]=[s],p(l)&&(h[l]=f[l]);else{const C=[s];m(l,e.k)&&(l.value=C),e.k&&(f[e.k]=C)}}else d?(f[l]=a,p(l)&&(h[l]=a)):b&&(m(l,e.k)&&(l.value=a),e.k&&(f[e.k]=a))};if(a){const w=()=>{v(),Kr.delete(e)};w.id=-1,Kr.set(e,w),Ze(w,n)}else oo(e),v()}}}function oo(e){const t=Kr.get(e);t&&(t.flags|=8,Kr.delete(e))}const ao=e=>e.nodeType===8;li().requestIdleCallback;li().cancelIdleCallback;function of(e,t){if(ao(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(ao(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const Sn=e=>!!e.type.__asyncLoader;function ct(e){he(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=e;let c=null,f,h=0;const g=()=>(h++,c=null,p()),p=()=>{let m;return c||(m=c=t().catch(d=>{if(d=d instanceof Error?d:new Error(String(d)),l)return new Promise((b,v)=>{l(d,()=>b(g()),()=>v(d),h+1)});throw d}).then(d=>m!==c&&c?c:(d&&(d.__esModule||d[Symbol.toStringTag]==="Module")&&(d=d.default),f=d,d)))};return Me({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(m,d,b){let v=!1;(d.bu||(d.bu=[])).push(()=>v=!0);const w=()=>{v||b()},C=s?()=>{const E=s(w,I=>of(m,I));E&&(d.bum||(d.bum=[])).push(E)}:w;f?C():p().then(()=>!d.isUnmounted&&C())},get __asyncResolved(){return f},setup(){const m=We;if(Ds(m),f)return()=>Fr(f,m);const d=C=>{c=null,wr(C,m,13,!r)};if(o&&m.suspense||kn)return p().then(C=>()=>Fr(C,m)).catch(C=>(d(C),()=>r?Re(r,{error:C}):null));const b=qe(!1),v=qe(),w=qe(!!i);return i&&setTimeout(()=>{w.value=!1},i),a!=null&&setTimeout(()=>{if(!b.value&&!v.value){const C=new Error(`Async component timed out after ${a}ms.`);d(C),v.value=C}},a),p().then(()=>{b.value=!0,m.parent&&xr(m.parent.vnode)&&m.parent.update()}).catch(C=>{d(C),v.value=C}),()=>{if(b.value&&f)return Fr(f,m);if(v.value&&r)return Re(r,{error:v.value});if(n&&!w.value)return Fr(n,m)}}})}function Fr(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,a=Re(e,r,i);return a.ref=n,a.ce=s,delete t.vnode.ce,a}const xr=e=>e.type.__isKeepAlive;function af(e,t){hl(e,"a",t)}function lf(e,t){hl(e,"da",t)}function hl(e,t,n=We){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(fi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)xr(i.parent.vnode)&&cf(r,t,n,i),i=i.parent}}function cf(e,t,n,r){const i=fi(t,e,r,!0);gl(()=>{ws(r[t],i)},n)}function fi(e,t,n=We,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{Ot();const o=Sr(n),l=gt(t,n,e,a);return o(),Dt(),l});return r?i.unshift(s):i.push(s),s}}const Nt=e=>(t,n=We)=>{(!kn||e==="sp")&&fi(e,(...r)=>t(...r),n)},di=Nt("bm"),Cr=Nt("m"),uf=Nt("bu"),pl=Nt("u"),Fs=Nt("bum"),gl=Nt("um"),ff=Nt("sp"),df=Nt("rtg"),hf=Nt("rtc");function pf(e,t=We){fi("ec",e,t)}const ml="components";function gf(e,t){return bl(ml,e,!0,t)||e}const vl=Symbol.for("v-ndc");function mf(e){return ke(e)?bl(ml,e,!1)||e:e||vl}function bl(e,t,n=!0,r=!1){const i=Ve||We;if(i){const s=i.type;{const o=td(s,!1);if(o&&(o===t||o===lt(t)||o===ai(lt(t))))return s}const a=lo(i[e]||s[e],t)||lo(i.appContext[e],t);return!a&&r?s:a}}function lo(e,t){return e&&(e[t]||e[lt(t)]||e[ai(lt(t))])}function Ii(e,t,n,r){let i;const s=n,a=de(e);if(a||ke(e)){const o=a&&cn(e);let l=!1,c=!1;o&&(l=!st(e),c=Ft(e),e=ci(e)),i=new Array(e.length);for(let f=0,h=e.length;f<h;f++)i[f]=t(l?c?En(pt(e[f])):pt(e[f]):e[f],f,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(be(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const f=o[l];i[l]=t(e[f],f,l,s)}}else i=[];return i}function wv(e,t,n={},r,i){if(Ve.ce||Ve.parent&&Sn(Ve.parent)&&Ve.parent.ce){const c=Object.keys(n).length>0;return at(),dr(Be,null,[Re("slot",n,r)],c?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),at();const a=s&&yl(s(n)),o=n.key||a&&a.key,l=dr(Be,{key:(o&&!ht(o)?o:`_${t}`)+(!a&&r?"_fb":"")},a||[],a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function yl(e){return e.some(t=>Rn(t)?!(t.type===He||t.type===Be&&!yl(t.children)):!0)?e:null}const Yi=e=>e?zl(e)?gi(e):Yi(e.parent):null,nr=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ts(e.update)}),$nextTick:e=>e.n||(e.n=Ya.bind(e.proxy)),$watch:e=>ef.bind(e)}),Oi=(e,t)=>e!==Se&&!e.__isScriptSetup&&_e(e,t),vf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Oi(r,t))return a[t]=1,r[t];if(i!==Se&&_e(i,t))return a[t]=2,i[t];if(_e(s,t))return a[t]=3,s[t];if(n!==Se&&_e(n,t))return a[t]=4,n[t];Qi&&(a[t]=0)}}const c=nr[t];let f,h;if(c)return t==="$attrs"&&Xe(e.attrs,"get",""),c(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==Se&&_e(n,t))return a[t]=4,n[t];if(h=l.config.globalProperties,_e(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Oi(i,t)?(i[t]=n,!0):r!==Se&&_e(r,t)?(r[t]=n,!0):_e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:s,type:a}},o){let l;return!!(n[o]||e!==Se&&o[0]!=="$"&&_e(e,o)||Oi(t,o)||_e(s,o)||_e(r,o)||_e(nr,o)||_e(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:_e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function co(e){return de(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qi=!0;function bf(e){const t=wl(e),n=e.proxy,r=e.ctx;Qi=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:f,beforeMount:h,mounted:g,beforeUpdate:p,updated:m,activated:d,deactivated:b,beforeDestroy:v,beforeUnmount:w,destroyed:C,unmounted:E,render:I,renderTracked:M,renderTriggered:B,errorCaptured:G,serverPrefetch:N,expose:W,inheritAttrs:ee,components:S,directives:j,filters:y}=t;if(c&&yf(c,r,null),a)for(const V in a){const ie=a[V];he(ie)&&(r[V]=ie.bind(n))}if(i){const V=i.call(n,n);be(V)&&(e.data=br(V))}if(Qi=!0,s)for(const V in s){const ie=s[V],X=he(ie)?ie.bind(n,n):he(ie.get)?ie.get.bind(n,n):Ct,ae=!he(ie)&&he(ie.set)?ie.set.bind(n):Ct,$=ge({get:X,set:ae});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>$.value,set:L=>$.value=L})}if(o)for(const V in o)_l(o[V],r,n,V);if(l){const V=he(l)?l.call(n):l;Reflect.ownKeys(V).forEach(ie=>{Gt(ie,V[ie])})}f&&uo(f,e,"c");function se(V,ie){de(ie)?ie.forEach(X=>V(X.bind(n))):ie&&V(ie.bind(n))}if(se(di,h),se(Cr,g),se(uf,p),se(pl,m),se(af,d),se(lf,b),se(pf,G),se(hf,M),se(df,B),se(Fs,w),se(gl,E),se(ff,N),de(W))if(W.length){const V=e.exposed||(e.exposed={});W.forEach(ie=>{Object.defineProperty(V,ie,{get:()=>n[ie],set:X=>n[ie]=X,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===Ct&&(e.render=I),ee!=null&&(e.inheritAttrs=ee),S&&(e.components=S),j&&(e.directives=j),N&&Ds(e)}function yf(e,t,n=Ct){de(e)&&(e=es(e));for(const r in e){const i=e[r];let s;be(i)?"default"in i?s=ze(i.from||r,i.default,!0):s=ze(i.from||r):s=ze(i),Le(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function uo(e,t,n){gt(de(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _l(e,t,n,r){let i=r.includes(".")?il(n,r):()=>n[r];if(ke(e)){const s=t[e];he(s)&&un(i,s)}else if(he(e))un(i,e.bind(n));else if(be(e))if(de(e))e.forEach(s=>_l(s,t,n,r));else{const s=he(e.handler)?e.handler.bind(n):t[e.handler];he(s)&&un(i,s,e)}}function wl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Zr(l,c,a,!0)),Zr(l,t,a)),be(t)&&s.set(t,l),l}function Zr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Zr(e,s,n,!0),i&&i.forEach(a=>Zr(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=_f[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const _f={data:fo,props:ho,emits:ho,methods:Kn,computed:Kn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Kn,directives:Kn,watch:xf,provide:fo,inject:wf};function fo(e,t){return t?e?function(){return Fe(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function wf(e,t){return Kn(es(e),es(t))}function es(e){if(de(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ye(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?Fe(Object.create(null),e,t):t}function ho(e,t){return e?de(e)&&de(t)?[...new Set([...e,...t])]:Fe(Object.create(null),co(e),co(t??{})):t}function xf(e,t){if(!e)return t;if(!t)return e;const n=Fe(Object.create(null),e);for(const r in t)n[r]=Ye(e[r],t[r]);return n}function xl(){return{app:null,config:{isNativeTag:Sa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function Sf(e,t){return function(r,i=null){he(r)||(r=Fe({},r)),i!=null&&!be(i)&&(i=null);const s=xl(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Cf++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:rd,get config(){return s.config},set config(f){},use(f,...h){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(c,...h)):he(f)&&(a.add(f),f(c,...h))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,h){return h?(s.components[f]=h,c):s.components[f]},directive(f,h){return h?(s.directives[f]=h,c):s.directives[f]},mount(f,h,g){if(!l){const p=c._ceVNode||Re(r,i);return p.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),e(p,f,g),l=!0,c._container=f,f.__vue_app__=c,gi(p.component)}},onUnmount(f){o.push(f)},unmount(){l&&(gt(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return s.provides[f]=h,c},runWithContext(f){const h=An;An=c;try{return f()}finally{An=h}}};return c}}let An=null;const Af=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${lt(t)}Modifiers`]||e[`${gn(t)}Modifiers`];function Pf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Se;let i=n;const s=t.startsWith("update:"),a=s&&Af(r,t.slice(7));a&&(a.trim&&(i=n.map(f=>ke(f)?f.trim():f)),a.number&&(i=n.map(cu)));let o,l=r[o=Si(t)]||r[o=Si(lt(t))];!l&&s&&(l=r[o=Si(gn(t))]),l&&gt(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,gt(c,e,6,i)}}const Ef=new WeakMap;function Cl(e,t,n=!1){const r=n?Ef:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!he(e)){const l=c=>{const f=Cl(c,t,!0);f&&(o=!0,Fe(a,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(be(e)&&r.set(e,null),null):(de(s)?s.forEach(l=>a[l]=null):Fe(a,s),be(e)&&r.set(e,a),a)}function hi(e,t){return!e||!ii(t)?!1:(t=t.slice(2).replace(/Once$/,""),_e(e,t[0].toLowerCase()+t.slice(1))||_e(e,gn(t))||_e(e,t))}function po(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:f,props:h,data:g,setupState:p,ctx:m,inheritAttrs:d}=e,b=Gr(e);let v,w;try{if(n.shapeFlag&4){const E=i||r,I=E;v=xt(c.call(I,E,f,h,p,g,m)),w=o}else{const E=t;v=xt(E.length>1?E(h,{attrs:o,slots:a,emit:l}):E(h,null)),w=t.props?o:Rf(o)}}catch(E){rr.length=0,wr(E,e,1),v=Re(He)}let C=v;if(w&&d!==!1){const E=Object.keys(w),{shapeFlag:I}=C;E.length&&I&7&&(s&&E.some(_s)&&(w=kf(w,s)),C=Kt(C,w,!1,!0))}return n.dirs&&(C=Kt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&dn(C,n.transition),v=C,Gr(b),v}const Rf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ii(n))&&((t||(t={}))[n]=e[n]);return t},kf=(e,t)=>{const n={};for(const r in e)(!_s(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tf(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?go(r,a,c):!!a;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(Sl(a,r,g)&&!hi(c,g))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?go(r,a,c):!0:!!a;return!1}function go(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(Sl(t,e,s)&&!hi(n,s))return!0}return!1}function Sl(e,t,n){const r=e[n],i=t[n];return n==="style"&&be(r)&&be(i)?!Cs(r,i):r!==i}function If({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al={},Pl=()=>Object.create(Al),El=e=>Object.getPrototypeOf(e)===Al;function Of(e,t,n,r=!1){const i={},s=Pl();e.propsDefaults=Object.create(null),Rl(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Ga(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Df(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ve(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(hi(e.emitsOptions,g))continue;const p=t[g];if(l)if(_e(s,g))p!==s[g]&&(s[g]=p,c=!0);else{const m=lt(g);i[m]=ts(l,o,m,p,e,!1)}else p!==s[g]&&(s[g]=p,c=!0)}}}else{Rl(e,t,i,s)&&(c=!0);let f;for(const h in o)(!t||!_e(t,h)&&((f=gn(h))===h||!_e(t,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=ts(l,o,h,void 0,e,!0)):delete i[h]);if(s!==o)for(const h in s)(!t||!_e(t,h))&&(delete s[h],c=!0)}c&&Tt(e.attrs,"set","")}function Rl(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Jn(l))continue;const c=t[l];let f;i&&_e(i,f=lt(l))?!s||!s.includes(f)?n[f]=c:(o||(o={}))[f]=c:hi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=ve(n),c=o||Se;for(let f=0;f<s.length;f++){const h=s[f];n[h]=ts(i,l,h,c[h],e,!_e(c,h))}}return a}function ts(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=_e(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&he(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const f=Sr(i);r=c[n]=l.call(null,t),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===gn(n))&&(r=!0))}return r}const Ff=new WeakMap;function kl(e,t,n=!1){const r=n?Ff:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!he(e)){const f=h=>{l=!0;const[g,p]=kl(h,t,!0);Fe(a,g),p&&o.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return be(e)&&r.set(e,_n),_n;if(de(s))for(let f=0;f<s.length;f++){const h=lt(s[f]);mo(h)&&(a[h]=Se)}else if(s)for(const f in s){const h=lt(f);if(mo(h)){const g=s[f],p=a[h]=de(g)||he(g)?{type:g}:Fe({},g),m=p.type;let d=!1,b=!0;if(de(m))for(let v=0;v<m.length;++v){const w=m[v],C=he(w)&&w.name;if(C==="Boolean"){d=!0;break}else C==="String"&&(b=!1)}else d=he(m)&&m.name==="Boolean";p[0]=d,p[1]=b,(d||_e(p,"default"))&&o.push(h)}}const c=[a,o];return be(e)&&r.set(e,c),c}function mo(e){return e[0]!=="$"&&!Jn(e)}const Ns=e=>e==="_"||e==="_ctx"||e==="$stable",Bs=e=>de(e)?e.map(xt):[xt(e)],Nf=(e,t,n)=>{if(t._n)return t;const r=Cn((...i)=>Bs(t(...i)),n);return r._c=!1,r},Tl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ns(i))continue;const s=e[i];if(he(s))t[i]=Nf(i,s,r);else if(s!=null){const a=Bs(s);t[i]=()=>a}}},Il=(e,t)=>{const n=Bs(t);e.slots.default=()=>n},Ol=(e,t,n)=>{for(const r in t)(n||!Ns(r))&&(e[r]=t[r])},Bf=(e,t,n)=>{const r=e.slots=Pl();if(e.vnode.shapeFlag&32){const i=t._;i?(Ol(r,t,n),n&&ka(r,"_",i,!0)):Tl(t,r)}else t&&Il(e,t)},Lf=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=Se;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:Ol(i,t,n):(s=!t.$stable,Tl(t,i)),a=t}else t&&(Il(e,t),a={default:1});if(s)for(const o in i)!Ns(o)&&a[o]==null&&delete i[o]},Ze=Uf;function zf(e){return Mf(e)}function Mf(e,t){const n=li();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:g,setScopeId:p=Ct,insertStaticContent:m}=e,d=(A,k,u,T=null,R=null,_=null,x=void 0,P=null,F=!!k.dynamicChildren)=>{if(A===k)return;A&&!rn(A,k)&&(T=H(A),L(A,R,_,!0),A=null),k.patchFlag===-2&&(F=!1,k.dynamicChildren=null);const{type:D,ref:O,shapeFlag:z}=k;switch(D){case pi:b(A,k,u,T);break;case He:v(A,k,u,T);break;case jr:A==null&&w(k,u,T,x);break;case Be:S(A,k,u,T,R,_,x,P,F);break;default:z&1?I(A,k,u,T,R,_,x,P,F):z&6?j(A,k,u,T,R,_,x,P,F):(z&64||z&128)&&D.process(A,k,u,T,R,_,x,P,F,re)}O!=null&&R?tr(O,A&&A.ref,_,k||A,!k):O==null&&A&&A.ref!=null&&tr(A.ref,null,_,A,!0)},b=(A,k,u,T)=>{if(A==null)r(k.el=o(k.children),u,T);else{const R=k.el=A.el;k.children!==A.children&&c(R,k.children)}},v=(A,k,u,T)=>{A==null?r(k.el=l(k.children||""),u,T):k.el=A.el},w=(A,k,u,T)=>{[A.el,A.anchor]=m(A.children,k,u,T,A.el,A.anchor)},C=({el:A,anchor:k},u,T)=>{let R;for(;A&&A!==k;)R=g(A),r(A,u,T),A=R;r(k,u,T)},E=({el:A,anchor:k})=>{let u;for(;A&&A!==k;)u=g(A),i(A),A=u;i(k)},I=(A,k,u,T,R,_,x,P,F)=>{if(k.type==="svg"?x="svg":k.type==="math"&&(x="mathml"),A==null)M(k,u,T,R,_,x,P,F);else{const D=A.el&&A.el._isVueCE?A.el:null;try{D&&D._beginPatch(),N(A,k,R,_,x,P,F)}finally{D&&D._endPatch()}}},M=(A,k,u,T,R,_,x,P)=>{let F,D;const{props:O,shapeFlag:z,transition:K,dirs:U}=A;if(F=A.el=a(A.type,_,O&&O.is,O),z&8?f(F,A.children):z&16&&G(A.children,F,null,T,R,Di(A,_),x,P),U&&Yt(A,null,T,"created"),B(F,A,A.scopeId,x,T),O){for(const ue in O)ue!=="value"&&!Jn(ue)&&s(F,ue,null,O[ue],_,T);"value"in O&&s(F,"value",null,O.value,_),(D=O.onVnodeBeforeMount)&&vt(D,T,A)}U&&Yt(A,null,T,"beforeMount");const Y=jf(R,K);Y&&K.beforeEnter(F),r(F,k,u),((D=O&&O.onVnodeMounted)||Y||U)&&Ze(()=>{D&&vt(D,T,A),Y&&K.enter(F),U&&Yt(A,null,T,"mounted")},R)},B=(A,k,u,T,R)=>{if(u&&p(A,u),T)for(let _=0;_<T.length;_++)p(A,T[_]);if(R){let _=R.subTree;if(k===_||Nl(_.type)&&(_.ssContent===k||_.ssFallback===k)){const x=R.vnode;B(A,x,x.scopeId,x.slotScopeIds,R.parent)}}},G=(A,k,u,T,R,_,x,P,F=0)=>{for(let D=F;D<A.length;D++){const O=A[D]=P?kt(A[D]):xt(A[D]);d(null,O,k,u,T,R,_,x,P)}},N=(A,k,u,T,R,_,x)=>{const P=k.el=A.el;let{patchFlag:F,dynamicChildren:D,dirs:O}=k;F|=A.patchFlag&16;const z=A.props||Se,K=k.props||Se;let U;if(u&&Qt(u,!1),(U=K.onVnodeBeforeUpdate)&&vt(U,u,k,A),O&&Yt(k,A,u,"beforeUpdate"),u&&Qt(u,!0),(z.innerHTML&&K.innerHTML==null||z.textContent&&K.textContent==null)&&f(P,""),D?W(A.dynamicChildren,D,P,u,T,Di(k,R),_):x||ie(A,k,P,null,u,T,Di(k,R),_,!1),F>0){if(F&16)ee(P,z,K,u,R);else if(F&2&&z.class!==K.class&&s(P,"class",null,K.class,R),F&4&&s(P,"style",z.style,K.style,R),F&8){const Y=k.dynamicProps;for(let ue=0;ue<Y.length;ue++){const oe=Y[ue],xe=z[oe],Oe=K[oe];(Oe!==xe||oe==="value")&&s(P,oe,xe,Oe,R,u)}}F&1&&A.children!==k.children&&f(P,k.children)}else!x&&D==null&&ee(P,z,K,u,R);((U=K.onVnodeUpdated)||O)&&Ze(()=>{U&&vt(U,u,k,A),O&&Yt(k,A,u,"updated")},T)},W=(A,k,u,T,R,_,x)=>{for(let P=0;P<k.length;P++){const F=A[P],D=k[P],O=F.el&&(F.type===Be||!rn(F,D)||F.shapeFlag&198)?h(F.el):u;d(F,D,O,null,T,R,_,x,!0)}},ee=(A,k,u,T,R)=>{if(k!==u){if(k!==Se)for(const _ in k)!Jn(_)&&!(_ in u)&&s(A,_,k[_],null,R,T);for(const _ in u){if(Jn(_))continue;const x=u[_],P=k[_];x!==P&&_!=="value"&&s(A,_,P,x,R,T)}"value"in u&&s(A,"value",k.value,u.value,R)}},S=(A,k,u,T,R,_,x,P,F)=>{const D=k.el=A?A.el:o(""),O=k.anchor=A?A.anchor:o("");let{patchFlag:z,dynamicChildren:K,slotScopeIds:U}=k;U&&(P=P?P.concat(U):U),A==null?(r(D,u,T),r(O,u,T),G(k.children||[],u,O,R,_,x,P,F)):z>0&&z&64&&K&&A.dynamicChildren&&A.dynamicChildren.length===K.length?(W(A.dynamicChildren,K,u,R,_,x,P),(k.key!=null||R&&k===R.subTree)&&Ls(A,k,!0)):ie(A,k,u,O,R,_,x,P,F)},j=(A,k,u,T,R,_,x,P,F)=>{k.slotScopeIds=P,A==null?k.shapeFlag&512?R.ctx.activate(k,u,T,x,F):y(k,u,T,R,_,x,F):q(A,k,F)},y=(A,k,u,T,R,_,x)=>{const P=A.component=Xf(A,T,R);if(xr(A)&&(P.ctx.renderer=re),Jf(P,!1,x),P.asyncDep){if(R&&R.registerDep(P,se,x),!A.el){const F=P.subTree=Re(He);v(null,F,k,u),A.placeholder=F.el}}else se(P,A,k,u,R,_,x)},q=(A,k,u)=>{const T=k.component=A.component;if(Tf(A,k,u))if(T.asyncDep&&!T.asyncResolved){V(T,k,u);return}else T.next=k,T.update();else k.el=A.el,T.vnode=k},se=(A,k,u,T,R,_,x)=>{const P=()=>{if(A.isMounted){let{next:z,bu:K,u:U,parent:Y,vnode:ue}=A;{const Ge=Dl(A);if(Ge){z&&(z.el=ue.el,V(A,z,x)),Ge.asyncDep.then(()=>{Ze(()=>{A.isUnmounted||D()},R)});return}}let oe=z,xe;Qt(A,!1),z?(z.el=ue.el,V(A,z,x)):z=ue,K&&Ai(K),(xe=z.props&&z.props.onVnodeBeforeUpdate)&&vt(xe,Y,z,ue),Qt(A,!0);const Oe=po(A),Ie=A.subTree;A.subTree=Oe,d(Ie,Oe,h(Ie.el),H(Ie),A,R,_),z.el=Oe.el,oe===null&&If(A,Oe.el),U&&Ze(U,R),(xe=z.props&&z.props.onVnodeUpdated)&&Ze(()=>vt(xe,Y,z,ue),R)}else{let z;const{el:K,props:U}=k,{bm:Y,m:ue,parent:oe,root:xe,type:Oe}=A,Ie=Sn(k);Qt(A,!1),Y&&Ai(Y),!Ie&&(z=U&&U.onVnodeBeforeMount)&&vt(z,oe,k),Qt(A,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(Oe);const Ge=A.subTree=po(A);d(null,Ge,u,T,A,R,_),k.el=Ge.el}if(ue&&Ze(ue,R),!Ie&&(z=U&&U.onVnodeMounted)){const Ge=k;Ze(()=>vt(z,oe,Ge),R)}(k.shapeFlag&256||oe&&Sn(oe.vnode)&&oe.vnode.shapeFlag&256)&&A.a&&Ze(A.a,R),A.isMounted=!0,k=u=T=null}};A.scope.on();const F=A.effect=new Da(P);A.scope.off();const D=A.update=F.run.bind(F),O=A.job=F.runIfDirty.bind(F);O.i=A,O.id=A.uid,F.scheduler=()=>Ts(O),Qt(A,!0),D()},V=(A,k,u)=>{k.component=A;const T=A.vnode.props;A.vnode=k,A.next=null,Df(A,k.props,T,u),Lf(A,k.children,u),Ot(),eo(A),Dt()},ie=(A,k,u,T,R,_,x,P,F=!1)=>{const D=A&&A.children,O=A?A.shapeFlag:0,z=k.children,{patchFlag:K,shapeFlag:U}=k;if(K>0){if(K&128){ae(D,z,u,T,R,_,x,P,F);return}else if(K&256){X(D,z,u,T,R,_,x,P,F);return}}U&8?(O&16&&me(D,R,_),z!==D&&f(u,z)):O&16?U&16?ae(D,z,u,T,R,_,x,P,F):me(D,R,_,!0):(O&8&&f(u,""),U&16&&G(z,u,T,R,_,x,P,F))},X=(A,k,u,T,R,_,x,P,F)=>{A=A||_n,k=k||_n;const D=A.length,O=k.length,z=Math.min(D,O);let K;for(K=0;K<z;K++){const U=k[K]=F?kt(k[K]):xt(k[K]);d(A[K],U,u,null,R,_,x,P,F)}D>O?me(A,R,_,!0,!1,z):G(k,u,T,R,_,x,P,F,z)},ae=(A,k,u,T,R,_,x,P,F)=>{let D=0;const O=k.length;let z=A.length-1,K=O-1;for(;D<=z&&D<=K;){const U=A[D],Y=k[D]=F?kt(k[D]):xt(k[D]);if(rn(U,Y))d(U,Y,u,null,R,_,x,P,F);else break;D++}for(;D<=z&&D<=K;){const U=A[z],Y=k[K]=F?kt(k[K]):xt(k[K]);if(rn(U,Y))d(U,Y,u,null,R,_,x,P,F);else break;z--,K--}if(D>z){if(D<=K){const U=K+1,Y=U<O?k[U].el:T;for(;D<=K;)d(null,k[D]=F?kt(k[D]):xt(k[D]),u,Y,R,_,x,P,F),D++}}else if(D>K)for(;D<=z;)L(A[D],R,_,!0),D++;else{const U=D,Y=D,ue=new Map;for(D=Y;D<=K;D++){const $e=k[D]=F?kt(k[D]):xt(k[D]);$e.key!=null&&ue.set($e.key,D)}let oe,xe=0;const Oe=K-Y+1;let Ie=!1,Ge=0;const Ce=new Array(Oe);for(D=0;D<Oe;D++)Ce[D]=0;for(D=U;D<=z;D++){const $e=A[D];if(xe>=Oe){L($e,R,_,!0);continue}let De;if($e.key!=null)De=ue.get($e.key);else for(oe=Y;oe<=K;oe++)if(Ce[oe-Y]===0&&rn($e,k[oe])){De=oe;break}De===void 0?L($e,R,_,!0):(Ce[De-Y]=D+1,De>=Ge?Ge=De:Ie=!0,d($e,k[De],u,null,R,_,x,P,F),xe++)}const Jt=Ie?$f(Ce):_n;for(oe=Jt.length-1,D=Oe-1;D>=0;D--){const $e=Y+D,De=k[$e],Mn=k[$e+1],Rr=$e+1<O?Mn.el||Fl(Mn):T;Ce[D]===0?d(null,De,u,Rr,R,_,x,P,F):Ie&&(oe<0||D!==Jt[oe]?$(De,u,Rr,2):oe--)}}},$=(A,k,u,T,R=null)=>{const{el:_,type:x,transition:P,children:F,shapeFlag:D}=A;if(D&6){$(A.component.subTree,k,u,T);return}if(D&128){A.suspense.move(k,u,T);return}if(D&64){x.move(A,k,u,re);return}if(x===Be){r(_,k,u);for(let z=0;z<F.length;z++)$(F[z],k,u,T);r(A.anchor,k,u);return}if(x===jr){C(A,k,u);return}if(T!==2&&D&1&&P)if(T===0)P.beforeEnter(_),r(_,k,u),Ze(()=>P.enter(_),R);else{const{leave:z,delayLeave:K,afterLeave:U}=P,Y=()=>{A.ctx.isUnmounted?i(_):r(_,k,u)},ue=()=>{_._isLeaving&&_[wt](!0),z(_,()=>{Y(),U&&U()})};K?K(_,Y,ue):ue()}else r(_,k,u)},L=(A,k,u,T=!1,R=!1)=>{const{type:_,props:x,ref:P,children:F,dynamicChildren:D,shapeFlag:O,patchFlag:z,dirs:K,cacheIndex:U}=A;if(z===-2&&(R=!1),P!=null&&(Ot(),tr(P,null,u,A,!0),Dt()),U!=null&&(k.renderCache[U]=void 0),O&256){k.ctx.deactivate(A);return}const Y=O&1&&K,ue=!Sn(A);let oe;if(ue&&(oe=x&&x.onVnodeBeforeUnmount)&&vt(oe,k,A),O&6)Q(A.component,u,T);else{if(O&128){A.suspense.unmount(u,T);return}Y&&Yt(A,null,k,"beforeUnmount"),O&64?A.type.remove(A,k,u,re,T):D&&!D.hasOnce&&(_!==Be||z>0&&z&64)?me(D,k,u,!1,!0):(_===Be&&z&384||!R&&O&16)&&me(F,k,u),T&&le(A)}(ue&&(oe=x&&x.onVnodeUnmounted)||Y)&&Ze(()=>{oe&&vt(oe,k,A),Y&&Yt(A,null,k,"unmounted")},u)},le=A=>{const{type:k,el:u,anchor:T,transition:R}=A;if(k===Be){ne(u,T);return}if(k===jr){E(A);return}const _=()=>{i(u),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(A.shapeFlag&1&&R&&!R.persisted){const{leave:x,delayLeave:P}=R,F=()=>x(u,_);P?P(A.el,_,F):F()}else _()},ne=(A,k)=>{let u;for(;A!==k;)u=g(A),i(A),A=u;i(k)},Q=(A,k,u)=>{const{bum:T,scope:R,job:_,subTree:x,um:P,m:F,a:D}=A;vo(F),vo(D),T&&Ai(T),R.stop(),_&&(_.flags|=8,L(x,A,k,u)),P&&Ze(P,k),Ze(()=>{A.isUnmounted=!0},k)},me=(A,k,u,T=!1,R=!1,_=0)=>{for(let x=_;x<A.length;x++)L(A[x],k,u,T,R)},H=A=>{if(A.shapeFlag&6)return H(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const k=g(A.anchor||A.el),u=k&&k[sl];return u?g(u):k};let J=!1;const Z=(A,k,u)=>{let T;A==null?k._vnode&&(L(k._vnode,null,null,!0),T=k._vnode.component):d(k._vnode||null,A,k,null,null,null,u),k._vnode=A,J||(J=!0,eo(T),el(),J=!1)},re={p:d,um:L,m:$,r:le,mt:y,mc:G,pc:ie,pbc:W,n:H,o:e};return{render:Z,hydrate:void 0,createApp:Sf(Z)}}function Di({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Qt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function jf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ls(e,t,n=!1){const r=e.children,i=t.children;if(de(r)&&de(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=kt(i[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Ls(a,o)),o.type===pi&&(o.patchFlag===-1&&(o=i[s]=kt(o)),o.el=a.el),o.type===He&&!o.el&&(o.el=a.el)}}function $f(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function Dl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Dl(t)}function vo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Fl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Fl(t.subTree):null}const Nl=e=>e.__isSuspense;function Uf(e,t){t&&t.pendingBranch?de(e)?t.effects.push(...e):t.effects.push(e):Xu(e)}const Be=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),jr=Symbol.for("v-stc"),rr=[];let rt=null;function at(e=!1){rr.push(rt=e?null:[])}function Hf(){rr.pop(),rt=rr[rr.length-1]||null}let fr=1;function Xr(e,t=!1){fr+=e,e<0&&rt&&t&&(rt.hasOnce=!0)}function Bl(e){return e.dynamicChildren=fr>0?rt||_n:null,Hf(),fr>0&&rt&&rt.push(e),e}function en(e,t,n,r,i,s){return Bl(pe(e,t,n,r,i,s,!0))}function dr(e,t,n,r,i){return Bl(Re(e,t,n,r,i,!0))}function Rn(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Ll=({key:e})=>e??null,$r=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Le(e)||he(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,i=null,s=e===Be?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ll(t),ref:t&&$r(t),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return o?(zs(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ke(n)?8:16),fr>0&&!a&&rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rt.push(l),l}const Re=Wf;function Wf(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===vl)&&(e=He),Rn(e)){const o=Kt(e,t,!0);return n&&zs(o,n),fr>0&&!s&&rt&&(o.shapeFlag&6?rt[rt.indexOf(e)]=o:rt.push(o)),o.patchFlag=-2,o}if(nd(e)&&(e=e.__vccOpts),t){t=qf(t);let{class:o,style:l}=t;o&&!ke(o)&&(t.class=or(o)),be(l)&&(ui(l)&&!de(l)&&(l=Fe({},l)),t.style=xs(l))}const a=ke(e)?1:Nl(e)?128:ol(e)?64:be(e)?4:he(e)?2:0;return pe(e,t,n,r,i,a,s,!0)}function qf(e){return e?ui(e)||El(e)?Fe({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,c=t?Gf(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ll(c),ref:t&&t.ref?n&&s?de(s)?s.concat($r(t)):[s,$r(t)]:$r(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&dn(f,l.clone(f)),f}function Jr(e=" ",t=0){return Re(pi,null,e,t)}function xv(e,t){const n=Re(jr,null,e);return n.staticCount=t,n}function Vf(e="",t=!1){return t?(at(),dr(He,null,e)):Re(He,null,e)}function xt(e){return e==null||typeof e=="boolean"?Re(He):de(e)?Re(Be,null,e.slice()):Rn(e)?kt(e):Re(pi,null,String(e))}function kt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function zs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(de(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),zs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!El(t)?t._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),r&64?(n=16,t=[Jr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=or([t.class,r.class]));else if(i==="style")t.style=xs([t.style,r.style]);else if(ii(i)){const s=t[i],a=r[i];a&&s!==a&&!(de(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function vt(e,t,n,r=null){gt(e,t,7,[n,r])}const Kf=xl();let Zf=0;function Xf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Kf,s={uid:Zf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kl(r,i),emitsOptions:Cl(r,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Pf.bind(null,s),e.ce&&e.ce(s),s}let We=null;const Ms=()=>We||Ve;let Yr,ns;{const e=li(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Yr=t("__VUE_INSTANCE_SETTERS__",n=>We=n),ns=t("__VUE_SSR_SETTERS__",n=>kn=n)}const Sr=e=>{const t=We;return Yr(e),e.scope.on(),()=>{e.scope.off(),Yr(t)}},bo=()=>{We&&We.scope.off(),Yr(null)};function zl(e){return e.vnode.shapeFlag&4}let kn=!1;function Jf(e,t=!1,n=!1){t&&ns(t);const{props:r,children:i}=e.vnode,s=zl(e);Of(e,r,s,t),Bf(e,i,n||t);const a=s?Yf(e,t):void 0;return t&&ns(!1),a}function Yf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vf);const{setup:r}=n;if(r){Ot();const i=e.setupContext=r.length>1?ed(e):null,s=Sr(e),a=_r(r,e,0,[e.props,i]),o=Pa(a);if(Dt(),s(),(o||e.sp)&&!Sn(e)&&Ds(e),o){if(a.then(bo,bo),t)return a.then(l=>{yo(e,l)}).catch(l=>{wr(l,e,0)});e.asyncDep=a}else yo(e,a)}else Ml(e)}function yo(e,t,n){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=Xa(t)),Ml(e)}function Ml(e,t,n){const r=e.type;e.render||(e.render=r.render||Ct);{const i=Sr(e);Ot();try{bf(e)}finally{Dt(),i()}}}const Qf={get(e,t){return Xe(e,"get",""),e[t]}};function ed(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Qf),slots:e.slots,emit:e.emit,expose:t}}function gi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xa(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nr)return nr[n](e)},has(t,n){return n in t||n in nr}})):e.proxy}function td(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function nd(e){return he(e)&&"__vccOpts"in e}const ge=(e,t)=>qu(e,t,kn);function te(e,t,n){try{Xr(-1);const r=arguments.length;return r===2?be(t)&&!de(t)?Rn(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rn(n)&&(n=[n]),Re(e,t,n))}finally{Xr(1)}}const rd="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const _o=typeof window<"u"&&window.trustedTypes;if(_o)try{rs=_o.createPolicy("vue",{createHTML:e=>e})}catch{}const jl=rs?e=>rs.createHTML(e):e=>e,id="http://www.w3.org/2000/svg",sd="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,wo=Rt&&Rt.createElement("template"),od={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Rt.createElementNS(id,e):t==="mathml"?Rt.createElementNS(sd,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{wo.innerHTML=jl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=wo.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt="transition",Hn="animation",Tn=Symbol("_vtc"),$l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ul=Fe({},cl,$l),ad=e=>(e.displayName="Transition",e.props=Ul,e),Hl=ad((e,{slots:t})=>te(sf,Wl(e),t)),tn=(e,t=[])=>{de(e)?e.forEach(n=>n(...t)):e&&e(...t)},xo=e=>e?de(e)?e.some(t=>t.length>1):e.length>1:!1;function Wl(e){const t={};for(const S in e)S in $l||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:f=o,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=ld(i),d=m&&m[0],b=m&&m[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:C,onLeave:E,onLeaveCancelled:I,onBeforeAppear:M=v,onAppear:B=w,onAppearCancelled:G=C}=t,N=(S,j,y,q)=>{S._enterCancelled=q,jt(S,j?f:o),jt(S,j?c:a),y&&y()},W=(S,j)=>{S._isLeaving=!1,jt(S,h),jt(S,p),jt(S,g),j&&j()},ee=S=>(j,y)=>{const q=S?B:w,se=()=>N(j,S,y);tn(q,[j,se]),Co(()=>{jt(j,S?l:s),yt(j,S?f:o),xo(q)||So(j,r,d,se)})};return Fe(t,{onBeforeEnter(S){tn(v,[S]),yt(S,s),yt(S,a)},onBeforeAppear(S){tn(M,[S]),yt(S,l),yt(S,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(S,j){S._isLeaving=!0;const y=()=>W(S,j);yt(S,h),S._enterCancelled?(yt(S,g),is(S)):(is(S),yt(S,g)),Co(()=>{S._isLeaving&&(jt(S,h),yt(S,p),xo(E)||So(S,r,b,y))}),tn(E,[S,y])},onEnterCancelled(S){N(S,!1,void 0,!0),tn(C,[S])},onAppearCancelled(S){N(S,!0,void 0,!0),tn(G,[S])},onLeaveCancelled(S){W(S),tn(I,[S])}})}function ld(e){if(e==null)return null;if(be(e))return[Fi(e.enter),Fi(e.leave)];{const t=Fi(e);return[t,t]}}function Fi(e){return uu(e)}function yt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Tn]||(e[Tn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Tn];n&&(n.delete(t),n.size||(e[Tn]=void 0))}function Co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cd=0;function So(e,t,n,r){const i=e._endId=++cd,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=ql(e,t);if(!a)return r();const c=a+"end";let f=0;const h=()=>{e.removeEventListener(c,g),s()},g=p=>{p.target===e&&++f>=l&&h()};setTimeout(()=>{f<l&&h()},o+1),e.addEventListener(c,g)}function ql(e,t){const n=window.getComputedStyle(e),r=m=>(n[m]||"").split(", "),i=r(`${Lt}Delay`),s=r(`${Lt}Duration`),a=Ao(i,s),o=r(`${Hn}Delay`),l=r(`${Hn}Duration`),c=Ao(o,l);let f=null,h=0,g=0;t===Lt?a>0&&(f=Lt,h=a,g=s.length):t===Hn?c>0&&(f=Hn,h=c,g=l.length):(h=Math.max(a,c),f=h>0?a>c?Lt:Hn:null,g=f?f===Lt?s.length:l.length:0);const p=f===Lt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Lt}Property`).toString());return{type:f,timeout:h,propCount:g,hasTransform:p}}function Ao(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Po(n)+Po(e[r])))}function Po(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function is(e){return(e?e.ownerDocument:document).body.offsetHeight}function ud(e,t,n){const r=e[Tn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qr=Symbol("_vod"),Vl=Symbol("_vsh"),fd={name:"show",beforeMount(e,{value:t},{transition:n}){e[Qr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Wn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Wn(e,!0),r.enter(e)):r.leave(e,()=>{Wn(e,!1)}):Wn(e,t))},beforeUnmount(e,{value:t}){Wn(e,t)}};function Wn(e,t){e.style.display=t?e[Qr]:"none",e[Vl]=!t}const dd=Symbol(""),hd=/(?:^|;)\s*display\s*:/;function pd(e,t,n){const r=e.style,i=ke(n);let s=!1;if(n&&!i){if(t)if(ke(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ur(r,o,"")}else for(const a in t)n[a]==null&&Ur(r,a,"");for(const a in n)a==="display"&&(s=!0),Ur(r,a,n[a])}else if(i){if(t!==n){const a=r[dd];a&&(n+=";"+a),r.cssText=n,s=hd.test(n)}}else t&&e.removeAttribute("style");Qr in e&&(e[Qr]=s?r.display:"",e[Vl]&&(r.display="none"))}const Eo=/\s*!important$/;function Ur(e,t,n){if(de(n))n.forEach(r=>Ur(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gd(e,t);Eo.test(n)?e.setProperty(gn(r),n.replace(Eo,""),"important"):e[r]=n}}const Ro=["Webkit","Moz","ms"],Ni={};function gd(e,t){const n=Ni[t];if(n)return n;let r=lt(t);if(r!=="filter"&&r in e)return Ni[t]=r;r=ai(r);for(let i=0;i<Ro.length;i++){const s=Ro[i]+r;if(s in e)return Ni[t]=s}return t}const ko="http://www.w3.org/1999/xlink";function To(e,t,n,r,i,s=mu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ko,t.slice(6,t.length)):e.setAttributeNS(ko,t,n):n==null||s&&!Ta(n)?e.removeAttribute(t):e.setAttribute(t,s?"":ht(n)?String(n):n)}function Io(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ta(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function md(e,t,n,r){e.addEventListener(t,n,r)}function vd(e,t,n,r){e.removeEventListener(t,n,r)}const Oo=Symbol("_vei");function bd(e,t,n,r,i=null){const s=e[Oo]||(e[Oo]={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=yd(t);if(r){const c=s[t]=xd(r,i);md(e,o,c,l)}else a&&(vd(e,o,a,l),s[t]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function yd(e){let t;if(Do.test(e)){t={};let r;for(;r=e.match(Do);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gn(e.slice(2)),t]}let Bi=0;const _d=Promise.resolve(),wd=()=>Bi||(_d.then(()=>Bi=0),Bi=Date.now());function xd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gt(Cd(r,n.value),t,5,[r])};return n.value=e,n.attached=wd(),n}function Cd(e,t){if(de(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Fo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Sd=(e,t,n,r,i,s)=>{const a=i==="svg";t==="class"?ud(e,r,a):t==="style"?pd(e,n,r):ii(t)?_s(t)||bd(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ad(e,t,r,a))?(Io(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&To(e,t,r,a,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ke(r))?Io(e,lt(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),To(e,t,r,a))};function Ad(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Fo(t)&&he(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Fo(t)&&ke(n)?!1:t in e}const Gl=new WeakMap,Kl=new WeakMap,ei=Symbol("_moveCb"),No=Symbol("_enterCb"),Pd=e=>(delete e.props.mode,e),Ed=Pd({name:"TransitionGroup",props:Fe({},Ul,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Ms(),r=ll();let i,s;return pl(()=>{if(!i.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Od(i[0].el,n.vnode.el,a)){i=[];return}i.forEach(kd),i.forEach(Td);const o=i.filter(Id);is(n.vnode.el),o.forEach(l=>{const c=l.el,f=c.style;yt(c,a),f.transform=f.webkitTransform=f.transitionDuration="";const h=c[ei]=g=>{g&&g.target!==c||(!g||g.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",h),c[ei]=null,jt(c,a))};c.addEventListener("transitionend",h)}),i=[]}),()=>{const a=ve(e),o=Wl(a);let l=a.tag||Be;if(i=[],s)for(let c=0;c<s.length;c++){const f=s[c];f.el&&f.el instanceof Element&&(i.push(f),dn(f,ur(f,o,r,n)),Gl.set(f,Zl(f.el)))}s=t.default?Os(t.default()):[];for(let c=0;c<s.length;c++){const f=s[c];f.key!=null&&dn(f,ur(f,o,r,n))}return Re(l,null,s)}}}),Rd=Ed;function kd(e){const t=e.el;t[ei]&&t[ei](),t[No]&&t[No]()}function Td(e){Kl.set(e,Zl(e.el))}function Id(e){const t=Gl.get(e),n=Kl.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const s=e.el,a=s.style,o=s.getBoundingClientRect();let l=1,c=1;return s.offsetWidth&&(l=o.width/s.offsetWidth),s.offsetHeight&&(c=o.height/s.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),a.transform=a.webkitTransform=`translate(${r/l}px,${i/c}px)`,a.transitionDuration="0s",e}}function Zl(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Od(e,t,n){const r=e.cloneNode(),i=e[Tn];i&&i.forEach(o=>{o.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:a}=ql(r);return s.removeChild(r),a}const Dd=["ctrl","shift","alt","meta"],Fd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Dd.some(n=>e[`${n}Key`]&&!t.includes(n))},Bo=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((i,...s)=>{for(let a=0;a<t.length;a++){const o=Fd[t[a]];if(o&&o(i,t))return}return e(i,...s)}))},Nd=Fe({patchProp:Sd},od);let Lo;function Bd(){return Lo||(Lo=zf(Nd))}const Ld=((...e)=>{const t=Bd().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Md(r);if(!i)return;const s=t._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,zd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function zd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Md(e){return ke(e)?document.querySelector(e):e}function jd(e){let t=".",n="__",r="--",i;if(e){let m=e.blockPrefix;m&&(t=m),m=e.elementPrefix,m&&(n=m),m=e.modifierPrefix,m&&(r=m)}const s={install(m){i=m.c;const d=m.context;d.bem={},d.bem.b=null,d.bem.els=null}};function a(m){let d,b;return{before(v){d=v.bem.b,b=v.bem.els,v.bem.els=null},after(v){v.bem.b=d,v.bem.els=b},$({context:v,props:w}){return m=typeof m=="string"?m:m({context:v,props:w}),v.bem.b=m,`${(w==null?void 0:w.bPrefix)||t}${v.bem.b}`}}}function o(m){let d;return{before(b){d=b.bem.els},after(b){b.bem.els=d},$({context:b,props:v}){return m=typeof m=="string"?m:m({context:b,props:v}),b.bem.els=m.split(",").map(w=>w.trim()),b.bem.els.map(w=>`${(v==null?void 0:v.bPrefix)||t}${b.bem.b}${n}${w}`).join(", ")}}}function l(m){return{$({context:d,props:b}){m=typeof m=="string"?m:m({context:d,props:b});const v=m.split(",").map(E=>E.trim());function w(E){return v.map(I=>`&${(b==null?void 0:b.bPrefix)||t}${d.bem.b}${E!==void 0?`${n}${E}`:""}${r}${I}`).join(", ")}const C=d.bem.els;return C!==null?w(C[0]):w()}}}function c(m){return{$({context:d,props:b}){m=typeof m=="string"?m:m({context:d,props:b});const v=d.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||t}${d.bem.b}${v!==null&&v.length>0?`${n}${v[0]}`:""}${r}${m})`}}}return Object.assign(s,{cB:((...m)=>i(a(m[0]),m[1],m[2])),cE:((...m)=>i(o(m[0]),m[1],m[2])),cM:((...m)=>i(l(m[0]),m[1],m[2])),cNotM:((...m)=>i(c(m[0]),m[1],m[2]))}),s}function $d(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const Xl=/\s*,(?![^(]*\))\s*/g,Ud=/\s+/g;function Hd(e,t){const n=[];return t.split(Xl).forEach(r=>{let i=$d(r);if(i){if(i===1){e.forEach(a=>{n.push(r.replace("&",a))});return}}else{e.forEach(a=>{n.push((a&&a+" ")+r)});return}let s=[r];for(;i--;){const a=[];s.forEach(o=>{e.forEach(l=>{a.push(o.replace("&",l))})}),s=a}s.forEach(a=>n.push(a))}),n}function Wd(e,t){const n=[];return t.split(Xl).forEach(r=>{e.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function qd(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=Hd(t,n):t=Wd(t,n))}),t.join(", ").replace(Ud," ")}function zo(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function mi(e,t){return(t??document.head).querySelector(`style[cssr-id="${e}"]`)}function Vd(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Nr(e){return e?/^\s*@(s|m)/.test(e):!1}const Gd=/[A-Z]/g;function Jl(e){return e.replace(Gd,t=>"-"+t.toLowerCase())}function Kd(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${Jl(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Zd(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function Mo(e,t,n,r){if(!t)return"";const i=Zd(t,n,r);if(!i)return"";if(typeof i=="string")return`${e} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return s.forEach(o=>{const l=i[o];if(o==="raw"){a.push(`
`+l+`
`);return}o=Jl(o),l!=null&&a.push(`  ${o}${Kd(l)}`)}),e&&a.push("}"),a.join(`
`)}function ss(e,t,n){e&&e.forEach(r=>{if(Array.isArray(r))ss(r,t,n);else if(typeof r=="function"){const i=r(t);Array.isArray(i)?ss(i,t,n):i&&n(i)}else r&&n(r)})}function Yl(e,t,n,r,i){const s=e.$;let a="";if(!s||typeof s=="string")Nr(s)?a=s:t.push(s);else if(typeof s=="function"){const c=s({context:r.context,props:i});Nr(c)?a=c:t.push(c)}else if(s.before&&s.before(r.context),!s.$||typeof s.$=="string")Nr(s.$)?a=s.$:t.push(s.$);else if(s.$){const c=s.$({context:r.context,props:i});Nr(c)?a=c:t.push(c)}const o=qd(t),l=Mo(o,e.props,r,i);a?n.push(`${a} {`):l.length&&n.push(l),e.children&&ss(e.children,{context:r.context,props:i},c=>{if(typeof c=="string"){const f=Mo(o,{raw:c},r,i);n.push(f)}else Yl(c,t,n,r,i)}),t.pop(),a&&n.push("}"),s&&s.after&&s.after(r.context)}function Xd(e,t,n){const r=[];return Yl(e,[],r,t,n),r.join(`

`)}function hr(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Jd(e,t,n,r){const{els:i}=t;if(n===void 0)i.forEach(zo),t.els=[];else{const s=mi(n,r);s&&i.includes(s)&&(zo(s),t.els=i.filter(a=>a!==s))}}function jo(e,t){e.push(t)}function Yd(e,t,n,r,i,s,a,o,l){let c;if(n===void 0&&(c=t.render(r),n=hr(c)),l){l.adapter(n,c??t.render(r));return}o===void 0&&(o=document.head);const f=mi(n,o);if(f!==null&&!s)return f;const h=f??Vd(n);if(c===void 0&&(c=t.render(r)),h.textContent=c,f!==null)return f;if(a){const g=o.querySelector(`meta[name="${a}"]`);if(g)return o.insertBefore(h,g),jo(t.els,h),h}return i?o.insertBefore(h,o.querySelector("style, link")):o.appendChild(h),jo(t.els,h),h}function Qd(e){return Xd(this,this.instance,e)}function eh(e={}){const{id:t,ssr:n,props:r,head:i=!1,force:s=!1,anchorMetaName:a,parent:o}=e;return Yd(this.instance,this,t,r,i,s,a,o,n)}function th(e={}){const{id:t,parent:n}=e;Jd(this.instance,this,t,n)}const Br=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:Qd,mount:eh,unmount:th}},nh=function(e,t,n,r){return Array.isArray(t)?Br(e,{$:null},null,t):Array.isArray(n)?Br(e,t,null,n):Array.isArray(r)?Br(e,t,n,r):Br(e,t,n,null)};function rh(e={}){const t={c:((...n)=>nh(t,...n)),use:(n,...r)=>n.install(t,...r),find:mi,context:{},config:e};return t}function ih(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return mi(e)!==null}const sh="n",oh=`.${sh}-`,ah="__",lh="--",Ql=rh(),ec=jd({blockPrefix:oh,elementPrefix:ah,modifierPrefix:lh});Ql.use(ec);const{c:we,find:Cv}=Ql,{cB:Ue,cE:Ee,cM:je,cNotM:tc}=ec,Sv=(...e)=>we(">",[Ue(...e)]);function zt(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}function $o(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}const Uo={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function ch(e,t,n){t/=100,n/=100;let r=(i,s=(i+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function uh(e,t,n){t/=100,n/=100;let r=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0)*255,i(8)*255,i(4)*255]}const St="^\\s*",At="\\s*$",Zt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",it="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",sn="([0-9A-Fa-f])",on="([0-9A-Fa-f]{2})",nc=new RegExp(`${St}hsl\\s*\\(${it},${Zt},${Zt}\\)${At}`),rc=new RegExp(`${St}hsv\\s*\\(${it},${Zt},${Zt}\\)${At}`),ic=new RegExp(`${St}hsla\\s*\\(${it},${Zt},${Zt},${it}\\)${At}`),sc=new RegExp(`${St}hsva\\s*\\(${it},${Zt},${Zt},${it}\\)${At}`),fh=new RegExp(`${St}rgb\\s*\\(${it},${it},${it}\\)${At}`),dh=new RegExp(`${St}rgba\\s*\\(${it},${it},${it},${it}\\)${At}`),hh=new RegExp(`${St}#${sn}${sn}${sn}${At}`),ph=new RegExp(`${St}#${on}${on}${on}${At}`),gh=new RegExp(`${St}#${sn}${sn}${sn}${sn}${At}`),mh=new RegExp(`${St}#${on}${on}${on}${on}${At}`);function tt(e){return parseInt(e,16)}function vh(e){try{let t;if(t=ic.exec(e))return[ti(t[1]),Wt(t[5]),Wt(t[9]),fn(t[13])];if(t=nc.exec(e))return[ti(t[1]),Wt(t[5]),Wt(t[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(t){throw t}}function bh(e){try{let t;if(t=sc.exec(e))return[ti(t[1]),Wt(t[5]),Wt(t[9]),fn(t[13])];if(t=rc.exec(e))return[ti(t[1]),Wt(t[5]),Wt(t[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(t){throw t}}function hn(e){try{let t;if(t=ph.exec(e))return[tt(t[1]),tt(t[2]),tt(t[3]),1];if(t=fh.exec(e))return[Je(t[1]),Je(t[5]),Je(t[9]),1];if(t=dh.exec(e))return[Je(t[1]),Je(t[5]),Je(t[9]),fn(t[13])];if(t=hh.exec(e))return[tt(t[1]+t[1]),tt(t[2]+t[2]),tt(t[3]+t[3]),1];if(t=mh.exec(e))return[tt(t[1]),tt(t[2]),tt(t[3]),fn(tt(t[4])/255)];if(t=gh.exec(e))return[tt(t[1]+t[1]),tt(t[2]+t[2]),tt(t[3]+t[3]),fn(tt(t[4]+t[4])/255)];if(e in Uo)return hn(Uo[e]);if(nc.test(e)||ic.test(e)){const[n,r,i,s]=vh(e);return[...uh(n,r,i),s]}else if(rc.test(e)||sc.test(e)){const[n,r,i,s]=bh(e);return[...ch(n,r,i),s]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function yh(e){return e>1?1:e<0?0:e}function os(e,t,n,r){return`rgba(${Je(e)}, ${Je(t)}, ${Je(n)}, ${yh(r)})`}function Li(e,t,n,r,i){return Je((e*t*(1-r)+n*r)/i)}function _h(e,t){Array.isArray(e)||(e=hn(e)),Array.isArray(t)||(t=hn(t));const n=e[3],r=t[3],i=fn(n+r-n*r);return os(Li(e[0],n,t[0],r,i),Li(e[1],n,t[1],r,i),Li(e[2],n,t[2],r,i),i)}function Av(e,t){const[n,r,i,s=1]=Array.isArray(e)?e:hn(e);return typeof t.alpha=="number"?os(n,r,i,t.alpha):os(n,r,i,s)}function Lr(e,t){const[n,r,i,s=1]=Array.isArray(e)?e:hn(e),{lightness:a=1,alpha:o=1}=t;return wh([n*a,r*a,i*a,s*o])}function fn(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function ti(e){const t=Math.round(Number(e));return t>=360||t<0?0:t}function Je(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function Wt(e){const t=Math.round(Number(e));return t>100?100:t<0?0:t}function wh(e){const[t,n,r]=e;return 3 in e?`rgba(${Je(t)}, ${Je(n)}, ${Je(r)}, ${fn(e[3])})`:`rgba(${Je(t)}, ${Je(n)}, ${Je(r)}, 1)`}function oc(e=8){return Math.random().toString(16).slice(2,2+e)}function xh(e){const t=qe(!!e.value);if(t.value)return Pn(t);const n=un(e,r=>{r&&(t.value=!0,n())});return Pn(t)}function as(e){const t=ge(e),n=qe(t.value);return un(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function Ch(e,t){return un(e,n=>{n!==void 0&&(t.value=n)}),ge(()=>e.value===void 0?t.value:e.value)}function Sh(){const e=qe(!1);return Cr(()=>{e.value=!0}),Pn(e)}function Pv(e){return e}const Ah="@css-render/vue3-ssr";function Ph(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function Eh(e,t,n){const{styles:r,ids:i}=n;i.has(e)||r!==null&&(i.add(e),r.push(Ph(e,t)))}const Rh=typeof document<"u";function vi(){if(Rh)return;const e=ze(Ah,null);if(e!==null)return{adapter:(t,n)=>Eh(t,n,e),context:e}}function kh(e,t){console.error(`[naive/${e}]: ${t}`)}function ac(e,t){throw new Error(`[naive/${e}]: ${t}`)}function Zn(e,...t){if(Array.isArray(e))e.forEach(n=>Zn(n,...t));else return e(...t)}function Th(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(s=>{t.includes(s)||(r[s]=e[s])}),Object.assign(r,n)}function Ih(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?Jr(e):typeof e=="number"?Jr(String(e)):null}function Fn(e){return e.some(t=>Rn(t)?!(t.type===He||t.type===Be&&!Fn(t.children)):!0)?e:null}function Ev(e,t){return e&&Fn(e())||t()}function Ho(e,t,n){return e&&Fn(e(t))||n(t)}function Rv(e,t){const n=e&&Fn(e());return t(n||null)}function Oh(e,t,n){const r=e&&Fn(e(t));return n(r||null)}function kv(e){return!(e&&Fn(e()))}const Xt="n-config-provider",ls="n";function bi(e={},t={defaultBordered:!0}){const n=ze(Xt,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:ge(()=>{var r,i;const{bordered:s}=e;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:n?n.mergedClsPrefixRef:Ka(ls),namespaceRef:ge(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function lc(e,t,n,r){n||ac("useThemeClass","cssVarsRef is not passed");const i=ze(Xt,null),s=i==null?void 0:i.mergedThemeHashRef,a=i==null?void 0:i.styleMountTarget,o=qe(""),l=vi();let c;const f=`__${e}`,h=()=>{let g=f;const p=t?t.value:void 0,m=s==null?void 0:s.value;m&&(g+=`-${m}`),p&&(g+=`-${p}`);const{themeOverrides:d,builtinThemeOverrides:b}=r;d&&(g+=`-${hr(JSON.stringify(d))}`),b&&(g+=`-${hr(JSON.stringify(b))}`),o.value=g,c=()=>{const v=n.value;let w="";for(const C in v)w+=`${C}: ${v[C]};`;we(`.${g}`,w).mount({id:g,ssr:l,parent:a}),c=void 0}};return rl(()=>{h()}),{themeClass:o,onRender:()=>{c==null||c()}}}var cc=typeof global=="object"&&global&&global.Object===Object&&global,Dh=typeof self=="object"&&self&&self.Object===Object&&self,Nn=cc||Dh||Function("return this")(),In=Nn.Symbol,uc=Object.prototype,Fh=uc.hasOwnProperty,Nh=uc.toString,qn=In?In.toStringTag:void 0;function Bh(e){var t=Fh.call(e,qn),n=e[qn];try{e[qn]=void 0;var r=!0}catch{}var i=Nh.call(e);return r&&(t?e[qn]=n:delete e[qn]),i}var Lh=Object.prototype,zh=Lh.toString;function Mh(e){return zh.call(e)}var jh="[object Null]",$h="[object Undefined]",Wo=In?In.toStringTag:void 0;function Ar(e){return e==null?e===void 0?$h:jh:Wo&&Wo in Object(e)?Bh(e):Mh(e)}function Bn(e){return e!=null&&typeof e=="object"}var Uh="[object Symbol]";function Hh(e){return typeof e=="symbol"||Bn(e)&&Ar(e)==Uh}function Wh(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ni=Array.isArray,qo=In?In.prototype:void 0,Vo=qo?qo.toString:void 0;function fc(e){if(typeof e=="string")return e;if(ni(e))return Wh(e,fc)+"";if(Hh(e))return Vo?Vo.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function mn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dc(e){return e}var qh="[object AsyncFunction]",Vh="[object Function]",Gh="[object GeneratorFunction]",Kh="[object Proxy]";function js(e){if(!mn(e))return!1;var t=Ar(e);return t==Vh||t==Gh||t==qh||t==Kh}var zi=Nn["__core-js_shared__"],Go=(function(){var e=/[^.]+$/.exec(zi&&zi.keys&&zi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function Zh(e){return!!Go&&Go in e}var Xh=Function.prototype,Jh=Xh.toString;function Yh(e){if(e!=null){try{return Jh.call(e)}catch{}try{return e+""}catch{}}return""}var Qh=/[\\^$.*+?()[\]{}|]/g,ep=/^\[object .+?Constructor\]$/,tp=Function.prototype,np=Object.prototype,rp=tp.toString,ip=np.hasOwnProperty,sp=RegExp("^"+rp.call(ip).replace(Qh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function op(e){if(!mn(e)||Zh(e))return!1;var t=js(e)?sp:ep;return t.test(Yh(e))}function ap(e,t){return e==null?void 0:e[t]}function $s(e,t){var n=ap(e,t);return op(n)?n:void 0}var Ko=Object.create,lp=(function(){function e(){}return function(t){if(!mn(t))return{};if(Ko)return Ko(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})();function cp(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function up(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var fp=800,dp=16,hp=Date.now;function pp(e){var t=0,n=0;return function(){var r=hp(),i=dp-(r-n);if(n=r,i>0){if(++t>=fp)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function gp(e){return function(){return e}}var ri=(function(){try{var e=$s(Object,"defineProperty");return e({},"",{}),e}catch{}})(),mp=ri?function(e,t){return ri(e,"toString",{configurable:!0,enumerable:!1,value:gp(t),writable:!0})}:dc,vp=pp(mp),bp=9007199254740991,yp=/^(?:0|[1-9]\d*)$/;function hc(e,t){var n=typeof e;return t=t??bp,!!t&&(n=="number"||n!="symbol"&&yp.test(e))&&e>-1&&e%1==0&&e<t}function Us(e,t,n){t=="__proto__"&&ri?ri(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function yi(e,t){return e===t||e!==e&&t!==t}var _p=Object.prototype,wp=_p.hasOwnProperty;function xp(e,t,n){var r=e[t];(!(wp.call(e,t)&&yi(r,n))||n===void 0&&!(t in e))&&Us(e,t,n)}function Cp(e,t,n,r){var i=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var o=t[s],l=void 0;l===void 0&&(l=e[o]),i?Us(n,o,l):xp(n,o,l)}return n}var Zo=Math.max;function Sp(e,t,n){return t=Zo(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,s=Zo(r.length-t,0),a=Array(s);++i<s;)a[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=n(a),cp(e,this,o)}}function Ap(e,t){return vp(Sp(e,t,dc),e+"")}var Pp=9007199254740991;function pc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Pp}function Hs(e){return e!=null&&pc(e.length)&&!js(e)}function Ep(e,t,n){if(!mn(n))return!1;var r=typeof t;return(r=="number"?Hs(n)&&hc(t,n.length):r=="string"&&t in n)?yi(n[t],e):!1}function Rp(e){return Ap(function(t,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(i--,s):void 0,a&&Ep(n[0],n[1],a)&&(s=i<3?void 0:s,i=1),t=Object(t);++r<i;){var o=n[r];o&&e(t,o,r,s)}return t})}var kp=Object.prototype;function gc(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||kp;return e===n}function Tp(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Ip="[object Arguments]";function Xo(e){return Bn(e)&&Ar(e)==Ip}var mc=Object.prototype,Op=mc.hasOwnProperty,Dp=mc.propertyIsEnumerable,cs=Xo((function(){return arguments})())?Xo:function(e){return Bn(e)&&Op.call(e,"callee")&&!Dp.call(e,"callee")};function Fp(){return!1}var vc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Jo=vc&&typeof module=="object"&&module&&!module.nodeType&&module,Np=Jo&&Jo.exports===vc,Yo=Np?Nn.Buffer:void 0,Bp=Yo?Yo.isBuffer:void 0,bc=Bp||Fp,Lp="[object Arguments]",zp="[object Array]",Mp="[object Boolean]",jp="[object Date]",$p="[object Error]",Up="[object Function]",Hp="[object Map]",Wp="[object Number]",qp="[object Object]",Vp="[object RegExp]",Gp="[object Set]",Kp="[object String]",Zp="[object WeakMap]",Xp="[object ArrayBuffer]",Jp="[object DataView]",Yp="[object Float32Array]",Qp="[object Float64Array]",eg="[object Int8Array]",tg="[object Int16Array]",ng="[object Int32Array]",rg="[object Uint8Array]",ig="[object Uint8ClampedArray]",sg="[object Uint16Array]",og="[object Uint32Array]",Pe={};Pe[Yp]=Pe[Qp]=Pe[eg]=Pe[tg]=Pe[ng]=Pe[rg]=Pe[ig]=Pe[sg]=Pe[og]=!0;Pe[Lp]=Pe[zp]=Pe[Xp]=Pe[Mp]=Pe[Jp]=Pe[jp]=Pe[$p]=Pe[Up]=Pe[Hp]=Pe[Wp]=Pe[qp]=Pe[Vp]=Pe[Gp]=Pe[Kp]=Pe[Zp]=!1;function ag(e){return Bn(e)&&pc(e.length)&&!!Pe[Ar(e)]}function lg(e){return function(t){return e(t)}}var yc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ir=yc&&typeof module=="object"&&module&&!module.nodeType&&module,cg=ir&&ir.exports===yc,Mi=cg&&cc.process,Qo=(function(){try{var e=ir&&ir.require&&ir.require("util").types;return e||Mi&&Mi.binding&&Mi.binding("util")}catch{}})(),ea=Qo&&Qo.isTypedArray,_c=ea?lg(ea):ag,ug=Object.prototype,fg=ug.hasOwnProperty;function dg(e,t){var n=ni(e),r=!n&&cs(e),i=!n&&!r&&bc(e),s=!n&&!r&&!i&&_c(e),a=n||r||i||s,o=a?Tp(e.length,String):[],l=o.length;for(var c in e)(t||fg.call(e,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||hc(c,l)))&&o.push(c);return o}function hg(e,t){return function(n){return e(t(n))}}function pg(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var gg=Object.prototype,mg=gg.hasOwnProperty;function vg(e){if(!mn(e))return pg(e);var t=gc(e),n=[];for(var r in e)r=="constructor"&&(t||!mg.call(e,r))||n.push(r);return n}function wc(e){return Hs(e)?dg(e,!0):vg(e)}var pr=$s(Object,"create");function bg(){this.__data__=pr?pr(null):{},this.size=0}function yg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _g="__lodash_hash_undefined__",wg=Object.prototype,xg=wg.hasOwnProperty;function Cg(e){var t=this.__data__;if(pr){var n=t[e];return n===_g?void 0:n}return xg.call(t,e)?t[e]:void 0}var Sg=Object.prototype,Ag=Sg.hasOwnProperty;function Pg(e){var t=this.__data__;return pr?t[e]!==void 0:Ag.call(t,e)}var Eg="__lodash_hash_undefined__";function Rg(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pr&&t===void 0?Eg:t,this}function pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pn.prototype.clear=bg;pn.prototype.delete=yg;pn.prototype.get=Cg;pn.prototype.has=Pg;pn.prototype.set=Rg;function kg(){this.__data__=[],this.size=0}function _i(e,t){for(var n=e.length;n--;)if(yi(e[n][0],t))return n;return-1}var Tg=Array.prototype,Ig=Tg.splice;function Og(e){var t=this.__data__,n=_i(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Ig.call(t,n,1),--this.size,!0}function Dg(e){var t=this.__data__,n=_i(t,e);return n<0?void 0:t[n][1]}function Fg(e){return _i(this.__data__,e)>-1}function Ng(e,t){var n=this.__data__,r=_i(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Bt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bt.prototype.clear=kg;Bt.prototype.delete=Og;Bt.prototype.get=Dg;Bt.prototype.has=Fg;Bt.prototype.set=Ng;var xc=$s(Nn,"Map");function Bg(){this.size=0,this.__data__={hash:new pn,map:new(xc||Bt),string:new pn}}function Lg(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function wi(e,t){var n=e.__data__;return Lg(t)?n[typeof t=="string"?"string":"hash"]:n.map}function zg(e){var t=wi(this,e).delete(e);return this.size-=t?1:0,t}function Mg(e){return wi(this,e).get(e)}function jg(e){return wi(this,e).has(e)}function $g(e,t){var n=wi(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Ln(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ln.prototype.clear=Bg;Ln.prototype.delete=zg;Ln.prototype.get=Mg;Ln.prototype.has=jg;Ln.prototype.set=$g;function Ug(e){return e==null?"":fc(e)}var Cc=hg(Object.getPrototypeOf,Object),Hg="[object Object]",Wg=Function.prototype,qg=Object.prototype,Sc=Wg.toString,Vg=qg.hasOwnProperty,Gg=Sc.call(Object);function Kg(e){if(!Bn(e)||Ar(e)!=Hg)return!1;var t=Cc(e);if(t===null)return!0;var n=Vg.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Sc.call(n)==Gg}function Zg(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(i);++r<i;)s[r]=e[r+t];return s}function Xg(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Zg(e,t,n)}var Jg="\\ud800-\\udfff",Yg="\\u0300-\\u036f",Qg="\\ufe20-\\ufe2f",em="\\u20d0-\\u20ff",tm=Yg+Qg+em,nm="\\ufe0e\\ufe0f",rm="\\u200d",im=RegExp("["+rm+Jg+tm+nm+"]");function Ac(e){return im.test(e)}function sm(e){return e.split("")}var Pc="\\ud800-\\udfff",om="\\u0300-\\u036f",am="\\ufe20-\\ufe2f",lm="\\u20d0-\\u20ff",cm=om+am+lm,um="\\ufe0e\\ufe0f",fm="["+Pc+"]",us="["+cm+"]",fs="\\ud83c[\\udffb-\\udfff]",dm="(?:"+us+"|"+fs+")",Ec="[^"+Pc+"]",Rc="(?:\\ud83c[\\udde6-\\uddff]){2}",kc="[\\ud800-\\udbff][\\udc00-\\udfff]",hm="\\u200d",Tc=dm+"?",Ic="["+um+"]?",pm="(?:"+hm+"(?:"+[Ec,Rc,kc].join("|")+")"+Ic+Tc+")*",gm=Ic+Tc+pm,mm="(?:"+[Ec+us+"?",us,Rc,kc,fm].join("|")+")",vm=RegExp(fs+"(?="+fs+")|"+mm+gm,"g");function bm(e){return e.match(vm)||[]}function ym(e){return Ac(e)?bm(e):sm(e)}function _m(e){return function(t){t=Ug(t);var n=Ac(t)?ym(t):void 0,r=n?n[0]:t.charAt(0),i=n?Xg(n,1).join(""):t.slice(1);return r[e]()+i}}var wm=_m("toUpperCase");function xm(){this.__data__=new Bt,this.size=0}function Cm(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Sm(e){return this.__data__.get(e)}function Am(e){return this.__data__.has(e)}var Pm=200;function Em(e,t){var n=this.__data__;if(n instanceof Bt){var r=n.__data__;if(!xc||r.length<Pm-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Ln(r)}return n.set(e,t),this.size=n.size,this}function zn(e){var t=this.__data__=new Bt(e);this.size=t.size}zn.prototype.clear=xm;zn.prototype.delete=Cm;zn.prototype.get=Sm;zn.prototype.has=Am;zn.prototype.set=Em;var Oc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ta=Oc&&typeof module=="object"&&module&&!module.nodeType&&module,Rm=ta&&ta.exports===Oc,na=Rm?Nn.Buffer:void 0;na&&na.allocUnsafe;function km(e,t){return e.slice()}var ra=Nn.Uint8Array;function Tm(e){var t=new e.constructor(e.byteLength);return new ra(t).set(new ra(e)),t}function Im(e,t){var n=Tm(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}function Om(e){return typeof e.constructor=="function"&&!gc(e)?lp(Cc(e)):{}}function Dm(e){return function(t,n,r){for(var i=-1,s=Object(t),a=r(t),o=a.length;o--;){var l=a[++i];if(n(s[l],l,s)===!1)break}return t}}var Fm=Dm();function ds(e,t,n){(n!==void 0&&!yi(e[t],n)||n===void 0&&!(t in e))&&Us(e,t,n)}function Nm(e){return Bn(e)&&Hs(e)}function hs(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Bm(e){return Cp(e,wc(e))}function Lm(e,t,n,r,i,s,a){var o=hs(e,n),l=hs(t,n),c=a.get(l);if(c){ds(e,n,c);return}var f=s?s(o,l,n+"",e,t,a):void 0,h=f===void 0;if(h){var g=ni(l),p=!g&&bc(l),m=!g&&!p&&_c(l);f=l,g||p||m?ni(o)?f=o:Nm(o)?f=up(o):p?(h=!1,f=km(l)):m?(h=!1,f=Im(l)):f=[]:Kg(l)||cs(l)?(f=o,cs(o)?f=Bm(o):(!mn(o)||js(o))&&(f=Om(l))):h=!1}h&&(a.set(l,f),i(f,l,r,s,a),a.delete(l)),ds(e,n,f)}function Dc(e,t,n,r,i){e!==t&&Fm(t,function(s,a){if(i||(i=new zn),mn(s))Lm(e,t,a,n,Dc,r,i);else{var o=r?r(hs(e,a),s,a+"",e,t,i):void 0;o===void 0&&(o=s),ds(e,a,o)}},wc)}var Xn=Rp(function(e,t,n){Dc(e,t,n)});const gr="naive-ui-style";function Ws(e,t,n){if(!t)return;const r=vi(),i=ge(()=>{const{value:o}=t;if(!o)return;const l=o[e];if(l)return l}),s=ze(Xt,null),a=()=>{rl(()=>{const{value:o}=n,l=`${o}${e}Rtl`;if(ih(l,r))return;const{value:c}=i;c&&c.style.mount({id:l,head:!0,anchorMetaName:gr,props:{bPrefix:o?`.${o}-`:void 0},ssr:r,parent:s==null?void 0:s.styleMountTarget})})};return r?a():di(a),i}const xi={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:zm,fontFamily:Mm,lineHeight:jm}=xi,Fc=we("body",`
 margin: 0;
 font-size: ${zm};
 font-family: ${Mm};
 line-height: ${jm};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[we("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function qs(e,t,n){if(!t)return;const r=vi(),i=ze(Xt,null),s=()=>{const a=n.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:gr,props:{bPrefix:a?`.${a}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget}),i!=null&&i.preflightStyleDisabled||Fc.mount({id:"n-global",head:!0,anchorMetaName:gr,ssr:r,parent:i==null?void 0:i.styleMountTarget})};r?s():di(s)}function Tv(e){return e}function Pr(e,t,n,r,i,s){const a=vi(),o=ze(Xt,null);if(n){const c=()=>{const f=s==null?void 0:s.value;n.mount({id:f===void 0?t:f+t,head:!0,props:{bPrefix:f?`.${f}-`:void 0},anchorMetaName:gr,ssr:a,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||Fc.mount({id:"n-global",head:!0,anchorMetaName:gr,ssr:a,parent:o==null?void 0:o.styleMountTarget})};a?c():di(c)}return ge(()=>{var c;const{theme:{common:f,self:h,peers:g={}}={},themeOverrides:p={},builtinThemeOverrides:m={}}=i,{common:d,peers:b}=p,{common:v=void 0,[e]:{common:w=void 0,self:C=void 0,peers:E={}}={}}=(o==null?void 0:o.mergedThemeRef.value)||{},{common:I=void 0,[e]:M={}}=(o==null?void 0:o.mergedThemeOverridesRef.value)||{},{common:B,peers:G={}}=M,N=Xn({},f||w||v||r.common,I,B,d),W=Xn((c=h||C||r.self)===null||c===void 0?void 0:c(N),m,M,p);return{common:N,self:W,peers:Xn({},r.peers,E,g),peerOverrides:Xn({},m.peers,G,b)}})}Pr.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const $m=Ue("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[we("svg",`
 height: 1em;
 width: 1em;
 `)]),Vs=Me({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){qs("-base-icon",$m,yr(e,"clsPrefix"))},render(){return te("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Nc=Me({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=Sh();return()=>te(Hl,{name:"icon-switch-transition",appear:n.value},t)}});function Er(e,t){const n=Me({render(){return t()}});return Me({name:wm(e),setup(){var r;const i=(r=ze(Xt,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var s;const a=(s=i==null?void 0:i.value)===null||s===void 0?void 0:s[e];return a?a():te(n,null)}}})}const Um=Me({name:"ChevronLeft",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Hm=Me({name:"ChevronRight",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Wm=Er("close",()=>te("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},te("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},te("g",{fill:"currentColor","fill-rule":"nonzero"},te("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),qm=Er("error",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Vm=Er("info",()=>te("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),Gm=Er("success",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Km=Er("warning",()=>te("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:Zm}=xi;function ps({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${Zm} !important`}={}){return[we("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:n,opacity:0}),we("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),we("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const Xm=Ue("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[je("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),we("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),tc("disabled",[we("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),we("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),we("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),we("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),we("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),je("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),je("round",[we("&::before",`
 border-radius: 50%;
 `)])]),Jm=Me({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return qs("-base-close",Xm,yr(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:r,round:i,isButtonTag:s}=e;return te(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,i&&`${t}-base-close--round`],onMousedown:o=>{e.focusable||o.preventDefault()},onClick:e.onClick},te(Vs,{clsPrefix:t},{default:()=>te(Wm,null)}))}}}),Bc=Me({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(o){e.width?o.style.maxWidth=`${o.offsetWidth}px`:o.style.maxHeight=`${o.offsetHeight}px`,o.offsetWidth}function r(o){e.width?o.style.maxWidth="0":o.style.maxHeight="0",o.offsetWidth;const{onLeave:l}=e;l&&l()}function i(o){e.width?o.style.maxWidth="":o.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function s(o){if(o.style.transition="none",e.width){const l=o.offsetWidth;o.style.maxWidth="0",o.offsetWidth,o.style.transition="",o.style.maxWidth=`${l}px`}else if(e.reverse)o.style.maxHeight=`${o.offsetHeight}px`,o.offsetHeight,o.style.transition="",o.style.maxHeight="0";else{const l=o.offsetHeight;o.style.maxHeight="0",o.offsetWidth,o.style.transition="",o.style.maxHeight=`${l}px`}o.offsetWidth}function a(o){var l;e.width?o.style.maxWidth="":e.reverse||(o.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:o,width:l,appear:c,mode:f}=e,h=o?Rd:Hl,g={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:s,onAfterEnter:a,onBeforeLeave:n,onLeave:r,onAfterLeave:i};return o||(g.mode=f),te(h,g,t)}}}),Ym=we([we("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Ue("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[Ee("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ps()]),Ee("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ps({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),Ee("container",`
 animation: rotator 3s linear infinite both;
 `,[Ee("icon",`
 height: 1em;
 width: 1em;
 `)])])]),ji="1.6s",Qm={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},e0=Me({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Qm),setup(e){qs("-base-loading",Ym,yr(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,s=t/i;return te("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},te(Nc,null,{default:()=>this.show?te("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},te("div",{class:`${e}-base-loading__container`},te("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},te("g",null,te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};270 ${s} ${s}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"}),te("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};135 ${s} ${s};450 ${s} ${s}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"}),te("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"})))))):te("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),fe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},t0=hn(fe.neutralBase),Lc=hn(fe.neutralInvertBase),n0=`rgba(${Lc.slice(0,3).join(", ")}, `;function ia(e){return`${n0+String(e)})`}function Ke(e){const t=Array.from(Lc);return t[3]=Number(e),_h(t0,t)}const zc=Object.assign(Object.assign({name:"common"},xi),{baseColor:fe.neutralBase,primaryColor:fe.primaryDefault,primaryColorHover:fe.primaryHover,primaryColorPressed:fe.primaryActive,primaryColorSuppl:fe.primarySuppl,infoColor:fe.infoDefault,infoColorHover:fe.infoHover,infoColorPressed:fe.infoActive,infoColorSuppl:fe.infoSuppl,successColor:fe.successDefault,successColorHover:fe.successHover,successColorPressed:fe.successActive,successColorSuppl:fe.successSuppl,warningColor:fe.warningDefault,warningColorHover:fe.warningHover,warningColorPressed:fe.warningActive,warningColorSuppl:fe.warningSuppl,errorColor:fe.errorDefault,errorColorHover:fe.errorHover,errorColorPressed:fe.errorActive,errorColorSuppl:fe.errorSuppl,textColorBase:fe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Ke(fe.alpha4),placeholderColor:Ke(fe.alpha4),placeholderColorDisabled:Ke(fe.alpha5),iconColor:Ke(fe.alpha4),iconColorHover:Lr(Ke(fe.alpha4),{lightness:.75}),iconColorPressed:Lr(Ke(fe.alpha4),{lightness:.9}),iconColorDisabled:Ke(fe.alpha5),opacity1:fe.alpha1,opacity2:fe.alpha2,opacity3:fe.alpha3,opacity4:fe.alpha4,opacity5:fe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Ke(Number(fe.alphaClose)),closeIconColorHover:Ke(Number(fe.alphaClose)),closeIconColorPressed:Ke(Number(fe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Ke(fe.alpha4),clearColorHover:Lr(Ke(fe.alpha4),{lightness:.75}),clearColorPressed:Lr(Ke(fe.alpha4),{lightness:.9}),scrollbarColor:ia(fe.alphaScrollbar),scrollbarColorHover:ia(fe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ke(fe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:fe.neutralPopover,tableColor:fe.neutralCard,cardColor:fe.neutralCard,modalColor:fe.neutralModal,bodyColor:fe.neutralBody,tagColor:"#eee",avatarColor:Ke(fe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Ke(fe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:fe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),{cubicBezierEaseInOut:bt,cubicBezierEaseOut:r0,cubicBezierEaseIn:i0}=xi;function Mc({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:i=!1,enterToProps:s=void 0,leaveToProps:a=void 0,reverse:o=!1}={}){const l=o?"leave":"enter",c=o?"enter":"leave";return[we(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},s),{opacity:1})),we(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),we(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${bt} ${r},
 opacity ${t} ${r0} ${r},
 margin-top ${t} ${bt} ${r},
 margin-bottom ${t} ${bt} ${r},
 padding-top ${t} ${bt} ${r},
 padding-bottom ${t} ${bt} ${r}
 ${n?`,${n}`:""}
 `),we(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${bt},
 opacity ${t} ${i0},
 margin-top ${t} ${bt},
 margin-bottom ${t} ${bt},
 padding-top ${t} ${bt},
 padding-bottom ${t} ${bt}
 ${n?`,${n}`:""}
 `)]}function s0(e){const{fontWeight:t,textColor1:n,textColor2:r,textColorDisabled:i,dividerColor:s,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:t,dividerColor:s,titleTextColor:n,titleTextColorDisabled:i,fontSize:a,textColor:r,arrowColor:r,arrowColorDisabled:i,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const o0={common:zc,self:s0},a0=Ue("collapse","width: 100%;",[Ue("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[je("disabled",[Ee("header","cursor: not-allowed;",[Ee("header-main",`
 color: var(--n-title-text-color-disabled);
 `),Ue("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),Ue("collapse-item","margin-left: 32px;"),we("&:first-child","margin-top: 0;"),we("&:first-child >",[Ee("header","padding-top: 0;")]),je("left-arrow-placement",[Ee("header",[Ue("collapse-item-arrow","margin-right: 4px;")])]),je("right-arrow-placement",[Ee("header",[Ue("collapse-item-arrow","margin-left: 4px;")])]),Ee("content-wrapper",[Ee("content-inner","padding-top: 16px;"),Mc({duration:"0.15s"})]),je("active",[Ee("header",[je("active",[Ue("collapse-item-arrow","transform: rotate(90deg);")])])]),we("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),tc("disabled",[je("trigger-area-main",[Ee("header",[Ee("header-main","cursor: pointer;"),Ue("collapse-item-arrow","cursor: default;")])]),je("trigger-area-arrow",[Ee("header",[Ue("collapse-item-arrow","cursor: pointer;")])]),je("trigger-area-extra",[Ee("header",[Ee("header-extra","cursor: pointer;")])])]),Ee("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[Ee("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),Ee("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),Ue("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),l0=Object.assign(Object.assign({},Pr.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),jc="n-collapse",c0=Me({name:"Collapse",props:l0,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=bi(e),s=qe(e.defaultExpandedNames),a=ge(()=>e.expandedNames),o=Ch(a,s),l=Pr("Collapse","-collapse",a0,o0,e,n);function c(d){const{"onUpdate:expandedNames":b,onUpdateExpandedNames:v,onExpandedNamesChange:w}=e;v&&Zn(v,d),b&&Zn(b,d),w&&Zn(w,d),s.value=d}function f(d){const{onItemHeaderClick:b}=e;b&&Zn(b,d)}function h(d,b,v){const{accordion:w}=e,{value:C}=o;if(w)d?(c([b]),f({name:b,expanded:!0,event:v})):(c([]),f({name:b,expanded:!1,event:v}));else if(!Array.isArray(C))c([b]),f({name:b,expanded:!0,event:v});else{const E=C.slice(),I=E.findIndex(M=>b===M);~I?(E.splice(I,1),c(E),f({name:b,expanded:!1,event:v})):(E.push(b),c(E),f({name:b,expanded:!0,event:v}))}}Gt(jc,{props:e,mergedClsPrefixRef:n,expandedNamesRef:o,slots:t,toggleItem:h});const g=Ws("Collapse",i,n),p=ge(()=>{const{common:{cubicBezierEaseInOut:d},self:{titleFontWeight:b,dividerColor:v,titlePadding:w,titleTextColor:C,titleTextColorDisabled:E,textColor:I,arrowColor:M,fontSize:B,titleFontSize:G,arrowColorDisabled:N,itemMargin:W}}=l.value;return{"--n-font-size":B,"--n-bezier":d,"--n-text-color":I,"--n-divider-color":v,"--n-title-padding":w,"--n-title-font-size":G,"--n-title-text-color":C,"--n-title-text-color-disabled":E,"--n-title-font-weight":b,"--n-arrow-color":M,"--n-arrow-color-disabled":N,"--n-item-margin":W}}),m=r?lc("collapse",void 0,p,e):void 0;return{rtlEnabled:g,mergedTheme:l,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),te("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),u0=Me({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:xh(yr(e,"show"))}},render(){return te(Bc,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t==="show"&&n,s=te("div",{class:`${r}-collapse-item__content-wrapper`},te("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return i?Ju(s,[[fd,e]]):e?s:null}})}}),f0={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},d0=Me({name:"CollapseItem",props:f0,setup(e){const{mergedRtlRef:t}=bi(e),n=oc(),r=as(()=>{var h;return(h=e.name)!==null&&h!==void 0?h:n}),i=ze(jc);i||ac("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:s,props:a,mergedClsPrefixRef:o,slots:l}=i,c=ge(()=>{const{value:h}=s;if(Array.isArray(h)){const{value:g}=r;return!~h.findIndex(p=>p===g)}else if(h){const{value:g}=r;return g!==h}return!0});return{rtlEnabled:Ws("Collapse",t,o),collapseSlots:l,randomName:n,mergedClsPrefix:o,collapsed:c,triggerAreas:yr(a,"triggerAreas"),mergedDisplayDirective:ge(()=>{const{displayDirective:h}=e;return h||a.displayDirective}),arrowPlacement:ge(()=>a.arrowPlacement),handleClick(h){let g="main";$o(h,"arrow")&&(g="arrow"),$o(h,"extra")&&(g="extra"),a.triggerAreas.includes(g)&&i&&!e.disabled&&i.toggleItem(c.value,r.value,h)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:s,disabled:a,triggerAreas:o}=this,l=Ho(t.header,{collapsed:r},()=>[this.title]),c=t["header-extra"]||e["header-extra"],f=t.arrow||e.arrow;return te("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${n}-arrow-placement`,a&&`${s}-collapse-item--disabled`,!r&&`${s}-collapse-item--active`,o.map(h=>`${s}-collapse-item--trigger-area-${h}`)]},te("div",{class:[`${s}-collapse-item__header`,!r&&`${s}-collapse-item__header--active`]},te("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&l,te("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},Ho(f,{collapsed:r},()=>[te(Vs,{clsPrefix:s},{default:()=>this.rtlEnabled?te(Um,null):te(Hm,null)})])),n==="left"&&l),Oh(c,{collapsed:r},h=>te("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},h))),te(u0,{clsPrefix:s,displayDirective:i,show:!r},t))}}),h0={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(kh("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},p0=Me({name:"ConfigProvider",alias:["App"],props:h0,setup(e){const t=ze(Xt,null),n=ge(()=>{const{theme:d}=e;if(d===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return d===void 0?b:b===void 0?d:Object.assign({},b,d)}),r=ge(()=>{const{themeOverrides:d}=e;if(d!==null){if(d===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?d:Xn({},b,d)}}}),i=as(()=>{const{namespace:d}=e;return d===void 0?t==null?void 0:t.mergedNamespaceRef.value:d}),s=as(()=>{const{bordered:d}=e;return d===void 0?t==null?void 0:t.mergedBorderedRef.value:d}),a=ge(()=>{const{icons:d}=e;return d===void 0?t==null?void 0:t.mergedIconsRef.value:d}),o=ge(()=>{const{componentOptions:d}=e;return d!==void 0?d:t==null?void 0:t.mergedComponentPropsRef.value}),l=ge(()=>{const{clsPrefix:d}=e;return d!==void 0?d:t?t.mergedClsPrefixRef.value:ls}),c=ge(()=>{var d;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const v={};for(const w of b)v[w.name]=Zi(w),(d=w.peers)===null||d===void 0||d.forEach(C=>{C.name in v||(v[C.name]=Zi(C))});return v}),f=ge(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),h=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),g=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),p=e.styleMountTarget||(t==null?void 0:t.styleMountTarget),m=ge(()=>{const{value:d}=n,{value:b}=r,v=b&&Object.keys(b).length!==0,w=d==null?void 0:d.name;return w?v?`${w}-${hr(JSON.stringify(r.value))}`:w:v?hr(JSON.stringify(r.value)):""});return Gt(Xt,{mergedThemeHashRef:m,mergedBreakpointsRef:f,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:o,mergedBorderedRef:s,mergedNamespaceRef:i,mergedClsPrefixRef:l,mergedLocaleRef:ge(()=>{const{locale:d}=e;if(d!==null)return d===void 0?t==null?void 0:t.mergedLocaleRef.value:d}),mergedDateLocaleRef:ge(()=>{const{dateLocale:d}=e;if(d!==null)return d===void 0?t==null?void 0:t.mergedDateLocaleRef.value:d}),mergedHljsRef:ge(()=>{const{hljs:d}=e;return d===void 0?t==null?void 0:t.mergedHljsRef.value:d}),mergedKatexRef:ge(()=>{const{katex:d}=e;return d===void 0?t==null?void 0:t.mergedKatexRef.value:d}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:h||!1,preflightStyleDisabled:g||!1,styleMountTarget:p}),{mergedClsPrefix:l,mergedBordered:s,mergedNamespace:i,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):te(this.as||this.tag,{class:`${this.mergedClsPrefix||ls}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),g0="n-message-api",$c="n-message-provider",m0={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function v0(e){const{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,infoColor:s,successColor:a,errorColor:o,warningColor:l,popoverColor:c,boxShadow2:f,primaryColor:h,lineHeight:g,borderRadius:p,closeColorHover:m,closeColorPressed:d}=e;return Object.assign(Object.assign({},m0),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:f,boxShadowInfo:f,boxShadowSuccess:f,boxShadowError:f,boxShadowWarning:f,boxShadowLoading:f,iconColor:t,iconColorInfo:s,iconColorSuccess:a,iconColorWarning:l,iconColorError:o,iconColorLoading:h,closeColorHover:m,closeColorPressed:d,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,closeColorHoverInfo:m,closeColorPressedInfo:d,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:i,closeColorHoverSuccess:m,closeColorPressedSuccess:d,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:i,closeColorHoverError:m,closeColorPressedError:d,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:i,closeColorHoverWarning:m,closeColorPressedWarning:d,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:i,closeColorHoverLoading:m,closeColorPressedLoading:d,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:i,loadingColor:h,lineHeight:g,borderRadius:p,border:"0"})}const b0={common:zc,self:v0},Uc={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},y0=we([Ue("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Mc({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Ue("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[Ee("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),Ee("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>je(`${e}-type`,[we("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),we("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ps()])]),Ee("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[we("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),we("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),Ue("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[je("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),je("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),je("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),je("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),je("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),je("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),_0={info:()=>te(Vm,null),success:()=>te(Gm,null),warning:()=>te(Km,null),error:()=>te(qm,null),default:()=>null},w0=Me({name:"Message",props:Object.assign(Object.assign({},Uc),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=bi(e),{props:r,mergedClsPrefixRef:i}=ze($c),s=Ws("Message",n,i),a=Pr("Message","-message",y0,b0,r,i),o=ge(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:f},self:{padding:h,margin:g,maxWidth:p,iconMargin:m,closeMargin:d,closeSize:b,iconSize:v,fontSize:w,lineHeight:C,borderRadius:E,border:I,iconColorInfo:M,iconColorSuccess:B,iconColorWarning:G,iconColorError:N,iconColorLoading:W,closeIconSize:ee,closeBorderRadius:S,[zt("textColor",c)]:j,[zt("boxShadow",c)]:y,[zt("color",c)]:q,[zt("closeColorHover",c)]:se,[zt("closeColorPressed",c)]:V,[zt("closeIconColor",c)]:ie,[zt("closeIconColorPressed",c)]:X,[zt("closeIconColorHover",c)]:ae}}=a.value;return{"--n-bezier":f,"--n-margin":g,"--n-padding":h,"--n-max-width":p,"--n-font-size":w,"--n-icon-margin":m,"--n-icon-size":v,"--n-close-icon-size":ee,"--n-close-border-radius":S,"--n-close-size":b,"--n-close-margin":d,"--n-text-color":j,"--n-color":q,"--n-box-shadow":y,"--n-icon-color-info":M,"--n-icon-color-success":B,"--n-icon-color-warning":G,"--n-icon-color-error":N,"--n-icon-color-loading":W,"--n-close-color-hover":se,"--n-close-color-pressed":V,"--n-close-icon-color":ie,"--n-close-icon-color-pressed":X,"--n-close-icon-color-hover":ae,"--n-line-height":C,"--n-border-radius":E,"--n-border":I}}),l=t?lc("message",ge(()=>e.type[0]),o,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:s,messageProviderProps:r,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:i,cssVars:s,themeClass:a,onRender:o,icon:l,handleClose:c,showIcon:f}=this;o==null||o();let h;return te("div",{class:[`${i}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},s]},e?e(this.$props):te("div",{class:[`${i}-message ${i}-message--${t}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(h=x0(l,t,i))&&f?te("div",{class:`${i}-message__icon ${i}-message__icon--${t}-type`},te(Nc,null,{default:()=>h})):null,te("div",{class:`${i}-message__content`},Ih(r)),n?te(Jm,{clsPrefix:i,class:`${i}-message__close`,onClick:c,absolute:!0}):null))}});function x0(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?te(e0,{clsPrefix:n,strokeWidth:24,scale:.85}):_0[t]();return r?te(Vs,{clsPrefix:n,key:t},{default:()=>r}):null}}const C0=Me({name:"MessageEnvironment",props:Object.assign(Object.assign({},Uc),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=qe(!0);Cr(()=>{r()});function r(){const{duration:f}=e;f&&(t=window.setTimeout(a,f))}function i(f){f.currentTarget===f.target&&t!==null&&(window.clearTimeout(t),t=null)}function s(f){f.currentTarget===f.target&&r()}function a(){const{onHide:f}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),f&&f()}function o(){const{onClose:f}=e;f&&f(),a()}function l(){const{onAfterLeave:f,onInternalAfterLeave:h,onAfterHide:g,internalKey:p}=e;f&&f(),h&&h(p),g&&g()}function c(){a()}return{show:n,hide:a,handleClose:o,handleAfterLeave:l,handleMouseleave:s,handleMouseenter:i,deactivate:c}},render(){return te(Bc,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?te(w0,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),S0=Object.assign(Object.assign({},Pr.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),A0=Me({name:"MessageProvider",props:S0,setup(e){const{mergedClsPrefixRef:t}=bi(e),n=qe([]),r=qe({}),i={create(l,c){return s(l,Object.assign({type:"default"},c))},info(l,c){return s(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return s(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return s(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return s(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return s(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:o};Gt($c,{props:e,mergedClsPrefixRef:t}),Gt(g0,i);function s(l,c){const f=oc(),h=br(Object.assign(Object.assign({},c),{content:l,key:f,destroy:()=>{var p;(p=r.value[f])===null||p===void 0||p.hide()}})),{max:g}=e;return g&&n.value.length>=g&&n.value.shift(),n.value.push(h),h}function a(l){n.value.splice(n.value.findIndex(c=>c.key===l),1),delete r.value[l]}function o(){Object.values(r.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:a},i)},render(){var e,t,n;return te(Be,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?te(nf,{to:(n=this.to)!==null&&n!==void 0?n:"body"},te("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(r=>te(C0,Object.assign({ref:i=>{i&&(this.messageRefs[r.key]=i)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},Th(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),P0={__name:"App",setup(e){const t={common:{fontFamily:"Microsoft JhengHei"}};return(n,r)=>{const i=gf("router-view");return at(),dr(dt(p0),{"theme-overrides":t,abstract:""},{default:Cn(()=>[Re(dt(A0),{placement:"top-right"},{default:Cn(()=>[Re(i)]),_:1})]),_:1})}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yn=typeof document<"u";function Hc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function E0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Hc(e.default)}const ye=Object.assign;function $i(e,t){const n={};for(const r in t){const i=t[r];n[r]=mt(i)?i.map(e):e(i)}return n}const sr=()=>{},mt=Array.isArray;function sa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Wc=/#/g,R0=/&/g,k0=/\//g,T0=/=/g,I0=/\?/g,qc=/\+/g,O0=/%5B/g,D0=/%5D/g,Vc=/%5E/g,F0=/%60/g,Gc=/%7B/g,N0=/%7C/g,Kc=/%7D/g,B0=/%20/g;function Gs(e){return e==null?"":encodeURI(""+e).replace(N0,"|").replace(O0,"[").replace(D0,"]")}function L0(e){return Gs(e).replace(Gc,"{").replace(Kc,"}").replace(Vc,"^")}function gs(e){return Gs(e).replace(qc,"%2B").replace(B0,"+").replace(Wc,"%23").replace(R0,"%26").replace(F0,"`").replace(Gc,"{").replace(Kc,"}").replace(Vc,"^")}function z0(e){return gs(e).replace(T0,"%3D")}function M0(e){return Gs(e).replace(Wc,"%23").replace(I0,"%3F")}function j0(e){return M0(e).replace(k0,"%2F")}function mr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const $0=/\/$/,U0=e=>e.replace($0,"");function Ui(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),s=t.slice(l,o>0?o:t.length),i=e(s.slice(1))),o>=0&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=V0(r??t,n),{fullPath:r+s+a,path:r,query:i,hash:mr(a)}}function H0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function oa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function W0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&On(t.matched[r],n.matched[i])&&Zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function On(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!q0(e[n],t[n]))return!1;return!0}function q0(e,t){return mt(e)?aa(e,t):mt(t)?aa(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function aa(e,t){return mt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function V0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ms=(function(e){return e.pop="pop",e.push="push",e})({}),Hi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function G0(e){if(!e)if(yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),U0(e)}const K0=/^[^#]+#/;function Z0(e,t){return e.replace(K0,"#")+t}function X0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ci=()=>({left:window.scrollX,top:window.scrollY});function J0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=X0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function la(e,t){return(history.state?history.state.position-t:-1)+e}const vs=new Map;function Y0(e,t){vs.set(e,t)}function Q0(e){const t=vs.get(e);return vs.delete(e),t}function e1(e){return typeof e=="string"||e&&typeof e=="object"}function Xc(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Jc=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function Dn(e,t){return ye(new Error,{type:e,[Jc]:!0},t)}function Et(e,t){return e instanceof Error&&Jc in e&&(t==null||!!(e.type&t))}const t1=["params","query","hash"];function n1(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of t1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function r1(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(qc," "),s=i.indexOf("="),a=mr(s<0?i:i.slice(0,s)),o=s<0?null:mr(i.slice(s+1));if(a in t){let l=t[a];mt(l)||(l=t[a]=[l]),l.push(o)}else t[a]=o}return t}function ca(e){let t="";for(let n in e){const r=e[n];if(n=z0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(mt(r)?r.map(i=>i&&gs(i)):[r&&gs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function i1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=mt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const s1=Symbol(""),ua=Symbol(""),Ks=Symbol(""),Yc=Symbol(""),bs=Symbol("");function Vn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ht(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=g=>{g===!1?l(Dn(Te.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):e1(g)?l(Dn(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(a&&r.enterCallbacks[i]===a&&typeof g=="function"&&a.push(g),o())},f=s(()=>e.call(r&&r.instances[i],t,n,c));let h=Promise.resolve(f);e.length<3&&(h=h.then(c)),h.catch(g=>l(g))})}function Wi(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Hc(l)){const c=(l.__vccOpts||l)[t];c&&s.push(Ht(c,n,r,a,o,i))}else{let c=l();s.push(()=>c.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=E0(f)?f.default:f;a.mods[o]=f,a.components[o]=h;const g=(h.__vccOpts||h)[t];return g&&Ht(g,n,r,a,o,i)()}))}}return s}function o1(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>On(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>On(c,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let a1=()=>location.protocol+"//"+location.host;function Qc(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,o=i.slice(a);return o[0]!=="/"&&(o="/"+o),oa(o,"")}return oa(n,e)+r+i}function l1(e,t,n,r){let i=[],s=[],a=null;const o=({state:g})=>{const p=Qc(e,location),m=n.value,d=t.value;let b=0;if(g){if(n.value=p,t.value=g,a&&a===m){a=null;return}b=d?g.position-d.position:0}else r(p);i.forEach(v=>{v(n.value,m,{delta:b,type:ms.pop,direction:b?b>0?Hi.forward:Hi.back:Hi.unknown})})};function l(){a=n.value}function c(g){i.push(g);const p=()=>{const m=i.indexOf(g);m>-1&&i.splice(m,1)};return s.push(p),p}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ye({},g.state,{scroll:Ci()}),"")}}function h(){for(const g of s)g();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:c,destroy:h}}function fa(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ci():null}}function c1(e){const{history:t,location:n}=window,r={value:Qc(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,f){const h=e.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:a1()+e+l;try{t[f?"replaceState":"pushState"](c,"",g),i.value=c}catch(p){console.error(p),n[f?"replace":"assign"](g)}}function a(l,c){s(l,ye({},t.state,fa(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),r.value=l}function o(l,c){const f=ye({},i.value,t.state,{forward:l,scroll:Ci()});s(f.current,f,!0),s(l,ye({},fa(r.value,l,null),{position:f.position+1},c),!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function u1(e){e=G0(e);const t=c1(e),n=l1(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ye({location:"",base:e,go:r,createHref:Z0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}let an=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ne=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ne||{});const f1={type:an.Static,value:""},d1=/[a-zA-Z0-9_]/;function h1(e){if(!e)return[[]];if(e==="/")return[[f1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Ne.Static,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",f="";function h(){c&&(n===Ne.Static?s.push({type:an.Static,value:c}):n===Ne.Param||n===Ne.ParamRegExp||n===Ne.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:an.Param,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==Ne.ParamRegExp){r=n,n=Ne.EscapeNext;continue}switch(n){case Ne.Static:l==="/"?(c&&h(),a()):l===":"?(h(),n=Ne.Param):g();break;case Ne.EscapeNext:g(),n=r;break;case Ne.Param:l==="("?n=Ne.ParamRegExp:d1.test(l)?g():(h(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Ne.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ne.ParamRegExpEnd:f+=l;break;case Ne.ParamRegExpEnd:h(),n=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,f="";break;default:t("Unknown state");break}}return n===Ne.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),h(),a(),i}const da="[^/]+?",p1={sensitive:!1,strict:!1,start:!0,end:!0};var Qe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Qe||{});const g1=/[.+*?^${}()[\]/\\]/g;function m1(e,t){const n=ye({},p1,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const f=c.length?[]:[Qe.Root];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const g=c[h];let p=Qe.Segment+(n.sensitive?Qe.BonusCaseSensitive:0);if(g.type===an.Static)h||(i+="/"),i+=g.value.replace(g1,"\\$&"),p+=Qe.Static;else if(g.type===an.Param){const{value:m,repeatable:d,optional:b,regexp:v}=g;s.push({name:m,repeatable:d,optional:b});const w=v||da;if(w!==da){p+=Qe.BonusCustomRegExp;try{`${w}`}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${w}): `+E.message)}}let C=d?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;h||(C=b&&c.length<2?`(?:/${C})`:"/"+C),b&&(C+="?"),i+=C,p+=Qe.Dynamic,b&&(p+=Qe.BonusOptional),d&&(p+=Qe.BonusRepeatable),w===".*"&&(p+=Qe.BonusWildcard)}f.push(p)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=Qe.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const f=c.match(a),h={};if(!f)return null;for(let g=1;g<f.length;g++){const p=f[g]||"",m=s[g-1];h[m.name]=p&&m.repeatable?p.split("/"):p}return h}function l(c){let f="",h=!1;for(const g of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const p of g)if(p.type===an.Static)f+=p.value;else if(p.type===an.Param){const{value:m,repeatable:d,optional:b}=p,v=m in c?c[m]:"";if(mt(v)&&!d)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const w=mt(v)?v.join("/"):v;if(!w)if(b)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);f+=w}}return f||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function v1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Qe.Static+Qe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Qe.Static+Qe.Segment?1:-1:0}function eu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=v1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(ha(r))return 1;if(ha(i))return-1}return i.length-r.length}function ha(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const b1={strict:!1,end:!0,sensitive:!1};function y1(e,t,n){const r=m1(h1(e.path),n),i=ye(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function _1(e,t){const n=[],r=new Map;t=sa(b1,t);function i(h){return r.get(h)}function s(h,g,p){const m=!p,d=ga(h);d.aliasOf=p&&p.record;const b=sa(t,h),v=[d];if("alias"in h){const E=typeof h.alias=="string"?[h.alias]:h.alias;for(const I of E)v.push(ga(ye({},d,{components:p?p.record.components:d.components,path:I,aliasOf:p?p.record:d})))}let w,C;for(const E of v){const{path:I}=E;if(g&&I[0]!=="/"){const M=g.record.path,B=M[M.length-1]==="/"?"":"/";E.path=g.record.path+(I&&B+I)}if(w=y1(E,g,b),p?p.alias.push(w):(C=C||w,C!==w&&C.alias.push(w),m&&h.name&&!ma(w)&&a(h.name)),tu(w)&&l(w),d.children){const M=d.children;for(let B=0;B<M.length;B++)s(M[B],w,p&&p.children[B])}p=p||w}return C?()=>{a(C)}:sr}function a(h){if(Xc(h)){const g=r.get(h);g&&(r.delete(h),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(h);g>-1&&(n.splice(g,1),h.record.name&&r.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return n}function l(h){const g=C1(h,n);n.splice(g,0,h),h.record.name&&!ma(h)&&r.set(h.record.name,h)}function c(h,g){let p,m={},d,b;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw Dn(Te.MATCHER_NOT_FOUND,{location:h});b=p.record.name,m=ye(pa(g.params,p.keys.filter(C=>!C.optional).concat(p.parent?p.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),h.params&&pa(h.params,p.keys.map(C=>C.name))),d=p.stringify(m)}else if(h.path!=null)d=h.path,p=n.find(C=>C.re.test(d)),p&&(m=p.parse(d),b=p.record.name);else{if(p=g.name?r.get(g.name):n.find(C=>C.re.test(g.path)),!p)throw Dn(Te.MATCHER_NOT_FOUND,{location:h,currentLocation:g});b=p.record.name,m=ye({},g.params,h.params),d=p.stringify(m)}const v=[];let w=p;for(;w;)v.unshift(w.record),w=w.parent;return{name:b,path:d,params:m,matched:v,meta:x1(v)}}e.forEach(h=>s(h));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:f,getRoutes:o,getRecordMatcher:i}}function pa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ga(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:w1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function w1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ma(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function x1(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function C1(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;eu(e,t[s])<0?r=s:n=s+1}const i=S1(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function S1(e){let t=e;for(;t=t.parent;)if(tu(t)&&eu(e,t)===0)return t}function tu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function va(e){const t=ze(Ks),n=ze(Yc),r=ge(()=>{const l=dt(e.to);return t.resolve(l)}),i=ge(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(On.bind(null,f));if(g>-1)return g;const p=ba(l[c-2]);return c>1&&ba(f)===p&&h[h.length-1].path!==p?h.findIndex(On.bind(null,l[c-2])):g}),s=ge(()=>i.value>-1&&k1(n.params,r.value.params)),a=ge(()=>i.value>-1&&i.value===n.matched.length-1&&Zc(n.params,r.value.params));function o(l={}){if(R1(l)){const c=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(sr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ge(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}function A1(e){return e.length===1?e[0]:e}const P1=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:va,setup(e,{slots:t}){const n=br(va(e)),{options:r}=ze(Ks),i=ge(()=>({[ya(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ya(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&A1(t.default(n));return e.custom?s:te("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),E1=P1;function R1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function k1(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!mt(i)||i.length!==r.length||r.some((s,a)=>s.valueOf()!==i[a].valueOf()))return!1}return!0}function ba(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ya=(e,t,n)=>e??t??n,T1=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ze(bs),i=ge(()=>e.route||r.value),s=ze(ua,0),a=ge(()=>{let c=dt(s);const{matched:f}=i.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),o=ge(()=>i.value.matched[a.value]);Gt(ua,ge(()=>a.value+1)),Gt(s1,o),Gt(bs,i);const l=qe();return un(()=>[l.value,o.value,e.name],([c,f,h],[g,p,m])=>{f&&(f.instances[h]=c,p&&p!==f&&c&&c===g&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),c&&f&&(!p||!On(f,p)||!g)&&(f.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=i.value,f=e.name,h=o.value,g=h&&h.components[f];if(!g)return _a(n.default,{Component:g,route:c});const p=h.props[f],m=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=te(g,ye({},m,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return _a(n.default,{Component:b,route:c})||b}}});function _a(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const I1=T1;function O1(e){const t=_1(e.routes,e),n=e.parseQuery||r1,r=e.stringifyQuery||ca,i=e.history,s=Vn(),a=Vn(),o=Vn(),l=Ka(Mt);let c=Mt;yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=$i.bind(null,H=>""+H),h=$i.bind(null,j0),g=$i.bind(null,mr);function p(H,J){let Z,re;return Xc(H)?(Z=t.getRecordMatcher(H),re=J):re=H,t.addRoute(re,Z)}function m(H){const J=t.getRecordMatcher(H);J&&t.removeRoute(J)}function d(){return t.getRoutes().map(H=>H.record)}function b(H){return!!t.getRecordMatcher(H)}function v(H,J){if(J=ye({},J||l.value),typeof H=="string"){const u=Ui(n,H,J.path),T=t.resolve({path:u.path},J),R=i.createHref(u.fullPath);return ye(u,T,{params:g(T.params),hash:mr(u.hash),redirectedFrom:void 0,href:R})}let Z;if(H.path!=null)Z=ye({},H,{path:Ui(n,H.path,J.path).path});else{const u=ye({},H.params);for(const T in u)u[T]==null&&delete u[T];Z=ye({},H,{params:h(u)}),J.params=h(J.params)}const re=t.resolve(Z,J),ce=H.hash||"";re.params=f(g(re.params));const A=H0(r,ye({},H,{hash:L0(ce),path:re.path})),k=i.createHref(A);return ye({fullPath:A,hash:ce,query:r===ca?i1(H.query):H.query||{}},re,{redirectedFrom:void 0,href:k})}function w(H){return typeof H=="string"?Ui(n,H,l.value.path):ye({},H)}function C(H,J){if(c!==H)return Dn(Te.NAVIGATION_CANCELLED,{from:J,to:H})}function E(H){return B(H)}function I(H){return E(ye(w(H),{replace:!0}))}function M(H,J){const Z=H.matched[H.matched.length-1];if(Z&&Z.redirect){const{redirect:re}=Z;let ce=typeof re=="function"?re(H,J):re;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=w(ce):{path:ce},ce.params={}),ye({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function B(H,J){const Z=c=v(H),re=l.value,ce=H.state,A=H.force,k=H.replace===!0,u=M(Z,re);if(u)return B(ye(w(u),{state:typeof u=="object"?ye({},ce,u.state):ce,force:A,replace:k}),J||Z);const T=Z;T.redirectedFrom=J;let R;return!A&&W0(r,re,Z)&&(R=Dn(Te.NAVIGATION_DUPLICATED,{to:T,from:re}),$(re,re,!0,!1)),(R?Promise.resolve(R):W(T,re)).catch(_=>Et(_)?Et(_,Te.NAVIGATION_GUARD_REDIRECT)?_:ae(_):ie(_,T,re)).then(_=>{if(_){if(Et(_,Te.NAVIGATION_GUARD_REDIRECT))return B(ye({replace:k},w(_.to),{state:typeof _.to=="object"?ye({},ce,_.to.state):ce,force:A}),J||T)}else _=S(T,re,!0,k,ce);return ee(T,re,_),_})}function G(H,J){const Z=C(H,J);return Z?Promise.reject(Z):Promise.resolve()}function N(H){const J=ne.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(H):H()}function W(H,J){let Z;const[re,ce,A]=o1(H,J);Z=Wi(re.reverse(),"beforeRouteLeave",H,J);for(const u of re)u.leaveGuards.forEach(T=>{Z.push(Ht(T,H,J))});const k=G.bind(null,H,J);return Z.push(k),me(Z).then(()=>{Z=[];for(const u of s.list())Z.push(Ht(u,H,J));return Z.push(k),me(Z)}).then(()=>{Z=Wi(ce,"beforeRouteUpdate",H,J);for(const u of ce)u.updateGuards.forEach(T=>{Z.push(Ht(T,H,J))});return Z.push(k),me(Z)}).then(()=>{Z=[];for(const u of A)if(u.beforeEnter)if(mt(u.beforeEnter))for(const T of u.beforeEnter)Z.push(Ht(T,H,J));else Z.push(Ht(u.beforeEnter,H,J));return Z.push(k),me(Z)}).then(()=>(H.matched.forEach(u=>u.enterCallbacks={}),Z=Wi(A,"beforeRouteEnter",H,J,N),Z.push(k),me(Z))).then(()=>{Z=[];for(const u of a.list())Z.push(Ht(u,H,J));return Z.push(k),me(Z)}).catch(u=>Et(u,Te.NAVIGATION_CANCELLED)?u:Promise.reject(u))}function ee(H,J,Z){o.list().forEach(re=>N(()=>re(H,J,Z)))}function S(H,J,Z,re,ce){const A=C(H,J);if(A)return A;const k=J===Mt,u=yn?history.state:{};Z&&(re||k?i.replace(H.fullPath,ye({scroll:k&&u&&u.scroll},ce)):i.push(H.fullPath,ce)),l.value=H,$(H,J,Z,k),ae()}let j;function y(){j||(j=i.listen((H,J,Z)=>{if(!Q.listening)return;const re=v(H),ce=M(re,Q.currentRoute.value);if(ce){B(ye(ce,{replace:!0,force:!0}),re).catch(sr);return}c=re;const A=l.value;yn&&Y0(la(A.fullPath,Z.delta),Ci()),W(re,A).catch(k=>Et(k,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?k:Et(k,Te.NAVIGATION_GUARD_REDIRECT)?(B(ye(w(k.to),{force:!0}),re).then(u=>{Et(u,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===ms.pop&&i.go(-1,!1)}).catch(sr),Promise.reject()):(Z.delta&&i.go(-Z.delta,!1),ie(k,re,A))).then(k=>{k=k||S(re,A,!1),k&&(Z.delta&&!Et(k,Te.NAVIGATION_CANCELLED)?i.go(-Z.delta,!1):Z.type===ms.pop&&Et(k,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ee(re,A,k)}).catch(sr)}))}let q=Vn(),se=Vn(),V;function ie(H,J,Z){ae(H);const re=se.list();return re.length?re.forEach(ce=>ce(H,J,Z)):console.error(H),Promise.reject(H)}function X(){return V&&l.value!==Mt?Promise.resolve():new Promise((H,J)=>{q.add([H,J])})}function ae(H){return V||(V=!H,y(),q.list().forEach(([J,Z])=>H?Z(H):J()),q.reset()),H}function $(H,J,Z,re){const{scrollBehavior:ce}=e;if(!yn||!ce)return Promise.resolve();const A=!Z&&Q0(la(H.fullPath,0))||(re||!Z)&&history.state&&history.state.scroll||null;return Ya().then(()=>ce(H,J,A)).then(k=>k&&J0(k)).catch(k=>ie(k,H,J))}const L=H=>i.go(H);let le;const ne=new Set,Q={currentRoute:l,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:d,resolve:v,options:e,push:E,replace:I,go:L,back:()=>L(-1),forward:()=>L(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:se.add,isReady:X,install(H){H.component("RouterLink",E1),H.component("RouterView",I1),H.config.globalProperties.$router=Q,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),yn&&!le&&l.value===Mt&&(le=!0,E(i.location).catch(re=>{}));const J={};for(const re in Mt)Object.defineProperty(J,re,{get:()=>l.value[re],enumerable:!0});H.provide(Ks,Q),H.provide(Yc,Ga(J)),H.provide(bs,l);const Z=H.unmount;ne.add(H),H.unmount=function(){ne.delete(H),ne.size<1&&(c=Mt,j&&j(),j=null,l.value=Mt,le=!1,V=!1),Z()}}};function me(H){return H.reduce((J,Z)=>J.then(()=>N(Z)),Promise.resolve())}return Q}const D1="modulepreload",F1=function(e){return"/frontend-development-guide/"+e},wa={},ut=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(n.map(c=>{if(c=F1(c),c in wa)return;wa[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":D1,f||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((p,m)=>{g.addEventListener("load",p),g.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function N1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function zr(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var qi={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var xa;function B1(){return xa||(xa=1,(function(e,t){(function(n){e.exports=n()})(function(){return(function n(r,i,s){function a(c,f){if(!i[c]){if(!r[c]){var h=typeof zr=="function"&&zr;if(!f&&h)return h(c,!0);if(o)return o(c,!0);var g=new Error("Cannot find module '"+c+"'");throw g.code="MODULE_NOT_FOUND",g}var p=i[c]={exports:{}};r[c][0].call(p.exports,function(m){var d=r[c][1][m];return a(d||m)},p,p.exports,n,r,i,s)}return i[c].exports}for(var o=typeof zr=="function"&&zr,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(n,r,i){var s=n("./utils"),a=n("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,f,h,g,p,m,d,b=[],v=0,w=l.length,C=w,E=s.getTypeOf(l)!=="string";v<l.length;)C=w-v,h=E?(c=l[v++],f=v<w?l[v++]:0,v<w?l[v++]:0):(c=l.charCodeAt(v++),f=v<w?l.charCodeAt(v++):0,v<w?l.charCodeAt(v++):0),g=c>>2,p=(3&c)<<4|f>>4,m=1<C?(15&f)<<2|h>>6:64,d=2<C?63&h:64,b.push(o.charAt(g)+o.charAt(p)+o.charAt(m)+o.charAt(d));return b.join("")},i.decode=function(l){var c,f,h,g,p,m,d=0,b=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var w,C=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&C--,l.charAt(l.length-2)===o.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(w=a.uint8array?new Uint8Array(0|C):new Array(0|C);d<l.length;)c=o.indexOf(l.charAt(d++))<<2|(g=o.indexOf(l.charAt(d++)))>>4,f=(15&g)<<4|(p=o.indexOf(l.charAt(d++)))>>2,h=(3&p)<<6|(m=o.indexOf(l.charAt(d++))),w[b++]=c,p!==64&&(w[b++]=f),m!==64&&(w[b++]=h);return w}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),a=n("./stream/DataWorker"),o=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function c(f,h,g,p,m){this.compressedSize=f,this.uncompressedSize=h,this.crc32=g,this.compression=p,this.compressedContent=m}c.prototype={getContentWorker:function(){var f=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return f.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,h,g){return f.pipe(new o).pipe(new l("uncompressedSize")).pipe(h.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},r.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();r.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,f,h,g){var p=a,m=g+h;c^=-1;for(var d=g;d<m;d++)c=c>>>8^p[255&(c^f[d])];return-1^c})(0|l,o,o.length,0):(function(c,f,h,g){var p=a,m=g+h;c^=-1;for(var d=g;d<m;d++)c=c>>>8^p[255&(c^f.charCodeAt(d))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=n("pako"),o=n("./utils"),l=n("./stream/GenericWorker"),c=s?"uint8array":"array";function f(h,g){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=g,this.meta={}}i.magic="\b\0",o.inherits(f,l),f.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,h.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(g){h.push({data:g,meta:h.meta})}},i.compressWorker=function(h){return new f("Deflate",h)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(p,m){var d,b="";for(d=0;d<m;d++)b+=String.fromCharCode(255&p),p>>>=8;return b}function a(p,m,d,b,v,w){var C,E,I=p.file,M=p.compression,B=w!==c.utf8encode,G=o.transformTo("string",w(I.name)),N=o.transformTo("string",c.utf8encode(I.name)),W=I.comment,ee=o.transformTo("string",w(W)),S=o.transformTo("string",c.utf8encode(W)),j=N.length!==I.name.length,y=S.length!==W.length,q="",se="",V="",ie=I.dir,X=I.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};m&&!d||(ae.crc32=p.crc32,ae.compressedSize=p.compressedSize,ae.uncompressedSize=p.uncompressedSize);var $=0;m&&($|=8),B||!j&&!y||($|=2048);var L=0,le=0;ie&&(L|=16),v==="UNIX"?(le=798,L|=(function(Q,me){var H=Q;return Q||(H=me?16893:33204),(65535&H)<<16})(I.unixPermissions,ie)):(le=20,L|=(function(Q){return 63&(Q||0)})(I.dosPermissions)),C=X.getUTCHours(),C<<=6,C|=X.getUTCMinutes(),C<<=5,C|=X.getUTCSeconds()/2,E=X.getUTCFullYear()-1980,E<<=4,E|=X.getUTCMonth()+1,E<<=5,E|=X.getUTCDate(),j&&(se=s(1,1)+s(f(G),4)+N,q+="up"+s(se.length,2)+se),y&&(V=s(1,1)+s(f(ee),4)+S,q+="uc"+s(V.length,2)+V);var ne="";return ne+=`
\0`,ne+=s($,2),ne+=M.magic,ne+=s(C,2),ne+=s(E,2),ne+=s(ae.crc32,4),ne+=s(ae.compressedSize,4),ne+=s(ae.uncompressedSize,4),ne+=s(G.length,2),ne+=s(q.length,2),{fileRecord:h.LOCAL_FILE_HEADER+ne+G+q,dirRecord:h.CENTRAL_FILE_HEADER+s(le,2)+ne+s(ee.length,2)+"\0\0\0\0"+s(L,4)+s(b,4)+G+q+ee}}var o=n("../utils"),l=n("../stream/GenericWorker"),c=n("../utf8"),f=n("../crc32"),h=n("../signature");function g(p,m,d,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=m,this.zipPlatform=d,this.encodeFileName=b,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(g,l),g.prototype.push=function(p){var m=p.meta.percent||0,d=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:d?(m+100*(d-b-1))/d:100}}))},g.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var m=this.streamFiles&&!p.file.dir;if(m){var d=a(p,m,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(p){this.accumulate=!1;var m=this.streamFiles&&!p.file.dir,d=a(p,m,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),m)this.push({data:(function(b){return h.DATA_DESCRIPTOR+s(b.crc32,4)+s(b.compressedSize,4)+s(b.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var p=this.bytesWritten,m=0;m<this.dirRecords.length;m++)this.push({data:this.dirRecords[m],meta:{percent:100}});var d=this.bytesWritten-p,b=(function(v,w,C,E,I){var M=o.transformTo("string",I(E));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(v,2)+s(v,2)+s(w,4)+s(C,4)+s(M.length,2)+M})(this.dirRecords.length,d,p,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(p){this._sources.push(p);var m=this;return p.on("data",function(d){m.processChunk(d)}),p.on("end",function(){m.closedSource(m.previous.streamInfo),m._sources.length?m.prepareNextSource():m.end()}),p.on("error",function(d){m.error(d)}),this},g.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(p){var m=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var d=0;d<m.length;d++)try{m[d].error(p)}catch{}return!0},g.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,m=0;m<p.length;m++)p[m].lock()},r.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),a=n("./ZipFileWorker");i.generateWorker=function(o,l,c){var f=new a(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{o.forEach(function(g,p){h++;var m=(function(w,C){var E=w||C,I=s[E];if(!I)throw new Error(E+" is not a valid compression method !");return I})(p.options.compression,l.compression),d=p.options.compressionOptions||l.compressionOptions||{},b=p.dir,v=p.date;p._compressWorker(m,d).withStreamInfo("file",{name:g,dir:b,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(f)}),f.entriesCount=h}catch(g){f.error(g)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),a=n("./external"),o=n("./utf8"),l=n("./zipEntries"),c=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function h(g){return new a.Promise(function(p,m){var d=g.decompressed.getContentWorker().pipe(new c);d.on("error",function(b){m(b)}).on("end",function(){d.streamInfo.crc32!==g.decompressed.crc32?m(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}r.exports=function(g,p){var m=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),f.isNode&&f.isStream(g)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",g,!0,p.optimizedBinaryString,p.base64).then(function(d){var b=new l(p);return b.load(d),b}).then(function(d){var b=[a.Promise.resolve(d)],v=d.files;if(p.checkCRC32)for(var w=0;w<v.length;w++)b.push(h(v[w]));return a.Promise.all(b)}).then(function(d){for(var b=d.shift(),v=b.files,w=0;w<v.length;w++){var C=v[w],E=C.fileNameStr,I=s.resolve(C.fileNameStr);m.file(I,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:p.createFolders}),C.dir||(m.file(I).unsafeOriginalName=E)}return b.zipComment.length&&(m.comment=b.zipComment),m})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),a=n("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var f=this;o.on("data",function(h,g){f.push(h)||f._helper.pause(),c&&c(g)}).on("error",function(h){f.emit("error",h)}).on("end",function(){f.push(null)})}n("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},r.exports=a},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(I,M,B){var G,N=o.getTypeOf(M),W=o.extend(B||{},f);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(I=v(I)),W.createFolders&&(G=b(I))&&w.call(this,G,!0);var ee=N==="string"&&W.binary===!1&&W.base64===!1;B&&B.binary!==void 0||(W.binary=!ee),(M instanceof h&&M.uncompressedSize===0||W.dir||!M||M.length===0)&&(W.base64=!1,W.binary=!0,M="",W.compression="STORE",N="string");var S=null;S=M instanceof h||M instanceof l?M:m.isNode&&m.isStream(M)?new d(I,M):o.prepareContent(I,M,W.binary,W.optimizedBinaryString,W.base64);var j=new g(I,S,W);this.files[I]=j}var a=n("./utf8"),o=n("./utils"),l=n("./stream/GenericWorker"),c=n("./stream/StreamHelper"),f=n("./defaults"),h=n("./compressedObject"),g=n("./zipObject"),p=n("./generate"),m=n("./nodejsUtils"),d=n("./nodejs/NodejsStreamInputAdapter"),b=function(I){I.slice(-1)==="/"&&(I=I.substring(0,I.length-1));var M=I.lastIndexOf("/");return 0<M?I.substring(0,M):""},v=function(I){return I.slice(-1)!=="/"&&(I+="/"),I},w=function(I,M){return M=M!==void 0?M:f.createFolders,I=v(I),this.files[I]||s.call(this,I,null,{dir:!0,createFolders:M}),this.files[I]};function C(I){return Object.prototype.toString.call(I)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(I){var M,B,G;for(M in this.files)G=this.files[M],(B=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&I(B,G)},filter:function(I){var M=[];return this.forEach(function(B,G){I(B,G)&&M.push(G)}),M},file:function(I,M,B){if(arguments.length!==1)return I=this.root+I,s.call(this,I,M,B),this;if(C(I)){var G=I;return this.filter(function(W,ee){return!ee.dir&&G.test(W)})}var N=this.files[this.root+I];return N&&!N.dir?N:null},folder:function(I){if(!I)return this;if(C(I))return this.filter(function(N,W){return W.dir&&I.test(N)});var M=this.root+I,B=w.call(this,M),G=this.clone();return G.root=B.name,G},remove:function(I){I=this.root+I;var M=this.files[I];if(M||(I.slice(-1)!=="/"&&(I+="/"),M=this.files[I]),M&&!M.dir)delete this.files[I];else for(var B=this.filter(function(N,W){return W.name.slice(0,I.length)===I}),G=0;G<B.length;G++)delete this.files[B[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(I){var M,B={};try{if((B=o.extend(I||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");o.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var G=B.comment||this.comment||"";M=p.generateWorker(this,B,G)}catch(N){(M=new l("error")).error(N)}return new c(M,B.type||"string",B.mimeType)},generateAsync:function(I,M){return this.generateInternalStream(I).accumulate(M)},generateNodeStream:function(I,M){return(I=I||{}).type||(I.type="nodebuffer"),this.generateInternalStream(I).toNodejsStream(M)}};r.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}n("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===l&&this.data[g+1]===c&&this.data[g+2]===f&&this.data[g+3]===h)return g-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),g=this.readData(4);return l===g[0]&&c===g[1]&&f===g[2]&&h===g[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=a},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),a=n("../support"),o=n("./ArrayReader"),l=n("./StringReader"),c=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");r.exports=function(h){var g=s.getTypeOf(h);return s.checkSupport(g),g!=="string"||a.uint8array?g==="nodebuffer"?new c(h):a.uint8array?new f(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),a=n("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),a=n("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),a=n("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),a=n("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=s.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),a=n("./ConvertWorker"),o=n("./GenericWorker"),l=n("../base64"),c=n("../support"),f=n("../external"),h=null;if(c.nodestream)try{h=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(m,d){return new f.Promise(function(b,v){var w=[],C=m._internalType,E=m._outputType,I=m._mimeType;m.on("data",function(M,B){w.push(M),d&&d(B)}).on("error",function(M){w=[],v(M)}).on("end",function(){try{var M=(function(B,G,N){switch(B){case"blob":return s.newBlob(s.transformTo("arraybuffer",G),N);case"base64":return l.encode(G);default:return s.transformTo(B,G)}})(E,(function(B,G){var N,W=0,ee=null,S=0;for(N=0;N<G.length;N++)S+=G[N].length;switch(B){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(ee=new Uint8Array(S),N=0;N<G.length;N++)ee.set(G[N],W),W+=G[N].length;return ee;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+B+"'")}})(C,w),I);b(M)}catch(B){v(B)}w=[]}).resume()})}function p(m,d,b){var v=d;switch(d){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=d,this._mimeType=b,s.checkSupport(v),this._worker=m.pipe(new a(v)),m.lock()}catch(w){this._worker=new o("error"),this._worker.error(w)}}p.prototype={accumulate:function(m){return g(this,m)},on:function(m,d){var b=this;return m==="data"?this._worker.on(m,function(v){d.call(b,v.data,v.meta)}):this._worker.on(m,function(){s.delay(d,arguments,b)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(m){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},m)}},r.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),a=n("./support"),o=n("./nodejsUtils"),l=n("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function g(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return a.nodebuffer?o.newBufferFrom(p,"utf-8"):(function(m){var d,b,v,w,C,E=m.length,I=0;for(w=0;w<E;w++)(64512&(b=m.charCodeAt(w)))==55296&&w+1<E&&(64512&(v=m.charCodeAt(w+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),w++),I+=b<128?1:b<2048?2:b<65536?3:4;for(d=a.uint8array?new Uint8Array(I):new Array(I),w=C=0;C<I;w++)(64512&(b=m.charCodeAt(w)))==55296&&w+1<E&&(64512&(v=m.charCodeAt(w+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),w++),b<128?d[C++]=b:(b<2048?d[C++]=192|b>>>6:(b<65536?d[C++]=224|b>>>12:(d[C++]=240|b>>>18,d[C++]=128|b>>>12&63),d[C++]=128|b>>>6&63),d[C++]=128|63&b);return d})(p)},i.utf8decode=function(p){return a.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):(function(m){var d,b,v,w,C=m.length,E=new Array(2*C);for(d=b=0;d<C;)if((v=m[d++])<128)E[b++]=v;else if(4<(w=c[v]))E[b++]=65533,d+=w-1;else{for(v&=w===2?31:w===3?15:7;1<w&&d<C;)v=v<<6|63&m[d++],w--;1<w?E[b++]=65533:v<65536?E[b++]=v:(v-=65536,E[b++]=55296|v>>10&1023,E[b++]=56320|1023&v)}return E.length!==b&&(E.subarray?E=E.subarray(0,b):E.length=b),s.applyFromCharCode(E)})(p=s.transformTo(a.uint8array?"uint8array":"array",p))},s.inherits(h,l),h.prototype.processChunk=function(p){var m=s.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var d=m;(m=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),m.set(d,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var b=(function(w,C){var E;for((C=C||w.length)>w.length&&(C=w.length),E=C-1;0<=E&&(192&w[E])==128;)E--;return E<0||E===0?C:E+c[w[E]]>C?E:C})(m),v=m;b!==m.length&&(a.uint8array?(v=m.subarray(0,b),this.leftOver=m.subarray(b,m.length)):(v=m.slice(0,b),this.leftOver=m.slice(b,m.length))),this.push({data:i.utf8decode(v),meta:p.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,s.inherits(g,l),g.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),a=n("./base64"),o=n("./nodejsUtils"),l=n("./external");function c(d){return d}function f(d,b){for(var v=0;v<d.length;++v)b[v]=255&d.charCodeAt(v);return b}n("setimmediate"),i.newBlob=function(d,b){i.checkSupport("blob");try{return new Blob([d],{type:b})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(d),v.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(d,b,v){var w=[],C=0,E=d.length;if(E<=v)return String.fromCharCode.apply(null,d);for(;C<E;)b==="array"||b==="nodebuffer"?w.push(String.fromCharCode.apply(null,d.slice(C,Math.min(C+v,E)))):w.push(String.fromCharCode.apply(null,d.subarray(C,Math.min(C+v,E)))),C+=v;return w.join("")},stringifyByChar:function(d){for(var b="",v=0;v<d.length;v++)b+=String.fromCharCode(d[v]);return b},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function g(d){var b=65536,v=i.getTypeOf(d),w=!0;if(v==="uint8array"?w=h.applyCanBeUsed.uint8array:v==="nodebuffer"&&(w=h.applyCanBeUsed.nodebuffer),w)for(;1<b;)try{return h.stringifyByChunk(d,v,b)}catch{b=Math.floor(b/2)}return h.stringifyByChar(d)}function p(d,b){for(var v=0;v<d.length;v++)b[v]=d[v];return b}i.applyFromCharCode=g;var m={};m.string={string:c,array:function(d){return f(d,new Array(d.length))},arraybuffer:function(d){return m.string.uint8array(d).buffer},uint8array:function(d){return f(d,new Uint8Array(d.length))},nodebuffer:function(d){return f(d,o.allocBuffer(d.length))}},m.array={string:g,array:c,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(d)}},m.arraybuffer={string:function(d){return g(new Uint8Array(d))},array:function(d){return p(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:c,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(new Uint8Array(d))}},m.uint8array={string:g,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:c,nodebuffer:function(d){return o.newBufferFrom(d)}},m.nodebuffer={string:g,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return m.nodebuffer.uint8array(d).buffer},uint8array:function(d){return p(d,new Uint8Array(d.length))},nodebuffer:c},i.transformTo=function(d,b){if(b=b||"",!d)return b;i.checkSupport(d);var v=i.getTypeOf(b);return m[v][d](b)},i.resolve=function(d){for(var b=d.split("/"),v=[],w=0;w<b.length;w++){var C=b[w];C==="."||C===""&&w!==0&&w!==b.length-1||(C===".."?v.pop():v.push(C))}return v.join("/")},i.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(d)?"nodebuffer":s.uint8array&&d instanceof Uint8Array?"uint8array":s.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(d){if(!s[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(d){var b,v,w="";for(v=0;v<(d||"").length;v++)w+="\\x"+((b=d.charCodeAt(v))<16?"0":"")+b.toString(16).toUpperCase();return w},i.delay=function(d,b,v){setImmediate(function(){d.apply(v||null,b||[])})},i.inherits=function(d,b){function v(){}v.prototype=b.prototype,d.prototype=new v},i.extend=function(){var d,b,v={};for(d=0;d<arguments.length;d++)for(b in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],b)&&v[b]===void 0&&(v[b]=arguments[d][b]);return v},i.prepareContent=function(d,b,v,w,C){return l.Promise.resolve(b).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(I,M){var B=new FileReader;B.onload=function(G){I(G.target.result)},B.onerror=function(G){M(G.target.error)},B.readAsArrayBuffer(E)}):E}).then(function(E){var I=i.getTypeOf(E);return I?(I==="arraybuffer"?E=i.transformTo("uint8array",E):I==="string"&&(C?E=a.decode(E):v&&w!==!0&&(E=(function(M){return f(M,s.uint8array?new Uint8Array(M.length):new Array(M.length))})(E))),E):l.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),a=n("./utils"),o=n("./signature"),l=n("./zipEntry"),c=n("./support");function f(h){this.files=[],this.loadOptions=h}f.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(g)+", expected "+a.pretty(h)+")")}},isSignature:function(h,g){var p=this.reader.index;this.reader.setIndex(h);var m=this.reader.readString(4)===g;return this.reader.setIndex(p),m},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),g=c.uint8array?"uint8array":"array",p=a.transformTo(g,h);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,g,p,m=this.zip64EndOfCentralSize-44;0<m;)h=this.reader.readInt(2),g=this.reader.readInt(4),p=this.reader.readData(g),this.zip64ExtensibleData[h]={id:h,length:g,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,g;for(h=0;h<this.files.length;h++)g=this.files[h],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var g=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var m=g-p;if(0<m)this.isSignature(g,o.CENTRAL_FILE_HEADER)||(this.reader.zero=m);else if(m<0)throw new Error("Corrupted zip: missing "+Math.abs(m)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),a=n("./utils"),o=n("./compressedObject"),l=n("./crc32"),c=n("./utf8"),f=n("./compressions"),h=n("./support");function g(p,m){this.options=p,this.loadOptions=m}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var m,d;if(p.skip(22),this.fileNameLength=p.readInt(2),d=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((m=(function(b){for(var v in f)if(Object.prototype.hasOwnProperty.call(f,v)&&f[v].magic===b)return f[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,m,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var m=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(m),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var m,d,b,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)m=p.readInt(2),d=p.readInt(2),b=p.readData(d),this.extraFields[m]={id:m,length:d,value:b};p.setIndex(v)},handleUTF8:function(){var p=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var d=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var v=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var m=s(p.value);return m.readInt(1)!==1||l(this.fileName)!==m.readInt(4)?null:c.utf8decode(m.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var m=s(p.value);return m.readInt(1)!==1||l(this.fileComment)!==m.readInt(4)?null:c.utf8decode(m.readData(p.length-5))}return null}},r.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(m,d,b){this.name=m,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=d,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var a=n("./stream/StreamHelper"),o=n("./stream/DataWorker"),l=n("./utf8"),c=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(m){var d=null,b="string";try{if(!m)throw new Error("No output type specified.");var v=(b=m.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),d=this._decompressWorker();var w=!this._dataBinary;w&&!v&&(d=d.pipe(new l.Utf8EncodeWorker)),!w&&v&&(d=d.pipe(new l.Utf8DecodeWorker))}catch(C){(d=new f("error")).error(C)}return new a(d,b,"")},async:function(m,d){return this.internalStream(m).accumulate(d)},nodeStream:function(m,d){return this.internalStream(m||"nodebuffer").toNodejsStream(d)},_compressWorker:function(m,d){if(this._data instanceof c&&this._data.compression.magic===m.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(b,m,d)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<h.length;p++)s.prototype[h[p]]=g;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,f=new l(m),h=s.document.createTextNode("");f.observe(h,{characterData:!0}),a=function(){h.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var d=s.document.createElement("script");d.onreadystatechange=function(){m(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},s.document.documentElement.appendChild(d)}:function(){setTimeout(m,0)};else{var g=new s.MessageChannel;g.port1.onmessage=m,a=function(){g.port2.postMessage(0)}}var p=[];function m(){var d,b;o=!0;for(var v=p.length;v;){for(b=p,p=[],d=-1;++d<v;)b[d]();v=p.length}o=!1}r.exports=function(d){p.push(d)!==1||o||a()}}).call(this,typeof qt<"u"?qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function h(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,v!==a&&d(this,v)}function g(v,w,C){this.promise=v,typeof w=="function"&&(this.onFulfilled=w,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function p(v,w,C){s(function(){var E;try{E=w(C)}catch(I){return o.reject(v,I)}E===v?o.reject(v,new TypeError("Cannot resolve promise with itself")):o.resolve(v,E)})}function m(v){var w=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof w=="function")return function(){w.apply(v,arguments)}}function d(v,w){var C=!1;function E(B){C||(C=!0,o.reject(v,B))}function I(B){C||(C=!0,o.resolve(v,B))}var M=b(function(){w(I,E)});M.status==="error"&&E(M.value)}function b(v,w){var C={};try{C.value=v(w),C.status="success"}catch(E){C.status="error",C.value=E}return C}(r.exports=h).prototype.finally=function(v){if(typeof v!="function")return this;var w=this.constructor;return this.then(function(C){return w.resolve(v()).then(function(){return C})},function(C){return w.resolve(v()).then(function(){throw C})})},h.prototype.catch=function(v){return this.then(null,v)},h.prototype.then=function(v,w){if(typeof v!="function"&&this.state===c||typeof w!="function"&&this.state===l)return this;var C=new this.constructor(a);return this.state!==f?p(C,this.state===c?v:w,this.outcome):this.queue.push(new g(C,v,w)),C},g.prototype.callFulfilled=function(v){o.resolve(this.promise,v)},g.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},g.prototype.callRejected=function(v){o.reject(this.promise,v)},g.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},o.resolve=function(v,w){var C=b(m,w);if(C.status==="error")return o.reject(v,C.value);var E=C.value;if(E)d(v,E);else{v.state=c,v.outcome=w;for(var I=-1,M=v.queue.length;++I<M;)v.queue[I].callFulfilled(w)}return v},o.reject=function(v,w){v.state=l,v.outcome=w;for(var C=-1,E=v.queue.length;++C<E;)v.queue[C].callRejected(w);return v},h.resolve=function(v){return v instanceof this?v:o.resolve(new this(a),v)},h.reject=function(v){var w=new this(a);return o.reject(w,v)},h.all=function(v){var w=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=v.length,E=!1;if(!C)return this.resolve([]);for(var I=new Array(C),M=0,B=-1,G=new this(a);++B<C;)N(v[B],B);return G;function N(W,ee){w.resolve(W).then(function(S){I[ee]=S,++M!==C||E||(E=!0,o.resolve(G,I))},function(S){E||(E=!0,o.reject(G,S))})}},h.race=function(v){var w=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=v.length,E=!1;if(!C)return this.resolve([]);for(var I=-1,M=new this(a);++I<C;)B=v[I],w.resolve(B).then(function(G){E||(E=!0,o.resolve(M,G))},function(G){E||(E=!0,o.reject(M,G))});var B;return M}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),a=n("./utils/common"),o=n("./utils/strings"),l=n("./zlib/messages"),c=n("./zlib/zstream"),f=Object.prototype.toString,h=0,g=-1,p=0,m=8;function d(v){if(!(this instanceof d))return new d(v);this.options=a.assign({level:g,method:m,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var w=this.options;w.raw&&0<w.windowBits?w.windowBits=-w.windowBits:w.gzip&&0<w.windowBits&&w.windowBits<16&&(w.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,w.level,w.method,w.windowBits,w.memLevel,w.strategy);if(C!==h)throw new Error(l[C]);if(w.header&&s.deflateSetHeader(this.strm,w.header),w.dictionary){var E;if(E=typeof w.dictionary=="string"?o.string2buf(w.dictionary):f.call(w.dictionary)==="[object ArrayBuffer]"?new Uint8Array(w.dictionary):w.dictionary,(C=s.deflateSetDictionary(this.strm,E))!==h)throw new Error(l[C]);this._dict_set=!0}}function b(v,w){var C=new d(w);if(C.push(v,!0),C.err)throw C.msg||l[C.err];return C.result}d.prototype.push=function(v,w){var C,E,I=this.strm,M=this.options.chunkSize;if(this.ended)return!1;E=w===~~w?w:w===!0?4:0,typeof v=="string"?I.input=o.string2buf(v):f.call(v)==="[object ArrayBuffer]"?I.input=new Uint8Array(v):I.input=v,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new a.Buf8(M),I.next_out=0,I.avail_out=M),(C=s.deflate(I,E))!==1&&C!==h)return this.onEnd(C),!(this.ended=!0);I.avail_out!==0&&(I.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(I.output,I.next_out))):this.onData(a.shrinkBuf(I.output,I.next_out)))}while((0<I.avail_in||I.avail_out===0)&&C!==1);return E===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===h):E!==2||(this.onEnd(h),!(I.avail_out=0))},d.prototype.onData=function(v){this.chunks.push(v)},d.prototype.onEnd=function(v){v===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Deflate=d,i.deflate=b,i.deflateRaw=function(v,w){return(w=w||{}).raw=!0,b(v,w)},i.gzip=function(v,w){return(w=w||{}).gzip=!0,b(v,w)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),a=n("./utils/common"),o=n("./utils/strings"),l=n("./zlib/constants"),c=n("./zlib/messages"),f=n("./zlib/zstream"),h=n("./zlib/gzheader"),g=Object.prototype.toString;function p(d){if(!(this instanceof p))return new p(d);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},d||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||d&&d.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var v=s.inflateInit2(this.strm,b.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function m(d,b){var v=new p(b);if(v.push(d,!0),v.err)throw v.msg||c[v.err];return v.result}p.prototype.push=function(d,b){var v,w,C,E,I,M,B=this.strm,G=this.options.chunkSize,N=this.options.dictionary,W=!1;if(this.ended)return!1;w=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof d=="string"?B.input=o.binstring2buf(d):g.call(d)==="[object ArrayBuffer]"?B.input=new Uint8Array(d):B.input=d,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new a.Buf8(G),B.next_out=0,B.avail_out=G),(v=s.inflate(B,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&N&&(M=typeof N=="string"?o.string2buf(N):g.call(N)==="[object ArrayBuffer]"?new Uint8Array(N):N,v=s.inflateSetDictionary(this.strm,M)),v===l.Z_BUF_ERROR&&W===!0&&(v=l.Z_OK,W=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&v!==l.Z_STREAM_END&&(B.avail_in!==0||w!==l.Z_FINISH&&w!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=o.utf8border(B.output,B.next_out),E=B.next_out-C,I=o.buf2string(B.output,C),B.next_out=E,B.avail_out=G-E,E&&a.arraySet(B.output,B.output,C,E,0),this.onData(I)):this.onData(a.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(W=!0)}while((0<B.avail_in||B.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(w=l.Z_FINISH),w===l.Z_FINISH?(v=s.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):w!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(B.avail_out=0))},p.prototype.onData=function(d){this.chunks.push(d)},p.prototype.onEnd=function(d){d===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},i.Inflate=p,i.inflate=m,i.inflateRaw=function(d,b){return(b=b||{}).raw=!0,m(d,b)},i.ungzip=m},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var h in f)f.hasOwnProperty(h)&&(l[h]=f[h])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,f,h,g){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+h),g);else for(var p=0;p<h;p++)l[g+p]=c[f+p]},flattenChunks:function(l){var c,f,h,g,p,m;for(c=h=0,f=l.length;c<f;c++)h+=l[c].length;for(m=new Uint8Array(h),c=g=0,f=l.length;c<f;c++)p=l[c],m.set(p,g),g+=p.length;return m}},o={arraySet:function(l,c,f,h,g){for(var p=0;p<h;p++)l[g+p]=c[f+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,o))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(h,g){if(g<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,g));for(var p="",m=0;m<g;m++)p+=String.fromCharCode(h[m]);return p}l[254]=l[254]=1,i.string2buf=function(h){var g,p,m,d,b,v=h.length,w=0;for(d=0;d<v;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<v&&(64512&(m=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(m-56320),d++),w+=p<128?1:p<2048?2:p<65536?3:4;for(g=new s.Buf8(w),d=b=0;b<w;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<v&&(64512&(m=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(m-56320),d++),p<128?g[b++]=p:(p<2048?g[b++]=192|p>>>6:(p<65536?g[b++]=224|p>>>12:(g[b++]=240|p>>>18,g[b++]=128|p>>>12&63),g[b++]=128|p>>>6&63),g[b++]=128|63&p);return g},i.buf2binstring=function(h){return f(h,h.length)},i.binstring2buf=function(h){for(var g=new s.Buf8(h.length),p=0,m=g.length;p<m;p++)g[p]=h.charCodeAt(p);return g},i.buf2string=function(h,g){var p,m,d,b,v=g||h.length,w=new Array(2*v);for(p=m=0;p<v;)if((d=h[p++])<128)w[m++]=d;else if(4<(b=l[d]))w[m++]=65533,p+=b-1;else{for(d&=b===2?31:b===3?15:7;1<b&&p<v;)d=d<<6|63&h[p++],b--;1<b?w[m++]=65533:d<65536?w[m++]=d:(d-=65536,w[m++]=55296|d>>10&1023,w[m++]=56320|1023&d)}return f(w,m)},i.utf8border=function(h,g){var p;for((g=g||h.length)>h.length&&(g=h.length),p=g-1;0<=p&&(192&h[p])==128;)p--;return p<0||p===0?g:p+l[h[p]]>g?p:g}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,a,o,l){for(var c=65535&s|0,f=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;f=f+(c=c+a[l++]|0)|0,--h;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();r.exports=function(a,o,l,c){var f=s,h=c+l;a^=-1;for(var g=c;g<h;g++)a=a>>>8^f[255&(a^o[g])];return-1^a}},{}],46:[function(n,r,i){var s,a=n("../utils/common"),o=n("./trees"),l=n("./adler32"),c=n("./crc32"),f=n("./messages"),h=0,g=4,p=0,m=-2,d=-1,b=4,v=2,w=8,C=9,E=286,I=30,M=19,B=2*E+1,G=15,N=3,W=258,ee=W+N+1,S=42,j=113,y=1,q=2,se=3,V=4;function ie(u,T){return u.msg=f[T],T}function X(u){return(u<<1)-(4<u?9:0)}function ae(u){for(var T=u.length;0<=--T;)u[T]=0}function $(u){var T=u.state,R=T.pending;R>u.avail_out&&(R=u.avail_out),R!==0&&(a.arraySet(u.output,T.pending_buf,T.pending_out,R,u.next_out),u.next_out+=R,T.pending_out+=R,u.total_out+=R,u.avail_out-=R,T.pending-=R,T.pending===0&&(T.pending_out=0))}function L(u,T){o._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,T),u.block_start=u.strstart,$(u.strm)}function le(u,T){u.pending_buf[u.pending++]=T}function ne(u,T){u.pending_buf[u.pending++]=T>>>8&255,u.pending_buf[u.pending++]=255&T}function Q(u,T){var R,_,x=u.max_chain_length,P=u.strstart,F=u.prev_length,D=u.nice_match,O=u.strstart>u.w_size-ee?u.strstart-(u.w_size-ee):0,z=u.window,K=u.w_mask,U=u.prev,Y=u.strstart+W,ue=z[P+F-1],oe=z[P+F];u.prev_length>=u.good_match&&(x>>=2),D>u.lookahead&&(D=u.lookahead);do if(z[(R=T)+F]===oe&&z[R+F-1]===ue&&z[R]===z[P]&&z[++R]===z[P+1]){P+=2,R++;do;while(z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&z[++P]===z[++R]&&P<Y);if(_=W-(Y-P),P=Y-W,F<_){if(u.match_start=T,D<=(F=_))break;ue=z[P+F-1],oe=z[P+F]}}while((T=U[T&K])>O&&--x!=0);return F<=u.lookahead?F:u.lookahead}function me(u){var T,R,_,x,P,F,D,O,z,K,U=u.w_size;do{if(x=u.window_size-u.lookahead-u.strstart,u.strstart>=U+(U-ee)){for(a.arraySet(u.window,u.window,U,U,0),u.match_start-=U,u.strstart-=U,u.block_start-=U,T=R=u.hash_size;_=u.head[--T],u.head[T]=U<=_?_-U:0,--R;);for(T=R=U;_=u.prev[--T],u.prev[T]=U<=_?_-U:0,--R;);x+=U}if(u.strm.avail_in===0)break;if(F=u.strm,D=u.window,O=u.strstart+u.lookahead,z=x,K=void 0,K=F.avail_in,z<K&&(K=z),R=K===0?0:(F.avail_in-=K,a.arraySet(D,F.input,F.next_in,K,O),F.state.wrap===1?F.adler=l(F.adler,D,K,O):F.state.wrap===2&&(F.adler=c(F.adler,D,K,O)),F.next_in+=K,F.total_in+=K,K),u.lookahead+=R,u.lookahead+u.insert>=N)for(P=u.strstart-u.insert,u.ins_h=u.window[P],u.ins_h=(u.ins_h<<u.hash_shift^u.window[P+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[P+N-1])&u.hash_mask,u.prev[P&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=P,P++,u.insert--,!(u.lookahead+u.insert<N)););}while(u.lookahead<ee&&u.strm.avail_in!==0)}function H(u,T){for(var R,_;;){if(u.lookahead<ee){if(me(u),u.lookahead<ee&&T===h)return y;if(u.lookahead===0)break}if(R=0,u.lookahead>=N&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+N-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),R!==0&&u.strstart-R<=u.w_size-ee&&(u.match_length=Q(u,R)),u.match_length>=N)if(_=o._tr_tally(u,u.strstart-u.match_start,u.match_length-N),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=N){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+N-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else _=o._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(_&&(L(u,!1),u.strm.avail_out===0))return y}return u.insert=u.strstart<N-1?u.strstart:N-1,T===g?(L(u,!0),u.strm.avail_out===0?se:V):u.last_lit&&(L(u,!1),u.strm.avail_out===0)?y:q}function J(u,T){for(var R,_,x;;){if(u.lookahead<ee){if(me(u),u.lookahead<ee&&T===h)return y;if(u.lookahead===0)break}if(R=0,u.lookahead>=N&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+N-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=N-1,R!==0&&u.prev_length<u.max_lazy_match&&u.strstart-R<=u.w_size-ee&&(u.match_length=Q(u,R),u.match_length<=5&&(u.strategy===1||u.match_length===N&&4096<u.strstart-u.match_start)&&(u.match_length=N-1)),u.prev_length>=N&&u.match_length<=u.prev_length){for(x=u.strstart+u.lookahead-N,_=o._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-N),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=x&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+N-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=N-1,u.strstart++,_&&(L(u,!1),u.strm.avail_out===0))return y}else if(u.match_available){if((_=o._tr_tally(u,0,u.window[u.strstart-1]))&&L(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return y}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(_=o._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<N-1?u.strstart:N-1,T===g?(L(u,!0),u.strm.avail_out===0?se:V):u.last_lit&&(L(u,!1),u.strm.avail_out===0)?y:q}function Z(u,T,R,_,x){this.good_length=u,this.max_lazy=T,this.nice_length=R,this.max_chain=_,this.func=x}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=w,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*B),this.dyn_dtree=new a.Buf16(2*(2*I+1)),this.bl_tree=new a.Buf16(2*(2*M+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(G+1),this.heap=new a.Buf16(2*E+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ce(u){var T;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=v,(T=u.state).pending=0,T.pending_out=0,T.wrap<0&&(T.wrap=-T.wrap),T.status=T.wrap?S:j,u.adler=T.wrap===2?0:1,T.last_flush=h,o._tr_init(T),p):ie(u,m)}function A(u){var T=ce(u);return T===p&&(function(R){R.window_size=2*R.w_size,ae(R.head),R.max_lazy_match=s[R.level].max_lazy,R.good_match=s[R.level].good_length,R.nice_match=s[R.level].nice_length,R.max_chain_length=s[R.level].max_chain,R.strstart=0,R.block_start=0,R.lookahead=0,R.insert=0,R.match_length=R.prev_length=N-1,R.match_available=0,R.ins_h=0})(u.state),T}function k(u,T,R,_,x,P){if(!u)return m;var F=1;if(T===d&&(T=6),_<0?(F=0,_=-_):15<_&&(F=2,_-=16),x<1||C<x||R!==w||_<8||15<_||T<0||9<T||P<0||b<P)return ie(u,m);_===8&&(_=9);var D=new re;return(u.state=D).strm=u,D.wrap=F,D.gzhead=null,D.w_bits=_,D.w_size=1<<D.w_bits,D.w_mask=D.w_size-1,D.hash_bits=x+7,D.hash_size=1<<D.hash_bits,D.hash_mask=D.hash_size-1,D.hash_shift=~~((D.hash_bits+N-1)/N),D.window=new a.Buf8(2*D.w_size),D.head=new a.Buf16(D.hash_size),D.prev=new a.Buf16(D.w_size),D.lit_bufsize=1<<x+6,D.pending_buf_size=4*D.lit_bufsize,D.pending_buf=new a.Buf8(D.pending_buf_size),D.d_buf=1*D.lit_bufsize,D.l_buf=3*D.lit_bufsize,D.level=T,D.strategy=P,D.method=R,A(u)}s=[new Z(0,0,0,0,function(u,T){var R=65535;for(R>u.pending_buf_size-5&&(R=u.pending_buf_size-5);;){if(u.lookahead<=1){if(me(u),u.lookahead===0&&T===h)return y;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var _=u.block_start+R;if((u.strstart===0||u.strstart>=_)&&(u.lookahead=u.strstart-_,u.strstart=_,L(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-ee&&(L(u,!1),u.strm.avail_out===0))return y}return u.insert=0,T===g?(L(u,!0),u.strm.avail_out===0?se:V):(u.strstart>u.block_start&&(L(u,!1),u.strm.avail_out),y)}),new Z(4,4,8,4,H),new Z(4,5,16,8,H),new Z(4,6,32,32,H),new Z(4,4,16,16,J),new Z(8,16,32,32,J),new Z(8,16,128,128,J),new Z(8,32,128,256,J),new Z(32,128,258,1024,J),new Z(32,258,258,4096,J)],i.deflateInit=function(u,T){return k(u,T,w,15,8,0)},i.deflateInit2=k,i.deflateReset=A,i.deflateResetKeep=ce,i.deflateSetHeader=function(u,T){return u&&u.state?u.state.wrap!==2?m:(u.state.gzhead=T,p):m},i.deflate=function(u,T){var R,_,x,P;if(!u||!u.state||5<T||T<0)return u?ie(u,m):m;if(_=u.state,!u.output||!u.input&&u.avail_in!==0||_.status===666&&T!==g)return ie(u,u.avail_out===0?-5:m);if(_.strm=u,R=_.last_flush,_.last_flush=T,_.status===S)if(_.wrap===2)u.adler=0,le(_,31),le(_,139),le(_,8),_.gzhead?(le(_,(_.gzhead.text?1:0)+(_.gzhead.hcrc?2:0)+(_.gzhead.extra?4:0)+(_.gzhead.name?8:0)+(_.gzhead.comment?16:0)),le(_,255&_.gzhead.time),le(_,_.gzhead.time>>8&255),le(_,_.gzhead.time>>16&255),le(_,_.gzhead.time>>24&255),le(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),le(_,255&_.gzhead.os),_.gzhead.extra&&_.gzhead.extra.length&&(le(_,255&_.gzhead.extra.length),le(_,_.gzhead.extra.length>>8&255)),_.gzhead.hcrc&&(u.adler=c(u.adler,_.pending_buf,_.pending,0)),_.gzindex=0,_.status=69):(le(_,0),le(_,0),le(_,0),le(_,0),le(_,0),le(_,_.level===9?2:2<=_.strategy||_.level<2?4:0),le(_,3),_.status=j);else{var F=w+(_.w_bits-8<<4)<<8;F|=(2<=_.strategy||_.level<2?0:_.level<6?1:_.level===6?2:3)<<6,_.strstart!==0&&(F|=32),F+=31-F%31,_.status=j,ne(_,F),_.strstart!==0&&(ne(_,u.adler>>>16),ne(_,65535&u.adler)),u.adler=1}if(_.status===69)if(_.gzhead.extra){for(x=_.pending;_.gzindex<(65535&_.gzhead.extra.length)&&(_.pending!==_.pending_buf_size||(_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),$(u),x=_.pending,_.pending!==_.pending_buf_size));)le(_,255&_.gzhead.extra[_.gzindex]),_.gzindex++;_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),_.gzindex===_.gzhead.extra.length&&(_.gzindex=0,_.status=73)}else _.status=73;if(_.status===73)if(_.gzhead.name){x=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),$(u),x=_.pending,_.pending===_.pending_buf_size)){P=1;break}P=_.gzindex<_.gzhead.name.length?255&_.gzhead.name.charCodeAt(_.gzindex++):0,le(_,P)}while(P!==0);_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),P===0&&(_.gzindex=0,_.status=91)}else _.status=91;if(_.status===91)if(_.gzhead.comment){x=_.pending;do{if(_.pending===_.pending_buf_size&&(_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),$(u),x=_.pending,_.pending===_.pending_buf_size)){P=1;break}P=_.gzindex<_.gzhead.comment.length?255&_.gzhead.comment.charCodeAt(_.gzindex++):0,le(_,P)}while(P!==0);_.gzhead.hcrc&&_.pending>x&&(u.adler=c(u.adler,_.pending_buf,_.pending-x,x)),P===0&&(_.status=103)}else _.status=103;if(_.status===103&&(_.gzhead.hcrc?(_.pending+2>_.pending_buf_size&&$(u),_.pending+2<=_.pending_buf_size&&(le(_,255&u.adler),le(_,u.adler>>8&255),u.adler=0,_.status=j)):_.status=j),_.pending!==0){if($(u),u.avail_out===0)return _.last_flush=-1,p}else if(u.avail_in===0&&X(T)<=X(R)&&T!==g)return ie(u,-5);if(_.status===666&&u.avail_in!==0)return ie(u,-5);if(u.avail_in!==0||_.lookahead!==0||T!==h&&_.status!==666){var D=_.strategy===2?(function(O,z){for(var K;;){if(O.lookahead===0&&(me(O),O.lookahead===0)){if(z===h)return y;break}if(O.match_length=0,K=o._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++,K&&(L(O,!1),O.strm.avail_out===0))return y}return O.insert=0,z===g?(L(O,!0),O.strm.avail_out===0?se:V):O.last_lit&&(L(O,!1),O.strm.avail_out===0)?y:q})(_,T):_.strategy===3?(function(O,z){for(var K,U,Y,ue,oe=O.window;;){if(O.lookahead<=W){if(me(O),O.lookahead<=W&&z===h)return y;if(O.lookahead===0)break}if(O.match_length=0,O.lookahead>=N&&0<O.strstart&&(U=oe[Y=O.strstart-1])===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]){ue=O.strstart+W;do;while(U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&U===oe[++Y]&&Y<ue);O.match_length=W-(ue-Y),O.match_length>O.lookahead&&(O.match_length=O.lookahead)}if(O.match_length>=N?(K=o._tr_tally(O,1,O.match_length-N),O.lookahead-=O.match_length,O.strstart+=O.match_length,O.match_length=0):(K=o._tr_tally(O,0,O.window[O.strstart]),O.lookahead--,O.strstart++),K&&(L(O,!1),O.strm.avail_out===0))return y}return O.insert=0,z===g?(L(O,!0),O.strm.avail_out===0?se:V):O.last_lit&&(L(O,!1),O.strm.avail_out===0)?y:q})(_,T):s[_.level].func(_,T);if(D!==se&&D!==V||(_.status=666),D===y||D===se)return u.avail_out===0&&(_.last_flush=-1),p;if(D===q&&(T===1?o._tr_align(_):T!==5&&(o._tr_stored_block(_,0,0,!1),T===3&&(ae(_.head),_.lookahead===0&&(_.strstart=0,_.block_start=0,_.insert=0))),$(u),u.avail_out===0))return _.last_flush=-1,p}return T!==g?p:_.wrap<=0?1:(_.wrap===2?(le(_,255&u.adler),le(_,u.adler>>8&255),le(_,u.adler>>16&255),le(_,u.adler>>24&255),le(_,255&u.total_in),le(_,u.total_in>>8&255),le(_,u.total_in>>16&255),le(_,u.total_in>>24&255)):(ne(_,u.adler>>>16),ne(_,65535&u.adler)),$(u),0<_.wrap&&(_.wrap=-_.wrap),_.pending!==0?p:1)},i.deflateEnd=function(u){var T;return u&&u.state?(T=u.state.status)!==S&&T!==69&&T!==73&&T!==91&&T!==103&&T!==j&&T!==666?ie(u,m):(u.state=null,T===j?ie(u,-3):p):m},i.deflateSetDictionary=function(u,T){var R,_,x,P,F,D,O,z,K=T.length;if(!u||!u.state||(P=(R=u.state).wrap)===2||P===1&&R.status!==S||R.lookahead)return m;for(P===1&&(u.adler=l(u.adler,T,K,0)),R.wrap=0,K>=R.w_size&&(P===0&&(ae(R.head),R.strstart=0,R.block_start=0,R.insert=0),z=new a.Buf8(R.w_size),a.arraySet(z,T,K-R.w_size,R.w_size,0),T=z,K=R.w_size),F=u.avail_in,D=u.next_in,O=u.input,u.avail_in=K,u.next_in=0,u.input=T,me(R);R.lookahead>=N;){for(_=R.strstart,x=R.lookahead-(N-1);R.ins_h=(R.ins_h<<R.hash_shift^R.window[_+N-1])&R.hash_mask,R.prev[_&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=_,_++,--x;);R.strstart=_,R.lookahead=N-1,me(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=N-1,R.match_available=0,u.next_in=D,u.input=O,u.avail_in=F,R.wrap=P,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,a){var o,l,c,f,h,g,p,m,d,b,v,w,C,E,I,M,B,G,N,W,ee,S,j,y,q;o=s.state,l=s.next_in,y=s.input,c=l+(s.avail_in-5),f=s.next_out,q=s.output,h=f-(a-s.avail_out),g=f+(s.avail_out-257),p=o.dmax,m=o.wsize,d=o.whave,b=o.wnext,v=o.window,w=o.hold,C=o.bits,E=o.lencode,I=o.distcode,M=(1<<o.lenbits)-1,B=(1<<o.distbits)-1;e:do{C<15&&(w+=y[l++]<<C,C+=8,w+=y[l++]<<C,C+=8),G=E[w&M];t:for(;;){if(w>>>=N=G>>>24,C-=N,(N=G>>>16&255)===0)q[f++]=65535&G;else{if(!(16&N)){if((64&N)==0){G=E[(65535&G)+(w&(1<<N)-1)];continue t}if(32&N){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}W=65535&G,(N&=15)&&(C<N&&(w+=y[l++]<<C,C+=8),W+=w&(1<<N)-1,w>>>=N,C-=N),C<15&&(w+=y[l++]<<C,C+=8,w+=y[l++]<<C,C+=8),G=I[w&B];n:for(;;){if(w>>>=N=G>>>24,C-=N,!(16&(N=G>>>16&255))){if((64&N)==0){G=I[(65535&G)+(w&(1<<N)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(ee=65535&G,C<(N&=15)&&(w+=y[l++]<<C,(C+=8)<N&&(w+=y[l++]<<C,C+=8)),p<(ee+=w&(1<<N)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(w>>>=N,C-=N,(N=f-h)<ee){if(d<(N=ee-N)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(j=v,(S=0)===b){if(S+=m-N,N<W){for(W-=N;q[f++]=v[S++],--N;);S=f-ee,j=q}}else if(b<N){if(S+=m+b-N,(N-=b)<W){for(W-=N;q[f++]=v[S++],--N;);if(S=0,b<W){for(W-=N=b;q[f++]=v[S++],--N;);S=f-ee,j=q}}}else if(S+=b-N,N<W){for(W-=N;q[f++]=v[S++],--N;);S=f-ee,j=q}for(;2<W;)q[f++]=j[S++],q[f++]=j[S++],q[f++]=j[S++],W-=3;W&&(q[f++]=j[S++],1<W&&(q[f++]=j[S++]))}else{for(S=f-ee;q[f++]=q[S++],q[f++]=q[S++],q[f++]=q[S++],2<(W-=3););W&&(q[f++]=q[S++],1<W&&(q[f++]=q[S++]))}break}}break}}while(l<c&&f<g);l-=W=C>>3,w&=(1<<(C-=W<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=f<g?g-f+257:257-(f-g),o.hold=w,o.bits=C}},{}],49:[function(n,r,i){var s=n("../utils/common"),a=n("./adler32"),o=n("./crc32"),l=n("./inffast"),c=n("./inftrees"),f=1,h=2,g=0,p=-2,m=1,d=852,b=592;function v(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function w(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(S){var j;return S&&S.state?(j=S.state,S.total_in=S.total_out=j.total=0,S.msg="",j.wrap&&(S.adler=1&j.wrap),j.mode=m,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new s.Buf32(d),j.distcode=j.distdyn=new s.Buf32(b),j.sane=1,j.back=-1,g):p}function E(S){var j;return S&&S.state?((j=S.state).wsize=0,j.whave=0,j.wnext=0,C(S)):p}function I(S,j){var y,q;return S&&S.state?(q=S.state,j<0?(y=0,j=-j):(y=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?p:(q.window!==null&&q.wbits!==j&&(q.window=null),q.wrap=y,q.wbits=j,E(S))):p}function M(S,j){var y,q;return S?(q=new w,(S.state=q).window=null,(y=I(S,j))!==g&&(S.state=null),y):p}var B,G,N=!0;function W(S){if(N){var j;for(B=new s.Buf32(512),G=new s.Buf32(32),j=0;j<144;)S.lens[j++]=8;for(;j<256;)S.lens[j++]=9;for(;j<280;)S.lens[j++]=7;for(;j<288;)S.lens[j++]=8;for(c(f,S.lens,0,288,B,0,S.work,{bits:9}),j=0;j<32;)S.lens[j++]=5;c(h,S.lens,0,32,G,0,S.work,{bits:5}),N=!1}S.lencode=B,S.lenbits=9,S.distcode=G,S.distbits=5}function ee(S,j,y,q){var se,V=S.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new s.Buf8(V.wsize)),q>=V.wsize?(s.arraySet(V.window,j,y-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(q<(se=V.wsize-V.wnext)&&(se=q),s.arraySet(V.window,j,y-q,se,V.wnext),(q-=se)?(s.arraySet(V.window,j,y-q,q,0),V.wnext=q,V.whave=V.wsize):(V.wnext+=se,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=se))),0}i.inflateReset=E,i.inflateReset2=I,i.inflateResetKeep=C,i.inflateInit=function(S){return M(S,15)},i.inflateInit2=M,i.inflate=function(S,j){var y,q,se,V,ie,X,ae,$,L,le,ne,Q,me,H,J,Z,re,ce,A,k,u,T,R,_,x=0,P=new s.Buf8(4),F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return p;(y=S.state).mode===12&&(y.mode=13),ie=S.next_out,se=S.output,ae=S.avail_out,V=S.next_in,q=S.input,X=S.avail_in,$=y.hold,L=y.bits,le=X,ne=ae,T=g;e:for(;;)switch(y.mode){case m:if(y.wrap===0){y.mode=13;break}for(;L<16;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if(2&y.wrap&&$===35615){P[y.check=0]=255&$,P[1]=$>>>8&255,y.check=o(y.check,P,2,0),L=$=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&$)<<8)+($>>8))%31){S.msg="incorrect header check",y.mode=30;break}if((15&$)!=8){S.msg="unknown compression method",y.mode=30;break}if(L-=4,u=8+(15&($>>>=4)),y.wbits===0)y.wbits=u;else if(u>y.wbits){S.msg="invalid window size",y.mode=30;break}y.dmax=1<<u,S.adler=y.check=1,y.mode=512&$?10:12,L=$=0;break;case 2:for(;L<16;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if(y.flags=$,(255&y.flags)!=8){S.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){S.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=$>>8&1),512&y.flags&&(P[0]=255&$,P[1]=$>>>8&255,y.check=o(y.check,P,2,0)),L=$=0,y.mode=3;case 3:for(;L<32;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.head&&(y.head.time=$),512&y.flags&&(P[0]=255&$,P[1]=$>>>8&255,P[2]=$>>>16&255,P[3]=$>>>24&255,y.check=o(y.check,P,4,0)),L=$=0,y.mode=4;case 4:for(;L<16;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.head&&(y.head.xflags=255&$,y.head.os=$>>8),512&y.flags&&(P[0]=255&$,P[1]=$>>>8&255,y.check=o(y.check,P,2,0)),L=$=0,y.mode=5;case 5:if(1024&y.flags){for(;L<16;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.length=$,y.head&&(y.head.extra_len=$),512&y.flags&&(P[0]=255&$,P[1]=$>>>8&255,y.check=o(y.check,P,2,0)),L=$=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(X<(Q=y.length)&&(Q=X),Q&&(y.head&&(u=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,q,V,Q,u)),512&y.flags&&(y.check=o(y.check,q,Q,V)),X-=Q,V+=Q,y.length-=Q),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(X===0)break e;for(Q=0;u=q[V+Q++],y.head&&u&&y.length<65536&&(y.head.name+=String.fromCharCode(u)),u&&Q<X;);if(512&y.flags&&(y.check=o(y.check,q,Q,V)),X-=Q,V+=Q,u)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(X===0)break e;for(Q=0;u=q[V+Q++],y.head&&u&&y.length<65536&&(y.head.comment+=String.fromCharCode(u)),u&&Q<X;);if(512&y.flags&&(y.check=o(y.check,q,Q,V)),X-=Q,V+=Q,u)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;L<16;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if($!==(65535&y.check)){S.msg="header crc mismatch",y.mode=30;break}L=$=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),S.adler=y.check=0,y.mode=12;break;case 10:for(;L<32;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}S.adler=y.check=v($),L=$=0,y.mode=11;case 11:if(y.havedict===0)return S.next_out=ie,S.avail_out=ae,S.next_in=V,S.avail_in=X,y.hold=$,y.bits=L,2;S.adler=y.check=1,y.mode=12;case 12:if(j===5||j===6)break e;case 13:if(y.last){$>>>=7&L,L-=7&L,y.mode=27;break}for(;L<3;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}switch(y.last=1&$,L-=1,3&($>>>=1)){case 0:y.mode=14;break;case 1:if(W(y),y.mode=20,j!==6)break;$>>>=2,L-=2;break e;case 2:y.mode=17;break;case 3:S.msg="invalid block type",y.mode=30}$>>>=2,L-=2;break;case 14:for($>>>=7&L,L-=7&L;L<32;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if((65535&$)!=($>>>16^65535)){S.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&$,L=$=0,y.mode=15,j===6)break e;case 15:y.mode=16;case 16:if(Q=y.length){if(X<Q&&(Q=X),ae<Q&&(Q=ae),Q===0)break e;s.arraySet(se,q,V,Q,ie),X-=Q,V+=Q,ae-=Q,ie+=Q,y.length-=Q;break}y.mode=12;break;case 17:for(;L<14;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if(y.nlen=257+(31&$),$>>>=5,L-=5,y.ndist=1+(31&$),$>>>=5,L-=5,y.ncode=4+(15&$),$>>>=4,L-=4,286<y.nlen||30<y.ndist){S.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;L<3;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.lens[F[y.have++]]=7&$,$>>>=3,L-=3}for(;y.have<19;)y.lens[F[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,R={bits:y.lenbits},T=c(0,y.lens,0,19,y.lencode,0,y.work,R),y.lenbits=R.bits,T){S.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Z=(x=y.lencode[$&(1<<y.lenbits)-1])>>>16&255,re=65535&x,!((J=x>>>24)<=L);){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if(re<16)$>>>=J,L-=J,y.lens[y.have++]=re;else{if(re===16){for(_=J+2;L<_;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if($>>>=J,L-=J,y.have===0){S.msg="invalid bit length repeat",y.mode=30;break}u=y.lens[y.have-1],Q=3+(3&$),$>>>=2,L-=2}else if(re===17){for(_=J+3;L<_;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}L-=J,u=0,Q=3+(7&($>>>=J)),$>>>=3,L-=3}else{for(_=J+7;L<_;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}L-=J,u=0,Q=11+(127&($>>>=J)),$>>>=7,L-=7}if(y.have+Q>y.nlen+y.ndist){S.msg="invalid bit length repeat",y.mode=30;break}for(;Q--;)y.lens[y.have++]=u}}if(y.mode===30)break;if(y.lens[256]===0){S.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,R={bits:y.lenbits},T=c(f,y.lens,0,y.nlen,y.lencode,0,y.work,R),y.lenbits=R.bits,T){S.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,R={bits:y.distbits},T=c(h,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,R),y.distbits=R.bits,T){S.msg="invalid distances set",y.mode=30;break}if(y.mode=20,j===6)break e;case 20:y.mode=21;case 21:if(6<=X&&258<=ae){S.next_out=ie,S.avail_out=ae,S.next_in=V,S.avail_in=X,y.hold=$,y.bits=L,l(S,ne),ie=S.next_out,se=S.output,ae=S.avail_out,V=S.next_in,q=S.input,X=S.avail_in,$=y.hold,L=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Z=(x=y.lencode[$&(1<<y.lenbits)-1])>>>16&255,re=65535&x,!((J=x>>>24)<=L);){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if(Z&&(240&Z)==0){for(ce=J,A=Z,k=re;Z=(x=y.lencode[k+(($&(1<<ce+A)-1)>>ce)])>>>16&255,re=65535&x,!(ce+(J=x>>>24)<=L);){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}$>>>=ce,L-=ce,y.back+=ce}if($>>>=J,L-=J,y.back+=J,y.length=re,Z===0){y.mode=26;break}if(32&Z){y.back=-1,y.mode=12;break}if(64&Z){S.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Z,y.mode=22;case 22:if(y.extra){for(_=y.extra;L<_;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.length+=$&(1<<y.extra)-1,$>>>=y.extra,L-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Z=(x=y.distcode[$&(1<<y.distbits)-1])>>>16&255,re=65535&x,!((J=x>>>24)<=L);){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if((240&Z)==0){for(ce=J,A=Z,k=re;Z=(x=y.distcode[k+(($&(1<<ce+A)-1)>>ce)])>>>16&255,re=65535&x,!(ce+(J=x>>>24)<=L);){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}$>>>=ce,L-=ce,y.back+=ce}if($>>>=J,L-=J,y.back+=J,64&Z){S.msg="invalid distance code",y.mode=30;break}y.offset=re,y.extra=15&Z,y.mode=24;case 24:if(y.extra){for(_=y.extra;L<_;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}y.offset+=$&(1<<y.extra)-1,$>>>=y.extra,L-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){S.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(ae===0)break e;if(Q=ne-ae,y.offset>Q){if((Q=y.offset-Q)>y.whave&&y.sane){S.msg="invalid distance too far back",y.mode=30;break}me=Q>y.wnext?(Q-=y.wnext,y.wsize-Q):y.wnext-Q,Q>y.length&&(Q=y.length),H=y.window}else H=se,me=ie-y.offset,Q=y.length;for(ae<Q&&(Q=ae),ae-=Q,y.length-=Q;se[ie++]=H[me++],--Q;);y.length===0&&(y.mode=21);break;case 26:if(ae===0)break e;se[ie++]=y.length,ae--,y.mode=21;break;case 27:if(y.wrap){for(;L<32;){if(X===0)break e;X--,$|=q[V++]<<L,L+=8}if(ne-=ae,S.total_out+=ne,y.total+=ne,ne&&(S.adler=y.check=y.flags?o(y.check,se,ne,ie-ne):a(y.check,se,ne,ie-ne)),ne=ae,(y.flags?$:v($))!==y.check){S.msg="incorrect data check",y.mode=30;break}L=$=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;L<32;){if(X===0)break e;X--,$+=q[V++]<<L,L+=8}if($!==(4294967295&y.total)){S.msg="incorrect length check",y.mode=30;break}L=$=0}y.mode=29;case 29:T=1;break e;case 30:T=-3;break e;case 31:return-4;case 32:default:return p}return S.next_out=ie,S.avail_out=ae,S.next_in=V,S.avail_in=X,y.hold=$,y.bits=L,(y.wsize||ne!==S.avail_out&&y.mode<30&&(y.mode<27||j!==4))&&ee(S,S.output,S.next_out,ne-S.avail_out)?(y.mode=31,-4):(le-=S.avail_in,ne-=S.avail_out,S.total_in+=le,S.total_out+=ne,y.total+=ne,y.wrap&&ne&&(S.adler=y.check=y.flags?o(y.check,se,ne,S.next_out-ne):a(y.check,se,ne,S.next_out-ne)),S.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(le==0&&ne===0||j===4)&&T===g&&(T=-5),T)},i.inflateEnd=function(S){if(!S||!S.state)return p;var j=S.state;return j.window&&(j.window=null),S.state=null,g},i.inflateGetHeader=function(S,j){var y;return S&&S.state?(2&(y=S.state).wrap)==0?p:((y.head=j).done=!1,g):p},i.inflateSetDictionary=function(S,j){var y,q=j.length;return S&&S.state?(y=S.state).wrap!==0&&y.mode!==11?p:y.mode===11&&a(1,j,q,0)!==y.check?-3:ee(S,j,q,q)?(y.mode=31,-4):(y.havedict=1,g):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,h,g,p,m,d,b,v){var w,C,E,I,M,B,G,N,W,ee=v.bits,S=0,j=0,y=0,q=0,se=0,V=0,ie=0,X=0,ae=0,$=0,L=null,le=0,ne=new s.Buf16(16),Q=new s.Buf16(16),me=null,H=0;for(S=0;S<=15;S++)ne[S]=0;for(j=0;j<p;j++)ne[h[g+j]]++;for(se=ee,q=15;1<=q&&ne[q]===0;q--);if(q<se&&(se=q),q===0)return m[d++]=20971520,m[d++]=20971520,v.bits=1,0;for(y=1;y<q&&ne[y]===0;y++);for(se<y&&(se=y),S=X=1;S<=15;S++)if(X<<=1,(X-=ne[S])<0)return-1;if(0<X&&(f===0||q!==1))return-1;for(Q[1]=0,S=1;S<15;S++)Q[S+1]=Q[S]+ne[S];for(j=0;j<p;j++)h[g+j]!==0&&(b[Q[h[g+j]]++]=j);if(B=f===0?(L=me=b,19):f===1?(L=a,le-=257,me=o,H-=257,256):(L=l,me=c,-1),S=y,M=d,ie=j=$=0,E=-1,I=(ae=1<<(V=se))-1,f===1&&852<ae||f===2&&592<ae)return 1;for(;;){for(G=S-ie,W=b[j]<B?(N=0,b[j]):b[j]>B?(N=me[H+b[j]],L[le+b[j]]):(N=96,0),w=1<<S-ie,y=C=1<<V;m[M+($>>ie)+(C-=w)]=G<<24|N<<16|W|0,C!==0;);for(w=1<<S-1;$&w;)w>>=1;if(w!==0?($&=w-1,$+=w):$=0,j++,--ne[S]==0){if(S===q)break;S=h[g+b[j]]}if(se<S&&($&I)!==E){for(ie===0&&(ie=se),M+=y,X=1<<(V=S-ie);V+ie<q&&!((X-=ne[V+ie])<=0);)V++,X<<=1;if(ae+=1<<V,f===1&&852<ae||f===2&&592<ae)return 1;m[E=$&I]=se<<24|V<<16|M-d|0}}return $!==0&&(m[M+$]=S-ie<<24|64<<16|0),v.bits=se,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),a=0,o=1;function l(x){for(var P=x.length;0<=--P;)x[P]=0}var c=0,f=29,h=256,g=h+1+f,p=30,m=19,d=2*g+1,b=15,v=16,w=7,C=256,E=16,I=17,M=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],N=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(g+2));l(ee);var S=new Array(2*p);l(S);var j=new Array(512);l(j);var y=new Array(256);l(y);var q=new Array(f);l(q);var se,V,ie,X=new Array(p);function ae(x,P,F,D,O){this.static_tree=x,this.extra_bits=P,this.extra_base=F,this.elems=D,this.max_length=O,this.has_stree=x&&x.length}function $(x,P){this.dyn_tree=x,this.max_code=0,this.stat_desc=P}function L(x){return x<256?j[x]:j[256+(x>>>7)]}function le(x,P){x.pending_buf[x.pending++]=255&P,x.pending_buf[x.pending++]=P>>>8&255}function ne(x,P,F){x.bi_valid>v-F?(x.bi_buf|=P<<x.bi_valid&65535,le(x,x.bi_buf),x.bi_buf=P>>v-x.bi_valid,x.bi_valid+=F-v):(x.bi_buf|=P<<x.bi_valid&65535,x.bi_valid+=F)}function Q(x,P,F){ne(x,F[2*P],F[2*P+1])}function me(x,P){for(var F=0;F|=1&x,x>>>=1,F<<=1,0<--P;);return F>>>1}function H(x,P,F){var D,O,z=new Array(b+1),K=0;for(D=1;D<=b;D++)z[D]=K=K+F[D-1]<<1;for(O=0;O<=P;O++){var U=x[2*O+1];U!==0&&(x[2*O]=me(z[U]++,U))}}function J(x){var P;for(P=0;P<g;P++)x.dyn_ltree[2*P]=0;for(P=0;P<p;P++)x.dyn_dtree[2*P]=0;for(P=0;P<m;P++)x.bl_tree[2*P]=0;x.dyn_ltree[2*C]=1,x.opt_len=x.static_len=0,x.last_lit=x.matches=0}function Z(x){8<x.bi_valid?le(x,x.bi_buf):0<x.bi_valid&&(x.pending_buf[x.pending++]=x.bi_buf),x.bi_buf=0,x.bi_valid=0}function re(x,P,F,D){var O=2*P,z=2*F;return x[O]<x[z]||x[O]===x[z]&&D[P]<=D[F]}function ce(x,P,F){for(var D=x.heap[F],O=F<<1;O<=x.heap_len&&(O<x.heap_len&&re(P,x.heap[O+1],x.heap[O],x.depth)&&O++,!re(P,D,x.heap[O],x.depth));)x.heap[F]=x.heap[O],F=O,O<<=1;x.heap[F]=D}function A(x,P,F){var D,O,z,K,U=0;if(x.last_lit!==0)for(;D=x.pending_buf[x.d_buf+2*U]<<8|x.pending_buf[x.d_buf+2*U+1],O=x.pending_buf[x.l_buf+U],U++,D===0?Q(x,O,P):(Q(x,(z=y[O])+h+1,P),(K=B[z])!==0&&ne(x,O-=q[z],K),Q(x,z=L(--D),F),(K=G[z])!==0&&ne(x,D-=X[z],K)),U<x.last_lit;);Q(x,C,P)}function k(x,P){var F,D,O,z=P.dyn_tree,K=P.stat_desc.static_tree,U=P.stat_desc.has_stree,Y=P.stat_desc.elems,ue=-1;for(x.heap_len=0,x.heap_max=d,F=0;F<Y;F++)z[2*F]!==0?(x.heap[++x.heap_len]=ue=F,x.depth[F]=0):z[2*F+1]=0;for(;x.heap_len<2;)z[2*(O=x.heap[++x.heap_len]=ue<2?++ue:0)]=1,x.depth[O]=0,x.opt_len--,U&&(x.static_len-=K[2*O+1]);for(P.max_code=ue,F=x.heap_len>>1;1<=F;F--)ce(x,z,F);for(O=Y;F=x.heap[1],x.heap[1]=x.heap[x.heap_len--],ce(x,z,1),D=x.heap[1],x.heap[--x.heap_max]=F,x.heap[--x.heap_max]=D,z[2*O]=z[2*F]+z[2*D],x.depth[O]=(x.depth[F]>=x.depth[D]?x.depth[F]:x.depth[D])+1,z[2*F+1]=z[2*D+1]=O,x.heap[1]=O++,ce(x,z,1),2<=x.heap_len;);x.heap[--x.heap_max]=x.heap[1],(function(oe,xe){var Oe,Ie,Ge,Ce,Jt,$e,De=xe.dyn_tree,Mn=xe.max_code,Rr=xe.stat_desc.static_tree,ru=xe.stat_desc.has_stree,iu=xe.stat_desc.extra_bits,Zs=xe.stat_desc.extra_base,jn=xe.stat_desc.max_length,kr=0;for(Ce=0;Ce<=b;Ce++)oe.bl_count[Ce]=0;for(De[2*oe.heap[oe.heap_max]+1]=0,Oe=oe.heap_max+1;Oe<d;Oe++)jn<(Ce=De[2*De[2*(Ie=oe.heap[Oe])+1]+1]+1)&&(Ce=jn,kr++),De[2*Ie+1]=Ce,Mn<Ie||(oe.bl_count[Ce]++,Jt=0,Zs<=Ie&&(Jt=iu[Ie-Zs]),$e=De[2*Ie],oe.opt_len+=$e*(Ce+Jt),ru&&(oe.static_len+=$e*(Rr[2*Ie+1]+Jt)));if(kr!==0){do{for(Ce=jn-1;oe.bl_count[Ce]===0;)Ce--;oe.bl_count[Ce]--,oe.bl_count[Ce+1]+=2,oe.bl_count[jn]--,kr-=2}while(0<kr);for(Ce=jn;Ce!==0;Ce--)for(Ie=oe.bl_count[Ce];Ie!==0;)Mn<(Ge=oe.heap[--Oe])||(De[2*Ge+1]!==Ce&&(oe.opt_len+=(Ce-De[2*Ge+1])*De[2*Ge],De[2*Ge+1]=Ce),Ie--)}})(x,P),H(z,ue,x.bl_count)}function u(x,P,F){var D,O,z=-1,K=P[1],U=0,Y=7,ue=4;for(K===0&&(Y=138,ue=3),P[2*(F+1)+1]=65535,D=0;D<=F;D++)O=K,K=P[2*(D+1)+1],++U<Y&&O===K||(U<ue?x.bl_tree[2*O]+=U:O!==0?(O!==z&&x.bl_tree[2*O]++,x.bl_tree[2*E]++):U<=10?x.bl_tree[2*I]++:x.bl_tree[2*M]++,z=O,ue=(U=0)===K?(Y=138,3):O===K?(Y=6,3):(Y=7,4))}function T(x,P,F){var D,O,z=-1,K=P[1],U=0,Y=7,ue=4;for(K===0&&(Y=138,ue=3),D=0;D<=F;D++)if(O=K,K=P[2*(D+1)+1],!(++U<Y&&O===K)){if(U<ue)for(;Q(x,O,x.bl_tree),--U!=0;);else O!==0?(O!==z&&(Q(x,O,x.bl_tree),U--),Q(x,E,x.bl_tree),ne(x,U-3,2)):U<=10?(Q(x,I,x.bl_tree),ne(x,U-3,3)):(Q(x,M,x.bl_tree),ne(x,U-11,7));z=O,ue=(U=0)===K?(Y=138,3):O===K?(Y=6,3):(Y=7,4)}}l(X);var R=!1;function _(x,P,F,D){ne(x,(c<<1)+(D?1:0),3),(function(O,z,K,U){Z(O),le(O,K),le(O,~K),s.arraySet(O.pending_buf,O.window,z,K,O.pending),O.pending+=K})(x,P,F)}i._tr_init=function(x){R||((function(){var P,F,D,O,z,K=new Array(b+1);for(O=D=0;O<f-1;O++)for(q[O]=D,P=0;P<1<<B[O];P++)y[D++]=O;for(y[D-1]=O,O=z=0;O<16;O++)for(X[O]=z,P=0;P<1<<G[O];P++)j[z++]=O;for(z>>=7;O<p;O++)for(X[O]=z<<7,P=0;P<1<<G[O]-7;P++)j[256+z++]=O;for(F=0;F<=b;F++)K[F]=0;for(P=0;P<=143;)ee[2*P+1]=8,P++,K[8]++;for(;P<=255;)ee[2*P+1]=9,P++,K[9]++;for(;P<=279;)ee[2*P+1]=7,P++,K[7]++;for(;P<=287;)ee[2*P+1]=8,P++,K[8]++;for(H(ee,g+1,K),P=0;P<p;P++)S[2*P+1]=5,S[2*P]=me(P,5);se=new ae(ee,B,h+1,g,b),V=new ae(S,G,0,p,b),ie=new ae(new Array(0),N,0,m,w)})(),R=!0),x.l_desc=new $(x.dyn_ltree,se),x.d_desc=new $(x.dyn_dtree,V),x.bl_desc=new $(x.bl_tree,ie),x.bi_buf=0,x.bi_valid=0,J(x)},i._tr_stored_block=_,i._tr_flush_block=function(x,P,F,D){var O,z,K=0;0<x.level?(x.strm.data_type===2&&(x.strm.data_type=(function(U){var Y,ue=4093624447;for(Y=0;Y<=31;Y++,ue>>>=1)if(1&ue&&U.dyn_ltree[2*Y]!==0)return a;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return o;for(Y=32;Y<h;Y++)if(U.dyn_ltree[2*Y]!==0)return o;return a})(x)),k(x,x.l_desc),k(x,x.d_desc),K=(function(U){var Y;for(u(U,U.dyn_ltree,U.l_desc.max_code),u(U,U.dyn_dtree,U.d_desc.max_code),k(U,U.bl_desc),Y=m-1;3<=Y&&U.bl_tree[2*W[Y]+1]===0;Y--);return U.opt_len+=3*(Y+1)+5+5+4,Y})(x),O=x.opt_len+3+7>>>3,(z=x.static_len+3+7>>>3)<=O&&(O=z)):O=z=F+5,F+4<=O&&P!==-1?_(x,P,F,D):x.strategy===4||z===O?(ne(x,2+(D?1:0),3),A(x,ee,S)):(ne(x,4+(D?1:0),3),(function(U,Y,ue,oe){var xe;for(ne(U,Y-257,5),ne(U,ue-1,5),ne(U,oe-4,4),xe=0;xe<oe;xe++)ne(U,U.bl_tree[2*W[xe]+1],3);T(U,U.dyn_ltree,Y-1),T(U,U.dyn_dtree,ue-1)})(x,x.l_desc.max_code+1,x.d_desc.max_code+1,K+1),A(x,x.dyn_ltree,x.dyn_dtree)),J(x),D&&Z(x)},i._tr_tally=function(x,P,F){return x.pending_buf[x.d_buf+2*x.last_lit]=P>>>8&255,x.pending_buf[x.d_buf+2*x.last_lit+1]=255&P,x.pending_buf[x.l_buf+x.last_lit]=255&F,x.last_lit++,P===0?x.dyn_ltree[2*F]++:(x.matches++,P--,x.dyn_ltree[2*(y[F]+h+1)]++,x.dyn_dtree[2*L(P)]++),x.last_lit===x.lit_bufsize-1},i._tr_align=function(x){ne(x,2,3),Q(x,C,ee),(function(P){P.bi_valid===16?(le(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)})(x)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(a,o){if(!a.setImmediate){var l,c,f,h,g=1,p={},m=!1,d=a.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(a);b=b&&b.setTimeout?b:a,l={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){w(E)})}:(function(){if(a.postMessage&&!a.importScripts){var E=!0,I=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=I,E}})()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",C,!1):a.attachEvent("onmessage",C),function(E){a.postMessage(h+E,"*")}):a.MessageChannel?((f=new MessageChannel).port1.onmessage=function(E){w(E.data)},function(E){f.port2.postMessage(E)}):d&&"onreadystatechange"in d.createElement("script")?(c=d.documentElement,function(E){var I=d.createElement("script");I.onreadystatechange=function(){w(E),I.onreadystatechange=null,c.removeChild(I),I=null},c.appendChild(I)}):function(E){setTimeout(w,0,E)},b.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var I=new Array(arguments.length-1),M=0;M<I.length;M++)I[M]=arguments[M+1];var B={callback:E,args:I};return p[g]=B,l(g),g++},b.clearImmediate=v}function v(E){delete p[E]}function w(E){if(m)setTimeout(w,0,E);else{var I=p[E];if(I){m=!0;try{(function(M){var B=M.callback,G=M.args;switch(G.length){case 0:B();break;case 1:B(G[0]);break;case 2:B(G[0],G[1]);break;case 3:B(G[0],G[1],G[2]);break;default:B.apply(o,G)}})(I)}finally{v(E),m=!1}}}}function C(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(h)===0&&w(+E.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof qt<"u"?qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(qi)),qi.exports}var L1=B1();const z1=N1(L1);var Hr={exports:{}},M1=Hr.exports,Ca;function j1(){return Ca||(Ca=1,(function(e,t){(function(n,r){r()})(M1,function(){function n(c,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,f,h){var g=new XMLHttpRequest;g.open("GET",c),g.responseType="blob",g.onload=function(){l(g.response,f,h)},g.onerror=function(){console.error("could not download file")},g.send()}function i(c){var f=new XMLHttpRequest;f.open("HEAD",c,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(f)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof qt=="object"&&qt.global===qt?qt:void 0,o=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(c,f,h){var g=a.URL||a.webkitURL,p=document.createElement("a");f=f||c.name||"download",p.download=f,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?s(p):i(p.href)?r(c,f,h):s(p,p.target="_blank")):(p.href=g.createObjectURL(c),setTimeout(function(){g.revokeObjectURL(p.href)},4e4),setTimeout(function(){s(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,f,h){if(f=f||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,h),f);else if(i(c))r(c,f,h);else{var g=document.createElement("a");g.href=c,g.target="_blank",setTimeout(function(){s(g)})}}:function(c,f,h,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof c=="string")return r(c,f,h);var p=c.type==="application/octet-stream",m=/constructor/i.test(a.HTMLElement)||a.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||p&&m||o)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var C=b.result;C=d?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=C:location=C,g=null},b.readAsDataURL(c)}else{var v=a.URL||a.webkitURL,w=v.createObjectURL(c);g?g.location=w:location.href=w,g=null,setTimeout(function(){v.revokeObjectURL(w)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(Hr)),Hr.exports}var $1=j1();const U1=`# 1. API 協作規則\r
\r
先確認資料結構、欄位命名與錯誤訊息的統一規範。要做為使用者的角度來檢測 message 的值是否清楚明確，不可有提示文字以外的內容如：錯誤代碼、內部訊息等。\r
\r
---\r
\r
## 📝 儲存/修改 API\r
\r
### 規範要點\r
- 成功與失敗的回應格式一致\r
- 欄位命名一致（camelCase / snake_case）\r
- 缺少欄位是否回傳空值\r
\r
### ✓ 成功 response\r
\`\`\`json\r
{\r
  "message": "儲存成功",\r
  "success": true,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
### ✗ 失敗 response\r
\`\`\`json\r
{\r
  "message": "XX欄位應輸入....",\r
  "success": false,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
---\r
\r
## 🔍 查詢 API\r
\r
### 規範要點\r
- 成功與失敗的回應格式一致\r
- 欄位命名一致（camelCase / snake_case）\r
- 缺少欄位是否回傳空值\r
\r
### ✓ 成功 response\r
\`\`\`json\r
{\r
  "message": "查詢成功",\r
  "success": true,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
### ✗ 失敗 response\r
\`\`\`json\r
{\r
  "message": "該帳號尚未通過XX流程",\r
  "success": false,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
---\r
\r
## 💬 前端彈窗處理邏輯\r
\r
### 📌 為何需要 message 和 success 參數？\r
- **message：** 前端透過此參數接收後端回傳的提示訊息，用於顯示彈窗內容\r
- **success：** 前端根據此參數判斷下一步行為（如導向列表頁、停留編輯頁等）\r
\r
### 前端判斷邏輯\r
- 以操作邏輯來說，肯定且正面的狀態時使用 \`success()\`\r
- 反之則使用 \`failure()\`\r
\r
\`\`\`javascript\r
// main.js - MutationCache 配置\r
mutationCache: new MutationCache({\r
  onSuccess: (data) => {\r
    destroyAll()\r
    // 根據 success 判斷彈窗類型\r
    if (data?.failed || !data?.success) {\r
      failure(data?.message)  // 顯示失敗彈窗\r
    } else if (data?.message?.length > 0 || data?.success) {\r
      success(data?.message)  // 顯示成功彈窗\r
    }\r
  },\r
  onError: (error) => {\r
    destroyAll()\r
    if (error?.displayMessage) {\r
      failure(error?.displayMessage)  // 顯示錯誤彈窗\r
    }\r
  }\r
})\r
\`\`\`\r
\r
### 實際應用流程\r
1. 前端發送 API 請求（儲存/修改/查詢）\r
2. 後端處理完畢後回傳 response（包含 message、success、data）\r
3. 前端 MutationCache 接收 response\r
4. 根據 \`data?.failed\` 或 \`data?.success\` 決定彈窗類型\r
5. 顯示 \`message\` 內容給使用者\r
6. 根據 \`success\` 參數執行下一步行為（如：成功時導向列表頁）\r
\r
> ⚠️ **重要：** 所有 API response 都必須包含 \`message\` 和 \`success\` 參數，否則前端無法正確判斷操作結果並給予使用者回饋。\r
\r
---\r
\r
## 💬 Message 格式規範\r
\r
> ⚠️ **重要原則：** 後端在制訂 message 時，必須符合情境回復相應的中文內容。使用者不需要看到工程師才看得懂的程式碼或技術訊息，只需要簡單明瞭的中文說明。\r
\r
### ❌ 錯誤範例\r
\r
**1. 包含程式碼或技術訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "unexpected: 會員資格不符"\r
}\r
\`\`\`\r
> ⚠️ 問題：使用者不需要知道「unexpected」這種技術訊息\r
\r
**2. 包含陣列格式**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "[會員資格不符]"\r
}\r
\`\`\`\r
> ⚠️ 問題：使用者不需要看到中括號這種程式符號\r
\r
**3. 包含錯誤代碼或內部訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "Error Code 4001: 使用者資格驗證失敗"\r
}\r
\`\`\`\r
> ⚠️ 問題：錯誤代碼應該記錄在 log 中，而非顯示給使用者\r
\r
### ✓ 正確範例\r
\r
**1. 清楚明確的中文說明**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "會員資格不符"\r
}\r
\`\`\`\r
\r
**2. 提供解決方向的說明**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "手機號碼格式錯誤，請輸入10位數字"\r
}\r
\`\`\`\r
\r
**3. 符合情境的友善訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "檔案大小超過限制，請上傳5MB以下的檔案"\r
}\r
\`\`\`\r
\r
### 💡 撰寫 Message 的原則\r
- **使用純中文：** 避免英文技術用語、程式碼或符號\r
- **說明問題：** 清楚告知使用者發生了什麼事\r
- **提供方向：** 盡可能告訴使用者如何解決或修正\r
- **保持簡潔：** 一句話說清楚，不要冗長或過於技術性\r
- **站在使用者角度：** 確保一般使用者能夠理解訊息內容\r
\r
---\r
\r
## 🔄 例外狀況：什麼時候不用回傳 data?\r
\r
> 📌 **原則說明：** 針對「上傳檔案」或「新增/修改資料」的 API，如果操作完成後不需要進一步的行為，則成功時可以不回傳 data 參數，僅回傳 success 和 message 即可。\r
\r
### ✓ 成功時：不需要 data\r
\`\`\`json\r
{\r
  "success": true,\r
  "message": "上傳成功"\r
}\r
\`\`\`\r
> 適用情境：單純的上傳、新增或修改操作，只單純告知使用者操作結果即可\r
\r
### ✗ 失敗時：不需要 data\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "XXX並未符合資格"\r
}\r
\`\`\`\r
\r
### 📦 什麼時候需要回傳 data？\r
如果上傳或新增修改成功後，前端需要進一步的行為，則必須回傳 data 參數：\r
- 需要顯示剛上傳檔案的資訊（如檔案 ID、檔案路徑等）\r
- 需要導向至新建立的資料詳細頁（需要資料 ID）\r
- 需要更新畫面上的其他資訊（如更新後的完整資料）\r
- 需要下載或預覽剛上傳的檔案\r
\r
\`\`\`json\r
{\r
  "success": true,\r
  "message": "上傳成功",\r
  "data": {\r
    "fileId": "12345",\r
    "filePath": "/uploads/document.pdf",\r
    "uploadTime": "2026-03-19 10:30:00"\r
  }\r
}\r
\`\`\`\r
\r
> 💡 **設計建議：** 在設計 API 時，先確認前端在操作成功後是否需要額外的資料。如果只需要顯示「成功」訊息並關閉彈窗或返回列表頁，則不需要回傳 data，可以簡化 response 結構。\r
\r
---\r
\r
## ⚠️ Error Code 定義\r
\r
> 📌 **重要說明：** 新系統初期未採用元件化架構，受限於開發時程暫無法全面重構。目前策略是明確定義各 Error Code 的意義，後端實作細節可另行討論，但前端必須能依 Error Code 進行問題排查。\r
\r
| Error Code | 定義 | 說明 |\r
|:---:|---|---|\r
| **200** | 成功 (OK) | 請求成功，伺服器已正確處理並回傳資料 |\r
| **400** | 錯誤的請求 (Bad Request) | 前端請求參數錯誤 |\r
| **401** | 未授權 (Unauthorized) | 未登入或 Token 失效，需要重新登入驗證身份 |\r
| **403** | 禁止存取 (Forbidden) | 已登入但無權限執行此操作，可能是角色權限不足 |\r
| **404** | 找不到 API (Not Found) | API 路徑不存在 |\r
| **405** | 不允許的方法 (Method Not Allowed) | HTTP 方法錯誤，例如該 API 只支援 POST 但使用了 GET |\r
| **422** | 無法處理的實體 (Unprocessable Entity) | 前端請求(request)格式正確，但因語義錯誤無法處理，例如資料驗證失敗 |\r
| **500** | 伺服器內部錯誤 (Internal Server Error) | 後端程式發生未預期的錯誤，需要後端工程師檢查 log 排查問題 |\r
\r
### 前端 Debug 建議\r
- **400：** 檢查前端傳送的參數是否符合後端要求（欄位名稱、資料型別、必填欄位）\r
- **401：** 檢查 Token 是否過期或未正確帶入 Authorization header\r
- **403：** 確認使用者角色權限，是否該功能需要更高權限\r
- **404：** 確認 API 路徑是否正確，或資料 ID 是否存在於資料庫\r
- **405：** 確認 HTTP Method（GET/POST/PUT/DELETE）是否使用正確\r
- **500：** 聯繫後端工程師查看 server log，通常是後端程式邏輯錯誤\r
`,H1=`# 2. 參數一致性\r
\r
前端儲存 API 的 request 格式中參數名稱要與查詢 API 拿到的參數一致，這樣可以提升串接效率，減少不必要的欄位轉換。\r
\r
---\r
\r
## ✓ 正確範例\r
\r
### 查詢 API 回傳格式\r
若使用駝峰命名，大小寫需一致（含縮寫字母大小寫）。\r
\`\`\`json\r
{\r
  "userId": 123,\r
  "userName": "Jane",\r
  "createdAt": "2026-02-12T10:30:00"\r
}\r
\`\`\`\r
\r
### 新增/編輯 API request 格式\r
使用駝峰命名，大小寫需一致（含縮寫字母大小寫）。\r
\`\`\`json\r
{\r
  "userId": 123,\r
  "userName": "Jane",\r
  "createdAt": "2026-02-12T10:30:00"\r
}\r
\`\`\`\r
\r
**優點：**\r
- 參數名稱完全一致，可直接使用查詢結果\r
- 不需要額外的欄位名稱轉換邏輯\r
- 降低串接錯誤率，提升開發效率\r
\r
---\r
\r
## ✗ 錯誤範例\r
\r
### 查詢 API 回傳格式\r
\`\`\`json\r
{\r
  "name": "Jane",\r
  "age": 25,\r
  "email": "jane@example.com"\r
}\r
\`\`\`\r
\r
### 新增/編輯 API request 格式\r
\`\`\`json\r
{\r
  "userName": "Jane",\r
  "userAge": 25,\r
  "userEmail": "jane@example.com"\r
}\r
\`\`\`\r
\r
**問題：**\r
- 參數名稱不一致（name vs userName、age vs userAge）\r
- 需要額外撰寫欄位轉換邏輯\r
- 容易因遺漏轉換導致串接錯誤\r
- 增加維護成本與測試複雜度\r
\r
---\r
\r
## 為何要做到一致性？\r
- **簡化前端開發流程：** 查詢後可直接將資料綁定到表單，不需額外轉換欄位名稱\r
- **降低出錯機率：** 避免因欄位名稱對應錯誤導致的 bug\r
- **提升可維護性：** 減少欄位映射邏輯，程式碼更簡潔易懂\r
- **加速開發效率：** 前後端協作更順暢，減少溝通成本\r
\r
---\r
\r
## 什麼情況下可以做到一致性？\r
- **新開發的功能：** 在設計階段就統一前後端欄位名稱規範\r
- **重構既有功能：** 在大規模重構時，同步調整前後端欄位命名\r
- **後端使用 DTO 轉換：** 後端可透過 Data Transfer Object 統一查詢與儲存的欄位結構\r
- **前後端協作良好：** 團隊有共識且願意遵循統一的命名規範\r
\r
> ⚠️ **例外情況：** 當頁面邏輯較複雜，或需整合多支查詢 API 的資料時，可不強制對齊參數名稱。\r
`,W1=`# 3. 日期與時間格式\r
\r
統一字串格式，避免前後端轉換成本。\r
\r
---\r
\r
## 🔍 查詢時（後端 → 前端）\r
\r
### 後端回傳格式\r
後端統一回傳 ISO 8601 格式，不可有小數點：\r
\r
| 類型 | 回傳格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
\r
### 前端轉換顯示\r
前端依需求轉換為民國年：\r
\r
| 類型 | 轉換結果 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
---\r
\r
## 💾 儲存時（前端 → 後端）\r
\r
### 前端送出格式\r
前端可送出以下任一格式：\r
\r
**民國年格式：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
**或 ISO 格式（目前前端不儲存西元年，暫不啟用）：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
\r
### 後端接收規範\r
後端需能同時接受以下格式：\r
\r
**民國年格式：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
**或 ISO 格式（目前後端會接收西元年，要能接這格式）：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
`,q1=`# 4. 分頁資料格式\r
\r
分頁功能採用關注點分離設計，分為 usePagination（邏輯層）和 AppPagination（展示層）兩個部分。\r
\r
---\r
\r
## 🤝 前後端協作規範\r
\r
### 📌 Request 參數組成\r
- **固定參數**：pageNo、pageSize（所有分頁 API 都需要）\r
- **業務參數**：typeId、keyword、startDate 等（視 API 功能需求而定，非必要）\r
\r
### 情境 A：只需分頁\r
\`\`\`\r
POST /api/users/list\r
\r
{\r
  "pageNo": 1,\r
  "pageSize": 15\r
}\r
\`\`\`\r
例如：取得所有使用者列表\r
\r
### 情境 B：需查詢條件 + 分頁\r
\`\`\`\r
POST /api/news/query\r
\r
{\r
  "typeId": 4,\r
  "keyword": "測試",\r
  "pageNo": 1,\r
  "pageSize": 15\r
}\r
\`\`\`\r
例如：根據條件搜尋新聞\r
\r
### Request 參數說明\r
\r
| 參數 | 型別 | 必填 | 說明 | 預設值 |\r
|---|---|:---:|---|---|\r
| \`pageNo\` | Integer | ✅ | 頁碼（1-based，第一頁 = 1） | 1 |\r
| \`pageSize\` | Integer | ✅ | 每頁筆數 | 15 |\r
| \`typeId\` | Integer | ❌ | 類別 ID（範例） | - |\r
| \`keyword\` | String | ❌ | 搜尋關鍵字（範例） | - |\r
| \`startDate\` | String | ❌ | 開始日期（範例） | - |\r
\r
### 回應格式\r
\`\`\`json\r
{\r
  "content": [...],\r
  "number": 1,\r
  "size": 15,\r
  "totalPages": 10,\r
  "total": 150,\r
  "offset": 0\r
}\r
\`\`\`\r
\r
### Response 參數說明\r
\r
| 參數 | 型別 | 必填 | 說明 |\r
|---|---|:---:|---|\r
| \`content\` | Array | ✅ | 資料陣列（空時為 []，不可為 null） |\r
| \`number\` | Integer | ✅ | 當前頁碼（1-based，對應 request.pageNo） |\r
| \`size\` | Integer | ✅ | 每頁筆數（對應 request.pageSize） |\r
| \`totalPages\` | Integer | ✅ | 總頁數 |\r
| \`total\` | Integer/Long | ✅ | 總筆數 |\r
| \`offset\` | Integer/Long | ✅ | 起始索引 = (number - 1) × size |\r
\r
---\r
\r
## 💻 前端實作指引\r
\r
### 📐 架構概述\r
分頁功能採用 **關注點分離（Separation of Concerns）** 設計模式，分為兩個層次：\r
- **usePagination.js**（邏輯層）：管理分頁狀態、處理 API 參數轉換、解析 API 回應\r
- **AppPagination.vue**（展示層）：渲染分頁按鈕、處理使用者點擊、發送 update:page 事件\r
\r
---\r
\r
### 🔧 usePagination Composable\r
\r
**檔案位置：** \`src/composables/usePagination.js\`\r
**功能：** 提供分頁狀態管理和資料處理的可組合函數\r
\r
#### 回傳值\r
\`\`\`javascript\r
{\r
  paginationModel,           // 分頁狀態物件\r
  updatePaginationPage,      // 更新頁碼函數（必須使用此函數處理換頁，才會觸發 API 請求）\r
  mergePaginationParameter,  // 合併分頁參數到 API 請求\r
  extractPaginationContent,  // 從 API 回應中提取分頁資料\r
}\r
\`\`\`\r
\r
#### paginationModel 結構\r
\`\`\`javascript\r
{\r
  page: 1,           // 當前頁碼（起始值：1）\r
  pageSize: 15,      // 每頁筆數（預設：15）\r
  itemCount: 0,      // 總筆數\r
  pageCount: 0,      // 總頁數\r
  prefix: Function,  // 分頁前綴文字生成函數\r
}\r
\`\`\`\r
\r
---\r
\r
### 📋 主要方法\r
\r
#### 1. mergePaginationParameter(parameter)\r
將分頁參數合併到 API 請求參數中。\r
\r
> **內部機制：** \`pageNo\` 來自內部的 \`requestPage\`（而非 \`paginationModel.page\`），只有透過 \`updatePaginationPage\` 才會更新 \`requestPage\`。這確保 \`extractPaginationContent\` 回寫 \`paginationModel.page\` 時不會觸發 computed 重算，避免無限 API 循環。\r
\r
**輸入：**\r
\`\`\`javascript\r
{ keyword: '測試' }\r
\`\`\`\r
\r
**輸出：**\r
\`\`\`javascript\r
{\r
  keyword: '測試',\r
  pageNo: 1,      // 頁碼（從 1 開始）\r
  pageSize: 15    // 每頁筆數\r
}\r
\`\`\`\r
\r
#### 2. extractPaginationContent(response)\r
從 API 回應中提取資料並更新分頁狀態。\r
\r
**支援兩種 API 回應格式：**\r
\r
格式 1（推薦）：使用 page/size\r
\`\`\`javascript\r
{\r
  content: [...],\r
  page: 1,\r
  size: 15,\r
  totalPages: 10,\r
  total: 150,\r
  offset: 0\r
}\r
\`\`\`\r
\r
格式 2：使用 number/pageSize\r
\`\`\`javascript\r
{\r
  content: [...],\r
  number: 1,\r
  pageSize: 15,\r
  totalPages: 10,\r
  total: 150,\r
  offset: 0\r
}\r
\`\`\`\r
\r
> **自動處理：** 提取 content 陣列並更新 paginationModel、為每筆資料附加 $$RowNumber（序號）和 $$RowIndex（索引）\r
\r
---\r
\r
### ⚠️ 換頁必須使用 updatePaginationPage\r
\r
> 🚨 **重要行為規則：所有換頁操作一律使用 updatePaginationPage**\r
> 不能直接賦值 \`paginationModel.page = page\`，這樣**只會更新 UI，不會觸發 API 請求**。\r
\r
#### ❌ 錯誤寫法\r
\`\`\`javascript\r
// 直接賦值 → 只更新 UI，不觸發 API\r
paginationModel.value.page = 2\r
\r
// 事件處理中直接賦值 → 同樣不會觸發 API\r
@update:page="page => (paginationModel.page = page)"\r
\`\`\`\r
\r
#### ✅ 正確寫法\r
\`\`\`javascript\r
// 使用函數 → 同時更新 requestPage 和 UI，觸發 API\r
updatePaginationPage(2)\r
\r
// 事件處理中使用函數\r
@update:page="updatePaginationPage"\r
\`\`\`\r
\r
#### 行為對比\r
\r
| 操作 | 更新 requestPage | 更新 UI (paginationModel.page) | 觸發 API |\r
|---|:---:|:---:|:---:|\r
| \`paginationModel.page = 2\` | ❌ | ✅ | ❌ |\r
| \`updatePaginationPage(2)\` | ✅ | ✅ | ✅ |\r
\r
**為什麼這樣設計？**\r
\r
\`mergePaginationParameter\` 產生 \`pageNo\` 時，讀取的是內部獨立的 \`requestPage\`，**不是** \`paginationModel.page\`。\r
\r
這個設計是為了避免無限循環：\`extractPaginationContent\` 會回寫 \`paginationModel.page\`，如果 \`mergePaginationParameter\` 也讀取它，就會形成 computed → API → 回寫 → computed 的無限循環。透過 \`requestPage\` 將兩者分離，徹底切斷循環。\r
\r
\`\`\`\r
extractPaginationContent 寫入 paginationModel.page\r
  → mergePaginationParameter 的 computed 重算\r
  → 產生新物件觸發 vue-query\r
  → API 請求 → 回應\r
  → extractPaginationContent 又寫入\r
  → 無限循環 ♻️\r
\`\`\`\r
\r
---\r
\r
### 🎨 AppPagination 元件\r
\r
**檔案位置：** \`src/components/AppPagination.vue\`\r
**功能：** 專為無障礙網頁設計的分頁 UI 元件，符合 WCAG 2.1 AA 無障礙標準，主要用於 public 頁面（非登入頁面）以通過無障礙檢測\r
\r
#### Props\r
\r
| Props | 類型 | 必填 | 預設值 | 說明 |\r
|---|---|:---:|---|---|\r
| \`page\` | Number | ✅ | - | 當前頁碼（1-based） |\r
| \`total\` | Number | ✅ | - | 總筆數 |\r
| \`pageSize\` | Number | ❌ | 10 | 每頁筆數 |\r
| \`maxPageButtons\` | Number | ❌ | 7 | 最多顯示幾個頁碼按鈕 |\r
\r
#### Events\r
\r
| Events | 參數 | 說明 |\r
|---|---|---|\r
| \`update:page\` | (page: Number) | 當使用者點擊頁碼時觸發 |\r
\r
#### ✨ 無障礙特性（WCAG 2.1 AA 標準）\r
\r
> **重要提醒：** 本元件專為通過政府網站無障礙檢測而設計，確保視障、肢障等使用者也能順利操作分頁功能。\r
\r
- **ARIA 標籤：** \`aria-label\` 為每個按鈕提供明確說明（如「第 3 頁」、「上一頁」）\r
- **當前頁標示：** \`aria-current="page"\` 告知螢幕閱讀器目前所在頁面\r
- **鍵盤導航：** 完整支援 Tab 鍵切換、Enter/Space 鍵觸發\r
- **視覺對比：** 當前頁高亮、disabled 狀態明確，符合色彩對比度要求\r
- **螢幕閱讀器：** 提供完整的頁碼資訊朗讀（如「共 150 筆資料」）\r
- **焦點管理：** 清晰的焦點框線，易於追蹤當前位置\r
\r
#### ⚠️ 重要觀念：Props ≠ API Request 參數\r
\r
AppPagination 是純 UI 元件，只負責顯示分頁介面，**不負責 API 通訊**。\r
\r
- **元件 Props（page, pageSize）**：只是 Vue 元件內部的命名，用於接收資料來顯示 UI\r
- **API Request 參數**：由 usePagination 的 mergePaginationParameter 產生，實際發送的是 \`pageNo\` 和 \`pageSize\`\r
\r
> **簡單來說：** AppPagination 的 \`:page\` prop 只是傳資料給 UI 元件，與後端 API 參數無關。\r
\r
---\r
\r
### 💡 使用方式\r
\r
#### 方式一：單獨使用 AppPagination\r
\r
適用於自訂列表佈局的情況：\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <!-- 自訂的列表 -->\r
    <div v-for="item in dataList" :key="item.id">\r
      {{ item.title }}\r
    </div>\r
\r
    <!-- 分頁元件 -->\r
    <app-pagination\r
      :page="paginationModel.page"\r
      :total="paginationModel.itemCount"\r
      :page-size="paginationModel.pageSize"\r
      @update:page="updatePaginationPage"\r
    />\r
  </div>\r
</template>\r
\r
<script setup>\r
import { useGetDataList } from '@/api/example'\r
\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
const queryParams = computed(() => mergePaginationParameter({}))\r
const { data: apiResponse } = useGetDataList(queryParams)\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
<\/script>\r
\`\`\`\r
\r
#### 方式二：搭配 AppTable 使用 ✅ 推薦\r
\r
適用於需要表格展示的情況，分頁會自動整合在表格下方：\r
\r
\`\`\`vue\r
<template>\r
  <app-table\r
    striped\r
    single-line\r
    accessible\r
    :pagination="paginationModel"\r
    @update:page="updatePaginationPage"\r
  >\r
    <tbody>\r
      <tr v-for="item in dataList" :key="item.id">\r
        <td>{{ item.title }}</td>\r
        <td>{{ item.date }}</td>\r
      </tr>\r
    </tbody>\r
  </app-table>\r
</template>\r
\r
<script setup>\r
import { useGetDataList } from '@/api/example'\r
\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
const queryParams = computed(() => mergePaginationParameter({}))\r
const { data: apiResponse } = useGetDataList(queryParams)\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
<\/script>\r
\`\`\`\r
\r
> ⚠️ **AppTable 重點說明：**\r
> - 必須加上 \`accessible\` prop（public 頁面使用無障礙版本）\r
> - 傳入 \`:pagination="paginationModel"\`（將整個分頁狀態傳入）\r
> - 監聽 \`@update:page\` 事件並呼叫 \`updatePaginationPage\`\r
> - **必須使用 \`updatePaginationPage\` 處理換頁事件，直接修改 \`paginationModel.page\` 不會觸發 API 請求！**\r
\r
---\r
\r
### 📝 完整範例\r
\r
#### 搭配搜尋功能（AppTable）\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <!-- 搜尋表單 -->\r
    <div class="mb-4">\r
      <input v-model="searchModel.keyword" placeholder="請輸入關鍵字" />\r
      <button @click="handleSearch">搜尋</button>\r
      <button @click="handleReset">清除</button>\r
    </div>\r
\r
    <!-- 表格 + 分頁 -->\r
    <app-table\r
      striped\r
      single-line\r
      accessible\r
      :pagination="paginationModel"\r
      @update:page="updatePaginationPage"\r
    >\r
      <tbody>\r
        <tr v-for="item in dataList" :key="item.id">\r
          <td>{{ item.title }}</td>\r
          <td>{{ item.date }}</td>\r
        </tr>\r
      </tbody>\r
    </app-table>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { cloneDeep } from 'lodash-es'\r
import { useGetNewsList } from '@/api/news'\r
\r
// 搜尋條件\r
const searchModel = ref({\r
  keyword: '',\r
})\r
\r
// 實際送出的查詢參數\r
const queryParams = ref({})\r
\r
// 分頁管理\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
// 合併分頁參數\r
const apiParams = computed(() => mergePaginationParameter(queryParams.value))\r
\r
// 呼叫 API\r
const { data: apiResponse } = useGetNewsList(apiParams)\r
\r
// 提取資料\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
\r
// 執行搜尋\r
const handleSearch = () => {\r
  queryParams.value = cloneDeep(searchModel.value)\r
}\r
\r
// 清除條件\r
const handleReset = () => {\r
  searchModel.value = { keyword: '' }\r
  queryParams.value = {}\r
}\r
<\/script>\r
\`\`\`\r
\r
#### 自訂每頁筆數\r
\r
\`\`\`vue\r
<script setup>\r
// 初始化時設定每頁 20 筆\r
const { paginationModel, updatePaginationPage } = usePagination({\r
  pageSize: 20\r
})\r
<\/script>\r
\r
<template>\r
  <app-table\r
    accessible\r
    :pagination="paginationModel"\r
    @update:page="updatePaginationPage"\r
  >\r
    <!-- 表格內容 -->\r
  </app-table>\r
</template>\r
\`\`\`\r
\r
#### 調整最大顯示按鈕數\r
\r
\`\`\`vue\r
<template>\r
  <!-- 最多顯示 5 個頁碼按鈕（預設 7 個） -->\r
  <app-pagination\r
    :page="paginationModel.page"\r
    :total="paginationModel.itemCount"\r
    :page-size="paginationModel.pageSize"\r
    :max-page-buttons="5"\r
    @update:page="updatePaginationPage"\r
  />\r
</template>\r
\r
<!-- 顯示效果：< 1 ... 3 4 5 ... 19 > 共 279 筆資料 -->\r
\`\`\`\r
\r
#### 換頁時捲動到頂部\r
\r
\`\`\`javascript\r
import { useAppScroll } from '@/composables/useAppScroll'\r
\r
const { scrollToTop } = useAppScroll()\r
const { paginationModel } = usePagination()\r
\r
// 監聽 page 變化，換頁時自動捲動到頂部\r
watchEffect(() => {\r
  if (paginationModel.value.page) {\r
    scrollToTop()\r
  }\r
})\r
\`\`\`\r
\r
---\r
\r
### ❓ 常見問題\r
\r
#### Q1: 應該使用哪種方式？\r
- **有表格展示** → 使用方式二（AppTable + pagination prop）✅ 推薦\r
- **自訂列表佈局** → 使用方式一（單獨 AppPagination）\r
\r
#### Q2: 為什麼 AppTable 的分頁點擊沒反應？\r
忘記監聽 \`@update:page\` 事件！必須這樣寫：\r
\r
\`\`\`vue\r
<!-- ❌ 錯誤：沒有監聽事件 -->\r
<app-table :pagination="paginationModel">\r
\r
<!-- ❌ 錯誤：直接修改 paginationModel.page，不會觸發 API 請求 -->\r
<app-table :pagination="paginationModel" @update:page="page => (paginationModel.page = page)">\r
\r
<!-- ✅ 正確：使用 updatePaginationPage -->\r
<app-table\r
  :pagination="paginationModel"\r
  @update:page="updatePaginationPage"\r
>\r
\`\`\`\r
\r
**運作原理：**\r
1. 使用者點擊頁碼按鈕\r
2. AppPagination 元件發出 \`update:page\` 事件\r
3. AppTable 接收到事件後，再次發出 \`update:page\` 事件\r
4. 父元件透過 \`updatePaginationPage\` 同時更新內部 \`requestPage\` 和 \`paginationModel.page\`\r
5. \`requestPage\` 更新後，\`mergePaginationParameter\` 的 computed 重新計算，觸發 API 請求\r
\r
#### Q3: AppTable 的 accessible prop 是什麼？\r
控制使用哪一種分頁元件：\r
- \`accessible\` - 使用 **AppPagination 無障礙版本**（符合 WCAG AA 標準）\r
- 不加或 \`accessible=false\` - 使用 Naive UI 的 n-pagination（無障礙不合規）\r
\r
\`\`\`vue\r
<!-- ✅ Public 頁面（對外服務，必須符合無障礙標準） -->\r
<app-table accessible :pagination="paginationModel">\r
\r
<!-- ❌ Private 頁面（內部管理系統，不需無障礙檢測） -->\r
<app-table :pagination="paginationModel">\r
\`\`\`\r
\r
> 📌 **重要提醒：** 所有 **public 資料夾下的頁面**都必須加上 \`accessible\`，政府網站無障礙檢測會檢查這些頁面。\r
\r
#### Q4: 為什麼要分成兩個部分（usePagination + AppPagination）？\r
遵循 Vue 3 Composition API 的最佳實踐：\r
- **usePagination**：可重複使用的邏輯（純 JavaScript，可用於不同的 UI）\r
- **AppPagination**：可自訂的展示層（Vue 元件，可替換成其他 UI）\r
\r
這樣的設計讓你可以：\r
1. 在不同元件間共用分頁邏輯\r
2. 輕鬆替換 UI 元件而不影響邏輯\r
3. 更容易測試和維護\r
\r
#### Q5: 可以不使用 AppPagination 元件嗎？\r
可以！\`usePagination\` 是獨立的，你可以：\r
1. 使用其他分頁 UI 元件\r
2. 自己手刻分頁 HTML\r
3. 使用第三方套件\r
\r
只要透過 \`updatePaginationPage\` 更新頁碼即可（不能直接修改 \`paginationModel.page\`）。\r
\r
#### Q6: API 回應格式不符合怎麼辦？\r
\r
> ⚠️ **重要：** 後端應該遵循統一的分頁格式規範。如果發現格式不符合，請**優先回報後端團隊修正**，而不是前端自行轉換。\r
\r
正常情況下**不需要特殊處理**，因為：\r
- ✅ **後端應遵循標準格式**：專案後端 API 已統一使用標準分頁格式\r
- ✅ **前端自動適配**：\`extractPaginationContent\` 已支援兩種常見格式\r
\r
格式 1（推薦）：使用 page/size\r
\`\`\`json\r
{\r
  "content": [...],\r
  "page": 1,\r
  "size": 15,\r
  "totalPages": 10,\r
  "total": 150\r
}\r
\`\`\`\r
\r
格式 2：使用 number/pageSize\r
\`\`\`json\r
{\r
  "content": [...],\r
  "number": 1,\r
  "pageSize": 15,\r
  "totalPages": 10,\r
  "total": 150\r
}\r
\`\`\`\r
\r
如果遇到格式不符合的情況：\r
1. **優先做法**：聯繫後端團隊調整 API 回應格式，統一使用標準格式\r
2. **臨時方案**（不推薦，會增加維護成本）：\r
\r
\`\`\`javascript\r
// 臨時方案範例（不推薦）\r
const { data: apiResponse } = useGetDataList(apiParams)\r
\r
const dataList = computed(() => {\r
  if (!apiResponse.value) return []\r
  \r
  // 將非標準格式轉換為標準格式\r
  const standardFormat = {\r
    content: apiResponse.value.items,\r
    page: apiResponse.value.currentPage,\r
    size: apiResponse.value.perPage,\r
    totalPages: apiResponse.value.pages,\r
    total: apiResponse.value.totalItems\r
  }\r
  \r
  return extractPaginationContent(standardFormat)\r
})\r
\`\`\`\r
\r
> 💡 發現格式不符時，請回報給後端團隊統一調整，避免每個頁面都要寫轉換邏輯。\r
\r
#### Q7: 如何在頁碼變更時觸發額外動作？\r
使用 \`watchEffect\` 或 \`watch\`：\r
\r
\`\`\`javascript\r
import { useAppScroll } from '@/composables/useAppScroll'\r
\r
const { scrollToTop } = useAppScroll()\r
\r
watchEffect(() => {\r
  // 當 page 改變時，捲動到頂部\r
  if (paginationModel.value.page) {\r
    scrollToTop()\r
    console.log('切換到第', paginationModel.value.page, '頁')\r
  }\r
})\r
\`\`\`\r
\r
#### Q8: AppTable 沒有 pagination prop 怎麼辦？\r
這種情況表示這個 app-table 只用來展示靜態資料，不需要分頁功能：\r
\r
\`\`\`vue\r
<!-- 靜態表格，只需要 accessible -->\r
<app-table accessible>\r
  <tbody>\r
    <tr>\r
      <td>資料1</td>\r
    </tr>\r
    <tr>\r
      <td>資料2</td>\r
    </tr>\r
  </tbody>\r
</app-table>\r
\`\`\`\r
\r
只有需要分頁功能的表格才需要加上 \`:pagination\` 和 \`@update:page\`。\r
\r
#### Q9: 為什麼不能直接用 paginationModel.page = page 處理換頁？\r
\r
因為 \`mergePaginationParameter\` 內部使用獨立的 \`requestPage\` 來產生 \`pageNo\`，而非讀取 \`paginationModel.page\`。\r
\r
直接修改 \`paginationModel.page\` 只會更新 UI 顯示，**不會觸發 API 請求**。必須透過 \`updatePaginationPage\` 同時更新 \`requestPage\` 和 \`paginationModel.page\`：\r
\r
\`\`\`javascript\r
// ❌ 錯誤：只更新 UI，不觸發 API\r
paginationModel.value.page = 2\r
\r
// ✅ 正確：同時更新 requestPage 和 UI，觸發 API\r
updatePaginationPage(2)\r
\`\`\`\r
\r
**設計原因：**\r
\r
\`extractPaginationContent\` 會從 API 回應中回寫 \`paginationModel.page\`（同步總頁數、總筆數等 UI 狀態）。如果 \`mergePaginationParameter\` 直接讀取 \`paginationModel.page\`，就會形成無限循環：\r
\r
\`\`\`\r
extractPaginationContent 寫入 paginationModel.page\r
  → mergePaginationParameter 的 computed 重算\r
  → 產生新物件觸發 vue-query\r
  → API 請求 → 回應\r
  → extractPaginationContent 又寫入\r
  → 無限循環 ♻️\r
\`\`\`\r
\r
透過 \`requestPage\` 將「API 請求用的頁碼」和「UI 顯示用的頁碼」分離，徹底切斷循環。\r
\r
---\r
\r
## ⚙️ 後端實作指引\r
\r
### 📌 統一規範\r
\r
本專案統一採用以下兩項**強制規定**，其餘 Service / Repository 的實作方式不限制：\r
- **Request：** 含有分頁參數的 Request 物件，一律繼承 \`DefaultPageParams\`\r
- **Response：** 分頁查詢的回應，一律回傳 \`Pagination<T>\`\r
\r
---\r
\r
### 1. 核心類別說明\r
\r
#### Request 端\r
\r
| 類別 | 路徑 | 說明 |\r
|---|---|---|\r
| \`PageParams\` | moi.rdss.platform.paging.PageParams | 分頁參數介面，定義 getPageNo() / getPageSize() |\r
| \`DefaultPageParams\` | moi.rdss.platform.paging.DefaultPageParams | 分頁參數基礎類，預設 pageNo=1、pageSize=10 |\r
\r
#### Response 端\r
\r
| 類別 | 路徑 | 說明 |\r
|---|---|---|\r
| \`Pagination<T>\` | moi.rdss.platform.paging.Pagination | 統一分頁回應物件（自訂），所有分頁 API 均回傳此型別 |\r
\r
#### 工具類（選用）\r
\r
| 類別 | 方法 | 說明 |\r
|---|---|---|\r
| \`RequestUtils\` | getPageRequest(PageParams) | 將 Request 轉為 Spring 的 PageRequest，自動處理頁碼從 1 → 0 的轉換 |\r
\r
---\r
\r
### 2. Request：繼承 DefaultPageParams\r
\r
> ✅ **強制規範：** 需要分頁的 Request 物件，一律繼承 \`DefaultPageParams\`，不可自行重複定義 pageNo / pageSize 欄位。\r
\r
\`\`\`java\r
@Data\r
@SuperBuilder\r
@NoArgsConstructor\r
public class FooListReq extends DefaultPageParams {\r
\r
    @Schema(description = "名稱關鍵字")\r
    private String name;\r
\r
    @Schema(description = "狀態")\r
    private String status;\r
}\r
\`\`\`\r
\r
**DefaultPageParams 已內建以下欄位：**\r
\r
| 欄位 | 預設值 | 說明 |\r
|---|---|---|\r
| \`pageNo\` | 1 | 前端頁碼從 1 開始 |\r
| \`pageSize\` | 10 | 每頁預設 10 筆 |\r
\r
---\r
\r
### 3. Response：回傳 Pagination\\<T\\>\r
\r
> ✅ **強制規範：** 所有分頁查詢的 API 回應，一律包裝為 \`Pagination<T>\`，不可直接回傳 Spring 的 \`Page<T>\` 給前端。\r
\r
**Pagination\\<T\\> JSON 回應格式：**\r
\`\`\`json\r
{\r
  "content": [],\r
  "total": 100,\r
  "size": 10,\r
  "number": 1,\r
  "totalPages": 10,\r
  "numberOfElements": 10,\r
  "first": true,\r
  "last": false,\r
  "offset": 0,\r
  "empty": false,\r
  "extra": {}\r
}\r
\`\`\`\r
\r
| 欄位 | 型別 | 說明 |\r
|---|---|---|\r
| \`content\` | Array | 資料集合 |\r
| \`total\` | Integer | 總筆數 |\r
| \`size\` | Integer | 每頁筆數 |\r
| \`number\` | Integer | 目前頁次（從 1 開始） |\r
| \`totalPages\` | Integer | 總頁數 |\r
| \`numberOfElements\` | Integer | 本頁實際筆數 |\r
| \`first\` | Boolean | 是否為第一頁 |\r
| \`last\` | Boolean | 是否為最後一頁 |\r
| \`offset\` | Integer | 分頁位移 |\r
| \`empty\` | Boolean | 是否有資料 |\r
| \`extra\` | Object | 額外附加資料（選用） |\r
\r
---\r
\r
### 4. Service / Repository 實作彈性說明\r
\r
Service 與 Repository 的實作方式依 SQL 複雜程度自行決定，沒有強制標準寫法：\r
\r
| 情境 | Repository 回傳 | Service 最終組裝 |\r
|---|---|---|\r
| 簡單查詢，條件單純 | Spring Data JPA 的 \`Page<Entity>\` | 轉換後包裝成 \`Pagination<T>\` |\r
| 複雜 SQL，需自組查詢 | \`Page<Entity>\` 或 \`List<Entity>\` 皆可 | 轉換後包裝成 \`Pagination<T>\` |\r
\r
> **關鍵原則：** 不論 Service / Repository 內部怎麼實作，最終在 Controller 回傳給前端的格式一律是 \`Pagination<T>\`，確保前端收到的分頁格式固定一致。\r
\r
---\r
\r
### 5. Pagination\\<T\\> 常用建構方式\r
\r
實作時依情境選擇適合的建構子，以下為常見用法供參考：\r
\r
\`\`\`java\r
// 搭配 Spring Data JPA 的 Page<Entity> 使用（最常見）\r
return new Pagination<>(dtos, pageable, page.getTotalElements());\r
\r
// 手動指定分頁資訊（複雜 SQL / Native SQL）\r
return new Pagination<>(dtos, pageNumber, pageSize, total);\r
\r
// 附加額外欄位（如統計數字、摘要）\r
Pagination<FooDto> result = new Pagination<>(dtos, pageable, total);\r
result.addExtra("totalAmount", 99999L);\r
return result;\r
\r
// 從現有 Pagination 轉型\r
return existingPagination.map(entity -> convertToDto(entity));\r
\`\`\`\r
\r
> ⚠️ **注意：** Spring Data JPA 的頁碼從 0 開始，前端傳入的 pageNo 從 1 開始。可使用 \`RequestUtils.getPageRequest(req)\` 自動轉換，或自行處理 -1 的計算。\r
\r
---\r
\r
### 6. 禁止事項（Do NOT）\r
\r
| ❌ 禁止 | ✅ 應改為 |\r
|---|---|\r
| 回傳 Spring 的 \`Page<T>\` 給前端 | 回傳 \`Pagination<T>\` |\r
| Request 物件自行重複定義 pageNo / pageSize 欄位 | 繼承 \`DefaultPageParams\` |\r
\r
---\r
\r
### 7. 快速對照表\r
\r
| 層次 | Request 型別 | Response 型別 | 備註 |\r
|---|---|---|---|\r
| **Controller** | \`XxxReq extends DefaultPageParams\` | \`ResponseEntity<Pagination<XxxDto>>\` | 強制規範 |\r
| **Service** | 由 PG 自行決定 | \`Pagination<XxxDto>\` | 強制規範 |\r
| **Repository** | 由 PG 自行決定 | \`Page<T>\` 或 \`List<T>\` 皆可 | 依 SQL 複雜度決定 |\r
`,V1=`# 5. API 呼叫方式\r
\r
遵循 SSDLC 安全原則，統一使用 POST 方法傳遞參數。\r
\r
---\r
\r
## 🔒 SSDLC 安全原則\r
\r
基於 Secure Software Development Lifecycle（安全軟體開發生命週期）原則，**所有 API 請求統一使用 POST 方法**，避免敏感資料暴露於 URL 中。\r
\r
### 為何不可使用 POST 以外的方法？\r
- **GET 方法**：參數暴露在 URL，容易被瀏覽器歷史記錄、伺服器 log、代理伺服器記錄，造成資料外洩風險\r
- **PUT/PATCH 方法**：雖然參數在 Body，但語義上不適合查詢操作，且部分防火牆或代理可能阻擋\r
- **DELETE 方法**：通常不支援 Request Body，重要參數需放在 URL，同樣有安全疑慮\r
- **安全性考量**：POST + Body 可確保所有參數加密傳輸（HTTPS），不會留存於任何 URL 記錄中\r
\r
> ⏱️ **註記**：現有系統若使用非 POST 方法，請於未來排程時間逐步修正為符合 SSDLC 規範的 POST 方法。\r
\r
---\r
\r
## 📋 實作規範\r
\r
### ✓ 查詢類 API\r
使用 **POST + Body**\r
- 查詢條件放在 Request Body\r
- 分頁參數（page、size）也放在 Body\r
- 避免在 URL 中暴露查詢條件\r
\r
\`\`\`\r
POST /api/user/query\r
\r
{\r
  "keyword": "搜尋關鍵字",\r
  "page": 1,\r
  "size": 15\r
}\r
\`\`\`\r
\r
### ✓ 操作類 API\r
使用 **POST + Body**\r
- 新增、修改、刪除統一用 POST\r
- 所有參數放在 Request Body\r
- 確保資料傳輸安全性\r
\r
\`\`\`\r
POST /api/user/save\r
\r
{\r
  "name": "使用者名稱",\r
  "email": "user@example.com",\r
  "status": "active"\r
}\r
\`\`\`\r
\r
---\r
\r
## ⚠️ 注意事項\r
- **禁止使用 GET 方法**：即使是單純查詢，也應使用 POST + Body\r
- **URL 參數限制**：避免將任何業務參數放在 Query String 中\r
- **API 命名規範**：建議使用動詞命名，如 \`/query\`、\`/save\`、\`/delete\`\r
- **文件化**：每支 API 都需明確記錄 Request Body 結構\r
\r
---\r
\r
## 範例對比\r
\r
### ❌ 不符合 SSDLC 原則\r
\`\`\`\r
// 錯誤示範：使用 GET 方法\r
GET /api/user/list?keyword=測試&status=active&page=1&size=15\r
\r
// 問題：\r
// 1. 查詢條件暴露在 URL 中\r
// 2. 可能包含敏感資訊\r
// 3. 有長度限制\r
// 4. 容易被記錄在 log 中\r
\`\`\`\r
\r
### ✓ 符合 SSDLC 原則\r
\`\`\`\r
// 正確示範：使用 POST 方法\r
POST /api/user/query\r
\r
{\r
  "keyword": "測試",\r
  "status": "active",\r
  "page": 1,\r
  "size": 15\r
}\r
\r
// 優點：\r
// 1. 參數不暴露在 URL\r
// 2. 無長度限制\r
// 3. 提升安全性\r
// 4. 符合 SSDLC 規範\r
\`\`\`\r
\r
---\r
\r
# 附錄：後端輸入驗證實作規範\r
\r
## 適用規範依據\r
\r
本文件依據以下資安規範中的輸入驗證控制措施要求撰寫：\r
\r
| 規範 | 對應條文 / 說明 |\r
|---|---|\r
| SSDLC（安全軟體開發生命週期） | 輸入驗證（Input Validation）控制措施，要求於伺服器端驗證所有輸入之語法、語義、長度及字元集 |\r
| OWASP Top 10 A03:2021 – Injection | 防止 SQL Injection、XSS、Command Injection 等注入攻擊，建議以白名單驗證輸入 |\r
| 行政院「資通系統防護基準」 | 資通系統應驗證使用者輸入之有效語法與語義（字元集、長度、數值範圍、可接受值），並建立輸入白名單或以黑名單過濾惡意資料 |\r
| ISO/IEC 27002:2022 — 8.28 安全程式設計 | 要求對所有外部輸入進行驗證，避免已知弱點（如 Injection、Buffer Overflow） |\r
\r
本文件整理目前後端已實作內容與待補強之處，並提供對應實作指引。\r
\r
---\r
\r
## 一、目前已實作（可參考）\r
\r
| 機制 | 實作位置 | 說明 |\r
|---|---|---|\r
| Bean Validation @Valid | DTO + Controller | 欄位必填、格式驗證 |\r
| XSS 黑名單過濾 | XssStringJsonDeserializer + XssProtectionUtils | 全域套用於 JSON Body |\r
| 密碼字元集白名單 | PWordUtils.checkPWordRule() | 限制可用字元與長度 |\r
| 統一例外處理 | RestApiExceptionHandler | 驗證失敗回傳 400 |\r
\r
---\r
\r
## 二、待補強項目與實作方式\r
\r
### 📌 SSDLC 架構方向說明\r
\r
依據 SSDLC 規範，建議將現有使用 \`GET + @RequestParam\` 的 API 全面改為 \`POST + Request Body\`。此方式可同時解決以下問題，且不需額外補強 XSS 過濾與 Bean Validation：\r
\r
| 問題 | GET + @RequestParam | POST + Request Body |\r
|---|:---:|:---:|\r
| 參數暴露於 URL / Log | ❌ | ✅ 參數在 Body，不出現於 URL |\r
| XSS 自動過濾 | ❌ 需額外處理 | ✅ 全域 XssStringJsonDeserializer 自動覆蓋 |\r
| Bean Validation | ❌ 需加 @Validated | ✅ @Valid 直接作用於 DTO |\r
| 敏感資料（身分證、帳號）外洩風險 | ❌ 容易被 access log 記錄 | ✅ 不出現在 log |\r
\r
### @RequestParam 僅保留於以下無法改變的情境\r
\r
| 情境 | 說明 | 範例 |\r
|---|---|---|\r
| 第三方 OAuth / SSO 回調 | 第三方規範強制使用 URL 參數，後端無法控制格式 | \`/callback?code=xxx&state=yyy\` |\r
| 瀏覽器直接觸發的檔案下載 | 需讓瀏覽器直接開啟 URL，不能用 POST Body | \`/file/download?token=xxx\` |\r
| Spring Actuator 內建端點 | 框架自己定義，開發者無法修改 | \`/actuator/health\` |\r
| 符合 RESTful 語意的識別用路徑 | @PathVariable 用於資源識別（非查詢條件），屬例外但須補上長度驗證 | \`/api/users/{id}\` |\r
\r
> ⚠️ 以上例外情境若出現敏感資料（身分證號、帳號等），仍應避免使用 URL 參數，改以 POST Body 傳遞。\r
\r
---\r
\r
### ❶ 現有 GET + @RequestParam API 改為 POST + Request Body\r
\r
#### 問題說明\r
\`@RequestParam\` 參數出現在 URL 中，會被伺服器 access log、瀏覽器歷史、Proxy 記錄，且不受全域 \`XssStringJsonDeserializer\` 保護，需額外補強。\r
\r
#### 問題範例（Pnr014b02Controller.java）\r
\`\`\`java\r
// ❌ 參數暴露於 URL，無 XSS 過濾，無長度驗證\r
@GetMapping("/list")\r
public ResponseEntity<?> getList(\r
    @RequestParam String status,\r
    @RequestParam String applyStage,\r
    @RequestParam(required = false) String seqNo,\r
    @RequestParam(required = false) String idNo,\r
    @RequestParam(required = false) String yy\r
)\r
\`\`\`\r
\r
#### 修正方式：改為 POST + DTO\r
\r
**Step 1：建立對應的 Request DTO**\r
\`\`\`java\r
import jakarta.validation.constraints.*;\r
import lombok.Data;\r
\r
@Data\r
public class GetListReq {\r
\r
    @NotBlank(message = "status 不能為空")\r
    @Pattern(regexp = "^[0-9]$", message = "status 格式錯誤，應為單一數字")\r
    private String status;\r
\r
    @NotBlank(message = "applyStage 不能為空")\r
    @Size(max = 10, message = "applyStage 長度不可超過10字元")\r
    private String applyStage;\r
\r
    @Size(max = 20, message = "seqNo 長度不可超過20字元")\r
    private String seqNo;\r
\r
    @Size(max = 10, message = "idNo 長度不可超過10字元")\r
    private String idNo;\r
\r
    @Pattern(regexp = "^[0-9]{3,4}$", message = "yy 格式錯誤，應為3~4位數字")\r
    private String yy;\r
}\r
\`\`\`\r
\r
**Step 2：Controller 改為 @PostMapping + @RequestBody**\r
\`\`\`java\r
// ✅ 改為 POST + Request Body\r
@PostMapping("/list")\r
public ResponseEntity<?> getList(@Valid @RequestBody GetListReq req) {\r
    // 原本 @RequestParam 的使用改為 req.getStatus() 等\r
}\r
\`\`\`\r
\r
---\r
\r
### ❷ 若仍有無法移除的 @RequestParam，需補強驗證與 XSS 過濾\r
\r
#### 問題說明\r
當確實無法改為 POST Body 時（如上述例外情境），需手動補強。\r
\r
#### 修正方式 A：補上 @Validated + 驗證標註\r
\`\`\`java\r
import org.springframework.validation.annotation.Validated;\r
\r
@Validated  // ← 加上此標註，@RequestParam 驗證才會生效\r
@RestController\r
public class SomeController {\r
\r
    @GetMapping("/download")\r
    public ResponseEntity<?> download(\r
        @RequestParam @Size(max = 50, message = "token 長度不可超過50字元") String token\r
    ) { ... }\r
}\r
\`\`\`\r
\r
在 RestApiExceptionHandler 補上對應例外處理：\r
\`\`\`java\r
import jakarta.validation.ConstraintViolationException;\r
\r
@ExceptionHandler(ConstraintViolationException.class)\r
public ResponseEntity<CustomApiResponse<?>> handleConstraintViolation(\r
        ConstraintViolationException e) {\r
    String errorMessage = e.getConstraintViolations().stream()\r
            .map(v -> v.getMessage())\r
            .collect(Collectors.joining(", "));\r
    return ResponseEntity.badRequest()\r
            .body(CustomApiResponse.failure("請求參數錯誤: " + errorMessage));\r
}\r
\`\`\`\r
\r
#### 修正方式 B：補上 XSS 過濾（新增全域 Filter）\r
\r
新增 \`XssRequestParameterFilter.java\`，包裝 HttpServletRequest 覆寫 getParameter：\r
\r
\`\`\`java\r
package moi.rdss.platform.config.filter;\r
\r
import jakarta.servlet.FilterChain;\r
import jakarta.servlet.ServletException;\r
import jakarta.servlet.http.HttpServletRequest;\r
import jakarta.servlet.http.HttpServletRequestWrapper;\r
import jakarta.servlet.http.HttpServletResponse;\r
import moi.rdss.platform.utils.XssProtectionUtils;\r
import org.springframework.stereotype.Component;\r
import org.springframework.web.filter.OncePerRequestFilter;\r
import java.io.IOException;\r
import java.util.Arrays;\r
\r
@Component\r
public class XssRequestParameterFilter extends OncePerRequestFilter {\r
\r
    @Override\r
    protected void doFilterInternal(HttpServletRequest request,\r
                                    HttpServletResponse response,\r
                                    FilterChain filterChain)\r
            throws ServletException, IOException {\r
        filterChain.doFilter(new XssRequestWrapper(request), response);\r
    }\r
\r
    static class XssRequestWrapper extends HttpServletRequestWrapper {\r
        public XssRequestWrapper(HttpServletRequest request) { super(request); }\r
\r
        @Override\r
        public String getParameter(String name) {\r
            return XssProtectionUtils.cleanXSS(super.getParameter(name));\r
        }\r
\r
        @Override\r
        public String[] getParameterValues(String name) {\r
            String[] values = super.getParameterValues(name);\r
            if (values == null) return null;\r
            return Arrays.stream(values)\r
                    .map(XssProtectionUtils::cleanXSS)\r
                    .toArray(String[]::new);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
---\r
\r
### ❸ DTO 欄位缺乏細部驗證（只有 @NotBlank，無長度/格式限制）\r
\r
#### 問題說明\r
部分 DTO 只標註 \`@NotBlank\`，但未限制最大長度或字元集，導致可傳入超長字串造成資料庫異常或服務拒絕。\r
\r
#### 修正方式\r
在 DTO 欄位補上對應驗證標註：\r
\r
\`\`\`java\r
import jakarta.validation.constraints.*;\r
\r
@NotBlank(message = "帳號不能為空")\r
@Size(max = 15, message = "帳號長度不可超過15字元")\r
@Pattern(regexp = "^[a-zA-Z0-9_-]+$", message = "帳號只能包含英數字、底線、橫線")\r
private String account;\r
\r
@NotBlank(message = "姓名不能為空")\r
@Size(max = 50, message = "姓名長度不可超過50字元")\r
private String name;\r
\r
@Size(max = 200, message = "備註長度不可超過200字元")\r
private String remark;\r
\`\`\`\r
\r
### 常用驗證標註對照表\r
\r
| 標註 | 說明 | 範例 |\r
|---|---|---|\r
| \`@NotBlank\` | 不可為空白字串 | 必填文字欄位 |\r
| \`@NotNull\` | 不可為 null | 必填數值/物件欄位 |\r
| \`@Size(min, max)\` | 限制字串或集合長度 | \`@Size(max = 50)\` |\r
| \`@Min\` / \`@Max\` | 限制數值範圍 | \`@Min(0) @Max(9999)\` |\r
| \`@Pattern(regexp)\` | 正則表達式格式驗證 | \`@Pattern(regexp = "^[0-9]+$")\` |\r
| \`@Email\` | Email 格式驗證 | Email 欄位 |\r
| \`@Digits(integer, fraction)\` | 限制數字位數 | \`@Digits(integer = 4, fraction = 0)\` |\r
\r
---\r
\r
## 三、驗證原則總結\r
\r
1. ✅ 所有驗證必須在 Server 端（後端）執行，不可只依賴前端\r
2. ✅ JSON Body → 使用 \`@Valid\` + DTO 標註\r
3. ✅ @RequestParam / @PathVariable → 使用 \`@Validated\` + 標註於參數\r
4. ✅ 字串輸入 → 使用白名單（\`@Pattern\` 限制字元集）優先於黑名單\r
5. ✅ XSS 過濾需同時涵蓋 JSON Body 與 URL 參數\r
6. ✅ 驗證失敗統一由 \`RestApiExceptionHandler\` 回傳 400 Bad Request\r
\r
---\r
\r
## 四、相關檔案位置\r
\r
| 檔案 | 路徑 |\r
|---|---|\r
| XSS 過濾工具 | \`moi.rdss.platform.utils.XssProtectionUtils\` |\r
| XSS JSON Deserializer | \`moi.rdss.platform.config.databind.XssStringJsonDeserializer\` |\r
| 密碼規則驗證 | \`moi.rdss.platform.utils.PWordUtils\` |\r
| 統一例外處理 | \`moi.rdss.platform.exception.handler.RestApiExceptionHandler\` |\r
| 安全設定 | \`moi.rdss.platform.config.SecurityConfig\` |\r
\r
---\r
\r
## 📌 優先修正建議\r
\r
1. **（首選）** 將現有 \`GET + @RequestParam\` API 全面改為 \`POST + Request Body + DTO\`，同時解決 XSS 過濾與 Bean Validation 問題\r
2. **（無法改 POST 時）** 補上 \`@Validated\` + 驗證標註，並新增 \`XssRequestParameterFilter\`\r
3. 逐一檢視既有 DTO 欄位是否補上 \`@Size\` 長度限制與 \`@Pattern\` 字元集白名單\r
`,G1=`# 6. 文字欄位長度\r
\r
前後端欄位長度驗證需保持一致，確保資料完整性。\r
\r
---\r
\r
## 📋 驗證原則\r
\r
### 前端驗證\r
- 使用 \`max\` 規則限制最大長度\r
- 提供即時錯誤提示訊息\r
- 在表單送出前阻擋不符規範的資料\r
- 提升使用者體驗\r
\r
### 後端驗證\r
- 使用 \`@Size\` 或 \`@Length\` 註解驗證\r
- 防止透過 Swagger 或 API 工具繞過前端驗證\r
- 確保資料庫欄位不會溢位\r
- 回傳明確的錯誤訊息\r
\r
---\r
\r
## ⚠️ 前後端雙重驗證的必要性\r
\r
理論上，前端已做長度限制，後端可不必重複驗證。但實務上，開發者可能透過 Swagger、Postman 等工具直接測試 API，若後端未設定驗證規則，可能會寫入不符合規範的資料至資料庫，造成資料品質問題。\r
\r
✓ **建議：前後端都應設定相同的長度限制，形成雙重防護機制。**\r
\r
---\r
\r
## 💡 前端實際使用範例\r
\r
### 範例 1：主要營業項目（限 200 字）\r
\`\`\`html\r
<app-form-row label="主要營業項目">\r
  <app-form-item\r
    :path="getWorkItemPath"\r
    :rule="[\r
      { required: saveType === 1, message: '請輸入營業項目' },\r
      { max: 200, message: '主要營業項目不可超過200個中文字' },\r
    ]"\r
  >\r
    <app-form-chinese-textarea \r
      v-model:value="getWorkItem" \r
      placeholder="營業項目" \r
    />\r
    <template #notice>以條列式簡述之，限200個中文字以內</template>\r
  </app-form-item>\r
</app-form-row>\r
\`\`\`\r
\r
### 範例 2：產品競爭力說明（限 600 字）\r
\`\`\`html\r
<app-form-row :label="false">\r
  <app-form-item\r
    path="commerce.potentialDesc"\r
    :rule="[\r
      { required: saveType === 1, message: '請輸入產品競爭力說明' },\r
      { max: 600, message: '產品競爭力說明不可超過600個中文字' },\r
    ]"\r
  >\r
    <app-form-chinese-textarea \r
      v-model:value="model.commerce.potentialDesc" \r
      placeholder="產品競爭力說明" \r
    />\r
    <template #notice>以條列式簡述之，限200個中文字以內</template>\r
  </app-form-item>\r
</app-form-row>\r
\`\`\`\r
\r
### 範例 3：其他說明（非必填，限 200 字）\r
\`\`\`html\r
<app-form-item\r
  path="commerce.shareratioDesc"\r
  :rule="[{ max: 200, message: '其他地區市場佔有率說明不可超過200個中文字' }]"\r
>\r
  <app-form-chinese-textarea\r
    v-model:value="model.commerce.shareratioDesc"\r
    placeholder="其他地區市場佔有率說明"\r
  />\r
  <template #notice>以條列式簡述之，限200個中文字以內</template>\r
</app-form-item>\r
\`\`\`\r
\r
### 關鍵說明\r
- \`:rule\` - 驗證規則陣列\r
- \`required\` - 必填驗證（通常依 saveType 動態判斷）\r
- \`max\` - 最大字數限制\r
- \`message\` - 錯誤提示訊息\r
- \`#notice slot\` - 顯示輔助說明文字\r
\r
---\r
\r
## 📏 常見長度規範參考\r
\r
| 欄位類型 | 建議長度 | 說明 |\r
|---|:---:|---|\r
| 標題（Title） | 50 字 | 適合短標題、名稱 |\r
| 摘要（Summary） | 200 字 | 簡短描述、條列說明 |\r
| 內容（Content） | 500 ~ 1000 字 | 詳細描述、長文內容 |\r
| 備註（Remark） | 200 ~ 500 字 | 補充說明 |\r
| 姓名（Name） | 20 ~ 50 字 | 人名、公司名稱 |\r
| 地址（Address） | 100 ~ 200 字 | 完整地址資訊 |\r
\r
---\r
\r
## 🔧 後端驗證範例（Java）\r
\r
\`\`\`java\r
public class CommerceDTO {\r
    \r
    // 主要營業項目 - 最長 200 字\r
    @Size(max = 200, message = "主要營業項目不可超過200個中文字")\r
    private String workItem;\r
    \r
    // 主要獲利來源 - 最長 200 字\r
    @Size(max = 200, message = "主要獲利來源不可超過200個中文字")\r
    private String psource;\r
    \r
    // 產品競爭力說明 - 必填且最長 600 字\r
    @NotBlank(message = "請輸入產品競爭力說明")\r
    @Size(max = 600, message = "產品競爭力說明不可超過600個中文字")\r
    private String potentialDesc;\r
    \r
    // 其他說明 - 非必填，最長 200 字\r
    @Size(max = 200, message = "其他地區市場佔有率說明不可超過200個中文字")\r
    private String shareratioDesc;\r
}\r
\`\`\`\r
\r
> **註：** 使用 \`@Size\` 或 \`@Length\` 註解，確保即使透過 Swagger 測試也無法寫入超長資料。\r
`,K1=`# 7. 上傳格式\r
\r
依檔案大小選擇 FormData 或 Base64。\r
\r
---\r
\r
## 上傳格式\r
\r
| 格式 | 說明 |\r
|---|---|\r
| **FormData** | 適合上傳檔案，支援多種資料類型。其他夾帶資料請後端包成一個 Object |\r
| **Base64** | 適合小型檔案，將檔案轉為字串格式 |\r
\r
---\r
\r
## FormData 使用方式\r
\r
### 有包物件\r
\`\`\`javascript\r
formData.set('req', new Blob([JSON.stringify(omit(modelValue, ['files']))], { type: 'application/json' }))\r
formData.set('file', modelValue.files[0])\r
\`\`\`\r
\r
### 沒包物件\r
\`\`\`javascript\r
formData.set('newsSubject', model.value.newsSubject)\r
formData.set('newsContent', model.value.newsContent)\r
formData.set('newsStartDate', useFormatDate(model.value.newsStartDate))\r
\`\`\`\r
`,Z1=`# 8. 下載格式\r
\r
支援回傳檔名或直接二進位串流。\r
\r
---\r
\r
## 回傳格式\r
\r
### Base64\r
**適合小型檔案下載**\r
\r
**優點：**\r
- 可以回傳其他資訊（如成功訊息）\r
\r
**缺點：**\r
- 檔案變大 33%\r
- 記憶體負擔大\r
\r
**回傳範例格式：**\r
\`\`\`json\r
{\r
  "statusCode": "200",\r
  "messageCode": null,\r
  "message": "執行成功",\r
  "data": {\r
    "exportFileData": "77u/LCwsLCzlpKfkuovntIDs...",\r
    "exportFileName": "大書紀資料明細資料表.csv"\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
### application/octet-stream\r
**適合大型檔案下載（需要額外處理 response header Content-Disposition 來取得檔名）**\r
\r
**優點：**\r
- 效能最佳\r
- 支援大檔案\r
- 下載體驗好\r
\r
**缺點：**\r
- 無法回傳其他訊息\r
`,X1=`# 9. 下拉選單 API\r
\r
因專案使用 Naive UI 元件庫，前端下拉選單必須使用 \`label\` 及 \`value\` 格式接收資料。\r
\r
---\r
\r
## 📌 重要規範\r
\r
後端提供的下拉選單 API 必須確保前端能直接轉換成 \`{ label, value }\` 格式，以符合 Naive UI 元件需求。\r
\r
---\r
\r
## 資料格式轉換\r
\r
### 後端 API 回傳範例\r
\`\`\`json\r
[\r
  { "dcName": "類別一", "depName": "部門一", "dcCode": "A001" },\r
  { "dcName": "類別二", "depName": "部門二", "dcCode": "A002" }\r
]\r
\`\`\`\r
\r
### 前端轉換處理\r
\`\`\`javascript\r
const originalOptions = computed(() =>\r
  map(toValue(data), item => ({\r
    value: item.dcCode,\r
    label: item.dcName,\r
    name: item.depName\r
  }))\r
)\r
\`\`\`\r
\r
### 最終使用格式\r
\`\`\`json\r
[\r
  { "value": "A001", "label": "類別一", "name": "部門一" },\r
  { "value": "A002", "label": "類別二", "name": "部門二" }\r
]\r
\`\`\`\r
\r
---\r
\r
## 實際應用範例\r
\r
### 下拉選單元件使用\r
\`\`\`vue\r
<template>\r
  <app-form-item :label="label" :path="path" :rule="rule">\r
    <app-form-select\r
      v-model:value="valueModel"\r
      :options="options"\r
      :loading="isFetching"\r
      @search="value => (searchText = value)"\r
    />\r
  </app-form-item>\r
</template>\r
\r
<script setup>\r
import { useCategoryCodeList } from '@/api/ptm/ptm031u11'\r
import { map } from 'lodash-es'\r
\r
// 呼叫 API 取得資料\r
const { isFetching, data } = useCategoryCodeList()\r
\r
// 轉換成 Naive UI 需要的 { value, label } 格式\r
const originalOptions = computed(() =>\r
  map(toValue(data), item => ({\r
    value: item.dcCode,\r
    label: item.dcName,\r
    name: item.depName\r
  }))\r
)\r
\r
const options = computed(() => [\r
  { label: '請選擇', value: '' },\r
  ...toValue(originalOptions)\r
])\r
<\/script>\r
\`\`\`\r
\r
---\r
\r
## 注意事項\r
- **value**：唯一識別值，用於提交表單\r
- **label**：顯示文字，呈現給使用者\r
- 後端 API 應提供清楚的欄位名稱，方便前端轉換\r
- 前端實作時，轉換邏輯統一使用 \`computed\` 處理，確保響應式更新\r
`,J1=[{name:"01-API協作規則.md",content:U1},{name:"02-參數一致性.md",content:H1},{name:"03-日期與時間格式.md",content:W1},{name:"04-分頁資料格式.md",content:q1},{name:"05-API呼叫方式與後端輸入驗證.md",content:V1},{name:"06-文字欄位長度.md",content:G1},{name:"07-上傳格式.md",content:K1},{name:"08-下載格式.md",content:Z1},{name:"09-下拉選單API.md",content:X1}];async function Y1(){const e=new z1,t=e.folder("RDSS專案-前後端協作規範");for(const r of J1)t.file(r.name,r.content);const n=await e.generateAsync({type:"blob"});$1.saveAs(n,"RDSS專案-前後端協作規範.zip")}const Q1=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},ev={class:"min-w-0"},tv={class:"hero sticky top-0 z-50 bg-gradient-to-b from-indigo-50 to-slate-50 border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-8"},nv={class:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3"},rv={class:"flex items-center gap-3 shrink-0"},iv=["disabled"],sv={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ov={key:1,class:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24"},av={class:"flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8"},lv={class:"hidden lg:block lg:flex-shrink-0 lg:w-64 lg:sticky lg:top-44 lg:self-start lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto"},cv={class:"bg-white rounded-xl p-5 shadow-lg"},uv={class:"space-y-1"},fv=["href","onClick"],dv={class:"p-4 space-y-2"},hv=["href","onClick"],pv={id:"sections",class:"flex-1 min-w-0 w-full max-w-full overflow-x-hidden"},gv={class:"flex items-center justify-between w-full"},mv={class:"text-lg md:text-xl lg:text-2xl font-bold"},vv={__name:"Home",setup(e){var p;const t=qe(!1),n=async()=>{t.value=!0;try{await Y1()}finally{t.value=!1}},r=[{id:"section-1",title:"1. API 協作規則",component:ct(()=>ut(()=>import("./ApiFormat-C2V1JCwv.js"),[]))},{id:"section-2",title:"2. 參數一致性",component:ct(()=>ut(()=>import("./ResponseStructure-DUCXDfWV.js"),[]))},{id:"section-3",title:"3. 日期與時間格式",component:ct(()=>ut(()=>import("./DateTimeFormat-DREffYvU.js"),[]))},{id:"section-4",title:"4. 分頁資料格式",component:ct(()=>ut(()=>import("./PaginationFormat-SH7xPgL3.js"),[]))},{id:"section-5",title:"5. API 呼叫方式",component:ct(()=>ut(()=>import("./ApiCallMethod-DJxP1BeN.js"),[]))},{id:"section-6",title:"6. 文字欄位長度",component:ct(()=>ut(()=>import("./TextFieldLength-DmRjxdXg.js"),[]))},{id:"section-7",title:"7. 上傳格式",component:ct(()=>ut(()=>import("./UploadFormat-B_e3OiHH.js"),[]))},{id:"section-8",title:"8. 下載格式",component:ct(()=>ut(()=>import("./DownloadFormat-CrXBHioi.js"),[]))},{id:"section-9",title:"9. 下拉選單 API (待討論)",component:ct(()=>ut(()=>import("./DropdownApi-trHzdCod.js"),[]))},{id:"appendix",title:"10. 測試環境",component:ct(()=>ut(()=>import("./TestEnvironment-0ODnKgch.js"),[]))},{id:"section-11",title:"11. 測試帳號",component:ct(()=>ut(()=>import("./TestAccounts-DOMGQnov.js"),__vite__mapDeps([0,1])))}],i=qe(((p=r[0])==null?void 0:p.id)||""),s=qe(!1);let a,o=null;const l=qe([]),c=()=>{s.value=!s.value},f=m=>{i.value=m;const d=document.getElementById(m);if(d){if(m==="section-1"){window.scrollTo({top:0,behavior:"smooth"});return}const w=d.getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:w,behavior:"smooth"})}},h=m=>{f(m),c()},g=()=>{const d=r.map(v=>document.getElementById(v.id)).filter(Boolean);if(!d.length)return;let b=d[0];for(const v of d)if(v.getBoundingClientRect().top-140<=0)b=v;else break;i.value=b.id};return Cr(()=>{a=()=>{o||(o=requestAnimationFrame(()=>{g(),o=null}))},window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),g()}),Fs(()=>{a&&(window.removeEventListener("scroll",a),window.removeEventListener("resize",a)),o&&(cancelAnimationFrame(o),o=null)}),(m,d)=>(at(),en("div",ev,[pe("header",tv,[d[6]||(d[6]=pe("nav",{class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3"},[pe("div",{class:"font-bold text-sm sm:text-base lg:text-lg tracking-wide break-words max-w-full"},"Frontend Development Guide")],-1)),pe("div",nv,[d[5]||(d[5]=pe("h2",{class:"text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words max-w-full"},"RDSS專案-前後端協作規範",-1)),pe("div",rv,[pe("button",{onClick:n,disabled:t.value,class:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},[t.value?(at(),en("svg",ov,[...d[3]||(d[3]=[pe("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),pe("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):(at(),en("svg",sv,[...d[2]||(d[2]=[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])])),Jr(" "+Gn(t.value?"打包中...":"下載規範MD檔"),1)],8,iv),d[4]||(d[4]=pe("span",{class:"text-xs sm:text-sm text-gray-500"},"最後編輯日期：2026-04-20",-1))])])]),pe("div",av,[pe("aside",lv,[pe("nav",cv,[d[7]||(d[7]=pe("div",{class:"text-xl font-bold mb-4 text-slate-600"},"目錄",-1)),pe("ul",uv,[(at(),en(Be,null,Ii(r,b=>pe("li",{key:b.id},[pe("a",{href:`#${b.id}`,class:or(["block px-3 py-2.5 text-gray-600 no-underline rounded-lg transition-all duration-200 text-sm hover:bg-slate-100 hover:text-slate-700 hover:translate-x-1",{"bg-slate-100 text-slate-700 translate-x-1":i.value===b.id}]),onClick:Bo(v=>f(b.id),["prevent"])},Gn(b.title),11,fv)])),64))])])]),pe("div",{class:"lg:hidden fixed bottom-6 right-6 z-40"},[pe("button",{onClick:c,class:"bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"},[...d[8]||(d[8]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])])]),s.value?(at(),en("div",{key:0,class:"lg:hidden fixed inset-0 w-screen bg-black bg-opacity-50 z-50",style:{height:"100vh"},onClick:c},[pe("div",{class:"absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto",style:{height:"100vh"},onClick:d[0]||(d[0]=Bo(()=>{},["stop"]))},[pe("div",{class:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"},[d[10]||(d[10]=pe("div",{class:"text-xl font-bold text-slate-700"},"目錄",-1)),pe("button",{onClick:c,class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[...d[9]||(d[9]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),pe("ul",dv,[(at(),en(Be,null,Ii(r,b=>pe("li",{key:b.id},[pe("a",{href:`#${b.id}`,class:or(["block px-4 py-3 text-gray-600 no-underline rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-slate-700",{"bg-indigo-100 text-indigo-700 font-medium":i.value===b.id}]),onClick:v=>h(b.id)},Gn(b.title),11,hv)])),64))])])])):Vf("",!0),pe("main",pv,[Re(dt(c0),{"expanded-names":l.value,"onUpdate:expandedNames":d[1]||(d[1]=b=>l.value=b),"display-directive":"if","arrow-placement":"right"},{default:Cn(()=>[(at(),en(Be,null,Ii(r,b=>Re(dt(d0),{key:b.id,name:b.id,id:b.id},{header:Cn(()=>[pe("div",gv,[pe("span",mv,Gn(b.title),1)])]),default:Cn(()=>[(at(),dr(mf(b.component)))]),_:2},1032,["name","id"])),64))]),_:1},8,["expanded-names"])])]),d[11]||(d[11]=pe("footer",{class:"py-8 md:py-10 px-4 text-center text-gray-500 border-t border-gray-200"},[pe("p",{class:"text-sm md:text-base"},"© 2026 Frontend Communication Guide Template")],-1))]))}},bv=Q1(vv,[["__scopeId","data-v-34e0b653"]]),yv=[{path:"/",name:"Home",component:bv}],_v=O1({history:u1("/frontend-development-guide/"),routes:yv}),nu=Ld(P0);nu.use(_v);nu.mount("#app");export{yi as $,vi as A,un as B,He as C,Ya as D,Sh as E,Be as F,wv as G,Gf as H,oc as I,kh as J,$s as K,Nn as L,hg as M,d0 as N,gc as O,Hs as P,dg as Q,ni as R,Hh as S,nf as T,Ln as U,Ug as V,Yh as W,xc as X,Ar as Y,In as Z,Q1 as _,xv as a,ra as a0,bc as a1,zn as a2,_c as a3,Bn as a4,mn as a5,pc as a6,hc as a7,cs as a8,dc as a9,e0 as aA,$o as aB,Sv as aC,kv as aD,fd as aE,Kt as aF,pi as aG,Ch as aH,Zn as aI,Av as aJ,Jm as aK,_h as aL,Bc as aM,g0 as aN,ac as aO,Ii as aP,Gn as aQ,Bo as aR,Vf as aS,Fm as aa,Wh as ab,Xt as ac,Er as ad,Ue as ae,we as af,Ee as ag,ps as ah,Nc as ai,Ev as aj,qs as ak,Vs as al,xi as am,zc as an,je as ao,bi as ap,Ws as aq,Pr as ar,rl as as,lc as at,Hl as au,zt as av,Tv as aw,Ih as ax,tc as ay,Rv as az,Re as b,en as c,pe as d,Jr as e,c0 as f,Cr as g,Fs as h,ge as i,Pv as j,ze as k,as as l,af as m,lf as n,at as o,Me as p,Gt as q,qe as r,Ms as s,Ju as t,dt as u,rh as v,Cn as w,te as x,xh as y,yr as z};
