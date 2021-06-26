import React from 'react'
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <>
            <Link to="/React-projects/design/london">London</Link> -
            <Link to="/React-projects/design/explore-space">Explore Space</Link> -
            <Link to="/React-projects/design/ecstacy">Ecstacy</Link>
            <br/>
            Home page
        </>
    )
}

export default Home