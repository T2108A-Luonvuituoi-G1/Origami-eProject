import React from 'react';
import '../Assets/Css/ProductAnimal.css'
import ProductListNav from './ProductListNav';
import Fox from '../Assets/Images/fox.jpg'
import Boar from '../Assets/Images/boar.jpg'
import Crab from '../Assets/Images/crab.jpg'
import Parrot from '../Assets/Images/parrot.jpg'
import Butterfly from '../Assets/Images/butterfly.jpg'
import { BiChevronRight } from "react-icons/bi";
import { Link } from 'react-router-dom';
import HomeFooter from '../Components/Footer';


function ProductAnimal() {
    return (
        <>

            <ProductListNav />
            <div className='product-page-list'>
                {/* FOX */}
                <div className='product-page-list-item'>
                    <img src={Fox} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Fox</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Animal <br />
                            Author: Hoang Tien Quyet <br />
                            Update by: Vo Van Viet
                        </p>
                        <Link to="/products/fox" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

                {/* BOAR */}
                <div className='product-page-list-item'>
                    <img src={Boar} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Boar</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Animal <br />
                            Author: Do Tri Khai <br />
                            Update by: Tran Minh Duc
                        </p>
                        <Link to="/products/pig" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

                {/* BUTTERFLY */}
                <div className='product-page-list-item'>
                    <img src={Butterfly} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Butterfly</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Animal <br />
                            Author: Michael LaFosse <br />
                            Update by: Dao Thanh Nam
                        </p>
                        <Link to="/products/butterfly" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

                {/* CRAB */}
                <div className='product-page-list-item'>
                    <img src={Crab} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Crab</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Animal <br />
                            Author: H.T.Quyet <br />
                            Update by: Ta Quang Minh
                        </p>
                        <Link to="/products/crab" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>

                {/* PARROT */}
                <div className='product-page-list-item'>
                    <img src={Parrot} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Parrot</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Animal <br />
                            Author: Hoang Tien Quyet <br />
                            Update by: Ta Quang Minh
                        </p>
                        <Link to="/products/parrot" className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </Link>
                    </div>
                </div>
            </div>
                <div>
            <HomeFooter/>
          </div>
        </>
    );
}

export default ProductAnimal;
