import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectName, selectPhoto, setLogout } from "../reducer/User/userSlice";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
const ContactStuff = () => {
  const name: string = useSelector(selectName);
  const photo: string = useSelector(selectPhoto);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    signOut(auth).then((result) => {
      dispatch(setLogout({ name: null, photo: null, email: null, uid: null }));
      Navigate("/signIn");
    });
  };

  return (
    <>
      <Container>
        <Wrapper>
          <User>
            <Avatar src={photo} />
            <span>Welcome {name}</span>
          </User>
          <button onClick={logout}>LogOut</button>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactStuff;

const Container = styled.div`
  width: 300px;
  border-radius: 20px;
  background-color: #ffffff;
  height: 500px;
  position: fixed;
  top: 4rem;
  right: 10px;
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
