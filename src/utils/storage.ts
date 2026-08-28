function canUseStorage(): boolean {
  return typeof window !== 'undefined' && window.localStorage !== undefined
}

export function getStoredValue<T>(key: string): T | null {
  if (!canUseStorage()) return null

  try {
    const value = window.localStorage.getItem(key)
    return value === null ? null : JSON.parse(value) as T
  } catch {
    return null
  }
}

export function getStoredString(key: string): string | null {
  if (!canUseStorage()) return null

  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function setStoredValue<T>(key: string, value: T): void {
  if (!canUseStorage()) return

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage can be unavailable or full; memory state remains authoritative.
  }
}

export function setStoredString(key: string, value: string): void {
  if (!canUseStorage()) return

  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Storage can be unavailable or full; memory state remains authoritative.
  }
}

export function removeStoredValue(key: string): void {
  if (!canUseStorage()) return

  try {
    window.localStorage.removeItem(key)
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }
}
