import type { ReactNode } from 'react'

type ProductGridProps = {
  children?: ReactNode
}

function ProductGrid({ children }: ProductGridProps) {
  return <section>{children}</section>
}

export default ProductGrid
