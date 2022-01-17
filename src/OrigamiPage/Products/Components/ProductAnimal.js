import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Css/ProductItem.css'
import '../Assets/Css/product.css'
import ImageDino from '../Assets/Images/represent/khung-long.gif'
import ImgCat from '../Assets/Images/represent/cat-represent.jpg'
import ImgDog from '../Assets/Images/represent/dogrepresent.jpg'
import ImgBird from '../Assets/Images/represent/bird-represent.gif'
import ImgPig from '../Assets/Images/represent/pig-represent.jpg'
import ImgFish from '../Assets/Images/represent/fish-represent.jpg'
import NavProduct from '../Assets/ProductNav/nav'

export default class ProductAnimal extends Component {
    render() {
        return (
            <>
             <br/>  
                    <div >
                        <NavProduct/>
                    </div>
                    <br/>  
            {/* Dino */}
                <div className='product-item'>
                        
                    <img className='product-item-represent'  src={ImageDino} alt='Dino' />
                        <Link to="/products/dinomaking" className='p-item-making'>Making Now</Link>
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make Dino</h1>
                        A cute dinosaur with a long neck will make you fall in love with Origami

                        </p>
                    </div>
                </div>   
            
               {/* Cat */}
                <div className='product-item'>
                        <div className='product-item-des'>
                            <p className='p-prag'><h1>Make A Cat</h1>
                            An extremely cute cat head for anyone who loves cats

                            </p>

                        </div>
                    <Link to="/products/catmaking" className='p-item-making'>Making Now</Link>
                        <img className='product-item-represent'  src={ImgCat}  alt='Cat'/>
                </div>      
            
                {/* Making A Dog      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgDog} alt='Dog' />
                    <Link to="/products/dogmaking" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Dog</h1>
                        Surely everyone likes dogs like this to unleash their creativity
                        </p>
                        <br/><br/>

                       
                    </div>
                </div>  
                {/* Making Pig      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Pig Head</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/pig" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgPig} alt='Pig' />
                </div>  
                {/* Making Bird      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Bird</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/bird" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgBird} alt='Bird' />
                </div>                  
                {/* Making Fish      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p className='p-prag'><h1>Make A Fish</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/fish" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgFish} alt='Fish' />
                </div>
            </>

        )
    }
}
