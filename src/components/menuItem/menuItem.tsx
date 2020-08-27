import React from "react";
import "./menuItem.scss";

interface MenuItemProps {
  icon: string;
  name: string;
  onClick: Function;
  isActive: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div
      className={`menuItem-wrapper ${props.isActive ? "active" : ""}`}
      onClick={() => props.onClick()}
    >
      <i className="material-icons-outlined">{props.icon}</i>
      <span className="name">{props.name}</span>
    </div>
  );
}
