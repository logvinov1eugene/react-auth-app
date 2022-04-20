import React from 'react'
import styled from 'styled-components'

import { SET_ERROR } from '../constants/cases'

import { MainContext } from '../Contexts'

export default React.memo(function ErrorBlock () {
  const { error, dispatch } = React.useContext(MainContext)

  React.useEffect(() => {
    return () => {
      dispatch({ type: SET_ERROR, payload: null })
    }
    // eslint-disable-next-line
  }, [])

  if (!error) return null

  return (
    <StyledWrapper>
      {error}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #c34848;
  text-align: center;
`
