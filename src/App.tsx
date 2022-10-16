import React,{useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { setLogIn } from './reducers/userSlice';
import Button from './components/button';
import Post from './components/Post';
const App=()=>{
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
  return(
    <Container>
     <Router>
      
     
        <Routes>
            <Route path="/home" element={<Home/>}/>
              <Route path='/signIn' element={<Button
              className='login-button'
              children="logIn"
              onClick={()=>console.log("you clicked")
              }/>}/>
         
        </Routes>
    </Router>
    <Post/>
    </Container>
  )
}
export default App;
const Container=styled.div`
`;
