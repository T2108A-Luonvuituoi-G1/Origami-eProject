import React from 'react';
import '../Assets/Css/UserProfileContent.css'
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdSchool } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";

{/* Mo dau */ }
function UserProfileContent() {
    return (
        <>
            <div className='up-content'>
                <div className='up-information' >
                    <div className='up-full-name'>
                        Tran Minh Duc
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

                {/*Icons */}
                <div className='up-icons'>
                    <ul className='up-icons-information'>

                        <li>
                            <MdSchool /> THPT Tam Nong .
                        </li>
                        <li>
                            <ImMail /> Tran****@gmail.com.
                        </li>
                        <li>
                            <ImPhone /> 0352946702.
                        </li>
                        <li>
                            <FaEnvelope /> Send me a message.
                        </li>
                        <li>
                            <FaGithub /> LuonVuiTuoi-origami.
                        </li>
                        <li>
                            <BsTwitter /> tranduc0501.
                        </li>
                        <li>
                            <ImFacebook /> Tran Duc.
                        </li>
                        <li>
                            <AiFillHeart /> Dating hihi.
                        </li>



                    </ul>
                </div>
            </div>
        </>
    );
}

export default UserProfileContent;
