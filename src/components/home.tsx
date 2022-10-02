import React from 'react'
import styled from 'styled-components';
import Post from './post';

function home() {
  return (
    <Container>
        <Section>
            {/* <Story/> */}
            <Post/>
        </Section>
        <Sect>
            {/* <Contact/>  */}
        </Sect>
    </Container>
  )
}

export default home
const Container=styled.div``;
const Section=styled.div``;
const Sect=styled.div``;
