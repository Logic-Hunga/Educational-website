import React from 'react';
import "./HomeStyles.css";
import student from "../../Assets/student.png";


const Home = () => {
    return (
      <>
        <div class="container home" id="home">
          
            {/* left side  */}
            <div className="home-text">
                <h1>Welcome To</h1>
                <h2>Educational<span>Registration System</span></h2>
        
                <div className="animation-container">
                    <div className="animation">
                        <div className="animation-item">Register Your Examination</div>
                        <div className="animation-item">Register Your Courses</div>
                        <div className="animation-item">Pay your Tuition fee</div>
                        <div className="animation-item">Apply your loan</div>
                        <div className="animation-item">Register your religion organization</div>  
                    </div>
                </div> 
                <div className="texts">
                    <h3>Any time anywhere
                        register on your
                        Phone, Computer and Tablet
                    </h3>
                </div>
                <div className="btn"><button >Register Now</button></div>
                      
            </div>
            
            {/* right side */}
            <div className="home-picture">
                <img src={student}></img>
            </div>
            
                
                
        </div>
      </>
    );
}
 

export default Home;