import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/Cart.png';

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0); // Example cart item count

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-icon" />
        <p>Fashion Republic</p>
      </div>
      
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
      </ul>
      
      <div className="nav-login-cart">
        <button className="login-btn">Log in</button>
        <div className="cart-container">
          <img src={cartIcon} alt="cart" className="cart-icon" />
          {cartItems > 0 && <div className="cart-count">{cartItems}</div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;