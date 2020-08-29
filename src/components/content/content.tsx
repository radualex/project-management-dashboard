import React from "react";
import "./content.scss";

import Header from "../header/header";
import Folder from "../folder/folder";

export default function Content() {
  return (
    <div className="content-wrapper">
      <Header />
      <div className="content">
        <div className="left">
          <div className="recent-folders">
            <h3 className="text">recent folders</h3>
            <Folder name={"Invoices"} />
            <Folder name={"Customers"} showNotification={true} />
          </div>
          <div className="projects">
            <h3 className="text">projects</h3>
          </div>
        </div>
        <div className="right">
          <h3 className="text">your tasks</h3>
        </div>
      </div>
    </div>
  );
}
