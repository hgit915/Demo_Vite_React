import { styled } from '@mui/material/styles'

export const Title = styled('div')(
  ({ theme, $titleStyle }) => `
    ${theme.components.RoomInfoTitle}
    font-size: ${$titleStyle?.fontSize || '24px'};
    font-weight: 800;
    margin-bottom: ${$titleStyle?.marginBottom || '15px'};
  `
)
