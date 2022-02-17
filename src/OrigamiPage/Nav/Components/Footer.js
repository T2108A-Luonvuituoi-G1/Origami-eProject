import React from 'react'
import '../Assets/Css/Footer.css'
import AptechLogo from '../Assets/Images/aptech.png'
import { AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";

function HomeFooter() {
    return (
        <div className='home-footer'>
            <ul className='home-footer-header'>
                <li className='home-footer-li' >LUONVUITUOI
                    <p>Email: luonvuituoi@gmail.com</p>
                    <p>Address: 8 Ton That Huyet, My Dinh, Ha Noi, Viet Nam.</p>
                    <img src={AptechLogo} className='home-footer-logo' />
                </li>
                <li className='home-footer-li home-footer-sp' >SUPPORT
                    <p>Contact</p>
                    <p>Rules</p>
                    <p>security</p>
                </li>
                <li className='home-footer-li home-footer-us' >ABOUT US
                    <p>Leader: Ta Quang Minh</p>
                    <p>Member: Dao Thanh Nam, Vo Van Viet, Tran Minh Duc, Le Nhu Viet Anh</p>
                </li>
            </ul>
            <ul className='home-footer-footer'>
                <li>© 2022 LUONVUITUOI - Origami for all</li>
            </ul>
            <div className='home-footer-icon'>
                <i className='home-footer-github' > <AiFillGithub /> </i>
                <i className='home-footer-github' > <BsStackOverflow /> </i>
            </div>
        </div>
    )
}

export default HomeFooter
