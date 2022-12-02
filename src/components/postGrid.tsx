import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db, { storage } from "../firebase/firebase";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { selectName } from "../reducer/User/userSlice";
import { useSelector } from "react-redux";

const GridWrapper = styled.div`
  display: flex;
  flex-wrap:no-wrap;
  img {
    max-width: 100%;
  }
`;

function PostGrid(props) {
  const name: any = useSelector(selectName);
  const [selected, setSelected] = useState<any>([]);
  useEffect(() => {
    return onSnapshot(
      query(collection(db, "insta"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setSelected(snapshot.docs);
      }
    );
  }, []);

  return (
    <GridWrapper>
      {selected.map((postImage) =>
        name === postImage.data().name ? (
          <img src={postImage.data().photo} alt="" />
        ) : (
          <div></div>
        )
      )}
    </GridWrapper>
  );
}

export default PostGrid;


