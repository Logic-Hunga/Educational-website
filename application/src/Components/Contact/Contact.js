import React from 'react';
import "./ContactStyles.css";
import form from "../../Assets/form.jpg"

import { BsInstagram, BsFacebook, BsTwitter,BsTelegram } from "react-icons/bs";
const Contact = () => {
    return <div className="container main-content">
        <h2>Contact<span>Us</span></h2>
        <div className="contact-section">
            
         
        


        <div className="contact-form">
           
            <form>
                <input type="text"  name="user-name" placeholder="Enter your name" required></input>
                <input type="email"  name="email" placeholder="Enter your email" required  ></input>
                <textarea name="message" cols="80" col="80" placeholder="Type your massage" required  ></textarea>
                <button type="submit" className="btn">Send<BsTelegram className="icon"/></button>
            </form>
        </div> 
        </div>

    </div>;
}


export default Contact;