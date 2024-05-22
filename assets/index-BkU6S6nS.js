import{s,h as u,i as j,j as e,r as d,P as r}from"./index-B2_irwuj.js";import{M as v}from"./TextField-CNXd2Kdx.js";import{B as y}from"./format-CPpTqXeA.js";const _=s(v)(({theme:i})=>`
  
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
  
  `),C=s("div")(({theme:i})=>`
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

`),w=s("div")(({theme:i})=>`
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
  `);var p={},k=j;Object.defineProperty(p,"__esModule",{value:!0});var f=p.default=void 0,I=k(u()),R=e;f=p.default=(0,I.default)((0,R.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const c=d.memo(i=>{const{info:o,style:n}=i;return e.jsx(w,{style:n,children:o.map((l,t)=>e.jsxs("span",{className:"item",children:[e.jsx(f,{sx:{paddingRight:"10px"},color:"primary"}),l.title]},t))})});c.propTypes={info:r.array,style:r.object};c.defaultProps={info:[],style:{}};const a=s("div")(({theme:i,$titleStyle:o})=>`
    ${i.components.RoomInfoTitle}
    font-size: ${(o==null?void 0:o.fontSize)||"24px"};
    font-weight: 800;
    margin-bottom: ${(o==null?void 0:o.marginBottom)||"15px"};
  `),h=d.memo(i=>{const{sectionsInfo:o,basicInfo:n,rule:l,sectionStyle:t,basicStyle:m,infoBoxStyle:g}=i;return e.jsxs(e.Fragment,{children:[e.jsx(a,{$titleStyle:t,children:"房型基本資訊"}),e.jsx(y,{...n,style:m}),o&&o.map((x,b)=>e.jsxs("div",{children:[e.jsx(a,{$titleStyle:t,children:x.title}),e.jsx(c,{style:g,info:x.info})]},b)),l&&e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"訂房須知"}),e.jsxs("ol",{children:[e.jsx("li",{children:"請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 "}),e.jsx("li",{children:"若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 "}),e.jsx("li",{children:"請愛惜我們的房間與公共空間，並保持整潔。 "}),e.jsx("li",{children:"如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 "}),e.jsx("li",{children:"我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。"}),e.jsx("li",{children:"請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。"}),e.jsx("li",{children:"我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。"}),e.jsx("li",{children:"為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。"})]})]})]})});h.propTypes={sectionsInfo:r.array,basicInfo:r.object,rule:r.bool,sectionStyle:r.object,basicStyle:r.object,infoBoxStyle:r.object};h.defaultProps={rule:!1,sectionStyle:{},basicStyle:{},infoBoxStyle:{}};export{C,_ as M,h as R};
