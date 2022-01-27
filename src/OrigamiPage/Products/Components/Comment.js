import React, { useState } from 'react';
import '../Assets/Css/Comment.css'
import Logo from '../Assets/Images/user-logo.jpg'

function Comment() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const handleSubmit = () => {
        if (comment == '') {
            alert('What are you doing ?')
        } else {
            setComments(prev => [...prev, comment])
            setComment('')
        }
    }

    return (
        <>
            <div className='comment-input'>
                <input className='comment-input-text' type='text' placeholder='Say something !!'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <input className='comment-input-btn' type='button' value={'Send'}
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
