import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Stories from "react-insta-stories";
import Storydata from "../datasource/storydata";
function StoriesComponent() {
  const match = useParams();
  const navigate = useNavigate();

  function renderstories() {
    const CategoryType = match.CategoryType;

    const story = Storydata[CategoryType].map((storyItem) => {
      if (storyItem.type === "imgCaption") {
        return {
          content: ({ action, isPaused }) => {
            return (
              <div className="w-screen h-screen flex justify-center items-center">
                <div
                  className="w-full h-full max-w-screen-md bg-no-repeat   bg-center  flex justify-center items-center flex-col"
                  style={{ backgroundImage: `url(${storyItem.background})` }}
                >
                  <div
                    className="font-bold mt-0"
                    style={{ color: storyItem.textColor }}
                  >
                    <span>{storyItem.caption}</span>
                  </div>
                </div>
              </div>
            );
          },
        };
      } else if (storyItem.type === "typeImagePost") {
        return {
          content: ({ action, isPaused }) => {
            return (
              <div
                className="w-full h-full bg-no-repeat border-8 bg-center flex justify-center items-center"
                style={{ backgroundColor: storyItem.backgroundColor }}
              >
                <div className="max-w-screen-md flex-col ">
                  <div
                    className="flex justify-center items-center font-bold"
                    style={{ color: storyItem.textColor }}
                  >
                    <span>{storyItem.title}</span>
                  </div>
                  <div>
                    <img src={storyItem.postImage} />
                  </div>
                  <div className="text-left font-bold ml-1">
                    <span>{storyItem.text}</span>
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
  function gobackToHomePage() {
    navigate("/");
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
