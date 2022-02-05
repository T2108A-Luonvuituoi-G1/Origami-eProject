import React from 'react';
import '../Assets/Css/UserProfileStatus.css'
import Avatar from '../Assets/Images/Anh-chim-hac.jpg'
import Love from '../Assets/Images/Anhny.jpg'
import Love2 from '../Assets/Images/Anhny2.jpg'
import anhtet1 from '../Assets/Images/Anhtet1.jpg'
import anhtet2 from '../Assets/Images/Anhtet2.jpg'
import { HiOutlinePhotograph, HiPaperClip, HiChevronRight } from "react-icons/hi";

function UserProfileStatus() {
    return (
        <>
            <div className='up-status'>
                <div className='up-status-post-add'>
                    <div className='up-status-post-add-header'>
                        <img src={Avatar} className='up-status-post-add-header-ava' />
                        <input type='text' className='up-status-post-add-header-text' placeholder='What on your mind, Duc ?' />
                    </div>
                    <hr className='up-status-post-add-hr' />
                    <div className='up-status-post-add-footer'>
                        <HiOutlinePhotograph className='up-status-post-add-icon' />
                        <p className='up-status-post-add-p' >Photos</p>
                        <HiPaperClip className='up-status-post-add-icon' />
                        <p className='up-status-post-add-p' >Videos</p>
                        <HiChevronRight className='up-status-post-add-icon' />
                    </div>
                </div>
                <div className='up-status-post'>
                    <div className='up-status-post-header'>
                        <img src={Avatar} className='up-status-post-header-ava' />
                        <p className='up-status-post-header-name'>Tran Minh Duc</p>
                        <p className='up-status-post-header-time'>3:20am 22/1/2022</p>
                        <p className='up-status-post-header-statusline'>Hi everybody . Today I will introduce myself. My name is Duc,
                            this year I am 19 years old. You can contact me via
                            nick face "Tran Duc" or phone number 035467*** to know more about me. </p>
                    </div>
                    <div className='up-status-post-content'>
                        <img src={Love} className='up-status-post-content-love' />
                        <img src={Love2} className='up-status-post-content-love2' />
                    </div>
                    <div className='up-status-post-footer'></div>
                    </div>

                <div className='up-status-post'>
                    <div className='up-status-post-header'></div>
                    <img src={Avatar} className='up-status-post-header-ava' />
                        <p className='up-status-post-header-name'>Tran Minh Duc</p>
                        <p className='up-status-post-header-time'>7:20am 1/2/2022</p>
                        <p className='up-status-post-header-statusline'>Hello everyone. So the old year has ended and the new year
                         has come again. Today is February 1, 2002.
                          On the first day of the new year, I wish everyone good health and good luck.</p>
                    <div className='up-status-post-content'>
                        <img src={anhtet1} className='up-status-post-content-anhtet1'/>
                        <img src={anhtet2} className='up-status-post-content-anhtet2'/>
                    </div>  
                       
                    <div className='up-status-post-footer'></div>
                </div>
            </div>
        </>
    );
}

export default UserProfileStatus;
