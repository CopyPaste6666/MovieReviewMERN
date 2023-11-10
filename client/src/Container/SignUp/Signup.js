import React, { useState } from 'react';
//import signpic from "./images/signup.svg";
//import ('./App.css');

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return (
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                    <i className="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <i className="zmdi zmdi-email material-icons-name"></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="Your Email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Your Password"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cpassword">
                                    <i className="zmdi zmdi-lock material-icons-name"></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                    placeholder="Confirm Your Password"
                                />
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit"
                                    value="Register"
                                    // You can add onClick={yourFunction} here to handle the form submission
                                />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure>
                           
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
} //<img src={signpic} alt="registration pic" />

export default Signup;
