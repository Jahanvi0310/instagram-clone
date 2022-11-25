import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectPhoto } from "../reducer/User/userSlice";

const ProfileDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 60%;
`;

const StatsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsLabel = styled.span`
  margin-top: 5px;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 18px;
`;

function ProfileDetails(props) {
  const photo=useSelector(selectPhoto);
  return (
    <ProfileDetailsWrapper>
      <Avatar src={photo} />
      <ProfileStats>
        <StatsBlock>
          <StatsLabel>Posts</StatsLabel>
        </StatsBlock>
      </ProfileStats>
    </ProfileDetailsWrapper>
  );
}

export default ProfileDetails;
