import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { InfoIconWrapper } from './style'
import BedIcon from '@mui/icons-material/Bed'
import PersonIcon from '@mui/icons-material/Person'
import AspectRatioIcon from '@mui/icons-material/AspectRatio'

const BasicInfo = memo((props) => {
  const { areaInfo, bedInfo, maxPeople, style } = props

  return (
    <InfoIconWrapper style={style}>
      <div>
        <AspectRatioIcon color="primary" />
        {areaInfo}
      </div>
      <div>
        <BedIcon color="primary" />
        {bedInfo}
      </div>
      <div>
        <PersonIcon color="primary" />
        {maxPeople}人
      </div>
    </InfoIconWrapper>
  )
})

BasicInfo.propTypes = {
  areaInfo: PropTypes.string,
  bedInfo: PropTypes.string,
  maxPeople: PropTypes.number,
  style: PropTypes.object,
}

BasicInfo.defaultProps = {
  areaInfo: '24坪',
  bedInfo: '兩大床',
  maxPeople: 4,
  style: {},
}
export default BasicInfo
