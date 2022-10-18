import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import Postlist from './PostList'
import db from '../firebase/firebase';

const Posts=()=> {
    const [selected,setSelected]=useState<any>([]);
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
