(this.webpackJsonpnote=this.webpackJsonpnote||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),o=n.n(a),l=n(6),s=(n(26),n(8)),u=n(7),i=n(9),j=Object(i.b)({name:"note",initialState:{note:[{content:"note 1 content",color:"red"}]},reducers:{addNewNote:function(e,t){e.note.push(t.payload)}}}),b=j.reducer,d=j.actions.addNewNote,h=(j.actions.filterNote,n(4)),x=n(3);var O=function(){var e,t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),j=i[0],b=i[1],O=Object(l.b)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("form",{onSubmit:function(e){O(d({content:r,color:j})),e.preventDefault()},children:[Object(x.jsx)(h.c,{children:"Note"}),Object(x.jsx)(h.b,{style:{height:"250px"},children:Object(x.jsx)(h.f,(e={className:"red"===j?"red":"blue"===j?"blue":"dark",type:"button",value:r,onChange:function(e){return a(e.target.value)},style:{height:"250px"},id:"exampleText",name:"text"},Object(u.a)(e,"type","textarea"),Object(u.a)(e,"placeholder","Note Al"),e))}),Object(x.jsx)(h.g,{htmlFor:"colors"}),Object(x.jsx)(h.f,{className:"mx-2",style:{backgroundColor:"burlywood",height:"50px",width:"50px"},type:"radio",name:"colors",value:"red",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)(h.f,{className:"mx-2",style:{backgroundColor:"aquamarine",height:"50px",width:"50px"},type:"radio",name:"colors",value:"blue",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)(h.f,{style:{backgroundColor:"darkgrey",height:"50px",width:"50px"},type:"radio",name:"colors",value:"dark",onChange:function(e){return b(e.target.value)}}),Object(x.jsx)(h.a,{className:"mt-2 mx-2 ",type:"submit",children:"Ekle"})]})})};var m=function(e){var t=e.not;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(h.b,{className:"red"===t.color?"red":"blue"===t.color?"blue":"dark",type:"button",children:Object(x.jsx)(h.c,{className:"text-center aling-item-center",children:t.content})})})};n(28);var g=function(){var e=Object(l.c)((function(e){return e.note.note})),t=Object(c.useState)(""),n=Object(s.a)(t,2),r=n[0],a=n[1],o=e.filter((function(e){return e.content.toLowerCase().includes(r.toLowerCase())}));return Object(x.jsxs)(h.e,{children:[Object(x.jsx)(h.h,{className:"mt-5 mb-5",children:Object(x.jsxs)(h.d,{xs:"12",children:[Object(x.jsx)(h.f,{value:r,onChange:function(e){return a(e.target.value)},placeholder:"Ara..."}),Object(x.jsx)(O,{})]})}),Object(x.jsx)(h.h,{children:o.map((function(e,t){return Object(x.jsx)(h.d,{xs:"3",children:Object(x.jsx)(m,{not:e})},t)}))})]})},f=Object(i.a)({reducer:{note:b}}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(l.a,{store:f,children:Object(x.jsx)(g,{})})}),document.getElementById("root")),p()}},[[29,1,2]]]);
//# sourceMappingURL=main.415fe79b.chunk.js.map