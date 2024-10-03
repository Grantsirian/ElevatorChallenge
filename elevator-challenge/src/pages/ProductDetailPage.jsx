import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../theme/style.module.css';

const ProductDetailPage = () => {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <section className={styles.groupContainer}>
            <img src={product.image} alt={product.title} />
            <h1 className={styles.heading}>{product.title}</h1>
            <p>{product.description}</p>
            <span>{product.price.toFixed(2)}</span>
            {/* Add other product details here */}
        </section>
    );
};

export default ProductDetailPage;
