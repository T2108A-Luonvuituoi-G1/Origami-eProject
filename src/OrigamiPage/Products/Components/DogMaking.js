import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import React, { Component } from 'react'
import Dogmaking from '../Assets/Images/making/dog-making.png'


export default class DogMaking extends Component {
    render() {
        return (
            <div>
                <img className='Product-making' src={Dogmaking} />
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
