import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__content">
        <Link className="navbar__brand" to="/" aria-label="MyShop home">
          MyShop
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>

        <form className="navbar__search" action="/search" method="get" role="search">
          <label className="navbar__search-label" htmlFor="navbar-search">
            Search products
          </label>
          <input
            id="navbar-search"
            name="q"
            type="search"
            placeholder="Search products"
          />
          <button type="submit">Search</button>
        </form>

        <nav className="navbar__actions" aria-label="Customer links">
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
