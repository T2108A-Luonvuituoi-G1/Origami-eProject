import React, { Component } from 'react'
import ImageDino from '../Assets/Images/represent/khung-long.gif'
import DinoDetails from '../Assets/Images/making/dino-making.jpg'
import CatDetails from '../Assets/Images/making/cat.jpg'
import Cat from '../Assets/Images/represent/cat-represent.jpg'
import Dog from '../Assets/Images/represent/dog-represent.jpg'
import DogDetails from '../Assets/Images/making/dog-making.png'

export default class ProductAnimal extends Component {
    render() {
        return (
            <>
            {/* Making A Dino */}
            <div className='product-item'>
                    
                <img className='product-item-represent'  src={ImageDino}  />
                <div className='product-item-des'>
                    <p><h1>Make Dino</h1>
                        Categories:Children

                    </p>
                    <br/><br/>

                    <a href={DinoDetails} className='product-btn-item-making' >Making</a>
                </div>
            </div>   
            
                {/* Making A Cat */}
                <div className='product-item'>
                    
                        <div className='product-item-des'>
                            <p><h1>Make A Cat</h1>
                                Categories:Children

                            </p>
                            <br/><br/>

                            <a href={CatDetails} className='product-btn-item-making' >Making</a>
                        </div>
                        <img className='product-item-represent'  src={Cat}  />
                </div>      
            
            
                {/* Making A Dog */}     
                <div className='product-item'>
                    
                    <img className='product-item-represent'  src={Dog}  />
                    <div className='product-item-des'>
                        <p><h1>Make A Cat</h1>
                            Categories:Children

                        </p>
                        <br/><br/>

                        <a href={DogDetails} className='product-btn-item-making' >Making</a>
                    </div>
            </div>  


            
            
            </>

        )
    }
}
