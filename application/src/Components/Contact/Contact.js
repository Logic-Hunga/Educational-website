import React from 'react';
import "./ContactStyles.css";

import { BsInstagram, BsFacebook, BsTwitter,BsTelegram } from "react-icons/bs";
const Contact = () => {
    return <div className="container contact">
        
        <div className="form-title">
            <h1>Contact<span>Us</span></h1>
        </div>
        
        
            <div className="form-contact-container">
                <div className="form-wrapper-contact">
                    
           
                <form action="">
                   
                    <input type="text" name="username" placeholder="Enter your Name"></input>
                    <input type="gmail" name="gmail" placeholder="Enter your Email"></input>
                    <textarea  placeholder="Send Us Message"></textarea>
                    <div className="buttons">
                     <button className="btn" type="submit" value="Login">Send<BsTelegram className="icon"/></button>   
                        
                    </div>
                   
                </form>
               
            </div>

        </div>
         <h1>Hello</h1>

    </div>;
}


export default Contact;