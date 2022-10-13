import React,{useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase/firebase';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Button from './components/button';
import { setLogIn } from './reducers/userSlice';
import './App.css';
import Postlist from "./components/postlists";
// import Category from './datasource/category';
import { BrowserRouter,Router,Routes, Route} from "react-router-dom";
import Home from './components/home';
import StoriesComponent from './components/storiesComponent'

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
onAuthStateChanged(auth,async (user)=>{
if(user){
  dispatch(setLogIn({
    name:user.displayName,
    email:user.email,
    uid:user.uid,
    }))
}
}
  )},[]);
  return (
    <React.StrictMode>
      <BrowserRouter>
    {/* <Router> */}
      <Routes>
          <Route path="/story/:CategoryType"element={<StoriesComponent/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
              <Route path='/signIn' element={<Button
              className='login-button'
              children="logIn"
              onClick={()=>console.log("you clicked")
              }/>}/>
          <Route path="/post"element={<Postlist />}/> 
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </React.StrictMode>
  );
}
export default App;
// const Container=styled.div`
// `;
