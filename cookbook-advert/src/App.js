import Recipes from "./components/Recipes/Recipes";
import recipeSlide from "./components/recipeSlide";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <h1>CookBook</h1>
      <Recipes />
      <Navbar />
    </>
  );
}

export default App;
