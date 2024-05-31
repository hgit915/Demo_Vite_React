import{g as R,D as B,f as p,ad as P,aA as A,r as i,h as E,b as L,j as e,_ as N,d as z,e as q,I as G,P as b,F as J,k as K,q as H,l as k,m as Q,o as m,aJ as w,t as h,aK as V}from"./index-BZ1CMoz2.js";import{a as X,O as Y}from"./index-BLgwDwKG.js";import{f as j,d as D,t as Z,c as ee}from"./format-NwQ4Baad.js";import{S as I}from"./Skeleton-V1rZhyEo.js";import{a as te,b as se,D as oe}from"./DialogContent-BuQtmjop.js";import"./index-DopbMdF3.js";import"./index-WrW62T7R.js";import"./dayjs.min-ZHR2y8fp.js";import"./colorManipulator-lS7wmc76.js";function re(t){return R("MuiDialogContentText",t)}B("MuiDialogContentText",["root"]);const ae=["children","className"],ne=t=>{const{classes:o}=t,n=q({root:["root"]},re,o);return N({},o,n)},ie=p(P,{shouldForwardProp:t=>A(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,o)=>o.root})({}),le=i.forwardRef(function(o,a){const n=E({props:o,name:"MuiDialogContentText"}),{className:s}=n,l=L(n,ae),x=ne(l);return e.jsx(ie,N({component:"p",variant:"body1",color:"text.secondary",ref:a,ownerState:l,className:z(x.root,s)},n,{classes:x}))}),ce=le,de=p("div")(({theme:t})=>`
  display: flex;
`),he=p("div")(({theme:t})=>`
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
`),pe=p("div")(({theme:t})=>`
  ${t.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`),xe=p(X)(({theme:t})=>`
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

`),S=i.memo(t=>{const{items:o,showDetail:a,showItems:n}=t;return e.jsx(xe,{children:o&&o.length>0&&(o==null?void 0:o.slice(0,n).map((s,l)=>e.jsxs("div",{tabIndex:0,className:"items",onClick:()=>a(l),children:[e.jsxs("div",{className:"orderNo",children:[l+1,". 預定參考編號 : ",s._id]}),e.jsx("img",{src:`${G}/jpg/${s.roomId.imageUrl}`,alt:""}),e.jsxs("div",{className:"roomInfo",children:[e.jsxs("span",{className:"orderDesc",children:[s.roomId.name,"｜住宿人數：",s.peopleNum," 位"]}),e.jsxs("div",{className:"orderSubTitle",children:["訂單狀態：",s.status>-1?"成立完成":e.jsx("span",{className:"cancel",children:"已取消"})]}),e.jsxs("div",{className:"orderSubTitle ",children:["入住日：",`${j(s.checkInDate)} ${D(s.checkInDate)}`,"～",`${j(s.checkOutDate)} ${D(s.checkOutDate)}`]}),e.jsxs("div",{className:"orderSubTitle ",children:["總金額：NT ",Z(s.roomId.price*ee(s.checkInDate,s.checkOutDate),!0)]}),e.jsxs("div",{className:"orderSubTitle ",children:["訂單成立日：",`${j(s.createdAt)} ${D(s.createdAt)}`]})]})]},s._id)))})});S.propTypes={items:b.array,showDetail:b.func,showItems:b.number};const me=t=>t.dashboard,ge=J([me],t=>({orderInfo:t.orderInfo,errMsg:t.errMsg})),Ne=i.memo(()=>{const t=K(),o=H(),{orderInfo:a}=k(ge),{isLoading:n}=k(Q),[s,l]=i.useState(""),[x,y]=i.useState(0),[c,C]=i.useState(0),[T,g]=i.useState(!1);let d=null;i.useEffect(()=>{t(m(!0)),t(w())},[t]),i.useEffect(()=>{if(a){let r=5;t(m(!1)),a.length<5&&(r=a.length),C(r),l(a),g(!1)}},[t,a,l]);const $=r=>{y(r)};if(s&&s.length>0){const{_id:r,roomId:f,checkInDate:U,checkOutDate:W,peopleNum:F,status:M}=s[x];d={_id:r,roomId:f,checkInDate:U,checkOutDate:W,peopleNum:F,status:M}}const O=()=>{let r=5;s.length!==c&&(s.length-c<r&&(r=s.length-c),C(f=>f+r))},u=r=>g(r),v=async()=>{t(m(!0)),g(!1);const r=d._id;await t(V(r)),await t(w()),t(m(!1))},_=()=>{o(`/orderSuccess/orderNo=${d._id}`)};return e.jsxs(e.Fragment,{children:[n?e.jsxs(e.Fragment,{children:[e.jsx(I,{variant:"rounded",height:150}),e.jsx(I,{width:"60%"})]}):e.jsx(e.Fragment,{children:s.length>0?e.jsxs(de,{children:[e.jsxs(he,{children:[e.jsx(Y,{orderNo:d._id,...d}),d.status>-1&&e.jsx(h,{variant:"outlined",sx:{width:"30%",marginRight:"100px"},onClick:()=>u(!0),children:"取消訂單"}),e.jsx(h,{variant:"contained",className:"absolute",sx:{width:"30%"},onClick:_,children:"查看詳情"})]}),e.jsx(pe,{children:e.jsxs(e.Fragment,{children:[e.jsx(S,{items:s,showDetail:$,showItems:c}),e.jsx(h,{variant:"outlined",fullWidth:!0,onClick:O,sx:{marginTop:"25px"},disabled:c===s.length,children:c===s.length?`訂單載入完畢，總共 ${s.length} 筆`:`查看更多 ( ${c} 筆 / 共 ${s.length} 筆) `})]})})]}):"目前無訂單紀錄"}),e.jsx(te,{open:T,onClose:()=>u(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(se,{children:e.jsx(ce,{id:"alert-dialog-description",children:"確定要取消此房型的預訂嗎？"})}),e.jsxs(oe,{children:[e.jsx(h,{onClick:()=>u(!1),children:"關閉視窗"}),e.jsx(h,{variant:"contained",onClick:v,autoFocus:!0,children:"確認取消"})]})]})})]})});export{Ne as default};
