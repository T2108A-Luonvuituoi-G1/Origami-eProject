import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import ProductListNav from './ProductListNav';
import Lotus from '../Assets/Images/lotus.jpg'
import '../Assets/Css/ProductPlant.css'

function ProductPlant() {
    return (
        <>
            <ProductListNav />
            {/* LOTUS */}
            <div className='product-page-list-item'>
                <img src={Lotus} className='product-page-list-item-img' />
                <div className='product-page-list-item-body'>
                    <h2 className='product-page-list-item-title'>Lotus</h2>
                    <p className='product-page-list-item-text'>
                        Kind: Plant <br />
                        Author: Dang Viet Tan <br />
                        Update by: Vo Van Viet
                    </p>
                    <Link to="/products/lotus" className='product-page-list-item-btn'>
                        <p>Try now</p>
                        <BiChevronRight className='product-page-list-item-btn-icon' />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ProductPlant;
