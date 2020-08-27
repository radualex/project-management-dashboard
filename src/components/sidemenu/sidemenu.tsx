import React from "react";
import "./sidemenu.scss";

import Menu from "../menu/menu";
import ProfileCard from "../profileCard/profileCard";

export default function SideMenu() {
  return (
    <div className="sidemenu">
      <span className="logo">S</span>
      <Menu />
      <hr className="separator" />
      <ProfileCard name={"Devin Lee"} />
      {/* profile card */}
    </div>
  );
}
