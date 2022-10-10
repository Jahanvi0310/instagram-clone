import React from 'react';
import styled from "styled-components"
import { AddCircleOutline, FavoriteBorderRounded, HomeRounded, SendRounded } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {useSelector } from 'react-redux';
import './Header.css';

import { selectName, selectPhoto } from '../reducers/userSlice';

const Header=()=>{
    
    const username = useSelector(selectName);
    const photo=useSelector(selectPhoto);
    
    

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
            <AddCircleOutline/>
        </List>
        <List>
            <FavoriteBorderRounded/>
        </List>
        <List>
            <Avatar  src={photo}/>
        </List>
    </Down>
    </>
):(
   null
)}
    
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
    const Buttons=styled.button`
    padding:10px 20px;
    border-radius:20px;
    border:none;
    font-weight:600;
    color:white;
    cursor:pointer;
    background-color:rgba(59,130,246,1);
    
    `;

