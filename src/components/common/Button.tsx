import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>
}

export default Button
