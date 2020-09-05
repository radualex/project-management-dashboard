import React, { useState, useEffect } from "react";
import moment from "moment";

import "./header.scss";

interface HeaderProps {
  onSearchChange: any;
}

export default function Header(props: HeaderProps) {
  const momentDate = moment(new Date());

  const [currentTime, setCurrentTime] = useState(momentDate.format("HH:mm"));
  const [dayOfWeek] = useState(momentDate.format("DD"));
  const [month] = useState(momentDate.format("MMMM"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment(new Date()).format("HH:mm"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-wrapper">
      <div className="searchBar">
        <i className="material-icons">search</i>
        <input
          className="searchBar-content"
          placeholder="Search"
          onChange={(e) => props.onSearchChange(e)}
        ></input>
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
