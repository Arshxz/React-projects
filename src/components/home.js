import React from 'react'
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <Link to="/design/london">London</Link> -
            <Link to="/design/explore-space">Explore Space</Link> -
            <Link to="/design/ecstacy">Ecstacy</Link>
            <br/>
            Home page
        </>
    )
}

export default Home