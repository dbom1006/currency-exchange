(this["webpackJsonptnm-currency-exchange"]=this["webpackJsonptnm-currency-exchange"]||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n.n(a),r=n(18),i=n.n(r),d=(n(24),n(8)),o=n.n(d),l=n(19),u=n(4),b=n(9),j=n(3),x=n.p+"static/media/icon-exchange.a8a7ca84.svg",m=n(26).default,h=m.CancelToken,p=function(e,t){return c&&c(),m.get("".concat("https://v6.exchangerate-api.com/v6/35f2fbd8af65b995ac7af2d1/pair","/").concat(e,"/").concat(t),{cancelToken:new h((function(e){return c=e}))}).then((function(e){return e.data.conversion_rate})).catch((function(e){return 0}))},f={USD:200,EUR:150,GBP:10},O=[{id:"USD",name:"USD",symbol:"$"},{id:"EUR",name:"EUR",symbol:"\u20ac"},{id:"GBP",name:"GBP",symbol:"\xa3"}],g=function(e){return Math.round(1e3*e)/1e3},y=(n(45),n(0));var v=function(){var e=Object(a.useState)(f),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),r=Object(j.a)(s,2),i=r[0],d=r[1],m=Object(a.useState)(),h=Object(j.a)(m,2),v=h[0],N=h[1],w=Object(a.useState)(0),S=Object(j.a)(w,2),E=S[0],k=S[1],C=Object(a.useState)(0),B=Object(j.a)(C,2),U=B[0],D=B[1],M=Object(a.useState)(1),G=Object(j.a)(M,2),P=G[0],R=G[1],T=function(){var e=Object(l.a)(o.a.mark((function e(t,n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(" --- "),t===n&&(R(1),D(g(E))),e.next=4,p(t,n);case 4:(c=e.sent)&&(R(c),D(g(c*E)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){i&&v&&T(i.id,v.id)}),[i,v]);var J=Object(a.useMemo)((function(){return!!i&&(n[i.id]<E?"Exceeds balance":void 0)}),[n,E,i]),I=Object(a.useMemo)((function(){return E&&U&&(null===i||void 0===i?void 0:i.id)!==(null===v||void 0===v?void 0:v.id)&&!J}),[E,U,J,i,v]);return Object(y.jsxs)("div",{className:"w-full h-screen flex justify-center items-center bg-gray-800",children:[Object(y.jsxs)("div",{className:"space-y-6 text-center",children:[Object(y.jsx)("h1",{className:"text-2xl text-gray-200 font-semibold",children:"Currency Exchange"}),Object(y.jsxs)("div",{className:"bg-white p-6 rounded-lg space-y-6 w-96",children:[Object(y.jsx)("div",{className:"flex justify-between",children:O.map((function(e){return Object(y.jsx)("button",{className:"px-8 py-1 rounded text-white uppercase border border-indigo-500 "+(i&&i.id===e.id?"bg-indigo-500":"text-indigo-500"),onClick:function(){return d(e)},children:e.name},e.name)}))}),i?Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"flex justify-between items-center",children:[Object(y.jsxs)("span",{className:"font-medium",children:["Balance: ",i.symbol,n[i.id]]}),Object(y.jsxs)("span",{className:"text-gray-600",children:["-",Object(y.jsx)("input",{type:"number",step:"0.1",value:E,onChange:function(e){var t=e.target.value;t<0&&(t=""),k(t),D(g(P*t))},className:"ml-2 w-28 h-10 border px-4 py-2 rounded-md outline-none "+(J?"border-red-400":"border-gray-400 focus:border-indigo-500 ")})]})]}),J&&Object(y.jsx)("p",{className:"text-red-400 text-right text-xs mt-2",children:J})]}):Object(y.jsx)("p",{className:"text-gray-500 text-sm",children:"Select your currency to exchange"})]}),Object(y.jsxs)("div",{className:"flex justify-center items-center text-white",children:[Object(y.jsx)("img",{className:"h-6 w-6 mr-4",src:x,alt:"Exchange"}),i&&v&&Object(y.jsxs)("span",{className:"px-5 py-1 border rounded-xl border-white text-sm",children:[null===i||void 0===i?void 0:i.symbol,"1 = ",null===v||void 0===v?void 0:v.symbol,P]})]}),Object(y.jsxs)("div",{className:"bg-white p-6 rounded-lg space-y-6 w-96",children:[Object(y.jsx)("div",{className:" flex justify-between",children:O.map((function(e){return Object(y.jsx)("button",{className:"px-8 py-1 rounded text-white uppercase border border-indigo-500 "+(v&&v.id===e.id?"bg-indigo-500":"text-indigo-500"),onClick:function(){return N(e)},children:e.name},e.name)}))}),v?Object(y.jsxs)("div",{className:"flex justify-between items-center",children:[Object(y.jsxs)("span",{className:"font-medium",children:["Balance: ",v.symbol,n[v.id]]}),Object(y.jsxs)("span",{className:"text-gray-600",children:["+",Object(y.jsx)("input",{type:"number",step:"0.1",onChange:function(e){var t=e.target.value;t<0&&(t=0),D(t),k(g(t/P))},value:U,className:"ml-2 w-28 h-10 border border-gray-400 focus:border-indigo-500 px-4 py-2 rounded-md outline-none"})]})]}):Object(y.jsx)("p",{className:"text-gray-500 text-sm",children:"Select your currency to exchange"})]}),Object(y.jsx)("button",{onClick:function(){var e,t=Object(b.a)(Object(b.a)({},n),{},(e={},Object(u.a)(e,i.id,g(n[i.id]-E)),Object(u.a)(e,v.id,g(n[v.id]+U)),e));c(t),k(0),D(0)},className:"w-full px-4 py-3 text-white font-semibold rounded-lg uppercase "+(I?"bg-green-500":"bg-gray-400 cursor-not-allowed"),disabled:!I,children:"Exchange"})]}),Object(y.jsx)("p",{className:"absolute bottom-0 pb-4 text-gray-500 text-sm",children:"Created by Duc Thai - 6.Nov.2021"})]})};i.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(v,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.6a0dd655.chunk.js.map