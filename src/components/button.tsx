import React from 'react'

function Button() {
  return (
    <div>
       <button className="login-button" title="login">Log In</button>
            <div className="separator">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
            </div>
            <div className="other">
                <button className="fb-login-btn" type="button">
                    <i className="fa fa-facebook-official fb-icon"></i>
                    <span className="">Log in with Facebook</span>
                </button>
                <a className="forgot-password" href="#">Forgot password?</a>
            </div>
    </div>
  )
}

export default Button;
