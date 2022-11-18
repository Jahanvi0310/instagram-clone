import React from "react";
import "./Button.css";
import { useDispatch } from "react-redux";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { setLogIn } from "../reducer/User/userSlice";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
interface Props {
  className: string;
  children?: React.ReactNode;
  password: boolean;
}
const Button: React.FC<Props> = ({ children, password, className }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
            photo: user.photoURL,
          })
        );
        Navigate("/home");
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div>
      <button className={className} disabled={!password}>
        {children}
      </button>
      <div className="separator">
        <div className="line"></div>
        <p className="font-xl">OR</p>
        <div className="line"></div>
      </div>
      <div className="other">
        <button className="icon-login-btn" type="button">
          <EmailIcon fontSize="medium" />
          <span onClick={login} className="log">
            Log in with email
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
