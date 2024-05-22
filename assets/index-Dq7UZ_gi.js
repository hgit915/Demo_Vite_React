import{g as ee,p as te,q as T,s as j,_ as k,t as _,r as p,f as ae,b as oe,j as e,d as se,e as re,h as U,i as W,R as B,I as h,P as ie,v as F,w as q,k as ne,o as le,x as de,l as ce,y as me}from"./index-B2_irwuj.js";import{S as pe}from"./slick-theme-BZCS24mA.js";import{C as ue,M as he,R as xe}from"./index-BkU6S6nS.js";import{B as N}from"./TextField-CNXd2Kdx.js";import{B as S}from"./Box-ClYAFuGb.js";import{I as fe}from"./InputAdornment-kPUuUgFh.js";import{a as ge,d as b,L as ve,A as be,D as z}from"./AdapterDayjs-BOezI22k.js";import{t as je}from"./format-CPpTqXeA.js";function Ce(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function De(t){return parseFloat(t)}function ke(t){return ee("MuiSkeleton",t)}te("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ye=["animation","className","component","height","style","variant","width"];let y=t=>t,A,P,Y,L;const Se=t=>{const{classes:a,variant:s,animation:r,hasChildren:i,width:o,height:m}=t;return re({root:["root",s,r,i&&"withChildren",i&&!o&&"fitContent",i&&!m&&"heightAuto"]},ke,a)},$e=T(A||(A=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Ne=T(P||(P=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),we=j("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:s}=t;return[a.root,a[s.variant],s.animation!==!1&&a[s.animation],s.hasChildren&&a.withChildren,s.hasChildren&&!s.width&&a.fitContent,s.hasChildren&&!s.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const s=Ce(t.shape.borderRadius)||"px",r=De(t.shape.borderRadius);return k({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ge(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${s}/${Math.round(r/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&_(Y||(Y=y`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),$e),({ownerState:t,theme:a})=>t.animation==="wave"&&_(L||(L=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Ne,(a.vars||a).palette.action.hover)),Re=p.forwardRef(function(a,s){const r=ae({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:m="span",height:n,style:x,variant:d="text",width:u}=r,f=oe(r,ye),g=k({},r,{animation:i,component:m,variant:d,hasChildren:!!f.children}),$=Se(g);return e.jsx(we,k({as:m,ref:s,className:se($.root,o),ownerState:g},f,{style:k({width:u,height:n},x)}))}),O=Re;var w={},Me=W;Object.defineProperty(w,"__esModule",{value:!0});var X=w.default=void 0,Ie=Me(U()),_e=e;X=w.default=(0,Ie.default)((0,_e.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var R={},Be=W;Object.defineProperty(R,"__esModule",{value:!0});var G=R.default=void 0,ze=Be(U()),Ae=e;G=R.default=(0,ze.default)((0,Ae.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const H=p.memo(t=>{const{imgList:a}=t,[s,r]=B.useState(!1),[i,o]=B.useState(0),m=()=>r(!1),n=d=>{o(d),r(!0)},x={customPaging:function(d){return e.jsx("img",{src:`${h}/jpg/Room${d+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return e.jsxs(ue,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>n(0),src:`${h}/jpg/${a[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>n(1),src:`${h}/jpg/${a[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>n(2),src:`${h}/jpg/${a[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>n(3),src:`${h}/jpg/${a[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>n(4),src:`${h}/jpg/${a[4]}`,className:"img hover-mask "},4)]}),e.jsx(N,{className:"more",variant:"outlined",size:"large",onClick:()=>n(0),children:"查看更多"}),e.jsx(he,{open:s,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(S,{className:"boxModal",children:[e.jsx(N,{className:"close",size:"medium",onClick:m,children:"X"}),e.jsx("div",{className:"slider-container",children:e.jsx(pe,{...x,children:a.map((d,u)=>e.jsx("img",{src:`${h}/jpg/${d}`,className:"img"},u))})})]})})]})});H.propTypes={imgList:ie.array};const Pe=j(S)(({theme:t})=>`
 
  background-color:${t.color.primaryTint};
  padding-top: 30px;

  .top,.bottom{
    margin-bottom:30px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .bottom { 
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 30px 60px;
    margin-top: 60px;
  }
  `),Ye=j(S)(({theme:t})=>`
  margin-right: 70px;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),Le=j(S)(({theme:t})=>`
  min-width: 300px;
  max-width: 350px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  background-color:white;
  padding: 30px;
  color:${t.textColor.black80};

  .subtitle{
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 2px solid ${t.textColor.black40};
  }

  .name{
    font-size: 28px;
    font-weight: bold;
    margin-top: 25px ;
  }

  .desc{
    font-size: 14px;
    margin-bottom: 25px;
  }

  .peopleCount {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .num{
    font-size: 20px;
    vertical-align: middle;
    margin:0 15px;
  }
  
  .price {
    color:${t.color.primaryBase};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  `),E=j(fe)(({theme:t})=>`
  color:${t.textColor.black60};
  border:1px solid ${t.textColor.black40};
  `);var K={exports:{}};(function(t,a){(function(s,r){t.exports=r()})(F,function(){return function(s,r){r.prototype.isSameOrAfter=function(i,o){return this.isSame(i,o)||this.isAfter(i,o)}}})})(K);var Oe=K.exports;const Ee=q(Oe);var V={exports:{}};(function(t,a){(function(s,r){t.exports=r()})(F,function(){return function(s,r){r.prototype.isSameOrBefore=function(i,o){return this.isSame(i,o)||this.isBefore(i,o)}}})})(V);var Te=V.exports;const Ue=q(Te);b.extend(Ee);b.extend(Ue);const D=b(),Je=p.memo(()=>{const t=ne(),a=le(),{roomId:s}=de(),{detail:r,isLogin:i}=ce(l=>({detail:l.room.detail,isLogin:l.user.isLogin})),[o,m]=p.useState(null);p.useEffect(()=>{t(me(s))},[t,s]),p.useEffect(()=>{r&&m(r)},[r]);const[n,x]=p.useState({startDate:"",endDate:"",people:1}),[d,u]=p.useState({startDate:"",endDate:""}),f=(l,c)=>{x(C=>({...C,[l]:c===null?"":new Date(c).toLocaleDateString()}))},g=l=>{x(c=>{const C=l==="remove"?c.people-1:c.people+1;return{...c,people:Math.min(Math.max(C,1),o.maxPeople)}})},$=()=>{u({startDate:"",endDate:""});let l="",c=!1;["startDate","endDate"].forEach(v=>{(n[v]===""||n[v]==="Invalid Date")&&(l="日期不得為空或格式有誤",u(Z=>({...Z,[v]:l})),c=!0)});const{startDate:J,endDate:Q}=n,M=b(J),I=b(Q);if(M.isSameOrAfter(I)&&(c=!0,u(v=>({...v,endDate:"退房日不得早於或等於入住日"}))),!c){if(!i){a("/login");return}a(`/order/roomId=${s}&people=${n.people}&startDate=${M.format("YYYY-MM-DD")}&endDate=${I.format("YYYY-MM-DD")}`)}};return e.jsxs(Pe,{children:[e.jsx("div",{className:"top",children:o?e.jsx(H,{imgList:o.imageUrlList}):e.jsx(O,{variant:"rectangular",height:400})}),o?e.jsxs("div",{className:"bottom",children:[e.jsxs(Ye,{children:[e.jsx("div",{className:"name",children:o.name}),e.jsx("div",{className:"desc",children:o.description}),e.jsx(xe,{sectionsInfo:[{title:"房間格局",info:o.layoutInfo},{title:"房內設備",info:o.facilityInfo},{title:"備品提供",info:o.amenityInfo}],basicInfo:{areaInfo:o.areaInfo,bedInfo:o.bedInfo,maxPeople:o.maxPeople},rule:!0,basicStyle:{marginBottom:"48px"}})]}),e.jsxs(Le,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:o.name}),e.jsx("div",{className:"desc",children:o.description}),e.jsxs(ve,{dateAdapter:be,adapterLocale:"zh-tw",children:[e.jsx(z,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:D,maxDate:D.add(1,"year"),slotProps:{textField:{helperText:d.startDate,error:!!d.startDate}},onChange:l=>f("startDate",l)}),e.jsx(z,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:D,maxDate:D.add(1,"year"),slotProps:{textField:{helperText:d.endDate,error:!!d.endDate}},onChange:l=>f("endDate",l)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(E,{size:"small",color:"primary",onClick:()=>g("remove"),children:e.jsx(X,{})}),e.jsx("span",{className:"num",children:n.people}),e.jsx(E,{size:"small",color:"primary",onClick:()=>g("add"),children:e.jsx(G,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",je(o.price,!0)]}),e.jsx(N,{size:"large",variant:"contained",fullWidth:!0,onClick:$,children:i?"立即預訂":"登入會員，立即預訂!"})]})]}):e.jsx(O,{className:"bottom",variant:"rounded",height:300})]})});export{Je as default};
