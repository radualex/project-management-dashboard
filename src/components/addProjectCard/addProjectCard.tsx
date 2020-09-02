import React from "react";
import "./addProjectCard.scss";

interface AddProjectCardProps {
  onClick: Function;
}

export default function AddProjectCard(props: AddProjectCardProps) {
  return (
    <div className="addProjectCard-wrapper" onClick={() => props.onClick()}>
      <i className="material-icons">add</i>
      <span className="addProjectCard-text">Add new</span>
    </div>
  );
}
