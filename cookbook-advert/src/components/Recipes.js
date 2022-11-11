import { Recipe } from "./Recipe";

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
