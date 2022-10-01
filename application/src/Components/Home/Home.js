import React from 'react';
import "./HomeStyles.css";
import landingPage from "../../Assets/landingPage.png";


const Home = () => {
    return (
      <>
        <div class="container home" id="home">
          
            {/* left side  */}
            <div className="home-text">
                <h2>Welcome to the LogicStudios</h2>
                <h1>Start Learning</h1>
                <h3><span>Computer Programming online in</span></h3>
                
        
                <div className="animation-container">
                    <div className="animation">
                        <div className="animation-item">Java Script language</div>
                        <div className="animation-item">Python  language</div>
                        <div className="animation-item">Java  language</div>
                        <div className="animation-item">C++ language</div>
                        <div className="animation-item">C# language</div>  
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
                   
                    <img src={landingPage}></img>
                   
            </div>
                  
        </div>
        
        <div className="line"></div> 
      </>
    );
}
 

export default Home;