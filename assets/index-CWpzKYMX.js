import{_ as m,c as G,a as f,r as d,b as q,j as r,d as O,u as B,e as H,g as L,s as v,C as F,f as V,h as A,i as h,P as x,k as U,l as X,m as J,n as K,o as Q}from"./index-DbJL8PmY.js";import{c as Y,a as Z,d as ee,i as te,o as re,b as ae,s as oe,u as se,e as ie,f as ne,g as ce,h as le,j as de,B as ue}from"./Box-C0ktvTgC.js";import{s as pe}from"./styled-DbjqAadP.js";function me(e,t){return()=>null}function xe(e,t){return()=>null}function fe(e,t,a,i,u){return null}const ve=["className","component","disableGutters","fixed","maxWidth","classes"],he=G(),ge=pe("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${f(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),be=e=>B({props:e,name:"MuiContainer",defaultTheme:he}),je=(e,t)=>{const a=n=>L(t,n),{classes:i,fixed:u,disableGutters:y,maxWidth:o}=e,s={root:["root",o&&`maxWidth${f(String(o))}`,u&&"fixed",y&&"disableGutters"]};return H(s,a,i)};function _e(e={}){const{createStyledComponent:t=ge,useThemeProps:a=be,componentName:i="MuiContainer"}=e,u=t(({theme:o,ownerState:s})=>m({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!s.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}),({theme:o,ownerState:s})=>s.fixed&&Object.keys(o.breakpoints.values).reduce((n,c)=>{const p=c,l=o.breakpoints.values[p];return l!==0&&(n[o.breakpoints.up(p)]={maxWidth:`${l}${o.breakpoints.unit}`}),n},{}),({theme:o,ownerState:s})=>m({},s.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},s.maxWidth&&s.maxWidth!=="xs"&&{[o.breakpoints.up(s.maxWidth)]:{maxWidth:`${o.breakpoints.values[s.maxWidth]}${o.breakpoints.unit}`}}));return d.forwardRef(function(s,n){const c=a(s),{className:p,component:l="div",disableGutters:M=!1,fixed:T=!1,maxWidth:z="lg"}=c,D=q(c,ve),R=m({},c,{component:l,disableGutters:M,fixed:T,maxWidth:z}),E=je(R,i);return r.jsx(u,m({as:l,ownerState:R,className:O(E.root,p),ref:n},D))})}const Ce="/Demo_Vite_React/assets/banner-BiRXWkwt.png",$e=v("div")(({theme:e})=>`
  
  background-color:${e.color.primaryTint};
  padding-bottom: 30px;
  
  .carousel {
    height: 400px;
    background-image: url(${Ce});
    background-size: cover;
    margin-bottom: 30px;
  }

  .title{
    font-size: 18px;
    font-weight: bold;
  }
  
  .desc {
    color: ${e.color.primaryBase};
    font-size: 32px;
    font-weight: 700;
    margin-bottom:40px;
  }

`),ye={configure:e=>{F.configure(e)}},Re=Object.freeze(Object.defineProperty({__proto__:null,capitalize:f,createChainedFunction:Y,createSvgIcon:Z,debounce:ee,deprecatedPropType:me,isMuiElement:te,ownerDocument:re,ownerWindow:ae,requirePropFactory:xe,setRef:oe,unstable_ClassNameGenerator:ye,unstable_useEnhancedEffect:se,unstable_useId:ie,unsupportedProp:fe,useControlled:ne,useEventCallback:ce,useForkRef:le,useIsFocusVisible:de},Symbol.toStringTag,{value:"Module"})),We=_e({createStyledComponent:v("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${f(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>V({props:e,name:"MuiContainer"})}),ke=We,Pe=v(ue)(({theme:e})=>`

  display: flex;
  height: 350px;
  background-color: ${e.textColor.white};
  border-radius: 17px;
  padding: 20px 25px;
  margin-bottom: 30px;
  ${e.mixins.boxShadow};

  > div{
    flex: 1;
  }

  .info{
    cursor: pointer;
  }

  .title{
    font-weight: bold;
    font-size: 26px;
  }

  .subTitle{
    color: ${e.textColor.black80};
    font-size: 14px;
    margin: 5px auto 20px ;
  }

  .linear{
    height: 3px;
    background: linear-gradient(to right, #BE9C7C, ${e.textColor.white});
    margin: 20px auto ;
  }

  .price{
    height: 70px;
    color:${e.color.primaryBase};
    display: flex;
    font-size: 25px;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
`);var j={},b={};const Se=A(Re);var W;function g(){return W||(W=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Se}(b)),b}var Ie=h;Object.defineProperty(j,"__esModule",{value:!0});var k=j.default=void 0,we=Ie(g()),Ne=r;k=j.default=(0,we.default)((0,Ne.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const Me=v("div")(({theme:e})=>`

  display: flex;
  flex-direction: row;
 
  > div{
    width: 80px;
    height: 80px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${e.textColor.white};
    border: 1px solid ${e.color.primary40};
    border-radius: 8px;
  }
`);var _={},Te=h;Object.defineProperty(_,"__esModule",{value:!0});var P=_.default=void 0,ze=Te(g()),De=r;P=_.default=(0,ze.default)((0,De.jsx)("path",{d:"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"}),"Bed");var C={},Ee=h;Object.defineProperty(C,"__esModule",{value:!0});var S=C.default=void 0,Ge=Ee(g()),qe=r;S=C.default=(0,Ge.default)((0,qe.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var $={},Oe=h;Object.defineProperty($,"__esModule",{value:!0});var I=$.default=void 0,Be=Oe(g()),He=r;I=$.default=(0,Be.default)((0,He.jsx)("path",{d:"M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z"}),"AspectRatio");const w=d.memo(e=>{const{area:t,bed:a,maxPeople:i}=e;return r.jsxs(Me,{children:[r.jsxs("div",{children:[r.jsx(I,{color:"primary"}),t]}),r.jsxs("div",{children:[r.jsx(P,{color:"primary"}),a]}),r.jsxs("div",{children:[r.jsx(S,{color:"primary"}),i,"人"]})]})});w.propTypes={area:x.string,bed:x.string,maxPeople:x.number};const Le=(e,t)=>{const a={maximumFractionDigits:0};return t&&(a.style="currency",a.currency="TWD"),e.toLocaleString("zh-TW",a)},N=d.memo(e=>{const{itemData:t}=e;return r.jsxs(Pe,{children:[r.jsx("div",{className:"cover",children:r.jsx(U,{imgList:t.imageUrlList},t._id)}),r.jsxs("div",{className:"info",children:[r.jsx("div",{className:"title",children:t.name}),r.jsx("div",{className:"subTitle",children:t.description}),r.jsx(w,{area:t.areaInfo,bed:t.bedInfo,maxPeople:t.maxPeople}),r.jsx("div",{className:"linear"}),r.jsxs("div",{className:"price",children:["NT ",Le(t.price,!0),r.jsx(k,{fontSize:"large",color:"primary"})]})]})]})});N.propTypes={itemData:x.object};const Ue=d.memo(()=>{const e=X(),{rooms:t}=J(a=>({rooms:a.home.rooms}),K);return d.useEffect(()=>{e(Q())},[e]),r.jsxs($e,{children:[r.jsx("div",{className:"carousel"}),r.jsxs(ke,{maxWidth:"md",children:[r.jsx("div",{className:"title",children:"房型選擇"}),r.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),r.jsx("ul",{children:t==null?void 0:t.map(a=>r.jsx(N,{itemData:a},a._id))})]})]})});export{Ue as default};
