import { Link } from 'react-router-dom'
import type { Product } from '../../types/product.types'

import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = () => {
    // Add to Cart will be connected to the cart service later.
  }

  const handleWishlist = () => {
    // Wishlist will be connected to the wishlist service later.
  }

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={product.imageUrl} alt={product.name} loading="lazy" />
      </div>

      <div className="product-card__content">
        <h2 className="product-card__name">{product.name}</h2>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        <p className="product-card__category">Category: {product.categoryName}</p>
        <p className="product-card__rating">
          Rating: {product.rating.toFixed(1)} / 5 ({product.reviewCount} reviews)
        </p>

        <div className="product-card__actions">
          <Link className="product-card__details" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button type="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button type="button" onClick={handleWishlist}>
            Wishlist
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
