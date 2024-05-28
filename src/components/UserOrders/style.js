import { styled } from '@mui/material/styles'

export const UserOrderWrapper = styled('div')(
  ({ theme }) => `
  display: flex;
`
)

export const LeftWrapper = styled('div')(
  ({ theme }) => `
  flex: 1;
  margin-right: 50px;
  position: relative;

  .hr{
    margin: 30px 0;
  }

  .absolute {
    position: absolute;
    right: 0;
  }
`
)

export const RightWrapper = styled('div')(
  ({ theme }) => `
  ${theme.components.RightBoxWrapper};
  padding: 25px;
  min-width: 360px;
`
)
