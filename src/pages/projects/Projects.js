import React from "react";
import Header from "../../components/header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. " +
    "My best experience is to create Full-Featured Web Applications, Python Scripts, and React Projects. " +
    "Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
};

const projects = [
  {
    id: "0",
    name: "Blog App",
    url: "https://github.com/Hammad214508/Blog-Application",
    description:
      "It is a social media styled application where different users can post e.g. blog posts, 'twitter' updates ...",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Django",
        iconifyClass: "logos:django-icon",
      },
      {
        name: "AWS",
        iconifyClass: "logos:aws",
      },
      {
        name: "Heroku",
        iconifyClass: "logos:heroku-icon",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
  },
  {
    id: "1",
    name: "Food AI",
    url: "https://github.com/Hammad214508/Restaurant-And-Food-recommender",
    description:
      "Web application that helps users decide where and what to eat using machine learning techniques such as collaborative filtering.",
    languages: [
      {
        name: "PHP",
        iconifyClass: "logos:php",
      },
      {
        name: "MySQL",
        iconifyClass: "logos:mysql",
      },
      {
        name: "Jquery",
        iconifyClass: "simple-icons:jquery",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
    ],
  },
  {
    id: "5",
    name: "Bitcoin Whale Alert",
    url: "https://github.com/Hammad214508/Whale-Alert",
    description:
      "Tracks a bitcoin address' activity and gives real time updates about its transactions. It " +
      "uses BotFather to notify on Telegram.",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Telegram",
        iconifyClass: "logos:telegram",
      },
    ],
  },
  {
    id: "2",
    name: "eVeg store",
    url: "https://github.com/Hammad214508/Shopping-System",
    description:
      "Redesigned the user interface for an online shopping system using guideline based " +
      "evaluation and following Nielsen's Usability Heuristics for UI Design.",
    languages: [
      {
        name: "PHP",
        iconifyClass: "logos:php",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
  },
  {
    id: "3",
    name: "Derivative Trade Application",
    url: "",
    description:
      "A prototype system to monitor derivative trade data, worked five other course-mates. " +
      "I was the project manager and responsible for the DB and testing.",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Django",
        iconifyClass: "logos:django-icon",
      },
      {
        name: "AWS",
        iconifyClass: "logos:aws",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
  },
  {
    id: "4",
    name: "Meme Maker ",
    url: "https://github.com/Hammad214508/Meme-maker",
    description:
      "It can generate memes from the user input and contributed in an open source WhatsApp bot " +
      "to make and send memes based on the texts.",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Reddit",
        iconifyClass: "logos:reddit-icon",
      },
    ],
  },
  {
    id: "16",
    name: "Portfolio Tracker",
    url: "https://github.com/Hammad214508/Portfolio-Tracker",
    description:
      "Crypto portfolio tracker to have everything one view, with additional " +
      "features allowing it to be written into a daily CSV report as well as notifying you on telegram in your phone.",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Telegram",
        iconifyClass: "logos:telegram",
      },
      {
        name: "Coinbase",
        iconifyClass: "token-branded:coinbase",
      },
      {
        name: "Binance",
        iconifyClass: "simple-icons:binance",
      },
      {
        name: "Kraken",
        iconifyClass: "token-branded:kraken",
      },
    ],
  },
  {
    id: "6",
    name: "Hiring Game",
    url: "https://github.com/Hammad214508/Hiring-Game",
    description:
      "A simple clicking game to hire interns, software engineers and senior engineers. " +
      "The is to be efficient managing their cost and value (includes a competitive mode).",
    languages: [
      {
        name: "Jquery",
        iconifyClass: "simple-icons:jquery",
      },
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
  },
  {
    id: "7",
    name: "Database System for Store",
    url: "",
    description:
      "Created a department store database system that was subject to sophisticated queries. " +
      "Managing the store's inventory, orders, collections, deliveries and staff.",
    languages: [
      {
        name: "Java",
        iconifyClass: "logos:java",
      },
      {
        name: "MySQL",
        iconifyClass: "logos:mysql",
      },
    ],
  },
  {
    id: "8",
    name: "MiniC Compiler",
    url: "",
    description:
      "Recursive descent parser for a subset of the C programming language. " +
      "Including lexing, parsing and intermediate code generation.",
    languages: [
      {
        name: "C++",
        iconifyClass: "logos:c-plusplus",
      },
      {
        name: "LLVM",
        iconifyClass: "simple-icons:llvm",
      },
      {
        name: "C",
        iconifyClass: "logos:c",
      },
    ],
  },
  {
    id: "8",
    name: "Intrusion detection system",
    url: "",
    description:
      "Produces a report of all the malicious activity detected from data packets. " +
      "This includes SYN attack detection, ARP poisoning attack and blacklisted URL.",
    languages: [
      {
        name: "C",
        iconifyClass: "logos:c",
      },
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
    ],
  },
  {
    id: "9",
    name: "Resolution proof solver",
    url: "",
    description:
      "Resolution theorem prover, given a propositional formula it converts it into CNF and applies the resolution algorithm " +
      "to prove if the formula is a tautology.",
    languages: [
      {
        name: "Prolog",
        iconifyClass: "vscode-icons:file-type-prolog",
      },
    ],
  },
  {
    id: "10",
    name: "Mastermind",
    url: "",
    description:
      "Console program for the board-game Mastermind. " +
      "The computer can solve a game in 5 moves or less utilising Knuth's mastermind algorithm.",
    languages: [
      {
        name: "Haskell",
        iconifyClass: "logos:haskell-icon",
      },
    ],
  },
  {
    id: "11",
    name: "Snake.math()",
    url:
      "https://drive.google.com/file/d/1sIUKzm1TrzdEOAfWT9f1_xCgQLIhv-D2/view",
    description:
      "Snake game with A-Level Mathematics questions, " +
      "making it a fun learning tool for students struggling with this subject.",
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "MySQL",
        iconifyClass: "logos:mysql",
      },
    ],
  },
  {
    id: "11",
    name: "Robot Arm",
    url: "",
    description:
      "Controlled a robot arm to solve the Tower of Hanoi problem minimising the number of moves required",
    languages: [
      {
        name: "C",
        iconifyClass: "logos:c",
      },
      {
        name: "Robot Arm",
        iconifyClass: "game-icons:mechanical-arm",
      },
    ],
  },
  {
    id: "12",
    name: "Robot Maze",
    url: "",
    description:
      "Programmed a controller for a robot in a maze. " +
      "Improved it by storing data from the first run to traverse the maze more efficiently the second time.",
    languages: [
      {
        name: "Java",
        iconifyClass: "logos:java",
      },
    ],
  },
  {
    id: "13",
    name: "Witter",
    url: "",
    description:
      "Implemented data structures to store data for a fictional Twitter clone called 'Witter'. " +
      "Optimising finding common followers, trending weets, most popular users...",
    languages: [
      {
        name: "Java",
        iconifyClass: "logos:java",
      },
    ],
  },
];

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.map((project) => {
          return <ProjectCard repo={project} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
