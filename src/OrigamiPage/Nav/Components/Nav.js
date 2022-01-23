import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/Nav.css'
import Logo from '../Assets/Images/user-logo.jpg'
import { BiSearchAlt } from 'react-icons/bi'
import NavClock from './NavClock';
import NavSearchInput from './NavSearchInput'

function Nav() {
    
    return (
        <>
            <div>
                <div className="top-nav">
                    <BiSearchAlt className='icon-search' />
                    <Link className='nav-logo' to='/'>LUONVUITUOI</Link>

                    <NavSearchInput />

                    <div className='nav-link-page'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/products">Origami</Link>
                        <Link className='nav-link' to="/aboutus">About Us</Link>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </div>
                    <div className='home-clock'>
                        <NavClock />
                    </div>
                    <div>
                        <Link to='/profile'><img className='nav-user-logo' src={Logo} /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;