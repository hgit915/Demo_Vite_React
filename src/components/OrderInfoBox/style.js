import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const OrderInfoBoxWrapper = styled(Box)(
  ({ theme, status }) => `

  width: 100%;
  .orderNo {
    font-size: 12px;
    color: ${theme.textColor.black60};
  }

  .orderHint {
    display:inline-block;
    font-weight: bold;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 10px;
    padding: 5px;
    background-color: ${status > -1 ? theme.color.primary80 : theme.textColor.ErrorBase};
    color: ${theme.textColor.white};
    
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
