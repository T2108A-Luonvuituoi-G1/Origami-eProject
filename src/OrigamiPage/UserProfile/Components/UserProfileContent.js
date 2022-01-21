import React from 'react';
import '../Assets/Css/UserProfileContent.css'

function UserProfileContent() {
    return (
        <>
            <div className='up-content'>
                <div className='up-information' >
                    <div className='up-full-name'>
                        Ta Quang Minh
                    </div>
                    <div className='up-job' >
                        Manager
                    </div>
                </div>
                <div className='up-follower'>
                    <ul className='up-follower-num'>
                        <li>1</li>
                        <li>1000</li>
                        <li>135</li>
                    </ul>
                    <ul>
                        <li>Posts</li>
                        <li>Follower</li>
                        <li>Following</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default UserProfileContent;
