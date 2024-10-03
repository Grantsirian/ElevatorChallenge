import React from 'react'
import './Hero.css';

const Hero = ({ title, description, imgUrl }) => {
    return (
        <section className='hero-wrapper'>
            <div className='image-wrapper'>
                <img src={imgUrl} alt='product cover' />
            </div>
            <div className='content-wrapper'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default Hero