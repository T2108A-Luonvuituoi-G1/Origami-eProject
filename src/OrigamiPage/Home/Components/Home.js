import React, { Component } from 'react'
import '../Assets/Css/Home.css'
import HomeBackgroundHeader from '../Assets/Images/HomeBackgroundHeader.jpg'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='home-page'>
                    <img src={HomeBackgroundHeader} className='home-bg-header' />
                </div>
            </>
        )
    }
}
