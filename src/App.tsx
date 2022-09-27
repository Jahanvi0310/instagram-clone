import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Input from './components/input'

function App() {
  return (
    <Router>
      <Input/>
    </Router>
  );
}

export default App;
