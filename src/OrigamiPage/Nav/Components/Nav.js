import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/Nav.css'
import Logo from '../Assets/Images/Logo.png'

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
                    {/* <img className='nav-logo' src={Logo} /> */}
                    <input type="text" className='input-search' placeholder='Search' value={this.state.value} onChange={this.handleChange} />
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/products">Products</Link>
                    <Link className='nav-link' to="/aboutUs">AboutUs</Link>
                    <Link className='nav-link' to="/contact">Contact</Link>
                    <Link className='nav-link' to="/more">More</Link>
                </div>
            </div>
        )
    }
}
