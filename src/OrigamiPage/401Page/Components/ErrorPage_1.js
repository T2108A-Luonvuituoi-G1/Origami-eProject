import React from 'react'
import '../Assets/Css/ErrorPage_1.css'

import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <>
            <div className='Header-401'>
            <br/>

                <p className='ErrorPage'>401</p>
                <h2 className='ErrorPage_2'>The page you're trying to access could not be loaded until you first log in with a valid user ID and password.!!!</h2>
                <br/>
                <Link to='/' className='PageNotFound-btn'> Home </Link>
            </div>

        </>
    )
}