import React from "react";
import "./home.css";
import category from "../datasource/category";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function redirectTostory(category){
   navigate(`/story/${category.name.toLowerCase()}`);
  }
  function renderCategoryitem() {
    return category.map((category) => {
      return (
        <div className="flex justify-center">
        <div className="mt-2 ml-1 border" key={category.iconName} onClick={()=>redirectTostory(category)}>
          <div className="category-outer-circle flex justify-center items-center col-span-2">
            <div className="category-inner-circle flex justify-center items-center col-span-2">
              <i className="material-icons text-3xl ">{category.iconName}</i>
            </div>
          </div>
          <div className="flex justify-center ">{category.name}</div>
        </div>
        </div>
      );

    });
  }
  return (
    <div>
      <div className="grid grid-cols-12">{renderCategoryitem()}</div>
    </div>
  );
}

export default Home;
