import react, { memo, useEffect, useState } from 'react'
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
  const [showItems, setShowItems] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  let orderSelected = null

  // 查詢 user 訂單
  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(fetchUserOrders())
  }, [dispatch])

  // 設定 sideBar 要顯示的訂單數量
  useEffect(() => {
    if (orderInfo) {
      let showItems = 5
      dispatch(setIsLoading(false))
      if (orderInfo.length < 5) showItems = orderInfo.length
      setShowItems(showItems)
      setData(orderInfo)
      setModalOpen(false)
    }
  }, [dispatch, orderInfo, setData])

  // 預設 & 點擊 sideBar 後，顯示左側詳細資訊
  const handleShowDetail = (idx) => {
    setOrderIdx(idx)
  }
  if (data && data.length > 0) {
    const { _id, roomId, checkInDate, checkOutDate, peopleNum, status } = data[orderIdx]
    orderSelected = { _id, roomId, checkInDate, checkOutDate, peopleNum, status }
  }

  // 顯示更多訂單數
  const loadItem = () => {
    let limit = 5
    if (data.length === showItems) return
    if (data.length - showItems < limit) {
      limit = data.length - showItems
    }
    setShowItems((prev) => prev + limit)
  }

  // 取消訂單
  const handleModal = (isOpen) => setModalOpen(isOpen)
  const handleCancel = async () => {
    dispatch(setIsLoading(true))
    setModalOpen(false)
    const orderId = orderSelected['_id']
    await dispatch(deleteOrderByIdAction(orderId))
    await dispatch(fetchUserOrders())
    dispatch(setIsLoading(false))
  }

  // 查看詳情的頁面導轉
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
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={loadItem}
                    sx={{ marginTop: '25px' }}
                    disabled={showItems === data.length}
                  >
                    {showItems === data.length
                      ? `訂單載入完畢，總共 ${data.length} 筆`
                      : `查看更多 ( ${showItems} 筆 / 共 ${data.length} 筆) `}
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
