import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { LOGOUT } from '../constants/routes'

import CustomButton from '../common/CustomButton'

export default function MainPage () {
  const navigate = useNavigate()

  const navigateToLogout = React.useCallback(() => {
    navigate(`/${LOGOUT}`)
  }, [navigate])

  return (
    <StyledWrapper>
      <div className='title'>
        Private page
      </div>
      <div className='email'>
        Hi, <b>test@example.com</b>
      </div>
      <CustomButton
        className='logout-button'
        clickHandler={navigateToLogout}
      >
        Log Out
      </CustomButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  max-width: 46rem;
  margin: 5rem auto;
  text-align: center;
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .email {
    margin-top: 2rem;
    font-size: 1.6rem;
  }
  .logout-button {
    margin: 4rem auto;
  }
`
