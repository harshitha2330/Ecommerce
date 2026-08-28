type CartItemProps = {
  item?: { name?: string }
}

function CartItem({ item }: CartItemProps) {
  return <article>{item?.name ?? 'Cart item'}</article>
}

export default CartItem
