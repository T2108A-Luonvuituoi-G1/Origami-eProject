import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import CatDetails from '../Assets/Images/making/cat.jpg'
import Cat from '../Assets/Images/represent/cat-represent.jpg'
import Dog from '../Assets/Images/represent/dog-represent.jpg'
import DogDetails from '../Assets/Images/making/dog-making.png'
import Sumo from '../Assets/Images/represent/sumo-represent.jpg'
// import Pig from '../Assets/Images/represent/ping-represent.jpg'
// import Fish from '../Assets/Images/represent/fish-represent.jpg'
// import Township from '../Assets/Images/represent/township-represent.jpg'
// import Love from '../Assets/Images/represent/love-represent.jpg'
// import Cactus from '../Assets/Images/represent/cactus-represent.jpg'
// import Bird from '../Assets/Images/represent/bird-represent.jpg'

import react from 'react'
import '../Assets/Css/product.css'
import ProductPlant from './ProductPlant'

export default class ProductList extends Component {


    render() {
        return (
            <>
                <div className='product-nav-header'>
                    <Link className='product-nav-animal' to="/products/plant">chu so</Link>
                </div>
                <div className='product-content'></div>
            </>

        )
    }
}
