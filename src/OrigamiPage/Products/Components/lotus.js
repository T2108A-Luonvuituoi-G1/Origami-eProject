// import { Link } from "react-router-dom";
import React, { Component } from 'react';
import bg from '../Assets/Images/background.jpg'
import d1 from '../Assets/Images/making/d1.jpg'
import d2 from '../Assets/Images/making/d2.jpg'
import finis from '../Assets/Images/making/finis.jpg'
import ln1 from '../Assets/Images/making/ln1.jpg'
import ln2 from '../Assets/Images/making/ln2.jpg'
import lotus from '../Assets/Images/making/lotus.jpg'
import n1 from '../Assets/Images/making/n1.jpg'
import n2 from '../Assets/Images/making/n2.jpg'
import n3 from '../Assets/Images/making/n3.jpg'
import n4 from '../Assets/Images/making/n4.jpg'
import n5 from '../Assets/Images/making/n5.jpg'
import n6 from '../Assets/Images/making/n6.jpg'
import n7 from '../Assets/Images/making/n7.jpg'
import n8 from '../Assets/Images/making/n8.jpg'
import n9 from '../Assets/Images/making/n9.jpg'
import s1 from '../Assets/Images/making/s1.jpg'
import s2 from '../Assets/Images/making/s2.jpg'
import s3 from '../Assets/Images/making/s3.jpg'
import t1 from '../Assets/Images/making/t1.jpg'
import t2 from '../Assets/Images/making/t2.jpg'
import t3 from '../Assets/Images/making/t3.jpg'
import t4 from '../Assets/Images/making/t4.jpg'
import t5 from '../Assets/Images/making/t5.jpg'
import t6 from '../Assets/Images/making/t6.jpg'







export default class Lotus extends Component {
    render() {
        return (
            <div div   style={{
                background: `url(${bg})`
            }}>
                <div className="lotus">
                    <div className="lotus_top">
                        <span className="lt_title">Lotus</span>
                        <div className="lt_title-author">
                            <span className="text-item">Posed by </span>
                            <span className="text-item">
                                <a
                                    href="https://www.facebook.com/thanhnam092/"
                                    rel="author"
                                >Dao Thanh Nam</a>
                            </span>
                        </div>
                        <div className="lotus_content">
                        <p className="text-item"> <strong>Model Name:</strong> Lotus</p>
                        <p className="text-item" ><strong >Author:</strong> Dang Viet Tan</p>
                            <p className="text-item" >Composing in response to Pig Base contest</p>
                        </div>
                        <div className="lotus_origami">
                            <img className="images" src={lotus} alt="image" />
                            <span className="text-item">Lotus -Dang Viet Tan</span>
                        </div>

                        <p className="text-item" ><strong>Starting from the pinwheel base:</strong></p>
                        <div className="imagess">
                            <img src={t1}className="img-making"  alt="t1" />
                            <img src={t2}className="img-making" alt="t2" />
                            <img src={t3}className="img-making" alt="t3" />
                            <img src={t5}className="img-making" alt="t4" />
                            <img src={t6}className="img-making" alt="t5" />
                        </div>
                        <p className="text-item" ><strong>Flip the back side:</strong></p>
                        <div className="imagess">
                            <img src={s1}className="img-making" alt="t2" />
                            <img src={s2}className="img-making" alt="t2" />
                            <img src={s3}className="img-making" alt="t2" />
                        </div>

                        <p className="text-item" ><strong>Turn it upside down and then fold it up, pull out the back paper (like an arrow):</strong></p>
                        <div className="imagess">
                            <img src={n1}className="img-making" alt="t3" />
                            <img src={n2}className="img-making" alt="t3" />
                            <img src={n3}className="img-making" alt="t3" />
                            <img src={n4}className="img-making" alt="t3" />
                            <img src={n5}className="img-making" alt="t3" />
                            <img src={n6}className="img-making" alt="t3" />
                            <img src={n7}className="img-making" alt="t3" />
                            <img src={n8}className="img-making" alt="t3" />
                            <img src={n9}className="img-making" alt="t3" />
                        </div>
                        <p className="text-item" ><strong>Turn over:</strong></p>
                        <div className="imagess">
                            <img src={ln1}className="img-making" alt="t4" />
                            <img src={ln2}className="img-making" alt="t4" />
                        </div>
                        <p className="text-item" ><strong>Use glue to fix if the folds are not tight:</strong></p >
                        <img src={d1}className="img-making" alt="t5" /> <br />
                        <p className="text-item" ><strong>Glue the 4 corners of the paper and fold it slightly along the middle square edge to create volume: </strong></p>
                        <img src={d2}className="img-making" alt="t5" /> <br />
                        <p className="text-item" ><strong>Glue the 4 corners of the paper and fold it slightly along the middle square edge to create volume: </strong></p>
                        <img src={finis}className="img-making" alt="t5" />
                    </div>
                    <div className="lotus_bottom">
                        <p className="text-item" >@2022 LuonVuiTuoi Team</p>
                    </div>
                </div>
            
           </div> 
        )
    }
}
