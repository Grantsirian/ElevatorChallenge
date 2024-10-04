import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import './Product.css';
import { CartContext } from '../../context/CartContext';
import Rating from '../Rating/Rating';

const Product = ({ product }) => {
    const { id, title, description, category, image, price, rating } = product;
    const rate = rating ? rating.rate : 'No rating';
    const count = rating ? rating.count : 0;

    const GlobalState = useContext(CartContext);
    const cartState = GlobalState.state; // Access the cart state
    const dispatch = GlobalState.dispatch;

    const [showPreview, setShowPreview] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        const productInCart = cartState.some((cartProduct) => cartProduct.id === product.id);
        setIsProductInCart(productInCart);
    }, [cartState, product.id]);

    const handleAddToCartClick = () => {
        if (!isProductInCart) {
            dispatch({ type: 'ADD', productPayload: product });
        } else {
            dispatch({ type: 'REMOVE', productPayload: product });
        }
    };

    let truncatedDescription = description;
    if (!showFullDescription) {
        truncatedDescription = truncatedDescription.length > 120 ? truncatedDescription.substring(0, 120) + '...' : description;
    }

    return (
        <div className={`product-wrapper ${showFullDescription ? '' : 'expanded'} ${showPreview ? '' : 'preview'}`}>
            <button className='preview' onClick={() => setShowPreview((prevState) => !prevState)}><FaEye /></button>
            <img src={image} alt={title} />
            <div className='product-details'>
                <span className='category'>{category}</span>
                <span className='price' data-currency="R">{price.toFixed(2)}</span>
                <Link to={`/product/${id}`} state={{product}}>
                    <h3 className='title'>{title}</h3>
                </Link>
                <p className='description'>{truncatedDescription}</p>
                <span className='rating'><Rating rating={rate} /> ({count})</span>
                <div className='actions'>
                    <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
                        show {showFullDescription ? 'less' : 'more'}
                    </button>
                    <button onClick={handleAddToCartClick}>
                        {isProductInCart ? 'Remove from cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
