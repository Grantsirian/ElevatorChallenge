import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetailPage = () => {
    const location = useLocation();
    const product = location.state?.product; // Access the passed product

    if (!product) {
        return <p>Product not found</p>; // Handle the case where product is undefined
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <span>{product.price.toFixed(2)}</span>
            <img src={product.image} alt={product.title} />
            {/* Add other product details here */}
        </div>
    );
};

export default ProductDetailPage;
