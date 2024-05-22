import{g as Y,p as ee,q as A,s as v,a as P,_ as E,t as H,r as u,f as re,b as te,j as e,d as se,e as ae,h as oe,i as ie,R as M,l as K,a6 as F,P as _,k as ne,x as le,y as ce,I as de,a7 as me,a8 as pe}from"./index-B2_irwuj.js";import{M as xe,R as ue}from"./index-BkU6S6nS.js";import{c as he,M as z,Z as fe,g as ge}from"./zipcodes-B75-ap1g.js";import{B as C}from"./Box-ClYAFuGb.js";import{T as N,a as O,I as B,S as L,F as W,B as X}from"./TextField-CNXd2Kdx.js";import{p as ye,d as U,t as be}from"./format-CPpTqXeA.js";import{F as je,C as ve}from"./FormControlLabel-D3EPJVkE.js";import"./styled-CDS4iABz.js";function Ce(r){return Y("MuiCircularProgress",r)}ee("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Ie=["className","color","disableShrink","size","style","thickness","value","variant"];let D=r=>r,V,q,G,Z;const b=44,ke=A(V||(V=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Ee=A(q||(q=D`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Me=r=>{const{classes:a,variant:o,color:c,disableShrink:d}=r,s={root:["root",o,`color${P(c)}`],svg:["svg"],circle:["circle",`circle${P(o)}`,d&&"circleDisableShrink"]};return ae(s,Ce,a)},Se=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:o}=r;return[a.root,a[o.variant],a[`color${P(o.color)}`]]}})(({ownerState:r,theme:a})=>E({display:"inline-block"},r.variant==="determinate"&&{transition:a.transitions.create("transform")},r.color!=="inherit"&&{color:(a.vars||a).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&H(G||(G=D`
      animation: ${0} 1.4s linear infinite;
    `),ke)),Ne=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,a)=>a.svg})({display:"block"}),Pe=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,a)=>{const{ownerState:o}=r;return[a.circle,a[`circle${P(o.variant)}`],o.disableShrink&&a.circleDisableShrink]}})(({ownerState:r,theme:a})=>E({stroke:"currentColor"},r.variant==="determinate"&&{transition:a.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&H(Z||(Z=D`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Ee)),De=u.forwardRef(function(a,o){const c=re({props:a,name:"MuiCircularProgress"}),{className:d,color:s="primary",disableShrink:p=!1,size:g=40,style:i,thickness:n=3.6,value:y=0,variant:x="indeterminate"}=c,j=te(c,Ie),h=E({},c,{color:s,disableShrink:p,size:g,thickness:n,value:y,variant:x}),t=Me(h),l={},m={},I={};if(x==="determinate"){const S=2*Math.PI*((b-n)/2);l.strokeDasharray=S.toFixed(3),I["aria-valuenow"]=Math.round(y),l.strokeDashoffset=`${((100-y)/100*S).toFixed(3)}px`,m.transform="rotate(-90deg)"}return e.jsx(Se,E({className:se(t.root,d),style:E({width:g,height:g},m,i),ownerState:h,ref:o,role:"progressbar"},I,j,{children:e.jsx(Ne,{className:t.svg,ownerState:h,viewBox:`${b/2} ${b/2} ${b} ${b}`,children:e.jsx(Pe,{className:t.circle,style:l,ownerState:h,cx:b,cy:b,r:(b-n)/2,fill:"none",strokeWidth:n})})}))}),Re=De;var $={},Te=ie;Object.defineProperty($,"__esModule",{value:!0});var J=$.default=void 0,ze=Te(oe()),$e=e;J=$.default=(0,ze.default)((0,$e.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");const we=u.memo(u.forwardRef((r,a)=>{u.useImperativeHandle(a,()=>({checkForm:j,setFormValue:h}));const[o,c]=M.useState(""),d={email:"",name:"",phone:"",country:"",city:"",address:""},[s,p]=M.useState(d),g={emailErr:!1,nameErr:!1,phoneErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[i,n]=M.useState(g),y=t=>{const l=fe.filter(m=>m.city===t).map(m=>({zipcode:m.zipcode,detail:m.detail,city:m.county}));c(()=>l)},x=(t,l)=>{p(m=>({...m,[t]:l}))},j=()=>{let t={userInfo:{name:s.name,email:s.email,phone:s.phone,address:{zipcode:s.city,detail:s.address}},isError:!1};return n(g),(!s.name||!s.email||!s.phone||!s.address||!s.country||!s.city)&&(n(l=>({...l,nameErr:!s.name,emailErr:!s.email,phoneErr:!s.phone,addressErr:!s.address,countryErr:!s.country,cityErr:!s.city})),t.isError=!0),t},h=t=>{if(!t){y(""),p(d);return}y(t.country),p(l=>({...l,...t}))};return e.jsx(e.Fragment,{children:e.jsxs(C,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,children:[e.jsx(N,{id:"name",label:"姓名",variant:"outlined",placeholder:"請輸入姓名",maxLength:50,value:s.name,onChange:t=>x("name",t.target.value),error:i.nameErr,helperText:i.nameErr?"姓名不得為空":""}),e.jsx(N,{id:"phone",label:"手機",variant:"outlined",placeholder:"請輸入手機",maxLength:10,value:s.phone,onChange:t=>x("phone",t.target.value),error:i.phoneErr,helperText:i.phoneErr?"手機不得為空":""}),e.jsx(N,{id:"signEmail",label:"電子信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:s.email,onChange:t=>x("email",t.target.value),error:i.emailErr,helperText:i.emailErr?"信箱不得為空":""}),e.jsxs(C,{display:"flex",gap:2,children:[e.jsxs(O,{sx:{flex:1},error:!!i.countryErr,children:[e.jsx(B,{id:"country",children:"地址"}),e.jsx(L,{labelId:"country",id:"country",value:s.country,onChange:t=>{x("country",t.target.value),y(t.target.value)},autoWidth:!0,label:"行政區",children:he.map((t,l)=>e.jsx(z,{value:t,children:t},l))}),i.countryErr&&e.jsx(W,{children:"行政區不得為空"})]}),e.jsxs(O,{sx:{flex:1},error:!!i.cityErr,children:[e.jsx(B,{id:"city",children:"鄉鎮"}),e.jsxs(L,{labelId:"city",id:"city",value:s.city,onChange:t=>x("city",t.target.value),autoWidth:!0,label:"鄉鎮",children:[e.jsx(z,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),o&&o.map((t,l)=>e.jsx(z,{value:t.zipcode,children:t.city},l))]}),i.cityErr&&e.jsx(W,{children:"鄉鎮不得為空"})]})]}),e.jsx(N,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:s.address,onChange:t=>x("address",t.target.value.toString()),error:i.addressErr,helperText:i.addressErr?"地址不得為空":""})]})})})),Fe=v(xe)(({theme:r,errMsg:a})=>`
  .boxModal{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50%;
    justify-content: ${a?"center":"space-evenly"}} 

  .errMsg {
    color: ${r.textColor.ErrorBase} ;
    fontSize: 14px ;
  }

  .processing {
    font-weight: bold ;
    margin-top: 20px ;
    font-size: 14px;
  }
`),Q=u.memo(r=>{const{isOpen:a,handleClose:o}=r,{orderErrMsg:c}=K(d=>({orderErrMsg:d.order.errMsg}));return e.jsx(Fe,{open:a,onClose:c?o:void 0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",$errMsg:c,children:e.jsx(C,{className:"boxModal",children:c?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"close",size:"medium",onClick:o,children:"X"}),e.jsx("img",{src:F,alt:""}),e.jsxs("span",{className:"errMsg",children:["發生錯誤，請重新確認：",e.jsx("br",{}),c]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Re,{sx:{marginBottom:"20px"}}),e.jsx("img",{src:F,alt:""}),e.jsx("span",{className:"processing",children:"正在處理訂單，請勿關閉視窗"})]})})})});Q.propTypes={isOpen:_.bool,handleClose:_.func};const _e=v(C)(({theme:r})=>`
 
  background-color:${r.color.primaryTint};
  padding: 30px 0;
 
  .top,.bottom{
    margin-bottom: 30px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .bottom { 
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0px 60px;
    margin-top: 60px;
  }

  .top {
    font-size:32px;
    font-weight: bold;
  }

  .hr {
    margin: 30px 0;
  }

  .infoTitle{
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  .subTitle{
    ${r.components.RoomInfoTitle}
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

  `),Oe=v(C)(({theme:r})=>`
  margin-right: 70px;
  flex:1;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),Be=v(C)(({theme:r})=>`
  min-width: 300px;
  max-width: 350px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  background-color:white;
  padding: 30px;
  color:${r.textColor.black80};

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

  `),He=u.memo(()=>{const r=ne(),{params:a}=le(),{roomId:o,people:c,startDate:d,endDate:s}=ye(a),{detail:p,isLogin:g,userInfo:i}=K(f=>({detail:f.room.detail,isLogin:f.user.isLogin,userInfo:f.user.profile})),[n,y]=u.useState(null);u.useEffect(()=>{o&&r(ce(o))},[r,o]),u.useEffect(()=>{p&&y(p)},[p]);const x=f=>{f.preventDefault(),r(me(""));const k=j.current.checkForm(),{userInfo:R,isError:T}=k;if(T)return;r(pe({userInfo:R,roomId:o,checkInDate:d,checkOutDate:s,peopleNum:c})),I(!0)},j=u.useRef(),[h,t]=M.useState(!0),l=()=>{t(f=>!f)};u.useEffect(()=>{let f="";if(h&&g){const{address:k,name:R,email:T,phone:w}=i;f={name:R,phone:w,email:T,country:ge(k.zipcode).city,city:k.zipcode,address:k.detail}}j.current.setFormValue(f)},[h,i,g]);const[m,I]=M.useState(!1),S=()=>I(!1);return e.jsxs(_e,{children:[e.jsxs("div",{className:"top",children:[e.jsx(J,{}),"確認訂房資訊"]}),e.jsxs("div",{className:"bottom",children:[e.jsxs(Oe,{children:[e.jsx("div",{className:"infoTitle",children:"訂房資訊"}),e.jsx("div",{className:"subTitle",children:"選擇房型"}),e.jsx("div",{className:"content",children:p.name}),e.jsx("div",{className:"subTitle",children:"訂房日期"}),e.jsxs("div",{className:"content",children:["入住：",d," ",U(d),e.jsx("br",{}),"退房：",s," ",U(s)]}),e.jsx("div",{className:"subTitle",children:"房客人數"}),e.jsxs("div",{className:"content",children:[c," 人"]}),e.jsx("hr",{className:"hr"}),e.jsxs("div",{className:"infoTitle setMemberInfo",children:["訂房人資訊",e.jsx(je,{className:"setMemberInfo",control:e.jsx(ve,{checked:h,onChange:l}),label:"套用會員資料"})]}),e.jsx(we,{ref:j}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"房間資訊"}),n&&e.jsx(ue,{sectionsInfo:[{title:"房間格局",info:n.layoutInfo},{title:"房內設備",info:n.facilityInfo},{title:"備品提供",info:n.amenityInfo}],basicInfo:{areaInfo:n.areaInfo,bedInfo:n.bedInfo,maxPeople:n.maxPeople},sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"20px"},infoBoxStyle:{marginBottom:"20px"}})]}),e.jsxs(Be,{children:[n&&e.jsx("img",{src:`${de}/jpg/${n.imageUrl}`,alt:""}),e.jsxs("div",{className:"priceSection",children:[e.jsx("div",{className:"title",children:"價格詳情"}),e.jsxs("div",{className:"priceInfo",children:[e.jsxs("span",{children:["NT ",be(p.price,!0)," x 2 晚"]}),e.jsx("span",{children:"NT$20,000"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"priceInfo bold",children:[e.jsx("span",{children:"總價"}),e.jsx("span",{children:"NT$19,000"})]})]}),e.jsx(X,{size:"large",variant:"contained",onClick:x,fullWidth:!0,children:"確認訂房"})]})]}),e.jsx(Q,{isOpen:m,handleClose:S})]})});export{He as default};
