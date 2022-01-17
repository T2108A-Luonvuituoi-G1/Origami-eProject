import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import Love from '../Assets/Images/making/lovemaking.jpg'
import React, { Component } from 'react'
import '../Assets/Css/product.css'


export default class LoveMaking extends Component {
    render() {
        return (
            <div className='Product-making-item'>
                <img className='Product-making' src={Love} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
