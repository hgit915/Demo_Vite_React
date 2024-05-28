import{s as e,X as i}from"./index-6j9zUeTH.js";import{a as t}from"./Modal-gMO9npr2.js";const p=e(t)(({theme:o})=>`
  
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
  
  `),s=e("div")(({theme:o})=>`
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

`),r=o=>o.room,n=i([r],o=>({rooms:o.rooms,detail:o.detail}));export{s as C,p as M,n as g};
