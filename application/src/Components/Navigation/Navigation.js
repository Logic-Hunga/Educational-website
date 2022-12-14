import React from 'react';
import { Link } from "react-router-dom";
import "./NavigationStyles.css"
import {useState} from "react"
import { SiDatabricks } from "react-icons/si";
import { FaBars, FaTimes,FaCentos } from "react-icons/fa";
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
import {
   MdMenu
} from "react-icons/md";
import {
   GiTwirlyFlower
} from "react-icons/gi";
import {
   SiAnaconda
} from "react-icons/si";


const Navigation = () => {
    // toggle
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return (
        <>
           <div name="top"  className="nav-container">
            <div className="container">
                
            
                
                <div className="nav-bar">
                    
                    <div className="logo">
                        < SiAnaconda className="logo-icon"/>
                    </div>

                    <ul className={nav ? "nav-menu active" : "nav-menu"}>
                        <li><Link to="/" className="link" id="home">Home</Link></li>
                        <li><Link to="/About" className="link">About</Link></li>
                        <li><Link to="/Courses" className="link">Courses</Link></li>
                       
                        <li><Link to="/Blog" className="link">Blog</Link></li>
                        <li><Link to="/Contact" className="link">Contact</Link></li>
                        <li><Link to="/SignUp" className="link credential"><AiOutlineUserAdd/>Sign up</Link></li>
                        <li><Link to="/Login" className="link credential"><AiOutlineUser />Login </Link></li>  
                    </ul>

                        <div className="hamburger-icon" onClick={handleNav}>
                            {/* Swap icons */}
                            {!nav ? (<MdMenu className="icon"/>): (<FaTimes className="icon"/>)}
  
                    </div>

                </div>
                
                
            </div>
           </div>  
        </>
    );
}



export default Navigation;