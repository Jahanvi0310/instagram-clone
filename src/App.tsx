import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Input from "./components/input";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { setLogIn } from "./reducer/User/userSlice";
import Header from "./components/Header";
import Button from "./components/button";
import Postlist from "./components/PostList";
import StoriesComponent from "./components/storiesComponent";
import Posts from "./components/Posts";
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
  return (

    <Container>
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
          <Route path='/posts' element={<Posts/>}/>
        </Routes>

    </Router>
    
     

    </Container>
  );
};
export default App;
const Container = styled.div``;
