import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { state: cartItems } = useContext(CartContext);
    const totalItemsInCart = cartItems.reduce((total, product) => total + product.quantity, 0);

    const navLinks = [
        { name: 'Home', url: '/' },
        { name: 'Product List', url: '/product-list' },
        { name: 'Cart', url: '/cart', badge: totalItemsInCart > 0 ? totalItemsInCart : null }
    ];

    return (
        <nav className='nav-wrapper'>
            <div className='logo-wrapper'>
                <img src="./src/assets/logo.png" alt='' />
            </div>
            <ul>
                {navLinks.map((nav, index) => (
                    <li key={index}>
                        <NavLink 
                            className={({ isActive }) => `nav ${isActive ? 'active' : ''}`} 
                            to={nav.url}
                        >
                            {nav.name}
                            {nav.badge && <span className='nav-badge'>{nav.badge}</span>}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
