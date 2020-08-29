import React from "react";
import "./progressBar.scss";

interface ProgressBarProps {
  tasks: number;
  finishedTasks: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="progressBar-wrapper">
      <span className="progressBar" style={{ width: "50%" }}></span>
    </div>
  );
}
