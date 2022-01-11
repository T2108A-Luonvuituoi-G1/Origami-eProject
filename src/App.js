import React, { Component } from 'react'
import './App.css'
import ProductList from './OrigamiPage/Products/Components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './OrigamiPage/AboutUs/Components/AboutUs';
import Contact from './OrigamiPage/Contact/Components/Contact';
import Home from './OrigamiPage/Home/Components/Home';
import Nav from './OrigamiPage/Nav/Components/Nav';
import UserProfile from './OrigamiPage/UserProfile/Components/UserProfile'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/products" element={ <ProductList />} />
            <Route exact path="/aboutus" element={ <AboutUs />} />
            <Route exact path="/contact" element={ <Contact />} />
            <Route exact path="/profile" element={ <UserProfile /> } />
          </Routes>
          
        </div>
      </BrowserRouter>
    )
  }
}