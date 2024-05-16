import{_ as m,c as N,a as g,r as p,b as S,j as s,d as T,u as _,e as z,g as P,s as u,f as D,i as G,I,P as v,h as L,k as B,l as M,m as E,n as U}from"./index-Doe91rrP.js";import{B as q}from"./Box-Bc32EHOn.js";import{r as H,S as A,B as O,t as F}from"./format-C5IC23FZ.js";import{s as V}from"./styled-vwg6wbiJ.js";const X=["className","component","disableGutters","fixed","maxWidth","classes"],J=N(),K=V("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[`maxWidth${g(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),Q=t=>_({props:t,name:"MuiContainer",defaultTheme:J}),Y=(t,e)=>{const a=d=>P(e,d),{classes:r,fixed:n,disableGutters:f,maxWidth:o}=t,i={root:["root",o&&`maxWidth${g(String(o))}`,n&&"fixed",f&&"disableGutters"]};return z(i,a,r)};function Z(t={}){const{createStyledComponent:e=K,useThemeProps:a=Q,componentName:r="MuiContainer"}=t,n=e(({theme:o,ownerState:i})=>m({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}),({theme:o,ownerState:i})=>i.fixed&&Object.keys(o.breakpoints.values).reduce((d,l)=>{const x=l,c=o.breakpoints.values[x];return c!==0&&(d[o.breakpoints.up(x)]={maxWidth:`${c}${o.breakpoints.unit}`}),d},{}),({theme:o,ownerState:i})=>m({},i.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[o.breakpoints.up(i.maxWidth)]:{maxWidth:`${o.breakpoints.values[i.maxWidth]}${o.breakpoints.unit}`}}));return p.forwardRef(function(i,d){const l=a(i),{className:x,component:c="div",disableGutters:W=!1,fixed:$=!1,maxWidth:y="lg"}=l,w=S(l,X),b=m({},l,{component:c,disableGutters:W,fixed:$,maxWidth:y}),R=Y(b,r);return s.jsx(n,m({as:c,ownerState:b,className:T(R.root,x),ref:d},w))})}const ee="/Demo_Vite_React/assets/banner-BiRXWkwt.png",te=u("div")(({theme:t})=>`
  
  background-color:${t.color.primaryTint};
  padding-bottom: 30px;
  
  .carousel {
    height: 400px;
    background-image: url(${ee});
    background-size: cover;
    margin-bottom: 30px;
  }

  .title{
    font-size: 18px;
    font-weight: bold;
  }
  
  .desc {
    color: ${t.color.primaryBase};
    font-size: 32px;
    font-weight: 700;
    margin-bottom:40px;
  }

`),se=Z({createStyledComponent:u("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[`maxWidth${g(String(a.maxWidth))}`],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}}),useThemeProps:t=>D({props:t,name:"MuiContainer"})}),ae=se,oe=u(q)(({theme:t})=>`

  display: flex;
  max-height: 350px;
  box-sizing: border-box;
  background-color: ${t.textColor.white};
  border-radius: 17px;
  padding: 20px 25px;
  margin-bottom: 30px;
  ${t.mixins.boxShadow};

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
    color: ${t.textColor.black80};
    font-size: 14px;
    margin: 5px auto 20px ;
  }

  .linear{
    height: 3px;
    background: linear-gradient(to right, #BE9C7C, ${t.textColor.white});
    margin: 20px auto ;
  }

  .price{
    height: 70px;
    color:${t.color.primaryBase};
    display: flex;
    font-size: 25px;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
`);var h={},ie=G;Object.defineProperty(h,"__esModule",{value:!0});var j=h.default=void 0,re=ie(H()),ne=s;j=h.default=(0,re.default)((0,ne.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const de=u("div")(({theme:t})=>`
  
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
`),C=p.memo(t=>{const{imgList:e}=t;let a={lazyLoad:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:4e3};return s.jsx(de,{children:s.jsx(A,{...a,children:e==null?void 0:e.slice(0,4).map((r,n)=>s.jsx("img",{src:`${I}/jpg/${r}`,className:"img"},n))})})});C.propTypes={imgList:v.array};const k=p.memo(t=>{const{itemData:e}=t,a=L(),r=n=>{a(`/detail/${n}`)};return s.jsxs(oe,{children:[s.jsx("div",{className:"cover",children:s.jsx(C,{imgList:e.imageUrlList},e._id)}),s.jsxs("div",{onClick:()=>r(e._id),className:"info",children:[s.jsx("div",{className:"title",children:e.name}),s.jsx("div",{className:"subTitle",children:e.description}),s.jsx(O,{area:e.areaInfo,bed:e.bedInfo,maxPeople:e.maxPeople}),s.jsx("div",{className:"linear"}),s.jsxs("div",{className:"price",children:["NT ",F(e.price,!0),s.jsx(j,{fontSize:"large",color:"primary"})]})]})]})});k.propTypes={itemData:v.object};const me=p.memo(()=>{const t=B(),{rooms:e}=M(a=>({rooms:a.home.rooms}),E);return p.useEffect(()=>{t(U())},[t]),s.jsxs(te,{children:[s.jsx("div",{className:"carousel"}),s.jsxs(ae,{maxWidth:"md",children:[s.jsx("div",{className:"title",children:"房型選擇"}),s.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),s.jsx("ul",{children:e==null?void 0:e.map(a=>s.jsx(k,{itemData:a},a._id))})]})]})});export{me as default};
