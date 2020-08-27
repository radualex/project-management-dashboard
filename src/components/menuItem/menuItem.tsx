import React from "react";
import "./menuItem.scss";

interface MenuItemProps {
  icon: string;
  name: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <div className="menuItem-wrapper">
      <i className="material-icons-outlined">{props.icon}</i>
      <span className="name">{props.name}</span>
    </div>
  );
}
