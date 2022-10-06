import React, { useState } from "react";
import { MoreHorizOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import SendOutlined from "@material-ui/icons/Comment";

function Postlist() {
  const [shorten, setShorten] = useState(false);
  const p =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor. Reprehenderit repellendus incidunt, animi quidem rerum in alias officiis blanditiis praesentium, repudiandae aut, fugiat possimus labore dolorum fugit dicta natus!";
  const pars = !shorten ? p.slice(100) : p;
  return (
    <div>
      <Container>
        <PostHeader>
          <User>
            <Avatar />
            <span>tino</span>
          </User>
          <MoreHorizOutlined />
        </PostHeader>
        <PostContainer>
          <img
            loading="lazy"
            src="data:image/png;base64,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"
            alt="post"
          />
        </PostContainer>

        <Social>
          <FavoriteIcon />
          <SendOutlined className="plane" />
          <Share />
        </Social>

        <Caption>
          <div>
            <span>
              {/* tino  */}
              <p>
                {pars}
                {!shorten ? (
                  <>
                    <Button onClick={() => setShorten(true)}>Read more</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => setShorten(false)}>
                      Read less{" "}
                    </Button>
                  </>
                )}
              </p>
            </span>
          </div>
        </Caption>
        <ComentDisplay></ComentDisplay>
        <ComentSection>
          <Avatar />
          <InputContainer>
            {" "}
            <input type="text" />
          </InputContainer>
          <ButtonBase>Post</ButtonBase>
        </ComentSection>
      </Container>
    </div>
  );
}

export default Postlist;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px soli rgba(219, 219, 219, 1);
  box-shadow: 0 1px 2px 0 rgba(0 0 0 /0.05);
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
    object-width: contained;
  }
`;
const Social = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  svg {
    margin: 0 10px;
    font-size: 25px;
    cursor: pointer;
  }
  .plane {
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

const ComentDisplay = styled.div``;
const ComentSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
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
  }
  :focus {
    outline: none;
  }
`;
const ButtonBase = styled.div``;
