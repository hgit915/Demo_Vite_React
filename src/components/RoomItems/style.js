import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const RoomItemsWrapper = styled(Box)(
  ({ theme }) => `

  display: flex;
  height: 350px;
  background-color: ${theme.textColor.white};
  border-radius: 17px;
  padding: 20px 25px;
  margin-bottom: 30px;
  ${theme.mixins.boxShadow};

  > div{
    flex: 1;
  }

  .info{
    cursor: pointer;
  }

  .title{
    font-weight: bold;
    font-size: 26px;
  }

  .subTitle{
    color: ${theme.textColor.black80};
    font-size: 14px;
    margin: 5px auto 20px ;
  }

  .linear{
    height: 3px;
    background: linear-gradient(to right, #BE9C7C, ${theme.textColor.white});
    margin: 20px auto ;
  }

  .price{
    height: 70px;
    color:${theme.color.primaryBase};
    display: flex;
    font-size: 25px;
    font-weight: 700;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  }
`
);
