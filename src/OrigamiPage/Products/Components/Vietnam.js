// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import vf from '../Assets/Images/making/vnflag.jpg'
import vf2 from '../Assets/Images/making/vnmaking.png'

export default class Vietnam extends Component {

  render() {
    return (
      <div className='layout-item'style={{
        background: `url(${bg})`
      }}><br />
        <div className='layout-item-little' >
          <div className='title-item'>
            <h1 className='text-title'>VietNam Flag</h1>
            <div className='posted-item'>
              Posted by <a href='https://www.facebook.com/thanhnam092'>Dao Thanh Nam</a>
            </div>
          </div>
          <div className='des-item'>
            <p className='text-item'><strong>Form name:</strong> VietNam Flag</p>
            <p className='text-item'><strong>Author:</strong> Nguyen Xuan Tung</p>
            <p className='text-item'>Composed on the occasion of the 62nd National Day of the Socialist Republic of Vietnam. The folded pattern is applied Inside-out technique to take advantage of 2 different colored sides of a square sheet of paper.</p>
          </div>
          <div className='image-nsface'>
            <img src={vf} className='img-nf' />
            <p className='info-img text-item'> Flag of VietNam -Nguyen Xuan Tung</p>
          </div>
          <div className='tutorial-making'>
            <img className='tutorial-making' src={vf2} />
          </div>
          <div class="fov-bottom">
            <p className='text-item'>@2022 LuonVuiTuoi Team</p>
          </div>


        </div>
      </div>
    )
  }
}
