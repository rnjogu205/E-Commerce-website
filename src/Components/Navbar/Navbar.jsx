import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cartIcon from '../../assets/Cart.png';
import {Link} from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Navbar = () => {
  const {cart} = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-icon" />
        <p>Fashion Republic</p>
      </div>
      
      <ul className="nav-menu">
        <li><Link to='/'>Shop</Link> </li>
        <li><Link to='/men'>Men</Link></li>
        <li><Link to='/women'>Women</Link></li>
      </ul>
      
      <div className="nav-login-cart">
        <Link to='/login'><button className="login-btn">Log in</button></Link>
        <div className="cart-container">
          <Link to='/cart'>
            <img src={cartIcon} alt="cart" className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;