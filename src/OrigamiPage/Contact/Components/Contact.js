import React, { Component } from 'react'
import '../Assets/Css/Contact.css'
import { BiMap, BiConversation, BiPhone } from "react-icons/bi";
import HomeBackgroundHeader from '../Assets/Images/5991159.jpg'

function Contact() {
    return (
        <>
            <div>
                <div className='contact-send-page'
                    style={{
                        background: `url(${HomeBackgroundHeader})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='contact-input'>
                        <div className='contact-input-inside'>
                            <div className='contact-input-title'>
                                Get in Touch
                            </div>
                            <div className='contact-input-title-sub'>
                                Tell something to us
                            </div>
                            <div className='contact-input-submit'>
                                <input type='text' className='contact-input-name contact-input-area' placeholder='Your name' />
                                <input type='text' className='contact-input-email contact-input-area' placeholder='Your email' />
                                <textarea rows="4" cols="50" className='contact-input-text contact-input-area' placeholder='Typing your massage here...' />
                            </div>
                            <input type='button' className='contact-input-button' value='Send' />
                        </div>
                    </div>
                    <div className='contact-input-sub'>
                        <div className='contact-input-sub-inside'>
                            <div className='contact-input-sub-title'>
                                Contact Us
                            </div>
                            <div className='contact-input-sub-address'>
                                <BiMap />
                                8 Ton That Huyet, My Dinh
                            </div>
                            <div className='contact-input-sub-email'>
                                <BiConversation />
                                luonvuituoi@gmail.com
                            </div>
                            <div className='contact-input-sub-phone'>
                                <BiPhone />
                                088888888
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact