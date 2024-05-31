import{i as J,j as e,r as s,B as j,T as v,H as B,J as k,N as W,M as w,f as I,l as E,t as _,as as L,at as X,P as $,k as K,y as Q,q as Y,z as ee,au as re,A as te,av as ae,aw as se,I as oe,ax as ne,ay as ie}from"./index-BZ1CMoz2.js";import{r as le,p as ce,c as de,d as P,t as T}from"./format-NwQ4Baad.js";import{R as me}from"./index-DopbMdF3.js";import{c as pe,Z as ue,g as xe}from"./zipcodes-AUSGReFK.js";import{M as z}from"./MenuItem-HuIu6sJj.js";import{g as q}from"./order-s_HJlfo0.js";import{M as fe,g as he}from"./room-jtJxH4K5.js";import"./dayjs.min-ZHR2y8fp.js";import"./index-WrW62T7R.js";var O={},ge=J;Object.defineProperty(O,"__esModule",{value:!0});var V=O.default=void 0,je=ge(le()),ye=e;V=O.default=(0,je.default)((0,ye.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");const be=s.memo(s.forwardRef((a,f)=>{s.useImperativeHandle(f,()=>({checkForm:l,setFormValue:C}));const[x,i]=s.useState(""),y={email:"",name:"",phone:"",country:"",city:"",address:""},[t,c]=s.useState(y),d={emailErr:!1,nameErr:!1,phoneErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[o,b]=s.useState(d),g=r=>{const n=ue.filter(p=>p.city===r).map(p=>({zipcode:p.zipcode,detail:p.detail,city:p.county}));i(()=>n)},m=(r,n)=>{c(p=>({...p,[r]:n}))},l=()=>{let r={userInfo:{name:t.name,email:t.email,phone:t.phone,address:{zipcode:t.city,detail:t.address}},isError:!1};return b(d),(!t.name||!t.email||!t.phone||!t.address||!t.country||!t.city)&&(b(n=>({...n,nameErr:!t.name,emailErr:!t.email,phoneErr:!t.phone,addressErr:!t.address,countryErr:!t.country,cityErr:!t.city})),r.isError=!0),r},C=r=>{if(!r){g(""),c(y);return}g(r.country),c(n=>({...n,...r}))};return e.jsx(e.Fragment,{children:e.jsxs(j,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,children:[e.jsx(v,{id:"name",label:"姓名",variant:"outlined",placeholder:"請輸入姓名",maxLength:50,value:t.name,onChange:r=>m("name",r.target.value),error:o.nameErr,helperText:o.nameErr?"姓名不得為空":""}),e.jsx(v,{id:"phone",label:"手機",variant:"outlined",placeholder:"請輸入手機",maxLength:10,value:t.phone,onChange:r=>m("phone",r.target.value),error:o.phoneErr,helperText:o.phoneErr?"手機不得為空":""}),e.jsx(v,{id:"signEmail",label:"電子信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:t.email,onChange:r=>m("email",r.target.value),error:o.emailErr,helperText:o.emailErr?"信箱不得為空":""}),e.jsxs(j,{display:"flex",gap:2,children:[e.jsxs(B,{sx:{flex:1},error:!!o.countryErr,children:[e.jsx(k,{id:"country",children:"地址"}),e.jsx(W,{labelId:"country",id:"country",value:t.country,onChange:r=>{m("country",r.target.value),g(r.target.value)},autoWidth:!0,label:"行政區",children:pe.map((r,n)=>e.jsx(z,{value:r,children:r},n))}),o.countryErr&&e.jsx(w,{children:"行政區不得為空"})]}),e.jsxs(B,{sx:{flex:1},error:!!o.cityErr,children:[e.jsx(k,{id:"city",children:"鄉鎮"}),e.jsxs(W,{labelId:"city",id:"city",value:t.city,onChange:r=>m("city",r.target.value),autoWidth:!0,label:"鄉鎮",children:[e.jsx(z,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),x&&x.map((r,n)=>e.jsx(z,{value:r.zipcode,children:r.city},n))]}),o.cityErr&&e.jsx(w,{children:"鄉鎮不得為空"})]})]}),e.jsx(v,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:t.address,onChange:r=>m("address",r.target.value.toString()),error:o.addressErr,helperText:o.addressErr?"地址不得為空":""})]})})})),ve=I(fe)(({theme:a,$errMsg:f})=>`
  .boxModal{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50%;
    justify-content: ${f?"space-evenly":"center"}} 

  .errMsg {
    color: ${a.textColor.ErrorBase} ;
    font-size: 14px ;
  }

  .processing {
    font-weight: bold ;
    margin-top: 20px ;
    font-size: 14px;
  }
`),A=s.memo(a=>{const{isOpen:f,handleClose:x}=a,{orderErrMsg:i}=E(q);return e.jsx(ve,{open:f,onClose:i?x:void 0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",$errMsg:i,children:e.jsx(j,{className:"boxModal",children:i?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"close",size:"medium",onClick:x,children:"X"}),e.jsx("img",{src:L,alt:""}),e.jsxs("span",{className:"errMsg",children:["發生錯誤，請重新確認：",e.jsx("br",{}),i]})]}):e.jsxs(e.Fragment,{children:[e.jsx(X,{sx:{marginBottom:"20px"}}),e.jsx("img",{src:L,alt:""}),e.jsx("span",{className:"processing",children:"正在處理訂單，請勿關閉視窗"})]})})})});A.propTypes={isOpen:$.bool,handleClose:$.func};const Ee=I(j)(({theme:a})=>`
  
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

  `),Ie=I(j)(({theme:a})=>`
  ${a.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),Ce=I(j)(({theme:a})=>`
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

  `),Be=s.memo(()=>{const a=K(),{params:f}=Q(),x=Y(),{roomId:i,people:y,startDate:t,endDate:c}=ce(f),{detail:d}=E(he),{isLogin:o,userInfo:b}=E(ee),{orderSuccess:g,orderInfo:m}=E(q),[l,C]=s.useState(null),[r,n]=s.useState({day:0,total:0});s.useEffect(()=>{g&&(a(re(!1)),x(`/orderSuccess/orderNo=${m._id}`))},[a,x,g,m]),s.useEffect(()=>{i&&a(te(i))},[a,i]),s.useEffect(()=>{if(d){C(d);const u=de(t,c);n(h=>({...h,day:u,total:d.price*u}))}},[d,c,t]);const p=u=>{u.preventDefault(),a(ne(""));const h=N.current.checkForm(),{userInfo:S,isError:D}=h;if(D)return;a(ie({userInfo:S,roomId:i,checkInDate:t,checkOutDate:c,peopleNum:y})),R(!0)},N=s.useRef(),[M,H]=s.useState(!0),U=()=>{H(u=>!u)};s.useEffect(()=>{let u="";if(M&&o){const{address:h,name:S,email:D,phone:F}=b;u={name:S,phone:F,email:D,country:xe(h.zipcode).city,city:h.zipcode,address:h.detail}}N.current.setFormValue(u)},[M,b,o]);const[G,R]=s.useState(!1),Z=()=>R(!1);return e.jsxs(Ee,{children:[e.jsxs("div",{className:"top",children:[e.jsx(V,{}),"確認訂房資訊"]}),e.jsxs("div",{className:"bottom",children:[e.jsxs(Ie,{children:[e.jsx("div",{className:"infoTitle",children:"訂房資訊"}),e.jsx("div",{className:"subTitle",children:"選擇房型"}),e.jsx("div",{className:"content",children:d.name}),e.jsx("div",{className:"subTitle",children:"訂房日期"}),e.jsxs("div",{className:"content",children:["入住：",t," ",P(t),e.jsx("br",{}),"退房：",c," ",P(c)]}),e.jsx("div",{className:"subTitle",children:"房客人數"}),e.jsxs("div",{className:"content",children:[y," 人"]}),e.jsx("hr",{className:"hr"}),e.jsxs("div",{className:"infoTitle setMemberInfo",children:["訂房人資訊",e.jsx(ae,{className:"setMemberInfo",control:e.jsx(se,{checked:M,onChange:U}),label:"套用會員資料"})]}),e.jsx(be,{ref:N}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"房間資訊"}),l&&e.jsx(me,{sectionsInfo:[{title:"房間格局",info:l.layoutInfo},{title:"房內設備",info:l.facilityInfo},{title:"備品提供",info:l.amenityInfo}],basicInfo:{areaInfo:l.areaInfo,bedInfo:l.bedInfo,maxPeople:l.maxPeople},sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"20px"},infoBoxStyle:{marginBottom:"20px"}})]}),e.jsxs(Ce,{children:[l&&e.jsx("img",{src:`${oe}/jpg/${l.imageUrl}`,alt:""}),e.jsxs("div",{className:"priceSection",children:[e.jsx("div",{className:"title",children:"價格詳情"}),e.jsxs("div",{className:"priceInfo",children:[e.jsxs("span",{children:["NT ",T(d.price,!0)," x ",r.day," 晚"]}),e.jsxs("span",{children:["NT ",T(r.total,!0)]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"priceInfo bold",children:[e.jsx("span",{children:"總價"}),e.jsxs("span",{children:["NT ",T(r.total,!0)]})]})]}),e.jsx(_,{size:"large",variant:"contained",onClick:p,fullWidth:!0,children:"確認訂房"})]})]}),e.jsx(A,{isOpen:G,handleClose:Z})]})});export{Be as default};
