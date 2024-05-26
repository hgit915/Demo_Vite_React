import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

import logoDark from 'assets/svg/logoDark.svg'
import { OrderModalWrapper } from './style'

const OrderModal = memo((props) => {
  const { isOpen, handleClose } = props
  const { orderErrMsg } = useSelector((state) => ({
    orderErrMsg: state.order.errMsg,
  }))

  return (
    <OrderModalWrapper
      open={isOpen}
      onClose={orderErrMsg ? handleClose : undefined}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      errMsg={orderErrMsg}
    >
      <Box className="boxModal">
        {orderErrMsg ? (
          <>
            <Button className="close" size="medium" onClick={handleClose}>
              X
            </Button>
            <img src={logoDark} alt="" />
            <span className="errMsg">
              發生錯誤，請重新確認：
              <br />
              {orderErrMsg}
            </span>
          </>
        ) : (
          <>
            <CircularProgress sx={{ marginBottom: '20px' }} />
            <img src={logoDark} alt="" />
            <span className="processing">正在處理訂單，請勿關閉視窗</span>
          </>
        )}
      </Box>
    </OrderModalWrapper>
  )
})

OrderModal.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default OrderModal
