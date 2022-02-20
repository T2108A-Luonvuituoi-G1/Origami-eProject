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
import ProductAnimal from './OrigamiPage/ProductPage/Components/ProductAnimal';
import ProductPlant from './OrigamiPage/ProductPage/Components/ProductPlant';
import ProductItem from './OrigamiPage/ProductPage/Components/ProductItem';
import ProductFlag from './OrigamiPage/ProductPage/Components/ProductFlag';
import AdminPage from './OrigamiPage/Admin/Components/AdminPage';
import ErrorPage from './OrigamiPage/500Page/Components/ErrorPage';
import PageNotFound from './OrigamiPage/404Page/Components/PageNotFound';
import Chart from './OrigamiPage/Chart/Components/Chart';
import Base from './OrigamiPage/Base/Components/Base';


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
              {/* Navigation */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<ProductPage />} />
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/admin" element={<AdminPage />} />
              <Route exact path="/profile" element={<UserProfile />} />
              
              {/* Category */}
              <Route exact path="/products/ProductAnimal" element={<ProductAnimal />}/>
              <Route exact path="/products/ProductPlant" element={<ProductPlant />}/>
              <Route exact path="/products/ProductItem" element={<ProductItem />}/>
              <Route exact path="/products/ProductFlag" element={<ProductFlag />}/>


              {/* Product */}
              <Route exact path="/products/butterfly" element={<Butter />}/>
              <Route exact path="/products/lotus" element={<Lotus />}/>
              <Route exact path="/products/parrot" element={<Parrot />}/>
              <Route exact path="/products/VietNamFlag" element={<Vietnam />}/>
              <Route exact path="/products/crab" element={<Crab />}/>
              <Route exact path="/products/pig" element={<Pig />}/>
              <Route exact path="/products/fox" element={<Fox />}/>
              <Route exact path="/products/frameImg" element={<Frame />}/>
              <Route exact path="/products/JapanFlag" element={<JapanFlag />}/>

              {/* ErrorPage */}
              <Route exact path="/errorpage" element={<ErrorPage />}/>
              <Route exact path="/pagenotfound" element={<PageNotFound />}/>

              {/* Admin Base Chart */}
              <Route exact path="/chart" element={<Chart />}/>
              <Route exact path="/base" element={<Base />}/>

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}