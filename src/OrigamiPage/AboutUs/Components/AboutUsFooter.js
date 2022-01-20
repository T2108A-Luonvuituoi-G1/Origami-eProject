import React from 'react'
import '../Assets/Css/AboutUsFooter.css'
import MrT from '../Assets/Images/Mr.T.jpg'

function AboutUsFooter() {
    return (
        <div className="about_teacher">
            <div className='about-teacher-right'>
                <div className="about-teacher-content">
                    <img className='au-ava-teacher' src={MrT} alt="avatar" />
                </div>
            </div>
            <div className='about-teacher-left'>
                <div className="about-teacher-header">
                    <h1>Special Advisors</h1>
                    <p>Mr.Tuan Nguyen</p>
                </div>
                <div className='about-teacher-information'>
                    <p>"Code bug is teacher !"</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsFooter
