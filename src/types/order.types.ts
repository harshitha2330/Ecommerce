import type { Address } from './user.types'
import type { Product } from './product.types'

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export type OrderItem = {
  productId: string
  product?: Product
  quantity: number
  price: number
}

export type Order = {
  id: string
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  shipping: number
  total: number
  address?: Address
  createdAt?: string
}

export type CreateOrderInput = {
  addressId: string
  paymentMethod: string
}
