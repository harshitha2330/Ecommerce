import { apiRequest } from './api'
import type { Product, ProductQuery } from '../types/product.types'

function buildQueryString(query: ProductQuery): string {
  const params = new URLSearchParams()

  if (query.page !== undefined) params.set('page', String(query.page))
  if (query.limit !== undefined) params.set('limit', String(query.limit))
  if (query.search) params.set('search', query.search)
  if (query.categoryId) params.set('categoryId', query.categoryId)
  if (query.sort) params.set('sort', query.sort)

  const queryString = params.toString()
  return queryString ? `?${queryString}` : ''
}

export function getProducts(query: ProductQuery = {}): Promise<Product[]> {
  return apiRequest<Product[]>(`/api/products${buildQueryString(query)}`)
}

export function getProductById(id: number): Promise<Product> {
  return apiRequest<Product>(`/api/products/${id}`)
}
