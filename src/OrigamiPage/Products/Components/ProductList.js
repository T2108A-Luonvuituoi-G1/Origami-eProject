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
import crab from '../Assets/Images/represent/crab.jpg'
import fox from '../Assets/Images/represent/fox.jpg'
import frame from '../Assets/Images/represent/frameimg.jpg'
import japan from '../Assets/Images/represent/japanflag.jpg'
import { MdCopyright } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsFillSuitHeartFill } from "react-icons/bs";

export default class ProductList extends Component {
    state = {
        poster1: 'Võ Văn Việt',
        poster2: 'LVT-Butterfly - Michael Lafosse'

    }
    title = {
        title1: 'Hoa Sen /Lotus',
        title2: 'Heo Rừng /Boar',
        title3: 'Quốc Kì Việt Nam /Flag VietNamese',
        title4: 'Con Vẹt /Parrot',
        title5: 'Con Cua /Crab',
        title6: 'Con Cáo /Fox',
        title7: 'Khung ảnh /Photo Frame',
        title8: 'Cờ Nhật Bản /Japan Flag'

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
                      
                        <h1 className='poster-hightlight'><b>Poster by {this.state.poster2}</b></h1>
                        <div className='hl-poster'>
                            < IoPersonSharp className='icon-human' /> Poster by {this.state.poster1}
                        </div >
                        <img src={VOG} className='product-hightlight-img' />
                        <p className='div-p'>

                            Năm 2015, nhân dịp kỷ niệm 10 năm thành lập Vietnam Origami Group, tác giả Michael LaFosse đã sáng tác riêng một mẫu bươm bướm tặng VOG.
                            <br /><br />
                            VOG chân thành cảm ơn tình cảm của Mr. Michael LaFosse.
                        </p>
                        <Link to="/products/butter" className='a-btn'>Keep reading<GrLinkNext className='icon' /></Link>
                    </div>



                    {/* Hoa sen */}
                    <div className='product-items'>
                        <div className='p-item-little p-lotus'>

                            <img src={lotus} className='p-img-little lotus-img' />
                            <a className='tittle-item'><b> {this.title.title1}</b> </a>
                            <div className='div-p'>Tên mẫu: Hoa Sen / Lotus <br/> Tác giả: Đặng Việt Tân </div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >
                        </div>


                        {/* Con Vẹt */}

                        <div className='p-item-little p-parrot'>

                            <img src={parrot} className='p-img-little parrot-img' />
                            <a className='tittle-item'><b> {this.title.title4}</b> </a>
                            <div className='div-p'>Tên mẫu: Vẹt / Parrot <br/> Tác giả: Hoàng Tiến Quyết</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>


                        {/* Con Cua */}

                        <div className='p-item-little p-crab'>

                            <img src={crab} className='p-img-little crab-img' />
                            <a className='tittle-item'><b> {this.title.title5}</b> </a>
                            <div className='div-p'>Tên mẫu: Con cua / Crab <br/> Tác giả: Nguyễn Hùng Cường, phát triển từ hình cơ bản trong loạt tác phẩm “Cube Art” của Kunihiko Kasahara</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>


                        {/* Pig */}

                        <div className='p-item-little p-boar'>

                            <img src={Boar} className='p-img-little boar-img' />
                            <a className='tittle-item'><b> {this.title.title2}</b> </a>
                            <div className='div-p'>Tên mẫu: Heo rừng / Boar <br/> Tác giả: Đỗ Trí Khải</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>

                        {/* Vietnam Flag */}

                        <div className='p-item-little p-flag'>

                            <img src={VN} className='p-img-little flag-img' />
                            <a className='tittle-item'><b> {this.title.title3}</b> </a>
                            <div className='div-p'>Tên mẫu: Quốc kỳ Việt Nam <br/> Tác giả: Nguyễn Xuân Tùng Sáng tác nhân dịp 62 năm Quốc Khánh nước CHXHCN Việt Nam. Mẫu gấp …</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>


                        {/* Con Cáo */}

                        <div className='p-item-little p-fox'>

                            <img src={fox} className='p-img-little fox-img' />
                            <a className='tittle-item'><b> {this.title.title6}</b> </a>
                            <div className='div-p'>Tên mẫu: Cáo / Fox <br/> Tác giả: Hoàng Tiến Quyết</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>

                        {/* Khung ảnh  */}

                        <div className='p-item-little p-frame'>

                            <img src={frame} className='p-img-little frame-img' />
                            <a className='tittle-item'><b> {this.title.title7}</b> </a>
                            <div className='div-p'>Tên mẫu: Khung ảnh / Bảng thông tin <br/> Tác giả: Nguyễn Xuân Tùng</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >


                        </div>

                        {/* Cờ Nhật */}

                        <div className='p-item-little p-japan'>
                            <img src={japan} className='p-img-little japan-img' />
                            <a className='tittle-item '><b> {this.title.title8}</b> </a>
                            <div className='div-p'>Tên mẫu: Quốc kỳ Nhật bản <br/> Sáng tác: Hiba</div>
                            <div className='div-p'>< IoPersonSharp />Poster by {this.state.poster1} </div >
                        </div>
                    </div>
                        <div className='footer-p'>
                            <p><MdCopyright/>Make by team: Luonvuituoi work on 2022 <br/><BsSuitHeartFill/> Huyền Cute <BsFillSuitHeartFill/> </p>
                        </div>
                </div>



            </>
        )
    }
}
