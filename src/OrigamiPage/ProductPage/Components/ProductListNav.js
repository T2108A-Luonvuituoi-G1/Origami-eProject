import React from 'react';
import '../Assets/Css/ProductListNav.css'
import { BiChevronRight } from "react-icons/bi";

function ProductListNav() {
    return (
        <>
            <div className='product-page-nav'>
                <div className='product-page-nav-link'>
                    <a href='#' className='product-page-nav-btn'>
                        <p>Animal</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </a>
                    <a href='#' className='product-page-nav-btn'>
                        <p>Plant</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </a>
                    <a href='#' className='product-page-nav-btn'>
                        <p>Item</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </a>
                    <a href='#' className='product-page-nav-btn'>
                        <p>Flag</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProductListNav;
