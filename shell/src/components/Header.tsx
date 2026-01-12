// shell/src/components/Header.tsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  // Lắng nghe event từ cart microfrontend
  

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img 
            className="logo"
            src="/images/logo-white.png"
            alt="Amazon Logo"
          />
          <img 
            className="mobile-logo"
            src="/images/mobile-logo-white.png"
            alt="Amazon Mobile Logo"
          />
        </Link>
      </div>

      <div className="middle-section">
        <input 
          className="search-bar" 
          type="text" 
          placeholder="Search" 
        />
        <button className="search-button">
          <img 
            className="search-icon" 
            src="/images/icons/search-icon.png"
            alt="Search"
          />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/cart">
          <img 
            className="cart-icon" 
            src="/images/icons/cart-icon.png"
            alt="Cart"
          />
          <div className="cart-quantity">{cartCount}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}