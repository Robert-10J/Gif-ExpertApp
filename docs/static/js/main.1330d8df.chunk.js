(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCateories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Buscar"})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"s7nDRJgP0hOkFO94sDLXgv76Zq1Oqcpz",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=12&api_key=").concat("s7nDRJgP0hOkFO94sDLXgv76Zq1Oqcpz"),e.next=4,fetch(n);case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__bounce",children:t}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(O,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(a.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("h1",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCateories:c})]}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(f,{category:e},e)}))})]})},m=(n(17),document.querySelector("#root"));r.a.render(Object(u.jsx)(h,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.1330d8df.chunk.js.map