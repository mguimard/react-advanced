import { createContext } from 'react'

export const initialAuth = {
  token: localStorage.token,
  isAuthed: localStorage.token !== undefined,
}

export const AuthContext = createContext(null)