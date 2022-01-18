import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import React, { Component } from 'react'
import Pigmaking from '../Assets/Images/making/pigmaking.jpg'
import '../Assets/Css/product.css'


export default class PigMaking extends Component {
    render() {
        return (
            <div className='Product-making-item'>
                <img className='Product-making' src={Pigmaking} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
