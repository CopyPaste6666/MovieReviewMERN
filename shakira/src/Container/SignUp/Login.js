import React, { useState } from 'react';
//import loginpic from "./images/login.svg";
//import ('./App.css');


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        // Handle user login logic here
    }

    return (
        <section className="sign-in">
            <div className="container mt-5">
                <div className="signin-content">
                    <div className="signin-image">
                        
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form className="register-form">
                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Your Password"
                                />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In"
                                    onClick={loginUser}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}//<figure><img src={loginpic} alt="Login pic" /></figure>

export default Login;
