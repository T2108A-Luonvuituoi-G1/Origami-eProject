import React from 'react'
import '../Assets/Css/ErrorPage.css'
import { FaSadCry } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
            <div className='Header-404'>
            <br/>

                <p className='PageNotFound'>500</p>
                <h2 className='PageNotFound_2'>Internal Server Error</h2>
                <h3 className='PageNotFound-Details'>The Server has been deserted for a while</h3>
                <br/>
                <Link to='/' className='PageNotFound-btn'> Home </Link>
            </div>

        </>
    )
}
