import{a1 as H,a2 as X,r as u,N as Q,y as ee,b as R,j as N,_ as d,d as Y,a3 as te,c as ne,a4 as oe,a5 as re,g as se,A as Z,s as ie,a as F,f as le,e as ue,a6 as ae,U as ce,C as fe}from"./index-CJpzbm0m.js";const de=["className","component"];function me(e={}){const{themeId:t,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:o}=e,a=H("div",{shouldForwardProp:i=>i!=="theme"&&i!=="sx"&&i!=="as"})(X);return u.forwardRef(function(s,l){const f=Q(n),h=ee(s),{className:p,component:v="div"}=h,y=R(h,de);return N.jsx(a,d({as:v,ref:l,className:Y(p,o?o(r):r),theme:t&&f[t]||f},y))})}const he=["ownerState"],pe=["variants"],ye=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function ve(e){return Object.keys(e).length===0}function Se(e){return typeof e=="string"&&e.charCodeAt(0)>96}function z(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const xe=ne(),we=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function T({defaultTheme:e,theme:t,themeId:n}){return ve(t)?e:t[n]||t}function ge(e){return e?(t,n)=>n[e]:null}function $(e,t){let{ownerState:n}=t,r=R(t,he);const o=typeof e=="function"?e(d({ownerState:n},r)):e;if(Array.isArray(o))return o.flatMap(a=>$(a,d({ownerState:n},r)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:a=[]}=o;let i=R(o,pe);return a.forEach(s=>{let l=!0;typeof s.props=="function"?l=s.props(d({ownerState:n},r,n)):Object.keys(s.props).forEach(f=>{(n==null?void 0:n[f])!==s.props[f]&&r[f]!==s.props[f]&&(l=!1)}),l&&(Array.isArray(i)||(i=[i]),i.push(typeof s.style=="function"?s.style(d({ownerState:n},r,n)):s.style))}),i}return o}function We(e={}){const{themeId:t,defaultTheme:n=xe,rootShouldForwardProp:r=z,slotShouldForwardProp:o=z}=e,a=c=>X(d({},c,{theme:T(d({},c,{defaultTheme:n,themeId:t}))}));return a.__mui_systemSx=!0,(c,i={})=>{te(c,m=>m.filter(x=>!(x!=null&&x.__mui_systemSx)));const{name:s,slot:l,skipVariantsResolver:f,skipSx:h,overridesResolver:p=ge(we(l))}=i,v=R(i,ye),y=f!==void 0?f:l&&l!=="Root"&&l!=="root"||!1,_=h||!1;let C,g=z;l==="Root"||l==="root"?g=r:l?g=o:Se(c)&&(g=void 0);const B=H(c,d({shouldForwardProp:g,label:C},v)),L=m=>typeof m=="function"&&m.__emotion_real!==m||oe(m)?x=>$(m,d({},x,{theme:T({theme:x.theme,defaultTheme:n,themeId:t})})):m,O=(m,...x)=>{let k=L(m);const b=x?x.map(L):[];s&&p&&b.push(w=>{const S=T(d({},w,{defaultTheme:n,themeId:t}));if(!S.components||!S.components[s]||!S.components[s].styleOverrides)return null;const I=S.components[s].styleOverrides,E={};return Object.entries(I).forEach(([q,J])=>{E[q]=$(J,d({},w,{theme:S}))}),p(w,E)}),s&&!y&&b.push(w=>{var S;const I=T(d({},w,{defaultTheme:n,themeId:t})),E=I==null||(S=I.components)==null||(S=S[s])==null?void 0:S.variants;return $({variants:E},d({},w,{theme:I}))}),_||b.push(a);const D=b.length-x.length;if(Array.isArray(m)&&D>0){const w=new Array(D).fill("");k=[...m,...w],k.raw=[...m.raw,...w]}const U=B(k,...b);return c.muiName&&(U.muiName=c.muiName),U};return B.withConfig&&(O.withConfig=B.withConfig),O}}const be=typeof window<"u"?u.useLayoutEffect:u.useEffect;function Ge(...e){return e.reduce((t,n)=>n==null?t:function(...o){t.apply(this,o),n.apply(this,o)},()=>{})}function He(e,t=166){let n;function r(...o){const a=()=>{e.apply(this,o)};clearTimeout(n),n=setTimeout(a,t)}return r.clear=()=>{clearTimeout(n)},r}function Xe(e,t){var n,r;return u.isValidElement(e)&&t.indexOf((n=e.type.muiName)!=null?n:(r=e.type)==null||(r=r._payload)==null||(r=r.value)==null?void 0:r.muiName)!==-1}function Ie(e){return e&&e.ownerDocument||document}function Ye(e){return Ie(e).defaultView||window}function Re(e,t){typeof e=="function"?e(t):e&&(e.current=t)}let K=0;function _e(e){const[t,n]=u.useState(e),r=e||t;return u.useEffect(()=>{t==null&&(K+=1,n(`mui-${K}`))},[t]),r}const W=re.useId;function Ze(e){if(W!==void 0){const t=W();return e??t}return _e(e)}function qe({controlled:e,default:t,name:n,state:r="value"}){const{current:o}=u.useRef(e!==void 0),[a,c]=u.useState(t),i=o?e:a,s=u.useCallback(l=>{o||c(l)},[]);return[i,s]}function Je(e){const t=u.useRef(e);return be(()=>{t.current=e}),u.useRef((...n)=>(0,t.current)(...n)).current}function Qe(...e){return u.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Re(n,t)})},e)}const G={};function Ce(e,t){const n=u.useRef(G);return n.current===G&&(n.current=e(t)),n}const Ee=[];function Te(e){u.useEffect(e,Ee)}class V{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new V}start(t,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},t)}}function et(){const e=Ce(V.create).current;return Te(e.disposeEffect),e}let A=!0,P=!1;const $e=new V,Ne={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Fe(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&Ne[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ve(e){e.metaKey||e.altKey||e.ctrlKey||(A=!0)}function M(){A=!1}function Ae(){this.visibilityState==="hidden"&&P&&(A=!0)}function Be(e){e.addEventListener("keydown",Ve,!0),e.addEventListener("mousedown",M,!0),e.addEventListener("pointerdown",M,!0),e.addEventListener("touchstart",M,!0),e.addEventListener("visibilitychange",Ae,!0)}function ke(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return A||Fe(t)}function tt(){const e=u.useCallback(o=>{o!=null&&Be(o.ownerDocument)},[]),t=u.useRef(!1);function n(){return t.current?(P=!0,$e.start(100,()=>{P=!1}),t.current=!1,!0):!1}function r(o){return ke(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function ze(e){return se("MuiSvgIcon",e)}Z("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Me=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Pe=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${F(t)}`,`fontSize${F(n)}`]};return ue(o,ze,r)},je=ie("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${F(n.color)}`],t[`fontSize${F(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,a,c,i,s,l,f,h,p,v,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(c=a.pxToRem)==null?void 0:c.call(a,20))||"1.25rem",medium:((i=e.typography)==null||(s=i.pxToRem)==null?void 0:s.call(i,24))||"1.5rem",large:((l=e.typography)==null||(f=l.pxToRem)==null?void 0:f.call(l,35))||"2.1875rem"}[t.fontSize],color:(h=(p=(e.vars||e).palette)==null||(p=p[t.color])==null?void 0:p.main)!=null?h:{action:(v=(e.vars||e).palette)==null||(v=v.action)==null?void 0:v.active,disabled:(y=(e.vars||e).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[t.color]}}),j=u.forwardRef(function(t,n){const r=le({props:t,name:"MuiSvgIcon"}),{children:o,className:a,color:c="inherit",component:i="svg",fontSize:s="medium",htmlColor:l,inheritViewBox:f=!1,titleAccess:h,viewBox:p="0 0 24 24"}=r,v=R(r,Me),y=u.isValidElement(o)&&o.type==="svg",_=d({},r,{color:c,component:i,fontSize:s,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:p,hasSvgAsChild:y}),C={};f||(C.viewBox=p);const g=Pe(_);return N.jsxs(je,d({as:i,className:Y(g.root,a),focusable:"false",color:l,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},C,v,y&&o.props,{ownerState:_,children:[y?o.props.children:o,h?N.jsx("title",{children:h}):null]}))});j.muiName="SvgIcon";function nt(e,t){function n(r,o){return N.jsx(j,d({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=j.muiName,u.memo(u.forwardRef(n))}const Le=Z("MuiBox",["root"]),Oe=Le,De=ae(),Ue=me({themeId:ce,defaultTheme:De,defaultClassName:Oe.root,generateClassName:fe.generate}),ot=Ue;export{ot as B,j as S,nt as a,Ye as b,Ge as c,He as d,Ze as e,qe as f,Je as g,Qe as h,Xe as i,tt as j,We as k,z as l,et as m,Ie as o,Re as s,be as u};
