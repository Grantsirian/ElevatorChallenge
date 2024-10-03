import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navClass = "nav";
    const navLinks = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Product List',
            url: '/product-list'
        },
        {
            name: 'Cart',
            url: '/cart'
        }
    ]
    return (
        <nav className='nav-wrapper'>
            <div className='logo-wrapper'>
                <img src="./src/assets/logo.png" alt=''/>
            </div>
            <div className='search-wrapper'>

            </div>
            <ul>
                {navLinks.map((nav, index) => {
                    return (
                        <li key={index}>
                            <Link className={navClass} to={nav.url}>{nav.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar