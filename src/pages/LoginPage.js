import React from 'react'
import styled from 'styled-components'

import { useLoginAttempt } from '../requests'

import AuthInput from '../common/AuthInput'
import ErrorBlock from '../common/ErrorBlock'
import CustomButton from '../common/CustomButton'

import { emailValidation, existValidation } from '../validation/authValidation'

export default function LoginPage () {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const loginAttempt = useLoginAttempt()

  const isFormValid = React.useMemo(() => {
    if (!emailValidation(email).isValid) return false
    if (!existValidation(password).isValid) return false
    return true
  }, [email, password])

  const loginHandler = React.useCallback(() => {
    loginAttempt({ email, password })
  }, [loginAttempt, email, password])

  return (
    <StyledWrapper>
      <div className='title'>
        Login page
      </div>
      <AuthInput
        className='email'
        placeholder='email'
        validator={emailValidation(email)}
        value={email}
        changeHandler={setEmail}
      />
      <AuthInput
        className='password'
        type='password'
        placeholder='password'
        validator={existValidation(password)}
        value={password}
        changeHandler={setPassword}
      />
      <ErrorBlock />
      <CustomButton
        className='submit-button'
        disabled={!isFormValid}
        clickHandler={loginHandler}
      >
        Log In
      </CustomButton>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  max-width: 46rem;
  margin: 5rem auto;
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  .email {
    margin-top: 4rem;
  }
  .password {
    margin-top: 2rem;
  }
  .submit-button {
    margin: 4rem auto;
  }
`
