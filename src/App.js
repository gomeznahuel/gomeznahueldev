import React, { useContext, useEffect } from "react";
import { Router } from "./Router";
import { MyContext } from "./context/MyContext";
import "./App.css";

export default function App() {
  const { style, setDarkMode } = useContext(MyContext);

  useEffect(() => {
    localStorage.getItem("darkMode") === "true"
      ? setDarkMode(true)
      : setDarkMode(false);
  }, []); // eslint-disable-line

  return (
    <>
      <div className="App" style={style}>
        <Router />
      </div>
    </>
  );
}
