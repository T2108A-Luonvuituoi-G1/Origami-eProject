import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import React from 'react'
import ImgTownship from '../Assets/Images/represent/township-represent.jpg'

export default function ProductVehicle() {
    return (
        <>
            
            {/* Making TownShip      */}
            <div className='product-item'>
                    <img className='product-item-represent'  src={ImgTownship} alt='Township' />
                    <Link to="/products/township" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>  
        </>
    )
}
