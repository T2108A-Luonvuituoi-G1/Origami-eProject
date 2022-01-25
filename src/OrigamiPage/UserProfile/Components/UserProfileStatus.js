import React from 'react';
import '../Assets/Css/UserProfileStatus.css'
import Avatar from '../Assets/Images/Anh-chim-hac.jpg'
import Love from '../Assets/Images/Anhny.jpg'
import Love2 from '../Assets/Images/Anhny2.jpg'

function UserProfileStatus() {
    return (
        <>
            <div className='up-status'>
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
                       <img src={Love} className='up-status-post-content-love'/>
                       <img src={Love2} className='up-status-post-content-love2'/>
                    </div>

                    <div className='up-status-post-footer'></div>
                    </div>

                <div className='up-status-post'>
                    <div className='up-status-post-header'></div>
                    <div className='up-status-post-content'></div>  
                    <div className='up-status-post-footer'></div>
                </div>
            </div>
        </>
    );
}

export default UserProfileStatus;
