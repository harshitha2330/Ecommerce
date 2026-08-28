import { apiRequest } from './api'

export type CartItemInput = {
  productId: string
  quantity: number
}

export const cartService = {
  get<TCart = unknown>(): Promise<TCart> {
    return apiRequest<TCart>('/cart')
  },

  addItem<TCart = unknown>(item: CartItemInput): Promise<TCart> {
    return apiRequest<TCart>('/cart/items', {
      method: 'POST',
      body: JSON.stringify(item),
    })
  },

  updateItem<TCart = unknown>(productId: string, quantity: number): Promise<TCart> {
    return apiRequest<TCart>(`/cart/items/${encodeURIComponent(productId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    })
  },

  removeItem<TCart = unknown>(productId: string): Promise<TCart> {
    return apiRequest<TCart>(`/cart/items/${encodeURIComponent(productId)}`, {
      method: 'DELETE',
    })
  },
}
