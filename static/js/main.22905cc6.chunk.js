(this.webpackJsonpintrafarsh=this.webpackJsonpintrafarsh||[]).push([[0],{24:function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,r){e.exports=r(46)},44:function(e,t,r){},45:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(15),o=r.n(c),i=r(25),u=r(26),s=r(27),l=r(9),f=function(){return function(e){return function(t){return t.payload&&t.payload.error&&console.warn("[Error Middleware error]:",t.payload.error),e(t)}}},p=r(5),d=r(8),v=r(12),h=r(13);var b=Object(p.combineReducers)({loaded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!t)return e;var r=t.type,n=/(.*)_(SUCCESS)/.exec(r);if(!n)return e;var a=Object(h.a)(n,2),c=a[1];return Object(v.a)({},e,Object(d.a)({},c,!0))},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!t)return e;var r=t.type,n=/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(r);if(!n)return e;var a=Object(h.a)(n,3),c=a[1],o=a[2];return Object(v.a)({},e,Object(d.a)({},c,"REQUEST"===o))},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload,a=/(.*)_(REQUEST|FAILURE)/.exec(r);if(!a)return e;var c=Object(h.a)(a,3),o=c[1],i=c[2];return Object(v.a)({},e,Object(d.a)({},o,"FAILURE"===i?n&&n.error:""))}}),m=r(14),j=r.n(m),E=r(10),O=function(e){return Object(l.b)("".concat(e,"_FAILURE"))},g="".concat("http://intrafarsh.ru/api","/rpc"),S=function(e){return new Promise((function(t){return e.json().then((function(r){return t({response:e,result:r})}))}))},w=function(e){return new Promise((function(t,r){fetch(g,function(e){return{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)}}(e)).then(S).then((function(e){var n=e.response,a=e.result;return n.ok?t(a):r(a)})).catch((function(e){return r(e)}))}))},A=function(){return w({method:"Swagger",params:e,id:t});var e,t},x=j.a.mark(y);function y(){var e;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(E.b)(A);case 3:return e=t.sent,t.next=6,Object(E.c)((r="APP_START",Object(l.b)("".concat(r,"_SUCCESS")))({result:e}));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(E.c)(O("APP_START")({error:t.t0.message}));case 12:case"end":return t.stop()}var r}),x,null,[[0,8]])}var T=j.a.mark(R);function R(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=E.a,e.next=3,Object(E.d)((t="APP_START",Object(l.b)("".concat(t,"_REQUEST"))).type,y);case 3:return e.t1=e.sent,e.t2=[e.t1],e.next=7,(0,e.t0)(e.t2);case 7:case"end":return e.stop()}var t}),T)}var U=function(){var e=Object(s.a)(),t=Object(l.a)({reducer:b,middleware:[].concat(Object(u.a)(Object(l.c)()),[f,e]),devTools:!1});return e.run(R),t},P=r(24),_=r.n(P);r(44);var k=function(e){var t=e.appStart;return Object(n.useEffect)((function(){t()}),[t]),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("img",{src:_.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",null,"Intrafarsh")))};r(45),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(i.a,{store:U()},a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.22905cc6.chunk.js.map