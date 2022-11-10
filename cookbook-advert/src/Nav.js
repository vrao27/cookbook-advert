import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Recipes } from "./components/Recipes";
import { Contact } from "./components/Contact";

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
            <NavLink to="">Contact</NavLink>
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
