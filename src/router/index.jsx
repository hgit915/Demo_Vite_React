import React from 'react'
import { Navigate } from 'react-router-dom'
import ProtectedRoute from '@/components/ProtectedRoute'
import PublicRoute from '@/components/PublicRoute'

const Home = React.lazy(() => import('@/views/home/index.jsx'))
const Detail = React.lazy(() => import('@/views/detail'))
const Login = React.lazy(() => import('@/views/login'))
const Sign = React.lazy(() => import('@/views/sign'))
const Order = React.lazy(() => import('@/views/order'))
const OrderSuccess = React.lazy(() => import('@/views/orderSuccess'))
const Dashboard = React.lazy(() => import('@/views/dashboard'))
const Account = React.lazy(() => import('@/components/Account'))
const UserOrders = React.lazy(() => import('@/components/UserOrders'))

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
    element: (
      <ProtectedRoute>
        <Detail />
      </ProtectedRoute>
    ),
  },
  {
    path: '/order/:params',
    element: (
      <ProtectedRoute>
        <Order />
      </ProtectedRoute>
    ),
  },
  {
    path: '/orderSuccess/:params',
    element: (
      <ProtectedRoute>
        <OrderSuccess />
      </ProtectedRoute>
    ),
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
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        name: '',
        element: <Account />,
      },
      {
        path: 'account',
        name: 'account',
        element: <Account />,
      },
      {
        path: 'orders',
        name: 'UserOrders',
        element: <UserOrders />,
      },
    ],
  },
]

export default routes
