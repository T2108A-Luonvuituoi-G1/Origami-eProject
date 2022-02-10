// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import Bm from '../Assets/Images/making/Boar_DoTriKhai.jpg'
import Bm1 from '../Assets/Images/making/boar.png'
import Bm2 from '../Assets/Images/making/boar2.png'


export default class Pig extends Component {
  render() {
    return (
      <div div   style={{
        background: `url(${bg})`
    }}>
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
                <strong>Form name:</strong> Lợn rừng</p>
              <p >
                <strong>Form name:</strong> Đỗ Trí Khải</p>
            </div>
            <div className="boar_origami">
              <img className="b_images" src={Bm} /> <br />
              <p>Tutorial:</p>
              <img className='b_images' src={Bm1}/>
              <img className="b_images" src={Bm2} alt="image" />
            </div>
            <div class="boar_bottom">
              <p>@2022 LuonVuiTuoi Team</p> <br />
           
            </div>
          </div>
        </div>
      </div>
    )
  }
}
