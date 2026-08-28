export type OrderStatusValue =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | string

type OrderStatusProps = {
  status?: OrderStatusValue
}

function OrderStatus({ status = 'pending' }: OrderStatusProps) {
  return <span>{status}</span>
}

export default OrderStatus
