import { styled } from "@mui/material";

export const InfoIconWrapper = styled("div")(
  ({ theme }) => `

  display: flex;
  flex-direction: row;
 
  > div{
    width: 80px;
    height: 80px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:${theme.textColor.white};
    border: 1px solid ${theme.color.primary40};
    border-radius: 8px;
  }
`
);
