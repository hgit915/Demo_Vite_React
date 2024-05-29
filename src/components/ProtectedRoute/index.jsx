import react, { memo, useEffect } from 'react'
import { getUserInfoAction } from '@/store/modules/user'
import { useNavigate, useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '@/store/selector/user'
import { getCookie } from '@/utils/cookies'

const ProtectedRoute = memo(({ children }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin } = useSelector(getUserData)
  const { pathname } = useLocation()

  // 確認登入狀態並取得 userName
  useEffect(() => {
    // 登入時取得 User 最新資料
    if (isLogin || getCookie()) {
      dispatch(getUserInfoAction())
    } else {
      if (pathname.startsWith('/home') || pathname.startsWith('/detail')) return
      navigate('/login')
    }
  }, [dispatch, isLogin, navigate, pathname])

  return children
})
export default ProtectedRoute
