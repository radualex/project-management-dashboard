import React from "react";
import "./profileCard.scss";

interface ProfileCardProps {
  name: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profileCard-wrapper">
      <img src="https://source.unsplash.com/jzY0KRJopEI/640x640" alt="avatar" />
      <span className="name">{props.name}</span>
      <span className="material-icons">keyboard_arrow_right</span>
    </div>
  );
}
