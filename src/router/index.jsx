import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home/index.jsx'))
const Detail = React.lazy(() => import('@/views/detail'))
const Login = React.lazy(() => import('@/views/login'))
const Sign = React.lazy(() => import('@/views/sign'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign',
    element: <Sign />,
  },
]

export default routes
