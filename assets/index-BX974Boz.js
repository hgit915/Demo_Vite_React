import{i as X,j as e,r as n,R as v,s as C,k as E,Q as W,S as J,P as k,h as K,q as Y,n as ee,t as re,U as te,v as ae,I as se,V as oe,W as ne}from"./index-6j9zUeTH.js";import{r as ie,p as le,c as ce,d as w,t as R}from"./format-BbJTvAiD.js";import{R as de}from"./index-CsPyMIsY.js";import{c as me,M as F,Z as pe,g as ue}from"./zipcodes-elybh2Bi.js";import{B as j}from"./Box-DmIBPk6T.js";import{T as I,a as L,I as $,S as P,F as _}from"./TextField-CHQnchov.js";import{g as V}from"./order-DKaHfgIo.js";import{M as fe,g as xe}from"./room-CC28jevd.js";import{B as q}from"./Button-DL_d1CX-.js";import{F as he,C as ge}from"./FormControlLabel-CGk1DOi0.js";import"./createSvgIcon-Cb_IpOPE.js";import"./dayjs.min-Br4wyROy.js";import"./Modal-gMO9npr2.js";import"./mergeSlotProps-mUW9xaLC.js";import"./styled-CI5rMf7N.js";import"./createStyled-CdLGlWqd.js";var O={},je=X;Object.defineProperty(O,"__esModule",{value:!0});var U=O.default=void 0,ye=je(ie()),be=e;U=O.default=(0,ye.default)((0,be.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");const ve=n.memo(n.forwardRef((a,x)=>{n.useImperativeHandle(x,()=>({checkForm:l,setFormValue:N}));const[f,i]=v.useState(""),y={email:"",name:"",phone:"",country:"",city:"",address:""},[t,c]=v.useState(y),d={emailErr:!1,nameErr:!1,phoneErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[s,b]=v.useState(d),g=r=>{const o=pe.filter(p=>p.city===r).map(p=>({zipcode:p.zipcode,detail:p.detail,city:p.county}));i(()=>o)},m=(r,o)=>{c(p=>({...p,[r]:o}))},l=()=>{let r={userInfo:{name:t.name,email:t.email,phone:t.phone,address:{zipcode:t.city,detail:t.address}},isError:!1};return b(d),(!t.name||!t.email||!t.phone||!t.address||!t.country||!t.city)&&(b(o=>({...o,nameErr:!t.name,emailErr:!t.email,phoneErr:!t.phone,addressErr:!t.address,countryErr:!t.country,cityErr:!t.city})),r.isError=!0),r},N=r=>{if(!r){g(""),c(y);return}g(r.country),c(o=>({...o,...r}))};return e.jsx(e.Fragment,{children:e.jsxs(j,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,children:[e.jsx(I,{id:"name",label:"姓名",variant:"outlined",placeholder:"請輸入姓名",maxLength:50,value:t.name,onChange:r=>m("name",r.target.value),error:s.nameErr,helperText:s.nameErr?"姓名不得為空":""}),e.jsx(I,{id:"phone",label:"手機",variant:"outlined",placeholder:"請輸入手機",maxLength:10,value:t.phone,onChange:r=>m("phone",r.target.value),error:s.phoneErr,helperText:s.phoneErr?"手機不得為空":""}),e.jsx(I,{id:"signEmail",label:"電子信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:t.email,onChange:r=>m("email",r.target.value),error:s.emailErr,helperText:s.emailErr?"信箱不得為空":""}),e.jsxs(j,{display:"flex",gap:2,children:[e.jsxs(L,{sx:{flex:1},error:!!s.countryErr,children:[e.jsx($,{id:"country",children:"地址"}),e.jsx(P,{labelId:"country",id:"country",value:t.country,onChange:r=>{m("country",r.target.value),g(r.target.value)},autoWidth:!0,label:"行政區",children:me.map((r,o)=>e.jsx(F,{value:r,children:r},o))}),s.countryErr&&e.jsx(_,{children:"行政區不得為空"})]}),e.jsxs(L,{sx:{flex:1},error:!!s.cityErr,children:[e.jsx($,{id:"city",children:"鄉鎮"}),e.jsxs(P,{labelId:"city",id:"city",value:t.city,onChange:r=>m("city",r.target.value),autoWidth:!0,label:"鄉鎮",children:[e.jsx(F,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),f&&f.map((r,o)=>e.jsx(F,{value:r.zipcode,children:r.city},o))]}),s.cityErr&&e.jsx(_,{children:"鄉鎮不得為空"})]})]}),e.jsx(I,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:t.address,onChange:r=>m("address",r.target.value.toString()),error:s.addressErr,helperText:s.addressErr?"地址不得為空":""})]})})})),Ie=C(fe)(({theme:a,$errMsg:x})=>`
  .boxModal{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50%;
    justify-content: ${x?"space-evenly":"center"}} 

  .errMsg {
    color: ${a.textColor.ErrorBase} ;
    font-size: 14px ;
  }

  .processing {
    font-weight: bold ;
    margin-top: 20px ;
    font-size: 14px;
  }
`),A=n.memo(a=>{const{isOpen:x,handleClose:f}=a,{orderErrMsg:i}=E(V);return e.jsx(Ie,{open:x,onClose:i?f:void 0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",$errMsg:i,children:e.jsx(j,{className:"boxModal",children:i?e.jsxs(e.Fragment,{children:[e.jsx(q,{className:"close",size:"medium",onClick:f,children:"X"}),e.jsx("img",{src:W,alt:""}),e.jsxs("span",{className:"errMsg",children:["發生錯誤，請重新確認：",e.jsx("br",{}),i]})]}):e.jsxs(e.Fragment,{children:[e.jsx(J,{sx:{marginBottom:"20px"}}),e.jsx("img",{src:W,alt:""}),e.jsx("span",{className:"processing",children:"正在處理訂單，請勿關閉視窗"})]})})})});A.propTypes={isOpen:k.bool,handleClose:k.func};const Ee=C(j)(({theme:a})=>`
  
  ${a.components.ContainerWrapper};

  .hr {
    margin: 30px 0;
  }

  .infoTitle{
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  .subTitle{
    ${a.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
  }

  .content{
    margin-bottom: 20px;
  }

  .setMemberInfo{
    display:flex;
    justify-content: space-between;
  }

  `),Ce=C(j)(({theme:a})=>`
  ${a.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),Ne=C(j)(({theme:a})=>`
  ${a.components.RightBoxWrapper}

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .priceSection{
    margin-bottom:20px;
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  .priceInfo{
    display: flex;
    justify-content: space-between;
    margin: 20px 0 ;
  }

  .bold {
    font-weight:bold;
  }

  `),Ve=n.memo(()=>{const a=K(),{params:x}=Y(),f=ee(),{roomId:i,people:y,startDate:t,endDate:c}=le(x),{detail:d}=E(xe),{isLogin:s,userInfo:b}=E(re),{orderSuccess:g,orderInfo:m}=E(V),[l,N]=n.useState(null),[r,o]=n.useState({day:0,total:0});n.useEffect(()=>{g&&(a(te(!1)),f(`/orderSuccess/orderNo=${m._id}`))},[a,f,g,m]),n.useEffect(()=>{i&&a(ae(i))},[a,i]),n.useEffect(()=>{if(d){N(d);const u=ce(t,c);o(h=>({...h,day:u,total:d.price*u}))}},[d,c,t]);const p=u=>{u.preventDefault(),a(oe(""));const h=S.current.checkForm(),{userInfo:D,isError:T}=h;if(T)return;a(ne({userInfo:D,roomId:i,checkInDate:t,checkOutDate:c,peopleNum:y})),z(!0)},S=n.useRef(),[M,G]=v.useState(!0),H=()=>{G(u=>!u)};n.useEffect(()=>{let u="";if(M&&s){const{address:h,name:D,email:T,phone:B}=b;u={name:D,phone:B,email:T,country:ue(h.zipcode).city,city:h.zipcode,address:h.detail}}S.current.setFormValue(u)},[M,b,s]);const[Z,z]=v.useState(!1),Q=()=>z(!1);return e.jsxs(Ee,{children:[e.jsxs("div",{className:"top",children:[e.jsx(U,{}),"確認訂房資訊"]}),e.jsxs("div",{className:"bottom",children:[e.jsxs(Ce,{children:[e.jsx("div",{className:"infoTitle",children:"訂房資訊"}),e.jsx("div",{className:"subTitle",children:"選擇房型"}),e.jsx("div",{className:"content",children:d.name}),e.jsx("div",{className:"subTitle",children:"訂房日期"}),e.jsxs("div",{className:"content",children:["入住：",t," ",w(t),e.jsx("br",{}),"退房：",c," ",w(c)]}),e.jsx("div",{className:"subTitle",children:"房客人數"}),e.jsxs("div",{className:"content",children:[y," 人"]}),e.jsx("hr",{className:"hr"}),e.jsxs("div",{className:"infoTitle setMemberInfo",children:["訂房人資訊",e.jsx(he,{className:"setMemberInfo",control:e.jsx(ge,{checked:M,onChange:H}),label:"套用會員資料"})]}),e.jsx(ve,{ref:S}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"房間資訊"}),l&&e.jsx(de,{sectionsInfo:[{title:"房間格局",info:l.layoutInfo},{title:"房內設備",info:l.facilityInfo},{title:"備品提供",info:l.amenityInfo}],basicInfo:{areaInfo:l.areaInfo,bedInfo:l.bedInfo,maxPeople:l.maxPeople},sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"20px"},infoBoxStyle:{marginBottom:"20px"}})]}),e.jsxs(Ne,{children:[l&&e.jsx("img",{src:`${se}/jpg/${l.imageUrl}`,alt:""}),e.jsxs("div",{className:"priceSection",children:[e.jsx("div",{className:"title",children:"價格詳情"}),e.jsxs("div",{className:"priceInfo",children:[e.jsxs("span",{children:["NT ",R(d.price,!0)," x ",r.day," 晚"]}),e.jsxs("span",{children:["NT ",R(r.total,!0)]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"priceInfo bold",children:[e.jsx("span",{children:"總價"}),e.jsxs("span",{children:["NT ",R(r.total,!0)]})]})]}),e.jsx(q,{size:"large",variant:"contained",onClick:p,fullWidth:!0,children:"確認訂房"})]})]}),e.jsx(A,{isOpen:Z,handleClose:Q})]})});export{Ve as default};
