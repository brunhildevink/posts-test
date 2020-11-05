(this.webpackJsonpposts=this.webpackJsonpposts||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var c=n(6),i=n(0),a=n.n(i),r=n(8),s=n.n(r),o=n(36),l=n(21),j=n(112),u=n(111),d=n(105),b=n(114),f=n(108),h=Object(d.a)((function(e){return{headerTitle:{marginTop:"100px",fontSize:"1.6em",fontFamily:"roboto, sans serif"}}})),m=function(){var e=h();return Object(c.jsx)("header",{className:e.headerTitle,children:Object(c.jsx)("h1",{children:"Browse articles"})})},x=n(113),O=Object(d.a)((function(e){return{formContainer:{display:"flex",justifyContent:"flex-end"}}})),p=function(e){var t=e.handleSearchFilter,n=O();return Object(c.jsx)(f.a,{className:n.formContainer,children:Object(c.jsx)("form",{onSubmit:t,children:Object(c.jsx)(x.a,{label:"Search by title",variant:"standard",type:"text"})})})},g=n(52),v=n(50),k=n.n(v),y=n(110),C=n(51),S=n.n(C),w=Object(d.a)((function(e){return{close:{marginLeft:"10px",transform:"rotate(45deg)"},image:{background:"url('https://via.placeholder.com/600/56a8c2') no-repeat center center",backgroundSize:"cover",height:"200px"},title:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"400px",height:"1.2em",whiteSpace:"nowrap"},itemContainer:{fontFamily:"roboto, sans serif",background:"#fff",borderRadius:"4px",margin:"20px 0",padding:"20px",display:"flex",alignItems:"center"},buttonGroup:{marginTop:"30px",display:"flex",justifyContent:"flex-end"},likesContainer:{display:"flex",flexFlow:"column",textAlign:"center",fontWeight:"bold"},likes:{marginTop:"10px"}}})),F=function(e){var t=e.post,n=e.handleLikeIncrement,i=e.handleRemoveItem,a=(Object(g.a)(e,["post","handleLikeIncrement","handleRemoveItem"]),w());return Object(c.jsxs)(f.a,{container:!0,spacing:3,className:a.itemContainer,children:[Object(c.jsx)(f.a,{item:!0,lg:2,xs:12,className:a.image}),Object(c.jsxs)(f.a,{item:!0,lg:8,xs:12,children:[Object(c.jsx)("h1",{className:a.title,children:t.title}),Object(c.jsx)("p",{children:t.body})]}),Object(c.jsxs)(f.a,{item:!0,lg:2,xs:12,className:a.buttonGroup,children:[Object(c.jsxs)(f.a,{item:!0,className:a.likesContainer,children:[Object(c.jsx)(y.a,{size:"small",color:"secondary",children:Object(c.jsx)(k.a,{onClick:function(){return n(t.id)},children:"Like"})}),Object(c.jsx)("span",{className:a.likes,children:t.likes})]}),Object(c.jsx)(f.a,{item:!0,children:Object(c.jsx)(y.a,{size:"small",color:"primary",className:a.close,children:Object(c.jsx)(S.a,{onClick:function(){return i(t.id)},children:"Remove"})})})]})]})},I=Object(d.a)((function(e){return{navbar:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}}));var L=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)(0),s=Object(l.a)(r,2),d=s[0],h=s[1],x=Object(i.useState)(),O=Object(l.a)(x,2),g=O[0],v=O[1],k=Object(i.useState)(!1),y=Object(l.a)(k,2),C=y[0],S=y[1],w=Object(i.useState)(1),L=Object(l.a)(w,2),N=L[0],T=L[1],R=I();Object(i.useEffect)((function(){z()}),[N]);var z=function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){S(!0),h(e.length),B(e)}),(function(e){S(!0),v(e)}))},B=function(e){for(var t=[],n=4*N,c=n-4,i=0;i<e.length;i++)e[i].likes=i,t.push(e[i]);t.reverse();var r=t.slice(c,n).sort((function(e,t){return e.likes<t.likes?1:-1}));a(r)},E=function(e){var t=Object(o.a)(n),c=t.find((function(t){return t.id===e})),i=t.indexOf(c);t.splice(i,1),a(t)},D=function(e){var t=Object(o.a)(n),c=t.find((function(t){return t.id===e}));c&&(c.likes+=1);var i=t.sort((function(e,t){return e.likes<t.likes?1:-1}));a(i)};return g?Object(c.jsxs)("div",{children:["Error: ",g.message]}):C?Object(c.jsxs)(j.a,{children:[Object(c.jsx)(m,{}),Object(c.jsxs)(f.a,{item:!0,xs:12,className:R.navbar,children:[Object(c.jsx)(b.a,{count:d/4,onChange:function(e,t){T(t)}}),Object(c.jsx)(p,{handleSearchFilter:function(e){e.preventDefault();var t=Object(o.a)(n),c=e.target[0].value.toLowerCase();if(0===c.length)z();else{var i=t.filter((function(e){return e.title.toLowerCase().includes(c)}));a(i)}}})]}),n.map((function(e,t){return Object(c.jsx)(F,{handleLikeIncrement:D,handleRemoveItem:E,post:e},t)}))]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Loading..."}),Object(c.jsx)(u.a,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),N()}},[[69,1,2]]]);
//# sourceMappingURL=main.861559c7.chunk.js.map