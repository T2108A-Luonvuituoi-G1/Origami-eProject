import React from 'react'
import Namavt from '../Assets/Images/Namavt.jpg'
import '../Assets/Css/BaseAvatars.css'
import AdminNav from '../Components/AdminNav'
import '../Assets/Css/BaseStatus.css'
import '../Assets/Css/BaseShape.css'
import '../Assets/Css/BaseAvtGroup.css'
import { Link } from 'react-router-dom'

export default function BaseAvatars() {
    return (
        <>
            
            
            <div className='layout-Base'>
                <div className='BA-Sizing'>
                    <p className='Base-Text'>Sizing</p><hr />
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
                    <p className='Base-Text'>Status Indicator</p><hr />

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
                    <p className='Base-Text'>Shape</p><hr/>
                    <img src={Namavt} className='BA-Shape-img shape-1' />
                    <img src={Namavt} className='BA-Shape-img shape-2' />
                </div>
                <div className='BA-Group'>
                    <p className='Base-Text'>Group</p><hr/>
                    <div className='Group-img'>
                    <img src={Namavt} className='BA-Group-img Group-img-1' />
                    <img src={Namavt} className='BA-Group-img Group-img-2' />
                    <img src={Namavt} className='BA-Group-img Group-img-3' />
                    <span className='BA-Group-img span-img'>CF</span>
                    </div>
                </div>
     
            </div>

        </>
    )
}
