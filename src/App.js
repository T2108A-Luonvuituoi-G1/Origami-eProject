import React, { Component } from 'react'
import './App.css'
import ProductPage from './OrigamiPage/ProductPage/Components/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './OrigamiPage/AboutUs/Components/AboutUs';
import Contact from './OrigamiPage/Contact/Components/Contact';
import Home from './OrigamiPage/Home/Components/Home';
import Nav from './OrigamiPage/Nav/Components/Nav';
import UserProfile from './OrigamiPage/UserProfile/Components/UserProfile';
import Butter from './OrigamiPage/Products/Components/Butter';
import Lotus from './OrigamiPage/Products/Components/lotus';
import Parrot from './OrigamiPage/Products/Components/Parrot';
import Vietnam from './OrigamiPage/Products/Components/Vietnam';
import Crab from './OrigamiPage/Products/Components/Crab';
import Pig from './OrigamiPage/Products/Components/Pig';
import Fox from './OrigamiPage/Products/Components/Fox';
import Frame from './OrigamiPage/Products/Components/Frame';
import JapanFlag from './OrigamiPage/Products/Components/JapanFlag';


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
              <Route exact path="/products" element={<ProductPage />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/profile" element={<UserProfile />} />



              <Route exact path="/products/butterfly" element={<Butter />}/>
              <Route exact path="/products/lotus" element={<Lotus />}/>
              <Route exact path="/products/parrot" element={<Parrot />}/>
              <Route exact path="/products/VietNamFlag" element={<Vietnam />}/>
              <Route exact path="/products/crab" element={<Crab />}/>
              <Route exact path="/products/pig" element={<Pig />}/>
              <Route exact path="/products/fox" element={<Fox />}/>
              <Route exact path="/products/frameImg" element={<Frame />}/>
              <Route exact path="/products/JapanFlag" element={<JapanFlag />}/>

     

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}