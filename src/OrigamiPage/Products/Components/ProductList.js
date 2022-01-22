import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Assets/Css/product.css'
import VOG from '../Assets/Images/represent/vog_butterfly.jpg'
import { GrLinkNext } from "react-icons/gr";
import lotus from '../Assets/Images/represent/lotus.jpg'
import bg from '../Assets/Images/background.jpg'
import Boar from '../Assets/Images/represent/Boar.jpg'
import VN from '../Assets/Images/represent/flagVN.jpg'
import { IoPersonSharp } from "react-icons/io5";
import parrot from '../Assets/Images/represent/parrot.jpg'
import Crab from '../Assets/Images/represent/crab.jpg'
import fox from '../Assets/Images/represent/fox.jpg'
import frame from '../Assets/Images/represent/frameimg.jpg'
import japan from '../Assets/Images/represent/japanflag.jpg'
import { MdCopyright } from "react-icons/md";

export default class ProductList extends Component {
    state = {
        poster1: 'Vo Van Viet',
        poster2: 'LVT-Butterfly - Michael Lafosse',
        poster3: 'Dao Thanh Nam',
        poster4: 'Tran Minh Duc',
        poster5: 'Ta Quang Minh',
        poster6: 'Le Nhu Viet Anh'

    }
    title = {
        title1: 'Lotus',
        title2: 'Boar',
        title3: 'Flag VietNamese',
        title4: 'Parrot',
        title5: 'Crab',
        title6: 'Fox',
        title7: 'Photo Frame',
        title8: 'Japan Flag'

    }

    render() {
        return (
            <>
                <div className='product-background'
                    style={{
                        background: `url(${bg})`
                    }}
                >

                    <div className='product-hightlight'>

                        <h1 className='poster-hightlight font-posted'><b>Posted by {this.state.poster2}</b></h1>
                        <div className='hl-poster'>
                            < IoPersonSharp className='icon-human ' /> Posted by {this.state.poster1}
                        </div >
                        <img src={VOG} className='product-hightlight-img' />
                        <p className='div-p-poster'>

                            In 2015, on the occasion of the 10th anniversary of Vietnam Origami Group, author Michael LaFosse created a butterfly template for VOG.
                            <br /><br />
                            VOG sincerely thanks Mr. Michael LaFosse.
                        </p>
                        <Link to="/products/butter" className='link-btn'>Keep reading<GrLinkNext className='icon ' /></Link>
                    </div>



                    {/* Hoa sen */}
                    <div className='product-items'>
                        <div className='p-item-little p-lotus'>

                            <img src={lotus} className='p-img-little lotus-img' />
                            <Link to="/products/lotus" className='tittle-item'><b> {this.title.title1}</b> </Link>
                            <div className='div-item'>
                                Model name: Lotus <br /> Author: Dang Viet Tan </div>
                            <div className='div-p'>< IoPersonSharp />Posted by {this.state.poster3} </div >
                        </div>

                        {/* Vietnam Flag */}

                        <div className='p-item-little p-flag'>

                            <img src={VN} className='p-img-little flag-img' />
                            <Link to="/products/vietnam" className='tittle-item'><b> {this.title.title3}</b> </Link>
                            <div className='div-item'>
                                Model name: National flag of Vietnam Author: Nguyen Xuan Tung Composed on the occasion of the 62nd National Day of the Socialist Republic of Vietnam. Folding pattern…</div>
                            <div className='div-p'>< IoPersonSharp />Posted by {this.state.poster3} </div >


                        </div>


                        {/* Con Cua */}

                        <div className='p-item-little p-crab'>

                            <img src={Crab} className='p-img-little crab-img' />
                            <Link to="/products/crab" className='tittle-item'><b> {this.title.title5}</b> </Link>
                            <div className='div-item'>
                                Model name: Crab <br /> Author: Nguyen Hung Cuong, developed from the basic figure in the series “Cube Art” by Kunihiko Kasahara</div>
                            <div className='div-p'>< IoPersonSharp />Posted by {this.state.poster1} </div >


                        </div>


                        {/* Pig */}

                        <div className='p-item-little p-boar'>

                            <img src={Boar} className='p-img-little boar-img' />
                            <Link to="/products/pig" className='tittle-item'><b> {this.title.title2}</b> </Link>
                            <div className='div-item'>
                                Model name: Wild boar <br /> Author: Do Tri Khai</div>
                            <div className='div-p pig-poster'>< IoPersonSharp />Posted by {this.state.poster4} </div >


                        </div>

                        {/* Con Vẹt */}

                        <div className='p-item-little p-parrot'>

                            <img src={parrot} className='p-img-little parrot-img' />
                            <Link to="/products/parrot" className='tittle-item'><b> {this.title.title4}</b> </Link>
                            <div className='div-item'>
                                Model name: Parrot  <br /> Author: Hoang Tien Quyet</div>
                            <div className='div-p'>< IoPersonSharp />Posted by {this.state.poster1} </div >


                        </div>



                        {/* Con Cáo */}

                        <div className='p-item-little p-fox'>

                            <img src={fox} className='p-img-little fox-img' />
                            <Link to="/products/fox" className='tittle-item'><b> {this.title.title6}</b> </Link>
                            <div className='div-item'>
                                Model name: Fox <br /> Author: Hoang Tien Quyet</div>
                            <div className='div-p '>< IoPersonSharp />Posted by {this.state.poster6} </div >


                        </div>

                        {/* Cờ Nhật */}

                        <div className='p-item-little p-japan'>
                            <img src={japan} className='p-img-little japan-img' />
                            <Link to="/products/jpflag" className='tittle-item '><b> {this.title.title8}</b> </Link>
                            <div className='div-item'>
                                Model name: National flag of Japan <br /> Composer: Hiba
                            </div>
                            <div className='div-p'>< IoPersonSharp />Posted by {this.state.poster5} </div >
                        </div>
                        {/* Khung ảnh  */}

                        <div className='p-item-little p-frame'>

                            <img src={frame} className='p-img-little frame-img' />
                            <Link to="/products/frame" className='tittle-item'><b> {this.title.title7}</b> </Link>
                            <div className='div-item'>
                                Model name: Photo frame <br /> Author: Nguyen Xuan Tung</div>
                            <div className='div-p '>< IoPersonSharp />Posted by {this.state.poster5} </div >


                        </div>


                    </div>
                    <div className='footer-p'>
                        <p><MdCopyright />Make by team: Luonvuituoi work on 2022  </p>
                    </div>
                </div>



            </>
        )
    }
}
