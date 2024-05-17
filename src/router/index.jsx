import React from 'react'
import { Navigate } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import PublicRoute from '@/components/PublicRoute'

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
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/detail/:roomId',
    element: <Detail />,
    // children: [
    //   { path: 'room=:roomId', element: <Detail /> }, // 注意這裡的大小寫
    // ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/sign',
    element: (
      <PublicRoute>
        <Sign />
      </PublicRoute>
    ),
  },
]

export default routes
