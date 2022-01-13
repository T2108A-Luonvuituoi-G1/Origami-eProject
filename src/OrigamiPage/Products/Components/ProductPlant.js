import {  Link } from 'react-router-dom';
import ImgCactus from '../Assets/Images/represent/cactus-represent.gif'
import ImgBL from '../Assets/Images/represent/bloomson-represent.jpg'
import React from 'react'

export default function ProductPlant() {
    return (
        <>
           {/* Making Cactus      */}
           <div className='product-item'>
                    <img className='product-item-represent'  src={ImgCactus} alt='Cactus' />
                    <Link to="/products/cactus" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div> 
            {/* Making Bloomson      */}
            <div className='product-item'>
                    <img className='product-item-represent'  src={ImgBL} alt='Bloomson' />
                    <Link to="/products/bloomson" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>       
        </>
    )
}
