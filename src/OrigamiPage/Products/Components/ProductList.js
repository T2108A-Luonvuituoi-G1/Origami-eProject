import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import ImageDino from '../Assets/Images/represent/khung-long.gif'
import ImgCat from '../Assets/Images/represent/cat-represent.jpg'
import ImgDog from '../Assets/Images/represent/dogrepresent.jpg'
import ImgBird from '../Assets/Images/represent/bird-represent.gif'
import ImgPig from '../Assets/Images/represent/pig-represent.jpg'
import ImgFish from '../Assets/Images/represent/fish-represent.jpg'
import ImgSumo from '../Assets/Images/represent/sumo-represent.jpg'
import ImgTownship from '../Assets/Images/represent/township-represent.jpg'
import ImgCactus from '../Assets/Images/represent/cactus-represent.gif'
import ImgBL from '../Assets/Images/represent/bloomson-represent.jpg'
import ImgLove from '../Assets/Images/represent/love-represent.jpg'




export default class ProductList extends Component {
    
    render() {
        return (
           <>   
           <div className='p-category'>

                <Link to="/products/animal" className='p-category-btn' >Animal</Link>
                <Link to="/products/plant" className='p-category-btn' >Plant</Link>
                <Link to="/products/human" className='p-category-btn' >Human</Link>
                <Link to="/products/vehicle" className='p-category-btn' >Vehicle</Link>
           </div>
                {/* Dino */}
                <div className='product-item'>
                    
                    <img className='product-item-represent'  src={ImageDino} alt='Dino' />
                        <Link to="/products/dinomaking" className='p-item-making'>Making Now</Link>
                    <div className='product-item-des'>
                        <p><h1>Make Dino</h1>
                            Categories:Children
    
                        </p>
                    </div>
                </div>  
                {/* Cat */}
                <div className='product-item'>
                        <div className='product-item-des'>
                            <p><h1>Make A Cat</h1>
                                Categories:Children

                            </p>

                        </div>
                        <Link to="/products/catmaking" className='p-item-making'>Making Now</Link>
                        <img className='product-item-represent'  src={ImgCat} alt='Cat' />
                </div>                               
                {/* Making A Dog      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgDog} alt='Dog' />
                    <Link to="/products/dogmaking" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>  
                {/* Making Sumo      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/sumomaking" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgSumo} alt='Sumo' />
                </div>  
                {/* Making TownShip      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgTownship} alt='Township' />
                    <Link to="/products/township" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>  
                 {/* Making Pig      */}
                 <div className='product-item'>
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/pig" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgPig} alt='Pig' />
                </div>  
                {/* Making Cactus      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgCactus} alt='Cactus' />
                    <Link to="/products/cactus" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div> 
                {/* Making Bird      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/bird" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgBird} alt='Bird' />
                </div>  
                {/* Making Bloomson      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgBL} alt='Bloomson' />
                    <Link to="/products/bloomson" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>  
                {/* Making Fish      */}
                <div className='product-item'>
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                    <Link to="/products/fish" className='p-item-making'>Making Now</Link>  
                    <img className='product-item-represent'  src={ImgFish} alt='Fish' />
                </div>                
                {/* Making Love      */}
                <div className='product-item'>
                    <img className='product-item-represent'  src={ImgLove} alt='Love' />
                    <Link to="/products/love" className='p-item-making'>Making Now</Link>  
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                    </div>
                </div>  

           </>

        )
    }
}
