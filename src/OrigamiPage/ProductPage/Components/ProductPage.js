import React from 'react';
import '../Assets/Css/ProductPage.css'
import ProductListNav from './ProductListNav';
import ProductList from './ProductList';

function ProductPage() {
    return (
        <div className='ProductPage'>
            {/* Nav */}
            <ProductListNav />

            {/* Products */}
            <ProductList />
        </div>
    );
}

export default ProductPage;

