import React from "react";
import "./folder.scss";

interface FolderProps {
  name: string;
}

export default function Folder(props) {
  return (
    <div className="folder-wrapper">
      <span className="material-icons">folder_open</span>
      <span className="name">{props.name}</span>
    </div>
  );
}
