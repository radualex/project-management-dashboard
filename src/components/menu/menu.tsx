import React from "react";
import "./menu.scss";

import MenuItem from "../menuItem/menuItem";

export default function Menu() {
  return (
    <div className="menu-wrapper">
      <MenuItem icon={"dashboard"} name={"Dashboard"} />
      <MenuItem icon={"folder"} name={"Folders"} />
      <MenuItem icon={"layers"} name={"Projects"} />
      <MenuItem icon={"assignment"} name={"Tasks"} />
      <MenuItem icon={"settings"} name={"Settings"} />
    </div>
  );
}
