import type { Product } from '../../types/product.types'
import ProductCard from './ProductCard'
import './ProductGrid.css'

interface ProductGridProps {
  products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p>No products found.</p>
  }

  return (
    <section aria-label="Product grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductGrid
