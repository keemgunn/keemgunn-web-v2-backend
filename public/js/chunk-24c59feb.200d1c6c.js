(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24c59feb"],{"0b56":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"],i=["id","alt","src"],o=["innerHTML"],s={class:"large-image"},a=Object(r["i"])("div",{class:"large-image-header"},null,-1),l={class:"large-image-wrapper"},u=["id"],d=Object(r["i"])("div",{class:"large-image-footer"},null,-1);function f(e,t,n,f,b,h){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("div",{class:"image-wrapper",style:Object(r["r"])(e.imageWrapperStyle)},[Object(r["i"])("img",{id:"image-"+e.blockSeed.serial,class:Object(r["q"])(e.imgClass),style:Object(r["r"])(e.imgStyle),alt:this.contents.alt,src:e.imgPlacholder,onClick:t[0]||(t[0]=function(t){return e.getLargeImage()})},null,14,i)],4),e.contents.showAlt?(Object(r["v"])(),Object(r["h"])("p",{key:0,class:"image-alt typo-caption6",innerHTML:this.contents.alt},null,8,o)):Object(r["g"])("",!0),Object(r["I"])(Object(r["i"])("div",s,[a,Object(r["i"])("div",l,[Object(r["i"])("img",{id:"image-zoom-"+e.blockSeed.serial},null,8,u)]),d],512),[[r["F"],e.isZoom]])],14,c)}var b=n("1da1"),h=n("5530"),g=(n("96cf"),n("a9e3"),n("99af"),n("b64b"),n("5502")),m=n("c923"),v=n("cffd"),p=n("1c60"),j="Block_simpleText",O={blockSeed:Object,downstream:Object,position:Number},S=["trigger","mounted"];function y(){return{modalConfigs:{},el:{},imgEl:{},states:{},contents:{},url:"",imgPlacholder:n("ddcf"),initQueueEntry:{prefetched:!1,fullfetched:!1},isZoom:!1,zoomEl:{},imageWrapperStyle:{width:"100%",height:"auto"}}}var k=Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(g["c"])("api",["getContentsToken"])),Object(g["c"])("ui",["getContentsSuffix"])),{},{fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},imgClass:function(){try{return[this.contents.zoom?"img-zoomable":""]}catch(e){console.error("!error! ".concat(this.serial," :"),e)}},imgStyle:function(){try{return[{border:this.contents.border}]}catch(e){console.error("!error! ".concat(this.serial," :"),e)}}}),C=Object(h["a"])(Object(h["a"])(Object(h["a"])({},Object(g["d"])("moderator",["addToInitQueue","commitInitQueue"])),Object(g["b"])("api",["fetchImage"])),{},{serialize:function(e){return"".concat(this.serial,"_").concat(e)},isFullfilled:function(e){return this.initQueueEntry[e]},resolveQueue:function(e){this.initQueueEntry[e]=!0,this.commitInitQueue({pageName:"idas",taskSerial:this.serialize(e)})},prefetch:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchImage({element:e.imgEl,url:e.url,ext:e.contents.ext,suffix:"@_75x"}).then((function(t){e.resolveQueue("prefetched"),t||console.warn("!warning! prefetching image failed @".concat(e.serial)),e.fullfetch()}));case 1:case"end":return t.stop()}}),t)})))()},fullfetch:function(){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fetchImage({element:e.imgEl,url:e.url,ext:e.contents.ext,suffix:e.getContentsSuffix}).then((function(t){e.resolveQueue("fullfetched"),t||console.warn("!warning! fullfetching image failed @".concat(e.serial))}));case 1:case"end":return t.stop()}}),t)})))()},triggerEvent:v["b"],getCSSbyModal:m["a"],getLargeImage:function(){}}),x=[];function w(){for(var e=0,t=Object.keys(this.initQueueEntry);e<t.length;e++){var n=t[e];this.addToInitQueue({pageName:"idas",taskSerial:this.serialize(n)})}this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents,this.url=this.blockSeed.serial}function T(){var e=this;this.imgEl=document.querySelector("#image-"+this.blockSeed.serial),Object(p["b"])(this,x,this.blockSeed.injectTriggers),this.contents.zoom&&(this.zoomEl=document.querySelector("#image-zoom-"+this.blockSeed.serial),this.getLargeImage=function(){e.isZoom=!0,e.fetchImage({element:e.imgEl,url:e.url,ext:e.contents.ext,suffix:"@6x"})}),this.$emit("mounted"),this.getContentsToken&&this.prefetch()}Object(p["a"])(C,x);var E={getContentsToken:function(e){e&&this.prefetch()},getContentsSuffix:function(e){this.fetchImage({element:this.imgEl,url:this.url,ext:this.contents.ext,suffix:e})}},M={name:j,props:O,emits:S,data:y,computed:k,methods:C,created:w,mounted:T,watch:E},I=n("6b0d"),N=n.n(I);const _=N()(M,[["render",f]]);t["default"]=_},"10ca":function(e,t,n){var r={"./bodyText.vue":"3795","./cvItem.vue":"490c","./edgeFrame.vue":"b6f8","./idasFig-1.vue":"5388","./idasFigContainer.vue":"e71f","./idasMottoText.vue":"8ed2","./imageContainer.vue":"0b56","./lineVH.vue":"929d","./quote.vue":"1e7e","./simpleDictionary.vue":"2135","./simpleText.vue":"f1c4"};function c(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}var c=r[e];return n(c)}))}c.keys=function(){return Object.keys(r)},c.id="10ca",e.exports=c},1276:function(e,t,n){"use strict";var r=n("2ba4"),c=n("c65b"),i=n("e330"),o=n("d784"),s=n("44e7"),a=n("825a"),l=n("1d80"),u=n("4840"),d=n("8aa5"),f=n("50c4"),b=n("577e"),h=n("dc4a"),g=n("4dae"),m=n("14c3"),v=n("9263"),p=n("9f7f"),j=n("d039"),O=p.UNSUPPORTED_Y,S=4294967295,y=Math.min,k=[].push,C=i(/./.exec),x=i(k),w=i("".slice),T=!j((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=b(l(this)),o=void 0===n?S:n>>>0;if(0===o)return[];if(void 0===e)return[i];if(!s(e))return c(t,i,e,o);var a,u,d,f=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,p=new RegExp(e.source,h+"g");while(a=c(v,p,i)){if(u=p.lastIndex,u>m&&(x(f,w(i,m,a.index)),a.length>1&&a.index<i.length&&r(k,f,g(a,1)),d=a[0].length,m=u,f.length>=o))break;p.lastIndex===a.index&&p.lastIndex++}return m===i.length?!d&&C(p,"")||x(f,""):x(f,w(i,m)),f.length>o?g(f,0,o):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:c(t,this,e,n)}:t,[function(t,n){var r=l(this),o=void 0==t?void 0:h(t,e);return o?c(o,t,r,n):c(i,b(r),t,n)},function(e,r){var c=a(this),o=b(e),s=n(i,c,o,r,i!==t);if(s.done)return s.value;var l=u(c,RegExp),h=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(O?"g":"y"),v=new l(O?"^(?:"+c.source+")":c,g),p=void 0===r?S:r>>>0;if(0===p)return[];if(0===o.length)return null===m(v,o)?[o]:[];var j=0,k=0,C=[];while(k<o.length){v.lastIndex=O?0:k;var T,E=m(v,O?w(o,k):o);if(null===E||(T=y(f(v.lastIndex+(O?k:0)),o.length))===j)k=d(o,k,h);else{if(x(C,w(o,j,k)),C.length===p)return C;for(var M=1;M<=E.length-1;M++)if(x(C,E[M]),C.length===p)return C;k=j=T}}return x(C,w(o,j)),C}]}),!T,O)},"1c60":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var r=n("b85c"),c=n("3835"),i=(n("4fad"),n("ac1f"),n("5319"),n("b64b"),n("caad"),n("2532"),n("c923")),o={_mouseEnter:function(e){return"undefined"===typeof e&&e.$logg("!warning!","undefined object in param : context"),function(){try{Object(i["c"])(e,"hover",!0),Object(i["c"])(e,"touched",!1)}catch(t){console.error("!error!","@".concat(e.serial||"unknown")),console.error(t)}}},_mouseMove:function(e){return"undefined"===typeof e&&e.$logg("!warning!","undefined object in param : context"),function(){}},_mouseLeave:function(e){return"undefined"===typeof e&&e.$logg("!warning!","undefined object in param : context"),function(){try{Object(i["c"])(e,"hover",!1)}catch(t){console.error("!error!","@".concat(e.serial||"unknown")),console.error(t)}}},_touchStart:function(e){return"undefined"===typeof e&&e.$logg("!warning!","undefined object in param : context"),function(){try{Object(i["c"])(e,"hover",!0),Object(i["c"])(e,"touched",!0),setTimeout(e.mouseLeave,2e3)}catch(t){console.error("!error!","@".concat(e.serial||"unknown")),console.error(t)}}},_click:function(e){return"undefined"===typeof e&&e.$logg("!warning!","undefined object in param : context"),function(){}}};function s(e,t){try{for(var n=0,r=Object.entries(o);n<r.length;n++){var i=Object(c["a"])(r[n],2),s=i[0],a=i[1];e[s]=a;var l=s.replace("_","");t.push(l),e[l]=function(){}}}catch(u){console.error("!error!"),console.error(u)}}function a(e,t,n){try{var c,i=Object.keys(n),o=Object(r["a"])(t);try{var s=function(){var t=c.value,r=e["_"+t](e);if(i.includes(t)){var o=n[t](e);e[t]=function(){r(),o()}}else e[t]=function(){r()}};for(o.s();!(c=o.n()).done;)s()}catch(d){o.e(d)}finally{o.f()}e.el=document.querySelector("#"+e.serial);var a,l=Object(r["a"])(t);try{for(l.s();!(a=l.n()).done;){var u=a.value;e.el.addEventListener(u.toLowerCase(),e[u],{passive:!0})}}catch(d){l.e(d)}finally{l.f()}}catch(d){console.error("!error!","@".concat(e.serial||"unknown")),console.error(d)}}},"1e7e":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"],i=["innerHTML"];function o(e,t,n,o,s,a){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("div",{class:Object(r["q"])(e.lineClass)},null,2),Object(r["i"])("p",{innerHTML:e.contents.text},null,8,i)],14,c)}var s=n("5530"),a=n("5502"),l=n("c923"),u=n("cffd"),d=n("1c60"),f="Block_Quote",b={blockSeed:Object,downstream:Object},h=["trigger","mounted"];function g(){return{modalConfigs:{},el:{},states:{},contents:{}}}var m={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},lineClass:function(){return"quote-line line-flex-ver-".concat(this.contents.line)},serial:function(){return this.blockSeed.serial}},v=Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(a["d"])("",[])),Object(a["b"])("",[])),{},{triggerEvent:u["b"],getCSSbyModal:l["a"]}),p=[];function j(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function O(){Object(d["b"])(this,p,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(d["a"])(v,p);var S={name:f,props:b,emits:h,data:g,computed:m,methods:v,created:j,mounted:O},y=n("6b0d"),k=n.n(y);const C=k()(S,[["render",o]]);t["default"]=C},2135:function(e,t,n){"use strict";n.r(t);n("b64b"),n("07ac");var r=n("7a23"),c=["id"],i={key:0,class:"head"},o=["innerHTML"],s={key:1,class:"saparator"},a=["innerHTML"];function l(e,t,n,l,u,d){var f=this;return Object(r["v"])(),Object(r["f"])(Object(r["B"])(e.contents.tag),{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},{default:Object(r["H"])((function(){return[(Object(r["v"])(!0),Object(r["h"])(r["a"],null,Object(r["z"])(e.recordsCount,(function(t){return Object(r["v"])(),Object(r["h"])("div",{key:e.recordKeys[t],id:e.recordKeys[t]},[f["contents"]["heads"][t]?(Object(r["v"])(),Object(r["h"])("div",i,Object(r["D"])(" "+f["contents"]["heads"][t]+" "),1)):Object(r["g"])("",!0),Object(r["i"])("p",{class:Object(r["q"])(e.recordClasses[t]["key"]),innerHTML:Object.keys(f["contents"]["texts"][t])[0]},null,10,o),f["contents"]["separators"][t]?(Object(r["v"])(),Object(r["h"])("div",s,Object(r["D"])(" "+f["contents"]["separators"][t]+" "),1)):Object(r["g"])("",!0),Object(r["i"])("p",{class:Object(r["q"])(e.recordClasses[t]["value"]),innerHTML:Object.values(f["contents"]["texts"][t])[0]},null,10,a)],8,c)})),128))]})),_:1},8,["id","class","style"])}var u=n("2909"),d=n("5530"),f=(n("99af"),n("5502")),b=n("c923"),h=n("cffd"),g=n("1c60"),m=n("5767"),v="Block_simpleDictionary",p={blockSeed:Object,downstream:Object},j=["trigger","mounted"];function O(){return{modalConfigs:{},el:{},states:{},contents:{},recordsCount:[],recordKeys:[],recordClasses:[]}}var S={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(m["a"])(this.blockSeed.type)}},y=Object(d["a"])(Object(d["a"])(Object(d["a"])({},Object(f["d"])("",[])),Object(f["b"])("",[])),{},{triggerEvent:h["b"],getCSSbyModal:b["a"]}),k=[];function C(){for(var e in this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents,this.contents.texts){this.recordsCount.push(e);var t=this.blockSeed.serial+"-"+String(e)+"-"+Object(m["b"])(Object.keys(this.contents.texts[e])[0]);this.recordKeys.push(t),this.recordClasses.push({key:["dictionary-key"].concat(Object(u["a"])(this.contents.keyClass)),value:["dictionary-value"].concat(Object(u["a"])(this.contents.valueClass))})}}function x(){Object(g["b"])(this,k,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(g["a"])(y,k);var w={name:v,props:p,emits:j,data:O,computed:S,methods:y,created:C,mounted:x},T=n("6b0d"),E=n.n(T);const M=E()(w,[["render",l]]);t["default"]=M},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("e330"),i=n("5a34"),o=n("1d80"),s=n("577e"),a=n("ab13"),l=c("".indexOf);r({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~l(s(o(this)),s(i(e)),arguments.length>1?arguments[1]:void 0)}})},"28be":function(e,t,n){e.exports=n.p+"img/idas-fig-1.902e8196.svg"},3795:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"],i=["innerHTML"];function o(e,t,n,o,s,a){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("p",{innerHTML:e.contents.text},null,8,i)],14,c)}var s=n("5530"),a=n("5502"),l=n("c923"),u=n("cffd"),d=n("1c60"),f="Block_Quote",b={blockSeed:Object,downstream:Object},h=["trigger","mounted"];function g(){return{modalConfigs:{},el:{},states:{},contents:{}}}var m={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial}},v=Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(a["d"])("",[])),Object(a["b"])("",[])),{},{triggerEvent:u["b"],getCSSbyModal:l["a"]}),p=[];function j(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function O(){Object(d["b"])(this,p,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(d["a"])(v,p);var S={name:f,props:b,emits:h,data:g,computed:m,methods:v,created:j,mounted:O},y=n("6b0d"),k=n.n(y);const C=k()(S,[["render",o]]);t["default"]=C},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function c(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,c,i=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(i.push(r.value),t&&i.length===t)break}catch(a){s=!0,c=a}finally{try{o||null==n["return"]||n["return"]()}finally{if(s)throw c}}return i}}var i=n("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){return r(e)||c(e,t)||Object(i["a"])(e,t)||o()}},"408a":function(e,t,n){var r=n("e330");e.exports=r(1..valueOf)},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==c(e))}},4555:function(e,t,n){var r={"./idas-fig-1.svg":"28be","./idas-fig-2.svg":"98de","./idas-fig-3.svg":"4900","./idas-fig-4.svg":"bc05","./idas-fig-5.svg":"d92c","./idas-fig-6.svg":"5c0f"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=i,e.exports=c,c.id="4555"},4900:function(e,t,n){e.exports=n.p+"img/idas-fig-3.1d47ce36.svg"},"490c":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("a4d3"),n("e01a");var r=n("7a23"),c=["id"],i={class:"flex f-dir-row gap22"},o=Object(r["i"])("div",{class:"line-flex-ver-4"},null,-1),s={class:"flex f-dir-col gap20 w100"},a={class:"typo-mark5--light"},l={class:"flex f-dir-row f-js-cont-space f-al-item-baseline f-wrap rgap6"},u={class:"typo-caption4"},d={class:"flex f-dir-row f-js-cont-end f-al-item-baseline gap5"},f={class:"typo-caption5"},b={key:0,class:"typo-caption6"},h=Object(r["i"])("div",{class:"line-flex-hor-1"},null,-1),g={class:"typo-body3"};function m(e,t,n,m,v,p){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("div",i,[o,Object(r["i"])("div",s,[Object(r["i"])("p",a,Object(r["D"])(e.contents.title),1),(Object(r["v"])(!0),Object(r["h"])(r["a"],null,Object(r["z"])(e.contents.records,(function(e){return Object(r["v"])(),Object(r["h"])("div",{key:e.name,class:"flex f-dir-col gap6"},[Object(r["i"])("div",l,[Object(r["i"])("p",u,Object(r["D"])(e.name),1),Object(r["i"])("div",d,[Object(r["i"])("p",f,Object(r["D"])(e.time),1),e.expected?(Object(r["v"])(),Object(r["h"])("p",b,"(expected)")):Object(r["g"])("",!0)])]),h,Object(r["i"])("p",g,Object(r["D"])(e.description),1)])})),128))])])],14,c)}var v=n("5530"),p=n("5502"),j=n("c923"),O=n("cffd"),S=n("1c60"),y=n("5767"),k="Block_simpleDictionary",C={blockSeed:Object,downstream:Object},x=["trigger","mounted"];function w(){return{modalConfigs:{},el:{},states:{},contents:{}}}var T={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(y["a"])(this.blockSeed.type)}},E=Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(p["d"])("",[])),Object(p["b"])("",[])),{},{triggerEvent:O["b"],getCSSbyModal:j["a"]}),M=[];function I(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function N(){Object(S["b"])(this,M,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(S["a"])(E,M);var _={name:k,props:C,emits:x,data:w,computed:T,methods:E,created:I,mounted:N},L=n("6b0d"),D=n.n(L);const F=D()(_,[["render",m]]);t["default"]=F},"4fad":function(e,t,n){var r=n("23e7"),c=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return c(e)}})},5388:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"];function i(e,t,n,i,o,s){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial},null,8,c)}n("a9e3");var o=n("5767"),s="idasFig_1",a={blockSeed:Object,downstream:Object,position:Number},l=["trigger","mounted"];function u(){return{svgData:""}}var d={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial||"none"},type:function(){return Object(o["a"])(this.blockSeed.type)}},f={},b={};function h(){}function g(){}var m={name:s,props:a,emits:l,data:u,computed:d,methods:f,watch:b,created:h,mounted:g},v=n("6b0d"),p=n.n(v);const j=p()(m,[["render",i]]);t["default"]=j},5767:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));n("ac1f"),n("5319");function r(e){return e.replace(/_/g,"-")}function c(e){return e.replace(/[A-Z]/g,(function(e){return"-".concat(e.toLowerCase())}))}function i(e){return e.replace(/ /g,"-")}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("e330"),c=n("1d80"),i=n("577e"),o=n("5899"),s=r("".replace),a="["+o+"]",l=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),d=function(e){return function(t){var n=i(c(t));return 1&e&&(n=s(n,l,"")),2&e&&(n=s(n,u,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5a34":function(e,t,n){var r=n("da84"),c=n("44e7"),i=r.TypeError;e.exports=function(e){if(c(e))throw i("The method doesn't accept regular expressions");return e}},"5b81":function(e,t,n){"use strict";var r=n("23e7"),c=n("da84"),i=n("c65b"),o=n("e330"),s=n("1d80"),a=n("1626"),l=n("44e7"),u=n("577e"),d=n("dc4a"),f=n("ad6d"),b=n("0cb2"),h=n("b622"),g=n("c430"),m=h("replace"),v=RegExp.prototype,p=c.TypeError,j=o(f),O=o("".indexOf),S=o("".replace),y=o("".slice),k=Math.max,C=function(e,t,n){return n>e.length?-1:""===t?n:O(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,c,o,f,h,x,w,T,E=s(this),M=0,I=0,N="";if(null!=e){if(n=l(e),n&&(r=u(s("flags"in v?e.flags:j(e))),!~O(r,"g")))throw p("`.replaceAll` does not allow non-global regexes");if(c=d(e,m),c)return i(c,e,E,t);if(g&&n)return S(u(E),e,t)}o=u(E),f=u(e),h=a(t),h||(t=u(t)),x=f.length,w=k(1,x),M=C(o,f,0);while(-1!==M)T=h?u(t(f,M,o)):b(f,o,M,[],void 0,t),N+=y(o,I,M)+T,I=M+x,M=C(o,f,M+w);return I<o.length&&(N+=y(o,I)),N}})},"5c0f":function(e,t,n){e.exports=n.p+"img/idas-fig-6.f74475c2.svg"},7156:function(e,t,n){var r=n("1626"),c=n("861d"),i=n("d2bb");e.exports=function(e,t,n){var o,s;return i&&r(o=t.constructor)&&o!==n&&c(s=o.prototype)&&s!==n.prototype&&i(e,s),e}},"8ed2":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"];function i(e,t,n,i,o,s){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)}," Create • Inspire • Contribute   Create • Inspire • Contribute   Create • Inspire • Contribute   Create • Inspire • Contribute   Create • Inspire • Contribute   Create • Inspire • Contribute   Create • Inspire • Contribute ",14,c)}var o=n("5530"),s=(n("a9e3"),n("5502")),a=n("c923"),l=n("cffd"),u=n("1c60"),d=n("5767"),f="Block_simpleText",b={blockSeed:Object,downstream:Object,position:Number},h=["trigger","mounted"];function g(){return{modalConfigs:{},el:{},states:{}}}var m=Object(o["a"])(Object(o["a"])({},Object(s["c"])("ui",["isDarkmodeOn"])),{},{textPosition:function(){return"calc( (0.02 - ".concat(this.downstream.sectionPosition,") * 100vw )")},textColor:function(){if(this.isDarkmodeOn){var e=150-80*this.downstream.sectionPosition;return"hsl(234, 100%, ".concat(e,"%)")}var t=80*this.downstream.sectionPosition-50;return"hsl(18, 100%, ".concat(t,"%)")},fetchCSS:function(){try{var e=this.getCSSbyModal(this);return e.style.push({left:this.textPosition,color:this.textColor}),e}catch(t){console.error("!error!","@".concat(this.serial||"unknown")),console.error(t)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(d["a"])(this.blockSeed.type)}}),v=Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["d"])("",[])),Object(s["b"])("",[])),{},{triggerEvent:l["b"],getCSSbyModal:a["a"]}),p=[];function j(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function O(){Object(u["b"])(this,p,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(u["a"])(v,p);var S={name:f,props:b,emits:h,data:g,computed:m,methods:v,created:j,mounted:O},y=n("6b0d"),k=n.n(y);const C=k()(S,[["render",i]]);t["default"]=C},"929d":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"];function i(e,t,n,i,o,s){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},null,14,c)}var o=n("5530"),s=n("5502"),a=n("c923"),l=n("cffd"),u=n("1c60"),d=n("5767"),f="Block_lineVH",b={blockSeed:Object,downstream:Object},h=["trigger","mounted"];function g(){return{modalConfigs:{},el:{},states:{},contents:{}}}var m={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(d["a"])(this.blockSeed.type)}},v=Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["d"])("",[])),Object(s["b"])("",[])),{},{triggerEvent:l["b"],getCSSbyModal:a["a"]}),p=[];function j(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function O(){Object(u["b"])(this,p,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(u["a"])(v,p);var S={name:f,props:b,emits:h,data:g,computed:m,methods:v,created:j,mounted:O},y=n("6b0d"),k=n.n(y);const C=k()(S,[["render",i]]);t["default"]=C},"98de":function(e,t,n){e.exports=n.p+"img/idas-fig-2.c377aa50.svg"},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),i=n("e330"),o=n("94ca"),s=n("6eeb"),a=n("1a2d"),l=n("7156"),u=n("3a9b"),d=n("d9b5"),f=n("c04e"),b=n("d039"),h=n("241c").f,g=n("06cf").f,m=n("9bf2").f,v=n("408a"),p=n("58a8").trim,j="Number",O=c[j],S=O.prototype,y=c.TypeError,k=i("".slice),C=i("".charCodeAt),x=function(e){var t=f(e,"number");return"bigint"==typeof t?t:w(t)},w=function(e){var t,n,r,c,i,o,s,a,l=f(e,"number");if(d(l))throw y("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=p(l),t=C(l,0),43===t||45===t){if(n=C(l,2),88===n||120===n)return NaN}else if(48===t){switch(C(l,1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+l}for(i=k(l,2),o=i.length,s=0;s<o;s++)if(a=C(i,s),a<48||a>c)return NaN;return parseInt(i,r)}return+l};if(o(j,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var T,E=function(e){var t=arguments.length<1?0:O(x(e)),n=this;return u(S,n)&&b((function(){v(n)}))?l(Object(t),n,E):t},M=r?h(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),I=0;M.length>I;I++)a(O,T=M[I])&&!a(E,T)&&m(E,T,g(O,T));E.prototype=S,S.constructor=E,s(c,j,E)}},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},b6f8:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"edge-wrapper"},i=["id"],o=["innerHTML"],s=Object(r["i"])("div",{class:"line-wrapper"},[Object(r["i"])("div",{class:"line-hor"}),Object(r["i"])("div",{class:"line-ver"})],-1);function a(e,t,n,a,l,u){return Object(r["v"])(),Object(r["h"])("div",c,[Object(r["i"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("p",{innerHTML:e.contents.text},null,8,o),s],14,i)])}var l=n("5530"),u=(n("a9e3"),n("5502")),d=n("c923"),f=n("cffd"),b=n("1c60"),h=n("5767"),g="Block_edgeFrame",m={blockSeed:Object,downstream:Object,position:Number},v=["trigger","mounted"];function p(){return{modalConfigs:{},el:{},states:{},contents:{}}}var j={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(h["a"])(this.blockSeed.type)}},O=Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(u["d"])("",[])),Object(u["b"])("",[])),{},{triggerEvent:f["b"],getCSSbyModal:d["a"]}),S=[];function y(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function k(){Object(b["b"])(this,S,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(b["a"])(O,S);var C={name:g,props:m,emits:v,data:p,computed:j,methods:O,created:y,mounted:k},x=n("6b0d"),w=n.n(x);const T=w()(C,[["render",a]]);t["default"]=T},bc05:function(e,t,n){e.exports=n.p+"img/idas-fig-4.f93832df.svg"},c923:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l}));var r=n("2909"),c=n("b85c"),i=(n("ac1f"),n("1276"),n("b64b"),n("6e08")),o=["XXS","XS","S","M","L","XL","XL"];function s(e,t){try{if("undefined"===typeof e[t]){var n,r=Object(c["a"])(o);try{for(r.s();!(n=r.n()).done;){var i=n.value;if("undefined"!==typeof e[i])return e[i]}}catch(s){r.e(s)}finally{r.f()}return{}}return e[t]}catch(s){console.error(s)}}function a(e){try{var t=e.serial.split("-").length,n=4===t?e.modalConfigs:s(e.modalConfigs,e.getScale),c=e.states;if(3===t){for(var i=[],o=[],a=[],l=[],u=0,d=Object.keys(n);u<d.length;u++){var f=d[u];"base"===f?(n[f]["container"]&&(i=Object(r["a"])(n[f]["container"]["class"]),o=Object(r["a"])(n[f]["container"]["style"])),n[f]["wrapper"]&&(a=Object(r["a"])(n[f]["wrapper"]["class"]),l=Object(r["a"])(n[f]["wrapper"]["style"]))):n[f][c[f]]&&(n[f][c[f]]["class"]&&a.push(n[f][c[f]]["class"]),n[f][c[f]]["style"]&&l.push(n[f][c[f]]["style"]))}return{container:{class:i,style:o},wrapper:{class:a,style:l}}}for(var b=[],h=[],g=0,m=Object.keys(n);g<m.length;g++){var v=m[g];"base"===v?(b=Object(r["a"])(n[v]["class"]),h=Object(r["a"])(n[v]["style"])):n[v][c[v]]&&(n[v][c[v]]["class"]&&b.push(n[v][c[v]]["class"]),n[v][c[v]]["style"]&&h.push(n[v][c[v]]["style"]))}return{class:b,style:h}}catch(p){console.error("!error!","@".concat(e.serial||"unknown")),console.error(p)}}function l(e,t,n){try{Object(i["a"])(e.serial,": setModalState :",t,n),e["states"]["modals"][t]="toggle"===n?!e["states"]["modals"][t]:n}catch(r){console.error("!error!","@".concat(e.serial||"unknown")),console.error(r)}}},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},cffd:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));n("ac1f"),n("1276");function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;try{null!==t&&"undefined"!==typeof t&&(e.$logg(e.serial,": triggerEvent :",t),e.$emit("trigger",{serial:e.serial,method:t,data:n}))}catch(r){console.error("!error!","@".concat(e.serial||"unknown")),console.error(r)}}function c(e){try{e.childrenMounted+=1}catch(t){console.error("!error!","@".concat(e.serial||"unknown")),console.error(t)}}},d92c:function(e,t,n){e.exports=n.p+"img/idas-fig-5.42b56982.svg"},ddcf:function(e,t,n){e.exports=n.p+"img/placeholder_image.5f045eed.svg"},e71f:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id","innerHTML"];function i(e,t,n,i,o,s){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:"fig-container",innerHTML:e.svgData},null,8,c)}var o=n("3835"),s=(n("a9e3"),n("ac1f"),n("1276"),n("d3b7"),n("4fad"),n("5319"),n("5b81"),n("5767")),a="idasFigContainer",l={blockSeed:Object,downstream:Object,position:Number},u=["trigger","mounted"];function d(){return{containerEl:{},svgData:"",figName:""}}var f={filepath:function(){try{return n("4555")("./"+this.figName+".svg")}catch(e){return console.error(String(e).split("\n")[0]),""}},serial:function(){return this.blockSeed.serial||"none"},type:function(){return Object(s["a"])(this.blockSeed.type)}},b={},h={},g={"id=":"class=",black:"var(--ink0)","#00FF00":"var(--accent0)",white:"var(--ink6)"};function m(){var e=this;this.figName=this.blockSeed.contents.figName,fetch(this.filepath).then((function(e){return e.text()})).then((function(e){for(var t=0,n=Object.entries(g);t<n.length;t++){var r=Object(o["a"])(n[t],2),c=r[0],i=r[1];e=e.replaceAll(c,i)}return e='<svg width="100%" height="100%" viewBox'+e.split("viewBox")[1],e})).then((function(t){return e.svgData=t}))}function v(){this.$emit("mounted")}var p={name:a,props:l,emits:u,data:d,computed:f,methods:b,watch:h,created:m,mounted:v},j=n("6b0d"),O=n.n(j);const S=O()(p,[["render",i]]);t["default"]=S},efa1:function(e,t,n){var r={"./bodyText.vue":"3795","./cvItem.vue":"490c","./edgeFrame.vue":"b6f8","./idasFig-1.vue":"5388","./idasFigContainer.vue":"e71f","./idasMottoText.vue":"8ed2","./imageContainer.vue":"0b56","./lineVH.vue":"929d","./quote.vue":"1e7e","./simpleDictionary.vue":"2135","./simpleText.vue":"f1c4"};function c(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=i,e.exports=c,c.id="efa1"},f1c4:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=["id"],i=["innerHTML"];function o(e,t,n,o,s,a){return Object(r["v"])(),Object(r["h"])("div",{id:e.blockSeed.serial,class:Object(r["q"])(e.fetchCSS.class),style:Object(r["r"])(e.fetchCSS.style)},[Object(r["i"])("p",{innerHTML:e.contents.text},null,8,i)],14,c)}n("a9e3");var s=n("c923"),a=n("cffd"),l=n("1c60"),u=n("5767"),d="Block_simpleText",f={blockSeed:Object,downstream:Object,position:Number},b=["trigger","mounted"];function h(){return{modalConfigs:{},el:{},states:{},contents:{},mountReported:!1}}var g={fetchCSS:function(){try{return this.getCSSbyModal(this)}catch(e){console.error("!error!","@".concat(this.serial||"unknown")),console.error(e)}},serial:function(){return this.blockSeed.serial},type:function(){return Object(u["a"])(this.blockSeed.type)}},m={triggerEvent:a["b"],getCSSbyModal:s["a"]},v=[];function p(){this.modalConfigs=this.blockSeed.modalConfigs,this.states=this.blockSeed.states,this.contents=this.blockSeed.contents}function j(){Object(l["b"])(this,v,this.blockSeed.injectTriggers),this.$emit("mounted")}Object(l["a"])(m,v);var O={name:d,props:f,emits:b,data:h,computed:g,methods:m,created:p,mounted:j},S=n("6b0d"),y=n.n(S);const k=y()(O,[["render",o]]);t["default"]=k}}]);
//# sourceMappingURL=chunk-24c59feb.200d1c6c.js.map