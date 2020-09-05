import React, { useState } from "react";
import useLiveSearch from "../../hooks/useLiveSearch";
import "./content.scss";

import Header from "../header/header";
import Folder from "../folder/folder";
import ProjectCard from "../projectCard/projectCard";
import AddProjectCard from "../addProjectCard/addProjectCard";
import TaskWrapper from "../taskWrapper/taskWrapper";

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

async function filterFolders(searchContent: string): Promise<any> {
  return folders.filter((folder) =>
    folder.name.toLowerCase().includes(searchContent.toLowerCase())
  );
}

export default function Content() {
  const [addCard, setAddCard] = useState(true);
  const [projects, setProjects] = useState([
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
  ]);

  const [searchContent, setSearchContent] = useState("");
  const filteredFolders = useLiveSearch(searchContent, filterFolders);

  let _handleOnAddNewCard = () => {
    setProjects([
      ...projects,
      {
        title: "Apple",
        tasks: 23,
        finishedTasks: 0,
        color: "#c33549"
      }
    ]);

    setAddCard(false);
  };

  let _handleOnSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };

  return (
    <div className="content-wrapper">
      <Header onSearchChange={_handleOnSearchChange} />
      <div className="content">
        <div className="left">
          <div className="recent-folders-section">
            <h3 className="text">recent folders</h3>
            <div className="folders">
              {filteredFolders
                ? filteredFolders.map((folder: any, index: number) => (
                    <Folder
                      key={index}
                      name={folder.name}
                      showNotification={folder.showNotification}
                    />
                  ))
                : folders.map((folder, index) => (
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
              {addCard ? (
                <AddProjectCard onClick={_handleOnAddNewCard} />
              ) : null}
            </div>
          </div>
        </div>
        <div className="right">
          <h3 className="text">your tasks</h3>
          <TaskWrapper />
        </div>
      </div>
    </div>
  );
}
