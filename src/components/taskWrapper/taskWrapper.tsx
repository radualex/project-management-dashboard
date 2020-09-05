import React from "react";
import "./taskWrapper.scss";

import TaskCard from "../taskCard/taskCard";

export default function TaskWrapper() {
  return (
    <div className="task-wrapper">
      <TaskCard
        id={"checkbox-1"}
        task={"Better quality favicon"}
        labelColor={"#FF6161"}
        labelText={"Design"}
      />
      <TaskCard
        id={"checkbox-2"}
        task={"Social accounts setup"}
        labelColor={"#90C335"}
        labelText={"Marketing"}
      />
      <TaskCard
        id={"checkbox-3"}
        task={"Upgrade plan page"}
        labelColor={"#985BFF"}
        labelText={"Development"}
      />
      <TaskCard
        id={"checkbox-4"}
        task={"Email templates"}
        labelColor={"#FF6161"}
        labelText={"Design"}
      />
    </div>
  );
}
