import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './components/Button';

function App() {
  return (
    <Router>
     
   <Button
 className='login-button'
 children="logIn"
 onClick={()=>console.log("you clicked")}

 
   />
    </Router>
  );
}
export default App;