import React from 'react';
import '../Assets/Css/UserProfileHeader.css'
import Avatar from '../Assets/Images/Anh-chim-hac.jpg'
import CoverImg from '../Assets/Images/Anh2.jpg'

function UserProfileHeader() {
    return (
        <>
            <div className='up-header'>
                <div className='up-avatar-page'>
                    <img src={Avatar} className='up-avatar' />
                </div>
                <div className='up-cover-img-page'>
                    <img src={CoverImg} className='up-cover-img' />
                </div>
            </div>
        </>
    );
}

export default UserProfileHeader;
