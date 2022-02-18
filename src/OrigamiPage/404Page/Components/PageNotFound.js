import React from 'react'
import '../Assets/css/PageNotFound.css'
import { FaSadCry } from 'react-icons/fa';
import { AiOutlineHome } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <>
            <div className='Header-404'>
            <br/>

                <p className='PageNotFound'>404</p>
                <h2 className='PageNotFound_2'>Page Not Found</h2>
                <h3 className='PageNotFound-Details'>We can't find page that you are looking for! </h3>
                <br/>
                <Link to='/' className='PageNotFound-btn'> Home </Link>
            </div>

        </>
    )
}
