import React from 'react';
import "./SignUpStyles.css"

const SignUp = () => {
    return <div>

        <div className="container">
            <div className="form-container">
                <div className="form-wrapper">
                    
                <h1>Sign Up</h1>
                <form action="">
                   
                    <input type="text" name="username" placeholder="Enter your Name"></input>
                    <input type="gmail" name="gmail" placeholder="Enter your Email"></input>
                    <input type="password" name="password" placeholder="Enter your password"></input>
                    <div className="buttons">
                     <button className="btn" type="submit" value="Login">Sign Up</button>   
                        
                    </div>
                   
                </form>
            </div>
            </div>
        </div>
    </div>;
}



export default SignUp;