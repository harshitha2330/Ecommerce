import { apiRequest } from './api'

export const categoryService = {
  list<TCategory = unknown>(): Promise<TCategory[]> {
    return apiRequest<TCategory[]>('/categories')
  },

  getById<TCategory = unknown>(categoryId: string): Promise<TCategory> {
    return apiRequest<TCategory>(`/categories/${encodeURIComponent(categoryId)}`)
  },
}
