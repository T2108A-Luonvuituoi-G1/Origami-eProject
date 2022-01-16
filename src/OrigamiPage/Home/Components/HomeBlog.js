import React, { Component } from 'react'
import '../Assets/Css/HomeBlog.css'
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";

export default class HomeBlog extends Component {
    render() {
        return (
            <div className='home-blog'>
                <div className='home-blog-page'>
                    <div className='home-blog-header'>
                        TOP PRODUCTS
                        <Link className='home-blog-header-btn' to="/products">
                            <p className='home-blog-header-p'>SEE ALL</p>
                            <BiChevronRight className='home-blog-icon' />
                        </Link>
                    </div>
                    <div className='home-blog-content'></div>
                </div>
            </div>
        )
    }
}