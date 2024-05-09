import { styled } from '@mui/material/styles'
import loginBG from 'assets/png/login_bg.png'

export const LoginWrapper = styled('div')(
  ({ theme }) => `
  
  display: flex;
  .sideImg {
    flex:1;
    background-position: center;
    background-image: url(${loginBG});
    background-size: cover;
  }
  .formContent{
    flex: 1;
    background-color: ${theme.color.primaryTint};
    padding: 60px 30px;
  }
  .subTitle{
    margin-bottom:20px;
    text-align:center;
    > span {
      font-size: 38px;
      font-weight: bold;
      line-height:2;
      color:${theme.color.primaryDark}
    }
   }

  .hint{
    display: flex;
    align-items: center;
    justify-content: space-between; 
  }

  .regLink {
    margin-top: 30px;
    margin-left: 53px;
  }
`
)
