import React from "react";
import "./projectCard.scss";

import ProgressBar from "../progressBar/progressBar";

interface ProjectCardProps {
  color: string;
  tasks: number;
  finishedTasks: number;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="projectCard-wrapper">
      <ProgressBar tasks={props.tasks} finishedTasks={props.finishedTasks} />
    </div>
  );
}
