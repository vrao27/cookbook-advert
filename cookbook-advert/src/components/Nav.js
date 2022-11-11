import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Recipes } from "./Recipes";
import { Contact } from "./Contact";

export const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        {/* <h2>Group4Kitchen</h2> */}
        <ul className="nav-link">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
