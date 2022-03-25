import React, { useContext } from "react";

// React Icons.
import { BsSun, BsMoonFill } from "react-icons/bs";

// Context.
import { MyContext } from "../../context/MyContext";

// Stylesheet.
import "./DarkMode.css";

const DarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(MyContext);

  return (
    <li className="darkModeIcon" onClick={toggleDarkMode}>
      {darkMode ? <BsSun /> : <BsMoonFill />}
    </li>
  );
};

export default DarkMode;
