import React from "react";
import styled from "styled-components";

const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 10px;
  border-bottom: 1px solid #151515;
`;

const AccountNav = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h4`
  margin: 0;
  font-size: 20px;
`;
const PostMenu = styled.div`
  font-size: 25px;
`;

const Menu = styled.div`
  display: inline-block;
  position: relative;
  margin-left: 20px;
`;

function TopNav(props) {
  return (
    <TopNavWrapper>
      <AccountNav>
        <ProfileName>
          {" "}
          <span>Welcome <br/><b>{props.name}</b></span>
        </ProfileName>
      </AccountNav>
      <PostMenu>
        <Menu>
          <button className="text-lg" onClick={props.logout}>LogOut</button>
        </Menu>
      </PostMenu>
    </TopNavWrapper>
  );
}

export default TopNav;

