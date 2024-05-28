import React, { memo } from 'react'
import PropTypes from 'prop-types'

import RoomInfo from '@/components/RoomInfo'
import { OrderInfoBoxWrapper } from './style'
import { IMG_URL } from '@/services/request/config'
import { dayOfWeek, countDay, formatDate, toCommas } from '@/utils/format'

const OrderInfoBox = memo((props) => {
  const { roomId, checkInDate, checkOutDate, peopleNum, orderNo, status } = props

  return (
    <OrderInfoBoxWrapper status={status}>
      <div className="orderNo">預定參考編號 : {orderNo} </div>
      <p className="orderHint">{status > -1 ? '訂單成立完成' : '訂單已取消'}</p>
      <img src={`${IMG_URL}/jpg/${roomId.imageUrl}`} alt="" />
      <div className="roomInfo">
        <span className="orderDesc">
          {roomId.name}: {countDay(checkInDate, checkOutDate)} 晚
        </span>
        <span className="orderDesc">｜住宿人數： {peopleNum} 位</span>
        <div className="orderSubTitle">入住：{`${formatDate(checkInDate)} ${dayOfWeek(checkInDate)}`}，15:00 後</div>
        <div className="orderSubTitle gray">
          退房：{`${formatDate(checkOutDate)} ${dayOfWeek(checkOutDate)}`}，12:00 前
        </div>
        <div className="price">
          每晚：NT {toCommas(roomId.price, true)} ｜ 總金額：NT{' '}
          {toCommas(roomId.price * countDay(checkInDate, checkOutDate), true)}{' '}
        </div>
      </div>
      <hr className="hr" />

      <RoomInfo
        basicInfo={{ areaInfo: roomId.areaInfo, bedInfo: roomId.bedInfo, maxPeople: roomId.maxPeople }}
        sectionsInfo={[
          { title: '房內設備', info: roomId.facilityInfo },
          { title: '備品提供', info: roomId.amenityInfo },
        ]}
        sectionStyle={{ fontSize: '16px' }}
        basicStyle={{ marginBottom: '25px' }}
        infoBoxStyle={{ marginBottom: '25px', border: '1px solid #F1EAE4', borderRadius: '10px' }}
      />
    </OrderInfoBoxWrapper>
  )
})

OrderInfoBox.propTypes = {
  roomId: PropTypes.object,
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  peopleNum: PropTypes.number,
  orderNo: PropTypes.string,
  status: PropTypes.number,
}

export default OrderInfoBox
