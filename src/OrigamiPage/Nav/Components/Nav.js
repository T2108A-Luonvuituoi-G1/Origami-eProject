import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Css/Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <Link className="active" to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/aboutUs">AboutUs</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/more">More</Link>
                </div>
            </div>
        )
    }
}
