type OrderSummaryProps = {
  subtotal?: number
  shipping?: number
  total?: number
}

function OrderSummary({ subtotal = 0, shipping = 0, total = subtotal + shipping }: OrderSummaryProps) {
  return (
    <aside>
      <p>Subtotal: {subtotal}</p>
      <p>Shipping: {shipping}</p>
      <strong>Total: {total}</strong>
    </aside>
  )
}

export default OrderSummary
