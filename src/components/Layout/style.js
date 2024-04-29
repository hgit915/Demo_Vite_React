import { styled } from "@mui/system";

export const LayoutWrapper = styled("div")(
  ({ theme }) => `
  #root {
    max-width: 1280px;
    min-width: 700px;
    margin: 0 auto;
    padding: 2rem;
    color: red;
    // text-align: center;
  }

  @media (prefers-reduced-motion: no-preference) {
    a:nth-of-type(2) .logo {
      animation: logo-spin infinite 20s linear;
    }
  }
`
);
