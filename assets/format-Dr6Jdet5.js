import{at as g,a as j,ao as b,H as I,w as P,s as M,i as u,j as a,r as S,P as s}from"./index-BFKiUgkS.js";import{c as $}from"./createSvgIcon-CPHB7xGy.js";import{h as D,f as R,i as C,o as E,e as O,u as q,c as w,b as z,a as N,d as F}from"./Box-DTANflih.js";import{d as v}from"./dayjs.min-BNXgq4Cy.js";function H(e,r){return()=>null}function T(e,r){return()=>null}function V(e,r,t,o,n){return null}var c={};const k={configure:e=>{g.configure(e)}},W=Object.freeze(Object.defineProperty({__proto__:null,capitalize:j,createChainedFunction:D,createSvgIcon:$,debounce:R,deprecatedPropType:H,isMuiElement:C,ownerDocument:E,ownerWindow:O,requirePropFactory:T,setRef:b,unstable_ClassNameGenerator:k,unstable_useEnhancedEffect:q,unstable_useId:w,unsupportedProp:V,useControlled:z,useEventCallback:N,useForkRef:I,useIsFocusVisible:F},Symbol.toStringTag,{value:"Module"})),A=P(W);var f;function i(){return f||(f=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=A}(c)),c}const B=M("div")(({theme:e})=>`

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
`);var l={},Y=u;Object.defineProperty(l,"__esModule",{value:!0});var m=l.default=void 0,G=Y(i()),L=a;m=l.default=(0,G.default)((0,L.jsx)("path",{d:"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"}),"Bed");var d={},J=u;Object.defineProperty(d,"__esModule",{value:!0});var y=d.default=void 0,K=J(i()),Q=a;y=d.default=(0,K.default)((0,Q.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var p={},U=u;Object.defineProperty(p,"__esModule",{value:!0});var h=p.default=void 0,X=U(i()),Z=a;h=p.default=(0,X.default)((0,Z.jsx)("path",{d:"M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z"}),"AspectRatio");const x=S.memo(e=>{const{areaInfo:r,bedInfo:t,maxPeople:o,style:n}=e;return a.jsxs(B,{style:n,children:[a.jsxs("div",{children:[a.jsx(h,{color:"primary"}),r]}),a.jsxs("div",{children:[a.jsx(m,{color:"primary"}),t]}),a.jsxs("div",{children:[a.jsx(y,{color:"primary"}),o,"人"]})]})});x.propTypes={areaInfo:s.string,bedInfo:s.string,maxPeople:s.number,style:s.object};x.defaultProps={areaInfo:"24坪",bedInfo:"兩大床",maxPeople:4,style:{}};const oe=(e=0,r)=>{const t={maximumFractionDigits:0};return r&&(t.style="currency",t.currency="TWD"),e.toLocaleString("zh-TW",t)},ne=e=>{const r=e.split("&"),t={};return r.forEach(o=>{const[n,_]=o.split("=");t[n]=_}),t},se=e=>{var r=["日","一","二","三","四","五","六"],t=new Date(e),o=t.getDay();return`(${r[o]})`},ce=(e,r)=>v(r).diff(e,"day"),ue=e=>v(e).format("YYYY-MM-DD");export{x as B,ce as c,se as d,ue as f,ne as p,i as r,oe as t};
