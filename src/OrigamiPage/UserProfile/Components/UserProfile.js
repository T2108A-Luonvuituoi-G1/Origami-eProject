import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import img1 from '../Assets/Images/Anh-chim-hac.jpg'


export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div class="Product-top">
                    <div class="card">
                        <img src={img1} alt="cover" />

                    </div>

                    <div>
                        <p><b>Trần Minh Đức</b></p>
                    </div>

                </div>
                <div class="Product-bottom_left">
                    <div class="text">
                        <p>Phan hoi voi chung toi</p>
                    
                    </div>
                </div>
                <div class="Product-bottom_right">
                    <div class="text">
                        <p>Thong tin nguoi dang ky </p>
                    </div>
                </div>
            </div>
        )
    }
}
