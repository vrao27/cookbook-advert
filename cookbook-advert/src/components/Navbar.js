import { NavLink } from "react-router-dom";
import theRecipesDropdown from "./RecipeDropdown";

const Navbar = () => {
  return (
    <nav className="nav-recipes">
      <ul className="nav-link">
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Recipes">
            <theRecipesDropdown />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
