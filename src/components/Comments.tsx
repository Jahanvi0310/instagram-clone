import { Avatar } from '@mui/material';
import styled from 'styled-components';
import React, { useState } from 'react';
const Comments=({name,avatar,id,caption}:any)=>{
    const [comment,setComment]=useState(false);
    const commentInput=comment ? caption.slice(" ","100"):caption;
    return(
        <>
        <Wrapper>
            <UserStuff>
                <Avatar src={avatar}/>
                <span>{name}
                {commentInput.length>=90 ?(
                    <>
                    {comment ? (
                        <>
                        {commentInput}
                        <Button>Read More</Button>
                        </>
                    ):(
                        <>
                        {commentInput}
                        <Button>Read Less </Button>
                        </>
                    )}
                    </>
                ):(
                  <p>{commentInput}</p>  
                )}</span>
            </UserStuff>
            </Wrapper>
            </>
    )
}
export default Comments;
const Wrapper=styled.div``;
const UserStuff=styled.div``;
const Button=styled.div``;