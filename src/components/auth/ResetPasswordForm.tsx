import { useState, type FormEvent } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

export type ResetPasswordData = {
  password: string
  confirmPassword: string
}

type ResetPasswordFormProps = {
  onSubmit: (data: ResetPasswordData) => void | Promise<void>
  isSubmitting?: boolean
  error?: string
}

function ResetPasswordForm({ onSubmit, isSubmitting = false, error }: ResetPasswordFormProps) {
  const [data, setData] = useState<ResetPasswordData>({ password: '', confirmPassword: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    void onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        placeholder="New password"
        value={data.password}
        onChange={(event) => setData({ ...data, password: event.target.value })}
        required
      />
      <Input
        type="password"
        name="confirmPassword"
        autoComplete="new-password"
        placeholder="Confirm password"
        value={data.confirmPassword}
        onChange={(event) => setData({ ...data, confirmPassword: event.target.value })}
        required
      />
      {error && <p role="alert">{error}</p>}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Updating...' : 'Update password'}
      </Button>
    </form>
  )
}

export default ResetPasswordForm
