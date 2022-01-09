import React, { Component } from 'react'
import './App.css'
import ProductList from './OrigamiPage/Products/Components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './OrigamiPage/AboutUs/Components/AboutUs';
import Contact from './OrigamiPage/Contact/Components/Contact';
import More from './OrigamiPage/More/Components/More';
import Home from './OrigamiPage/Home/Components/Home';
import Nav from './OrigamiPage/Nav/Components/Nav';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/products" element={ <ProductList />} />
            <Route exact path="/aboutUs" element={ <AboutUs />} />
            <Route exact path="/contact" element={ <Contact />} />
            <Route exact path="/more" element={ <More />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    )
  }
}