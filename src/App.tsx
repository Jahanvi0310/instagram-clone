import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Postlist from './components/postlists';

function App() {
  return (
    <Router>
      <Postlist/>
    </Router>
  );
}

export default App;
