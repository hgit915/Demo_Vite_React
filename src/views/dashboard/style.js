import { styled } from '@mui/material/styles'
import dashboardBanner from 'assets/png/dashboardBanner.png'

import avater from 'assets/png/avater.png'
export const DashboardWrapper = styled('div')(
  ({ theme }) => `

  ${theme.components.ContainerWrapper}
  padding: 0 0 30px ;

  .top{
    background-image: url('${dashboardBanner}');
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: 200px; 
  }

  .greeting{
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    font-size: 40px;
    color: ${theme.textColor.white};
    gap: 40px;
    margin-left: 200px;
  }

  .bottom{
    flex-direction: column;
    margin-bottom: 50px;
  }

  .menu {
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid ${theme.textColor.black40};
  }

  .menuEntries {
    font-weight: bold;
    height: 30px;
    margin-right: 20px;
    line-height: 20px;
    color: ${theme.textColor.black80};
    display: inline-block;
    
    &:hover, 
    &.isActive {
      color: ${theme.color.primaryBase};
      border-bottom: 3px solid ;
    }

  }
`
)
