(this["webpackJsonphackernews-actdux"]=this["webpackJsonphackernews-actdux"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){e.exports=n(62)},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=n(3),l=n(24),s=n(7),u=n(2),d=n(25),f="GET_FRONT_PAGE",m="GET_RECENT_POSTS",h="GET_QUERY_ITEM",v="SET_VIEW",E=n(8),p=n.n(E),g=function(){return p.a.get("https://hn.algolia.com/api/v1/search?tags=front_page")},w=function(){return p.a.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")},b=function(e){return p.a.get("https://hn.algolia.com/api/v1/search?query=".concat(e,"&tags=story"))};function y(e){return{type:v,filter:e}}var N=function(e){return{type:"RECEIVE_DATA",data:e,receivedAt:Date.now()}},k=function(){return function(e){return e({type:"REQUEST_DATA"}),e(y(f)),g().then((function(t){var n=t.data.hits;e(N(n))}))}},A=function(e){return function(t){return t({type:"REQUEST_DATA"}),t(y(h)),b(e).then((function(e){var n=e.data.hits;t(N(n))}))}},T=n(12),_=n(26),C={key:"root",storage:n.n(_).a,whitelist:["queries"]},O=f,S=Object(u.c)({selectView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return t.filter;default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isFetching:!1,articles:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_DATA":return Object.assign({},e,{isFetching:!0});case"RECEIVE_DATA":return Object.assign({},e,{isFetching:!1,articles:t.data});default:return e}},queries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_QUERY":return[].concat(Object(T.a)(e),[t.query]);case"persist/REHYDRATE":return t.payload?Object(T.a)(t.payload.queries):e;default:return e}}}),j=Object(s.a)(C,S),R=(n(57),n(58),n(59),function(e){return r.a.createElement("nav",{id:"navbar"},r.a.createElement("div",null,r.a.createElement("h4",{id:"search-hn-header"},"Search HN"),e.form),r.a.createElement("div",{className:"queries"},e.queries))}),x=n(27),q=Object(o.b)(null,(function(e){return{save:function(t){return e({type:"SAVE_QUERY",query:t})},search:function(t){return e(A(t))}}}))((function(e){var t=Object(a.useState)(""),n=Object(x.a)(t,2),c=n[0],i=n[1];return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 grey lighten-5",style:{border:"1px solid #212121",padding:".25rem"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("input",{value:c,onChange:function(e){return i(e.target.value)},placeholder:"Enter Search",type:"text",name:"user-input"})),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("button",{className:"waves-effect waves-light btn",type:"submit",onClick:function(t){t.preventDefault(),""!==c&&(e.save(c),e.search(c),i(""))}},"Search")))))})),U=function(e){var t=e.onClick,n=e.active,a=e.text;return r.a.createElement("button",{onClick:t,style:{pointerEvents:n?"none":"auto",backgroundColor:n?"gray":"#2bbbad"},className:"waves-effect waves-light btn"},a)},D=(n(60),f),V=Object(o.b)((function(e){return{selectView:e.selectView}}),(function(e){return{fetchFront:function(){return e(k())},fetchNew:function(){return e((function(e){return e({type:"REQUEST_DATA"}),e(y(m)),w().then((function(t){var n=t.data.hits;e(N(n))}))}))}}}))((function(e){var t,n;return e.selectView===D?(t=!0,n=!1):(n=!0,t=!1),r.a.createElement("div",{id:"button-view"},r.a.createElement(U,{active:t,onClick:e.fetchFront,text:"Front Page"})," ",r.a.createElement(U,{active:n,onClick:e.fetchNew,text:"Recent Posts"})," ")})),W=(n(61),function(){return r.a.createElement("div",{id:"the-header-div"},r.a.createElement("header",{id:"the-header"},r.a.createElement("h1",{id:"hn-h1"},"HN "),r.a.createElement(V,null)))}),F=function(e){return r.a.createElement("li",{id:e.id,onClick:e.onClick},r.a.createElement("button",{className:"waves-effect waves-light btn",onClick:e.onClick}," ",e.item))},P=Object(o.b)((function(e){return{queries:e.queries}}),(function(e){return{search:function(t){return e(A(t))}}}))((function(e){return r.a.createElement("ul",null,e.queries.map((function(t){return r.a.createElement(F,{key:t,item:t,id:t,onClick:function(){return e.search(t)}})})))})),Q=(n(22),function(e){var t=e.title,n=e.author,a=e.points,c=e.url;return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card blue-grey lighten-3"},r.a.createElement("div",{className:"header"},r.a.createElement("a",{href:c,rel:"noreferrer noopener",className:"card-title",target:"_blank"},r.a.createElement("p",{className:"article-headline"},t))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("div",{className:"score"},"Score:",r.a.createElement("span",{className:"deep-orange-text text-darken-3"},a," ")),r.a.createElement("div",{className:"author"},"By:",r.a.createElement("span",{className:"deep-orange-text text-darken-3"},n," ")))))}),G=Object(o.b)((function(e){return{articles:e.articles.articles}}))((function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row",id:"connected-row"},t.map((function(e,t){return r.a.createElement(Q,{key:t,title:e.title,url:e.url,points:e.points,author:e.author})}))))})),I=function(){return r.a.createElement("div",{style:{margin:0},className:"row"},r.a.createElement("div",{className:"col s12 m3 l2"},r.a.createElement(R,{form:r.a.createElement(q,null),queries:r.a.createElement(P,null)})),r.a.createElement("div",{style:{padding:0},className:"col s12 m9 l10"},r.a.createElement(W,null),r.a.createElement(G,null)))},B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(){var e=Object(u.d)(j,Object(u.a)(d.a)),t=Object(s.b)(e);return e.dispatch(k()),{store:e,persistor:t}}(),J=L.persistor,M=L.store;i.a.render(r.a.createElement(o.a,{store:M},r.a.createElement(l.PersistGate,{loading:null,onBeforeLift:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Nothing to see here"))},persistor:J},r.a.createElement(B,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hackernews-actdux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hackernews-actdux","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.2ef0a315.chunk.js.map