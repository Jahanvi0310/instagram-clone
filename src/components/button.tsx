import React from 'react';
import Input from './input'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare
  } from "@fortawesome/free-brands-svg-icons";

function Button(props:any) {

  return (
    <div>
       <button className="login-button" title="login" disabled={props.password? false:true}>Log In</button>
            <div className="separator">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
            </div>
            <div className="other">
                <button className="fb-login-btn" type="button">
                    <FontAwesomeIcon icon={faFacebookSquare} size='1x'/>
                    <span className="otherlogin">Log in with Facebook</span>
                </button>
                <a className="forgot-password" href="#">Forgotten your password?</a>
            </div>
    </div>
  )
}

export default Button;
