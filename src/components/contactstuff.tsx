import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectName, selectPhoto, setLogout } from '../reducer/User/userSlice';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
const ContactStuff=()=>{
   const name:any=useSelector(selectName);
   const photo:any=useSelector(selectPhoto);
   const Navigate=useNavigate();
   const dispatch=useDispatch();
   const logout=()=>{
    signOut(auth).then((result)=>{
        dispatch(setLogout({name : null, photo : null,email : null,uid : null}))
        console.log("button clicked");
        Navigate('/signIn');
    });
  
   }
   
    return(
        <>
        <Container>
            <Wrapper>
<User>
    <Avatar src={photo}/>
<span>Welcome {name}</span>
    </User>
<button onClick={logout}>LogOut</button>
 </Wrapper>
        </Container>
        </>
    )
}

export default ContactStuff;

const Container=styled.div`
width:400px;
border-radius:20px;
background-color:#ffffff;
height:500px;
position:fixed;
top:4rem;
right:10px;
`;
const Wrapper=styled.div`
button{
    font-weight:bold;
    color:blue;
    }
display:flex;
align-items:center;
justify-content:space-between;
margin:15px;
margin-top:20px`;
const User=styled.div`
display:flex;
align-items:center;
div{
    :hover{
        transform:scale(1.2);
    }
    transition:transform 150ms ease-out;
    cursor:pointer;
}
span{
    font-weight:500;
    margin-left:10px;
}`;
