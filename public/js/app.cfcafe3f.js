(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"0782":function(t,e,a){"use strict";var r=a("d8dd"),n=a.n(r);n.a},"1be2":function(t,e,a){"use strict";var r=a("faf5"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header"),a("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("img",{attrs:{src:t.image,alt:""}})])},s=[],l={name:"Header",data:function(){return{image:a("cf05")}}},c=l,u=(a("ac7a"),a("2877")),p=Object(u["a"])(c,i,s,!1,null,"ee583780",null),f=p.exports,m={name:"App",components:{Header:f}},d=m,v=(a("034f"),Object(u["a"])(d,n,o,!1,null,null,null)),g=v.exports,h=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("selection",{staticClass:"search"},[a("h1",[t._v("Track Player Stats")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"platform"}},[t._v("Platform")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.platform,expression:"platform"}],attrs:{name:"platform",id:"platform"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.platform=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"psn"}},[t._v("Playstation")]),a("option",{attrs:{value:"xbl"}},[t._v("Xbox")]),a("option",{attrs:{value:"origin"}},[t._v("Origin")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"gamertag"}},[t._v("Gamertag")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.gamertag,expression:"gamertag"}],attrs:{type:"text",name:"text",id:"gamertag",placeholder:"Origin ID, Xbox Live gamertag or PSN ID"},domProps:{value:t.gamertag},on:{input:function(e){e.target.composing||(t.gamertag=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])])},_=[],y=(a("99af"),{name:"Search",data:function(){return{platform:"psn",gamertag:""}},beforeCreate:function(){document.body.className="body-bg-img"},methods:{onSubmit:function(){this.gamertag?this.$router.push("/profile/".concat(this.platform,"/").concat(this.gamertag)):this.$toasted.show("Please Enter a Gamertag",{duration:3e3,icon:"exclamation-circle",position:"top-center"})}}}),x=y,w=(a("0782"),Object(u["a"])(x,b,_,!1,null,null,null)),C=w.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[t.loading?a("div",[a("h3",[t._v("Loading ..")])]):t._e(),t.error?a("div",[a("h1",[t._v(t._s(t.error))]),a("router-link",{attrs:{to:"/"}},[t._v("Go Back")])],1):t._e(),t.profileData?a("div",{staticClass:"container"},[a("div",{staticClass:"top-card"},[a("div",{staticClass:"gamertag"},[a("img",{staticClass:"icon",attrs:{src:t.profileData.platformInfo.avatarUrl,alt:""}}),a("h1",[t._v(t._s(t.profileData.platformInfo.platformUserId))])]),a("div",{staticClass:"rank"},[a("img",{staticClass:"icon",attrs:{src:t.profileData.segments[0].stats.rankScore.metadata.iconUrl,alt:""}}),a("h2",[t._v(" "+t._s(t.profileData.segments[0].stats.rankScore.metadata.rankName))])]),a("div",{staticClass:"stats"},[a("ul",[a("li",[a("h3",[t._v("Level: "+t._s(t.profileData.segments[0].stats.level.value))])]),a("li",[a("h3",[t._v("Lifetime kills: "+t._s(t.profileData.segments[0].stats.kills.value))])]),a("li",[a("h3",[t._v("Times placed top 3: "+t._s(t.profileData.segments[0].stats.timesPlacedtop3.value))])])])])]),a("div",{staticClass:"grid"},[a("div",{staticClass:"img-item"},[a("img",{staticClass:"legend-avatar",attrs:{src:t.profileData.segments[1].metadata.imageUrl,alt:""}})]),a("div",[a("ul",[a("li",{staticClass:"item"},[a("h3",[t._v("Selected Legend: ")]),a("p",[t._v(t._s(t.profileData.metadata.activeLegendName))])]),a("li",{staticClass:"item"},[a("h3",[t._v("Kills: ")]),a("p",[t._v(t._s(t.profileData.segments[1].stats.kills.value))])]),a("li",{staticClass:"item"},[a("h3",[t._v("Winning kills: ")]),a("p",[t._v(t._s(t.profileData.segments[1].stats.winningKills.value))])])])])])]):t._e()])},O=[],k=(a("96cf"),a("1da1")),P=a("bc3a"),j=a.n(P),S={name:"Profile",data:function(){return{loading:!1,error:"",profileData:""}},beforeCreate:function(){document.body.className="body-bg-no-img"},created:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,j.a.get("/api/v1/profile/".concat(t.$route.params.platform,"/").concat(t.$route.params.gamertag));case 4:a=e.sent,t.profileData=a.data.data,console.log(t.profileData),t.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),t.loading=!1,t.error=e.t0.response.data.message;case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},$=S,N=(a("1be2"),Object(u["a"])($,D,O,!1,null,null,null)),L=N.exports;r["a"].use(h["a"]);var E=new h["a"]({mode:"history",routes:[{path:"/",name:"search",component:C},{path:"/profile/:platform/:gamertag",name:"profile",component:L}]}),I=a("a65d"),T=a.n(I);r["a"].config.productionTip=!1,r["a"].use(T.a,{iconPack:"fontawesome"}),new r["a"]({router:E,render:function(t){return t(g)}}).$mount("#app")},"5d40":function(t,e,a){},"85ec":function(t,e,a){},ac7a:function(t,e,a){"use strict";var r=a("5d40"),n=a.n(r);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.28207be9.png"},d8dd:function(t,e,a){},faf5:function(t,e,a){}});
//# sourceMappingURL=app.cfcafe3f.js.map