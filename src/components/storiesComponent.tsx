import React, { useState, useEffect } from "react";
import { onSnapshot, collection, deleteDoc, doc } from "firebase/firestore";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Stories from "react-insta-stories";
function StoriesComponent() {
  const params = useParams();
  const { state } = useLocation();

  const { category, id } = state;

  function gobackToHomePage() {
    navigate("/home");
  }
  const navigate = useNavigate();
  function renderstories() {

    const story = Object.keys(state).map((Item) => {
      if (state.id === id) {
        return {
          content: ({ action, isPaused }: any) => {
            return (
              <div className="snap-x">
                <div className="w-screen  flex justify-center items-center ">
                  <div
                    className="w-4/5 snap-center h-full bg-no-repeat md:max-h-auto sm:max-h-auto  bg-center flex justify-center items-center flex-col"
                  >
                    <img src={category.img}></img>
                  </div>
                </div>
                <span
                    className=" font-bold center text-5xl  ml-[45%] mt-[20%]"
                    style={{ color: category.textColor, backgroundColor:category.backgroundColor}}
                  >
                    {category.caption}
                  </span>
               
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
