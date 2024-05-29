import React, { memo, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'

import { HeaderWrapper } from './style'
import logoImg from 'assets/svg/logoDark.svg'
import menu from 'assets/svg/ic_menu.svg'
import profile from 'assets/svg/ic_Profile.svg'
import { setLogout } from '@/store/modules/user'
import { getUserData } from '@/store/selector/user'

const Header = memo(() => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLogin, userName } = useSelector(getUserData)
  const [showPanel, setShowPanel] = useState(false)

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
  const logout = async () => {
    await dispatch(setLogout())
    navigate('/login')
  }

  const HeaderList = () =>
    isLogin ? (
      <>
        <div className="welcome">Hi {userName} 歡迎回來!</div>
        <NavLink className="list" to="/home">
          房型介紹
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
            <NavLink className="item" to="/dashboard/account">
              會員服務
            </NavLink>
            <NavLink className="item" to="/dashboard/orders">
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
            <img alt="hotel logo" src={logoImg} />
          </div>
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
