import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { OrderScrollWrapper } from './style'
import { IMG_URL } from '@/services/request/config'
import { dayOfWeek, countDay, formatDate, toCommas } from '@/utils/format'

const OrderScroll = memo((props) => {
  const { items, showDetail, showItems } = props

  return (
    <OrderScrollWrapper>
      {items &&
        items.length > 0 &&
        items?.slice(0, showItems).map((value, index) => (
          <div tabIndex={0} key={value['_id']} className="items" onClick={() => showDetail(index)}>
            <div className="orderNo">
              {index + 1}. 預定參考編號 : {value['_id']}
            </div>
            <img src={`${IMG_URL}/jpg/${value.roomId.imageUrl}`} alt="" />

            <div className="roomInfo">
              <span className="orderDesc">
                {value.roomId.name}｜住宿人數：{value.peopleNum} 位
              </span>
              <div className="orderSubTitle">
                訂單狀態：{value.status > -1 ? '成立完成' : <span className="cancel">已取消</span>}
              </div>

              <div className="orderSubTitle ">
                入住日：{`${formatDate(value.checkInDate)} ${dayOfWeek(value.checkInDate)}`}～
                {`${formatDate(value.checkOutDate)} ${dayOfWeek(value.checkOutDate)}`}
              </div>

              <div className="orderSubTitle ">
                總金額：NT {toCommas(value.roomId.price * countDay(value.checkInDate, value.checkOutDate), true)}
              </div>

              <div className="orderSubTitle ">
                訂單成立日：{`${formatDate(value.createdAt)} ${dayOfWeek(value.createdAt)}`}
              </div>
            </div>
          </div>
        ))}
    </OrderScrollWrapper>
  )
})

OrderScroll.propTypes = {
  items: PropTypes.array,
  showDetail: PropTypes.func,
  showItems: PropTypes.number,
}

export default OrderScroll
