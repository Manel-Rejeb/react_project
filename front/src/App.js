import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter as Routage, Routes, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import Notes from './pages/Notes'
import History from './pages/History'
import Transactions from './pages/Transactions'

import Header from './components/navbar/Header'
import DataProvider from './context/DataProvider'
import EditTransactions from './pages/EditTransaction'

function App() {
  return (
    <ChakraProvider>
      <DataProvider>
        <Routage>
          <Header />
          <Routes>
            <Route path={'/'} element={<History />} />
            <Route path={'notes'} element={<Notes />} />
            <Route path={'/transaction'} element={<Transactions />} />
            <Route path={'/transaction/:id'} element={<EditTransactions />} />
            <Route path={'/auth'} element={<Auth />} />
          </Routes>
        </Routage>
      </DataProvider>
    </ChakraProvider>
  )
}

export default App
