import React from 'react';
import '../Assets/Css/UserProfileStatus.css'
import Avatar from '../Assets/Images/Anh-chim-hac.jpg'

function UserProfileStatus() {
    return (
        <>
            <div className='up-status'>
                <div className='up-status-post'>
                    <div className='up-status-post-header'>
                        <img src={Avatar} className='up-status-post-header-ava' />
                        <p className='up-status-post-header-name'>Ta Quang Minh</p>
                        <p className='up-status-post-header-time'>3:20am 22/1/2022</p>
                    </div>
                    <div className='up-status-post-content'></div>
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
