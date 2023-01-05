import React, { useEffect, useState } from 'react'
import { Button, Select, Input, Textarea, Container } from '@chakra-ui/react'
import { __data } from '../context/DataProvider'

import { useNavigate, useParams } from 'react-router-dom'

const EditTransactions = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { oneTransaction, getOneTransaction, updateTransaction } = __data()

  const [transaction, setTransaction] = useState(oneTransaction)

  const handleChange = (binding, event) => {
    setTransaction({ ...oneTransaction, [binding]: event })
  }

  useEffect(() => {
    getOneTransaction(id)
  }, [])

  const option = ['Investment', 'Expense', 'Savings']

  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input
          defaultValue={oneTransaction.transaction_name}
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
            <option
              key={key}
              value={el}
              selected={oneTransaction.transaction_type}
            >
              {el}
            </option>
          ))}
        </Select>
        <Input
          defaultValue={oneTransaction.transaction_amount}
          placeholder={'transaction amount'}
          onChange={(e) => handleChange('transaction_amount', e.target.value)}
        />
        <Textarea
          defaultValue={oneTransaction.transaction_description}
          placeholder={'transcation description'}
          onChange={(e) =>
            handleChange('transaction_description', e.target.value)
          }
        />

        <Button
          colorScheme='blue'
          onClick={() => {
            updateTransaction(transaction, id)
            navigate('/')
          }}
        >
          update transaction
        </Button>
      </div>
    </Container>
  )
}

export default EditTransactions
