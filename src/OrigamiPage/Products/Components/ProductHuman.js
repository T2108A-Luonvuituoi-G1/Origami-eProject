import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import React, { Component } from 'react'
import ImgSumo from '../Assets/Images/represent/sumo-represent.jpg'

export default class ProductHuman extends Component {
    render() {
        return (
        <>
        
            {/* Making Sumo      */}
            <div className='product-item'>
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Sumo</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/sumomaking" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgSumo} alt='Sumo' />
                </div>  
        
        </>
        )
    }
}
