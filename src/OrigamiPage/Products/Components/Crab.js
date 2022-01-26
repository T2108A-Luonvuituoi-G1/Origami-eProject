// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import Cm1 from '../Assets/Images/represent/crab.jpg'
import Cm2 from '../Assets/Images/making/tutorial-crab.jpg'
// import Cm1 from '../Assets/Images/represent/crab.jpg'

export default class Crab extends Component {
  render() {
    return (
      <div  style={{
        background: `url(${bg})`
    }}>
        <div className="crab"
        >
          <div className="crab_top">
            <span className="crab_title">Crab</span>
            <div className="crab_title-author">
              <span>Posed by</span>
              <span>
                <a href="https://www.facebook.com/VoVanViet.2003" rel="author">
                  Vo Van Viet</a
                >
              </span>
            </div>
            <div className="crab_content">
              <p ><strong>Tên mẫu:</strong>Crab</p>
              <p >
                <strong>Author:</strong> Nguyen Hung Cuong<br/>
                Develop from muscle
                version in the “Cube Art” series by Kunihiko Kasahara
              </p>
            </div>
            <div className="crab_origami">
              {/* <img className="crab_images"
                src={Cm1} className='img-crab' alt="images" /> */}
              <span>Nguyen Hung Cuong- Inspired by Kunihiko Kasahara's Cube Art</span>
            </div>
            <img className="crab_images" src={Cm2} alt="images" />
          </div>
          <div className="crab_bottom">
            <p>@2022 LuonVuiTuoi Team</p>
          </div>
        </div>
      </div>
    )
  }
}
