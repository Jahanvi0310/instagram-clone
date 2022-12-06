import { signOut } from "firebase/auth";
import React from "react";
import TopNav from "./topNav";
import ProfileDetails from "./profileDetails";
import About from "./about";
import PostGrid from "./postGrid";

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
      {/* <Container> */}
        <TopNav name={props.name}  logout={logout} />
        {/* <ProfileDetails photo={props.photo} name={props.name} />
        <About name={props.name} /> */}
        {/* <PostGrid name={props.name} /> */}
      {/* </Container> */}
    </>
  );
};

export default ContactStuff;



