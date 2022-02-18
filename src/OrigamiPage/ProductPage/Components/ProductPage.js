import React from 'react';
import '../Assets/Css/ProductPage.css'
import ProductListNav from './ProductListNav';
import ProductList from './ProductList';
import HomeFooter from '../Components/Footer';


function ProductPage() {
    return (
        <>
            <div className='ProductPage'>
                {/* Nav */}
                <ProductListNav />

                {/* Products */}
                <ProductList />
            </div>
            <div className='Product-page-footer'>
                <HomeFooter />
            </div>
        </>
    );
}

export default ProductPage;

