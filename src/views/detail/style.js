import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'

export const DetailWrapper = styled(Box)(
  ({ theme }) => `
 
  ${theme.components.ContainerWrapper};
  `
)

export const LeftWrapper = styled(Box)(
  ({ theme }) => `
 ${theme.components.LeftBoxWrapper};
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
  ${theme.components.RightBoxWrapper};

  .subtitle{
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 2px solid ${theme.textColor.black40};
  }

  .name{
    font-size: 28px;
    font-weight: bold;
    margin-top: 25px ;
  }

  .desc{
    font-size: 14px;
    margin-bottom: 25px;
  }

  .peopleCount {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .num{
    font-size: 20px;
    vertical-align: middle;
    margin:0 15px;
  }
  
  .price {
    color:${theme.color.primaryBase};
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  `
)

export const IconButtons = styled(IconButton)(
  ({ theme }) => `
  color:${theme.textColor.black60};
  border:1px solid ${theme.textColor.black40};
  `
)
