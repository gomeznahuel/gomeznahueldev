import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  // Dark mode state.
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle style.
  const style = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#333",
    transition: "background-color 0.5s ease-in-out",
  };

  // Dark mode toggle function.
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Save dark mode state to local storage.
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <MyContext.Provider
      value={{ style, darkMode, setDarkMode, toggleDarkMode }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
