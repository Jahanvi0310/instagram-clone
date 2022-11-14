import React, { useEffect } from "react";
import Home from "./pages/Home";
import Input from "./components/input";
import Postlist from "./components/PostList";
import StoriesComponent from "./components/storiesComponent";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { selectuser, setLogIn } from "./reducer/User/userSlice";
import { useSelector } from "react-redux";
import SignUp from "./components/signUp";
import AddEditUser from "./pages/addEditUser";
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
          <Route path="/inp" element={<AddEditUser />} />
          <Route path="/post" element={<Postlist />} />
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
