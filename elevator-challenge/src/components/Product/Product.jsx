import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import Rating from '../Rating/Rating';
import './Product.css';

const Product = ({ product, simpleVariant = false }) => {
    const { id, title, description, category, image, price, rating } = product;
    const rate = rating ? rating.rate : 'No rating';
    const count = rating ? rating.count : 0;

    const GlobalState = useContext(CartContext);
    const cartState = GlobalState.state; // Access the cart state
    const dispatch = GlobalState.dispatch;

    const [showPreview, setShowPreview] = useState(true);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [explode, setExplode] = useState(false);

    useEffect(() => {
        const productInCart = cartState.some((cartProduct) => cartProduct.id === product.id);
        setIsProductInCart(productInCart);
    }, [cartState, product.id]);

    const handleAddToCartClick = () => {
        if (!isProductInCart) {
            dispatch({ type: 'ADD', productPayload: product });
            setExplode(true);
            setTimeout(() => setExplode(false), 500);
        } else {
            dispatch({ type: 'REMOVE', productPayload: product });
        }
    };

    let truncatedDescription = description;
    if (!showFullDescription) {
        truncatedDescription = truncatedDescription.length > 120 ? truncatedDescription.substring(0, 120) + '...' : description;
    }

    return (
        <div className={`product-wrapper cart-container ${simpleVariant ? 'simple-detail-layout' : ''} ${showFullDescription ? '' : 'expanded'} ${showPreview ? '' : 'preview'}`}>
            
            {!simpleVariant && (
                <button className='preview' onClick={() => setShowPreview((prevState) => !prevState)}>
                    <FaEye />
                </button>
            )}
            <img src={image} alt={title} />
            <div className='product-details'>
                <span className='category'>{category}</span>
                <span className='price' data-currency="R">{price.toFixed(2)}</span>
                
                {!simpleVariant ? (
                    <Link to={`/product/${id}`} state={{ product }}>
                        <h3 className='title'>{title}</h3>
                    </Link>
                ) : (
                    <h3 className='title'>{title}</h3>
                )}
                <p className='description'>{!simpleVariant ? truncatedDescription : description}</p>
                <span className='rating'><Rating rating={rate} /> ({count})</span>
                <div className='actions'>
                    
                    {!simpleVariant && (
                        <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
                            show {showFullDescription ? 'less' : 'more'}
                        </button>
                    )}
                    <button className="add-to-cart" onClick={handleAddToCartClick}>
                        {isProductInCart ? 'Remove from cart' : 'Add to cart'}
                    </button>
                    {explode && (
                        <div className="cart-explosion">
                            {[...Array(6)].map((_, i) => (
                                <FaShoppingCart key={i} className={`cart-icon cart-${i}`} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
