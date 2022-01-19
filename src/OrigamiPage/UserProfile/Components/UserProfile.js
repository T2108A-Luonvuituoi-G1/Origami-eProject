import React, { Component } from 'react'
import '../Assets/Css/UserProfile.css'
import img1 from '../Assets/Images/chim1.jpg'

export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="Product-top">
                    <div className="card">
                        <img src={img1} alt="cover" />

                    </div>
                    <div>
                        <p><b>Trần Minh Đức</b></p>
                    </div>

                </div>
                <div className="Product-bottom_left">
                    <div className="text">
                        <p>day la 1 doan text</p>
                        <br />
                        <p>day cung la 1 doan text</p>
                    </div>
                </div>
                <div className="Product-bottom_right">
                    <div className="text">
                        <p>day la 1 doan text khac </p>
                    </div>
                </div>
            </div>
        )
    }
}
