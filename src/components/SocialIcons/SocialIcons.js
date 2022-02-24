import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import './SocialIcons.css';

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="https://www.linkedin.com/in/gomeznahuel/" target="blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/almanoduerme?tab=repositories" target="blank">
        <SiGithub />
      </a>
    </div>
  );
}
