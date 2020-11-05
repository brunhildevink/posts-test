(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{70:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(0),c=n.n(i),r=n(8),s=n.n(r),o=n(37),l=n(22),j=n(17),d=n(113),b=n(112),u=n(106),f=n(115),m=n(109),h=Object(u.a)((function(e){return{headerTitle:{marginTop:"100px",fontSize:"1.6em",fontFamily:"roboto, sans serif"}}})),x=function(){var e=h();return Object(a.jsx)("header",{className:e.headerTitle,children:Object(a.jsx)("h1",{children:"Browse articles"})})},p=n(114),O=Object(u.a)((function(e){return{formContainer:Object(j.a)({},e.breakpoints.up("md"),{display:"flex",justifyContent:"flex-end"}),form:Object(j.a)({},e.breakpoints.down("md"),{width:"100%"})}})),g=function(e){var t=e.handleSearchFilter,n=O();return Object(a.jsx)(m.a,{className:n.formContainer,children:Object(a.jsx)("form",{className:n.form,onSubmit:t,children:Object(a.jsx)(p.a,{className:n.form,label:"Search by title",variant:"standard",type:"text"})})})},v=n(53),k=n(51),y=n.n(k),C=n(111),w=n(52),S=n.n(w),N=Object(u.a)((function(e){return{close:{marginLeft:"10px",transform:"rotate(45deg)"},image:{background:"url('https://via.placeholder.com/600/56a8c2') no-repeat center center",backgroundSize:"cover",height:"200px"},title:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"400px",height:"1.2em",whiteSpace:"nowrap"},itemContainer:Object(j.a)({fontFamily:"roboto, sans serif",background:"#fff",borderRadius:"4px",margin:"20px 0",padding:"20px",display:"flex",alignItems:"center",boxShadow:"0px 2px 6px 0px rgba(50, 50, 50, 0.1)"},e.breakpoints.down("md"),{margin:"0",marginTop:"20px",padding:"0"}),buttonGroup:{marginTop:"30px",display:"flex",justifyContent:"flex-end"},likesContainer:{display:"flex",flexFlow:"column",textAlign:"center",fontWeight:"bold"},likes:{marginTop:"10px"}}})),F=function(e){var t=e.post,n=e.handleLikeIncrement,i=e.handleRemoveItem,c=(Object(v.a)(e,["post","handleLikeIncrement","handleRemoveItem"]),N());return Object(a.jsxs)(m.a,{container:!0,spacing:3,className:c.itemContainer,children:[Object(a.jsx)(m.a,{item:!0,lg:2,xs:12,className:c.image}),Object(a.jsxs)(m.a,{item:!0,lg:8,xs:12,children:[Object(a.jsx)("h1",{className:c.title,children:t.title}),Object(a.jsx)("p",{children:t.body})]}),Object(a.jsxs)(m.a,{item:!0,lg:2,xs:12,className:c.buttonGroup,children:[Object(a.jsxs)(m.a,{item:!0,className:c.likesContainer,children:[Object(a.jsx)(C.a,{size:"small",color:"secondary",children:Object(a.jsx)(y.a,{onClick:function(){return n(t.id)},children:"Like"})}),Object(a.jsx)("span",{className:c.likes,children:t.likes})]}),Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(C.a,{size:"small",color:"primary",className:c.close,children:Object(a.jsx)(S.a,{onClick:function(){return i(t.id)},children:"Remove"})})})]})]})},I=Object(u.a)((function(e){return{navbar:Object(j.a)({},e.breakpoints.up("md"),{display:"flex",justifyContent:"space-between",alignItems:"flex-end"})}}));var L=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),s=Object(l.a)(r,2),j=s[0],u=s[1],h=Object(i.useState)(),p=Object(l.a)(h,2),O=p[0],v=p[1],k=Object(i.useState)(!1),y=Object(l.a)(k,2),C=y[0],w=y[1],S=Object(i.useState)(1),N=Object(l.a)(S,2),L=N[0],T=N[1],R=I();Object(i.useEffect)((function(){z()}),[L]);var z=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){w(!0),u(e.length),B(e)}),(function(e){w(!0),v(e)}))},B=function(e){for(var t=[],n=4*L,a=n-4,i=0;i<e.length;i++)e[i].likes=i,t.push(e[i]);t.reverse();var r=t.slice(a,n).sort((function(e,t){return e.likes<t.likes?1:-1}));c(r)},E=function(e){var t=Object(o.a)(n),a=t.find((function(t){return t.id===e})),i=t.indexOf(a);t.splice(i,1),c(t)},D=function(e){var t=Object(o.a)(n),a=t.find((function(t){return t.id===e}));a&&(a.likes+=1);var i=t.sort((function(e,t){return e.likes<t.likes?1:-1}));c(i)};return O?Object(a.jsxs)("div",{children:["Error: ",O.message]}):C?Object(a.jsxs)(d.a,{children:[Object(a.jsx)(x,{}),Object(a.jsxs)(m.a,{className:R.navbar,children:[Object(a.jsx)(m.a,{item:!0,xs:12,lg:6,children:Object(a.jsx)(f.a,{count:j/4,onChange:function(e,t){T(t)}})}),Object(a.jsx)(m.a,{item:!0,xs:12,lg:6,children:Object(a.jsx)(g,{handleSearchFilter:function(e){e.preventDefault();var t=Object(o.a)(n),a=e.target[0].value.toLowerCase();if(0===a.length)z();else{var i=t.filter((function(e){return e.title.toLowerCase().includes(a)}));c(i)}}})})]}),n.map((function(e,t){return Object(a.jsx)(F,{handleLikeIncrement:D,handleRemoveItem:E,post:e},t)}))]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Loading..."}),Object(a.jsx)(b.a,{})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,116)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.011b075e.chunk.js.map