(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{52:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(7),r=n.n(a),o=n(37),i=n(22),j=n(3);var s=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Instant Notes"})})},u=n(34),l=n.n(u);var b=function(t){return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("p",{children:t.content}),Object(j.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:Object(j.jsx)(l.a,{})})]})},O=n(26),d=n(30),h=n(36),x=n.n(h),f=n(69),p=n(70);var v=function(t){var e=Object(c.useState)(!1),n=Object(i.a)(e,2),a=n[0],r=n[1],o=Object(c.useState)({title:"",content:""}),s=Object(i.a)(o,2),u=s[0],l=s[1];function b(t){var e=t.target,n=e.name,c=e.value;l((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(O.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"create-note",children:[a&&Object(j.jsx)("input",{name:"title",onChange:b,value:u.title,placeholder:"Title"}),Object(j.jsx)("textarea",{name:"content",onClick:function(){r(!0)},onChange:b,value:u.content,placeholder:"Take a note...",rows:a?3:1}),Object(j.jsx)(p.a,{in:a,children:Object(j.jsx)(f.a,{onClick:function(e){t.onAdd(u),l({title:"",content:""}),e.preventDefault()},children:Object(j.jsx)(x.a,{})})})]})})};var m=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1];function r(t){a((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(s,{}),Object(j.jsx)(v,{onAdd:function(t){a((function(e){return[].concat(Object(o.a)(e),[t])}))}}),n.map((function(t,e){return Object(j.jsx)(b,{id:e,title:t.title,content:t.content,onDelete:r},e)}))]})};r.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.1c125a67.chunk.js.map