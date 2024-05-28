import{g as F,z as B,s as m,a4 as P,r as l,f as E,b as L,j as e,_ as I,d as A,e as z,I as G,P as b,X,h as q,n as H,k as C,ak as J,al as h,am as k,R as K,an as Q}from"./index-6j9zUeTH.js";import{a as V,O as Y}from"./index-C1iNfd86.js";import{f as j,d as D,t as Z,c as ee}from"./format-BbJTvAiD.js";import{S as w}from"./Skeleton-DVqNrLT4.js";import{B as p}from"./Button-DL_d1CX-.js";import{a as te,b as oe,D as se}from"./DialogContent-BcEVqJ0v.js";import{T as re}from"./Modal-gMO9npr2.js";import"./index-CsPyMIsY.js";import"./Box-DmIBPk6T.js";import"./createSvgIcon-Cb_IpOPE.js";import"./dayjs.min-Br4wyROy.js";import"./colorManipulator-B8KiM96s.js";import"./mergeSlotProps-mUW9xaLC.js";function ae(t){return F("MuiDialogContentText",t)}B("MuiDialogContentText",["root"]);const ne=["children","className"],ie=t=>{const{classes:s}=t,a=z({root:["root"]},ae,s);return I({},s,a)},le=m(re,{shouldForwardProp:t=>P(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),ce=l.forwardRef(function(s,n){const a=E({props:s,name:"MuiDialogContentText"}),{className:o}=a,i=L(a,ne),x=ie(i);return e.jsx(le,I({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:i,className:A(x.root,o)},a,{classes:x}))}),de=ce,pe=m("div")(({theme:t})=>`
  display: flex;
`),me=m("div")(({theme:t})=>`
  flex: 1;
  margin-right: 50px;
  position: relative;

  .hr{
    margin: 30px 0;
  }

  .absolute {
    position: absolute;
    right: 0;
  }
`),xe=m("div")(({theme:t})=>`
  ${t.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`),he=m(V)(({theme:t})=>`
  height: 80vh;
  overflow-y: auto;
  font-size: 12px;
  
  // scrollbar style
  &::-webkit-scrollbar{
    height: 150px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${t.textColor.black40};
    border-radius: 10px;
    
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: ${t.textColor.black60};;
  }

  
  .items {
    border-bottom: 1px solid ${t.textColor.black40};
    padding: 15px 0px 5px 20px;
    margin: 0 5px 0px 0px;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${t.textColor.black40};
    }
  }

  .orderNo {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .orderDesc{
    margin-bottom: 10px;
  }

  img {
    width: 70%;
  }

  .orderSubTitle {
    font-weight: normal;
    .cancel {
      color: ${t.textColor.white};
      background-color: ${t.textColor.ErrorBase};
      font-weight: bold;
      padding: 5px;
    }
  }

`),N=l.memo(t=>{const{items:s,showDetail:n,showItems:a}=t;return e.jsx(he,{children:s&&s.length>0&&(s==null?void 0:s.slice(0,a).map((o,i)=>e.jsxs("div",{tabIndex:0,className:"items",onClick:()=>n(i),children:[e.jsxs("div",{className:"orderNo",children:[i+1,". 預定參考編號 : ",o._id]}),e.jsx("img",{src:`${G}/jpg/${o.roomId.imageUrl}`,alt:""}),e.jsxs("div",{className:"roomInfo",children:[e.jsxs("span",{className:"orderDesc",children:[o.roomId.name,"｜住宿人數：",o.peopleNum," 位"]}),e.jsxs("div",{className:"orderSubTitle",children:["訂單狀態：",o.status>-1?"成立完成":e.jsx("span",{className:"cancel",children:"已取消"})]}),e.jsxs("div",{className:"orderSubTitle ",children:["入住日：",`${j(o.checkInDate)} ${D(o.checkInDate)}`,"～",`${j(o.checkOutDate)} ${D(o.checkOutDate)}`]}),e.jsxs("div",{className:"orderSubTitle ",children:["總金額：NT ",Z(o.roomId.price*ee(o.checkInDate,o.checkOutDate),!0)]}),e.jsxs("div",{className:"orderSubTitle ",children:["訂單成立日：",`${j(o.createdAt)} ${D(o.createdAt)}`]})]})]},o._id)))})});N.propTypes={items:b.array,showDetail:b.func,showItems:b.number};const ge=t=>t.dashboard,ue=X([ge],t=>({orderInfo:t.orderInfo,errMsg:t.errMsg})),$e=l.memo(()=>{const t=q(),s=H(),{orderInfo:n}=C(ue),{isLoading:a}=C(J),[o,i]=l.useState(""),[x,S]=l.useState(0);let c=null;l.useEffect(()=>{t(h(!0)),t(k())},[t]),l.useEffect(()=>{n&&(console.log("object"),t(h(!1)),i(n),g(!1))},[t,n,i]);const y=r=>{S(r)};if(o&&o.length>0){const{_id:r,roomId:f,checkInDate:_,checkOutDate:U,peopleNum:W,status:M}=o[x];c={_id:r,roomId:f,checkInDate:_,checkOutDate:U,peopleNum:W,status:M}}const[d,T]=l.useState(10),O=()=>{let r=5;o.length!==d&&(o.length-d<r&&(r=o.length-d),T(f=>f+r))},[$,g]=K.useState(!1),u=r=>g(r),v=async()=>{t(h(!0)),g(!1);const r=c._id;await t(Q(r)),await t(k()),t(h(!1))},R=()=>{s(`/orderSuccess/orderNo=${c._id}`)};return e.jsxs(e.Fragment,{children:[a?e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"rounded",height:150}),e.jsx(w,{width:"60%"})]}):e.jsx(e.Fragment,{children:o.length>0?e.jsxs(pe,{children:[e.jsxs(me,{children:[e.jsx(Y,{orderNo:c._id,...c}),c.status>-1&&e.jsx(p,{variant:"outlined",sx:{width:"30%",marginRight:"100px"},onClick:()=>u(!0),children:"取消訂單"}),e.jsx(p,{variant:"contained",className:"absolute",sx:{width:"30%"},onClick:R,children:"查看詳情"})]}),e.jsx(xe,{children:e.jsxs(e.Fragment,{children:[e.jsx(N,{items:o,showDetail:y,showItems:d}),e.jsxs(p,{variant:"outlined",fullWidth:!0,onClick:O,sx:{marginTop:"25px"},children:["查看更多 ( ",d," 筆 / 共 ",o.length," 筆)"]})]})})]}):"目前無訂單紀錄"}),e.jsx(te,{open:$,onClose:()=>u(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsx(de,{id:"alert-dialog-description",children:"確定要取消此房型的預訂嗎？"})}),e.jsxs(se,{children:[e.jsx(p,{onClick:()=>u(!1),children:"關閉視窗"}),e.jsx(p,{variant:"contained",onClick:v,autoFocus:!0,children:"確認取消"})]})]})})]})});export{$e as default};
