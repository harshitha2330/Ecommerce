import type { ReactNode } from 'react'
import OrderStatus, { type OrderStatusValue } from './OrderStatus'

export type OrderCardData = {
  id?: string | number
  status?: OrderStatusValue
  total?: number
}

type OrderCardProps = {
  order?: OrderCardData
  children?: ReactNode
}

function OrderCard({ order, children }: OrderCardProps) {
  return (
    <article>
      <header>
        <h2>Order #{order?.id ?? '—'}</h2>
        <OrderStatus status={order?.status} />
      </header>
      {children}
      <p>Total: {order?.total ?? 0}</p>
    </article>
  )
}

export default OrderCard
