import{s as x,r as f,j as o,I as b,P as s}from"./index-Btl2Weje.js";import{R as g}from"./index-BCgTqv-T.js";import{B as u}from"./Box-B8YN9VXr.js";import{c as n,f as c,d as l,t as d}from"./format-XGG4ZB3D.js";const I=x(u)(({theme:e,status:r})=>`

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

  `),N=f.memo(e=>{const{roomId:r,checkInDate:t,checkOutDate:a,peopleNum:m,orderNo:p,status:i}=e;return o.jsxs(I,{status:i,children:[o.jsxs("div",{className:"orderNo",children:["預定參考編號 : ",p," "]}),o.jsx("p",{className:"orderHint",children:i>-1?"訂單成立完成":"訂單已取消"}),o.jsx("img",{src:`${b}/jpg/${r.imageUrl}`,alt:""}),o.jsxs("div",{className:"roomInfo",children:[o.jsxs("span",{className:"orderDesc",children:[r.name,": ",n(t,a)," 晚"]}),o.jsxs("span",{className:"orderDesc",children:["｜住宿人數： ",m," 位"]}),o.jsxs("div",{className:"orderSubTitle",children:["入住：",`${c(t)} ${l(t)}`,"，15:00 後"]}),o.jsxs("div",{className:"orderSubTitle gray",children:["退房：",`${c(a)} ${l(a)}`,"，12:00 前"]}),o.jsxs("div",{className:"price",children:["每晚：NT ",d(r.price,!0)," ｜ 總金額：NT"," ",d(r.price*n(t,a),!0)," "]})]}),o.jsx("hr",{className:"hr"}),o.jsx(g,{basicInfo:{areaInfo:r.areaInfo,bedInfo:r.bedInfo,maxPeople:r.maxPeople},sectionsInfo:[{title:"房內設備",info:r.facilityInfo},{title:"備品提供",info:r.amenityInfo}],sectionStyle:{fontSize:"16px"},basicStyle:{marginBottom:"25px"},infoBoxStyle:{marginBottom:"25px",border:"1px solid #F1EAE4",borderRadius:"10px"}})]})});N.propTypes={roomId:s.object,checkInDate:s.string,checkOutDate:s.string,peopleNum:s.number,orderNo:s.string,status:s.number};export{N as O,I as a};
