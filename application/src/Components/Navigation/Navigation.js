import React from 'react';
import "./NavigationStyles.css"
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineUserAdd,
  AiOutlineUserDelete,
  AiOutlineUser
} from "react-icons/ai";

import {
    BsInstagram,
    BsFacebook,
    BsTwitter
} from "react-icons/bs";


const Navigation = () => {
    return (
        <>
           <div className="nav-container">
            <div className="container">
                
            {/* <div className="head">
                    <div className="head-flex">
                        <div className="head-logo">
                            <h1>Group 13</h1>
                            <span>Online Registration System</span>
                        </div>

                        <div className="social-icons">
                            <BsFacebook  className="head-icon"/>
                            <BsTwitter  className="head-icon"/>
                            
                          
                        </div>
                    </div>
            </div> */}
            
                
                <div className="nav-bar">
                    
                    <div className="logo">
                        <SiDatabricks className="logo-icon"/>
                    </div>

                    <ul className="nav-menu">
                        <li className="link">Home</li>
                        <li className="link">About</li>
                        <li className="link">Courses</li>
                        <li className="link">Pages</li>
                        <li className="link">Blog</li>
                        <button className="link "><AiOutlineUserAdd  />Sign up </button>
                        <button className="link "><AiOutlineUser />Sign in </button>
                        
                        
                        
                    </ul>

                    <div className="hamburger-icon">
                        <FaBars className="icon"/>
                    </div>

                </div>
                
                
            </div>
           </div>  
        </>
    );
}



export default Navigation;