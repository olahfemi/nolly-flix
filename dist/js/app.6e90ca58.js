(function(e){function t(t){for(var r,l,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)l=u[f],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&p.push(i[l][0]),i[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);a&&a(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/nolly-flix/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"27d3":function(e,t,n){"use strict";n("53f4")},"53f4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("MovieList")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("Welcome to Nolly-Flix")]),n("h3",[e._v("All Movies")]),n("ul",e._l(e.sortedMovies,(function(t){return n("li",{key:t.title},[e._v(" "+e._s(t.title)+" - $"+e._s(25*t.likes)+" "),n("button",{on:{click:function(e){t.likes++}}},[e._v("Like ("+e._s(t.likes)+")")])])})),0)])},u=[],c=n("2909"),s=(n("4e82"),{name:"MovieList",data:function(){return{movies:[{title:"The Redemption",likes:0},{title:"Africa’s Tech Roots",likes:4},{title:"The Invisible Man",likes:2},{title:"The Complicated Project",likes:3},{title:"Simply Javascript",likes:6},{title:"The New Web",likes:0}]}},computed:{sortedMovies:function(){var e=Object(c["a"])(this.movies);return e.sort((function(e,t){return t.likes-e.likes}))}}}),a=s,f=(n("27d3"),n("2877")),p=Object(f["a"])(a,l,u,!1,null,"0323c168",null),d=p.exports,v={name:"App",components:{MovieList:d}},h=v,b=(n("034f"),Object(f["a"])(h,i,o,!1,null,null,null)),y=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.6e90ca58.js.map