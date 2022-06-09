import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import resume from "../assets/resume/resume.pdf";
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
        <h1>¡Hola! Mi nombre es Nahuel</h1>
        <p>
          Soy Desarrollador Frontend. He trabajado de manera independiente
          utilizando tecnologías como React, Next Js, JavaScript, Node, Express
          CSS, HTML, etc.
        </p>
        <p>
          Actualmente me encuentro en la búsqueda de mi primer trabajo como
          desarrollador web dentro del mundo IT.
        </p>
      </div>
      <a href={resume} download className={darkMode ? "HomeLightMode" : "HomeDarkMode"} target="blank" >
        Download my resume
      </a>
    </div>
  );
};

export default Home;
