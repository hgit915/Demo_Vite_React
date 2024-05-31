import{D as p,g as j,f as F,a9 as N,aA as P,_ as r,a8 as c,r as d,h as G,b as _,aa as x,Y as D,a5 as E,j as I,d as $,e as S}from"./index-BZ1CMoz2.js";const U=p("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),M=U,A=p("MuiListItemIcon",["root","alignItemsFlexStart"]),O=A,H=p("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),R=H;function W(e){return j("MuiMenuItem",e)}const z=p("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),n=z,h=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],Y=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},q=e=>{const{disabled:t,dense:s,divider:a,disableGutters:l,selected:u,classes:o}=e,i=S({root:["root",s&&"dense",t&&"disabled",!l&&"gutters",a&&"divider",u&&"selected"]},W,o);return r({},o,i)},J=F(N,{shouldForwardProp:e=>P(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:Y})(({theme:e,ownerState:t})=>r({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${n.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${n.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${n.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:c(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:c(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${n.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${n.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${M.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${M.inset}`]:{marginLeft:52},[`& .${R.root}`]:{marginTop:0,marginBottom:0},[`& .${R.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&r({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),K=d.forwardRef(function(t,s){const a=G({props:t,name:"MuiMenuItem"}),{autoFocus:l=!1,component:u="li",dense:o=!1,divider:v=!1,disableGutters:i=!1,focusVisibleClassName:k,role:V="menuitem",tabIndex:m,className:w}=a,L=_(a,h),f=d.useContext(x),C=d.useMemo(()=>({dense:o||f.dense||!1,disableGutters:i}),[f.dense,o,i]),g=d.useRef(null);D(()=>{l&&g.current&&g.current.focus()},[l]);const T=r({},a,{dense:C.dense,divider:v,disableGutters:i}),b=q(a),B=E(g,s);let y;return a.disabled||(y=m!==void 0?m:-1),I.jsx(x.Provider,{value:C,children:I.jsx(J,r({ref:B,role:V,tabIndex:y,component:u,focusVisibleClassName:$(b.focusVisible,k),className:$(b.root,w)},L,{ownerState:T,classes:b}))})}),X=K;export{X as M};
