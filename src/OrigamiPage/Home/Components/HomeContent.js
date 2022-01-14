import React, { Component } from 'react'
import '../Assets/Css/HomeContent.css'
import Event1 from '../Assets/Images/1.jpg'
import Event2 from '../Assets/Images/2.jpg'
import Event3 from '../Assets/Images/3.jpg'
import New1 from '../Assets/Images/new1.jpg'
import New2 from '../Assets/Images/new2.jpg'
import New3 from '../Assets/Images/new3.jpg'
import New4 from '../Assets/Images/new4.jpg'
import New5 from '../Assets/Images/new5.jpg'

export default class HomeContent extends Component {

    state = {
        img: Event1
    }

    img1 = () => {
        this.setState({
            img: this.state.img = Event1
        })
        return false;
    }

    img2 = () => {
        this.setState({
            img: this.state.img = Event2
        })
        return false;
    }

    img3 = () => {
        this.setState({
            img: this.state.img = Event3
        })
        return false;
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         var index = 1;
    //         if (index < 3) {
    //             index++;
    //         }else{
    //             index = 0;
    //         }
    //     }, 1000);
    //     return
    // }

    changeImg() {
        setInterval(() => {
            var index = 1;
            if (index < 3) {
                index++;
            } else {
                index = 0;
            }
        }, 1000);
        return this.index;
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
                            <img onClick={() => {alert(this.index)}} className='home-event1 home-event' src={this.state.img} />
                        </div>
                        <div className='home-event-checkbox'>
                            <input onClick={this.img1} className='home-event-checkbox-btn' name='home-checkbox1' type='checkbox' />
                            <input onClick={this.img2} className='home-event-checkbox-btn' name='home-checkbox2' type='checkbox' />
                            <input onClick={this.img3} className='home-event-checkbox-btn' name='home-checkbox3' type='checkbox' />
                        </div>
                    </div>

                    <div className='home-page-content-new'>
                        <div className='home-new-header'>
                            <p className='home-new-header-p'>ORIGAMI NEWS</p>
                        </div>
                        <div className='home-new-content'>
                            <a className='home-new-a' href='https://www.wired.com/story/chuck-hoberman-obsessed-video/'>
                                <div className='home-new home-new1'>
                                    <img src={New1} className='home-img-new' />
                                    <p className='home-new-p'>The Math Whiz Behind the Hoberman Sphere Takes up Origami</p>
                                    <p className='home-new-p-sub'>Chuck Hoberman is looking to make "transformative designs" that borrow from the art of paper folding.</p>
                                </div>
                            </a>

                            <a className='home-new-a' href='https://www.wired.com/story/an-origami-artist-shows-how-to-fold-ultra-realistic-creatures/'>
                                <div className='home-new home-new2'>
                                    <img src={New2} className='home-img-new' />
                                    <p className='home-new-p'>An Origami Artist Shows How to Fold Ultra-Realistic Creatures</p>
                                    <p className='home-new-p-sub'>Robert Lang ditched a career as a physicist to pursue origami full time. In WIRED's latest video, he reveals the tricks to folding complex shapes.</p>
                                </div>
                            </a>

                            <a className='home-new-a' href='https://www.facebook.com/watch/?ref=search&v=471344660006374&external_log_id=0aeb23cb-9add-483a-8ece-ded904edde7e&q=never%20gonna%20give%20you%20up'>
                                <div className='home-new home-new3'>
                                    <img src={New3} className='home-img-new' />
                                    <p className='home-new-p'>Peter is crying because his project has a lot of bugs</p>
                                    <p className='home-new-p-sub'>Click the link to help him</p>
                                </div>
                            </a>

                            <a className='home-new-a' href='https://www.facebook.com/bac.soi.1297'>
                                <div className='home-new home-new4'>
                                    <img src={New4} className='home-img-new' />
                                    <p className='home-new-p'>How to make Origami cute cat ?</p>
                                    <p className='home-new-p-sub'>Click the link for more details !</p>
                                </div>
                            </a>

                            <a className='home-new-a' href='https://www.facebook.com/thanhnam092'>
                                <div className='home-new home-new4'>
                                    <img src={New5} className='home-img-new' />
                                    <p className='home-new-p'>Dracula is coming for you !!</p>
                                    <p className='home-new-p-sub'>warning !! Be careful when you go out at night !</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
