import{f as b,b as s,_ as n,K as v}from"./index-CVkWFu2v.js";import{r as j,m as k,a as E}from"./mergeSlotProps-C0Y4RLEe.js";function W(e){return b}const L=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],N=["component","slots","slotProps"],R=["component"];function q(e,o){const{className:x,elementType:_,ownerState:p,externalForwardedProps:l,getSlotOwnerState:a,internalForwardedProps:d}=o,F=s(o,L),{component:c,slots:t={[e]:void 0},slotProps:O={[e]:void 0}}=l,T=s(l,N),P=t[e]||_,r=j(O[e],p),i=k(n({className:x},F,{externalForwardedProps:e==="root"?T:void 0,externalSlotProps:r})),{props:{component:u},internalRef:g}=i,f=s(i.props,R),h=v(g,r==null?void 0:r.ref,o.ref),m=a?a(f):{},y=n({},p,m),S=e==="root"?u||c:u,w=E(P,n({},e==="root"&&!c&&!t[e]&&d,e!=="root"&&!t[e]&&d,f,S&&{as:S},{ref:h}),y);return Object.keys(m).forEach(C=>{delete w[C]}),[P,w]}export{W as c,q as u};
