import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../theme/style.module.css';
import Product from '../components/Product/Product';

const ProductDetailPage = () => {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <section className={styles.groupContainer}>
            <Product product={product} simpleVariant={true}/>
        </section>
    );
};

export default ProductDetailPage;
