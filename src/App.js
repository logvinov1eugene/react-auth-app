import React from 'react'

import { SET_LOADING, SET_TOKEN, SET_ERROR } from './constants/cases'

import { MainContext } from './Contexts'

import PersistState from './common/PersistState'
import AppRoutes from './AppRoutes'

const defaultState = {
  isLoading: false,
  token: null,
  error: null
}

const initialState = JSON.parse(window.localStorage.getItem('mainContext')) || defaultState

initialState.isLoading = false // prevent infinity loading on persist
initialState.error = null // prevent persist error

function reducer(state, action) {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return
  }
}

export default function App () {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      <PersistState />
      <AppRoutes />
    </MainContext.Provider>
  )
}
