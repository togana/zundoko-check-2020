(this["webpackJsonpsample-redux-toolkit"]=this["webpackJsonpsample-redux-toolkit"]||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},15:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(3),a=n.n(r),u=(n(15),n(2)),c=n(4),l=Object(c.b)({name:"kiyoshi",initialState:{value:{river:[],music:!0}},reducers:{zun:function(e){e.value.river.push("\u30ba\u30f3")},doko:function(e){e.value.river.push("\u30c9\u30b3")},kiyoshi:function(e){e.value.river.push("\u30ad\u30fb\u30e8\u30fb\u30b7\uff01"),e.value.music=!1}}}),s=l.actions,m=s.zun,v=s.doko,f=s.kiyoshi,h=function(){return function(e,t){t().kiyoshi.value.music&&setTimeout((function(){e(.5<Math.random()?m():v())}),750)}},d=function(e){return e.kiyoshi.value.river},k=l.reducer;function p(){var e=Object(u.c)(d),t=Object(u.b)(),n=["\u30ba\u30f3","\u30ba\u30f3","\u30ba\u30f3","\u30ba\u30f3","\u30c9\u30b3"].toString();return Object(i.useEffect)((function(){e.slice(-5).toString()!==n?t(h()):t((function(e){setTimeout((function(){e(f())}),750)}))}),[e,n,t]),o.a.createElement("div",null,e.map((function(e,t){return o.a.createElement("span",{key:t},e)})))}var b=function(){return o.a.createElement("div",null,o.a.createElement(p,null))},y=Object(c.a)({reducer:{kiyoshi:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:y},o.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.732ce147.chunk.js.map