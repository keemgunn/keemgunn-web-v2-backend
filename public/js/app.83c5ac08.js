(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],d=0,g=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&g.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(g.length)g.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e56":function(e,t,n){"use strict";n("77f0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=Object(r["g"])("p",null,[Object(r["h"])("가나다라 "),Object(r["g"])("i",null,"마바사")],-1),o=Object(r["g"])("h2",null," something ",-1);function c(e,t,n,c,i,u){var s=Object(r["w"])("test-001"),l=Object(r["w"])("router-view");return Object(r["s"])(),Object(r["f"])("div",{id:"app_main",style:Object(r["o"])(e.getColors)},[a,o,Object(r["i"])(s),Object(r["i"])(l)],4)}var i=n("5530"),u=n("5502"),s=(n("b0c0"),Object(r["g"])("img",{src:"http://13.76.155.192/testflight/images/azure.png",alt:""},null,-1));function l(e,t,n,a,o,c){var i=Object(r["w"])("btn_darkmode");return Object(r["s"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("h1",null,Object(r["y"])(this.name),1),Object(r["g"])("h4",null,"frame size: "+Object(r["y"])(e.getFrameSize),1),Object(r["g"])("h4",null,"scale: "+Object(r["y"])(e.getScale),1),Object(r["i"])(i),s],64)}var d={class:"hello"};function g(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])("div",d,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return e.toggleDarkmode&&e.toggleDarkmode.apply(e,arguments)})},"darkmode: "+Object(r["y"])(e.isDarkmodeOn),1)])}var b={name:"btn_darkmode",props:{},computed:Object(i["a"])({},Object(u["d"])("ui",["isDarkmodeOn","getThemeColor"])),methods:Object(i["a"])({},Object(u["e"])("ui",["toggleDarkmode"]))},m=n("6b0d"),h=n.n(m);const p=h()(b,[["render",g]]);var f=p,O="test001",j={name:O,components:{btn_darkmode:f},data:function(){return{name:O}},computed:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["getENV"])),Object(u["d"])("ui",["getFrameSize","getScale"])),methods:Object(i["a"])({},Object(u["e"])("ui",{})),created:function(){}};const v=h()(j,[["render",l]]);var k=v,w={name:"App",components:{test001:k},data:function(){return{}},computed:Object(i["a"])(Object(i["a"])({},Object(u["d"])(["getENV"])),Object(u["d"])("ui",["getFrameSize","getScale","getColors","getThemeColor","whatLanguage"])),methods:Object(i["a"])(Object(i["a"])({},Object(u["e"])("ui",{frameResize:"resize"})),{},{fetchFrameSize:function(){this.frameResize({width:window.innerWidth,height:window.innerHeight})}}),beforeCreate:function(){},created:function(){var e=this;this.fetchFrameSize(),this.$nextTick((function(){window.addEventListener("resize",e.fetchFrameSize)}))}};n("2e56");const F=h()(w,[["render",c]]);var y=F;function C(e){return e>2400?"XXL":e>1920?"XL":e>1320?"L":e>960?"M":e>680?"S":e>320?"XS":"XXS"}var S={namespaced:!1,state:function(){return{vw:null,vh:null,scale:null}},getters:{getFrameSize:function(e){return{width:e.vw,height:e.vh}},getScale:function(e){return e.scale},getRatio:function(e){return e.vw/e.vh}},mutations:{resize:function(e,t){e.vw=t.width,e.vh=t.height,e.scale=C(t.width)}},actions:{doHello:function(e){var t=e.commit;t("hello")}}},D=n("704a");function E(e,t){e.body.style="background-color: ".concat(t,"; padding: 0px; margin: 0px; margin-top: 0px; height: 100vh; width: 100vw;")}var A=window.matchMedia("(prefers-color-scheme: dark)").matches,_=A?D.dark["--i94"]:D.light["--i94"];E(document,_);var x={namespaced:!1,state:function(){return{darkmode:A,light:D.light,dark:D.dark,themeColor:_}},getters:{isDarkmodeOn:function(e){return e.darkmode},getColors:function(e){return e.darkmode?e.dark:e.light},getThemeColor:function(e){return e.themeColor}},mutations:{toggleDarkmode:function(e){e.darkmode=!e.darkmode,e.themeColor=e.darkmode?e.dark["--i94"]:e.light["--i94"],E(document,e.themeColor)}}},z={namespaced:!1,state:function(){return{language:"none"}},getters:{whatLanguage:function(e){return e.language}},mutations:{setLanguage:function(e,t){e.language=t}}},B={namespaced:!0,modules:{frame:S,colors:x,lang:z}},L=n("1da1"),T=(n("96cf"),n("e336")),M=n("bc3a"),N={namespaced:!1,state:function(){return{cli_ip:"0.0.0.0",server_message:""}},getters:{},mutations:{setCliInfo:function(e,t){e.cli_ip=t.ipv4},saveServerMsg:function(e,t){e.server_message=t.message}},actions:{openTheDoor:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,t.next=3,T.v4();case 3:return a=t.sent,r("setCliInfo",{ipv4:a}),t.next=7,M.post("/visitor/api/doorknob",{ipv4:a});case 7:o=t.sent,c=o.data,r("saveServerMsg",{message:c.greeting}),console.log(n.server_message);case 11:case"end":return t.stop()}}),t)})))()}}},P={namespaced:!0,modules:{doorbell:N}},X="production",R="production"!==X,V=Object(u["b"])({state:{ENV:X},getters:{getENV:function(e){return e.ENV}},modules:{ui:B,api:P},strict:R,plugins:R?[Object(u["a"])()]:[]}),$=n("6c02"),I=Object(r["g"])("title",null,"keemgunn | home",-1);function H(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[I])),Object(r["g"])("div",null,[Object(r["g"])("h1",null,Object(r["y"])(o.lang),1)])],64)}var J={name:"Home",components:{},data:function(){return{lang:this.$route.params.lang}},computed:Object(i["a"])({},Object(u["d"])("ui",["whatLanguage"])),methods:Object(i["a"])(Object(i["a"])({},Object(u["e"])("ui",["setLanguage"])),Object(u["c"])("api",["openTheDoor"])),created:function(){this.setLanguage(this.lang),document.documentElement.lang=this.lang,this.openTheDoor()}};const W=h()(J,[["render",H]]);var q=W,G=Object(r["g"])("title",null,"keemgunn | about",-1);function K(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[G])),Object(r["g"])("div",null,[Object(r["g"])("h1",null,Object(r["y"])(o.lang),1)])],64)}var Q={name:"About",components:{},data:function(){return{lang:this.$route.params.lang}}};const U=h()(Q,[["render",K]]);var Y=U,Z=Object(r["g"])("title",null,"keemgunn | works",-1);function ee(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[Z])),Object(r["g"])("div",null,[Object(r["g"])("h1",null,Object(r["y"])(o.lang),1)])],64)}var te={name:"Works",components:{},data:function(){return{lang:this.$route.params.lang}}};const ne=h()(te,[["render",ee]]);var re=ne,ae=Object(r["g"])("title",null,"keemgunn | IDAS",-1);function oe(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[ae])),Object(r["g"])("div",null,[Object(r["g"])("h1",null,Object(r["y"])(o.lang),1)])],64)}var ce={name:"IDAS",components:{},data:function(){return{lang:this.$route.params.lang}}};const ie=h()(ce,[["render",oe]]);var ue=ie,se=Object(r["g"])("title",null,"keemgunn | 404",-1),le=Object(r["g"])("h1",null,"Not Found",-1);function de(e,t,n,a,o,c){return Object(r["s"])(),Object(r["f"])(r["a"],null,[(Object(r["s"])(),Object(r["e"])(r["b"],{to:"head"},[se])),le],64)}var ge={name:"NotFound",components:{}};const be=h()(ge,[["render",de]]);var me=be,he=new $["a"]({history:Object($["b"])("/"),routes:[{path:"/home/:lang(ko||en)",component:q},{path:"/about/:lang(ko||en)",component:Y},{path:"/works/:lang(ko||en)",component:re},{path:"/idas/:lang(ko||en)",component:ue},{path:"/404",component:me},{path:"/",redirect:"/home/en"},{path:"/home",redirect:"/home/en"},{path:"/about",redirect:"/about/en"},{path:"/works",redirect:"/works/en"},{path:"/idas",redirect:"/idas/en"},{path:"/home/",redirect:"/home/en"},{path:"/about/",redirect:"/about/en"},{path:"/works/",redirect:"/works/en"},{path:"/idas/",redirect:"/idas/en"},{path:"/home/:else",redirect:"/en"},{path:"/about/:else",redirect:"/about/en"},{path:"/works/:else",redirect:"/works/en"},{path:"/idas/:else",redirect:"/idas/en"},{path:"/:else",redirect:"/404"}]});Object(r["d"])(y).use(V).use(he).mount("#app")},"704a":function(e){e.exports=JSON.parse('{"light":{"--i100":"#ffffff","--i98":"#FAFAFA","--i94":"#F0F0F0","--i90":"#E6E6E6","--i80":"#CCCCCC","--i70":"#B3B3B3","--i60":"#999999","--i45":"#737373","--i30":"#4D4D4D","--i20":"#323232","--i10":"#1A1A1A","--i0":"#000000","--accent00":"#ffffff","--accent03":"#FF5224","--accent02":"#FF7955","--accent01":"#FF9470","--alert03":"#EA0030","--alert02":"#D9414E","--alert01":"#F27882","--pos03":"#0FB337","--pos02":"#2D9647","--pos01":"#6BBE7F"},"dark":{"--i100":"#DDD5FF","--i98":"#101017","--i94":"#191924","--i90":"#242433","--i80":"#303045","--i70":"#40415C","--i60":"#505373","--i45":"#8185A6","--i30":"#A9AECF","--i20":"#B1B9E3","--i10":"#A6B3ED","--i0":"#97ACFF","--accent00":"#ffffff","--accent03":"#00F0EC","--accent02":"#52FAF7","--accent01":"#94FFF4","--alert03":"#EA0030","--alert02":"#D9414E","--alert01":"#F27882","--pos03":"#0FB337","--pos02":"#2D9647","--pos01":"#6BBE7F"}}')},"77f0":function(e,t,n){}});
//# sourceMappingURL=app.83c5ac08.js.map