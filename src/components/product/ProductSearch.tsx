import { useEffect, useState, type FormEvent } from 'react'

interface ProductSearchProps {
  value: string
  onSearch: (value: string) => void
}

function ProductSearch({ value, onSearch }: ProductSearchProps) {
  const [searchText, setSearchText] = useState(value)

  useEffect(() => {
    setSearchText(value)
  }, [value])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(searchText)
  }

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        type="search"
        placeholder="Search products"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default ProductSearch
