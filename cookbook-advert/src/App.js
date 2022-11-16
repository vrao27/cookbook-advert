import Recipes from "./components/Recipes/Recipes";
import RecipeSlide from "./components/RecipeSlide";
import Navbar, { NavLink } from "./components/Navbar";
import { Headerimg } from "./assets/Headerimg";

function App() {
  return (
    <>
      <Headerimg />
      <Navbar />
      <Recipes />
      <RecipeSlide />
    </>
  );
}

export default App;
