import Recipes from "./components/Recipes/Recipes";
import RecipeSlide from "./components/RecipeSlide";
import Navbar, { NavLink } from "./components/Navbar";
import { Headerimg } from "./assets/Headerimg";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <Headerimg />
      <Navbar />
      <Recipes />
      <RecipeSlide />
      <ScrollButton />
    </>
  );
}

export default App;
