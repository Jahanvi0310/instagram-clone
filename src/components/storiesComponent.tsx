import React from "react";
import { useParams } from "react-router-dom";
import category from "../datasource/category";
import Stories from "react-insta-stories";
import Storydata from "../datasource/storydata";
function StoriesComponent() {
  const match = useParams();
  console.log(match);
  function renderstories(){
    const CategoryType=match.CategoryType;
  // console.log(CategoryType);
    const story = Storydata[CategoryType].map((storyItem)=>{
      return  {
        content: ({ action, isPaused }) => {
          return (
            <div
              className="story w-full h-full bg-no-repeat border-8 bg-center"
              style={{ backgroundImage: `url(${storyItem.background})` }}
            >
              <div className="border">
                <span>{storyItem.caption}</span>
              </div>
            </div>
          );
        },
      }
    });
    return story;
  }
  return (
    <div>
      <Stories stories={renderstories()} />
    </div>
  );
}

export default StoriesComponent;
