import React, { Component } from "react";
import '../Assets/Css/aboutUs.css'
import Minh from '../Assets/Images/Minhavt.jpg'
import Viet from '../Assets/Images/Vietavt.jpg'
import Duc from '../Assets/Images/Ducavt.jpg'
import Vanh from '../Assets/Images/vanhavt.jpg'
import MrT from '../Assets/Images/Mr.T.jpg'
import Nam from '../Assets/Images/Namavt.jpg'

export default class AboutUs extends Component {
  render() {
    return (
      <>
        <div className="about_us">
          <div className="container">
            <h1 className="Title"> LuonVuiTuoi Team </h1>
            <section className="about_us--top">
              <div className="card">
                <img src={Minh} alt="avatar" />
                <div>
                  <p>Ta Quang Minh</p>
                  <a
                    href="https://www.facebook.com/minh8699"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leader
                  </a>
                </div>
              </div>

              <div className="card">
                <img src={Nam} alt="avatar" />
                <div>
                  <p>Dao Thanh Nam</p>
                  <a
                    href="https://www.facebook.com/thanhnam092/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Member
                  </a>
                </div>
              </div>
            </section>
            <section className="about_us--bottom">
              <div className="card">
                <img src={Duc} alt="avatar" />
                <div>
                  <p>Tran Minh Duc</p>
                  <a
                    href="https://www.facebook.com/bac.soi.1297"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Member
                  </a>
                </div>
              </div>

              <div className="card">
                <img src={Vanh} alt="avatar" />
                <div>
                  <p>Le Nhu Viet Anh</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100059104665311"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Member
                  </a>
                </div>
              </div>

              <div className="card">
                <img src={Viet} alt="avatar" />
                <div>
                  <p>Vo Van Viet</p>
                  <a
                    href="https://www.facebook.com/VoVanViet.2003"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Member
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="about_teacher">
          <div className="container">
            <h1 className="Title">Special Advisors</h1>
            <div className="card">
              <img src={MrT}    alt="avatar" />
              <div>
                <p>Mr.Tuan Nguyen</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
