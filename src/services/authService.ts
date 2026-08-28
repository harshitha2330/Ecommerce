import { apiRequest, setAuthToken } from './api'

export type LoginInput = {
  email: string
  password: string
}

export type RegisterInput = {
  name: string
  email: string
  password: string
}

export type AuthResponse<TUser = unknown> = {
  token: string
  user: TUser
}

export const authService = {
  async login<TUser = unknown>(input: LoginInput): Promise<AuthResponse<TUser>> {
    const response = await apiRequest<AuthResponse<TUser>>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(input),
    })
    setAuthToken(response.token)
    return response
  },

  async register<TUser = unknown>(input: RegisterInput): Promise<AuthResponse<TUser>> {
    const response = await apiRequest<AuthResponse<TUser>>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(input),
    })
    setAuthToken(response.token)
    return response
  },

  forgotPassword(email: string): Promise<void> {
    return apiRequest<void>('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  },

  resetPassword(token: string, password: string): Promise<void> {
    return apiRequest<void>('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ token, password }),
    })
  },

  logout(): void {
    setAuthToken(null)
  },
}
