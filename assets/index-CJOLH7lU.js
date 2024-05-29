import{_ as u,c as N,a as h,r as p,b as z,j as t,d as _,u as L,e as P,g as I,s as g,f as D,i as G,I as B,P as f,h as M,k as j,l as E,m as U,n as q,o as C,p as A}from"./index-CVkWFu2v.js";import{B as H}from"./Box-DosX6QM1.js";import{r as O,t as F}from"./format-C0N0hoLM.js";import{B as V}from"./index-Flmnt1Ny.js";import{S as X}from"./slick-theme-Dp_dKcb9.js";import{s as J}from"./styled-Cbc4DzqU.js";import{S as K}from"./Skeleton-yfmSorbw.js";import"./createSvgIcon-DILnmTci.js";import"./dayjs.min-CarIDa6n.js";import"./createStyled-B59xLCnK.js";import"./colorManipulator-BxAWG0nz.js";const Q=["className","component","disableGutters","fixed","maxWidth","classes"],Y=N(),Z=J("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:i}=e;return[o.root,o[`maxWidth${h(String(i.maxWidth))}`],i.fixed&&o.fixed,i.disableGutters&&o.disableGutters]}}),ee=e=>L({props:e,name:"MuiContainer",defaultTheme:Y}),te=(e,o)=>{const i=c=>I(o,c),{classes:n,fixed:d,disableGutters:r,maxWidth:s}=e,a={root:["root",s&&`maxWidth${h(String(s))}`,d&&"fixed",r&&"disableGutters"]};return P(a,i,n)};function se(e={}){const{createStyledComponent:o=Z,useThemeProps:i=ee,componentName:n="MuiContainer"}=e,d=o(({theme:s,ownerState:a})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}),({theme:s,ownerState:a})=>a.fixed&&Object.keys(s.breakpoints.values).reduce((c,l)=>{const x=l,m=s.breakpoints.values[x];return m!==0&&(c[s.breakpoints.up(x)]={maxWidth:`${m}${s.breakpoints.unit}`}),c},{}),({theme:s,ownerState:a})=>u({},a.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},a.maxWidth&&a.maxWidth!=="xs"&&{[s.breakpoints.up(a.maxWidth)]:{maxWidth:`${s.breakpoints.values[a.maxWidth]}${s.breakpoints.unit}`}}));return p.forwardRef(function(a,c){const l=i(a),{className:x,component:m="div",disableGutters:y=!1,fixed:R=!1,maxWidth:T="lg"}=l,w=z(l,Q),v=u({},l,{component:m,disableGutters:y,fixed:R,maxWidth:T}),S=te(v,n);return t.jsx(d,u({as:m,ownerState:v,className:_(S.root,x),ref:c},w))})}const oe="/Demo_Vite_React/assets/banner-BiRXWkwt.png",ie=g("div")(({theme:e})=>`
  
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

`),ae=se({createStyledComponent:g("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:i}=e;return[o.root,o[`maxWidth${h(String(i.maxWidth))}`],i.fixed&&o.fixed,i.disableGutters&&o.disableGutters]}}),useThemeProps:e=>D({props:e,name:"MuiContainer"})}),re=ae,ne=g(H)(({theme:e})=>`

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
`);var b={},de=G;Object.defineProperty(b,"__esModule",{value:!0});var k=b.default=void 0,ce=de(O()),le=t;k=b.default=(0,ce.default)((0,le.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const pe=g("div")(({theme:e})=>`
  
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
`),W=p.memo(e=>{const{imgList:o}=e;let i={lazyLoad:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:4e3};return t.jsx(pe,{children:t.jsx(X,{...i,children:o==null?void 0:o.slice(0,4).map((n,d)=>t.jsx("img",{src:`${B}/jpg/${n}`,className:"img"},d))})})});W.propTypes={imgList:f.array};const $=p.memo(({itemData:e,directToPage:o})=>{const{name:i,description:n,imageUrlList:d,areaInfo:r,bedInfo:s,maxPeople:a,price:c,_id:l}=e;return t.jsxs(ne,{children:[t.jsx("div",{className:"cover",children:t.jsx(W,{imgList:d},l)}),t.jsxs("div",{onClick:()=>o(l),className:"info",children:[t.jsx("div",{className:"title",children:i}),t.jsx("div",{className:"subTitle",children:n}),t.jsx(V,{area:r,bed:s,maxPeople:a}),t.jsx("div",{className:"linear"}),t.jsxs("div",{className:"price",children:["NT ",F(c,!0),t.jsx(k,{fontSize:"large",color:"primary"})]})]})]})});$.propTypes={itemData:f.object,directToPage:f.func};const We=p.memo(()=>{const e=M(),{isLoading:o}=j(E),{rooms:i}=j(r=>({rooms:r.room.rooms}),U);p.useEffect(()=>{e(q())},[e]),p.useEffect(()=>{e(C(!0)),i&&e(C(!1))},[e,i]);const n=A(),d=r=>{n(`/detail/${r}`)};return t.jsxs(ie,{children:[t.jsx("div",{className:"carousel"}),t.jsxs(re,{maxWidth:"md",children:[t.jsx("div",{className:"title",children:"房型選擇"}),t.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),o?t.jsx(K,{variant:"rounded",height:300}):t.jsx("ul",{children:i==null?void 0:i.map(r=>t.jsx($,{directToPage:d,itemData:r},r._id))})]})]})});export{We as default};
