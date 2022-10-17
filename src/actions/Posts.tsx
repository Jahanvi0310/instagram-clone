import { collection, onSnapshot, orderBy,query } from 'firebase/firestore';
import React,{useEffect, useState} from 'react'
import Postlist from '../components/PostList'
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
            <Postlist key={post?.id} p={post?.data()}/>
        ))}
      
    </div>
  )
}

export default Posts;
