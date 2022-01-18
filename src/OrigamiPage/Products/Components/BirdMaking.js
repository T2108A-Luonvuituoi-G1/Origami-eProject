import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import Bird from '../Assets/Images/making/birdmaking.jpg'
import React, { Component } from 'react'

export default class BirdMaking extends Component {
    render() {
        return (
            <div className='Product-making-item'>
                 <img className='Product-making' src={Bird} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
