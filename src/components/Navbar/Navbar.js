import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import { MyContext } from "../../context/MyContext";

// Stylesheet.
import "./Navbar.css";

const Navbar = () => {
  // Context.
  const { darkMode } = useContext(MyContext);

  // NavLink style.
  const NavLinkStyle = {
    color: darkMode ? "#fff" : "#333",
    transition: "background-color 0.5s ease-in-out",
  };

  // NavLink style.
  const NavbarStyle = {
    backgroundColor: darkMode ? "black" : "#a9a9a9",
    transition: "background-color 0.5s ease-in-out",
  };

  return (
    <nav className="Navbar" style={NavbarStyle}>
      <ul>
        <li>
          <NavLink style={NavLinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={NavLinkStyle} to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink style={NavLinkStyle} to="/contact">
            Contact
          </NavLink>
        </li>
        <button className="buttonDarkMode" style={NavLinkStyle}>
          <DarkMode />
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
