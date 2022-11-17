import { Recipe } from "./Recipe";
import { useParams } from "react-router-dom";

export const Recipes = ({ group4Slides }) => {
  const { id } = useParams();

  // console.log(group4Slides);

  const index = id - 1;
  // console.log(" ", index);
  const item = group4Slides[id - 1];
  // console.log(" ", item);

  // if (!item) {
  //   return "Loading";
  // }

  return (
    item && (
      <>
        <div>
          <Recipe key={index} item={item} />;
        </div>
      </>
    )
  );
};
