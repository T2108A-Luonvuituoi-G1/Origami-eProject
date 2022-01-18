import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import React from 'react'
import ImgTownship from '../Assets/Images/represent/township-represent.jpg'
import NavProduct from '../Assets/ProductNav/nav'

export default function ProductVehicle() {
    return (
        <>
         <br/>  
                    <div >
                        <NavProduct/>
                    </div>
                    <br/>      
            <div className='ProductList'>
                {/* Making TownShip      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgTownship} alt='Township' />
                    <Link to="/products/township" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Township</h1>
                            Một chú khủng long dễ thương với chiếc cổ dài sẽ làm cho bạn thấy hứng thú với Origami

                        </p>
                    </div>
                </div>  
            </div>      
        </>
    )
}
