import Recipes from "./components/Recipes/Recipes";
import RecipeSlide from "./components/RecipeSlide";
import Navbar, { NavLink } from "./components/Navbar";
import { Headerimg } from "./assets/Headerimg";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Headerimg />
      <Navbar />
      <Recipes />
      <RecipeSlide />
      <ScrollToTop smooth />
    </>
  );
}

export default App;
