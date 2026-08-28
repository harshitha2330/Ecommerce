import { useState, type FormEvent } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

export type RegistrationData = {
  name: string
  email: string
  password: string
}

type RegisterFormProps = {
  onSubmit: (data: RegistrationData) => void | Promise<void>
  isSubmitting?: boolean
  error?: string
}

function RegisterForm({ onSubmit, isSubmitting = false, error }: RegisterFormProps) {
  const [data, setData] = useState<RegistrationData>({ name: '', email: '', password: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Name"
        value={data.name}
        onChange={(event) => setData({ ...data, name: event.target.value })}
        required
      />
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={data.email}
        onChange={(event) => setData({ ...data, email: event.target.value })}
        required
      />
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="Password"
        value={data.password}
        onChange={(event) => setData({ ...data, password: event.target.value })}
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating account...' : 'Create account'}
      </Button>
    </form>
  )
}

export default RegisterForm
