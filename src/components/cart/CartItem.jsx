function CartItem({ item }) {
  return <article>{item?.name ?? 'Cart item'}</article>
}

export default CartItem
