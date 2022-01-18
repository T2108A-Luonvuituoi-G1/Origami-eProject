import React, { Component } from 'react'
import { BiAccessibility } from "react-icons/bi";
import '../Assets/Css/Contact.css'
import Paper from '../Assets/Images/paper-plane.png'
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

export default class Contact extends Component {
    render() {
        return (
            <>
                <div>
                    <BiAccessibility />
                    day la cach lien lac voi team
                    <div class="form=group">
                        <fieldset>
                            <legend>Contact Us</legend>
                            <span class="error-msg" id="total-msg"></span>
                            <form id="Contact-form" name="Contact"></form>
                        </fieldset>

                        <div>
                            <label>Full Name</label>
                            <input type="text" name="fullname" class="form-control"></input>
                            <span class="error-msg"></span>
                        </div>

                        <div>
                            <label>Full Name</label>
                            <label>Email adress</label>
                            <input type="email" name="Email adress" class="form-control"></input>
                            <span class="error-msg"></span>
                        </div>

                        <div>
                            <label>Message...</label>
                            <input type="Message" name="Message" class="form-control"></input>
                            <span class="error-msg"></span>
                        </div>

                        <div>
                            <label>&nbsp;</label>
                            <input type="button" name="submit" value="submit" class="form-control" id="btnSubmit"></input>
                        </div>

                        < AiFillTwitterCircle />

                        <AiFillInstagram />

                        <AiFillFacebook />

                        <img src={Paper} />
                    </div>
                </div>
            </>
        )
    }
}