import{r as x,g as W,z as A,s as L,_ as u,f as F,b as T,j as t,d as N,e as B,a as re,h as le,n as ie,R as $,k as ce,A as de,B as pe}from"./index-6j9zUeTH.js";import{A as ue,V as J,a as K,L as me}from"./VisibilityOff-T95nA6r4.js";import{L as he,A as xe,D as ve}from"./AdapterDayjs-BY13t5k8.js";import{d as ae}from"./dayjs.min-Br4wyROy.js";import{c as be,M as O,Z as fe}from"./zipcodes-elybh2Bi.js";import{B as z}from"./Box-DmIBPk6T.js";import{c as ne,S as Se}from"./createSvgIcon-Cb_IpOPE.js";import{T as U,a as _,I as V,O as Q,F as D,S as X}from"./TextField-CHQnchov.js";import{a as ee,I as te}from"./InputAdornment-CC7YmdYm.js";import{B as H}from"./Button-DL_d1CX-.js";import"./Modal-gMO9npr2.js";import"./mergeSlotProps-mUW9xaLC.js";import"./colorManipulator-B8KiM96s.js";import"./createStyled-CdLGlWqd.js";import"./DialogContent-BcEVqJ0v.js";const ye=x.createContext({}),Y=ye,ge=x.createContext({}),G=ge;function Ce(e){return W("MuiStep",e)}A("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Le=["active","children","className","component","completed","disabled","expanded","index","last"],je=e=>{const{classes:r,orientation:n,alternativeLabel:l,completed:i}=e;return B({root:["root",n,l&&"alternativeLabel",i&&"completed"]},Ce,r)},we=L("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:e})=>u({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),Ee=x.forwardRef(function(r,n){const l=F({props:r,name:"MuiStep"}),{active:i,children:o,className:v,component:p="div",completed:s,disabled:m,expanded:h=!1,index:c,last:b}=l,j=T(l,Le),{activeStep:w,connector:S,alternativeLabel:E,orientation:P,nonLinear:M}=x.useContext(Y);let[y=!1,f=!1,g=!1]=[i,s,m];w===c?y=i!==void 0?i:!0:!M&&w>c?f=s!==void 0?s:!0:!M&&w<c&&(g=m!==void 0?m:!0);const I=x.useMemo(()=>({index:c,last:b,expanded:h,icon:c+1,active:y,completed:f,disabled:g}),[c,b,h,y,f,g]),C=u({},l,{active:y,orientation:P,alternativeLabel:E,completed:f,disabled:g,expanded:h,component:p}),a=je(C),d=t.jsxs(we,u({as:p,className:N(a.root,v),ref:n,ownerState:C},j,{children:[S&&E&&c!==0?S:null,o]}));return t.jsx(G.Provider,{value:I,children:S&&!E&&c!==0?t.jsxs(x.Fragment,{children:[S,d]}):d})}),Pe=Ee,Me=ne(t.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Ie=ne(t.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function ke(e){return W("MuiStepIcon",e)}const Re=A("MuiStepIcon",["root","active","completed","error","text"]),Z=Re;var oe;const $e=["active","className","completed","error","icon"],Ne=e=>{const{classes:r,active:n,completed:l,error:i}=e;return B({root:["root",n&&"active",l&&"completed",i&&"error"],text:["text"]},ke,r)},q=L(Se,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${Z.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${Z.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${Z.error}`]:{color:(e.vars||e).palette.error.main}})),ze=L("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,r)=>r.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),De=x.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepIcon"}),{active:i=!1,className:o,completed:v=!1,error:p=!1,icon:s}=l,m=T(l,$e),h=u({},l,{active:i,completed:v,error:p}),c=Ne(h);if(typeof s=="number"||typeof s=="string"){const b=N(o,c.root);return p?t.jsx(q,u({as:Ie,className:b,ref:n,ownerState:h},m)):v?t.jsx(q,u({as:Me,className:b,ref:n,ownerState:h},m)):t.jsxs(q,u({className:b,ref:n,ownerState:h},m,{children:[oe||(oe=t.jsx("circle",{cx:"12",cy:"12",r:"12"})),t.jsx(ze,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:s})]}))}return s}),We=De;function Ae(e){return W("MuiStepLabel",e)}const Fe=A("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),k=Fe,Te=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Be=e=>{const{classes:r,orientation:n,active:l,completed:i,error:o,disabled:v,alternativeLabel:p}=e;return B({root:["root",n,o&&"error",v&&"disabled",p&&"alternativeLabel"],label:["label",l&&"active",i&&"completed",o&&"error",v&&"disabled",p&&"alternativeLabel"],iconContainer:["iconContainer",l&&"active",i&&"completed",o&&"error",v&&"disabled",p&&"alternativeLabel"],labelContainer:["labelContainer",p&&"alternativeLabel"]},Ae,r)},Ue=L("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation]]}})(({ownerState:e})=>u({display:"flex",alignItems:"center",[`&.${k.alternativeLabel}`]:{flexDirection:"column"},[`&.${k.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),_e=L("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,r)=>r.label})(({theme:e})=>u({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${k.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${k.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${k.alternativeLabel}`]:{marginTop:16},[`&.${k.error}`]:{color:(e.vars||e).palette.error.main}})),Ve=L("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,r)=>r.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${k.alternativeLabel}`]:{paddingRight:0}})),He=L("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,r)=>r.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${k.alternativeLabel}`]:{textAlign:"center"}})),se=x.forwardRef(function(r,n){var l;const i=F({props:r,name:"MuiStepLabel"}),{children:o,className:v,componentsProps:p={},error:s=!1,icon:m,optional:h,slotProps:c={},StepIconComponent:b,StepIconProps:j}=i,w=T(i,Te),{alternativeLabel:S,orientation:E}=x.useContext(Y),{active:P,disabled:M,completed:y,icon:f}=x.useContext(G),g=m||f;let I=b;g&&!I&&(I=We);const C=u({},i,{active:P,alternativeLabel:S,completed:y,disabled:M,error:s,orientation:E}),a=Be(C),d=(l=c.label)!=null?l:p.label;return t.jsxs(Ue,u({className:N(a.root,v),ref:n,ownerState:C},w,{children:[g||I?t.jsx(Ve,{className:a.iconContainer,ownerState:C,children:t.jsx(I,u({completed:y,active:P,error:s,icon:g},j))}):null,t.jsxs(He,{className:a.labelContainer,ownerState:C,children:[o?t.jsx(_e,u({ownerState:C},d,{className:N(a.label,d==null?void 0:d.className),children:o})):null,h]})]}))});se.muiName="StepLabel";const Ye=se;function Oe(e){return W("MuiStepConnector",e)}A("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Ze=["className"],qe=e=>{const{classes:r,orientation:n,alternativeLabel:l,active:i,completed:o,disabled:v}=e,p={root:["root",n,l&&"alternativeLabel",i&&"active",o&&"completed",v&&"disabled"],line:["line",`line${re(n)}`]};return B(p,Oe,r)},Ge=L("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:e})=>u({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Je=L("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.line,r[`line${re(n.orientation)}`]]}})(({ownerState:e,theme:r})=>{const n=r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600];return u({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:n},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Ke=x.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepConnector"}),{className:i}=l,o=T(l,Ze),{alternativeLabel:v,orientation:p="horizontal"}=x.useContext(Y),{active:s,disabled:m,completed:h}=x.useContext(G),c=u({},l,{alternativeLabel:v,orientation:p,active:s,completed:h,disabled:m}),b=qe(c);return t.jsx(Ge,u({className:N(b.root,i),ref:n,ownerState:c},o,{children:t.jsx(Je,{className:b.line,ownerState:c})}))}),Qe=Ke;function Xe(e){return W("MuiStepper",e)}A("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const et=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],tt=e=>{const{orientation:r,alternativeLabel:n,classes:l}=e;return B({root:["root",r,n&&"alternativeLabel"]},Xe,l)},ot=L("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel]}})(({ownerState:e})=>u({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),rt=t.jsx(Qe,{}),at=x.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:o=!1,children:v,className:p,component:s="div",connector:m=rt,nonLinear:h=!1,orientation:c="horizontal"}=l,b=T(l,et),j=u({},l,{alternativeLabel:o,orientation:c,component:s}),w=tt(j),S=x.Children.toArray(v).filter(Boolean),E=S.map((M,y)=>x.cloneElement(M,u({index:y,last:y+1===S.length},M.props))),P=x.useMemo(()=>({activeStep:i,alternativeLabel:o,connector:m,nonLinear:h,orientation:c}),[i,o,m,h,c]);return t.jsx(Y.Provider,{value:P,children:t.jsx(ot,u({as:s,ownerState:j,className:N(w.root,p),ref:n},b,{children:E}))})}),nt=at,st=ae(),Ct=x.memo(()=>{const e=le(),r=ie(),[n,l]=$.useState(0),i=["輸入信箱及密碼","填寫基本資料"],[o,v]=$.useState({email:"",password:"",checkPassWord:"",name:"",phone:"",birthday:"",country:"",city:"",address:""}),p={emailErr:!1,pwdErr:!1,checkPwdErr:"",nameErr:!1,phoneErr:!1,birthdayErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[s,m]=$.useState(p),{allErrMsg:h,showFinal:c,isLogin:b}=ce(a=>({allErrMsg:a.sign.errMsg,showFinal:a.sign.showFinal,isLogin:a.user.isLogin}));x.useEffect(()=>{b&&r("/home")},[b]);const[j,w]=$.useState(""),[S,E]=$.useState(""),[P,M]=$.useState(""),y=a=>{const d=fe.filter(R=>R.city===a).map(R=>({zipcode:R.zipcode,detail:R.detail,city:R.county}));M(()=>d)},f=(a,d)=>{a==="birthday"&&(d=new Date(d).toLocaleDateString()),v(R=>({...R,[a]:d}))},g=a=>a.preventDefault(),I=a=>{if(a.preventDefault(),m(p),!o.email||!o.password||!o.checkPassWord||o.checkPassWord!==o.password){m(d=>({...d,emailErr:!o.email,pwdErr:!o.password,checkPwdErr:o.checkPassWord?o.checkPassWord!==o.password?"密碼不一致，請重新確認":"":"密碼不得為空"}));return}l(d=>d+1)},C=a=>{if(a.preventDefault(),e(de("")),m(p),!o.name||!o.phone||!o.birthday||!o.address||!o.country||!o.city){m(d=>({...d,nameErr:!o.name,phoneErr:!o.phone,birthdayErr:!o.birthday,addressErr:!o.address,countryErr:!o.country,cityErr:!o.city}));return}e(pe({name:o.name,email:o.email,password:o.password,phone:o.phone,birthday:o.birthday,address:{zipcode:o.city,detail:o.address}}))};return t.jsxs(ue,{children:[t.jsx("div",{className:"sideImg"}),t.jsxs("div",{className:"formContent",children:[t.jsxs("p",{className:"subTitle",children:["享樂酒店，誠摯歡迎 ",t.jsx("br",{}),t.jsx("span",{children:i.length===n?"註冊成功":"立即註冊"})]}),i.length!==n&&!c&&t.jsx(z,{sx:{width:"100%",marginBottom:"30px"},children:t.jsx(nt,{activeStep:n,alternativeLabel:!0,children:i.map(a=>t.jsx(Pe,{children:t.jsx(Ye,{children:a})},a))})}),n===0&&!c&&t.jsxs(z,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,sx:{m:"auto",width:"80%"},justifyContent:"center",onSubmit:C,children:[t.jsx(U,{id:"signEmail",label:"註冊信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:o.email,onChange:a=>f("email",a.target.value),error:s.emailErr,helperText:s.emailErr?"信箱不得為空":""}),t.jsxs(_,{variant:"outlined",error:!!s.pwdErr,children:[t.jsx(V,{htmlFor:"signPwd",children:"密碼"}),t.jsx(Q,{id:"signPwd",type:j?"text":"password",endAdornment:t.jsx(ee,{position:"end",children:t.jsx(te,{"aria-label":"toggle password visibility",onClick:()=>{w(a=>!a)},onMouseDown:g,children:j?t.jsx(J,{}):t.jsx(K,{})})}),label:"Password",maxLength:50,placeholder:"請輸入8碼以上密碼",autoComplete:"old-password",value:o.password,onChange:a=>f("password",a.target.value)}),s.pwdErr&&t.jsx(D,{error:!0,children:"密碼不得為空"})]}),t.jsxs(_,{variant:"outlined",error:!!s.checkPwdErr,children:[t.jsx(V,{htmlFor:"checkPwd",children:"確認密碼"}),t.jsx(Q,{id:"checkPwd",type:S?"text":"password",endAdornment:t.jsx(ee,{position:"end",children:t.jsx(te,{"aria-label":"toggle password visibility",onClick:()=>{E(a=>!a)},onMouseDown:g,children:S?t.jsx(J,{}):t.jsx(K,{})})}),label:"確認密碼",maxLength:50,placeholder:"請輸入8碼以上密碼",autoComplete:"new-password",value:o.checkPassWord,onChange:a=>f("checkPassWord",a.target.value)}),s.checkPwdErr&&t.jsx(D,{error:!0,children:s.checkPwdErr})]}),t.jsx(H,{variant:"outlined",size:"large",type:"submit",button:"primary",color:"primary",onClick:I,children:"下一步"})]}),n===1&&!c&&t.jsxs(z,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,sx:{m:"auto",width:"80%"},justifyContent:"center",onSubmit:C,children:[t.jsx(U,{id:"name",label:"姓名",variant:"outlined",placeholder:"陳大明",maxLength:50,value:o.name,onChange:a=>f("name",a.target.value),error:s.nameErr,helperText:s.nameErr?"姓名不得為空":""}),t.jsx(U,{id:"phone",label:"手機",variant:"outlined",placeholder:"0912345678",maxLength:10,value:o.phone,onChange:a=>f("phone",a.target.value),error:s.phoneErr,helperText:s.phoneErr?"手機不得為空":""}),t.jsx(he,{dateAdapter:xe,adapterLocale:"zh-tw",children:t.jsx(ve,{label:"生日",format:"YYYY/MM/DD",maxDate:st,minDate:ae("1911-01-01"),slotProps:{textField:{helperText:s.birthdayErr?"生日不得為空":"",error:s.birthdayErr}},onChange:a=>f("birthday",a)})}),t.jsxs(z,{display:"flex",gap:2,children:[t.jsxs(_,{sx:{flex:1},error:!!s.countryErr,children:[t.jsx(V,{id:"country",children:"行政區"}),t.jsx(X,{labelId:"country",id:"country",value:o.country,onChange:a=>{f("country",a.target.value),y(a.target.value)},autoWidth:!0,label:"行政區",children:be.map((a,d)=>t.jsx(O,{value:a,children:a},d))}),s.countryErr&&t.jsx(D,{children:"行政區不得為空"})]}),t.jsxs(_,{sx:{flex:1},error:!!s.cityErr,children:[t.jsx(V,{id:"city",children:"鄉鎮"}),t.jsxs(X,{labelId:"city",id:"city",value:o.city,onChange:a=>f("city",a.target.value),autoWidth:!0,label:"鄉鎮",children:[t.jsx(O,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),P&&P.map((a,d)=>t.jsx(O,{value:a.zipcode,children:a.city},d))]}),s.cityErr&&t.jsx(D,{children:"鄉鎮不得為空"})]})]}),t.jsx(U,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:o.address,onChange:a=>f("address",a.target.value.toString()),error:s.addressErr,helperText:s.addressErr?"地址不得為空":""}),h&&t.jsxs(D,{className:"allErrMsg",error:!0,children:["請重新確認：",h]}),t.jsxs(z,{display:"flex",justifyContent:" space-between",children:[t.jsx(H,{variant:"outlined",size:"large",type:"submit",button:"primary",color:"primary",onClick:a=>{a.preventDefault(),l(d=>d-1)},children:"上一步"}),t.jsx(H,{variant:"contained",size:"large",type:"submit",button:"primary",color:"primary",children:"完成註冊"})]})]}),!c&&t.jsxs("p",{className:"regLink",children:["已有會員嗎?",t.jsx(me,{href:"#/login",children:"前往登入"})]}),c&&t.jsx(H,{sx:{display:"block",m:"0 auto",width:"80%",lineHeight:"30px",textAlign:"center"},variant:"contained",href:"#/login",children:"前往登入"})]})]})});export{Ct as default};