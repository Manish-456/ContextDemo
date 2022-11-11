import React from 'react'
import Form from './Form'
import Home from './Home'
import {useUserContext} from '../component/context/LogContext'
const Auth = () => {
 const { user } = useUserContext()
  return (
    <div>
     {user.isGuestUser ? <Home />:<Form/>}
      
    </div>
  )
}

export default Auth
