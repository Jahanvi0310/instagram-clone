import React from "react";
import styled from "styled-components";
import TopNav from "./topNav";
import ViewDashboard from "./viewDashboard";
import ProfileDetails from "./profileDetails";
import About from "./about";
import ProfileButtons from "./profileButtons";
import Highlights from "./highlights";
import Tabs from "./tabs";
import PostGrid from "./postGrid";

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

function Profile() {
  return (
    <ProfileWrapper>
      <TopNav />
      {/* <ViewDashboard /> */}
      <ProfileDetails />
      <About />
      <ProfileButtons />
      <Highlights />
      <Tabs />
      <PostGrid />
    </ProfileWrapper>
  );
}

export default Profile;