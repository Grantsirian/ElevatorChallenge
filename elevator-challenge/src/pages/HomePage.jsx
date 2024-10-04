import React from 'react';
import Hero from '../components/Hero/Hero';
import Product from '../components/Product/Product';
import useProducts from '../api/useProducts';
import styles from '../theme/style.module.css';

const HomePage = () => {
    const { data: products, isLoading, isError } = useProducts();
    const homeTitle = 'Elevator Products';
    const homeDescription = 'Welcome to the Elevator Challenge Products Home page!';
    const homeImage = './src/assets/new-product-concept.png';

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching products</div>;
    }

    const topRatedProducts = products
        ? [...products].sort((a, b) => (b.rating.rate - a.rating.rate)).slice(0, 3)
        : [];

    return (
        <>
            <Hero title={homeTitle} description={homeDescription} imgUrl={homeImage} />
            <section className={styles.container}>
                <div className={styles.groupContainer}>
                    <h2 className={styles.heading}>Top Rated Products</h2>
                    <ul className={styles.productListWrapper}>
                        {topRatedProducts.map(product => (
                            <li className={styles.productListItem} key={product.id}>
                                <Product product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};

export default HomePage;

