import{i as $,j as e,s as c,r as x,R as z,I as p,P as y,o as I,p as M,k as W,q as Y,t as q}from"./index-6Q1VMq0B.js";import{r as C,S as F,B as G,t as H}from"./format-BLJK8mE6.js";import{M as U,B as w,I as V}from"./TextField-CqJ-xOiK.js";import{B as j}from"./Box-Cgpe5tOo.js";import{d as D,L as X,A as J,D as B}from"./AdapterDayjs-BD0-p5wX.js";var R={},K=$;Object.defineProperty(R,"__esModule",{value:!0});var O=R.default=void 0,Q=K(C()),Z=e;O=R.default=(0,Q.default)((0,Z.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var S={},ee=$;Object.defineProperty(S,"__esModule",{value:!0});var A=S.default=void 0,oe=ee(C()),te=e;A=S.default=(0,oe.default)((0,te.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add");const se=c(U)(({theme:o})=>`
  
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
  
  `),re=c("div")(({theme:o})=>`
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

`),P=x.memo(o=>{const r=["Room1.jpg","Room2.jpg","Room3.jpg","Room4.jpg","Room5.jpg","Room6.jpg","Room7.jpg","Room8.jpg"],[l,t]=z.useState(!1),[a,n]=z.useState(0),f=()=>t(!1),d=s=>{n(s),t(!0)},g={customPaging:function(s){return e.jsx("img",{src:`${p}/jpg/Room${s+1}.jpg`})},dots:!0,dotsClass:"slick-dots slick-thumb",infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:a};return e.jsxs(re,{children:[e.jsx("div",{className:"left",children:e.jsx("img",{onClick:()=>d(0),src:`${p}/jpg/${r[0]}`,className:"img hover-mask"},0)}),e.jsxs("div",{className:"center",children:[e.jsx("img",{onClick:()=>d(1),src:`${p}/jpg/${r[1]}`,className:"img hover-mask "},1),e.jsx("img",{onClick:()=>d(2),src:`${p}/jpg/${r[2]}`,className:"img hover-mask "},2)]}),e.jsxs("div",{className:"right",children:[e.jsx("img",{onClick:()=>d(3),src:`${p}/jpg/${r[3]}`,className:"img hover-mask "},3),e.jsx("img",{onClick:()=>d(4),src:`${p}/jpg/${r[4]}`,className:"img hover-mask "},4)]}),e.jsx(w,{className:"more",variant:"outlined",size:"large",onClick:()=>d(0),children:"查看更多"}),e.jsx(se,{open:l,onClose:f,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(j,{className:"boxModal",children:[e.jsx(w,{className:"close",size:"medium",onClick:f,children:"X"}),e.jsx("div",{className:"slider-container"}),e.jsx(F,{...g,children:r.map((s,i)=>e.jsx("img",{src:`${p}/jpg/${s}`,className:"img"},i))})]})})]})});P.propTypes={imgList:y.array};const ie=c("div")(({theme:o})=>`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    border-radius: 20px;
    padding:10px 20px;
    line-height: 2;
    margin-bottom: 8%;
    
    .item{
      display: flex;
      width: 140px;
    }
  `);var N={},ae=$;Object.defineProperty(N,"__esModule",{value:!0});var T=N.default=void 0,ne=ae(C()),le=e;T=N.default=(0,ne.default)((0,le.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const u=x.memo(o=>{const{info:r,style:l}=o;return e.jsx(ie,{style:l,children:r.map((t,a)=>e.jsxs("span",{className:"item",children:[e.jsx(T,{sx:{paddingRight:"10px"},color:"primary"}),t]},a))})});u.propTypes={info:y.array,style:y.object};const h=c("div")(({theme:o})=>`
  ${o.components.RoomInfoTitle}
  font-size:24px;
  font-weight: 800;
  margin-bottom: 15px;
  `),k=["市井","市井市井","市井","市井市井","市井","市井市井","市井","市井","市井市井","市井","市井市井"],de=x.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(h,{children:"房型基本資訊"}),e.jsx(G,{style:{marginBottom:"48px"}}),e.jsx(h,{children:"房間格局"}),e.jsx(u,{info:k}),e.jsx(h,{children:"房內設備"}),e.jsx(u,{info:k}),e.jsx(h,{children:"備品提供"}),e.jsx(u,{info:k}),e.jsx(h,{children:"訂房須知"}),e.jsxs("ol",{children:[e.jsx("li",{children:"請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 "}),e.jsx("li",{children:"若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 "}),e.jsx("li",{children:"請愛惜我們的房間與公共空間，並保持整潔。 "}),e.jsx("li",{children:"如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 "}),e.jsx("li",{children:"我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。"}),e.jsx("li",{children:"請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。"}),e.jsx("li",{children:"我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。"}),e.jsx("li",{children:"為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。"})]})]})),ce=c(j)(({theme:o})=>`
 
  background-color:${o.color.primaryTint};
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
  `),pe=c(j)(({theme:o})=>`
  margin-right: 70px;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `),xe=c(j)(({theme:o})=>`
  min-width: 300px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  background-color:white;
  padding: 30px;
  color:${o.textColor.black80};

  .subtitle{
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 2px solid ${o.textColor.black40};
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
    color:${o.color.primaryBase};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  `),_=c(V)(({theme:o})=>`
  color:${o.textColor.black60};
  border:1px solid ${o.textColor.black40};
  `);var E={exports:{}};(function(o,r){(function(l,t){o.exports=t()})(I,function(){return function(l,t){t.prototype.isSameOrAfter=function(a,n){return this.isSame(a,n)||this.isAfter(a,n)}}})})(E);var me=E.exports;const he=M(me);var L={exports:{}};(function(o,r){(function(l,t){o.exports=t()})(I,function(){return function(l,t){t.prototype.isSameOrBefore=function(a,n){return this.isSame(a,n)||this.isBefore(a,n)}}})})(L);var fe=L.exports;const ge=M(fe);D.extend(he);D.extend(ge);const m=D(),ye=x.memo(o=>{const r=W(),{roomId:l}=Y();x.useEffect(()=>{r(q(l))},[r]);const[t,a]=x.useState({startDate:m,endDate:m.add(5,"day"),people:2}),[n,f]=x.useState({date:!1}),d=(s,i)=>{let b=!1;switch(s){case"startDate":b=i.isSameOrAfter(t.endDate,"day");break;case"endDate":b=i.isSameOrBefore(t.startDate,"day");break}a(v=>({...v,[s]:i})),f(v=>({...v,endDate:b}))},g=s=>{a(i=>s==="remove"?t.people===1?i:{...i,people:i.people-1}:s==="add"?t.people>=4?i:{...i,people:i.people+1}:i)};return e.jsxs(ce,{children:[e.jsx("div",{className:"top",children:e.jsx(P,{})}),e.jsxs("div",{className:"bottom",children:[e.jsxs(pe,{children:[e.jsx("div",{className:"name",children:"尊爵雙人房"}),e.jsx("div",{className:"desc",children:"享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。"}),e.jsx(de,{})]}),e.jsxs(xe,{children:[e.jsx("div",{className:"subtitle",children:"預定房型"}),e.jsx("div",{className:"name",children:"尊爵雙人房"}),e.jsx("div",{className:"desc",children:"享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。"}),e.jsxs(X,{dateAdapter:J,adapterLocale:"zh-tw",children:[e.jsx(B,{sx:{marginBottom:"18px"},label:"入住日",format:"YYYY/MM/DD",minDate:m,maxDate:m.add(1,"year"),value:t.startDate,onChange:s=>d("startDate",s)}),e.jsx(B,{sx:{marginBottom:"25px"},label:"退房日",format:"YYYY/MM/DD",minDate:m,maxDate:m.add(1,"year"),value:t.endDate,slotProps:{textField:{helperText:n.endDate?"退房日不得早於或等於入住日":"",error:n.endDate}},onChange:s=>d("endDate",s)})]}),e.jsxs("div",{className:"peopleCount",children:[e.jsx("span",{children:"人數"}),e.jsxs("div",{className:"countBox",children:[e.jsx(_,{size:"small",color:"primary",onClick:()=>g("remove"),children:e.jsx(O,{})}),e.jsx("span",{className:"num",children:t.people}),e.jsx(_,{size:"small",color:"primary",onClick:()=>g("add"),children:e.jsx(A,{})})]})]}),e.jsxs("div",{className:"price",children:["NT ",H(1e4,!0)]}),e.jsx(w,{size:"large",variant:"contained",fullWidth:!0,children:"立即預訂"})]})]})]})});export{ye as default};
