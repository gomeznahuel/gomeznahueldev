import React from "react";
import "./ResumeData.css";

const ResumeData = () => {
  const languagesAndTools = [
    {
      name: "- React",
      url: "https://reactjs.org/",
    },
    {
      name: "- JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "- Node Js",
      url: "https://nodejs.org/en/",
    },
    {
      name: "- Express",
      url: "https://expressjs.com/",
    },
    {
      name: "- jQuery",
      url: "https://jquery.com/",
    },
    {
      name: "- SQL",
      url: "https://www.w3schools.com/sql/",
    },
    {
      name: "- SASS",
      url: "https://sass-lang.com/",
    },
    {
      name: "- HTML",
      url: "https://www.w3schools.com/html/",
    },
    {
      name: "- CSS",
      url: "https://www.w3schools.com/css/",
    },
    {
      name: "- Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      name: "- Git (Control de versiones)",
      url: "https://git-scm.com/",
    },
    {
      name: "- Adobe Photoshop",
      url: "https://www.adobe.com/products/photoshop.html",
    },
    {
      name: "- Adobe Illustrator",
      url: "https://www.adobe.com/products/illustrator.html",
    },
  ];

  return (
    <div className="ResumeData">
      <h1 className="ResumeTitle">Nahuel Gómez</h1>
      <h2 className="ResumeSubtitle">Web Developer</h2>
      <div className="PersonalProfile">
        <h3>PERFIL PERSONAL</h3>
        <p>
          He descubierto mi vocación y pasión por el Desarrollo Web. Soy una
          persona proactiva y estoy en continuo aprendizaje de conocimientos
          técnicos. Me considero un apasionado en lo que respecta a la
          resolución de problemas, generando valor y aceptando los desafíos para
          el logro de los objetivos.
        </p>
      </div>
      <div className="skillsAndAbilities">
        <h3>APTITUDES Y HABILIDADES</h3>
        <p>- Capacidad de pensamiento independiente y autodidacta.</p>
        <p>- Capacidad de trabajo en equipo y de comunicación. </p>
        <p>
          - Proactivo en la resolución de problemas y en la búsqueda de
          soluciones para los inconvenientes existentes.
        </p>
        <p>
          - Cada proyecto lo veo como un desafío para fortalecer mis habilidades
          como desarrollador.{" "}
        </p>
      </div>

      <div className="languagesAndTools">
        <h3>LENGUAJES Y HERRAMIENTAS</h3>
        <ul>
          {languagesAndTools.map((languageAndTool) => (
            <li key={languageAndTool.name}>
              <a href={languageAndTool.url}>{languageAndTool.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="ContactInformation">
        <h3>INFORMACIÓN DE CONTACTO</h3>

        <a href="https://www.gomeznahuel.com.ar" target="blank">
          https://www.gomeznahuel.com.ar
        </a>
        <a href="mailto:ngomezdw@gmail.com">ngomezdw@gmail.com</a>
        <a href="https://www.linkedin.com/in/gomeznahuel/" target="blank">
          Linkedin
        </a>
        <a href="tel:+5491169732476">+5491169732476</a>
      </div>
    </div>
  );
};

export default ResumeData;