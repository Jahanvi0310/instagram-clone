import React from 'react'
import './Button.css'
import {useDispatch} from 'react-redux';
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from '../firebase/firebase';
import {  setLogIn } from '../reducers/User/userSlice';
import { useNavigate } from "react-router-dom";
interface Props{

className:string;

children?:React.ReactNode;
onClick:()=>void;

}
const Button:React.FC<Props>=({
  
  
  children,
  
  onClick,
  className

})=> {
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
      
        
       >{children}</button>
            <div className="separator">
                <div className="line"></div>
                <p>OR</p>
                <div className="line"></div>
            </div>
            <div className="other">
                <button className="fb-login-btn" type="button">
                    <i className="fa fa-facebook-official fb-icon"></i>
                    <span className="" onClick={login}>Log in with email</span>
                </button>
                <a className="forgot-password" href="#">Forgot password?</a>
            </div>
    </div>
  )
}

export default Button;






