import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { LOGIN, LOGOUT } from './constants/routes'

import { MainContext } from './Contexts'

import OverlayLoader from './common/OverlayLoader'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import MainPage from './pages/MainPage'

function RouteIfAuth ({ Component }) {
  const { token } = React.useContext(MainContext)
  if (!token) return <Navigate to={`/${LOGIN}`} />
  return <Component />
}

function RouteIfNotAuth ({ Component }) {
  const { token } = React.useContext(MainContext)
  if (token) return <Navigate to='/' />
  return <Component />
}

export default function AppRoutes () {
  return (
    <BrowserRouter>
      <OverlayLoader />
      <Routes>
        <Route path={`/${LOGIN}`} exact element={<RouteIfNotAuth Component={LoginPage} />} />
        <Route path={`/${LOGOUT}`} exact element={<RouteIfAuth Component={LogoutPage} />} />
        <Route path='/' exact element={<RouteIfAuth Component={MainPage} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
