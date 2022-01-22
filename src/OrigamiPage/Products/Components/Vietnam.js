import { Link } from "react-router-dom";
import React, { Component } from 'react';
import vf from '../Assets/Images/making/vnflag.jpg'
import vf2 from '../Assets/Images/making/vnmaking.png'

export default class Vietnam extends Component {
  render() {
    return (
      <>
        <div className="fov">
          <div className="fov_top">
            <span className="fov_title"> Quốc kỳ Việt Nam </span>
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
                <strong>Tên mẫu:</strong> Quốc kỳ Việt Nam
              </p>
              <p >
                <strong>Tác giả:</strong> Nguyễn Xuân Tùng
              </p>
              <p >
                Sáng tác nhân dịp 62 năm Quốc Khánh nước CHXHCN Việt Nam. Mẫu gấp
                được áp dụng kỹ thuật Inside-out để tận dụng 2 mặt màu khác nhau của
                1 tờ giấy vuông.
              </p>
            </div>
            <div className="flag">
              <img src={vf} alt="image" />
              <span>Quốc kỳ Việt Nam - Nguyễn Xuân Tùng</span>
              <img src={vf2} alt="image" />

            </div>
          </div>
          <div className="fov-bottom">
            <p>@2022 LuonVuiTuoi Team</p> <br />
            <p>Bây giờ là 1h26' </p>
          </div>

        </div>
      </>
    )
  }
}
