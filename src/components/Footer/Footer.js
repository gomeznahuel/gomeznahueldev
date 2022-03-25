import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import "./Footer.css";

// React Icons
import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  // Destructure the context object from the context provider.
  const { darkMode } = useContext(MyContext);

  // Create a footer style object.
  const FooterStyle = {
    backgroundColor: darkMode ? "black" : "#a9a9a9",
    transition: "background-color 0.5s ease-in-out",
  };

  const LinkStyle = {
    color: darkMode ? "#fff" : "#333",
    transition: "background-color 0.5s ease-in-out",
    fontSize: "1.3rem",
    margin: "0.5rem",
  };

  return (
    <footer className="footer" style={FooterStyle}>
      <a style={LinkStyle} href="https://www.github.com/almanoduerme" target="blank" >
        <GrGithub />
      </a>
      <a style={LinkStyle} href="https://www.linkedin.com/in/gomeznahuel" target="blank">
        <GrLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
