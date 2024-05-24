import{s as y,h as c,i,j as t,r as j,P as s}from"./index-D340iFel.js";import{d as p}from"./dayjs.min-B6VooNFb.js";const _=y("div")(({theme:e})=>`

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
`);var d={},g=i;Object.defineProperty(d,"__esModule",{value:!0});var v=d.default=void 0,I=g(c()),b=t;v=d.default=(0,I.default)((0,b.jsx)("path",{d:"M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22M14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1M5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5z"}),"Bed");var l={},D=i;Object.defineProperty(l,"__esModule",{value:!0});var f=l.default=void 0,P=D(c()),M=t;f=l.default=(0,P.default)((0,M.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person");var u={},$=i;Object.defineProperty(u,"__esModule",{value:!0});var m=u.default=void 0,R=$(c()),S=t;m=u.default=(0,R.default)((0,S.jsx)("path",{d:"M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16.01H3V4.99h18z"}),"AspectRatio");const x=j.memo(e=>{const{areaInfo:a,bedInfo:r,maxPeople:o,style:n}=e;return t.jsxs(_,{style:n,children:[t.jsxs("div",{children:[t.jsx(m,{color:"primary"}),a]}),t.jsxs("div",{children:[t.jsx(v,{color:"primary"}),r]}),t.jsxs("div",{children:[t.jsx(f,{color:"primary"}),o,"人"]})]})});x.propTypes={areaInfo:s.string,bedInfo:s.string,maxPeople:s.number,style:s.object};x.defaultProps={areaInfo:"24坪",bedInfo:"兩大床",maxPeople:4,style:{}};const z=(e=0,a)=>{const r={maximumFractionDigits:0};return a&&(r.style="currency",r.currency="TWD"),e.toLocaleString("zh-TW",r)},H=e=>{const a=e.split("&"),r={};return a.forEach(o=>{const[n,h]=o.split("=");r[n]=h}),r},V=e=>{var a=["日","一","二","三","四","五","六"],r=new Date(e),o=r.getDay();return`(${a[o]})`},w=(e,a)=>p(a).diff(e,"day"),B=e=>p().format("YYYY-MM-DD");export{x as B,w as c,V as d,B as f,H as p,z as t};
