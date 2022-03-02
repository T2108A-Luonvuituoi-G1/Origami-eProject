import React, { Component } from 'react'
import '../Assets/Css/HomeBlog.css'
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import Fox from '../Assets/Images/fox.jpg'
import Boar from '../Assets/Images/boar.jpg'
import Crab from '../Assets/Images/crab.jpg'
import Parrot from '../Assets/Images/parrot.jpg'
import Butterfly from '../Assets/Images/butterfly.jpg'
import Lotus from '../Assets/Images/lotus.jpg'
import Img from '../Assets/Images/img.jpg'
import Vietnam from '../Assets/Images/vietnam.jpg'
import Japan from '../Assets/Images/japan.jpg'

export default class HomeBlog extends Component {
    render() {
        return (
            <div className='home-blog'>
                <div className='home-blog-page'>
                    <div className='home-blog-header'>
                        TOP ORIGAMIS
                        <Link className='home-blog-header-btn' to="/products">
                            <p className='home-blog-header-p'>SEE ALL</p>
                            <BiChevronRight className='home-blog-icon' />
                        </Link>
                    </div>
                    <div className='home-blog-content'>
                        <div className='home-blog-content-news'>
                            <Link to= '/products/fox' ><img src={Fox} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/pig' ><img src={Boar} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/parrot' ><img src={Parrot} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/butterfly' ><img src={Butterfly} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/lotus' ><img src={Lotus} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/frameImg' ><img src={Img} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/VietNamFlag' ><img src={Vietnam} className='home-blog-news home-blog-1' /></Link>

                            <Link to= '/products/JapanFlag' ><img src={Japan} className='home-blog-news home-blog-1' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}