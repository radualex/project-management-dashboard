import React from "react";
import "./taskCard.scss";

import RoundCheckBox from "../roundCheckBox/roundCheckBox";

interface TaskCardProps {
  id: string;
  task?: string;
  labelColor?: string;
  labelText: string;
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <div className="taskCard-wrapper">
      <div className="taskCard-top">
        <RoundCheckBox id={props.id} />
        <span className="task">{props.task}</span>
      </div>
      <div className="taskCard-bottom">
        <label style={{ background: props.labelColor }}>
          {props.labelText}
        </label>
      </div>
    </div>
  );
}
