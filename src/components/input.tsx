import React, {
  useState,
 
  ChangeEvent,
  FC,
} from "react";
import Button from "./button";
import "./input.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Input: FC = () => {
  const auth = getAuth();
  const [inputfield, setInput] = useState<string>();
  const [password, setpassword] = useState<boolean>();
  const [passInput, setPassInput] = useState<string>();
  const [passwordType, setPasswordType] = useState<string>("password");
  const changeText: (event: ChangeEvent) => void = (event) => {
    setPassInput((event.target as HTMLInputElement).value);
    if ((event.target as HTMLInputElement).value.length < 8) {
      setpassword(false);
    } else {
      setpassword(true);
    }
  };
  const input: (event: ChangeEvent) => void = (event) => {
    setInput((event.target as HTMLInputElement).value);
  };
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const logIn=()=>{
    


signInWithEmailAndPassword(auth, inputfield, passInput)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    alert("submited");
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
  });
  }
  return (
    <div className="container c1">
      <div className="box upper">
        <div className="heading h1"></div>
        <form className="login-form">
          <div className="field">
            <input
              id="username"
              type="name"
              placeholder="Phone number, username, or email"
              onChange={input}
            />
            <label htmlFor="username">
              Phone number, username, or email address
            </label>
          </div>
          <div className="field">
            <div className="passdiv">
              <input
                id="password"
                type={passwordType}
                placeholder="password"
                onChange={changeText}
              />
              <label htmlFor="password">Password</label>
              <button id="hide" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <p className="para">Show</p>
                ) : (
                  <p className="para">Hide</p>
                )}
              </button>
            </div>
          </div>
          <Button
            Password={password}
            className="login-button"
            children="log In"
            onClick={logIn}
          />
        </form>
      </div>
      <div className="box b1">
        <p>
          Don't have an account?{" "}
          <a className="signup" href="#">
            Sign Up
          </a>
        </p>
      </div>
      <p>Get the app.</p>
      <div className="bottom">
        <a href="https://apps.apple.com/in/app/instagram/id389801252">
          <img src="data:image/png;base64,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" />
        </a>

        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US">
          <img src="data:image/png;base64,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"></img>
        </a>
      </div>
    </div>
  );
};

export default Input;
