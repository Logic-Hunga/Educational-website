import React from 'react';
import "./TestimonialStyles.css";
import testimonials1 from "../../Assets/testimonials-1.jpg"
import testimonials2 from "../../Assets/testimonials-2.jpg"
import testimonials3 from "../../Assets/testimonials-3.jpg"

import {FaQuoteLeft} from "react-icons/fa"



const Testimonial = () => {
    return (
        <div className="container testimonial">
            
        <h1> What <span>our students say</span></h1>

        <div className="testimonial-cards">
        
          <div className="card">
                    <img src={testimonials1} alt="student"></img>
                    <p>text  took a galley of type and specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula</p>
                    <h2>sandra Bulluck</h2>
                    <h4>finance advisor</h4>
                    <FaQuoteLeft className="quote"/>
          </div>
          <div className="card">
                    <img src={testimonials1} alt="student"></img>
                    <p>text  took a galley of type and specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula</p>
                    <h2>sandra Bulluck</h2>
                    <h4>finance advisor</h4>
                    <FaQuoteLeft className="quote"/>
          </div>
          <div className="card">
                    <img src={testimonials1} alt="student"></img>
                    <p>text  took a galley of type and specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula</p>
                    <h2>sandra Bulluck</h2>
                    <h4>finance advisor</h4>
                    <FaQuoteLeft className="quote"/>
          </div>
          
        </div>
      </div>
    );
}


export default Testimonial;