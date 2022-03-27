import React, { useContext, useEffect, useState } from "react";
import "./stylesheets/Projects.css";

// Context.
import { MyContext } from "../context/MyContext";

// Image demo
import img from "../assets/img/project-demo.png";

// React spinners.
import ClipLoader from "react-spinners/ClipLoader";

const Projects = () => {
  const [Loading, setLoading] = useState(true);
  const { cardDarkMode } = useContext(MyContext);

  const projects = [
    {
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
    },
    {
      title: "Project 8",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: img,
      link: "https://www.vercel.com/",
      github: "https://www.github.com/almanoduerme",
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
