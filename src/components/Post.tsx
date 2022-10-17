import { CollectionsOutlined } from "@mui/icons-material";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import db,{storage } from "../firebase/firebase";
import { selectBoolean } from "../reducers/boolSlice";
import { selectEmail, selectName, selectPhoto } from "../reducers/userSlice";
const Post=()=>{
    const dispatch=useDispatch();
    const selectedImage:any=useRef(null);
    const [selectImage,setSelectImage]=useState<any>(null);
    const[input,setInput]=useState<any>(null);
    const[loading,setLoading]=useState<any>(false);
    const name:any=useSelector(selectName);
    const img:any=useSelector(selectPhoto);
    const email:any=useSelector(selectEmail);
    const boolean=useSelector(selectBoolean);
    const Submit=async(e:any)=>{
       e.preventDefault();
       if(input.length>1){
        if(loading)return;
        setLoading(true);
        const file=await addDoc(collection(db,"insta"),{
            name:name,
            img:img,
            email:email,
            caption:input,
            timestamp:serverTimestamp(),
        });
       
        const images=ref(storage,`insta/${file.id}/img`);
        await uploadString(images,selectImage,'data_url').then(async()=>{
            const download=await getDownloadURL(images);
           await updateDoc(doc(db,'insta',file.id),{
            photo:download
           });
        });
       } 
    } ;
    const ImageStuff=(e:any)=>{
        const reader=new FileReader();
        if(e.target.files[0]){
reader.readAsDataURL(e.target.files[0]);
reader.onload=(event:any)=>{
setSelectImage(event.target.result);
};
        }
    };
    console.log(selectImage);
    return(
        <>
        <Container user={boolean}>
            <Wrapper>
                <TopSection>
                    {selectImage ? (
                        <ImageContainer>
                            <img src={selectImage} alt="post" />
                        </ImageContainer>
                    ):(
                        <CollectionsOutlined onClick={()=>{selectedImage.current.click()}}/>
                    )}
                  
                    <input type="file" hidden ref={selectedImage} onChange={ImageStuff} />
                </TopSection>
                <BottomSection>
                    <InputContainer>
                    <input type="text" placeholder="caption"
                    disabled={!selectImage} 
                    value={input} 
                    onChange={(e:any)=>setInput(e.target.value)}/>
                    </InputContainer>
                    <button disabled={loading} onClick={Submit}>Post</button>
                </BottomSection>
            </Wrapper>
        </Container>
        </>
    )
}
export default Post;
const Container=styled.div`
background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999999;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: 150ms ease-out;
    
   `;
const Wrapper=styled.div`max-height: 550px;
height: 450px;
width: 400px;
background-color: #ffffff;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 9999999999;
}`;
const TopSection=styled.div`
height: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        font-size: 50px;
        cursor: pointer;
        color: rgba(107,114,128,1);
    }`;
const BottomSection=styled.div`
height: 50%;
background-color: transparent;
position: relative;
   padding-top: 30px;
   button{
    position: absolute;
   bottom: 10px;
   right: 10px;
   padding: 10px 20px;
   border: none;
   background-color: rgba(59,130,246,1); 
   border-radius: 20px;
   cursor: pointer;
   color:white;
   transition:all 150ms ease-out;
   :hover{
    opacity:0.75;
   }
   }
`;
const InputContainer=styled.div`

width: 90%;
border-bottom: 1px solid black;
margin-left:5px;
input{
    width: 100%;
   border:none;
   :focus{
    outline: none;
   }
}`;
const ImageContainer=styled.div`
width:100%;
img{
    width:100%;
    object-fit:contain;
    border-top-left-radius:20px;
    border-top-right-radius:20px;
}`;