import { BsX } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { GridItem, Heading } from '@chakra-ui/react'
import { useState } from 'react'

const NoteCard = ({ note, deleteNote }) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <GridItem
      bg={'blue.100'}
      borderRadius={10}
      padding={5}
      style={{ position: 'relative' }}
      onClick={() => setVisible(!isVisible)}
    >
      <Heading as='h4' size='sm' style={{ textTransform: 'uppercase' }}>
        {note.note_title}
      </Heading>
      <p>
        {new Intl.NumberFormat('en-Us', {
          style: 'currency',
          currency: 'TND',
        }).format(note.note_amount)}
      </p>

      {isVisible && (
        <p style={{ color: '#0a0a0a80' }}>{note.note_description}</p>
      )}

      <motion.button
        whileTap={{ scale: 0.8 }}
        style={{ ...button_style }}
        onClick={deleteNote}
      >
        <BsX size={18} />
      </motion.button>
    </GridItem>
  )
}

const button_style = {
  zIndex: 100,
  position: 'absolute',
  top: 0,
  right: 0,
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default NoteCard
