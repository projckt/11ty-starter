var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function l(e){try{o(t.next(e))}catch(r){i(r)}}function s(e){try{o(t["throw"](e))}catch(r){i(r)}}function o(e){e.done?n(e.value):a(e.value).then(l,s)}o((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return o([e,r])}}function o(l){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;a=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1];i=l;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(l);break}if(i[2])n.ops.pop();n.trys.pop();continue}l=r.call(e,n)}catch(s){l=[6,s];a=0}finally{t=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],l=0,s=i.length;l<s;l++,a++)t[a]=i[l];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="ps-pricing";var a=0;var i=false;var l=false;var s=typeof window!=="undefined"?window:{};var o=s.document||{head:{}};var f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var u=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var c=new WeakMap;var $=function(e){return c.get(e)};var v=e("r",(function(e,r){return c.set(r.$lazyInstance$=e,r)}));var h=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return c.set(e,r)};var d=function(e,r){return r in e};var m=function(e){return console.error(e)};var p=new Map;var g=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var l=p.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{p.set(i,e)}return e[a]}),m)};var y=new Map;var w=[];var b=[];var S=[];var _=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&f.$flags$&4){N(E)}else{f.raf(E)}}}};var R=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){m(n)}}e.length=0};var x=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){m(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var E=function(){a++;R(w);var e=(f.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;x(b,e);x(S,e);if(b.length>0){S.push.apply(S,b);b.length=0}if(i=w.length+b.length+S.length>0){f.raf(E)}else{a=0}};var N=function(e){return Promise.resolve().then(e)};var j=_(b,true);var C={};var U=function(e){e=typeof e;return e==="object"||e==="function"};var L=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var A=e("a",(function(){if(!(s.CSS&&s.CSS.supports&&s.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){f.$cssShim$=s.__stencil_cssshim;if(f.$cssShim$){return f.$cssShim$.initShim()}}))}return Promise.resolve()}));var P=e("p",(function(){{f.$cssShim$=s.__stencil_cssshim}var e=Array.from(o.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href;k(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var k=function(e,r){var n=L(t);try{s[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;s[n]=function(t){var i=new URL(t,e).href;var l=a.get(i);if(!l){var f=o.createElement("script");f.type="module";f.crossOrigin=r.crossOrigin;f.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));l=new Promise((function(e){f.onload=function(){e(s[n].m);f.remove()}}));a.set(i,l);o.head.appendChild(f)}return l}}};var O=function(e,r){if(e!=null&&!U(e)){return e}return e};var M="hydrated";var B="sty-id";var T=function(e,r){if(r===void 0){r=""}{return function(){return}}};var I=function(e,r){{return function(){return}}};var H=new WeakMap;var q=function(e,r,n){var t=y.get(e);if(u&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}y.set(e,t)};var z=function(e,r,n,t){var a=W(r.$tagName$);var i=y.get(a);e=e.nodeType===11?e:o;if(i){if(typeof i==="string"){e=e.head||e;var l=H.get(e);var s=void 0;if(!l){H.set(e,l=new Set)}if(!l.has(a)){{if(f.$cssShim$){s=f.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var u=s["s-sc"];if(u){a=u;l=null}}else{s=o.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var V=function(e,r,n){var t=T("attachStyles",r.$tagName$);var a=z(e.getRootNode(),r,n,e);t()};var W=function(e,r){return"sc-"+e};var F=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var l=false;var s=[];var o=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!U(a)){a=String(a)}if(i&&l){s[s.length-1].$text$+=a}else{s.push(i?G(null,a):a)}l=i}}};o(n);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=G(e,null);u.$attrs$=r;if(s.length>0){u.$children$=s}return u}));var G=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var Q={};var D=function(e){return e&&e.$tag$===Q};var J=function(e,r,n,t,a,i){if(n===t){return}var l=d(e,r);var o=r.toLowerCase();if(r==="class"){var u=e.classList;var c=X(n);var $=X(t);u.remove.apply(u,c.filter((function(e){return e&&!$.includes(e)})));u.add.apply(u,$.filter((function(e){return e&&!c.includes(e)})))}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(d(s,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(n){f.rel(e,r,n,false)}if(t){f.ael(e,r,t,false)}}else{var v=U(t);if((l||v&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var h=t==null?"":t;if(r==="list"){l=false}else if(n==null||e[r]!=h){e[r]=h}}else{e[r]=t}}catch(m){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!l||i&4||a)&&!v){t=t===true?"":t;{e.setAttribute(r,t)}}}};var K=/\s/;var X=function(e){return!e?[]:e.split(K)};var Y=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||C;var l=r.$attrs$||C;{for(t in i){if(!(t in l)){J(a,t,i[t],undefined,n,r.$flags$)}}}for(t in l){J(a,t,i[t],l[t],n,r.$flags$)}};var Z=function(e,r,n,t){var a=r.$children$[n];var i=0;var s;var f;if(a.$text$!==null){s=a.$elm$=o.createTextNode(a.$text$)}else{s=a.$elm$=o.createElement(a.$tag$);{Y(null,a,l)}if(a.$children$){for(i=0;i<a.$children$.length;++i){f=Z(e,a,i);if(f){s.appendChild(f)}}}}return s};var ee=function(e,r,n,t,a,i){var l=e;var s;for(;a<=i;++a){if(t[a]){s=Z(null,n,a);if(s){t[a].$elm$=s;l.insertBefore(s,r)}}}};var re=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;a.remove()}}};var ne=function(e,r,n,t){var a=0;var i=0;var l=r.length-1;var s=r[0];var o=r[l];var f=t.length-1;var u=t[0];var c=t[f];var $;while(a<=l&&i<=f){if(s==null){s=r[++a]}else if(o==null){o=r[--l]}else if(u==null){u=t[++i]}else if(c==null){c=t[--f]}else if(te(s,u)){ae(s,u);s=r[++a];u=t[++i]}else if(te(o,c)){ae(o,c);o=r[--l];c=t[--f]}else if(te(s,c)){ae(s,c);e.insertBefore(s.$elm$,o.$elm$.nextSibling);s=r[++a];c=t[--f]}else if(te(o,u)){ae(o,u);e.insertBefore(o.$elm$,s.$elm$);o=r[--l];u=t[++i]}else{{$=Z(r&&r[i],n,i);u=t[++i]}if($){{s.$elm$.parentNode.insertBefore($,s.$elm$)}}}}if(a>l){ee(e,t[f+1]==null?null:t[f+1].$elm$,n,t,i,f)}else if(i>f){re(r,a,l)}};var te=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var ae=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;var i=r.$text$;if(i===null){{{Y(e,r,l)}}if(t!==null&&a!==null){ne(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}ee(n,null,r,a,0,a.length-1)}else if(t!==null){re(t,0,t.length-1)}}else if(e.$text$!==i){n.data=i}};var ie=function(e,r,n,t){var a=r.$vnode$||G(null,null);var i=D(t)?t:F(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;ae(a,i)};var le=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var se=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=T("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var l=r.$lazyInstance$;var s=function(){return oe(e,r,n,l,t)};le(r,i);var o;if(t){{o=ve(l,"componentWillLoad")}}else{{o=ve(l,"componentWillUpdate")}}a();return he(o,(function(){return j(s)}))};var oe=function(e,r,n,t,a){var i=T("update",n.$tagName$);var l=e["s-rc"];if(a){V(e,n,r.$modeName$)}var s=T("render",n.$tagName$);{{ie(e,r,n,fe(t))}}if(f.$cssShim$){f.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(l){l.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var o=e["s-p"];var u=function(){return ue(e,r,n)};if(o.length===0){u()}else{Promise.all(o).then(u);r.$flags$|=4;o.length=0}}};var fe=function(e,r){try{e=e.render()}catch(n){m(n)}return e};var ue=function(e,r,n){var t=T("postUpdate",n.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(M)}t();{r.$onReadyResolve$(e);if(!a){$e()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){N((function(){return se(e,r,n,false)}))}r.$flags$&=~(4|512)}};var ce=function(e,r){{var n=$(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){se(e,n,r,false)}return t}};var $e=function(e){{o.documentElement.classList.add(M)}{f.$flags$|=2}};var ve=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){m(t)}}return undefined};var he=function(e,r){return e&&e.then?e.then(r):r()};var de=function(e,r){return $(e).$instanceValues$.get(r)};var me=function(e,r,n,t){var a=$(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;n=O(n);if(n!==l&&(!(s&8)||l===undefined)){a.$instanceValues$.set(r,n);if(o){if((s&(2|16))===2){se(i,a,t,false)}}}};var pe=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return de(this,t)},set:function(e){me(this,t,e,r)},configurable:true,enumerable:true})}}))}return e};var ge=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,l,s,o,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=g(t);if(!i.then)return[3,2];n=I();return[4,i];case 1:i=c.sent();n();c.label=2;case 2:if(!i.isProxied){pe(i,t,2);i.isProxied=true}a=T("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){m($)}{r.$flags$&=~8}a();l=W(t.$tagName$);if(!y.has(l)&&i.style){s=T("registerStyles",t.$tagName$);o=i.style;q(l,o,!!(t.$flags$&1));s()}c.label=3;case 3:f=r.$ancestorComponent$;u=function(){return se(e,r,t,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ye=function(e,r){if((f.$flags$&1)===0){var n=T("connectedCallback",r.$tagName$);var t=$(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){le(t,t.$ancestorComponent$=a);break}}}{N((function(){return ge(e,t,r)}))}}n()}};var we=function(e){if((f.$flags$&1)===0){var r=$(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var be=e("b",(function(e,r){if(r===void 0){r={}}var n=T();var t=[];var a=r.exclude||[];var i=o.head;var l=s.customElements;var u=i.querySelector("meta[charset]");var c=o.createElement("style");var v=[];var d=o.querySelectorAll("["+B+"]");var m;var p=true;Object.assign(f,r);f.$resourcesUrl$=new URL(r.resourcesUrl||"./",o.baseURI).href;if(r.syncQueue){f.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}var i=n.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;h(r);return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(p){v.push(this)}else{f.jmp((function(){return ye(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return we(e)}))};r.prototype.forceUpdate=function(){ce(this,n)};r.prototype.componentOnReady=function(){return $(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!l.get(i)){t.push(i);l.define(i,pe(s,n,1))}}))}));c.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";c.setAttribute("data-styles","");i.insertBefore(c,u?u.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{f.jmp((function(){return m=setTimeout($e,30,"timeout")}))}n()}))}}}));