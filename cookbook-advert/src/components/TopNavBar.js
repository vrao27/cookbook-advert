import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function TopNavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <Link to="/recipe/1">R1</Link>
            <Link to="/recipe/2">R2</Link>
            <Link to="/recipe/3">R3</Link>
          </div>
        </div>
      </div>
    </>
  );
}
