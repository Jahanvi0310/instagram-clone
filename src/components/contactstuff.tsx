import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import TopNav from "./topNav";
// import ViewDashboard from "./viewDashboard";
import ProfileDetails from "./profileDetails";
import About from "./about";
import Highlights from "./highlights";
import Tabs from "./tabs";
import PostGrid from "./postGrid";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  setLogout,
} from "../reducer/User/userSlice";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
// import { Devices } from "@mui/icons-material";
const ProfileWrapper = styled.div`
  background-color: white;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;
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
      <Container>
        {/* <ProfileWrapper> */}
          <TopNav name={props.name} logout={logout} />
          <ProfileDetails photo={props.photo} />
          <About name={props.name} />
          <Highlights />
          <Tabs />
          <PostGrid name={props.name} />
        {/* </ProfileWrapper> */}
        {/* <Wrapper> */}
        {/* <User> */}
        {/* <Avatar src={photo}/> */}

        {/* </User> */}

        {/* </Wrapper> */}
      </Container>
    </>
  );
};

export default ContactStuff;

const Container = styled.div`
  position: fixed;
  top: 4rem;
  right: 10px;
  width: 300px;
  border-radius: 20px;
  background-color: #ffffff;
  height: 500px;
  position: fixed;
  top: 4rem;
  right: 20px;
  border: 1px solid rgba(219, 219, 219, 1);
  box-shadow: 3px 1px 2px 0 rgba(0 0 0 /0.05);
`;

const Wrapper = styled.div`
  button {
    font-weight: bold;
    color: blue;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  margin-top: 20px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  div {
    :hover {
      transform: scale(1.2);
    }
    transition: transform 150ms ease-out;
    cursor: pointer;
  }
  span {
    font-weight: 500;
    margin-left: 10px;
  }
`;
