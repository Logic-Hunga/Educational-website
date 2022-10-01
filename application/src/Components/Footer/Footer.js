import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin, BsWhatsapp, BsFillArrowUpCircleFill } from "react-icons/bs";
import { SiDatabricks } from 'react-icons/si';

import { Link } from "react-scroll";

 
import {FiMail ,
    FiLinkedin,
    FiDribbble,
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiGithub
}  from 'react-icons/fi';
import "./FooterStyles.css";
const Footer = () => {
    return (
      <div className=" footer">
        <div className="container footer-container">
          <div className="top">
            <div className="footer-logo">
              <SiDatabricks className="icon" />
              <h2>
                Logic<span>studios</span>
              </h2>
            </div>
             <Link activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                     <BsFillArrowUpCircleFill className='icon'/>
            </Link>
          </div>

          <div className="column-container">
            <div className="col">
              <h3>Navigation</h3>
              <p>Home</p>
              <p>Events</p>
              <p>About</p>
            </div>
            
            <div className="col">
              <h3>My Account</h3>
              <p>Github</p>
              <p>Facebook</p>
              <p>LinkedIn</p>
            </div>

            <div className="col">
              <h3>Services</h3>
              <p>Software</p>
              <p>Graphic Designing</p>
              <p>Photography</p>
            </div>
            <div className="col">
              <h3>Our projects</h3>
              <p>Android Software</p>
              <p>Backend Applications</p>
              <p>Web Applications</p>
            </div>

            <form>
              <h3>Join Our Team</h3>
              <input type="email" placeholder="Enter your Email"></input>
              <FiMail className="mail-icon" />
              <div className="social-group">
                <FiInstagram className="icon" />
                <FiFacebook className="icon" />
                <FiTwitter className="icon" />
                <FiLinkedin className="icon" />
                <FiGithub className="icon" />
                <FiDribbble className="icon" />
              </div>
            </form>
          </div>
            <div className="footer-bottom">
                    <p>All rights reserved by &copy; Logic Studios</p>
                    <p>Designed by Logic Tesla 2022</p>
            </div>
        </div>
        
      </div>
    );
}



export default Footer;