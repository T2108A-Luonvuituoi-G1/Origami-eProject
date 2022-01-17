 import '../Css/product.css'
 import { Link } from 'react-router-dom'



 import React, { Component } from 'react'
 
 export default class nav extends Component {
     render() {
         return (
             <div>
                            <div className='p-category'>
            <br/>
                <Link to="/products/animal" className='p-category-btn' >Animal</Link>
                <Link to="/products/plant" className='p-category-btn' >Plant</Link>
                <Link to="/products/human" className='p-category-btn' >Human</Link>
                <Link to="/products/vehicle" className='p-category-btn' >Vehicle</Link>
           </div>
             </div>
         )
     }
 }
 