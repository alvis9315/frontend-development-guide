const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TestAccounts-CKiKF7ux.js","assets/TestAccounts-n08822T4.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _s(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},yn=[],Ct=()=>{},xa=()=>!1,ii=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ys=e=>e.startsWith("onUpdate:"),De=Object.assign,Ss=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},su=Object.prototype.hasOwnProperty,ye=(e,t)=>su.call(e,t),de=Array.isArray,Sn=e=>vr(e)==="[object Map]",Aa=e=>vr(e)==="[object Set]",Ys=e=>vr(e)==="[object Date]",he=e=>typeof e=="function",Ie=e=>typeof e=="string",ht=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Ea=e=>(be(e)||he(e))&&he(e.then)&&he(e.catch),Pa=Object.prototype.toString,vr=e=>Pa.call(e),ou=e=>vr(e).slice(8,-1),Ra=e=>vr(e)==="[object Object]",si=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xn=_s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oi=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},au=/-\w/g,ut=oi(e=>e.replace(au,t=>t.slice(1).toUpperCase())),lu=/\B([A-Z])/g,mn=oi(e=>e.replace(lu,"-$1").toLowerCase()),ai=oi(e=>e.charAt(0).toUpperCase()+e.slice(1)),xi=oi(e=>e?`on${ai(e)}`:""),Vt=(e,t)=>!Object.is(e,t),Ai=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ia=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},cu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},uu=e=>{const t=Ie(e)?Number(e):NaN;return isNaN(t)?e:t};let Xs;const li=()=>Xs||(Xs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(e){if(de(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ie(r)?pu(r):ws(r);if(i)for(const s in i)t[s]=i[s]}return t}else if(Ie(e)||be(e))return e}const fu=/;(?![^(]*\))/g,du=/:([^]+)/,hu=/\/\*[^]*?\*\//g;function pu(e){const t={};return e.replace(hu,"").split(fu).forEach(n=>{if(n){const r=n.split(du);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function or(e){let t="";if(Ie(e))t=e;else if(de(e))for(let n=0;n<e.length;n++){const r=or(e[n]);r&&(t+=r+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const mu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gu=_s(mu);function Ta(e){return!!e||e===""}function vu(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Cs(e[r],t[r]);return n}function Cs(e,t){if(e===t)return!0;let n=Ys(e),r=Ys(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ht(e),r=ht(t),n||r)return e===t;if(n=de(e),r=de(t),n||r)return n&&r?vu(e,t):!1;if(n=be(e),r=be(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const a in e){const o=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(o&&!l||!o&&l||!Cs(e[a],t[a]))return!1}}return String(e)===String(t)}const Oa=e=>!!(e&&e.__v_isRef===!0),Gn=e=>Ie(e)?e:e==null?"":de(e)||be(e)&&(e.toString===Pa||!he(e.toString))?Oa(e)?Gn(e.value):JSON.stringify(e,ka,2):String(e),ka=(e,t)=>Oa(t)?ka(e,t.value):Sn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],s)=>(n[Ei(r,s)+" =>"]=i,n),{})}:Aa(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ei(n))}:ht(t)?Ei(t):be(t)&&!de(t)&&!Ra(t)?String(t):t,Ei=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class bu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=nt,!t&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=nt;try{return nt=this,t()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){this._on>0&&--this._on===0&&(nt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function _u(){return nt}let Ae;const Pi=new WeakSet;class Na{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pi.has(this)&&(Pi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ma(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qs(this),La(this);const t=Ae,n=ft;Ae=this,ft=!0;try{return this.fn()}finally{Fa(this),Ae=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Es(t);this.deps=this.depsTail=void 0,Qs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vi(this)&&this.run()}get dirty(){return Vi(this)}}let Da=0,Qn,Jn;function Ma(e,t=!1){if(e.flags|=8,t){e.next=Jn,Jn=e;return}e.next=Qn,Qn=e}function xs(){Da++}function As(){if(--Da>0)return;if(Jn){let t=Jn;for(Jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Qn;){let t=Qn;for(Qn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function La(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fa(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Es(r),yu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Vi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ba(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ba(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ar)||(e.globalVersion=ar,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Vi(e))))return;e.flags|=2;const t=e.dep,n=Ae,r=ft;Ae=e,ft=!0;try{La(e);const i=e.fn(e._value);(t.version===0||Vt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ae=n,ft=r,Fa(e),e.flags&=-3}}function Es(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Es(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function yu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ft=!0;const za=[];function kt(){za.push(ft),ft=!1}function Nt(){const e=za.pop();ft=e===void 0?!0:e}function Qs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ae;Ae=void 0;try{t()}finally{Ae=n}}}let ar=0;class Su{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ps{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!ft||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new Su(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,ja(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(t){this.version++,ar++,this.notify(t)}notify(t){xs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{As()}}}function ja(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)ja(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qr=new WeakMap,ln=Symbol(""),Gi=Symbol(""),lr=Symbol("");function Ye(e,t,n){if(ft&&Ae){let r=qr.get(e);r||qr.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new Ps),i.map=r,i.key=n),i.track()}}function Tt(e,t,n,r,i,s){const a=qr.get(e);if(!a){ar++;return}const o=l=>{l&&l.trigger()};if(xs(),t==="clear")a.forEach(o);else{const l=de(e),c=l&&si(n);if(l&&n==="length"){const f=Number(r);a.forEach((h,m)=>{(m==="length"||m===lr||!ht(m)&&m>=f)&&o(h)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(lr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(ln)),Sn(e)&&o(a.get(Gi)));break;case"delete":l||(o(a.get(ln)),Sn(e)&&o(a.get(Gi)));break;case"set":Sn(e)&&o(a.get(ln));break}}As()}function wu(e,t){const n=qr.get(e);return n&&n.get(t)}function vn(e){const t=ve(e);return t===e?t:(Ye(t,"iterate",lr),at(e)?t:t.map(pt))}function ci(e){return Ye(e=ve(e),"iterate",lr),e}function $t(e,t){return Dt(e)?Pn(cn(e)?pt(t):t):pt(t)}const Cu={__proto__:null,[Symbol.iterator](){return Ri(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return vn(this).concat(...e.map(t=>de(t)?vn(t):t))},entries(){return Ri(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return Et(this,"every",e,t,void 0,arguments)},filter(e,t){return Et(this,"filter",e,t,n=>n.map(r=>$t(this,r)),arguments)},find(e,t){return Et(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return Et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Et(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return Et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Et(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ii(this,"includes",e)},indexOf(...e){return Ii(this,"indexOf",e)},join(e){return vn(this).join(e)},lastIndexOf(...e){return Ii(this,"lastIndexOf",e)},map(e,t){return Et(this,"map",e,t,void 0,arguments)},pop(){return $n(this,"pop")},push(...e){return $n(this,"push",e)},reduce(e,...t){return Js(this,"reduce",e,t)},reduceRight(e,...t){return Js(this,"reduceRight",e,t)},shift(){return $n(this,"shift")},some(e,t){return Et(this,"some",e,t,void 0,arguments)},splice(...e){return $n(this,"splice",e)},toReversed(){return vn(this).toReversed()},toSorted(e){return vn(this).toSorted(e)},toSpliced(...e){return vn(this).toSpliced(...e)},unshift(...e){return $n(this,"unshift",e)},values(){return Ri(this,"values",e=>$t(this,e))}};function Ri(e,t,n){const r=ci(e),i=r[t]();return r!==e&&!at(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const xu=Array.prototype;function Et(e,t,n,r,i,s){const a=ci(e),o=a!==e&&!at(e),l=a[t];if(l!==xu[t]){const h=l.apply(e,s);return o?pt(h):h}let c=n;a!==e&&(o?c=function(h,m){return n.call(this,$t(e,h),m,e)}:n.length>2&&(c=function(h,m){return n.call(this,h,m,e)}));const f=l.call(a,c,r);return o&&i?i(f):f}function Js(e,t,n,r){const i=ci(e);let s=n;return i!==e&&(at(e)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,e)}):s=function(a,o,l){return n.call(this,a,$t(e,o),l,e)}),i[t](s,...r)}function Ii(e,t,n){const r=ve(e);Ye(r,"iterate",lr);const i=r[t](...n);return(i===-1||i===!1)&&ui(n[0])?(n[0]=ve(n[0]),r[t](...n)):i}function $n(e,t,n=[]){kt(),xs();const r=ve(e)[t].apply(e,n);return As(),Nt(),r}const Au=_s("__proto__,__v_isRef,__isVue"),$a=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Eu(e){ht(e)||(e=String(e));const t=ve(this);return Ye(t,"has",e),t.hasOwnProperty(e)}class Ua{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Lu:Va:s?Wa:qa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=de(t);if(!i){let l;if(a&&(l=Cu[n]))return l;if(n==="hasOwnProperty")return Eu}const o=Reflect.get(t,n,Fe(t)?t:r);if((ht(n)?$a.has(n):Au(n))||(i||Ye(t,"get",n),s))return o;if(Fe(o)){const l=a&&si(n)?o:o.value;return i&&be(l)?En(l):l}return be(o)?i?En(o):br(o):o}}class Ha extends Ua{constructor(t=!1){super(!1,t)}set(t,n,r,i){let s=t[n];const a=de(t)&&si(n);if(!this._isShallow){const c=Dt(s);if(!at(r)&&!Dt(r)&&(s=ve(s),r=ve(r)),!a&&Fe(s)&&!Fe(r))return c||(s.value=r),!0}const o=a?Number(n)<t.length:ye(t,n),l=Reflect.set(t,n,r,Fe(t)?t:i);return t===ve(i)&&(o?Vt(r,s)&&Tt(t,"set",n,r):Tt(t,"add",n,r)),l}deleteProperty(t,n){const r=ye(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Tt(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!ht(n)||!$a.has(n))&&Ye(t,"has",n),r}ownKeys(t){return Ye(t,"iterate",de(t)?"length":ln),Reflect.ownKeys(t)}}class Pu extends Ua{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ru=new Ha,Iu=new Pu,Tu=new Ha(!0);const Ki=e=>e,Tr=e=>Reflect.getPrototypeOf(e);function Ou(e,t,n){return function(...r){const i=this.__v_raw,s=ve(i),a=Sn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),f=n?Ki:t?Pn:pt;return!t&&Ye(s,"iterate",l?Gi:ln),De(Object.create(c),{next(){const{value:h,done:m}=c.next();return m?{value:h,done:m}:{value:o?[f(h[0]),f(h[1])]:f(h),done:m}}})}}function Or(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ku(e,t){const n={get(i){const s=this.__v_raw,a=ve(s),o=ve(i);e||(Vt(i,o)&&Ye(a,"get",i),Ye(a,"get",o));const{has:l}=Tr(a),c=t?Ki:e?Pn:pt;if(l.call(a,i))return c(s.get(i));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(i)},get size(){const i=this.__v_raw;return!e&&Ye(ve(i),"iterate",ln),i.size},has(i){const s=this.__v_raw,a=ve(s),o=ve(i);return e||(Vt(i,o)&&Ye(a,"has",i),Ye(a,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const a=this,o=a.__v_raw,l=ve(o),c=t?Ki:e?Pn:pt;return!e&&Ye(l,"iterate",ln),o.forEach((f,h)=>i.call(s,c(f),c(h),a))}};return De(n,e?{add:Or("add"),set:Or("set"),delete:Or("delete"),clear:Or("clear")}:{add(i){!t&&!at(i)&&!Dt(i)&&(i=ve(i));const s=ve(this);return Tr(s).has.call(s,i)||(s.add(i),Tt(s,"add",i,i)),this},set(i,s){!t&&!at(s)&&!Dt(s)&&(s=ve(s));const a=ve(this),{has:o,get:l}=Tr(a);let c=o.call(a,i);c||(i=ve(i),c=o.call(a,i));const f=l.call(a,i);return a.set(i,s),c?Vt(s,f)&&Tt(a,"set",i,s):Tt(a,"add",i,s),this},delete(i){const s=ve(this),{has:a,get:o}=Tr(s);let l=a.call(s,i);l||(i=ve(i),l=a.call(s,i)),o&&o.call(s,i);const c=s.delete(i);return l&&Tt(s,"delete",i,void 0),c},clear(){const i=ve(this),s=i.size!==0,a=i.clear();return s&&Tt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ou(i,e,t)}),n}function Rs(e,t){const n=ku(e,t);return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,s)}const Nu={get:Rs(!1,!1)},Du={get:Rs(!1,!0)},Mu={get:Rs(!0,!1)};const qa=new WeakMap,Wa=new WeakMap,Va=new WeakMap,Lu=new WeakMap;function Fu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bu(e){return e.__v_skip||!Object.isExtensible(e)?0:Fu(ou(e))}function br(e){return Dt(e)?e:Is(e,!1,Ru,Nu,qa)}function Ga(e){return Is(e,!1,Tu,Du,Wa)}function En(e){return Is(e,!0,Iu,Mu,Va)}function Is(e,t,n,r,i){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=Bu(e);if(s===0)return e;const a=i.get(e);if(a)return a;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function cn(e){return Dt(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Dt(e){return!!(e&&e.__v_isReadonly)}function at(e){return!!(e&&e.__v_isShallow)}function ui(e){return e?!!e.__v_raw:!1}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function Zi(e){return!ye(e,"__v_skip")&&Object.isExtensible(e)&&Ia(e,"__v_skip",!0),e}const pt=e=>be(e)?br(e):e,Pn=e=>be(e)?En(e):e;function Fe(e){return e?e.__v_isRef===!0:!1}function We(e){return Za(e,!1)}function Ka(e){return Za(e,!0)}function Za(e,t){return Fe(e)?e:new zu(e,t)}class zu{constructor(t,n){this.dep=new Ps,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ve(t),this._value=n?t:pt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||at(t)||Dt(t);t=r?t:ve(t),Vt(t,n)&&(this._rawValue=t,this._value=r?t:pt(t),this.dep.trigger())}}function dt(e){return Fe(e)?e.value:e}const ju={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Ya(e){return cn(e)?e:new Proxy(e,ju)}class $u{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ve(t);let i=!0,s=t;if(!de(t)||!si(String(n)))do i=!ui(s)||at(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=dt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Fe(this._raw[this._key])){const n=this._object[this._key];if(Fe(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return wu(this._raw,this._key)}}class Uu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function _r(e,t,n){return Fe(e)?e:he(e)?new Uu(e):be(e)&&arguments.length>1?Hu(e,t,n):We(e)}function Hu(e,t,n){return new $u(e,t,n)}class qu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ps(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Ma(this,!0),!0}get value(){const t=this.dep.track();return Ba(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Wu(e,t,n=!1){let r,i;return he(e)?r=e:(r=e.get,i=e.set),new qu(r,i,n)}const kr={},Wr=new WeakMap;let nn;function Vu(e,t=!1,n=nn){if(n){let r=Wr.get(n);r||Wr.set(n,r=[]),r.push(e)}}function Gu(e,t,n=xe){const{immediate:r,deep:i,once:s,scheduler:a,augmentJob:o,call:l}=n,c=P=>i?P:at(P)||i===!1||i===0?Ot(P,1):Ot(P);let f,h,m,p,g=!1,d=!1;if(Fe(e)?(h=()=>e.value,g=at(e)):cn(e)?(h=()=>c(e),g=!0):de(e)?(d=!0,g=e.some(P=>cn(P)||at(P)),h=()=>e.map(P=>{if(Fe(P))return P.value;if(cn(P))return c(P);if(he(P))return l?l(P,2):P()})):he(e)?t?h=l?()=>l(e,2):e:h=()=>{if(m){kt();try{m()}finally{Nt()}}const P=nn;nn=f;try{return l?l(e,3,[p]):e(p)}finally{nn=P}}:h=Ct,t&&i){const P=h,O=i===!0?1/0:i;h=()=>Ot(P(),O)}const b=_u(),v=()=>{f.stop(),b&&b.active&&Ss(b.effects,f)};if(s&&t){const P=t;t=(...O)=>{P(...O),v()}}let S=d?new Array(e.length).fill(kr):kr;const C=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(t){const O=f.run();if(i||g||(d?O.some((z,L)=>Vt(z,S[L])):Vt(O,S))){m&&m();const z=nn;nn=f;try{const L=[O,S===kr?void 0:d&&S[0]===kr?[]:S,p];S=O,l?l(t,3,L):t(...L)}finally{nn=z}}}else f.run()};return o&&o(C),f=new Na(h),f.scheduler=a?()=>a(C,!1):C,p=P=>Vu(P,!1,f),m=f.onStop=()=>{const P=Wr.get(f);if(P){if(l)l(P,4);else for(const O of P)O();Wr.delete(f)}},t?r?C(!0):S=f.run():a?a(C.bind(null,!0),!0):f.run(),v.pause=f.pause.bind(f),v.resume=f.resume.bind(f),v.stop=v,v}function Ot(e,t=1/0,n){if(t<=0||!be(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Fe(e))Ot(e.value,t,n);else if(de(e))for(let r=0;r<e.length;r++)Ot(e[r],t,n);else if(Aa(e)||Sn(e))e.forEach(r=>{Ot(r,t,n)});else if(Ra(e)){for(const r in e)Ot(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ot(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(e,t,n,r){try{return r?e(...r):e()}catch(i){Sr(i,t,n)}}function mt(e,t,n,r){if(he(e)){const i=yr(e,t,n,r);return i&&Ea(i)&&i.catch(s=>{Sr(s,t,n)}),i}if(de(e)){const i=[];for(let s=0;s<e.length;s++)i.push(mt(e[s],t,n,r));return i}}function Sr(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||xe;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const f=o.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,l,c)===!1)return}o=o.parent}if(s){kt(),yr(s,null,10,[e,l,c]),Nt();return}}Ku(e,n,i,r,a)}function Ku(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const et=[];let yt=-1;const wn=[];let Ut=null,bn=0;const Xa=Promise.resolve();let Vr=null;function Qa(e){const t=Vr||Xa;return e?t.then(this?e.bind(this):e):t}function Zu(e){let t=yt+1,n=et.length;for(;t<n;){const r=t+n>>>1,i=et[r],s=cr(i);s<e||s===e&&i.flags&2?t=r+1:n=r}return t}function Ts(e){if(!(e.flags&1)){const t=cr(e),n=et[et.length-1];!n||!(e.flags&2)&&t>=cr(n)?et.push(e):et.splice(Zu(t),0,e),e.flags|=1,Ja()}}function Ja(){Vr||(Vr=Xa.then(tl))}function Yu(e){de(e)?wn.push(...e):Ut&&e.id===-1?Ut.splice(bn+1,0,e):e.flags&1||(wn.push(e),e.flags|=1),Ja()}function eo(e,t,n=yt+1){for(;n<et.length;n++){const r=et[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;et.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function el(e){if(wn.length){const t=[...new Set(wn)].sort((n,r)=>cr(n)-cr(r));if(wn.length=0,Ut){Ut.push(...t);return}for(Ut=t,bn=0;bn<Ut.length;bn++){const n=Ut[bn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ut=null,bn=0}}const cr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tl(e){try{for(yt=0;yt<et.length;yt++){const t=et[yt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;yt<et.length;yt++){const t=et[yt];t&&(t.flags&=-2)}yt=-1,et.length=0,el(),Vr=null,(et.length||wn.length)&&tl()}}let Ve=null,nl=null;function Gr(e){const t=Ve;return Ve=e,nl=e&&e.type.__scopeId||null,t}function Cn(e,t=Ve,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Yr(-1);const s=Gr(t);let a;try{a=e(...i)}finally{Gr(s),r._d&&Yr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Xu(e,t){if(Ve===null)return e;const n=mi(Ve),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,o,l=xe]=t[i];s&&(he(s)&&(s={mounted:s,updated:s}),s.deep&&Ot(a),r.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return e}function Qt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(kt(),mt(l,n,8,[e.el,o,e,t]),Nt())}}function Gt(e,t){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[e]=t}}function Be(e,t,n=!1){const r=zs();if(r||An){let i=An?An._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&he(t)?t.call(r&&r.proxy):t}}const Qu=Symbol.for("v-scx"),Ju=()=>Be(Qu);function rl(e,t){return Os(e,null,t)}function un(e,t,n){return Os(e,t,n)}function Os(e,t,n=xe){const{immediate:r,deep:i,flush:s,once:a}=n,o=De({},n),l=t&&r||!t&&s!=="post";let c;if(In){if(s==="sync"){const p=Ju();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ct,p.resume=Ct,p.pause=Ct,p}}const f=qe;o.call=(p,g,d)=>mt(p,f,g,d);let h=!1;s==="post"?o.scheduler=p=>{Ze(p,f&&f.suspense)}:s!=="sync"&&(h=!0,o.scheduler=(p,g)=>{g?p():Ts(p)}),o.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,f&&(p.id=f.uid,p.i=f))};const m=Gu(e,t,o);return In&&(c?c.push(m):l&&m()),m}function ef(e,t,n){const r=this.proxy,i=Ie(e)?e.includes(".")?il(r,e):()=>r[e]:e.bind(r,r);let s;he(t)?s=t:(s=t.handler,n=t);const a=xr(this),o=Os(i,s.bind(r),n);return a(),o}function il(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const sl=Symbol("_vte"),ol=e=>e.__isTeleport,er=e=>e&&(e.disabled||e.disabled===""),to=e=>e&&(e.defer||e.defer===""),no=e=>typeof SVGElement<"u"&&e instanceof SVGElement,ro=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Yi=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},al={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,s,a,o,l,c){const{mc:f,pc:h,pbc:m,o:{insert:p,querySelector:g,createText:d,createComment:b}}=c,v=er(t.props);let{shapeFlag:S,children:C,dynamicChildren:P}=t;if(e==null){const O=t.el=d(""),z=t.anchor=d("");p(O,n,r),p(z,n,r);const L=(M,q)=>{S&16&&f(C,M,q,i,s,a,o,l)},G=()=>{const M=t.target=Yi(t.props,g),q=Xi(M,t,d,p);M&&(a!=="svg"&&no(M)?a="svg":a!=="mathml"&&ro(M)&&(a="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(M),v||(L(M,q),zr(t,!1)))};v&&(L(n,z),zr(t,!0)),to(t.props)?(t.el.__isMounted=!1,Ze(()=>{G(),delete t.el.__isMounted},s)):G()}else{if(to(t.props)&&e.el.__isMounted===!1){Ze(()=>{al.process(e,t,n,r,i,s,a,o,l,c)},s);return}t.el=e.el,t.targetStart=e.targetStart;const O=t.anchor=e.anchor,z=t.target=e.target,L=t.targetAnchor=e.targetAnchor,G=er(e.props),M=G?n:z,q=G?O:L;if(a==="svg"||no(z)?a="svg":(a==="mathml"||ro(z))&&(a="mathml"),P?(m(e.dynamicChildren,P,M,i,s,a,o),Fs(e,t,!0)):l||h(e,t,M,q,i,s,a,o,!1),v)G?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Nr(t,n,O,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ee=t.target=Yi(t.props,g);ee&&Nr(t,ee,null,c,0)}else G&&Nr(t,z,L,c,1);zr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},s){const{shapeFlag:a,children:o,anchor:l,targetStart:c,targetAnchor:f,target:h,props:m}=e;if(h&&(i(c),i(f)),s&&i(l),a&16){const p=s||!er(m);for(let g=0;g<o.length;g++){const d=o[g];r(d,t,n,p,!!d.dynamicChildren)}}},move:Nr,hydrate:tf};function Nr(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:a,anchor:o,shapeFlag:l,children:c,props:f}=e,h=s===2;if(h&&r(a,t,n),(!h||er(f))&&l&16)for(let m=0;m<c.length;m++)i(c[m],t,n,2);h&&r(o,t,n)}function tf(e,t,n,r,i,s,{o:{nextSibling:a,parentNode:o,querySelector:l,insert:c,createText:f}},h){function m(b,v){let S=v;for(;S;){if(S&&S.nodeType===8){if(S.data==="teleport start anchor")t.targetStart=S;else if(S.data==="teleport anchor"){t.targetAnchor=S,b._lpa=t.targetAnchor&&a(t.targetAnchor);break}}S=a(S)}}function p(b,v){v.anchor=h(a(b),v,o(b),n,r,i,s)}const g=t.target=Yi(t.props,l),d=er(t.props);if(g){const b=g._lpa||g.firstChild;t.shapeFlag&16&&(d?(p(e,t),m(g,b),t.targetAnchor||Xi(g,t,f,c,o(e)===g?e:null)):(t.anchor=a(e),m(g,b),t.targetAnchor||Xi(g,t,f,c),h(b&&a(b),t,g,n,r,i,s))),zr(t,d)}else d&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const nf=al;function zr(e,t){const n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Xi(e,t,n,r,i=null){const s=t.targetStart=n(""),a=t.targetAnchor=n("");return s[sl]=a,e&&(r(s,e,i),r(a,e,i)),a}const St=Symbol("_leaveCb"),Un=Symbol("_enterCb");function ll(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cr(()=>{e.isMounted=!0}),Ds(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],cl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},ul=e=>{const t=e.subTree;return t.component?ul(t.component):t},rf={name:"BaseTransition",props:cl,setup(e,{slots:t}){const n=zs(),r=ll();return()=>{const i=t.default&&ks(t.default(),!0);if(!i||!i.length)return;const s=fl(i),a=ve(e),{mode:o}=a;if(r.isLeaving)return Ti(s);const l=io(s);if(!l)return Ti(s);let c=ur(l,a,r,n,h=>c=h);l.type!==He&&dn(l,c);let f=n.subTree&&io(n.subTree);if(f&&f.type!==He&&!rn(f,l)&&ul(n).type!==He){let h=ur(f,a,r,n);if(dn(f,h),o==="out-in"&&l.type!==He)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,f=void 0},Ti(s);o==="in-out"&&l.type!==He?h.delayLeave=(m,p,g)=>{const d=dl(r,f);d[String(f.key)]=f,m[St]=()=>{p(),m[St]=void 0,delete c.delayedLeave,f=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return s}}};function fl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==He){t=n;break}}return t}const sf=rf;function dl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ur(e,t,n,r,i){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:f,onEnterCancelled:h,onBeforeLeave:m,onLeave:p,onAfterLeave:g,onLeaveCancelled:d,onBeforeAppear:b,onAppear:v,onAfterAppear:S,onAppearCancelled:C}=t,P=String(e.key),O=dl(n,e),z=(M,q)=>{M&&mt(M,r,9,q)},L=(M,q)=>{const ee=q[1];z(M,q),de(M)?M.every(x=>x.length<=1)&&ee():M.length<=1&&ee()},G={mode:a,persisted:o,beforeEnter(M){let q=l;if(!n.isMounted)if(s)q=b||l;else return;M[St]&&M[St](!0);const ee=O[P];ee&&rn(e,ee)&&ee.el[St]&&ee.el[St](),z(q,[M])},enter(M){let q=c,ee=f,x=h;if(!n.isMounted)if(s)q=v||c,ee=S||f,x=C||h;else return;let j=!1;M[Un]=W=>{j||(j=!0,W?z(x,[M]):z(ee,[M]),G.delayedLeave&&G.delayedLeave(),M[Un]=void 0)};const _=M[Un].bind(null,!1);q?L(q,[M,_]):_()},leave(M,q){const ee=String(e.key);if(M[Un]&&M[Un](!0),n.isUnmounting)return q();z(m,[M]);let x=!1;M[St]=_=>{x||(x=!0,q(),_?z(d,[M]):z(g,[M]),M[St]=void 0,O[ee]===e&&delete O[ee])};const j=M[St].bind(null,!1);O[ee]=e,p?L(p,[M,j]):j()},clone(M){const q=ur(M,t,n,r,i);return i&&i(q),q}};return G}function Ti(e){if(wr(e))return e=Kt(e),e.children=null,e}function io(e){if(!wr(e))return ol(e.type)&&e.children?fl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&he(n.default))return n.default()}}function dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ks(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Le?(a.patchFlag&128&&i++,r=r.concat(ks(a.children,t,o))):(t||a.type!==He)&&r.push(o!=null?Kt(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ze(e,t){return he(e)?De({name:e.name},t,{setup:e}):e}function Ns(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function so(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Kr=new WeakMap;function tr(e,t,n,r,i=!1){if(de(e)){e.forEach((d,b)=>tr(d,t&&(de(t)?t[b]:t),n,r,i));return}if(xn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&tr(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?mi(r.component):r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,f=o.refs===xe?o.refs={}:o.refs,h=o.setupState,m=ve(h),p=h===xe?xa:d=>so(f,d)?!1:ye(m,d),g=(d,b)=>!(b&&so(f,b));if(c!=null&&c!==l){if(oo(t),Ie(c))f[c]=null,p(c)&&(h[c]=null);else if(Fe(c)){const d=t;g(c,d.k)&&(c.value=null),d.k&&(f[d.k]=null)}}if(he(l))yr(l,o,12,[a,f]);else{const d=Ie(l),b=Fe(l);if(d||b){const v=()=>{if(e.f){const S=d?p(l)?h[l]:f[l]:g()||!e.k?l.value:f[e.k];if(i)de(S)&&Ss(S,s);else if(de(S))S.includes(s)||S.push(s);else if(d)f[l]=[s],p(l)&&(h[l]=f[l]);else{const C=[s];g(l,e.k)&&(l.value=C),e.k&&(f[e.k]=C)}}else d?(f[l]=a,p(l)&&(h[l]=a)):b&&(g(l,e.k)&&(l.value=a),e.k&&(f[e.k]=a))};if(a){const S=()=>{v(),Kr.delete(e)};S.id=-1,Kr.set(e,S),Ze(S,n)}else oo(e),v()}}}function oo(e){const t=Kr.get(e);t&&(t.flags|=8,Kr.delete(e))}const ao=e=>e.nodeType===8;li().requestIdleCallback;li().cancelIdleCallback;function of(e,t){if(ao(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(ao(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const xn=e=>!!e.type.__asyncLoader;function rt(e){he(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=e;let c=null,f,h=0;const m=()=>(h++,c=null,p()),p=()=>{let g;return c||(g=c=t().catch(d=>{if(d=d instanceof Error?d:new Error(String(d)),l)return new Promise((b,v)=>{l(d,()=>b(m()),()=>v(d),h+1)});throw d}).then(d=>g!==c&&c?c:(d&&(d.__esModule||d[Symbol.toStringTag]==="Module")&&(d=d.default),f=d,d)))};return ze({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,d,b){let v=!1;(d.bu||(d.bu=[])).push(()=>v=!0);const S=()=>{v||b()},C=s?()=>{const P=s(S,O=>of(g,O));P&&(d.bum||(d.bum=[])).push(P)}:S;f?C():p().then(()=>!d.isUnmounted&&C())},get __asyncResolved(){return f},setup(){const g=qe;if(Ns(g),f)return()=>Dr(f,g);const d=C=>{c=null,Sr(C,g,13,!r)};if(o&&g.suspense||In)return p().then(C=>()=>Dr(C,g)).catch(C=>(d(C),()=>r?Re(r,{error:C}):null));const b=We(!1),v=We(),S=We(!!i);return i&&setTimeout(()=>{S.value=!1},i),a!=null&&setTimeout(()=>{if(!b.value&&!v.value){const C=new Error(`Async component timed out after ${a}ms.`);d(C),v.value=C}},a),p().then(()=>{b.value=!0,g.parent&&wr(g.parent.vnode)&&g.parent.update()}).catch(C=>{d(C),v.value=C}),()=>{if(b.value&&f)return Dr(f,g);if(v.value&&r)return Re(r,{error:v.value});if(n&&!S.value)return Dr(n,g)}}})}function Dr(e,t){const{ref:n,props:r,children:i,ce:s}=t.vnode,a=Re(e,r,i);return a.ref=n,a.ce=s,delete t.vnode.ce,a}const wr=e=>e.type.__isKeepAlive;function af(e,t){hl(e,"a",t)}function lf(e,t){hl(e,"da",t)}function hl(e,t,n=qe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(fi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)wr(i.parent.vnode)&&cf(r,t,n,i),i=i.parent}}function cf(e,t,n,r){const i=fi(t,e,r,!0);ml(()=>{Ss(r[t],i)},n)}function fi(e,t,n=qe,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{kt();const o=xr(n),l=mt(t,n,e,a);return o(),Nt(),l});return r?i.unshift(s):i.push(s),s}}const Mt=e=>(t,n=qe)=>{(!In||e==="sp")&&fi(e,(...r)=>t(...r),n)},di=Mt("bm"),Cr=Mt("m"),uf=Mt("bu"),pl=Mt("u"),Ds=Mt("bum"),ml=Mt("um"),ff=Mt("sp"),df=Mt("rtg"),hf=Mt("rtc");function pf(e,t=qe){fi("ec",e,t)}const gl="components";function mf(e,t){return bl(gl,e,!0,t)||e}const vl=Symbol.for("v-ndc");function gf(e){return Ie(e)?bl(gl,e,!1)||e:e||vl}function bl(e,t,n=!0,r=!1){const i=Ve||qe;if(i){const s=i.type;{const o=td(s,!1);if(o&&(o===t||o===ut(t)||o===ai(ut(t))))return s}const a=lo(i[e]||s[e],t)||lo(i.appContext[e],t);return!a&&r?s:a}}function lo(e,t){return e&&(e[t]||e[ut(t)]||e[ai(ut(t))])}function Oi(e,t,n,r){let i;const s=n,a=de(e);if(a||Ie(e)){const o=a&&cn(e);let l=!1,c=!1;o&&(l=!at(e),c=Dt(e),e=ci(e)),i=new Array(e.length);for(let f=0,h=e.length;f<h;f++)i[f]=t(l?c?Pn(pt(e[f])):pt(e[f]):e[f],f,void 0,s)}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s)}else if(be(e))if(e[Symbol.iterator])i=Array.from(e,(o,l)=>t(o,l,void 0,s));else{const o=Object.keys(e);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const f=o[l];i[l]=t(e[f],f,l,s)}}else i=[];return i}function Cv(e,t,n={},r,i){if(Ve.ce||Ve.parent&&xn(Ve.parent)&&Ve.parent.ce){const c=Object.keys(n).length>0;return ct(),dr(Le,null,[Re("slot",n,r)],c?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),ct();const a=s&&_l(s(n)),o=n.key||a&&a.key,l=dr(Le,{key:(o&&!ht(o)?o:`_${t}`)+(!a&&r?"_fb":"")},a||[],a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function _l(e){return e.some(t=>Rn(t)?!(t.type===He||t.type===Le&&!_l(t.children)):!0)?e:null}const Qi=e=>e?Bl(e)?mi(e):Qi(e.parent):null,nr=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qi(e.parent),$root:e=>Qi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sl(e),$forceUpdate:e=>e.f||(e.f=()=>{Ts(e.update)}),$nextTick:e=>e.n||(e.n=Qa.bind(e.proxy)),$watch:e=>ef.bind(e)}),ki=(e,t)=>e!==xe&&!e.__isScriptSetup&&ye(e,t),vf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(ki(r,t))return a[t]=1,r[t];if(i!==xe&&ye(i,t))return a[t]=2,i[t];if(ye(s,t))return a[t]=3,s[t];if(n!==xe&&ye(n,t))return a[t]=4,n[t];Ji&&(a[t]=0)}}const c=nr[t];let f,h;if(c)return t==="$attrs"&&Ye(e.attrs,"get",""),c(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==xe&&ye(n,t))return a[t]=4,n[t];if(h=l.config.globalProperties,ye(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return ki(i,t)?(i[t]=n,!0):r!==xe&&ye(r,t)?(r[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:s,type:a}},o){let l;return!!(n[o]||e!==xe&&o[0]!=="$"&&ye(e,o)||ki(t,o)||ye(s,o)||ye(r,o)||ye(nr,o)||ye(i.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function co(e){return de(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ji=!0;function bf(e){const t=Sl(e),n=e.proxy,r=e.ctx;Ji=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:f,beforeMount:h,mounted:m,beforeUpdate:p,updated:g,activated:d,deactivated:b,beforeDestroy:v,beforeUnmount:S,destroyed:C,unmounted:P,render:O,renderTracked:z,renderTriggered:L,errorCaptured:G,serverPrefetch:M,expose:q,inheritAttrs:ee,components:x,directives:j,filters:_}=t;if(c&&_f(c,r,null),a)for(const V in a){const ie=a[V];he(ie)&&(r[V]=ie.bind(n))}if(i){const V=i.call(n,n);be(V)&&(e.data=br(V))}if(Ji=!0,s)for(const V in s){const ie=s[V],Y=he(ie)?ie.bind(n,n):he(ie.get)?ie.get.bind(n,n):Ct,ae=!he(ie)&&he(ie.set)?ie.set.bind(n):Ct,$=me({get:Y,set:ae});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>$.value,set:F=>$.value=F})}if(o)for(const V in o)yl(o[V],r,n,V);if(l){const V=he(l)?l.call(n):l;Reflect.ownKeys(V).forEach(ie=>{Gt(ie,V[ie])})}f&&uo(f,e,"c");function se(V,ie){de(ie)?ie.forEach(Y=>V(Y.bind(n))):ie&&V(ie.bind(n))}if(se(di,h),se(Cr,m),se(uf,p),se(pl,g),se(af,d),se(lf,b),se(pf,G),se(hf,z),se(df,L),se(Ds,S),se(ml,P),se(ff,M),de(q))if(q.length){const V=e.exposed||(e.exposed={});q.forEach(ie=>{Object.defineProperty(V,ie,{get:()=>n[ie],set:Y=>n[ie]=Y,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===Ct&&(e.render=O),ee!=null&&(e.inheritAttrs=ee),x&&(e.components=x),j&&(e.directives=j),M&&Ns(e)}function _f(e,t,n=Ct){de(e)&&(e=es(e));for(const r in e){const i=e[r];let s;be(i)?"default"in i?s=Be(i.from||r,i.default,!0):s=Be(i.from||r):s=Be(i),Fe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function uo(e,t,n){mt(de(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yl(e,t,n,r){let i=r.includes(".")?il(n,r):()=>n[r];if(Ie(e)){const s=t[e];he(s)&&un(i,s)}else if(he(e))un(i,e.bind(n));else if(be(e))if(de(e))e.forEach(s=>yl(s,t,n,r));else{const s=he(e.handler)?e.handler.bind(n):t[e.handler];he(s)&&un(i,s,e)}}function Sl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Zr(l,c,a,!0)),Zr(l,t,a)),be(t)&&s.set(t,l),l}function Zr(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Zr(e,s,n,!0),i&&i.forEach(a=>Zr(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=yf[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const yf={data:fo,props:ho,emits:ho,methods:Kn,computed:Kn,beforeCreate:Qe,created:Qe,beforeMount:Qe,mounted:Qe,beforeUpdate:Qe,updated:Qe,beforeDestroy:Qe,beforeUnmount:Qe,destroyed:Qe,unmounted:Qe,activated:Qe,deactivated:Qe,errorCaptured:Qe,serverPrefetch:Qe,components:Kn,directives:Kn,watch:wf,provide:fo,inject:Sf};function fo(e,t){return t?e?function(){return De(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Sf(e,t){return Kn(es(e),es(t))}function es(e){if(de(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qe(e,t){return e?[...new Set([].concat(e,t))]:t}function Kn(e,t){return e?De(Object.create(null),e,t):t}function ho(e,t){return e?de(e)&&de(t)?[...new Set([...e,...t])]:De(Object.create(null),co(e),co(t??{})):t}function wf(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const r in t)n[r]=Qe(e[r],t[r]);return n}function wl(){return{app:null,config:{isNativeTag:xa,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cf=0;function xf(e,t){return function(r,i=null){he(r)||(r=De({},r)),i!=null&&!be(i)&&(i=null);const s=wl(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Cf++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:rd,get config(){return s.config},set config(f){},use(f,...h){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(c,...h)):he(f)&&(a.add(f),f(c,...h))),c},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),c},component(f,h){return h?(s.components[f]=h,c):s.components[f]},directive(f,h){return h?(s.directives[f]=h,c):s.directives[f]},mount(f,h,m){if(!l){const p=c._ceVNode||Re(r,i);return p.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),e(p,f,m),l=!0,c._container=f,f.__vue_app__=c,mi(p.component)}},onUnmount(f){o.push(f)},unmount(){l&&(mt(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(f,h){return s.provides[f]=h,c},runWithContext(f){const h=An;An=c;try{return f()}finally{An=h}}};return c}}let An=null;const Af=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ut(t)}Modifiers`]||e[`${mn(t)}Modifiers`];function Ef(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||xe;let i=n;const s=t.startsWith("update:"),a=s&&Af(r,t.slice(7));a&&(a.trim&&(i=n.map(f=>Ie(f)?f.trim():f)),a.number&&(i=n.map(cu)));let o,l=r[o=xi(t)]||r[o=xi(ut(t))];!l&&s&&(l=r[o=xi(mn(t))]),l&&mt(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,mt(c,e,6,i)}}const Pf=new WeakMap;function Cl(e,t,n=!1){const r=n?Pf:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!he(e)){const l=c=>{const f=Cl(c,t,!0);f&&(o=!0,De(a,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(be(e)&&r.set(e,null),null):(de(s)?s.forEach(l=>a[l]=null):De(a,s),be(e)&&r.set(e,a),a)}function hi(e,t){return!e||!ii(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,mn(t))||ye(e,t))}function po(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:f,props:h,data:m,setupState:p,ctx:g,inheritAttrs:d}=e,b=Gr(e);let v,S;try{if(n.shapeFlag&4){const P=i||r,O=P;v=wt(c.call(O,P,f,h,p,m,g)),S=o}else{const P=t;v=wt(P.length>1?P(h,{attrs:o,slots:a,emit:l}):P(h,null)),S=t.props?o:Rf(o)}}catch(P){rr.length=0,Sr(P,e,1),v=Re(He)}let C=v;if(S&&d!==!1){const P=Object.keys(S),{shapeFlag:O}=C;P.length&&O&7&&(s&&P.some(ys)&&(S=If(S,s)),C=Kt(C,S,!1,!0))}return n.dirs&&(C=Kt(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&dn(C,n.transition),v=C,Gr(b),v}const Rf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ii(n))&&((t||(t={}))[n]=e[n]);return t},If=(e,t)=>{const n={};for(const r in e)(!ys(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Tf(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?mo(r,a,c):!!a;if(l&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const m=f[h];if(xl(a,r,m)&&!hi(c,m))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?mo(r,a,c):!0:!!a;return!1}function mo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(xl(t,e,s)&&!hi(n,s))return!0}return!1}function xl(e,t,n){const r=e[n],i=t[n];return n==="style"&&be(r)&&be(i)?!Cs(r,i):r!==i}function Of({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Al={},El=()=>Object.create(Al),Pl=e=>Object.getPrototypeOf(e)===Al;function kf(e,t,n,r=!1){const i={},s=El();e.propsDefaults=Object.create(null),Rl(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Ga(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Nf(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ve(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let m=f[h];if(hi(e.emitsOptions,m))continue;const p=t[m];if(l)if(ye(s,m))p!==s[m]&&(s[m]=p,c=!0);else{const g=ut(m);i[g]=ts(l,o,g,p,e,!1)}else p!==s[m]&&(s[m]=p,c=!0)}}}else{Rl(e,t,i,s)&&(c=!0);let f;for(const h in o)(!t||!ye(t,h)&&((f=mn(h))===h||!ye(t,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=ts(l,o,h,void 0,e,!0)):delete i[h]);if(s!==o)for(const h in s)(!t||!ye(t,h))&&(delete s[h],c=!0)}c&&Tt(e.attrs,"set","")}function Rl(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Xn(l))continue;const c=t[l];let f;i&&ye(i,f=ut(l))?!s||!s.includes(f)?n[f]=c:(o||(o={}))[f]=c:hi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=ve(n),c=o||xe;for(let f=0;f<s.length;f++){const h=s[f];n[h]=ts(i,l,h,c[h],e,!ye(c,h))}}return a}function ts(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=ye(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&he(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const f=xr(i);r=c[n]=l.call(null,t),f()}}else r=l;i.ce&&i.ce._setProp(n,r)}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===mn(n))&&(r=!0))}return r}const Df=new WeakMap;function Il(e,t,n=!1){const r=n?Df:t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!he(e)){const f=h=>{l=!0;const[m,p]=Il(h,t,!0);De(a,m),p&&o.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!s&&!l)return be(e)&&r.set(e,yn),yn;if(de(s))for(let f=0;f<s.length;f++){const h=ut(s[f]);go(h)&&(a[h]=xe)}else if(s)for(const f in s){const h=ut(f);if(go(h)){const m=s[f],p=a[h]=de(m)||he(m)?{type:m}:De({},m),g=p.type;let d=!1,b=!0;if(de(g))for(let v=0;v<g.length;++v){const S=g[v],C=he(S)&&S.name;if(C==="Boolean"){d=!0;break}else C==="String"&&(b=!1)}else d=he(g)&&g.name==="Boolean";p[0]=d,p[1]=b,(d||ye(p,"default"))&&o.push(h)}}const c=[a,o];return be(e)&&r.set(e,c),c}function go(e){return e[0]!=="$"&&!Xn(e)}const Ms=e=>e==="_"||e==="_ctx"||e==="$stable",Ls=e=>de(e)?e.map(wt):[wt(e)],Mf=(e,t,n)=>{if(t._n)return t;const r=Cn((...i)=>Ls(t(...i)),n);return r._c=!1,r},Tl=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Ms(i))continue;const s=e[i];if(he(s))t[i]=Mf(i,s,r);else if(s!=null){const a=Ls(s);t[i]=()=>a}}},Ol=(e,t)=>{const n=Ls(t);e.slots.default=()=>n},kl=(e,t,n)=>{for(const r in t)(n||!Ms(r))&&(e[r]=t[r])},Lf=(e,t,n)=>{const r=e.slots=El();if(e.vnode.shapeFlag&32){const i=t._;i?(kl(r,t,n),n&&Ia(r,"_",i,!0)):Tl(t,r)}else t&&Ol(e,t)},Ff=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=xe;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:kl(i,t,n):(s=!t.$stable,Tl(t,i)),a=t}else t&&(Ol(e,t),a={default:1});if(s)for(const o in i)!Ms(o)&&a[o]==null&&delete i[o]},Ze=Uf;function Bf(e){return zf(e)}function zf(e,t){const n=li();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:m,setScopeId:p=Ct,insertStaticContent:g}=e,d=(A,I,u,T=null,R=null,y=null,w=void 0,E=null,D=!!I.dynamicChildren)=>{if(A===I)return;A&&!rn(A,I)&&(T=H(A),F(A,R,y,!0),A=null),I.patchFlag===-2&&(D=!1,I.dynamicChildren=null);const{type:N,ref:k,shapeFlag:B}=I;switch(N){case pi:b(A,I,u,T);break;case He:v(A,I,u,T);break;case jr:A==null&&S(I,u,T,w);break;case Le:x(A,I,u,T,R,y,w,E,D);break;default:B&1?O(A,I,u,T,R,y,w,E,D):B&6?j(A,I,u,T,R,y,w,E,D):(B&64||B&128)&&N.process(A,I,u,T,R,y,w,E,D,re)}k!=null&&R?tr(k,A&&A.ref,y,I||A,!I):k==null&&A&&A.ref!=null&&tr(A.ref,null,y,A,!0)},b=(A,I,u,T)=>{if(A==null)r(I.el=o(I.children),u,T);else{const R=I.el=A.el;I.children!==A.children&&c(R,I.children)}},v=(A,I,u,T)=>{A==null?r(I.el=l(I.children||""),u,T):I.el=A.el},S=(A,I,u,T)=>{[A.el,A.anchor]=g(A.children,I,u,T,A.el,A.anchor)},C=({el:A,anchor:I},u,T)=>{let R;for(;A&&A!==I;)R=m(A),r(A,u,T),A=R;r(I,u,T)},P=({el:A,anchor:I})=>{let u;for(;A&&A!==I;)u=m(A),i(A),A=u;i(I)},O=(A,I,u,T,R,y,w,E,D)=>{if(I.type==="svg"?w="svg":I.type==="math"&&(w="mathml"),A==null)z(I,u,T,R,y,w,E,D);else{const N=A.el&&A.el._isVueCE?A.el:null;try{N&&N._beginPatch(),M(A,I,R,y,w,E,D)}finally{N&&N._endPatch()}}},z=(A,I,u,T,R,y,w,E)=>{let D,N;const{props:k,shapeFlag:B,transition:K,dirs:U}=A;if(D=A.el=a(A.type,y,k&&k.is,k),B&8?f(D,A.children):B&16&&G(A.children,D,null,T,R,Ni(A,y),w,E),U&&Qt(A,null,T,"created"),L(D,A,A.scopeId,w,T),k){for(const ue in k)ue!=="value"&&!Xn(ue)&&s(D,ue,null,k[ue],y,T);"value"in k&&s(D,"value",null,k.value,y),(N=k.onVnodeBeforeMount)&&vt(N,T,A)}U&&Qt(A,null,T,"beforeMount");const Q=jf(R,K);Q&&K.beforeEnter(D),r(D,I,u),((N=k&&k.onVnodeMounted)||Q||U)&&Ze(()=>{N&&vt(N,T,A),Q&&K.enter(D),U&&Qt(A,null,T,"mounted")},R)},L=(A,I,u,T,R)=>{if(u&&p(A,u),T)for(let y=0;y<T.length;y++)p(A,T[y]);if(R){let y=R.subTree;if(I===y||Ml(y.type)&&(y.ssContent===I||y.ssFallback===I)){const w=R.vnode;L(A,w,w.scopeId,w.slotScopeIds,R.parent)}}},G=(A,I,u,T,R,y,w,E,D=0)=>{for(let N=D;N<A.length;N++){const k=A[N]=E?It(A[N]):wt(A[N]);d(null,k,I,u,T,R,y,w,E)}},M=(A,I,u,T,R,y,w)=>{const E=I.el=A.el;let{patchFlag:D,dynamicChildren:N,dirs:k}=I;D|=A.patchFlag&16;const B=A.props||xe,K=I.props||xe;let U;if(u&&Jt(u,!1),(U=K.onVnodeBeforeUpdate)&&vt(U,u,I,A),k&&Qt(I,A,u,"beforeUpdate"),u&&Jt(u,!0),(B.innerHTML&&K.innerHTML==null||B.textContent&&K.textContent==null)&&f(E,""),N?q(A.dynamicChildren,N,E,u,T,Ni(I,R),y):w||ie(A,I,E,null,u,T,Ni(I,R),y,!1),D>0){if(D&16)ee(E,B,K,u,R);else if(D&2&&B.class!==K.class&&s(E,"class",null,K.class,R),D&4&&s(E,"style",B.style,K.style,R),D&8){const Q=I.dynamicProps;for(let ue=0;ue<Q.length;ue++){const oe=Q[ue],we=B[oe],ke=K[oe];(ke!==we||oe==="value")&&s(E,oe,we,ke,R,u)}}D&1&&A.children!==I.children&&f(E,I.children)}else!w&&N==null&&ee(E,B,K,u,R);((U=K.onVnodeUpdated)||k)&&Ze(()=>{U&&vt(U,u,I,A),k&&Qt(I,A,u,"updated")},T)},q=(A,I,u,T,R,y,w)=>{for(let E=0;E<I.length;E++){const D=A[E],N=I[E],k=D.el&&(D.type===Le||!rn(D,N)||D.shapeFlag&198)?h(D.el):u;d(D,N,k,null,T,R,y,w,!0)}},ee=(A,I,u,T,R)=>{if(I!==u){if(I!==xe)for(const y in I)!Xn(y)&&!(y in u)&&s(A,y,I[y],null,R,T);for(const y in u){if(Xn(y))continue;const w=u[y],E=I[y];w!==E&&y!=="value"&&s(A,y,E,w,R,T)}"value"in u&&s(A,"value",I.value,u.value,R)}},x=(A,I,u,T,R,y,w,E,D)=>{const N=I.el=A?A.el:o(""),k=I.anchor=A?A.anchor:o("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:U}=I;U&&(E=E?E.concat(U):U),A==null?(r(N,u,T),r(k,u,T),G(I.children||[],u,k,R,y,w,E,D)):B>0&&B&64&&K&&A.dynamicChildren&&A.dynamicChildren.length===K.length?(q(A.dynamicChildren,K,u,R,y,w,E),(I.key!=null||R&&I===R.subTree)&&Fs(A,I,!0)):ie(A,I,u,k,R,y,w,E,D)},j=(A,I,u,T,R,y,w,E,D)=>{I.slotScopeIds=E,A==null?I.shapeFlag&512?R.ctx.activate(I,u,T,w,D):_(I,u,T,R,y,w,D):W(A,I,D)},_=(A,I,u,T,R,y,w)=>{const E=A.component=Yf(A,T,R);if(wr(A)&&(E.ctx.renderer=re),Xf(E,!1,w),E.asyncDep){if(R&&R.registerDep(E,se,w),!A.el){const D=E.subTree=Re(He);v(null,D,I,u),A.placeholder=D.el}}else se(E,A,I,u,R,y,w)},W=(A,I,u)=>{const T=I.component=A.component;if(Tf(A,I,u))if(T.asyncDep&&!T.asyncResolved){V(T,I,u);return}else T.next=I,T.update();else I.el=A.el,T.vnode=I},se=(A,I,u,T,R,y,w)=>{const E=()=>{if(A.isMounted){let{next:B,bu:K,u:U,parent:Q,vnode:ue}=A;{const Ge=Nl(A);if(Ge){B&&(B.el=ue.el,V(A,B,w)),Ge.asyncDep.then(()=>{Ze(()=>{A.isUnmounted||N()},R)});return}}let oe=B,we;Jt(A,!1),B?(B.el=ue.el,V(A,B,w)):B=ue,K&&Ai(K),(we=B.props&&B.props.onVnodeBeforeUpdate)&&vt(we,Q,B,ue),Jt(A,!0);const ke=po(A),Oe=A.subTree;A.subTree=ke,d(Oe,ke,h(Oe.el),H(Oe),A,R,y),B.el=ke.el,oe===null&&Of(A,ke.el),U&&Ze(U,R),(we=B.props&&B.props.onVnodeUpdated)&&Ze(()=>vt(we,Q,B,ue),R)}else{let B;const{el:K,props:U}=I,{bm:Q,m:ue,parent:oe,root:we,type:ke}=A,Oe=xn(I);Jt(A,!1),Q&&Ai(Q),!Oe&&(B=U&&U.onVnodeBeforeMount)&&vt(B,oe,I),Jt(A,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(ke);const Ge=A.subTree=po(A);d(null,Ge,u,T,A,R,y),I.el=Ge.el}if(ue&&Ze(ue,R),!Oe&&(B=U&&U.onVnodeMounted)){const Ge=I;Ze(()=>vt(B,oe,Ge),R)}(I.shapeFlag&256||oe&&xn(oe.vnode)&&oe.vnode.shapeFlag&256)&&A.a&&Ze(A.a,R),A.isMounted=!0,I=u=T=null}};A.scope.on();const D=A.effect=new Na(E);A.scope.off();const N=A.update=D.run.bind(D),k=A.job=D.runIfDirty.bind(D);k.i=A,k.id=A.uid,D.scheduler=()=>Ts(k),Jt(A,!0),N()},V=(A,I,u)=>{I.component=A;const T=A.vnode.props;A.vnode=I,A.next=null,Nf(A,I.props,T,u),Ff(A,I.children,u),kt(),eo(A),Nt()},ie=(A,I,u,T,R,y,w,E,D=!1)=>{const N=A&&A.children,k=A?A.shapeFlag:0,B=I.children,{patchFlag:K,shapeFlag:U}=I;if(K>0){if(K&128){ae(N,B,u,T,R,y,w,E,D);return}else if(K&256){Y(N,B,u,T,R,y,w,E,D);return}}U&8?(k&16&&ge(N,R,y),B!==N&&f(u,B)):k&16?U&16?ae(N,B,u,T,R,y,w,E,D):ge(N,R,y,!0):(k&8&&f(u,""),U&16&&G(B,u,T,R,y,w,E,D))},Y=(A,I,u,T,R,y,w,E,D)=>{A=A||yn,I=I||yn;const N=A.length,k=I.length,B=Math.min(N,k);let K;for(K=0;K<B;K++){const U=I[K]=D?It(I[K]):wt(I[K]);d(A[K],U,u,null,R,y,w,E,D)}N>k?ge(A,R,y,!0,!1,B):G(I,u,T,R,y,w,E,D,B)},ae=(A,I,u,T,R,y,w,E,D)=>{let N=0;const k=I.length;let B=A.length-1,K=k-1;for(;N<=B&&N<=K;){const U=A[N],Q=I[N]=D?It(I[N]):wt(I[N]);if(rn(U,Q))d(U,Q,u,null,R,y,w,E,D);else break;N++}for(;N<=B&&N<=K;){const U=A[B],Q=I[K]=D?It(I[K]):wt(I[K]);if(rn(U,Q))d(U,Q,u,null,R,y,w,E,D);else break;B--,K--}if(N>B){if(N<=K){const U=K+1,Q=U<k?I[U].el:T;for(;N<=K;)d(null,I[N]=D?It(I[N]):wt(I[N]),u,Q,R,y,w,E,D),N++}}else if(N>K)for(;N<=B;)F(A[N],R,y,!0),N++;else{const U=N,Q=N,ue=new Map;for(N=Q;N<=K;N++){const $e=I[N]=D?It(I[N]):wt(I[N]);$e.key!=null&&ue.set($e.key,N)}let oe,we=0;const ke=K-Q+1;let Oe=!1,Ge=0;const Ce=new Array(ke);for(N=0;N<ke;N++)Ce[N]=0;for(N=U;N<=B;N++){const $e=A[N];if(we>=ke){F($e,R,y,!0);continue}let Ne;if($e.key!=null)Ne=ue.get($e.key);else for(oe=Q;oe<=K;oe++)if(Ce[oe-Q]===0&&rn($e,I[oe])){Ne=oe;break}Ne===void 0?F($e,R,y,!0):(Ce[Ne-Q]=N+1,Ne>=Ge?Ge=Ne:Oe=!0,d($e,I[Ne],u,null,R,y,w,E,D),we++)}const Xt=Oe?$f(Ce):yn;for(oe=Xt.length-1,N=ke-1;N>=0;N--){const $e=Q+N,Ne=I[$e],zn=I[$e+1],Rr=$e+1<k?zn.el||Dl(zn):T;Ce[N]===0?d(null,Ne,u,Rr,R,y,w,E,D):Oe&&(oe<0||N!==Xt[oe]?$(Ne,u,Rr,2):oe--)}}},$=(A,I,u,T,R=null)=>{const{el:y,type:w,transition:E,children:D,shapeFlag:N}=A;if(N&6){$(A.component.subTree,I,u,T);return}if(N&128){A.suspense.move(I,u,T);return}if(N&64){w.move(A,I,u,re);return}if(w===Le){r(y,I,u);for(let B=0;B<D.length;B++)$(D[B],I,u,T);r(A.anchor,I,u);return}if(w===jr){C(A,I,u);return}if(T!==2&&N&1&&E)if(T===0)E.beforeEnter(y),r(y,I,u),Ze(()=>E.enter(y),R);else{const{leave:B,delayLeave:K,afterLeave:U}=E,Q=()=>{A.ctx.isUnmounted?i(y):r(y,I,u)},ue=()=>{y._isLeaving&&y[St](!0),B(y,()=>{Q(),U&&U()})};K?K(y,Q,ue):ue()}else r(y,I,u)},F=(A,I,u,T=!1,R=!1)=>{const{type:y,props:w,ref:E,children:D,dynamicChildren:N,shapeFlag:k,patchFlag:B,dirs:K,cacheIndex:U}=A;if(B===-2&&(R=!1),E!=null&&(kt(),tr(E,null,u,A,!0),Nt()),U!=null&&(I.renderCache[U]=void 0),k&256){I.ctx.deactivate(A);return}const Q=k&1&&K,ue=!xn(A);let oe;if(ue&&(oe=w&&w.onVnodeBeforeUnmount)&&vt(oe,I,A),k&6)J(A.component,u,T);else{if(k&128){A.suspense.unmount(u,T);return}Q&&Qt(A,null,I,"beforeUnmount"),k&64?A.type.remove(A,I,u,re,T):N&&!N.hasOnce&&(y!==Le||B>0&&B&64)?ge(N,I,u,!1,!0):(y===Le&&B&384||!R&&k&16)&&ge(D,I,u),T&&le(A)}(ue&&(oe=w&&w.onVnodeUnmounted)||Q)&&Ze(()=>{oe&&vt(oe,I,A),Q&&Qt(A,null,I,"unmounted")},u)},le=A=>{const{type:I,el:u,anchor:T,transition:R}=A;if(I===Le){ne(u,T);return}if(I===jr){P(A);return}const y=()=>{i(u),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(A.shapeFlag&1&&R&&!R.persisted){const{leave:w,delayLeave:E}=R,D=()=>w(u,y);E?E(A.el,y,D):D()}else y()},ne=(A,I)=>{let u;for(;A!==I;)u=m(A),i(A),A=u;i(I)},J=(A,I,u)=>{const{bum:T,scope:R,job:y,subTree:w,um:E,m:D,a:N}=A;vo(D),vo(N),T&&Ai(T),R.stop(),y&&(y.flags|=8,F(w,A,I,u)),E&&Ze(E,I),Ze(()=>{A.isUnmounted=!0},I)},ge=(A,I,u,T=!1,R=!1,y=0)=>{for(let w=y;w<A.length;w++)F(A[w],I,u,T,R)},H=A=>{if(A.shapeFlag&6)return H(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const I=m(A.anchor||A.el),u=I&&I[sl];return u?m(u):I};let X=!1;const Z=(A,I,u)=>{let T;A==null?I._vnode&&(F(I._vnode,null,null,!0),T=I._vnode.component):d(I._vnode||null,A,I,null,null,null,u),I._vnode=A,X||(X=!0,eo(T),el(),X=!1)},re={p:d,um:F,m:$,r:le,mt:_,mc:G,pc:ie,pbc:q,n:H,o:e};return{render:Z,hydrate:void 0,createApp:xf(Z)}}function Ni({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function jf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fs(e,t,n=!1){const r=e.children,i=t.children;if(de(r)&&de(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=It(i[s]),o.el=a.el),!n&&o.patchFlag!==-2&&Fs(a,o)),o.type===pi&&(o.patchFlag===-1&&(o=i[s]=It(o)),o.el=a.el),o.type===He&&!o.el&&(o.el=a.el)}}function $f(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}function Nl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nl(t)}function vo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Dl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Dl(t.subTree):null}const Ml=e=>e.__isSuspense;function Uf(e,t){t&&t.pendingBranch?de(e)?t.effects.push(...e):t.effects.push(e):Yu(e)}const Le=Symbol.for("v-fgt"),pi=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),jr=Symbol.for("v-stc"),rr=[];let st=null;function ct(e=!1){rr.push(st=e?null:[])}function Hf(){rr.pop(),st=rr[rr.length-1]||null}let fr=1;function Yr(e,t=!1){fr+=e,e<0&&st&&t&&(st.hasOnce=!0)}function Ll(e){return e.dynamicChildren=fr>0?st||yn:null,Hf(),fr>0&&st&&st.push(e),e}function en(e,t,n,r,i,s){return Ll(pe(e,t,n,r,i,s,!0))}function dr(e,t,n,r,i){return Ll(Re(e,t,n,r,i,!0))}function Rn(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Fl=({key:e})=>e??null,$r=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Fe(e)||he(e)?{i:Ve,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,i=null,s=e===Le?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fl(t),ref:t&&$r(t),scopeId:nl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return o?(Bs(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),fr>0&&!a&&st&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&st.push(l),l}const Re=qf;function qf(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===vl)&&(e=He),Rn(e)){const o=Kt(e,t,!0);return n&&Bs(o,n),fr>0&&!s&&st&&(o.shapeFlag&6?st[st.indexOf(e)]=o:st.push(o)),o.patchFlag=-2,o}if(nd(e)&&(e=e.__vccOpts),t){t=Wf(t);let{class:o,style:l}=t;o&&!Ie(o)&&(t.class=or(o)),be(l)&&(ui(l)&&!de(l)&&(l=De({},l)),t.style=ws(l))}const a=Ie(e)?1:Ml(e)?128:ol(e)?64:be(e)?4:he(e)?2:0;return pe(e,t,n,r,i,a,s,!0)}function Wf(e){return e?ui(e)||Pl(e)?De({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:s,patchFlag:a,children:o,transition:l}=e,c=t?Gf(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Fl(c),ref:t&&t.ref?n&&s?de(s)?s.concat($r(t)):[s,$r(t)]:$r(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Le?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&dn(f,l.clone(f)),f}function Xr(e=" ",t=0){return Re(pi,null,e,t)}function xv(e,t){const n=Re(jr,null,e);return n.staticCount=t,n}function Vf(e="",t=!1){return t?(ct(),dr(He,null,e)):Re(He,null,e)}function wt(e){return e==null||typeof e=="boolean"?Re(He):de(e)?Re(Le,null,e.slice()):Rn(e)?It(e):Re(pi,null,String(e))}function It(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Bs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(de(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Bs(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Pl(t)?t._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:Ve},n=32):(t=String(t),r&64?(n=16,t=[Xr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=or([t.class,r.class]));else if(i==="style")t.style=ws([t.style,r.style]);else if(ii(i)){const s=t[i],a=r[i];a&&s!==a&&!(de(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function vt(e,t,n,r=null){mt(e,t,7,[n,r])}const Kf=wl();let Zf=0;function Yf(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Kf,s={uid:Zf++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Il(r,i),emitsOptions:Cl(r,i),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ef.bind(null,s),e.ce&&e.ce(s),s}let qe=null;const zs=()=>qe||Ve;let Qr,ns;{const e=li(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),s=>{i.length>1?i.forEach(a=>a(s)):i[0](s)}};Qr=t("__VUE_INSTANCE_SETTERS__",n=>qe=n),ns=t("__VUE_SSR_SETTERS__",n=>In=n)}const xr=e=>{const t=qe;return Qr(e),e.scope.on(),()=>{e.scope.off(),Qr(t)}},bo=()=>{qe&&qe.scope.off(),Qr(null)};function Bl(e){return e.vnode.shapeFlag&4}let In=!1;function Xf(e,t=!1,n=!1){t&&ns(t);const{props:r,children:i}=e.vnode,s=Bl(e);kf(e,r,s,t),Lf(e,i,n||t);const a=s?Qf(e,t):void 0;return t&&ns(!1),a}function Qf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,vf);const{setup:r}=n;if(r){kt();const i=e.setupContext=r.length>1?ed(e):null,s=xr(e),a=yr(r,e,0,[e.props,i]),o=Ea(a);if(Nt(),s(),(o||e.sp)&&!xn(e)&&Ns(e),o){if(a.then(bo,bo),t)return a.then(l=>{_o(e,l)}).catch(l=>{Sr(l,e,0)});e.asyncDep=a}else _o(e,a)}else zl(e)}function _o(e,t,n){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=Ya(t)),zl(e)}function zl(e,t,n){const r=e.type;e.render||(e.render=r.render||Ct);{const i=xr(e);kt();try{bf(e)}finally{Nt(),i()}}}const Jf={get(e,t){return Ye(e,"get",""),e[t]}};function ed(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Jf),slots:e.slots,emit:e.emit,expose:t}}function mi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ya(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in nr)return nr[n](e)},has(t,n){return n in t||n in nr}})):e.proxy}function td(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function nd(e){return he(e)&&"__vccOpts"in e}const me=(e,t)=>Wu(e,t,In);function te(e,t,n){try{Yr(-1);const r=arguments.length;return r===2?be(t)&&!de(t)?Rn(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rn(n)&&(n=[n]),Re(e,t,n))}finally{Yr(1)}}const rd="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{rs=yo.createPolicy("vue",{createHTML:e=>e})}catch{}const jl=rs?e=>rs.createHTML(e):e=>e,id="http://www.w3.org/2000/svg",sd="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,So=Rt&&Rt.createElement("template"),od={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?Rt.createElementNS(id,e):t==="mathml"?Rt.createElementNS(sd,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{So.innerHTML=jl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const o=So.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ft="transition",Hn="animation",Tn=Symbol("_vtc"),$l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ul=De({},cl,$l),ad=e=>(e.displayName="Transition",e.props=Ul,e),Hl=ad((e,{slots:t})=>te(sf,ql(e),t)),tn=(e,t=[])=>{de(e)?e.forEach(n=>n(...t)):e&&e(...t)},wo=e=>e?de(e)?e.some(t=>t.length>1):e.length>1:!1;function ql(e){const t={};for(const x in e)x in $l||(t[x]=e[x]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:f=o,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=ld(i),d=g&&g[0],b=g&&g[1],{onBeforeEnter:v,onEnter:S,onEnterCancelled:C,onLeave:P,onLeaveCancelled:O,onBeforeAppear:z=v,onAppear:L=S,onAppearCancelled:G=C}=t,M=(x,j,_,W)=>{x._enterCancelled=W,jt(x,j?f:o),jt(x,j?c:a),_&&_()},q=(x,j)=>{x._isLeaving=!1,jt(x,h),jt(x,p),jt(x,m),j&&j()},ee=x=>(j,_)=>{const W=x?L:S,se=()=>M(j,x,_);tn(W,[j,se]),Co(()=>{jt(j,x?l:s),_t(j,x?f:o),wo(W)||xo(j,r,d,se)})};return De(t,{onBeforeEnter(x){tn(v,[x]),_t(x,s),_t(x,a)},onBeforeAppear(x){tn(z,[x]),_t(x,l),_t(x,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(x,j){x._isLeaving=!0;const _=()=>q(x,j);_t(x,h),x._enterCancelled?(_t(x,m),is(x)):(is(x),_t(x,m)),Co(()=>{x._isLeaving&&(jt(x,h),_t(x,p),wo(P)||xo(x,r,b,_))}),tn(P,[x,_])},onEnterCancelled(x){M(x,!1,void 0,!0),tn(C,[x])},onAppearCancelled(x){M(x,!0,void 0,!0),tn(G,[x])},onLeaveCancelled(x){q(x),tn(O,[x])}})}function ld(e){if(e==null)return null;if(be(e))return[Di(e.enter),Di(e.leave)];{const t=Di(e);return[t,t]}}function Di(e){return uu(e)}function _t(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Tn]||(e[Tn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Tn];n&&(n.delete(t),n.size||(e[Tn]=void 0))}function Co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cd=0;function xo(e,t,n,r){const i=e._endId=++cd,s=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Wl(e,t);if(!a)return r();const c=a+"end";let f=0;const h=()=>{e.removeEventListener(c,m),s()},m=p=>{p.target===e&&++f>=l&&h()};setTimeout(()=>{f<l&&h()},o+1),e.addEventListener(c,m)}function Wl(e,t){const n=window.getComputedStyle(e),r=g=>(n[g]||"").split(", "),i=r(`${Ft}Delay`),s=r(`${Ft}Duration`),a=Ao(i,s),o=r(`${Hn}Delay`),l=r(`${Hn}Duration`),c=Ao(o,l);let f=null,h=0,m=0;t===Ft?a>0&&(f=Ft,h=a,m=s.length):t===Hn?c>0&&(f=Hn,h=c,m=l.length):(h=Math.max(a,c),f=h>0?a>c?Ft:Hn:null,m=f?f===Ft?s.length:l.length:0);const p=f===Ft&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ft}Property`).toString());return{type:f,timeout:h,propCount:m,hasTransform:p}}function Ao(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Eo(n)+Eo(e[r])))}function Eo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function is(e){return(e?e.ownerDocument:document).body.offsetHeight}function ud(e,t,n){const r=e[Tn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Jr=Symbol("_vod"),Vl=Symbol("_vsh"),fd={name:"show",beforeMount(e,{value:t},{transition:n}){e[Jr]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):qn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),qn(e,!0),r.enter(e)):r.leave(e,()=>{qn(e,!1)}):qn(e,t))},beforeUnmount(e,{value:t}){qn(e,t)}};function qn(e,t){e.style.display=t?e[Jr]:"none",e[Vl]=!t}const dd=Symbol(""),hd=/(?:^|;)\s*display\s*:/;function pd(e,t,n){const r=e.style,i=Ie(n);let s=!1;if(n&&!i){if(t)if(Ie(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Ur(r,o,"")}else for(const a in t)n[a]==null&&Ur(r,a,"");for(const a in n)a==="display"&&(s=!0),Ur(r,a,n[a])}else if(i){if(t!==n){const a=r[dd];a&&(n+=";"+a),r.cssText=n,s=hd.test(n)}}else t&&e.removeAttribute("style");Jr in e&&(e[Jr]=s?r.display:"",e[Vl]&&(r.display="none"))}const Po=/\s*!important$/;function Ur(e,t,n){if(de(n))n.forEach(r=>Ur(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=md(e,t);Po.test(n)?e.setProperty(mn(r),n.replace(Po,""),"important"):e[r]=n}}const Ro=["Webkit","Moz","ms"],Mi={};function md(e,t){const n=Mi[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Mi[t]=r;r=ai(r);for(let i=0;i<Ro.length;i++){const s=Ro[i]+r;if(s in e)return Mi[t]=s}return t}const Io="http://www.w3.org/1999/xlink";function To(e,t,n,r,i,s=gu(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Io,t.slice(6,t.length)):e.setAttributeNS(Io,t,n):n==null||s&&!Ta(n)?e.removeAttribute(t):e.setAttribute(t,s?"":ht(n)?String(n):n)}function Oo(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jl(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=Ta(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function gd(e,t,n,r){e.addEventListener(t,n,r)}function vd(e,t,n,r){e.removeEventListener(t,n,r)}const ko=Symbol("_vei");function bd(e,t,n,r,i=null){const s=e[ko]||(e[ko]={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=_d(t);if(r){const c=s[t]=wd(r,i);gd(e,o,c,l)}else a&&(vd(e,o,a,l),s[t]=void 0)}}const No=/(?:Once|Passive|Capture)$/;function _d(e){let t;if(No.test(e)){t={};let r;for(;r=e.match(No);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mn(e.slice(2)),t]}let Li=0;const yd=Promise.resolve(),Sd=()=>Li||(yd.then(()=>Li=0),Li=Date.now());function wd(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mt(Cd(r,n.value),t,5,[r])};return n.value=e,n.attached=Sd(),n}function Cd(e,t){if(de(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Do=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xd=(e,t,n,r,i,s)=>{const a=i==="svg";t==="class"?ud(e,r,a):t==="style"?pd(e,n,r):ii(t)?ys(t)||bd(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ad(e,t,r,a))?(Oo(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&To(e,t,r,a,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ie(r))?Oo(e,ut(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),To(e,t,r,a))};function Ad(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Do(t)&&he(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Do(t)&&Ie(n)?!1:t in e}const Gl=new WeakMap,Kl=new WeakMap,ei=Symbol("_moveCb"),Mo=Symbol("_enterCb"),Ed=e=>(delete e.props.mode,e),Pd=Ed({name:"TransitionGroup",props:De({},Ul,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=zs(),r=ll();let i,s;return pl(()=>{if(!i.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!kd(i[0].el,n.vnode.el,a)){i=[];return}i.forEach(Id),i.forEach(Td);const o=i.filter(Od);is(n.vnode.el),o.forEach(l=>{const c=l.el,f=c.style;_t(c,a),f.transform=f.webkitTransform=f.transitionDuration="";const h=c[ei]=m=>{m&&m.target!==c||(!m||m.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",h),c[ei]=null,jt(c,a))};c.addEventListener("transitionend",h)}),i=[]}),()=>{const a=ve(e),o=ql(a);let l=a.tag||Le;if(i=[],s)for(let c=0;c<s.length;c++){const f=s[c];f.el&&f.el instanceof Element&&(i.push(f),dn(f,ur(f,o,r,n)),Gl.set(f,Zl(f.el)))}s=t.default?ks(t.default()):[];for(let c=0;c<s.length;c++){const f=s[c];f.key!=null&&dn(f,ur(f,o,r,n))}return Re(l,null,s)}}}),Rd=Pd;function Id(e){const t=e.el;t[ei]&&t[ei](),t[Mo]&&t[Mo]()}function Td(e){Kl.set(e,Zl(e.el))}function Od(e){const t=Gl.get(e),n=Kl.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const s=e.el,a=s.style,o=s.getBoundingClientRect();let l=1,c=1;return s.offsetWidth&&(l=o.width/s.offsetWidth),s.offsetHeight&&(c=o.height/s.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),a.transform=a.webkitTransform=`translate(${r/l}px,${i/c}px)`,a.transitionDuration="0s",e}}function Zl(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function kd(e,t,n){const r=e.cloneNode(),i=e[Tn];i&&i.forEach(o=>{o.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(r);const{hasTransform:a}=Wl(r);return s.removeChild(r),a}const Nd=["ctrl","shift","alt","meta"],Dd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nd.some(n=>e[`${n}Key`]&&!t.includes(n))},Lo=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((i,...s)=>{for(let a=0;a<t.length;a++){const o=Dd[t[a]];if(o&&o(i,t))return}return e(i,...s)}))},Md=De({patchProp:xd},od);let Fo;function Ld(){return Fo||(Fo=Bf(Md))}const Fd=((...e)=>{const t=Ld().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=zd(r);if(!i)return;const s=t._component;!he(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Bd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function Bd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function zd(e){return Ie(e)?document.querySelector(e):e}function jd(e){let t=".",n="__",r="--",i;if(e){let g=e.blockPrefix;g&&(t=g),g=e.elementPrefix,g&&(n=g),g=e.modifierPrefix,g&&(r=g)}const s={install(g){i=g.c;const d=g.context;d.bem={},d.bem.b=null,d.bem.els=null}};function a(g){let d,b;return{before(v){d=v.bem.b,b=v.bem.els,v.bem.els=null},after(v){v.bem.b=d,v.bem.els=b},$({context:v,props:S}){return g=typeof g=="string"?g:g({context:v,props:S}),v.bem.b=g,`${(S==null?void 0:S.bPrefix)||t}${v.bem.b}`}}}function o(g){let d;return{before(b){d=b.bem.els},after(b){b.bem.els=d},$({context:b,props:v}){return g=typeof g=="string"?g:g({context:b,props:v}),b.bem.els=g.split(",").map(S=>S.trim()),b.bem.els.map(S=>`${(v==null?void 0:v.bPrefix)||t}${b.bem.b}${n}${S}`).join(", ")}}}function l(g){return{$({context:d,props:b}){g=typeof g=="string"?g:g({context:d,props:b});const v=g.split(",").map(P=>P.trim());function S(P){return v.map(O=>`&${(b==null?void 0:b.bPrefix)||t}${d.bem.b}${P!==void 0?`${n}${P}`:""}${r}${O}`).join(", ")}const C=d.bem.els;return C!==null?S(C[0]):S()}}}function c(g){return{$({context:d,props:b}){g=typeof g=="string"?g:g({context:d,props:b});const v=d.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||t}${d.bem.b}${v!==null&&v.length>0?`${n}${v[0]}`:""}${r}${g})`}}}return Object.assign(s,{cB:((...g)=>i(a(g[0]),g[1],g[2])),cE:((...g)=>i(o(g[0]),g[1],g[2])),cM:((...g)=>i(l(g[0]),g[1],g[2])),cNotM:((...g)=>i(c(g[0]),g[1],g[2]))}),s}function $d(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const Yl=/\s*,(?![^(]*\))\s*/g,Ud=/\s+/g;function Hd(e,t){const n=[];return t.split(Yl).forEach(r=>{let i=$d(r);if(i){if(i===1){e.forEach(a=>{n.push(r.replace("&",a))});return}}else{e.forEach(a=>{n.push((a&&a+" ")+r)});return}let s=[r];for(;i--;){const a=[];s.forEach(o=>{e.forEach(l=>{a.push(o.replace("&",l))})}),s=a}s.forEach(a=>n.push(a))}),n}function qd(e,t){const n=[];return t.split(Yl).forEach(r=>{e.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function Wd(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=Hd(t,n):t=qd(t,n))}),t.join(", ").replace(Ud," ")}function Bo(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function gi(e,t){return(t??document.head).querySelector(`style[cssr-id="${e}"]`)}function Vd(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Mr(e){return e?/^\s*@(s|m)/.test(e):!1}const Gd=/[A-Z]/g;function Xl(e){return e.replace(Gd,t=>"-"+t.toLowerCase())}function Kd(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${Xl(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Zd(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function zo(e,t,n,r){if(!t)return"";const i=Zd(t,n,r);if(!i)return"";if(typeof i=="string")return`${e} {
${i}
}`;const s=Object.keys(i);if(s.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return s.forEach(o=>{const l=i[o];if(o==="raw"){a.push(`
`+l+`
`);return}o=Xl(o),l!=null&&a.push(`  ${o}${Kd(l)}`)}),e&&a.push("}"),a.join(`
`)}function ss(e,t,n){e&&e.forEach(r=>{if(Array.isArray(r))ss(r,t,n);else if(typeof r=="function"){const i=r(t);Array.isArray(i)?ss(i,t,n):i&&n(i)}else r&&n(r)})}function Ql(e,t,n,r,i){const s=e.$;let a="";if(!s||typeof s=="string")Mr(s)?a=s:t.push(s);else if(typeof s=="function"){const c=s({context:r.context,props:i});Mr(c)?a=c:t.push(c)}else if(s.before&&s.before(r.context),!s.$||typeof s.$=="string")Mr(s.$)?a=s.$:t.push(s.$);else if(s.$){const c=s.$({context:r.context,props:i});Mr(c)?a=c:t.push(c)}const o=Wd(t),l=zo(o,e.props,r,i);a?n.push(`${a} {`):l.length&&n.push(l),e.children&&ss(e.children,{context:r.context,props:i},c=>{if(typeof c=="string"){const f=zo(o,{raw:c},r,i);n.push(f)}else Ql(c,t,n,r,i)}),t.pop(),a&&n.push("}"),s&&s.after&&s.after(r.context)}function Yd(e,t,n){const r=[];return Ql(e,[],r,t,n),r.join(`

`)}function hr(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Xd(e,t,n,r){const{els:i}=t;if(n===void 0)i.forEach(Bo),t.els=[];else{const s=gi(n,r);s&&i.includes(s)&&(Bo(s),t.els=i.filter(a=>a!==s))}}function jo(e,t){e.push(t)}function Qd(e,t,n,r,i,s,a,o,l){let c;if(n===void 0&&(c=t.render(r),n=hr(c)),l){l.adapter(n,c??t.render(r));return}o===void 0&&(o=document.head);const f=gi(n,o);if(f!==null&&!s)return f;const h=f??Vd(n);if(c===void 0&&(c=t.render(r)),h.textContent=c,f!==null)return f;if(a){const m=o.querySelector(`meta[name="${a}"]`);if(m)return o.insertBefore(h,m),jo(t.els,h),h}return i?o.insertBefore(h,o.querySelector("style, link")):o.appendChild(h),jo(t.els,h),h}function Jd(e){return Yd(this,this.instance,e)}function eh(e={}){const{id:t,ssr:n,props:r,head:i=!1,force:s=!1,anchorMetaName:a,parent:o}=e;return Qd(this.instance,this,t,r,i,s,a,o,n)}function th(e={}){const{id:t,parent:n}=e;Xd(this.instance,this,t,n)}const Lr=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:Jd,mount:eh,unmount:th}},nh=function(e,t,n,r){return Array.isArray(t)?Lr(e,{$:null},null,t):Array.isArray(n)?Lr(e,t,null,n):Array.isArray(r)?Lr(e,t,n,r):Lr(e,t,n,null)};function rh(e={}){const t={c:((...n)=>nh(t,...n)),use:(n,...r)=>n.install(t,...r),find:gi,context:{},config:e};return t}function ih(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return gi(e)!==null}const sh="n",oh=`.${sh}-`,ah="__",lh="--",Jl=rh(),ec=jd({blockPrefix:oh,elementPrefix:ah,modifierPrefix:lh});Jl.use(ec);const{c:Se,find:Av}=Jl,{cB:Ue,cE:Pe,cM:je,cNotM:tc}=ec,Ev=(...e)=>Se(">",[Ue(...e)]);function Bt(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}function $o(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}const Uo={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function ch(e,t,n){t/=100,n/=100;let r=(i,s=(i+e/60)%6)=>n-n*t*Math.max(Math.min(s,4-s,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function uh(e,t,n){t/=100,n/=100;let r=t*Math.min(n,1-n),i=(s,a=(s+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0)*255,i(8)*255,i(4)*255]}const xt="^\\s*",At="\\s*$",Zt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",ot="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",sn="([0-9A-Fa-f])",on="([0-9A-Fa-f]{2})",nc=new RegExp(`${xt}hsl\\s*\\(${ot},${Zt},${Zt}\\)${At}`),rc=new RegExp(`${xt}hsv\\s*\\(${ot},${Zt},${Zt}\\)${At}`),ic=new RegExp(`${xt}hsla\\s*\\(${ot},${Zt},${Zt},${ot}\\)${At}`),sc=new RegExp(`${xt}hsva\\s*\\(${ot},${Zt},${Zt},${ot}\\)${At}`),fh=new RegExp(`${xt}rgb\\s*\\(${ot},${ot},${ot}\\)${At}`),dh=new RegExp(`${xt}rgba\\s*\\(${ot},${ot},${ot},${ot}\\)${At}`),hh=new RegExp(`${xt}#${sn}${sn}${sn}${At}`),ph=new RegExp(`${xt}#${on}${on}${on}${At}`),mh=new RegExp(`${xt}#${sn}${sn}${sn}${sn}${At}`),gh=new RegExp(`${xt}#${on}${on}${on}${on}${At}`);function tt(e){return parseInt(e,16)}function vh(e){try{let t;if(t=ic.exec(e))return[ti(t[1]),qt(t[5]),qt(t[9]),fn(t[13])];if(t=nc.exec(e))return[ti(t[1]),qt(t[5]),qt(t[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(t){throw t}}function bh(e){try{let t;if(t=sc.exec(e))return[ti(t[1]),qt(t[5]),qt(t[9]),fn(t[13])];if(t=rc.exec(e))return[ti(t[1]),qt(t[5]),qt(t[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(t){throw t}}function hn(e){try{let t;if(t=ph.exec(e))return[tt(t[1]),tt(t[2]),tt(t[3]),1];if(t=fh.exec(e))return[Xe(t[1]),Xe(t[5]),Xe(t[9]),1];if(t=dh.exec(e))return[Xe(t[1]),Xe(t[5]),Xe(t[9]),fn(t[13])];if(t=hh.exec(e))return[tt(t[1]+t[1]),tt(t[2]+t[2]),tt(t[3]+t[3]),1];if(t=gh.exec(e))return[tt(t[1]),tt(t[2]),tt(t[3]),fn(tt(t[4])/255)];if(t=mh.exec(e))return[tt(t[1]+t[1]),tt(t[2]+t[2]),tt(t[3]+t[3]),fn(tt(t[4]+t[4])/255)];if(e in Uo)return hn(Uo[e]);if(nc.test(e)||ic.test(e)){const[n,r,i,s]=vh(e);return[...uh(n,r,i),s]}else if(rc.test(e)||sc.test(e)){const[n,r,i,s]=bh(e);return[...ch(n,r,i),s]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function _h(e){return e>1?1:e<0?0:e}function os(e,t,n,r){return`rgba(${Xe(e)}, ${Xe(t)}, ${Xe(n)}, ${_h(r)})`}function Fi(e,t,n,r,i){return Xe((e*t*(1-r)+n*r)/i)}function yh(e,t){Array.isArray(e)||(e=hn(e)),Array.isArray(t)||(t=hn(t));const n=e[3],r=t[3],i=fn(n+r-n*r);return os(Fi(e[0],n,t[0],r,i),Fi(e[1],n,t[1],r,i),Fi(e[2],n,t[2],r,i),i)}function Pv(e,t){const[n,r,i,s=1]=Array.isArray(e)?e:hn(e);return typeof t.alpha=="number"?os(n,r,i,t.alpha):os(n,r,i,s)}function Fr(e,t){const[n,r,i,s=1]=Array.isArray(e)?e:hn(e),{lightness:a=1,alpha:o=1}=t;return Sh([n*a,r*a,i*a,s*o])}function fn(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function ti(e){const t=Math.round(Number(e));return t>=360||t<0?0:t}function Xe(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function qt(e){const t=Math.round(Number(e));return t>100?100:t<0?0:t}function Sh(e){const[t,n,r]=e;return 3 in e?`rgba(${Xe(t)}, ${Xe(n)}, ${Xe(r)}, ${fn(e[3])})`:`rgba(${Xe(t)}, ${Xe(n)}, ${Xe(r)}, 1)`}function oc(e=8){return Math.random().toString(16).slice(2,2+e)}function wh(e){const t=We(!!e.value);if(t.value)return En(t);const n=un(e,r=>{r&&(t.value=!0,n())});return En(t)}function as(e){const t=me(e),n=We(t.value);return un(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function Ch(e,t){return un(e,n=>{n!==void 0&&(t.value=n)}),me(()=>e.value===void 0?t.value:e.value)}function xh(){const e=We(!1);return Cr(()=>{e.value=!0}),En(e)}function Rv(e){return e}const Ah="@css-render/vue3-ssr";function Eh(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function Ph(e,t,n){const{styles:r,ids:i}=n;i.has(e)||r!==null&&(i.add(e),r.push(Eh(e,t)))}const Rh=typeof document<"u";function vi(){if(Rh)return;const e=Be(Ah,null);if(e!==null)return{adapter:(t,n)=>Ph(t,n,e),context:e}}function Ih(e,t){console.error(`[naive/${e}]: ${t}`)}function ac(e,t){throw new Error(`[naive/${e}]: ${t}`)}function Zn(e,...t){if(Array.isArray(e))e.forEach(n=>Zn(n,...t));else return e(...t)}function Th(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(s=>{t.includes(s)||(r[s]=e[s])}),Object.assign(r,n)}function Oh(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?Xr(e):typeof e=="number"?Xr(String(e)):null}function Dn(e){return e.some(t=>Rn(t)?!(t.type===He||t.type===Le&&!Dn(t.children)):!0)?e:null}function Iv(e,t){return e&&Dn(e())||t()}function Ho(e,t,n){return e&&Dn(e(t))||n(t)}function Tv(e,t){const n=e&&Dn(e());return t(n||null)}function kh(e,t,n){const r=e&&Dn(e(t));return n(r||null)}function Ov(e){return!(e&&Dn(e()))}const Yt="n-config-provider",ls="n";function bi(e={},t={defaultBordered:!0}){const n=Be(Yt,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:me(()=>{var r,i;const{bordered:s}=e;return s!==void 0?s:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:n?n.mergedClsPrefixRef:Ka(ls),namespaceRef:me(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function lc(e,t,n,r){n||ac("useThemeClass","cssVarsRef is not passed");const i=Be(Yt,null),s=i==null?void 0:i.mergedThemeHashRef,a=i==null?void 0:i.styleMountTarget,o=We(""),l=vi();let c;const f=`__${e}`,h=()=>{let m=f;const p=t?t.value:void 0,g=s==null?void 0:s.value;g&&(m+=`-${g}`),p&&(m+=`-${p}`);const{themeOverrides:d,builtinThemeOverrides:b}=r;d&&(m+=`-${hr(JSON.stringify(d))}`),b&&(m+=`-${hr(JSON.stringify(b))}`),o.value=m,c=()=>{const v=n.value;let S="";for(const C in v)S+=`${C}: ${v[C]};`;Se(`.${m}`,S).mount({id:m,ssr:l,parent:a}),c=void 0}};return rl(()=>{h()}),{themeClass:o,onRender:()=>{c==null||c()}}}var cc=typeof global=="object"&&global&&global.Object===Object&&global,Nh=typeof self=="object"&&self&&self.Object===Object&&self,Mn=cc||Nh||Function("return this")(),On=Mn.Symbol,uc=Object.prototype,Dh=uc.hasOwnProperty,Mh=uc.toString,Wn=On?On.toStringTag:void 0;function Lh(e){var t=Dh.call(e,Wn),n=e[Wn];try{e[Wn]=void 0;var r=!0}catch{}var i=Mh.call(e);return r&&(t?e[Wn]=n:delete e[Wn]),i}var Fh=Object.prototype,Bh=Fh.toString;function zh(e){return Bh.call(e)}var jh="[object Null]",$h="[object Undefined]",qo=On?On.toStringTag:void 0;function Ar(e){return e==null?e===void 0?$h:jh:qo&&qo in Object(e)?Lh(e):zh(e)}function Ln(e){return e!=null&&typeof e=="object"}var Uh="[object Symbol]";function Hh(e){return typeof e=="symbol"||Ln(e)&&Ar(e)==Uh}function qh(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var ni=Array.isArray,Wo=On?On.prototype:void 0,Vo=Wo?Wo.toString:void 0;function fc(e){if(typeof e=="string")return e;if(ni(e))return qh(e,fc)+"";if(Hh(e))return Vo?Vo.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function gn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function dc(e){return e}var Wh="[object AsyncFunction]",Vh="[object Function]",Gh="[object GeneratorFunction]",Kh="[object Proxy]";function js(e){if(!gn(e))return!1;var t=Ar(e);return t==Vh||t==Gh||t==Wh||t==Kh}var Bi=Mn["__core-js_shared__"],Go=(function(){var e=/[^.]+$/.exec(Bi&&Bi.keys&&Bi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function Zh(e){return!!Go&&Go in e}var Yh=Function.prototype,Xh=Yh.toString;function Qh(e){if(e!=null){try{return Xh.call(e)}catch{}try{return e+""}catch{}}return""}var Jh=/[\\^$.*+?()[\]{}|]/g,ep=/^\[object .+?Constructor\]$/,tp=Function.prototype,np=Object.prototype,rp=tp.toString,ip=np.hasOwnProperty,sp=RegExp("^"+rp.call(ip).replace(Jh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function op(e){if(!gn(e)||Zh(e))return!1;var t=js(e)?sp:ep;return t.test(Qh(e))}function ap(e,t){return e==null?void 0:e[t]}function $s(e,t){var n=ap(e,t);return op(n)?n:void 0}var Ko=Object.create,lp=(function(){function e(){}return function(t){if(!gn(t))return{};if(Ko)return Ko(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})();function cp(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function up(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var fp=800,dp=16,hp=Date.now;function pp(e){var t=0,n=0;return function(){var r=hp(),i=dp-(r-n);if(n=r,i>0){if(++t>=fp)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function mp(e){return function(){return e}}var ri=(function(){try{var e=$s(Object,"defineProperty");return e({},"",{}),e}catch{}})(),gp=ri?function(e,t){return ri(e,"toString",{configurable:!0,enumerable:!1,value:mp(t),writable:!0})}:dc,vp=pp(gp),bp=9007199254740991,_p=/^(?:0|[1-9]\d*)$/;function hc(e,t){var n=typeof e;return t=t??bp,!!t&&(n=="number"||n!="symbol"&&_p.test(e))&&e>-1&&e%1==0&&e<t}function Us(e,t,n){t=="__proto__"&&ri?ri(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function _i(e,t){return e===t||e!==e&&t!==t}var yp=Object.prototype,Sp=yp.hasOwnProperty;function wp(e,t,n){var r=e[t];(!(Sp.call(e,t)&&_i(r,n))||n===void 0&&!(t in e))&&Us(e,t,n)}function Cp(e,t,n,r){var i=!n;n||(n={});for(var s=-1,a=t.length;++s<a;){var o=t[s],l=void 0;l===void 0&&(l=e[o]),i?Us(n,o,l):wp(n,o,l)}return n}var Zo=Math.max;function xp(e,t,n){return t=Zo(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,s=Zo(r.length-t,0),a=Array(s);++i<s;)a[i]=r[t+i];i=-1;for(var o=Array(t+1);++i<t;)o[i]=r[i];return o[t]=n(a),cp(e,this,o)}}function Ap(e,t){return vp(xp(e,t,dc),e+"")}var Ep=9007199254740991;function pc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ep}function Hs(e){return e!=null&&pc(e.length)&&!js(e)}function Pp(e,t,n){if(!gn(n))return!1;var r=typeof t;return(r=="number"?Hs(n)&&hc(t,n.length):r=="string"&&t in n)?_i(n[t],e):!1}function Rp(e){return Ap(function(t,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(s=e.length>3&&typeof s=="function"?(i--,s):void 0,a&&Pp(n[0],n[1],a)&&(s=i<3?void 0:s,i=1),t=Object(t);++r<i;){var o=n[r];o&&e(t,o,r,s)}return t})}var Ip=Object.prototype;function mc(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Ip;return e===n}function Tp(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Op="[object Arguments]";function Yo(e){return Ln(e)&&Ar(e)==Op}var gc=Object.prototype,kp=gc.hasOwnProperty,Np=gc.propertyIsEnumerable,cs=Yo((function(){return arguments})())?Yo:function(e){return Ln(e)&&kp.call(e,"callee")&&!Np.call(e,"callee")};function Dp(){return!1}var vc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Xo=vc&&typeof module=="object"&&module&&!module.nodeType&&module,Mp=Xo&&Xo.exports===vc,Qo=Mp?Mn.Buffer:void 0,Lp=Qo?Qo.isBuffer:void 0,bc=Lp||Dp,Fp="[object Arguments]",Bp="[object Array]",zp="[object Boolean]",jp="[object Date]",$p="[object Error]",Up="[object Function]",Hp="[object Map]",qp="[object Number]",Wp="[object Object]",Vp="[object RegExp]",Gp="[object Set]",Kp="[object String]",Zp="[object WeakMap]",Yp="[object ArrayBuffer]",Xp="[object DataView]",Qp="[object Float32Array]",Jp="[object Float64Array]",em="[object Int8Array]",tm="[object Int16Array]",nm="[object Int32Array]",rm="[object Uint8Array]",im="[object Uint8ClampedArray]",sm="[object Uint16Array]",om="[object Uint32Array]",Ee={};Ee[Qp]=Ee[Jp]=Ee[em]=Ee[tm]=Ee[nm]=Ee[rm]=Ee[im]=Ee[sm]=Ee[om]=!0;Ee[Fp]=Ee[Bp]=Ee[Yp]=Ee[zp]=Ee[Xp]=Ee[jp]=Ee[$p]=Ee[Up]=Ee[Hp]=Ee[qp]=Ee[Wp]=Ee[Vp]=Ee[Gp]=Ee[Kp]=Ee[Zp]=!1;function am(e){return Ln(e)&&pc(e.length)&&!!Ee[Ar(e)]}function lm(e){return function(t){return e(t)}}var _c=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ir=_c&&typeof module=="object"&&module&&!module.nodeType&&module,cm=ir&&ir.exports===_c,zi=cm&&cc.process,Jo=(function(){try{var e=ir&&ir.require&&ir.require("util").types;return e||zi&&zi.binding&&zi.binding("util")}catch{}})(),ea=Jo&&Jo.isTypedArray,yc=ea?lm(ea):am,um=Object.prototype,fm=um.hasOwnProperty;function dm(e,t){var n=ni(e),r=!n&&cs(e),i=!n&&!r&&bc(e),s=!n&&!r&&!i&&yc(e),a=n||r||i||s,o=a?Tp(e.length,String):[],l=o.length;for(var c in e)(t||fm.call(e,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||hc(c,l)))&&o.push(c);return o}function hm(e,t){return function(n){return e(t(n))}}function pm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var mm=Object.prototype,gm=mm.hasOwnProperty;function vm(e){if(!gn(e))return pm(e);var t=mc(e),n=[];for(var r in e)r=="constructor"&&(t||!gm.call(e,r))||n.push(r);return n}function Sc(e){return Hs(e)?dm(e,!0):vm(e)}var pr=$s(Object,"create");function bm(){this.__data__=pr?pr(null):{},this.size=0}function _m(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var ym="__lodash_hash_undefined__",Sm=Object.prototype,wm=Sm.hasOwnProperty;function Cm(e){var t=this.__data__;if(pr){var n=t[e];return n===ym?void 0:n}return wm.call(t,e)?t[e]:void 0}var xm=Object.prototype,Am=xm.hasOwnProperty;function Em(e){var t=this.__data__;return pr?t[e]!==void 0:Am.call(t,e)}var Pm="__lodash_hash_undefined__";function Rm(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=pr&&t===void 0?Pm:t,this}function pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pn.prototype.clear=bm;pn.prototype.delete=_m;pn.prototype.get=Cm;pn.prototype.has=Em;pn.prototype.set=Rm;function Im(){this.__data__=[],this.size=0}function yi(e,t){for(var n=e.length;n--;)if(_i(e[n][0],t))return n;return-1}var Tm=Array.prototype,Om=Tm.splice;function km(e){var t=this.__data__,n=yi(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Om.call(t,n,1),--this.size,!0}function Nm(e){var t=this.__data__,n=yi(t,e);return n<0?void 0:t[n][1]}function Dm(e){return yi(this.__data__,e)>-1}function Mm(e,t){var n=this.__data__,r=yi(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Lt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Lt.prototype.clear=Im;Lt.prototype.delete=km;Lt.prototype.get=Nm;Lt.prototype.has=Dm;Lt.prototype.set=Mm;var wc=$s(Mn,"Map");function Lm(){this.size=0,this.__data__={hash:new pn,map:new(wc||Lt),string:new pn}}function Fm(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Si(e,t){var n=e.__data__;return Fm(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Bm(e){var t=Si(this,e).delete(e);return this.size-=t?1:0,t}function zm(e){return Si(this,e).get(e)}function jm(e){return Si(this,e).has(e)}function $m(e,t){var n=Si(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Fn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Fn.prototype.clear=Lm;Fn.prototype.delete=Bm;Fn.prototype.get=zm;Fn.prototype.has=jm;Fn.prototype.set=$m;function Um(e){return e==null?"":fc(e)}var Cc=hm(Object.getPrototypeOf,Object),Hm="[object Object]",qm=Function.prototype,Wm=Object.prototype,xc=qm.toString,Vm=Wm.hasOwnProperty,Gm=xc.call(Object);function Km(e){if(!Ln(e)||Ar(e)!=Hm)return!1;var t=Cc(e);if(t===null)return!0;var n=Vm.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&xc.call(n)==Gm}function Zm(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var s=Array(i);++r<i;)s[r]=e[r+t];return s}function Ym(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:Zm(e,t,n)}var Xm="\\ud800-\\udfff",Qm="\\u0300-\\u036f",Jm="\\ufe20-\\ufe2f",eg="\\u20d0-\\u20ff",tg=Qm+Jm+eg,ng="\\ufe0e\\ufe0f",rg="\\u200d",ig=RegExp("["+rg+Xm+tg+ng+"]");function Ac(e){return ig.test(e)}function sg(e){return e.split("")}var Ec="\\ud800-\\udfff",og="\\u0300-\\u036f",ag="\\ufe20-\\ufe2f",lg="\\u20d0-\\u20ff",cg=og+ag+lg,ug="\\ufe0e\\ufe0f",fg="["+Ec+"]",us="["+cg+"]",fs="\\ud83c[\\udffb-\\udfff]",dg="(?:"+us+"|"+fs+")",Pc="[^"+Ec+"]",Rc="(?:\\ud83c[\\udde6-\\uddff]){2}",Ic="[\\ud800-\\udbff][\\udc00-\\udfff]",hg="\\u200d",Tc=dg+"?",Oc="["+ug+"]?",pg="(?:"+hg+"(?:"+[Pc,Rc,Ic].join("|")+")"+Oc+Tc+")*",mg=Oc+Tc+pg,gg="(?:"+[Pc+us+"?",us,Rc,Ic,fg].join("|")+")",vg=RegExp(fs+"(?="+fs+")|"+gg+mg,"g");function bg(e){return e.match(vg)||[]}function _g(e){return Ac(e)?bg(e):sg(e)}function yg(e){return function(t){t=Um(t);var n=Ac(t)?_g(t):void 0,r=n?n[0]:t.charAt(0),i=n?Ym(n,1).join(""):t.slice(1);return r[e]()+i}}var Sg=yg("toUpperCase");function wg(){this.__data__=new Lt,this.size=0}function Cg(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function xg(e){return this.__data__.get(e)}function Ag(e){return this.__data__.has(e)}var Eg=200;function Pg(e,t){var n=this.__data__;if(n instanceof Lt){var r=n.__data__;if(!wc||r.length<Eg-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Fn(r)}return n.set(e,t),this.size=n.size,this}function Bn(e){var t=this.__data__=new Lt(e);this.size=t.size}Bn.prototype.clear=wg;Bn.prototype.delete=Cg;Bn.prototype.get=xg;Bn.prototype.has=Ag;Bn.prototype.set=Pg;var kc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ta=kc&&typeof module=="object"&&module&&!module.nodeType&&module,Rg=ta&&ta.exports===kc,na=Rg?Mn.Buffer:void 0;na&&na.allocUnsafe;function Ig(e,t){return e.slice()}var ra=Mn.Uint8Array;function Tg(e){var t=new e.constructor(e.byteLength);return new ra(t).set(new ra(e)),t}function Og(e,t){var n=Tg(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}function kg(e){return typeof e.constructor=="function"&&!mc(e)?lp(Cc(e)):{}}function Ng(e){return function(t,n,r){for(var i=-1,s=Object(t),a=r(t),o=a.length;o--;){var l=a[++i];if(n(s[l],l,s)===!1)break}return t}}var Dg=Ng();function ds(e,t,n){(n!==void 0&&!_i(e[t],n)||n===void 0&&!(t in e))&&Us(e,t,n)}function Mg(e){return Ln(e)&&Hs(e)}function hs(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Lg(e){return Cp(e,Sc(e))}function Fg(e,t,n,r,i,s,a){var o=hs(e,n),l=hs(t,n),c=a.get(l);if(c){ds(e,n,c);return}var f=s?s(o,l,n+"",e,t,a):void 0,h=f===void 0;if(h){var m=ni(l),p=!m&&bc(l),g=!m&&!p&&yc(l);f=l,m||p||g?ni(o)?f=o:Mg(o)?f=up(o):p?(h=!1,f=Ig(l)):g?(h=!1,f=Og(l)):f=[]:Km(l)||cs(l)?(f=o,cs(o)?f=Lg(o):(!gn(o)||js(o))&&(f=kg(l))):h=!1}h&&(a.set(l,f),i(f,l,r,s,a),a.delete(l)),ds(e,n,f)}function Nc(e,t,n,r,i){e!==t&&Dg(t,function(s,a){if(i||(i=new Bn),gn(s))Fg(e,t,a,n,Nc,r,i);else{var o=r?r(hs(e,a),s,a+"",e,t,i):void 0;o===void 0&&(o=s),ds(e,a,o)}},Sc)}var Yn=Rp(function(e,t,n){Nc(e,t,n)});const mr="naive-ui-style";function qs(e,t,n){if(!t)return;const r=vi(),i=me(()=>{const{value:o}=t;if(!o)return;const l=o[e];if(l)return l}),s=Be(Yt,null),a=()=>{rl(()=>{const{value:o}=n,l=`${o}${e}Rtl`;if(ih(l,r))return;const{value:c}=i;c&&c.style.mount({id:l,head:!0,anchorMetaName:mr,props:{bPrefix:o?`.${o}-`:void 0},ssr:r,parent:s==null?void 0:s.styleMountTarget})})};return r?a():di(a),i}const wi={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Bg,fontFamily:zg,lineHeight:jg}=wi,Dc=Se("body",`
 margin: 0;
 font-size: ${Bg};
 font-family: ${zg};
 line-height: ${jg};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[Se("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function Ws(e,t,n){if(!t)return;const r=vi(),i=Be(Yt,null),s=()=>{const a=n.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:mr,props:{bPrefix:a?`.${a}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget}),i!=null&&i.preflightStyleDisabled||Dc.mount({id:"n-global",head:!0,anchorMetaName:mr,ssr:r,parent:i==null?void 0:i.styleMountTarget})};r?s():di(s)}function kv(e){return e}function Er(e,t,n,r,i,s){const a=vi(),o=Be(Yt,null);if(n){const c=()=>{const f=s==null?void 0:s.value;n.mount({id:f===void 0?t:f+t,head:!0,props:{bPrefix:f?`.${f}-`:void 0},anchorMetaName:mr,ssr:a,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||Dc.mount({id:"n-global",head:!0,anchorMetaName:mr,ssr:a,parent:o==null?void 0:o.styleMountTarget})};a?c():di(c)}return me(()=>{var c;const{theme:{common:f,self:h,peers:m={}}={},themeOverrides:p={},builtinThemeOverrides:g={}}=i,{common:d,peers:b}=p,{common:v=void 0,[e]:{common:S=void 0,self:C=void 0,peers:P={}}={}}=(o==null?void 0:o.mergedThemeRef.value)||{},{common:O=void 0,[e]:z={}}=(o==null?void 0:o.mergedThemeOverridesRef.value)||{},{common:L,peers:G={}}=z,M=Yn({},f||S||v||r.common,O,L,d),q=Yn((c=h||C||r.self)===null||c===void 0?void 0:c(M),g,z,p);return{common:M,self:q,peers:Yn({},r.peers,P,m),peerOverrides:Yn({},g.peers,G,b)}})}Er.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const $g=Ue("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[Se("svg",`
 height: 1em;
 width: 1em;
 `)]),Vs=ze({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Ws("-base-icon",$g,_r(e,"clsPrefix"))},render(){return te("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Mc=ze({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=xh();return()=>te(Hl,{name:"icon-switch-transition",appear:n.value},t)}});function Pr(e,t){const n=ze({render(){return t()}});return ze({name:Sg(e),setup(){var r;const i=(r=Be(Yt,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var s;const a=(s=i==null?void 0:i.value)===null||s===void 0?void 0:s[e];return a?a():te(n,null)}}})}const Ug=ze({name:"ChevronLeft",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Hg=ze({name:"ChevronRight",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),qg=Pr("close",()=>te("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},te("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},te("g",{fill:"currentColor","fill-rule":"nonzero"},te("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Wg=Pr("error",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),Vg=Pr("info",()=>te("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),Gg=Pr("success",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),Kg=Pr("warning",()=>te("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:Zg}=wi;function ps({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${Zg} !important`}={}){return[Se("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:n,opacity:0}),Se("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),Se("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const Yg=Ue("base-close",`
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
 `),Se("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),tc("disabled",[Se("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Se("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),Se("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),Se("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),Se("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),je("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),je("round",[Se("&::before",`
 border-radius: 50%;
 `)])]),Xg=ze({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Ws("-base-close",Yg,_r(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:r,round:i,isButtonTag:s}=e;return te(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,i&&`${t}-base-close--round`],onMousedown:o=>{e.focusable||o.preventDefault()},onClick:e.onClick},te(Vs,{clsPrefix:t},{default:()=>te(qg,null)}))}}}),Lc=ze({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(o){e.width?o.style.maxWidth=`${o.offsetWidth}px`:o.style.maxHeight=`${o.offsetHeight}px`,o.offsetWidth}function r(o){e.width?o.style.maxWidth="0":o.style.maxHeight="0",o.offsetWidth;const{onLeave:l}=e;l&&l()}function i(o){e.width?o.style.maxWidth="":o.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function s(o){if(o.style.transition="none",e.width){const l=o.offsetWidth;o.style.maxWidth="0",o.offsetWidth,o.style.transition="",o.style.maxWidth=`${l}px`}else if(e.reverse)o.style.maxHeight=`${o.offsetHeight}px`,o.offsetHeight,o.style.transition="",o.style.maxHeight="0";else{const l=o.offsetHeight;o.style.maxHeight="0",o.offsetWidth,o.style.transition="",o.style.maxHeight=`${l}px`}o.offsetWidth}function a(o){var l;e.width?o.style.maxWidth="":e.reverse||(o.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:o,width:l,appear:c,mode:f}=e,h=o?Rd:Hl,m={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:s,onAfterEnter:a,onBeforeLeave:n,onLeave:r,onAfterLeave:i};return o||(m.mode=f),te(h,m,t)}}}),Qg=Se([Se("@keyframes rotator",`
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
 `,[Pe("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[ps()]),Pe("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[ps({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),Pe("container",`
 animation: rotator 3s linear infinite both;
 `,[Pe("icon",`
 height: 1em;
 width: 1em;
 `)])])]),ji="1.6s",Jg={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},e0=ze({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},Jg),setup(e){Ws("-base-loading",Qg,_r(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,s=t/i;return te("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},te(Mc,null,{default:()=>this.show?te("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},te("div",{class:`${e}-base-loading__container`},te("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},te("g",null,te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};270 ${s} ${s}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"}),te("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:s,cy:s,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${s} ${s};135 ${s} ${s};450 ${s} ${s}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"}),te("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:ji,fill:"freeze",repeatCount:"indefinite"})))))):te("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),fe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},t0=hn(fe.neutralBase),Fc=hn(fe.neutralInvertBase),n0=`rgba(${Fc.slice(0,3).join(", ")}, `;function ia(e){return`${n0+String(e)})`}function Ke(e){const t=Array.from(Fc);return t[3]=Number(e),yh(t0,t)}const Bc=Object.assign(Object.assign({name:"common"},wi),{baseColor:fe.neutralBase,primaryColor:fe.primaryDefault,primaryColorHover:fe.primaryHover,primaryColorPressed:fe.primaryActive,primaryColorSuppl:fe.primarySuppl,infoColor:fe.infoDefault,infoColorHover:fe.infoHover,infoColorPressed:fe.infoActive,infoColorSuppl:fe.infoSuppl,successColor:fe.successDefault,successColorHover:fe.successHover,successColorPressed:fe.successActive,successColorSuppl:fe.successSuppl,warningColor:fe.warningDefault,warningColorHover:fe.warningHover,warningColorPressed:fe.warningActive,warningColorSuppl:fe.warningSuppl,errorColor:fe.errorDefault,errorColorHover:fe.errorHover,errorColorPressed:fe.errorActive,errorColorSuppl:fe.errorSuppl,textColorBase:fe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Ke(fe.alpha4),placeholderColor:Ke(fe.alpha4),placeholderColorDisabled:Ke(fe.alpha5),iconColor:Ke(fe.alpha4),iconColorHover:Fr(Ke(fe.alpha4),{lightness:.75}),iconColorPressed:Fr(Ke(fe.alpha4),{lightness:.9}),iconColorDisabled:Ke(fe.alpha5),opacity1:fe.alpha1,opacity2:fe.alpha2,opacity3:fe.alpha3,opacity4:fe.alpha4,opacity5:fe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Ke(Number(fe.alphaClose)),closeIconColorHover:Ke(Number(fe.alphaClose)),closeIconColorPressed:Ke(Number(fe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Ke(fe.alpha4),clearColorHover:Fr(Ke(fe.alpha4),{lightness:.75}),clearColorPressed:Fr(Ke(fe.alpha4),{lightness:.9}),scrollbarColor:ia(fe.alphaScrollbar),scrollbarColorHover:ia(fe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ke(fe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:fe.neutralPopover,tableColor:fe.neutralCard,cardColor:fe.neutralCard,modalColor:fe.neutralModal,bodyColor:fe.neutralBody,tagColor:"#eee",avatarColor:Ke(fe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Ke(fe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:fe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),{cubicBezierEaseInOut:bt,cubicBezierEaseOut:r0,cubicBezierEaseIn:i0}=wi;function zc({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:i=!1,enterToProps:s=void 0,leaveToProps:a=void 0,reverse:o=!1}={}){const l=o?"leave":"enter",c=o?"enter":"leave";return[Se(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},s),{opacity:1})),Se(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),Se(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${bt} ${r},
 opacity ${t} ${r0} ${r},
 margin-top ${t} ${bt} ${r},
 margin-bottom ${t} ${bt} ${r},
 padding-top ${t} ${bt} ${r},
 padding-bottom ${t} ${bt} ${r}
 ${n?`,${n}`:""}
 `),Se(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${bt},
 opacity ${t} ${i0},
 margin-top ${t} ${bt},
 margin-bottom ${t} ${bt},
 padding-top ${t} ${bt},
 padding-bottom ${t} ${bt}
 ${n?`,${n}`:""}
 `)]}function s0(e){const{fontWeight:t,textColor1:n,textColor2:r,textColorDisabled:i,dividerColor:s,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:t,dividerColor:s,titleTextColor:n,titleTextColorDisabled:i,fontSize:a,textColor:r,arrowColor:r,arrowColorDisabled:i,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const o0={common:Bc,self:s0},a0=Ue("collapse","width: 100%;",[Ue("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[je("disabled",[Pe("header","cursor: not-allowed;",[Pe("header-main",`
 color: var(--n-title-text-color-disabled);
 `),Ue("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),Ue("collapse-item","margin-left: 32px;"),Se("&:first-child","margin-top: 0;"),Se("&:first-child >",[Pe("header","padding-top: 0;")]),je("left-arrow-placement",[Pe("header",[Ue("collapse-item-arrow","margin-right: 4px;")])]),je("right-arrow-placement",[Pe("header",[Ue("collapse-item-arrow","margin-left: 4px;")])]),Pe("content-wrapper",[Pe("content-inner","padding-top: 16px;"),zc({duration:"0.15s"})]),je("active",[Pe("header",[je("active",[Ue("collapse-item-arrow","transform: rotate(90deg);")])])]),Se("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),tc("disabled",[je("trigger-area-main",[Pe("header",[Pe("header-main","cursor: pointer;"),Ue("collapse-item-arrow","cursor: default;")])]),je("trigger-area-arrow",[Pe("header",[Ue("collapse-item-arrow","cursor: pointer;")])]),je("trigger-area-extra",[Pe("header",[Pe("header-extra","cursor: pointer;")])])]),Pe("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[Pe("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),Pe("header-extra",`
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
 `)])])]),l0=Object.assign(Object.assign({},Er.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),jc="n-collapse",c0=ze({name:"Collapse",props:l0,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=bi(e),s=We(e.defaultExpandedNames),a=me(()=>e.expandedNames),o=Ch(a,s),l=Er("Collapse","-collapse",a0,o0,e,n);function c(d){const{"onUpdate:expandedNames":b,onUpdateExpandedNames:v,onExpandedNamesChange:S}=e;v&&Zn(v,d),b&&Zn(b,d),S&&Zn(S,d),s.value=d}function f(d){const{onItemHeaderClick:b}=e;b&&Zn(b,d)}function h(d,b,v){const{accordion:S}=e,{value:C}=o;if(S)d?(c([b]),f({name:b,expanded:!0,event:v})):(c([]),f({name:b,expanded:!1,event:v}));else if(!Array.isArray(C))c([b]),f({name:b,expanded:!0,event:v});else{const P=C.slice(),O=P.findIndex(z=>b===z);~O?(P.splice(O,1),c(P),f({name:b,expanded:!1,event:v})):(P.push(b),c(P),f({name:b,expanded:!0,event:v}))}}Gt(jc,{props:e,mergedClsPrefixRef:n,expandedNamesRef:o,slots:t,toggleItem:h});const m=qs("Collapse",i,n),p=me(()=>{const{common:{cubicBezierEaseInOut:d},self:{titleFontWeight:b,dividerColor:v,titlePadding:S,titleTextColor:C,titleTextColorDisabled:P,textColor:O,arrowColor:z,fontSize:L,titleFontSize:G,arrowColorDisabled:M,itemMargin:q}}=l.value;return{"--n-font-size":L,"--n-bezier":d,"--n-text-color":O,"--n-divider-color":v,"--n-title-padding":S,"--n-title-font-size":G,"--n-title-text-color":C,"--n-title-text-color-disabled":P,"--n-title-font-weight":b,"--n-arrow-color":z,"--n-arrow-color-disabled":M,"--n-item-margin":q}}),g=r?lc("collapse",void 0,p,e):void 0;return{rtlEnabled:m,mergedTheme:l,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),te("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),u0=ze({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:wh(_r(e,"show"))}},render(){return te(Lc,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t==="show"&&n,s=te("div",{class:`${r}-collapse-item__content-wrapper`},te("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return i?Xu(s,[[fd,e]]):e?s:null}})}}),f0={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},d0=ze({name:"CollapseItem",props:f0,setup(e){const{mergedRtlRef:t}=bi(e),n=oc(),r=as(()=>{var h;return(h=e.name)!==null&&h!==void 0?h:n}),i=Be(jc);i||ac("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:s,props:a,mergedClsPrefixRef:o,slots:l}=i,c=me(()=>{const{value:h}=s;if(Array.isArray(h)){const{value:m}=r;return!~h.findIndex(p=>p===m)}else if(h){const{value:m}=r;return m!==h}return!0});return{rtlEnabled:qs("Collapse",t,o),collapseSlots:l,randomName:n,mergedClsPrefix:o,collapsed:c,triggerAreas:_r(a,"triggerAreas"),mergedDisplayDirective:me(()=>{const{displayDirective:h}=e;return h||a.displayDirective}),arrowPlacement:me(()=>a.arrowPlacement),handleClick(h){let m="main";$o(h,"arrow")&&(m="arrow"),$o(h,"extra")&&(m="extra"),a.triggerAreas.includes(m)&&i&&!e.disabled&&i.toggleItem(c.value,r.value,h)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:s,disabled:a,triggerAreas:o}=this,l=Ho(t.header,{collapsed:r},()=>[this.title]),c=t["header-extra"]||e["header-extra"],f=t.arrow||e.arrow;return te("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${n}-arrow-placement`,a&&`${s}-collapse-item--disabled`,!r&&`${s}-collapse-item--active`,o.map(h=>`${s}-collapse-item--trigger-area-${h}`)]},te("div",{class:[`${s}-collapse-item__header`,!r&&`${s}-collapse-item__header--active`]},te("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&l,te("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},Ho(f,{collapsed:r},()=>[te(Vs,{clsPrefix:s},{default:()=>this.rtlEnabled?te(Ug,null):te(Hg,null)})])),n==="left"&&l),kh(c,{collapsed:r},h=>te("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},h))),te(u0,{clsPrefix:s,displayDirective:i,show:!r},t))}}),h0={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Ih("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},p0=ze({name:"ConfigProvider",alias:["App"],props:h0,setup(e){const t=Be(Yt,null),n=me(()=>{const{theme:d}=e;if(d===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return d===void 0?b:b===void 0?d:Object.assign({},b,d)}),r=me(()=>{const{themeOverrides:d}=e;if(d!==null){if(d===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?d:Yn({},b,d)}}}),i=as(()=>{const{namespace:d}=e;return d===void 0?t==null?void 0:t.mergedNamespaceRef.value:d}),s=as(()=>{const{bordered:d}=e;return d===void 0?t==null?void 0:t.mergedBorderedRef.value:d}),a=me(()=>{const{icons:d}=e;return d===void 0?t==null?void 0:t.mergedIconsRef.value:d}),o=me(()=>{const{componentOptions:d}=e;return d!==void 0?d:t==null?void 0:t.mergedComponentPropsRef.value}),l=me(()=>{const{clsPrefix:d}=e;return d!==void 0?d:t?t.mergedClsPrefixRef.value:ls}),c=me(()=>{var d;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const v={};for(const S of b)v[S.name]=Zi(S),(d=S.peers)===null||d===void 0||d.forEach(C=>{C.name in v||(v[C.name]=Zi(C))});return v}),f=me(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),h=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),m=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),p=e.styleMountTarget||(t==null?void 0:t.styleMountTarget),g=me(()=>{const{value:d}=n,{value:b}=r,v=b&&Object.keys(b).length!==0,S=d==null?void 0:d.name;return S?v?`${S}-${hr(JSON.stringify(r.value))}`:S:v?hr(JSON.stringify(r.value)):""});return Gt(Yt,{mergedThemeHashRef:g,mergedBreakpointsRef:f,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:o,mergedBorderedRef:s,mergedNamespaceRef:i,mergedClsPrefixRef:l,mergedLocaleRef:me(()=>{const{locale:d}=e;if(d!==null)return d===void 0?t==null?void 0:t.mergedLocaleRef.value:d}),mergedDateLocaleRef:me(()=>{const{dateLocale:d}=e;if(d!==null)return d===void 0?t==null?void 0:t.mergedDateLocaleRef.value:d}),mergedHljsRef:me(()=>{const{hljs:d}=e;return d===void 0?t==null?void 0:t.mergedHljsRef.value:d}),mergedKatexRef:me(()=>{const{katex:d}=e;return d===void 0?t==null?void 0:t.mergedKatexRef.value:d}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:h||!1,preflightStyleDisabled:m||!1,styleMountTarget:p}),{mergedClsPrefix:l,mergedBordered:s,mergedNamespace:i,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):te(this.as||this.tag,{class:`${this.mergedClsPrefix||ls}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),m0="n-message-api",$c="n-message-provider",g0={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function v0(e){const{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,infoColor:s,successColor:a,errorColor:o,warningColor:l,popoverColor:c,boxShadow2:f,primaryColor:h,lineHeight:m,borderRadius:p,closeColorHover:g,closeColorPressed:d}=e;return Object.assign(Object.assign({},g0),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:f,boxShadowInfo:f,boxShadowSuccess:f,boxShadowError:f,boxShadowWarning:f,boxShadowLoading:f,iconColor:t,iconColorInfo:s,iconColorSuccess:a,iconColorWarning:l,iconColorError:o,iconColorLoading:h,closeColorHover:g,closeColorPressed:d,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,closeColorHoverInfo:g,closeColorPressedInfo:d,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:i,closeColorHoverSuccess:g,closeColorPressedSuccess:d,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:i,closeColorHoverError:g,closeColorPressedError:d,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:i,closeColorHoverWarning:g,closeColorPressedWarning:d,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:i,closeColorHoverLoading:g,closeColorPressedLoading:d,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:i,loadingColor:h,lineHeight:m,borderRadius:p,border:"0"})}const b0={common:Bc,self:v0},Uc={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},_0=Se([Ue("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[zc({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Ue("message",`
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
 `,[Pe("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),Pe("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>je(`${e}-type`,[Se("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),Se("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[ps()])]),Pe("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[Se("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Se("&:active",`
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
 `)])]),y0={info:()=>te(Vg,null),success:()=>te(Gg,null),warning:()=>te(Kg,null),error:()=>te(Wg,null),default:()=>null},S0=ze({name:"Message",props:Object.assign(Object.assign({},Uc),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=bi(e),{props:r,mergedClsPrefixRef:i}=Be($c),s=qs("Message",n,i),a=Er("Message","-message",_0,b0,r,i),o=me(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:f},self:{padding:h,margin:m,maxWidth:p,iconMargin:g,closeMargin:d,closeSize:b,iconSize:v,fontSize:S,lineHeight:C,borderRadius:P,border:O,iconColorInfo:z,iconColorSuccess:L,iconColorWarning:G,iconColorError:M,iconColorLoading:q,closeIconSize:ee,closeBorderRadius:x,[Bt("textColor",c)]:j,[Bt("boxShadow",c)]:_,[Bt("color",c)]:W,[Bt("closeColorHover",c)]:se,[Bt("closeColorPressed",c)]:V,[Bt("closeIconColor",c)]:ie,[Bt("closeIconColorPressed",c)]:Y,[Bt("closeIconColorHover",c)]:ae}}=a.value;return{"--n-bezier":f,"--n-margin":m,"--n-padding":h,"--n-max-width":p,"--n-font-size":S,"--n-icon-margin":g,"--n-icon-size":v,"--n-close-icon-size":ee,"--n-close-border-radius":x,"--n-close-size":b,"--n-close-margin":d,"--n-text-color":j,"--n-color":W,"--n-box-shadow":_,"--n-icon-color-info":z,"--n-icon-color-success":L,"--n-icon-color-warning":G,"--n-icon-color-error":M,"--n-icon-color-loading":q,"--n-close-color-hover":se,"--n-close-color-pressed":V,"--n-close-icon-color":ie,"--n-close-icon-color-pressed":Y,"--n-close-icon-color-hover":ae,"--n-line-height":C,"--n-border-radius":P,"--n-border":O}}),l=t?lc("message",me(()=>e.type[0]),o,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:s,messageProviderProps:r,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:o,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:i,cssVars:s,themeClass:a,onRender:o,icon:l,handleClose:c,showIcon:f}=this;o==null||o();let h;return te("div",{class:[`${i}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},s]},e?e(this.$props):te("div",{class:[`${i}-message ${i}-message--${t}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(h=w0(l,t,i))&&f?te("div",{class:`${i}-message__icon ${i}-message__icon--${t}-type`},te(Mc,null,{default:()=>h})):null,te("div",{class:`${i}-message__content`},Oh(r)),n?te(Xg,{clsPrefix:i,class:`${i}-message__close`,onClick:c,absolute:!0}):null))}});function w0(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?te(e0,{clsPrefix:n,strokeWidth:24,scale:.85}):y0[t]();return r?te(Vs,{clsPrefix:n,key:t},{default:()=>r}):null}}const C0=ze({name:"MessageEnvironment",props:Object.assign(Object.assign({},Uc),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=We(!0);Cr(()=>{r()});function r(){const{duration:f}=e;f&&(t=window.setTimeout(a,f))}function i(f){f.currentTarget===f.target&&t!==null&&(window.clearTimeout(t),t=null)}function s(f){f.currentTarget===f.target&&r()}function a(){const{onHide:f}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),f&&f()}function o(){const{onClose:f}=e;f&&f(),a()}function l(){const{onAfterLeave:f,onInternalAfterLeave:h,onAfterHide:m,internalKey:p}=e;f&&f(),h&&h(p),m&&m()}function c(){a()}return{show:n,hide:a,handleClose:o,handleAfterLeave:l,handleMouseleave:s,handleMouseenter:i,deactivate:c}},render(){return te(Lc,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?te(S0,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),x0=Object.assign(Object.assign({},Er.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),A0=ze({name:"MessageProvider",props:x0,setup(e){const{mergedClsPrefixRef:t}=bi(e),n=We([]),r=We({}),i={create(l,c){return s(l,Object.assign({type:"default"},c))},info(l,c){return s(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return s(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return s(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return s(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return s(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:o};Gt($c,{props:e,mergedClsPrefixRef:t}),Gt(m0,i);function s(l,c){const f=oc(),h=br(Object.assign(Object.assign({},c),{content:l,key:f,destroy:()=>{var p;(p=r.value[f])===null||p===void 0||p.hide()}})),{max:m}=e;return m&&n.value.length>=m&&n.value.shift(),n.value.push(h),h}function a(l){n.value.splice(n.value.findIndex(c=>c.key===l),1),delete r.value[l]}function o(){Object.values(r.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:a},i)},render(){var e,t,n;return te(Le,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?te(nf,{to:(n=this.to)!==null&&n!==void 0?n:"body"},te("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(r=>te(C0,Object.assign({ref:i=>{i&&(this.messageRefs[r.key]=i)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},Th(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),E0={__name:"App",setup(e){const t={common:{fontFamily:"Microsoft JhengHei"}};return(n,r)=>{const i=mf("router-view");return ct(),dr(dt(p0),{"theme-overrides":t,abstract:""},{default:Cn(()=>[Re(dt(A0),{placement:"top-right"},{default:Cn(()=>[Re(i)]),_:1})]),_:1})}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const _n=typeof document<"u";function Hc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function P0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Hc(e.default)}const _e=Object.assign;function $i(e,t){const n={};for(const r in t){const i=t[r];n[r]=gt(i)?i.map(e):e(i)}return n}const sr=()=>{},gt=Array.isArray;function sa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const qc=/#/g,R0=/&/g,I0=/\//g,T0=/=/g,O0=/\?/g,Wc=/\+/g,k0=/%5B/g,N0=/%5D/g,Vc=/%5E/g,D0=/%60/g,Gc=/%7B/g,M0=/%7C/g,Kc=/%7D/g,L0=/%20/g;function Gs(e){return e==null?"":encodeURI(""+e).replace(M0,"|").replace(k0,"[").replace(N0,"]")}function F0(e){return Gs(e).replace(Gc,"{").replace(Kc,"}").replace(Vc,"^")}function ms(e){return Gs(e).replace(Wc,"%2B").replace(L0,"+").replace(qc,"%23").replace(R0,"%26").replace(D0,"`").replace(Gc,"{").replace(Kc,"}").replace(Vc,"^")}function B0(e){return ms(e).replace(T0,"%3D")}function z0(e){return Gs(e).replace(qc,"%23").replace(O0,"%3F")}function j0(e){return z0(e).replace(I0,"%2F")}function gr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const $0=/\/$/,U0=e=>e.replace($0,"");function Ui(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(r=t.slice(0,l),s=t.slice(l,o>0?o:t.length),i=e(s.slice(1))),o>=0&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=V0(r??t,n),{fullPath:r+s+a,path:r,query:i,hash:gr(a)}}function H0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function oa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function q0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&kn(t.matched[r],n.matched[i])&&Zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!W0(e[n],t[n]))return!1;return!0}function W0(e,t){return gt(e)?aa(e,t):gt(t)?aa(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function aa(e,t){return gt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function V0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a).join("/")}const zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let gs=(function(e){return e.pop="pop",e.push="push",e})({}),Hi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function G0(e){if(!e)if(_n){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),U0(e)}const K0=/^[^#]+#/;function Z0(e,t){return e.replace(K0,"#")+t}function Y0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ci=()=>({left:window.scrollX,top:window.scrollY});function X0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Y0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function la(e,t){return(history.state?history.state.position-t:-1)+e}const vs=new Map;function Q0(e,t){vs.set(e,t)}function J0(e){const t=vs.get(e);return vs.delete(e),t}function e1(e){return typeof e=="string"||e&&typeof e=="object"}function Yc(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Xc=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function Nn(e,t){return _e(new Error,{type:e,[Xc]:!0},t)}function Pt(e,t){return e instanceof Error&&Xc in e&&(t==null||!!(e.type&t))}const t1=["params","query","hash"];function n1(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of t1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function r1(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(Wc," "),s=i.indexOf("="),a=gr(s<0?i:i.slice(0,s)),o=s<0?null:gr(i.slice(s+1));if(a in t){let l=t[a];gt(l)||(l=t[a]=[l]),l.push(o)}else t[a]=o}return t}function ca(e){let t="";for(let n in e){const r=e[n];if(n=B0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(gt(r)?r.map(i=>i&&ms(i)):[r&&ms(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function i1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=gt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const s1=Symbol(""),ua=Symbol(""),Ks=Symbol(""),Qc=Symbol(""),bs=Symbol("");function Vn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ht(e,t,n,r,i,s=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=m=>{m===!1?l(Nn(Te.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):e1(m)?l(Nn(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&r.enterCallbacks[i]===a&&typeof m=="function"&&a.push(m),o())},f=s(()=>e.call(r&&r.instances[i],t,n,c));let h=Promise.resolve(f);e.length<3&&(h=h.then(c)),h.catch(m=>l(m))})}function qi(e,t,n,r,i=s=>s()){const s=[];for(const a of e)for(const o in a.components){let l=a.components[o];if(!(t!=="beforeRouteEnter"&&!a.instances[o]))if(Hc(l)){const c=(l.__vccOpts||l)[t];c&&s.push(Ht(c,n,r,a,o,i))}else{let c=l();s.push(()=>c.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=P0(f)?f.default:f;a.mods[o]=f,a.components[o]=h;const m=(h.__vccOpts||h)[t];return m&&Ht(m,n,r,a,o,i)()}))}}return s}function o1(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>kn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>kn(c,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let a1=()=>location.protocol+"//"+location.host;function Jc(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let a=i.includes(e.slice(s))?e.slice(s).length:1,o=i.slice(a);return o[0]!=="/"&&(o="/"+o),oa(o,"")}return oa(n,e)+r+i}function l1(e,t,n,r){let i=[],s=[],a=null;const o=({state:m})=>{const p=Jc(e,location),g=n.value,d=t.value;let b=0;if(m){if(n.value=p,t.value=m,a&&a===g){a=null;return}b=d?m.position-d.position:0}else r(p);i.forEach(v=>{v(n.value,g,{delta:b,type:gs.pop,direction:b?b>0?Hi.forward:Hi.back:Hi.unknown})})};function l(){a=n.value}function c(m){i.push(m);const p=()=>{const g=i.indexOf(m);g>-1&&i.splice(g,1)};return s.push(p),p}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(_e({},m.state,{scroll:Ci()}),"")}}function h(){for(const m of s)m();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:c,destroy:h}}function fa(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ci():null}}function c1(e){const{history:t,location:n}=window,r={value:Jc(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,f){const h=e.indexOf("#"),m=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:a1()+e+l;try{t[f?"replaceState":"pushState"](c,"",m),i.value=c}catch(p){console.error(p),n[f?"replace":"assign"](m)}}function a(l,c){s(l,_e({},t.state,fa(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),r.value=l}function o(l,c){const f=_e({},i.value,t.state,{forward:l,scroll:Ci()});s(f.current,f,!0),s(l,_e({},fa(r.value,l,null),{position:f.position+1},c),!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function u1(e){e=G0(e);const t=c1(e),n=l1(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=_e({location:"",base:e,go:r,createHref:Z0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}let an=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Me||{});const f1={type:an.Static,value:""},d1=/[a-zA-Z0-9_]/;function h1(e){if(!e)return[[]];if(e==="/")return[[f1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Me.Static,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",f="";function h(){c&&(n===Me.Static?s.push({type:an.Static,value:c}):n===Me.Param||n===Me.ParamRegExp||n===Me.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:an.Param,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==Me.ParamRegExp){r=n,n=Me.EscapeNext;continue}switch(n){case Me.Static:l==="/"?(c&&h(),a()):l===":"?(h(),n=Me.Param):m();break;case Me.EscapeNext:m(),n=r;break;case Me.Param:l==="("?n=Me.ParamRegExp:d1.test(l)?m():(h(),n=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Me.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Me.ParamRegExpEnd:f+=l;break;case Me.ParamRegExpEnd:h(),n=Me.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,f="";break;default:t("Unknown state");break}}return n===Me.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),h(),a(),i}const da="[^/]+?",p1={sensitive:!1,strict:!1,start:!0,end:!0};var Je=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Je||{});const m1=/[.+*?^${}()[\]/\\]/g;function g1(e,t){const n=_e({},p1,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const f=c.length?[]:[Je.Root];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const m=c[h];let p=Je.Segment+(n.sensitive?Je.BonusCaseSensitive:0);if(m.type===an.Static)h||(i+="/"),i+=m.value.replace(m1,"\\$&"),p+=Je.Static;else if(m.type===an.Param){const{value:g,repeatable:d,optional:b,regexp:v}=m;s.push({name:g,repeatable:d,optional:b});const S=v||da;if(S!==da){p+=Je.BonusCustomRegExp;try{`${S}`}catch(P){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+P.message)}}let C=d?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(C=b&&c.length<2?`(?:/${C})`:"/"+C),b&&(C+="?"),i+=C,p+=Je.Dynamic,b&&(p+=Je.BonusOptional),d&&(p+=Je.BonusRepeatable),S===".*"&&(p+=Je.BonusWildcard)}f.push(p)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=Je.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const f=c.match(a),h={};if(!f)return null;for(let m=1;m<f.length;m++){const p=f[m]||"",g=s[m-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let f="",h=!1;for(const m of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const p of m)if(p.type===an.Static)f+=p.value;else if(p.type===an.Param){const{value:g,repeatable:d,optional:b}=p,v=g in c?c[g]:"";if(gt(v)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=gt(v)?v.join("/"):v;if(!S)if(b)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);f+=S}}return f||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function v1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Je.Static+Je.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Je.Static+Je.Segment?1:-1:0}function eu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=v1(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(ha(r))return 1;if(ha(i))return-1}return i.length-r.length}function ha(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const b1={strict:!1,end:!0,sensitive:!1};function _1(e,t,n){const r=g1(h1(e.path),n),i=_e(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function y1(e,t){const n=[],r=new Map;t=sa(b1,t);function i(h){return r.get(h)}function s(h,m,p){const g=!p,d=ma(h);d.aliasOf=p&&p.record;const b=sa(t,h),v=[d];if("alias"in h){const P=typeof h.alias=="string"?[h.alias]:h.alias;for(const O of P)v.push(ma(_e({},d,{components:p?p.record.components:d.components,path:O,aliasOf:p?p.record:d})))}let S,C;for(const P of v){const{path:O}=P;if(m&&O[0]!=="/"){const z=m.record.path,L=z[z.length-1]==="/"?"":"/";P.path=m.record.path+(O&&L+O)}if(S=_1(P,m,b),p?p.alias.push(S):(C=C||S,C!==S&&C.alias.push(S),g&&h.name&&!ga(S)&&a(h.name)),tu(S)&&l(S),d.children){const z=d.children;for(let L=0;L<z.length;L++)s(z[L],S,p&&p.children[L])}p=p||S}return C?()=>{a(C)}:sr}function a(h){if(Yc(h)){const m=r.get(h);m&&(r.delete(h),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(h);m>-1&&(n.splice(m,1),h.record.name&&r.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return n}function l(h){const m=C1(h,n);n.splice(m,0,h),h.record.name&&!ga(h)&&r.set(h.record.name,h)}function c(h,m){let p,g={},d,b;if("name"in h&&h.name){if(p=r.get(h.name),!p)throw Nn(Te.MATCHER_NOT_FOUND,{location:h});b=p.record.name,g=_e(pa(m.params,p.keys.filter(C=>!C.optional).concat(p.parent?p.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),h.params&&pa(h.params,p.keys.map(C=>C.name))),d=p.stringify(g)}else if(h.path!=null)d=h.path,p=n.find(C=>C.re.test(d)),p&&(g=p.parse(d),b=p.record.name);else{if(p=m.name?r.get(m.name):n.find(C=>C.re.test(m.path)),!p)throw Nn(Te.MATCHER_NOT_FOUND,{location:h,currentLocation:m});b=p.record.name,g=_e({},m.params,h.params),d=p.stringify(g)}const v=[];let S=p;for(;S;)v.unshift(S.record),S=S.parent;return{name:b,path:d,params:g,matched:v,meta:w1(v)}}e.forEach(h=>s(h));function f(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:f,getRoutes:o,getRecordMatcher:i}}function pa(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ma(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:S1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function S1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ga(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function w1(e){return e.reduce((t,n)=>_e(t,n.meta),{})}function C1(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;eu(e,t[s])<0?r=s:n=s+1}const i=x1(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function x1(e){let t=e;for(;t=t.parent;)if(tu(t)&&eu(e,t)===0)return t}function tu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function va(e){const t=Be(Ks),n=Be(Qc),r=me(()=>{const l=dt(e.to);return t.resolve(l)}),i=me(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const m=h.findIndex(kn.bind(null,f));if(m>-1)return m;const p=ba(l[c-2]);return c>1&&ba(f)===p&&h[h.length-1].path!==p?h.findIndex(kn.bind(null,l[c-2])):m}),s=me(()=>i.value>-1&&I1(n.params,r.value.params)),a=me(()=>i.value>-1&&i.value===n.matched.length-1&&Zc(n.params,r.value.params));function o(l={}){if(R1(l)){const c=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(sr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}function A1(e){return e.length===1?e[0]:e}const E1=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:va,setup(e,{slots:t}){const n=br(va(e)),{options:r}=Be(Ks),i=me(()=>({[_a(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_a(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&A1(t.default(n));return e.custom?s:te("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),P1=E1;function R1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function I1(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!gt(i)||i.length!==r.length||r.some((s,a)=>s.valueOf()!==i[a].valueOf()))return!1}return!0}function ba(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _a=(e,t,n)=>e??t??n,T1=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Be(bs),i=me(()=>e.route||r.value),s=Be(ua,0),a=me(()=>{let c=dt(s);const{matched:f}=i.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),o=me(()=>i.value.matched[a.value]);Gt(ua,me(()=>a.value+1)),Gt(s1,o),Gt(bs,i);const l=We();return un(()=>[l.value,o.value,e.name],([c,f,h],[m,p,g])=>{f&&(f.instances[h]=c,p&&p!==f&&c&&c===m&&(f.leaveGuards.size||(f.leaveGuards=p.leaveGuards),f.updateGuards.size||(f.updateGuards=p.updateGuards))),c&&f&&(!p||!kn(f,p)||!m)&&(f.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=i.value,f=e.name,h=o.value,m=h&&h.components[f];if(!m)return ya(n.default,{Component:m,route:c});const p=h.props[f],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=te(m,_e({},g,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return ya(n.default,{Component:b,route:c})||b}}});function ya(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const O1=T1;function k1(e){const t=y1(e.routes,e),n=e.parseQuery||r1,r=e.stringifyQuery||ca,i=e.history,s=Vn(),a=Vn(),o=Vn(),l=Ka(zt);let c=zt;_n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=$i.bind(null,H=>""+H),h=$i.bind(null,j0),m=$i.bind(null,gr);function p(H,X){let Z,re;return Yc(H)?(Z=t.getRecordMatcher(H),re=X):re=H,t.addRoute(re,Z)}function g(H){const X=t.getRecordMatcher(H);X&&t.removeRoute(X)}function d(){return t.getRoutes().map(H=>H.record)}function b(H){return!!t.getRecordMatcher(H)}function v(H,X){if(X=_e({},X||l.value),typeof H=="string"){const u=Ui(n,H,X.path),T=t.resolve({path:u.path},X),R=i.createHref(u.fullPath);return _e(u,T,{params:m(T.params),hash:gr(u.hash),redirectedFrom:void 0,href:R})}let Z;if(H.path!=null)Z=_e({},H,{path:Ui(n,H.path,X.path).path});else{const u=_e({},H.params);for(const T in u)u[T]==null&&delete u[T];Z=_e({},H,{params:h(u)}),X.params=h(X.params)}const re=t.resolve(Z,X),ce=H.hash||"";re.params=f(m(re.params));const A=H0(r,_e({},H,{hash:F0(ce),path:re.path})),I=i.createHref(A);return _e({fullPath:A,hash:ce,query:r===ca?i1(H.query):H.query||{}},re,{redirectedFrom:void 0,href:I})}function S(H){return typeof H=="string"?Ui(n,H,l.value.path):_e({},H)}function C(H,X){if(c!==H)return Nn(Te.NAVIGATION_CANCELLED,{from:X,to:H})}function P(H){return L(H)}function O(H){return P(_e(S(H),{replace:!0}))}function z(H,X){const Z=H.matched[H.matched.length-1];if(Z&&Z.redirect){const{redirect:re}=Z;let ce=typeof re=="function"?re(H,X):re;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=S(ce):{path:ce},ce.params={}),_e({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function L(H,X){const Z=c=v(H),re=l.value,ce=H.state,A=H.force,I=H.replace===!0,u=z(Z,re);if(u)return L(_e(S(u),{state:typeof u=="object"?_e({},ce,u.state):ce,force:A,replace:I}),X||Z);const T=Z;T.redirectedFrom=X;let R;return!A&&q0(r,re,Z)&&(R=Nn(Te.NAVIGATION_DUPLICATED,{to:T,from:re}),$(re,re,!0,!1)),(R?Promise.resolve(R):q(T,re)).catch(y=>Pt(y)?Pt(y,Te.NAVIGATION_GUARD_REDIRECT)?y:ae(y):ie(y,T,re)).then(y=>{if(y){if(Pt(y,Te.NAVIGATION_GUARD_REDIRECT))return L(_e({replace:I},S(y.to),{state:typeof y.to=="object"?_e({},ce,y.to.state):ce,force:A}),X||T)}else y=x(T,re,!0,I,ce);return ee(T,re,y),y})}function G(H,X){const Z=C(H,X);return Z?Promise.reject(Z):Promise.resolve()}function M(H){const X=ne.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(H):H()}function q(H,X){let Z;const[re,ce,A]=o1(H,X);Z=qi(re.reverse(),"beforeRouteLeave",H,X);for(const u of re)u.leaveGuards.forEach(T=>{Z.push(Ht(T,H,X))});const I=G.bind(null,H,X);return Z.push(I),ge(Z).then(()=>{Z=[];for(const u of s.list())Z.push(Ht(u,H,X));return Z.push(I),ge(Z)}).then(()=>{Z=qi(ce,"beforeRouteUpdate",H,X);for(const u of ce)u.updateGuards.forEach(T=>{Z.push(Ht(T,H,X))});return Z.push(I),ge(Z)}).then(()=>{Z=[];for(const u of A)if(u.beforeEnter)if(gt(u.beforeEnter))for(const T of u.beforeEnter)Z.push(Ht(T,H,X));else Z.push(Ht(u.beforeEnter,H,X));return Z.push(I),ge(Z)}).then(()=>(H.matched.forEach(u=>u.enterCallbacks={}),Z=qi(A,"beforeRouteEnter",H,X,M),Z.push(I),ge(Z))).then(()=>{Z=[];for(const u of a.list())Z.push(Ht(u,H,X));return Z.push(I),ge(Z)}).catch(u=>Pt(u,Te.NAVIGATION_CANCELLED)?u:Promise.reject(u))}function ee(H,X,Z){o.list().forEach(re=>M(()=>re(H,X,Z)))}function x(H,X,Z,re,ce){const A=C(H,X);if(A)return A;const I=X===zt,u=_n?history.state:{};Z&&(re||I?i.replace(H.fullPath,_e({scroll:I&&u&&u.scroll},ce)):i.push(H.fullPath,ce)),l.value=H,$(H,X,Z,I),ae()}let j;function _(){j||(j=i.listen((H,X,Z)=>{if(!J.listening)return;const re=v(H),ce=z(re,J.currentRoute.value);if(ce){L(_e(ce,{replace:!0,force:!0}),re).catch(sr);return}c=re;const A=l.value;_n&&Q0(la(A.fullPath,Z.delta),Ci()),q(re,A).catch(I=>Pt(I,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?I:Pt(I,Te.NAVIGATION_GUARD_REDIRECT)?(L(_e(S(I.to),{force:!0}),re).then(u=>{Pt(u,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===gs.pop&&i.go(-1,!1)}).catch(sr),Promise.reject()):(Z.delta&&i.go(-Z.delta,!1),ie(I,re,A))).then(I=>{I=I||x(re,A,!1),I&&(Z.delta&&!Pt(I,Te.NAVIGATION_CANCELLED)?i.go(-Z.delta,!1):Z.type===gs.pop&&Pt(I,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ee(re,A,I)}).catch(sr)}))}let W=Vn(),se=Vn(),V;function ie(H,X,Z){ae(H);const re=se.list();return re.length?re.forEach(ce=>ce(H,X,Z)):console.error(H),Promise.reject(H)}function Y(){return V&&l.value!==zt?Promise.resolve():new Promise((H,X)=>{W.add([H,X])})}function ae(H){return V||(V=!H,_(),W.list().forEach(([X,Z])=>H?Z(H):X()),W.reset()),H}function $(H,X,Z,re){const{scrollBehavior:ce}=e;if(!_n||!ce)return Promise.resolve();const A=!Z&&J0(la(H.fullPath,0))||(re||!Z)&&history.state&&history.state.scroll||null;return Qa().then(()=>ce(H,X,A)).then(I=>I&&X0(I)).catch(I=>ie(I,H,X))}const F=H=>i.go(H);let le;const ne=new Set,J={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:d,resolve:v,options:e,push:P,replace:O,go:F,back:()=>F(-1),forward:()=>F(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:se.add,isReady:Y,install(H){H.component("RouterLink",P1),H.component("RouterView",O1),H.config.globalProperties.$router=J,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),_n&&!le&&l.value===zt&&(le=!0,P(i.location).catch(re=>{}));const X={};for(const re in zt)Object.defineProperty(X,re,{get:()=>l.value[re],enumerable:!0});H.provide(Ks,J),H.provide(Qc,Ga(X)),H.provide(bs,l);const Z=H.unmount;ne.add(H),H.unmount=function(){ne.delete(H),ne.size<1&&(c=zt,j&&j(),j=null,l.value=zt,le=!1,V=!1),Z()}}};function ge(H){return H.reduce((X,Z)=>X.then(()=>M(Z)),Promise.resolve())}return J}const N1="modulepreload",D1=function(e){return"/frontend-development-guide/"+e},Sa={},it=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(n.map(c=>{if(c=D1(c),c in Sa)return;Sa[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":N1,f||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((p,g)=>{m.addEventListener("load",p),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function M1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Br(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Wi={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var wa;function L1(){return wa||(wa=1,(function(e,t){(function(n){e.exports=n()})(function(){return(function n(r,i,s){function a(c,f){if(!i[c]){if(!r[c]){var h=typeof Br=="function"&&Br;if(!f&&h)return h(c,!0);if(o)return o(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var p=i[c]={exports:{}};r[c][0].call(p.exports,function(g){var d=r[c][1][g];return a(d||g)},p,p.exports,n,r,i,s)}return i[c].exports}for(var o=typeof Br=="function"&&Br,l=0;l<s.length;l++)a(s[l]);return a})({1:[function(n,r,i){var s=n("./utils"),a=n("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,f,h,m,p,g,d,b=[],v=0,S=l.length,C=S,P=s.getTypeOf(l)!=="string";v<l.length;)C=S-v,h=P?(c=l[v++],f=v<S?l[v++]:0,v<S?l[v++]:0):(c=l.charCodeAt(v++),f=v<S?l.charCodeAt(v++):0,v<S?l.charCodeAt(v++):0),m=c>>2,p=(3&c)<<4|f>>4,g=1<C?(15&f)<<2|h>>6:64,d=2<C?63&h:64,b.push(o.charAt(m)+o.charAt(p)+o.charAt(g)+o.charAt(d));return b.join("")},i.decode=function(l){var c,f,h,m,p,g,d=0,b=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var S,C=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===o.charAt(64)&&C--,l.charAt(l.length-2)===o.charAt(64)&&C--,C%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=a.uint8array?new Uint8Array(0|C):new Array(0|C);d<l.length;)c=o.indexOf(l.charAt(d++))<<2|(m=o.indexOf(l.charAt(d++)))>>4,f=(15&m)<<4|(p=o.indexOf(l.charAt(d++)))>>2,h=(3&p)<<6|(g=o.indexOf(l.charAt(d++))),S[b++]=c,p!==64&&(S[b++]=f),g!==64&&(S[b++]=h);return S}},{"./support":30,"./utils":32}],2:[function(n,r,i){var s=n("./external"),a=n("./stream/DataWorker"),o=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function c(f,h,m,p,g){this.compressedSize=f,this.uncompressedSize=h,this.crc32=m,this.compression=p,this.compressedContent=g}c.prototype={getContentWorker:function(){var f=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),h=this;return f.on("end",function(){if(this.streamInfo.data_length!==h.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),f},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(f,h,m){return f.pipe(new o).pipe(new l("uncompressedSize")).pipe(h.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",h)},r.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var s=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var s=n("./utils"),a=(function(){for(var o,l=[],c=0;c<256;c++){o=c;for(var f=0;f<8;f++)o=1&o?3988292384^o>>>1:o>>>1;l[c]=o}return l})();r.exports=function(o,l){return o!==void 0&&o.length?s.getTypeOf(o)!=="string"?(function(c,f,h,m){var p=a,g=m+h;c^=-1;for(var d=m;d<g;d++)c=c>>>8^p[255&(c^f[d])];return-1^c})(0|l,o,o.length,0):(function(c,f,h,m){var p=a,g=m+h;c^=-1;for(var d=m;d<g;d++)c=c>>>8^p[255&(c^f.charCodeAt(d))];return-1^c})(0|l,o,o.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var s=null;s=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:s}},{lie:37}],7:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=n("pako"),o=n("./utils"),l=n("./stream/GenericWorker"),c=s?"uint8array":"array";function f(h,m){l.call(this,"FlateWorker/"+h),this._pako=null,this._pakoAction=h,this._pakoOptions=m,this.meta={}}i.magic="\b\0",o.inherits(f,l),f.prototype.processChunk=function(h){this.meta=h.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(c,h.data),!1)},f.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},f.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},f.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var h=this;this._pako.onData=function(m){h.push({data:m,meta:h.meta})}},i.compressWorker=function(h){return new f("Deflate",h)},i.uncompressWorker=function(){return new f("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function s(p,g){var d,b="";for(d=0;d<g;d++)b+=String.fromCharCode(255&p),p>>>=8;return b}function a(p,g,d,b,v,S){var C,P,O=p.file,z=p.compression,L=S!==c.utf8encode,G=o.transformTo("string",S(O.name)),M=o.transformTo("string",c.utf8encode(O.name)),q=O.comment,ee=o.transformTo("string",S(q)),x=o.transformTo("string",c.utf8encode(q)),j=M.length!==O.name.length,_=x.length!==q.length,W="",se="",V="",ie=O.dir,Y=O.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!d||(ae.crc32=p.crc32,ae.compressedSize=p.compressedSize,ae.uncompressedSize=p.uncompressedSize);var $=0;g&&($|=8),L||!j&&!_||($|=2048);var F=0,le=0;ie&&(F|=16),v==="UNIX"?(le=798,F|=(function(J,ge){var H=J;return J||(H=ge?16893:33204),(65535&H)<<16})(O.unixPermissions,ie)):(le=20,F|=(function(J){return 63&(J||0)})(O.dosPermissions)),C=Y.getUTCHours(),C<<=6,C|=Y.getUTCMinutes(),C<<=5,C|=Y.getUTCSeconds()/2,P=Y.getUTCFullYear()-1980,P<<=4,P|=Y.getUTCMonth()+1,P<<=5,P|=Y.getUTCDate(),j&&(se=s(1,1)+s(f(G),4)+M,W+="up"+s(se.length,2)+se),_&&(V=s(1,1)+s(f(ee),4)+x,W+="uc"+s(V.length,2)+V);var ne="";return ne+=`
\0`,ne+=s($,2),ne+=z.magic,ne+=s(C,2),ne+=s(P,2),ne+=s(ae.crc32,4),ne+=s(ae.compressedSize,4),ne+=s(ae.uncompressedSize,4),ne+=s(G.length,2),ne+=s(W.length,2),{fileRecord:h.LOCAL_FILE_HEADER+ne+G+W,dirRecord:h.CENTRAL_FILE_HEADER+s(le,2)+ne+s(ee.length,2)+"\0\0\0\0"+s(F,4)+s(b,4)+G+W+ee}}var o=n("../utils"),l=n("../stream/GenericWorker"),c=n("../utf8"),f=n("../crc32"),h=n("../signature");function m(p,g,d,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=d,this.encodeFileName=b,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(m,l),m.prototype.push=function(p){var g=p.meta.percent||0,d=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:d?(g+100*(d-b-1))/d:100}}))},m.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var d=a(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:d.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,d=a(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(d.dirRecord),g)this.push({data:(function(b){return h.DATA_DESCRIPTOR+s(b.crc32,4)+s(b.compressedSize,4)+s(b.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:d.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var d=this.bytesWritten-p,b=(function(v,S,C,P,O){var z=o.transformTo("string",O(P));return h.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(v,2)+s(v,2)+s(S,4)+s(C,4)+s(z.length,2)+z})(this.dirRecords.length,d,p,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(d){g.processChunk(d)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(d){g.error(d)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(p){var g=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var d=0;d<g.length;d++)try{g[d].error(p)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},r.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var s=n("../compressions"),a=n("./ZipFileWorker");i.generateWorker=function(o,l,c){var f=new a(l.streamFiles,c,l.platform,l.encodeFileName),h=0;try{o.forEach(function(m,p){h++;var g=(function(S,C){var P=S||C,O=s[P];if(!O)throw new Error(P+" is not a valid compression method !");return O})(p.options.compression,l.compression),d=p.options.compressionOptions||l.compressionOptions||{},b=p.dir,v=p.date;p._compressWorker(g,d).withStreamInfo("file",{name:m,dir:b,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(f)}),f.entriesCount=h}catch(m){f.error(m)}return f}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(s.prototype=n("./object")).loadAsync=n("./load"),s.support=n("./support"),s.defaults=n("./defaults"),s.version="3.10.1",s.loadAsync=function(a,o){return new s().loadAsync(a,o)},s.external=n("./external"),r.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var s=n("./utils"),a=n("./external"),o=n("./utf8"),l=n("./zipEntries"),c=n("./stream/Crc32Probe"),f=n("./nodejsUtils");function h(m){return new a.Promise(function(p,g){var d=m.decompressed.getContentWorker().pipe(new c);d.on("error",function(b){g(b)}).on("end",function(){d.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}r.exports=function(m,p){var g=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),f.isNode&&f.isStream(m)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,p.optimizedBinaryString,p.base64).then(function(d){var b=new l(p);return b.load(d),b}).then(function(d){var b=[a.Promise.resolve(d)],v=d.files;if(p.checkCRC32)for(var S=0;S<v.length;S++)b.push(h(v[S]));return a.Promise.all(b)}).then(function(d){for(var b=d.shift(),v=b.files,S=0;S<v.length;S++){var C=v[S],P=C.fileNameStr,O=s.resolve(C.fileNameStr);g.file(O,C.decompressed,{binary:!0,optimizedBinaryString:!0,date:C.date,dir:C.dir,comment:C.fileCommentStr.length?C.fileCommentStr:null,unixPermissions:C.unixPermissions,dosPermissions:C.dosPermissions,createFolders:p.createFolders}),C.dir||(g.file(O).unsafeOriginalName=P)}return b.zipComment.length&&(g.comment=b.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var s=n("../utils"),a=n("../stream/GenericWorker");function o(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}s.inherits(o,a),o.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(f){c.push({data:f,meta:{percent:0}})}).on("error",function(f){c.isPaused?this.generatedError=f:c.error(f)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var s=n("readable-stream").Readable;function a(o,l,c){s.call(this,l),this._helper=o;var f=this;o.on("data",function(h,m){f.push(h)||f._helper.pause(),c&&c(m)}).on("error",function(h){f.emit("error",h)}).on("end",function(){f.push(null)})}n("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},r.exports=a},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(n,r,i){function s(O,z,L){var G,M=o.getTypeOf(z),q=o.extend(L||{},f);q.date=q.date||new Date,q.compression!==null&&(q.compression=q.compression.toUpperCase()),typeof q.unixPermissions=="string"&&(q.unixPermissions=parseInt(q.unixPermissions,8)),q.unixPermissions&&16384&q.unixPermissions&&(q.dir=!0),q.dosPermissions&&16&q.dosPermissions&&(q.dir=!0),q.dir&&(O=v(O)),q.createFolders&&(G=b(O))&&S.call(this,G,!0);var ee=M==="string"&&q.binary===!1&&q.base64===!1;L&&L.binary!==void 0||(q.binary=!ee),(z instanceof h&&z.uncompressedSize===0||q.dir||!z||z.length===0)&&(q.base64=!1,q.binary=!0,z="",q.compression="STORE",M="string");var x=null;x=z instanceof h||z instanceof l?z:g.isNode&&g.isStream(z)?new d(O,z):o.prepareContent(O,z,q.binary,q.optimizedBinaryString,q.base64);var j=new m(O,x,q);this.files[O]=j}var a=n("./utf8"),o=n("./utils"),l=n("./stream/GenericWorker"),c=n("./stream/StreamHelper"),f=n("./defaults"),h=n("./compressedObject"),m=n("./zipObject"),p=n("./generate"),g=n("./nodejsUtils"),d=n("./nodejs/NodejsStreamInputAdapter"),b=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var z=O.lastIndexOf("/");return 0<z?O.substring(0,z):""},v=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},S=function(O,z){return z=z!==void 0?z:f.createFolders,O=v(O),this.files[O]||s.call(this,O,null,{dir:!0,createFolders:z}),this.files[O]};function C(O){return Object.prototype.toString.call(O)==="[object RegExp]"}var P={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var z,L,G;for(z in this.files)G=this.files[z],(L=z.slice(this.root.length,z.length))&&z.slice(0,this.root.length)===this.root&&O(L,G)},filter:function(O){var z=[];return this.forEach(function(L,G){O(L,G)&&z.push(G)}),z},file:function(O,z,L){if(arguments.length!==1)return O=this.root+O,s.call(this,O,z,L),this;if(C(O)){var G=O;return this.filter(function(q,ee){return!ee.dir&&G.test(q)})}var M=this.files[this.root+O];return M&&!M.dir?M:null},folder:function(O){if(!O)return this;if(C(O))return this.filter(function(M,q){return q.dir&&O.test(M)});var z=this.root+O,L=S.call(this,z),G=this.clone();return G.root=L.name,G},remove:function(O){O=this.root+O;var z=this.files[O];if(z||(O.slice(-1)!=="/"&&(O+="/"),z=this.files[O]),z&&!z.dir)delete this.files[O];else for(var L=this.filter(function(M,q){return q.name.slice(0,O.length)===O}),G=0;G<L.length;G++)delete this.files[L[G].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var z,L={};try{if((L=o.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");o.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var G=L.comment||this.comment||"";z=p.generateWorker(this,L,G)}catch(M){(z=new l("error")).error(M)}return new c(z,L.type||"string",L.mimeType)},generateAsync:function(O,z){return this.generateInternalStream(O).accumulate(z)},generateNodeStream:function(O,z){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream(z)}};r.exports=P},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var s=n("./DataReader");function a(o){s.call(this,o);for(var l=0;l<this.data.length;l++)o[l]=255&o[l]}n("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===f&&this.data[m+3]===h)return m-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var l=o.charCodeAt(0),c=o.charCodeAt(1),f=o.charCodeAt(2),h=o.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&f===m[2]&&h===m[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var s=n("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var l,c=0;for(this.checkOffset(o),l=this.index+o-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=o,c},readString:function(o){return s.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},r.exports=a},{"../utils":32}],19:[function(n,r,i){var s=n("./Uint8ArrayReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var s=n("./DataReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var l=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var s=n("./ArrayReader");function a(o){s.call(this,o)}n("../utils").inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,l},r.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var s=n("../utils"),a=n("../support"),o=n("./ArrayReader"),l=n("./StringReader"),c=n("./NodeBufferReader"),f=n("./Uint8ArrayReader");r.exports=function(h){var m=s.getTypeOf(h);return s.checkSupport(m),m!=="string"||a.uint8array?m==="nodebuffer"?new c(h):a.uint8array?new f(s.transformTo("uint8array",h)):new o(s.transformTo("array",h)):new l(h)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var s=n("./GenericWorker"),a=n("../utils");function o(l){s.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(o,s),o.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},r.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var s=n("./GenericWorker"),a=n("../crc32");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(o,s),o.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var s=n("../utils"),a=n("./GenericWorker");function o(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(o,a),o.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},r.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var s=n("../utils"),a=n("./GenericWorker");function o(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(f){c.dataIsReady=!0,c.data=f,c.max=f&&f.length||0,c.type=s.getTypeOf(f),c.isPaused||c._tickAndRepeat()},function(f){c.error(f)})}s.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(l){o.processChunk(l)}),a.on("end",function(){o.end()}),a.on("error",function(l){o.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},r.exports=s},{}],29:[function(n,r,i){var s=n("../utils"),a=n("./ConvertWorker"),o=n("./GenericWorker"),l=n("../base64"),c=n("../support"),f=n("../external"),h=null;if(c.nodestream)try{h=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,d){return new f.Promise(function(b,v){var S=[],C=g._internalType,P=g._outputType,O=g._mimeType;g.on("data",function(z,L){S.push(z),d&&d(L)}).on("error",function(z){S=[],v(z)}).on("end",function(){try{var z=(function(L,G,M){switch(L){case"blob":return s.newBlob(s.transformTo("arraybuffer",G),M);case"base64":return l.encode(G);default:return s.transformTo(L,G)}})(P,(function(L,G){var M,q=0,ee=null,x=0;for(M=0;M<G.length;M++)x+=G[M].length;switch(L){case"string":return G.join("");case"array":return Array.prototype.concat.apply([],G);case"uint8array":for(ee=new Uint8Array(x),M=0;M<G.length;M++)ee.set(G[M],q),q+=G[M].length;return ee;case"nodebuffer":return Buffer.concat(G);default:throw new Error("concat : unsupported type '"+L+"'")}})(C,S),O);b(z)}catch(L){v(L)}S=[]}).resume()})}function p(g,d,b){var v=d;switch(d){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=d,this._mimeType=b,s.checkSupport(v),this._worker=g.pipe(new a(v)),g.lock()}catch(S){this._worker=new o("error"),this._worker.error(S)}}p.prototype={accumulate:function(g){return m(this,g)},on:function(g,d){var b=this;return g==="data"?this._worker.on(g,function(v){d.call(b,v.data,v.meta)}):this._worker.on(g,function(){s.delay(d,arguments,b)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new h(this,{objectMode:this._outputType!=="nodebuffer"},g)}},r.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var s=new ArrayBuffer(0);try{i.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var s=n("./utils"),a=n("./support"),o=n("./nodejsUtils"),l=n("./stream/GenericWorker"),c=new Array(256),f=0;f<256;f++)c[f]=252<=f?6:248<=f?5:240<=f?4:224<=f?3:192<=f?2:1;c[254]=c[254]=1;function h(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return a.nodebuffer?o.newBufferFrom(p,"utf-8"):(function(g){var d,b,v,S,C,P=g.length,O=0;for(S=0;S<P;S++)(64512&(b=g.charCodeAt(S)))==55296&&S+1<P&&(64512&(v=g.charCodeAt(S+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),S++),O+=b<128?1:b<2048?2:b<65536?3:4;for(d=a.uint8array?new Uint8Array(O):new Array(O),S=C=0;C<O;S++)(64512&(b=g.charCodeAt(S)))==55296&&S+1<P&&(64512&(v=g.charCodeAt(S+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),S++),b<128?d[C++]=b:(b<2048?d[C++]=192|b>>>6:(b<65536?d[C++]=224|b>>>12:(d[C++]=240|b>>>18,d[C++]=128|b>>>12&63),d[C++]=128|b>>>6&63),d[C++]=128|63&b);return d})(p)},i.utf8decode=function(p){return a.nodebuffer?s.transformTo("nodebuffer",p).toString("utf-8"):(function(g){var d,b,v,S,C=g.length,P=new Array(2*C);for(d=b=0;d<C;)if((v=g[d++])<128)P[b++]=v;else if(4<(S=c[v]))P[b++]=65533,d+=S-1;else{for(v&=S===2?31:S===3?15:7;1<S&&d<C;)v=v<<6|63&g[d++],S--;1<S?P[b++]=65533:v<65536?P[b++]=v:(v-=65536,P[b++]=55296|v>>10&1023,P[b++]=56320|1023&v)}return P.length!==b&&(P.subarray?P=P.subarray(0,b):P.length=b),s.applyFromCharCode(P)})(p=s.transformTo(a.uint8array?"uint8array":"array",p))},s.inherits(h,l),h.prototype.processChunk=function(p){var g=s.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var d=g;(g=new Uint8Array(d.length+this.leftOver.length)).set(this.leftOver,0),g.set(d,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var b=(function(S,C){var P;for((C=C||S.length)>S.length&&(C=S.length),P=C-1;0<=P&&(192&S[P])==128;)P--;return P<0||P===0?C:P+c[S[P]]>C?P:C})(g),v=g;b!==g.length&&(a.uint8array?(v=g.subarray(0,b),this.leftOver=g.subarray(b,g.length)):(v=g.slice(0,b),this.leftOver=g.slice(b,g.length))),this.push({data:i.utf8decode(v),meta:p.meta})},h.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=h,s.inherits(m,l),m.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var s=n("./support"),a=n("./base64"),o=n("./nodejsUtils"),l=n("./external");function c(d){return d}function f(d,b){for(var v=0;v<d.length;++v)b[v]=255&d.charCodeAt(v);return b}n("setimmediate"),i.newBlob=function(d,b){i.checkSupport("blob");try{return new Blob([d],{type:b})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(d),v.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var h={stringifyByChunk:function(d,b,v){var S=[],C=0,P=d.length;if(P<=v)return String.fromCharCode.apply(null,d);for(;C<P;)b==="array"||b==="nodebuffer"?S.push(String.fromCharCode.apply(null,d.slice(C,Math.min(C+v,P)))):S.push(String.fromCharCode.apply(null,d.subarray(C,Math.min(C+v,P)))),C+=v;return S.join("")},stringifyByChar:function(d){for(var b="",v=0;v<d.length;v++)b+=String.fromCharCode(d[v]);return b},applyCanBeUsed:{uint8array:(function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}})()}};function m(d){var b=65536,v=i.getTypeOf(d),S=!0;if(v==="uint8array"?S=h.applyCanBeUsed.uint8array:v==="nodebuffer"&&(S=h.applyCanBeUsed.nodebuffer),S)for(;1<b;)try{return h.stringifyByChunk(d,v,b)}catch{b=Math.floor(b/2)}return h.stringifyByChar(d)}function p(d,b){for(var v=0;v<d.length;v++)b[v]=d[v];return b}i.applyFromCharCode=m;var g={};g.string={string:c,array:function(d){return f(d,new Array(d.length))},arraybuffer:function(d){return g.string.uint8array(d).buffer},uint8array:function(d){return f(d,new Uint8Array(d.length))},nodebuffer:function(d){return f(d,o.allocBuffer(d.length))}},g.array={string:m,array:c,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(d)}},g.arraybuffer={string:function(d){return m(new Uint8Array(d))},array:function(d){return p(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:c,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return o.newBufferFrom(new Uint8Array(d))}},g.uint8array={string:m,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:c,nodebuffer:function(d){return o.newBufferFrom(d)}},g.nodebuffer={string:m,array:function(d){return p(d,new Array(d.length))},arraybuffer:function(d){return g.nodebuffer.uint8array(d).buffer},uint8array:function(d){return p(d,new Uint8Array(d.length))},nodebuffer:c},i.transformTo=function(d,b){if(b=b||"",!d)return b;i.checkSupport(d);var v=i.getTypeOf(b);return g[v][d](b)},i.resolve=function(d){for(var b=d.split("/"),v=[],S=0;S<b.length;S++){var C=b[S];C==="."||C===""&&S!==0&&S!==b.length-1||(C===".."?v.pop():v.push(C))}return v.join("/")},i.getTypeOf=function(d){return typeof d=="string"?"string":Object.prototype.toString.call(d)==="[object Array]"?"array":s.nodebuffer&&o.isBuffer(d)?"nodebuffer":s.uint8array&&d instanceof Uint8Array?"uint8array":s.arraybuffer&&d instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(d){if(!s[d.toLowerCase()])throw new Error(d+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(d){var b,v,S="";for(v=0;v<(d||"").length;v++)S+="\\x"+((b=d.charCodeAt(v))<16?"0":"")+b.toString(16).toUpperCase();return S},i.delay=function(d,b,v){setImmediate(function(){d.apply(v||null,b||[])})},i.inherits=function(d,b){function v(){}v.prototype=b.prototype,d.prototype=new v},i.extend=function(){var d,b,v={};for(d=0;d<arguments.length;d++)for(b in arguments[d])Object.prototype.hasOwnProperty.call(arguments[d],b)&&v[b]===void 0&&(v[b]=arguments[d][b]);return v},i.prepareContent=function(d,b,v,S,C){return l.Promise.resolve(b).then(function(P){return s.blob&&(P instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(P))!==-1)&&typeof FileReader<"u"?new l.Promise(function(O,z){var L=new FileReader;L.onload=function(G){O(G.target.result)},L.onerror=function(G){z(G.target.error)},L.readAsArrayBuffer(P)}):P}).then(function(P){var O=i.getTypeOf(P);return O?(O==="arraybuffer"?P=i.transformTo("uint8array",P):O==="string"&&(C?P=a.decode(P):v&&S!==!0&&(P=(function(z){return f(z,s.uint8array?new Uint8Array(z.length):new Array(z.length))})(P))),P):l.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var s=n("./reader/readerFor"),a=n("./utils"),o=n("./signature"),l=n("./zipEntry"),c=n("./support");function f(h){this.files=[],this.loadOptions=h}f.prototype={checkSignature:function(h){if(!this.reader.readAndCheckSignature(h)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(m)+", expected "+a.pretty(h)+")")}},isSignature:function(h,m){var p=this.reader.index;this.reader.setIndex(h);var g=this.reader.readString(4)===m;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var h=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",p=a.transformTo(m,h);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var h,m,p,g=this.zip64EndOfCentralSize-44;0<g;)h=this.reader.readInt(2),m=this.reader.readInt(4),p=this.reader.readData(m),this.zip64ExtensibleData[h]={id:h,length:m,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var h,m;for(h=0;h<this.files.length;h++)m=this.files[h],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var h;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(h=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(h);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var h=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(h<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(h);var m=h;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(h=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(h),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=m-p;if(0<g)this.isSignature(m,o.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(h){this.reader=s(h)},load:function(h){this.prepareReader(h),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=f},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var s=n("./reader/readerFor"),a=n("./utils"),o=n("./compressedObject"),l=n("./crc32"),c=n("./utf8"),f=n("./compressions"),h=n("./support");function m(p,g){this.options=p,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,d;if(p.skip(22),this.fileNameLength=p.readInt(2),d=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(d),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(b){for(var v in f)if(Object.prototype.hasOwnProperty.call(f,v)&&f[v].magic===b)return f[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,d,b,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)g=p.readInt(2),d=p.readInt(2),b=p.readData(d),this.extraFields[g]={id:g,length:d,value:b};p.setIndex(v)},handleUTF8:function(){var p=h.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var d=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(d)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var v=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=s(p.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=s(p.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null}},r.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function s(g,d,b){this.name=g,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=d,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var a=n("./stream/StreamHelper"),o=n("./stream/DataWorker"),l=n("./utf8"),c=n("./compressedObject"),f=n("./stream/GenericWorker");s.prototype={internalStream:function(g){var d=null,b="string";try{if(!g)throw new Error("No output type specified.");var v=(b=g.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),d=this._decompressWorker();var S=!this._dataBinary;S&&!v&&(d=d.pipe(new l.Utf8EncodeWorker)),!S&&v&&(d=d.pipe(new l.Utf8DecodeWorker))}catch(C){(d=new f("error")).error(C)}return new a(d,b,"")},async:function(g,d){return this.internalStream(g).accumulate(d)},nodeStream:function(g,d){return this.internalStream(g||"nodebuffer").toNodejsStream(d)},_compressWorker:function(g,d){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(b,g,d)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof f?this._data:new o(this._data)}};for(var h=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<h.length;p++)s.prototype[h[p]]=m;r.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(s){var a,o,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var c=0,f=new l(g),h=s.document.createTextNode("");f.observe(h,{characterData:!0}),a=function(){h.data=c=++c%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var d=s.document.createElement("script");d.onreadystatechange=function(){g(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},s.document.documentElement.appendChild(d)}:function(){setTimeout(g,0)};else{var m=new s.MessageChannel;m.port1.onmessage=g,a=function(){m.port2.postMessage(0)}}var p=[];function g(){var d,b;o=!0;for(var v=p.length;v;){for(b=p,p=[],d=-1;++d<v;)b[d]();v=p.length}o=!1}r.exports=function(d){p.push(d)!==1||o||a()}}).call(this,typeof Wt<"u"?Wt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var s=n("immediate");function a(){}var o={},l=["REJECTED"],c=["FULFILLED"],f=["PENDING"];function h(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=f,this.queue=[],this.outcome=void 0,v!==a&&d(this,v)}function m(v,S,C){this.promise=v,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof C=="function"&&(this.onRejected=C,this.callRejected=this.otherCallRejected)}function p(v,S,C){s(function(){var P;try{P=S(C)}catch(O){return o.reject(v,O)}P===v?o.reject(v,new TypeError("Cannot resolve promise with itself")):o.resolve(v,P)})}function g(v){var S=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof S=="function")return function(){S.apply(v,arguments)}}function d(v,S){var C=!1;function P(L){C||(C=!0,o.reject(v,L))}function O(L){C||(C=!0,o.resolve(v,L))}var z=b(function(){S(O,P)});z.status==="error"&&P(z.value)}function b(v,S){var C={};try{C.value=v(S),C.status="success"}catch(P){C.status="error",C.value=P}return C}(r.exports=h).prototype.finally=function(v){if(typeof v!="function")return this;var S=this.constructor;return this.then(function(C){return S.resolve(v()).then(function(){return C})},function(C){return S.resolve(v()).then(function(){throw C})})},h.prototype.catch=function(v){return this.then(null,v)},h.prototype.then=function(v,S){if(typeof v!="function"&&this.state===c||typeof S!="function"&&this.state===l)return this;var C=new this.constructor(a);return this.state!==f?p(C,this.state===c?v:S,this.outcome):this.queue.push(new m(C,v,S)),C},m.prototype.callFulfilled=function(v){o.resolve(this.promise,v)},m.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},m.prototype.callRejected=function(v){o.reject(this.promise,v)},m.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},o.resolve=function(v,S){var C=b(g,S);if(C.status==="error")return o.reject(v,C.value);var P=C.value;if(P)d(v,P);else{v.state=c,v.outcome=S;for(var O=-1,z=v.queue.length;++O<z;)v.queue[O].callFulfilled(S)}return v},o.reject=function(v,S){v.state=l,v.outcome=S;for(var C=-1,P=v.queue.length;++C<P;)v.queue[C].callRejected(S);return v},h.resolve=function(v){return v instanceof this?v:o.resolve(new this(a),v)},h.reject=function(v){var S=new this(a);return o.reject(S,v)},h.all=function(v){var S=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=v.length,P=!1;if(!C)return this.resolve([]);for(var O=new Array(C),z=0,L=-1,G=new this(a);++L<C;)M(v[L],L);return G;function M(q,ee){S.resolve(q).then(function(x){O[ee]=x,++z!==C||P||(P=!0,o.resolve(G,O))},function(x){P||(P=!0,o.reject(G,x))})}},h.race=function(v){var S=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var C=v.length,P=!1;if(!C)return this.resolve([]);for(var O=-1,z=new this(a);++O<C;)L=v[O],S.resolve(L).then(function(G){P||(P=!0,o.resolve(z,G))},function(G){P||(P=!0,o.reject(z,G))});var L;return z}},{immediate:36}],38:[function(n,r,i){var s={};(0,n("./lib/utils/common").assign)(s,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var s=n("./zlib/deflate"),a=n("./utils/common"),o=n("./utils/strings"),l=n("./zlib/messages"),c=n("./zlib/zstream"),f=Object.prototype.toString,h=0,m=-1,p=0,g=8;function d(v){if(!(this instanceof d))return new d(v);this.options=a.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var C=s.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(C!==h)throw new Error(l[C]);if(S.header&&s.deflateSetHeader(this.strm,S.header),S.dictionary){var P;if(P=typeof S.dictionary=="string"?o.string2buf(S.dictionary):f.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(C=s.deflateSetDictionary(this.strm,P))!==h)throw new Error(l[C]);this._dict_set=!0}}function b(v,S){var C=new d(S);if(C.push(v,!0),C.err)throw C.msg||l[C.err];return C.result}d.prototype.push=function(v,S){var C,P,O=this.strm,z=this.options.chunkSize;if(this.ended)return!1;P=S===~~S?S:S===!0?4:0,typeof v=="string"?O.input=o.string2buf(v):f.call(v)==="[object ArrayBuffer]"?O.input=new Uint8Array(v):O.input=v,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new a.Buf8(z),O.next_out=0,O.avail_out=z),(C=s.deflate(O,P))!==1&&C!==h)return this.onEnd(C),!(this.ended=!0);O.avail_out!==0&&(O.avail_in!==0||P!==4&&P!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(O.output,O.next_out))):this.onData(a.shrinkBuf(O.output,O.next_out)))}while((0<O.avail_in||O.avail_out===0)&&C!==1);return P===4?(C=s.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===h):P!==2||(this.onEnd(h),!(O.avail_out=0))},d.prototype.onData=function(v){this.chunks.push(v)},d.prototype.onEnd=function(v){v===h&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Deflate=d,i.deflate=b,i.deflateRaw=function(v,S){return(S=S||{}).raw=!0,b(v,S)},i.gzip=function(v,S){return(S=S||{}).gzip=!0,b(v,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var s=n("./zlib/inflate"),a=n("./utils/common"),o=n("./utils/strings"),l=n("./zlib/constants"),c=n("./zlib/messages"),f=n("./zlib/zstream"),h=n("./zlib/gzheader"),m=Object.prototype.toString;function p(d){if(!(this instanceof p))return new p(d);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},d||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||d&&d.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var v=s.inflateInit2(this.strm,b.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new h,s.inflateGetHeader(this.strm,this.header)}function g(d,b){var v=new p(b);if(v.push(d,!0),v.err)throw v.msg||c[v.err];return v.result}p.prototype.push=function(d,b){var v,S,C,P,O,z,L=this.strm,G=this.options.chunkSize,M=this.options.dictionary,q=!1;if(this.ended)return!1;S=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof d=="string"?L.input=o.binstring2buf(d):m.call(d)==="[object ArrayBuffer]"?L.input=new Uint8Array(d):L.input=d,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(G),L.next_out=0,L.avail_out=G),(v=s.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&M&&(z=typeof M=="string"?o.string2buf(M):m.call(M)==="[object ArrayBuffer]"?new Uint8Array(M):M,v=s.inflateSetDictionary(this.strm,z)),v===l.Z_BUF_ERROR&&q===!0&&(v=l.Z_OK,q=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&v!==l.Z_STREAM_END&&(L.avail_in!==0||S!==l.Z_FINISH&&S!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(C=o.utf8border(L.output,L.next_out),P=L.next_out-C,O=o.buf2string(L.output,C),L.next_out=P,L.avail_out=G-P,P&&a.arraySet(L.output,L.output,C,P,0),this.onData(O)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(q=!0)}while((0<L.avail_in||L.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(S=l.Z_FINISH),S===l.Z_FINISH?(v=s.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):S!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},p.prototype.onData=function(d){this.chunks.push(d)},p.prototype.onEnd=function(d){d===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},i.Inflate=p,i.inflate=g,i.inflateRaw=function(d,b){return(b=b||{}).raw=!0,g(d,b)},i.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var f=c.shift();if(f){if(typeof f!="object")throw new TypeError(f+"must be non-object");for(var h in f)f.hasOwnProperty(h)&&(l[h]=f[h])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,f,h,m){if(c.subarray&&l.subarray)l.set(c.subarray(f,f+h),m);else for(var p=0;p<h;p++)l[m+p]=c[f+p]},flattenChunks:function(l){var c,f,h,m,p,g;for(c=h=0,f=l.length;c<f;c++)h+=l[c].length;for(g=new Uint8Array(h),c=m=0,f=l.length;c<f;c++)p=l[c],g.set(p,m),m+=p.length;return g}},o={arraySet:function(l,c,f,h,m){for(var p=0;p<h;p++)l[m+p]=c[f+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,o))},i.setTyped(s)},{}],42:[function(n,r,i){var s=n("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var l=new s.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function f(h,m){if(m<65537&&(h.subarray&&o||!h.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(h,m));for(var p="",g=0;g<m;g++)p+=String.fromCharCode(h[g]);return p}l[254]=l[254]=1,i.string2buf=function(h){var m,p,g,d,b,v=h.length,S=0;for(d=0;d<v;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<v&&(64512&(g=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),d++),S+=p<128?1:p<2048?2:p<65536?3:4;for(m=new s.Buf8(S),d=b=0;b<S;d++)(64512&(p=h.charCodeAt(d)))==55296&&d+1<v&&(64512&(g=h.charCodeAt(d+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),d++),p<128?m[b++]=p:(p<2048?m[b++]=192|p>>>6:(p<65536?m[b++]=224|p>>>12:(m[b++]=240|p>>>18,m[b++]=128|p>>>12&63),m[b++]=128|p>>>6&63),m[b++]=128|63&p);return m},i.buf2binstring=function(h){return f(h,h.length)},i.binstring2buf=function(h){for(var m=new s.Buf8(h.length),p=0,g=m.length;p<g;p++)m[p]=h.charCodeAt(p);return m},i.buf2string=function(h,m){var p,g,d,b,v=m||h.length,S=new Array(2*v);for(p=g=0;p<v;)if((d=h[p++])<128)S[g++]=d;else if(4<(b=l[d]))S[g++]=65533,p+=b-1;else{for(d&=b===2?31:b===3?15:7;1<b&&p<v;)d=d<<6|63&h[p++],b--;1<b?S[g++]=65533:d<65536?S[g++]=d:(d-=65536,S[g++]=55296|d>>10&1023,S[g++]=56320|1023&d)}return f(S,g)},i.utf8border=function(h,m){var p;for((m=m||h.length)>h.length&&(m=h.length),p=m-1;0<=p&&(192&h[p])==128;)p--;return p<0||p===0?m:p+l[h[p]]>m?p:m}},{"./common":41}],43:[function(n,r,i){r.exports=function(s,a,o,l){for(var c=65535&s|0,f=s>>>16&65535|0,h=0;o!==0;){for(o-=h=2e3<o?2e3:o;f=f+(c=c+a[l++]|0)|0,--h;);c%=65521,f%=65521}return c|f<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var s=(function(){for(var a,o=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;o[l]=a}return o})();r.exports=function(a,o,l,c){var f=s,h=c+l;a^=-1;for(var m=c;m<h;m++)a=a>>>8^f[255&(a^o[m])];return-1^a}},{}],46:[function(n,r,i){var s,a=n("../utils/common"),o=n("./trees"),l=n("./adler32"),c=n("./crc32"),f=n("./messages"),h=0,m=4,p=0,g=-2,d=-1,b=4,v=2,S=8,C=9,P=286,O=30,z=19,L=2*P+1,G=15,M=3,q=258,ee=q+M+1,x=42,j=113,_=1,W=2,se=3,V=4;function ie(u,T){return u.msg=f[T],T}function Y(u){return(u<<1)-(4<u?9:0)}function ae(u){for(var T=u.length;0<=--T;)u[T]=0}function $(u){var T=u.state,R=T.pending;R>u.avail_out&&(R=u.avail_out),R!==0&&(a.arraySet(u.output,T.pending_buf,T.pending_out,R,u.next_out),u.next_out+=R,T.pending_out+=R,u.total_out+=R,u.avail_out-=R,T.pending-=R,T.pending===0&&(T.pending_out=0))}function F(u,T){o._tr_flush_block(u,0<=u.block_start?u.block_start:-1,u.strstart-u.block_start,T),u.block_start=u.strstart,$(u.strm)}function le(u,T){u.pending_buf[u.pending++]=T}function ne(u,T){u.pending_buf[u.pending++]=T>>>8&255,u.pending_buf[u.pending++]=255&T}function J(u,T){var R,y,w=u.max_chain_length,E=u.strstart,D=u.prev_length,N=u.nice_match,k=u.strstart>u.w_size-ee?u.strstart-(u.w_size-ee):0,B=u.window,K=u.w_mask,U=u.prev,Q=u.strstart+q,ue=B[E+D-1],oe=B[E+D];u.prev_length>=u.good_match&&(w>>=2),N>u.lookahead&&(N=u.lookahead);do if(B[(R=T)+D]===oe&&B[R+D-1]===ue&&B[R]===B[E]&&B[++R]===B[E+1]){E+=2,R++;do;while(B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&B[++E]===B[++R]&&E<Q);if(y=q-(Q-E),E=Q-q,D<y){if(u.match_start=T,N<=(D=y))break;ue=B[E+D-1],oe=B[E+D]}}while((T=U[T&K])>k&&--w!=0);return D<=u.lookahead?D:u.lookahead}function ge(u){var T,R,y,w,E,D,N,k,B,K,U=u.w_size;do{if(w=u.window_size-u.lookahead-u.strstart,u.strstart>=U+(U-ee)){for(a.arraySet(u.window,u.window,U,U,0),u.match_start-=U,u.strstart-=U,u.block_start-=U,T=R=u.hash_size;y=u.head[--T],u.head[T]=U<=y?y-U:0,--R;);for(T=R=U;y=u.prev[--T],u.prev[T]=U<=y?y-U:0,--R;);w+=U}if(u.strm.avail_in===0)break;if(D=u.strm,N=u.window,k=u.strstart+u.lookahead,B=w,K=void 0,K=D.avail_in,B<K&&(K=B),R=K===0?0:(D.avail_in-=K,a.arraySet(N,D.input,D.next_in,K,k),D.state.wrap===1?D.adler=l(D.adler,N,K,k):D.state.wrap===2&&(D.adler=c(D.adler,N,K,k)),D.next_in+=K,D.total_in+=K,K),u.lookahead+=R,u.lookahead+u.insert>=M)for(E=u.strstart-u.insert,u.ins_h=u.window[E],u.ins_h=(u.ins_h<<u.hash_shift^u.window[E+1])&u.hash_mask;u.insert&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[E+M-1])&u.hash_mask,u.prev[E&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=E,E++,u.insert--,!(u.lookahead+u.insert<M)););}while(u.lookahead<ee&&u.strm.avail_in!==0)}function H(u,T){for(var R,y;;){if(u.lookahead<ee){if(ge(u),u.lookahead<ee&&T===h)return _;if(u.lookahead===0)break}if(R=0,u.lookahead>=M&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+M-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),R!==0&&u.strstart-R<=u.w_size-ee&&(u.match_length=J(u,R)),u.match_length>=M)if(y=o._tr_tally(u,u.strstart-u.match_start,u.match_length-M),u.lookahead-=u.match_length,u.match_length<=u.max_lazy_match&&u.lookahead>=M){for(u.match_length--;u.strstart++,u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+M-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart,--u.match_length!=0;);u.strstart++}else u.strstart+=u.match_length,u.match_length=0,u.ins_h=u.window[u.strstart],u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+1])&u.hash_mask;else y=o._tr_tally(u,0,u.window[u.strstart]),u.lookahead--,u.strstart++;if(y&&(F(u,!1),u.strm.avail_out===0))return _}return u.insert=u.strstart<M-1?u.strstart:M-1,T===m?(F(u,!0),u.strm.avail_out===0?se:V):u.last_lit&&(F(u,!1),u.strm.avail_out===0)?_:W}function X(u,T){for(var R,y,w;;){if(u.lookahead<ee){if(ge(u),u.lookahead<ee&&T===h)return _;if(u.lookahead===0)break}if(R=0,u.lookahead>=M&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+M-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),u.prev_length=u.match_length,u.prev_match=u.match_start,u.match_length=M-1,R!==0&&u.prev_length<u.max_lazy_match&&u.strstart-R<=u.w_size-ee&&(u.match_length=J(u,R),u.match_length<=5&&(u.strategy===1||u.match_length===M&&4096<u.strstart-u.match_start)&&(u.match_length=M-1)),u.prev_length>=M&&u.match_length<=u.prev_length){for(w=u.strstart+u.lookahead-M,y=o._tr_tally(u,u.strstart-1-u.prev_match,u.prev_length-M),u.lookahead-=u.prev_length-1,u.prev_length-=2;++u.strstart<=w&&(u.ins_h=(u.ins_h<<u.hash_shift^u.window[u.strstart+M-1])&u.hash_mask,R=u.prev[u.strstart&u.w_mask]=u.head[u.ins_h],u.head[u.ins_h]=u.strstart),--u.prev_length!=0;);if(u.match_available=0,u.match_length=M-1,u.strstart++,y&&(F(u,!1),u.strm.avail_out===0))return _}else if(u.match_available){if((y=o._tr_tally(u,0,u.window[u.strstart-1]))&&F(u,!1),u.strstart++,u.lookahead--,u.strm.avail_out===0)return _}else u.match_available=1,u.strstart++,u.lookahead--}return u.match_available&&(y=o._tr_tally(u,0,u.window[u.strstart-1]),u.match_available=0),u.insert=u.strstart<M-1?u.strstart:M-1,T===m?(F(u,!0),u.strm.avail_out===0?se:V):u.last_lit&&(F(u,!1),u.strm.avail_out===0)?_:W}function Z(u,T,R,y,w){this.good_length=u,this.max_lazy=T,this.nice_length=R,this.max_chain=y,this.func=w}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*O+1)),this.bl_tree=new a.Buf16(2*(2*z+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(G+1),this.heap=new a.Buf16(2*P+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*P+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ce(u){var T;return u&&u.state?(u.total_in=u.total_out=0,u.data_type=v,(T=u.state).pending=0,T.pending_out=0,T.wrap<0&&(T.wrap=-T.wrap),T.status=T.wrap?x:j,u.adler=T.wrap===2?0:1,T.last_flush=h,o._tr_init(T),p):ie(u,g)}function A(u){var T=ce(u);return T===p&&(function(R){R.window_size=2*R.w_size,ae(R.head),R.max_lazy_match=s[R.level].max_lazy,R.good_match=s[R.level].good_length,R.nice_match=s[R.level].nice_length,R.max_chain_length=s[R.level].max_chain,R.strstart=0,R.block_start=0,R.lookahead=0,R.insert=0,R.match_length=R.prev_length=M-1,R.match_available=0,R.ins_h=0})(u.state),T}function I(u,T,R,y,w,E){if(!u)return g;var D=1;if(T===d&&(T=6),y<0?(D=0,y=-y):15<y&&(D=2,y-=16),w<1||C<w||R!==S||y<8||15<y||T<0||9<T||E<0||b<E)return ie(u,g);y===8&&(y=9);var N=new re;return(u.state=N).strm=u,N.wrap=D,N.gzhead=null,N.w_bits=y,N.w_size=1<<N.w_bits,N.w_mask=N.w_size-1,N.hash_bits=w+7,N.hash_size=1<<N.hash_bits,N.hash_mask=N.hash_size-1,N.hash_shift=~~((N.hash_bits+M-1)/M),N.window=new a.Buf8(2*N.w_size),N.head=new a.Buf16(N.hash_size),N.prev=new a.Buf16(N.w_size),N.lit_bufsize=1<<w+6,N.pending_buf_size=4*N.lit_bufsize,N.pending_buf=new a.Buf8(N.pending_buf_size),N.d_buf=1*N.lit_bufsize,N.l_buf=3*N.lit_bufsize,N.level=T,N.strategy=E,N.method=R,A(u)}s=[new Z(0,0,0,0,function(u,T){var R=65535;for(R>u.pending_buf_size-5&&(R=u.pending_buf_size-5);;){if(u.lookahead<=1){if(ge(u),u.lookahead===0&&T===h)return _;if(u.lookahead===0)break}u.strstart+=u.lookahead,u.lookahead=0;var y=u.block_start+R;if((u.strstart===0||u.strstart>=y)&&(u.lookahead=u.strstart-y,u.strstart=y,F(u,!1),u.strm.avail_out===0)||u.strstart-u.block_start>=u.w_size-ee&&(F(u,!1),u.strm.avail_out===0))return _}return u.insert=0,T===m?(F(u,!0),u.strm.avail_out===0?se:V):(u.strstart>u.block_start&&(F(u,!1),u.strm.avail_out),_)}),new Z(4,4,8,4,H),new Z(4,5,16,8,H),new Z(4,6,32,32,H),new Z(4,4,16,16,X),new Z(8,16,32,32,X),new Z(8,16,128,128,X),new Z(8,32,128,256,X),new Z(32,128,258,1024,X),new Z(32,258,258,4096,X)],i.deflateInit=function(u,T){return I(u,T,S,15,8,0)},i.deflateInit2=I,i.deflateReset=A,i.deflateResetKeep=ce,i.deflateSetHeader=function(u,T){return u&&u.state?u.state.wrap!==2?g:(u.state.gzhead=T,p):g},i.deflate=function(u,T){var R,y,w,E;if(!u||!u.state||5<T||T<0)return u?ie(u,g):g;if(y=u.state,!u.output||!u.input&&u.avail_in!==0||y.status===666&&T!==m)return ie(u,u.avail_out===0?-5:g);if(y.strm=u,R=y.last_flush,y.last_flush=T,y.status===x)if(y.wrap===2)u.adler=0,le(y,31),le(y,139),le(y,8),y.gzhead?(le(y,(y.gzhead.text?1:0)+(y.gzhead.hcrc?2:0)+(y.gzhead.extra?4:0)+(y.gzhead.name?8:0)+(y.gzhead.comment?16:0)),le(y,255&y.gzhead.time),le(y,y.gzhead.time>>8&255),le(y,y.gzhead.time>>16&255),le(y,y.gzhead.time>>24&255),le(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),le(y,255&y.gzhead.os),y.gzhead.extra&&y.gzhead.extra.length&&(le(y,255&y.gzhead.extra.length),le(y,y.gzhead.extra.length>>8&255)),y.gzhead.hcrc&&(u.adler=c(u.adler,y.pending_buf,y.pending,0)),y.gzindex=0,y.status=69):(le(y,0),le(y,0),le(y,0),le(y,0),le(y,0),le(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),le(y,3),y.status=j);else{var D=S+(y.w_bits-8<<4)<<8;D|=(2<=y.strategy||y.level<2?0:y.level<6?1:y.level===6?2:3)<<6,y.strstart!==0&&(D|=32),D+=31-D%31,y.status=j,ne(y,D),y.strstart!==0&&(ne(y,u.adler>>>16),ne(y,65535&u.adler)),u.adler=1}if(y.status===69)if(y.gzhead.extra){for(w=y.pending;y.gzindex<(65535&y.gzhead.extra.length)&&(y.pending!==y.pending_buf_size||(y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),$(u),w=y.pending,y.pending!==y.pending_buf_size));)le(y,255&y.gzhead.extra[y.gzindex]),y.gzindex++;y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),y.gzindex===y.gzhead.extra.length&&(y.gzindex=0,y.status=73)}else y.status=73;if(y.status===73)if(y.gzhead.name){w=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),$(u),w=y.pending,y.pending===y.pending_buf_size)){E=1;break}E=y.gzindex<y.gzhead.name.length?255&y.gzhead.name.charCodeAt(y.gzindex++):0,le(y,E)}while(E!==0);y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),E===0&&(y.gzindex=0,y.status=91)}else y.status=91;if(y.status===91)if(y.gzhead.comment){w=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),$(u),w=y.pending,y.pending===y.pending_buf_size)){E=1;break}E=y.gzindex<y.gzhead.comment.length?255&y.gzhead.comment.charCodeAt(y.gzindex++):0,le(y,E)}while(E!==0);y.gzhead.hcrc&&y.pending>w&&(u.adler=c(u.adler,y.pending_buf,y.pending-w,w)),E===0&&(y.status=103)}else y.status=103;if(y.status===103&&(y.gzhead.hcrc?(y.pending+2>y.pending_buf_size&&$(u),y.pending+2<=y.pending_buf_size&&(le(y,255&u.adler),le(y,u.adler>>8&255),u.adler=0,y.status=j)):y.status=j),y.pending!==0){if($(u),u.avail_out===0)return y.last_flush=-1,p}else if(u.avail_in===0&&Y(T)<=Y(R)&&T!==m)return ie(u,-5);if(y.status===666&&u.avail_in!==0)return ie(u,-5);if(u.avail_in!==0||y.lookahead!==0||T!==h&&y.status!==666){var N=y.strategy===2?(function(k,B){for(var K;;){if(k.lookahead===0&&(ge(k),k.lookahead===0)){if(B===h)return _;break}if(k.match_length=0,K=o._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++,K&&(F(k,!1),k.strm.avail_out===0))return _}return k.insert=0,B===m?(F(k,!0),k.strm.avail_out===0?se:V):k.last_lit&&(F(k,!1),k.strm.avail_out===0)?_:W})(y,T):y.strategy===3?(function(k,B){for(var K,U,Q,ue,oe=k.window;;){if(k.lookahead<=q){if(ge(k),k.lookahead<=q&&B===h)return _;if(k.lookahead===0)break}if(k.match_length=0,k.lookahead>=M&&0<k.strstart&&(U=oe[Q=k.strstart-1])===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]){ue=k.strstart+q;do;while(U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&U===oe[++Q]&&Q<ue);k.match_length=q-(ue-Q),k.match_length>k.lookahead&&(k.match_length=k.lookahead)}if(k.match_length>=M?(K=o._tr_tally(k,1,k.match_length-M),k.lookahead-=k.match_length,k.strstart+=k.match_length,k.match_length=0):(K=o._tr_tally(k,0,k.window[k.strstart]),k.lookahead--,k.strstart++),K&&(F(k,!1),k.strm.avail_out===0))return _}return k.insert=0,B===m?(F(k,!0),k.strm.avail_out===0?se:V):k.last_lit&&(F(k,!1),k.strm.avail_out===0)?_:W})(y,T):s[y.level].func(y,T);if(N!==se&&N!==V||(y.status=666),N===_||N===se)return u.avail_out===0&&(y.last_flush=-1),p;if(N===W&&(T===1?o._tr_align(y):T!==5&&(o._tr_stored_block(y,0,0,!1),T===3&&(ae(y.head),y.lookahead===0&&(y.strstart=0,y.block_start=0,y.insert=0))),$(u),u.avail_out===0))return y.last_flush=-1,p}return T!==m?p:y.wrap<=0?1:(y.wrap===2?(le(y,255&u.adler),le(y,u.adler>>8&255),le(y,u.adler>>16&255),le(y,u.adler>>24&255),le(y,255&u.total_in),le(y,u.total_in>>8&255),le(y,u.total_in>>16&255),le(y,u.total_in>>24&255)):(ne(y,u.adler>>>16),ne(y,65535&u.adler)),$(u),0<y.wrap&&(y.wrap=-y.wrap),y.pending!==0?p:1)},i.deflateEnd=function(u){var T;return u&&u.state?(T=u.state.status)!==x&&T!==69&&T!==73&&T!==91&&T!==103&&T!==j&&T!==666?ie(u,g):(u.state=null,T===j?ie(u,-3):p):g},i.deflateSetDictionary=function(u,T){var R,y,w,E,D,N,k,B,K=T.length;if(!u||!u.state||(E=(R=u.state).wrap)===2||E===1&&R.status!==x||R.lookahead)return g;for(E===1&&(u.adler=l(u.adler,T,K,0)),R.wrap=0,K>=R.w_size&&(E===0&&(ae(R.head),R.strstart=0,R.block_start=0,R.insert=0),B=new a.Buf8(R.w_size),a.arraySet(B,T,K-R.w_size,R.w_size,0),T=B,K=R.w_size),D=u.avail_in,N=u.next_in,k=u.input,u.avail_in=K,u.next_in=0,u.input=T,ge(R);R.lookahead>=M;){for(y=R.strstart,w=R.lookahead-(M-1);R.ins_h=(R.ins_h<<R.hash_shift^R.window[y+M-1])&R.hash_mask,R.prev[y&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=y,y++,--w;);R.strstart=y,R.lookahead=M-1,ge(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=M-1,R.match_available=0,u.next_in=N,u.input=k,u.avail_in=D,R.wrap=E,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(s,a){var o,l,c,f,h,m,p,g,d,b,v,S,C,P,O,z,L,G,M,q,ee,x,j,_,W;o=s.state,l=s.next_in,_=s.input,c=l+(s.avail_in-5),f=s.next_out,W=s.output,h=f-(a-s.avail_out),m=f+(s.avail_out-257),p=o.dmax,g=o.wsize,d=o.whave,b=o.wnext,v=o.window,S=o.hold,C=o.bits,P=o.lencode,O=o.distcode,z=(1<<o.lenbits)-1,L=(1<<o.distbits)-1;e:do{C<15&&(S+=_[l++]<<C,C+=8,S+=_[l++]<<C,C+=8),G=P[S&z];t:for(;;){if(S>>>=M=G>>>24,C-=M,(M=G>>>16&255)===0)W[f++]=65535&G;else{if(!(16&M)){if((64&M)==0){G=P[(65535&G)+(S&(1<<M)-1)];continue t}if(32&M){o.mode=12;break e}s.msg="invalid literal/length code",o.mode=30;break e}q=65535&G,(M&=15)&&(C<M&&(S+=_[l++]<<C,C+=8),q+=S&(1<<M)-1,S>>>=M,C-=M),C<15&&(S+=_[l++]<<C,C+=8,S+=_[l++]<<C,C+=8),G=O[S&L];n:for(;;){if(S>>>=M=G>>>24,C-=M,!(16&(M=G>>>16&255))){if((64&M)==0){G=O[(65535&G)+(S&(1<<M)-1)];continue n}s.msg="invalid distance code",o.mode=30;break e}if(ee=65535&G,C<(M&=15)&&(S+=_[l++]<<C,(C+=8)<M&&(S+=_[l++]<<C,C+=8)),p<(ee+=S&(1<<M)-1)){s.msg="invalid distance too far back",o.mode=30;break e}if(S>>>=M,C-=M,(M=f-h)<ee){if(d<(M=ee-M)&&o.sane){s.msg="invalid distance too far back",o.mode=30;break e}if(j=v,(x=0)===b){if(x+=g-M,M<q){for(q-=M;W[f++]=v[x++],--M;);x=f-ee,j=W}}else if(b<M){if(x+=g+b-M,(M-=b)<q){for(q-=M;W[f++]=v[x++],--M;);if(x=0,b<q){for(q-=M=b;W[f++]=v[x++],--M;);x=f-ee,j=W}}}else if(x+=b-M,M<q){for(q-=M;W[f++]=v[x++],--M;);x=f-ee,j=W}for(;2<q;)W[f++]=j[x++],W[f++]=j[x++],W[f++]=j[x++],q-=3;q&&(W[f++]=j[x++],1<q&&(W[f++]=j[x++]))}else{for(x=f-ee;W[f++]=W[x++],W[f++]=W[x++],W[f++]=W[x++],2<(q-=3););q&&(W[f++]=W[x++],1<q&&(W[f++]=W[x++]))}break}}break}}while(l<c&&f<m);l-=q=C>>3,S&=(1<<(C-=q<<3))-1,s.next_in=l,s.next_out=f,s.avail_in=l<c?c-l+5:5-(l-c),s.avail_out=f<m?m-f+257:257-(f-m),o.hold=S,o.bits=C}},{}],49:[function(n,r,i){var s=n("../utils/common"),a=n("./adler32"),o=n("./crc32"),l=n("./inffast"),c=n("./inftrees"),f=1,h=2,m=0,p=-2,g=1,d=852,b=592;function v(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function C(x){var j;return x&&x.state?(j=x.state,x.total_in=x.total_out=j.total=0,x.msg="",j.wrap&&(x.adler=1&j.wrap),j.mode=g,j.last=0,j.havedict=0,j.dmax=32768,j.head=null,j.hold=0,j.bits=0,j.lencode=j.lendyn=new s.Buf32(d),j.distcode=j.distdyn=new s.Buf32(b),j.sane=1,j.back=-1,m):p}function P(x){var j;return x&&x.state?((j=x.state).wsize=0,j.whave=0,j.wnext=0,C(x)):p}function O(x,j){var _,W;return x&&x.state?(W=x.state,j<0?(_=0,j=-j):(_=1+(j>>4),j<48&&(j&=15)),j&&(j<8||15<j)?p:(W.window!==null&&W.wbits!==j&&(W.window=null),W.wrap=_,W.wbits=j,P(x))):p}function z(x,j){var _,W;return x?(W=new S,(x.state=W).window=null,(_=O(x,j))!==m&&(x.state=null),_):p}var L,G,M=!0;function q(x){if(M){var j;for(L=new s.Buf32(512),G=new s.Buf32(32),j=0;j<144;)x.lens[j++]=8;for(;j<256;)x.lens[j++]=9;for(;j<280;)x.lens[j++]=7;for(;j<288;)x.lens[j++]=8;for(c(f,x.lens,0,288,L,0,x.work,{bits:9}),j=0;j<32;)x.lens[j++]=5;c(h,x.lens,0,32,G,0,x.work,{bits:5}),M=!1}x.lencode=L,x.lenbits=9,x.distcode=G,x.distbits=5}function ee(x,j,_,W){var se,V=x.state;return V.window===null&&(V.wsize=1<<V.wbits,V.wnext=0,V.whave=0,V.window=new s.Buf8(V.wsize)),W>=V.wsize?(s.arraySet(V.window,j,_-V.wsize,V.wsize,0),V.wnext=0,V.whave=V.wsize):(W<(se=V.wsize-V.wnext)&&(se=W),s.arraySet(V.window,j,_-W,se,V.wnext),(W-=se)?(s.arraySet(V.window,j,_-W,W,0),V.wnext=W,V.whave=V.wsize):(V.wnext+=se,V.wnext===V.wsize&&(V.wnext=0),V.whave<V.wsize&&(V.whave+=se))),0}i.inflateReset=P,i.inflateReset2=O,i.inflateResetKeep=C,i.inflateInit=function(x){return z(x,15)},i.inflateInit2=z,i.inflate=function(x,j){var _,W,se,V,ie,Y,ae,$,F,le,ne,J,ge,H,X,Z,re,ce,A,I,u,T,R,y,w=0,E=new s.Buf8(4),D=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return p;(_=x.state).mode===12&&(_.mode=13),ie=x.next_out,se=x.output,ae=x.avail_out,V=x.next_in,W=x.input,Y=x.avail_in,$=_.hold,F=_.bits,le=Y,ne=ae,T=m;e:for(;;)switch(_.mode){case g:if(_.wrap===0){_.mode=13;break}for(;F<16;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if(2&_.wrap&&$===35615){E[_.check=0]=255&$,E[1]=$>>>8&255,_.check=o(_.check,E,2,0),F=$=0,_.mode=2;break}if(_.flags=0,_.head&&(_.head.done=!1),!(1&_.wrap)||(((255&$)<<8)+($>>8))%31){x.msg="incorrect header check",_.mode=30;break}if((15&$)!=8){x.msg="unknown compression method",_.mode=30;break}if(F-=4,u=8+(15&($>>>=4)),_.wbits===0)_.wbits=u;else if(u>_.wbits){x.msg="invalid window size",_.mode=30;break}_.dmax=1<<u,x.adler=_.check=1,_.mode=512&$?10:12,F=$=0;break;case 2:for(;F<16;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if(_.flags=$,(255&_.flags)!=8){x.msg="unknown compression method",_.mode=30;break}if(57344&_.flags){x.msg="unknown header flags set",_.mode=30;break}_.head&&(_.head.text=$>>8&1),512&_.flags&&(E[0]=255&$,E[1]=$>>>8&255,_.check=o(_.check,E,2,0)),F=$=0,_.mode=3;case 3:for(;F<32;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.head&&(_.head.time=$),512&_.flags&&(E[0]=255&$,E[1]=$>>>8&255,E[2]=$>>>16&255,E[3]=$>>>24&255,_.check=o(_.check,E,4,0)),F=$=0,_.mode=4;case 4:for(;F<16;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.head&&(_.head.xflags=255&$,_.head.os=$>>8),512&_.flags&&(E[0]=255&$,E[1]=$>>>8&255,_.check=o(_.check,E,2,0)),F=$=0,_.mode=5;case 5:if(1024&_.flags){for(;F<16;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.length=$,_.head&&(_.head.extra_len=$),512&_.flags&&(E[0]=255&$,E[1]=$>>>8&255,_.check=o(_.check,E,2,0)),F=$=0}else _.head&&(_.head.extra=null);_.mode=6;case 6:if(1024&_.flags&&(Y<(J=_.length)&&(J=Y),J&&(_.head&&(u=_.head.extra_len-_.length,_.head.extra||(_.head.extra=new Array(_.head.extra_len)),s.arraySet(_.head.extra,W,V,J,u)),512&_.flags&&(_.check=o(_.check,W,J,V)),Y-=J,V+=J,_.length-=J),_.length))break e;_.length=0,_.mode=7;case 7:if(2048&_.flags){if(Y===0)break e;for(J=0;u=W[V+J++],_.head&&u&&_.length<65536&&(_.head.name+=String.fromCharCode(u)),u&&J<Y;);if(512&_.flags&&(_.check=o(_.check,W,J,V)),Y-=J,V+=J,u)break e}else _.head&&(_.head.name=null);_.length=0,_.mode=8;case 8:if(4096&_.flags){if(Y===0)break e;for(J=0;u=W[V+J++],_.head&&u&&_.length<65536&&(_.head.comment+=String.fromCharCode(u)),u&&J<Y;);if(512&_.flags&&(_.check=o(_.check,W,J,V)),Y-=J,V+=J,u)break e}else _.head&&(_.head.comment=null);_.mode=9;case 9:if(512&_.flags){for(;F<16;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if($!==(65535&_.check)){x.msg="header crc mismatch",_.mode=30;break}F=$=0}_.head&&(_.head.hcrc=_.flags>>9&1,_.head.done=!0),x.adler=_.check=0,_.mode=12;break;case 10:for(;F<32;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}x.adler=_.check=v($),F=$=0,_.mode=11;case 11:if(_.havedict===0)return x.next_out=ie,x.avail_out=ae,x.next_in=V,x.avail_in=Y,_.hold=$,_.bits=F,2;x.adler=_.check=1,_.mode=12;case 12:if(j===5||j===6)break e;case 13:if(_.last){$>>>=7&F,F-=7&F,_.mode=27;break}for(;F<3;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}switch(_.last=1&$,F-=1,3&($>>>=1)){case 0:_.mode=14;break;case 1:if(q(_),_.mode=20,j!==6)break;$>>>=2,F-=2;break e;case 2:_.mode=17;break;case 3:x.msg="invalid block type",_.mode=30}$>>>=2,F-=2;break;case 14:for($>>>=7&F,F-=7&F;F<32;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if((65535&$)!=($>>>16^65535)){x.msg="invalid stored block lengths",_.mode=30;break}if(_.length=65535&$,F=$=0,_.mode=15,j===6)break e;case 15:_.mode=16;case 16:if(J=_.length){if(Y<J&&(J=Y),ae<J&&(J=ae),J===0)break e;s.arraySet(se,W,V,J,ie),Y-=J,V+=J,ae-=J,ie+=J,_.length-=J;break}_.mode=12;break;case 17:for(;F<14;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if(_.nlen=257+(31&$),$>>>=5,F-=5,_.ndist=1+(31&$),$>>>=5,F-=5,_.ncode=4+(15&$),$>>>=4,F-=4,286<_.nlen||30<_.ndist){x.msg="too many length or distance symbols",_.mode=30;break}_.have=0,_.mode=18;case 18:for(;_.have<_.ncode;){for(;F<3;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.lens[D[_.have++]]=7&$,$>>>=3,F-=3}for(;_.have<19;)_.lens[D[_.have++]]=0;if(_.lencode=_.lendyn,_.lenbits=7,R={bits:_.lenbits},T=c(0,_.lens,0,19,_.lencode,0,_.work,R),_.lenbits=R.bits,T){x.msg="invalid code lengths set",_.mode=30;break}_.have=0,_.mode=19;case 19:for(;_.have<_.nlen+_.ndist;){for(;Z=(w=_.lencode[$&(1<<_.lenbits)-1])>>>16&255,re=65535&w,!((X=w>>>24)<=F);){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if(re<16)$>>>=X,F-=X,_.lens[_.have++]=re;else{if(re===16){for(y=X+2;F<y;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if($>>>=X,F-=X,_.have===0){x.msg="invalid bit length repeat",_.mode=30;break}u=_.lens[_.have-1],J=3+(3&$),$>>>=2,F-=2}else if(re===17){for(y=X+3;F<y;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}F-=X,u=0,J=3+(7&($>>>=X)),$>>>=3,F-=3}else{for(y=X+7;F<y;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}F-=X,u=0,J=11+(127&($>>>=X)),$>>>=7,F-=7}if(_.have+J>_.nlen+_.ndist){x.msg="invalid bit length repeat",_.mode=30;break}for(;J--;)_.lens[_.have++]=u}}if(_.mode===30)break;if(_.lens[256]===0){x.msg="invalid code -- missing end-of-block",_.mode=30;break}if(_.lenbits=9,R={bits:_.lenbits},T=c(f,_.lens,0,_.nlen,_.lencode,0,_.work,R),_.lenbits=R.bits,T){x.msg="invalid literal/lengths set",_.mode=30;break}if(_.distbits=6,_.distcode=_.distdyn,R={bits:_.distbits},T=c(h,_.lens,_.nlen,_.ndist,_.distcode,0,_.work,R),_.distbits=R.bits,T){x.msg="invalid distances set",_.mode=30;break}if(_.mode=20,j===6)break e;case 20:_.mode=21;case 21:if(6<=Y&&258<=ae){x.next_out=ie,x.avail_out=ae,x.next_in=V,x.avail_in=Y,_.hold=$,_.bits=F,l(x,ne),ie=x.next_out,se=x.output,ae=x.avail_out,V=x.next_in,W=x.input,Y=x.avail_in,$=_.hold,F=_.bits,_.mode===12&&(_.back=-1);break}for(_.back=0;Z=(w=_.lencode[$&(1<<_.lenbits)-1])>>>16&255,re=65535&w,!((X=w>>>24)<=F);){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if(Z&&(240&Z)==0){for(ce=X,A=Z,I=re;Z=(w=_.lencode[I+(($&(1<<ce+A)-1)>>ce)])>>>16&255,re=65535&w,!(ce+(X=w>>>24)<=F);){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}$>>>=ce,F-=ce,_.back+=ce}if($>>>=X,F-=X,_.back+=X,_.length=re,Z===0){_.mode=26;break}if(32&Z){_.back=-1,_.mode=12;break}if(64&Z){x.msg="invalid literal/length code",_.mode=30;break}_.extra=15&Z,_.mode=22;case 22:if(_.extra){for(y=_.extra;F<y;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.length+=$&(1<<_.extra)-1,$>>>=_.extra,F-=_.extra,_.back+=_.extra}_.was=_.length,_.mode=23;case 23:for(;Z=(w=_.distcode[$&(1<<_.distbits)-1])>>>16&255,re=65535&w,!((X=w>>>24)<=F);){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if((240&Z)==0){for(ce=X,A=Z,I=re;Z=(w=_.distcode[I+(($&(1<<ce+A)-1)>>ce)])>>>16&255,re=65535&w,!(ce+(X=w>>>24)<=F);){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}$>>>=ce,F-=ce,_.back+=ce}if($>>>=X,F-=X,_.back+=X,64&Z){x.msg="invalid distance code",_.mode=30;break}_.offset=re,_.extra=15&Z,_.mode=24;case 24:if(_.extra){for(y=_.extra;F<y;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}_.offset+=$&(1<<_.extra)-1,$>>>=_.extra,F-=_.extra,_.back+=_.extra}if(_.offset>_.dmax){x.msg="invalid distance too far back",_.mode=30;break}_.mode=25;case 25:if(ae===0)break e;if(J=ne-ae,_.offset>J){if((J=_.offset-J)>_.whave&&_.sane){x.msg="invalid distance too far back",_.mode=30;break}ge=J>_.wnext?(J-=_.wnext,_.wsize-J):_.wnext-J,J>_.length&&(J=_.length),H=_.window}else H=se,ge=ie-_.offset,J=_.length;for(ae<J&&(J=ae),ae-=J,_.length-=J;se[ie++]=H[ge++],--J;);_.length===0&&(_.mode=21);break;case 26:if(ae===0)break e;se[ie++]=_.length,ae--,_.mode=21;break;case 27:if(_.wrap){for(;F<32;){if(Y===0)break e;Y--,$|=W[V++]<<F,F+=8}if(ne-=ae,x.total_out+=ne,_.total+=ne,ne&&(x.adler=_.check=_.flags?o(_.check,se,ne,ie-ne):a(_.check,se,ne,ie-ne)),ne=ae,(_.flags?$:v($))!==_.check){x.msg="incorrect data check",_.mode=30;break}F=$=0}_.mode=28;case 28:if(_.wrap&&_.flags){for(;F<32;){if(Y===0)break e;Y--,$+=W[V++]<<F,F+=8}if($!==(4294967295&_.total)){x.msg="incorrect length check",_.mode=30;break}F=$=0}_.mode=29;case 29:T=1;break e;case 30:T=-3;break e;case 31:return-4;case 32:default:return p}return x.next_out=ie,x.avail_out=ae,x.next_in=V,x.avail_in=Y,_.hold=$,_.bits=F,(_.wsize||ne!==x.avail_out&&_.mode<30&&(_.mode<27||j!==4))&&ee(x,x.output,x.next_out,ne-x.avail_out)?(_.mode=31,-4):(le-=x.avail_in,ne-=x.avail_out,x.total_in+=le,x.total_out+=ne,_.total+=ne,_.wrap&&ne&&(x.adler=_.check=_.flags?o(_.check,se,ne,x.next_out-ne):a(_.check,se,ne,x.next_out-ne)),x.data_type=_.bits+(_.last?64:0)+(_.mode===12?128:0)+(_.mode===20||_.mode===15?256:0),(le==0&&ne===0||j===4)&&T===m&&(T=-5),T)},i.inflateEnd=function(x){if(!x||!x.state)return p;var j=x.state;return j.window&&(j.window=null),x.state=null,m},i.inflateGetHeader=function(x,j){var _;return x&&x.state?(2&(_=x.state).wrap)==0?p:((_.head=j).done=!1,m):p},i.inflateSetDictionary=function(x,j){var _,W=j.length;return x&&x.state?(_=x.state).wrap!==0&&_.mode!==11?p:_.mode===11&&a(1,j,W,0)!==_.check?-3:ee(x,j,W,W)?(_.mode=31,-4):(_.havedict=1,m):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var s=n("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(f,h,m,p,g,d,b,v){var S,C,P,O,z,L,G,M,q,ee=v.bits,x=0,j=0,_=0,W=0,se=0,V=0,ie=0,Y=0,ae=0,$=0,F=null,le=0,ne=new s.Buf16(16),J=new s.Buf16(16),ge=null,H=0;for(x=0;x<=15;x++)ne[x]=0;for(j=0;j<p;j++)ne[h[m+j]]++;for(se=ee,W=15;1<=W&&ne[W]===0;W--);if(W<se&&(se=W),W===0)return g[d++]=20971520,g[d++]=20971520,v.bits=1,0;for(_=1;_<W&&ne[_]===0;_++);for(se<_&&(se=_),x=Y=1;x<=15;x++)if(Y<<=1,(Y-=ne[x])<0)return-1;if(0<Y&&(f===0||W!==1))return-1;for(J[1]=0,x=1;x<15;x++)J[x+1]=J[x]+ne[x];for(j=0;j<p;j++)h[m+j]!==0&&(b[J[h[m+j]]++]=j);if(L=f===0?(F=ge=b,19):f===1?(F=a,le-=257,ge=o,H-=257,256):(F=l,ge=c,-1),x=_,z=d,ie=j=$=0,P=-1,O=(ae=1<<(V=se))-1,f===1&&852<ae||f===2&&592<ae)return 1;for(;;){for(G=x-ie,q=b[j]<L?(M=0,b[j]):b[j]>L?(M=ge[H+b[j]],F[le+b[j]]):(M=96,0),S=1<<x-ie,_=C=1<<V;g[z+($>>ie)+(C-=S)]=G<<24|M<<16|q|0,C!==0;);for(S=1<<x-1;$&S;)S>>=1;if(S!==0?($&=S-1,$+=S):$=0,j++,--ne[x]==0){if(x===W)break;x=h[m+b[j]]}if(se<x&&($&O)!==P){for(ie===0&&(ie=se),z+=_,Y=1<<(V=x-ie);V+ie<W&&!((Y-=ne[V+ie])<=0);)V++,Y<<=1;if(ae+=1<<V,f===1&&852<ae||f===2&&592<ae)return 1;g[P=$&O]=se<<24|V<<16|z-d|0}}return $!==0&&(g[z+$]=x-ie<<24|64<<16|0),v.bits=se,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var s=n("../utils/common"),a=0,o=1;function l(w){for(var E=w.length;0<=--E;)w[E]=0}var c=0,f=29,h=256,m=h+1+f,p=30,g=19,d=2*m+1,b=15,v=16,S=7,C=256,P=16,O=17,z=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],G=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(m+2));l(ee);var x=new Array(2*p);l(x);var j=new Array(512);l(j);var _=new Array(256);l(_);var W=new Array(f);l(W);var se,V,ie,Y=new Array(p);function ae(w,E,D,N,k){this.static_tree=w,this.extra_bits=E,this.extra_base=D,this.elems=N,this.max_length=k,this.has_stree=w&&w.length}function $(w,E){this.dyn_tree=w,this.max_code=0,this.stat_desc=E}function F(w){return w<256?j[w]:j[256+(w>>>7)]}function le(w,E){w.pending_buf[w.pending++]=255&E,w.pending_buf[w.pending++]=E>>>8&255}function ne(w,E,D){w.bi_valid>v-D?(w.bi_buf|=E<<w.bi_valid&65535,le(w,w.bi_buf),w.bi_buf=E>>v-w.bi_valid,w.bi_valid+=D-v):(w.bi_buf|=E<<w.bi_valid&65535,w.bi_valid+=D)}function J(w,E,D){ne(w,D[2*E],D[2*E+1])}function ge(w,E){for(var D=0;D|=1&w,w>>>=1,D<<=1,0<--E;);return D>>>1}function H(w,E,D){var N,k,B=new Array(b+1),K=0;for(N=1;N<=b;N++)B[N]=K=K+D[N-1]<<1;for(k=0;k<=E;k++){var U=w[2*k+1];U!==0&&(w[2*k]=ge(B[U]++,U))}}function X(w){var E;for(E=0;E<m;E++)w.dyn_ltree[2*E]=0;for(E=0;E<p;E++)w.dyn_dtree[2*E]=0;for(E=0;E<g;E++)w.bl_tree[2*E]=0;w.dyn_ltree[2*C]=1,w.opt_len=w.static_len=0,w.last_lit=w.matches=0}function Z(w){8<w.bi_valid?le(w,w.bi_buf):0<w.bi_valid&&(w.pending_buf[w.pending++]=w.bi_buf),w.bi_buf=0,w.bi_valid=0}function re(w,E,D,N){var k=2*E,B=2*D;return w[k]<w[B]||w[k]===w[B]&&N[E]<=N[D]}function ce(w,E,D){for(var N=w.heap[D],k=D<<1;k<=w.heap_len&&(k<w.heap_len&&re(E,w.heap[k+1],w.heap[k],w.depth)&&k++,!re(E,N,w.heap[k],w.depth));)w.heap[D]=w.heap[k],D=k,k<<=1;w.heap[D]=N}function A(w,E,D){var N,k,B,K,U=0;if(w.last_lit!==0)for(;N=w.pending_buf[w.d_buf+2*U]<<8|w.pending_buf[w.d_buf+2*U+1],k=w.pending_buf[w.l_buf+U],U++,N===0?J(w,k,E):(J(w,(B=_[k])+h+1,E),(K=L[B])!==0&&ne(w,k-=W[B],K),J(w,B=F(--N),D),(K=G[B])!==0&&ne(w,N-=Y[B],K)),U<w.last_lit;);J(w,C,E)}function I(w,E){var D,N,k,B=E.dyn_tree,K=E.stat_desc.static_tree,U=E.stat_desc.has_stree,Q=E.stat_desc.elems,ue=-1;for(w.heap_len=0,w.heap_max=d,D=0;D<Q;D++)B[2*D]!==0?(w.heap[++w.heap_len]=ue=D,w.depth[D]=0):B[2*D+1]=0;for(;w.heap_len<2;)B[2*(k=w.heap[++w.heap_len]=ue<2?++ue:0)]=1,w.depth[k]=0,w.opt_len--,U&&(w.static_len-=K[2*k+1]);for(E.max_code=ue,D=w.heap_len>>1;1<=D;D--)ce(w,B,D);for(k=Q;D=w.heap[1],w.heap[1]=w.heap[w.heap_len--],ce(w,B,1),N=w.heap[1],w.heap[--w.heap_max]=D,w.heap[--w.heap_max]=N,B[2*k]=B[2*D]+B[2*N],w.depth[k]=(w.depth[D]>=w.depth[N]?w.depth[D]:w.depth[N])+1,B[2*D+1]=B[2*N+1]=k,w.heap[1]=k++,ce(w,B,1),2<=w.heap_len;);w.heap[--w.heap_max]=w.heap[1],(function(oe,we){var ke,Oe,Ge,Ce,Xt,$e,Ne=we.dyn_tree,zn=we.max_code,Rr=we.stat_desc.static_tree,ru=we.stat_desc.has_stree,iu=we.stat_desc.extra_bits,Zs=we.stat_desc.extra_base,jn=we.stat_desc.max_length,Ir=0;for(Ce=0;Ce<=b;Ce++)oe.bl_count[Ce]=0;for(Ne[2*oe.heap[oe.heap_max]+1]=0,ke=oe.heap_max+1;ke<d;ke++)jn<(Ce=Ne[2*Ne[2*(Oe=oe.heap[ke])+1]+1]+1)&&(Ce=jn,Ir++),Ne[2*Oe+1]=Ce,zn<Oe||(oe.bl_count[Ce]++,Xt=0,Zs<=Oe&&(Xt=iu[Oe-Zs]),$e=Ne[2*Oe],oe.opt_len+=$e*(Ce+Xt),ru&&(oe.static_len+=$e*(Rr[2*Oe+1]+Xt)));if(Ir!==0){do{for(Ce=jn-1;oe.bl_count[Ce]===0;)Ce--;oe.bl_count[Ce]--,oe.bl_count[Ce+1]+=2,oe.bl_count[jn]--,Ir-=2}while(0<Ir);for(Ce=jn;Ce!==0;Ce--)for(Oe=oe.bl_count[Ce];Oe!==0;)zn<(Ge=oe.heap[--ke])||(Ne[2*Ge+1]!==Ce&&(oe.opt_len+=(Ce-Ne[2*Ge+1])*Ne[2*Ge],Ne[2*Ge+1]=Ce),Oe--)}})(w,E),H(B,ue,w.bl_count)}function u(w,E,D){var N,k,B=-1,K=E[1],U=0,Q=7,ue=4;for(K===0&&(Q=138,ue=3),E[2*(D+1)+1]=65535,N=0;N<=D;N++)k=K,K=E[2*(N+1)+1],++U<Q&&k===K||(U<ue?w.bl_tree[2*k]+=U:k!==0?(k!==B&&w.bl_tree[2*k]++,w.bl_tree[2*P]++):U<=10?w.bl_tree[2*O]++:w.bl_tree[2*z]++,B=k,ue=(U=0)===K?(Q=138,3):k===K?(Q=6,3):(Q=7,4))}function T(w,E,D){var N,k,B=-1,K=E[1],U=0,Q=7,ue=4;for(K===0&&(Q=138,ue=3),N=0;N<=D;N++)if(k=K,K=E[2*(N+1)+1],!(++U<Q&&k===K)){if(U<ue)for(;J(w,k,w.bl_tree),--U!=0;);else k!==0?(k!==B&&(J(w,k,w.bl_tree),U--),J(w,P,w.bl_tree),ne(w,U-3,2)):U<=10?(J(w,O,w.bl_tree),ne(w,U-3,3)):(J(w,z,w.bl_tree),ne(w,U-11,7));B=k,ue=(U=0)===K?(Q=138,3):k===K?(Q=6,3):(Q=7,4)}}l(Y);var R=!1;function y(w,E,D,N){ne(w,(c<<1)+(N?1:0),3),(function(k,B,K,U){Z(k),le(k,K),le(k,~K),s.arraySet(k.pending_buf,k.window,B,K,k.pending),k.pending+=K})(w,E,D)}i._tr_init=function(w){R||((function(){var E,D,N,k,B,K=new Array(b+1);for(k=N=0;k<f-1;k++)for(W[k]=N,E=0;E<1<<L[k];E++)_[N++]=k;for(_[N-1]=k,k=B=0;k<16;k++)for(Y[k]=B,E=0;E<1<<G[k];E++)j[B++]=k;for(B>>=7;k<p;k++)for(Y[k]=B<<7,E=0;E<1<<G[k]-7;E++)j[256+B++]=k;for(D=0;D<=b;D++)K[D]=0;for(E=0;E<=143;)ee[2*E+1]=8,E++,K[8]++;for(;E<=255;)ee[2*E+1]=9,E++,K[9]++;for(;E<=279;)ee[2*E+1]=7,E++,K[7]++;for(;E<=287;)ee[2*E+1]=8,E++,K[8]++;for(H(ee,m+1,K),E=0;E<p;E++)x[2*E+1]=5,x[2*E]=ge(E,5);se=new ae(ee,L,h+1,m,b),V=new ae(x,G,0,p,b),ie=new ae(new Array(0),M,0,g,S)})(),R=!0),w.l_desc=new $(w.dyn_ltree,se),w.d_desc=new $(w.dyn_dtree,V),w.bl_desc=new $(w.bl_tree,ie),w.bi_buf=0,w.bi_valid=0,X(w)},i._tr_stored_block=y,i._tr_flush_block=function(w,E,D,N){var k,B,K=0;0<w.level?(w.strm.data_type===2&&(w.strm.data_type=(function(U){var Q,ue=4093624447;for(Q=0;Q<=31;Q++,ue>>>=1)if(1&ue&&U.dyn_ltree[2*Q]!==0)return a;if(U.dyn_ltree[18]!==0||U.dyn_ltree[20]!==0||U.dyn_ltree[26]!==0)return o;for(Q=32;Q<h;Q++)if(U.dyn_ltree[2*Q]!==0)return o;return a})(w)),I(w,w.l_desc),I(w,w.d_desc),K=(function(U){var Q;for(u(U,U.dyn_ltree,U.l_desc.max_code),u(U,U.dyn_dtree,U.d_desc.max_code),I(U,U.bl_desc),Q=g-1;3<=Q&&U.bl_tree[2*q[Q]+1]===0;Q--);return U.opt_len+=3*(Q+1)+5+5+4,Q})(w),k=w.opt_len+3+7>>>3,(B=w.static_len+3+7>>>3)<=k&&(k=B)):k=B=D+5,D+4<=k&&E!==-1?y(w,E,D,N):w.strategy===4||B===k?(ne(w,2+(N?1:0),3),A(w,ee,x)):(ne(w,4+(N?1:0),3),(function(U,Q,ue,oe){var we;for(ne(U,Q-257,5),ne(U,ue-1,5),ne(U,oe-4,4),we=0;we<oe;we++)ne(U,U.bl_tree[2*q[we]+1],3);T(U,U.dyn_ltree,Q-1),T(U,U.dyn_dtree,ue-1)})(w,w.l_desc.max_code+1,w.d_desc.max_code+1,K+1),A(w,w.dyn_ltree,w.dyn_dtree)),X(w),N&&Z(w)},i._tr_tally=function(w,E,D){return w.pending_buf[w.d_buf+2*w.last_lit]=E>>>8&255,w.pending_buf[w.d_buf+2*w.last_lit+1]=255&E,w.pending_buf[w.l_buf+w.last_lit]=255&D,w.last_lit++,E===0?w.dyn_ltree[2*D]++:(w.matches++,E--,w.dyn_ltree[2*(_[D]+h+1)]++,w.dyn_dtree[2*F(E)]++),w.last_lit===w.lit_bufsize-1},i._tr_align=function(w){ne(w,2,3),J(w,C,ee),(function(E){E.bi_valid===16?(le(E,E.bi_buf),E.bi_buf=0,E.bi_valid=0):8<=E.bi_valid&&(E.pending_buf[E.pending++]=255&E.bi_buf,E.bi_buf>>=8,E.bi_valid-=8)})(w)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(s){(function(a,o){if(!a.setImmediate){var l,c,f,h,m=1,p={},g=!1,d=a.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(a);b=b&&b.setTimeout?b:a,l={}.toString.call(a.process)==="[object process]"?function(P){process.nextTick(function(){S(P)})}:(function(){if(a.postMessage&&!a.importScripts){var P=!0,O=a.onmessage;return a.onmessage=function(){P=!1},a.postMessage("","*"),a.onmessage=O,P}})()?(h="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",C,!1):a.attachEvent("onmessage",C),function(P){a.postMessage(h+P,"*")}):a.MessageChannel?((f=new MessageChannel).port1.onmessage=function(P){S(P.data)},function(P){f.port2.postMessage(P)}):d&&"onreadystatechange"in d.createElement("script")?(c=d.documentElement,function(P){var O=d.createElement("script");O.onreadystatechange=function(){S(P),O.onreadystatechange=null,c.removeChild(O),O=null},c.appendChild(O)}):function(P){setTimeout(S,0,P)},b.setImmediate=function(P){typeof P!="function"&&(P=new Function(""+P));for(var O=new Array(arguments.length-1),z=0;z<O.length;z++)O[z]=arguments[z+1];var L={callback:P,args:O};return p[m]=L,l(m),m++},b.clearImmediate=v}function v(P){delete p[P]}function S(P){if(g)setTimeout(S,0,P);else{var O=p[P];if(O){g=!0;try{(function(z){var L=z.callback,G=z.args;switch(G.length){case 0:L();break;case 1:L(G[0]);break;case 2:L(G[0],G[1]);break;case 3:L(G[0],G[1],G[2]);break;default:L.apply(o,G)}})(O)}finally{v(P),g=!1}}}}function C(P){P.source===a&&typeof P.data=="string"&&P.data.indexOf(h)===0&&S(+P.data.slice(h.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Wt<"u"?Wt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Wi)),Wi.exports}var F1=L1();const B1=M1(F1);var Hr={exports:{}},z1=Hr.exports,Ca;function j1(){return Ca||(Ca=1,(function(e,t){(function(n,r){r()})(z1,function(){function n(c,f){return typeof f>"u"?f={autoBom:!1}:typeof f!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),f={autoBom:!f}),f.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,f,h){var m=new XMLHttpRequest;m.open("GET",c),m.responseType="blob",m.onload=function(){l(m.response,f,h)},m.onerror=function(){console.error("could not download file")},m.send()}function i(c){var f=new XMLHttpRequest;f.open("HEAD",c,!1);try{f.send()}catch{}return 200<=f.status&&299>=f.status}function s(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var f=document.createEvent("MouseEvents");f.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(f)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Wt=="object"&&Wt.global===Wt?Wt:void 0,o=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(c,f,h){var m=a.URL||a.webkitURL,p=document.createElement("a");f=f||c.name||"download",p.download=f,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?s(p):i(p.href)?r(c,f,h):s(p,p.target="_blank")):(p.href=m.createObjectURL(c),setTimeout(function(){m.revokeObjectURL(p.href)},4e4),setTimeout(function(){s(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,f,h){if(f=f||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,h),f);else if(i(c))r(c,f,h);else{var m=document.createElement("a");m.href=c,m.target="_blank",setTimeout(function(){s(m)})}}:function(c,f,h,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof c=="string")return r(c,f,h);var p=c.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,d=/CriOS\/[\d]+/.test(navigator.userAgent);if((d||p&&g||o)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var C=b.result;C=d?C:C.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=C:location=C,m=null},b.readAsDataURL(c)}else{var v=a.URL||a.webkitURL,S=v.createObjectURL(c);m?m.location=S:location.href=S,m=null,setTimeout(function(){v.revokeObjectURL(S)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(Hr)),Hr.exports}var $1=j1();const U1=`# 1. API 協作規則\r
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
`,q1=`# 3. 日期與時間格式\r
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
`,W1=`# 4. 分頁資料格式\r
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
`,Y1=`# 9. 下拉選單 API\r
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
`,X1=`\uFEFF# Graph API 寄信

> 文件版本：1.0.2
> 建立日期：2026-05-08
> 適用環境：local / SIT / UAT
> 狀態：✅ Phase 2 驗收通過，整理為共用寄信架構規範

---

## 目錄

1. 背景說明
2. 架構定位
3. 架構概覽
4. Azure AD App Registration 資訊
5. 環境設定
6. 核心元件說明
7. 寄信執行流程
8. 新增寄信功能實作順序
9. 開發規範
10. 常見錯誤與排除方式
11. 資安注意事項
12. 同事交接清單
13. 測試驗收記錄

---

## 1. 背景說明

原本系統使用 SMTP（Gmail）寄信，改為透過 Microsoft Graph API 以 OAuth 2.0 Client Credentials 流程寄信。

| 項目 | 舊方式 | 新方式 |
|---|---|---|
| 協定 | SMTP / STARTTLS | HTTPS REST API |
| 驗證 | 帳號密碼 | OAuth 2.0 Client Credentials |
| 寄件人 | Gmail 帳號 | 企業信箱（指定 sender mailbox） |
| Admin Consent | 不需要 | ✅ 需要資訊部門核准 |
| 寄送方式 | SMTP 直接寄送 | Microsoft Graph API sendMail |

---

## 2. 架構定位

本功能是系統共用寄信架構，不是單一 API 專用。

後續只要系統有新的寄信功能，原則上都應沿用既有流程：

\`\`\`text
業務 API / Service
    ↓
建立 MailInfo
    ↓
透過 DatabaseMailService / MailProcess 寫入 MAIL_INFO
    ↓
排程 ScheduledMailSendJob 掃描待寄信資料
    ↓
GraphMailSender 透過 Microsoft Graph API 寄出
\`\`\`

### 核心原則

- 業務 Service **不應**直接呼叫 Microsoft Graph API
- 業務 Service **不應**自行取得 OAuth access token
- 業務 Service 只負責建立 \`MailInfo\` 並寫入 \`MAIL_INFO\`
- 實際寄送統一由 \`ScheduledMailSendJob\` 與 \`GraphMailSender\` 處理
- OAuth Token 統一由 \`GraphTokenService\` 管理與快取
- Graph API Request Body 統一由 \`GraphMailRequestFactory\` 轉換
- 寄信成功後統一更新 \`MAIL_INFO.status = 'Y'\`

---

## 3. 架構概覽

### 寄信流程

\`\`\`text
業務功能呼叫（例如 sendMailToUnit，或其他需要寄信的 Service）
        ↓
建立 MailInfo
        ↓
DatabaseMailService.apply() / applyReturnId()
        ↓ 寫入 DB
MAIL_INFO (status='N')
        ↓ 排程每 20 秒掃描
ScheduledMailSendJob.produceQueue()
        ↓ 排程每 30 秒消費
ScheduledMailSendJob.consumeQueue()
        ↓
GraphMailSender.send(mailInfo)
        ↓
GraphTokenService.getAccessToken()   → OAuth Token（含快取）
        ↓
GraphMailRequestFactory.build()      → MailInfo 轉 Graph API JSON
        ↓
POST https://graph.microsoft.com/v1.0/users/{sender}/sendMail
        ↓
MAIL_INFO status 更新為 'Y' ✅
\`\`\`

### 元件職責一覽

| 元件 | 位置 | 職責 |
|---|---|---|
| \`GraphMailProperties\` | \`config/properties/\` | 讀取 yml 設定，例如 tenant-id、client-id、client-secret、sender-address |
| \`GraphTokenService\` | \`service/sys/mail/\` | 取得 OAuth access token，含快取與到期前 60 秒更新機制 |
| \`GraphMailRequestFactory\` | \`service/sys/mail/\` | 將 MailInfo 轉換成 Graph API sendMail request body |
| \`GraphMailSender\` | \`service/sys/mail/\` | 呼叫 Graph API 實際寄信，含 401 自動重試 |
| \`ScheduledMailSendJob\` | \`schedule/\` | 批次排程：生產者每 20 秒掃描，消費者每 30 秒寄送 |
| \`DatabaseMailService\` | \`service/sys/\` | 業務層寄信入口，寫入 MAIL_INFO |
| \`MailProcess\` | \`service/sys/\` | 封裝信件模板、資料填充與 MailInfo 建立流程 |

---

## 4. Azure AD App Registration 資訊

> ⚠️ \`client-secret\` 為機敏資訊，請勿 commit 進 Git，請透過安全管道取得。

| 項目 | 值 | 機敏程度 |
|---|---|---|
| Tenant ID | \`54aa2fea-ecb3-4c71-80b3-de9a356e77c1\` | 🟡 內部資訊 |
| Client ID | \`b6df8fec-2fdb-4d95-8838-7f459ebbc891\` | 🟡 內部資訊 |
| Client Secret | 請向負責人或資訊部門取得「用戶端認證」 | 🔴 機敏，勿外洩 |
| Sender Address | \`NCATEST@iisigroup.com\` | 🟡 內部資訊 |
| OAuth Scope | \`https://graph.microsoft.com/.default\` | 🟡 內部資訊 |
| Required Permission | \`Mail.Send\` | 🟡 內部資訊 |
| Admin Consent 狀態 | ✅ Mail.Send 已核准 | — |

---

## 5. 環境設定

### 本機開發（application-local.yml）

> ⚠️ \`application-local.yml\` 已加入 \`.gitignore\`，不會被 commit。

\`\`\`yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: 請向負責人取得後填入此處
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: true   # 開啟後排程才會自動寄信，測試完建議改回 false
\`\`\`

### SIT / UAT 環境（application-sit.yml）

\`\`\`yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: \${GRAPH_CLIENT_SECRET}   # 環境變數注入，不可明文寫入
    sender-address: NCATEST@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: false   # SIT 預設關閉，避免誤發信
\`\`\`

### 排程開關說明

| \`scheduling.mail.enabled\` | 效果 |
|---|---|
| \`true\` | 排程啟動，自動掃描 \`MAIL_INFO\` 並寄信 |
| \`false\` | 排程不啟動，信件會寫入 DB 但不會寄出 |

---

## 6. 核心元件說明

### GraphTokenService

Token Endpoint：\`https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token\`

- Token 到期前 60 秒自動重新取得
- 收到 401 時呼叫 \`clearCache()\` 清除快取後重試一次
- 不可將 access token 完整寫入 log

### GraphMailRequestFactory

| \`MailInfo\` 欄位 | Graph API 對應 |
|---|---|
| \`mailSubject\` | \`message.subject\` |
| \`mailContent\` | \`message.body.content\`，自動判斷 HTML / Text |
| \`mailTo\` | \`message.toRecipients\`，逗號分隔，自動去重 |
| \`mailCc\` | \`message.ccRecipients\` |
| \`mailBcc\` | \`message.bccRecipients\` |
| 附件（DB） | \`message.attachments\`，base64 編碼 |

### GraphMailSender

\`\`\`text
取得 token → 呼叫 Graph API
    → 若 401 → clearCache() → 重新取 token → 重試一次
    → 若成功 → 回傳成功
    → 若其他錯誤 → 拋出 GraphMailException
\`\`\`

---

## 7. 寄信執行流程

### Step 1：業務層寫入 MAIL_INFO

\`\`\`java
// 方式 A：直接 apply，不需要 ID
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailSubject("信件主旨");
mailInfo.setMailContent("<p>信件內容</p>");
databaseMailService.apply(mailInfo);

// 方式 B：applyReturnId，需要後續處理附件時使用
databaseMailService.applyReturnId(mailInfo);
// mailInfo.getId() 已有值，可用來新增附件記錄
\`\`\`

### Step 2：排程自動寄信

| 排程 | 職責 |
|---|---|
| 每 20 秒 | \`produceQueue()\` 從 DB 撈 \`status='N'\` 的信放入 Queue |
| 每 30 秒 | \`consumeQueue()\` 從 Queue 取信，呼叫 \`GraphMailSender.send()\` |
| 寄送成功 | 更新 \`MAIL_INFO.status = 'Y'\` |
| 寄送失敗 | 記錄 log，不影響其他信件繼續處理 |

### Step 3：確認寄出

\`\`\`sql
SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
ORDER BY CREATION_DATE DESC;
-- STATUS: N=待寄出 / Y=已寄出 / X=已作廢
\`\`\`

---

## 8. 新增寄信功能實作順序

**Step 1** — 確認寄信觸發點（哪個業務事件需要寄信）

**Step 2** — 確認收件人來源（TO / CC / BCC 從哪裡取得）；查無收件人時直接回傳訊息，不寫入 MAIL_INFO

**Step 3** — 建立 MailInfo；\`mailTo\` 必填；CC 不可拆成沒有 TO 的獨立筆

**Step 4** — 寫入 MAIL_INFO
\`\`\`java
databaseMailService.apply(mailInfo);           // 不需要 ID
databaseMailService.applyReturnId(mailInfo);   // 需要 ID（例如附件）
mailProcess.execute("TemplateName", dataMap);  // 使用信件模板
\`\`\`

**Step 5** — 由排程自動寄出，業務功能不需直接呼叫 \`GraphMailSender\`

**Step 6** — 驗證：MAIL_TO 正確、CC 未被拆成空 TO 資料、STATUS 由 N → Y、實際信箱收到信

---

## 9. 開發規範

### 正確的 MailInfo 設定方式

\`\`\`java
// ✅ 正確：一筆 MailInfo，TO 和 CC 寫在同一筆
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailCc("cc@example.com");
databaseMailService.setCommonMailInfo(mailInfo);
databaseMailService.apply(mailInfo);
\`\`\`

\`\`\`java
// ❌ 錯誤：將 CC 拆成獨立一筆，且沒有 mailTo
// → mailTo=null 的那筆永遠寄不出去，排程無限重試！
MailInfo ccMailInfo = new MailInfo();
ccMailInfo.setMailCc("cc@example.com");
databaseMailService.apply(ccMailInfo);
\`\`\`

### 防呆規範（必須加入）

\`\`\`java
// 防呆1：查無收件對象時，提早回傳
if (receiverList == null || receiverList.isEmpty()) {
    log.warn("查無符合條件的收件者，不寄出任何信件");
    return ReturnMessage.getFailedInstance("查無符合條件的收件者，未寄出任何信件", null);
}

// 防呆2：信箱為空時跳過
for (Receiver receiver : receiverList) {
    if (StringUtils.isBlank(receiver.getEmail())) {
        log.warn("帳號={} 信箱為空，跳過寄信", receiver.getAccount());
        continue;
    }
}
\`\`\`

---

## 10. 常見錯誤與排除方式

### Graph API 錯誤碼

| HTTP 狀態碼 | 常見原因 | 建議處理 |
|---|---|---|
| \`400 Bad Request\` | request body 格式錯誤、收件人格式錯誤、附件 base64 錯誤 | 檢查 GraphMailRequestFactory 產出的 JSON、收件人 email、附件內容 |
| \`401 Unauthorized\` | access token 遺失 / 過期 / 無效，或 client-secret 錯誤 | 確認 tenant-id / client-id / client-secret；系統自動重試一次 |
| \`403 Forbidden\` | Mail.Send 權限不足或未完成 Admin Consent | 請資訊部門確認 Azure App Registration 的 Mail.Send 權限 |
| \`404 Not Found\` | sender mailbox 不存在或 sender address 錯誤 | 確認 sender-address 是否為可寄信的 Exchange mailbox |
| \`429 Too Many Requests\` | 短時間內請求過多，Graph API 節流 | 依 Retry-After 秒數等待後重試 |
| \`500 / 502 / 503 / 504\` | Microsoft Graph 或 Microsoft 365 服務端暫時異常 | retry with backoff；持續發生請資訊部門確認服務狀態 |

### 排程無限重試（mailTo=null）

\`\`\`sql
-- 查看待寄出記錄
SELECT ID, MAIL_TO, MAIL_CC, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = 'N'
ORDER BY CREATION_DATE DESC;

-- 確認是異常資料後，將其作廢（建議加日期條件）
UPDATE MAIL_INFO
SET STATUS = 'X', MODIFY_USER = 'MANUAL_CANCEL', MODIFY_DATE = GETDATE()
WHERE STATUS = 'N'
  AND CREATION_DATE >= '2026-05-07';
\`\`\`

---

## 11. 資安注意事項

| 項目 | 規範 |
|---|---|
| \`client-secret\` | 🔴 絕對不可 commit 進 Git |
| \`access_token\` | 🔴 不可完整寫入 log |
| \`application-local.yml\` | 已加入 \`.gitignore\`，本機設定不會上傳 |
| \`GraphManualIntegrationTest.java\` | 若含明文 secret，應加入 \`.gitignore\` |
| SIT / UAT 的 secret | 透過環境變數 \`\${GRAPH_CLIENT_SECRET}\` 注入，由 IT / DevOps 設定 |
| 完整憑證清單 | 參閱 **azure_graph_mail_server_credentials_inventory_full.md**，向 **PG Leader 或 PM** 取得 |

---

## 12. 同事交接清單

| 資訊 | 說明 | 建議窗口 |
|---|---|---|
| Client Secret / 用戶端認證 | 實際填入 client-secret 的值 | 負責人、資訊部門 |
| SIT / UAT \`GRAPH_CLIENT_SECRET\` 設定 | 部署環境的 secret 注入 | IT / DevOps |
| Mail.Send Admin Consent | 確認 Azure 權限已核准 | 資訊部門 / Azure AD 管理者 |
| Sender mailbox 狀態 | 確認寄件信箱存在且可使用 | 資訊部門 / Exchange 管理者 |
| 排程開關 | 確認各環境是否允許自動寄信 | PM / SA / IT / DevOps |

---

## 13. 測試驗收記錄

| 階段 | 測試類別 | 日期 | 結果 |
|---|---|---|---|
| Phase 1：取得 OAuth Token | \`GraphTokenServiceCacheTest\`（2 tests） | 2026-05-06 | ✅ Token 取得成功，快取機制正常 |
| Phase 2：完整寄信測試 | \`GraphManualIntegrationTest\` | 2026-05-07 | ✅ 202 Accepted，收件信箱確認收到 |
| 整合測試：sendMailToUnit | \`POST /QSP042b02/sendMailToUnit\` | 2026-05-07 | ✅ 寄出完成，CC Bug 已修正，防呆已新增 |

> \`sendMailToUnit\` 是本次驗收使用的業務 API 範例，後續其他寄信功能仍應沿用相同的共用流程。

---

> 💡 **一句話總結：** 後續任何需要寄信的業務功能，建立 \`MailInfo\` 並寫入 \`MAIL_INFO\`，由排程與 \`GraphMailSender\` 統一透過 Microsoft Graph API 寄送即可，不需在各業務 API 中自行呼叫 Graph API 或取得 OAuth Token。\r
`,Q1=`# 頁面權限\r
\r
> 建立日期：2026-05-08\r
> 適用：所有後端工程師，包含接手新功能開發者\r
\r
---\r
\r
## 目錄\r
\r
1. 整體架構\r
2. 核心資料表\r
3. 角色（Role）系統\r
4. URI 比對規則（normalization）\r
5. 快取機制\r
6. 新增頁面權限 SOP（Step 1～5）\r
7. VISIBILITY vs RDSYS_PERMISSION_USER 使用時機\r
8. 前端權限與頁面路由對應機制\r
9. 常見錯誤排查\r
10. 異動驗證 Checklist\r
11. 主要程式碼位置速查\r
\r
---\r
\r
## 1. 整體架構\r
\r
\`\`\`text\r
HTTP 請求\r
    │\r
    ▼\r
[1] JwtTokenFilter              → 驗證 JWT Token，解析使用者身份，注入 SecurityContext\r
    │\r
    ▼\r
[2] Spring Security             → 確認使用者是否已登入（hasAnyAuthority 規則）\r
    │\r
    ▼\r
[3] WebUriAuthorizationFilter   → 比對請求 URI 與使用者角色擁有的 FUNC_CODE，決定是否放行\r
    │\r
    ▼\r
[4] Controller / Service        → 業務邏輯內部可再依角色細分行為（如 isRdssOffice()）\r
\`\`\`\r
\r
---\r
\r
## 2. 核心資料表\r
\r
### RDSYS_PERMISSION（功能頁面主檔）\r
\r
Entity：\`moi.rdss.platform.entity.RdsysPermission\`\r
\r
| 欄位 | 型別 | 說明 |\r
|---|---|---|\r
| \`SN\` | DECIMAL(10) | 主鍵，流水號 |\r
| \`FUNC_CODE\` | VARCHAR(15) | 功能代碼（如 QSP042B02）— 核心欄位 |\r
| \`ACTION_PATH\` | NVARCHAR(60) | 功能路徑，對應前端頁面路由。依系統慣例填入 FUNC_CODE 的值，確保選單連結路徑一致 |\r
| \`NAME_TEXT\` | NVARCHAR(80) | 選單顯示名稱 |\r
| \`PARENT_SN\` | DECIMAL(10) | 上層選單的 SN（NULL 表示根節點） |\r
| \`ITEM_ORDER\` | DECIMAL(6) | 選單排序 |\r
| \`VISIBILITY\` | DECIMAL(1) | 全域顯示開關：1 = 開放，0 = 全域關閉 |\r
| \`LINK_DISABLE\` | DECIMAL(1) | 連結是否停用 |\r
| \`CERT_USAGE\` | DECIMAL(2) | 是否啟用憑證：0=否，1=是，-1=強制 |\r
\r
### RDSYS_PERMISSION_USER（角色與功能對應表）\r
\r
Entity：\`moi.rdss.platform.entity.RdsysPermissionUser\`\r
\r
> ⚠️ 重要：\r
> - \`ACCOUNT\` 欄位儲存字串 \`'NULL'\`（4個字元），不是 SQL NULL，代表「適用整個 USER_TYPE」\r
> - \`S_TIME_ZONE\` / \`E_TIME_ZONE\` 為 NOT NULL 欄位，無時區限制時必須填字串 \`'NULL'\`\r
\r
| 欄位 | 說明 |\r
|---|---|\r
| \`PERMISSION_SN\` | 對應 RDSYS_PERMISSION.SN |\r
| \`USER_TYPE\` | 角色代碼，對應 Role enum 的 accType |\r
| \`ACCOUNT\` | 字串 \`'NULL'\` = 角色預設權限；填實際帳號 = 個人特殊權限 |\r
| \`START_TIME\` / \`STOP_TIME\` | 權限起迄時間（可為 SQL NULL） |\r
| \`S_TIME_ZONE\` / \`E_TIME_ZONE\` | NOT NULL 欄位，無時區限制時填字串 \`'NULL'\` |\r
\r
---\r
\r
## 3. 角色（Role）系統\r
\r
位置：\`moi.rdss.platform.enumeration.Role\`\r
\r
### 主要角色（RoleType = T）\r
\r
| accType | Role 名稱 | 說明 |\r
|---|---|---|\r
| 2 | ROLE_NCA | 研發替代役管理帳號 |\r
| 3 | ROLE_NCA_DIRECTOR | 役政司主管帳號 |\r
| 4 | ROLE_COMPANY | 用人單位 |\r
| 11 | ROLE_STUDENT | 學生 |\r
| 14 | ROLE_COMPANY_ASKING | 員額申請單位 |\r
| 17 | ROLE_RDSS_OFFICE | 專案辦公室 |\r
| 18 | ROLE_RDSSMAN | 研發替代役男 |\r
| 21 | ROLE_RDSS_OFFICE_PARTNER | 合作單位 |\r
| 23 | ROLE_NCA_NORMAL | 內政部一般帳號 |\r
\r
### 功能權限角色（RoleType = F）\r
\r
| accType | Role 名稱 | 說明 |\r
|---|---|---|\r
| 29 | ROLE_RDSS_OFFICE_SYSOP | 專案辦公室系統管理人員 |\r
| 30 | ROLE_RDSS_OFFICE_ADMIN | 專案辦公室管理人員 |\r
| 60 | ROLE_REC_UNIT | 收件執行單位 |\r
| 61 | ROLE_EXAM_HANDLE_UNIT | 審查作業執行單位 |\r
| 90 | ROLE_RFM_ADMIN | 基金管理負責人 |\r
| 181 | ROLE_QSP_ADMIN | 帳號啟用權限 |\r
\r
---\r
\r
## 4. URI 比對規則（normalization）\r
\r
\`WebUriAuthorizationFilter\` 將請求 URI 正規化後，與 FUNC_CODE 前 6 碼做 \`startsWith\` 比對。\r
\r
> ⚠️ 關鍵：只取 FUNC_CODE 前 6 碼，代表同模組下所有子頁面共用模組前綴授權。\r
\r
\`\`\`java\r
// 例：/adm_011b04/showPermissions\r
// 1. 去除開頭 '/'   → adm_011b04/showPermissions\r
// 2. 轉大寫         → ADM_011B04/SHOWPERMISSIONS\r
// 3. 去除第 4 位 '_' → ADM011B04/SHOWPERMISSIONS\r
// 比對 FUNC_CODE 前 6 碼：ADM011 → startsWith 符合 ✅\r
\r
private String normalization(String str) {\r
    StringBuilder sb = new StringBuilder(StringUtils.upperCase(str));\r
    if (sb.length() > 1 && sb.charAt(0) == '/') sb.deleteCharAt(0);\r
    if (sb.length() > 3 && sb.charAt(3) == '_') sb.deleteCharAt(3);\r
    return sb.toString();\r
}\r
\`\`\`\r
\r
---\r
\r
## 5. 快取機制\r
\r
> ⚠️ \`functionCodesCacheStore\` 過期時間為 **7 天**，登出登入不會清除。\r
> 修改 \`RDSYS_PERMISSION_USER\` 後，必須重啟服務（Jenkins 重新部署）才會生效。\r
\r
| 快取 | Key | Value | 用途 |\r
|---|---|---|---|\r
| \`authenticationCacheStore\` | account | Authentication | 快取使用者 Authentication |\r
| \`functionCodesCacheStore\` | role (accType string) | List\\<String\\> | 快取每個 Role 對應的 FUNC_CODE 前 6 碼 |\r
\r
---\r
\r
## 6. 新增頁面權限 SOP\r
\r
### Step 1　確認 FUNC_CODE 命名\r
\r
格式：\`{模組前綴 3碼}{功能群組 3碼}{頁面代碼 3碼}\`，例如 \`QSP042B03\`\r
\r
| 前綴 | 模組說明 |\r
|---|---|\r
| RDP | 一般公開頁面 |\r
| ADM | 行政管理 |\r
| PNR | 員額申請／審查 |\r
| QSP | 甄選作業 |\r
| REM | 役男管理 |\r
| MTM | 管訓作業 |\r
| PTM | 役男薪資 |\r
| AEP | 績效評核 |\r
| RFM | 基金管理 |\r
\r
情境 B — 查詢未使用群組代碼：\r
\r
\`\`\`sql\r
SELECT DISTINCT SUBSTRING(FUNC_CODE, 1, 6) AS GROUP_CODE\r
FROM RDSYS_PERMISSION\r
WHERE FUNC_CODE LIKE 'QSP%'\r
ORDER BY GROUP_CODE;\r
\`\`\`\r
\r
### Step 2　在 RDSYS_PERMISSION 新增頁面資料\r
\r
> ⚠️ \`ACTION_PATH\` 依系統慣例填入 FUNC_CODE 的值，確保選單連結指向正確路徑。\r
> **注意**：\`normalization\` 比對的對象是實際 HTTP 請求 URI（即 Controller 的 \`@RequestMapping\` 路徑），不是 \`ACTION_PATH\` 欄位本身。導致 403 的直接原因是 Controller 路徑未對應 FUNC_CODE，而非 ACTION_PATH 設錯。\r
\r
\`\`\`sql\r
SELECT MAX(SN) FROM RDSYS_PERMISSION;\r
SELECT * FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03';\r
\r
INSERT INTO RDSYS_PERMISSION (\r
    SN, FUNC_CODE, ACTION_PATH, NAME_TEXT, DESCRIPTION,\r
    PARENT_SN, ITEM_ORDER, VISIBILITY, LINK_DISABLE, LINK_PARAMETER, CERT_USAGE\r
) VALUES (\r
    999,\r
    'QSP042B03',\r
    'QSP042B03',  -- ★ ACTION_PATH = FUNC_CODE\r
    '新頁面名稱', '功能說明文字',\r
    (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B02'),\r
    10, 1, 0, NULL, 0\r
);\r
\`\`\`\r
\r
### Step 3　在 RDSYS_PERMISSION_USER 新增角色權限\r
\r
\`\`\`sql\r
SELECT * FROM RDSYS_PERMISSION_USER\r
WHERE PERMISSION_SN = (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03')\r
  AND USER_TYPE = 17;\r
\r
INSERT INTO RDSYS_PERMISSION_USER (\r
    PERMISSION_SN, USER_TYPE, ACCOUNT, START_TIME, STOP_TIME, S_TIME_ZONE, E_TIME_ZONE\r
) VALUES (\r
    (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03'),\r
    17, 'NULL', NULL, NULL, 'NULL', 'NULL'\r
);\r
\`\`\`\r
\r
### Step 4　建立 Controller\r
\r
\`\`\`java\r
// normalization('/QSP042B03/queryList') → 'QSP042B03/QUERYLIST'\r
// findFunctionCodesByRole 回傳前 6 碼：'QSP042'\r
// startsWith 符合 ✅\r
\r
@RestController\r
@RequestMapping("/QSP042B03")\r
public class Qsp042b03Controller {\r
    @PostMapping("/queryList")\r
    public ResponseEntity<?> queryList(...) { ... }\r
}\r
\`\`\`\r
\r
### Step 5　Service 內的角色細分（選用）\r
\r
\`\`\`java\r
AccountDetails accountDetails = (AccountDetails) authentication.getPrincipal();\r
\r
if (accountDetails.isRdssOffice()) {\r
    // 專案辦公室：可看全部資料\r
} else if (accountDetails.isNCAAccount()) {\r
    // 役政司：只能看自己管轄的資料\r
}\r
\`\`\`\r
\r
---\r
\r
## 7. VISIBILITY vs RDSYS_PERMISSION_USER 使用時機\r
\r
| 需求 | 應調整的位置 |\r
|---|---|\r
| 讓某個角色看不到某頁面 | 刪除 RDSYS_PERMISSION_USER 中該角色的對應資料 |\r
| 讓某個特定帳號才能看到 | 在 RDSYS_PERMISSION_USER 中加入指定 ACCOUNT |\r
| 讓所有角色都看不到（暫停功能） | 將 RDSYS_PERMISSION.VISIBILITY 設為 0 |\r
| 恢復頁面可見 | 將 RDSYS_PERMISSION.VISIBILITY 設為 1，並確認 RDSYS_PERMISSION_USER 有對應資料 |\r
\r
> 🔴 不要用 \`VISIBILITY = 0\` 調整單一角色權限，這是全域關閉。\r
\r
---\r
\r
## 8. 前端權限與頁面路由對應機制\r
\r
### 整體流程\r
\r
\`\`\`text\r
登入\r
 ↓\r
後端 /RDP022A01/permission 回傳 permissions 陣列\r
 ↓\r
前端將每筆 actionPath 轉換成 href（存入 Local Storage）\r
 ↓\r
使用者進入任一頁面\r
 ↓\r
前端比對 href === 當前路由路徑\r
 ↓\r
相符 → 有權限；不符 → 顯示 403\r
\`\`\`\r
\r
### 前端轉換邏輯（src/store/auth.js）\r
\r
\`\`\`js\r
href: permission.actionPath?.replace('Action.do', '')\r
\r
hasPermission = path =>\r
  flattenMenus.some(({ href }) => href === path)\r
\`\`\`\r
\r
### 前端路由產生規則（unplugin-vue-router File-based Routing）\r
\r
| 前端檔案位置 | 自動產生路由 |\r
|---|---|\r
| \`src/private/std/studentResumeQuery/index.vue\` | \`/std/studentResumeQuery\` |\r
| \`src/private/work/personQuery/index.vue\` | \`/work/personQuery\` |\r
| \`src/private/test/tst001a01/index.vue\` | \`/test/tst001a01\` |\r
\r
### 後端 actionPath 填寫規則\r
\r
格式：\`/{模組前綴}/{頁面名稱}Action.do\`，replace 後必須與前端路由**完全相符**。\r
\r
| 後端 actionPath | replace 後 | 對應前端檔案 |\r
|---|---|---|\r
| \`/std/studentResumeQueryAction.do\` | \`/std/studentResumeQuery\` | \`src/private/std/studentResumeQuery/index.vue\` |\r
| \`/work/personQueryAction.do\` | \`/work/personQuery\` | \`src/private/work/personQuery/index.vue\` |\r
| \`/test/tst001a01Action.do\` | \`/test/tst001a01\` | \`src/private/test/tst001a01/index.vue\` |\r
\r
### 現有模組前綴對照表\r
\r
| 模組前綴 | 對應功能 |\r
|---|---|\r
| \`/admin\` | 系統管理 |\r
| \`/aep\` | 管考獎懲 |\r
| \`/auth\` | 帳號驗證 |\r
| \`/info\` | 資訊需求 |\r
| \`/mtm\` | 受訓管理 |\r
| \`/pnask\` | 員額申請 |\r
| \`/pnexam\` | 員額審查 |\r
| \`/qsp\` | 甄選作業 |\r
| \`/rem\` | 成效管理 |\r
| \`/rfm\` | 基金管理 |\r
| \`/std\` | 甄選 / 學生 |\r
| \`/work\` | 役男管理 |\r
| \`/test\` | 測試用（需同步更新 authPaths） |\r
\r
### actionPath 常見錯誤\r
\r
\`\`\`text\r
// ❌ 後端 actionPath = "TST001A01"\r
"TST001A01" → replace 後仍為 "TST001A01"（無 / 開頭）→ 永遠比對不到 → 403\r
\r
// ✅ 後端 actionPath = "/test/tst001a01Action.do"\r
"/test/tst001a01Action.do" → replace 後為 "/test/tst001a01" → 符合前端路由 → 通過\r
\`\`\`\r
\r
修正後同步事項：\r
1. 後端將 \`actionPath\` 改為正確格式\r
2. 前端建立對應路由檔案\r
3. 前端 \`src/router/index.js\` 的 \`authPaths\` 加入新模組前綴\r
4. **必須重新登入**以刷新 Local Storage 中的 permissions 快取\r
\r
---\r
\r
## 9. 常見錯誤排查\r
\r
| 症狀 | 可能原因 | 解法 |\r
|---|---|---|\r
| DB 設定正確但仍 403 | Controller \`@RequestMapping\` 路徑未對應 FUNC_CODE | normalization 比對的是請求 URI，Controller 路徑必須使 \`normalization(URI).startsWith(funcCode前6碼)\` 成立。ACTION_PATH 依慣例填 FUNC_CODE 值是為了確保選單連結一致，兩者需同步維護 |\r
| DB 設定正確但仍 403 | 快取尚未清除 | functionCodesCacheStore 過期 7 天，需重啟服務 |\r
| DB 設定正確但仍 403 | ACCOUNT 填的是 SQL NULL | 應填字串 \`'NULL'\`（4個字元） |\r
| DB 設定正確但仍 403 | VISIBILITY = 0 | 全域關閉，將 VISIBILITY 改回 1 |\r
| Menu Tree 沒有顯示新頁面 | VISIBILITY 或 RDSYS_PERMISSION_USER 未設定 | 確認 VISIBILITY = 1 且有對應角色資料 |\r
| 前端一直 403 | actionPath 無 \`/\` 開頭 | 後端改為 \`/模組/頁面Action.do\` 格式 |\r
| 前端一直 403 | 新模組未加入 authPaths | 前端 \`src/router/index.js\` 補上新模組前綴 |\r
| 後端改了但前端還是舊權限 | permissions 快取於 Local Storage | 必須重新登入 |\r
\r
---\r
\r
## 10. 異動驗證 Checklist\r
\r
\`\`\`sql\r
SELECT * FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03';\r
SELECT * FROM RDSYS_PERMISSION_USER\r
WHERE PERMISSION_SN = (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03');\r
\`\`\`\r
\r
- 以目標角色帳號登入，確認 Menu Tree 是否顯示新頁面\r
- 直接輸入完整 URL，確認是否可進入（不被 403 擋住）\r
- 以無授權角色嘗試存取，確認是否回傳 403\r
- 確認快取是否需要清除（測試環境若未重啟，可能使用舊快取）\r
- 若有新增 API endpoint，確認 normalization 規則可正確比對\r
- 前端確認 \`actionPath\` 格式、\`authPaths\`、路由檔案三者一致\r
- 重新登入刷新 permissions 快取後再次驗證\r
\r
---\r
\r
## 11. 主要程式碼位置速查\r
\r
| 元件 | 路徑 |\r
|---|---|\r
| 安全設定入口 | \`config/SecurityConfig.java\` |\r
| JWT 解析 Filter | \`config/filter/JwtTokenFilter.java\` |\r
| URI 權限 Filter | \`config/filter/WebUriAuthorizationFilter.java\` |\r
| 授權核心 Service | \`service/AuthorizationService.java\` |\r
| 使用者載入 Service | \`service/AuthenticationService.java\` |\r
| 使用者詳細資料模型 | \`model/AccountDetails.java\` |\r
| 角色 Enum | \`enumeration/Role.java\` |\r
| 免驗證路徑清單 | \`Constants.java\` |\r
| 頁面主檔 Entity | \`entity/RdsysPermission.java\` |\r
| 角色權限對應 Entity | \`entity/RdsysPermissionUser.java\` |\r
| 角色權限查詢（核心 SQL） | \`repository/impl/RdsysPermissionRepositoryCustImpl.java\` |\r
| 帳號角色查詢 | \`repository/AccountRepository.java → selectRolesByAccount\` |\r
| 權限管理後台 | \`service/adm/Adm011b04Service.java\` |\r
| 前端權限 store | \`src/store/auth.js\` |\r
| 前端路由保護設定 | \`src/router/index.js → authPaths\` |\r
`,J1=[{name:"01-API協作規則.md",content:U1},{name:"02-參數一致性.md",content:H1},{name:"03-日期與時間格式.md",content:q1},{name:"04-分頁資料格式.md",content:W1},{name:"05-API呼叫方式與後端輸入驗證.md",content:V1},{name:"06-文字欄位長度.md",content:G1},{name:"07-上傳格式.md",content:K1},{name:"08-下載格式.md",content:Z1},{name:"09-下拉選單API.md",content:Y1},{name:"10-GraphAPI寄信.md",content:X1},{name:"11-頁面權限.md",content:Q1}];async function ev(){const e=new B1,t=e.folder("RDSS專案-前後端協作規範");for(const r of J1)t.file(r.name,r.content);const n=await e.generateAsync({type:"blob"});$1.saveAs(n,"RDSS專案-前後端協作規範.zip")}const tv=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},nv={class:"min-w-0"},rv={class:"hero sticky top-0 z-50 bg-gradient-to-b from-indigo-50 to-slate-50 border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-8"},iv={class:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3"},sv={class:"flex items-center gap-3 shrink-0"},ov=["disabled"],av={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},lv={key:1,class:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24"},cv={class:"flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8"},uv={class:"hidden lg:block lg:flex-shrink-0 lg:w-64 lg:sticky lg:top-44 lg:self-start lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto"},fv={class:"bg-white rounded-xl p-5 shadow-lg"},dv={class:"space-y-1"},hv=["href","onClick"],pv={class:"p-4 space-y-2"},mv=["href","onClick"],gv={id:"sections",class:"flex-1 min-w-0 w-full max-w-full overflow-x-hidden"},vv={class:"flex items-center justify-between w-full"},bv={class:"text-lg md:text-xl lg:text-2xl font-bold"},_v={__name:"Home",setup(e){var p;const t=We(!1),n=async()=>{t.value=!0;try{await ev()}finally{t.value=!1}},r=[{id:"section-1",title:"1. API 協作規則",component:rt(()=>it(()=>import("./ApiFormat-C-UmCCxi.js"),[]))},{id:"section-2",title:"2. 參數一致性",component:rt(()=>it(()=>import("./ResponseStructure-BPb1zcFn.js"),[]))},{id:"section-3",title:"3. 日期與時間格式",component:rt(()=>it(()=>import("./DateTimeFormat-CnsEzhEx.js"),[]))},{id:"section-4",title:"4. 分頁資料格式",component:rt(()=>it(()=>import("./PaginationFormat-DjQQjXAy.js"),[]))},{id:"section-5",title:"5. API 呼叫方式",component:rt(()=>it(()=>import("./ApiCallMethod-DzLYuoEg.js"),[]))},{id:"section-6",title:"6. 文字欄位長度",component:rt(()=>it(()=>import("./TextFieldLength-TZR4n0uZ.js"),[]))},{id:"section-7",title:"7. 上傳格式",component:rt(()=>it(()=>import("./UploadFormat-CMlwtbrO.js"),[]))},{id:"section-8",title:"8. 下載格式",component:rt(()=>it(()=>import("./DownloadFormat-erhVYM8Z.js"),[]))},{id:"section-9",title:"9. 下拉選單 API (待討論)",component:rt(()=>it(()=>import("./DropdownApi-NGoC_sPz.js"),[]))},{id:"section-10",title:"10. Graph API 寄信",component:rt(()=>it(()=>import("./GraphMailSpec-elz5_OIL.js"),[]))},{id:"section-11",title:"11. 頁面權限",component:rt(()=>it(()=>import("./PagePermission-BNZYDspn.js"),[]))},{id:"appendix",title:"12. 測試環境",component:rt(()=>it(()=>import("./TestEnvironment-CBVVOTF6.js"),[]))},{id:"section-last",title:"13. 測試帳號",component:rt(()=>it(()=>import("./TestAccounts-CKiKF7ux.js"),__vite__mapDeps([0,1])))}],i=We(((p=r[0])==null?void 0:p.id)||""),s=We(!1);let a,o=null;const l=We([]),c=()=>{s.value=!s.value},f=g=>{i.value=g;const d=document.getElementById(g);if(d){if(g==="section-1"){window.scrollTo({top:0,behavior:"smooth"});return}const S=d.getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:S,behavior:"smooth"})}},h=g=>{f(g),c()},m=()=>{const d=r.map(v=>document.getElementById(v.id)).filter(Boolean);if(!d.length)return;let b=d[0];for(const v of d)if(v.getBoundingClientRect().top-140<=0)b=v;else break;i.value=b.id};return Cr(()=>{a=()=>{o||(o=requestAnimationFrame(()=>{m(),o=null}))},window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),m()}),Ds(()=>{a&&(window.removeEventListener("scroll",a),window.removeEventListener("resize",a)),o&&(cancelAnimationFrame(o),o=null)}),(g,d)=>(ct(),en("div",nv,[pe("header",rv,[d[6]||(d[6]=pe("nav",{class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3"},[pe("div",{class:"font-bold text-sm sm:text-base lg:text-lg tracking-wide break-words max-w-full"},"Frontend Development Guide")],-1)),pe("div",iv,[d[5]||(d[5]=pe("h2",{class:"text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words max-w-full"},"RDSS專案-前後端協作規範",-1)),pe("div",sv,[pe("button",{onClick:n,disabled:t.value,class:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},[t.value?(ct(),en("svg",lv,[...d[3]||(d[3]=[pe("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),pe("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):(ct(),en("svg",av,[...d[2]||(d[2]=[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])])),Xr(" "+Gn(t.value?"打包中...":"下載規範MD檔"),1)],8,ov),d[4]||(d[4]=pe("span",{class:"text-xs sm:text-sm text-gray-500"},"最後編輯日期：2026-05-08",-1))])])]),pe("div",cv,[pe("aside",uv,[pe("nav",fv,[d[7]||(d[7]=pe("div",{class:"text-xl font-bold mb-4 text-slate-600"},"目錄",-1)),pe("ul",dv,[(ct(),en(Le,null,Oi(r,b=>pe("li",{key:b.id},[pe("a",{href:`#${b.id}`,class:or(["block px-3 py-2.5 text-gray-600 no-underline rounded-lg transition-all duration-200 text-sm hover:bg-slate-100 hover:text-slate-700 hover:translate-x-1",{"bg-slate-100 text-slate-700 translate-x-1":i.value===b.id}]),onClick:Lo(v=>f(b.id),["prevent"])},Gn(b.title),11,hv)])),64))])])]),pe("div",{class:"lg:hidden fixed bottom-6 right-6 z-40"},[pe("button",{onClick:c,class:"bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"},[...d[8]||(d[8]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])])]),s.value?(ct(),en("div",{key:0,class:"lg:hidden fixed inset-0 w-screen bg-black bg-opacity-50 z-50",style:{height:"100vh"},onClick:c},[pe("div",{class:"absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto",style:{height:"100vh"},onClick:d[0]||(d[0]=Lo(()=>{},["stop"]))},[pe("div",{class:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"},[d[10]||(d[10]=pe("div",{class:"text-xl font-bold text-slate-700"},"目錄",-1)),pe("button",{onClick:c,class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[...d[9]||(d[9]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),pe("ul",pv,[(ct(),en(Le,null,Oi(r,b=>pe("li",{key:b.id},[pe("a",{href:`#${b.id}`,class:or(["block px-4 py-3 text-gray-600 no-underline rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-slate-700",{"bg-indigo-100 text-indigo-700 font-medium":i.value===b.id}]),onClick:v=>h(b.id)},Gn(b.title),11,mv)])),64))])])])):Vf("",!0),pe("main",gv,[Re(dt(c0),{"expanded-names":l.value,"onUpdate:expandedNames":d[1]||(d[1]=b=>l.value=b),"display-directive":"if","arrow-placement":"right"},{default:Cn(()=>[(ct(),en(Le,null,Oi(r,b=>Re(dt(d0),{key:b.id,name:b.id,id:b.id},{header:Cn(()=>[pe("div",vv,[pe("span",bv,Gn(b.title),1)])]),default:Cn(()=>[(ct(),dr(gf(b.component)))]),_:2},1032,["name","id"])),64))]),_:1},8,["expanded-names"])])]),d[11]||(d[11]=pe("footer",{class:"py-8 md:py-10 px-4 text-center text-gray-500 border-t border-gray-200"},[pe("p",{class:"text-sm md:text-base"},"© 2026 Frontend Communication Guide Template")],-1))]))}},yv=tv(_v,[["__scopeId","data-v-96d83090"]]),Sv=[{path:"/",name:"Home",component:yv}],wv=k1({history:u1("/frontend-development-guide/"),routes:Sv}),nu=Fd(E0);nu.use(wv);nu.mount("#app");export{_i as $,vi as A,un as B,He as C,Qa as D,xh as E,Le as F,Cv as G,Gf as H,oc as I,Ih as J,$s as K,Mn as L,hm as M,d0 as N,mc as O,Hs as P,dm as Q,ni as R,Hh as S,nf as T,Fn as U,Um as V,Qh as W,wc as X,Ar as Y,On as Z,tv as _,xv as a,ra as a0,bc as a1,Bn as a2,yc as a3,Ln as a4,gn as a5,pc as a6,hc as a7,cs as a8,dc as a9,e0 as aA,$o as aB,Ev as aC,Ov as aD,fd as aE,Kt as aF,pi as aG,Ch as aH,Zn as aI,Pv as aJ,Xg as aK,yh as aL,Lc as aM,m0 as aN,ac as aO,Oi as aP,Gn as aQ,Lo as aR,Vf as aS,Dg as aa,qh as ab,Yt as ac,Pr as ad,Ue as ae,Se as af,Pe as ag,ps as ah,Mc as ai,Iv as aj,Ws as ak,Vs as al,wi as am,Bc as an,je as ao,bi as ap,qs as aq,Er as ar,rl as as,lc as at,Hl as au,Bt as av,kv as aw,Oh as ax,tc as ay,Tv as az,Re as b,en as c,pe as d,Xr as e,c0 as f,Cr as g,Ds as h,me as i,Rv as j,Be as k,as as l,af as m,lf as n,ct as o,ze as p,Gt as q,We as r,zs as s,Xu as t,dt as u,rh as v,Cn as w,te as x,wh as y,_r as z};
