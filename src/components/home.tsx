import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader ,Container,Card,Image} from "semantic-ui-react";
import { storage, db } from "../firebase/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { onSnapshot,collection } from "firebase/firestore";
import { borderRadius } from "@mui/system";
import "./home.css";
// import category from "../datasource/category";
function Home() {
  const[users,setUsers]=useState([]);
  const[loading,setLoading]=useState(false);
  const navigate = useNavigate();
  function redirectTostory(caption) {
    navigate(`/story/${caption}`,{state:{users:users,caption:caption}});
  }
  useEffect(()=>{
    setLoading(true);
    const unsub=onSnapshot(collection(db,"users"),(snapshot)=>{
        let list=[];
        snapshot.docs.forEach((doc)=>{
            list.push({id:doc.id,...doc.data()})
        })
        setUsers(list);
        setLoading(false);
    },(error)=>{
        console.log(error);
    })
    return ()=>{
        unsub();
    };
},[])

  function renderCategoryitem() {
    return (users && users.map((category)  => {
      // console.log(category);
      return (
        <div className="flex justify-center">
          <div
            className="mt-2 ml-1 cursor-pointer"
            key={category.caption}
            onClick={() => redirectTostory(category.caption)}
          >
            <div className="category-outer-circle flex justify-center items-center col-span-2">
              <div className="category-inner-circle flex justify-center items-center col-span-2">
                {/* <i className="material-icons text-3xl ">{category.caption}</i> */}
                <Image src={category.img} className="rounded-2xl h-12"/>
              </div>
            </div>
            <div className="flex justify-center ">{category.caption}</div>
          </div>
        </div>
      );
    }))
  }
  return (
    <div>
      <div className="grid grid-flow-col auto-cols-max ml-1">
        {renderCategoryitem()}
      </div>
    </div>
  );
}

export default Home;
