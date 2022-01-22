import { Link } from "react-router-dom";
import img1 from '../Assets/Images/making/image1.jpg'
import img2 from '../Assets/Images/making/image2.jpg'
import img3 from '../Assets/Images/making/image3.jpg'
import img4 from '../Assets/Images/making/image4.jpg'




import React, { Component } from 'react';

export default class JapanFlag extends Component {
  render() {
    return (
      <>
        <div class="foj">
          <div class="foj_top">
            <span class="foj_title">Quốc Kỳ Nhật Bản</span>
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
                <strong>Tên mẫu:</strong>Quốc kỳ Nhật Bản
              </p>
              <p ><strong>Tác giả:</strong> Hiba</p>
            </div>
            <div class="foj_origami">
              <img class="foj_images" src={img1} alt="image" />
              <img class="foj_images" src={img2} alt="image" />
              <img class="foj_images" src={img3} alt="image" />
              <img class="foj_images" src={img4} alt="image" />
            </div>
          </div>
          <div class="foj_bottom">
            <p>@2022 LuonVuiTuoi Team</p>
            <br />
            <p>Bây giờ là 1h15'</p>
          </div>
        </div>
      </>
    )
  }
}
