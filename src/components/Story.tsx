import { type } from '@testing-library/user-event/dist/type';
import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import Stories from './Stories';
import {ITask} from '../Interface';


const Story=()=>{
const[selected,setselected]=useState<ITask[]>([]);
useEffect(()=>{
const suggestion:ITask[]=[
    {
        id:0,
        name:"pulkit",
        
    },
    {
        id:1,
        name:"pulkit",
    },
    {
        id:2,
        name:"pulkit",
    },
    {
        id:3,
        name:"pulkit",
    },


];
setselected(suggestion);
},[]);
    return(<>
    <Container>
{selected.map(profile=>(
    <Stories/>
)

)}
    </Container>
    </>

    )
}
export default Story;
const Container=styled.div``;