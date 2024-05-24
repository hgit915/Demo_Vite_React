import{h as I,i as v,j as e,s as c,r as j,I as y,P as i,t as S,k as T,aA as $,l as B}from"./index-D340iFel.js";import{R as D}from"./index-BJGNN8Id.js";import{B as l}from"./Box-DjHMrn4_.js";import{c as p,f as x,d as f,t as k,p as R}from"./format-XKBLztxm.js";import{g as C}from"./order-D9aBd21W.js";import{B as z}from"./Button-XXMUF6ki.js";import{S as n}from"./Skeleton-CjSVaKCG.js";import"./dayjs.min-B6VooNFb.js";import"./colorManipulator-BMsbfZ6o.js";var d={},O=v;Object.defineProperty(d,"__esModule",{value:!0});var g=d.default=void 0,w=O(I()),W=e;g=d.default=(0,w.default)((0,W.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");const P=c(l)(({theme:s})=>`

  width: 100%;
  .orderNo {
    font-size: 12px;
    color: ${s.textColor.black60};
  }

  .orderHint {
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .orderDesc {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .orderSubTitle {
    ${s.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
    &.gray {
      border-color:  ${s.textColor.black60};
    }
  }

  .price {
    margin-top: 20px;
    margin-bottom: -10px;
  }

  `),b=j.memo(s=>{const{roomId:o,checkInDate:t,checkOutDate:r,peopleNum:a,orderNo:N}=s;return e.jsxs(P,{children:[e.jsxs("div",{className:"orderNo",children:["預定參考編號 : ",N," "]}),e.jsx("p",{className:"orderHint",children:"即將來的行程"}),e.jsx("img",{src:`${y}/jpg/${o.imageUrl}`,alt:""}),e.jsxs("div",{className:"roomInfo",children:[e.jsxs("span",{className:"orderDesc",children:[o.name,": ",p(t,r)," 晚"]}),e.jsxs("span",{className:"orderDesc",children:["｜住宿人數： ",a," 位"]}),e.jsxs("div",{className:"orderSubTitle",children:["入住：",`${x()} ${f(t)}`,"，15:00 後"]}),e.jsxs("div",{className:"orderSubTitle gray",children:["退房：",`${x()} ${f(r)}`,"，12:00 前"]}),e.jsxs("div",{className:"price",children:["NT ",k(o.price*p(t,r),!0)," "]})]}),e.jsx("hr",{className:"hr"}),e.jsx(D,{basicInfo:{areaInfo:o.areaInfo,bedInfo:o.bedInfo,maxPeople:o.maxPeople},sectionsInfo:[{title:"房內設備",info:o.facilityInfo},{title:"備品提供",info:o.amenityInfo}],sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"25px"},infoBoxStyle:{marginBottom:"25px",border:"1px solid #F1EAE4",borderRadius:"10px"}})]})});b.propTypes={roomId:i.object,checkInDate:i.string,checkOutDate:i.string,peopleNum:i.number,orderNo:i.string};const m=c(l)(({theme:s})=>`
 
  ${s.components.ContainerWrapper};

  .hr {
    margin: 35px 0;
  }

  .infoTitle{
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  .subTitle{
    ${s.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
  }

  .content{
    margin-bottom: 20px;
  }
  `),h=c(m)(({theme:s})=>`
  ${s.components.LeftBoxWrapper};
  .successTitle{
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
  .successIcon {
    color: ${s.textColor.SuccessBase};
    margin-right: 10px;
    font-size: 40px;
  }
  .hint {
    font-size: 14px;
    text-align: center;
  }
  .desc{
    font-size: 14px;
    margin-bottom: 10px;
  }
  `),u=c(m)(({theme:s})=>`
  
  ${s.components.RightBoxWrapper}
  `),G=()=>{const{params:s}=S(),{orderNo:o}=R(s),t=T();j.useEffect(()=>{o&&t($(o))},[t,o]);const{orderInfo:r}=B(C),{userInfo:a}=r;return e.jsx(m,{children:r?e.jsxs("div",{className:"bottom",children:[e.jsxs(h,{children:[e.jsxs("div",{className:"successTitle",children:[e.jsx(g,{className:"successIcon"}),"恭喜 ",a.name,"，您已預訂成功!"]}),e.jsx("p",{className:"hint",children:"我們已將訂房資訊及詳細內容寄到您的電子信箱，入住時記得向櫃檯人員出示訂房人證件唷"}),e.jsx("hr",{className:"hr"}),e.jsx("p",{className:"desc",children:"立即查看您的訂單紀錄"}),e.jsx(z,{variant:"contained",children:"前往我的訂單"}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"訂購人資訊"}),e.jsx("div",{className:"subTitle",children:"姓名"}),e.jsx("div",{className:"content",children:a.name}),e.jsx("div",{className:"subTitle",children:"手機號碼"}),e.jsx("div",{className:"content",children:a.phone}),e.jsx("div",{className:"subTitle",children:"電子信箱"}),e.jsx("div",{className:"content",children:a.email})]}),e.jsx(u,{children:e.jsx(b,{orderNo:o,...r})})]}):e.jsxs(l,{className:"bottom",children:[e.jsx(h,{children:e.jsx(n,{variant:"rounded",height:300})}),e.jsxs(u,{children:[e.jsx(n,{variant:"rounded",height:150}),e.jsx(n,{}),e.jsx(n,{width:"60%"})]})]})})};export{G as default};
