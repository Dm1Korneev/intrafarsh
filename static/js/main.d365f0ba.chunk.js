(this.webpackJsonpintrafarsh=this.webpackJsonpintrafarsh||[]).push([[0],{55:function(e,t,n){e.exports=n(91)},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),u=n.n(o),c=n(27),i=n(52),l=n(53),s=n(7),p=function(){return function(e){return function(t){return t.payload&&t.payload.error&&console.warn("[Error Middleware error]:",t.payload.error),e(t)}}},f=n(9),d=n(14),m=n(18),b=n(23);var v=function(e){return Object(s.b)("".concat(e,"_REQUEST"))},E=function(e){return Object(s.b)("".concat(e,"_SUCCESS"))},h=function(e){return Object(s.b)("".concat(e,"_FAILURE"))},O=v("APP_START"),g=v("GET_ROUTES"),j=Object(s.b)("SET_ROUTES"),T=v("GET_ROUTE_POINTS"),x=Object(s.b)("SET_ROUTE_POINTS"),w=Object(s.c)([],(function(e){return e.addCase(j,(function(e,t){return t.payload.routes}))})),I=Object(s.c)({},(function(e){return e.addCase(x,(function(e,t){return Object(m.a)({},e,Object(d.a)({},t.payload.routeID,t.payload.routePoints))}))})),S=Object(f.combineReducers)({loaded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!t)return e;var n=t.type,r=/(.*)_(SUCCESS)/.exec(n);if(!r)return e;var a=Object(b.a)(r,2),o=a[1];return Object(m.a)({},e,Object(d.a)({},o,!0))},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(!t)return e;var n=t.type,r=/(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(n);if(!r)return e;var a=Object(b.a)(r,3),o=a[1],u=a[2];return Object(m.a)({},e,Object(d.a)({},o,"REQUEST"===u))},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload,a=/(.*)_(REQUEST|FAILURE)/.exec(n);if(!a)return e;var o=Object(b.a)(a,3),u=o[1],c=o[2];return Object(m.a)({},e,Object(d.a)({},u,"FAILURE"===c?r&&r.error:""))},routes:w,routePoints:I}),P=n(17),R=n.n(P),y=n(11),U="".concat("https://intrafarsh.ru/api","/rpc"),_=function(e){return new Promise((function(t){return e.json().then((function(n){return t({response:e,result:n})}))}))},D=function(e){return new Promise((function(t,n){fetch(U,function(e){return{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(e)}}(e)).then(_).then((function(e){var r=e.response,a=e.result;return r.ok?t(a.result):n(a)})).catch((function(e){return n(e)}))}))},A=function(e,t,n){return{method:e,params:t,id:n}},k=function(){return D(A("Routes"))},N=function(e){var t=e.routeID;return D(A("RoutePoints",{RouteID:t}))},F=R.a.mark(C);function C(){var e;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(y.b)(k);case 3:return e=t.sent,t.next=6,Object(y.c)(j({routes:e}));case 6:return t.next=8,Object(y.c)(E("GET_ROUTES")({routes:e}));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(y.c)(h("GET_ROUTES")({error:t.t0.message}));case 14:case"end":return t.stop()}}),F,null,[[0,10]])}var L=R.a.mark(G);function G(e){var t,n;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.routeID,r.prev=1,r.next=4,Object(y.b)(N,{routeID:t});case 4:return n=r.sent,r.next=7,Object(y.c)(x({routePoints:n,routeID:t}));case 7:return r.next=9,Object(y.c)(E("GET_ROUTE_POINTS")({routePoints:n}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(y.c)(h("GET_ROUTE_POINTS")({error:r.t0.message}));case 15:case"end":return r.stop()}}),L,null,[[1,11]])}var M=R.a.mark(Q);function Q(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=y.a,e.next=3,Object(y.d)(v("GET_ROUTES").type,C);case 3:return e.t1=e.sent,e.next=6,Object(y.d)(v("GET_ROUTE_POINTS").type,G);case 6:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=10,(0,e.t0)(e.t3);case 10:case"end":return e.stop()}}),M)}var z=function(){var e=Object(l.a)(),t=Object(s.a)({reducer:S,middleware:[].concat(Object(i.a)(Object(s.d)()),[p,e]),devTools:!1});return e.run(Q),t},B=function(e,t){var n=t.mapStateToProps,r=void 0===n?null:n,a=t.mapDispatchToProps,o=void 0===a?null:a,u=e;if(r||o){var i=o?function(e){return Object(f.bindActionCreators)(o,e)}:null;u=Object(c.b)(r,i)(e)}return u},J=n(20),V=n(21),W=function(e){return e.routes},Y=n(5),Z=n(6);function H(){var e=Object(Y.a)(["\n    width: 54px;\n    height: 54px;\n    border-radius: 50%;\n"]);return H=function(){return e},e}var K=Z.a.img(H()),X=function(e){var t=e.url,n=e.name;return a.a.createElement(K,{src:t,alt:"Avatar of ".concat(n)})};function $(){var e=Object(Y.a)(["\n    width: 194px;\n    height: 34px;\n    background: #1E0455;\n    color: #FFFFFF;\n    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    font-size: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return $=function(){return e},e}var q=Z.a.div($()),ee=function(e){var t=e.title;return a.a.createElement(q,null,t)};function te(){var e=Object(Y.a)(["\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    overflow: hidden;\n    height: 100%;\n    width: 100%;\n"]);return te=function(){return e},e}function ne(){var e=Object(Y.a)(["\n    position: absolute;\n    left: 70px;\n    bottom: -17px;\n"]);return ne=function(){return e},e}function re(){var e=Object(Y.a)(["\n    position: absolute;\n    left: 0px;\n    top: -27px;\n"]);return re=function(){return e},e}function ae(){var e=Object(Y.a)(["\n    position: relative;\n    height: 190px;\n"]);return ae=function(){return e},e}function oe(){var e=Object(Y.a)(["\n    padding-top: 27px;\n    padding-bottom: 27px;\n"]);return oe=function(){return e},e}var ue=Z.a.div(oe()),ce=Z.a.div(ae()),ie=Z.a.div(re()),le=Z.a.div(ne()),se=Z.a.div(te()),pe=function(e){var t=e.routerName,n=e.routeID,r=e.imageUrl;return a.a.createElement(ue,null,a.a.createElement(J.b,{to:"/route/".concat(n)},a.a.createElement(ce,null,a.a.createElement(se,null,a.a.createElement("img",{src:r,alt:t})),a.a.createElement(le,null,a.a.createElement(ee,{title:t})),a.a.createElement(ie,null,a.a.createElement(X,{url:r,name:t})))))};function fe(){var e=Object(Y.a)(["\n    height: 5rem;\n"]);return fe=function(){return e},e}var de=Z.a.div(fe()),me=function(){return a.a.createElement(de,null)};function be(){var e=Object(Y.a)(["\n    border-top-left-radius: 40px;\n    padding-left: 16px;\n    padding-top: 16px;\n    padding-bottom: 1rem;\n    background-color: #DADADA;\n    min-height: 100vh;\n"]);return be=function(){return e},e}function ve(){var e=Object(Y.a)(["\n    min-height: 100vh;\n    background: linear-gradient(90deg, #00AAFF 0%, #6B00F4 100%);\n"]);return ve=function(){return e},e}var Ee=Z.a.main(ve()),he=Z.a.div(be()),Oe=B((function(e){var t=e.getRoutes,n=e.routes;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement(Ee,null,a.a.createElement(me,null),a.a.createElement(he,null,n.map((function(e){var t={routeID:e.RouteID,routerName:e.RouterName,imageUrl:e.ImageUrl};return a.a.createElement(pe,Object.assign({key:e.RouteID},t))}))))}),{mapDispatchToProps:{getRoutes:g},mapStateToProps:function(e){return{routes:W(e)}}}),ge=n(35),je=function(e){return e.routePoints},Te=function(e,t){return Object(ge.a)(je,(function(e){return e[t]||[]}))(e)},xe=n(50),we=n.n(xe),Ie=n(51);function Se(){var e=Object(Y.a)(["\n    height: 100vh;\n    width: 100%;\n"]);return Se=function(){return e},e}var Pe=Z.a.div(Se()),Re=function(e){var t=e.getRoutePoints,n=e.routeID,o=e.routePoints;if(Object(r.useEffect)((function(){t({routeID:n})}),[t,n]),!o.length)return null;var u={ne:{lat:0,lng:0},sw:{lat:Number.POSITIVE_INFINITY,lng:Number.POSITIVE_INFINITY}};o.forEach((function(e){u.ne.lat=Math.max(u.ne.lat,e.Latitude),u.ne.lng=Math.max(u.ne.lng,e.Longitude),u.sw.lat=Math.min(u.sw.lat,e.Latitude),u.sw.lng=Math.min(u.sw.lng,e.Longitude)})),u.ne.lat+=.001,u.ne.lng+=.001,u.sw.lat-=.001,u.sw.lng-=.001;var c={width:window.screen.width,height:window.screen.height},i=Object(Ie.fitBounds)(u,c),l=i.center,s=i.zoom;return a.a.createElement(Pe,null,a.a.createElement(we.a,{bootstrapURLKeys:{key:"AIzaSyDs6JpHvMQeNZPleYdZXSzzAI4LygkUbuQ"},defaultCenter:l,defaultZoom:s,streetViewControl:!1,mapTypeControl:!1,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){return function(e,t){o.map((function(n){return new t.Marker({position:{lat:n.Latitude,lng:n.Longitude},map:e,title:n.PointName})}))}(e.map,e.maps)}}))};Re.defaultProps={routePoints:[]};var ye=B(Re,{mapDispatchToProps:{getRoutePoints:T},mapStateToProps:function(e,t){var n=t.match.params.routeID;return{routePoints:Te(e,n),routeID:n}}}),Ue=function(){return a.a.createElement("div",null,"Place page")},_e=function(){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(J.b,{to:"/routes"},"Routes")),a.a.createElement("li",null,a.a.createElement(J.b,{to:"/route"},"Route")),a.a.createElement("li",null,a.a.createElement(J.b,{to:"/place"},"Place"))))},De=B((function(e){var t=e.appStart;return Object(r.useEffect)((function(){t()}),[t]),a.a.createElement(J.a,null,a.a.createElement(V.c,null,a.a.createElement(V.a,{path:"/routes",component:Oe}),a.a.createElement(V.a,{path:"/route/:routeID",component:ye}),a.a.createElement(V.a,{path:"/place",component:Ue}),a.a.createElement(V.a,{path:"/",component:_e})))}),{mapDispatchToProps:{appStart:O}});n(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(c.a,{store:z()},a.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.d365f0ba.chunk.js.map