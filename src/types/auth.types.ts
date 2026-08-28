export type AuthUser = {
  id: string
  name: string
  email: string
  role: 'customer' | 'admin' | string
}

export type LoginInput = {
  email: string
  password: string
}

export type RegisterInput = {
  name: string
  email: string
  password: string
}

export type AuthResponse = {
  token: string
  user: AuthUser
}
