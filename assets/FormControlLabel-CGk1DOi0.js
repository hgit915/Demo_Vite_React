import{c as se,_ as c,Y as W,Z as U,$ as re,a0 as ne,a1 as ae,r as v,a2 as le,b as V,j as i,d as T,u as ce,e as _,g as q,a3 as K,z as D,s as z,a4 as Z,a as I,K as ie,f as w}from"./index-6j9zUeTH.js";import{u as J,f as de}from"./TextField-CHQnchov.js";import{a as ue}from"./Button-DL_d1CX-.js";import{b as pe}from"./Box-DmIBPk6T.js";import{c as H}from"./createSvgIcon-Cb_IpOPE.js";import{T as Y}from"./Modal-gMO9npr2.js";import{s as me}from"./styled-CI5rMf7N.js";const he=["component","direction","spacing","divider","children","className","useFlexGap"],fe=se(),be=me("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function ke(e){return ce({props:e,name:"MuiStack",defaultTheme:fe})}function Ce(e,o){const t=v.Children.toArray(e).filter(Boolean);return t.reduce((r,n,s)=>(r.push(n),s<t.length-1&&r.push(v.cloneElement(o,{key:`separator-${s}`})),r),[])}const ge=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],ve=({ownerState:e,theme:o})=>{let t=c({display:"flex",flexDirection:"column"},W({theme:o},U({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=re(o),n=Object.keys(o.breakpoints.values).reduce((l,a)=>((typeof e.spacing=="object"&&e.spacing[a]!=null||typeof e.direction=="object"&&e.direction[a]!=null)&&(l[a]=!0),l),{}),s=U({values:e.direction,base:n}),d=U({values:e.spacing,base:n});typeof s=="object"&&Object.keys(s).forEach((l,a,h)=>{if(!s[l]){const p=a>0?s[h[a-1]]:"column";s[l]=p}}),t=ne(t,W({theme:o},d,(l,a)=>e.useFlexGap?{gap:K(r,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ge(a?s[a]:e.direction)}`]:K(r,l)}}))}return t=ae(o.breakpoints,t),t};function xe(e={}){const{createStyledComponent:o=be,useThemeProps:t=ke,componentName:r="MuiStack"}=e,n=()=>_({root:["root"]},l=>q(r,l),{}),s=o(ve);return v.forwardRef(function(l,a){const h=t(l),k=le(h),{component:p="div",direction:x="column",spacing:F=0,divider:C,children:u,className:f,useFlexGap:m=!1}=k,S=V(k,he),L={direction:x,spacing:F,useFlexGap:m},B=n();return i.jsx(s,c({as:p,ownerState:L,ref:a,className:T(B.root,f)},S,{children:C?Ce(u,C):u}))})}function ye(e){return q("PrivateSwitchBase",e)}D("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Pe=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],$e=e=>{const{classes:o,checked:t,disabled:r,edge:n}=e,s={root:["root",t&&"checked",r&&"disabled",n&&`edge${I(n)}`],input:["input"]};return _(s,ye,o)},Fe=z(ue)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Be=z("input",{shouldForwardProp:Z})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Re=v.forwardRef(function(o,t){const{autoFocus:r,checked:n,checkedIcon:s,className:d,defaultChecked:b,disabled:l,disableFocusRipple:a=!1,edge:h=!1,icon:k,id:p,inputProps:x,inputRef:F,name:C,onBlur:u,onChange:f,onFocus:m,readOnly:S,required:L=!1,tabIndex:B,type:y,value:j}=o,P=V(o,Pe),[R,Q]=pe({controlled:n,default:!!b,name:"SwitchBase",state:"checked"}),$=J(),X=g=>{m&&m(g),$&&$.onFocus&&$.onFocus(g)},ee=g=>{u&&u(g),$&&$.onBlur&&$.onBlur(g)},oe=g=>{if(g.nativeEvent.defaultPrevented)return;const G=g.target.checked;Q(G),f&&f(g,G)};let M=l;$&&typeof M>"u"&&(M=$.disabled);const te=y==="checkbox"||y==="radio",E=c({},o,{checked:R,disabled:M,disableFocusRipple:a,edge:h}),A=$e(E);return i.jsxs(Fe,c({component:"span",className:T(A.root,d),centerRipple:!0,focusRipple:!a,disabled:M,tabIndex:null,role:void 0,onFocus:X,onBlur:ee,ownerState:E,ref:t},P,{children:[i.jsx(Be,c({autoFocus:r,checked:n,defaultChecked:b,className:A.input,disabled:M,id:te?p:void 0,name:C,onChange:oe,readOnly:S,ref:F,required:L,ownerState:E,tabIndex:B,type:y},y==="checkbox"&&j===void 0?{}:{value:j},x)),R?s:k]}))}),Ie=Re,Se=H(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),je=H(i.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ze=H(i.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Le(e){return q("MuiCheckbox",e)}const Me=D("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),O=Me,Ne=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Te=e=>{const{classes:o,indeterminate:t,color:r,size:n}=e,s={root:["root",t&&"indeterminate",`color${I(r)}`,`size${I(n)}`]},d=_(s,Le,o);return c({},o,d)},Ve=z(Ie,{shouldForwardProp:e=>Z(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${I(t.size)}`],t.color!=="default"&&o[`color${I(t.color)}`]]}})(({theme:e,ownerState:o})=>c({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${O.checked}, &.${O.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),_e=i.jsx(je,{}),qe=i.jsx(Se,{}),Ee=i.jsx(ze,{}),Ue=v.forwardRef(function(o,t){var r,n;const s=w({props:o,name:"MuiCheckbox"}),{checkedIcon:d=_e,color:b="primary",icon:l=qe,indeterminate:a=!1,indeterminateIcon:h=Ee,inputProps:k,size:p="medium",className:x}=s,F=V(s,Ne),C=a?h:l,u=a?h:d,f=c({},s,{color:b,indeterminate:a,size:p}),m=Te(f);return i.jsx(Ve,c({type:"checkbox",inputProps:c({"data-indeterminate":a},k),icon:v.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:p}),checkedIcon:v.cloneElement(u,{fontSize:(n=u.props.fontSize)!=null?n:p}),ownerState:f,ref:t,className:T(m.root,x)},F,{classes:m}))}),so=Ue,Oe=xe({createStyledComponent:z("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>w({props:e,name:"MuiStack"})}),De=Oe;function we(e){return q("MuiFormControlLabel",e)}const He=D("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),N=He,Ae=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Ge=e=>{const{classes:o,disabled:t,labelPlacement:r,error:n,required:s}=e,d={root:["root",t&&"disabled",`labelPlacement${I(r)}`,n&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",n&&"error"]};return _(d,we,o)},We=z("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${N.label}`]:o.label},o.root,o[`labelPlacement${I(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${N.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${N.label}`]:{[`&.${N.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Ke=z("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}})),Ye=v.forwardRef(function(o,t){var r,n;const s=w({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:b={},control:l,disabled:a,disableTypography:h,label:k,labelPlacement:p="end",required:x,slotProps:F={}}=s,C=V(s,Ae),u=J(),f=(r=a??l.props.disabled)!=null?r:u==null?void 0:u.disabled,m=x??l.props.required,S={disabled:f,required:m};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof l.props[R]>"u"&&typeof s[R]<"u"&&(S[R]=s[R])});const L=de({props:s,muiFormControl:u,states:["error"]}),B=c({},s,{disabled:f,labelPlacement:p,required:m,error:L.error}),y=Ge(B),j=(n=F.typography)!=null?n:b.typography;let P=k;return P!=null&&P.type!==Y&&!h&&(P=i.jsx(Y,c({component:"span"},j,{className:T(y.label,j==null?void 0:j.className),children:P}))),i.jsxs(We,c({className:T(y.root,d),ownerState:B,ref:t},C,{children:[v.cloneElement(l,S),m?i.jsxs(De,{display:"block",children:[P,i.jsxs(Ke,{ownerState:B,"aria-hidden":!0,className:y.asterisk,children:[" ","*"]})]}):P]}))}),ro=Ye;export{so as C,ro as F};