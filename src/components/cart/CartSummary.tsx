type CartSummaryProps = {
  total?: number
}

function CartSummary({ total = 0 }: CartSummaryProps) {
  return <aside>Total: {total}</aside>
}

export default CartSummary
