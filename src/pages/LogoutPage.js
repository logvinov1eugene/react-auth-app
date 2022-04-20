import React from 'react'
import { Navigate } from 'react-router-dom'

import { LOGIN } from '../constants/routes'
import { SET_TOKEN } from '../constants/cases'

import { MainContext } from '../Contexts'

export default function LogoutPage () {
  const { dispatch } = React.useContext(MainContext)

  React.useEffect(() => {
    dispatch({ type: SET_TOKEN, payload: null })
    // eslint-disable-next-line
  }, [])

  return (
    <Navigate to={`/${LOGIN}`} />
  )
}
