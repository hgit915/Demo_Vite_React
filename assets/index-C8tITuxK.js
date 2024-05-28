import{i as P,j as e,r as p,R as M,I as d,P as H,s as D,o as O,p as _,h as V,n as X,q as J,k as B,t as K,v as Q}from"./index-BFKiUgkS.js";import{r as A,t as Z}from"./format-Dr6Jdet5.js";import{S as ee}from"./slick-theme-SClXmSCK.js";import{C as te,M as se,g as ae}from"./room-68kfUqw0.js";import{B as S}from"./Button-BcImgzGL.js";import{B as b}from"./Box-DTANflih.js";import{R as oe}from"./index-BhuwONjv.js";import{I as re}from"./InputAdornment-DdN8tGHD.js";import{L as ie,A as ne,D as R}from"./AdapterDayjs-BShwOdnL.js";import{d as u}from"./dayjs.min-BNXgq4Cy.js";import{S as z}from"./Skeleton-BAeEAE9P.js";import"./createSvgIcon-CPHB7xGy.js";import"./Modal-CRyy_WLt.js";import"./mergeSlotProps-YGJPJLX2.js";import"./TextField-BlbI7o8F.js";import"./colorManipulator-CfVtHViG.js";import"./createStyled-DwlkDKi5.js";import"./DialogContent-Q_7MVnGX.js";var $={},le=P;Object.defineProperty($,"__esModule",{value:!0});var L=$.default=void 0,ce=le(A()),me=e;L=$.default=(0,ce.default)((0,me.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var N={},de=P;Object.defineProperty(N,"__esModule",{value:!0});var E=N.default=void 0,pe=de(A()),xe=e;E=N.default=(0,pe.default)((0,xe.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const w=p.memo(s=>{const{imgList:r}=s,[m,a]=M.useState(!1),[i,t]=M.useState(0),h=()=>a(!1),o=n=>{t(n),a(!0)},g={customPaging:function(n){return e.jsx("img",{src:`${d}/jpg/Room${n+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return e.jsxs(te,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>o(0),src:`${d}/jpg/${r[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>o(1),src:`${d}/jpg/${r[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>o(2),src:`${d}/jpg/${r[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>o(3),src:`${d}/jpg/${r[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>o(4),src:`${d}/jpg/${r[4]}`,className:"img hover-mask "},4)]}),e.jsx(S,{className:"more",variant:"outlined",size:"large",onClick:()=>o(0),children:"查看更多"}),e.jsx(se,{open:m,onClose:h,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(b,{className:"boxModal",children:[e.jsx(S,{className:"close",size:"medium",onClick:h,children:"X"}),e.jsx("div",{className:"slider-container",children:e.jsx(ee,{...g,children:r.map((n,x)=>e.jsx("img",{src:`${d}/jpg/${n}`,className:"img"},x))})})]})})]})});w.propTypes={imgList:H.array};const fe=D(b)(({theme:s})=>`
 
  ${s.components.ContainerWrapper};
  `),ue=D(b)(({theme:s})=>`
 ${s.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),he=D(b)(({theme:s})=>`
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
  `),Y=D(re)(({theme:s})=>`
  color:${s.textColor.black60};
  border:1px solid ${s.textColor.black40};
  `);var W={exports:{}};(function(s,r){(function(m,a){s.exports=a()})(O,function(){return function(m,a){a.prototype.isSameOrAfter=function(i,t){return this.isSame(i,t)||this.isAfter(i,t)}}})})(W);var ge=W.exports;const je=_(ge);var T={exports:{}};(function(s,r){(function(m,a){s.exports=a()})(O,function(){return function(m,a){a.prototype.isSameOrBefore=function(i,t){return this.isSame(i,t)||this.isBefore(i,t)}}})})(T);var ve=T.exports;const De=_(ve);u.extend(je);u.extend(De);const v=u(),Ee=p.memo(()=>{const s=V(),r=X(),{roomId:m}=J(),{isLogin:a}=B(K),{detail:i}=B(ae),[t,h]=p.useState(null);p.useEffect(()=>{s(Q(m))},[s,m]),p.useEffect(()=>{i&&h(i)},[i]);const[o,g]=p.useState({startDate:"",endDate:"",people:1}),[n,x]=p.useState({startDate:"",endDate:""}),C=(l,c)=>{g(j=>({...j,[l]:c===null?"":new Date(c).toLocaleDateString()}))},y=l=>{g(c=>{const j=l==="remove"?c.people-1:c.people+1;return{...c,people:Math.min(Math.max(j,1),t.maxPeople)}})},q=()=>{x({startDate:"",endDate:""});let l="",c=!1;["startDate","endDate"].forEach(f=>{(o[f]===""||o[f]==="Invalid Date")&&(l="日期不得為空或格式有誤",x(G=>({...G,[f]:l})),c=!0)});const{startDate:F,endDate:U}=o,I=u(F),k=u(U);if(I.isSameOrAfter(k)&&(c=!0,x(f=>({...f,endDate:"退房日不得早於或等於入住日"}))),!c){if(!a){r("/login");return}r(`/order/roomId=${m}&people=${o.people}&startDate=${I.format("YYYY-MM-DD")}&endDate=${k.format("YYYY-MM-DD")}`)}};return e.jsxs(fe,{children:[e.jsx("div",{className:"top",children:t?e.jsx(w,{imgList:t.imageUrlList}):e.jsx(z,{variant:"rectangular",height:400})}),t?e.jsxs("div",{className:"bottom",children:[e.jsxs(ue,{children:[e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsx(oe,{sectionsInfo:[{title:"房間格局",info:t.layoutInfo},{title:"房內設備",info:t.facilityInfo},{title:"備品提供",info:t.amenityInfo}],basicInfo:{areaInfo:t.areaInfo,bedInfo:t.bedInfo,maxPeople:t.maxPeople},rule:!0,basicStyle:{marginBottom:"48px"}})]}),e.jsxs(he,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"desc",children:t.description}),e.jsxs(ie,{dateAdapter:ne,adapterLocale:"zh-tw",children:[e.jsx(R,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.startDate,error:!!n.startDate}},onChange:l=>C("startDate",l)}),e.jsx(R,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:v,maxDate:v.add(1,"year"),slotProps:{textField:{helperText:n.endDate,error:!!n.endDate}},onChange:l=>C("endDate",l)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(Y,{size:"small",color:"primary",onClick:()=>y("remove"),children:e.jsx(L,{})}),e.jsx("span",{className:"num",children:o.people}),e.jsx(Y,{size:"small",color:"primary",onClick:()=>y("add"),children:e.jsx(E,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",Z(t.price,!0)]}),e.jsx(S,{size:"large",variant:"contained",fullWidth:!0,onClick:q,children:a?"立即預訂":"登入會員，立即預訂!"})]})]}):e.jsx(z,{className:"bottom",variant:"rounded",height:300})]})});export{Ee as default};
