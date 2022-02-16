import React, { useState } from 'react';
import '../Assets/Css/Comment.css'
import Logo from '../Assets/Images/user-logo.jpg'

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
                    style={{border: border}}
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
                        <img src={Logo} />
                        <p className='comment-page-name'>Tran Minh Duc</p>
                        <p key={index} className='comment-page-text'>{comment}</p>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Comment;
