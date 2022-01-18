import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import img1 from '../Assets/Images/Anh-chim-hac.jpg'

import img1 from '../Assets/Images/chim1.jpg'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="Profile-top">
                    <div className="card">
                        <img src={img1} alt="cover" />

                    </div>

                    <div>
                        <p><b>Trần Minh Đức</b></p>
                    </div>

                </div>
                <div classname="Profile-bottom_left">
                    <div class="text">
                        <p>Phan hoi voi chung toi</p>
                    
                    </div>
                </div>
                <div className="Profile-bottom_right">
                    <div class="text">
                        <p>Thong tin nguoi dang ky </p>

                <div className="Profile-bottom_left">
                    <div className="text">
                        <p>day la 1 doan text</p>
                        <br />
                        <p>day cung la 1 doan text</p>
                    </div>
                </div>
                <div className="Profile-bottom_right">
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
