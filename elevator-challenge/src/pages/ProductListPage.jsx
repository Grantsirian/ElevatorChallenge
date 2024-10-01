import React from 'react'
import Hero from '../components/Hero';

const ProductListPage = () => {
    const productListTitle = 'Products List';
    const productListDescription = 'Products List Description';
    
    return (
        <>
            <Hero title={productListTitle} description={productListDescription} />
        </>
    )
}

export default ProductListPage