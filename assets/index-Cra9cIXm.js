import{g as oe,z as ne,K as X,s as C,a as P,_ as S,L as J,r as m,f as ie,b as le,j as e,d as ce,e as de,i as me,R as M,k as D,M as W,P as w,h as pe,q as ue,n as fe,t as he,v as xe,I as ge,N as ye,O as je}from"./index-D-LYstLd.js";import{r as ve,p as be,c as Ce,d as L,t as z}from"./format-DwXP2qGF.js";import{R as Ie}from"./index-HGW4xRc-.js";import{c as Ee,M as F,Z as ke,g as Se}from"./zipcodes-BS2JEOp0.js";import{B as k}from"./Box-CaIcgxkd.js";import{T as N,a as U,I as V,S as q,F as G}from"./TextField-Dg81ik3d.js";import{M as Me,g as Ne}from"./room-B96tqXbq.js";import{B as Q}from"./Button-BNk3ADPy.js";import{g as De}from"./order-DsWonqUb.js";import{F as Pe,C as Re}from"./FormControlLabel-DY6IDXYk.js";import"./createSvgIcon-BcIoTFId.js";import"./dayjs.min-BbjSblMn.js";import"./mergeSlotProps-DhmhSgwT.js";import"./styled-CI-UlK3t.js";import"./createStyled-mTeCn48X.js";function Te(r){return oe("MuiCircularProgress",r)}ne("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const $e=["className","color","disableShrink","size","style","thickness","value","variant"];let R=r=>r,K,Z,A,H;const v=44,ze=X(K||(K=R`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Fe=X(Z||(Z=R`
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
`)),Oe=r=>{const{classes:a,variant:o,color:n,disableShrink:f}=r,s={root:["root",o,`color${P(n)}`],svg:["svg"],circle:["circle",`circle${P(o)}`,f&&"circleDisableShrink"]};return de(s,Te,a)},_e=C("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:o}=r;return[a.root,a[o.variant],a[`color${P(o.color)}`]]}})(({ownerState:r,theme:a})=>S({display:"inline-block"},r.variant==="determinate"&&{transition:a.transitions.create("transform")},r.color!=="inherit"&&{color:(a.vars||a).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&J(A||(A=R`
      animation: ${0} 1.4s linear infinite;
    `),ze)),Be=C("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,a)=>a.svg})({display:"block"}),We=C("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,a)=>{const{ownerState:o}=r;return[a.circle,a[`circle${P(o.variant)}`],o.disableShrink&&a.circleDisableShrink]}})(({ownerState:r,theme:a})=>S({stroke:"currentColor"},r.variant==="determinate"&&{transition:a.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&J(H||(H=R`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Fe)),we=m.forwardRef(function(a,o){const n=ie({props:a,name:"MuiCircularProgress"}),{className:f,color:s="primary",disableShrink:h=!1,size:c=40,style:i,thickness:x=3.6,value:g=0,variant:p="indeterminate"}=n,d=le(n,$e),j=S({},n,{color:s,disableShrink:h,size:c,thickness:x,value:g,variant:p}),t=Oe(j),l={},u={},I={};if(p==="determinate"){const E=2*Math.PI*((v-x)/2);l.strokeDasharray=E.toFixed(3),I["aria-valuenow"]=Math.round(g),l.strokeDashoffset=`${((100-g)/100*E).toFixed(3)}px`,u.transform="rotate(-90deg)"}return e.jsx(_e,S({className:ce(t.root,f),style:S({width:c,height:c},u,i),ownerState:j,ref:o,role:"progressbar"},I,d,{children:e.jsx(Be,{className:t.svg,ownerState:j,viewBox:`${v/2} ${v/2} ${v} ${v}`,children:e.jsx(We,{className:t.circle,style:l,ownerState:j,cx:v,cy:v,r:(v-x)/2,fill:"none",strokeWidth:x})})}))}),Le=we;var O={},Ue=me;Object.defineProperty(O,"__esModule",{value:!0});var Y=O.default=void 0,Ve=Ue(ve()),qe=e;Y=O.default=(0,Ve.default)((0,qe.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore");const Ge=m.memo(m.forwardRef((r,a)=>{m.useImperativeHandle(a,()=>({checkForm:d,setFormValue:j}));const[o,n]=M.useState(""),f={email:"",name:"",phone:"",country:"",city:"",address:""},[s,h]=M.useState(f),c={emailErr:!1,nameErr:!1,phoneErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[i,x]=M.useState(c),g=t=>{const l=ke.filter(u=>u.city===t).map(u=>({zipcode:u.zipcode,detail:u.detail,city:u.county}));n(()=>l)},p=(t,l)=>{h(u=>({...u,[t]:l}))},d=()=>{let t={userInfo:{name:s.name,email:s.email,phone:s.phone,address:{zipcode:s.city,detail:s.address}},isError:!1};return x(c),(!s.name||!s.email||!s.phone||!s.address||!s.country||!s.city)&&(x(l=>({...l,nameErr:!s.name,emailErr:!s.email,phoneErr:!s.phone,addressErr:!s.address,countryErr:!s.country,cityErr:!s.city})),t.isError=!0),t},j=t=>{if(!t){g(""),h(f);return}g(t.country),h(l=>({...l,...t}))};return e.jsx(e.Fragment,{children:e.jsxs(k,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,children:[e.jsx(N,{id:"name",label:"姓名",variant:"outlined",placeholder:"請輸入姓名",maxLength:50,value:s.name,onChange:t=>p("name",t.target.value),error:i.nameErr,helperText:i.nameErr?"姓名不得為空":""}),e.jsx(N,{id:"phone",label:"手機",variant:"outlined",placeholder:"請輸入手機",maxLength:10,value:s.phone,onChange:t=>p("phone",t.target.value),error:i.phoneErr,helperText:i.phoneErr?"手機不得為空":""}),e.jsx(N,{id:"signEmail",label:"電子信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:s.email,onChange:t=>p("email",t.target.value),error:i.emailErr,helperText:i.emailErr?"信箱不得為空":""}),e.jsxs(k,{display:"flex",gap:2,children:[e.jsxs(U,{sx:{flex:1},error:!!i.countryErr,children:[e.jsx(V,{id:"country",children:"地址"}),e.jsx(q,{labelId:"country",id:"country",value:s.country,onChange:t=>{p("country",t.target.value),g(t.target.value)},autoWidth:!0,label:"行政區",children:Ee.map((t,l)=>e.jsx(F,{value:t,children:t},l))}),i.countryErr&&e.jsx(G,{children:"行政區不得為空"})]}),e.jsxs(U,{sx:{flex:1},error:!!i.cityErr,children:[e.jsx(V,{id:"city",children:"鄉鎮"}),e.jsxs(q,{labelId:"city",id:"city",value:s.city,onChange:t=>p("city",t.target.value),autoWidth:!0,label:"鄉鎮",children:[e.jsx(F,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),o&&o.map((t,l)=>e.jsx(F,{value:t.zipcode,children:t.city},l))]}),i.cityErr&&e.jsx(G,{children:"鄉鎮不得為空"})]})]}),e.jsx(N,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:s.address,onChange:t=>p("address",t.target.value.toString()),error:i.addressErr,helperText:i.addressErr?"地址不得為空":""})]})})})),Ke=C(Me)(({theme:r,errMsg:a})=>`
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
`),ee=m.memo(r=>{const{isOpen:a,handleClose:o}=r,{orderErrMsg:n}=D(f=>({orderErrMsg:f.order.errMsg}));return e.jsx(Ke,{open:a,onClose:n?o:void 0,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",errMsg:n,children:e.jsx(k,{className:"boxModal",children:n?e.jsxs(e.Fragment,{children:[e.jsx(Q,{className:"close",size:"medium",onClick:o,children:"X"}),e.jsx("img",{src:W,alt:""}),e.jsxs("span",{className:"errMsg",children:["發生錯誤，請重新確認：",e.jsx("br",{}),n]})]}):e.jsxs(e.Fragment,{children:[e.jsx(Le,{sx:{marginBottom:"20px"}}),e.jsx("img",{src:W,alt:""}),e.jsx("span",{className:"processing",children:"正在處理訂單，請勿關閉視窗"})]})})})});ee.propTypes={isOpen:w.bool,handleClose:w.func};const Ze=C(k)(({theme:r})=>`
  
  ${r.components.ContainerWrapper};

  .hr {
    margin: 30px 0;
  }

  .infoTitle{
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  .subTitle{
    ${r.components.RoomInfoTitle};
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

  `),Ae=C(k)(({theme:r})=>`
  ${r.components.LeftBoxWrapper};
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),He=C(k)(({theme:r})=>`
  ${r.components.RightBoxWrapper}

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

  `),mr=m.memo(()=>{const r=pe(),{params:a}=ue(),o=fe(),{roomId:n,people:f,startDate:s,endDate:h}=be(a),{detail:c}=D(Ne),{isLogin:i,userInfo:x}=D(he),{orderSuccess:g,orderInfo:p}=D(De),[d,j]=m.useState(null),[t,l]=m.useState({day:0,total:0});m.useEffect(()=>{g&&o(`/orderSuccess/orderNo=${p._id}`)},[o,g,p]),m.useEffect(()=>{n&&r(xe(n))},[r,n]),m.useEffect(()=>{if(c){j(c);const y=Ce(s,h);l(b=>({...b,day:y,total:c.price*y}))}},[c,h,s]);const u=y=>{y.preventDefault(),r(ye(""));const b=I.current.checkForm(),{userInfo:T,isError:$}=b;if($)return;r(je({userInfo:T,roomId:n,checkInDate:s,checkOutDate:h,peopleNum:f})),_(!0)},I=m.useRef(),[E,re]=M.useState(!0),te=()=>{re(y=>!y)};m.useEffect(()=>{let y="";if(E&&i){const{address:b,name:T,email:$,phone:B}=x;y={name:T,phone:B,email:$,country:Se(b.zipcode).city,city:b.zipcode,address:b.detail}}I.current.setFormValue(y)},[E,x,i]);const[se,_]=M.useState(!1),ae=()=>_(!1);return e.jsxs(Ze,{children:[e.jsxs("div",{className:"top",children:[e.jsx(Y,{}),"確認訂房資訊"]}),e.jsxs("div",{className:"bottom",children:[e.jsxs(Ae,{children:[e.jsx("div",{className:"infoTitle",children:"訂房資訊"}),e.jsx("div",{className:"subTitle",children:"選擇房型"}),e.jsx("div",{className:"content",children:c.name}),e.jsx("div",{className:"subTitle",children:"訂房日期"}),e.jsxs("div",{className:"content",children:["入住：",s," ",L(s),e.jsx("br",{}),"退房：",h," ",L(h)]}),e.jsx("div",{className:"subTitle",children:"房客人數"}),e.jsxs("div",{className:"content",children:[f," 人"]}),e.jsx("hr",{className:"hr"}),e.jsxs("div",{className:"infoTitle setMemberInfo",children:["訂房人資訊",e.jsx(Pe,{className:"setMemberInfo",control:e.jsx(Re,{checked:E,onChange:te}),label:"套用會員資料"})]}),e.jsx(Ge,{ref:I}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"房間資訊"}),d&&e.jsx(Ie,{sectionsInfo:[{title:"房間格局",info:d.layoutInfo},{title:"房內設備",info:d.facilityInfo},{title:"備品提供",info:d.amenityInfo}],basicInfo:{areaInfo:d.areaInfo,bedInfo:d.bedInfo,maxPeople:d.maxPeople},sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"20px"},infoBoxStyle:{marginBottom:"20px"}})]}),e.jsxs(He,{children:[d&&e.jsx("img",{src:`${ge}/jpg/${d.imageUrl}`,alt:""}),e.jsxs("div",{className:"priceSection",children:[e.jsx("div",{className:"title",children:"價格詳情"}),e.jsxs("div",{className:"priceInfo",children:[e.jsxs("span",{children:["NT ",z(c.price,!0)," x ",t.day," 晚"]}),e.jsxs("span",{children:["NT ",z(t.total,!0)]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"priceInfo bold",children:[e.jsx("span",{children:"總價"}),e.jsxs("span",{children:["NT ",z(t.total,!0)]})]})]}),e.jsx(Q,{size:"large",variant:"contained",onClick:u,fullWidth:!0,children:"確認訂房"})]})]}),e.jsx(ee,{isOpen:se,handleClose:ae})]})});export{mr as default};
