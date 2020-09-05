import React, { useState } from "react";
import "./taskCard.scss";

import RoundCheckBox from "../roundCheckBox/roundCheckBox";

interface TaskCardProps {
  id: string;
  task?: string;
  labelColor?: string;
  labelText: string;
}

export default function TaskCard(props: TaskCardProps) {
  const [checked, setCheckedStatus] = useState(false);

  let _handleOnChecked = () => {
    setCheckedStatus(!checked);
  };

  return (
    <div className={`taskCard-wrapper ${checked ? "reduce-opacity" : ""}`}>
      <div className="taskCard-top">
        <RoundCheckBox id={props.id} onChecked={_handleOnChecked} />
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
