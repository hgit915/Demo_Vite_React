import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import OrderInfoBox from '@/components/OrderInfoBox'
import { OrderSuccessWrapper, LeftWrapper, RightWrapper } from './style'

import { parseParams } from '@/utils/format'
import { fetchOrderByIdAction } from '@/store/modules/order'
import { getOrderData } from '@/store/selector/order'

const OrderSuccess = () => {
  const { params } = useParams()
  const { orderNo } = parseParams(params)
  const dispatch = useDispatch()
  useEffect(() => {
    if (orderNo) {
      dispatch(fetchOrderByIdAction(orderNo))
    }
  }, [dispatch, orderNo])

  const { orderInfo } = useSelector(getOrderData)
  const { userInfo } = orderInfo

  return (
    <OrderSuccessWrapper>
      {orderInfo ? (
        <div className="bottom">
          <LeftWrapper>
            <div className="successTitle">
              <CheckCircleIcon className="successIcon" />
              恭喜 {userInfo.name}，您已預訂成功!
            </div>
            <p className="hint">我們已將訂房資訊及詳細內容寄到您的電子信箱，入住時記得向櫃檯人員出示訂房人證件唷</p>
            <hr className="hr" />

            <p className="desc">立即查看您的訂單紀錄</p>
            <Button variant="contained">前往我的訂單</Button>

            <hr className="hr" />

            <div className="infoTitle">訂購人資訊</div>
            <div className="subTitle">姓名</div>
            <div className="content">{userInfo.name}</div>
            <div className="subTitle">手機號碼</div>
            <div className="content">{userInfo.phone}</div>
            <div className="subTitle">電子信箱</div>
            <div className="content">{userInfo.email}</div>
          </LeftWrapper>
          <RightWrapper>
            <OrderInfoBox orderNo={orderNo} {...orderInfo} />
          </RightWrapper>
        </div>
      ) : (
        <Box className="bottom">
          <LeftWrapper>
            <Skeleton variant="rounded" height={300} />
          </LeftWrapper>
          <RightWrapper>
            <Skeleton variant="rounded" height={150} />
            <Skeleton />
            <Skeleton width="60%" />
          </RightWrapper>
        </Box>
      )}
    </OrderSuccessWrapper>
  )
}

export default OrderSuccess
