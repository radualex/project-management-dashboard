import React from "react";
import "./sidemenu.scss";

import Menu from "../menu/menu";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <span className="logo">S</span>
      <Menu />
      <hr className="separator" />
      {/* profile card */}
    </div>
  );
}
