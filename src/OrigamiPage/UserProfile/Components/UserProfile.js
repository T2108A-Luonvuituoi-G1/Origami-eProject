import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import Img1 from '../Assets/Images/Anh-chim-hac.jpg'
import Usimgtop from '../Assets/Images/chim1.jpg'

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
                    <div className="card">
                        <img src={Img1} alt="cover" />
                    </div>
                    <div>
                        <p><b>Tran Minh Duc</b></p>
                    </div>
                </div>
                <div className="Profile-bottom_right">
                    <div class="text">
                        <p>Thong tin nguoi dang ky </p>

                <div className="Profile-bottom_left">
                    <div className="text">
                        <p>day la 1 doan text</p>
                        
                    
                    </div>
                </div>
                <div className="Profile-bottom_hight">
                    <div className="text">
                        <p>day la 1 doan text khac </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
