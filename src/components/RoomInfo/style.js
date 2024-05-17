import { styled } from '@mui/material/styles'

export const Title = styled('div')(
  ({ theme }) => `
  ${theme.components.RoomInfoTitle}
  font-size:24px;
  font-weight: 800;
  margin-bottom: 15px;
  `
)
