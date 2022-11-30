import React from "react";
import THGCard from "../../components/experienceCard/thg.js";
import JobCard from "../../components/experienceCard/JobCard.js";
import EducationCard from "../../components/experienceCard/EducationCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const faihire = {
    company: "Fairhire",
    logo: "fairhire_logo.png",
    url: "https://fairhire.org/",
    title: "Software Engineer Intern",
    location: "London, UK",
    duration: "Jun 2020 - Aug 2020",
    borderColor: "#ee3c26",
    description: [
      "Worked as a Full-Stack Software Engineer Intern using LAMP stack and basics of AWS.",
      "Automated the manual process of adding articles summaries to the live website, which required a release every few " +
        "days, to instead read from a database and dynamically render using jQuery.",
      "Built a platform for hiring candidates in rural regions with poor network availability, reduced the number of " +
        "requests made to the backend by 60%",
      "Trained other interns to ensure they understood the overall architecture and followed good coding practices.",
    ],
  };

  const codecamp = {
    company: "Code Camp",
    logo: "codecamp_logo.png",
    url: "https://www.codecampworld.com/",
    title: "Teacher Assistant",
    location: "London, UK",
    duration: "Jun 2019 - Jun 2020",
    borderColor: "#FBBD18",
    description: [
      "Helping children of all ages by providing 1 to 1 help at 3-daya code camps.",
      "Responsible for guiding students that were falling behind and explaining key concepts.",
      "Responsible for children safety and wellbeing while managing misbehaviour and disruption.",
    ],
  };

  const peaceoneday = {
    company: "Peace One Day",
    logo: "peace_logo.png",
    url: "https://www.peaceoneday.org/Main/",
    title: "System Tester",
    location: "Coventry, UK",
    duration: "Apr 2019 - Jun 2019",
    borderColor: "#196acf",
    description: [
      "Worked in the testing phase for the development of an mobile application.",
      "My role was to test and promote the application and discuss any bugs and improvements. ",
      "Learnt principles of good UI and developed skills like communication and critical thinking.",
    ],
  };

  const mytutor = {
    company: "My Tutor",
    logo: "tutor_logo.png",
    url: "https://www.mytutor.co.uk/",
    title: "Computer Science Tutor",
    location: "Remote",
    duration: "Oct 2018 - Apr 2019",
    borderColor: "#ee3c26",
    description: [
      "Tutored A-Levels, GCSE's and international students. Got a wide curriculum knowledge as different students had different specifications. ",
      "Researched areas of the subject I was not so confident about and learnt to be more organised and patient.",
    ],
  };

  const warwick = {
    centre: "University of Warwick",
    logo: "warwick_logo.png",
    url: "https://warwick.ac.uk/",
    qualification: "BSc Computer Science - First class",
    duration: "2018 - 2021",
    borderColor: "#196acf",
  };

  const herschel = {
    centre: "Herschel Grammar School",
    logo: "herschel_logo.png",
    url: "https://www.herschel.slough.sch.uk/",
    qualification: "A-Levels - A*A*A*A",
    duration: "2016 - 2018",
    borderColor: "#ee3c26",
  };

  const tirant = {
    centre: "Tirant Lo Blank",
    logo: "tirant_logo.png",
    url: "https://iestirantloblancgandia.es",
    qualification: "ESO - 95.4%",
    duration: "2012 - 2016",
    borderColor: "#FBBD18",
  };

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion>
          <Panel
            className="accord-panel"
            title="Work Experience"
            key="Work Experience"
          >
            <THGCard theme={theme} />
            <JobCard theme={theme} job={faihire} />
            <JobCard theme={theme} job={codecamp} />
            <JobCard theme={theme} job={peaceoneday} />
            <JobCard theme={theme} job={mytutor} />
          </Panel>
          <Panel className="accord-panel" title="Education" key="Education">
            <EducationCard theme={theme} education={warwick} />
            <EducationCard theme={theme} education={herschel} />
            <EducationCard theme={theme} education={tirant} />
          </Panel>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
