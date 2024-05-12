import React from 'react'
import { Navigate } from 'react-router-dom'
import { getCookie } from '@/utils/cookies'

const PublicRoute = ({ children }) => {
  const token = getCookie()
  // 登入情況下，如果輸入 /login、/sign，則會跳轉回首頁
  if (token) return <Navigate to="/home" replace />
  return children
}

export default PublicRoute
