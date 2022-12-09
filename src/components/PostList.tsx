import React, { useEffect, useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectName, selectPhoto, selectUid } from "../reducer/User/userSlice";
import db from "../firebase/firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import Comments from "./Comments";
import { MoreHorizOutlined } from "@material-ui/icons";
import "./Postlist.css";
interface Props {
  disabled: boolean;
}
function Postlist({ avatar, img, id, email, p, name }: any) {
  const [shorten, setShorten] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const pars = !shorten ? p.slice(100) : p;
  const names = useSelector(selectName);
  const rename = names ? names.split(" ") : names;
  const photo = useSelector(selectPhoto);
  const [comment, setComment] = useState<any>([]);
  const [liked, setLiked] = useState<boolean>(false);
  const userId = useSelector(selectUid);
  const [likes, setLikes] = useState<any>([]);
  const [open, setOpen] = useState<boolean>(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!names) return;
    if (input.length > 1) {
      if (loading) return;
      setLoading(true);
      await addDoc(collection(db, "insta", id, "comment"), {
        comment: input,
        name: rename,
        photo: photo,
        timestamp: serverTimestamp(),
      });
    }
    setInput(" ");
    setLoading(false);
  };
  useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "insta", id, "comment"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setComment(snapshot.docs);
      }
    );
  }, [id]);
  useEffect(() => {
    return onSnapshot(collection(db, "insta", id, "likes"), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [id]);
  useEffect(() => {
    setLiked(likes.findIndex((likes) => likes.id === userId) !== -1);
  }, [userId, likes]);
  const Post = async () => {
    if (liked) {
      await deleteDoc(doc(db, "insta", id, "likes", userId));
    } else {
      await setDoc(doc(db, "insta", id, "likes", userId), {
        name: names,
      });
    }
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Container>
        <PostHeader>
          <User>
            <Avatar src={avatar} />
            <span>{name}</span>
          </User>
          <MoreHorizOutlined onClick={handleOpen} />
          {open ? (
            <ul>
              <li>
                <a
                  onClick={() => {
                    deleteDoc(doc(db, "insta", id));
                  }}
                  className="pointer"
                >
                  Delete Post
                </a>
              </li>
            </ul>
          ) : null}
        </PostHeader>
        <PostContainer>
          <img loading="lazy" src={img} alt="post" />
        </PostContainer>

        <Social>
          {!liked ? (
            <FavoriteBorder onClick={Post} />
          ) : (
            <Favorite className="colorRed" onClick={Post} />
          )}
          <Absoloute>
            {likes.length > 0 && <p>{likes.length} like </p>}
          </Absoloute>
        </Social>

        <Caption>
          <div>
            <span>
              posted by::{name}
              {p.length >= 90 ? (
                <p>
                  {pars}
                  {!shorten ? (
                    <>
                      <Button onClick={() => setShorten(true)}>
                        Read more
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button onClick={() => setShorten(false)}>
                        Read less{" "}
                      </Button>
                    </>
                  )}
                </p>
              ) : (
                <p>Caption:{p}</p>
              )}
            </span>
          </div>
        </Caption>
        <ComentDisplay>
          {comment.map((post) => (
            <Comments
              key={post.id}
              caption={post.data().comment}
              name={post.data().name}
              avatar={post.data().photo}
              id={post.id}
            />
          ))}
        </ComentDisplay>
        <ComentSection onSubmit={submit}>
          <Avatar src={photo} />
          <InputContainer>
            {" "}
            <input
              type="text"
              value={input}
              // disabled={!names}
              onChange={(e) => setInput(e.target.value)}
            />
          </InputContainer>
          <ButtonBase onClick={submit} disabled={loading}>
            {loading ? "Posting" : "Post"}
          </ButtonBase>
        </ComentSection>
      </Container>
    </div>
  );
}
export default Postlist;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid rgba(219, 219, 219, 1);
  box-shadow: 3px 1px 2px 0 rgba(0 0 0 /0.05);
  margin-top: 10px;
`;
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 5px;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
    font-weight: bolder;
  }
`;
const PostContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Social = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  position: relative;
  svg {
    margin: 0 10px;
    font-size: 25px;
    cursor: pointer;
  }
  .plane {
    transform: rotate(-45deg);
  }
`;
const Caption = styled.div`
  display: flex;
  margin: 10px 0px;
  div {
    display: flex;
    align-items: center;
    span {
      font-weight: bolder;
      disply: flex;
      margin-left: 5px;
      color: black;
    }
    p {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      flex-wrap: wrap;
      max-width: 490px;
      margin-left: 8px;
      color: rgba(75, 85, 99, 1);
    }
  }
`;
//  const Avatar=styled.div``;
//  const Share=styled.div``;

const ComentDisplay = styled.div`
  max-height: 110px;
  margin: 20px 0px;
  overflow-y: auto;
`;
const ComentSection = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  font-size: 20px;
  div {
    margin: 0 5px;
  }
  button {
    margin: 0 5px;
    padding: 15px;
    color: rgba(96, 165, 250, 1);
    font-weight: bold;
  }
`;
const Button = styled.button`
  border-radius: 20px;
  border: none;
  background-color: transparent;
  font-weight: bold;
  color: rgba(37, 99, 235, 1);
  cursor: pointer;
  margin-left: 4px;
  outline: none;
  :hover {
    text-decoration: underline;
  }
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid rgba(107, 114, 128, 1);
    font-size: 20px;
  }
  :focus {
    outline: none;
  }
`;
const ButtonBase = styled.div<Props>`
  cursor: pointer;
`;
const Absoloute = styled.div`
  position: absolute;
  top: 20px;
  left: 0px;
  right: 0px;
  width: 20vh;
  p {
    margin-left: 10px;
    font-size: small;
  }
`;
const DropDown = styled.div``;
