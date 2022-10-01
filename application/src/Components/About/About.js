import React from 'react';
import "./AboutStyles.css"
import landingPage from "../../Assets/landingPage.png";

const About = () => {
    return <div className="container about">
        <h2>About Our Online <span>School</span></h2>
        <h3>Our branch in <span>Malawi</span></h3>
        <div className="border"></div>
        
        <div className="branch">
            <div className="typing">
               <span>Mzuzu </span> 
               <span>Lilongwe </span> 
               <span>Blantyre </span>
               <span>Zomba </span>
               
            </div>
            
        </div>


        <div className="content">
            <div className="content-paragraph">
                <h3>Our goal</h3>
                <p>
                    The content knowledge, can be described as the state of knowing something  to the core, meaning having the deep knowledge in particular subject.
                    As for me, to teach the  computer study lesson i must have a core knowledge in computers. Its awkward to teach or deliver a content to the students,
                    that you dont know about it
                </p>
            </div>


            <div className="image-container">
                 <img src={landingPage}></img>
            </div>


        </div>

    </div>;
}



export default About;