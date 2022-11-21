import React from "react";
import "./ExperienceCard.css";

function JobCard(props) {
  const theme = props.theme;
  const job = props.job;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid ${job.borderColor}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assets/images/${job.logo}`)}
          alt={`Logo for ${job.company}`}
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {job.company}
              </h3>
            </a>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              {job.title}
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {job.location}
            </p>
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {job.duration}
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {job.description}
        </p>
      </div>
    </div>
  );
}

export default JobCard;
