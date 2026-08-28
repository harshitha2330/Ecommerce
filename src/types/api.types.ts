export type ApiErrorPayload = {
  message?: string
  code?: string
  details?: unknown
}

export type PaginatedResponse<T> = {
  items: T[]
  page: number
  limit: number
  total: number
  totalPages: number
}

export type ApiResponse<T> = {
  data: T
  message?: string
}
