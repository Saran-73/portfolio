import React from "react";
import Projects from "/components/projects.jsx";

const ProjectList = () => {
  const projects = [
    {
      id: 1,
      name: "Space-tourism-website",
      png: "space-tourism.png",
      description:
        "The multipage page webiste in which users can navigate through the details. Data is used from JSON file. CSS Custom properties and utility classes are used. Keyboard navigation is employed.",
      sitelink: "https://saran-73.github.io/space-tourism-multipage-website/",
      codelink: "https://github.com/Saran-73/space-tourism-multipage-website",
      techused: "React,CSS.",
    },
    {
      id: 2,
      name: "Quizz-app",
      png: "quiz-app.png",
      description:
        " React app that has questions and options to choose, once the user chooses the options they can check for scores. Questions are fetched from an API, once the sessionn is completed they can start playing again with new questions.",
      sitelink: "https://saran-73.github.io/Quizz-React-App-using-API/",
      codelink: "https://github.com/Saran-73/Quizz-React-App-using-API",
      techused: "React,CSS.",
    },
    {
      id: 3,
      name: "To-do-list",
      png: "to-do-app.png",
      description:
        " To-do-list app built with javascript that will create new tasks, have checkbox to checkmark the completed task and the users data is stored in LocalStorage.",
      sitelink: "https://saran-73.github.io/to-do-list-app/",
      codelink: "https://github.com/Saran-73/to-do-list-app",
      techused: "HTML,CSS,Javascript",
    },
  ];

  const createCard = projects.map((x) => {
    return (
      <Projects
        key={x.id}
        image={x.png}
        sitelink={x.sitelink}
        codelink={x.codelink}
        name={x.name}
        description={x.description}
        stack={x.techused}
      />
    );
  });
  return (
    <div className="pl">
      <h1 className="pl-title" id="project-title">
        PROJECTS
      </h1>

      <div className="pl-list">{createCard}</div>
    </div>
  );
};

export default ProjectList;
