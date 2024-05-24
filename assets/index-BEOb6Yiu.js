import{_ as u,c as w,a as h,r as p,b as S,j as s,d as N,u as z,e as _,g as P,s as g,f as G,h as I,i as L,I as D,P as f,k as B,l as M,m as E,n as U,o as q}from"./index-D340iFel.js";import{B as A}from"./Box-DjHMrn4_.js";import{B as H,t as O}from"./format-XKBLztxm.js";import{S as F}from"./slick-theme-BjuETUx_.js";import{s as V}from"./styled-BhPBWOhk.js";import{S as X}from"./Skeleton-CjSVaKCG.js";import"./dayjs.min-B6VooNFb.js";import"./createStyled-9HYQIvXo.js";import"./colorManipulator-BMsbfZ6o.js";const J=["className","component","disableGutters","fixed","maxWidth","classes"],K=w(),Q=V("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${h(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),Y=e=>z({props:e,name:"MuiContainer",defaultTheme:K}),Z=(e,t)=>{const i=d=>P(t,d),{classes:n,fixed:r,disableGutters:x,maxWidth:o}=e,a={root:["root",o&&`maxWidth${h(String(o))}`,r&&"fixed",x&&"disableGutters"]};return _(a,i,n)};function ee(e={}){const{createStyledComponent:t=Q,useThemeProps:i=Y,componentName:n="MuiContainer"}=e,r=t(({theme:o,ownerState:a})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}),({theme:o,ownerState:a})=>a.fixed&&Object.keys(o.breakpoints.values).reduce((d,c)=>{const m=c,l=o.breakpoints.values[m];return l!==0&&(d[o.breakpoints.up(m)]={maxWidth:`${l}${o.breakpoints.unit}`}),d},{}),({theme:o,ownerState:a})=>u({},a.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[o.breakpoints.up(a.maxWidth)]:{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`}}));return p.forwardRef(function(a,d){const c=i(a),{className:m,component:l="div",disableGutters:W=!1,fixed:$=!1,maxWidth:y="lg"}=c,R=S(c,J),v=u({},c,{component:l,disableGutters:W,fixed:$,maxWidth:y}),T=Z(v,n);return s.jsx(r,u({as:l,ownerState:v,className:N(T.root,m),ref:d},R))})}const te="/Demo_Vite_React/assets/banner-BiRXWkwt.png",se=g("div")(({theme:e})=>`
  
  background-color:${e.color.primaryTint};
  padding-bottom: 30px;
  
  .carousel {
    height: 400px;
    background-image: url(${te});
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

`),oe=ee({createStyledComponent:g("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[`maxWidth${h(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>G({props:e,name:"MuiContainer"})}),ie=oe,ae=g(A)(({theme:e})=>`

  display: flex;
  max-height: 350px;
  box-sizing: border-box;
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
`);var b={},re=L;Object.defineProperty(b,"__esModule",{value:!0});var j=b.default=void 0,ne=re(I()),de=s;j=b.default=(0,ne.default)((0,de.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const ce=g("div")(({theme:e})=>`
  
  .header {
    font-size: 42px;
  }
  
  .img {
    height: 280px;
    border-radius: 25px;
    object-fit: cover;  
  }

  // Override react-slick's css
  .slick-list{
    width:400px;
    margin-right:25px;
  }
 
  .slick-dots{
    position: relative;
    bottom: -4px;
  }

  .slick-prev{
    left: 20px;
    z-index:1;
  }

  .slick-next{
    right: 40px;
    z-index:1;
  }
`),C=p.memo(e=>{const{imgList:t}=e;let i={lazyLoad:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:4e3};return s.jsx(ce,{children:s.jsx(F,{...i,children:t==null?void 0:t.slice(0,4).map((n,r)=>s.jsx("img",{src:`${D}/jpg/${n}`,className:"img"},r))})})});C.propTypes={imgList:f.array};const k=p.memo(({itemData:e,directToPage:t})=>{const{name:i,description:n,imageUrlList:r,areaInfo:x,bedInfo:o,maxPeople:a,price:d,_id:c}=e;return s.jsxs(ae,{children:[s.jsx("div",{className:"cover",children:s.jsx(C,{imgList:r},c)}),s.jsxs("div",{onClick:()=>t(c),className:"info",children:[s.jsx("div",{className:"title",children:i}),s.jsx("div",{className:"subTitle",children:n}),s.jsx(H,{area:x,bed:o,maxPeople:a}),s.jsx("div",{className:"linear"}),s.jsxs("div",{className:"price",children:["NT ",O(d,!0),s.jsx(j,{fontSize:"large",color:"primary"})]})]})]})});k.propTypes={itemData:f.object,directToPage:f.func};const ve=p.memo(()=>{const e=B(),{rooms:t}=M(r=>({rooms:r.room.rooms}),E);p.useEffect(()=>{e(U())},[e]);const i=q(),n=r=>{i(`/detail/${r}`)};return s.jsxs(se,{children:[s.jsx("div",{className:"carousel"}),s.jsxs(ie,{maxWidth:"md",children:[s.jsx("div",{className:"title",children:"房型選擇"}),s.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),t?s.jsx("ul",{children:t==null?void 0:t.map(r=>s.jsx(k,{directToPage:n,itemData:r},r._id))}):s.jsx(X,{variant:"rounded",height:300})]})]})});export{ve as default};
