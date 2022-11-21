import React from "react";
import "./ExperienceCard.css";

function THGCard(props) {
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        border: `1px solid #0071C5`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <img
          className="experience-card-logo"
          src={require(`../../assets/images/thg_logo.png`)}
          alt="THG company logo"
        />
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <a
              href="https://www.thg.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                The Hut Group (THG)
              </h3>
            </a>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              Software Engineer
            </p>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              Graduate Software Engineer
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              Manchester, UK
            </p>
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              Oct 2022 - Present
            </p>
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              Aug 2021 - Sep 2022
            </p>
          </div>
        </div>
        <p
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          Coordinating a greenfield project to rebuild the marketing SaaS
          platform. I have meeting wih UX and product manager to discuss
          requiremenets and I have taken the role of the Scrum Master in the
          backend work, creating and managing the Jira board tickets which
          removed ambiguity around requirements and improved new sprint
          estimations. I have implemented core features of the MVP doing both,
          the frontend and backend working using Java and React. I also have the
          line management duties for an intern, I have provided the training
          required to fill the missing knowledge in order to do the day-to-day
          work, been setting up his objectives, and in charge of assigning work
          to him.
        </p>
      </div>
    </div>
  );
}

export default THGCard;
