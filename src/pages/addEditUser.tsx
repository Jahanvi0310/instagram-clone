import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Loader } from "semantic-ui-react";
import db,{storage} from "../firebase/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { addDoc, collection, getDoc, serverTimestamp ,doc,updateDoc,setDoc} from "firebase/firestore";
// import e from "express";

const initialState:any = {
  caption: "",
  bgColor: "",
  info: "",
  textColor: "",
  type: "",
};
const AddEditUser = () => {
  const [data, setData] = useState(initialState);
  const { caption, bgColor, textColor, type } = data;
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);
  const [errors, setErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const {id}= useParams(); 
  const navigate = useNavigate();
    useEffect(()=>{
        id && getSingleUser();
    },[id])
    const getSingleUser=async()=>{
        const docRef=doc(db,"story",id);
        const snapshot=await getDoc(docRef);
        if(snapshot.exists()) {
            setData({...snapshot.data()});
        }
    }
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("upload is paused");
              break;
            case "running":
              console.log("upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const validate = () => {
    let errors: any = {};
    if (!caption) {
      errors.caption = "caption is required";
    }
    if (!bgColor) {
      errors.bgColor = "bgColor is required";
    }
    if (!textColor) {
      errors.textColor = "textColor is required";
    }
    if (!type) {
      errors.type = "type is required";
    }
    return errors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let errors: any = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    setIsSubmit(true);
    // if(!id){
    //  try{
      console.log("hyy");

    await addDoc(collection(db, "story"), {
        ...data,
        timestamp: serverTimestamp(),
      }
      ); 
      navigate("/home",{state:{data:data}});


    //  } catch(error){
    //   console.log(error);
    //  }
    // }else{
    //   try{
    //     await updateDoc(doc(db, "story",id), {
    //       ...data,
    //       timestamp: serverTimestamp(),
    //     }); 
    //    } catch(error){
    //     console.log(error);
    //    }
    // }
 
  
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Grid
        centered
        verticalAlign="middle"
        columns="3"
        style={{ height: "80vh" }}
      >
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div>
              {isSubmit ? (
                <Loader active inline="centered" size="huge" />
              ) : (
                <>
                  {/* <b>{id? "update story":"add story"}</b> */}
                  <Form  onSubmit={handleSubmit}>
                    <Form.Input
                      label="caption"
                      error={
                        errors.caption ? { content: errors.caption } : null
                      }
                      placeholder="enter caption"
                      name="caption"
                      onChange={handleChange}
                      value={caption}
                      autoFocus
                    />

                    <Form.Input
                      label="bgColor"
                      error={
                        errors.bgColor ? { content: errors.bgColor } : null
                      }
                      placeholder="enter caption"
                      name="bgColor"
                      onChange={handleChange}
                      value={bgColor}
                    />
                    {/* <Form.Input
                      label="info"
                      error={errors.info ? { content: errors.info } : null}
                      placeholder="enter info"
                      name="info"
                      onChange={handleChange}
                      value={info}
                    /> */}
                    <Form.Input
                      label="textColor"
                      error={
                        errors.textColor ? { content: errors.textColor } : null
                      }
                      placeholder="enter textColor"
                      name="textColor"
                      onChange={handleChange}
                      value={textColor}
                    />
                    {/* <Form.Input
                      label="type"
                      error={errors.type ? { content: errors.type } : null}
                      placeholder="imgCaption or typeImagePost"
                      name="type"
                      onChange={handleChange}
                      value={type}
                    /> */}
                    <Form.Input
                      label="upload"
                      type="file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                    <Button
                      primary
                      type="submit"
                      disabled={progress !== null && progress < 100}
                    >
                      Submit
                    </Button>
                  </Form>
                </>
              )}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default AddEditUser;
