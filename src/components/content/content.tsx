import React from "react";
import "./content.scss";

import Header from "../header/header";

export default function Content() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="content">
        <div className="left">
          <div className="recent-folders">
            <h3 className="text">RECENT FOLDERS</h3>
          </div>
          <div className="projects">
            <h3 className="text">PROJECTS</h3>
          </div>
        </div>
        <div className="right">
          <h3 className="text">YOUR TASKS</h3>
        </div>
      </div>
    </div>
  );
}
