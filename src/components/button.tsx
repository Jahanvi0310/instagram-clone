import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

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
          <FontAwesomeIcon icon={faFacebookSquare} size="1x" />
          <span className="otherlogin">Log in with Facebook</span>
        </button>
        <a className="forgot-password" href="#">
          Forgotten your password?
        </a>
      </div>
    </div>
  );
};

export default Button;
