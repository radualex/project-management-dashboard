import React, { useState } from "react";
import "./menu.scss";

import MenuItem from "../menuItem/menuItem";

let menuItems = [
  {
    icon: "dashboard",
    name: "Dashboard"
  },
  {
    icon: "folder",
    name: "Folders"
  },
  {
    icon: "layers",
    name: "Projects"
  },
  {
    icon: "assignment",
    name: "Tasks"
  },
  {
    icon: "settings",
    name: "Settings"
  }
];

export default function Menu() {
  let [active, setActiveMenu] = useState(0);

  let onClick = (index: number) => {
    setActiveMenu(index);
  };

  return (
    <div className="menu-wrapper">
      {menuItems.map((menuItem, index) => (
        <MenuItem
          icon={menuItem.icon}
          name={menuItem.name}
          isActive={active === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}
