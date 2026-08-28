import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { wishlistService } from '../services/wishlistService'

export type WishlistState = {
  productIds: string[]
}

type WishlistContextValue = {
  wishlist: WishlistState
  isLoading: boolean
  refresh: () => Promise<WishlistState>
  add: (productId: string) => Promise<WishlistState>
  remove: (productId: string) => Promise<WishlistState>
}

const emptyWishlist: WishlistState = { productIds: [] }
const WishlistContext = createContext<WishlistContextValue | undefined>(undefined)

type WishlistProviderProps = {
  children: ReactNode
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<WishlistState>(emptyWishlist)
  const [isLoading, setIsLoading] = useState(false)

  const refresh = useCallback(async () => {
    setIsLoading(true)
    try {
      const nextWishlist = await wishlistService.get<WishlistState>()
      setWishlist(nextWishlist)
      return nextWishlist
    } finally {
      setIsLoading(false)
    }
  }, [])

  const add = useCallback(async (productId: string) => {
    const nextWishlist = await wishlistService.add<WishlistState>(productId)
    setWishlist(nextWishlist)
    return nextWishlist
  }, [])

  const remove = useCallback(async (productId: string) => {
    const nextWishlist = await wishlistService.remove<WishlistState>(productId)
    setWishlist(nextWishlist)
    return nextWishlist
  }, [])

  const value = useMemo(
    () => ({ wishlist, isLoading, refresh, add, remove }),
    [wishlist, isLoading, refresh, add, remove],
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist(): WishlistContextValue {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used inside WishlistProvider')
  return context
}
