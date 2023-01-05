import { useState, useEffect, useContext, createContext } from 'react'
import { supabase } from '../helper/supabase'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export const __auth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
  const [isLoading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()

  const login = async () => {
    await supabase.auth
      .signInWithOAuth({
        provider: 'google',
      })
      .then(() => {
        localStorage.setItem('logged', true)
      })
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut
    setCurrentUser({})
    localStorage.setItem('logged', false)
    if (!error) {
      navigate('/auth')
    }
  }

  useEffect(() => {
    !localStorage.getItem('logged') && localStorage.setItem('logged', false)
  }, [])

  return (
    <AuthContext.Provider value={{ isLoading, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
