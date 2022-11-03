import React, { useState, useEffect } from "react";
import { useParams, useNavigate ,Route,Navigation, useLocation} from "react-router-dom";
import category from "../datasource/category";
import { storage, db } from "../firebase/firebase";
// import 'rxjs/Rx';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'
import Stories from "react-insta-stories";
import { Observable } from "@firebase/util";
// import Storydata from "../datasource/storydata";
function StoriesComponent() {
  const {state} = useLocation();
  const params = useParams();
  function gobackToHomePage() {
    navigate("/");
  }
  const navigate = useNavigate();
  function renderstories() {
  
const { users,caption} = state;
    // const users=params.users;
    // console.log(users);
    // const CategoryType = params.caption;
    // const {users}=Route.params
    // console.log(CategoryType);
    // users: {JSON.stringify(Navigation.getParam('users'))}
    const story=  users.map((Item) => {
      // const i=0;
      // console.log({Item});
      if(Item.caption==caption){
        return {
          content: ({ action, isPaused }:any) => {
            return (
              <div className="w-screen h-screen flex justify-center items-center">
                <div
                  className="w-full max-w-screen-lg bg-no-repeat h-4/5  bg-center  flex justify-center items-center flex-col"
                  style={{ backgroundImage: `url(${Item.img})`}}
                >
                  <div
                    className="font-bold mt-0"
                    style={{ color: Item.textColor}}
                  >
                    <span>{Item.caption}</span>
                  </div>
                </div>
              </div>
            );
        }}}
  })
   return story
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
