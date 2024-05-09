import { styled } from '@mui/material/styles'
import { LoginWrapper } from '../login/style'

export const SignWrapper = styled(LoginWrapper)(
  ({ theme }) => `
  
  .largeBoldText {
    font-size: 14px;
    font-weight: bold;
  }
`
)
