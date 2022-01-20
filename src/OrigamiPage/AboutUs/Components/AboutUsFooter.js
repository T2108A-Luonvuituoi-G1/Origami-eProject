import React from 'react'
import '../Assets/Css/AboutUsFooter.css'
import MrT from '../Assets/Images/Mr.T.jpg'

function AboutUsFooter() {
    return (
        <div>
            <div className="about_teacher">
                <div className="container">
                    <h1 className="Title">Special Advisors</h1>
                    <div className="card">
                        <img src={MrT} alt="avatar" />
                        <div>
                            <p>Mr.Tuan Nguyen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFooter
