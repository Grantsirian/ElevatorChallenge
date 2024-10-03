import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero/Hero';
import Product from '../components/Product/Product';
import styles from '../theme/style.module.css';

const ProductListPage = () => {
    const productListTitle = 'Products List';
    const productListDescription = 'Products List Description';

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProductsJson();
    }, [])

    const getProductsJson = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const responseJson = await response.json();
        setProducts(responseJson);
    }

    return (
        <>
            <Hero title={productListTitle} description={productListDescription} />
            <section>
                <ul className={styles.productListWrapper}>
                    {products.map((product, index) => (
                        <li className={styles.productListItem} key={index}>
                            <Product product={product} />
                        </li>
                    )
                    )}
                </ul>
            </section>
        </>
    )
}

export default ProductListPage