import React, { memo } from 'react'
import PropTypes from 'prop-types'
import BasicInfo from '@/components/BasicInfo'
import RoomInfoBox from '@/components/RoomInfoBox'

import { Title } from './style'

const RoomInfo = memo((props) => {
  const { sectionsInfo, basicInfo, rule, sectionStyle, basicStyle } = props

  return (
    <>
      <Title $titleStyle={sectionStyle}>房型基本資訊</Title>
      <BasicInfo {...basicInfo} style={basicStyle} />

      {sectionsInfo &&
        sectionsInfo.map((section, index) => (
          <div key={index}>
            <Title $titleStyle={sectionStyle}>{section.title}</Title>
            <RoomInfoBox info={section.info} />
          </div>
        ))}

      {rule && (
        <>
          <Title>訂房須知</Title>
          <ol>
            <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。 </li>
            <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。 </li>
            <li>請愛惜我們的房間與公共空間，並保持整潔。 </li>
            <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。 </li>
            <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
            <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
            <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
            <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
          </ol>
        </>
      )}
    </>
  )
})

RoomInfo.propTypes = {
  sectionsInfo: PropTypes.array,
  basicInfo: PropTypes.object,
  rule: PropTypes.bool,
  sectionStyle: PropTypes.object,
  basicStyle: PropTypes.object,
}

RoomInfo.defaultProps = {
  rule: false,
  sectionStyle: {},
  basicStyle: {},
}

export default RoomInfo
