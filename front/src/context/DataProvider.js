import { useState, useEffect, useContext, createContext } from 'react'
import { fetcher } from '../helper/fetcher'

const DataContext = createContext()
export const __data = () => useContext(DataContext)

export default function DataProvider({ children }) {
  const [notes, setNotes] = useState([])
  const [transactions, setTransactions] = useState([])

  /**
   * notes
   */
  const storeNotes = (note) => {
    fetcher.post('/notes', note).then((res) => setNotes([res.data, ...notes]))
  }

  const deleteNote = (id) => {
    fetcher
      .delete(`/notes/${id}`)
      .then(() => setNotes(notes.filter((el) => el._id !== id)))
  }

  /**
   * transactions
   */
  const storeTransactions = (transaction) => {
    fetcher
      .post('/transaction', transaction)
      .then((res) => setTransactions([res.data, ...transactions]))
  }

  useEffect(() => {
    fetcher.get('/notes').then((res) => setNotes(res.data))
    fetcher.get('/transaction').then((res) => setTransactions(res.data))
  }, [])

  return (
    <DataContext.Provider
      value={{ notes, transactions, storeNotes, deleteNote, storeTransactions }}
    >
      {children}
    </DataContext.Provider>
  )
}
