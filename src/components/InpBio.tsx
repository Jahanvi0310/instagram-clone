import React,{useState} from 'react'
import styled from "styled-components";
const InpBio = (props) => {
    const [inp,setInp]=useState();
    const sub=(e)=>{
        e.preventDefault();
        console.log(props.bio);
    }
    const change=(e:any)=>{
        setInp(e.target.value);
        props.setBio(inp);
    }
  return (
    <Container>
        <div className="max-w-6xl mx-5 p-10 xl:mx-auto">
        <div className='flex'>
        <textarea placeholder='ADD BIO' className='w-full h-full' onChange={change}/>
        {/* <p>hello world</p> */}
        <button type='submit' onSubmit={sub} className="border-none">SUBMIT</button>
        </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
  position: fixed;
  height: 30px;
  position: fixed;
  top: 7rem;
  border: 1px solid rgba(219, 219, 219, 1);
  box-shadow: 3px 1px 2px 0 rgba(0 0 0 /0.05);
`;
export default InpBio
