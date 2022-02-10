// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import Parrot1 from '../Assets/Images/making/Parrot1.jpg'
import Parrot2 from '../Assets/Images/making/Parrot2.jpg'
import Parrot3 from '../Assets/Images/making/Parrot3.jpg'
import Parrot4 from '../Assets/Images/making/Parrot4.jpg'
import Comment from './Comment';

export default class Parrot extends Component {
  render() {
    return (
      <div   style={{
        background: `url(${bg})`
    }}>
        <div className="parrot">
          <div className="parrot_top">
            <span className="parrot_title">Parrot</span>
            <div className="parrot_title-author">
              <span>Posed by </span>
              <span>
                <a href="https://www.facebook.com/VoVanViet.2003"
                  rel="author"
                >Vo Van Viet</a>
              </span>
            </div>
            <div className="parrot_content">
              <p ><strong>Form name:</strong>Parrot</p>
              <p >
                <strong>Author:</strong> Hoang Tien Quyet
              </p>
            </div>
            <div className="parrot_origami">
              <img className="parrot_images" src={Parrot1} alt="images" />
              <span>Parrot - Hoang Tien Quyet</span>
            </div>
            <p>Tutorial Making:</p>
            <img className="parrot_images" src={Parrot2} alt="images" />
            <img className="parrot_images" src={Parrot3} alt="images" />
            <img className="parrot_images" src={Parrot4} alt="images" />
          </div>
          <div className="comment">
            <p className="p-text-making">Facebook comments</p>
            <Comment />
          </div>
          <div className="parrot_bottom">
            <p>@2022 LuonVuiTuoi</p>
          </div>
        </div>

      </div>
    )
  }
}
