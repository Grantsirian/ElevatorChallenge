import React, { useState } from 'react';
import {FaEye} from 'react-icons/fa';
import './Product.css';

const Product = ({ product }) => {
    const { title, description, category, image, price, rating } = product;
    const rate = rating ? rating.rate : 'No rating';
    const count = rating ? rating.count : 0;

    let truncatedDescription = description;
    const [addProductToCart, setAddProductToCart] = useState([]);
    const [removeProductFromCart, setRemoveProductFromCart] = useState([]);
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);
    if (!showFullDescription) {
        truncatedDescription = truncatedDescription.length > 150 ? truncatedDescription.substring(0, 150) + '...' : description;
    }
    return (
        <div className={`product-wrapper ${showFullDescription ? '' : 'expanded'} ${showPreview ? '' : 'preview'}`}>
            <button className='preview' onClick={() => setShowPreview((prevState) => !prevState)}><FaEye/></button>
            <img src={image} alt={title} />
            <div className='product-details'>
                <span className='category'>{category}</span>
                <span className='price' data-currency="R">{price.toFixed(2)}</span>
                <h3 className='title'>{title}</h3>
                <p className='description'>{truncatedDescription}</p>
                <span className='rating'>{rate} {count}</span>
                <div className='actions'>
                    <button onClick={() => setShowFullDescription((prevState) => !prevState)}>
                        show {showFullDescription ? 'less' : 'more'}
                    </button>
                    <button onClick={() => setIsProductInCart((prevState) => !prevState)}>
                        {isProductInCart ? 'remove from' : 'add to'} cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product