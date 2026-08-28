import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { authService, type LoginInput, type RegisterInput } from '../services/authService'
import { getAuthToken } from '../services/api'

export type AuthUser = {
  id?: string
  name?: string
  email?: string
  role?: string
}

type AuthContextValue = {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (input: LoginInput) => Promise<AuthUser>
  register: (input: RegisterInput) => Promise<AuthUser>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const isAuthenticated = user !== null || getAuthToken() !== null

  const login = useCallback(async (input: LoginInput) => {
    setIsLoading(true)
    try {
      const response = await authService.login<AuthUser>(input)
      setUser(response.user)
      return response.user
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (input: RegisterInput) => {
    setIsLoading(true)
    try {
      const response = await authService.register<AuthUser>(input)
      setUser(response.user)
      return response.user
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    authService.logout()
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({ user, isAuthenticated, isLoading, login, register, logout }),
    [user, isAuthenticated, isLoading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
