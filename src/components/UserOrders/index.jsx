import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { UserOrderWrapper, LeftWrapper, RightWrapper } from './style'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'

import Skeleton from '@mui/material/Skeleton'
import OrderInfoBox from '@/components/OrderInfoBox'
import OrderScroll from '@/components/OrderScroll'

import { fetchUserOrders } from '@/store/modules/dashboard'
import { deleteOrderByIdAction } from '@/store/modules/order'
import { setIsLoading } from '@/store/modules/common'

import { getUserOrdersData } from '@/store/selector/dashboard'
import { getCommonData } from '@/store/selector/common'

const UserOrders = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { orderInfo } = useSelector(getUserOrdersData)
  const { isLoading } = useSelector(getCommonData)
  const [data, setData] = useState('')
  const [orderIdx, setOrderIdx] = useState(0)
  let orderSelected = null

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(fetchUserOrders())
  }, [dispatch])

  useEffect(() => {
    if (orderInfo) {
      console.log('object')
      dispatch(setIsLoading(false))
      setData(orderInfo)
      setModalOpen(false)
    }
  }, [dispatch, orderInfo, setData])

  const handleShowDetail = (idx) => {
    setOrderIdx(idx)
  }

  if (data && data.length > 0) {
    const { _id, roomId, checkInDate, checkOutDate, peopleNum, status } = data[orderIdx]
    orderSelected = { _id, roomId, checkInDate, checkOutDate, peopleNum, status }
  }

  const [showItems, setShowItems] = useState(10)
  const loadItem = () => {
    let limit = 5
    if (data.length === showItems) return
    if (data.length - showItems < limit) {
      limit = data.length - showItems
    }
    setShowItems((prev) => prev + limit)
  }

  const [modalOpen, setModalOpen] = React.useState(false)
  const handleModal = (isOpen) => setModalOpen(isOpen)

  const handleCancel = async () => {
    dispatch(setIsLoading(true))
    setModalOpen(false)
    const orderId = orderSelected['_id']
    await dispatch(deleteOrderByIdAction(orderId))
    await dispatch(fetchUserOrders())
    dispatch(setIsLoading(false))
  }

  const handleNavigate = () => {
    navigate(`/orderSuccess/orderNo=${orderSelected['_id']}`)
  }

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton variant="rounded" height={150} />
          <Skeleton width="60%" />
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <UserOrderWrapper>
              <LeftWrapper>
                <OrderInfoBox orderNo={orderSelected['_id']} {...orderSelected} />
                {orderSelected.status > -1 && (
                  <Button
                    variant="outlined"
                    sx={{ width: '30%', marginRight: '100px' }}
                    onClick={() => handleModal(true)}
                  >
                    取消訂單
                  </Button>
                )}
                <Button variant="contained" className="absolute" sx={{ width: '30%' }} onClick={handleNavigate}>
                  查看詳情
                </Button>
              </LeftWrapper>
              <RightWrapper>
                <>
                  <OrderScroll items={data} showDetail={handleShowDetail} showItems={showItems} />
                  <Button variant="outlined" fullWidth onClick={loadItem} sx={{ marginTop: '25px' }}>
                    查看更多 ( {showItems} 筆 / 共 {data.length} 筆)
                  </Button>
                </>
              </RightWrapper>
            </UserOrderWrapper>
          ) : (
            '目前無訂單紀錄'
          )}
        </>
      )}

      <Dialog
        open={modalOpen}
        onClose={() => handleModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">確定要取消此房型的預訂嗎？</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleModal(false)}>關閉視窗</Button>
            <Button variant="contained" onClick={handleCancel} autoFocus>
              確認取消
            </Button>
          </DialogActions>
        </>
      </Dialog>
    </>
  )
})

export default UserOrders
