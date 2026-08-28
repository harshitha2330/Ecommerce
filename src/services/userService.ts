import { apiRequest } from './api'

export type UpdateUserInput = {
  name?: string
  email?: string
}

export const userService = {
  getProfile<TUser = unknown>(): Promise<TUser> {
    return apiRequest<TUser>('/users/me')
  },

  updateProfile<TUser = unknown>(input: UpdateUserInput): Promise<TUser> {
    return apiRequest<TUser>('/users/me', {
      method: 'PATCH',
      body: JSON.stringify(input),
    })
  },

  getAddresses<TAddress = unknown>(): Promise<TAddress[]> {
    return apiRequest<TAddress[]>('/users/me/addresses')
  },
}
