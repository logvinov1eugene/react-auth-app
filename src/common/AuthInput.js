import React from 'react'
import styled, { css } from 'styled-components'

function Errors ({ validate, isValid, errorLabel }) {
  if (!validate) return null
  if (isValid) return null
  if (!errorLabel) return null
  return (
    <div className='error-label'>
      {errorLabel}
    </div>
  )
}

export default React.memo(function AuthInput ({
  className = '', type = 'text', placeholder, validator, value, changeHandler
}) {
  const isValid = validator?.isValid
  const errorLabel = validator?.errorLabel
  return (
    <StyledWrapper
      className={className}
      validate={!!value}
      isValid={isValid}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => changeHandler(e.target.value)}
      />
      <Errors
        validate={!!value}
        isValid={isValid}
        errorLabel={errorLabel}
      />
    </StyledWrapper>
  )
})

const StyledWrapper = styled.div`
  position: relative;
  input {
    display: block;
    width: 100%;
    border: none;
    padding: 1.2rem 0;
    background: transparent;
    border-bottom: solid 1px #9fa6ac;
    ${({ validate, isValid }) => validate && !isValid ? css`
      border-color: #c34848 !important;
    ` : ''};
    font-size: 1.4rem;
    line-height: 1.8rem;
    transition: all 0.2s;
    ::placeholder {
      color: #9fa6ac;
      text-transform: uppercase;
    }
    :focus {
      border-bottom-color: #317771;
    }
  }
  .error-label {
    position: absolute;
    bottom: 2px;
    left: 50%;
    font-size: 1rem;
    white-space: nowrap;
    color: #c34848;
    transform: translate(-50%, 0);
  }
`
