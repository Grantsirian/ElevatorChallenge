import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <>
            <h1>404 Not Found</h1>
            <Link to="/">
                Take me to home page
            </Link>
        </>

    )
}

export default NotFoundPage