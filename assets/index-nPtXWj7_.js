import{_ as u,c as N,s as z,a as h,r as p,b as _,j as t,d as L,u as P,e as I,g as D,f as g,h as G,B,i as M,I as E,P as f,k as q,l as j,m as U,n as A,o as C,p as H,q as O}from"./index-BZ1CMoz2.js";import{r as F,t as V}from"./format-NwQ4Baad.js";import{B as X}from"./index-WrW62T7R.js";import{S as J}from"./slick-theme-DIOhIFoH.js";import{S as K}from"./Skeleton-V1rZhyEo.js";import"./dayjs.min-ZHR2y8fp.js";import"./colorManipulator-lS7wmc76.js";const Q=["className","component","disableGutters","fixed","maxWidth","classes"],Y=N(),Z=z("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,a[`maxWidth${h(String(s.maxWidth))}`],s.fixed&&a.fixed,s.disableGutters&&a.disableGutters]}}),ee=e=>P({props:e,name:"MuiContainer",defaultTheme:Y}),te=(e,a)=>{const s=c=>D(a,c),{classes:n,fixed:d,disableGutters:r,maxWidth:o}=e,i={root:["root",o&&`maxWidth${h(String(o))}`,d&&"fixed",r&&"disableGutters"]};return I(i,s,n)};function se(e={}){const{createStyledComponent:a=Z,useThemeProps:s=ee,componentName:n="MuiContainer"}=e,d=a(({theme:o,ownerState:i})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}),({theme:o,ownerState:i})=>i.fixed&&Object.keys(o.breakpoints.values).reduce((c,l)=>{const m=l,x=o.breakpoints.values[m];return x!==0&&(c[o.breakpoints.up(m)]={maxWidth:`${x}${o.breakpoints.unit}`}),c},{}),({theme:o,ownerState:i})=>u({},i.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[o.breakpoints.up(i.maxWidth)]:{maxWidth:`${o.breakpoints.values[i.maxWidth]}${o.breakpoints.unit}`}}));return p.forwardRef(function(i,c){const l=s(i),{className:m,component:x="div",disableGutters:y=!1,fixed:R=!1,maxWidth:T="lg"}=l,w=_(l,Q),v=u({},l,{component:x,disableGutters:y,fixed:R,maxWidth:T}),S=te(v,n);return t.jsx(d,u({as:x,ownerState:v,className:L(S.root,m),ref:c},w))})}const oe="/Demo_Vite_React/assets/banner-BiRXWkwt.png",ae=g("div")(({theme:e})=>`
  
  background-color:${e.color.primaryTint};
  padding-bottom: 30px;
  
  .carousel {
    height: 400px;
    background-image: url(${oe});
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

`),ie=se({createStyledComponent:g("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,a[`maxWidth${h(String(s.maxWidth))}`],s.fixed&&a.fixed,s.disableGutters&&a.disableGutters]}}),useThemeProps:e=>G({props:e,name:"MuiContainer"})}),re=ie,ne=g(B)(({theme:e})=>`

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
`);var b={},de=M;Object.defineProperty(b,"__esModule",{value:!0});var k=b.default=void 0,ce=de(F()),le=t;k=b.default=(0,ce.default)((0,le.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const pe=g("div")(({theme:e})=>`
  
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
`),W=p.memo(e=>{const{imgList:a}=e;let s={lazyLoad:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:4e3};return t.jsx(pe,{children:t.jsx(J,{...s,children:a==null?void 0:a.slice(0,4).map((n,d)=>t.jsx("img",{src:`${E}/jpg/${n}`,className:"img"},d))})})});W.propTypes={imgList:f.array};const $=p.memo(({itemData:e,directToPage:a})=>{const{name:s,description:n,imageUrlList:d,areaInfo:r,bedInfo:o,maxPeople:i,price:c,_id:l}=e;return t.jsxs(ne,{children:[t.jsx("div",{className:"cover",children:t.jsx(W,{imgList:d},l)}),t.jsxs("div",{onClick:()=>a(l),className:"info",children:[t.jsx("div",{className:"title",children:s}),t.jsx("div",{className:"subTitle",children:n}),t.jsx(X,{area:r,bed:o,maxPeople:i}),t.jsx("div",{className:"linear"}),t.jsxs("div",{className:"price",children:["NT ",V(c,!0),t.jsx(k,{fontSize:"large",color:"primary"})]})]})]})});$.propTypes={itemData:f.object,directToPage:f.func};const ve=p.memo(()=>{const e=q(),{isLoading:a}=j(U),{rooms:s}=j(r=>({rooms:r.room.rooms}),A);p.useEffect(()=>{e(C(!0)),e(H())},[e]),p.useEffect(()=>{s.length>0&&e(C(!1))},[e,s]);const n=O(),d=r=>{n(`/detail/${r}`)};return t.jsxs(ae,{children:[t.jsx("div",{className:"carousel"}),t.jsxs(re,{maxWidth:"md",children:[t.jsx("div",{className:"title",children:"房型選擇"}),t.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),a?t.jsx(K,{variant:"rounded",height:300}):s.length>0?t.jsx("ul",{children:s==null?void 0:s.map(r=>t.jsx($,{directToPage:d,itemData:r},r._id))}):t.jsx("p",{children:"很抱歉，目前無可預訂的房型"})]})]})});export{ve as default};
