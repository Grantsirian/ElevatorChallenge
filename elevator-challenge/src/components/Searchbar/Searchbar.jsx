// SearchBar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './SearchBar.css'; 

const SearchBar = ({ products }) => {
    const { state: cartItems } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);

    
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        setShowResults(value.length > 0); // Show results if input has text
    };

    return (
        <div className='search-wrapper'>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleInputChange}
                onBlur={() => setShowResults(false)}
                onFocus={() => setShowResults(searchTerm.length > 0)}
            />
            {showResults && filteredProducts.length > 0 && (
                <div className="search-results">
                    {filteredProducts.map(product => {
                        const isInCart = cartItems.some(cartItem => cartItem.id === product.id);
                        return (
                            <div key={product.id} className="search-result-item">
                                <Link to={`/product/${product.id}`} className="search-link">
                                    {product.title} {isInCart && <span className="in-cart">(In Cart)</span>}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
