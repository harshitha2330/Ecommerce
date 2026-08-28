const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')

export class ApiError extends Error {
  readonly status: number
  readonly details: unknown

  constructor(status: number, message: string, details?: unknown) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.details = details
  }
}

export function getAuthToken(): null {
  return null
}

export function setAuthToken(_token: string | null): void {
  // Authentication will be implemented when the backend contract is available.
}

export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers)
  headers.set('Accept', 'application/json')

  if (typeof options.body === 'string' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to reach the backend'
    throw new ApiError(0, `Network request failed: ${message}`)
  }

  const contentType = response.headers.get('content-type') ?? ''
  const responseText = response.status === 204 ? '' : await response.text()
  let responseData: unknown = responseText

  if (responseText && contentType.includes('application/json')) {
    try {
      responseData = JSON.parse(responseText) as unknown
    } catch {
      responseData = responseText
    }
  }

  if (!response.ok) {
    const message = typeof responseData === 'object' && responseData !== null && 'message' in responseData
      ? String(responseData.message)
      : response.statusText || 'Request failed'
    throw new ApiError(response.status, message, responseData)
  }

  return responseData as T
}
