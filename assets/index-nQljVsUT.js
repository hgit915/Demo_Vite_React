import{i as u,j as e,s as i,n as f,q as j,h as g,r as v,ah as N,k as b}from"./index-6j9zUeTH.js";import{r as B,p as C}from"./format-BbJTvAiD.js";import{O as I}from"./index-C1iNfd86.js";import{B as p}from"./Box-DmIBPk6T.js";import{g as S}from"./order-DKaHfgIo.js";import{B as T}from"./Button-DL_d1CX-.js";import{S as o}from"./Skeleton-DVqNrLT4.js";import"./createSvgIcon-Cb_IpOPE.js";import"./dayjs.min-Br4wyROy.js";import"./index-CsPyMIsY.js";import"./colorManipulator-B8KiM96s.js";var n={},O=u;Object.defineProperty(n,"__esModule",{value:!0});var x=n.default=void 0,R=O(B()),z=e;x=n.default=(0,R.default)((0,z.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");const c=i(p)(({theme:s})=>`
 
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
  `),d=i(c)(({theme:s})=>`
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
  `),m=i(c)(({theme:s})=>`
  
  ${s.components.RightBoxWrapper}
  `),M=()=>{const s=f(),{params:h}=j(),{orderNo:t}=C(h),l=g();v.useEffect(()=>{t&&l(N(t))},[l,t]);const{orderInfo:r}=b(S),{userInfo:a}=r;return e.jsx(c,{children:r?e.jsxs("div",{className:"bottom",children:[e.jsxs(d,{children:[e.jsxs("div",{className:"successTitle",children:[e.jsx(x,{className:"successIcon"}),"恭喜 ",a.name,"，您已",r.status>-1?"預定":"取消","成功!"]}),e.jsx("p",{className:"hint",children:"我們已將訂房資訊及詳細內容寄到您的電子信箱，入住時記得向櫃檯人員出示訂房人證件唷"}),e.jsx("hr",{className:"hr"}),e.jsx("p",{className:"desc",children:"立即查看您的訂單紀錄"}),e.jsx(T,{variant:"contained",onClick:()=>s("/dashboard/orders"),children:"前往我的訂單"}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"訂購人資訊"}),e.jsx("div",{className:"subTitle",children:"姓名"}),e.jsx("div",{className:"content",children:a.name}),e.jsx("div",{className:"subTitle",children:"手機號碼"}),e.jsx("div",{className:"content",children:a.phone}),e.jsx("div",{className:"subTitle",children:"電子信箱"}),e.jsx("div",{className:"content",children:a.email})]}),e.jsx(m,{children:e.jsx(I,{orderNo:t,...r})})]}):e.jsxs(p,{className:"bottom",children:[e.jsx(d,{children:e.jsx(o,{variant:"rounded",height:300})}),e.jsxs(m,{children:[e.jsx(o,{variant:"rounded",height:150}),e.jsx(o,{}),e.jsx(o,{width:"60%"})]})]})})};export{M as default};