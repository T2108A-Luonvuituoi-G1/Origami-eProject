// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Bm from '../Assets/Images/making/Boar_DoTriKhai.jpg'
import Bm2 from '../Assets/Images/making/boar.png'

export default class Pig extends Component {
  render() {
    return (
      <>
        <div className="boar">
          <div className="boar_top">
            <span className="boar_title">Boar</span>
            <div className="boar_title-author">
              <span>Posed by </span>
              <span>
                <a
                  href="https://www.facebook.com/bac.soi.1297"
                  rel="author"
                >Tran Minh Duc</a>
              </span>
            </div>
            <div className="boar_content">
              <p >
                <strong>Tên Mẫu:</strong> Lợn rừng</p>
              <p >
                <strong>Tên Mẫu:</strong> Đỗ Trí Khải</p>
            </div>
            <div className="boar_origami">
              <img className="b_images" src={Bm} /> <br />
              <img className="b_images" src={Bm2} alt="image" />
            </div>
            <div class="boar_bottom">
              <p>@2022 LuonVuiTuoi Team</p> <br />
              <p> Bây giờ là 11h04'</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
