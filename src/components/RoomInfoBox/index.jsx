import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { InfoBoxWrapper } from './style'
import CheckIcon from '@mui/icons-material/Check'

const RoomInfoBox = memo((props) => {
  const { info, style } = props

  return (
    <InfoBoxWrapper style={style}>
      {info.map((value, index) => (
        <span className="item" key={index}>
          <CheckIcon sx={{ paddingRight: '10px' }} color="primary" />
          {value.title}
        </span>
      ))}
    </InfoBoxWrapper>
  )
})

RoomInfoBox.propTypes = {
  info: PropTypes.array,
  style: PropTypes.object,
}

RoomInfoBox.defaultProps = {
  info: [],
  style: {},
}
export default RoomInfoBox
