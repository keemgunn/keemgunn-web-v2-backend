(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,o,i){var c=Object(r["w"])("router-view");return Object(r["s"])(),Object(r["f"])("div",{id:"prime",class:Object(r["n"])([e.getScale,e.whatLanguage]),style:Object(r["o"])(e.getColors)},[Object(r["h"])(c)],6)}var o=n("5530"),i=n("5502"),c={type:"testEl_A"},s={name:"App",components:{},data:function(){return{testContent:c}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["c"])(["getENV"])),Object(i["c"])("ui",["getFrameSize","getScale","getColors","getThemeColor","whatLanguage"])),{},{appFontSize:function(){return String(this.fontScale)+"%"}}),methods:Object(o["a"])(Object(o["a"])({},Object(i["d"])("ui",{frameResize:"resize"})),{},{fetchFrameSize:function(){this.frameResize({width:window.innerWidth,height:window.innerHeight})}}),beforeCreate:function(){},created:function(){var e=this;this.fetchFrameSize(),this.$nextTick((function(){window.addEventListener("resize",e.fetchFrameSize)}))}},u=(n("7bda"),n("6b0d")),d=n.n(u);const l=d()(s,[["render",a]]);var f=l;function h(e){return e>2400?"XXL":e>1920?"XL":e>1320?"L":e>960?"M":e>680?"S":e>320?"XS":"XXS"}var p={namespaced:!1,state:function(){return{vw:null,vh:null,scale:null}},getters:{getFrameSize:function(e){return{width:e.vw,height:e.vh}},getScale:function(e){return e.scale},getRatio:function(e){return e.vw/e.vh}},mutations:{resize:function(e,t){e.vw=t.width,e.vh=t.height,e.scale=h(t.width)}},actions:{doHello:function(e){var t=e.commit;t("hello")}}},g=n("704a");function m(e,t){e.body.style="background-color: ".concat(t,"; padding: 0px; margin: 0px; margin-top: 0px; height: 100vh; width: 100vw;")}var b=window.matchMedia("(prefers-color-scheme: dark)").matches,v=b?g.dark["--i94"]:g.light["--i94"];m(document,v);var O={namespaced:!1,state:function(){return{darkmode:b,light:g.light,dark:g.dark,themeColor:v}},getters:{isDarkmodeOn:function(e){return e.darkmode},getColors:function(e){return e.darkmode?e.dark:e.light},getThemeColor:function(e){return e.themeColor}},mutations:{toggleDarkmode:function(e){e.darkmode=!e.darkmode,e.themeColor=e.darkmode?e.dark["--i94"]:e.light["--i94"],m(document,e.themeColor)}}},j={namespaced:!1,state:function(){return{language:"none"}},getters:{whatLanguage:function(e){return e.language}},mutations:{setLanguage:function(e,t){e.language=t}}},w=n("b85c"),k={namespaced:!1,state:function(){return{navigation:{menuShown:["works","blog","lab","about","idas"]}}},getters:{getNavMenuArr:function(e){var t,n=[],r=Object(w["a"])(e.navigation.menuShown);try{for(r.s();!(t=r.n()).done;){var a=t.value;a&&n.push(a)}}catch(o){r.e(o)}finally{r.f()}return n}},mutations:{},actions:{}},F={namespaced:!0,modules:{frame:p,colors:O,lang:j,topology:k}},y=n("1da1"),S=(n("96cf"),n("e336")),C=n("bc3a"),E={namespaced:!1,state:function(){return{cli_ip:"0.0.0.0",server_message:""}},getters:{},mutations:{setCliInfo:function(e,t){e.cli_ip=t.ipv4},saveServerMsg:function(e,t){e.server_message=t.message}},actions:{openTheDoor:function(e){return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,t.next=3,S.v4();case 3:return a=t.sent,r("setCliInfo",{ipv4:a}),t.next=7,C.post("/visitor/api/doorknob",{ipv4:a});case 7:o=t.sent,i=o.data,r("saveServerMsg",{message:i.greeting}),console.log(n.server_message);case 11:case"end":return t.stop()}}),t)})))()}}},A={namespaced:!0,modules:{doorbell:E}},x="production",D="production"!==x,B=Object(i["b"])({state:{ENV:x,vendorURL:"production"===x?"http://13.76.155.192/":"http://localhost:4433/"},getters:{getENV:function(e){return e.ENV},getVendorURL:function(e){return function(t){return e.vendorURL+t}}},modules:{ui:F,api:A},strict:D,plugins:D?[Object(i["a"])()]:[]}),_=n("6c02"),z={class:"err"},L={class:Object(r["n"])(["flex","f-dir-col","f-js-cont-space"])},M={class:"code m-auto"},P={class:"typo-header1"},R={class:"title m-auto"},N={class:"typo-header5"},T={class:"message m-auto"},X={class:"typo-caption3"};function V(e,t,n,a,o,i){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[Object(r["g"])("title",null,"keemgunn | "+Object(r["y"])(this.code),1)])),Object(r["g"])("main",z,[Object(r["g"])("div",L,[Object(r["g"])("div",M,[Object(r["g"])("h1",P,Object(r["y"])(this.code),1)]),Object(r["g"])("div",R,[Object(r["g"])("h5",N,Object(r["y"])(this.title),1)]),Object(r["g"])("div",T,[Object(r["g"])("p",X,Object(r["y"])(this.message),1)])])])],64)}n("b64b");var J={404:{title:"Not Found",message:"Please check the url"},503:{title:"On Maintenance",message:"Sorry, come back later"}},U={name:"Error",components:{},data:function(){return{code:0,title:"null",message:"null"}},methods:{},created:function(){this.code=this.$route.params.code,-1!==Object.keys(J).indexOf(String(this.code))&&(this.title=J[this.code]["title"],this.message=J[this.code]["message"])}};const H=d()(U,[["render",V]]);var I=H,$=new _["a"]({history:Object(_["b"])("/"),routes:[{path:"/:code(404||503)",component:I},{path:"/",redirect:"/home/en"},{path:"/home",redirect:"/home/en"},{path:"/about",redirect:"/about/en"},{path:"/works",redirect:"/works/en"},{path:"/idas",redirect:"/idas/en"},{path:"/home/",redirect:"/home/en"},{path:"/about/",redirect:"/about/en"},{path:"/works/",redirect:"/works/en"},{path:"/idas/",redirect:"/idas/en"},{path:"/home/:else",redirect:"/en"},{path:"/about/:else",redirect:"/about/en"},{path:"/works/:else",redirect:"/works/en"},{path:"/idas/:else",redirect:"/idas/en"},{path:"/home/en",redirect:"/503"},{path:"/about/en",redirect:"/503"},{path:"/works/en",redirect:"/503"},{path:"/idas/en",redirect:"/503"},{path:"/:else",redirect:"/404"}]}),W=n("67b0");Object(r["d"])(f).use(B).use($).use(W["a"]).mount("#app")},"704a":function(e){e.exports=JSON.parse('{"light":{"--i100":"#ffffff","--i98":"#FAFAFA","--i94":"#F0F0F0","--i90":"#E6E6E6","--i80":"#CCCCCC","--i70":"#B3B3B3","--i60":"#999999","--i45":"#737373","--i30":"#4D4D4D","--i20":"#323232","--i10":"#1A1A1A","--i0":"#000000","--accent00":"#ffffff","--accent03":"#FF5224","--accent02":"#FF7955","--accent01":"#FF9470","--alert03":"#EA0030","--alert02":"#D9414E","--alert01":"#F27882","--pos03":"#0FB337","--pos02":"#2D9647","--pos01":"#6BBE7F","--black":"#000000","--white":"#ffffff"},"dark":{"--i100":"#DDD5FF","--i98":"#101017","--i94":"#191924","--i90":"#242433","--i80":"#303045","--i70":"#40415C","--i60":"#505373","--i45":"#8185A6","--i30":"#A9AECF","--i20":"#B1B9E3","--i10":"#A6B3ED","--i0":"#97ACFF","--accent00":"#ffffff","--accent03":"#00F0EC","--accent02":"#52FAF7","--accent01":"#94FFF4","--alert03":"#EA0030","--alert02":"#D9414E","--alert01":"#F27882","--pos03":"#0FB337","--pos02":"#2D9647","--pos01":"#6BBE7F","--black":"#000000","--white":"#ffffff"}}')},"7bda":function(e,t,n){"use strict";n("a600")},a600:function(e,t,n){}});
//# sourceMappingURL=app.2b0a752a.js.map