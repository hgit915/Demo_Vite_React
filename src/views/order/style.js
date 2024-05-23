import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const OrderWrapper = styled(Box)(
  ({ theme }) => `
 
  background-color:${theme.color.primaryTint};
  padding: 30px 0;
 
  .top,.bottom{
    margin-bottom: 30px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .bottom { 
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0px 60px;
    margin-top: 60px;
  }

  .top {
    font-size:32px;
    font-weight: bold;
  }

  .hr {
    margin: 30px 0;
  }

  .infoTitle{
    font-size: 26px;
    margin-bottom: 30px;
    font-weight: bold;
  }
  
  .subTitle{
    ${theme.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
  }

  .content{
    margin-bottom: 20px;
  }

  .setMemberInfo{
    display:flex;
    justify-content: space-between;
  }

  `
)

export const LeftWrapper = styled(Box)(
  ({ theme }) => `
  margin-right: 70px;
  flex:1;
  .name{
    font-size: 44px;
    font-weight: bold;
  }
  .desc{
    font-size: 16px;
    margin-bottom:80px;
  }
  `
)

export const RightWrapper = styled(Box)(
  ({ theme }) => `
  min-width: 300px;
  max-width: 350px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  background-color:white;
  padding: 30px;
  color:${theme.textColor.black80};

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .priceSection{
    margin-bottom:20px;
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  .priceInfo{
    display: flex;
    justify-content: space-between;
    margin: 20px 0 ;
  }

  .bold {
    font-weight:bold;
  }

  `
)
