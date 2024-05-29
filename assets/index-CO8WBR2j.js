import{g as B,B as F,s as m,a6 as P,r as n,f as E,b as L,j as e,_ as I,d as A,e as z,I as G,P as b,Z,h as q,p as H,k as C,l as J,o as h,an as k,ao as K}from"./index-CVkWFu2v.js";import{a as Q,O as V}from"./index-CFdWxGOv.js";import{f as j,d as D,t as X,c as Y}from"./format-C0N0hoLM.js";import{S as w}from"./Skeleton-yfmSorbw.js";import{B as p}from"./Button-B4vz3oNv.js";import{a as ee,b as te,D as oe}from"./DialogContent-DC5VXgZJ.js";import{T as se}from"./Typography-4Dhy4s7q.js";import"./index-DQkNuyI3.js";import"./index-Flmnt1Ny.js";import"./Box-DosX6QM1.js";import"./createSvgIcon-DILnmTci.js";import"./dayjs.min-CarIDa6n.js";import"./colorManipulator-BxAWG0nz.js";import"./ButtonBase-Caj3Nt0H.js";import"./Modal-CjDT00mN.js";import"./mergeSlotProps-C0Y4RLEe.js";function re(t){return B("MuiDialogContentText",t)}F("MuiDialogContentText",["root"]);const ae=["children","className"],ne=t=>{const{classes:s}=t,a=z({root:["root"]},re,s);return I({},s,a)},ie=m(se,{shouldForwardProp:t=>P(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,s)=>s.root})({}),le=n.forwardRef(function(s,i){const a=E({props:s,name:"MuiDialogContentText"}),{className:o}=a,l=L(a,ae),x=ne(l);return e.jsx(ie,I({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:l,className:A(x.root,o)},a,{classes:x}))}),ce=le,de=m("div")(({theme:t})=>`
  display: flex;
`),pe=m("div")(({theme:t})=>`
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
`),me=m("div")(({theme:t})=>`
  ${t.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`),xe=m(Q)(({theme:t})=>`
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

`),N=n.memo(t=>{const{items:s,showDetail:i,showItems:a}=t;return e.jsx(xe,{children:s&&s.length>0&&(s==null?void 0:s.slice(0,a).map((o,l)=>e.jsxs("div",{tabIndex:0,className:"items",onClick:()=>i(l),children:[e.jsxs("div",{className:"orderNo",children:[l+1,". 預定參考編號 : ",o._id]}),e.jsx("img",{src:`${G}/jpg/${o.roomId.imageUrl}`,alt:""}),e.jsxs("div",{className:"roomInfo",children:[e.jsxs("span",{className:"orderDesc",children:[o.roomId.name,"｜住宿人數：",o.peopleNum," 位"]}),e.jsxs("div",{className:"orderSubTitle",children:["訂單狀態：",o.status>-1?"成立完成":e.jsx("span",{className:"cancel",children:"已取消"})]}),e.jsxs("div",{className:"orderSubTitle ",children:["入住日：",`${j(o.checkInDate)} ${D(o.checkInDate)}`,"～",`${j(o.checkOutDate)} ${D(o.checkOutDate)}`]}),e.jsxs("div",{className:"orderSubTitle ",children:["總金額：NT ",X(o.roomId.price*Y(o.checkInDate,o.checkOutDate),!0)]}),e.jsxs("div",{className:"orderSubTitle ",children:["訂單成立日：",`${j(o.createdAt)} ${D(o.createdAt)}`]})]})]},o._id)))})});N.propTypes={items:b.array,showDetail:b.func,showItems:b.number};const he=t=>t.dashboard,ge=Z([he],t=>({orderInfo:t.orderInfo,errMsg:t.errMsg})),_e=n.memo(()=>{const t=q(),s=H(),{orderInfo:i}=C(ge),{isLoading:a}=C(J),[o,l]=n.useState(""),[x,S]=n.useState(0);let c=null;n.useEffect(()=>{t(h(!0)),t(k())},[t]),n.useEffect(()=>{i&&(t(h(!1)),l(i),g(!1))},[t,i,l]);const y=r=>{S(r)};if(o&&o.length>0){const{_id:r,roomId:f,checkInDate:U,checkOutDate:W,peopleNum:M,status:R}=o[x];c={_id:r,roomId:f,checkInDate:U,checkOutDate:W,peopleNum:M,status:R}}const[d,T]=n.useState(10),O=()=>{let r=5;o.length!==d&&(o.length-d<r&&(r=o.length-d),T(f=>f+r))},[$,g]=n.useState(!1),u=r=>g(r),v=async()=>{t(h(!0)),g(!1);const r=c._id;await t(K(r)),await t(k()),t(h(!1))},_=()=>{s(`/orderSuccess/orderNo=${c._id}`)};return e.jsxs(e.Fragment,{children:[a?e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"rounded",height:150}),e.jsx(w,{width:"60%"})]}):e.jsx(e.Fragment,{children:o.length>0?e.jsxs(de,{children:[e.jsxs(pe,{children:[e.jsx(V,{orderNo:c._id,...c}),c.status>-1&&e.jsx(p,{variant:"outlined",sx:{width:"30%",marginRight:"100px"},onClick:()=>u(!0),children:"取消訂單"}),e.jsx(p,{variant:"contained",className:"absolute",sx:{width:"30%"},onClick:_,children:"查看詳情"})]}),e.jsx(me,{children:e.jsxs(e.Fragment,{children:[e.jsx(N,{items:o,showDetail:y,showItems:d}),e.jsxs(p,{variant:"outlined",fullWidth:!0,onClick:O,sx:{marginTop:"25px"},children:["查看更多 ( ",d," 筆 / 共 ",o.length," 筆)"]})]})})]}):"目前無訂單紀錄"}),e.jsx(ee,{open:$,onClose:()=>u(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(te,{children:e.jsx(ce,{id:"alert-dialog-description",children:"確定要取消此房型的預訂嗎？"})}),e.jsxs(oe,{children:[e.jsx(p,{onClick:()=>u(!1),children:"關閉視窗"}),e.jsx(p,{variant:"contained",onClick:v,autoFocus:!0,children:"確認取消"})]})]})})]})});export{_e as default};
