import React from 'react';
import ProductListNav from './ProductListNav';
import { Link } from 'react-router-dom';
import Vietnam from '../Assets/Images/vietnam.jpg'
import Japan from '../Assets/Images/japan.jpg'
import { BiChevronRight } from "react-icons/bi";

function ProductFlag() {
    return (
        <>
            <ProductListNav/>

            <div className='product-page-list'>

                {/* VIETNAM FLAG */}
                <div className='product-page-list-item'>
                    <img src={Vietnam} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Viet Nam flag</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Flag <br />
                            Author: Nguyen Xuan Tung <br />
                            Update by: Le Nhu Viet Anh
                        </p>
                        <Link to="/products/VietNamFlag" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

                {/* JAPAN FLAG */}
                <div className='product-page-list-item'>
                    <img src={Japan} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Japan flag</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Flag <br />
                            Author: Hiba <br />
                            Update by: Ta Quang Minh
                        </p>
                        <Link to="/products/JapanFlag" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductFlag;
