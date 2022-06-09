import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import { motion } from "framer-motion"
import "./stylesheets/Contact.css";

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
    <motion.div className="ContactContainer" initial={{opacity: 0}} animate={{opacity: 1}} duration={2}>
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
    </motion.div>
  );
};

export default Contact;
