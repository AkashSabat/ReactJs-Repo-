(this["webpackJsonpmy-first-react-app"]=this["webpackJsonpmy-first-react-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(3),i=n.n(a),r=(n(9),n(10),n(4)),l=(n(11),n(12),n(0));var j=function(e){var t=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.toLocaleString("en-US",{month:"long"}),s=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__day",children:t}),Object(l.jsx)("div",{className:"expense-date__month",children:n}),Object(l.jsx)("div",{className:"expense-date__year",children:s})]})};n(14);var d=function(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})};var o=function(e){var t=Object(s.useState)(e.title),n=Object(r.a)(t,2),c=n[0],a=n[1];return Object(l.jsxs)(d,{className:"expense-item",children:[Object(l.jsx)(j,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:c}),Object(l.jsx)("div",{className:"expense-item__price",children:e.amount})]}),Object(l.jsx)("button",{onClick:function(){a("Updated!!!"),console.log(c)},children:"Change the title"})]})};var x=function(e){return Object(l.jsxs)(d,{className:"expenses",children:[Object(l.jsx)(o,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(l.jsx)(o,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(l.jsx)(o,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date})]})},m=(n(15),n(16),function(){return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text"})]}),Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"number",min:"1"})]}),Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",min:"2019-01-20",max:"2022-05-25"})]})]}),Object(l.jsx)("div",{className:"new-expense__actions",children:Object(l.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),u=function(){return Object(l.jsx)("div",{className:"new-expense",children:Object(l.jsx)(m,{})})};var b=function(){var e=[{title:"Car Insurance",amount:100,date:new Date(2021,2,28)},{title:"Health Insurance",amount:500,date:new Date(2021,2,29)},{title:"Vehicle Insurance",amount:650,date:new Date(2021,2,30)}];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("p",{children:" Expense Tracker Project. "}),Object(l.jsx)(u,{}),Object(l.jsx)(x,{items:e})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),h()}],[[17,1,2]]]);
//# sourceMappingURL=main.24536e65.chunk.js.map