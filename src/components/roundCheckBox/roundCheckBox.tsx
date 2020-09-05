import React from "react";
import "./roundCheckBox.scss";

interface RoundCheckBoxProps {
  id: string;
  onChecked:
    | ((event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void)
    | undefined;
}

export default function RoundCheckBox(props: RoundCheckBoxProps) {
  return (
    <div className="roundCheckBox-wrapper">
      <input type="checkbox" id={`${props.id}`} />
      <label htmlFor={`${props.id}`} onClick={props.onChecked}></label>
    </div>
  );
}
