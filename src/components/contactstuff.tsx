import { signOut } from "firebase/auth";
import React from "react";
import TopNav from "./topNav";

import { useDispatch } from "react-redux";

import { setLogout } from "../reducer/User/userSlice";
import { auth } from "../firebase/firebase";
import { useNavigate,useLocation } from "react-router-dom";

const ContactStuff = (props) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth).then((result) => {
      dispatch(setLogout({ name: null, photo: null, email: null, uid: null }));
      console.log("button clicked");
      Navigate("/");
    });
  };
  return (
    <>
        <TopNav name={props.name}  logout={logout} />
    </>
  );
};

export default ContactStuff;



