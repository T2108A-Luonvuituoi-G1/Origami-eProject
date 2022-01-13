import { Link } from 'react-router-dom'
import Catmaking from '../Assets/Images/making/cat.jpg'
import React, { Component } from 'react'
import '../Assets/Css/ProductItem.css'

export default class CatMaking extends Component {
    render() {
        return (
            <div>
                <img className='Product-making' src={Catmaking} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
