import React from "react";
import "./taskCard.scss";

import RoundCheckBox from "../roundCheckBox/roundCheckBox";

interface TaskCardProps {
  id: string;
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <div className="taskCard-wrapper">
      <RoundCheckBox id={props.id} />
    </div>
  );
}
