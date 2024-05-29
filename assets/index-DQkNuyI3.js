import{s as d,i as b,j as e,r as p,P as r}from"./index-CVkWFu2v.js";import{B as y}from"./index-Flmnt1Ny.js";import{r as g}from"./format-C0N0hoLM.js";const v=d("div")(({theme:i})=>`
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
  `);var a={},I=b;Object.defineProperty(a,"__esModule",{value:!0});var f=a.default=void 0,R=I(g()),B=e;f=a.default=(0,R.default)((0,B.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");const c=p.memo(i=>{const{info:o,style:n}=i;return e.jsx(v,{style:n,children:o.map((t,s)=>e.jsxs("span",{className:"item",children:[e.jsx(f,{sx:{paddingRight:"10px"},color:"primary"}),t.title]},s))})});c.propTypes={info:r.array,style:r.object};c.defaultProps={info:[],style:{}};const l=d("div")(({theme:i,$titleStyle:o})=>`
    ${i.components.RoomInfoTitle}
    font-size: ${(o==null?void 0:o.fontSize)||"24px"};
    font-weight: 800;
    margin-bottom: ${(o==null?void 0:o.marginBottom)||"15px"};
  `),j=p.memo(i=>{const{sectionsInfo:o,basicInfo:n,rule:t,sectionStyle:s,basicStyle:m,infoBoxStyle:h}=i;return e.jsxs(e.Fragment,{children:[e.jsx(l,{$titleStyle:s,children:"房型基本資訊"}),e.jsx(y,{...n,style:m}),o&&o.map((x,u)=>e.jsxs("div",{children:[e.jsx(l,{$titleStyle:s,children:x.title}),e.jsx(c,{style:h,info:x.info})]},u)),t&&e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"訂房須知"}),e.jsxs("ol",{children:[e.jsx("li",{children:"請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 "}),e.jsx("li",{children:"若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 "}),e.jsx("li",{children:"請愛惜我們的房間與公共空間，並保持整潔。 "}),e.jsx("li",{children:"如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 "}),e.jsx("li",{children:"我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。"}),e.jsx("li",{children:"請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。"}),e.jsx("li",{children:"我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。"}),e.jsx("li",{children:"為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。"})]})]})]})});j.propTypes={sectionsInfo:r.array,basicInfo:r.object,rule:r.bool,sectionStyle:r.object,basicStyle:r.object,infoBoxStyle:r.object};j.defaultProps={rule:!1,sectionStyle:{},basicStyle:{},infoBoxStyle:{}};export{j as R};
