// import { Link } from "react-router-dom";
import bg from '../Assets/Images/background.jpg'
import fr from '../Assets/Images/making/Frame1.jpg'
import fr2 from '../Assets/Images/making/Frame2.jpg'
import fr3 from '../Assets/Images/making/Frame3.jpg'
import fr4 from '../Assets/Images/making/Frame4.png'
import Comment from './Comment';


import React, { Component } from 'react';

export default class Frame extends Component {
  render() {
    return (
      <div    className='product-item-page-inside'
    >

        <div class="frame"
        >
          <div class="frame_top">
            <span class="frame_title">Frame Picture</span>
            <div class="frame_title-author">
              <span>Posed by</span>
              <span>
                <a
                  href="https://www.facebook.com/minh8699"
                  rel="author"> Ta Quang Minh
                </a>
              </span>
            </div>
            <div class="frame_content">
              <p ><strong>Form name:</strong> Frame Picture</p>
              <p >
                <strong>Author:</strong> Nguyen Xuan Tung
              </p>
            </div>
            <div class="frame_origami">
              <img class="f_images" src={fr} alt="image" />
              <img class="f_images" src={fr2} alt="image" />
              <img class="f_images" src={fr3} alt="image" />
              <img class="f_images" src={fr4} alt="image" />
            </div >
            <div className="comment">
            <p className="p-text-making">Facebook comments</p>
            <Comment />
          </div>
            <div class="frame_bottom">
              <p>@2022 LuonVuiTuoi Team</p> <br />

            </div>
          </div>

        </div>


      </div>
    )
  }
}
