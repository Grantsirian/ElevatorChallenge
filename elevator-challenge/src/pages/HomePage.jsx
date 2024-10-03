import React from 'react'
import Hero from '../components/Hero/Hero'

const HomePage = () => {
    const homeTitle = 'Elevator Products';
    const homeDescription = 'Elevator Products Description';
    const homeImage = './src/assets/new-product-concept.png';

    return (
        <>
            <Hero title={homeTitle} description={homeDescription} imgUrl={homeImage} />
        </>
    )
}

export default HomePage