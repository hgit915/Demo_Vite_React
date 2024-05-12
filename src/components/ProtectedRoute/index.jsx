import React from 'react'
import { getUserInfoAction } from '@/store/modules/user'
import { useDispatch } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  // 確認登入狀態並取得 userName
  dispatch(getUserInfoAction())
  return children
}
export default ProtectedRoute
