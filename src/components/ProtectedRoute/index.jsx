import react, { memo, useEffect } from 'react'
import { getUserInfoAction } from '@/store/modules/user'
import { useDispatch } from 'react-redux'

const ProtectedRoute = memo(({ children }) => {
  const dispatch = useDispatch()
  // 確認登入狀態並取得 userName
  useEffect(() => {
    dispatch(getUserInfoAction())
  }, [dispatch])
  return children
})
export default ProtectedRoute
