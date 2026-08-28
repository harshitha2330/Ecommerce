import type { HTMLAttributes, ReactNode } from 'react'

type ModalProps = HTMLAttributes<HTMLDialogElement> & {
  children?: ReactNode
}

function Modal({ children, ...props }: ModalProps) {
  return <dialog {...props}>{children}</dialog>
}

export default Modal
