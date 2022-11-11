import React, { useEffect ,useState} from "react";
import styled from "styled-components";
import db,{storage} from '../firebase/firebase';
import { onSnapshot, collection,orderBy,query  } from "firebase/firestore";

// useEffect(()=>{
//   const sub=onSnapshot(collection(db,"insta"),
//   (querySnapshot) => {
//     // Loop through the data and store
//     // it in array to display
//     querySnapshot.forEach(element => {
//         var data = element.data();
//         let postImages  = [];
//         querySnapshot.docs.forEach((doc) => {
//           // console.log(doc.id);
//           postImages.push({ id: doc.id, ...doc.data() });
//         // setInfo(arr => [...arr , data]);
         
//     });
//   },
//   (error)=>{
//     console.log(error);
//   }
//   );
//   return () => {
//     sub();
//   };
// },[]);
const GridWrapper = styled.div`
  margin-top: 5px;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(3, 1fr);
  img {
    max-width: 100%;
  }
`;

function PostGrid(props) {
  const [selected,setSelected]=useState<any>([]);
    useEffect(()=>{
        return onSnapshot(
            query(collection(db,'insta')),
            (snapshot)=>{
            setSelected(snapshot.docs);
        })
    },[]);
  return (
    <GridWrapper>
      {selected.map((postImage) => (
        <img src={postImage.data().photo} alt="" />
      ))}
    </GridWrapper>
  );
}

export default PostGrid;