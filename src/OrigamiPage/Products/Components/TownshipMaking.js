import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import Township from '../Assets/Images/making/township-making.jpg'
import '../Assets/Css/product.css'
import React, { Component } from 'react'

export default class TownshipMaking extends Component {
    render() {
        return (
            <div>
                <img className ='Product-making' src={Township} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}

