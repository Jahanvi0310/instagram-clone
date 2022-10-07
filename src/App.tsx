import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/home';

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
