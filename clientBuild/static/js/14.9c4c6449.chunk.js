(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[14],{180:function(e,a,t){"use strict";var n=t(45);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=(0,n(t(71)).default)(r.default.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");a.default=i},200:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(23),o=t(26),c=t(2),l=t(63),s=t(199),p=t(193),d=t(155),m=t(139),u=t(165),h=t(33),g=t(137),b=t(27),f=t.n(b),w=Object(l.a)((function(e){return{job:{marginTop:e.spacing(1.5),display:"flex",boxShadow:e.shadows[1],"&:hover":{boxShadow:e.shadows[3]}},firstRec:{marginTop:0},routerLink:{flexGrow:1,textDecoration:"none",width:"100%",display:"flex",padding:e.spacing(2),color:e.palette.text.primary,"&:visited":{color:e.palette.text.primary},"&:active":{color:e.palette.text.primary}},jobCompany:{width:"30%",paddingLeft:e.spacing(.3),marginRight:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},jobTitle:{width:"70%",marginRight:e.spacing(1),paddingLeft:e.spacing(.3),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},noJob:{marginTop:e.spacing(1.5),display:"flex",boxShadow:e.shadows[1],"&:hover":{boxShadow:e.shadows[3]},padding:e.spacing(2)}}}));var v=function(){var e=w(),a=Object(n.useState)([]),t=Object(o.a)(a,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){f.a.get("/job/applied").then((function(e){if(200!==e.status)throw Error("Something went wrong");return e})).then((function(e){c(e.data.data)})).catch((function(){}))}),[c]),r.a.createElement(r.a.Fragment,null,i.length?i.map((function(a,t){var n=a.jid,i=a.title,o=a.description;return r.a.createElement(g.a,{key:n+" "+i,className:e.job+" "+(0===t?e.firstRec:"")},r.a.createElement(h.b,{to:"/job/".concat(n),className:e.routerLink},r.a.createElement(m.a,{className:e.jobTitle},i),r.a.createElement(m.a,{className:e.jobCompany},o)))})):r.a.createElement(g.a,{className:e.noJob},"You have not applied  for any job yet!"))},x=Object(l.a)((function(e){return{interview:{marginTop:e.spacing(1.5),display:"flex",boxShadow:e.shadows[1],"&:hover":{boxShadow:e.shadows[3]}},firstRec:{marginTop:0},routerLink:{flexGrow:1,textDecoration:"none",width:"100%",display:"flex",padding:e.spacing(2),color:e.palette.text.primary,"&:visited":{color:e.palette.text.primary},"&:active":{color:e.palette.text.primary}},interviewCompany:{width:"70%",paddingLeft:e.spacing(.3),marginRight:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},interviewTitle:{width:"30%",marginRight:e.spacing(1),paddingLeft:e.spacing(.3),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}}));var E=function(){var e=x(),a=Object(n.useState)([]),t=Object(o.a)(a,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){f.a.get("/application/interviews").then((function(e){if(200!==e.status)throw Error("something went wrong");return e})).then((function(e){c(e.data.data)})).catch((function(){}))}),[c]),r.a.createElement(r.a.Fragment,null,i.length?i.map((function(a,t){var n=a.id,i=a.title,o=a.message;return r.a.createElement(g.a,{key:"interview"+n+" "+i,className:e.interview+" "+(0===t?e.firstRec:"")},r.a.createElement(h.b,{to:"/interview/".concat(n),className:e.routerLink},r.a.createElement(m.a,{className:e.interviewTitle},i),r.a.createElement(m.a,{className:e.interviewCompany},o.slice(0,40)+(o.length>40?"...":""))))})):r.a.createElement(g.a,{className:e.interview},"You have not recieved any interview invite yet!"))},j=t(180),y=t.n(j),O=t(206),N=t(136),S=Object(l.a)((function(e){return{job:{marginTop:e.spacing(1.5),display:"flex",boxShadow:e.shadows[1],"&:hover":{boxShadow:e.shadows[3]}},noJob:{marginTop:e.spacing(1.5),display:"flex",boxShadow:e.shadows[1],"&:hover":{boxShadow:e.shadows[3]},padding:e.spacing(2)},firstRec:{marginTop:0},routerLink:{flexGrow:1,textDecoration:"none",width:"100%",display:"flex",padding:e.spacing(2),color:e.palette.text.primary,"&:visited":{color:e.palette.text.primary},"&:active":{color:e.palette.text.primary}},jobCompany:{width:"30%",paddingLeft:e.spacing(.3),marginRight:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},jobTitle:{width:"70%",marginRight:e.spacing(1),paddingLeft:e.spacing(.3),whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},searchBox:{background:e.palette.background.paper,display:"flex",marginBottom:e.spacing(2),cursor:"pointer"},input:{paddingLeft:e.spacing(1),marginRight:e.spacing(1),width:"43%"},searchButton:{background:e.palette.secondary.main,width:"14%",display:"flex",justifyContent:"center","&:hover":{background:e.palette.secondary.dark}},searchIcon:{background:"transparent",color:e.palette.background.paper,"&:hover":{background:"transparent"}}}}));var k=function(){var e=S(),a=Object(n.useState)([]),t=Object(o.a)(a,2),i=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),p=s[0],d=s[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),w=b[0],v=b[1];function x(e){e.preventDefault(),p&&f.a.get("/job/search",{params:{location:p,tag:w||null}}).then((function(e){if(200!==e.status)throw Error("something went wrong");return e})).then((function(e){e.data.data&&c(e.data.data)})).catch((function(){}))}return Object(n.useEffect)((function(){f.a.get("/job").then((function(e){if("success"===!e.status)throw Error("something went wrong!");return e})).then((function(e){c(e.data.data)})).catch((function(){}))}),[c]),r.a.createElement(m.a,null,r.a.createElement("form",{className:e.searchBox,onSubmit:x},r.a.createElement(O.a,{className:e.input,placeholder:"enter location",id:"location",key:"search-location",value:p,onChange:function(e){return d(e.target.value)}}),r.a.createElement(O.a,{className:e.input,placeholder:"enter tag",id:"tag",key:"search-tag",value:w,onChange:function(e){return v(e.target.value)}}),r.a.createElement(m.a,{className:e.searchButton,onClick:x},r.a.createElement(N.a,{type:"submit",className:e.searchIcon,disableRipple:!0},r.a.createElement(y.a,null)))),i.length?i.map((function(a,t){var n=a.jid,i=a.title,o=a.companyName;return r.a.createElement(g.a,{key:n+" "+i,className:e.job+" "+(0===t?e.firstRec:"")},r.a.createElement(h.b,{to:"/job/".concat(n),className:e.routerLink},r.a.createElement(m.a,{className:e.jobTitle},i),r.a.createElement(m.a,{className:e.jobCompany},o)))})):r.a.createElement(g.a,{className:e.noJob},"No matching jobs!"))};function T(e){var a=e.children,t=e.value,n=e.index,i=Object(c.a)(e,["children","value","index"]);return r.a.createElement(d.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},i),r.a.createElement(m.a,{p:3},a))}function C(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}var R=Object(l.a)((function(e){return{root:{flexGrow:1,display:"flex",marginTop:e.spacing(12),width:"80%"},tabs:{borderRight:"1px solid ".concat(e.palette.divider),backgroundColor:e.palette.background.paper,width:"30%",height:"80vh"},tabPanel:{width:"70%","& > div":{paddingTop:0}}}}));var L=function(){var e=R(),a=r.a.useState(0),t=Object(o.a)(a,2),n=t[0],i=t[1];return r.a.createElement(u.a,{className:e.root},r.a.createElement(s.a,{orientation:"vertical",value:n,onChange:function(e,a){i(a)},"aria-label":"Vertical tabs example",className:e.tabs},r.a.createElement(p.a,Object.assign({label:"Jobs"},C(0))),r.a.createElement(p.a,Object.assign({label:"Applied Jobs"},C(1))),r.a.createElement(p.a,Object.assign({label:"Interviews"},C(1)))),r.a.createElement(T,{className:e.tabPanel,value:n,index:0},r.a.createElement(k,null)),r.a.createElement(T,{className:e.tabPanel,value:n,index:1},r.a.createElement(v,null)),r.a.createElement(T,{className:e.tabPanel,value:n,index:2},r.a.createElement(E,null)))},J=t(167),B=Object(l.a)((function(e){return{root:{marginTop:e.spacing(12),textAlign:"center",background:e.palette.background.paper,width:"80%",padding:e.spacing(3,2)},textTitle:{marginBottom:e.spacing(3),color:e.palette.secondary.dark,opacity:.87},textMessage:{marginBottom:e.spacing(2),textIndent:e.spacing(3)}}}));var P=function(){var e=B(),a=Object(i.h)().id,t=Object(n.useState)({}),c=Object(o.a)(t,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){f.a.get("/application/interview/".concat(a)).then((function(e){if(200!==e.status)throw Error("Something went wrong");return e})).then((function(e){s(e.data.data)})).catch((function(){}))}),[a,s]),r.a.createElement(u.a,{component:"main",className:e.root},r.a.createElement(d.a,{variant:"h3",component:"h1",className:e.textTitle},l.title),r.a.createElement(d.a,{variant:"h4",component:"h2",className:e.textTitle},l.companyName),r.a.createElement(d.a,{variant:"body1",component:"p",className:e.textMessage},l.message),r.a.createElement(J.a,{color:"primary",variant:"contained",onClick:function(){window.print&&window.print()}},"Print"))},D=Object(n.lazy)((function(){return t.e(17).then(t.bind(null,194))}));var G=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/job/:id",component:D}),r.a.createElement(i.a,{exact:!0,path:"/interview/:id",component:P}),r.a.createElement(i.a,{component:L}))};a.default=G}}]);
//# sourceMappingURL=14.9c4c6449.chunk.js.map