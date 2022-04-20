import React from 'react'

import { SET_LOADING, SET_TOKEN, SET_ERROR } from './constants/cases'

import { MainContext } from './Contexts'

export function useLoginAttempt () {
  const { dispatch } = React.useContext(MainContext)
  return React.useCallback(({ email, password }) => {
    dispatch({ type: SET_LOADING, payload: true })
    const mockRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'secret') {
          return resolve()
        }
        reject(new Error('Email or Password does not match'))
      }, 1000)
    })
    mockRequest
      .then(() => {
        dispatch({ type: SET_TOKEN, payload: 'secret-user-token' })
      })
      .catch(error => {
        console.log(error)
        dispatch({ type: SET_ERROR, payload: error.message })
      })
      .finally(() => {
        dispatch({ type: SET_LOADING, payload: false })
      })
  }, [dispatch])
}
