import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__brand" aria-labelledby="footer-brand-title">
          <h2 id="footer-brand-title">MyShop</h2>
          <p>Simple shopping for the products you love.</p>
        </section>

        <nav className="footer__navigation" aria-labelledby="footer-links-title">
          <h2 id="footer-links-title">Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
        </nav>

        <nav className="footer__navigation" aria-labelledby="footer-support-title">
          <h2 id="footer-support-title">Customer Support</h2>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>&copy; {currentYear} MyShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
