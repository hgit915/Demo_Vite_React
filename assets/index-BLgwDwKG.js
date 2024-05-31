import{f as x,B as f,r as b,j as o,I as g,P as s}from"./index-BZ1CMoz2.js";import{R as u}from"./index-DopbMdF3.js";import{c as n,f as c,d as l,t as d}from"./format-NwQ4Baad.js";const I=x(f)(({theme:e,status:r})=>`

  width: 100%;
  .orderNo {
    font-size: 12px;
    color: ${e.textColor.black60};
  }

  .orderHint {
    display:inline-block;
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: ${r>-1?e.color.primary80:e.textColor.ErrorBase};
    color: ${e.textColor.white};
    
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
    ${e.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
    &.gray {
      border-color:  ${e.textColor.black60};
    }
  }

  .price {
    margin-top: 20px;
    margin-bottom: -10px;
  }

  `),N=b.memo(e=>{const{roomId:r,checkInDate:t,checkOutDate:a,peopleNum:p,orderNo:m,status:i}=e;return o.jsxs(I,{status:i,children:[o.jsxs("div",{className:"orderNo",children:["預定參考編號 : ",m," "]}),o.jsx("p",{className:"orderHint",children:i>-1?"訂單成立完成":"訂單已取消"}),o.jsx("img",{src:`${g}/jpg/${r.imageUrl}`,alt:""}),o.jsxs("div",{className:"roomInfo",children:[o.jsxs("span",{className:"orderDesc",children:[r.name,": ",n(t,a)," 晚"]}),o.jsxs("span",{className:"orderDesc",children:["｜住宿人數： ",p," 位"]}),o.jsxs("div",{className:"orderSubTitle",children:["入住：",`${c(t)} ${l(t)}`,"，15:00 後"]}),o.jsxs("div",{className:"orderSubTitle gray",children:["退房：",`${c(a)} ${l(a)}`,"，12:00 前"]}),o.jsxs("div",{className:"price",children:["每晚：NT ",d(r.price,!0)," ｜ 總金額：NT"," ",d(r.price*n(t,a),!0)," "]})]}),o.jsx("hr",{className:"hr"}),o.jsx(u,{basicInfo:{areaInfo:r.areaInfo,bedInfo:r.bedInfo,maxPeople:r.maxPeople},sectionsInfo:[{title:"房內設備",info:r.facilityInfo},{title:"備品提供",info:r.amenityInfo}],sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"25px"},infoBoxStyle:{marginBottom:"25px",border:"1px solid #F1EAE4",borderRadius:"10px"}})]})});N.propTypes={roomId:s.object,checkInDate:s.string,checkOutDate:s.string,peopleNum:s.number,orderNo:s.string,status:s.number};export{N as O,I as a};
