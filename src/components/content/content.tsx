import React from "react";
import "./content.scss";

import Header from "../header/header";
import Folder from "../folder/folder";
import ProjectCard from "../projectCard/projectCard";

let projects = [
  {
    title: "Sintex",
    tasks: 47,
    finishedTasks: 26,
    color: "#985BFF"
  },
  {
    title: "Tetrion",
    tasks: 21,
    finishedTasks: 7,
    color: "#FF5B5B"
  },
  {
    title: "Petron",
    tasks: 16,
    finishedTasks: 14,
    color: "#90C335"
  }
];

let folders = [
  {
    name: "Invoices",
    showNotification: false
  },
  {
    name: "Customers",
    showNotification: true
  }
];

export default function Content() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="content">
        <div className="left">
          <div className="recent-folders-section">
            <h3 className="text">recent folders</h3>
            <div className="folders">
              {folders.map((folder, index) => (
                <Folder
                  key={index}
                  name={folder.name}
                  showNotification={folder.showNotification}
                />
              ))}
            </div>
          </div>
          <div className="projects-section">
            <h3 className="text">projects</h3>
            <div className="projects-list">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  tasks={project.tasks}
                  finishedTasks={project.finishedTasks}
                  color={project.color}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="text">your tasks</h3>
        </div>
      </div>
    </div>
  );
}
