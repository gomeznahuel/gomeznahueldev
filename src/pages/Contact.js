import React, { useContext } from "react";
import "./stylesheets/Contact.css";
import { MyContext } from "../context/MyContext";

const Contact = () => {
  const { darkMode } = useContext(MyContext);

  const linkDarkMode = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
    transition: "background-color 0.5s ease-in-out",
    fontWeight: "bold",
    fontSize: "1.4rem",
  };

  return (
    <div className="ContactContainer">
      <div className="Contact">
        <h1>WANNA GET IN TOUCH?</h1>
        <p>
          I am always open to discussing new projects, and opportunities to work
          with you.
        </p>
        <p> Feel free to reach out to me at: </p>
        <p>
          <a href="mailto:ngomezdw@gmail.com" style={linkDarkMode}>
            ngomezdw@gmail.com
          </a>
        </p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </div>
  );
};

export default Contact;
