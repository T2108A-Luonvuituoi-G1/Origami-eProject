import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Cm from '../Assets/Images/making/tutorial.png'
import Cm1 from '../Assets/Images/making/Crab.jpg'

export default class Crab extends Component {
  render() {
    return (
      <>
        <div class="crab">
          <div class="crab_top">
            <span class="crab_title">Crab</span>
            <div class="crab_title-author">
              <span>Posed by</span>
              <span>
                <a href="https://www.facebook.com/VoVanViet.2003" rel="author">
                  Vo Van Viet</a
                >
              </span>
            </div>
            <div class="crab_content">
              <p ><strong>Tên mẫu:</strong>Crab</p>
              <p >
                <strong>Tác giả:</strong> Nguyễn Hùng Cường, phát triển từ hình cơ
                bản trong loạt tác phẩm “Cube Art” của Kunihiko Kasahara
              </p>
            </div>
            <div class="crab_origami">
              <img class="crab_images"
                src={Cm1}alt="iamges"/>
                <span>Nguyễn Hùng Cường - Inspired by Kunihiko Kasahara's Cube Art</span>
            </div>
            <img class="crab_images" src={Cm} alt="images"/>
          </div>
          <div class="crab_bottom">
            <p>@2022 LuonVuiTuoi Team</p>
          </div>
        </div>
      </>
    )
  }
}
