export type OrderItemData = {
  name?: string
  quantity?: number
  price?: number
}

type OrderItemProps = {
  item?: OrderItemData
}

function OrderItem({ item }: OrderItemProps) {
  return (
    <li>
      <span>{item?.name ?? 'Order item'}</span>
      <span> x {item?.quantity ?? 0}</span>
      <span> {item?.price ?? 0}</span>
    </li>
  )
}

export default OrderItem
