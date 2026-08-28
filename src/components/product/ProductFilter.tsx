interface ProductFilterProps {
  selectedCategoryId: number | undefined
  onCategoryChange: (categoryId: number | undefined) => void
}

function ProductFilter({ selectedCategoryId, onCategoryChange }: ProductFilterProps) {
  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    onCategoryChange(value === '' ? undefined : Number(value))
  }

  return (
    <div>
      <label htmlFor="product-category">Filter by category</label>
      <select
        id="product-category"
        value={selectedCategoryId ?? ''}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        <option value="1">Electronics</option>
        <option value="2">Clothing</option>
        <option value="3">Home &amp; Kitchen</option>
        <option value="4">Books</option>
      </select>
    </div>
  )
}

export default ProductFilter
