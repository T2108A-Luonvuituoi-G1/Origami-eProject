import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/Nav.css'
import Logo from '../Assets/Images/user-logo.jpg'
import { BiSearchAlt } from 'react-icons/bi'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="top-nav">
                    <BiSearchAlt className='icon-search' />
                    <Link className='nav-logo' to='/'>LUONVUITUOI</Link>
                    <input type="text" className='input-search' placeholder='Search' value={this.state.value} onChange={this.handleChange} />
                    <div className='nav-link-page'>
                        <Link className='nav-link' to="/">Home</Link>
                        <Link className='nav-link' to="/products">Products</Link>
                        <Link className='nav-link' to="/aboutus">AboutUs</Link>
                        <Link className='nav-link' to="/contact">Contact</Link>
                        <Link className='nav-link' to="/more">More</Link>
                    </div>
                    <div>
                        <Link to='/profile'><img className='nav-user-logo' src={Logo}/></Link>
                    </div>
                </div>
            </div>
        )
    }
}