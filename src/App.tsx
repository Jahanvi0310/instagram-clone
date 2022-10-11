import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Category from './datasource/category';
import { BrowserRouter,Router,Routes, Route} from "react-router-dom";
import Home from './components/home';
import StoriesComponent from './components/storiesComponent'

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
    {/* <Router> */}
      <Routes>
          <Route path="/story/:CategoryType"element={<StoriesComponent/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
    {/* </Router> */}
    </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
