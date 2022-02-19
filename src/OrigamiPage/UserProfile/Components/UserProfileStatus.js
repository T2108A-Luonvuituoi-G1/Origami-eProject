import React, { useState, useEffect } from 'react';
import '../Assets/Css/UserProfileStatus.css'
import Avatar from '../Assets/Images/Anh-chim-hac.jpg'
import Love from '../Assets/Images/274176151_10224796332848822_5921506225620991094_n.jpg'
import Love2 from '../Assets/Images/Anhny2.jpg'
import anhtet1 from '../Assets/Images/Anhtet1.jpg'
import anhtet2 from '../Assets/Images/Anhtet2.jpg'
import { HiOutlinePhotograph, HiPaperClip, HiChevronRight } from "react-icons/hi";

function UserProfileStatus() {

    const [statuss, setStatuss] = useState([]);
    const [status, setStatus] = useState('');
    const [clockState, setClockState] = useState();
    const [border, setBorder] = useState('')

    const handleClick = () => {
        const Dates = new Date();
        setClockState(Dates.toLocaleTimeString());
    }

    return (
        <>
            <div className='up-status'>
                <div className='up-status-post-add'>
                    <div className='up-status-post-add-header'>
                        <img src={Avatar} className='up-status-post-add-header-ava' />
                        <input type='text' className='up-status-post-add-header-text' placeholder='What on your mind, Duc ?'
                            style={{ border: border }}
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>
                    <hr className='up-status-post-add-hr' />
                    <div className='up-status-post-add-footer'>
                        <HiOutlinePhotograph className='up-status-post-add-icon' />
                        <p className='up-status-post-add-p' >live video</p>
                        <HiPaperClip className='up-status-post-add-icon' />
                        <p className='up-status-post-add-p' >Photo/video</p>
                        <HiChevronRight className='up-status-post-add-icon'
                            onClick={() => {
                                if (status == '') {
                                    setBorder('0.2vw solid #DD4A48')
                                } else {
                                    handleClick()
                                    setStatuss(prev => [status, ...prev])
                                    setStatus('')
                                    setBorder('none')
                                }
                            }}

                        />
                    </div>
                </div>

                <div className='status-main'>
                    {statuss.map((status, index) => (
                        <div className='status-page' key={index} >
                            <img src={Avatar} />
                            <p className='status-page-name'>Tran Minh Duc</p>
                            <div className='status-page-clock'>
                                {clockState}
                            </div>
                            <p key={index} className='status-page-text'>{status}</p>
                        </div>
                    ))}
                </div>

                <div className='up-status-post'>
                    <div className='up-status-post-header'>
                        <img src={Avatar} className='up-status-post-header-ava' />
                        <p className='up-status-post-header-name'>Tran Minh Duc</p>
                        <p className='up-status-post-header-time'>3:20am 22/1/2022</p>
                        <p className='up-status-post-header-statusline'>Dog in Origami </p>
                    </div>
                    <div className='up-status-post-content'>
                        <img src={Love} className='dog-img' />
                    </div>
                    <div className='up-status-post-footer'></div>
                </div>
            </div>
        </>
    );
}

export default UserProfileStatus;
