import React, { useEffect } from "react";
import Home from "./pages/Home";
import Input from "./components/Input";
import PostList from "./components/PostList";
import StoriesComponent from "./components/StoriesComponent";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { selectuser, setLogIn } from "./reducer/User/UserSlice";
import { useSelector } from "react-redux";
import SignUp from "./components/SignUp";
import AddEditUser from "./pages/AddEditUser";
const Router = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectuser);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setLogIn({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      }
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/story/:id" element={<StoriesComponent />} />
          <Route path="/" element={user ? <Home /> : <Input />} />
          <Route path="/signIn" element={<Input />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inputStory" element={<AddEditUser />} />
          <Route path="/post" element={<PostList />} />
          <Route path="/home" element={<Post />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add" element={<AddEditUser />} />
          <Route path="/update/:id" element={<AddEditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
