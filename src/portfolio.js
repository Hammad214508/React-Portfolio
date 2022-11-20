/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the default cursor
  googleTrackingID: "UA-174238252-2",
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "0",
      name: "YOG4LIFE SOCIAL APP",
      url: "https://github.com/kevalvavaliya/Yog4Life",
      description:
        "An app for helping people their healthy life. Yog4Life Has a feed feature which is help to get information from the folks, Yog4Life has an anonymous chat room to get connected with the world.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "BAUDDIK-GEEKS PORTFOLIO",
      url: "https://github.com/Bauddhik-Geeks/Bauddhik-Geeks.github.io",
      description:
        "Awesome Community Portfolio website for Bauddhik-Geeks community",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "13",
      name: "Swag Store",
      url: "https://github.com/harikanani/e-commerce-frontend",
      description:
        "An E-commerce website built using MERN[Mongo, Express, React, Node] stack and we have also added stripe payment gateway integration [in test mode].",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "Bloggify",
      url: "https://github.com/harikanani/Bloggify",
      description: "A Simple REST API for Blog Application.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "Stargazzers",
      url: "https://github.com/harikanani/stargazers",
      description: "An Unofficial API for GitHub Repo Stars Count",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description: "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description: "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
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
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description:
        "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  projectsHeader,
  projects,
};
