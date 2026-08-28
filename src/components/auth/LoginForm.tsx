import { useState, type FormEvent } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

export type LoginCredentials = {
  email: string
  password: string
}

type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => void | Promise<void>
  isSubmitting?: boolean
  error?: string
}

function LoginForm({ onSubmit, isSubmitting = false, error }: LoginFormProps) {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void onSubmit(credentials)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
        required
      />
      <Input
        type="password"
        name="password"
        autoComplete="current-password"
        placeholder="Password"
        value={credentials.password}
        onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </Button>
    </form>
  )
}

export default LoginForm
