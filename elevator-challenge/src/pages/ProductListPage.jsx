import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Product from '../components/Product/Product';
import styles from '../theme/style.module.css';
import { FaFrown } from 'react-icons/fa';

const ProductListPage = () => {
    const productListTitle = 'Products List';
    const productListDescription = 'Come choose a product from our incredible collection consisting of as many as 20 items!';
    const productListImage = './src/assets/new-product-concept.png';

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
            <Hero title={productListTitle} description={productListDescription} imgUrl={productListImage} />
            <section className={styles.container}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {Object.keys(groupedProducts).map((category) => (
                    <div className={styles.groupContainer} key={category}>
                        <h2 className={styles.heading}>{category}</h2>
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
                    <div className="no-results">
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop stopColor="#55AADD" offset="0%" />
                                <stop stopColor="#637EEA" offset="100%" />
                            </linearGradient>
                        </svg>
                        <FaFrown size={48} className='theme-icon' style={{ fill: "url(#blue-gradient)" }} />
                        <p>No products found for "{searchTerm}"</p>
                    </div>

                )}
            </section>
        </>
    );
};

export default ProductListPage;
