'use client'
import React from 'react'
import {useSession} from 'next-auth/react'


const Login = () => {
    const session =useSession()
    console.log(session)
  return (
    <div>Login</div>
  )
}

export default Login