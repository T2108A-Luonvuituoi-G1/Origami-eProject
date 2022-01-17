import {  Link } from 'react-router-dom';
import ImgCactus from '../Assets/Images/represent/cactus-represent.gif'
import ImgBL from '../Assets/Images/represent/bloomson-represent.jpg'
import NavProduct from '../Assets/ProductNav/nav'
import React from 'react'

export default function ProductPlant() {
    return (
        <>
         <br/>  
                    <div >
                        <NavProduct/>
                    </div>
                    <br/>  
           {/* Making Cactus      */}
           <div className='product-item'>
                    <img className='product-item-represent'  src={ImgCactus} alt='Cactus' />
                    <Link to="/products/cactus" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Cactus</h1>
                            Categories:Children

                        </p>
                    </div>
                </div> 
            {/* Making Bloomson      */}
            <div className='product-item'>
                    <img className='product-item-represent'  src={ImgBL} alt='Bloomson' />
                    <Link to="/products/bloomson" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Branch</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>       
        </>
    )
}
