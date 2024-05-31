import{E as w,j as o,g as S,D as z,f as m,_ as l,r as u,b as E,d as I,e as _,l as F,z as M,aC as y,aD as $}from"./index-BZ1CMoz2.js";import{u as U,c as B}from"./useSlot-BckprGAE.js";const L=w(o.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function T(e){return S("MuiAvatar",e)}z("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const H=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],V=B(),W=e=>{const{classes:t,variant:r,colorDefault:a}=e;return _({root:["root",r,a&&"colorDefault"],img:["img"],fallback:["fallback"]},T,t)},q=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:l({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),O=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),G=m(L,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function J({crossOrigin:e,referrerPolicy:t,src:r,srcSet:a}){const[i,n]=u.useState(!1);return u.useEffect(()=>{if(!r&&!a)return;n(!1);let c=!0;const s=new Image;return s.onload=()=>{c&&n("loaded")},s.onerror=()=>{c&&n("error")},s.crossOrigin=e,s.referrerPolicy=t,s.src=r,a&&(s.srcset=a),()=>{c=!1}},[e,t,r,a]),i}const K=u.forwardRef(function(t,r){const a=V({props:t,name:"MuiAvatar"}),{alt:i,children:n,className:c,component:s="div",slots:j={},slotProps:k={},imgProps:x,sizes:A,src:g,srcSet:v,variant:C="circular"}=a,N=E(a,H);let d=null;const P=J(l({},x,{src:g,srcSet:v})),h=g||v,b=h&&P!=="error",p=l({},a,{colorDefault:!b,component:s,variant:C}),f=W(p),[D,R]=U("img",{className:f.img,elementType:O,externalForwardedProps:{slots:j,slotProps:{img:l({},x,k.img)}},additionalProps:{alt:i,src:g,srcSet:v,sizes:A},ownerState:p});return b?d=o.jsx(D,l({},R)):n||n===0?d=n:h&&i?d=i[0]:d=o.jsx(G,{ownerState:p,className:f.fallback}),o.jsx(q,l({as:s,ownerState:p,className:I(f.root,c),ref:r},N,{children:d}))}),Q=K,X="/Demo_Vite_React/assets/dashboardBanner-CPh6p05V.png",Y="/Demo_Vite_React/assets/avater-jd-rOz0H.png",Z=m("div")(({theme:e})=>`

  ${e.components.ContainerWrapper}
  padding: 0 0 30px ;

  .top{
    background-image: url('${X}');
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: 200px; 
  }

  .greeting{
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    font-size: 40px;
    color: ${e.textColor.white};
    gap: 40px;
    margin-left: 200px;
  }

  .bottom{
    flex-direction: column;
    margin-bottom: 50px;
  }

  .menu {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${e.textColor.black40};
  }

  .menuEntries {
    font-weight: bold;
    height: 30px;
    margin-right: 20px;
    line-height: 20px;
    color: ${e.textColor.black80};
    display: inline-block;
    
    &:hover, 
    &.isActive {
      color: ${e.color.primaryBase};
      border-bottom: 3px solid ;
    }

  }
`),oe=u.memo(()=>{const{userName:e}=F(M);return o.jsxs(Z,{children:[o.jsx("div",{className:"top",children:o.jsxs("div",{className:"greeting",children:[o.jsx(Q,{src:Y}),"Hello ",e," !"]})}),o.jsxs("div",{className:"bottom",children:[o.jsxs("div",{className:"menu",children:[o.jsx(y,{className:({isActive:t})=>t?"menuEntries isActive":"menuEntries",to:"account",children:"個人資料"}),o.jsx(y,{className:({isActive:t})=>t?"menuEntries isActive":"menuEntries",to:"orders",children:"我的訂單"})]}),o.jsx("div",{className:"content",children:o.jsx($,{})})]})]})});export{oe as default};
