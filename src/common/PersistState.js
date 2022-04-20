import React from 'react'

import { MainContext } from '../Contexts'

export default React.memo(function PersistState () {
  const state = React.useContext(MainContext)

  React.useEffect(() => {
    window.onbeforeunload = function () {
      window.localStorage.setItem('mainContext', JSON.stringify(state))
    }
  }, [state])

  return null
})
