import type { Product } from './product.types'

export type CartItem = {
  productId: string
  quantity: number
  product?: Product
  price?: number
}

export type Cart = {
  items: CartItem[]
  total: number
}

export type CartItemInput = {
  productId: string
  quantity: number
}
