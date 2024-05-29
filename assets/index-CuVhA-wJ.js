import{i as Y,j as e,r as d,I as p,P as G,s as D,q as P,t as O,h as H,p as V,v as X,k as M,w as J,x as K}from"./index-CVkWFu2v.js";import{r as _,t as Q}from"./format-C0N0hoLM.js";import{S as Z}from"./slick-theme-Dp_dKcb9.js";import{C as ee,M as te,g as se}from"./room-Boz0-xd5.js";import{B as S}from"./Button-B4vz3oNv.js";import{B as b}from"./Box-DosX6QM1.js";import{R as ae}from"./index-DQkNuyI3.js";import{I as oe}from"./InputAdornment-Auf_oQ7W.js";import{L as re,A as ie,D as B}from"./AdapterDayjs-CKzki8qB.js";import{d as u}from"./dayjs.min-CarIDa6n.js";import{S as R}from"./Skeleton-yfmSorbw.js";import"./createSvgIcon-DILnmTci.js";import"./Modal-CjDT00mN.js";import"./mergeSlotProps-C0Y4RLEe.js";import"./ButtonBase-Caj3Nt0H.js";import"./index-Flmnt1Ny.js";import"./TextField-0hzCJ_GQ.js";import"./react-is.production.min-DUDD-a5e.js";import"./Typography-4Dhy4s7q.js";import"./colorManipulator-BxAWG0nz.js";import"./createStyled-B59xLCnK.js";import"./DialogContent-DC5VXgZJ.js";var $={},ne=Y;Object.defineProperty($,"__esModule",{value:!0});var A=$.default=void 0,le=ne(_()),me=e;A=$.default=(0,le.default)((0,me.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var N={},ce=Y;Object.defineProperty(N,"__esModule",{value:!0});var L=N.default=void 0,de=ce(_()),pe=e;L=N.default=(0,de.default)((0,pe.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const w=d.memo(s=>{const{imgList:r}=s,[c,a]=d.useState(!1),[i,t]=d.useState(0),h=()=>a(!1),o=n=>{t(n),a(!0)},g={customPaging:function(n){return e.jsx("img",{src:`${p}/jpg/Room${n+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return e.jsxs(ee,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>o(0),src:`${p}/jpg/${r[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>o(1),src:`${p}/jpg/${r[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>o(2),src:`${p}/jpg/${r[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>o(3),src:`${p}/jpg/${r[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>o(4),src:`${p}/jpg/${r[4]}`,className:"img hover-mask "},4)]}),e.jsx(S,{className:"more",variant:"outlined",size:"large",onClick:()=>o(0),children:"查看更多"}),e.jsx(te,{open:c,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(b,{className:"boxModal",children:[e.jsx(S,{className:"close",size:"medium",onClick:h,children:"X"}),e.jsx("div",{className:"slider-container",children:e.jsx(Z,{...g,children:r.map((n,x)=>e.jsx("img",{src:`${p}/jpg/${n}`,className:"img"},x))})})]})})]})});w.propTypes={imgList:G.array};const xe=D(b)(({theme:s})=>`
 
  ${s.components.ContainerWrapper};
  `),fe=D(b)(({theme:s})=>`
 ${s.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),ue=D(b)(({theme:s})=>`
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
  `),z=D(oe)(({theme:s})=>`
  color:${s.textColor.black60};
  border:1px solid ${s.textColor.black40};
  `);var E={exports:{}};(function(s,r){(function(c,a){s.exports=a()})(P,function(){return function(c,a){a.prototype.isSameOrAfter=function(i,t){return this.isSame(i,t)||this.isAfter(i,t)}}})})(E);var he=E.exports;const ge=O(he);var W={exports:{}};(function(s,r){(function(c,a){s.exports=a()})(P,function(){return function(c,a){a.prototype.isSameOrBefore=function(i,t){return this.isSame(i,t)||this.isBefore(i,t)}}})})(W);var je=W.exports;const ve=O(je);u.extend(ge);u.extend(ve);const v=u(),Te=d.memo(()=>{const s=H(),r=V(),{roomId:c}=X(),{isLogin:a}=M(J),{detail:i}=M(se),[t,h]=d.useState(null);d.useEffect(()=>{s(K(c))},[s,c]),d.useEffect(()=>{i&&h(i)},[i]);const[o,g]=d.useState({startDate:"",endDate:"",people:1}),[n,x]=d.useState({startDate:"",endDate:""}),C=(l,m)=>{g(j=>({...j,[l]:m===null?"":new Date(m).toLocaleDateString()}))},y=l=>{g(m=>{const j=l==="remove"?m.people-1:m.people+1;return{...m,people:Math.min(Math.max(j,1),t.maxPeople)}})},T=()=>{x({startDate:"",endDate:""});let l="",m=!1;["startDate","endDate"].forEach(f=>{(o[f]===""||o[f]==="Invalid Date")&&(l="日期不得為空或格式有誤",x(U=>({...U,[f]:l})),m=!0)});const{startDate:q,endDate:F}=o,I=u(q),k=u(F);if(I.isSameOrAfter(k)&&(m=!0,x(f=>({...f,endDate:"退房日不得早於或等於入住日"}))),!m){if(!a){r("/login");return}r(`/order/roomId=${c}&people=${o.people}&startDate=${I.format("YYYY-MM-DD")}&endDate=${k.format("YYYY-MM-DD")}`)}};return e.jsxs(xe,{children:[e.jsx("div",{className:"top",children:t?e.jsx(w,{imgList:t.imageUrlList}):e.jsx(R,{variant:"rectangular",height:400})}),t?e.jsxs("div",{className:"bottom",children:[e.jsxs(fe,{children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsx(ae,{sectionsInfo:[{title:"房間格局",info:t.layoutInfo},{title:"房內設備",info:t.facilityInfo},{title:"備品提供",info:t.amenityInfo}],basicInfo:{areaInfo:t.areaInfo,bedInfo:t.bedInfo,maxPeople:t.maxPeople},rule:!0,basicStyle:{marginBottom:"48px"}})]}),e.jsxs(ue,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsxs(re,{dateAdapter:ie,adapterLocale:"zh-tw",children:[e.jsx(B,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.startDate,error:!!n.startDate}},onChange:l=>C("startDate",l)}),e.jsx(B,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.endDate,error:!!n.endDate}},onChange:l=>C("endDate",l)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(z,{size:"small",color:"primary",onClick:()=>y("remove"),children:e.jsx(A,{})}),e.jsx("span",{className:"num",children:o.people}),e.jsx(z,{size:"small",color:"primary",onClick:()=>y("add"),children:e.jsx(L,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",Q(t.price,!0)]}),e.jsx(S,{size:"large",variant:"contained",fullWidth:!0,onClick:T,children:a?"立即預訂":"登入會員，立即預訂!"})]})]}):e.jsx(R,{className:"bottom",variant:"rounded",height:300})]})});export{Te as default};
