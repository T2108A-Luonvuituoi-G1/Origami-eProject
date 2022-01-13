import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import Bird from '../Assets/Images/making/birdmaking.jpg'
import React, { Component } from 'react'

export default class BirdMaking extends Component {
    render() {
        return (
            <div>
                 <img className='Product-making' src={Bird} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
