import React from "react";
import JobCard from "../../components/experienceCard/JobCard.js";
import EducationCard from "../../components/experienceCard/EducationCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  const sainsburys = {
    company: "Sainsbury's",
    logo: "sainsburys.jpeg",
    url: "http://www.sainsburys.co.uk",
    title: "Software Engineer",
    location: "Manchester, UK",
    duration: "Aug 2024 - present",
    borderColor: "#FBBD18",
    description: [],
  };

  const thg = {
    company: "The Hut Group (THG",
    logo: "thg_logo.png",
    url: "https://www.thg.com/",
    title: "Full Stack Software Engineer",
    location: "Manchester, UK",
    duration: "Aug 2021 - Aug 2024",
    borderColor: "#196acf",
    description: [
      "Developed a highly scalable multitenant Microservice using Java and Springboot, leveraging a robust architecture that enables seamless product sales within Meta platforms. With this architecture, setting up new sites takes just a week, allowing for rapid expansion. To date, the system has facilitated over 7000 orders across 8 sites, with ongoing integration for additional sites currently underway.",
      "Led the backend work for a high-impact greenfield project for the complete reconstruction of a marketing SAAS platform for 300+ websites that will be sending over 12 billion emails a year.",
      "Served as Scrum Master, facilitating cross-functional collaboration between UX, product managers, and development teams to analyze requirements and streamline project execution. Implemented efficient sprint planning methodologies resulting in improved clarity and accuracy in project estimation.",
      "Provided valuable training and mentorship to junior engineers, contributing to their professional growth. Completed an internal management course, leading to the management of direct reports. Successfully assigned tasks and established clear objectives to enhance team productivity.",
      "Proficiently executed full-stack development using Java and React, ensuring timely delivery of crucial MVP features for client demos. Conducted thorough code reviews to identify and resolve issues, preventing technical debt and maintaining high coding standards.",
    ],
  };

  const faihire = {
    company: "Fairhire",
    logo: "fairhire_logo.png",
    url: "https://fairhire.org/",
    title: "Software Engineer Intern",
    location: "London, UK",
    duration: "Jun 2020 - Aug 2020",
    borderColor: "#ee3c26",
    description: [
      "Worked as a Full-Stack Software Engineer using LAMP stack and AWS.",
      "Streamlined operations by automating the manual process of adding article summaries to the live website. Replacing the need for frequent releases, I implemented a solution that utilized a database and jQuery for dynamic rendering. This improved efficiency, saving time and effort while enabling real-time updates to the website.",
      "Built a platform for hiring candidates in rural regions with poor network availability, reduced the number of requests made to the backend by 60 percent.",
      "Returned the following summer to provide comprehensive training to fellow interns, focusing on understanding the overall architecture and promoting good coding practices. Empowered them to confidently fulfill their job responsibilities and contribute effectively to projects.",
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
            <JobCard theme={theme} job={sainsburys} />
            <JobCard theme={theme} job={thg} />
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
