import { styled } from "@mui/material/styles";
import bannerImage from "assets/png/banner.png";

export const HomeWrapper = styled("div")(
  ({ theme }) => `
  
  background-color:${theme.color.primaryTint};
  padding-bottom: 30px;
  
  .carousel {
    height: 400px;
    background-image: url(${bannerImage});
    background-size: cover;
    margin-bottom: 30px;
  }

  .title{
    font-size: 18px;
    font-weight: bold;
  }
  
  .desc {
    color: ${theme.color.primaryBase};
    font-size: 32px;
    font-weight: 700;
    margin-bottom:40px;
  }

`
);
