import{at as k,au as M,r as L,aa as g,F as W,b as N,j as G,_ as l,d as H,av as U,c as q,aw as z,p as J,ax as K,ag as Q,ay as X}from"./index-CvBS-Gfs.js";const Y=["className","component"];function Z(e={}){const{themeId:s,defaultTheme:t,defaultClassName:u="MuiBox-root",generateClassName:r}=e,p=k("div",{shouldForwardProp:n=>n!=="theme"&&n!=="sx"&&n!=="as"})(M);return L.forwardRef(function(o,a){const c=g(t),S=W(o),{className:v,component:T="div"}=S,B=N(S,Y);return G.jsx(p,l({as:T,ref:a,className:H(v,r?r(u):u),theme:s&&c[s]||c},B))})}const ee=["ownerState"],te=["variants"],oe=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function se(e){return Object.keys(e).length===0}function re(e){return typeof e=="string"&&e.charCodeAt(0)>96}function P(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const ne=q(),ae=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function C({defaultTheme:e,theme:s,themeId:t}){return se(s)?e:s[t]||s}function ie(e){return e?(s,t)=>t[e]:null}function R(e,s){let{ownerState:t}=s,u=N(s,ee);const r=typeof e=="function"?e(l({ownerState:t},u)):e;if(Array.isArray(r))return r.flatMap(p=>R(p,l({ownerState:t},u)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:p=[]}=r;let n=N(r,te);return p.forEach(o=>{let a=!0;typeof o.props=="function"?a=o.props(l({ownerState:t},u,t)):Object.keys(o.props).forEach(c=>{(t==null?void 0:t[c])!==o.props[c]&&u[c]!==o.props[c]&&(a=!1)}),a&&(Array.isArray(n)||(n=[n]),n.push(typeof o.style=="function"?o.style(l({ownerState:t},u,t)):o.style))}),n}return r}function de(e={}){const{themeId:s,defaultTheme:t=ne,rootShouldForwardProp:u=P,slotShouldForwardProp:r=P}=e,p=m=>M(l({},m,{theme:C(l({},m,{defaultTheme:t,themeId:s}))}));return p.__mui_systemSx=!0,(m,n={})=>{U(m,i=>i.filter(d=>!(d!=null&&d.__mui_systemSx)));const{name:o,slot:a,skipVariantsResolver:c,skipSx:S,overridesResolver:v=ie(ae(a))}=n,T=N(n,oe),B=c!==void 0?c:a&&a!=="Root"&&a!=="root"||!1,V=S||!1;let $,w=P;a==="Root"||a==="root"?w=u:a?w=r:re(m)&&(w=void 0);const F=k(m,l({shouldForwardProp:w,label:$},T)),j=i=>typeof i=="function"&&i.__emotion_real!==i||z(i)?d=>R(i,l({},d,{theme:C({theme:d.theme,defaultTheme:t,themeId:s})})):i,b=(i,...d)=>{let O=j(i);const x=d?d.map(j):[];o&&v&&x.push(h=>{const f=C(l({},h,{defaultTheme:t,themeId:s}));if(!f.components||!f.components[o]||!f.components[o].styleOverrides)return null;const y=f.components[o].styleOverrides,_={};return Object.entries(y).forEach(([I,D])=>{_[I]=R(D,l({},h,{theme:f}))}),v(h,_)}),o&&!B&&x.push(h=>{var f;const y=C(l({},h,{defaultTheme:t,themeId:s})),_=y==null||(f=y.components)==null||(f=f[o])==null?void 0:f.variants;return R({variants:_},l({},h,{theme:y}))}),V||x.push(p);const A=x.length-d.length;if(Array.isArray(i)&&A>0){const h=new Array(A).fill("");O=[...i,...h],O.raw=[...i.raw,...h]}const E=F(O,...x);return m.muiName&&(E.muiName=m.muiName),E};return F.withConfig&&(b.withConfig=F.withConfig),b}}const le=J("MuiBox",["root"]),ce=le,ue=K(),me=Z({themeId:Q,defaultTheme:ue,defaultClassName:ce.root,generateClassName:X.generate}),he=me;export{he as B,de as c,P as s};
