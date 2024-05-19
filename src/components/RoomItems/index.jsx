import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { RoomItemsWrapper } from './style'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BasicInfo from '@/components/BasicInfo'
import Carousel from '@/components/Carousel'
import { toCommas } from '@/utils/format'

const RoomItems = memo(({ itemData, directToPage }) => {
  const { name, description, imageUrlList, areaInfo, bedInfo, maxPeople, price, _id } = itemData

  return (
    <RoomItemsWrapper>
      <div className="cover">
        <Carousel key={_id} imgList={imageUrlList} />
      </div>

      <div onClick={() => directToPage(_id)} className="info">
        <div className="title">{name}</div>
        <div className="subTitle">{description}</div>
        <BasicInfo area={areaInfo} bed={bedInfo} maxPeople={maxPeople} />
        <div className="linear"></div>
        <div className="price">
          NT {toCommas(price, true)}
          <ArrowForwardIcon fontSize="large" color="primary" />
        </div>
      </div>
    </RoomItemsWrapper>
  )
})

RoomItems.propTypes = {
  itemData: PropTypes.object,
  directToPage: PropTypes.func,
}

export default RoomItems
