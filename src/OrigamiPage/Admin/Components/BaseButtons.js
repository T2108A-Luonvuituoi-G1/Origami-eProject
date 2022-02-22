import React from 'react'
import AdminNav from './AdminNav'
import '../Assets/Css/BaseButtons.css'
import '../Assets/Css/BaseBtnLabel.css'
import '../Assets/Css/BaseBtnIcon.css'
import '../Assets/Css/BaseBtnType.css'
import { BsFillArchiveFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { BsCheckLg } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function BaseButtons() {
    return (
        <>
            {/* <AdminNav/> */}
            <div className='layout-Base'>
                <div className='button-original'>
                    <p className='Base-Text'>Button Original</p><hr/>
                    <a className='bo-btn default-btn '>Default</a>
                    <a className='bo-btn primary-btn '>Primary</a>
                    <a className='bo-btn second-btn  '>Secondary</a>
                    <a className='bo-btn info-btn    '>Info</a>
                    <a className='bo-btn success-btn '>Success</a>
                    <a className='bo-btn warming-btn '>Warming</a>
                    <a className='bo-btn Danger-btn  '>Danger</a>
                    <a className='bo-btn btn-link'>Link</a>
                </div>

                <div className='button-label'>
                    <p className='Base-Text'>Button with Label</p><hr/>
                    <a className='bo-btn default-btn df-label '><BsFillArchiveFill/> Default</a>
                    <a className='bo-btn primary-btn pr-label '><BsBookmark/> Primary</a>
                    <a className='bo-btn second-btn  se-label '><TiPlus/> Secondary</a>
                    <a className='bo-btn info-btn    if-label '><FaInfo/> Info</a>
                    <a className='bo-btn success-btn sc-label '><BsCheckLg/>Success</a>
                    <a className='bo-btn warming-btn wm-label '><FaExclamationCircle/> Warming</a>
                    <a className='bo-btn Danger-btn  dg-label '><FaHeart/> Danger</a>
                    <a className='bo-btn btn-link link-label'><FaLink/>Link</a>
                </div>
                {/* <div className='button-icon'>
                    <p className='Base-Text'>Button Icon</p><hr/>
                    <a className='bi-btn df-icon   '><FaAlignLeft/> </a>
                    <a className='bi-btn pr-icon   '><FaTwitter/></a>
                    <a className='bi-btn se-icon   '><BsBookmark/> </a>
                    <a className='bi-btn if-icon   '><FaInfo/> </a>
                    <a className='bi-btn sc-icon   '><BsCheckLg/></a>
                    <a className='bi-btn wm-icon   '><FaExclamationCircle/> </a>
                    <a className='bi-btn dg-icon   '><FaHeart/> </a>
                    <a className='bi-btn link-icon'><FaLink/></a>
                </div> */}
                <div className='button-type'>
                    <p className='Base-Text'>Button Type</p><hr/><br/>
                    <a className='bt-btn  nomal-btn '>Nomal</a>
                    <a className='bt-btn  border-btn'>Border</a>
                    <a className='bt-btn  round-btn '>Round</a>
                    <a className='bt-btn  round2-btn'>Round</a>
                    <a className='bt-btn   link-btn'>Link</a>
                </div>
                <div className='button-original disabled-button'>
                    <p className='Base-Text'>Disabled Button </p><hr/>
                    <a className='bo-btn default-btn disable-btn'>Default</a>
                    <a className='bo-btn primary-btn disable-btn'>Primary</a>
                    <a className='bo-btn second-btn  disable-btn'>Secondary</a>
                    <a className='bo-btn info-btn    disable-btn'>Info</a>
                    <a className='bo-btn success-btn disable-btn'>Success</a>
                    <a className='bo-btn warming-btn disable-btn'>Warming</a>
                    <a className='bo-btn Danger-btn  disable-btn'>Danger</a>
                    <a className='bo-btn btn-link  disable  disable-btn'>Link</a>
                </div>
            </div>
        
        </>
    )
}
