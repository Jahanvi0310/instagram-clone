import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader ,Container,Card,Image} from "semantic-ui-react";
import { storage, db } from "../firebase/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { onSnapshot,collection } from "firebase/firestore";
import { borderRadius } from "@mui/system";


const Homee = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(false);
    const navigate=useNavigate(); 
    useEffect(()=>{
        setLoading(true);
        const unsub=onSnapshot(collection(db,"users"),(snapshot)=>{
            let list=[];
            snapshot.docs.forEach((doc)=>{
                list.push({id:doc.id,...doc.data()})
            })
            setUsers(list);
            setLoading(false);
        },(error)=>{
            console.log(error);
        })
        return ()=>{
            unsub();
        };
    },[])
  return (
    <Container>
        <Grid columns={12}>
        {users && users.map((item)=>(
            <Grid.Column>
                <Card key={item.id}>
                    <Card.Content>
                    <Image src={item.img}
                    size="medium"
                    style={{
                        height:"150px",
                        width:"150px",
                        borderRadius:"50%"
                    }}> 
                    </Image> 
                    </Card.Content>
                </Card>
            </Grid.Column>
        ))}
        </Grid>
    </Container>
  )
}

export default Homee
