import React,{useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './firebase/firebase';
import { useDispatch } from 'react-redux';
import { setLogIn } from './reducers/userSlice';
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
       <Header />
       
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
      
     
    </Router>
    </Container>
  )
}
export default App;
const Container=styled.div`



`;
