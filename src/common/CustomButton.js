import React from 'react'
import styled from 'styled-components'

export default React.memo(function CustomButton ({
  className = '', children, disabled, clickHandler
}) {
  return (
    <StyledWrapper
      className={className}
      disabled={disabled}
      onClick={clickHandler}
    >
      {children}
    </StyledWrapper>
  )
})

const StyledWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 1.2rem 4rem;
  background: #317771;
  border: none;
  border-radius: 3rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  color: #fff;
  box-shadow: 4px 12px 20px rgba(49, 119, 113, 0.25);
  transition: all 0.2s;
  :hover:not([disabled]) {
    background: #3b9189;
    cursor: pointer;
  }
  :active:not([disabled]) {
    background: #317771;
    box-shadow: 4px 8px 10px rgba(49, 119, 113, 0.35);
  }
  :disabled {
    background: #9fa6ac;
    box-shadow: none;
  }
`
