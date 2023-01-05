import { Button, grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { __auth } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const navigate = useNavigate()
  const { login, logout } = __auth()

  useEffect(() => {
    if (localStorage.getItem('logged') === 'true') {
      navigate('/')
    }
  })

  return (
    <div
      style={{
        height: 500,
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {localStorage.getItem('logged') === 'true' ? (
        <Button onClick={logout}>logout</Button>
      ) : (
        <Button onClick={login}>connect with your google account</Button>
      )}
    </div>
  )
}

export default Auth
