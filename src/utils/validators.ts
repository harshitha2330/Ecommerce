export function isRequired(value: string): boolean {
  return value.trim().length > 0
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
}

export function isStrongPassword(value: string): boolean {
  return value.length >= 8
}

export function passwordsMatch(password: string, confirmation: string): boolean {
  return password.length > 0 && password === confirmation
}
