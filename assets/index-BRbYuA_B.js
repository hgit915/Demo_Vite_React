import{f as D,b as S,_ as l,H as _,j as t,g as E,z,s as j,r as k,d as I,e as T,k as $,t as O,ai as R,aj as M}from"./index-6j9zUeTH.js";import{c as U}from"./createSvgIcon-Cb_IpOPE.js";import{r as L,m as B,a as H}from"./mergeSlotProps-mUW9xaLC.js";function V(e){return D}const W=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],q=["component","slots","slotProps"],G=["component"];function J(e,o){const{className:r,elementType:s,ownerState:i,externalForwardedProps:n,getSlotOwnerState:c,internalForwardedProps:a}=o,A=S(o,W),{component:h,slots:u={[e]:void 0},slotProps:C={[e]:void 0}}=n,g=S(n,q),m=u[e]||s,f=L(C[e],i),b=B(l({className:r},A,{externalForwardedProps:e==="root"?g:void 0,externalSlotProps:f})),{props:{component:d},internalRef:N}=b,v=S(b.props,G),P=_(N,f==null?void 0:f.ref,o.ref),p=c?c(v):{},x=l({},i,p),y=e==="root"?d||h:d,w=H(m,l({},e==="root"&&!h&&!u[e]&&a,e!=="root"&&!u[e]&&a,v,y&&{as:y},{ref:P}),x);return Object.keys(p).forEach(F=>{delete w[F]}),[m,w]}const K=U(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function Q(e){return E("MuiAvatar",e)}z("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const X=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],Y=V(),Z=e=>{const{classes:o,variant:r,colorDefault:s}=e;return T({root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]},Q,o)},ee=j("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:l({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),oe=j("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),te=j(K,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function re({crossOrigin:e,referrerPolicy:o,src:r,srcSet:s}){const[i,n]=k.useState(!1);return k.useEffect(()=>{if(!r&&!s)return;n(!1);let c=!0;const a=new Image;return a.onload=()=>{c&&n("loaded")},a.onerror=()=>{c&&n("error")},a.crossOrigin=e,a.referrerPolicy=o,a.src=r,s&&(a.srcset=s),()=>{c=!1}},[e,o,r,s]),i}const se=k.forwardRef(function(o,r){const s=Y({props:o,name:"MuiAvatar"}),{alt:i,children:n,className:c,component:a="div",slots:A={},slotProps:h={},imgProps:u,sizes:C,src:g,srcSet:m,variant:f="circular"}=s,b=S(s,X);let d=null;const N=re(l({},u,{src:g,srcSet:m})),v=g||m,P=v&&N!=="error",p=l({},s,{colorDefault:!P,component:a,variant:f}),x=Z(p),[y,w]=J("img",{className:x.img,elementType:oe,externalForwardedProps:{slots:A,slotProps:{img:l({},u,h.img)}},additionalProps:{alt:i,src:g,srcSet:m,sizes:C},ownerState:p});return P?d=t.jsx(y,l({},w)):n||n===0?d=n:v&&i?d=i[0]:d=t.jsx(te,{ownerState:p,className:x.fallback}),t.jsx(ee,l({as:a,ownerState:p,className:I(x.root,c),ref:r},b,{children:d}))}),ae=se,ne="/Demo_Vite_React/assets/dashboardBanner-CPh6p05V.png",le="/Demo_Vite_React/assets/avater-jd-rOz0H.png",ie=j("div")(({theme:e})=>`

  ${e.components.ContainerWrapper}
  padding: 0 0 30px ;

  .top{
    background-image: url('${ne}');
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
`),ue=k.memo(()=>{const{userName:e}=$(O);return t.jsxs(ie,{children:[t.jsx("div",{className:"top",children:t.jsxs("div",{className:"greeting",children:[t.jsx(ae,{src:le}),"Hello ",e," !"]})}),t.jsxs("div",{className:"bottom",children:[t.jsxs("div",{className:"menu",children:[t.jsx(R,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"account",children:"個人資料"}),t.jsx(R,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"orders",children:"我的訂單"})]}),t.jsx("div",{className:"content",children:t.jsx(M,{})})]})]})});export{ue as default};
