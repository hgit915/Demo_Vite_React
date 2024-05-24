import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const OrderInfoBoxWrapper = styled(Box)(
  ({ theme }) => `

  width: 100%;
  .orderNo {
    font-size: 12px;
    color: ${theme.textColor.black60};
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
    ${theme.components.RoomInfoTitle};
    margin-bottom: 10px;
    font-weight: bold;
    &.gray {
      border-color:  ${theme.textColor.black60};
    }
  }

  .price {
    margin-top: 20px;
    margin-bottom: -10px;
  }

  `
)
