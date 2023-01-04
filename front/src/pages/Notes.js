import React from 'react'
import { Button, Input, Textarea, Container } from '@chakra-ui/react'

const Notes = () => {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Input placeholder={'transaction name'} />
        <Input placeholder={'transaction amount'} />
        <Textarea placeholder={'transcation description'} />
        <Button colorScheme='blue'>add transaction</Button>
      </div>
    </Container>
  )
}

export default Notes
