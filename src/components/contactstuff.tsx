import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectName, selectPhoto, setLogout } from '../reducers/userSlice';
import { auth } from '../firebase/firebase';
const Contactstuff=()=>{
   const name=useSelector(selectName);
   const photo=useSelector(selectPhoto);
   const shorten=name?name.split("")[0]:name;
   const dispatch=useDispatch();
   const logout=()=>{
    signOut(auth).then((result)=>{
        dispatch(setLogout({name : null, photo : null,email : null,uid : null}))
        console.log("button clicked");
    });
    
   }
    return(
        <>
        <Container>
            <Wrapper>
<User>
    <Avatar src={photo}/>
<span>Welcome {shorten?shorten:"Guest"}</span>
    
</User>
<button onClick={logout}>LogOut</button>

            </Wrapper>
        </Container>
        </>
    )
}
export default Contactstuff;

const Container=styled.div`
width:400px;
border-radius:20px;
background-color:offwhite;
height:500px;
position:fixed;
top:4rem;
right:10px;

`;
const Wrapper=styled.div`
button{
    font-weight:bold;
    border:1px solid black;
    color:#fff;
    background-color:blue;
    
}
display:flex;
align-items:center;
justify-content:space-around;
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
