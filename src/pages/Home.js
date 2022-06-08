import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import cv from "../cv.pdf";
import "./stylesheets/Home.css";

const Home = () => {
  // Object with styles.
  const HomeStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const HomeTextContainer = {
    margin: "0 auto",
  };

  const { darkMode } = useContext(MyContext);

  return (
    <div style={HomeStyle} className="Home">
      <div style={HomeTextContainer} className="HomeTextContainer">
        <h1>Hi, I'm Nahuel Alfredo Gómez</h1>
        <p>
          I'm a web developer based in Buenos Aires, Argentina. I'm currently
          looking for my first job as a Web Developer. I'm currently working on
          my first project, a website for a local company.
        </p>
      </div>
      <a href={cv} download className={darkMode ? "HomeLightMode" : "HomeDarkMode"} target="blank">
        Download my resume
      </a>
    </div>
  );
};

export default Home;
