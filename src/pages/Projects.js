import React, { useContext, useEffect, useState } from "react";
import "./stylesheets/Projects.css";

// Context.
import { MyContext } from "../context/MyContext";

// React spinners.
import ClipLoader from "react-spinners/ClipLoader";

const Projects = () => {
  const [Loading, setLoading] = useState(true);
  const { cardDarkMode } = useContext(MyContext);

  // All projects.
  const projects = [
    {
      title: "Rick and Morty",
      description: "Esta aplicación es un ejemplo simple de cómo usar axios para realizar una solicitud a un servidor.",
      image: "/images/RickAndMorty.png",
      link: "https://rickandmorty-fawn-five.vercel.app/",
      github: "https://github.com/almanoduerme/rickandmorty",
    },
    {
      title: "Github User Finder",
      description: "Se trata de una aplicación que permite buscar un usuario en Github y obtener su información.",
      image: "/images/GithubUserFinder.png",
      link: "https://githubuserfinder-tawny.vercel.app/",
      github: "https://github.com/almanoduerme/githubuserfinder",
    },
    {
      title: "Lyrics Finder",
      description: "Aplicación web hecha en React. Es un buscador de letras de canciones. Consumí una API de Lyrics OVH.",
      image: "/images/LyricsFinder.png",
      link: "https://lyricsfinder-chi.vercel.app/",
      github: "https://github.com/almanoduerme/lyricsfinder",
    },
    {
      title: "Music Store",
      description:
        "Aplicación web creada con ReactJS. En la misma se utiliza Firebase para almacenar el stock de productos.",
      image: "/images/MusicStore.png",
      link: "https://coderhouse-react-six.vercel.app/",
      github: "https://github.com/almanoduerme/coderhouse-react/",
    },
    {
      title: "Color Flipper App",
      description: "El color del fondo de la página cambia al hacer click en el botón. El resultado es un color aleatorio.",
      image: "/images/ColorFlipperApp.png",
      link: "https://colorflipperapp.vercel.app/",
      github: "https://github.com/almanoduerme/colorflipperapp",
    },
    {
      title: "Form Validation",
      description:
        "Aplicación web creada con ReactJS. Se utiliza Formik con Yup para validar los campos.",
      image: "/images/FormValidation.png",
      link: "https://formwithformik.vercel.app/",
      github: "https://github.com/almanoduerme/formwithformik",
    },
    {
      title: "Calculator",
      description:
        "Aplicación web creada con JavaScript. Se utilizan funciones y operadores matemáticos.",
      image: "/images/Calculator.png",
      link: "https://calculator-roan-pi.vercel.app/",
      github: "https://github.com/almanoduerme/calculator",
    },
    {
      title: "Tuitah",
      description:
        "Aplicación web creada con JavaScript. Simula una interacción de Twitter (similar a un To-Do List).",
      image: "/images/Tuitah.png",
      link: "https://almanoduerme.github.io/proyectofinalcoderhouse/",
      github: "https://github.com/almanoduerme/proyectofinalcoderhouse",
    },
    {
      title: "La Pucha Design",
      description:
        "Sitio web estático creado con HTML, CSS y JavaScript. El mismo fue un proyecto pago por CoderHouse.",
      image: "/images/LaPuchaDesign.png",
      link: "https://almanoduerme.github.io/lapuchadesign/",
      github: "https://github.com/almanoduerme/lapuchadesign",
    },
    {
      title: "Valorant Random Map",
      description:
        "Esta aplicación fue desarrollada con JavaScript. Se simula la API de Valorant para obtener un mapa aleatorio.",
      image: "/images/ValorantRandomMap.png",
      link: "https://almanoduerme.github.io/randommap/",
      github: "https://github.com/almanoduerme/randommap",
    },
    {
      title: "Chocodulce;",
      description:
        "Este proyecto fue la entrega final de 'Desarrollo Web' dictado en CoderHouse.",
      image: "/images/Chocodulce.png",
      link: "https://almanoduerme.github.io/chocodulce/",
      github: "https://github.com/almanoduerme/chocodulce",
    },
  ];

  // Loading spinner.
  const override = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Projects" style={cardDarkMode}>
      <div className="title">
        <h1 className="project-title">Projects</h1>
      </div>

      {Loading ? (
        <div style={override}>
          <ClipLoader color="red" size={90} css={override} />
        </div>
      ) : (
        <>
          <div className="projects-container">
            {projects.map((project, key) => (
              <div className="project-container" key={key}>
                <h2 className="project-title ">{project.title}</h2>
                <img
                  className="project-image"
                  src={project.image}
                  alt="project"
                />
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-links">
                  <a
                    target="blank"
                    className="project-link"
                    href={project.github}
                  >
                    GITHUB
                  </a>
                  <a
                    target="blank"
                    className="project-link"
                    href={project.link}
                  >
                    LIVE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
