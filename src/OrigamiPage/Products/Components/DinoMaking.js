import DinoDetails from '../Assets/Images/making/dino-making.jpg'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import '../Assets/Css/ProductItem.css'


export default class DinoMaking extends Component {
    render() {
        return (
            <div className='Product-item'>
                <img className='Product-making' src={DinoDetails}/>
                <Link to="/products" className='p-item-btn'>Return to Products</Link> 
            </div>
        )
    }
}
