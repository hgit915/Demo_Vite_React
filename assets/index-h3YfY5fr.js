import{r as c,g as D,D as W,f as j,_ as m,h as F,b as T,j as t,d as $,e as U,E as re,S as le,a as ae,F as ie,k as ce,q as de,l as G,z as pe,G as ue,B as R,T as A,H as B,J as _,O as J,K,v as Q,V as X,L as ee,M as z,t as V,N as te,Q as me,R as he,U as xe}from"./index-BZ1CMoz2.js";import{L as ve,A as be,D as fe}from"./AdapterDayjs--U1GKxoL.js";import{d as ne}from"./dayjs.min-ZHR2y8fp.js";import{c as Se,Z as ye}from"./zipcodes-AUSGReFK.js";import{M as Y}from"./MenuItem-HuIu6sJj.js";import"./colorManipulator-lS7wmc76.js";import"./DialogContent-BuQtmjop.js";const ge=c.createContext({}),H=ge,Ce=c.createContext({}),q=Ce;function je(e){return D("MuiStep",e)}W("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Le=["active","children","className","component","completed","disabled","expanded","index","last"],we=e=>{const{classes:r,orientation:n,alternativeLabel:l,completed:i}=e;return U({root:["root",n,l&&"alternativeLabel",i&&"completed"]},je,r)},Ee=j("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:e})=>m({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),Pe=c.forwardRef(function(r,n){const l=F({props:r,name:"MuiStep"}),{active:i,children:o,className:b,component:u="div",completed:s,disabled:h,expanded:x=!1,index:d,last:v}=l,L=T(l,Le),{activeStep:w,connector:S,alternativeLabel:E,orientation:P,nonLinear:M}=c.useContext(H);let[y=!1,f=!1,g=!1]=[i,s,h];w===d?y=i!==void 0?i:!0:!M&&w>d?f=s!==void 0?s:!0:!M&&w<d&&(g=h!==void 0?h:!0);const I=c.useMemo(()=>({index:d,last:v,expanded:x,icon:d+1,active:y,completed:f,disabled:g}),[d,v,x,y,f,g]),C=m({},l,{active:y,orientation:P,alternativeLabel:E,completed:f,disabled:g,expanded:x,component:u}),a=we(C),p=t.jsxs(Ee,m({as:u,className:$(a.root,b),ref:n,ownerState:C},L,{children:[S&&E&&d!==0?S:null,o]}));return t.jsx(q.Provider,{value:I,children:S&&!E&&d!==0?t.jsxs(c.Fragment,{children:[S,p]}):p})}),Me=Pe,Ie=re(t.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),ke=re(t.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Ne(e){return D("MuiStepIcon",e)}const $e=W("MuiStepIcon",["root","active","completed","error","text"]),O=$e;var oe;const Re=["active","className","completed","error","icon"],ze=e=>{const{classes:r,active:n,completed:l,error:i}=e;return U({root:["root",n&&"active",l&&"completed",i&&"error"],text:["text"]},Ne,r)},Z=j(le,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${O.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${O.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${O.error}`]:{color:(e.vars||e).palette.error.main}})),De=j("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,r)=>r.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),We=c.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepIcon"}),{active:i=!1,className:o,completed:b=!1,error:u=!1,icon:s}=l,h=T(l,Re),x=m({},l,{active:i,completed:b,error:u}),d=ze(x);if(typeof s=="number"||typeof s=="string"){const v=$(o,d.root);return u?t.jsx(Z,m({as:ke,className:v,ref:n,ownerState:x},h)):b?t.jsx(Z,m({as:Ie,className:v,ref:n,ownerState:x},h)):t.jsxs(Z,m({className:v,ref:n,ownerState:x},h,{children:[oe||(oe=t.jsx("circle",{cx:"12",cy:"12",r:"12"})),t.jsx(De,{className:d.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:x,children:s})]}))}return s}),Fe=We;function Te(e){return D("MuiStepLabel",e)}const Ue=W("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),k=Ue,Ae=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],Be=e=>{const{classes:r,orientation:n,active:l,completed:i,error:o,disabled:b,alternativeLabel:u}=e;return U({root:["root",n,o&&"error",b&&"disabled",u&&"alternativeLabel"],label:["label",l&&"active",i&&"completed",o&&"error",b&&"disabled",u&&"alternativeLabel"],iconContainer:["iconContainer",l&&"active",i&&"completed",o&&"error",b&&"disabled",u&&"alternativeLabel"],labelContainer:["labelContainer",u&&"alternativeLabel"]},Te,r)},_e=j("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation]]}})(({ownerState:e})=>m({display:"flex",alignItems:"center",[`&.${k.alternativeLabel}`]:{flexDirection:"column"},[`&.${k.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ve=j("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,r)=>r.label})(({theme:e})=>m({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${k.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${k.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${k.alternativeLabel}`]:{marginTop:16},[`&.${k.error}`]:{color:(e.vars||e).palette.error.main}})),He=j("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,r)=>r.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${k.alternativeLabel}`]:{paddingRight:0}})),Ye=j("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,r)=>r.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${k.alternativeLabel}`]:{textAlign:"center"}})),se=c.forwardRef(function(r,n){var l;const i=F({props:r,name:"MuiStepLabel"}),{children:o,className:b,componentsProps:u={},error:s=!1,icon:h,optional:x,slotProps:d={},StepIconComponent:v,StepIconProps:L}=i,w=T(i,Ae),{alternativeLabel:S,orientation:E}=c.useContext(H),{active:P,disabled:M,completed:y,icon:f}=c.useContext(q),g=h||f;let I=v;g&&!I&&(I=Fe);const C=m({},i,{active:P,alternativeLabel:S,completed:y,disabled:M,error:s,orientation:E}),a=Be(C),p=(l=d.label)!=null?l:u.label;return t.jsxs(_e,m({className:$(a.root,b),ref:n,ownerState:C},w,{children:[g||I?t.jsx(He,{className:a.iconContainer,ownerState:C,children:t.jsx(I,m({completed:y,active:P,error:s,icon:g},L))}):null,t.jsxs(Ye,{className:a.labelContainer,ownerState:C,children:[o?t.jsx(Ve,m({ownerState:C},p,{className:$(a.label,p==null?void 0:p.className),children:o})):null,x]})]}))});se.muiName="StepLabel";const Oe=se;function Ze(e){return D("MuiStepConnector",e)}W("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const qe=["className"],Ge=e=>{const{classes:r,orientation:n,alternativeLabel:l,active:i,completed:o,disabled:b}=e,u={root:["root",n,l&&"alternativeLabel",i&&"active",o&&"completed",b&&"disabled"],line:["line",`line${ae(n)}`]};return U(u,Ze,r)},Je=j("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:e})=>m({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Ke=j("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.line,r[`line${ae(n.orientation)}`]]}})(({ownerState:e,theme:r})=>{const n=r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600];return m({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:n},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Qe=c.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepConnector"}),{className:i}=l,o=T(l,qe),{alternativeLabel:b,orientation:u="horizontal"}=c.useContext(H),{active:s,disabled:h,completed:x}=c.useContext(q),d=m({},l,{alternativeLabel:b,orientation:u,active:s,completed:x,disabled:h}),v=Ge(d);return t.jsx(Je,m({className:$(v.root,i),ref:n,ownerState:d},o,{children:t.jsx(Ke,{className:v.line,ownerState:d})}))}),Xe=Qe;function et(e){return D("MuiStepper",e)}W("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const tt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],ot=e=>{const{orientation:r,alternativeLabel:n,classes:l}=e;return U({root:["root",r,n&&"alternativeLabel"]},et,l)},rt=j("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel]}})(({ownerState:e})=>m({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),at=t.jsx(Xe,{}),nt=c.forwardRef(function(r,n){const l=F({props:r,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:o=!1,children:b,className:u,component:s="div",connector:h=at,nonLinear:x=!1,orientation:d="horizontal"}=l,v=T(l,tt),L=m({},l,{alternativeLabel:o,orientation:d,component:s}),w=ot(L),S=c.Children.toArray(b).filter(Boolean),E=S.map((M,y)=>c.cloneElement(M,m({index:y,last:y+1===S.length},M.props))),P=c.useMemo(()=>({activeStep:i,alternativeLabel:o,connector:h,nonLinear:x,orientation:d}),[i,o,h,x,d]);return t.jsx(H.Provider,{value:P,children:t.jsx(rt,m({as:s,ownerState:L,className:$(w.root,u),ref:n},v,{children:E}))})}),st=nt,lt=e=>e.sign,it=ie([lt],e=>({allErrMsg:e.errMsg,showFinal:e.showFinal})),ct=ne(),bt=c.memo(()=>{const e=ce(),r=de(),[n,l]=c.useState(0),i=["輸入信箱及密碼","填寫基本資料"],[o,b]=c.useState({email:"",password:"",checkPassWord:"",name:"",phone:"",birthday:"",country:"",city:"",address:""}),u={emailErr:!1,pwdErr:!1,checkPwdErr:"",nameErr:!1,phoneErr:!1,birthdayErr:!1,countryErr:!1,cityErr:!1,addressErr:!1},[s,h]=c.useState(u),{isLogin:x}=G(pe),{allErrMsg:d,showFinal:v}=G(it);c.useEffect(()=>{x&&r("/home")},[x]);const[L,w]=c.useState(""),[S,E]=c.useState(""),[P,M]=c.useState(""),y=a=>{const p=ye.filter(N=>N.city===a).map(N=>({zipcode:N.zipcode,detail:N.detail,city:N.county}));M(()=>p)},f=(a,p)=>{a==="birthday"&&(p=new Date(p).toLocaleDateString()),b(N=>({...N,[a]:p}))},g=a=>a.preventDefault(),I=a=>{if(a.preventDefault(),h(u),!o.email||!o.password||!o.checkPassWord||o.checkPassWord!==o.password){h(p=>({...p,emailErr:!o.email,pwdErr:!o.password,checkPwdErr:o.checkPassWord?o.checkPassWord!==o.password?"密碼不一致，請重新確認":"":"密碼不得為空"}));return}l(p=>p+1)},C=a=>{if(a.preventDefault(),e(he("")),h(u),!o.name||!o.phone||!o.birthday||!o.address||!o.country||!o.city){h(p=>({...p,nameErr:!o.name,phoneErr:!o.phone,birthdayErr:!o.birthday,addressErr:!o.address,countryErr:!o.country,cityErr:!o.city}));return}e(xe({name:o.name,email:o.email,password:o.password,phone:o.phone,birthday:o.birthday,address:{zipcode:o.city,detail:o.address}}))};return t.jsxs(ue,{children:[t.jsx("div",{className:"sideImg"}),t.jsxs("div",{className:"formContent",children:[t.jsxs("p",{className:"subTitle",children:["享樂酒店，誠摯歡迎 ",t.jsx("br",{}),t.jsx("span",{children:i.length===n?"註冊成功":"立即註冊"})]}),i.length!==n&&!v&&t.jsx(R,{sx:{width:"100%",marginBottom:"30px"},children:t.jsx(st,{activeStep:n,alternativeLabel:!0,children:i.map(a=>t.jsx(Me,{children:t.jsx(Oe,{children:a})},a))})}),n===0&&!v&&t.jsxs(R,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,sx:{m:"auto",width:"80%"},justifyContent:"center",onSubmit:C,children:[t.jsx(A,{id:"signEmail",label:"註冊信箱",variant:"outlined",placeholder:"abc@example.com",maxLength:50,autoComplete:"username",value:o.email,onChange:a=>f("email",a.target.value),error:s.emailErr,helperText:s.emailErr?"信箱不得為空":""}),t.jsxs(B,{variant:"outlined",error:!!s.pwdErr,children:[t.jsx(_,{htmlFor:"signPwd",children:"密碼"}),t.jsx(J,{id:"signPwd",type:L?"text":"password",endAdornment:t.jsx(K,{position:"end",children:t.jsx(Q,{"aria-label":"toggle password visibility",onClick:()=>{w(a=>!a)},onMouseDown:g,children:L?t.jsx(X,{}):t.jsx(ee,{})})}),label:"Password",maxLength:50,placeholder:"請輸入8碼以上密碼",autoComplete:"old-password",value:o.password,onChange:a=>f("password",a.target.value)}),s.pwdErr&&t.jsx(z,{error:!0,children:"密碼不得為空"})]}),t.jsxs(B,{variant:"outlined",error:!!s.checkPwdErr,children:[t.jsx(_,{htmlFor:"checkPwd",children:"確認密碼"}),t.jsx(J,{id:"checkPwd",type:S?"text":"password",endAdornment:t.jsx(K,{position:"end",children:t.jsx(Q,{"aria-label":"toggle password visibility",onClick:()=>{E(a=>!a)},onMouseDown:g,children:S?t.jsx(X,{}):t.jsx(ee,{})})}),label:"確認密碼",maxLength:50,placeholder:"請輸入8碼以上密碼",autoComplete:"new-password",value:o.checkPassWord,onChange:a=>f("checkPassWord",a.target.value)}),s.checkPwdErr&&t.jsx(z,{error:!0,children:s.checkPwdErr})]}),t.jsx(V,{variant:"outlined",size:"large",type:"submit",button:"primary",color:"primary",onClick:I,children:"下一步"})]}),n===1&&!v&&t.jsxs(R,{component:"form",noValidate:!0,autoComplete:"off",display:"flex",flexDirection:"column",gap:2,sx:{m:"auto",width:"80%"},justifyContent:"center",onSubmit:C,children:[t.jsx(A,{id:"name",label:"姓名",variant:"outlined",placeholder:"陳大明",maxLength:50,value:o.name,onChange:a=>f("name",a.target.value),error:s.nameErr,helperText:s.nameErr?"姓名不得為空":""}),t.jsx(A,{id:"phone",label:"手機",variant:"outlined",placeholder:"0912345678",maxLength:10,value:o.phone,onChange:a=>f("phone",a.target.value),error:s.phoneErr,helperText:s.phoneErr?"手機不得為空":""}),t.jsx(ve,{dateAdapter:be,adapterLocale:"zh-tw",children:t.jsx(fe,{label:"生日",format:"YYYY/MM/DD",maxDate:ct,minDate:ne("1911-01-01"),slotProps:{textField:{helperText:s.birthdayErr?"生日不得為空":"",error:s.birthdayErr}},onChange:a=>f("birthday",a)})}),t.jsxs(R,{display:"flex",gap:2,children:[t.jsxs(B,{sx:{flex:1},error:!!s.countryErr,children:[t.jsx(_,{id:"country",children:"行政區"}),t.jsx(te,{labelId:"country",id:"country",value:o.country,onChange:a=>{f("country",a.target.value),y(a.target.value)},autoWidth:!0,label:"行政區",children:Se.map((a,p)=>t.jsx(Y,{value:a,children:a},p))}),s.countryErr&&t.jsx(z,{children:"行政區不得為空"})]}),t.jsxs(B,{sx:{flex:1},error:!!s.cityErr,children:[t.jsx(_,{id:"city",children:"鄉鎮"}),t.jsxs(te,{labelId:"city",id:"city",value:o.city,onChange:a=>f("city",a.target.value),autoWidth:!0,label:"鄉鎮",children:[t.jsx(Y,{value:"0",disabled:!0,children:"請先選擇行政區"},"none"),P&&P.map((a,p)=>t.jsx(Y,{value:a.zipcode,children:a.city},p))]}),s.cityErr&&t.jsx(z,{children:"鄉鎮不得為空"})]})]}),t.jsx(A,{id:"address",variant:"outlined",placeholder:"請輸入詳細地址",value:o.address,onChange:a=>f("address",a.target.value.toString()),error:s.addressErr,helperText:s.addressErr?"地址不得為空":""}),d&&t.jsxs(z,{className:"allErrMsg",error:!0,children:["請重新確認：",d]}),t.jsxs(R,{display:"flex",justifyContent:" space-between",children:[t.jsx(V,{variant:"outlined",size:"large",type:"submit",button:"primary",color:"primary",onClick:a=>{a.preventDefault(),l(p=>p-1)},children:"上一步"}),t.jsx(V,{variant:"contained",size:"large",type:"submit",button:"primary",color:"primary",children:"完成註冊"})]})]}),!v&&t.jsxs("p",{className:"regLink",children:["已有會員嗎?",t.jsx(me,{href:"#/login",children:"前往登入"})]}),v&&t.jsx(V,{sx:{display:"block",m:"0 auto",width:"80%",lineHeight:"30px",textAlign:"center"},variant:"contained",href:"#/login",children:"前往登入"})]})]})});export{bt as default};
