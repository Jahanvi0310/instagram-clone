import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./Components/input";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setLogIn } from "./reducer/User/userSlice";
import Header from "./Components/Header";
import Button from "./Components/button";
import Postlist from "./Components/PostList";
import StoriesComponent from "./Components/storiesComponent";
import Post from "./pages/Post";
import { saveUser } from "./reducer/User/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  
  
  const dispatch = useDispatch();
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
  
  
  
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          saveUser({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      }
     
    });
  }, []);
  return (
   

<Container >
      <Router>
        <Routes>
        <Route path="/story/:CategoryType"element={<StoriesComponent/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
              <Route path='/signIn' element={<Input/>}/>
          <Route path="/home" element={<Home />} />
          <Route
            path="/logIn"
            element={<Input/>}
            
          />
          <Route path="/post"element={<Postlist />}/> 
          <Route path="/posts" element={<Post/>}/>
        </Routes>

    </Router>
    
     


    </Container>
    
   
  );
};
export default App;
const Container = styled.div``;
