import { styled } from '@mui/material/styles'
import { ModalWrapper } from '@/components/CarouselModal/style'

export const OrderModalWrapper = styled(ModalWrapper)(
  ({ theme, errMsg }) => `
  .boxModal{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50%;
    justify-content: ${errMsg ? 'space-evenly' : 'center'}} 

  .errMsg {
    color: ${theme.textColor.ErrorBase} ;
    font-size: 14px ;
  }

  .processing {
    font-weight: bold ;
    margin-top: 20px ;
    font-size: 14px;
  }
`
)
