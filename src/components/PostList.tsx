import React, { useState } from 'react';
import { FavoriteBorder, MoreHorizOutlined, SendOutlined, Share } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
const Postlist=({avatar,p,name,email,id,img}:any)=> {
    const[shorten,setShorten]=useState(false) ;
    
    const pars= !shorten ?  p.slice(100): p ;
    return (
    <div>
    <Container>
        <PostHeader>
            <User>
                <Avatar src={avatar}/>
                <span>{name}</span>
            </User>
            <MoreHorizOutlined/>
        </PostHeader>
        <PostContainer>
            <img loading='lazy' src={img} alt='post'/>
        </PostContainer>

        <Social>
            <FavoriteBorder/>
            <SendOutlined className="plane" />
            <Share/>
           
            
        </Social>

        <Caption>
            <div>
                <span>
                    {name}
                    {p.length >=90 ?(

                   
                        <p>
                        {pars}
                        {!shorten?(
                            <>
                            <Button onClick={()=>setShorten(true)}>Read more</Button>
                            </>
                        ):(
                            <>
                            <Button onClick={()=>setShorten(false)}>Read less </Button>
                            </>
                        )}
                        </p>
                         ):(
                            <p>{p}</p>
                         )}
                </span>
            </div>
        </Caption>
        <ComentDisplay></ComentDisplay>
        <ComentSection>
            <Avatar/>
            <InputContainer> <input type="text"/></InputContainer>
            <ButtonBase>Post</ButtonBase>
        </ComentSection>
    </Container>
    </div>
  )
}
export default Postlist

const Container = styled.div`
    max-width : 600px;
    margin : 0 auto;
    background-color : #ffffff;
    padding : 10px 0;
    display : flex;
    flex-direction : column;
    justify-content :center;
    border : 1px soli rgba(219,219,219,1);
    box-shadow:0 1px 2px 0 rgba( 0 0 0 /0.05);
`;
const PostHeader =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:5px 5px;
`;
const User = styled.div`
    display:flex;
    align-items:center;
    span{
        margin-left:10px;
        font-weight:bolder;
    }
`;
const PostContainer=styled.div`
    width:100%;
    img{
        width:100%;
        object-fit:contain;
    }
    `;
const Social=styled.div`
display:flex;
margin-left:5px;
align-items:center;
svg{
    margin:0 10px;
    font-size:25px; 
    cursor:pointer;
}
.plane{
<<<<<<< HEAD
transform:rotate(-45deg);
=======
>>>>>>> dda526ab937b82729c4c4673d59d5d49c0d05a04
}
`;
const Caption=styled.div`
    display:flex;
    margin: 10px 0px; 
    div{
        display:flex;
        align-items:center;
        span{
            font-weight:bolder; 
            disply:flex;
            margin-left:5px;
            color:black;
            
        }
        p{
            display:flex;
            font-size:14px;
            font-weight:500;
            line-height: 18px;
            flex-wrap:wrap;
            max-width:490px;
            margin-left:8px;
            color:rgba(75,85,99,1);
        }
    }
 `;
//  const Avatar=styled.div``;
//  const Share=styled.div``;

 const ComentDisplay=styled.div``;
 const ComentSection=styled.div`;
 display:flex;
 align-items:center;
 justify-content:space-between;
 margin: 5px 0;
 div{
    margin: 0 5px;
 }
 button{
    margin: 0 5px;
    padding:15px;
    color:rgba(96,165,250,1);
    font-weight:bold;
 }
 `;
 const Button=styled.button`
    border-radius:20px;
    border:none;
    background-color:transparent;
    font-weight:bold;
    color:rgba(37,99,235,1);
    cursor:pointer;
    margin-left:4px;
    outline:none;
    :hover{
        text-decoration:underline;
    }
 `;

 const InputContainer=styled.div`
 flex:1;
 display:flex;
 align-items:center;
 input{
    width:100%;
    border:none;
    border-bottom: 1px solid rgba(107,114,128,1);
 }
 :focus{
    outline:none;
 }
 `;
 const ButtonBase=styled.div``;



