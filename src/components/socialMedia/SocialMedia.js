import React from "react";
import "./SocialMedia.css";

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Hammad214508",
  linkedin: "https://www.linkedin.com/in/hammad-muhammad-mehmood-7460a0150/",
  gmail: "hammadmuhammad15@gmail.com",
};

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href={socialMediaLinks.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={socialMediaLinks.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${socialMediaLinks.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
    </div>
  );
}
