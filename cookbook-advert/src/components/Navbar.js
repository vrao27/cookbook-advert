import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-recipes">
      <ul className="nav-link">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="">About</NavLink>
        </li>
        <li>
          <NavLink to="">Recipes</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
