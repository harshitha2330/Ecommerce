import { useState, type FormEvent } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

type ForgotPasswordFormProps = {
  onSubmit: (email: string) => void | Promise<void>
  isSubmitting?: boolean
  error?: string
}

function ForgotPasswordForm({ onSubmit, isSubmitting = false, error }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void onSubmit(email)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send reset link'}
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
