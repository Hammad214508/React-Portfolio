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
              style={{ textDecoration: "none" }}
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
        <div
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          <ul style={{ padding: "10px" }}>
            <li>
              Created a frontend feature that allowed the marketing team to
              create and send push notifications to targeted customers which
              resulted in higher click rate and generated more revenue.
            </li>
            <li>
              Coordinating a greenfield project to rebuild the marketing SaaS
              platform. I implemented core features of the MVP, doing both the
              frontend and backend work required using Java and React.
            </li>
            <li>
              Taken on the role of the Scrum Master for the BE work. Meeting
              with UX and the product manager to discuss the requirements,
              creating and managing the Jira board tickets which removed
              ambiguity around the task and improved new sprint estimations.
            </li>
            <li>
              Line manager for an intern. Provided training to fill the missing
              knowledge required to do the job, set up his objectives, and in
              charge of assigning work to him.
            </li>
            <li>
              Worked on various new features to improve the ECRM platform.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default THGCard;
