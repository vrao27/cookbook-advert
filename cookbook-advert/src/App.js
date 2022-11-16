import Recipes from "./components/Recipes/Recipes";
import RecipeSlide from "./components/RecipeSlide";
import Navbar, { NavLink } from "./components/Navbar";

function App() {
  return (
    <>
      <h1>CookBook</h1>
      <Navbar />
      <Recipes />
      <RecipeSlide />
    </>
  );
}

export default App;
