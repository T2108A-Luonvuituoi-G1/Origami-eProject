import React, { Component } from 'react'
import '../Assets/Css/HomeContent.css'
import Event1 from '../Assets/Images/1.jpg'
import Event2 from '../Assets/Images/2.jpg'
import Event3 from '../Assets/Images/3.jpg'
import New1 from '../Assets/Images/new1.jpg'

export default class HomeContent extends Component {

    state = {
        img: Event1
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
                <div className='home-page-content'>
                    <div className='home-page-content-event'>
                        <div className='home-event-header'>
                            <p className='home-event-header-p'>ORIGAMI EVENT</p>
                        </div>
                        <div className='home-event-content'>
                            <img className='home-event1 home-event' src={this.state.img} />
                        </div>
                        <div className='home-event-checkbox'>
                            <input onClick={this.img1} className='home-event-checkbox-btn' name='home-checkbox' type='checkbox' />
                            <input onClick={this.img2} className='home-event-checkbox-btn' name='home-checkbox' type='checkbox' />
                            <input onClick={this.img3} className='home-event-checkbox-btn' name='home-checkbox' type='checkbox' />
                        </div>
                    </div>

                    <div className='home-page-content-new'>
                        <div className='home-new-header'>
                            <p className='home-new-header-p'>ORIGAMI NEWS</p>
                        </div>
                        <div className='home-new-content'>
                            <div className='home-new home-new1'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new2'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new3'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                            <div className='home-new home-new4'>
                                <img src={New1} className='home-img-new' />
                                <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
