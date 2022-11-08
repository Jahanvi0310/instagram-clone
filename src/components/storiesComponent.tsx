import React, { useState, useEffect } from "react";
import { onSnapshot,collection, deleteDoc ,doc} from "firebase/firestore";
import {
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
// import { Button, Form, Grid, Loader ,Modal} from "semantic-ui-react";
// import { storage, db } from "../firebase/firebase";
import Stories from "react-insta-stories";
import { Observable } from "@firebase/util";
// import 'rxjs/Rx';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
// import Storydata from "../datasource/storydata";
// import category from "../datasource/category";
function StoriesComponent() {
  const params = useParams();
  const {state} = useLocation();
  // console.log(state);
  const { category , id } = state ;
  // console.log(id);

//  console.log(users);
  function gobackToHomePage() {
    navigate("/");
  }
  const navigate = useNavigate();
  function renderstories() {
    // console.log(users);
    // const users=params.users;
    // const CategoryType = params.caption;
    // const {users}=Route.params
    // console.log(CategoryType);
    // users: {JSON.stringify(Navigation.getParam('users'))}
    // console.log(category);
    const story = Object.keys(state).map( (Item)=>{
      // console.log(category.id);
      if (state.id === id) {
        return {
          content: ({ action, isPaused }: any) => {
            return (
              <div>
                <div className="w-screen h-screen flex justify-center items-center">
                  <div
                    className="w-full max-w-screen-lg bg-no-repeat h-4/5  bg-center  flex justify-center items-center flex-col"
                    style={{ backgroundImage: `url(${category.img})` }}
                  >
                    <div
                      className="font-bold  text-5xl"
                      style={{ color: category.textColor }}
                    >
                    <span>{category.caption}</span>
                    </div>
                  </div>
                 
                </div>
               
              </div>
            );
          },
        };
      }
    });
    return story;
  }
  return (
    <div className="flex justify-center items-center">
      <Stories
        stories={renderstories()}
        width={"100vw"}
        height={"100vh"}
        onAllStoriesEnd={() => gobackToHomePage()}
      />
    </div>
  );
}
export default StoriesComponent;
