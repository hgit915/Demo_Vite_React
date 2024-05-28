import{g as W,z as M,s as x,a4 as F,r as i,f as B,b as P,j as e,_ as w,d as E,e as A,I as L,P as b,X as z,h as G,n as X,k as q,ak as C,R as H,al as k,am as J}from"./index-BFKiUgkS.js";import{a as K,O as Q}from"./index-C2es3xwJ.js";import{f as j,d as D,t as V,c as Y}from"./format-Dr6Jdet5.js";import{B as p}from"./Button-BcImgzGL.js";import{S as m}from"./Skeleton-BAeEAE9P.js";import{a as Z,b as ee,D as te}from"./DialogContent-Q_7MVnGX.js";import{T as se}from"./Modal-CRyy_WLt.js";import"./index-BhuwONjv.js";import"./Box-DTANflih.js";import"./createSvgIcon-CPHB7xGy.js";import"./dayjs.min-BNXgq4Cy.js";import"./colorManipulator-CfVtHViG.js";import"./mergeSlotProps-YGJPJLX2.js";function oe(t){return W("MuiDialogContentText",t)}M("MuiDialogContentText",["root"]);const re=["children","className"],ae=t=>{const{classes:r}=t,s=A({root:["root"]},oe,r);return w({},r,s)},ne=x(se,{shouldForwardProp:t=>F(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,r)=>r.root})({}),ie=i.forwardRef(function(r,n){const s=B({props:r,name:"MuiDialogContentText"}),{className:o}=s,l=P(s,re),h=ae(l);return e.jsx(ne,w({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:l,className:E(h.root,o)},s,{classes:h}))}),le=ie,ce=x("div")(({theme:t})=>`
  display: flex;
`),de=x("div")(({theme:t})=>`
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
`),pe=x("div")(({theme:t})=>`
  ${t.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`),xe=x(K)(({theme:t})=>`
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

`),I=i.memo(t=>{const{items:r,showDetail:n,showItems:s}=t;return e.jsx(xe,{children:r&&r.length>0&&(r==null?void 0:r.slice(0,s).map((o,l)=>e.jsxs("div",{tabIndex:0,className:"items",onClick:()=>n(l),children:[e.jsxs("div",{className:"orderNo",children:[l+1,". 預定參考編號 : ",o._id]}),e.jsx("img",{src:`${L}/jpg/${o.roomId.imageUrl}`,alt:""}),e.jsxs("div",{className:"roomInfo",children:[e.jsxs("span",{className:"orderDesc",children:[o.roomId.name,"｜住宿人數：",o.peopleNum," 位"]}),e.jsxs("div",{className:"orderSubTitle",children:["訂單狀態：",o.status>-1?"成立完成":e.jsx("span",{className:"cancel",children:"已取消"})]}),e.jsxs("div",{className:"orderSubTitle ",children:["入住日：",`${j(o.checkInDate)} ${D(o.checkInDate)}`,"～",`${j(o.checkOutDate)} ${D(o.checkOutDate)}`]}),e.jsxs("div",{className:"orderSubTitle ",children:["總金額：NT ",V(o.roomId.price*Y(o.checkInDate,o.checkOutDate),!0)]}),e.jsxs("div",{className:"orderSubTitle ",children:["訂單成立日：",`${j(o.createdAt)} ${D(o.createdAt)}`]})]})]},o._id)))})});I.propTypes={items:b.array,showDetail:b.func,showItems:b.number};const he=t=>t.dashboard,me=z([he],t=>({orderInfo:t.orderInfo,errMsg:t.errMsg})),Te=i.memo(()=>{const t=G(),r=X(),{orderInfo:n}=q(me),[s,o]=i.useState(""),[l,h]=i.useState(0);let c=null;i.useEffect(()=>{t(C())},[t]),i.useEffect(()=>{n&&(o(n),g(!1))},[n,o,s,t]);const N=a=>{h(a)};if(s&&s.length>0){const{_id:a,roomId:f,checkInDate:v,checkOutDate:R,peopleNum:_,status:U}=s[l];c={_id:a,roomId:f,checkInDate:v,checkOutDate:R,peopleNum:_,status:U}}const[d,S]=i.useState(10),y=()=>{let a=5;s.length!==d&&(s.length-d<a&&(a=s.length-d),S(f=>f+a))},[T,g]=H.useState(!1),u=a=>g(a),O=async()=>{t(k(!0)),g(!1);const a=c._id;await t(J(a)),await t(C()),t(k(!1))},$=()=>{r(`/orderSuccess/orderNo=${c._id}`)};return e.jsxs(e.Fragment,{children:[e.jsxs(ce,{children:[e.jsx(de,{children:c?e.jsxs(e.Fragment,{children:[e.jsx(Q,{orderNo:c._id,...c}),c.status>-1&&e.jsx(p,{variant:"outlined",sx:{width:"30%",marginRight:"100px"},onClick:()=>u(!0),children:"取消訂單"}),e.jsx(p,{variant:"contained",className:"absolute",sx:{width:"30%"},onClick:$,children:"查看詳情"})]}):e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"rounded",height:150}),e.jsx(m,{width:"60%"})]})}),e.jsxs(pe,{children:[s?e.jsx(I,{items:s,showDetail:N,showItems:d}):e.jsxs(e.Fragment,{children:[e.jsx(m,{variant:"rounded",height:150}),e.jsx(m,{width:"60%"})]}),s&&s.length>0?e.jsxs(p,{variant:"outlined",fullWidth:!0,onClick:y,sx:{marginTop:"25px"},children:["查看更多 ( ",d," 筆 / 共 ",s.length," 筆)"]}):"目前無訂房紀錄"]})]}),e.jsx(Z,{open:T,onClose:()=>u(!1),"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx(le,{id:"alert-dialog-description",children:"確定要取消此房型的預訂嗎？"})}),e.jsxs(te,{children:[e.jsx(p,{onClick:()=>u(!1),children:"關閉視窗"}),e.jsx(p,{variant:"contained",onClick:O,autoFocus:!0,children:"確認取消"})]})]})})]})});export{Te as default};
