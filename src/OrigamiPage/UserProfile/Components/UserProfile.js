import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import Img1 from '../Assets/Images/Anh-chim-hac.jpg'
import Usimgtop from '../Assets/Images/Anh2.jpg'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="Profile-top"
                    style={{
                        background: `url(${ Usimgtop })`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="card-one">
                        <img src={Img1} alt="cover" />
                    </div>
                    <div>
                        <p><b>Tran Minh Duc</b></p>
                    </div>
                </div>
                <div className="Profile-bottom_right">
                    <div class="text">
                        <p>Mot cai gi do  </p>

                <div className="Profile-bottom_left">
                    <div className="up-text">
                        <p>My information</p>
                        <p>Ho va ten: Tran Minh Duc</p>
                        <p>Ngay sinh: 05/01/2003</p>
                        <p>Que Quan: Phu tho</p>
                        <p>So thich: Da bong va choi game</p>
                        <p>Tieu su: Da tung hoc 3 nam o truong man non, 
                            5 nam o truong cap 1 (xuat sac nhan 5 bang giay khen hoc sinh gioi),
                            va 3 nam cap 3 o truong thpt Tam Nong , Cuoi cung la dang hoc dai hoc 
                            o truong dai hoc FPT aptech Ha Noi.
                        </p>
                    
                    </div>
                </div>
                <div className="Profile-bottom_hight">
                    <div className="text">
                        <p>day la 1 cai gi do khac </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
