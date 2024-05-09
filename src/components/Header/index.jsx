import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { HeaderWrapper } from './style'
import logoImg from 'assets/svg/logoDark.svg'
import menu from 'assets/svg/ic_menu.svg'
import profile from 'assets/svg/ic_Profile.svg'
import { getUserInfoAction, setLogout } from '@/store/modules/user'

const Header = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin, userName } = useSelector((state) => ({
    isLogin: state.user.isLogin,
    userName: state.user.profile?.name,
  }))
  const [showPanel, setShowPanel] = useState(false)

  const location = useLocation()

  // 確認登入狀態並取得 userName
  useEffect(() => {
    if (location.pathname.toLowerCase() !== '/login' && location.pathname.toLowerCase() !== '/sign') {
      dispatch(getUserInfoAction())
    }
  }, [dispatch])

  useEffect(() => {
    const windowHandleClick = () => {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandleClick)
    return () => {
      window.removeEventListener('click', windowHandleClick)
    }
  }, [])

  const handleShowPanel = (e) => {
    e.stopPropagation() // 阻止事件向上冒泡到 window
    setShowPanel(true)
  }
  const logout = () => {
    dispatch(setLogout())
    navigate('/')
  }

  const InfoList = () =>
    isLogin ? (
      <>
        <div>Hi {userName} 歡迎回來!</div>
        <Link onClick={logout}>登出</Link>
      </>
    ) : (
      <>
        <div>訂個好房!</div>
        <Link to="/sign">註冊</Link>
        <Link to="/login">登入</Link>
      </>
    )

  const Menu = () =>
    isLogin ? (
      <>
        <div className="panel">
          <div className="top">
            <div className="item">會員服務</div>
            <div className="item">訂單查詢</div>
          </div>
          <div className="bottom">
            <div className="item" onClick={logout}>
              登出
            </div>
          </div>
        </div>
      </>
    ) : (
      <div className="panel">
        <div className="top">
          <div className="item">房型介紹</div>
        </div>
        <div className="bottom">
          <div className="item">登入</div>
        </div>
      </div>
    )

  return (
    <>
      <HeaderWrapper>
        <div className="appHeader">
          <div className="left">
            <a href="https://google.com" target="blank">
              <img alt="hotel logo" src={logoImg} />
            </a>
          </div>
          {/* <div className="center"></div> */}
          <div className="right">
            <InfoList />
            <div className="profile" onClick={handleShowPanel}>
              <img className="info" src={profile} />
              <img className="menu" src={menu} />
              {showPanel && <Menu />}
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  )
})

export default Header
