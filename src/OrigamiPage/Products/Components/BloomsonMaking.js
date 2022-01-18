import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import BL from '../Assets/Images/making/bloomsonmaking.jpg'
import React, { Component } from 'react'

export default class BloomsonMaking extends Component {
    render() {
        return (
            <div className='Product-making-item'>
                <img className='Product-making' src={BL} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
