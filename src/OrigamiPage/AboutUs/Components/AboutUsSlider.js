import React from 'react'
import '../Assets/Css/AboutUsSlider.css'
import { BiCurrentLocation, BiPhone, BiMailSend } from "react-icons/bi";

function AboutUsSlider() {
    return (
        <div className='au-slider'>
            <div className='au-slider-content'>
                <div className='au-slider-content-header'>
                    <BiCurrentLocation className='au-slider-location-icon' />
                </div>
                <div className='au-slider-content-footer'>
                    <h4>Location</h4>
                    <p>VietNam: 8 Ton That Huyet, My Dinh</p>
                    <p>Japan: 4-2-8 Shibakōen, Minato City</p>
                    <p>America: 1233 20th Street N.W</p>
                </div>
            </div>
            <div className='au-slider-content'>
                <div className='au-slider-content-header'>
                    <BiPhone className='au-slider-location-icon' />
                </div>
                <div className='au-slider-content-footer'>
                    <h4>Phone</h4>
                    <p>VietNam: 012345678</p>
                    <p>Japan: (03) 1234-5678.</p>
                    <p>America: 1122334455</p>
                </div>
            </div>
            <div className='au-slider-content'>
                <div className='au-slider-content-header'>
                    <BiMailSend className='au-slider-location-icon' />
                </div>
                <div className='au-slider-content-footer'>
                    <h4>Email</h4>
                    <p>luonvuituoi@gmail.com</p>
                    <p>hayvuilennao@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUsSlider
