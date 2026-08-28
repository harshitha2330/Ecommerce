function Modal({ children, ...props }) {
  return <dialog {...props}>{children}</dialog>
}

export default Modal
