import React from "react";
import "./folder.scss";

interface FolderProps {
  name: string;
  showNotification?: boolean;
}

export default function Folder(props: FolderProps) {
  return (
    <div className="folder-wrapper">
      {props.showNotification ? <i className="notification"></i> : ""}
      <i className="material-icons">folder</i>
      <span className="name">{props.name}</span>
    </div>
  );
}
