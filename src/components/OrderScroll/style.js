import { styled } from '@mui/material/styles'

import { OrderInfoBoxWrapper } from '../OrderInfoBox/style'

export const OrderScrollWrapper = styled(OrderInfoBoxWrapper)(
  ({ theme }) => `
  height: 80vh;
  overflow-y: auto;
  font-size: 12px;
  
  // scrollbar style
  &::-webkit-scrollbar{
    height: 150px;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${theme.textColor.black40};
    border-radius: 10px;
    
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: ${theme.textColor.black60};;
  }

  
  .items {
    border-bottom: 1px solid ${theme.textColor.black40};
    padding: 15px 0px 5px 20px;
    margin: 0 5px 0px 0px;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: ${theme.textColor.black40};
    }
  }

  .orderNo {
    font-size: 12px;
    margin-bottom: 10px;
  }

  .orderDesc{
    margin-bottom: 10px;
  }

  img {
    width: 70%;
  }

  .orderSubTitle {
    font-weight: normal;
    .cancel {
      color: ${theme.textColor.white};
      background-color: ${theme.textColor.ErrorBase};
      font-weight: bold;
      padding: 5px;
    }
  }

`
)
