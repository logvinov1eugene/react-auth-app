import React from 'react'
import ReactDOM from 'react-dom'

import { MainContext } from '../Contexts'

export default function OverlayLoader () {
  const { isLoading } = React.useContext(MainContext)
  if (!isLoading) return null
  return ReactDOM.createPortal(
    <div className='overlay-container'>
      <div className='loader-wrapper'>
        <div className='loader-green-wrapper'>
          <div className='loader-green' />
        </div>
        <div className='loader-red-wrapper'>
          <div className='loader-red' />
        </div>
      </div>
    </div>,
    document.getElementById('loader'))
}
