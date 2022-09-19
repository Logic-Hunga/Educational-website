import React from 'react';
import "./LoginStyles.css";
const Login = () => {
    return <div>

        <div className="container">
            <div className="form-container">
            <div className="form-wrapper">
                <h1>Login</h1>
                <form action="">
                    <input type="gmail" name="username" placeholder="Enter your Email"></input>
                    <input type="password" name="password" placeholder="Enter your password"></input>
                    <div className="buttons">
                     <button className="btn" type="submit" value="Login">Login</button>   
                     <button className="btn" type="submit" value="reset">Forgot Password</button>   
                    </div>
                   
                </form>
                </div>
            </div>
        </div>
    </div>;
}


export default Login;