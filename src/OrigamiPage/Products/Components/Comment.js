import React, { useState } from 'react';
import '../Assets/Css/Comment.css'
import Logo from '../Assets/Images/user-logo.jpg'
import Nam from '../Assets/Images/Namavt.jpg'
import Viet from '../Assets/Images/Vietavt.jpg'
import Vanh from '../Assets/Images/vanhavt.jpg'

function Comment() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [border, setBorder] = useState('')

    const handleSubmit = () => {
        if (comment == '') {
            setBorder('0.2vw solid #DD4A48')
        } else {
            setBorder('')
            setComments(prev => [...prev, comment])
            setComment('')
        }
    }

    return (
        <>
            <div className='comment-input'>
                <input className='comment-input-text' type='text' placeholder='Say something !!'
                    style={{ border: border }}
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <input className='comment-input-btn' type='button'
                    value={'Send'}
                    onClick={handleSubmit}
                />
            </div>

            <div className='comment-main'>
                {comments.map((comment, index) => (
                    <div className='comment-page' key={index} >
                        <img className='avatar-comment' src={Logo} />
                        <p className='comment-page-name'>Tran Minh Duc</p>
                        <p key={index} className='comment-page-text'>{comment}</p>
                    </div>
                ))}
            </div>

            <div className='comment-bot'>
                <img className='avatar-comment' src={Nam} />
                <p className='comment-page-name'>Dao Thanh Nam</p>
                <p className='comment-page-text'>Spectacular</p>
            </div>

            <div className='comment-bot'>
                <img className='avatar-comment' src={Viet} />
                <p className='comment-page-name'>Vo Van Viet</p>
                <p className='comment-page-text'>Really beautiful! Especially with these color!</p>
            </div>

            <div className='comment-bot'>
                <img className='avatar-comment' src={Vanh} />
                <p className='comment-page-name'>Le Nhu Viet Anh</p>
                <p className='comment-page-text'>An absolute beauty. Very well done</p>
            </div>

        </>
    );
}

export default Comment;
