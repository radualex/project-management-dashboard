import React from "react";
import "./progressBar.scss";

interface ProgressBarProps {
  tasks: number;
  finishedTasks: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  function _calculateProgress(): number {
    return Math.round((props.finishedTasks / props.tasks) * 100);
  }
  return (
    <div className="progressBar-wrapper">
      <span
        className="progressBar"
        style={{ width: `${_calculateProgress()}%` }}
      ></span>
    </div>
  );
}
