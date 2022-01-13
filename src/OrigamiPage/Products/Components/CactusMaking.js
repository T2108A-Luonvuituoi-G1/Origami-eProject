import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import Cactus from '../Assets/Images/making/cactusmaking.jpg'
import React, { Component } from 'react'

export default class CactusMaking extends Component {
    render() {
        return (
            <div className='Product-item'>

                <img className='Product-making' src={Cactus} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
