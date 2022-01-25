import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import vf from '../Assets/Images/making/vnflag.jpg'
import vf2 from '../Assets/Images/making/vnmaking.png'

export default class Vietnam extends Component {
  render() {
    return (
      <div  style={{
        background: `url(${bg})`
    }}>
        <div className="fov">
          <div className="fov_top">
            <span className="fov_title"> Flag of VietNam </span>
            <div className="fov_title-author">
              <span>Posed by </span>
              <span>
                <a
                  href="https://www.facebook.com/thanhnam092/"
                  title="Posts by Đào Thành Nam"
                  rel="author"
                >Dao Thanh Nam</a
                >
              </span>
            </div>
            <div className="fov_content">
              <p >
                <strong>Form name:</strong> Flag of VietNam
              </p>
              <p >
                <strong>Author:</strong> Nguyen Xuan Tung
              </p>
              <p >
                Composed on the occasion of the 62nd National Day of the Socialist Republic of Vietnam. Folding pattern
                is applied inside-out technique to take advantage of 2 different color sides of
                1 square sheet of paper.
              </p>
            </div>
            <div className="flag">
              <img src={vf} alt="image" />
              <span>Flag of VietNam- Nguyen Xuan Tung</span>
              <img src={vf2} alt="image" />

            </div>
          </div>
          <div className="fov-bottom">
            <p>@2022 LuonVuiTuoi Team</p> <br />

          </div>

        </div>
      </div>
    )
  }
}
