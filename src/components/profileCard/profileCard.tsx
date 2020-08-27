import React from "react";
import "./profileCard.scss";

interface ProfileCardProps {
  name: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profileCard-wrapper">
      {/* Avatar */}
      <span className="name">{props.name}</span>
      <span className="material-icons">keyboard_arrow_right</span>
      {/* Arrow icon */}
    </div>
  );
}
