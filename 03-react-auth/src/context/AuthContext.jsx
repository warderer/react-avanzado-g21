/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

// #1 Crear el contexto
const AuthContext = createContext()

// #2 Crear el proveedor
const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [userPayload, setUserPayload] = useState(null) // JWT Payload decodificado

  const login = (token) => {
    // Guardamos el token en el localStorage
    window.localStorage.setItem('token', token)
    // Decodificamos el token
    const decoded = jwt_decode(token)
    setUserPayload(decoded)
    setIsAuth(true)
  }

  const logout = () => {
    // Borrar el token del localStorage
    window.localStorage.removeItem('token')
    setUserPayload(null)
    setIsAuth(false)
  }

  useEffect(() => {
    // recuperamos el token, si no existe devolvera null
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUserPayload(decoded)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    userPayload,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}

// #3 Consumidor del contexto
const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}

export {
  AuthContext,
  AuthProvider,
  useAuthContext
}
