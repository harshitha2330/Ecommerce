function ProductCard({ product }) {
  return <article>{product?.name ?? 'Product'}</article>
}

export default ProductCard
