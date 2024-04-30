import { styled } from "@mui/material/styles";
import footerLogo from "assets/svg/logoWhite.svg";

export const FooterWrapper = styled("div")(
  ({ theme }) => `
  color: ${theme.textColor.white};
  background-color: #140f0a;
  height: 180px;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;

  .top {
    flex: 2;
    display: flex;
    flex-dirction: column;

    .footerLogo {
      flex: 4;
      display: inline-block;
      background-image: url(${footerLogo});
      background-repeat: no-repeat;
    }

    .info1,
    .info2 {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  .bottom {
    flex: 1;
    // border: 1px solid red;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
`
);
