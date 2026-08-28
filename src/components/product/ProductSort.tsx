interface ProductSortProps {
  selectedSort: string
  onSortChange: (sort: string) => void
}

function ProductSort({ selectedSort, onSortChange }: ProductSortProps) {
  return (
    <div>
      <label htmlFor="product-sort">Sort products</label>
      <select
        id="product-sort"
        value={selectedSort}
        onChange={(event) => onSortChange(event.target.value)}
      >
        <option value="">Default</option>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating_desc">Rating: High to Low</option>
        <option value="name_asc">Name: A to Z</option>
      </select>
    </div>
  )
}

export default ProductSort
