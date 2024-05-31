import react, { memo, useEffect, useState } from 'react'
import { getUserInfoAction } from '@/store/modules/user'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '@/store/selector/user'
import { getCookie } from '@/utils/cookies'
import Login from '@/views/login'

const ProtectedRoute = memo(({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin } = useSelector(getUserData)
  const { pathname } = useLocation()

  // 確認  1.登入狀態並取得 userName 2.path 處理
  useEffect(() => {
    if (isLogin || getCookie()) {
      // 登入時才需取得 User 最新資料
      dispatch(getUserInfoAction())
    } else {
      // path 處理
      if (isLogin || getCookie() || pathname.startsWith('/home') || pathname.startsWith('/detail')) return
      navigate('/login')
    }
  }, [])

  // 未登入時，元件使用 login (除了 home/ detail外)
  return (
    <>
      {isLogin || getCookie() || pathname.startsWith('/home') || pathname.startsWith('/detail') ? children : <Login />}
    </>
  )
})

export default ProtectedRoute
