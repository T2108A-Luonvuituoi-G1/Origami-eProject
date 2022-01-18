import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import img1 from '../Assets/Images/Gap-giay-origami.jpg'

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
                        <p>day la 1 doan text</p>
                        <br />
                        <p>day cung la 1 doan text</p>
                    </div>
                </div>
                <div class="Product-bottom_right">
                    <div class="text">
                        <p>day la 1 doan text khac </p>
                    </div>
                </div>
            </div>
        )
    }
}
