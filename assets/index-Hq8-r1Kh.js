import{j as t,g as D,B as S,s as m,_ as i,r as u,b as I,d as z,e as E,k as _,w as F,ak as k,al as M}from"./index-Btl2Weje.js";import{u as $,c as U}from"./useSlot-o8Wr9Scn.js";import{c as B}from"./createSvgIcon-DXQKO_ID.js";import"./mergeSlotProps-CYvY98bO.js";const L=B(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function T(e){return D("MuiAvatar",e)}S("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const H=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],V=U(),W=e=>{const{classes:o,variant:r,colorDefault:s}=e;return E({root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]},T,o)},q=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:i({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:i({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),O=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),G=m(L,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function J({crossOrigin:e,referrerPolicy:o,src:r,srcSet:s}){const[l,n]=u.useState(!1);return u.useEffect(()=>{if(!r&&!s)return;n(!1);let c=!0;const a=new Image;return a.onload=()=>{c&&n("loaded")},a.onerror=()=>{c&&n("error")},a.crossOrigin=e,a.referrerPolicy=o,a.src=r,s&&(a.srcset=s),()=>{c=!1}},[e,o,r,s]),l}const K=u.forwardRef(function(o,r){const s=V({props:o,name:"MuiAvatar"}),{alt:l,children:n,className:c,component:a="div",slots:y={},slotProps:j={},imgProps:x,sizes:A,src:g,srcSet:v,variant:N="circular"}=s,P=I(s,H);let d=null;const w=J(i({},x,{src:g,srcSet:v})),h=g||v,b=h&&w!=="error",p=i({},s,{colorDefault:!b,component:a,variant:N}),f=W(p),[C,R]=$("img",{className:f.img,elementType:O,externalForwardedProps:{slots:y,slotProps:{img:i({},x,j.img)}},additionalProps:{alt:l,src:g,srcSet:v,sizes:A},ownerState:p});return b?d=t.jsx(C,i({},R)):n||n===0?d=n:h&&l?d=l[0]:d=t.jsx(G,{ownerState:p,className:f.fallback}),t.jsx(q,i({as:a,ownerState:p,className:z(f.root,c),ref:r},P,{children:d}))}),Q=K,X="/Demo_Vite_React/assets/dashboardBanner-CPh6p05V.png",Y="/Demo_Vite_React/assets/avater-jd-rOz0H.png",Z=m("div")(({theme:e})=>`

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
`),se=u.memo(()=>{const{userName:e}=_(F);return t.jsxs(Z,{children:[t.jsx("div",{className:"top",children:t.jsxs("div",{className:"greeting",children:[t.jsx(Q,{src:Y}),"Hello ",e," !"]})}),t.jsxs("div",{className:"bottom",children:[t.jsxs("div",{className:"menu",children:[t.jsx(k,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"account",children:"個人資料"}),t.jsx(k,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"orders",children:"我的訂單"})]}),t.jsx("div",{className:"content",children:t.jsx(M,{})})]})]})});export{se as default};
