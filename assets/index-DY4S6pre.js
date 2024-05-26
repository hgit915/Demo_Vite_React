import{s as p,r as a,j as r,I as C,P as h,Q as T,h as W,k as U,ae as B}from"./index-D-LYstLd.js";import{a as R,O as _}from"./index-C8kUlYOb.js";import{f as x,d as g,c as u,t as v}from"./format-DwXP2qGF.js";import{S as i}from"./Skeleton-D78QTEg8.js";import{B as m}from"./Button-BNk3ADPy.js";import"./index-HGW4xRc-.js";import"./Box-CaIcgxkd.js";import"./createSvgIcon-BcIoTFId.js";import"./dayjs.min-BbjSblMn.js";import"./colorManipulator-ChmSi-fp.js";const E=p("div")(({theme:e})=>`


  // border:1px solid orange;
 
  display: flex;
`),F=p("div")(({theme:e})=>`
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
`),M=p("div")(({theme:e})=>`
  ${e.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`),z=p(R)(({theme:e})=>`
  height: 80vh;
  overflow-y: auto;
  font-size: 12px;
  
  &::-webkit-scrollbar{
    height: 150px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${e.textColor.black40};
    border-radius: 10px;
    
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: ${e.textColor.black60};;
  }

  
  .items {
    border-bottom: 1px solid ${e.textColor.black40};
    padding: 15px 0px 5px 20px;
    margin: 0 5px 0px 0px;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${e.textColor.black40};
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
  }

`),f=a.memo(e=>{const{items:s,showDetail:c,showItems:o}=e;return r.jsx(z,{children:s&&s.length>0&&(s==null?void 0:s.slice(0,o).map((t,d)=>r.jsxs("div",{className:"items",onClick:()=>c(d),children:[r.jsxs("div",{className:"orderNo",children:[d+1,". 預定參考編號 : ",t._id]}),r.jsx("img",{src:`${C}/jpg/${t.roomId.imageUrl}`,alt:""}),r.jsxs("div",{className:"roomInfo",children:[r.jsxs("span",{className:"orderDesc",children:[t.roomId.name,"｜住宿人數：",t.peopleNum," 位"]}),r.jsxs("div",{className:"orderSubTitle ",children:["日期：",`${x(t.checkInDate)} ${g(t.checkInDate)}`,"～",`${x(t.checkOutDate)} ${g(t.checkOutDate)}`,"，",u(t.checkInDate,t.checkOutDate)," 晚"]}),r.jsxs("div",{className:"orderSubTitle ",children:["總金額：NT ",v(t.roomId.price*u(t.checkInDate,t.checkOutDate),!0)]})]})]},t._id)))})});f.propTypes={items:h.array,showDetail:h.func,showItems:h.number};const L=e=>e.dashboard,P=T([L],e=>({orderInfo:e.orderInfo,errMsg:e.errMsg,customerInfo:e.customerInfo})),G=a.memo(e=>{const s=W(),{orderInfo:c}=U(P),[o,t]=a.useState(""),[d,b]=a.useState(0);let l=null;a.useEffect(()=>{s(B())},[s]),a.useEffect(()=>{c&&t(c)},[c,t,o]);const j=n=>{b(n)};if(o&&o.length>0){const{_id:n,roomId:O,checkInDate:S,checkOutDate:N,peopleNum:$,status:y}=o[d];l={_id:n,roomId:O,checkInDate:S,checkOutDate:N,peopleNum:$,status:y}}const[k,I]=a.useState(4),D=()=>{I(n=>n+5)},w=()=>{};return r.jsxs(E,{children:[r.jsxs(F,{children:[l?r.jsx(r.Fragment,{children:r.jsx(_,{orderNo:l._id,...l})}):r.jsxs(r.Fragment,{children:[r.jsx(i,{variant:"rounded",height:150}),r.jsx(i,{}),r.jsx(i,{width:"60%"})]}),r.jsx(m,{variant:"outlined",sx:{width:"30%",marginRight:"100px"},onClick:w,children:"取消訂單"}),r.jsx(m,{variant:"contained",className:"absolute",sx:{width:"30%"},children:"查看詳情"})]}),r.jsxs(M,{children:[o?r.jsx(f,{items:o,showDetail:j,showItems:k}):r.jsxs(r.Fragment,{children:[r.jsx(i,{variant:"rounded",height:150}),r.jsx(i,{}),r.jsx(i,{width:"60%"})]}),o&&o.length>0?r.jsxs(m,{variant:"outlined",fullWidth:!0,onClick:D,sx:{marginTop:"25px"},children:["查看更多，共 ",o.length," 筆"]}):"目前無訂房紀錄"]})]})});G.propTypes={};export{G as default};
