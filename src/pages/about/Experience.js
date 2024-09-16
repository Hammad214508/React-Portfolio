import React from "react";
import Header from "../../components/header/Header";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                About Me
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                Work Experience and Education
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I am a Computer Science graduate from the University Warwick
                currenty working as a Software Engineer at Sainsbury's. I love
                doing projects on my own to make an impact in the real world
                using different tools and programming languages.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion theme={theme} />
    </div>
  );
}

export default Experience;
