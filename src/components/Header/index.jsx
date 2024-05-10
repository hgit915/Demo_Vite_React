import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@mui/material'
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

  const HeaderList = () =>
    isLogin ? (
      <>
        <div>Hi {userName} 歡迎回來!</div>
        <NavLink className="list" onClick={logout}>
          登出
        </NavLink>
      </>
    ) : (
      <>
        <div>訂個好房!</div>
        <NavLink className="list" to="/sign">
          註冊
        </NavLink>
        <NavLink className="list" to="/login">
          登入
        </NavLink>
      </>
    )

  const MenuList = () =>
    isLogin ? (
      <>
        <div className="panel">
          <div className="top">
            <NavLink className="item" to="/home">
              會員服務
            </NavLink>
            <NavLink className="item" to="/home">
              訂單查詢
            </NavLink>
          </div>
          <div className="bottom">
            <NavLink className="item" onClick={logout}>
              登出
            </NavLink>
          </div>
        </div>
      </>
    ) : (
      <div className="panel">
        <div className="top">
          <NavLink className="item" to="/home">
            房型介紹
          </NavLink>
        </div>
        <div className="bottom">
          <NavLink className="item" to="/login">
            登入
          </NavLink>
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
            <HeaderList />
            <div className="profile" onClick={handleShowPanel}>
              <img className="info" src={profile} />
              <img className="menu" src={menu} />
              {showPanel && <MenuList />}
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  )
})

export default Header
