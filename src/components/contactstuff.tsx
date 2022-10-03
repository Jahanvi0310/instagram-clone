import { Avatar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
const contactstuff=()=>{
    return(
        <>
        <Container>
            <Wrapper>
<User>
    <Avatar/>
<span>Welcome Tino</span>
    
</User>
<button>LogOut</button>

            </Wrapper>
        </Container>
        </>
    )
}
export default contactstuff;

const Container=styled.div`
width:400px;
border-radius:20px;
background-color:#fafafafa
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
