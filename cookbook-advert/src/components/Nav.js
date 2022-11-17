import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Recipes } from "./Recipes";
import { Contact } from "./Contact";
import { NotFound } from "./NotFound";
import "./nav.css";

export const Nav = ({ group4Slides }) => {
  // console.log(" ", group4Slides);
  return (
    <div id="navTop">
      <nav className="nav-container">
        <h2>
          <NavLink className="nav-link" to="/">
            Group4Kitchen
          </NavLink>
        </h2>
        <ul className="link-container">
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="nav-link" to="/recipes">
              Recipes
            </NavLink>
          </li> */}
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                Detail<i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <NavLink to="/recipes/1">R1</NavLink>
                <Link to="/recipes/2">R2</Link>
                <Link to="/recipes/3">R3</Link>
                <Link to="/recipes/4">R4</Link>
                <Link to="/recipes/5">R5</Link>
                <Link to="/recipes/6">R6</Link>
              </div>
            </div>
          </li>

          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home group4Slides={group4Slides} />} />
        <Route path="/about" element={<About />} />
        {/* <Route
          path="/recipes"
          element={<Recipes group4Slides={group4Slides} />}
        /> */}
        <Route
          path="/recipes/:id"
          element={<Recipes group4Slides={group4Slides} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
