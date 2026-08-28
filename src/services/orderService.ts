import { apiRequest } from './api'

export type CreateOrderInput = {
  addressId: string
  paymentMethod: string
}

export const orderService = {
  list<TOrder = unknown>(): Promise<TOrder[]> {
    return apiRequest<TOrder[]>('/orders')
  },

  getById<TOrder = unknown>(orderId: string): Promise<TOrder> {
    return apiRequest<TOrder>(`/orders/${encodeURIComponent(orderId)}`)
  },

  create<TOrder = unknown>(input: CreateOrderInput): Promise<TOrder> {
    return apiRequest<TOrder>('/orders', {
      method: 'POST',
      body: JSON.stringify(input),
    })
  },

  cancel<TOrder = unknown>(orderId: string): Promise<TOrder> {
    return apiRequest<TOrder>(`/orders/${encodeURIComponent(orderId)}/cancel`, {
      method: 'POST',
    })
  },
}
