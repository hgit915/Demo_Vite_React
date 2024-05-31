import{i as u,j as e,f as n,B as p,q as f,y as j,k as g,r as v,aB as N,l as b,t as B}from"./index-BZ1CMoz2.js";import{r as C,p as I}from"./format-NwQ4Baad.js";import{O as S}from"./index-BLgwDwKG.js";import{g as T}from"./order-s_HJlfo0.js";import{S as o}from"./Skeleton-V1rZhyEo.js";import"./dayjs.min-ZHR2y8fp.js";import"./index-DopbMdF3.js";import"./index-WrW62T7R.js";import"./colorManipulator-lS7wmc76.js";var i={},O=u;Object.defineProperty(i,"__esModule",{value:!0});var x=i.default=void 0,R=O(C()),y=e;x=i.default=(0,R.default)((0,y.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");const c=n(p)(({theme:s})=>`
 
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
  `),d=n(c)(({theme:s})=>`
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
  `),m=n(c)(({theme:s})=>`
  
  ${s.components.RightBoxWrapper}
  `),L=()=>{const s=f(),{params:h}=j(),{orderNo:t}=I(h),l=g();v.useEffect(()=>{t&&l(N(t))},[l,t]);const{orderInfo:r}=b(T),{userInfo:a}=r;return e.jsx(c,{children:r?e.jsxs("div",{className:"bottom",children:[e.jsxs(d,{children:[e.jsxs("div",{className:"successTitle",children:[e.jsx(x,{className:"successIcon"}),"恭喜 ",a.name,"，您已",r.status>-1?"預定":"取消","成功!"]}),e.jsx("p",{className:"hint",children:"我們已將訂房資訊及詳細內容寄到您的電子信箱，入住時記得向櫃檯人員出示訂房人證件唷"}),e.jsx("hr",{className:"hr"}),e.jsx("p",{className:"desc",children:"立即查看您的訂單紀錄"}),e.jsx(B,{variant:"contained",onClick:()=>s("/dashboard/orders"),children:"前往我的訂單"}),e.jsx("hr",{className:"hr"}),e.jsx("div",{className:"infoTitle",children:"訂購人資訊"}),e.jsx("div",{className:"subTitle",children:"姓名"}),e.jsx("div",{className:"content",children:a.name}),e.jsx("div",{className:"subTitle",children:"手機號碼"}),e.jsx("div",{className:"content",children:a.phone}),e.jsx("div",{className:"subTitle",children:"電子信箱"}),e.jsx("div",{className:"content",children:a.email})]}),e.jsx(m,{children:e.jsx(S,{orderNo:t,...r})})]}):e.jsxs(p,{className:"bottom",children:[e.jsx(d,{children:e.jsx(o,{variant:"rounded",height:300})}),e.jsxs(m,{children:[e.jsx(o,{variant:"rounded",height:150}),e.jsx(o,{}),e.jsx(o,{width:"60%"})]})]})})};export{L as default};
