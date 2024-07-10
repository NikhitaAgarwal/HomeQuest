import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{ background: "white" }}>
      <p className="navbar-brand">HomeQuest</p>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        style={{ background: "white" }}
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeclassname="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/property"
              activeclassname="active"
            >
              Property
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              activeclassname="active"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
