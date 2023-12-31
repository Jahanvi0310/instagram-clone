import { CloseRounded, CollectionsOutlined } from "@mui/icons-material";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import db, { storage } from "../firebase/firebase";
import { selectBoolean, setBool } from "../reducer/Bool/boolSlice";
import {
  selectEmail,
  selectName,
  selectPhoto,
} from "../reducer/User/userSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  user: string;
}
const Post = () => {
  const dispatch = useDispatch();
  const selectedImage: any = useRef(null);
  const [selectImage, setSelectImage] = useState<any>(null);
  const [input, setInput] = useState<string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const name = useSelector(selectName);
  const img = useSelector(selectPhoto);
  const email = useSelector(selectEmail);
  const boolean = useSelector(selectBoolean);
  const Navigate = useNavigate();
  const Submit = async (e) => {
    if (selectImage == null) {
      alert("please choose the file!");
      return;
    }
    e.preventDefault();
    if (input.length > 1) {
      if (loading) return;
      setLoading(true);
      const file = await addDoc(collection(db, "insta"), {
        name: name,
        img: img,
        email: email,
        caption: input,
        timestamp: serverTimestamp(),
      });

      const images = ref(storage, `insta/${file.id}/img`);
      await uploadString(images, selectImage, "data_url").then(async () => {
        const download = await getDownloadURL(images);
        await updateDoc(doc(db, "insta", file.id), {
          photo: download,
        });
      });
    }
    setInput("");
    setSelectImage(null);
    setLoading(false);
    dispatch(setBool({ boolean: false }));
  };
  const ImageStuff = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) => {
        setSelectImage(event.target.result);
      };
    }
  };
  console.log(selectImage);
  const close = () => {
    dispatch(setBool({ boolean: false }));
    Navigate("/Home");
  };
  return (
    <>
      <Container user={boolean}>
        <CloseContainer onClick={close}>
          <CloseRounded />
        </CloseContainer>
        <Wrapper>
          <TopSection>
            {selectImage ? (
              <ImageContainer>
                <img src={selectImage} alt="post" />
              </ImageContainer>
            ) : (
              <CollectionsOutlined
                onClick={() => {
                  selectedImage.current.click();
                }}
              />
            )}

            <input
              type="file"
              hidden
              ref={selectedImage}
              onChange={ImageStuff}
            />
          </TopSection>
          <BottomSection>
         
            <InputContainer>
            
              <input
                type="text"
                disabled={!selectImage}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="caption"
              />
              
            </InputContainer>
            <button disabled={loading} onClick={Submit}>
              Post
            </button>
          </BottomSection>
        </Wrapper>
      </Container>
    </>
  );
};
export default Post;
const Container = styled.div<Props>`
  background-image: url("https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000");
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 150ms ease-out;
  transform: ${(props) =>
    props.user ? `translateY(0)` : `translateY(-100%)`};
`;
const Wrapper = styled.div`
height: 700px;
width: 600px;
background-color: #ffffff;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 9999999999;
}`;
const TopSection = styled.div`
  height: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 50px;
    cursor: pointer;
    color: rgba(107, 114, 128, 1);
  }
`;
const BottomSection = styled.div`
  height: 50%;
  background-color: transparent;
  position: relative;
  padding-top: 30px;
  button {
    height:70px;
    width:80%;
    position: absolute;
    bottom: 40px;
    right: 60px;
    padding: 10px 20px;
    border: none;
    background-color: rgba(59, 130, 246, 1);
    border-radius: 20px;
    cursor: pointer;
    color: white;
    transition: all 150ms ease-out;
    font-size:30px;
    :hover {
      opacity: 0.75;
    }
  }
`;
const InputContainer = styled.div`
border:solid 1.5px #9e9e9e;
width: 80%;
height:100px;
border:2px solid black;

   
border-bottom: 1px solid black;
margin-left:5px;
position:relative;

    top:50px;
    left: 50px;
transition:150ms cubic-bezier(0.4,0,0.2,1);
input{
    width: 100%;
    height:100%;
   font-size:2rem;
   border:radius:1rem;
background:none;
padding:1rem;
   :focus{
    outline: none;
   
   }
   
   label{
    position:absolute;
    left:16px;
    color:black;
    pointer-events:none;
    transform:translateY(1rem);
    transition:150ms cubic-bezier(0.4,0,0.2,1);

   }
}`;
const ImageContainer = styled.div`
  width: 80%;
  
  position:relative;
  top:40px;

  
  height: 350px; img {
   
    width: 600px;
    height:100%;
    object-fit: contain;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;
const CloseContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
  height: 24px;
  transition: all 150ms ease-out;
  :hover {
    opacity: 0.5;
  }
`;
