import React from 'react'
import Hero from '../components/Hero'

const HomePage = () => {
    const homeTitle = 'Elevator Products';
    const homeDescription = 'Elevator Products Description';
    
    return (
        <>
            <Hero title={homeTitle} description={homeDescription} />
        </>
    )
}

export default HomePage