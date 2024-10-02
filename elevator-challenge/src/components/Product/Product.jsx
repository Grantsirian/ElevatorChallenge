import React from 'react'
import './Product.css'

const Product = ({product}) => {
    const { title, description, category, image, price, rating } = product
    const rate = rating ? rating.rate : 'No rating'
    const count = rating ? rating.count : 0

    return (
        <div className='product-wrapper'>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{category}</span>
            <img src={image} alt={title} />
            <span>{price}</span>
            <div>{rate}</div>
            <div>{count}</div>
        </div>
    )
}

export default Product