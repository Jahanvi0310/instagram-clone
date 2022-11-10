import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import Postlist from './postList';
import db from '../firebase/firebase';

const Posts=(props)=> {
    const [selected,setSelected]=useState<any>([]);
    const { authorId, postCategory, isGrid } = props;
    useEffect(()=>{
        return onSnapshot(
            query(collection(db,'insta'),orderBy('timestamp','desc')),
            (snapshot)=>{
            setSelected(snapshot.docs);
        })
    },[]);
  return (
    <div>
        {selected.map((post:any)=>(
            <Postlist key={post?.id} 
          p={post?.data().caption}
          name={post.data().name}
          avatar={post.data().img}
         email={post.data().email}
        id={post.id}
        img={post.data().photo}

            />
        ))}
      
    </div>
  )
}
export default Posts;

