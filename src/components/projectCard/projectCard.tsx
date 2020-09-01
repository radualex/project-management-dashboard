import React from "react";
import "./projectCard.scss";

import ProgressBar from "../progressBar/progressBar";

interface ProjectCardProps {
  color: string;
  title: string;
  tasks: number;
  finishedTasks: number;
}

export default function ProjectCard(props: ProjectCardProps) {
  function _extractFirstLetter(word: string) {
    return word.substr(0, 1).toUpperCase();
  }

  return (
    <div className="projectCard-wrapper">
      <div className="left-side">
        <span className="logo" style={{ color: props.color }}>
          {_extractFirstLetter(props.title)}
        </span>
        <span className="title">{props.title}</span>
      </div>
      <div className="right-side">
        <ProgressBar tasks={props.tasks} finishedTasks={props.finishedTasks} />
        <span className="tasks">
          {props.finishedTasks}/{props.tasks}
        </span>
      </div>
    </div>
  );
}
