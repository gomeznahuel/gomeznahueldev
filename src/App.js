import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { MyContext } from "./context/MyContext";
import Footer from "./components/Footer/Footer";
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
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
