import { Avatar } from "@mui/material";
import styled from "styled-components";
import React, { useState } from "react";
const Comments = ({ name, avatar, id, caption }: any) => {
  const [comment, setComment] = useState(false);
  const commentInput = comment ? caption.slice(" ", "100") : caption;
  return (
    <>
      <Wrapper>
        <UserStuff>
          <Avatar src={avatar} />
          <span>
            {name}
            {commentInput.length >= 90 ? (
              <>
                {comment ? (
                  <>
                    {commentInput}
                    <Button onClick={() => setComment(true)}>Read More</Button>
                  </>
                ) : (
                  <>
                    {commentInput}
                    <Button onClick={() => setComment(false)}>
                      Read Less{" "}
                    </Button>
                  </>
                )}
              </>
            ) : (
              <p>{commentInput}</p>
            )}
          </span>
        </UserStuff>
      </Wrapper>
    </>
  );
};
export default Comments;
const Wrapper = styled.div``;
const UserStuff = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  position: relative;
  span {
    margin-left: 15px;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    padding: 20px 0px;
    p {
      margin-left: 15px;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      max-width: 400px;
      flex-wrap: wrap;
      color: rgba(75, 85, 99, 1);
    }
  }
  div {
    position: realtive;
    top: 10px;
    left: 2px;
  }
`;
const Button = styled.div`
  color: rgba(37, 99, 235, 1);
  cursor: pointer;
`;
