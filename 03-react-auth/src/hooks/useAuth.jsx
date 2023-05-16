import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

// #3 Consumidor del contexto
export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
