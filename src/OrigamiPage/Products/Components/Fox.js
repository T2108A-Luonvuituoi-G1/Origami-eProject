import { Link } from "react-router-dom";
import React, { Component } from 'react';
import fox from '../Assets/Images/making/fox.jpg'
import Fm from '../Assets/Images/making/tutorial1.jpg'
import Fm2 from '../Assets/Images/making/tutorial2.jpg'
import Fm3 from '../Assets/Images/making/tutorial3.jpg'
import Fm4 from '../Assets/Images/making/tutorial4.jpg'
import Fm5 from '../Assets/Images/making/tutorial5.jpg'
import Fm6 from '../Assets/Images/making/tutorial6.jpg'
import Fm7 from '../Assets/Images/making/tutorial7.jpg'
import Fm8 from '../Assets/Images/making/tutorial8.jpg'
import Fm9 from '../Assets/Images/making/tutorial9.jpg'


export default class Fox extends Component {
  render() {
    return (
      <>
        <div className="fox">
          <div className="fox_top">
            <span className="fox_title">Fox</span>
            <div className="fox_title-author">
              <span>Posed by</span>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=100059104665311"
                  rel="author"
                >Le Nhu Viet Anh</a>
              </span>
            </div>
            <div className="fox_content">
              <p ><strong>Tên mẫu:</strong>Fox</p>
              <p >
                <strong>Tác giả:</strong> Hoang Tien Quyet
              </p>
            </div>
            <div className="fox_origami">
              <img className="fox_imagess" src={fox} alt="images" />
              <span>Fox - Hoang Tien Quyet</span>
            </div>
            <div className="fox_images">
              <img src={Fm} alt="image" />
              <img src={Fm2} alt="image" />
              <img src={Fm3} alt="image" />
              <img src={Fm4} alt="image" />
              <img src={Fm5} alt="image" />
              <img src={Fm6} alt="image" />
              <img src={Fm7} alt="image" />
              <img src={Fm8} alt="image" />
              <img src={Fm9} alt="image" />
            </div>
            <div className="fox_bottom">
              <p>@2022 LuonVuiTuoi Team</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
