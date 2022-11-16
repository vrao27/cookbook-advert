import { Recipe } from "./Recipe";
import { Link, Route, Routes } from "react-router-dom";

export const Recipes = ({ group4Slides }) => {
  return (
    <>
      <div>
        {group4Slides.map((item) => {
          return <Recipe item={item} />;
        })}
      </div>
    </>
  );
};
