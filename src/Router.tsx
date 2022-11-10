import React,{useEffect} from 'react'
import Home from "./pages/Home";
import Input from "./Components/input";
import Postlist from "./Components/PostList";
import StoriesComponent from "./Components/storiesComponent";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { selectuser, setLogIn } from "./reducer/User/userSlice";
import { useSelector } from 'react-redux';
import SignUp from './Components/signUp';
const Router=()=> {
  const dispatch = useDispatch();
  const user=useSelector(selectuser);
  // const[User,setUser]=useState();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
       dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      }
     });
  }, []);
  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path="/story/:CategoryType"element={<StoriesComponent/>}/>
          <Route path="/" element={user?<Home/>:<Input/>}/>
          <Route path="/home" element={<Home/>}/>
              <Route path='/signIn' element={<Input/>}/>
          <Route path="/home" element={<Home />} />
          <Route
            path="/logIn"
            element={<Input/>}
            
          />
          <Route path="/post"element={<Postlist />}/> 
          <Route path="/posts" element={<Post/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>

    </BrowserRouter>
    
     
    </>
  )
}

export default Router;
