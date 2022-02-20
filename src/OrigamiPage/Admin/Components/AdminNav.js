import React from 'react';
import '../Assets/Css/AdminNav.css'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

function AdminNav() {
    return (
        <>
            <div className='admin-nav-page'>
                <div className='product-page-nav-link'>
                    <Link to="/base" className='product-page-nav-btn admin-nav-btn'>
                        <p>Base</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="/chart" className='product-page-nav-btn admin-nav-btn'>
                        <p>Chart</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                    <Link to="#" className='product-page-nav-btn admin-nav-btn'>
                        <p>Table</p>
                        <BiChevronRight className='product-page-nav-icon' />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default AdminNav;
