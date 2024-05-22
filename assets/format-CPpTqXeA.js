import{s as h,h as n,i as c,j as t,r as y,P as s}from"./index-B2_irwuj.js";const j=h("div")(({theme:e})=>`

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
`);var d={},_=c;Object.defineProperty(d,"__esModule",{value:!0});var v=d.default=void 0,g=_(n()),I=t;v=d.default=(0,g.default)((0,I.jsx)("path",{d:"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"}),"Bed");var l={},b=c;Object.defineProperty(l,"__esModule",{value:!0});var p=l.default=void 0,P=b(n()),$=t;p=l.default=(0,P.default)((0,$.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var u={},R=c;Object.defineProperty(u,"__esModule",{value:!0});var f=u.default=void 0,M=R(n()),D=t;f=u.default=(0,M.default)((0,D.jsx)("path",{d:"M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z"}),"AspectRatio");const m=y.memo(e=>{const{areaInfo:a,bedInfo:r,maxPeople:o,style:i}=e;return t.jsxs(j,{style:i,children:[t.jsxs("div",{children:[t.jsx(f,{color:"primary"}),a]}),t.jsxs("div",{children:[t.jsx(v,{color:"primary"}),r]}),t.jsxs("div",{children:[t.jsx(p,{color:"primary"}),o,"人"]})]})});m.propTypes={areaInfo:s.string,bedInfo:s.string,maxPeople:s.number,style:s.object};m.defaultProps={areaInfo:"24坪",bedInfo:"兩大床",maxPeople:4,style:{}};const O=(e=0,a)=>{const r={maximumFractionDigits:0};return a&&(r.style="currency",r.currency="TWD"),e.toLocaleString("zh-TW",r)},q=e=>{const a=e.split("&"),r={};return a.forEach(o=>{const[i,x]=o.split("=");r[i]=x}),r},z=e=>{var a=["日","一","二","三","四","五","六"],r=new Date(e),o=r.getDay();return`(${a[o]})`};export{m as B,z as d,q as p,O as t};
