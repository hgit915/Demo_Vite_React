import { styled } from "@mui/material/styles";

export const TestWrapper = styled("div")(
  ({ theme }) => `
  
  .header {
    font-size: 42px;
  }
  
  .img {
    height: 280px;
    border-radius: 25px;
    object-fit: cover;
  }

  // Override react-slick's css
  .slick-list{
    width:400px;
    margin-right:25px;
  }
 
  .slick-dots{
    position: relative;
    bottom: -4px;
  }
`
);
