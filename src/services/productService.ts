import { apiRequest } from './api'

export type ProductQuery = {
  page?: number
  limit?: number
  search?: string
  categoryId?: string
  sort?: string
}

const toQueryString = (query: ProductQuery = {}): string => {
  const params = new URLSearchParams()
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== '') params.set(key, String(value))
  })
  const queryString = params.toString()
  return queryString ? `?${queryString}` : ''
}

export const productService = {
  list<TProduct = unknown>(query?: ProductQuery): Promise<TProduct[]> {
    return apiRequest<TProduct[]>(`/products${toQueryString(query)}`)
  },

  getById<TProduct = unknown>(productId: string): Promise<TProduct> {
    return apiRequest<TProduct>(`/products/${encodeURIComponent(productId)}`)
  },
}
