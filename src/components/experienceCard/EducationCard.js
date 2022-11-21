import React from "react";
import "./ExperienceCard.css";

function EducationCard(props) {
  const theme = props.theme;
  const education = props.education;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${education.borderColor}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assets/images/${education.logo}`)}
          alt={`Logo for ${education.centre}`}
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <a href={education.url} target="_blank" rel="noopener noreferrer">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {education.centre}
              </h3>
            </a>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              {education.qualification}
              <br />
              {education.duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
