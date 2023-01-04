import React from 'react'
import { Button, Select, Input, Textarea, Container } from '@chakra-ui/react'

const Transactions = () => {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input placeholder={'transaction name'} />
        <Select placeholder='Select option'>
          <option value='Investment'>Investment</option>
          <option value='Expense'>Expense</option>
          <option value='Savings'>Savings</option>
        </Select>
        <Input placeholder={'transaction amount'} />
        <Textarea placeholder={'transcation description'} />

        <Button colorScheme='blue'>add transaction</Button>
      </div>
    </Container>
  )
}

export default Transactions
