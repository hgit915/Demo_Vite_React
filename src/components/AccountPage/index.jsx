import React, { memo } from 'react'
import { AccountPageWrapper } from './style'

const AccountPage = memo((props) => {
  return <AccountPageWrapper>{props.children}</AccountPageWrapper>
})

export default AccountPage
