import React, { useState } from 'react';
import styled from "styled-components"
import { AddCircleOutline, FavoriteBorderRounded, HomeRounded, SendRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {useSelector } from 'react-redux';
import './Header.css';
import {  selectPhoto,selectName } from '../reducer/User/userSlice';
import ContactStuff from './contactStuff';
// import { selectName, selectPhoto, setLogout } from '../reducer/User/userSlice';

import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const name:any=useSelector(selectName);
    
    const [isShown,setShown]=useState<any>(false);
   const Navigate=useNavigate();
    const photo=useSelector(selectPhoto);
    
    const handleClick=()=>{
        setShown(current=>!current)
       
    }
    const handleclick=()=>{
     Navigate('/posts');
    }
    
        
        
    

    return(
        <div className="Container">
<Wrapper>
<div className="headerLogo">
    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram original logo" />
</div>
<SearchContainer>
    <div className="search">
        <input type="search" placeholder='search' />
    </div>
</SearchContainer>
<div className="headerRight">
{/* {username?( */}
    <>
    <div className="List">
        <SendRounded className="rotate"/>
    </div>
    <Down>
        <List>
            <HomeRounded/>
        </List>
        <List>
            <AddCircleOutline onClick={handleclick}/>
          
        </List>
        <List>
            <FavoriteBorderRounded />
        </List>
        <List>
        <Avatar style={{cursor:"pointer"}}  onClick={handleClick} src={photo}/>
            {isShown && <ContactStuff/>}
        </List>
    </Down>
    </>
{
     null
}
  



    
</div>
</Wrapper>
        </div>
    )
}
export default Header;

const List=styled.li`
list-style:none;
margin:0 1rem;

svg{
    font-size:1.5625rem;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items:center;
}
.rotate{
    transform:rotate(-45deg);
}`;

const Wrapper=styled.div`
@media(min-width:1024px){
    max-width:62rem;
    margin:0 auto;

}
margin:0 0.599rem;
height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
`;
const SearchContainer=styled.div`
display:none;
@media(min-width:1024px){
    display:inline-flex;
}
align-items:center;
color:black;
border:1px solid rgba(219,219,219,1);
padding:0.3125rem 0.3125rem;
border-radius:4px; 
svg{
    height:1.25rem;
}
input{
    border:none;
    height:100%;
    background-color:transparent;

:focus{
    outline:none;
}
}
`;
const Down=styled.div`
@media(max-width:1024px){
    position:fixed;
    bottom:0;
    background:white;
    left:0;
    right:0;
    justify-content:space-between;
    boreder-top:1px solid rgba(219,219,219,1);
    padding:10px 10px;

}
display: flex;
    align-items: center;
    justify-content:space-around;
    `;
   
