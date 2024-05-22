import{_ as u,c as w,a as h,r as p,b as N,j as o,d as S,u as z,e as _,g as P,s as g,f as G,h as I,i as L,I as D,P as f,k as B,l as M,m as E,n as U,o as q}from"./index-B2_irwuj.js";import{B as A}from"./Box-ClYAFuGb.js";import{B as H,t as O}from"./format-CPpTqXeA.js";import{S as F}from"./slick-theme-BZCS24mA.js";import{s as V}from"./styled-CDS4iABz.js";const X=["className","component","disableGutters","fixed","maxWidth","classes"],J=w(),K=V("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${h(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),Q=e=>z({props:e,name:"MuiContainer",defaultTheme:J}),Y=(e,t)=>{const a=d=>P(t,d),{classes:n,fixed:r,disableGutters:x,maxWidth:s}=e,i={root:["root",s&&`maxWidth${h(String(s))}`,r&&"fixed",x&&"disableGutters"]};return _(i,a,n)};function Z(e={}){const{createStyledComponent:t=K,useThemeProps:a=Q,componentName:n="MuiContainer"}=e,r=t(({theme:s,ownerState:i})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}),({theme:s,ownerState:i})=>i.fixed&&Object.keys(s.breakpoints.values).reduce((d,c)=>{const m=c,l=s.breakpoints.values[m];return l!==0&&(d[s.breakpoints.up(m)]={maxWidth:`${l}${s.breakpoints.unit}`}),d},{}),({theme:s,ownerState:i})=>u({},i.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},i.maxWidth&&i.maxWidth!=="xs"&&{[s.breakpoints.up(i.maxWidth)]:{maxWidth:`${s.breakpoints.values[i.maxWidth]}${s.breakpoints.unit}`}}));return p.forwardRef(function(i,d){const c=a(i),{className:m,component:l="div",disableGutters:W=!1,fixed:$=!1,maxWidth:y="lg"}=c,R=N(c,X),v=u({},c,{component:l,disableGutters:W,fixed:$,maxWidth:y}),T=Y(v,n);return o.jsx(r,u({as:l,ownerState:v,className:S(T.root,m),ref:d},R))})}const ee="/Demo_Vite_React/assets/banner-BiRXWkwt.png",te=g("div")(({theme:e})=>`
  
  background-color:${e.color.primaryTint};
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
    color: ${e.color.primaryBase};
    font-size: 32px;
    font-weight: 700;
    margin-bottom:40px;
  }

`),se=Z({createStyledComponent:g("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${h(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>G({props:e,name:"MuiContainer"})}),oe=se,ae=g(A)(({theme:e})=>`

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
`);var b={},ie=L;Object.defineProperty(b,"__esModule",{value:!0});var j=b.default=void 0,re=ie(I()),ne=o;j=b.default=(0,re.default)((0,ne.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");const de=g("div")(({theme:e})=>`
  
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
`),C=p.memo(e=>{const{imgList:t}=e;let a={lazyLoad:!0,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!0,autoplay:!0,autoplaySpeed:4e3};return o.jsx(de,{children:o.jsx(F,{...a,children:t==null?void 0:t.slice(0,4).map((n,r)=>o.jsx("img",{src:`${D}/jpg/${n}`,className:"img"},r))})})});C.propTypes={imgList:f.array};const k=p.memo(({itemData:e,directToPage:t})=>{const{name:a,description:n,imageUrlList:r,areaInfo:x,bedInfo:s,maxPeople:i,price:d,_id:c}=e;return o.jsxs(ae,{children:[o.jsx("div",{className:"cover",children:o.jsx(C,{imgList:r},c)}),o.jsxs("div",{onClick:()=>t(c),className:"info",children:[o.jsx("div",{className:"title",children:a}),o.jsx("div",{className:"subTitle",children:n}),o.jsx(H,{area:x,bed:s,maxPeople:i}),o.jsx("div",{className:"linear"}),o.jsxs("div",{className:"price",children:["NT ",O(d,!0),o.jsx(j,{fontSize:"large",color:"primary"})]})]})]})});k.propTypes={itemData:f.object,directToPage:f.func};const ue=p.memo(()=>{const e=B(),{rooms:t}=M(r=>({rooms:r.room.rooms}),E);p.useEffect(()=>{e(U())},[e]);const a=q(),n=r=>{a(`/detail/${r}`)};return o.jsxs(te,{children:[o.jsx("div",{className:"carousel"}),o.jsxs(oe,{maxWidth:"md",children:[o.jsx("div",{className:"title",children:"房型選擇"}),o.jsx("div",{className:"desc",children:"各種房型，任您挑選"}),o.jsx("ul",{children:t==null?void 0:t.map(r=>o.jsx(k,{directToPage:n,itemData:r},r._id))})]})]})});export{ue as default};
