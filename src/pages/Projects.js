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
      title: "Music Store",
      description:
        "Aplicación web creada con ReactJS. En la misma se utiliza Firebase para almacenar el stock de productos.",
      image: "/images/MusicStore.png",
      link: "https://coderhouse-react-six.vercel.app/",
      github: "https://github.com/almanoduerme/coderhouse-react/",
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
                  <a className="project-link" href={project.link}>
                    LIVE
                  </a>
                  <a className="project-link" href={project.github}>
                    GITHUB
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
