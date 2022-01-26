import React from 'react';
import '../Assets/Css/ProductListNav.css'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

function ProductListNav() {
    return (
        <>
            <div className='product-page-nav'>
                <div className='product-page-nav-link'>
                    <Link to="/products/ProductAnimal"  className='product-page-nav-btn'>
                        <p>Animal</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="/products/ProductPlant" className='product-page-nav-btn'>
                        <p>Plant</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="/products/ProductItem" className='product-page-nav-btn'>
                        <p>Item</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="/products/ProductFlag" className='product-page-nav-btn'>
                        <p>Flag</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProductListNav;
