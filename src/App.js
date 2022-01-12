import React, { Component } from 'react'
import './App.css'
import ProductList from './OrigamiPage/Products/Components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './OrigamiPage/AboutUs/Components/AboutUs';
import Contact from './OrigamiPage/Contact/Components/Contact';
import Home from './OrigamiPage/Home/Components/Home';
import Nav from './OrigamiPage/Nav/Components/Nav';
import UserProfile from './OrigamiPage/UserProfile/Components/UserProfile'
import ProductPlant from './OrigamiPage/Products/Components/ProductPlant';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='Origami-page'>
          <div className='Nav'>
            <Nav />
          </div>
          <div className='Content'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/profile" element={<UserProfile />} />
              <Route exact path="/products/plant" element={<ProductPlant />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}