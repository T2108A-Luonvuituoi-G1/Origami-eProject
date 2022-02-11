import React from 'react';
import '../Assets/Css/AdminNav.css'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

function AdminNav() {
    return (
        <>
            <div className='admin-nav-page'>
                <div className='product-page-nav-link'>
                    <Link to="#" className='product-page-nav-btn'>
                        <p>Client</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="#" className='product-page-nav-btn'>
                        <p>Slider</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="#" className='product-page-nav-btn'>
                        <p>Chart</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="#" className='product-page-nav-btn'>
                        <p>Table</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="#" className='product-page-nav-btn'>
                        <p>Page</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    
                </div>
            </div>
        </>
    );
}

export default AdminNav;