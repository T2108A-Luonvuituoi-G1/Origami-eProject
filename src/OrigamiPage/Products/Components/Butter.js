import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { GrLinkNext } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import butter from '../Assets/Images/represent/vog_butterfly.jpg'
import butter1 from '../Assets/Images/making/butter1.png'
import butter2 from '../Assets/Images/making/butter2.png'
import butter3 from '../Assets/Images/making/butter3.png'
import { MdCopyright } from "react-icons/md";
import '../Assets/Css/ProductItem.css'
import bg from '../Assets/Images/background.jpg'

export default class Butter extends Component {
  poster = {
    name1: 'Võ Văn Việt '
  }
  state = {
    img: butter1
  }
  img1 = () => {
    this.setState({
      img: this.state.img = butter1
    })
    return false;
  }
  img2 = () => {
    this.setState({
      img: this.state.img = butter2
    })
    return false;
  }
  img3 = () => {
    this.setState({
      img: this.state.img = butter3
    })
    return false;
  }
  render() {
    return (
      <div  className="large"       style={{
        background:`url(${bg})`
      }}>
        <div className="p-news">
          <h1 className="p-text">VOG’s Butterfly – Michael Lafosse</h1>
          <div className="poster">< IoPersonSharp /> Poster by {this.poster.name1}</div>
          <p className="p-text">
          In 2015, on the occasion of the 10th anniversary of Vietnam Origami Group, author Michael LaFosse created a butterfly template for VOG.
            <br />
            VOG sincerely thanks Mr. Michael LaFosse.
          </p>
          <div className="p-img">
            <img src={butter} className='product-hightlight-img-details' />
            <p className="p-text-img">VOG 10th Anniversary Butterfly- Composed:Michael LaFosse -Folded by: Giangdinh</p>
          </div>
          <div className="product-making">
            <p className="p-text-making">Tutorial Making:</p>
            <img onClick={() => { alert(this.index) }} className="p-making p-making1" src={this.state.img} />
          </div>
          <div className="product-making-checkbox">
            <input onClick={this.img1} className="product-making-checkbox-btn" name="p-checkbox" type='checkbox' />
            <input onClick={this.img2} className="product-making-checkbox-btn" name="p-checkbox" type='checkbox' />
            <input onClick={this.img3} className="product-making-checkbox-btn" name="p-checkbox" type='checkbox' />
          </div>
          <div className="comment">
            <p className="p-text-making">Facebook comments</p>
            <input type='text' className="p-input-comment" placeholder="Add a comment..."/>
          </div>
        </div>
        <div>

        <p className="p-footer"><MdCopyright/>Make by team: Luonvuituoi work on 2022 </p>
        </div>
      </div>
    )
  }
}
