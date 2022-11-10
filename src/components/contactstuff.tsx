import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import TopNav from "./topNav";
import ViewDashboard from "./viewDashboard";
import ProfileDetails from "./profileDetails";
import About from "./about";
import ProfileButtons from "./profileButtons";
import Highlights from "./highlights";
import Tabs from "./tabs";
import PostGrid from "./postGrid";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectName, selectPhoto, setLogout } from "../reducer/User/userSlice";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
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
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth).then((result) => {
      dispatch(setLogout({ name: null, photo: null, email: null, uid: null }));
      console.log("button clicked");
      Navigate("/signIn");
    });
  };
//   const theme = {
//     ...
//     breakpoints: {
//       xs: '0',
//       sm: '600px',
//       md: '960px',
//       lg: '1280px',
//       xl: '1920px',
//     },
//   }

  return (
    <>
      <Container
        // fontSize={{ xs: "small", sm: "medium", md: "large" }}
        // width={{ xs: 200, sm: 400, md: 600, lg: 1000 }}
      >
        <ProfileWrapper>
          <TopNav name={name} logout={logout} />
          {/* <ViewDashboard /> */}
          <ProfileDetails />
          <About name={name}/>
          <ProfileButtons />
          <Highlights />
          <Tabs />
          <PostGrid />
        </ProfileWrapper>
        <Wrapper>
          <User>
            {/* <Avatar src={photo}/> */}
           
          </User>
          
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactStuff;

const Container = styled.div`
  width: 50%;
  border-radius: 20px;
  background-color: #ffffff;
  height: 500px;
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
