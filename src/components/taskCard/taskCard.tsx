import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

import "./taskCard.scss";

import RoundCheckBox from "../roundCheckBox/roundCheckBox";

interface TaskCardProps {
  id: string;
  task?: string;
  labelColor?: string;
  labelText: string;
  children?: ReactNode;
}

export default function TaskCard(props: TaskCardProps) {
  const [checked, setCheckedStatus] = useState(false);

  let _handleOnChecked = () => {
    setCheckedStatus(!checked);
  };

  return (
    <motion.div
      animate={{ background: checked ? "rgba(255,255,255, 0.5)" : "#ffffff" }}
      transition={{ duration: 0.5 }}
      className={`taskCard-wrapper`}
    >
      <div className="taskCard-top">
        <RoundCheckBox id={props.id} onChecked={_handleOnChecked} />
        <span className="task">{props.task}</span>
      </div>
      <div className="taskCard-bottom">
        <label style={{ background: props.labelColor }}>
          {props.labelText}
        </label>
        <div className="slot"> {props.children}</div>
      </div>
    </motion.div>
  );
}
