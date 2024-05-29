import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'

import AccordionSummary from '@mui/material/AccordionSummary'

export const AccountWrapper = styled(Box)(
  ({ theme }) => `
  .account {
    width: 550px;
  }
  .info {
    width: 550px;
  }
`
)

export const AccordionWrapper = styled(Accordion)(
  ({ theme }) => `
`
)

export const AccordionDetailWrapper = styled(AccordionDetails)(
  ({ theme }) => `
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
)

export const AccordionSummaryWrapper = styled(AccordionSummary)(
  ({ theme }) => `
  border-bottom: 1px solid ${theme.color.primary40}; 
`
)
