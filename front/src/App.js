import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter as Routage, Routes, Route } from 'react-router-dom'

import Auth from './pages/Auth'
import Transactions from './pages/Transactions'
import Notes from './pages/Notes'

import Header from './components/navbar/Header'

function App() {
  return (
    <ChakraProvider>
      <Routage>
        <Header />
        <Routes>
          <Route path={'notes'} element={<Notes />} />
          <Route path={'/transaction'} element={<Transactions />} />
          <Route path={'/auth'} element={<Auth />} />
        </Routes>
      </Routage>
    </ChakraProvider>
  )
}

export default App
