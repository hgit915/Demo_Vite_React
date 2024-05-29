import{B as h,g as k,r as p,s as u,ap as O,a as d,_ as i,f as y,O as V,b as M,j as c,d as m,e as $,N as q}from"./index-CVkWFu2v.js";import{M as G}from"./Modal-CjDT00mN.js";import{M as A}from"./Typography-4Dhy4s7q.js";import{c as J}from"./Box-DosX6QM1.js";function Q(o){return k("MuiDialog",o)}const Z=h("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),W=Z,oo=p.createContext({}),eo=oo,ao=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],to=u(O,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),io=o=>{const{classes:e,scroll:a,maxWidth:t,fullWidth:s,fullScreen:r}=o,n={root:["root"],container:["container",`scroll${d(a)}`],paper:["paper",`paperScroll${d(a)}`,`paperWidth${d(String(t))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return $(n,Q,e)},so=u(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),ro=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${d(a.scroll)}`]]}})(({ownerState:o})=>i({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),no=u(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${d(a.scroll)}`],e[`paperWidth${d(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>i({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),lo=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialog"}),s=V(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":l,BackdropComponent:g,BackdropProps:T,children:N,className:j,disableEscapeKeyDown:S=!1,fullScreen:F=!1,fullWidth:U=!1,maxWidth:_="sm",onBackdropClick:P,onClose:b,open:B,PaperComponent:I=A,PaperProps:R={},scroll:L="paper",TransitionComponent:E=q,transitionDuration:w=r,TransitionProps:Y}=t,X=M(t,ao),f=i({},t,{disableEscapeKeyDown:S,fullScreen:F,fullWidth:U,maxWidth:_,scroll:L}),D=io(f),C=p.useRef(),z=x=>{C.current=x.target===x.currentTarget},H=x=>{C.current&&(C.current=null,P&&P(x),b&&b(x,"backdropClick"))},v=J(l),K=p.useMemo(()=>({titleId:v}),[v]);return c.jsx(so,i({className:m(D.root,j),closeAfterTransition:!0,components:{Backdrop:to},componentsProps:{backdrop:i({transitionDuration:w,as:g},T)},disableEscapeKeyDown:S,onClose:b,open:B,ref:a,onClick:H,ownerState:f},X,{children:c.jsx(E,i({appear:!0,in:B,timeout:w,role:"presentation"},Y,{children:c.jsx(ro,{className:m(D.container),onMouseDown:z,ownerState:f,children:c.jsx(no,i({as:I,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":v},R,{className:m(D.paper,R.className),ownerState:f,children:c.jsx(eo.Provider,{value:K,children:N})}))})}))}))}),$o=lo;function co(o){return k("MuiDialogActions",o)}h("MuiDialogActions",["root","spacing"]);const po=["className","disableSpacing"],uo=o=>{const{classes:e,disableSpacing:a}=o;return $({root:["root",!a&&"spacing"]},co,e)},go=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),xo=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=t,n=M(t,po),l=i({},t,{disableSpacing:r}),g=uo(l);return c.jsx(go,i({className:m(g.root,s),ownerState:l,ref:a},n))}),So=xo;function mo(o){return k("MuiDialogContent",o)}h("MuiDialogContent",["root","dividers"]);const fo=h("MuiDialogTitle",["root"]),ho=fo,bo=["className","dividers"],Do=o=>{const{classes:e,dividers:a}=o;return $({root:["root",a&&"dividers"]},mo,e)},Co=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${ho.root} + &`]:{paddingTop:0}})),vo=p.forwardRef(function(e,a){const t=y({props:e,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=t,n=M(t,bo),l=i({},t,{dividers:r}),g=Do(l);return c.jsx(Co,i({className:m(g.root,s),ownerState:l,ref:a},n))}),Po=vo;export{So as D,$o as a,Po as b,W as d};
