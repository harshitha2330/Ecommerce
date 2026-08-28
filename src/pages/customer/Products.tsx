import { useEffect, useState } from 'react'
import ProductGrid from '../../components/product/ProductGrid'
import Pagination from '../../components/product/Pagination'
import ProductFilter from '../../components/product/ProductFilter'
import ProductSearch from '../../components/product/ProductSearch'
import type { Product, ProductQuery } from '../../types/product.types'
import { getProducts } from '../../services/productService'

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined)
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(12)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [totalPages, setTotalPages] = useState<number | null>(null)

  useEffect(() => {
    let isCancelled = false

    const loadProducts = async () => {
      const query: ProductQuery = { page, limit, search, categoryId, sort }

      try {
        setIsLoading(true)
        setError('')
        setTotalPages(null)
        const loadedProducts = await getProducts(query)

        if (!isCancelled) {
          setProducts(loadedProducts)
        }
      } catch (requestError: unknown) {
        if (!isCancelled) {
          const message = requestError instanceof Error
            ? requestError.message
            : 'Unable to load products right now.'
          setError(message)
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadProducts()

    return () => {
      isCancelled = true
    }
  }, [page, limit, search, categoryId, sort])

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(0)
  }

  return (
    <div>
      <h1>Products</h1>
      <p>Browse our selection of products.</p>
      <section aria-label="Product search and query options">
        <ProductSearch value={search} onSearch={handleSearch} />

        <ProductFilter
          selectedCategoryId={categoryId}
          onCategoryChange={(newCategoryId) => {
            setCategoryId(newCategoryId)
            setPage(0)
          }}
        />

        <label htmlFor="product-sort">Sort</label>
        <select id="product-sort" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="">Default</option>
          <option value="price_asc">Price: Low to high</option>
          <option value="price_desc">Price: High to low</option>
          <option value="rating_desc">Rating</option>
        </select>

        <label htmlFor="product-page">Page</label>
        <input
          id="product-page"
          type="number"
          min="0"
          value={page}
          onChange={(event) => setPage(Number(event.target.value))}
        />

        <label htmlFor="product-limit">Products per page</label>
        <input
          id="product-limit"
          type="number"
          min="1"
          value={limit}
          onChange={(event) => setLimit(Number(event.target.value))}
        />
      </section>
      {isLoading && <p>Loading products...</p>}
      {!isLoading && error && <p role="alert">We could not load products. {error}</p>}
      {!isLoading && !error && <ProductGrid products={products} />}
      {!isLoading && !error && totalPages !== null && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}
    </div>
  )
}

export default Products
