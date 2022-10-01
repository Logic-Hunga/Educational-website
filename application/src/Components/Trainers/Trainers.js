import React from 'react';
import "./TrainersStyles.css";
import {
    BsInstagram,
    BsFacebook,
    BsTwitter,
    BsGithub,
    BsLinkedIn
    
} from "react-icons/bs";
import Logic from "../../Assets/Logic.jpg"
import Bethel from "../../Assets/Bethel.jpg"


const Trainers = () => {
    return <>
        <div className="container">
            <div className="our-trainers">
                <h3>Meet <span>Our Trainers</span></h3>
            </div>


            <div className="profiles">
                <div className="profile">
                    <img src={Logic} alt="logic" className="profile-img"></img>
                    <h3 className="user-name">Logic Tesla</h3>
                    <h5 className="position">Creative Director</h5>
                    <p>Lorem</p>
                    <div className="social-icons">
                       <BsInstagram className="icon"/>
                       <BsFacebook className="icon"/>
                       <BsTwitter className="icon"/>
                       <BsGithub className="icon"/>
                    </div>

                </div>
                <div className="profile">
                    <img src={Logic} alt="logic" className="profile-img"></img>
                    <h3 className="user-name">Logic Tesla</h3>
                    <h5 className="position">Creative Director</h5>
                    <p>Lorem</p>
                    <div className="social-icons">
                       <BsInstagram className="icon"/>
                       <BsFacebook className="icon"/>
                       <BsTwitter className="icon"/>
                       <BsGithub className="icon"/>
                    </div>

                </div>
                <div className="profile">
                    <img src={Logic} alt="logic" className="profile-img"></img>
                    <h3 className="user-name">Logic Tesla</h3>
                    <h5 className="position">Creative Director</h5>
                    <p>Lorem</p>
                    <div className="social-icons">
                       <BsInstagram className="icon"/>
                       <BsFacebook className="icon"/>
                       <BsTwitter className="icon"/>
                       <BsGithub className="icon"/>
                    </div>

                </div>
            </div>
            

            
    </div>
    </> 
}


export default Trainers;