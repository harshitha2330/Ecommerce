import { API_BASE_URL, STORAGE_KEYS } from '../utils/constants'
import { getStoredString, removeStoredValue, setStoredString } from '../utils/storage'

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

export function getAuthToken(): string | null {
  return getStoredString(STORAGE_KEYS.authToken)
}

export function setAuthToken(token: string | null): void {
  if (token) {
    setStoredString(STORAGE_KEYS.authToken, token)
  } else {
    removeStoredValue(STORAGE_KEYS.authToken)
  }
}

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers)
  headers.set('Accept', 'application/json')

  if (init.body && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json')
  }

  const token = getAuthToken()
  if (token) headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_BASE_URL}${path}`, { ...init, headers })
  const contentType = response.headers.get('content-type') ?? ''
  const payload = response.status === 204
    ? undefined
    : contentType.includes('application/json')
      ? await response.json()
      : await response.text()

  if (!response.ok) {
    const message = typeof payload === 'object' && payload !== null && 'message' in payload
      ? String(payload.message)
      : response.statusText || 'Request failed'
    throw new ApiError(response.status, message, payload)
  }

  return payload as T
}
