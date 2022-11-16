import React, { useState, useEffect } from "react";
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
    const story = Object.keys(state).map(() => {
      if (state.id === id) {
        return {
          content: ({ story ,action, isPaused }) => {
            return (
              <div>
                <div className="w-screen flex justify-center items-center ">
                  {category.type=='video'? 
                     (<video width={1050} controls>
                     <source src={category.img} className="rounded-2xl h-12" />
               </video>):(<img
                  src={category.img}
                  className="p-[5%] bg-black border max-w-[40%] max-h-[30%] h-1/2 mt-2 rounded-md"
                />)
                }  
                </div>
                <span
                  className=" font-bold center text-5xl  ml-[50%]"
                  style={{
                    color: category.textColor,
                    backgroundColor: category.backgroundColor,
                  }}
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
