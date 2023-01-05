import React, { useEffect, useState } from 'react'
import { __data } from '../context/DataProvider'

import NoteCard from '../components/note-card/NoteCard'

import { Button, Input, Textarea, Container, Grid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
  const navigate = useNavigate()
  const { notes, storeNotes, deleteNote } = __data()

  const [note, setNote] = useState({
    note_title: '',
    note_amount: 0,
    note_description: '',
  })

  const handleChange = (binding, event) => {
    setNote({ ...note, [binding]: event })
  }

  useEffect(() => {
    if (localStorage.getItem('logged') === 'false') {
      navigate('/auth')
    }
  })

  return (
    <div>
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input
            placeholder={'transaction name'}
            onChange={(e) => handleChange('note_title', e.target.value)}
          />
          <Input
            placeholder={'transaction amount'}
            onChange={(e) => handleChange('note_amount', e.target.value)}
          />
          <Textarea
            placeholder={'transcation description'}
            onChange={(e) => handleChange('note_description', e.target.value)}
          />
          <Button colorScheme='blue' onClick={() => storeNotes(note)}>
            Add Note
          </Button>
        </div>
      </Container>

      <Grid
        templateColumns='repeat(5, 1fr)'
        gap={6}
        padding={16}
        style={{ marginTop: '75px' }}
      >
        {notes &&
          notes.length > 0 &&
          notes.map((el) => (
            <NoteCard
              key={el._id}
              note={el}
              deleteNote={() => deleteNote(el._id)}
            />
          ))}
      </Grid>
    </div>
  )
}

export default Notes
