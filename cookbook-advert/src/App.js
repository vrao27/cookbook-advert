import Recipes from "./components/Recipes/Recipes";
import recipeSlide from "./components/recipeSlide";
import Navbar, { NavLink } from "./components/Navbar";

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
