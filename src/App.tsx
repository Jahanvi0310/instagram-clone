import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './components/button';
function App() {
  return (
    <Router>
      <h1>Done with setup</h1>
      <Button/>
    </Router>
  );
}
export default App;