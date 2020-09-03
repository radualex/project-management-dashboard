import React, { useState } from "react";
import moment from "moment";

import "./header.scss";

export default function Header() {
  const momentDate = moment(new Date());

  const [currentTime] = useState(momentDate.format("HH:mm"));
  const [dayOfWeek] = useState(momentDate.format("DD"));
  const [month] = useState(momentDate.format("MMMM"));

  return (
    <div className="header-wrapper">
      <div className="searchBar">
        <i className="material-icons">search</i>
        <input className="searchBar-content" placeholder="Search"></input>
      </div>
      <i className="material-icons-outlined">mail</i>
      <i className="material-icons-outlined notification">notifications</i>
      <div className="date-time">
        <span className="time">{currentTime}</span>
        <span className="date">
          {dayOfWeek} {month}
        </span>
      </div>
    </div>
  );
}
