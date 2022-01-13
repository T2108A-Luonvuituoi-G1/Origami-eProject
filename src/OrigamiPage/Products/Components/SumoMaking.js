import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import Sumomaking from '../Assets/Images/making/sumo-making.jpg'
import React from 'react'

export default function SumoMaking() {
    return (
        <div>
            <img className ='Product-making' src={Sumomaking} />
            <Link to="/products" className='p-item-btn'>Return to Products</Link> 
        </div>
    )
}
