import React from "react";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <h1 className="title">Nahuel Gómez</h1>
      <h2 className="subtitle">Frontend Developer</h2>
      <p>¡Sitio en construcción!</p>
      <SocialIcons />
    </div>
  );
}
