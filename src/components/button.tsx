import React from "react";
import './Button.css'
import {useDispatch} from 'react-redux';
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from '../firebase/firebase';
import { setLogIn } from '../reducer/User/userSlice';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
// import { faFacebookSquare,} from "@fortawesome/free-brands-svg-icons";
interface Props {
  className: string;
  children?: React.ReactNode;
  onClick: () => void;
  Password: boolean;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  className,
  Password,
}) => {
  const Navigate=useNavigate();
  const dispatch=useDispatch();
  const login=()=>{
      signInWithPopup(auth,provider)
      .then((result)=>{
const user=result.user;
dispatch(
  setLogIn({
      name:user.displayName,
      email:user.email,
      uid:user.uid,
      photo:user.photoURL,
  })
);
Navigate('/home');
      })
      .catch((error)=>console.error(error.message));
  }
  
  return (
    <div>
      <button
        className={className}
        title="login"
        disabled={Password ? false : true}
      >
        {children}
      </button>
      <div className="separator">
        <div className="line"></div>
        <p>OR</p>
        <div className="line"></div>
      </div>
      <div className="other">
        <button className="fb-login-btn" type="button">
          <FontAwesomeIcon icon={faEnvelopeSquare} size="1x" />
          <span className="otherlogin" onClick={login}>Log in with Email</span>
        </button>
        <a className="forgot-password" href="#" >
          Forgotten your password?
        </a>
      </div>
    </div>
  );
};

export default Button;
