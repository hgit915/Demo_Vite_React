import React, { memo, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

import RoomInfo from '@/components/RoomInfo'
import CustomerInfo from '@/components/CustomerInfo'
import OrderModal from '@/components/Orders/OrderModal'
import { OrderWrapper, LeftWrapper, RightWrapper } from './style'

import { fetchRoomInfoAction } from '@/store/modules/room'
import { createOrderAction, setErrMsg } from '@/store/modules/order'

import { IMG_URL } from '@/services/request/config'
import { parseParams, dayOfWeek, toCommas, countDay } from '@/utils/format'
import { getCityCountry } from '@/utils/zipcodes'

const Order = memo(() => {
  const dispatch = useDispatch()
  const { params } = useParams()
  const navigate = useNavigate()
  const { roomId, people, startDate, endDate } = parseParams(params)
  const { detail, isLogin, userInfo, orderSuccess, orderInfo } = useSelector((state) => ({
    detail: state.room.detail,
    isLogin: state.user.isLogin,
    userInfo: state.user.profile,
    orderSuccess: state.order.orderSuccess,
    orderInfo: state.order.orderInfo,
  }))
  const [roomData, setRoomData] = useState(null)
  const [countData, setCountData] = useState({
    day: 0,
    total: 0,
  })

  // 訂單建立成功，導轉至訂單成功頁面
  useEffect(() => {
    if (orderSuccess) {
      navigate(`/orderSuccess/orderNo=${orderInfo['_id']}`)
    }
  }, [navigate, orderSuccess, orderInfo])

  // 從 URL 取得房間 ID => 取得房間資訊
  useEffect(() => {
    if (roomId) dispatch(fetchRoomInfoAction(roomId))
  }, [dispatch, roomId])

  useEffect(() => {
    if (detail) {
      // 取得房間資訊
      setRoomData(detail)

      // 計算入住天數
      const day = countDay(startDate, endDate)
      setCountData((prev) => ({
        ...prev,
        day,
        total: detail.price * day,
      }))
    }
  }, [detail, endDate, startDate])

  // 處理訂購
  const handleCheckForm = (e) => {
    e.preventDefault()
    dispatch(setErrMsg(''))

    // 訂購人欄位驗證
    const dataObj = customerRef.current.checkForm()
    const { userInfo, isError } = dataObj
    if (isError) return

    // 建立訂單
    const data = {
      userInfo,
      roomId,
      checkInDate: startDate,
      checkOutDate: endDate,
      peopleNum: people,
    }
    dispatch(createOrderAction(data))
    setModalOpen(true)
  }

  // 套用會員資料的選項
  const customerRef = useRef()
  const [getMemInfo, setGetMemInfo] = React.useState(true)
  const handleChange = () => {
    setGetMemInfo((prevState) => !prevState)
  }
  useEffect(() => {
    let initInfo = ''
    if (getMemInfo && isLogin) {
      const { address, name, email, phone } = userInfo
      initInfo = {
        name,
        phone,
        email,
        country: getCityCountry(address.zipcode).city,
        city: address.zipcode,
        address: address.detail,
      }
    }
    customerRef.current.setFormValue(initInfo)
  }, [getMemInfo, userInfo, isLogin])

  // 控制 modal 開關
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleClose = () => setModalOpen(false)

  return (
    <OrderWrapper>
      <div className="top">
        <NavigateBeforeIcon />
        確認訂房資訊
      </div>
      <div className="bottom">
        <LeftWrapper>
          <div className="infoTitle">訂房資訊</div>
          <div className="subTitle">選擇房型</div>
          <div className="content">{detail.name}</div>
          <div className="subTitle">訂房日期</div>
          <div className="content">
            入住：{startDate} {dayOfWeek(startDate)}
            <br />
            退房：{endDate} {dayOfWeek(endDate)}
          </div>
          <div className="subTitle">房客人數</div>
          <div className="content">{people} 人</div>
          <hr className="hr" />
          <div className="infoTitle setMemberInfo">
            訂房人資訊
            <FormControlLabel
              className="setMemberInfo"
              control={<Checkbox checked={getMemInfo} onChange={handleChange} />}
              label="套用會員資料"
            />
          </div>
          <CustomerInfo ref={customerRef} />
          <hr className="hr" />
          <div className="infoTitle">房間資訊</div>
          {roomData && (
            <RoomInfo
              sectionsInfo={[
                { title: '房間格局', info: roomData.layoutInfo },
                { title: '房內設備', info: roomData.facilityInfo },
                { title: '備品提供', info: roomData.amenityInfo },
              ]}
              basicInfo={{
                areaInfo: roomData.areaInfo,
                bedInfo: roomData.bedInfo,
                maxPeople: roomData.maxPeople,
              }}
              sectionStyle={{ fontSize: '16px' }}
              basicStyle={{ marginBottom: '20px' }}
              infoBoxStyle={{ marginBottom: '20px' }}
            />
          )}
        </LeftWrapper>
        <RightWrapper>
          {roomData && <img src={`${IMG_URL}/jpg/${roomData.imageUrl}`} alt="" />}
          <div className="priceSection">
            <div className="title">價格詳情</div>
            <div className="priceInfo">
              <span>
                NT {toCommas(detail.price, true)} x {countData.day} 晚
              </span>
              <span>NT {toCommas(countData.total, true)}</span>
            </div>
            <hr />
            <div className="priceInfo bold">
              <span>總價</span>
              <span>NT {toCommas(countData.total, true)}</span>
            </div>
          </div>
          <Button size="large" variant="contained" onClick={handleCheckForm} fullWidth>
            確認訂房
          </Button>
        </RightWrapper>
      </div>
      <OrderModal isOpen={modalOpen} handleClose={handleClose} />
    </OrderWrapper>
  )
})
export default Order
