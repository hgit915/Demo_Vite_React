import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import { DashboardWrapper } from './style'
import { getUserData } from '@/store/selector/user'
import Avater from 'assets/png/avater.png'

const Dashboard = memo(() => {
  const { userName } = useSelector(getUserData)

  return (
    <DashboardWrapper>
      <div className="top">
        <div className="greeting">
          <Avatar src={Avater} />
          Hello {userName} !
        </div>
      </div>
      <div className="bottom">
        <div className="menu">
          <NavLink className={({ isActive }) => (isActive ? 'menuEntries isActive' : 'menuEntries')} to="account">
            個人資料
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'menuEntries isActive' : 'menuEntries')} to="orders">
            我的訂單
          </NavLink>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </DashboardWrapper>
  )
})

export default Dashboard
