import React from 'react';
import styled from 'styled-components';

// // import Postlist from '../components/PostList';
// import Header from '../components/Header';

const Home=()=>{
    return(
<>        

        <Container>
            
            <Section>
{/* <Postlist/> */}

              {/* <Contactstuff/> */}
            </Section>
        </Container>    
        </>
        )
}
export default Home;
const Container=styled.div`
display:grid;
grid-coloumn:span1/span1;
grid-template-coloumns:repeat(1,minmax(0,1fr));
@media(min-width:1024px){
    grid-template-coloumns:repeat(4,minmax(0,1fr));
}`;
const Section=styled.div`
grid-coloumn:span1/span1;
@media(min-width:1024px){
    grid-coloumn:span3/span3;
    margin:0 auto;
}`;