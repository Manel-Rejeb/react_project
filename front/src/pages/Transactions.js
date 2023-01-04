import React, { useState } from 'react'
import { Button, Select, Input, Textarea, Container } from '@chakra-ui/react'
import { __data } from '../context/DataProvider'

import { useNavigate } from 'react-router-dom'

const Transactions = () => {
  const navigate = useNavigate()
  const { storeTransactions } = __data()

  const [transaction, setTransaction] = useState({
    transaction_name: '',
    transaction_type: '',
    transaction_amount: 0,
    transaction_description: '',
  })

  const handleChange = (binding, event) => {
    setTransaction({ ...transaction, [binding]: event })
  }

  const option = ['Investment', 'Expense', 'Savings']

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          placeholder={'transaction name'}
          onChange={(e) => handleChange('transaction_name', e.target.value)}
        />
        <Select
          placeholder='Select option'
          onChange={(e) =>
            handleChange('transaction_type', option[e.target.selectedIndex - 1])
          }
        >
          {option.map((el, key) => (
            <option key={key} value={el}>
              {el}
            </option>
          ))}
        </Select>
        <Input
          placeholder={'transaction amount'}
          onChange={(e) => handleChange('transaction_amount', e.target.value)}
        />
        <Textarea
          placeholder={'transcation description'}
          onChange={(e) =>
            handleChange('transaction_description', e.target.value)
          }
        />

        <Button
          colorScheme='blue'
          onClick={() => {
            storeTransactions(transaction)
            navigate('/')
          }}
        >
          add transaction
        </Button>
      </div>
    </Container>
  )
}

export default Transactions
