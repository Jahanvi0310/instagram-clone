import React, { useState, useEffect } from "react";
import {
  Button,
  // Form,
  // Grid,
  // Loader,
  // Container,
  // Card,
  Image,
  // Modal,
} from "semantic-ui-react";
import db from "../firebase/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import { borderRadius } from "@mui/system";
import "./home.css";
// import StoriesComponent from "./storiesComponent";
// import category from "../datasource/category";
function HomeStory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  // const[open,setOpen]=useState(false);
  // const[user,setUser]=useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      collection(db, "story"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          // console.log(doc.id);
          list.push({ id: doc.id, ...doc.data() });
        });
        setUsers(list);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  // console.log (users);

  const handleDelete = async (id) => {
    if (window.confirm("want to delete it?")) {
      try {
        // setOpen(false);
        await deleteDoc(doc(db, "story", id));
        setUsers(users.filter((user) => user.id !== id));
      } catch (err) {
        console.log(err);
      }
    }
  };

  // function redirectTostory(id, category, handleDelete) {
  //   // console.log(id);
   
  // }

  function renderCategoryitem() {
    // console.log(users);
    return (
      users &&
      users.map((category) => {
        // console.log(category);
        // {
        //   // console.log(category.id);
        // }
        return (
          <div key={category.id}>
          <div className="flex justify-center" >
            <div
              className="mt-2 ml-1 cursor-pointer"
              onClick={ ()=>{
                // console.log(category.id);
                navigate(`/story/${category.id}`,{
                  state: { category: category, id: category.id}
                });
              }}
            >
              {/* {open &&(<StoriesComponent open={open} setOpen={setOpen} handleDelete={()=>console.log("delete")} {...user}/>)} */}
              <div className="category-outer-circle flex justify-center items-center col-span-2">
                <div className="category-inner-circle flex justify-center items-center col-span-2">
                  {/* <i className="material-icons text-3xl ">{category.caption}</i> */}
                  <Image src={category.img} className="rounded-2xl h-12" />
                 
                </div>
              </div>
              <div className="flex justify-center ">{category.caption}</div>
            </div>
             {/* <Button color="green" onClick={()=>console.log("cancel")} >C</Button> */}
          </div>
         <div className="ml-2"> <Button  icon="checkmark" className="ui basic"  onClick={()=>handleDelete(category.id)}>❌</Button>
         <Button   className="ui basic" onClick={()=>navigate(`/update/${category.id}`)}>✏️</Button></div>
          </div>
        );
      })
    );
  }
  return (
    <div>
      <div className="grid grid-flow-col auto-cols-max ml-1">
        {renderCategoryitem()}
      </div>
    </div>
  );
}

export default HomeStory;

