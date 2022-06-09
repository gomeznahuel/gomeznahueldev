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
        <h1>¿Te gustaría contactarte conmigo?</h1>
        <p>
        Estoy dispuesto a conversar sobre nuevos proyectos y oportunidades de trabajo.
        </p>
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
