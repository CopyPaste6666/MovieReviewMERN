import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "./person.png";
import email_icon from "./email.png";
import password_icon from "./password.png";

const SignInContainer = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className='container1'>
      <div className="header1">
        <div className="text1">{action}</div>
        <div className="underline1"></div>
      </div>
      <div className="inputs1">
        {action === "Sign In" ? <div></div> : (
          <div className="input1">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}
        <div className="input1">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input1">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : (
        <div className="forgot-password1">
          Lost Password? <span>Click Here!</span>
        </div>
      )}
      
      <div className="submit-container1">
        <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign In") }}>Sign In</div>
      </div>
    </div>
  );
};

export default SignInContainer;
