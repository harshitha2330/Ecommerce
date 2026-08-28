import { apiRequest } from './api'

export const wishlistService = {
  get<TWishlist = unknown>(): Promise<TWishlist> {
    return apiRequest<TWishlist>('/wishlist')
  },

  add<TWishlist = unknown>(productId: string): Promise<TWishlist> {
    return apiRequest<TWishlist>('/wishlist/items', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    })
  },

  remove<TWishlist = unknown>(productId: string): Promise<TWishlist> {
    return apiRequest<TWishlist>(`/wishlist/items/${encodeURIComponent(productId)}`, {
      method: 'DELETE',
    })
  },
}
