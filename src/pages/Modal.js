import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "./stylesheets/modal.css";

export const Modal = () => {
  const { darkMode } = useContext(MyContext);
  
  return (
    <div className="Modal">
      <p>¡Hola! Actualmente me encuentro reformando el sitio.</p>
      <NavLink to="/home">
        <button className={darkMode ? "HomeLightMode" : "HomeDarkMode"}>
          Ver versión antigua
        </button>
      </NavLink>
    </div>
  );
};
