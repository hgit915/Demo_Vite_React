import{g as re,p as ne,q as G,s as x,_ as $,t as L,r as p,f as le,b as de,j as e,d as ce,e as pe,h as M,i as _,R as O,I as f,P as k,v as H,w as K,k as me,o as xe,x as he,l as fe,y as ue}from"./index-CvBS-Gfs.js";import{S as ge,B as be}from"./slick-theme-BqzL_dHF.js";import{M as ve,B as R,I as je}from"./TextField-CPPCvWcY.js";import{B as I}from"./Box-gPnVzZZ2.js";import{a as ye,d as w,L as ke,A as we,D as T}from"./AdapterDayjs-CrmZ6t2Y.js";import{t as Ce}from"./format-DTHvS8Na.js";function De(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function $e(t){return parseFloat(t)}function Se(t){return re("MuiSkeleton",t)}ne("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const Ie=["animation","className","component","height","style","variant","width"];let S=t=>t,E,W,U,F;const Ne=t=>{const{classes:o,variant:a,animation:s,hasChildren:r,width:i,height:m}=t;return pe({root:["root",a,s,r&&"withChildren",r&&!i&&"fitContent",r&&!m&&"heightAuto"]},Se,o)},Re=G(E||(E=S`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Me=G(W||(W=S`
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
`)),_e=x("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],a.animation!==!1&&o[a.animation],a.hasChildren&&o.withChildren,a.hasChildren&&!a.width&&o.fitContent,a.hasChildren&&!a.height&&o.heightAuto]}})(({theme:t,ownerState:o})=>{const a=De(t.shape.borderRadius)||"px",s=$e(t.shape.borderRadius);return $({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:ye(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&L(U||(U=S`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Re),({ownerState:t,theme:o})=>t.animation==="wave"&&L(F||(F=S`
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
    `),Me,(o.vars||o).palette.action.hover)),Be=p.forwardRef(function(o,a){const s=le({props:o,name:"MuiSkeleton"}),{animation:r="pulse",className:i,component:m="span",height:n,style:u,variant:d="text",width:h}=s,g=de(s,Ie),b=$({},s,{animation:r,component:m,variant:d,hasChildren:!!g.children}),N=Ne(b);return e.jsx(_e,$({as:m,ref:a,className:ce(N.root,i),ownerState:b},g,{style:$({width:h,height:n},u)}))}),q=Be;var B={},ze=_;Object.defineProperty(B,"__esModule",{value:!0});var V=B.default=void 0,Pe=ze(M()),Ae=e;V=B.default=(0,Pe.default)((0,Ae.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var z={},Ye=_;Object.defineProperty(z,"__esModule",{value:!0});var J=z.default=void 0,Le=Ye(M()),Oe=e;J=z.default=(0,Le.default)((0,Oe.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const Te=x(ve)(({theme:t})=>`
  
    & .boxModal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 50%;
      min-width: 500px;
      background-color: #fff; 
      box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      padding: 30px;
    }
  
    .slick-dots {
      height: 90px;
      position: relative;
      white-space: nowrap;
      padding-left: 4px;
      overflow-x: scroll;
      overflow-y: hidden;
    }
  
    .slick-dots li {
      position: relative;
      display: inline-block;
      width: 100px;
      margin-right: 10px;
      cursor: pointer;
      
      img{
        width:100px;
      }
    }
  
    .close{
      min-width: 35px;
      height: 35px;
      position: absolute;
      top: 0;
      right: 0;
      font-weight: 800;
      font-size: 17px;
      text-align: center;
      padding: 0;
    }
    .slick-prev,.slick-next{
          top: 40%;
    }
    .slick-prev:before, .slick-next:before{
      color:gray;
    }
    .slick-thumb li img {
      filter: grayscale(100%);
    }
    .slick-thumb li.slick-active img {
      filter: grayscale(0);
    }
  
  `),Ee=x("div")(({theme:t})=>`
  font-size:72px;
  display: flex;
  border-radius: 10px;
  overflow-y: hidden;
  position: relative;

  .left {
    flex: 3; 
    margin-right: 10px;
    position: relative;
  }

  .center {
    margin-right: 10px;
  }
 
  .center, .right {
    flex: 1; 
    display: flex;
    gap: 10px;
    flex-direction: column;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .hover-mask {
    transition: transform 0.3s ease;
  }
 
  .hover-mask:hover {
    opacity: 0.6;
    background-color: #000;
  }

  .more {
    position: absolute;
    bottom: 25px;
    right: 25px;
    background-color: white;
    &:hover{
      background-color: white;
    }
  }

`),Q=p.memo(t=>{const{imgList:o}=t,[a,s]=O.useState(!1),[r,i]=O.useState(0),m=()=>s(!1),n=d=>{i(d),s(!0)},u={customPaging:function(d){return e.jsx("img",{src:`${f}/jpg/Room${d+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:r};return e.jsxs(Ee,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>n(0),src:`${f}/jpg/${o[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>n(1),src:`${f}/jpg/${o[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>n(2),src:`${f}/jpg/${o[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>n(3),src:`${f}/jpg/${o[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>n(4),src:`${f}/jpg/${o[4]}`,className:"img hover-mask "},4)]}),e.jsx(R,{className:"more",variant:"outlined",size:"large",onClick:()=>n(0),children:"查看更多"}),e.jsx(Te,{open:a,onClose:m,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(I,{className:"boxModal",children:[e.jsx(R,{className:"close",size:"medium",onClick:m,children:"X"}),e.jsx("div",{className:"slider-container",children:e.jsx(ge,{...u,children:o.map((d,h)=>e.jsx("img",{src:`${f}/jpg/${d}`,className:"img"},h))})})]})})]})});Q.propTypes={imgList:k.array};const We=x("div")(({theme:t})=>`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    border-radius: 10px;
    padding:10px 20px;
    line-height: 2;
    margin-bottom: 8%;
    
    .item{
      display: flex;
      width: 140px;
    }
  `);var P={},Ue=_;Object.defineProperty(P,"__esModule",{value:!0});var Z=P.default=void 0,Fe=Ue(M()),qe=e;Z=P.default=(0,Fe.default)((0,qe.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const y=p.memo(t=>{const{info:o,style:a}=t;return e.jsx(We,{style:a,children:o.map((s,r)=>e.jsxs("span",{className:"item",children:[e.jsx(Z,{sx:{paddingRight:"10px"},color:"primary"}),s.title]},r))})});y.propTypes={info:k.array,style:k.object};y.defaultProps={info:[],style:{}};const j=x("div")(({theme:t})=>`
  ${t.components.RoomInfoTitle}
  font-size:24px;
  font-weight: 800;
  margin-bottom: 15px;
  `),ee=p.memo(t=>{const{info:o,basicInfo:a}=t;return e.jsxs(e.Fragment,{children:[e.jsx(j,{children:"房型基本資訊"}),e.jsx(be,{...a,style:{marginBottom:"48px"}}),e.jsx(j,{children:"房間格局"}),e.jsx(y,{info:o.layoutInfo}),e.jsx(j,{children:"房內設備"}),e.jsx(y,{info:o.facilityInfo}),e.jsx(j,{children:"備品提供"}),e.jsx(y,{info:o.amenityInfo}),e.jsx(j,{children:"訂房須知"}),e.jsxs("ol",{children:[e.jsx("li",{children:"請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 "}),e.jsx("li",{children:"若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 "}),e.jsx("li",{children:"請愛惜我們的房間與公共空間，並保持整潔。 "}),e.jsx("li",{children:"如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 "}),e.jsx("li",{children:"我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。"}),e.jsx("li",{children:"請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。"}),e.jsx("li",{children:"我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。"}),e.jsx("li",{children:"為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。"})]})]})});ee.propTypes={info:k.object,basicInfo:k.object};const Xe=x(I)(({theme:t})=>`
 
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
  `),Ge=x(I)(({theme:t})=>`
  margin-right: 70px;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),He=x(I)(({theme:t})=>`
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
  `),X=x(je)(({theme:t})=>`
  color:${t.textColor.black60};
  border:1px solid ${t.textColor.black40};
  `);var te={exports:{}};(function(t,o){(function(a,s){t.exports=s()})(H,function(){return function(a,s){s.prototype.isSameOrAfter=function(r,i){return this.isSame(r,i)||this.isAfter(r,i)}}})})(te);var Ke=te.exports;const Ve=K(Ke);var oe={exports:{}};(function(t,o){(function(a,s){t.exports=s()})(H,function(){return function(a,s){s.prototype.isSameOrBefore=function(r,i){return this.isSame(r,i)||this.isBefore(r,i)}}})})(oe);var Je=oe.exports;const Qe=K(Je);w.extend(Ve);w.extend(Qe);const D=w(),st=p.memo(()=>{const t=me(),o=xe(),{roomId:a}=he(),{detail:s,isLogin:r}=fe(l=>({detail:l.room.detail,isLogin:l.user.isLogin})),[i,m]=p.useState(null);p.useEffect(()=>{t(ue(a))},[t,a]),p.useEffect(()=>{s&&m(s)},[s]);const[n,u]=p.useState({startDate:"",endDate:"",people:1}),[d,h]=p.useState({startDate:"",endDate:""}),g=(l,c)=>{u(C=>({...C,[l]:c===null?"":new Date(c).toLocaleDateString()}))},b=l=>{u(c=>{const C=l==="remove"?c.people-1:c.people+1;return{...c,people:Math.min(Math.max(C,1),i.maxPeople)}})},N=()=>{r||o("/login"),h({startDate:"",endDate:""});let l="",c=!1;["startDate","endDate"].forEach(v=>{(n[v]===""||n[v]==="Invalid Date")&&(l="日期不得為空或格式有誤",h(se=>({...se,[v]:l})),c=!0)});const{startDate:ae,endDate:ie}=n,A=w(ae),Y=w(ie);A.isSameOrAfter(Y)&&(c=!0,h(v=>({...v,endDate:"退房日不得早於或等於入住日"}))),!c&&o(`/order/roomId=${a}&people=${n.people}&startDate=${A.format("YYYY-MM-DD")}&endDate=${Y.format("YYYY-MM-DD")}`)};return e.jsxs(Xe,{children:[e.jsx("div",{className:"top",children:i?e.jsx(Q,{imgList:i.imageUrlList}):e.jsx(q,{variant:"rectangular",height:400})}),i?e.jsxs("div",{className:"bottom",children:[e.jsxs(Ge,{children:[e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"desc",children:i.description}),e.jsx(ee,{info:{layoutInfo:i.layoutInfo,facilityInfo:i.facilityInfo,amenityInfo:i.amenityInfo},basicInfo:{areaInfo:i.areaInfo,bedInfo:i.bedInfo,maxPeople:i.maxPeople}})]}),e.jsxs(He,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"desc",children:i.description}),e.jsxs(ke,{dateAdapter:we,adapterLocale:"zh-tw",children:[e.jsx(T,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:D,maxDate:D.add(1,"year"),slotProps:{textField:{helperText:d.startDate,error:!!d.startDate}},onChange:l=>g("startDate",l)}),e.jsx(T,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:D,maxDate:D.add(1,"year"),slotProps:{textField:{helperText:d.endDate,error:!!d.endDate}},onChange:l=>g("endDate",l)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(X,{size:"small",color:"primary",onClick:()=>b("remove"),children:e.jsx(V,{})}),e.jsx("span",{className:"num",children:n.people}),e.jsx(X,{size:"small",color:"primary",onClick:()=>b("add"),children:e.jsx(J,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",Ce(i.price,!0)]}),e.jsx(R,{size:"large",variant:"contained",fullWidth:!0,onClick:N,children:r?"立即預訂":"登入會員，立即預訂!"})]})]}):e.jsx(q,{className:"bottom",variant:"rounded",height:300})]})});export{st as default};
