import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { motion } from "framer-motion";
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
    <motion.div style={HomeStyle} className="Home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} duration={2} >
      <div style={HomeTextContainer} className="HomeTextContainer">
        <h1>¡Hola! Mi nombre es Nahuel</h1>
        <p style={{ marginBottom: "10px" }}>
          Soy Desarrollador Frontend con conocimientos en Backend. Actualmente
          busco formar parte de un equipo en el que pueda aportar soluciones,
          aprender tecnologías nuevas y mejorar mis habilidades técnicas.
        </p>
        <p>
          Me considero una persona responsable, sociable, amable y de rápido
          aprendizaje. Poseo un nivel de inglés intermedio, el cual utilizo
          diariamente para leer documentación técnica y desarrollar
          aplicaciones.
        </p>
      </div>
      <motion.a href={resume} download className={darkMode ? "HomeLightMode" : "HomeDarkMode"} target="blank" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} >
        Descargar CV
      </motion.a>
    </motion.div>
  );
};

export default Home;
