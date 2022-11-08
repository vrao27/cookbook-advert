// import { NavLink, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Group4 from "./Group4/Group4";
import "./App.css";

function App() {
  return (
    <>
      <nav className="nav-container">
        {/* <h2>Group4Kitchen</h2> */}
        <ul className="nav-link">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">About</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Recipes</NavLink>
          </li>
          <li>
            <NavLink to="">Contact</NavLink>
          </li>
        </ul>
        {/* <Routes>
          <Route>Home</Route>
          <Route>About</Route>
          <Route>Recipes</Route>
          <Route>Contact</Route>
        </Routes> */}
      </nav>
      <Group4 />
    </>
  );
}

export default App;
