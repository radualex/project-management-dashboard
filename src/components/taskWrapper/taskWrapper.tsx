import React from "react";
import "./taskWrapper.scss";

import TaskCard from "../taskCard/taskCard";

export default function TaskWrapper() {
  return (
    <div className="task-wrapper">
      <TaskCard id={"checkbox-1"} />
      <TaskCard id={"checkbox-2"} />
      <TaskCard id={"checkbox-3"} />
      <TaskCard id={"checkbox-4"} />
    </div>
  );
}
