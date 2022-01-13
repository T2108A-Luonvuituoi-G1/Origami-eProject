import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import Fish from '../Assets/Images/making/fishmaking.png'
import React, { Component } from 'react'

export default class FishMaking extends Component {
    render() {
        return (
            <div>
                 <img className='Product-making' src={Fish} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
