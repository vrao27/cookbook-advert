import { Recipe } from "./Recipe";
import { useParams } from "react-router-dom";

export const Recipes = ({ group4Slides }) => {
  const { id } = useParams();
  // console.log(group4Slides);
  console.log(group4Slides[id]);
  if (!group4Slides[id]) {
    return "Loading...";
  }
  return (
    <>
      <div>
        <Recipe item={group4Slides[id]} />
      </div>
    </>
  );
};
