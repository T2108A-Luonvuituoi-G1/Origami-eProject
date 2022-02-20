import React from 'react'
import Namavt from '../Assets/Images/Namavt.jpg'
import '../Assets/Css/BaseAvatars.css'
import AdminNav from '../Components/AdminNav'
import '../Assets/Css/BaseStatus.css'
import'../Assets/Css/BaseShape.css'
export default function BaseAvatars() {
    return (
        <>  
            <AdminNav/>
            <div className='BA-Sizing'>
                <h4 className='Base-Text'>Sizing</h4><hr />
                <div className='BA-avartar'>
                    <img src={Namavt} className='BA-S1' />
                    <img src={Namavt} className='BA-S2' />
                    <img src={Namavt} className='BA-S3' />
                    <img src={Namavt} className='BA-S4' />
                    <img src={Namavt} className='BA-S5' />
                    <img src={Namavt} className='BA-S6' />
                </div>
            </div>


            <div className='BA-Status'>
                <h4 className='Base-Text'>Status Indicator</h4><hr />

                <div className='BA-Status-images'>
                    <div className='BA-Status-online '>
                        <img src={Namavt} className='BA-Status-img' />
                    </div>
                    <div className='BA-Status-offline'>
                    <img src={Namavt} className='BA-Status-img' />
                    </div>
                    <div className='BA-Status-away'>
                    <img src={Namavt} className='BA-Status-img' />
                    </div>
                </div>
            </div>
            <div className='BA-Shape'>
                <h4 className='Base-Text'>Shape</h4>
                <img src={Namavt} className='BA-Status-img' />
                <img src={Namavt} className='BA-Status-img' />
            </div>
        </>
    )
}
