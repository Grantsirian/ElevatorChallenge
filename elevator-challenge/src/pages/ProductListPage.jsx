import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Product from '../components/Product/Product';
import styles from '../theme/style.module.css';

const ProductListPage = () => {
    const productListTitle = 'Products List';
    const productListDescription = 'Products List Description';

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        getProductsJson();
    }, []);

    const getProductsJson = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const responseJson = await response.json();
        setProducts(responseJson);
    };

    // Filter products based on search term
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Group products by category
    const groupedProducts = filteredProducts.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <>
            <Hero title={productListTitle} description={productListDescription} />
            <section>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {Object.keys(groupedProducts).map((category) => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <ul className={styles.productListWrapper}>
                            {groupedProducts[category].map((product, index) => (
                                <li className={styles.productListItem} key={index}>
                                    <Product product={product} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                {filteredProducts.length === 0 && searchTerm && (
                    <p>No products found for "{searchTerm}"</p>
                )}
            </section>
        </>
    );
};

export default ProductListPage;
