import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
const App=()=>{
  return(
    <Container>
   
<Header/>
    </Container>
  )
}
export default App;
const Container=styled.div`



`;
