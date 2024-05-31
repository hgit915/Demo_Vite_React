import{i as Y,j as e,r as d,I as p,t as S,B as D,P as G,f as b,v as H,w as P,x as A,k as V,q as X,y as J,l as M,z as K,A as Q}from"./index-BZ1CMoz2.js";import{r as O,t as Z}from"./format-NwQ4Baad.js";import{S as ee}from"./slick-theme-DIOhIFoH.js";import{C as te,M as se,g as ae}from"./room-jtJxH4K5.js";import{R as oe}from"./index-DopbMdF3.js";import{L as re,A as ie,D as B}from"./AdapterDayjs--U1GKxoL.js";import{d as u}from"./dayjs.min-ZHR2y8fp.js";import{S as z}from"./Skeleton-V1rZhyEo.js";import"./index-WrW62T7R.js";import"./colorManipulator-lS7wmc76.js";import"./DialogContent-BuQtmjop.js";var $={},ne=Y;Object.defineProperty($,"__esModule",{value:!0});var _=$.default=void 0,le=ne(O()),ce=e;_=$.default=(0,le.default)((0,ce.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var N={},me=Y;Object.defineProperty(N,"__esModule",{value:!0});var L=N.default=void 0,de=me(O()),pe=e;L=N.default=(0,de.default)((0,pe.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const w=d.memo(s=>{const{imgList:r}=s,[m,a]=d.useState(!1),[i,t]=d.useState(0),h=()=>a(!1),o=n=>{t(n),a(!0)},g={customPaging:function(n){return e.jsx("img",{src:`${p}/jpg/Room${n+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return e.jsxs(te,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>o(0),src:`${p}/jpg/${r[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>o(1),src:`${p}/jpg/${r[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>o(2),src:`${p}/jpg/${r[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>o(3),src:`${p}/jpg/${r[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>o(4),src:`${p}/jpg/${r[4]}`,className:"img hover-mask "},4)]}),e.jsx(S,{className:"more",variant:"outlined",size:"large",onClick:()=>o(0),children:"查看更多"}),e.jsx(se,{open:m,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(D,{className:"boxModal",children:[e.jsx(S,{className:"close",size:"medium",onClick:h,children:"X"}),e.jsx("div",{className:"slider-container",children:e.jsx(ee,{...g,children:r.map((n,x)=>e.jsx("img",{src:`${p}/jpg/${n}`,className:"img"},x))})})]})})]})});w.propTypes={imgList:G.array};const xe=b(D)(({theme:s})=>`
 
  ${s.components.ContainerWrapper};
  `),fe=b(D)(({theme:s})=>`
 ${s.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),ue=b(D)(({theme:s})=>`
  ${s.components.RightBoxWrapper};

  .subtitle{
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 2px solid ${s.textColor.black40};
  }

  .name{
    font-size: 28px;
    font-weight: bold;
    margin-top: 25px ;
  }

  .desc{
    font-size: 14px;
    margin-bottom: 25px;
  }

  .peopleCount {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .num{
    font-size: 20px;
    vertical-align: middle;
    margin:0 15px;
  }
  
  .price {
    color:${s.color.primaryBase};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  `),R=b(H)(({theme:s})=>`
  color:${s.textColor.black60};
  border:1px solid ${s.textColor.black40};
  `);var E={exports:{}};(function(s,r){(function(m,a){s.exports=a()})(P,function(){return function(m,a){a.prototype.isSameOrAfter=function(i,t){return this.isSame(i,t)||this.isAfter(i,t)}}})})(E);var he=E.exports;const ge=A(he);var W={exports:{}};(function(s,r){(function(m,a){s.exports=a()})(P,function(){return function(m,a){a.prototype.isSameOrBefore=function(i,t){return this.isSame(i,t)||this.isBefore(i,t)}}})})(W);var je=W.exports;const ve=A(je);u.extend(ge);u.extend(ve);const v=u(),ze=d.memo(()=>{const s=V(),r=X(),{roomId:m}=J(),{isLogin:a}=M(K),{detail:i}=M(ae),[t,h]=d.useState(null);d.useEffect(()=>{s(Q(m))},[s,m]),d.useEffect(()=>{i&&h(i)},[i]);const[o,g]=d.useState({startDate:"",endDate:"",people:1}),[n,x]=d.useState({startDate:"",endDate:""}),C=(l,c)=>{g(j=>({...j,[l]:c===null?"":new Date(c).toLocaleDateString()}))},y=l=>{g(c=>{const j=l==="remove"?c.people-1:c.people+1;return{...c,people:Math.min(Math.max(j,1),t.maxPeople)}})},T=()=>{if(!a){r("/login");return}x({startDate:"",endDate:""});let l="",c=!1;["startDate","endDate"].forEach(f=>{(o[f]===""||o[f]==="Invalid Date")&&(l="日期不得為空或格式有誤",x(U=>({...U,[f]:l})),c=!0)});const{startDate:q,endDate:F}=o,k=u(q),I=u(F);k.isSameOrAfter(I)&&(c=!0,x(f=>({...f,endDate:"退房日不得早於或等於入住日"}))),!c&&r(`/order/roomId=${m}&people=${o.people}&startDate=${k.format("YYYY-MM-DD")}&endDate=${I.format("YYYY-MM-DD")}`)};return e.jsxs(xe,{children:[e.jsx("div",{className:"top",children:t?e.jsx(w,{imgList:t.imageUrlList}):e.jsx(z,{variant:"rectangular",height:400})}),t?e.jsxs("div",{className:"bottom",children:[e.jsxs(fe,{children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsx(oe,{sectionsInfo:[{title:"房間格局",info:t.layoutInfo},{title:"房內設備",info:t.facilityInfo},{title:"備品提供",info:t.amenityInfo}],basicInfo:{areaInfo:t.areaInfo,bedInfo:t.bedInfo,maxPeople:t.maxPeople},rule:!0,basicStyle:{marginBottom:"48px"}})]}),e.jsxs(ue,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsxs(re,{dateAdapter:ie,adapterLocale:"zh-tw",children:[e.jsx(B,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.startDate,error:!!n.startDate}},onChange:l=>C("startDate",l)}),e.jsx(B,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.endDate,error:!!n.endDate}},onChange:l=>C("endDate",l)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(R,{size:"small",color:"primary",onClick:()=>y("remove"),children:e.jsx(_,{})}),e.jsx("span",{className:"num",children:o.people}),e.jsx(R,{size:"small",color:"primary",onClick:()=>y("add"),children:e.jsx(L,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",Z(t.price,!0)]}),e.jsx(S,{size:"large",variant:"contained",fullWidth:!0,onClick:T,children:a?"立即預訂":"登入會員，立即預訂!"})]})]}):e.jsx(z,{className:"bottom",variant:"rounded",height:300})]})});export{ze as default};
