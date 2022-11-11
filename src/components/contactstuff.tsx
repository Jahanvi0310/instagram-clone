import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import TopNav from "./topNav";
import ViewDashboard from "./viewDashboard";
import ProfileDetails from "./profileDetails";
import About from "./about";
import Highlights from "./highlights";
import Tabs from "./tabs";
import PostGrid from "./postGrid";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectEmail, selectName, selectPhoto, setLogout } from "../reducer/User/userSlice";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { Devices } from "@mui/icons-material";
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
const ContactStuff = () => {
  const name: any = useSelector(selectName);
  const photo: any = useSelector(selectPhoto);
  const email:any=useSelector(selectEmail);
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
      <Container
      >
        <ProfileWrapper>
          <TopNav name={name} logout={logout} />
          {/* <ViewDashboard /> */}
          <ProfileDetails />
          <About name={name}/>
          {/* <ProfileButtons /> */}
          <Highlights />
          <Tabs />
          <PostGrid email={email} />
        </ProfileWrapper>
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
  width: 20%;
  height: 100vh;
  border-radius: 20px;
  background-color: #ffffff;

  position: fixed;
  top: 4rem;
  right: 10px;
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
