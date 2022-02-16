import React, { useState } from 'react'
import '../Assets/Css/Contact.css'
import { BiMap, BiConversation, BiPhone } from "react-icons/bi";

function Contact() {

    const [border1, setBorder1] = useState('');
    const [border2, setBorder2] = useState('');
    const [border3, setBorder3] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mail, setMail] = useState('');
    const [error, setError] = useState('')
    const [bgError, setBgError] = useState('none')
    const [color, setColor] = useState('#DD4A48')

    const handleSubmit = () => {

        if (name === '' && email === '' && mail === '') {
            setBorder1('0.2vw solid #DD4A48');
            setBorder2('0.2vw solid #DD4A48');
            setBorder3('0.2vw solid #DD4A48');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Error !')
        } if (name !== '' && email === '' && mail === '') {
            setBorder1('0.2vw solid rgb(63 133 26)');
            setBorder2('0.2vw solid #DD4A48');
            setBorder3('0.2vw solid #DD4A48');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Error !')
        } if (name === '' && email !== '' && mail === '') {
            setBorder1('0.2vw solid #DD4A48');
            setBorder2('0.2vw solid rgb(63 133 26)');
            setBorder3('0.2vw solid #DD4A48');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Error !')
        } if (name === '' && email === '' && mail !== '') {
            setBorder1('0.2vw solid #DD4A48');
            setBorder2('0.2vw solid #DD4A48');
            setBorder3('0.2vw solid rgb(63 133 26)');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Error !')
        } if (name === '' && email !== '' && mail !== '') {
            setBorder1('0.2vw solid #DD4A48');
            setBorder2('0.2vw solid rgb(63 133 26)');
            setBorder3('0.2vw solid rgb(63 133 26)');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Name Error !')
        } if (name !== '' && email === '' && mail !== '') {
            setBorder1('0.2vw solid rgb(63 133 26)');
            setBorder2('0.2vw solid #DD4A48');
            setBorder3('0.2vw solid rgb(63 133 26)');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Email Error !')
        } if (name !== '' && email !== '' && mail === '') {
            setBorder1('0.2vw solid rgb(63 133 26)');
            setBorder2('0.2vw solid rgb(63 133 26)');
            setBorder3('0.2vw solid #DD4A48');
            setBgError('#fff')
            setColor('#DD4A48')
            setError('Massage Error !')
        } if (name !== '' && email !== '' && mail !== '') {
            setBorder1('none');
            setBorder2('none');
            setBorder3('none');
            setName('');
            setEmail('');
            setMail('');
            setError('Submit Success !')
            setColor('rgb(63 133 26)')
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
                                style={{border: border1}}
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <input type='text' className='contact-input-email contact-input-area' placeholder='Your email'
                                style={{border: border2}}
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <textarea rows="4" cols="50" className='contact-input-text contact-input-area' placeholder='Typing your massage here...'
                                style={{border: border3}}
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                            />
                        </div>
                        <input type='button' className='contact-input-button' value='Send'
                            onClick={handleSubmit}
                        />
                        <div className='contact-error'
                            style={{background: bgError, color: color}}
                        >
                            {error}
                        </div>
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