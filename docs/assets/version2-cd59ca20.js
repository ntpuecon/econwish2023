import{d as e,I as h,t as w,v as k,w as C,r as d,j as s,S as V,C as $,x as j,T as I,y as l,z as S,q as z,A as _,G as E,D as H,E as A,F as L,H as R,J as N,K as D,R as F}from"./700-9b4d652b.js";import{B as q}from"./Button-3b56c925.js";const G="/econwish2023/assets/background3-82593132.svg",T="/econwish2023/assets/stampBackground-952e1b2a.svg";const M="/econwish2023/assets/ntpu-stone-9d335c5c.svg",W="/econwish2023/assets/bschool-ea2da165.svg",P="/econwish2023/assets/gate-d71820c6.svg",J="/econwish2023/assets/eagle-ff0e4ffe.svg",K="/econwish2023/assets/heart-lake-31f1d5b6.svg",Q="/econwish2023/assets/schoolGate2-680abccd.svg",X="/econwish2023/assets/library2-007e46ee.svg",x=[{src:M,style:{width:"85%",margin:"0px 0px 5px"}},{src:W,style:{}},{src:P,style:{height:"80%",margin:"5px"}},{src:J,style:{height:"70%"}},{src:K,style:{margin:"0px"}},{src:Q,style:{width:"80%"}},{src:X,style:{width:"90%"}}];function Y({variant:a}){return a=a?a-1:2,e("div",{className:"sign-info",children:e(h,{className:"seal-color",duration:0,src:x[a].src,fit:"fill",style:x[a].style})})}var p={},Z=k;Object.defineProperty(p,"__esModule",{value:!0});var v=p.default=void 0,U=Z(w()),ee=C,te=(0,U.default)((0,ee.jsx)("path",{d:"m15.96 10.29-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"}),"Filter");v=p.default=te;var f={},ae=k;Object.defineProperty(f,"__esModule",{value:!0});var g=f.default=void 0,ne=ae(w()),ie=C,se=(0,ne.default)((0,ie.jsx)("path",{d:"M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"}),"EditNoteOutlined");g=f.default=se;function ce({user:a}){const{name:t,grade:i,imgSrc:n,wish:c,id:r}=a;var O="2023-06-10",[B,u]=d.useState(0);function m(){u(1)}function y(){u(0)}function b(){u(2)}var o;switch(B){case 0:o=e(re,{date:O,grade:i,name:t,imgSrc:n,wish:c,onClick:m});break;case 1:o=e(le,{imgSrc:n,wish:c,onClick:y,imgOn:b,onClick2:m});break;case 2:o=e(oe,{imgSrc:n,onClick:y,imgOn:b,onClick2:m});break;default:o="Sorry"}return s("div",{className:"finalcard",id:r,children:[e("div",{id:`${r}`}),e("div",{className:"background",children:e("img",{src:G})}),o]})}function re({date:a,grade:t,name:i,imgSrc:n,wish:c,onClick:r}){return s("div",{className:"cardInfo",children:[e(de,{date:a,grade:t,name:i,imgSrc:n}),e(me,{wish:c,onClick:r})]})}function le({imgSrc:a,wish:t,onClick:i,imgOn:n,onClick2:c}){return e("div",{className:"cardInfo",style:{padding:"0px"},children:s("div",{style:{height:"100%",position:"relative",display:"flex","justify-content":"center"},children:[e(h,{duration:0,src:a,fit:"cover",style:{opacity:.3}}),s("div",{style:{position:"absolute",top:"0",height:"100%",display:"flex","justify-content":"center","flex-direction":"column"},children:[e(V,{sx:{height:"100%",justifyContent:"center"},children:e($,{children:e(j,{children:e(I,{children:t})})})}),s("div",{className:"imgIcon",style:{position:"relative",display:"flex","justify-content":"center"},children:[e(l,{onClick:n,children:e(v,{})}),e(l,{onClick:c,children:e(g,{})})]})]}),e(l,{"aria-label":"close",sx:{position:"absolute",color:r=>r.palette.grey[500],right:8,top:8},onClick:i,children:e(S,{})})]})})}function oe({imgSrc:a,onClick:t,imgOn:i,onClick2:n}){return e("div",{className:"cardInfo",style:{padding:"0px"},children:s("div",{style:{height:"100%",position:"relative",display:"flex","justify-content":"center"},children:[e(h,{duration:0,src:a,fit:"cover",style:{opacity:1}}),e("div",{style:{position:"absolute",top:"0",height:"100%",display:"flex","justify-content":"center"},children:s("div",{className:"imgIcon",style:{position:"absolute",bottom:"0%",display:"flex","justify-content":"center"},children:[e(l,{onClick:i,children:e(v,{})}),e(l,{onClick:n,children:e(g,{})})]})}),e(l,{"aria-label":"close",sx:{position:"absolute",color:c=>c.palette.grey[500],right:8,top:8},onClick:t,children:e(S,{})})]})})}function de({date:a,grade:t,name:i,imgSrc:n}){return s("div",{className:"top",children:[e(he,{date:a}),s("div",{className:"top-info",children:[s("div",{className:"sender",children:[e("div",{className:"sender-major",children:t}),e("div",{className:"sender-name",children:e("div",{className:"name",children:i})})]}),e(ue,{imgSrc:n})]})]})}function he({date:a}){var t=a.split("");return t.splice(4,1),t.splice(6,1),s("div",{className:"date",children:[s("div",{className:"year",children:[e("div",{className:"date-number",children:t[0]}),e("div",{className:"date-number",children:t[1]}),e("div",{className:"date-number",children:t[2]}),e("div",{className:"date-number",children:t[3]})]}),s("div",{className:"month",children:[e("div",{className:"date-number",children:t[4]}),e("div",{className:"date-number",children:t[5]})]}),s("div",{className:"day",children:[e("div",{className:"date-number",children:t[6]}),e("div",{className:"date-number",children:t[7]})]})]})}function ue({imgSrc:a}){return s("div",{className:"stamp-info",children:[e("div",{className:"stamp-background",children:e("img",{src:T})}),e("div",{className:"stamp-image",children:e(h,{duration:0,src:a,width:"100%",height:"100%",fit:"fill"})}),e(Y,{variant:6})]})}function me({wish:a,onClick:t}){return e(j,{mt:3,children:e(q,{color:"secondary",onClick:t,children:e(I,{noWrap:!0,sx:{width:"260px"},children:a})})})}function pe(){const[a,t]=d.useState(null);d.useEffect(()=>{z.get(_.entryUrl).then(n=>{console.log(n),n.status===200&&t(n.data)})},[]);let i=a?e(ye,{users:ve([...a])}):e("div",{style:{color:"black"},children:"Loading..."});return e("div",{className:"App",children:i})}function ve(a){const t=ge(a[0]),i=a.map(n=>fe(n,t));return i.shift(),i}function fe(a,t){return{name:a[t.name],grade:a[t.grade],imgSrc:a[t.imgSrc],wish:a[t.wish],id:a[t.id],sealVariant:a[t.sealVariant],sealLocation:a[t.sealLocation]}}function ge(a){var t=Object();return a.map((i,n)=>{t[i]=n}),t.imgSrc=t.ThumbnailLink,t.name=t.Name,t.grade=t.Grade,t.wish=t.Wish,t.sealVariant=t.sealVariant,t.sealLocation=t.sealLocation,t}function ye({users:a}){window.autocompleteOptions=[],a.forEach(n=>{window.autocompleteOptions.push({label:n.name+" - "+n.grade,id:n.id})}),a=[...a],a.reverse();const i=[a.pop(),...a].map((n,c)=>s(E,{className:n.grade,children:[e(ce,{user:n}),e(H,{shareLink:_.appUrl+"#"+n.id,title:"來自 "+n.name+" - "+n.grade+" 的祝賀"})]},c));return d.useEffect(()=>{be()},[]),s("div",{children:[e(A,{autocompleteOptions:window.autocompleteOptions}),s("div",{className:"main2",children:[e(L,{children:s(R,{children:[i,e("div",{className:"endCard"})]})}),e(N,{autocompleteOptions})]}),e(N,{autocompleteOptions})]})}function be(){const a=window.location.hash;if(a){const t=a.slice(1),i=document.getElementById(t);i&&i.scrollIntoView({block:"start",inline:"nearest"})}}D.createRoot(document.getElementById("root")).render(e(F.StrictMode,{children:e(pe,{})}));
