import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="searchBar">
        <i className="material-icons">search</i>
        <input className="searchBar-content" placeholder="Search"></input>
      </div>
    </div>
  );
}
