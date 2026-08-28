type ProductCardProps = {
  product?: { name?: string }
}

function ProductCard({ product }: ProductCardProps) {
  return <article>{product?.name ?? 'Product'}</article>
}

export default ProductCard
