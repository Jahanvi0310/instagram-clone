import React from 'react'
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
                    <span className="">Log in with email</span>
                </button>
                <a className="forgot-password" href="#">Forgot password?</a>
            </div>
    </div>
  )
}

export default Button;






