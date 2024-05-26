import{f as _,b as S,_ as l,j as t,g as D,z as E,s as j,r as k,d as z,e as I,q as T,ac as R,ad as $}from"./index-D-LYstLd.js";import{u as O,c as M}from"./createSvgIcon-BcIoTFId.js";import{r as L,m as U,a as B}from"./mergeSlotProps-DhmhSgwT.js";function q(e){return _}const H=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],V=["component","slots","slotProps"],W=["component"];function G(e,o){const{className:r,elementType:s,ownerState:i,externalForwardedProps:n,getSlotOwnerState:c,internalForwardedProps:a}=o,A=S(o,H),{component:h,slots:u={[e]:void 0},slotProps:C={[e]:void 0}}=n,g=S(n,V),m=u[e]||s,f=L(C[e],i),b=U(l({className:r},A,{externalForwardedProps:e==="root"?g:void 0,externalSlotProps:f})),{props:{component:d},internalRef:N}=b,v=S(b.props,W),P=O(N,f==null?void 0:f.ref,o.ref),p=c?c(v):{},x=l({},i,p),y=e==="root"?d||h:d,w=B(m,l({},e==="root"&&!h&&!u[e]&&a,e!=="root"&&!u[e]&&a,v,y&&{as:y},{ref:P}),x);return Object.keys(p).forEach(F=>{delete w[F]}),[m,w]}const J=M(t.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function K(e){return D("MuiAvatar",e)}E("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Q=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],X=q(),Y=e=>{const{classes:o,variant:r,colorDefault:s}=e;return I({root:["root",r,s&&"colorDefault"],img:["img"],fallback:["fallback"]},K,o)},Z=j("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],r.colorDefault&&o.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:l({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),ee=j("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),oe=j(J,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,o)=>o.fallback})({width:"75%",height:"75%"});function te({crossOrigin:e,referrerPolicy:o,src:r,srcSet:s}){const[i,n]=k.useState(!1);return k.useEffect(()=>{if(!r&&!s)return;n(!1);let c=!0;const a=new Image;return a.onload=()=>{c&&n("loaded")},a.onerror=()=>{c&&n("error")},a.crossOrigin=e,a.referrerPolicy=o,a.src=r,s&&(a.srcset=s),()=>{c=!1}},[e,o,r,s]),i}const re=k.forwardRef(function(o,r){const s=X({props:o,name:"MuiAvatar"}),{alt:i,children:n,className:c,component:a="div",slots:A={},slotProps:h={},imgProps:u,sizes:C,src:g,srcSet:m,variant:f="circular"}=s,b=S(s,Q);let d=null;const N=te(l({},u,{src:g,srcSet:m})),v=g||m,P=v&&N!=="error",p=l({},s,{colorDefault:!P,component:a,variant:f}),x=Y(p),[y,w]=G("img",{className:x.img,elementType:ee,externalForwardedProps:{slots:A,slotProps:{img:l({},u,h.img)}},additionalProps:{alt:i,src:g,srcSet:m,sizes:C},ownerState:p});return P?d=t.jsx(y,l({},w)):n||n===0?d=n:v&&i?d=i[0]:d=t.jsx(oe,{ownerState:p,className:x.fallback}),t.jsx(Z,l({as:a,ownerState:p,className:z(x.root,c),ref:r},b,{children:d}))}),se=re,ae="/Demo_Vite_React/assets/dashboardBanner-CPh6p05V.png",ne="/Demo_Vite_React/assets/avater-jd-rOz0H.png",le=j("div")(({theme:e})=>`

  ${e.components.ContainerWrapper}
  padding: 0 0 30px ;

  .top{
    background-image: url('${ae}');
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
    // border: 1px solid red;
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
`),pe=k.memo(()=>{const e=T();return console.log("----test----",e),t.jsxs(le,{children:[t.jsx("div",{className:"top",children:t.jsxs("div",{className:"greeting",children:[t.jsx(se,{src:ne}),"Hello Ginny!"]})}),t.jsxs("div",{className:"bottom",children:[t.jsxs("div",{className:"menu",children:[t.jsx(R,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"account",children:"個人資料"}),t.jsx(R,{className:({isActive:o})=>o?"menuEntries isActive":"menuEntries",to:"orders",children:"我的訂單"})]}),t.jsx("div",{className:"content",children:t.jsx($,{})})]})]})});export{pe as default};
