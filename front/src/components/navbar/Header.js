import React from 'react'

import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { BsShield } from 'react-icons/bs'

const Header = () => {
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
          <NavLink key={key} to={`/${el}`}>
            <p style={{ fontSize: '16px', textTransform: 'capitalize' }}>
              {el}
            </p>
          </NavLink>
        ))}
      </div>
      <div>
        <NavLink to={'/auth'}>
          <Button leftIcon={<BsShield />}>Login</Button>
        </NavLink>
      </div>
    </div>
  )
}

const navigation_link = ['history', 'transaction', 'notes']

export default Header
