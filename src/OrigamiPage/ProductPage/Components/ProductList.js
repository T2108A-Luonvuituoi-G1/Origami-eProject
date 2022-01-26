import React from 'react';
import '../Assets/Css/ProductList.css'
import { BiChevronRight } from "react-icons/bi";
import Fox from '../Assets/Images/fox.jpg'
import Boar from '../Assets/Images/boar.jpg'
import Crab from '../Assets/Images/crab.jpg'
import Parrot from '../Assets/Images/parrot.jpg'
import Butterfly from '../Assets/Images/butterfly.jpg'
import Lotus from '../Assets/Images/lotus.jpg'
import Img from '../Assets/Images/img.jpg'
import Vietnam from '../Assets/Images/vietnam.jpg'
import Japan from '../Assets/Images/japan.jpg'

function ProductList() {
    return (
        <>
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
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
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
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
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
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
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
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
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
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
                    </div>
                </div>

                {/* LOTUS */}
                <div className='product-page-list-item'>
                    <img src={Lotus} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Lotus</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Plant <br />
                            Author: Dang Viet Tan <br />
                            Update by: Vo Van Viet
                        </p>
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
                    </div>
                </div>

                {/* FRAME IMAGE */}
                <div className='product-page-list-item'>
                    <img src={Img} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Frame image</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Item <br />
                            Author: H.T.Quyet <br />
                            Update by: Dao Thanh Nam
                        </p>
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
                    </div>
                </div>

                {/* VIETNAM FLAG */}
                <div className='product-page-list-item'>
                    <img src={Vietnam} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Viet Nam flag</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Flag <br />
                            Author: Nguyen Xuan Tung <br />
                            Update by: Le Nhu Viet Anh
                        </p>
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
                    </div>
                </div>

                {/* JAPAN FLAG */}
                <div className='product-page-list-item'>
                    <img src={Japan} className='product-page-list-item-img' />
                    <div className='product-page-list-item-body'>
                        <h2 className='product-page-list-item-title'>Japan flag</h2>
                        <p className='product-page-list-item-text'>
                            Kind: Flag <br />
                            Author: Hiba <br />
                            Update by: Ta Quang Minh
                        </p>
                        <a href='#' className='product-page-list-item-btn'>
                            <p>Try now</p>
                            <BiChevronRight className='product-page-list-item-btn-icon' />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductList;
