import React, { useEffect, useState } from "react";
import styled from "styled-components";
import db, { storage } from "../firebase/firebase";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { selectName } from "../reducer/User/userSlice";
import { useSelector } from "react-redux";

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
    <div className="grid grid-cols-3 ">
      {selected.map((postImage) =>
        name === postImage.data().name ? (
          <div>
          <img src={postImage.data().photo} className="h-64" /></div>
        ) : (
          <div></div>
        )
      )}
    </div>
  );
}

export default PostGrid;


