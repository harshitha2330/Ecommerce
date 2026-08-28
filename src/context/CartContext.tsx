import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { cartService, type CartItemInput } from '../services/cartService'

export type CartItem = {
  productId: string
  quantity: number
  name?: string
  price?: number
}

export type CartState = {
  items: CartItem[]
  total: number
}

type CartContextValue = {
  cart: CartState
  isLoading: boolean
  refresh: () => Promise<CartState>
  addItem: (item: CartItemInput) => Promise<CartState>
  updateItem: (productId: string, quantity: number) => Promise<CartState>
  removeItem: (productId: string) => Promise<CartState>
}

const emptyCart: CartState = { items: [], total: 0 }
const CartContext = createContext<CartContextValue | undefined>(undefined)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartState>(emptyCart)
  const [isLoading, setIsLoading] = useState(false)

  const refresh = useCallback(async () => {
    setIsLoading(true)
    try {
      const nextCart = await cartService.get<CartState>()
      setCart(nextCart)
      return nextCart
    } finally {
      setIsLoading(false)
    }
  }, [])

  const addItem = useCallback(async (item: CartItemInput) => {
    const nextCart = await cartService.addItem<CartState>(item)
    setCart(nextCart)
    return nextCart
  }, [])

  const updateItem = useCallback(async (productId: string, quantity: number) => {
    const nextCart = await cartService.updateItem<CartState>(productId, quantity)
    setCart(nextCart)
    return nextCart
  }, [])

  const removeItem = useCallback(async (productId: string) => {
    const nextCart = await cartService.removeItem<CartState>(productId)
    setCart(nextCart)
    return nextCart
  }, [])

  const value = useMemo(
    () => ({ cart, isLoading, refresh, addItem, updateItem, removeItem }),
    [cart, isLoading, refresh, addItem, updateItem, removeItem],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')
  return context
}
