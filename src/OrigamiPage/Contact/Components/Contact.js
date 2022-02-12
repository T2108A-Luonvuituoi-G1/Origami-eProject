import React, { useState } from 'react'
import '../Assets/Css/Contact.css'
import { BiMap, BiConversation, BiPhone } from "react-icons/bi";
import HomeBackgroundHeader from '../Assets/Images/5991159.jpg'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = () => {
        if (email == '' || mail == '' || name == '') {
            alert('Write something !')
        } else {
            setName('')
            setEmail('')
            setMail('')
            alert('Submit success !')
        }
    }

    return (
        <div className='contact-us-page'>
            <div className='contact-send-page'>
                <div className='contact-input'>
                    <div className='contact-input-inside'>
                        <div className='contact-input-title'>
                            Get in Touch
                        </div>
                        <div className='contact-input-title-sub'>
                            Tell something to us
                        </div>
                        <div className='contact-input-submit'>
                            <input type='text' className='contact-input-name contact-input-area' placeholder='Your name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input type='text' className='contact-input-email contact-input-area' placeholder='Your email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <textarea rows="4" cols="50" className='contact-input-text contact-input-area' placeholder='Typing your massage here...'
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                            />
                        </div>
                        <input type='button' className='contact-input-button' value='Send'
                            onClick={handleSubmit}
                        />
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
    )
}

export default Contact