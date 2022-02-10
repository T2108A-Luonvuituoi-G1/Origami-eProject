// import { Link } from "react-router-dom";
import bg from '../Assets/Images/background.jpg'
import img1 from '../Assets/Images/making/image1.jpg'
import img2 from '../Assets/Images/making/image2.jpg'
import img3 from '../Assets/Images/making/image3.jpg'
import img4 from '../Assets/Images/making/image4.jpg'
import Comment from './Comment';



import React, { Component } from 'react';

export default class JapanFlag extends Component {
  render() {
    return (
      <div  style={{
        background: `url(${bg})`
    }}>
        <div class="foj">
          <div class="foj_top">
            <span class="foj_title">Flag of Japan</span>
            <div class="foj_title-author">
              <span>Posed by</span>
              <span>
                <a href="https://www.facebook.com/minh8699" rel="author">
                  Ta Quang Minh</a
                >
              </span>
            </div>
            <div class="foj_content">
              <p >
                <strong>Form name:</strong>Flag of Japanese
              </p>
              <p ><strong>Author:</strong> Hiba</p>
            </div>
            <div class="foj_origami">
              <img class="foj_images" src={img1} alt="image" />
              <img class="foj_images" src={img2} alt="image" />
              <img class="foj_images" src={img3} alt="image" />
              <img class="foj_images" src={img4} alt="image" />
            </div>
          </div>
          <div className="comment">
            <p className="p-text-making">Facebook comments</p>
            <Comment />
          </div>
          <div class="foj_bottom">
            <p>@2022 LuonVuiTuoi Team</p>
    
           
          </div>
        </div>
      </div>
    )
  }
}
