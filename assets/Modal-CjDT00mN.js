import{b as ae,_ as x,K as W,r as a,j as I,aq as ee,ar as he,g as be,B as ge,s as ce,ap as xe,f as Ee,d as te,e as ve}from"./index-CVkWFu2v.js";import{o as O,u as ne,e as V,a as oe,h as re}from"./Box-DosX6QM1.js";import{r as Pe,m as Re,a as ye,e as Te}from"./mergeSlotProps-C0Y4RLEe.js";function ke(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}const Se=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function se(e){var t;const{elementType:o,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:r=!1}=e,i=ae(e,Se),c=r?{}:Pe(n,s),{props:d,internalRef:m}=Re(x({},i,{externalSlotProps:c})),h=W(m,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return ye(o,x({},d,{ref:h}),s)}const Ie=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Ce(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function Ne(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Me(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||Ne(e))}function we(e){const t=[],o=[];return Array.from(e.querySelectorAll(Ie)).forEach((n,s)=>{const r=Ce(n);r===-1||!Me(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Fe(){return!0}function Ae(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=we,isEnabled:i=Fe,open:c}=e,d=a.useRef(!1),m=a.useRef(null),h=a.useRef(null),b=a.useRef(null),R=a.useRef(null),E=a.useRef(!1),u=a.useRef(null),B=W(t.ref,u),N=a.useRef(null);a.useEffect(()=>{!c||!u.current||(E.current=!o)},[o,c]),a.useEffect(()=>{if(!c||!u.current)return;const l=O(u.current);return u.current.contains(l.activeElement)||(u.current.hasAttribute("tabIndex")||u.current.setAttribute("tabIndex","-1"),E.current&&u.current.focus()),()=>{s||(b.current&&b.current.focus&&(d.current=!0,b.current.focus()),b.current=null)}},[c]),a.useEffect(()=>{if(!c||!u.current)return;const l=O(u.current),y=g=>{N.current=g,!(n||!i()||g.key!=="Tab")&&l.activeElement===u.current&&g.shiftKey&&(d.current=!0,h.current&&h.current.focus())},T=()=>{const g=u.current;if(g===null)return;if(!l.hasFocus()||!i()||d.current){d.current=!1;return}if(g.contains(l.activeElement)||n&&l.activeElement!==m.current&&l.activeElement!==h.current)return;if(l.activeElement!==R.current)R.current=null;else if(R.current!==null)return;if(!E.current)return;let v=[];if((l.activeElement===m.current||l.activeElement===h.current)&&(v=r(u.current)),v.length>0){var F,P;const D=!!((F=N.current)!=null&&F.shiftKey&&((P=N.current)==null?void 0:P.key)==="Tab"),A=v[0],C=v[v.length-1];typeof A!="string"&&typeof C!="string"&&(D?C.focus():A.focus())}else g.focus()};l.addEventListener("focusin",T),l.addEventListener("keydown",y,!0);const w=setInterval(()=>{l.activeElement&&l.activeElement.tagName==="BODY"&&T()},50);return()=>{clearInterval(w),l.removeEventListener("focusin",T),l.removeEventListener("keydown",y,!0)}},[o,n,s,i,c,r]);const M=l=>{b.current===null&&(b.current=l.relatedTarget),E.current=!0,R.current=l.target;const y=t.props.onFocus;y&&y(l)},S=l=>{b.current===null&&(b.current=l.relatedTarget),E.current=!0};return I.jsxs(a.Fragment,{children:[I.jsx("div",{tabIndex:c?0:-1,onFocus:S,ref:m,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:B,onFocus:M}),I.jsx("div",{tabIndex:c?0:-1,onFocus:S,ref:h,"data-testid":"sentinelEnd"})]})}function Oe(e){return typeof e=="function"?e():e}const Be=a.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,c]=a.useState(null),d=W(a.isValidElement(n)?n.ref:null,o);if(ne(()=>{r||c(Oe(s)||document.body)},[s,r]),ne(()=>{if(i&&!r)return ee(o,i),()=>{ee(o,null)}},[o,i,r]),r){if(a.isValidElement(n)){const m={ref:d};return a.cloneElement(n,m)}return I.jsx(a.Fragment,{children:n})}return I.jsx(a.Fragment,{children:i&&he.createPortal(n,i)})});function De(e){const t=O(e);return t.body===e?V(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function K(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ie(e){return parseInt(V(e).getComputedStyle(e).paddingRight,10)||0}function Le(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function le(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const c=r.indexOf(i)===-1,d=!Le(i);c&&d&&K(i,s)})}function Y(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function He(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(De(n)){const i=ke(O(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ie(n)+i}px`;const c=O(n).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{o.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${ie(d)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=O(n).body;else{const i=n.parentElement,c=V(n);r=(i==null?void 0:i.nodeName)==="HTML"&&c.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:c})=>{r?i.style.setProperty(c,r):i.style.removeProperty(c)})}}function je(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class $e{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&K(t.modalRef,!1);const s=je(o);le(o,t.mount,t.modalRef,s,!0);const r=Y(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=Y(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=He(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=Y(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&K(t.modalRef,o),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&K(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function Ke(e){return typeof e=="function"?e():e}function _e(e){return e?e.props.hasOwnProperty("in"):!1}const Ue=new $e;function We(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Ue,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:c,children:d,onClose:m,open:h,rootRef:b}=e,R=a.useRef({}),E=a.useRef(null),u=a.useRef(null),B=W(u,b),[N,M]=a.useState(!h),S=_e(d);let l=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(l=!1);const y=()=>O(E.current),T=()=>(R.current.modalRef=u.current,R.current.mount=E.current,R.current),w=()=>{s.mount(T(),{disableScrollLock:n}),u.current&&(u.current.scrollTop=0)},g=oe(()=>{const p=Ke(t)||y().body;s.add(T(),p),u.current&&w()}),v=a.useCallback(()=>s.isTopModal(T()),[s]),F=oe(p=>{E.current=p,p&&(h&&v()?w():u.current&&K(u.current,l))}),P=a.useCallback(()=>{s.remove(T(),l)},[l,s]);a.useEffect(()=>()=>{P()},[P]),a.useEffect(()=>{h?g():(!S||!r)&&P()},[h,P,S,r,g]);const D=p=>f=>{var k;(k=p.onKeyDown)==null||k.call(p,f),!(f.key!=="Escape"||f.which===229||!v())&&(o||(f.stopPropagation(),m&&m(f,"escapeKeyDown")))},A=p=>f=>{var k;(k=p.onClick)==null||k.call(p,f),f.target===f.currentTarget&&m&&m(f,"backdropClick")};return{getRootProps:(p={})=>{const f=Te(e);delete f.onTransitionEnter,delete f.onTransitionExited;const k=x({},f,p);return x({role:"presentation"},k,{onKeyDown:D(k),ref:B})},getBackdropProps:(p={})=>{const f=p;return x({"aria-hidden":!0},f,{onClick:A(f),open:h})},getTransitionProps:()=>{const p=()=>{M(!1),i&&i()},f=()=>{M(!0),c&&c(),r&&P()};return{onEnter:re(p,d==null?void 0:d.props.onEnter),onExited:re(f,d==null?void 0:d.props.onExited)}},rootRef:B,portalRef:F,isTopModal:v,exited:N,hasTransition:S}}function ze(e){return be("MuiModal",e)}ge("MuiModal",["root","hidden","backdrop"]);const qe=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],Ye=e=>{const{open:t,exited:o,classes:n}=e;return ve({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},ze,n)},Ve=ce("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(({theme:e,ownerState:t})=>x({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),Ge=ce(xe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Xe=a.forwardRef(function(t,o){var n,s,r,i,c,d;const m=Ee({name:"MuiModal",props:t}),{BackdropComponent:h=Ge,BackdropProps:b,className:R,closeAfterTransition:E=!1,children:u,container:B,component:N,components:M={},componentsProps:S={},disableAutoFocus:l=!1,disableEnforceFocus:y=!1,disableEscapeKeyDown:T=!1,disablePortal:w=!1,disableRestoreFocus:g=!1,disableScrollLock:v=!1,hideBackdrop:F=!1,keepMounted:P=!1,onBackdropClick:D,open:A,slotProps:C,slots:j}=m,G=ae(m,qe),p=x({},m,{closeAfterTransition:E,disableAutoFocus:l,disableEnforceFocus:y,disableEscapeKeyDown:T,disablePortal:w,disableRestoreFocus:g,disableScrollLock:v,hideBackdrop:F,keepMounted:P}),{getRootProps:f,getBackdropProps:k,getTransitionProps:de,portalRef:ue,isTopModal:fe,exited:X,hasTransition:J}=We(x({},p,{rootRef:o})),$=x({},p,{exited:X}),L=Ye($),_={};if(u.props.tabIndex===void 0&&(_.tabIndex="-1"),J){const{onEnter:H,onExited:U}=de();_.onEnter=H,_.onExited=U}const Q=(n=(s=j==null?void 0:j.root)!=null?s:M.Root)!=null?n:Ve,Z=(r=(i=j==null?void 0:j.backdrop)!=null?i:M.Backdrop)!=null?r:h,z=(c=C==null?void 0:C.root)!=null?c:S.root,q=(d=C==null?void 0:C.backdrop)!=null?d:S.backdrop,pe=se({elementType:Q,externalSlotProps:z,externalForwardedProps:G,getSlotProps:f,additionalProps:{ref:o,as:N},ownerState:$,className:te(R,z==null?void 0:z.className,L==null?void 0:L.root,!$.open&&$.exited&&(L==null?void 0:L.hidden))}),me=se({elementType:Z,externalSlotProps:q,additionalProps:b,getSlotProps:H=>k(x({},H,{onClick:U=>{D&&D(U),H!=null&&H.onClick&&H.onClick(U)}})),className:te(q==null?void 0:q.className,b==null?void 0:b.className,L==null?void 0:L.backdrop),ownerState:$});return!P&&!A&&(!J||X)?null:I.jsx(Be,{ref:ue,container:B,disablePortal:w,children:I.jsxs(Q,x({},pe,{children:[!F&&h?I.jsx(Z,x({},me)):null,I.jsx(Ae,{disableEnforceFocus:y,disableAutoFocus:l,disableRestoreFocus:g,isEnabled:fe,open:A,children:a.cloneElement(u,_)})]}))})}),et=Xe;export{Ae as F,et as M,Be as P,ke as g,se as u};
