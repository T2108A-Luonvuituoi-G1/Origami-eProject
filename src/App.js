import React, { Component } from 'react'
import './App.css'
import ProductList from './OrigamiPage/Products/Components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './OrigamiPage/AboutUs/Components/AboutUs';
import Contact from './OrigamiPage/Contact/Components/Contact';
import Home from './OrigamiPage/Home/Components/Home';
import Nav from './OrigamiPage/Nav/Components/Nav';
import UserProfile from './OrigamiPage/UserProfile/Components/UserProfile';
import ProductPlant from './OrigamiPage/Products/Components/ProductPlant';
import ProductAnimal from './OrigamiPage/Products/Components/ProductAnimal';
import DinoMaking from './OrigamiPage/Products/Components/DinoMaking';
import CatMaking from './OrigamiPage/Products/Components/CatMaking';
import DogMaking from './OrigamiPage/Products/Components/DogMaking';
import SumoMaking from './OrigamiPage/Products/Components/SumoMaking';
import ProductHuman from './OrigamiPage/Products/Components/ProductHuman';
import ProductVehicle from './OrigamiPage/Products/Components/ProductVehicle';
import TownshipMaking from './OrigamiPage/Products/Components/TownshipMaking';
import PigMaking from './OrigamiPage/Products/Components/PigMaking';
import CactusMaking from './OrigamiPage/Products/Components/CactusMaking';
import BirdMaking from './OrigamiPage/Products/Components/BirdMaking';
import BloomsonMaking from './OrigamiPage/Products/Components/BloomsonMaking';
import FishMaking from './OrigamiPage/Products/Components/FishMaking';
import LoveMaking from './OrigamiPage/Products/Components/LoveMaking';



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
              <Route exact path="/products/animal" element={<ProductAnimal />} />
              <Route exact path="/products/human" element={<ProductHuman />} />
              <Route exact path="/products/vehicle" element={<ProductVehicle />} />
              <Route exact path="/products/dinomaking" element={<DinoMaking />} />
              <Route exact path="/products/catmaking" element={<CatMaking />} />
              <Route exact path="/products/dogmaking" element={<DogMaking />} />
              <Route exact path="/products/sumomaking" element={<SumoMaking />} />
              <Route exact path="/products/township" element={<TownshipMaking />} />
              <Route exact path="/products/pig" element={<PigMaking />} />
              <Route exact path="/products/cactus" element={<CactusMaking />} />
              <Route exact path="/products/bird" element={<BirdMaking />} />
              <Route exact path="/products/bloomson" element={<BloomsonMaking />} />
              <Route exact path="/products/fish" element={<FishMaking />} />
              <Route exact path="/products/love" element={<LoveMaking />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}