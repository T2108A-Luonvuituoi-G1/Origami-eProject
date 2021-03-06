import React, { Component } from 'react'
import '../Assets/Css/HomeHeader.css'
import { Link } from 'react-router-dom';
import HomeImgHeader from '../Assets/Images/HomeImgHeader.png'
import HomeBackgroundHeader from '../Assets/Images/HomeBackgroundHeader.jpg'

export default class HomeHeader extends Component {
    render() {
        return (
            <>
                {/* HEADER */}
                <div className='home-page-header'
                    style={{
                        background: `url(${HomeBackgroundHeader})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='home-text-header'>
                        <h1 className='home-text-h1'>You can make all of origami</h1>
                        <p className='home-text-p'>Make Your Favorite Origami Now!</p>
                        <Link className='home-header-btn' to="/products">Try now</Link>
                    </div>
                    <div className='home-image-header-sub'></div>
                    <img src={HomeImgHeader} className='home-image-header' />
                </div>
            </>
        )
    }
}
