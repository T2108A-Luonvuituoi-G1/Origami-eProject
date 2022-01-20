import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Css/AboutUsHeader.css'
import Background from '../Assets/Images/container.jpg'

function AboutUsHeader() {
    return (
        <div className='aboutus-header'
            style={{
                background: `url(${Background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='au-text-header'>
                <h1 className='au-text-h1'>We want all the best for you</h1>
                <Link className='au-header-btn' to="/products">Read more</Link>
            </div>
        </div>
    )
}

export default AboutUsHeader
