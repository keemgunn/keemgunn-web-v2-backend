(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c069efb8"],{"0cb2":function(e,t,n){var a=n("e330"),i=n("7b0b"),s=Math.floor,o=a("".charAt),c=a("".replace),r=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,a,d,h){var b=n+e.length,v=a.length,p=u;return void 0!==d&&(d=i(d),p=l),c(h,p,(function(i,c){var l;switch(o(c,0)){case"$":return"$";case"&":return e;case"`":return r(t,0,n);case"'":return r(t,b);case"<":l=d[r(c,1,-1)];break;default:var u=+c;if(0===u)return i;if(u>v){var h=s(u/10);return 0===h?i:h<=v?void 0===a[h-1]?o(c,1):a[h-1]+o(c,1):i}l=a[u-1]}return void 0===l?"":l}))}},5319:function(e,t,n){"use strict";var a=n("2ba4"),i=n("c65b"),s=n("e330"),o=n("d784"),c=n("d039"),r=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),h=n("577e"),b=n("1d80"),v=n("8aa5"),p=n("dc4a"),g=n("0cb2"),O=n("14c3"),m=n("b622"),j=m("replace"),f=Math.max,k=Math.min,C=s([].concat),w=s([].push),_=s("".indexOf),y=s("".slice),M=function(e){return void 0===e?e:String(e)},N=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[j]&&""===/./[j]("a","$0")}(),x=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=S?"$":"$0";return[function(e,n){var a=b(this),s=void 0==e?void 0:p(e,j);return s?i(s,e,a,n):i(t,h(a),e,n)},function(e,i){var o=r(this),c=h(e);if("string"==typeof i&&-1===_(i,s)&&-1===_(i,"$<")){var b=n(t,o,c,i);if(b.done)return b.value}var p=l(i);p||(i=h(i));var m=o.global;if(m){var j=o.unicode;o.lastIndex=0}var N=[];while(1){var S=O(o,c);if(null===S)break;if(w(N,S),!m)break;var x=h(S[0]);""===x&&(o.lastIndex=v(c,d(o.lastIndex),j))}for(var q="",$=0,H=0;H<N.length;H++){S=N[H];for(var L=h(S[0]),Z=f(k(u(S.index),c.length),0),B=[],D=1;D<S.length;D++)w(B,M(S[D]));var K=S.groups;if(p){var T=C([L],B,Z,c);void 0!==K&&w(T,K);var z=h(a(i,void 0,T))}else z=g(L,c,Z,B,K,i);Z>=$&&(q+=y(c,$,Z)+z,$=Z+L.length)}return q+y(c,$)}]}),!x||!N||S)},"7f37":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u}));n("b64b"),n("ac1f"),n("5319");var a={pageName:"NavBar",states:{horizontal:"wide",vertical:"expanded",menu:!1},classKit:{"nav-top":{base:"",states:{horizontal:{wide:"",short:""},menu:{false:"",true:""}}},"nav-top-contents":{base:"",states:{horizontal:{wide:"",short:""}}},"nav-menu-btn":{base:"",states:{}},"nav-logo-gunn":{base:"",states:{}},"nav-top-links":{base:"",states:{horizontal:{wide:"",short:""}}},"nav-top-links-item":{base:"",states:{horizontal:{wide:"",short:""},menu:{true:"",false:""}}},"nav-top-btns":{base:"",states:{}}}},i={pageName:"btn_darkmode",states:{hover:"off"},classKit:{"mode-btn":{base:"",states:{hover:{off:"",dark:"",light:""}}},"icon-mode":{base:"",states:{hover:{off:"",dark:"",light:""}}},"g-eye":{base:"",states:{hover:{off:"",dark:"g-eye--dark",light:""}}},"p-eye":{base:"",states:{hover:{off:"",dark:"p-eye--dark",light:"p-eye--light"}}},"g-cover":{base:"",states:{hover:{off:"",dark:"",light:""}}},"p-cover":{base:"",states:{hover:{off:"",dark:"p-cover--dark",light:"p-cover--light"}}},"g-pupil":{base:"",states:{hover:{off:"",dark:"",light:""}}},"p-pupil":{base:"",states:{hover:{off:"",dark:"p-pupil--dark",light:"p-pupil--light"}}},"g-moon":{base:"",states:{hover:{off:"",dark:"",light:""}}},"p-moon":{base:"",states:{hover:{off:"",dark:"p-moon--dark",light:""}}}}},s={pageName:"btn_menu",states:{modal:!1},classKit:{"menu-btn":{base:"",states:{modal:{true:"",false:""}}},"icon-menu":{base:"",states:{modal:{true:"",false:""}}},"g-line":{base:"",states:{modal:{true:"",false:""}}},"p-line":{base:"",states:{modal:{true:"p-line--on",false:"p-line--off"}}}}};function o(e){return{pageName:e.pageName,states:e.states,classKit:e.classKit,Fetcher:function(e){return function(){var t=[];t.push([e]),t.push(this["classKit"][e]["base"]);for(var n=0,a=Object.keys(this["classKit"][e]["states"]);n<a.length;n++){var i=a[n];t.push(this["classKit"][e]["states"][i][this["states"][i]])}return t}}}}function c(e,t){var n={};n[t.pageName]=[];for(var a=0,i=Object.keys(t["classKit"]);a<i.length;a++){var s=i[a],o=s.replace(/-/g,"_");0,e[o]=t.Fetcher(s)}}var r=o(a),l=o(i),u=o(s)},ec63:function(e,t,n){"use strict";n("b0c0");var a=n("7a23"),i={id:"nav-bar",class:"noselect"},s={id:"nav-top"},o={key:0,id:"nav-menu-btn",class:"nav-menu-btn"},c={id:"nav-top-links",class:"nav-top-links"},r={id:"nav-top-btns",class:"nav-top-btns"},l=Object(a["i"])("div",{class:"top-cover"},null,-1),u={key:0,class:"back-cover"},d=Object(a["i"])("div",{class:"bottomline"},null,-1);function h(e,t,n,h,b,v){var p=this,g=Object(a["A"])("BtnMenu"),O=Object(a["A"])("svgLogoGunn"),m=Object(a["A"])("NavItem"),j=Object(a["A"])("BtnDarkmode");return Object(a["v"])(),Object(a["h"])("header",i,[Object(a["i"])("section",s,[Object(a["i"])("div",{id:"nav-top-contents",class:Object(a["q"])(e.navTopContentsClass)},[e.showMenuBtn?(Object(a["v"])(),Object(a["h"])("div",o,[Object(a["j"])(g,{class:"btn",menuState:e.states.menu,onToggleMenu:e.setMenu},null,8,["menuState","onToggleMenu"])])):Object(a["g"])("",!0),Object(a["i"])("div",{id:"nav-logo-gunn",class:"nav-logo-gunn",onClick:t[0]||(t[0]=function(e){return p.$redirect("/home")})},[Object(a["j"])(O)]),Object(a["j"])(a["c"],{name:"nav-list-fade"},{default:Object(a["H"])((function(){return[Object(a["I"])(Object(a["i"])("nav",c,[(Object(a["v"])(!0),Object(a["h"])(a["a"],null,Object(a["z"])(e.getNavMenuArr,(function(t){return Object(a["v"])(),Object(a["f"])(m,{class:"nav-top-links-item",page:t,shown:e.showLinks,key:t.name},null,8,["page","shown"])})),128)),Object(a["I"])(Object(a["i"])("div",{id:"nav-top-links-blank",onClick:t[1]||(t[1]=function(t){return e.setMenu(!1)})},null,512),[[a["F"],"short"===e.states.horizontal]])],512),[[a["F"],e.showLinks]])]})),_:1}),Object(a["i"])("div",r,[Object(a["j"])(j,{class:"btn"})])],2),l,Object(a["j"])(a["c"],{name:"nav-back-cover-fade"},{default:Object(a["H"])((function(){return[p.showNavDrawer?(Object(a["v"])(),Object(a["h"])("div",u)):Object(a["g"])("",!0)]})),_:1}),d])])}var b=n("5530"),v=n("5502"),p={viewBox:"0 0 300 80",fill:"none",xmlns:"http://www.w3.org/2000/svg"},g=Object(a["i"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 6.97074C0 3.12091 3.12091 0 6.97074 0H102.689H102.754C106.604 0 109.725 3.12091 109.725 6.97074L109.725 6.99532L109.725 7.03528V32.6592H197.827H197.892C201.741 32.6592 204.862 35.7801 204.862 39.6299L204.862 39.6655L204.862 39.6944V65.3185H293.029C296.879 65.3185 300 68.4394 300 72.2893C300 76.1391 296.879 79.26 293.029 79.26H197.762C193.913 79.26 190.792 76.1391 190.792 72.2893C190.792 72.2785 190.792 72.2677 190.792 72.257C190.792 72.2462 190.792 72.2354 190.792 72.2246V46.6006H102.717L102.689 46.6007L102.662 46.6006H102.625C98.775 46.6006 95.6541 43.4797 95.6541 39.6299L95.6542 39.5977L95.6541 39.5654V13.9415H6.97074C3.12091 13.9415 0 10.8206 0 6.97074Z",fill:"var(--ink1)"},null,-1),O=[g];function m(e,t,n,i,s,o){return Object(a["v"])(),Object(a["h"])("svg",p,O)}var j={name:"logo_gunn"},f=n("6b0d"),k=n.n(f);const C=k()(j,[["render",m]]);var w=C,_={class:"text"},y={class:"typo-mark4--light"},M=Object(a["i"])("div",{class:"line"},null,-1);function N(e,t,n,i,s,o){var c=this;return Object(a["v"])(),Object(a["f"])(a["c"],{name:s.transitName},{default:Object(a["H"])((function(){return[n.shown?(Object(a["v"])(),Object(a["h"])("div",{key:0,onClick:t[0]||(t[0]=function(e){return c.$redirect(n.page.url)})},[Object(a["i"])("div",_,[Object(a["i"])("p",y,Object(a["D"])(c.page.name),1)]),M])):Object(a["g"])("",!0)]})),_:1},8,["name"])}var S={name:"btn_darkmode",props:{page:Object,shown:Boolean},data:function(){return{transitName:"nav-item-fade-".concat(this.page.index)}},computed:Object(b["a"])({},Object(v["c"])("ui",["isDarkmodeOn","getThemeColor"])),methods:Object(b["a"])({},Object(v["d"])("ui",["toggleDarkmode"]))};const x=k()(S,[["render",N]]);var q=x,$={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function H(e,t,n,i,s,o){return Object(a["v"])(),Object(a["h"])("div",{id:"menu-btn",onClick:t[0]||(t[0]=function(){return e.emitToggle&&e.emitToggle.apply(e,arguments)})},[(Object(a["v"])(),Object(a["h"])("svg",$,[Object(a["i"])("g",{id:"icon-menu",class:Object(a["q"])(e.icon_menu)},[Object(a["i"])("g",{id:"g-line-1",class:Object(a["q"])(e.g_line)},[Object(a["i"])("path",{class:Object(a["q"])(e.p_line),d:"M4 8C3.45 8 3 7.55 3 7C3 6.45 3.45 6 4 6H20C20.55 6 21 6.45 21 7C21 7.55 20.55 8 20 8H4Z",fill:"var(--ink0)"},null,2)],2),Object(a["i"])("g",{id:"g-line-2",class:Object(a["q"])(e.g_line)},[Object(a["i"])("path",{class:Object(a["q"])(e.p_line),d:"M20 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13Z",fill:"var(--ink0)"},null,2)],2),Object(a["i"])("g",{id:"g-line-3",class:Object(a["q"])(e.g_line)},[Object(a["i"])("path",{class:Object(a["q"])(e.p_line),d:"M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18Z",fill:"var(--ink0)"},null,2)],2)],2)]))])}var L=n("7f37"),Z="btn_menu";function B(){return{states:L["c"].states,classKit:L["c"].classKit,colorSchemeOverride:!1,touch:!1}}var D={},K={menuState:Boolean},T=Object(b["a"])({},Object(v["c"])("ui",[]));Object(L["d"])(T,L["c"]);var z=Object(b["a"])(Object(b["a"])({},Object(v["d"])("ui",[])),{},{emitToggle:function(){this.$emit("toggleMenu","toggle")}}),I={menuState:function(e){this.states.modal=e}};function A(){}function E(){}var W={name:Z,components:D,props:K,data:B,computed:T,methods:z,watch:I,created:A,mounted:E};const F=k()(W,[["render",H]]);var V=F,G={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},J={id:"icon-mode"},P={id:"p-eye-1"},Y=Object(a["i"])("mask",{id:"path-1-inside-1_201:983",fill:"white"},[Object(a["i"])("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"})],-1),Q={id:"p-eye-2"},R=Object(a["i"])("mask",{id:"path-2-inside-2_201:983",fill:"white"},[Object(a["i"])("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"})],-1),U={id:"p-eye-3"},X=Object(a["i"])("mask",{id:"path-3-inside-3_201:983",fill:"white"},[Object(a["i"])("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"})],-1),ee={id:"p-eye-4"},te=Object(a["i"])("mask",{id:"path-4-inside-4_201:983",fill:"white"},[Object(a["i"])("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"})],-1),ne={id:"p-pupil"},ae=Object(a["i"])("mask",{id:"path-6-inside-5_201:983",fill:"white"},[Object(a["i"])("path",{d:"M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"})],-1),ie={id:"p-moon"},se=Object(a["i"])("mask",{id:"path-7-inside-6_201:983",fill:"white"},[Object(a["i"])("path",{d:"M12.083 9C12.6441 9 13.1713 9.15 13.6245 9.405C12.7027 9.924 12.083 10.89 12.083 12C12.083 13.11 12.7027 14.076 13.6245 14.595C13.1713 14.85 12.6441 15 12.083 15C10.3812 15 9 13.656 9 12C9 10.344 10.3812 9 12.083 9Z"})],-1);function oe(e,t,n,i,s,o){return Object(a["v"])(),Object(a["h"])("div",{id:"mode-btn",class:Object(a["q"])(e.mode_btn),onMouseenter:t[0]||(t[0]=function(t){return e.mouseEnter()}),onMouseleave:t[1]||(t[1]=function(t){return e.mouseLeave()}),onTouchstart:t[2]||(t[2]=function(t){return e.touchStart()}),onClick:t[3]||(t[3]=function(){return e.toggleColorScheme&&e.toggleColorScheme.apply(e,arguments)})},[(Object(a["v"])(),Object(a["h"])("svg",G,[Object(a["i"])("g",J,[Object(a["i"])("g",{id:"g-eye",class:Object(a["q"])(e.g_eye)},[Object(a["i"])("g",P,[Object(a["i"])("g",null,[Y,Object(a["i"])("path",{class:Object(a["q"])(e.p_eye),d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z",stroke:"var(--ink1)","stroke-width":"3.2",mask:"url(#path-1-inside-1_201:983)"},null,2)])]),Object(a["i"])("g",Q,[Object(a["i"])("g",null,[R,Object(a["i"])("path",{class:Object(a["q"])(e.p_eye),d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z",stroke:"var(--ink1)","stroke-width":"3.2",mask:"url(#path-2-inside-2_201:983)"},null,2)])]),Object(a["i"])("g",U,[Object(a["i"])("g",null,[X,Object(a["i"])("path",{class:Object(a["q"])(e.p_eye),d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z",stroke:"var(--ink1)","stroke-width":"3.2",mask:"url(#path-3-inside-3_201:983)"},null,2)])]),Object(a["i"])("g",ee,[Object(a["i"])("g",null,[te,Object(a["i"])("path",{class:Object(a["q"])(e.p_eye),d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z",stroke:"var(--ink1)","stroke-width":"3.2",mask:"url(#path-4-inside-4_201:983)"},null,2)])])],2),Object(a["i"])("g",{id:"g-cover",class:Object(a["q"])(e.g_cover)},[Object(a["i"])("circle",{id:"p-cover",class:Object(a["q"])(e.p_cover),cx:"12",cy:"12",r:"1",fill:"var(--ink6)"},null,2)],2),Object(a["i"])("g",{id:"g-pupil",class:Object(a["q"])(e.g_pupil)},[Object(a["i"])("g",ne,[ae,Object(a["i"])("path",{class:Object(a["q"])(e.p_pupil),d:"M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z",stroke:"var(--ink1)","stroke-width":"3.2",mask:"url(#path-6-inside-5_201:983)"},null,2)])],2),Object(a["i"])("g",{id:"g-moon",class:Object(a["q"])(e.g_moon)},[Object(a["i"])("g",ie,[se,Object(a["i"])("path",{class:Object(a["q"])(e.p_moon),d:"M12.083 9C12.6441 9 13.1713 9.15 13.6245 9.405C12.7027 9.924 12.083 10.89 12.083 12C12.083 13.11 12.7027 14.076 13.6245 14.595C13.1713 14.85 12.6441 15 12.083 15C10.3812 15 9 13.656 9 12C9 10.344 10.3812 9 12.083 9Z",stroke:"var(--ink1)","stroke-width":"0",mask:"url(#path-7-inside-6_201:983)"},null,2)])],2)])]))],34)}var ce="btn_darkmode";function re(){return{states:L["b"].states,classKit:L["b"].classKit,colorSchemeOverride:!1,touch:!1}}var le={},ue=Object(b["a"])({},Object(v["c"])("ui",["isDarkmodeOn"]));Object(L["d"])(ue,L["b"]);var de=Object(b["a"])(Object(b["a"])({},Object(v["d"])("ui",["toggleDarkmode"])),{},{mouseEnter:function(){this.$logg("btn_darkmode - mouseEnter"),this.isDarkmodeOn?this.states.hover="light":this.states.hover="dark"},mouseLeave:function(){this.$logg("btn_darkmode - mouseLeave"),this.states.hover="off"},touchStart:function(){this.$logg("btn_darkmode - touchStart"),this.touch=!0,this.isDarkmodeOn?this.states.hover="light":this.states.hover="dark",setTimeout(this.mouseLeave,2e3)},toggleColorScheme:function(){this.colorSchemeOverride?document.body.className="preferred-color":document.body.className="inverted-color","off"===this.states.hover||this.touch||(this.states.hover="dark"===this.states.hover?"light":"dark"),this.toggleDarkmode(),this.colorSchemeOverride=!this.colorSchemeOverride}}),he={};function be(){}function ve(){}var pe={name:ce,components:le,data:re,computed:ue,methods:de,watch:he,created:be,mounted:ve};const ge=k()(pe,[["render",oe]]);var Oe=ge,me="NavBar";function je(){return{modal:{BtnDarkmode:!1},states:{horizontal:"wide",vertical:"expanded",menu:!1}}}var fe={svgLogoGunn:w,NavItem:q,BtnMenu:V,BtnDarkmode:Oe},ke=Object(b["a"])(Object(b["a"])({},Object(v["c"])("ui",["getNavMenuArr","getNavWidthScale","getMainEl","isMobile"])),{},{showMenuBtn:function(){return"short"===this.getNavWidthScale},showLinks:function(){return"wide"===this.getNavWidthScale||this.states.menu},showNavDrawer:function(){return"short"===this.getNavWidthScale&&this.states.menu},navTopClass:function(){return"wide"===this.getNavWidthScale?"nt--wide":"nt--short"},navTopContentsClass:function(){return"wide"===this.getNavWidthScale?"nav-top-contents ntc--wide":"nav-top-contents ntc--short"}}),Ce=Object(b["a"])(Object(b["a"])({},Object(v["d"])("ui",[])),{},{setMenu:function(e){this.states.menu="toggle"===e?!this.states.menu:e;var t=this.getMainEl,n="-".concat(window.scrollY,"px");if(this.states.menu)t.style.position="fixed",t.style.top=n,t.style.height="var(--vh)",document.documentElement.style.setProperty("height","var(--vh)");else{var a=t.style.top;t.style.position="",t.style.top="",t.style.height="",document.documentElement.style.setProperty("height",""),window.scrollTo(0,-1*parseInt(a||"0"))}}}),we={};function _e(){}function ye(){}var Me={name:me,components:fe,data:je,computed:ke,methods:Ce,watch:we,created:_e,mounted:ye};const Ne=k()(Me,[["render",h]]);t["a"]=Ne}}]);
//# sourceMappingURL=chunk-c069efb8.b04c51d2.js.map