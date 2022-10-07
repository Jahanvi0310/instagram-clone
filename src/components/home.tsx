import React from "react";
import "./home.css";
import category from "../datasource/category";
function Home() {
  function renderCategoryitem() {
    return category.map((category) => {
      return (
        <div className="mt-2 ml-1"key={category.iconName}>
          <div className="category-outer-circle flex justify-center items-center col-span-2">
            <div className="category-inner-circle flex justify-center items-center col-span-2">
              <i className="material-icons text-3xl">{category.iconName}</i>
            </div>
          </div>
          <div className="flex ml-1 ">{category.name}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="grid grid-cols-12 border-black">{renderCategoryitem()}</div>
    </div>
  );
}

export default Home;
