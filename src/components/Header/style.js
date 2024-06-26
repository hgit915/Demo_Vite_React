import { styled } from '@mui/material/styles'

export const HeaderWrapper = styled('div')(
  ({ theme }) => `
  color: ${theme.textColor.black80};
  font-weight: bold;
  font-size: 14px;

  .appHeader {
    display: flex;
    height: 50px;
    border-bottom: 2px solid ${theme.textColor.black40};
  }

  .left {
    flex: 1;
    img {
      height: 100%;
      padding-top: 2px;
      margin-left: 20px;
    }
  }

  .center {
    display: flex;
    align-items: center;
    color: ${theme.color.primaryTint};
  }

  .right {
    max-width: 350px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    
    .welcome {
      color: ${theme.color.primaryBase};
    }

   .list{
      color: ${theme.textColor.black80};
      &:hover {
        color: ${theme.color.primaryBase};
      }
   }
  }

  .profile {
    display: flex;
    justify-content: space-around;
    width: 60px;
    padding: 3px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 18px;
    cursor: pointer;
    ${theme.mixins.boxShadow}
    position: relative
  }

  .panel {
    position: absolute;
    font-weight: bold;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    top: 40px;
    right: 0;
    z-index:999;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  }

    .item {
      display:block;
      height: 30px;
      line-height: 30px;
      color: ${theme.textColor.black80};
      &:hover {
        color: ${theme.color.primaryBase};
      }
    }

    .top,
    .bottom {
      padding: 5px 10px;
    }

    .bottom {
      border-top: 1px solid #ddd;
    }
  
`
)
