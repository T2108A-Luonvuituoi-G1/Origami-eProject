import React from 'react';
import ProductListNav from './ProductListNav';
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import Img from '../Assets/Images/img.jpg'
import '../Assets/Css/ProductItem.css'


function ProductItem() {
    return (
        <>
            <ProductListNav />
            <div className='product-page-list'>

                {/* FRAME IMAGE */}
                <div className='product-page-list-item'>
                    <img src={Img} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Frame image</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Item <br />
                            Author: H.T.Quyet <br />
                            Update by: Dao Thanh Nam
                        </p>
                        <Link to="/products/frameImg" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductItem;
