import React, { Component } from 'react'
import '../Assets/Css/Home.css'
import HomeBackgroundHeader from '../Assets/Images/HomeBackgroundHeader.jpg'
import HomeImgHeader from '../Assets/Images/HomeImgHeader.png'
import { Link } from 'react-router-dom';
import Event1 from '../Assets/Images/1.jpg'
import Event2 from '../Assets/Images/2.jpg'
import Event3 from '../Assets/Images/3.jpg'

export default class Home extends Component {

    state = {
        img: Event1
    }
    
    changeImage() {
        var index = 0;
        this.setState({img: this.state.img[index + 2]  })
    }

    img1 = () => {
        this.setState({
            img: this.state.img = Event1
        })
    }

    img2 = () => {
        this.setState({
            img: this.state.img = Event2
        })
    }

    img3 = () => {
        this.setState({
            img: this.state.img = Event3
        })
    }

    render() {
        return (
            <>
                <div className='home-page'>
                    <div className='home-page-header'>
                        <img src={HomeBackgroundHeader} className='home-bg-header' />
                        <div className='home-image-header-sub'></div>
                        <img src={HomeImgHeader} className='home-image-header' />
                        <div className='home-text-header'>
                            <h1 className='home-text-h1'>You can make all of origami</h1>
                            <p className='home-text-p'>Make Your Favorite Origami now!</p>
                            <Link className='home-header-btn' to="/products">Try now</Link>
                        </div>
                    </div>

                    <div className='home-page-content'>
                        <div className='home-page-content-event'>
                            <div className='home-event-header'>
                                <p>EVENT OF ORIGAMI</p>
                            </div>
                            <div className='home-event-content'>
                                <img className='home-event1 home-event' src={this.state.img} />
                            </div>
                            <div className='home-event-checkbox'>
                                <input onClick={this.img1} className='home-event-checkbox-btn' type='checkbox' />
                                <input onClick={this.img2} className='home-event-checkbox-btn' type='checkbox' />
                                <input onClick={this.img3} className='home-event-checkbox-btn' type='checkbox' />
                            </div>
                        </div>

                        <div className='home-page-content-new'>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
