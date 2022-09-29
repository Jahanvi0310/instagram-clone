import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
const App=()=>{
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
