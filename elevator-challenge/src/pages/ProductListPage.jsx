import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero/Hero';
import Product from '../components/Product/Product';

const ProductListPage = () => {
    const productListTitle = 'Products List';
    const productListDescription = 'Products List Description';

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
            {products.map((product, index) => (
                <Product key={index} product={product} />
            )
            )}
        </>
    )
}

export default ProductListPage