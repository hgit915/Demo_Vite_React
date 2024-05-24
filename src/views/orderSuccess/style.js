import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const OrderSuccessWrapper = styled(Box)(
  ({ theme }) => `
 
  ${theme.components.ContainerWrapper};

  .hr {
    margin: 35px 0;
  }

  .infoTitle{
    font-size: 24px;
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
  `
)

export const LeftWrapper = styled(OrderSuccessWrapper)(
  ({ theme }) => `
  ${theme.components.LeftBoxWrapper};
  .successTitle{
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
  .successIcon {
    color: ${theme.textColor.SuccessBase};
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
  `
)

export const RightWrapper = styled(OrderSuccessWrapper)(
  ({ theme }) => `
  
  ${theme.components.RightBoxWrapper}
  `
)
