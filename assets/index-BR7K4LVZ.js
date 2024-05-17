import{g as Q,o as Z,p as Y,s as x,_ as y,q as M,r as p,f as ee,b as te,j as e,d as oe,e as ie,i as R,R as A,I as h,P as S,t as q,v as F,k as ae,w as se,x as re,l as ne}from"./index-RMHZEOjW.js";import{r as D,S as le,B as de,t as ce}from"./format-COQRO5Vx.js";import{M as pe,B as I,I as me}from"./TextField-DW67TNhU.js";import{B as w}from"./Box-Zcqd4hXM.js";import{a as xe,d as _,L as he,A as fe,D as O}from"./AdapterDayjs-DTKivd7R.js";function ue(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ge(t){return parseFloat(t)}function be(t){return Q("MuiSkeleton",t)}Z("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const ve=["animation","className","component","height","style","variant","width"];let k=t=>t,P,T,L,E;const je=t=>{const{classes:o,variant:a,animation:s,hasChildren:i,width:l,height:r}=t;return ie({root:["root",a,s,i&&"withChildren",i&&!l&&"fitContent",i&&!r&&"heightAuto"]},be,o)},ye=Y(P||(P=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ke=Y(T||(T=k`
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
`)),we=x("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:a}=t;return[o.root,o[a.variant],a.animation!==!1&&o[a.animation],a.hasChildren&&o.withChildren,a.hasChildren&&!a.width&&o.fitContent,a.hasChildren&&!a.height&&o.heightAuto]}})(({theme:t,ownerState:o})=>{const a=ue(t.shape.borderRadius)||"px",s=ge(t.shape.borderRadius);return y({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:xe(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},o.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${a}/${Math.round(s/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},o.variant==="circular"&&{borderRadius:"50%"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.hasChildren&&{"& > *":{visibility:"hidden"}},o.hasChildren&&!o.width&&{maxWidth:"fit-content"},o.hasChildren&&!o.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&M(L||(L=k`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ye),({ownerState:t,theme:o})=>t.animation==="wave"&&M(E||(E=k`
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
    `),ke,(o.vars||o).palette.action.hover)),Ce=p.forwardRef(function(o,a){const s=ee({props:o,name:"MuiSkeleton"}),{animation:i="pulse",className:l,component:r="span",height:c,style:f,variant:m="text",width:u}=s,b=te(s,ve),n=y({},s,{animation:i,component:r,variant:m,hasChildren:!!b.children}),d=je(n);return e.jsx(we,y({as:r,ref:a,className:oe(d.root,l),ownerState:n},b,{style:y({width:u,height:c},f)}))}),W=Ce;var N={},$e=R;Object.defineProperty(N,"__esModule",{value:!0});var X=N.default=void 0,Se=$e(D()),Ie=e;X=N.default=(0,Se.default)((0,Ie.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var z={},Re=R;Object.defineProperty(z,"__esModule",{value:!0});var G=z.default=void 0,De=Re(D()),_e=e;G=z.default=(0,De.default)((0,_e.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const Ne=x(pe)(({theme:t})=>`
  
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
  
  `),ze=x("div")(({theme:t})=>`
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

`),H=p.memo(t=>{const{imgList:o}=t,[a,s]=A.useState(!1),[i,l]=A.useState(0),r=()=>s(!1),c=m=>{l(m),s(!0)},f={customPaging:function(m){return e.jsx("img",{src:`${h}/jpg/Room${m+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:i};return e.jsxs(ze,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>c(0),src:`${h}/jpg/${o[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>c(1),src:`${h}/jpg/${o[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>c(2),src:`${h}/jpg/${o[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>c(3),src:`${h}/jpg/${o[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>c(4),src:`${h}/jpg/${o[4]}`,className:"img hover-mask "},4)]}),e.jsx(I,{className:"more",variant:"outlined",size:"large",onClick:()=>c(0),children:"查看更多"}),e.jsx(Ne,{open:a,onClose:r,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(w,{className:"boxModal",children:[e.jsx(I,{className:"close",size:"medium",onClick:r,children:"X"}),e.jsx("div",{className:"slider-container"}),e.jsx(le,{...f,children:o.map((m,u)=>e.jsx("img",{src:`${h}/jpg/${m}`,className:"img"},u))})]})})]})});H.propTypes={imgList:S.array};const Be=x("div")(({theme:t})=>`
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
  `);var B={},Me=R;Object.defineProperty(B,"__esModule",{value:!0});var K=B.default=void 0,Ae=Me(D()),Oe=e;K=B.default=(0,Ae.default)((0,Oe.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const j=p.memo(t=>{const{info:o,style:a}=t;return console.log(t),e.jsx(Be,{style:a,children:o.map((s,i)=>e.jsxs("span",{className:"item",children:[e.jsx(K,{sx:{paddingRight:"10px"},color:"primary"}),s.title]},i))})});j.propTypes={info:S.array,style:S.object};j.defaultProps={info:[],style:{}};const v=x("div")(({theme:t})=>`
  ${t.components.RoomInfoTitle}
  font-size:24px;
  font-weight: 800;
  margin-bottom: 15px;
  `),Pe=p.memo(t=>{const{info:o,basicInfo:a}=t;return console.log(t),e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"房型基本資訊"}),e.jsx(de,{...a,style:{marginBottom:"48px"}}),e.jsx(v,{children:"房間格局"}),e.jsx(j,{info:o.layoutInfo}),e.jsx(v,{children:"房內設備"}),e.jsx(j,{info:o.facilityInfo}),e.jsx(v,{children:"備品提供"}),e.jsx(j,{info:o.amenityInfo}),e.jsx(v,{children:"訂房須知"}),e.jsxs("ol",{children:[e.jsx("li",{children:"請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 "}),e.jsx("li",{children:"若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 "}),e.jsx("li",{children:"請愛惜我們的房間與公共空間，並保持整潔。 "}),e.jsx("li",{children:"如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 "}),e.jsx("li",{children:"我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。"}),e.jsx("li",{children:"請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。"}),e.jsx("li",{children:"我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。"}),e.jsx("li",{children:"為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。"})]})]})}),Te=x(w)(({theme:t})=>`
 
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
  `),Le=x(w)(({theme:t})=>`
  margin-right: 70px;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),Ee=x(w)(({theme:t})=>`
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
  `),U=x(me)(({theme:t})=>`
  color:${t.textColor.black60};
  border:1px solid ${t.textColor.black40};
  `);var V={exports:{}};(function(t,o){(function(a,s){t.exports=s()})(q,function(){return function(a,s){s.prototype.isSameOrAfter=function(i,l){return this.isSame(i,l)||this.isAfter(i,l)}}})})(V);var We=V.exports;const Ue=F(We);var J={exports:{}};(function(t,o){(function(a,s){t.exports=s()})(q,function(){return function(a,s){s.prototype.isSameOrBefore=function(i,l){return this.isSame(i,l)||this.isBefore(i,l)}}})})(J);var Ye=J.exports;const qe=F(Ye);_.extend(Ue);_.extend(qe);const g=_(),Ve=p.memo(t=>{const o=ae(),{roomId:a}=se();p.useEffect(()=>{o(re(a))},[o]);const{detail:s}=ne(n=>n.room),[i,l]=p.useState(null);p.useEffect(()=>{s&&l(s),console.log("come!!!")},[s]);const[r,c]=p.useState({startDate:g,endDate:g.add(5,"day"),people:2}),[f,m]=p.useState({date:!1}),u=(n,d)=>{let C=!1;switch(n){case"startDate":C=d.isSameOrAfter(r.endDate,"day");break;case"endDate":C=d.isSameOrBefore(r.startDate,"day");break}c($=>({...$,[n]:d})),m($=>({...$,endDate:C}))},b=n=>{c(d=>n==="remove"?r.people===1?d:{...d,people:d.people-1}:n==="add"?r.people>=4?d:{...d,people:d.people+1}:d)};return e.jsxs(Te,{children:[e.jsx("div",{className:"top",children:i?e.jsx(H,{imgList:i.imageUrlList}):e.jsx(W,{variant:"rectangular",height:400})}),i?e.jsxs("div",{className:"bottom",children:[e.jsxs(Le,{children:[e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"desc",children:i.description}),e.jsx(Pe,{info:{layoutInfo:i.layoutInfo,facilityInfo:i.facilityInfo,amenityInfo:i.amenityInfo},basicInfo:{areaInfo:i.areaInfo,bedInfo:i.bedInfo,maxPeople:i.maxPeople}})]}),e.jsxs(Ee,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:i.name}),e.jsx("div",{className:"desc",children:i.description}),e.jsxs(he,{dateAdapter:fe,adapterLocale:"zh-tw",children:[e.jsx(O,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:g,maxDate:g.add(1,"year"),value:r.startDate,onChange:n=>u("startDate",n)}),e.jsx(O,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:g,maxDate:g.add(1,"year"),value:r.endDate,slotProps:{textField:{helperText:f.endDate?"退房日不得早於或等於入住日":"",error:f.endDate}},onChange:n=>u("endDate",n)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(U,{size:"small",color:"primary",onClick:()=>b("remove"),children:e.jsx(X,{})}),e.jsx("span",{className:"num",children:r.people}),e.jsx(U,{size:"small",color:"primary",onClick:()=>b("add"),children:e.jsx(G,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",ce(i.price,!0)]}),e.jsx(I,{size:"large",variant:"contained",fullWidth:!0,children:"立即預訂"})]})]}):e.jsx(W,{className:"bottom",variant:"rounded",height:300})]})});export{Ve as default};
