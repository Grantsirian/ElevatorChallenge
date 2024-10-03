import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { CartContext } from '../../context/CartContext';

const Navbar = ({ products }) => {
    const { state: cartItems } = useContext(CartContext);
    const totalItemsInCart = cartItems.reduce((total, product) => total + product.quantity, 0);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Use navigate from react-router-dom

    const handleSearch = () => {
        if (searchTerm) {
            // Navigate to the ProductListPage with search term as a query parameter
            navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
        }
    };

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
                        <Link className="nav" to={nav.url}>
                            {nav.name}
                            {nav.badge && <span className='nav-badge'>{nav.badge}</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
