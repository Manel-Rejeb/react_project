import React from 'react'

import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsShield } from 'react-icons/bs'
import { __auth } from '../../context/AuthProvider'

const Header = () => {
  const { logout } = __auth()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      <p
        style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}
      >
        Expense Tracker
      </p>
      <div
        style={{
          gap: '1rem',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {navigation_link.map((el, key) => (
          <NavLink key={key} to={el.path}>
            <p style={{ fontSize: '16px', textTransform: 'capitalize' }}>
              {el.name}
            </p>
          </NavLink>
        ))}
      </div>
      {localStorage.getItem('logged') === 'false' ? (
        <div>
          <NavLink to={'/auth'}>
            <Button leftIcon={<BsShield />}>Login</Button>
          </NavLink>
        </div>
      ) : (
        <div>
          <Button onClick={logout}>logout</Button>
        </div>
      )}
    </div>
  )
}

const navigation_link = [
  { name: 'history', path: '/' },
  { name: 'transaction', path: '/transaction' },
  { name: 'notes', path: '/notes' },
]

export default Header
